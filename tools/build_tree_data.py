#!/usr/bin/env python3
"""Convert the exported constraint-tree DOT files into JSON for the viewer.

The source is the for_website export of the aggregated LLM run: DOT files
under dot/, and the agents' commentary as clean JSON under json/, keyed by
leaf id with one splits[] entry per proposal node.

Node type is carried by fillcolor in the DOT:
    lightblue   standard experimental probe (a yes/no question)
    gold        LLM-agent literature split over existing data
    palegreen   LLM-agent literature projection (a planned measurement)
    orange      LLM-agent novel observable proposal
    lightgrey   leaf reached through standard probes
    lightyellow leaf reached through an LLM branch

Proposal nodes are named <leaf>_s<k>, matching splits[k] of that leaf's
card, and their outcome leaves <split>_o<j>. Two projection nodes carry an
OR-alternative drawn as a second card in the same box.

Usage:  python3 tools/build_tree_data.py <src_dir> <out_dir> \
            [<key>=<no_llm.text> ...]

The optional key=table arguments attach per-leaf Lagrangian compositions
(the "Which Lagrangians" buttons) from a composition table whose base tree
must match the exported one.
"""
import html
import json
import os
import re
import sys
TYPE_BY_COLOR = {
    "lightblue": "probe",
    "gold": "lit",
    "palegreen": "proj",
    "orange": "novel",
    "lightgrey": "leaf",
    "lightyellow": "leaf",
}
NODE_RE = re.compile(r'^\s*([A-Za-z0-9_]+)\s*\[(.*)\]\s*;?\s*$')
EDGE_RE = re.compile(
    r'^\s*([A-Za-z0-9_]+)\s*->\s*([A-Za-z0-9_]+)\s*(?:\[(.*)\])?\s*;?\s*$')
LEAF_RE = re.compile(
    r'([\d,]+)\s*pts?,\s*([\d,]+)\s*regions?,\s*([\d,]+)\s*lagrangians?')
ARXIV_RE = re.compile(r'arXiv:\s*([a-z\-]+/\d{7}|[\d.]+)')
def split_label(attrs):
    """Pull the label out of an attribute blob; returns (text, is_html)."""
    # the closer can be followed by a comma, the end, or just the next
    # space-separated attribute, depending on which tool wrote the dot
    m = re.search(r'label=<(.*)>\s*(?:,|$|(?=\w+=))', attrs, re.S)
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
        text = html.unescape(text).replace('\u200a', '').strip()
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
# a second proposal drawn in the same box, separated by an OR row
OR_ROW = re.compile(r'</TD>\s*</TR>\s*<HR/>\s*<TR>\s*<TD>\s*<B>\s*OR\s*'
                    r'</B>\s*</TD>\s*</TR>\s*<HR/>\s*<TR>\s*<TD>', re.I)

# a reference line in a label; the id can wrap across a line break, so the
# continuation chunk is matched on its own too. Refs are re-attached from
# the export's JSON, which carries them unbroken.
REF_LINE = re.compile(r'arXiv:|^[a-z\-]{2,10}/\d{6,7},?$')


def parse_card(lines):
    """One agent card: bold kind header, title, criterion and verdicts."""
    card = {"kind": lines[0][0]}
    body = [t for t, b in lines[1:] if not b]
    tail = [t for t, b in lines[1:] if b]      # Status:/Feasibility:

    keep = [t for t in body if not REF_LINE.search(t)]

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
    card["label"] = join_wrapped(title) or card["kind"]
    if crit:
        card["criterion"] = join_wrapped(crit)
    for t in tail:
        if t.lower().startswith("status"):
            card["status"] = t.split(":", 1)[1].strip()
        elif t.lower().startswith("feasibility"):
            card["feasibility"] = t.split(":", 1)[1].strip()
    return card


