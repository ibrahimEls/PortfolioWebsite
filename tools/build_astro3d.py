#!/usr/bin/env python3
"""Prepare one Astrolabe case for the interactive 3D figure.

The source is the web3d export (manifest.json + data/<case>/<field>/*), the
particle data behind the cinematic movies. This script

  1. copies the case's binaries under blog/astrolabe-assets/sim/<case>/,
  2. adds what the export lacks for the evolution keyframes: a smoothing
     length per particle (distance to the 8th nearest exported neighbour,
     periodic), as one uint8 per particle on the export's own log scale, so
     the point sprites can be adaptive at every redshift and not only at
     z = 0,
  3. calibrates the colour scale exactly the way the movie script does: the
     20th and 99.98th percentiles of log10(column density / mean column) in
     the z = 0 truth frame at the movie's starting view,
  4. writes figure.json, the one file the widget reads.

Usage:  python3 tools/build_astro3d.py <export_dir> <case> [<data_root>]

<data_root> is the data repository (default AstrolabeData/, the clone of
github.com/ibrahimEls/AstrolabeData kept in this folder, published at
https://ibrahimels.github.io/AstrolabeData); the case goes to
<data_root>/<case>/ and is listed in <data_root>/index.json, which the widget
reads for its simulation menu.

Needs numpy and scipy (cKDTree); nothing else.
"""
import json
import math
import os
import shutil
import sys

import numpy as np

K_NEIGHBOUR = 8            # h = distance to the 8th nearest exported neighbour
# what is published: the N-body truth and the Astrolabe fields
def publish(field_name):
    return field_name == "truth" or field_name.startswith(("small", "medium"))
SIGMA_OVER_H = 0.6         # sprite Gaussian sigma, as a fraction of h
HAZE_SIGMA_1080 = 6.0      # haze Gaussian sigma in px at a 1080 px frame
LEVELS_PX = (1.0, 2.0, 4.0, 8.0, 16.0)


def load_u16(path):
    return np.fromfile(path, dtype='<u2').reshape(-1, 3)


def smoothing_lengths(pos, box):
    """h per particle, periodic in the box, from the exported subset."""
    from scipy.spatial import cKDTree
    p = np.mod(pos, box)
    d, _ = cKDTree(p, boxsize=box).query(p, k=K_NEIGHBOUR + 1, workers=-1)
    return d[:, -1]


def encode_h(h):
    """uint8 on a log scale between the extremes, as the export does."""
    lo, hi = float(h.min()), float(h.max())
    q = np.round(255.0 * np.log(h / lo) / math.log(hi / lo)).astype(np.uint8)
    return q, lo, hi


def gaussian_blur(img, sigma):
    from scipy.ndimage import gaussian_filter
    return gaussian_filter(img, sigma, mode="constant")


def adaptive_smooth(cnt, n_min):
    """The movie's per-pixel smoothing: the narrowest Gaussian whose kernel
    holds n_min particles."""
    stack = [gaussian_blur(cnt, s) for s in LEVELS_PX]
    out = stack[-1]
    for c, s in reversed(list(zip(stack[:-1], LEVELS_PX[:-1]))):
        out = np.where(c * 2.0 * math.pi * s * s >= n_min, c, out)
    return out


def column_density(pos, weight, centre, box, hw, aspect, W, H, elev_deg, theta=0.0):
    """Weighted particle count per pixel of the movie's frame: orthographic
    view at azimuth theta and elevation elev, half-height hw, centred on
    `centre` with the periodic minimum image, clipped to the movie's cylinder."""
    hwx = aspect * hw
    rho = min(1.15 * aspect * hw, box / 2.0)
    ce, se = math.cos(math.radians(elev_deg)), math.sin(math.radians(elev_deg))
    ct, st = math.cos(theta), math.sin(theta)
    px = 2.0 * hw / H
    d = pos - centre
    d -= box * np.round(d / box)
    keep = d[:, 0] ** 2 + d[:, 1] ** 2 < rho ** 2
    d = d[keep]
    sx = d[:, 0] * ct - d[:, 1] * st
    y = d[:, 0] * st + d[:, 1] * ct
    sy = d[:, 2] * ce - y * se
    ix = np.floor((sx + hwx) / px).astype(np.int64)
    iy = np.floor((sy + hw) / px).astype(np.int64)
    ok = (ix >= 0) & (ix < W) & (iy >= 0) & (iy < H)
    cnt = np.bincount(iy[ok] * W + ix[ok], minlength=W * H).astype(np.float64)
    return cnt.reshape(H, W)[::-1] * weight, px, rho


