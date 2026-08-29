I'll verify the candidate references before writing the final answer.
Both leaves turn out to hinge on the same physical handle — the kinetic mixing ε of the light dark Z′ (a few to ~16 GeV) — which our 18-observable catalog never probes directly (its "Z′ dilepton" entry is the high-mass HL-LHC Drell–Yan search, blind below ~150 GeV). In this model the DM (160–290 GeV) is far heavier than the Z′, so the Z′ has **no invisible decay channel**: it decays 100% to SM fermions through kinetic mixing, exactly like a canonical visibly-decaying dark photon, with BR(μ⁺μ⁻) ≈ 10–15% in the 3–16 GeV mass window. Its production rate at colliders scales as ε², and the two regions of each leaf differ in ε² by 1.5–6 orders of magnitude. Dark-photon resonance searches therefore give clean, existing, published discriminators for both leaves.

## Leaf `root_no_yes_no_no` (σ_SI 1–10× XLZD, no IceCube-Gen2, BR(h→inv) below floor)

- **R0**: MZ′ = 9.0–16.0 GeV, ε = 5.6×10⁻⁴–1.4×10⁻³ → **ε² = 3.1×10⁻⁷–1.9×10⁻⁶**
- **R1**: MZ′ = 5.5–11.2 GeV, ε = 5.7×10⁻³–1.3×10⁻² → **ε² = 3.2×10⁻⁵–1.7×10⁻⁴**

The LHCb prompt A′→μ⁺μ⁻ inclusive search (arXiv:1910.06926, 5.5 fb⁻¹) already sets 90% CL limits at the level of ε² ~ 10⁻⁶–10⁻⁵ across 5–30 GeV (world-leading for 10.6–30 GeV). R1, with ε² ≥ 3.2×10⁻⁵, sits at or above the *current* exclusion — a prompt dimuon resonance at m(μμ) = 5.5–11 GeV would be an unmissable, high-significance peak already in Run 3 data. R0, with ε² ≤ 1.9×10⁻⁶, is a factor ≥17 below R1's minimum and below current limits over most of its mass range; the data-driven Run 3+ projection (arXiv:1603.08926) reaches ε² ~ 10⁻⁷ at 10–40 GeV, so R0 is at best marginally detectable in the far future, and its measured ε² would in any case lie well below the cut. Placing the decision at **ε² = 10⁻⁵** (measured from the resonance yield normalized to the off-shell-photon γ*→μμ rate, so it is fully data-driven) leaves a clean factor-of-17 gap between the two regions: R1 → yes, R0 → no. This fully splits the leaf; no novel experiment is needed. Dominant caveat: at m(μμ) near the ϒ(1S–3S) states (9.2–10.6 GeV) the search has vetoed windows, but both regions extend well outside them.

## Leaf `root_no_no_no` (nothing anywhere; BR(h→inv) below floor)

- **R0**: MZ′ = 3.4–5.1 GeV, ε = 9.6×10⁻⁶–4.3×10⁻⁵ → ε² ~ 10⁻¹⁰–1.9×10⁻⁹
- **R1**: MZ′ = 4.3–7.3 GeV, ε = 0.021–0.038 → ε² = 4.4×10⁻⁴–1.5×10⁻³

Here the ε gap is nearly three orders of magnitude in ε (≈6 in ε²). The BaBar radiative-return search e⁺e⁻→γA′, A′→e⁺e⁻/μ⁺μ⁻ (arXiv:1406.2980, 514 fb⁻¹) already excludes ε ≳ (0.5–1)×10⁻³ over 0.02–10.2 GeV. R1's ε = 0.021–0.038 is a factor 20–40 *above* that limit — a narrow dilepton peak at m(ℓℓ) = 4.3–7.3 GeV would appear at enormous significance in existing B-factory data (honestly, R1 is in tension with BaBar already, which is itself a decisive statement given the search was not in our catalog). R0's ε ≤ 4.3×10⁻⁵ is more than a factor 20 below even the Belle II 50 ab⁻¹ projected sensitivity of ε ~ (2–5)×10⁻⁴ in this mass range (arXiv:1808.10567), so it robustly returns "no signal." Cutting at **ε = 10⁻³** (the current BaBar-limit scale) separates the regions with ~500× margin on the low side and ~20× on the high side: R1 → seen, R0 → not seen. The only systematic worth noting is resonance-region contamination near J/ψ, ψ(2S) (3.0–3.7 GeV), which clips only the bottom edge of R0's mass range — irrelevant since R0 fails on rate regardless. Fully split; no novel experiment required.

```json
{
  "model": "CsSg_U1p[+]_DM.Z2",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_no",
      "lit_review": {
        "name": "LHCb prompt dark-photon A'->mumu search",
        "observable": "dimuon resonance at m(mumu)=5-16 GeV with eps^2 >= 1e-5 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1603.08926"],
        "reasoning": "DM (160-290 GeV) is far heavier than the Z' (5-16 GeV), so the Z' decays 100% visibly via kinetic mixing, exactly like a dark photon; the LHCb prompt dimuon rate is data-driven-normalized to gamma*->mumu and measures eps^2 directly. R1 predicts eps^2 = 3.2e-5 - 1.7e-4 at m = 5.5-11.2 GeV, at/above the current 5.5 fb^-1 exclusion (eps^2 ~ 1e-6 - 1e-5 in this window): an unmissable prompt peak. R0 predicts eps^2 = 3.1e-7 - 1.9e-6 at m = 9-16 GeV, a factor >= 17 below R1's minimum and below/near current limits; even Run-3+ projections (eps^2 ~ 1e-7) would measure it far below the 1e-5 cut. Our catalog's 'Z' dilepton' entry is the high-mass HL-LHC Drell-Yan search and is blind in this mass range, so this is a genuinely new observable. Caveat: Upsilon veto windows at 9.2-10.6 GeV, but both regions extend well outside them.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1"]},
          {"label": "not seen", "regions": ["R0"]}
        ]
      },
      "novel": []
    },
    {
      "leaf_id": "root_no_no_no",
      "lit_review": {
        "name": "BaBar/Belle II radiative-return A'->ll search",
        "observable": "e+e- -> gamma + dilepton resonance at m(ll)=3-8 GeV with eps >= 1e-3 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1808.10567"],
        "reasoning": "Again the Z' (3.4-7.3 GeV) decays purely visibly since the DM is >200 GeV, so e+e- -> gamma A', A' -> e+e-/mu+mu- measures eps directly from the resonance yield. R1 predicts eps = 0.021-0.038 at m = 4.3-7.3 GeV, a factor 20-40 above the existing BaBar 514 fb^-1 limit (eps ~ 1e-3 across 0.02-10.2 GeV) - a huge narrow peak, already in tension with archived data. R0 predicts eps = 9.6e-6 - 4.3e-5 at m = 3.4-5.1 GeV, more than 20x below even the Belle II 50 ab^-1 projected reach of eps ~ (2-5)e-4, so it robustly yields no signal. The cut at eps = 1e-3 sits ~20x below R1 and ~500x above R0. J/psi and psi(2S) veto windows (3.0-3.7 GeV) clip only the bottom of R0's mass range and do not affect the rate-based verdict.",
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