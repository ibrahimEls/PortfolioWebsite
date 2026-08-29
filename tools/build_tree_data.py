#!/usr/bin/env python3
"""Convert the constraint-tree DOT files into JSON for the web viewer.

Node type is carried by fillcolor in the DOT:
    lightblue   standard experimental probe (a yes/no question)
    gold        LLM-agent literature search
    orange      LLM-agent novel observable proposal
    lightgrey   leaf reached through standard probes
    lightyellow leaf reached through an LLM branch

Labels come in two flavours: a plain quoted string, or a graphviz HTML
label using <B> and <BR/>. Both are parsed into structured fields so the
page can render a detail panel instead of a wall of text.

Usage:  python3 tools/build_tree_data.py <src_dir> <out_dir>
"""

import html
import json
import os
import re
import sys

TYPE_BY_COLOR = {
    "lightblue": "probe",
    "gold": "lit",
    "orange": "novel",
    "lightgrey": "leaf",
    "lightyellow": "leaf",
}

NODE_RE = re.compile(r'^\s*([A-Za-z0-9_]+)\s*\[(.*)\]\s*;?\s*$')
EDGE_RE = re.compile(
    r'^\s*([A-Za-z0-9_]+)\s*->\s*([A-Za-z0-9_]+)\s*(?:\[(.*)\])?\s*;?\s*$')
LEAF_RE = re.compile(
    r'([\d,]+)\s*pts?,\s*([\d,]+)\s*regions?,\s*([\d,]+)\s*lagrangians?')
ARXIV_RE = re.compile(r'arXiv:\s*([\d.]+)')


def split_label(attrs):
    """Pull the label out of an attribute blob; returns (text, is_html)."""
    m = re.search(r'label=<(.*)>\s*(?:,|$)', attrs, re.S)
    if m:
        return m.group(1), True
    m = re.search(r'label="((?:[^"\\]|\\.)*)"', attrs, re.S)
    if m:
        return m.group(1), False
    m = re.search(r'label=([A-Za-z0-9_]+)', attrs)
    return (m.group(1) if m else ""), False


def html_lines(raw):
    """graphviz HTML label -> list of (text, bold)."""
    parts = re.split(r'<BR\s*/?>', raw, flags=re.I)
    out = []
    for p in parts:
        bold = bool(re.search(r'<B>', p, re.I))
        text = re.sub(r'<[^>]+>', '', p)
        text = html.unescape(text).strip()
        if text:
            out.append((text, bold))
    return out


def join_wrapped(lines):
    """Rejoin label lines, honouring words split by a hyphen at the wrap."""
    out = ""
    for t in lines:
        if not out:
            out = t
        elif out.endswith("-") and t[:1].islower():
            out += t                      # 'positron-' + 'endpoint'
        else:
            out += " " + t
    return out


def parse_node(nid, attrs):
    color = (re.search(r'fillcolor=([A-Za-z0-9#"]+)', attrs) or [None, ""])[1]
    color = color.strip('"')
    ntype = TYPE_BY_COLOR.get(color, "probe")
    raw, is_html = split_label(attrs)

    node = {"id": nid, "type": ntype}

    if not is_html:
        text = raw.replace("\\n", " ").strip()
        m = LEAF_RE.search(text)
        if m and ntype == "leaf":
            node["pts"] = int(m.group(1).replace(",", ""))
            node["regions"] = int(m.group(2).replace(",", ""))
            node["lagrangians"] = int(m.group(3).replace(",", ""))
            node["label"] = text
        else:
            node["label"] = text
            if ntype == "leaf":
                node["type"] = "probe"
        return node

    lines = html_lines(raw)
    if not lines:
        node["label"] = ""
        return node

    node["kind"] = lines[0][0]                 # the bold header
    body = [t for t, b in lines[1:] if not b]
    tail = [t for t, b in lines[1:] if b]      # Status:/Feasibility:

    refs = []
    keep = []
    for t in body:
        if ARXIV_RE.search(t):
            refs += ARXIV_RE.findall(t)
        else:
            keep.append(t)
    # The criterion is the trailing question. It can wrap over several DOT
    # lines, so anchor on the first line carrying a comparison operator
    # (arrows removed first, since '->' in a decay chain is not a compare)
    # and fall back to the first line containing '?'.
    def is_start(t):
        return bool(re.search(r'(>=|<=|>~|~<|<~|>|<)',
                              t.replace("->", " ").replace("&gt;", ">")))

    cut = next((i for i, t in enumerate(keep) if is_start(t)), None)
    if cut is None:
        cut = next((i for i, t in enumerate(keep) if "?" in t), len(keep))
    # a formula can wrap before the operator lands, so pull back over lines
    # left hanging by a trailing comma or an unclosed bracket
    while cut > 0:
        prev = keep[cut - 1]
        if (prev.endswith(",") or prev.count("(") > prev.count(")")
                or prev.count("|") % 2):
            cut -= 1
        else:
            break
    title, crit = keep[:cut], keep[cut:]
    node["label"] = join_wrapped(title) or node["kind"]
    if crit:
        node["criterion"] = join_wrapped(crit)
    if refs:
        node["refs"] = refs
    for t in tail:
        if t.lower().startswith("status"):
            node["status"] = t.split(":", 1)[1].strip()
        elif t.lower().startswith("feasibility"):
            node["feasibility"] = t.split(":", 1)[1].strip()
    return node


