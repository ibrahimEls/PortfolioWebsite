# for_website — the aggregated LLM decision trees, repeat-run format

Built by `scripts/export_for_website.py` from the aggregation run
`assets/llm-assets/scan-llm/scan-f1c1zn5-su2-singlet+doublet+triplet-lor-scalar+majorana+dirac-u1p-b50-agg2/trained` (agg2: five repeat runs — v1–v4
Fable, v5 Opus — adjudicated by one Fable pass, plus a follow-up LLM pass
that revised the paleo nodes; that pass's transcript was not retained locally).

`aggregated/` mirrors one run's layout:

    responses/global-tree/gNN_leaf-<path>.md   16 leaf cards: prose + ONE ```json fence
    responses/per-model/<model>__<path>.md      8 leaf cards
    json/global-tree/gNN_leaf-<path>.json      the fenced payload, re-serialised
    json/per-model/<model>.json                 one file per model, all its leaves
    dot/global-tree/global_tree.dot             renders to the published tree
    dot/global-tree/global_tree_base.dot
    dot/per-model/<model>_llm_titled.dot        3 models with LLM nodes
    dot/per-model/<model>_base_titled.dot
    pdf/                                        `dot -Tpdf` of the dot files above

The payload schema is exactly the repeat-run schema of
`assets/llm-assets/tree-template/scan-llm-split*.md` — no adjudication fields
(`candidate_reviews`, `aggregation_note`, `path_check`, `improvement_attempts`,
`irreducible`, split-level `source`).  The prose section is synthesised from each
split's `reasoning` and `feasibility`.

## Provenance of the text (58 splits; see manifest.json per split)

- `verbatim:<run>` (15): the aggregation adopted one run's split without changing
  anything that is drawn (name, observable, refs, rating, factor, outcomes) — that run's
  split object is copied unchanged.
- `agg2-scrubbed` (41): the aggregation merged or modified runs' proposals — its
  text is used, with sentences about the adjudication process itself (candidate ids, run
  names, "the pool") removed or reworded via `assets/llm-assets/for_website_overrides.json`.
  Physics and numbers are untouched.
- `agg2-scrubbed+alt-rewritten` (2): the two "Paleo-detector Ca/O recoil-spectrum
  ratio" OR-alternatives — never-drawn text (what_this_is, why_novel, reasoning,
  feasibility) re-authored; drawn fields frozen.

Nothing drawn on any node was changed, with one deliberate exception: the agg2 per-model
dots carried a small provenance footer ("from v3, v4") on their LLM nodes, which the
published global tree does not; the export removes it so all trees share the same
no-badge style.  `--check` recomputes every node label from the exported JSON and compares
it with the dot.

## Rendering

    dot -Tpdf aggregated/dot/global-tree/global_tree.dot -o global_tree_llm.pdf

reproduces `out/pdf-plots/scan-llm-agg2/global_tree_llm_agg2.pdf` (graphviz 12.2.1): the
node/edge default font is baked in as "DejaVu Serif", the font that PDF was rendered
with; the page box (5935 x 2831 pt) and the whole tree body are byte-identical.  The only
residual is the title banner (`fontname="Helvetica-Bold"`): its letter-spacing depends on
which sans font the renderer substitutes, and the original substitution is no longer
installed here.  Labels carry hard `<BR/>` line breaks, so a browser renderer must use a
serif with DejaVu-like metrics or the boxes will re-wrap.
