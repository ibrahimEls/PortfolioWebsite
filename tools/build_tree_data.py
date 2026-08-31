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

Every run scans the same points, so the runs share an analytic tree and
differ only in what their agents proposed once the standard experiments
run out. One invocation reads them all and publishes a single tree per
Lagrangian class, with each run's proposals hanging off the leaf they
were made at and tagged by run.

Usage:  python3 tools/build_tree_data.py <out_dir> <slug:Label:src_dir>...
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
    encoded in the child's id suffix, _o0 or _o1. That says nothing about
    what the answers mean, so this is only a placeholder: name_outcomes()
    replaces it with the agent's own names wherever the replies are on hand.
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
                    "lit": proposal(leaf.get("lit_review")),
                    "novel": [proposal(n) for n in leaf.get("novel", [])],
                }
    return out, repaired


# What the agent said about a proposal, in the order the panel shows it.
# The later runs explain the observable before justifying it; the earlier
# ones jump straight to the justification, so a field is carried only when
# the run actually produced it.
NOTE_FIELDS = [("what_this_is", "what"),
               ("reasoning", "reasoning"),
               ("feasibility", "feasibility")]


def note(d):
    out = {}
    for src, dst in NOTE_FIELDS:
        v = (d.get(src) or "").strip()
        if v:
            out[dst] = v
    return out or None


def proposal(d):
    """One agent proposal: its commentary and the names of its outcomes.

    The DOT only encodes an outcome as _o0, _o1, _o2 in the child id, which
    says nothing about what those answers mean and collides as soon as a
    proposal has more than two. The agent named them, so take the names
    from here and let them override the guess.
    """
    if not d:
        return None
    labels = [(o.get("label") or "").strip()
              for o in (d.get("outcomes") or [])]
    if not any(labels):
        labels = []
    return {"note": note(d), "outcomes": labels}


def attach_reasoning(tree, by_leaf):
    """Put each agent note on the node it belongs to, matching by node id."""
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
        hit = target.get(n["id"])
        if hit:
            if hit.get("note"):
                n["notes"] = hit["note"]
            if hit.get("outcomes"):
                name_outcomes(n, hit["outcomes"])
            hits[0] += 1
        for c in n.get("children", []):
            apply(c)
    apply(tree)
    return hits[0], len(target)


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

def parse_run(spec):
    """A run is one scan of the whole pipeline: "slug:Label:src_dir"."""
    slug, label, src = spec.split(":", 2)
    return {"slug": slug, "label": label, "src": src}


def dot_files(src):
    """The DOT files of a run, wherever that run's exporter put them."""
    found = []
    for base, _dirs, files in os.walk(src):
        if "responses" in base.split(os.sep):
            continue
        found += [os.path.join(base, f) for f in files if f.endswith(".dot")]
    return sorted(found)

def collect_run(run):
    """Parse one run's trees; returns {key: {tree, stats, title}}."""
    src = run["src"]
    print("\n=== %s (%s) ===" % (run["label"], src))
    responses, repaired = load_responses(os.path.join(src, "responses"))
    text_trees = {}
    for base, _dirs, files in os.walk(src):
        for fn in files:
            if fn.endswith("_no_llm.text"):
                key = fn[:-len("_no_llm.text")]
                text_trees[key] = parse_text_tree(os.path.join(base, fn))
    if repaired:
        print("recovered truncated JSON in:", ", ".join(repaired), "\n")

    parsed = []
    for path in dot_files(src):
        fn = os.path.basename(path)
        nodes, edges, title = parse_dot(path)
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

    out = {}
    print("\nselected:")
    for key, variants in groups.items():
        best = max(variants, key=lambda v: (v["llm"] > 0, v["stats"]["nodes"]))
        title = best["title"] or next(
            (v["title"] for v in variants if v["title"]), None)
        got, want = attach_reasoning(best["tree"], responses.get(key, {}))
        if key in text_trees:
            attach_models(best["tree"], text_trees[key])
        out[key] = {"tree": best["tree"], "stats": best["stats"],
                    "title": title}
        print("  %-46s <- %-38s %s%s"
              % (display_name(key), best["stem"] + ".dot",
                 "(has LLM)" if best["llm"] else "",
                 "  reasoning %d/%d" % (got, want) if want else ""))
    return out


# --- merging the runs --------------------------------------------------
#
# Every run scans the same points, so the analytic part of a tree - the
# chain of yes/no answers to the experiments already in the pipeline - is
# the same in all of them. What differs is what each run's agents proposed
# once those questions run out. So the published tree carries one analytic
# skeleton with every run's proposals hanging off the leaf they were made
# at, tagged by which run made them, and the walk offers one branch per
# run at that point instead of a single unlabelled "follow the agent".


