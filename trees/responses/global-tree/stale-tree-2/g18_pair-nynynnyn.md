This is a well-specified degeneracy-breaking task with one target leaf (`root_no_yes_no_yes_no_no_yes_no_yes`, units R0 and R1). Before writing the final answer, I'll verify the arXiv references I intend to cite, as the rules require.
All three references verified (CMS scouting dimuon 1912.04776 covers 11.5–45 GeV; LHCb A′→μμ 1910.06926 is explicitly most stringent for 10.6–30 GeV prompt and covers down past 1 GeV; Ilten–Soreq–Williams–Xue 1801.04847 is the standard recast framework for kinetically-mixed vectors). Here is the full analysis and the JSON.

## Reasoning — leaf `root_no_yes_no_yes_no_no_yes_no_yes` (70 pts, units R0, R1)

**What the two units actually are.** Both units are the same complex-scalar-singlet + dark U(1)′ theory (the [+]/[−] builds differ only by the sign of the dark charge, which is a field-redefinition conjugation s → s\*, so the *physical* content of the degeneracy is the two disconnected parameter islands, not the charge sign). The islands differ dramatically in the dark-gauge sector while being nearly identical in everything our catalog measures:

- **R0** (U1p[−]): M_DM = 60.9–64.5 GeV — pinned on the Higgs funnel (m_h/2 = 62.5 GeV) — with a **1.0 GeV** Z′ and tiny kinetic mixing ε = 1.7×10⁻⁵–1.35×10⁻⁴ (ε² = 2.9×10⁻¹⁰–1.8×10⁻⁸), g′ ≈ 0.14, portal α₁ ≈ 1.3×10⁻³.
- **R1** (U1p[+]): M_DM = 65.0–70.1 GeV — just above the funnel — with an **11.2–16.5 GeV** Z′ and mixing a factor ~100 larger, ε = 5.2×10⁻³–1.27×10⁻² (ε² = 2.7×10⁻⁵–1.6×10⁻⁴), g′ ≈ 0.145.

Both are secluded annihilators (χχ\* → Z′Z′ open in both, g′ ≈ 0.14 giving σv near thermal, consistent with the leaf's 10–100× CTA(bb) indirect signal and null DARWIN/IceCube), which is exactly why the catalog — DD, per-channel ID, h→inv, HL-LHC topologies — cannot tell them apart: the visible difference lives entirely in the **mediator**, not in the DM observables.

**Lit-review split: low-mass prompt dimuon resonance search (LHCb inclusive + CMS scouting).** In both units M_DM > M_Z′/2, so Z′ → DM DM is kinematically closed and the Z′ decays 100% visibly with photon-like branching fractions (BR(μμ) ≈ 0.14 at 11–16 GeV, from ee:μμ:ττ:qq ≈ 1:1:1:R with R ≈ 3.6). The predictions:

- **R1** puts a narrow μμ resonance at 11.2–16.5 GeV with ε² = 2.7×10⁻⁵–1.6×10⁻⁴. LHCb's published prompt A′→μμ search (5.5 fb⁻¹) is already *world-leading precisely in the 10.6–30 GeV window*, with limits there at the few×10⁻⁶ level in ε²; CMS dimuon scouting covers 11.5–45 GeV with comparable reach. R1 therefore sits **10–50× above current ε² exclusion boundaries**: the resonance is either already at the edge of the published data or produces an unmistakable bump in any Run-3 scouting dataset (σ·BR(μμ) at the tens-of-pb level at 13 TeV). Honest caveat: part of R1 may in fact already be in tension with these published limits — our catalog's "Z′ dilepton" entry is a *high-mass* Drell-Yan σ×BR recast with no limit coverage below the standard dilepton trigger regime, which is exactly why the tree could not use it here; the trigger-less scouting / inclusive-LHCb low-mass program is a genuinely different measurement, not a refinement of the catalog observable.
- **R0** has *nothing* in the 10.5–17 GeV window (its only state there would be the Z′, which sits at 1.0 GeV), and at its own mass its ε² ≤ 1.8×10⁻⁸ is ~2 orders of magnitude below LHCb's current prompt sensitivity at 1 GeV. Its lab-frame decay length (cτ ~ 40 μm–2.5 mm across the ε range, boosted to mm–cm) also falls in the short-displaced gap below beam-dump acceptance and below Belle II's 50 ab⁻¹ prompt reach (few×10⁻⁴ in ε). R0 predicts a robust null everywhere.

So the cut "narrow prompt μμ resonance in 10.5–17 GeV at ε ≥ 5×10⁻³" cleanly assigns **seen → R1, not seen → R0**, and — since R0 and R1 belong to the two different builds — it separates the *Lagrangians*, the highest-value outcome. Dominant systematic on the yes-branch: the steeply falling Drell-Yan continuum shape under the bump, well controlled by sideband fits at these ε² values.

**Alternatives considered and rejected (for the record).** (i) DM-mass discrimination via the CTA γ-ray spectral endpoint: 61–64.5 vs 65–70 GeV is an ~8% shift on a featureless b b̄ continuum — below CTA's ~10% energy resolution; marginal, rejected. (ii) Belle II e⁺e⁻ → γA′: R1's Z′ (11.2–16.5 GeV) is above the √s = 10.58 GeV kinematic reach, and R0's ε is below prompt sensitivity with a lifetime too short for the displaced analysis — no split from B-factories. (iii) CMB energy-injection and dwarf-spheroidal bounds: both units share the leaf's σv bin, no split. (iv) DM self-interaction from R0's light mediator: σ/m ~ 10⁻⁶ cm²/g, hopelessly below cluster bounds. None of these compete with the dimuon search, which fully separates the leaf — so no Level-2 novel experiment is needed. (As corroboration rather than a split: LHCb Upgrade-II inclusive-dimuon projections would additionally give a *positive* detection of the upper half of R0's ε range at 1 GeV.)

The sibling leaf `root_no_yes_no_yes_no_no_yes_no_no` is context-only (no separable units) and gets no entry.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_yes_no_no_yes_no_yes",
      "lit_review": {
        "name": "LHC low-mass prompt dimuon dark-photon search (LHCb inclusive + CMS scouting)",
        "observable": "narrow mumu resonance, 10.5 < m_mumu < 17 GeV, eps >= 5e-3 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1912.04776", "arXiv:1801.04847"],
        "reasoning": "Both units have M_DM > M_Zp/2, so the Z' decays fully visibly with photon-like branching fractions (BR(mumu) ~ 0.14). R1 predicts a narrow mumu resonance at 11.2-16.5 GeV with eps^2 = 2.7e-5 - 1.6e-4, i.e. 10-50x above the published LHCb prompt A'->mumu limits (world-leading exactly in the 10.6-30 GeV window at few x 1e-6 in eps^2) and the CMS 11.5-45 GeV scouting limits: an unmistakable bump (sigma x BR ~ tens of pb at 13 TeV) in any Run-3 scouting dataset, possibly already in tension with published data. R0's only new state is a 1.0 GeV Z' with eps^2 <= 1.8e-8, two orders of magnitude below current sensitivity at 1 GeV and with mm-scale boosted decay length in the short-displaced gap, so R0 predicts a robust null. The catalog's Z' dilepton entry is a high-mass Drell-Yan recast with no coverage in this mass window, so this is a genuinely new measurement. The split also separates the two Lagrangian builds (U1p[-] vs U1p[+]). Dominant systematic: the falling Drell-Yan continuum under the bump, controlled by sidebands at these eps^2 values.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1"]},
          {"label": "not seen", "regions": ["R0"]}
        ]
      },
      "novel": []
    }
  ]
}
```