def calibrate(case, field, src, movie):
    """lo/hi of the movie's colour quantity in the z = 0 truth frame."""
    box = case["box_kpc_h"]
    W, H = movie["panel_width"], movie["height"]
    aspect = W / H
    hw0 = movie["start_hw_frac"] * box / 2.0 / max(aspect, 1.0)
    e = field["z0"]
    pos = load_u16(os.path.join(src, e["file"])).astype(np.float64) / 65536.0 * box
    weight = 1.0 / case["lod"]["fraction_z0"]
    centre = np.asarray(field["halo_centre_kpc_h"], np.float64)
    cnt, px, rho = column_density(pos, weight, centre, box, hw0, aspect, W, H,
                                  movie["elev"])
    sig = adaptive_smooth(cnt, movie["n_min"]) / px ** 2          # particles per kpc^2
    sigma0 = case["n_particles"] / box ** 2
    depth = 2.0 * rho / box
    v = np.log10(sig / (sigma0 * depth ** movie["depth_gamma"]) + 1e-3)
    # over every pixel the smoothed field reaches, as the movie does: masking
    # on the raw count instead keeps only occupied pixels and drags lo up
    lo, hi = np.percentile(v[sig > 0], [movie["lo_pct"], movie["hi_pct"]])
    return float(lo), float(hi), hw0, v


