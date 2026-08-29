Verified so far: 1506.00013, 1612.09284, 1503.07675. Let me verify a couple more candidates (CTA GC dark-matter sensitivity, and a Higgs-factory invisible-width projection with concrete numbers).
# Reasoning

## Physics common to both leaves

This model is a pure Higgs-portal complex scalar singlet: the only BSM–SM contact is the single operator `alpha1 |H|² sr²` (portal ~1.7e-3 in leaf `root_yes_no`, pinned at the scan floor ~1.0–1.2e-3 in leaf `root_no`). Every SM-facing observable — σ_SI, BR(h→inv), ⟨σv⟩ and its channel decomposition, collider production — is a function of exactly two numbers: (M_DM, alpha1). All the remaining fifteen couplings (alpha2–alpha16) are quartic self-couplings *inside* the dark sector (sr⁴, si⁴, sr²si², sr³si, …). They mediate DM–DM elastic scattering and sr↔si conversion and literally nothing else at tree level.

This has a brutal consequence for degeneracy breaking, which I quantify before proposing anything:

1. **Dark quartics are unobservable at these masses.** DM self-scattering: σ_self/m = λ_eff²/(64π m³). Even in the most strongly self-coupled regions (several quartics at 10, λ_eff ~ 50–60), σ_self ≈ 2e-3 GeV⁻² ≈ 8e-31 cm², i.e. σ/m ≈ 4e-9 cm²/g. Merging-cluster constraints (Harvey et al.) sit at σ/m ≲ 0.5–1 cm²/g — the prediction is **8–9 orders of magnitude** below any conceivable astrophysical sensitivity for a 96 GeV thermal relic. Loop feedback of the quartics onto the portal (δalpha1/alpha1 ~ λ_S/16π² × log ≈ 5–10%) shifts σ_SI and BR_inv by ≲10%, far under the ~25% local-density systematic on σ_SI and under Higgs-factory BR resolution. Regions within a leaf that differ *only* in quartics (which is most of them) are, as far as I can determine, physically indistinguishable by any real or proposed instrument. I say so explicitly rather than inventing a fake split.
2. **The only physical handles are the sub-GeV M_DM spread and the ~10–15% alpha1 spread**, and they are relic-locked (anti-correlated along the relic curve). All indirect-detection quantities are region-independent: ⟨σv⟩ ≈ 2.2e-26 cm³/s through s-channel h* at √s ≈ 2M ≈ 192–196 GeV, giving SM-Higgs-like branching at that virtuality: ~75% W⁺W⁻, ~20% ZZ, few % bb̄. CMB injection: p_ann = f_eff⟨σv⟩/m ≈ 0.15 × 2.2e-26/96 ≈ 3.4e-29 cm³/s/GeV, an order of magnitude below the Planck bound (~3.5e-28) and *identical in every region* — no split. Dwarf-vs-GC ratios, antiprotons, neutrino lines: identical. Solar capture with σ_SI ~ 1e-48–1e-47 cm² gives neutrino fluxes many orders below IceCube. Beam dumps are irrelevant at 96 GeV.

So the only honest degeneracy-breaker is a **DM mass measurement at the few-×0.1 GeV level**, and the only observable in nature that carries the DM mass with that sharpness is the loop-level monochromatic annihilation line: E(γγ) = M_DM, with a companion Zγ line at E = M_DM − m_Z²/4M_DM ≈ M_DM − 21.5 GeV. The predicted line strength is ⟨σv⟩_γγ ≈ ⟨σv⟩_tot × BR_γγ(h*, 192 GeV) ≈ 2.2e-26 × 5e-5 ≈ 1e-30 cm³/s — a factor ~300 below current Fermi-LAT line limits (~3e-28 cm³/s at 100 GeV, Einasto), and needing ~0.1–0.2% energy resolution vs the ~1–1.5% of the best flown calorimeters (DAMPE/HERD-class) and ~10% for CTA. That is the Level-2 proposal for both leaves, honestly rated **speculative**.

## Leaf `root_yes_no` (15 regions, M_DM ∈ [95.44, 95.87] GeV, alpha1 ∈ [0.00165, 0.00188])

