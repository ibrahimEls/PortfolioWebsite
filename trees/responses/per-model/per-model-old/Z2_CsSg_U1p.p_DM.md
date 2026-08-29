## Reasoning — Leaf `root_yes_no` (R0 vs R1)

**The one cleanly separated axis is the kinetic mixing ε.** Every other parameter either overlaps or merely touches at a boundary: MDM overlaps at 627–629 GeV, MZp touches at 38.91 GeV, α1 touches at 0.0232, α3 touches at 0.0053 — any split on Higgs-portal or mass observables would be marginal at best. But ε is separated by a factor ≳ 33 in amplitude and ≳ 10³ in rate: R0 spans ε ∈ [3.7×10⁻⁵, 3.0×10⁻³] while R1 sits pinned at ε = 0.1.

**Why our catalog is blind to ε here, in both channels it nominally probes:**

- *Direct detection:* naively a U(1)'-charged complex scalar with ε = 0.1, g' = 0.43, MZp ≈ 39 GeV gives Z'-mediated σ_SI ~ 10⁻³⁹ cm², grossly excluded — yet the leaf sits on the DARWIN-NO branch. The resolution is the model's own structure: the α3-type quartics (via the dark-Higgs vev that gives MZp its 39 GeV) split the complex scalar into sr/si mass eigenstates, and the U(1)' vector current becomes purely off-diagonal — inelastic DM. For MDM ≈ 620 GeV the kinematically accessible energy at a xenon target is ~½μv² ≈ 50 keV, so any splitting above a few hundred keV (a GeV-scale splitting is generic for α3 ~ 10⁻³ and a ~100 GeV dark vev) shuts DD off entirely, no matter how large ε is. DARWIN therefore carries zero information about ε, which is exactly why R0 and R1 coexist in this leaf.
- *Our Z′-dilepton recast* is a high-mass Drell–Yan σ×BR recast; a 39 GeV resonance is below the mass window of the standard ATLAS/CMS dilepton searches it digitizes, so it never fires here.

**Lit-review discriminator: low-mass dark-photon dimuon resonance searches.** The 10–70 GeV window is covered by *published* prompt A′→μμ searches: LHCb (arXiv:1910.06926, 214 MeV–70 GeV) and the CMS dimuon-scouting search for resonances below 200 GeV (arXiv:1912.04776, sensitive down to 11.5 GeV). Both set limits at the level ε² ≲ 10⁻⁶–10⁻⁵ near 39 GeV. Crucially, this probe is *splitting-blind*: both dark scalar states sit at ~620 GeV ≫ MZp, so the Z′ can only decay back to SM fermions through the mixing, with dark-photon-like branching BR(μμ) ≈ 10–15% at 39 GeV, prompt decay for all ε in either region, and production rate ∝ ε².

Quantitatively:

- **R1 (ε = 0.1):** ε² = 10⁻², i.e. 10³–10⁴ *above* the published LHCb/CMS exclusions at 39 GeV. The predicted signal is σ·BR(μμ) of order tens of pb — an unmissable narrow dimuon peak; strictly speaking this region is already excluded by data on the books, which is the strongest possible "split."
- **R0 (ε ≤ 3×10⁻³):** ε² ≤ 9×10⁻⁶, at or below the current sensitivity frontier, with the bulk of the region (ε ~ 10⁻⁴) a further 10²–10⁴ below it.

**Honesty about the margin:** the extreme upper edge of R0 (ε ≈ 3×10⁻³) is within reach of near-future HL-LHC scouting improvements, so "any excess at all" would be an unsafe cut. That is why the decision node carries a *rate* threshold, ε ≳ 0.01 (equivalently σ·BR(μμ) ≳ 1 pb): R1 exceeds it by 100× in rate while every R0 point falls short by ≥ 10×, so the binary outcome is unambiguous for all 13 points. A secondary confirmation, if wanted, comes for free from electroweak precision: ε = 0.1 with MZp < MZ violates the Z-pole mixing bound ε ≲ 0.03 (arXiv:1412.0018), while all of R0 is far inside it — same verdict, independent systematics.

Since this single existing measurement fully separates the two regions, no Level-2 novel experiment is needed for this leaf.

```json
{
  "model": "Z2_CsSg_U1p[+]_DM",
  "leaves": [
    {
      "leaf_id": "root_yes_no",
      "lit_review": {
        "name": "LHCb/CMS dark-photon dimuon search at m(Z') ~ 39 GeV",
        "observable": "epsilon >~ 0.01 (sigma x BR(mumu) >~ 1 pb) ?",
        "refs": [
          "arXiv:1910.06926",
          "arXiv:1912.04776",
          "arXiv:1412.0018"
        ],
        "reasoning": "The regions differ only in kinetic mixing: R1 has epsilon = 0.1 (epsilon^2 = 1e-2), R0 has epsilon <= 3e-3 (epsilon^2 <= 9e-6), a >10^3 rate gap. DARWIN cannot see epsilon because the alpha3-induced sr/si mass splitting makes the Z' vector current off-diagonal (inelastic, splitting >> 50 keV kinematic reach at 620 GeV), and our catalog's Z'-dilepton recast starts above 39 GeV. Prompt A'->mumu resonance searches (LHCb 214 MeV-70 GeV; CMS scouting 11.5-200 GeV) are splitting-blind -- the Z' decays only to SM, BR(mumu) ~ 12% -- and already exclude epsilon^2 >~ 1e-6..1e-5 at 39 GeV. R1 predicts a ~tens-of-pb narrow dimuon peak, 10^3-10^4 above published limits (effectively already testable in existing data); all R0 points give sigma x BR at least 100x below the 1 pb cut, though the R0 upper edge (epsilon ~ 3e-3) is marginal against future HL-LHC scouting, hence the rate threshold rather than any-excess. Independent cross-check: Z-pole EW precision bounds epsilon <~ 0.03 for MZp < MZ, excluding R1 and passing all of R0.",
        "status": "Splits!",
        "outcomes": [
          {
            "label": "seen",
            "regions": [
              "R1"
            ]
          },
          {
            "label": "not seen",
            "regions": [
              "R0"
            ]
          }
        ]
      },
      "novel": []
    }
  ]
}
```