def parse_node(nid, attrs):
    color = (re.search(r'fillcolor=([A-Za-z0-9#"]+)', attrs) or [None, ""])[1]
    color = color.strip('"')
    ntype = TYPE_BY_COLOR.get(color, "probe")
    raw, is_html = split_label(attrs)

    node = {"id": nid, "type": ntype}

    if is_html and OR_ROW.search(raw):
        main_raw, alt_raw = OR_ROW.split(raw, 1)
        node.update(parse_card(html_lines(main_raw)))
        node["alt"] = parse_card(html_lines(alt_raw))
        return node

    if is_html:
        lines = html_lines(raw)
        if not lines:
            node["label"] = ""
            return node
        if any(b for _t, b in lines):
            node.update(parse_card(lines))
            return node
        text = join_wrapped([t for t, _b in lines])
    else:
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
    """Read a branch from the child id where the DOT edge carries no label.

    Proposal nodes are named <leaf>_s<k>; entering one is following the
    agent, wherever the edge starts from. An outcome child extends its
    split's id with _o<j>; that placeholder branch is renamed later from
    the outcome labels in the export's JSON.
    """
    if re.search(r'_s\d+$', child_id):
        return "LLM split"
    if not child_id.startswith(parent_id + "_"):
        return ""
    suffix = child_id[len(parent_id) + 1:]
    m = re.fullmatch(r'o(\d+)', suffix)
    if m:
        return "observed" if m.group(1) == "0" else "not observed"
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


# --- model ids -> human-readable names -------------------------------------
# readable_model_id is the project's own function, used verbatim so the names
# here match the ones used elsewhere in the pipeline.

_RT = {"R": "Real", "C": "Complex"}
_RS = {"s": "Scalar", "m": "Majorana", "d": "Dirac", "v": "Vector"}
_RR = {"Sg": "Singlet", "Dh": "Doublet", "Dz": "Doublet",
       "Tr": "Triplet", "Tc": "Triplet"}
_FTOK = re.compile(r"^(\d*)([RC])([smdv])(Sg|Dh|Dz|Tr|Tc)$")
def readable_model_id(mid, with_count=True, with_orders=True):
    """Human-readable name for a merged model id, with or without a ':N'
    count suffix."""
    s = str(mid).strip()

    count = None
    m = re.search(r":(\d+)\s*$", s)
    if m:
        count = int(m.group(1))
        s = s[: m.start()]

    otag = None
    m = re.search(r"\.(Z[\d+]+|Zx)$", s)
    if m:
        otag = m.group(1)
        s = s[: m.start()]

    m = re.match(r"^Z(\d+)_(.*)$", s)
    if m:
        otag = otag or "Z%s" % m.group(1)
        s = m.group(2)

    s = re.sub(r"_DM$", "", s)

    u1p = None
    m = re.search(r"_U1p\[([^\]]*)\]$", s)
    if m:
        u1p = m.group(1)
        s = s[: m.start()]

    units, toks = [], [t for t in s.split("_") if t]
    for tok in toks:
        tm = _FTOK.match(tok)
        if not tm:
            return str(mid)
        copies, ty, spn, rep = tm.groups()
        units += ["%s %s %s" % (_RT[ty], _RS[spn], _RR[rep])] * (int(copies or 1))

    groups = []
    for u in units:
        if groups and groups[-1][0] == u:
            groups[-1] = (u, groups[-1][1] + 1)
        else:
            groups.append((u, 1))
    out = " + ".join("%dx %s" % (c, lbl) if c > 1 else lbl
                     for lbl, c in groups)

    if u1p is not None:
        hyper = any(_FTOK.match(t) and _FTOK.match(t).group(4) == "Dh"
                    for t in toks)
        sign = u1p if (hyper and u1p in ("+", "-")) else ""
        out += " + dark U(1)%s" % sign

    if with_orders and otag:
        out += " [%s]" % otag
    if with_count and count is not None:
        out += " ({:,} pts)".format(count)
    return out