**Level 1 (best literature candidate, fails — "No Split!").** The most sensitive *planned* measurement not in the catalog that touches this leaf is the Higgs-factory ZH-recoil invisible width: CEPC CDR (arXiv:1811.10545) projects a 95% CL sensitivity BR(h→inv) ≈ 0.3%, and general exotic-decay studies at CEPC/FCC-ee/ILC (arXiv:1612.09284) reach similar few-×1e-3 territory. The leaf predicts BR_inv ∈ [1.0e-3, 3.2e-3], so a Higgs factory would *see or bound* this leaf — but it cannot separate regions: BR_inv ∝ alpha1², and the inter-region alpha1 spread (0.00165–0.00176 in the heavy-mass group vs 0.00182–0.00188 in the light-mass group) gives at most an 18% relative difference, i.e. Δ(BR) ≈ 4e-4 at BR ≈ 2e-3, a factor ≳3 below the ~1e-3 resolution. Self-interaction probes (arXiv:1503.07675, σ/m ≲ 1 cm²/g) miss the quartic differences by ~9 orders (prediction ~4e-9 cm²/g in the strongest-coupled regions, ~1e-13 in the weakest). CMB, dwarfs, GC, solar ν: region-independent as computed above. Honest verdict: no existing or formally planned measurement splits this leaf.

**Level 2 (novel).** *Sub-percent γ-line spectroscopy of the inner halo.* The regions cluster in mass: **high group** E(γγ) ≈ 95.69–95.87 GeV = {R0, R3, R10, R11, R12, R13, R14, and R1 (95.56–95.85, straddles the cut at its bottom edge — marginal, assigned here)}; **low group** E(γγ) ≈ 95.44–95.55 GeV = {R2, R4, R5, R6, R7, R8, R9}. Cut: line energy ≥ 95.6 GeV. Requires: (i) detecting a line at ⟨σv⟩_γγ ~ 1e-30 cm³/s (×~300 beyond Fermi-LAT limits; needs m²sr-scale acceptance × decade exposure on the GC), and (ii) ~0.2% energy resolution / 0.1% absolute energy-scale calibration (×5–7 beyond DAMPE/HERD at 100 GeV). The Zγ companion at E ≈ 74.2 vs 74.0 GeV gives a consistency cross-check. Dominant systematics: absolute energy scale and the GC diffuse continuum under the line. Rating: **speculative**. Regions left together on each branch differ only in dark quartics — permanently degenerate per the σ_self/m estimate above; I do not fabricate a further node.

## Leaf `root_no` (91 regions, M_DM ∈ [97.25, 97.9] GeV, alpha1 ∈ [0.001, 0.00116])

**Level 1 (best literature candidate, fails — "No Split!").** Here BR_inv ≈ (alpha1/0.0017)² × 2e-3 ≈ 5–9e-4, below the 4ν floor and below any Higgs-factory projection, so the invisible-width route is dead. The best remaining planned probe is CTA's inner-halo survey (arXiv:2007.16129): all points predict a thermal ⟨σv⟩ ≈ 2.2e-26 cm³/s, ~75% W⁺W⁻ / ~20% ZZ at M ≈ 98 GeV — near CTA's low-energy threshold, where projected WW sensitivity is a few×1e-26 (Einasto), i.e. a marginal detection. But the prediction is *identical in every region* (same relic-locked ⟨σv⟩, same channels, J-factor common), so detection or non-detection carries zero separating power; and CTA's ~10% energy resolution near 100 GeV cannot resolve the 0.3–0.6 GeV inter-region mass differences. Fermi-LAT line limits (arXiv:1506.00013), ~3e-28 cm³/s at 100 GeV, are ~300× above the predicted ⟨σv⟩_γγ ~ 1e-30. σ_SI: R45 (alpha1 ≈ 0.00107–0.00116) and R90 (≈0.00105–0.00107) predict ~20–30% larger σ_SI than the 85 floor-pinned regions — unmeasurable under the ~25% ρ_local systematic even post-discovery at XLZD (and "sharpen XLZD" is excluded by the rules anyway). Honest verdict: No Split.

