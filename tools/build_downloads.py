#!/usr/bin/env python3
"""Stage the per-tree downloads the blog post offers.

Two things per tree: the decision tree as the PDF the pipeline rendered,
and the agent replies for it as one Markdown bundle. Everything is keyed
off the tree index, so a tree only gets a row here if the viewer has it.

A run's PDFs are looked for in the roots given for that run, in order and
without recursing, since the same file name (global_tree_llm.pdf) exists
in every run's output directory.

Usage:
  python3 tools/build_downloads.py <trees_index> <out_dir> \\
      <slug>:<Label>:<responses_dir>:<pdf_root>[,<pdf_root>...] ...
"""

import glob
import json
import os
import shutil
import sys


def slug_for(key):
    return key.replace(".", "_").replace("+", "-")


def find_pdf(key, roots):
    """The rendered tree for one key, preferring the LLM-augmented render."""
    pdfs = []
    for root in roots:
        pdfs += sorted(glob.glob(os.path.join(os.path.expanduser(root),
                                              "*.pdf")))
    if key == "global_tree":
        hits = [p for p in pdfs
                if os.path.basename(p) == "global_tree_llm.pdf"]
    else:
        hits = [p for p in pdfs if "[" + key + "]" in os.path.basename(p)]
    llm = [p for p in hits if p.endswith("_llm_tree.pdf")]
    pick = llm or hits
    if not pick:
        return None
    return max(pick, key=os.path.getsize)


def find_responses(key, resp_dir):
    """The agent replies for one key, as the list of files to bundle."""
    resp_dir = os.path.expanduser(resp_dir)
    if key == "global_tree":
        return sorted(glob.glob(os.path.join(resp_dir, "global-tree", "*.md")))
    one = os.path.join(resp_dir, "per-model", key + ".md")
    return [one] if os.path.exists(one) else []


def bundle(paths):
    parts = ["<!-- %s -->\n\n" % os.path.basename(p) + open(p).read().rstrip()
             for p in paths]
    return "\n\n---\n\n".join(parts) + "\n"


def main():
    if len(sys.argv) < 4:
        sys.exit(__doc__.strip())
    index_path, out_dir, specs = sys.argv[1], sys.argv[2], sys.argv[3:]

    runs = []
    for spec in specs:
        s, label, resp, roots = spec.split(":", 3)
        runs.append((s, label, resp, roots.split(",")))

    trees = json.load(open(index_path))["trees"]
    if os.path.isdir(out_dir):
        shutil.rmtree(out_dir)

    # the trees are merged across runs, but the renders and the transcripts
    # belong to one run each, so this walks runs x trees and keeps the pairs
    # that exist
    items, missing = [], []
    for run, run_label, resp_dir, roots in runs:
        for t in trees:
            key = t["name"]
            src = find_pdf(key, roots)
            parts = find_responses(key, resp_dir)
            # a run earns a row on either artifact: the transcripts can land
            # before the tree has been rendered, and the picker greys out
            # whichever side is missing
            if not src and not parts:
                missing.append("%s/%s: nothing" % (run, key))
                continue

            row = {"name": run + ":" + key, "display": t["display"],
                   "run": run, "runLabel": run_label}

            if src:
                rel = "%s/trees/%s.pdf" % (run, slug_for(key))
                os.makedirs(os.path.dirname(os.path.join(out_dir, rel)),
                            exist_ok=True)
                shutil.copyfile(src, os.path.join(out_dir, rel))
                row["pdf"] = rel
                row["pdfSize"] = os.path.getsize(src)

            if parts:
                text = bundle(parts)
                rrel = "%s/responses/%s.md" % (run, slug_for(key))
                os.makedirs(os.path.dirname(os.path.join(out_dir, rrel)),
                            exist_ok=True)
                open(os.path.join(out_dir, rrel), "w").write(text)
                row["responses"] = rrel
                row["responsesSize"] = len(text.encode())
                row["responsesFiles"] = len(parts)
            items.append(row)
            print("%-6s %-34s %9s  %s"
                  % (run, key,
                     "%d B" % row["pdfSize"] if src else "no PDF",
                     "%d replies" % row["responsesFiles"]
                     if parts else "no replies"))

    json.dump({"items": items}, open(os.path.join(out_dir, "index.json"), "w"),
              indent=1)
    for m in missing:
        print("  [warn]", m)
    total = sum(os.path.getsize(os.path.join(b, f))
                for b, _d, fs in os.walk(out_dir) for f in fs)
    print("\n%d download row(s), %.1f KB total" % (len(items), total / 1e3))


if __name__ == "__main__":
    main()
