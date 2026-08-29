#!/usr/bin/env python3
"""Compact the rl4dm-3dvid export for the web viewer.

Reads the raw per-Lagrangian JSON files and writes a smaller file per
Lagrangian containing the probe table plus PRECOMPUTED head shells.

The shells are the expensive part: each is a central-probability-mass
interval of a Beta marginal, ppf((1-q)/2) .. ppf((1+q)/2), which the
browser has no way to evaluate. Precomputing here keeps the geometry
identical to the paper figures and keeps the page free of numerics.

Usage:  python3 tools/build_3d_data.py <src_dir> <out_dir> [numbers...]
"""

import json
import math
import os
import sys

LEVELS = (0.30, 0.62, 0.86)   # render.levels; central probability mass, NOT sigma
MAX_POINTS = 9000             # cap on probe rows per Lagrangian


# --- regularized incomplete beta, and its inverse by bisection -------------

def _betacf(a, b, x):
    """Continued fraction for the incomplete beta (Numerical Recipes 6.4)."""
    tiny, eps, itmax = 1e-30, 3e-12, 300
    qab, qap, qam = a + b, a + 1.0, a - 1.0
    c = 1.0
    d = 1.0 - qab * x / qap
    if abs(d) < tiny:
        d = tiny
    d = 1.0 / d
    h = d
    for m in range(1, itmax + 1):
        m2 = 2 * m
        aa = m * (b - m) * x / ((qam + m2) * (a + m2))
        d = 1.0 + aa * d
        if abs(d) < tiny:
            d = tiny
        c = 1.0 + aa / c
        if abs(c) < tiny:
            c = tiny
        d = 1.0 / d
        h *= d * c
        aa = -(a + m) * (qab + m) * x / ((a + m2) * (qap + m2))
        d = 1.0 + aa * d
        if abs(d) < tiny:
            d = tiny
        c = 1.0 + aa / c
        if abs(c) < tiny:
            c = tiny
        d = 1.0 / d
        delta = d * c
        h *= delta
        if abs(delta - 1.0) < eps:
            break
    return h


def betainc(a, b, x):
    """Regularized incomplete beta I_x(a, b)."""
    if x <= 0.0:
        return 0.0
    if x >= 1.0:
        return 1.0
    lbeta = (math.lgamma(a + b) - math.lgamma(a) - math.lgamma(b)
             + a * math.log(x) + b * math.log1p(-x))
    front = math.exp(lbeta)
    if x < (a + 1.0) / (a + b + 2.0):
        return front * _betacf(a, b, x) / a
    return 1.0 - front * _betacf(b, a, 1.0 - x) / b


def betappf(a, b, q):
    """Inverse of betainc by bisection; monotone so this is robust."""
    if q <= 0.0:
        return 0.0
    if q >= 1.0:
        return 1.0
    lo, hi = 0.0, 1.0
    for _ in range(80):
        mid = 0.5 * (lo + hi)
        if betainc(a, b, mid) < q:
            lo = mid
        else:
            hi = mid
    return 0.5 * (lo + hi)


def head_interval(alpha, beta, q):
    """Centre and radius per dimension, in unit-cube coords.

    Mirrors _head_interval3 in the figure notebook: the interval is the
    central-probability-mass q of the per-dimension Beta marginal, and the
    centre/radius are its midpoint and half-width.
    """
    ctr, rad = [], []
    for a, b in zip(alpha, beta):
        a = max(float(a), 1e-3)
        b = max(float(b), 1e-3)
        lo = betappf(a, b, (1.0 - q) / 2.0)
        hi = betappf(a, b, (1.0 + q) / 2.0)
        ctr.append(round(0.5 * (lo + hi), 5))
        rad.append(round(max(0.5 * (hi - lo), 1e-3), 5))
    return ctr, rad


# --- conversion -----------------------------------------------------------