def write_ppm(path, rgb):
    with open(path, "wb") as fh:
        fh.write(b"P6 %d %d 255\n" % (rgb.shape[1], rgb.shape[0]))
        fh.write(np.ascontiguousarray(rgb, dtype=np.uint8).tobytes())


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__.strip())
    src, case_name = sys.argv[1], sys.argv[2]
    root = sys.argv[3] if len(sys.argv) > 3 else "AstrolabeData"
    out = os.path.join(root, case_name)
    manifest = json.load(open(os.path.join(src, "manifest.json")))
    style = json.load(open(os.path.join(src, "style.json")))
    case = manifest["cases"][case_name]
    box = case["box_kpc_h"]
    md = style["movie_defaults"]
    movie = {"panel_width": style["frame"]["panel_width"],
             "height": style["frame"]["height"],
             "start_hw_frac": md["start_hw_frac"], "final_hw_r200": md["final_hw_r200"],
             "elev": case["camera"]["elev"], "turns": case["camera"]["turns"],
             "theta0": case["camera"]["theta0"],
             "t_evolve": md["t_evolve"] if case["fields"]["truth"].get("series") else 8.0,
             "t_zoom": md["t_zoom"], "t_hold": md["t_hold"],
             "n_min": md["n_min"], "depth_gamma": md["depth_gamma"],
             "lo_pct": md["lo_pct"], "hi_pct": md["hi_pct"],
             "lattice_blur": md["lattice_blur"], "lattice_da": md["lattice_da"]}
    os.makedirs(out, exist_ok=True)

    fields = {}
    for fname, f in case["fields"].items():
        if not publish(fname):
            continue
        fdir = os.path.join(out, fname)
        os.makedirs(fdir, exist_ok=True)

        def take(entry_file):
            dst = os.path.join(fdir, os.path.basename(entry_file))
            if not os.path.exists(dst):
                shutil.copyfile(os.path.join(src, entry_file), dst)
            return os.path.relpath(dst, out)

        series = []
        for s in f.get("series", []):
            pos = load_u16(os.path.join(src, s["file"])).astype(np.float64) / 65536.0 * box
            h = smoothing_lengths(pos, box)
            q, lo, hi = encode_h(h)
            hname = os.path.basename(s["file"]).replace(".u16", "_h.u8")
            q.tofile(os.path.join(fdir, hname))
            series.append({
                "a": s["a"], "z": s["z"], "n": s["n"],
                "file": take(s["file"]),
                "h_file": os.path.join(fname, hname),
                "h_min_kpc_h": lo, "h_max_kpc_h": hi,
                "halo_centre_kpc_h": s["halo_centre_kpc_h"],
            })
            print("  %-8s a=%.4f  h: %.2f .. %.1f kpc/h" % (fname, s["a"], lo, hi))
        z0, halo = f["z0"], f["halo"]
        fields[fname] = {
            "label": style["field_labels"].get(fname, f["label"]),
            "halo_centre_kpc_h": f["halo_centre_kpc_h"],
            "z0": {"file": take(z0["file"]), "h_file": take(z0["h_file"]), "n": z0["n"],
                   "h_min_kpc_h": z0["h_min_kpc_h"], "h_max_kpc_h": z0["h_max_kpc_h"]},
            "halo": {"file": take(halo["file"]), "h_file": take(halo["h_file"]),
                     "n": halo["n"], "fraction": halo["fraction"],
                     "h_min_kpc_h": halo["h_min_kpc_h"], "h_max_kpc_h": halo["h_max_kpc_h"]},
            "series": series,
        }

    lo, hi, hw0, v = calibrate(case, case["fields"]["truth"], src, movie)
    print("colour scale: lo=%.3f hi=%.3f (start half-height %.0f kpc/h)" % (lo, hi, hw0))

    # a reference frame of the calibration view, for checking the widget
    lut = np.asarray(style["colour"]["lut_256_rgb"], np.uint8)
    u = np.clip((v - lo) / (hi - lo), 0.0, 1.0)
    write_ppm(os.path.join(out, "_calibration_truth_z0.ppm"), lut[(u * 255).astype(int)])

    fig = {
        "case": case_name, "title": case["title"],
        "box_kpc_h": box, "n_side": case["n_side"], "n_particles": case["n_particles"],
        "omega_m": case["omega_m"], "h": case["h"],
        "halo": {"R200m_kpc_h": case["halo"]["R200m_kpc_h"],
                 "cutout_radius_kpc_h": case["halo"]["cutout_radius_kpc_h"]},
        "lod": case["lod"],
        "camera": movie,
        "colour": {"lo": lo, "hi": hi, "depth_gamma": movie["depth_gamma"],
                   "lut_256_rgb": style["colour"]["lut_256_rgb"]},
        # sprite sigma as a fraction of h. The movie picks, per pixel, the
        # narrowest Gaussian holding n_min particles: sigma ~ 0.98/sqrt(n),
        # while h = distance to the 8th neighbour ~ 1.6/sqrt(n), so ~0.6 h
        # plus the haze: a Gaussian of the accumulated field taken per pixel
        # as max(sharp, blurred), standing in for the movie's fall-back to
        # coarser levels where a pixel holds too few particles. 6 px at a
        # 1080 px frame matched the movie's percentiles best in a sweep
        "render": {"sigma_over_h": SIGMA_OVER_H,
                   "haze_sigma_1080": HAZE_SIGMA_1080, "haze_gain": 1.0},
        "fields": fields,
        # every field but the truth, the trained models first
        "models": [k for k in ("small", "medium", "small_pre", "small_ft") if k in fields]
                  + sorted(k for k in fields if k not in
                           ("truth", "small", "medium", "small_pre", "small_ft")),
        "evolution": bool(case["fields"]["truth"].get("series")),
    }
    with open(os.path.join(out, "figure.json"), "w") as fh:
        json.dump(fig, fh, separators=(",", ":"))

    # the menu of cases, kept in the order they were built
    ipath = os.path.join(root, "index.json")
    index = json.load(open(ipath)) if os.path.exists(ipath) else {"cases": []}
    entry = {"name": case_name, "title": case["title"],
             "box_kpc_h": box, "evolution": fig["evolution"],
             "models": [fields[m]["label"] for m in fig["models"]]}
    index["cases"] = [c for c in index["cases"] if c["name"] != case_name] + [entry]
    with open(ipath, "w") as fh:
        json.dump(index, fh, indent=1)
    total = sum(os.path.getsize(os.path.join(dp, fn))
                for dp, _, fns in os.walk(out) for fn in fns)
    print("wrote %s  (%.1f MB)" % (os.path.join(out, "figure.json"), total / 1e6))


if __name__ == "__main__":
    main()