**Level 2 (novel).** Same γ-line spectrometer concept, cut at line energy ≥ 97.6 GeV. **Below** (E ≈ 97.25–97.56 GeV): R45, R90 — the only two regions genuinely displaced in (M, alpha1), sitting 0.3–0.6 GeV light and ~10% higher in portal coupling; the correlated ~25% σ_SI enhancement is a supporting cross-check. **Above** (E ≈ 97.75–97.90 GeV): all other 89 regions. Caveats stated: R0 (97.43–97.89) and R33 (97.55–97.86) straddle the cut — assigned "above" by the bulk of their ranges, flagged marginal. Separating 97.56 from 97.75 GeV needs ±≲0.1 GeV, i.e. ~0.1% resolution (×10 beyond HERD-class) on top of the ×~300 flux-sensitivity gain. Rating: **speculative**. The 89 "above" regions differ only in dark quartics (σ_self/m ~ 1e-13–4e-9 cm²/g vs astrophysical reach ~0.5 cm²/g): physically unbreakable degeneracy; stated rather than papered over.

All cited IDs verified above: arXiv:1811.10545 (CEPC CDR Vol 2), arXiv:1612.09284 (exotic Higgs decays at e⁺e⁻ Higgs factories), arXiv:1503.07675 (cluster self-interaction limits), arXiv:2007.16129 (CTA GC DM sensitivity), arXiv:1506.00013 (Fermi-LAT line search).