def parse_dot(path):
    nodes, edges = {}, []
    title = None
    for line in open(path):
        # graph-level statements carry the figure title, not a node
        m = re.match(r'^\s*(graph|node|edge)\s*\[(.*)\]\s*;?\s*$', line)
        if m:
            if m.group(1) == "graph":
                lab, _ = split_label(m.group(2))
                if lab:
                    title = lab.replace("\\n", " — ").strip()
            continue
        if "->" in line:
            m = EDGE_RE.match(line)
            if m and not re.match(r'^\s*[A-Za-z0-9_]+\s*\[', line):
                attrs = m.group(3) or ""
                lm = re.search(r'label="?([^",\]]+)"?', attrs)
                edges.append({
                    "p": m.group(1), "c": m.group(2),
                    "branch": (lm.group(1).strip() if lm else ""),
                    "dashed": "dashed" in attrs,
                })
                continue
        m = NODE_RE.match(line)
        if m:
            nodes[m.group(1)] = parse_node(m.group(1), m.group(2))
    return nodes, edges, title


def build_tree(nodes, edges):
    kids = {}
    has_parent = set()
    for e in edges:
        kids.setdefault(e["p"], []).append(e)
        has_parent.add(e["c"])
    roots = [n for n in nodes if n not in has_parent]

    def attach(nid, branch, dashed, depth):
        node = dict(nodes[nid])
        if branch:
            node["branch"] = branch
        if dashed:
            node["dashed"] = True
        ch = kids.get(nid, [])
        # yes before no, so the tree reads consistently
        ch.sort(key=lambda e: {"yes": 0, "no": 1}.get(e["branch"], 2))
        if ch:
            node["children"] = [attach(e["c"], e["branch"], e["dashed"],
                                       depth + 1) for e in ch]
        return node

    if len(roots) != 1:
        raise SystemExit("expected one root, found %d: %s" % (len(roots), roots))
    return attach(roots[0], "", False, 0)


def annotate(node):
    """Attach subtree totals used by the walk-through panel.

    A node carrying its own pts is authoritative for its region: an LLM
    split subdivides that region further and does not conserve the total
    (a 3086-point region splits into leaves summing 2524). Summing the
    topmost point-carrying nodes reproduces the figure's grand total.
    """
    kids = node.get("children", [])
    for c in kids:
        annotate(c)
    if node.get("pts") is not None:
        pts, regions, lagr = (node["pts"], node["regions"],
                              node["lagrangians"])
    elif kids:
        pts = sum(c["agg"]["pts"] for c in kids)
        regions = sum(c["agg"]["regions"] for c in kids)
        lagr = max(c["agg"]["lagr"] for c in kids)
    else:
        pts = regions = lagr = 0
    node["agg"] = {
        "pts": pts, "regions": regions, "lagr": lagr,
        "leaves": 1 if not kids else sum(c["agg"]["leaves"] for c in kids),
    }


def totals(node, acc):
    acc["nodes"] += 1
    acc[node["type"]] = acc.get(node["type"], 0) + 1
    acc["depth"] = max(acc["depth"], acc["_d"])
    for c in node.get("children", []):
        acc["_d"] += 1
        totals(c, acc)
        acc["_d"] -= 1
    return acc


def group_key(stem):
    """Variants of one model share a key, so only the best is published."""
    return re.sub(r'_(base|llm)_titled$', '', stem)