def convert(src_path, out_path):
    with open(src_path) as fh:
        d = json.load(fh)

    names = d["params"]["names"]
    n_head = int(d["params"]["n_head_dims"])
    head_index = d["params"]["head_index"]

    # Only params the heads actually cover can be plotted with shells.
    # head_index is null for derived params (mass eigenvalues, mixings).
    plot_names = [n for n, hi in zip(names, head_index)
                  if hi is not None and hi < n_head]
    col_of = {n: i for i, n in enumerate(d["points"]["columns"])}

    rows_in = d["points"]["rows"]
    step = max(1, math.ceil(len(rows_in) / MAX_POINTS))
    rows = []
    for i, r in enumerate(rows_in):
        if step > 1 and r[col_of["outcome"]] != "viable" and i % step:
            continue  # thin the excluded cloud only; never drop a viable point
        out = [r[col_of["turn"]], 1 if r[col_of["outcome"]] == "viable" else 0]
        out += [round(float(r[col_of[n]]), 6) for n in plot_names]
        rows.append(out)

    # shells[turn] = [ per head: [ per level: [ [c...], [r...] ] ] ]
    shells = {}
    for h in d["heads"]:
        a = h["alpha"][:n_head]
        b = h["beta"][:n_head]
        per_level = []
        for q in LEVELS:
            ctr, rad = head_interval(a, b, q)
            per_level.append([ctr, rad])
        shells.setdefault(str(h["turn"]), []).append(per_level)

    hi_of = {n: head_index[names.index(n)] for n in plot_names}

    out = {
        "number": d["lagrangian"]["number"],
        "cls": d["lagrangian"]["class"],
        "model": d["lagrangian"].get("model_name"),
        "d": d["lagrangian"]["d"],
        "nViable": d["episode"]["n_viable"],
        "nProbes": d["episode"]["n_probes"],
        "params": plot_names,
        "headIndex": [hi_of[n] for n in plot_names],
        "kind": {n: d["params"]["kind"][n] for n in plot_names},
        "bounds": {n: d["params"]["bounds"][n] for n in plot_names},
        "axes": d["axes"],
        "turns": [{"t": t["turn"], "n": t["n_probes"], "v": t["n_viable"],
                   "cum": t["cum_viable"], "h": bool(t["has_heads"])}
                  for t in d["turns"]],
        "cols": ["turn", "viable"] + plot_names,
        "rows": rows,
        "levels": list(LEVELS),
        "alphas": d["render"]["alphas"],
        "tints": d["render"]["tints"],
        "levelMeaning": d["render"]["level_meaning"],
        "shells": shells,
        "sampled": step > 1,
    }

    with open(out_path, "w") as fh:
        json.dump(out, fh, separators=(",", ":"))
    return out, len(rows_in), len(rows)


def main():
    src_dir, out_dir = sys.argv[1], sys.argv[2]
    wanted = {int(x) for x in sys.argv[3:]} if len(sys.argv) > 3 else None

    with open(os.path.join(src_dir, "index.json")) as fh:
        index = json.load(fh)

    os.makedirs(out_dir, exist_ok=True)
    manifest = []
    for entry in sorted(index["lagrangians"], key=lambda e: e["number"]):
        if wanted and entry["number"] not in wanted:
            continue
        name = "lagrangian_%02d.json" % entry["number"]
        out, n_in, n_out = convert(os.path.join(src_dir, entry["file"]),
                                   os.path.join(out_dir, name))
        mb = os.path.getsize(os.path.join(out_dir, name)) / 1e6
        manifest.append({
            "number": out["number"], "cls": out["cls"], "d": out["d"],
            "nViable": out["nViable"], "nTurns": len(out["turns"]),
            "file": name, "axes": out["axes"],
        })
        print("L%-3d %-26s d=%-4d viable=%-5d rows %5d->%-5d  %5.2f MB%s"
              % (out["number"], out["cls"], out["d"], out["nViable"],
                 n_in, n_out, mb, "  (thinned)" if out["sampled"] else ""))

    with open(os.path.join(out_dir, "index.json"), "w") as fh:
        json.dump({"policy": index.get("policy"), "lagrangians": manifest},
                  fh, separators=(",", ":"))
    print("\n%d file(s), %.2f MB total"
          % (len(manifest),
             sum(os.path.getsize(os.path.join(out_dir, f))
                 for f in os.listdir(out_dir)) / 1e6))


if __name__ == "__main__":
    main()