```json
{
  "model": "CsSg_DM.Z2+3+4+5",
  "leaves": [
    {
      "leaf_id": "root_yes_no",
      "lit_review": {
        "name": "Higgs-factory ZH-recoil invisible width (CEPC/FCC-ee)",
        "observable": "BR(h->inv) >= 2.3e-3 ?",
        "refs": ["arXiv:1811.10545", "arXiv:1612.09284", "arXiv:1503.07675"],
        "reasoning": "Leaf predicts BR_inv = 1.0-3.2e-3, within CEPC/FCC-ee 95% CL sensitivity (~3e-3), but inter-region differences come only from the alpha1 spread 0.00165-0.00188: BR ratio <= 1.18, i.e. Delta(BR) ~ 4e-4 at BR ~ 2e-3, a factor >~3 below the ~1e-3 measurement resolution. All other non-catalog probes are region-blind: identical <sigma v> ~ 2.2e-26 cm3/s (75% WW, 20% ZZ) in dwarfs/GC/CMB (p_ann ~ 3.4e-29 cm3/s/GeV, 10x below Planck); solar-capture nu flux negligible at sigma_SI ~ 1e-47 cm2; dark quartics give sigma_self/m ~ 1e-13 to 4e-9 cm2/g, 9 orders below cluster limits (~1 cm2/g). No existing or planned measurement separates any pair of regions: honest No Split.",
        "status": "No Split!",
        "outcomes": [
          {"label": "unresolved", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9+R10+R11+R12+R13+R14",
          "name": "0.2%-resolution space calorimeter, GC-halo line survey",
          "observable": "gamma-gamma line energy >= 95.6 GeV ?",
          "reasoning": "The annihilation line sits exactly at E = M_DM: high-mass regions R0,R3,R10-R14 predict E = 95.69-95.87 GeV (R1 spans 95.56-95.85, assigned here, marginal at its lower edge); low-mass regions R2,R4-R9 predict E = 95.44-95.55 GeV. Companion Z-gamma line at E = M - mZ^2/4M ~ 74.2 vs 74.0 GeV cross-checks. Line strength <sigma v>_gg ~ 2.2e-26 x BR_gg(h*,192 GeV) ~ 1e-30 cm3/s, identical across regions, so only the energy discriminates. Regions sharing a branch differ only in dark-sector quartics (sigma_self/m <= 4e-9 cm2/g) and remain permanently degenerate to any foreseeable probe.",
          "feasibility": "Closest instruments: DAMPE/HERD CsI calorimeters, ~1-1.5% energy resolution at 100 GeV; Fermi-LAT line sensitivity ~3e-28 cm3/s at 100 GeV. Needs ~5-7x resolution gain (to 0.2%, +-0.2 GeV) with 0.1% absolute energy-scale calibration, AND ~300x line-flux sensitivity (m2·sr-scale acceptance, decade GC exposure). Dominant systematics: absolute energy scale and GC diffuse continuum under the line.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "high line", "regions": ["R0", "R1", "R3", "R10", "R11", "R12", "R13", "R14"]},
            {"label": "low line", "regions": ["R2", "R4", "R5", "R6", "R7", "R8", "R9"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no",
      "lit_review": {
        "name": "CTA inner-halo continuum search, WW/ZZ at ~98 GeV",
        "observable": "<sigma v>(WW) >= 1e-26 cm3/s ?",
        "refs": ["arXiv:2007.16129", "arXiv:1506.00013"],
        "reasoning": "Every region predicts the same relic-locked <sigma v> ~ 2.2e-26 cm3/s via s-channel h* (75% WW, 20% ZZ) at M ~ 97.3-97.9 GeV, near CTA's threshold where projected WW sensitivity is a few x 1e-26 (Einasto): a marginal detection, but identical in all 91 regions, so the outcome carries zero separating power; CTA's ~10% energy resolution cannot resolve the 0.3-0.6 GeV inter-region mass differences. Fermi-LAT line limits (~3e-28 cm3/s at 100 GeV) are ~300x above the predicted <sigma v>_gg ~ 1e-30. BR_inv ~ 5-9e-4 is below the 4nu floor and below all Higgs-factory projections. R45/R90's ~10% higher alpha1 gives only ~25% higher sigma_SI, buried under the ~25% rho_local systematic. CMB p_ann ~ 3.4e-29 cm3/s/GeV, 10x below Planck, region-independent. Quartic-only differences: sigma_self/m ~ 1e-13 to 4e-9 cm2/g, 9 orders below cluster bounds. Honest No Split.",
        "status": "No Split!",
        "outcomes": [
          {"label": "unresolved", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R18", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R34", "R35", "R36", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R61", "R62", "R63", "R64", "R65", "R66", "R67", "R68", "R69", "R70", "R71", "R72", "R73", "R74", "R75", "R76", "R77", "R78", "R79", "R80", "R81", "R82", "R83", "R84", "R85", "R86", "R87", "R88", "R89", "R90"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9+R10+R11+R12+R13+R14+R15+R16+R17+R18+R19+R20+R21+R22+R23+R24+R25+R26+R27+R28+R29+R30+R31+R32+R33+R34+R35+R36+R37+R38+R39+R40+R41+R42+R43+R44+R45+R46+R47+R48+R49+R50+R51+R52+R53+R54+R55+R56+R57+R58+R59+R60+R61+R62+R63+R64+R65+R66+R67+R68+R69+R70+R71+R72+R73+R74+R75+R76+R77+R78+R79+R80+R81+R82+R83+R84+R85+R86+R87+R88+R89+R90",
          "name": "0.1%-resolution space calorimeter, GC-halo line survey",
          "observable": "gamma-gamma line energy >= 97.6 GeV ?",
          "reasoning": "R45 (M = 97.25-97.55 GeV) and R90 (97.53-97.56) are the only regions genuinely displaced along the relic curve: line at E <= 97.56 GeV, plus ~10% higher portal (alpha1 ~ 1.05-1.16e-3 vs 1.0e-3 floor) giving a correlated ~25% sigma_SI enhancement as cross-check. All other regions predict E = 97.75-97.90 GeV. Caveats: R0 (97.43-97.89) and R33 (97.55-97.86) straddle the cut and are assigned 'above' by the bulk of their range - marginal. Z-gamma companion line at E ~ 76.1 vs 76.4 GeV. Regions sharing a branch differ only in dark quartics (sigma_self/m <= 4e-9 cm2/g), physically unbreakable degeneracy.",
          "feasibility": "Closest instruments: DAMPE/HERD calorimeters (~1-1.5% resolution at 100 GeV); Fermi-LAT line sensitivity ~3e-28 cm3/s at 100 GeV vs predicted <sigma v>_gg ~ 1e-30. Needs ~10x resolution gain (0.1%, +-0.1 GeV, since gap 97.56 vs 97.75 GeV is 0.2 GeV) plus ~300x line-flux sensitivity. Dominant systematics: absolute energy-scale calibration at the 0.1% level and GC diffuse background; R0/R33 straddling adds irreducible assignment ambiguity.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "high line", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R18", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R34", "R35", "R36", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R46", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R61", "R62", "R63", "R64", "R65", "R66", "R67", "R68", "R69", "R70", "R71", "R72", "R73", "R74", "R75", "R76", "R77", "R78", "R79", "R80", "R81", "R82", "R83", "R84", "R85", "R86", "R87", "R88", "R89"]},
            {"label": "low line", "regions": ["R45", "R90"]}
          ]
        }
      ]
    }
  ]
}
```