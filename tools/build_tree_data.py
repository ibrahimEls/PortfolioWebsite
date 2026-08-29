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


BRANCH_ORDER = {"yes": 0, "observed": 0, "no": 1, "not observed": 1}


def outcome_branch(parent_id, child_id):
    """Read an LLM node's outcome from the child id.

    Edges out of an LLM node carry no label in the DOT; the branch is only
    encoded in the child's id suffix, _o0 or _o1, which are the two answers
    to the criterion the agent proposed.
    """
    if not child_id.startswith(parent_id + "_"):
        return ""
    suffix = child_id[len(parent_id) + 1:]
    m = re.match(r'o(\d+)', suffix)
    if m:
        return "observed" if m.group(1) == "0" else "not observed"
    # a surviving outcome region that an agent then proposes to split
    # further: the same transition the dashed leaf -> lit edges represent.
    # Proposals are named novelN or subN; both carry the same index.
    if re.match(r'(?:novel|sub)\d+', suffix):
        return "LLM split"
    return ""


def build_tree(nodes, edges):
    kids = {}
    has_parent = set()
    for e in edges:
        if not e["branch"]:
            e["branch"] = outcome_branch(e["p"], e["c"])
            if e["branch"] == "LLM split":
                e["dashed"] = True     # drawn like the other agent splits
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
        # affirmative branch first, so the tree reads consistently
        ch.sort(key=lambda e: BRANCH_ORDER.get(e["branch"], 2))
        if ch:
            node["children"] = [attach(e["c"], e["branch"], e["dashed"],
                                       depth + 1) for e in ch]
        return node

    if len(roots) != 1:
        raise SystemExit("expected one root, found %d: %s" % (len(roots), roots))
    return attach(roots[0], "", False, 0)


def salvage_json(s):
    """Close a JSON blob that was cut off mid-object.

    One response file is truncated at source, so rather than dropping it
    entirely we trim to the last complete value and balance the brackets.
    """
    def scan(text):
        depth, in_str, esc, last = [], False, False, None
        for i, ch in enumerate(text):
            if in_str:
                if esc:
                    esc = False
                elif ch == '\\':
                    esc = True
                elif ch == '"':
                    in_str = False
                continue
            if ch == '"':
                in_str = True
            elif ch in '{[':
                depth.append(ch)
            elif ch in '}]':
                if depth:
                    depth.pop()
                last = i
        return depth, last

    _, last = scan(s)
    if last is None:
        return None
    head = s[:last + 1]
    depth, _ = scan(head)
    return head + ''.join('}' if c == '{' else ']' for c in reversed(depth))


def load_responses(resp_dir):
    """reasoning keyed by tree name -> leaf_id -> {'lit':…, 'novel':[…]}."""
    out, repaired = {}, []
    if not os.path.isdir(resp_dir):
        return out, repaired
    sources = [("global_tree", os.path.join(resp_dir, "global-tree")),
               (None, os.path.join(resp_dir, "per-model"))]
    for fixed_name, folder in sources:
        if not os.path.isdir(folder):
            continue
        # only the top level; the *-old / stale-* subfolders are superseded
        for fn in sorted(os.listdir(folder)):
            if not fn.endswith(".md"):
                continue
            path = os.path.join(folder, fn)
            blocks = re.findall(r'```json\s*(.*?)```', open(path).read(), re.S)
            if not blocks:
                continue
            try:
                data = json.loads(blocks[-1])
            except ValueError:
                fixed = salvage_json(blocks[-1])
                try:
                    data = json.loads(fixed)
                    repaired.append(fn)
                except (ValueError, TypeError):
                    print("  [warn] unreadable JSON in", fn)
                    continue
            tree = fixed_name or fn[:-3]
            bucket = out.setdefault(tree, {})
            for leaf in data.get("leaves", []):
                lid = leaf.get("leaf_id")
                if not lid:
                    continue
                bucket[lid] = {
                    "lit": (leaf.get("lit_review") or {}).get("reasoning"),
                    "novel": [n.get("reasoning") for n in leaf.get("novel", [])],
                }
    return out, repaired


def attach_reasoning(tree, by_leaf):
    """Put each reasoning on the node it belongs to, matching by node id."""
    ids = []

    def collect(n):
        ids.append(n["id"])
        for c in n.get("children", []):
            collect(c)
    collect(tree)
    idset = set(ids)

    target = {}
    for lid, r in by_leaf.items():
        if r.get("lit") and lid + "_lit" in idset:
            target[lid + "_lit"] = r["lit"]
        for k, text in enumerate(r.get("novel") or []):
            if not text:
                continue
            # the DOT names these <leaf>_lit_o<outcome>_novel<k>, or _sub<k>
            # for the later proposals on the same outcome; the outcome index
            # varies, so find the id that exists rather than guess it
            pat = re.compile(r'^%s_lit_o\d+_(?:novel|sub)%d$'
                             % (re.escape(lid), k))
            hit = next((i for i in ids if pat.match(i)), None)
            if hit:
                target[hit] = text

    hits = [0]

    def apply(n):
        if n["id"] in target:
            n["reasoning"] = target[n["id"]]
            hits[0] += 1
        for c in n.get("children", []):
            apply(c)
    apply(tree)
    return hits[0], len(target)


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
    responses, repaired = load_responses(os.path.join(src_dir, "responses"))
    if repaired:
        print("recovered truncated JSON in:", ", ".join(repaired), "\n")

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
        got, want = attach_reasoning(best["tree"], responses.get(key, {}))
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
        print("  %-46s <- %-38s %s%s"
              % (disp, best["stem"] + ".dot",
                 "(has LLM)" if best["llm"] else "",
                 "  reasoning %d/%d" % (got, want) if want else ""))

    manifest.sort(key=lambda m: -m["nodes"])
    with open(os.path.join(out_dir, "index.json"), "w") as fh:
        json.dump({"trees": manifest}, fh, separators=(",", ":"))
    print("\n%d tree(s) published, %.1f KB total"
          % (len(manifest),
             sum(os.path.getsize(os.path.join(out_dir, f))
                 for f in os.listdir(out_dir)) / 1e3))


if __name__ == "__main__":
    main()