def parse_text_tree(path):
    """Leaf composition from the plain-text tree: node id -> models."""
    out = {}
    stack, pending = [], None
    for raw in open(path):
        line = raw.rstrip("\n")
        if not line.strip() or line.strip().startswith("```"):
            continue
        indent = len(line) - len(line.lstrip(" "))
        text = line.strip()

        m = re.match(r"^(YES|NO):$", text)
        if m:
            while stack and stack[-1][0] >= indent:
                stack.pop()
            stack.append((indent, m.group(1).lower()))
            pending = None
            continue

        m = re.match(r"^LEAF\s+([\d,]+)\s+pts", text)
        if m:
            while stack and stack[-1][0] >= indent:
                stack.pop()
            nid = "root" + "".join("_" + b for _, b in stack)
            pending = nid
            out[nid] = {"models": [], "signature": ""}
            continue

        if pending and re.match(r"^[\d,]+\s+pts\s", text):
            body = text.split(" pts ", 1)[1]
            ids, _, sig = body.partition(": ")
            models = []
            for part in ids.split(","):
                part = part.strip()
                if not part:
                    continue
                mm = re.match(r"^(.*):(\d+)$", part)
                raw_id = mm.group(1) if mm else part
                models.append({
                    "id": raw_id,
                    "name": readable_model_id(raw_id, with_count=False),
                    "pts": int(mm.group(2)) if mm else None,
                })
            out[pending]["models"] = models
            out[pending]["signature"] = sig.strip()
            pending = None
            continue

        while stack and stack[-1][0] >= indent:
            stack.pop()
        pending = None
    return out


def attach_models(tree, by_leaf):
    """Put each leaf's composition on its node; descendants of a leaf that
    an agent split further inherit it, flagged so the page can say so."""
    def walk(n, inherited):
        own = by_leaf.get(n["id"])
        if own and own["models"]:
            n["models"] = own["models"]
            if own["signature"]:
                n["signature"] = own["signature"]
            inherited = own["models"]
        elif inherited and not n.get("children"):
            n["models"] = inherited
            n["modelsInherited"] = True
        for c in n.get("children", []):
            walk(c, inherited)
    walk(tree, None)
# What the agent said about a proposal, in the order the panel shows it.
NOTE_FIELDS = [("what_this_is", "what"),
               ("why_novel", "why"),
               ("reasoning", "reasoning"),
               ("feasibility", "feasibility")]


def note(d):
    out = {}
    for src, dst in NOTE_FIELDS:
        v = (d.get(src) or "").strip()
        if v:
            out[dst] = v
    return out or None


def clean_refs(refs):
    return [r.replace("arXiv:", "").strip() for r in refs]


def load_responses(src):
    """Leaf payloads keyed tree -> leaf_id, from the export's json/ tree."""
    out = {}
    gdir = os.path.join(src, "json", "global-tree")
    if os.path.isdir(gdir):
        for fn in sorted(os.listdir(gdir)):
            if not fn.endswith(".json"):
                continue
            data = json.load(open(os.path.join(gdir, fn)))
            for leaf in data.get("leaves", []):
                out.setdefault("global_tree", {})[leaf["leaf_id"]] = leaf
    pdir = os.path.join(src, "json", "per-model")
    if os.path.isdir(pdir):
        for fn in sorted(os.listdir(pdir)):
            if not fn.endswith(".json"):
                continue
            data = json.load(open(os.path.join(pdir, fn)))
            for leaf in data.get("leaves", []):
                out.setdefault(fn[:-5], {})[leaf["leaf_id"]] = leaf
    return out


def attach_reasoning(tree, by_leaf):
    """Attach each split's commentary to its node, <leaf>_s<index>."""
    index = {}

    def collect(n):
        index[n["id"]] = n
        for c in n.get("children", []):
            collect(c)
    collect(tree)

    hits, want = 0, 0
    for lid, leaf in by_leaf.items():
        for k, sp in enumerate(leaf.get("splits", [])):
            want += 1
            n = index.get("%s_s%d" % (lid, k))
            if n is None:
                continue
            hits += 1
            nt = note(sp)
            if nt:
                n["notes"] = nt
            if sp.get("refs"):
                n["refs"] = clean_refs(sp["refs"])
            labels = [(o.get("label") or "").strip()
                      for o in sp.get("outcomes", [])]
            if any(labels):
                name_outcomes(n, labels)
            alt = sp.get("proposed_novel_alternative")
            if alt and n.get("alt") is not None:
                if alt.get("refs"):
                    n["alt"]["refs"] = clean_refs(alt["refs"])
                antt = note(alt)
                if antt:
                    n["altNotes"] = antt
    return hits, want