# Field-content names, matching the paper's table of benchmark classes.
FIELD_ABBR = [
    ("RsSg", "Real Scalar Singlet"),
    ("CsSg", "Complex Scalar Singlet"),
    ("CsDh", "Complex Scalar Doublet"),
    ("RsDh", "Real Scalar Doublet"),
    ("RmSg", "Real Majorana Singlet"),
    ("CdSg", "Complex Dirac Singlet"),
]
SUB = {"2": "Z₂", "3": "Z₃", "4": "Z₄", "5": "Z₅"}


def symmetries(key):
    """The Zn assignments a tree covers, from its filename."""
    m = re.search(r'Z((?:\d\+?)+)',
                  key.split("DM.")[-1] if "DM." in key else key)
    return [SUB[c] for c in m.group(1) if c in SUB] if m else []


def group_of(key):
    """Trees spanning several Zn assignments cover several Lagrangians."""
    if key == "global_tree" or len(symmetries(key)) > 1:
        return "many"
    return "per"


def display_name(key):
    """Decode the filename into the paper's field-content vocabulary.

    Names come from the filename rather than the graph label embedded in the
    _titled DOT files: those labels do not agree with the filenames they sit
    in (CsDh_* carries a "Complex Scalar Singlet" title), so the filename is
    treated as authoritative and the embedded label is kept separately.
    """
    if key == "global_tree":
        return "All Dark-Singlet Lagrangians"

    name = None
    for abbr, full in FIELD_ABBR:
        if abbr in key:
            name = full
            break
    if name is None:
        return key.replace("_", " ")
    if "U1p" in key:
        name += " + U(1)′"
        # .p / .m are distinct models in the source naming; keep them apart
        m = re.search(r'U1p\.([pm])', key)
        if m:
            name += " (" + m.group(1) + ")"
    syms = symmetries(key)
    return name + (", " + ", ".join(syms) if syms else "")


def main():
    src_dir, out_dir = sys.argv[1], sys.argv[2]
    os.makedirs(out_dir, exist_ok=True)

    parsed = []
    for fn in sorted(os.listdir(src_dir)):
        if not fn.endswith(".dot"):
            continue
        nodes, edges, title = parse_dot(os.path.join(src_dir, fn))
        if not nodes:
            print("skip (no nodes):", fn)
            continue
        tree = build_tree(nodes, edges)
        annotate(tree)
        acc = totals(tree, {"nodes": 0, "depth": 0, "_d": 0})
        acc.pop("_d")
        stem = fn[:-4]
        llm = acc.get("lit", 0) + acc.get("novel", 0)
        parsed.append({"stem": stem, "key": group_key(stem), "title": title,
                       "tree": tree, "stats": acc, "llm": llm})
        print("%-42s %4d nodes  depth %2d  %3d leaves  %2d lit  %2d novel"
              % (fn, acc["nodes"], acc["depth"], acc.get("leaf", 0),
                 acc.get("lit", 0), acc.get("novel", 0)))

    # One entry per model. Prefer the variant carrying LLM nodes; break ties
    # on richness, so a pruned figure excerpt never hides the full tree.
    groups = {}
    for p in parsed:
        groups.setdefault(p["key"], []).append(p)

    manifest = []
    print("\nselected:")
    for key, variants in groups.items():
        best = max(variants, key=lambda v: (v["llm"] > 0, v["stats"]["nodes"]))
        # a sibling variant may carry the human-readable graph title
        title = best["title"] or next(
            (v["title"] for v in variants if v["title"]), None)
        acc = best["stats"]
        disp = display_name(key)
        out_name = key.replace(".", "_") + ".json"
        with open(os.path.join(out_dir, out_name), "w") as fh:
            json.dump({"name": key, "display": disp, "group": group_of(key),
                       "sourceTitle": title, "tree": best["tree"],
                       "stats": acc}, fh, separators=(",", ":"))
        manifest.append({
            "name": key, "display": disp, "group": group_of(key),
            "file": out_name,
            "nodes": acc["nodes"], "depth": acc["depth"],
            "leaves": acc.get("leaf", 0), "lit": acc.get("lit", 0),
            "novel": acc.get("novel", 0),
        })
        print("  %-46s <- %-40s %s"
              % (disp, best["stem"] + ".dot",
                 "(has LLM)" if best["llm"] else ""))

    manifest.sort(key=lambda m: -m["nodes"])
    with open(os.path.join(out_dir, "index.json"), "w") as fh:
        json.dump({"trees": manifest}, fh, separators=(",", ":"))
    print("\n%d tree(s) published, %.1f KB total"
          % (len(manifest),
             sum(os.path.getsize(os.path.join(out_dir, f))
                 for f in os.listdir(out_dir)) / 1e3))


if __name__ == "__main__":
    main()