def is_agent_child(child):
    return child.get("branch") == "LLM split"


def analytic_kids(node):
    return [c for c in node.get("children", []) if not is_agent_child(c)]


def skeleton(node):
    """The analytic spine, as (id, pts) pairs, for cross-run comparison."""
    out = [(node["id"], node.get("pts"))]
    for c in analytic_kids(node):
        out += skeleton(c)
    return out


def tag_subtree(node, slug, label):
    """Mark a proposal subtree with the run that produced it.

    Ids are namespaced at the same time: the runs name their agent nodes
    identically (root_no_no_yes_lit in both), so without this the viewer
    would key two different proposals to one node.
    """
    node["agent"] = slug
    node["agentLabel"] = label
    node["id"] = slug + "::" + node["id"]
    for c in node.get("children", []):
        tag_subtree(c, slug, label)


def merge_nodes(items):
    """items: [(slug, label, node)], the same analytic node in each run."""
    _slug0, _label0, n0 = items[0]
    out = dict((k, v) for k, v in n0.items() if k != "children")
    kids = []
    for i, _c0 in enumerate(analytic_kids(n0)):
        kids.append(merge_nodes([(s, l, analytic_kids(n)[i])
                                 for s, l, n in items]))
    for slug, label, n in items:
        for c in n.get("children", []):
            if is_agent_child(c):
                c = json.loads(json.dumps(c))       # the runs keep their own
                tag_subtree(c, slug, label)
                kids.append(c)
    if kids:
        out["children"] = kids
    return out


def merge_key(key, per_run, runs):
    """One published tree for a key, over whichever runs produced it."""
    items = [(r["slug"], r["label"], per_run[r["slug"]][key]["tree"])
             for r in runs if key in per_run[r["slug"]]]
    if len(items) > 1:
        ref = skeleton(items[0][2])
        for slug, _label, tree in items[1:]:
            if skeleton(tree) != ref:
                sys.exit("%s: %s's analytic tree differs from %s's; the runs "
                         "cannot be merged" % (key, slug, items[0][0]))
    tree = merge_nodes(items)
    annotate(tree)
    return tree, [s for s, _l, _t in items]


def main():
    if len(sys.argv) < 3:
        sys.exit(__doc__.strip())
    out_dir, specs = sys.argv[1], sys.argv[2:]
    os.makedirs(out_dir, exist_ok=True)
    runs = [parse_run(s) for s in specs]

    per_run = {}
    for run in runs:
        per_run[run["slug"]] = collect_run(run)

    keys = []
    for run in runs:
        for key in per_run[run["slug"]]:
            if key not in keys:
                keys.append(key)

    print("\n=== merged ===")
    manifest = []
    for key in keys:
        tree, slugs = merge_key(key, per_run, runs)
        acc = totals(tree, {"nodes": 0, "depth": 0, "_d": 0})
        acc.pop("_d")
        title = next((per_run[s][key]["title"] for s in slugs
                      if per_run[s][key]["title"]), None)
        disp = display_name(key)
        agents = [{"slug": r["slug"], "label": r["label"]}
                  for r in runs if r["slug"] in slugs]
        base = key.replace(".", "_") + ".json"
        with open(os.path.join(out_dir, base), "w") as fh:
            json.dump({"name": key, "display": disp, "group": group_of(key),
                       "sourceTitle": title, "agents": agents,
                       "tree": tree, "stats": acc},
                      fh, separators=(",", ":"))
        manifest.append({
            "name": key, "display": disp, "group": group_of(key),
            "file": base, "agents": agents,
            "nodes": acc["nodes"], "depth": acc["depth"],
            "leaves": acc.get("leaf", 0), "lit": acc.get("lit", 0),
            "novel": acc.get("novel", 0),
        })
        print("  %-46s %4d nodes  %2d lit  %2d novel  <- %s"
              % (disp, acc["nodes"], acc.get("lit", 0), acc.get("novel", 0),
                 ", ".join(slugs)))

    manifest.sort(key=lambda m: -m["nodes"])
    with open(os.path.join(out_dir, "index.json"), "w") as fh:
        json.dump({"trees": manifest, "runs":
                   [{"slug": r["slug"], "label": r["label"]} for r in runs]},
                  fh, separators=(",", ":"))

    total = sum(os.path.getsize(os.path.join(b, f))
                for b, _d, fs in os.walk(out_dir) for f in fs)
    print("\n%d tree(s) published from %d run(s), %.1f KB total"
          % (len(manifest), len(runs), total / 1e3))


if __name__ == "__main__":
    main()