def number_unnamed_outcomes(node):
    """Number a many-way split the replies did not name.

    The id-derived placeholder only has two values, so a three-way split
    with no replies on hand ends up with two branches both reading "not
    observed" and nothing to tell them apart.
    """
    kids = [c for c in node.get("children", [])
            if re.fullmatch(re.escape(node["id"]) + r'_o(\d+)', c["id"])]
    if len(kids) > 2 and all(c.get("branch") in ("observed", "not observed")
                             for c in kids):
        for c in kids:
            k = int(c["id"].rsplit("_o", 1)[1])
            c["branch"] = "outcome %d" % (k + 1)
    for c in node.get("children", []):
        number_unnamed_outcomes(c)


def name_outcomes(node, labels):
    """Rename a proposal's outcome branches to what the agent called them."""
    for c in node.get("children", []):
        m = re.match(r'^%s_o(\d+)$' % re.escape(node["id"]), c["id"])
        if m:
            k = int(m.group(1))
            if k < len(labels) and labels[k]:
                c["branch"] = labels[k]


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
    return re.sub(r'_(base|llm)(_titled)?$', '', stem)


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
    """Only the aggregate tree spans more than one Lagrangian.

    A key naming several Zn assignments is still a single Lagrangian: the
    symmetry assignments produce identical theories, which is why one tree
    covers them all.
    """
    return "many" if key == "global_tree" else "per"


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
    if len(sys.argv) < 3:
        sys.exit(__doc__.strip())
    src, out_dir = sys.argv[1], sys.argv[2]
    tables = {}
    for spec in sys.argv[3:]:
        key, path = spec.split("=", 1)
        tables[key] = parse_text_tree(path)
    os.makedirs(out_dir, exist_ok=True)

    responses = load_responses(src)

    parsed = []
    for base, _dirs, files in os.walk(src):
        for fn in sorted(files):
            if not fn.endswith(".dot"):
                continue
            nodes, edges, title = parse_dot(os.path.join(base, fn))
            if not nodes:
                print("skip (no nodes):", fn)
                continue
            tree = build_tree(nodes, edges)
            annotate(tree)
            acc = totals(tree, {"nodes": 0, "depth": 0, "_d": 0})
            acc.pop("_d")
            stem = fn[:-4]
            llm = (acc.get("lit", 0) + acc.get("proj", 0)
                   + acc.get("novel", 0))
            parsed.append({"stem": stem, "key": group_key(stem),
                           "title": title, "tree": tree, "stats": acc,
                           "llm": llm})
            print("%-46s %4d nodes  depth %2d  %3d leaves  %2d lit  %2d proj"
                  "  %2d novel"
                  % (fn, acc["nodes"], acc["depth"], acc.get("leaf", 0),
                     acc.get("lit", 0), acc.get("proj", 0),
                     acc.get("novel", 0)))

    # One entry per model. Prefer the variant carrying LLM nodes; break
    # ties on richness, so a base render never hides the full tree.
    groups = {}
    for p in parsed:
        groups.setdefault(p["key"], []).append(p)

    manifest = []
    print("\nselected:")
    for key, variants in groups.items():
        best = max(variants, key=lambda v: (v["llm"] > 0, v["stats"]["nodes"]))
        title = best["title"] or next(
            (v["title"] for v in variants if v["title"]), None)
        acc = best["stats"]
        got, want = attach_reasoning(best["tree"], responses.get(key, {}))
        number_unnamed_outcomes(best["tree"])
        if key in tables:
            attach_models(best["tree"], tables[key])
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
            "proj": acc.get("proj", 0), "novel": acc.get("novel", 0),
        })
        print("  %-46s <- %-38s %s%s"
              % (disp, best["stem"] + ".dot",
                 "(has LLM)" if best["llm"] else "",
                 "  reasoning %d/%d" % (got, want) if want else ""))

    manifest.sort(key=lambda m: (m["group"] != "many", -m["nodes"]))
    with open(os.path.join(out_dir, "index.json"), "w") as fh:
        json.dump({"trees": manifest}, fh, separators=(",", ":"))
    total = sum(os.path.getsize(os.path.join(out_dir, f))
                for f in os.listdir(out_dir))
    print("\n%d tree(s) published, %.1f KB total"
          % (len(manifest), total / 1e3))


if __name__ == "__main__":
    main()
