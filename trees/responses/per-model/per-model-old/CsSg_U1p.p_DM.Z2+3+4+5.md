# Degeneracy-Breaking Analysis — CsSg_U1p[+]_DM.Z2+3+4+5

## Physics overview (what actually varies between regions)

The ten scan parameters map onto observables very unevenly. `MDM` and `alpha1` (Higgs portal) drive everything already in the catalog (σ_SI, σv, BR(h→inv)), so inside a leaf they are nearly fixed. What *does* vary between the separated regions of a leaf is almost always **(MZp, ε, gU1p)** — the dark-photon sector — and the **dark quartics alpha2–alpha6**. This dictates the strategy:

1. **Kinetic mixing ε and MZp are the strongest non-catalog handle.** Everywhere in these leaves MZp < 2·MDM, so the Z′ decays 100% to SM fermions with production/decay rates ∝ ε². Prompt dimuon resonance searches (LHCb dark-photon search, arXiv:1710.02867, arXiv:1910.06926; CMS dimuon scouting below 200 GeV, arXiv:1912.04776) reach ε ≈ 1e-3 for 1–70 GeV and ε ≈ few×1e-3 up to ~200 GeV. This is *not* the catalog's "Z′ dilepton" observable, which is a high-mass HL-LHC σ×BR recast; the low-mass scouting/dark-photon regime and the *measured resonance mass and rate* are genuinely new information. For regions whose quoted ε interval straddles the reach, I assign by the geometric mean of the interval vs ≈2e-3 and say so — the measurement would in reality sub-split those regions, which is a feature, not a bug.
2. **Below the prompt reach (ε ~ 1e-4–1e-3, m ~ 1–10 GeV)**: Belle II with 50 ab⁻¹ projects ε ≈ 2e-4 in e⁺e⁻→γA′ (arXiv:1808.10567) — used as the Level-2 concept where needed. Deeper still (ε ~ 1e-6, m ~ 1–2 GeV) the decay length cτ ≈ 0.8 mm·(1e-4/ε)²·(0.1 GeV/m) lands in the SHiP decay volume (arXiv:1504.04956).
3. **MDM differences** between regions are attacked with the CTA γ-ray **spectral endpoint** E_end = MDM (an energy measurement, not a flux limit, hence not in the catalog): ΔE/E ≈ 10%, and with fluxes 10–100× the sensitivity the endpoint localizes to ~5%.
4. **Quartic-only degeneracies (alpha2–6)** are honestly unbreakable: they induce DM self-scattering σ/m = λ²/(64π·MDM³) ≈ 1e-10–1e-5 cm²/g, ≥10⁵ below cluster SIDM bounds (σ/m ≲ 0.5 cm²/g, arXiv:1705.02358), and decouple from every SM-facing observable. Those leaves get "No Split!" plus a speculative novel node — the honest-failure case the rules ask for.

## Per-leaf reasoning

**root_yes_yes_yes (23 regions).** ε splits three ways with the resonance mass: R0 (MZp=36.6, ε 0.018–0.1), R7/R12/R13/R21/R22 (MZp 23–47, ε 7e-3–0.1) → dimuon at 20–50 GeV with σ·BR far above scouting reach; R11/R20 (MZp 562–575, ε 0.014–0.036, gU1p=0.514) → narrow dielectron/dimuon at ~565 GeV; the remaining 15 regions have ε ≤ 3e-3 (most ≤ 1e-4) at MZp 46–105 → nothing (R4, R14 are marginal, noted). For the invisible group, CTA endpoint at E_end ≥ 645 GeV isolates R3 (657–691) and R8 (648–695) from the MDM ≈ 580–660 bulk; R1 (587–660) straddles and is assigned "no" — marginal, stated.

**root_yes_yes_no (186 regions).** Same dimuon-visibility cut (geometric-mean ε ≥ 2e-3, MZp 1–583 GeV, all ≥ 2m_μ): 83 regions "seen" vs 103 "not seen" (full lists in JSON; broad-ε blobs R0, R1, R5 straddle and would themselves be sub-split by the measurement). For the invisible group, the only remaining handle with any hardware reality is a forward displaced-vertex program: regions with MZp ≲ 5 GeV and ε ~ 1e-6–1e-4 (R34, R48, R87, R89, R111, R182) give cτ ~ cm–m, in a SHiP/FASER2-class window, while the other 97 have MZp too heavy for beam-dump production or ε outside the band. Extending displaced searches to m ≈ 5–10 GeV needs Drell-Yan/charm production modes — rated "unlikely".

**root_yes_no_yes_yes (14 regions).** Dimuon mass: R1 (MZp 19–25, ε=0.1) and R3 (36.6, ε 0.03–0.06) → 15–40 GeV resonance; R4, R6, R9, R13 (MZp 2.3–9.9, ε 1.2e-3–0.1) → 2–10 GeV resonance; R0, R2, R5, R7, R8, R10, R11, R12 invisible (ε mostly ≤ 5e-4; R0's broad ε straddles, assigned by log-midpoint). Novel: Belle II-class γA′ at ε→2e-4, m 1.3–5.4 GeV picks up R0 (ε up to 0.1 in part of the blob) and R2 (ε up to 5e-4) but not R5/R7/R8/R10/R11/R12 (ε ≤ 3e-5).

**root_yes_no_yes_no (18 regions).** R0 alone sits at MZp 16.6–23.9 with ε=0.1 → ~20 GeV dimuon; thirteen regions (R3–R7, R9, R11–R17) have MZp 1–10 with ε ≥ 1e-3 → light dimuon; R1, R2, R8, R10 are below prompt reach. Belle II at ε ≈ 2e-4 then reaches all four (R1 up to 2.4e-3, R2 to 1.6e-3, R8 2–6.5e-4, R10 1–5.7e-4) and the measured mass separates R2 (3.6–5.8 GeV) from R1+R8+R10 (~1–1.4 GeV).

**root_yes_no_no_no_no (27 regions).** Prompt dimuon (all MZp 1–5.4 GeV): seen R1, R2, R6, R8, R10, R14, R15, R19, R26 (ε log-mid ≥ 1e-3); rest invisible. Belle II ε→2e-4 then separates the ε ~ 1e-4–2.5e-3 tier (R0, R3, R4, R9, R12, R13, R17, R18, R22, R23, R24, R25) from the deep-hidden ε ≲ 6e-5 tier (R5, R7, R11, R16, R20, R21).

**root_no_yes_yes_yes_yes_no_yes_no (10 regions).** MDM ≈ 4.4–5.2 GeV, MZp ≈ 1–2.6, gU1p ≈ 0.042, alpha1 ≈ 0.004 — *identical* across regions; only quartics differ. Planck p_ann (arXiv:1807.06209, f_eff from arXiv:1506.03811) is a real non-catalog measurement but its prediction (p_ann ~ 1e-27 cm³/s/GeV for 5 GeV bb̄ at 10–100× Fermi — in tension for s-wave) is the *same* for every region → No Split!. Novel: only the alpha4-driven self-interaction differs (R0/R1/R2/R5/R7/R8/R9 have quartics up to 10 vs R3/R4/R6 ≲ 2), giving σ/m ≈ 4e-3 GeV⁻³ vs ≲1e-6 GeV⁻³ — both ~10⁶ below cluster bounds → speculative.

**root_no_yes_yes_yes_yes_no_no_no_no (2 regions).** R0: MDM=1 GeV; R1: MDM=2.2 GeV; both MZp=1, ε=0.1. With ε=0.1, e⁺e⁻→γ+Z′*→γSS at Belle II has a large rate, and the missing-mass spectrum turns on at 2·MDM = 2.0 vs 4.45 GeV. Single-photon missing-mass onset ≥ 3 GeV cleanly separates them. Splits fully.

**root_no_yes_yes_yes_no_yes (9 regions).** Same MDM ≈ 4–5.5, MZp 1–1.4, ε ≤ 1.6e-4, alpha1 0.0019–0.0033 everywhere; quartic-only. No Split!; speculative self-interaction node (large-quartic R0, R3, R7, R8 vs small R1, R2, R4, R5, R6).

**root_no_yes_yes_yes_no_no_no (3 regions).** Textbook dark-photon case: R0 (m=1.0 GeV, ε=0.1), R1 (m=4.7 GeV, ε=0.1), R2 (m=1.33 GeV, ε≈0.01) — all inside LHCb prompt reach; the measured m(μμ) gives three distinct outcomes. Fully split.

**root_no_yes_yes_no_yes (28 regions).** MDM ≈ 4–5.5 GeV, MZp 1–3.3 GeV. Prompt reach only catches R5 (ε to 0.047), R16 (1.0–1.5e-3), R18 (4.5–7.1e-3). Belle II ε→2e-4 adds R1, R2, R4, R9, R10, R11, R13, R14, R23, R26 (ε upper bounds 2.6e-4–3.7e-3); the remaining 15 regions (ε ≲ 1e-4, incl. the many MZp=3.161 clones) stay hidden — those differ only in quartics anyway.

**root_no_yes_yes_no_no_yes_no_no (3 regions).** All MDM ≈ 94.2 GeV. R1 (gU1p up to 0.073, MZp 56–94 partly open) can have σv(Z′Z′) ∝ gU1p⁴ ≈ 2.8e-5 comparable to portal σv(WW) ∝ alpha1² ≈ 7e-6, and kinetic-mixed Z′ decays are ~30% leptonic → hard positron spectrum below 94 GeV at σv(e⁺e⁻) ~ 1e-26 cm³/s, at AMS-02 reach (arXiv:1306.3983); R0 (Z′ at 2–2.8 TeV, channel closed) and R2 (gU1p=0.003, g⁴ negligible) predict no leptonic excess. Marginal for the low-gU1p corner of R1 — stated. Novel for R0+R2: FCC-hh dilepton (arXiv:1606.09408) sees R0's 2–2.8 TeV, ε=0.1 Z′ trivially; R2's 1 GeV, ε=1e-6 Z′ stays invisible.

**root_no_yes_yes_no_no_no_yes_yes (2 regions).** R0 and R1 coincide in every parameter except quartic details (alpha2, alpha4) and R1's MZp pinned at 20.83 vs R0's 17.6–20.8; ε ≈ 1.4e-4 puts the dimuon rate ×50 below scouting reach. No Split!. Novel: a ×10-coupling-reach (×100 rate) scouting upgrade measuring m(μμ) < 20.5 GeV vs = 20.8 GeV — "unlikely", and overlapping for part of R0 (stated).

**root_no_yes_yes_no_no_no_yes_no (2 regions).** Both MDM ≈ 95, ε ≈ 1e-6, but MZp = 1.6–1.7 (R0) vs 1.0–1.3 GeV (R1): cτ ≈ 0.3–0.5 m → squarely in SHiP's displaced-vertex band via proton bremsstrahlung; the reconstructed vertex mass ≥ 1.5 GeV separates them. Splits.

**root_no_yes_yes_no_no_no_no_no (3 regions).** Prompt dimuon mass: R2 (4.7 GeV, ε=0.1), R0 (≈1.05 GeV, ε≈2.6e-3), R1 (3.8 GeV, ε≈2e-6 → invisible). Three outcomes, fully split.

**root_no_yes_no_yes_no (31 regions).** MDM pinned at 69.67, gU1p=0.1464, alpha1=0.001 — only (MZp ≤ 18, ε) and quartics vary. Prompt dimuon: seen R1, R2, R4, R8, R11, R15, R22, R25, R28 (ε log-mid ≥ 1e-3); Belle II ε→2e-4 tier: R5, R6, R12, R13, R20, R21, R24; the remaining 15 (ε ≲ 1e-4, many at 1e-6) are quartic-only leftovers.

**root_no_yes_no_no_yes_yes (7 regions).** MDM ≈ 90. Prompt: R0 (ε 0.05–0.1), R2 (6.5e-3–0.1), R3 (0.1), R6 (1.6–3.6e-3) seen; R1, R4, R5 not. Belle II tier: R1 (to 2e-3), R4 (to 9.4e-4) seen; R5 (≤1.6e-5) hidden.

**root_no_yes_no_no_no_yes_yes (9 regions).** MDM ≈ 4–5.7 GeV, ε ≤ 1.6e-4, alpha1 = 0.001 everywhere; quartic-only. No Split! + speculative self-interaction node (R0, R2, R3, R5, R7, R8 large-quartic vs R1, R4, R6).

**root_no_yes_no_no_no_no (17 regions).** Dimuon mass does the work: R4 (MZp=60.45, ε=0.1, the gU1p=11.4 curiosity) → 60 GeV resonance; R3 (4.7, ε=0.1); R0, R2, R7, R9, R13, R14 (m ≈ 1–1.3, ε 1.7e-3–0.1); nine regions invisible. Belle II tier: R10 (to 1.7e-3), R15 (to 4.2e-4) seen; R1, R5, R6, R8, R11, R12, R16 (ε ≲ 1e-4) hidden.

**root_no_no_yes_yes (17 regions).** All MDM = 136.8, MZp 13–25, gU1p = 0.202, alpha1 ≈ 0.004 — every region is dimuon-visible (ε ≥ 4.5e-3), so visibility doesn't split; the *rate* does: σ·BR ∝ ε² differs by ×16–400 between the ε ≈ 0.03–0.1 group and R6/R10/R14 (ε log-mid 0.007–0.017). Cut at σ·BR ≈ 10 pb for m(μμ) 13–25 GeV. Novel on the low-ε side: CTA endpoint ≥ 150 GeV catches R14's MDM tail to 177.6 GeV (partial — stated) vs R6/R10 pinned at 136.8. High-ε side is quartic-only → speculative node.

**root_no_no_yes_no_no (93 regions).** MDM 93–316, MZp 1–140. Dimuon-visibility cut (geometric-mean ε ≥ 2e-3): 48 seen / 45 not (lists in JSON; the measured mass further sub-splits the seen group for free). Invisible group: CTA WW endpoint at E_end ≥ 180 GeV divides the heavy-MDM regions (23, e.g. R3 186–313, R9 216–316, R44 260–295) from the light ones (22, e.g. R51 115–130, R61 ≈ 110, R92 126–192); regions straddling 180 (R14, R21, R25, R63, R91) assigned by log-midpoint — marginal, stated.

**root_no_no_no_yes_no (31 regions).** MDM pinned at 97.8 (except R18 = 219) but MZp spans 1 GeV–10 TeV. The catalog's HL-LHC dilepton already failed to split, so I use parity violation instead: a 66–1459 GeV Z′ with ε = 0.03–0.1 (R0) shifts the low-energy weak mixing angle by δsin²θ ~ ε²·MZ²/MZp² ≈ 1e-4–8e-3, within MOLLER/P2 reach (arXiv:1411.4088, arXiv:1802.04759); R30 (375–433 GeV, ε 0.045–0.1) gives ~2.5e-4 — marginal, included in "yes". All other regions (heavy MZp and/or ε ≤ 1e-3) predict shifts < 1e-5. Novel for the "no" group: FCC-hh 100 TeV dilepton reaches ε ≈ 0.01–0.1 Z′ up to ~10 TeV, catching R2, R8, R13, R15, R24, R26, R27, while the ε ≲ 1e-4 or ultra-heavy remainder stays invisible.

**root_no_no_no_no_no (7 regions).** All seven regions have *identical* MDM=297.9, MZp=1.212, ε=0.1, gU1p=0.1217, alpha1=0.003822 — they differ purely in alpha2–alpha6. Every conceivable external measurement (the 1.2 GeV, ε=0.1 dark photon included) gives the same answer in all regions. No Split!; speculative self-interaction node (R0/R3/R4/R5 with quartics up to 10 vs R1/R2/R6), needing ≥10⁵ beyond cluster SIDM sensitivity.

```json
{
  "model": "CsSg_U1p[+]_DM.Z2+3+4+5",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_yes",
      "lit_review": {
        "name": "LHCb/CMS scouting dark-photon dimuon search",
        "observable": "prompt mumu resonance sigma*BR >~ 0.1 fb; m(mumu) window ?",
        "refs": ["arXiv:1710.02867", "arXiv:1912.04776", "arXiv:1910.06926"],
        "reasoning": "All regions have MZp < 2*MDM so Z' decays visibly with rate ~ eps^2. R0,R7,R12,R13,R21,R22 have MZp 23-47 GeV with eps 0.007-0.1, orders above the eps~1e-3 scouting reach; R11,R20 sit at MZp 562-575 GeV with eps 0.014-0.036, visible as a narrow high-mass dimuon; the other 15 regions have eps <= 3e-3 (mostly <=1e-4) and stay invisible (R4, R14 marginal at ~2e-3).",
        "status": "Splits!",
        "outcomes": [
          {"label": "20-50 GeV", "regions": ["R0", "R7", "R12", "R13", "R21", "R22"]},
          {"label": "550-580 GeV", "regions": ["R11", "R20"]},
          {"label": "none", "regions": ["R1", "R2", "R3", "R4", "R5", "R6", "R8", "R9", "R10", "R14", "R15", "R16", "R17", "R18", "R19"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R3+R4+R5+R6+R8+R9+R10+R14+R15+R16+R17+R18+R19",
          "name": "CTA deep-GC spectral endpoint fit",
          "observable": "WW gamma spectrum endpoint E_end >= 645 GeV ?",
          "reasoning": "E_end = MDM. R3 (657-691 GeV) and R8 (648-695) lie above 645 GeV; the rest cluster at 578-660 GeV. With flux 10-100x the CTA limit, the endpoint localizes to ~5%; R1 (587-660) straddles the cut and is assigned 'no' - marginal.",
          "feasibility": "CTA-South GC halo observations; energy resolution ~10% at 0.1-1 TeV, energy-scale systematic ~2-3%; needs the already-planned deep GC exposure plus high signal statistics (given here), improvement factor ~2 in endpoint localization; dominant systematic: halo-profile/spectral-shape degeneracy.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R3", "R8"]},
            {"label": "no", "regions": ["R1", "R2", "R4", "R5", "R6", "R9", "R10", "R14", "R15", "R16", "R17", "R18", "R19"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_yes_no",
      "lit_review": {
        "name": "LHCb/CMS scouting dark-photon dimuon search",
        "observable": "prompt mumu resonance, 1-600 GeV, sigma*BR >~ 0.1 fb ?",
        "refs": ["arXiv:1710.02867", "arXiv:1912.04776"],
        "reasoning": "Z' always decays visibly (MZp < 2*MDM); production ~ eps^2. Regions assigned 'seen' when the geometric mean of their eps interval exceeds ~2e-3, the prompt dimuon reach across 1-600 GeV. Broad-eps blobs (R0, R1, R5) straddle the reach; the measurement would sub-split them - assigned by log-midpoint, stated as marginal.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R3", "R4", "R6", "R8", "R11", "R14", "R17", "R18", "R19", "R28", "R30", "R31", "R36", "R38", "R39", "R40", "R41", "R42", "R43", "R45", "R46", "R50", "R52", "R53", "R55", "R61", "R62", "R67", "R68", "R69", "R70", "R71", "R74", "R75", "R76", "R79", "R83", "R84", "R86", "R91", "R95", "R96", "R97", "R98", "R99", "R100", "R101", "R106", "R112", "R115", "R123", "R127", "R128", "R131", "R132", "R133", "R134", "R140", "R144", "R145", "R147", "R149", "R150", "R152", "R153", "R154", "R155", "R156", "R161", "R162", "R163", "R164", "R166", "R169", "R170", "R171", "R172", "R174", "R175", "R176", "R178", "R180", "R181"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R5", "R7", "R9", "R10", "R12", "R13", "R15", "R16", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R29", "R32", "R33", "R34", "R35", "R37", "R44", "R47", "R48", "R49", "R51", "R54", "R56", "R57", "R58", "R59", "R60", "R63", "R64", "R65", "R66", "R72", "R73", "R77", "R78", "R80", "R81", "R82", "R85", "R87", "R88", "R89", "R90", "R92", "R93", "R94", "R102", "R103", "R104", "R105", "R107", "R108", "R109", "R110", "R111", "R113", "R114", "R116", "R117", "R118", "R119", "R120", "R121", "R122", "R124", "R125", "R126", "R129", "R130", "R135", "R136", "R137", "R138", "R139", "R141", "R142", "R143", "R146", "R148", "R151", "R157", "R158", "R159", "R160", "R165", "R167", "R168", "R173", "R177", "R179", "R182", "R183", "R184", "R185"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R5+R7+R9+R10+R12+R13+R15+R16+R20+R21+R22+R23+R24+R25+R26+R27+R29+R32+R33+R34+R35+R37+R44+R47+R48+R49+R51+R54+R56+R57+R58+R59+R60+R63+R64+R65+R66+R72+R73+R77+R78+R80+R81+R82+R85+R87+R88+R89+R90+R92+R93+R94+R102+R103+R104+R105+R107+R108+R109+R110+R111+R113+R114+R116+R117+R118+R119+R120+R121+R122+R124+R125+R126+R129+R130+R135+R136+R137+R138+R139+R141+R142+R143+R146+R148+R151+R157+R158+R159+R160+R165+R167+R168+R173+R177+R179+R182+R183+R184+R185",
          "name": "Extended-mass forward displaced-A' detector",
          "observable": "displaced mumu/hadronic vertex, m(A') 1-10 GeV, ctau 0.01-10 m ?",
          "reasoning": "Regions with MZp <~ 5 GeV and eps ~ 1e-6-1e-4 (R34, R48, R87, R89, R111, R182) give ctau ~ cm-m via ctau ~ 0.8mm*(1e-4/eps)^2*(0.1 GeV/m); the other 97 regions have MZp too heavy for beam-dump production or eps outside the displaced band.",
          "feasibility": "Closest: SHiP / FASER2, which reach eps ~ 1e-6-1e-4 only for m_A' <~ 2-3 GeV (meson decay + p-bremsstrahlung production); extending to 5-10 GeV requires Drell-Yan/charm production modes, a ~3-10x extension in mass-coupling coverage; dominant systematic: proton-bremsstrahlung production-rate modeling.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R34", "R48", "R87", "R89", "R111", "R182"]},
            {"label": "not seen", "regions": ["R0", "R1", "R2", "R5", "R7", "R9", "R10", "R12", "R13", "R15", "R16", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R29", "R32", "R33", "R35", "R37", "R44", "R47", "R49", "R51", "R54", "R56", "R57", "R58", "R59", "R60", "R63", "R64", "R65", "R66", "R72", "R73", "R77", "R78", "R80", "R81", "R82", "R85", "R88", "R90", "R92", "R93", "R94", "R102", "R103", "R104", "R105", "R107", "R108", "R109", "R110", "R113", "R114", "R116", "R117", "R118", "R119", "R120", "R121", "R122", "R124", "R125", "R126", "R129", "R130", "R135", "R136", "R137", "R138", "R139", "R141", "R142", "R143", "R146", "R148", "R151", "R157", "R158", "R159", "R160", "R165", "R167", "R168", "R173", "R177", "R179", "R183", "R184", "R185"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_yes",
      "lit_review": {
        "name": "LHCb dark-photon dimuon search, mass measurement",
        "observable": "prompt mumu resonance sigma*BR >~ 0.1 fb; m
(mumu) 15-40 vs 2-10 GeV ?",
        "refs": ["arXiv:1710.02867", "arXiv:1910.06926"],
        "reasoning": "R1 (MZp 19-25, eps=0.1) and R3 (36.6, eps 0.03-0.06) give a 15-40 GeV dimuon; R4,R6,R9,R13 (MZp 2.3-9.9, eps 1.2e-3-0.1) a light one; R0,R2,R5,R7,R8,R10,R11,R12 have eps below prompt reach (R0 broad, assigned by log-midpoint).",
        "status": "Splits!",
        "outcomes": [
          {"label": "15-40 GeV", "regions": ["R1", "R3"]},
          {"label": "2-10 GeV", "regions": ["R4", "R6", "R9", "R13"]},
          {"label": "none", "regions": ["R0", "R2", "R5", "R7", "R8", "R10", "R11", "R12"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2+R5+R7+R8+R10+R11+R12",
          "name": "Belle II 50/ab gamma-A' scan",
          "observable": "e+e- -> gamma A'(->mumu), eps down to 2e-4, m 1-6 GeV ?",
          "reasoning": "R0 (eps up to 0.1 in part of the blob) and R2 (up to 5e-4) fall in reach; R5,R7,R8,R10,R11,R12 have eps <= 3e-5 and stay hidden.",
          "feasibility": "Belle II, funded; current ~0.5/ab gives eps~1e-3, nominal 50/ab projects eps~2e-4 (factor ~2-5 improvement, no upgrade); dominant systematic: irreducible QED mumugamma background.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R2"]},
            {"label": "not seen", "regions": ["R5", "R7", "R8", "R10", "R11", "R12"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_no",
      "lit_review": {
        "name": "LHCb dark-photon dimuon search",
        "observable": "prompt mumu resonance sigma*BR >~ 0.1 fb; m(mumu) 16-24 vs 1-10 GeV ?",
        "refs": ["arXiv:1710.02867", "arXiv:1912.04776"],
        "reasoning": "R0 sits at MZp 16.6-23.9 with eps=0.1; R3-R7,R9,R11-R17 have MZp 1-10 GeV with eps >= 1e-3; R1,R2,R8,R10 have eps 8e-6-2.4e-3 (log-midpoints below 1e-3) and are invisible to prompt searches.",
        "status": "Splits!",
        "outcomes": [
          {"label": "16-24 GeV", "regions": ["R0"]},
          {"label": "1-10 GeV", "regions": ["R3", "R4", "R5", "R6", "R7", "R9", "R11", "R12", "R13", "R14", "R15", "R16", "R17"]},
          {"label": "none", "regions": ["R1", "R2", "R8", "R10"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R8+R10",
          "name": "Belle II 50/ab gamma-A' scan",
          "observable": "gamma A'(->mumu) at eps ~ 2e-4; m(A') >= 3 GeV ?",
          "reasoning": "All four regions have eps upper edges 5.7e-4-2.4e-3, within Belle II nominal reach; the measured mass separates R2 (3.6-5.8 GeV) from R1,R8,R10 (1-1.4 GeV).",
          "feasibility": "Belle II, funded; 50/ab projects eps~2e-4 for 1-8 GeV, factor ~2-3 beyond current; dominant systematic: QED mumugamma continuum.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "3.5-6 GeV", "regions": ["R2"]},
            {"label": "1-1.4 GeV", "regions": ["R1", "R8", "R10"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_no_no_no",
      "lit_review": {
        "name": "LHCb dark-photon dimuon search",
        "observable": "prompt mumu resonance, m 1-5.4 GeV, sigma*BR >~ 0.1 fb ?",
        "refs": ["arXiv:1710.02867", "arXiv:1910.06926"],
        "reasoning": "All regions have MZp 1-5.4 GeV; those with eps log-midpoint >= 1e-3 (R1,R2,R6,R8,R10,R14,R15,R19,R26) are inside LHCb prompt reach; the rest are below it.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1", "R2", "R6", "R8", "R10", "R14", "R15", "R19", "R26"]},
          {"label": "not seen", "regions": ["R0", "R3", "R4", "R5", "R7", "R9", "R11", "R12", "R13", "R16", "R17", "R18", "R20", "R21", "R22", "R23", "R24", "R25"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R3+R4+R5+R7+R9+R11+R12+R13+R16+R17+R18+R20+R21+R22+R23+R24+R25",
          "name": "Belle II 50/ab gamma-A' scan",
          "observable": "gamma A'(->mumu/ee) at eps >= ~1e-4, m 1-5 GeV ?",
          "reasoning": "Regions with eps upper edge >= ~1e-4 (R0,R3,R4,R9,R12,R13,R17,R18,R22,R23,R24,R25) are reachable at 50/ab; R5,R7,R11,R16,R20,R21 have eps <= 6e-5 and remain hidden.",
          "feasibility": "Belle II, funded; nominal 50/ab reach eps~2e-4, factor ~2-3 beyond current dataset; systematic: QED continuum background.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R3", "R4", "R9", "R12", "R13", "R17", "R18", "R22", "R23", "R24", "R25"]},
            {"label": "not seen", "regions": ["R5", "R7", "R11", "R16", "R20", "R21"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes_yes_yes_yes_no_yes_no",
      "lit_review": {
        "name": "Planck CMB energy-injection bound",
        "observable": "p_ann = f_eff*sigmav/m < 3.2e-28 cm3/s/GeV ?",
        "refs": ["arXiv:1807.06209", "arXiv:1506.03811"],
        "reasoning": "All ten regions share MDM 4.4-5.2 GeV, MZp 1-2.6, gU1p 0.042, alpha1 0.004; the CMB s-wave bound tests the shared sigmav (in tension for s-wave bb at 10-100x Fermi) but is identical across regions, which differ only in dark quartics alpha2-6 - no external measurement distinguishes them.",
        "status": "No Split!",
        "outcomes": [
          {"label": "all", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9",
          "name": "Ultra-deep DM self-interaction probe",
          "observable": "sigma/m >= 1e-5 cm2/g from halo cores/mergers ?",
          "reasoning": "Quartic-driven self-scattering sigma/m = lambda^2/(64 pi MDM^3) differs by ~1e4 between large-quartic regions (R0,R1,R2,R5,R7,R8,R9; alpha3/4 up to 10) and small-quartic ones (R3,R4,R6), but both sit at 1e-8-1e-5 cm2/g.",
          "feasibility": "Closest probe: cluster mergers / halo-shape SIDM constraints at sigma/m ~ 0.5 cm2/g; required sensitivity ~1e-5 cm2/g is >1e4 beyond any proposed astrophysical technique; dominant systematic: baryonic feedback on halo profiles.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R1", "R2", "R5", "R7", "R8", "R9"]},
            {"label": "no", "regions": ["R3", "R4", "R6"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes_yes_yes_yes_no_no_no_no",
      "lit_review": {
        "name": "Belle II single-photon missing-mass onset",
        "observable": "e+e- -> gamma + invisible: M_miss onset >= 3 GeV ?",
        "refs": ["arXiv:1808.10567"],
        "reasoning": "Both regions have MZp=1 GeV, eps=0.1, so gamma + Z'* -> gamma SS has a large rate; the missing-mass spectrum turns on at 2*MDM = 4.45 GeV (R1, MDM=2.2) vs 2.0 GeV (R0, MDM=1.0), well beyond Belle II's ~50 MeV recoil-mass resolution.",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R1"]},
          {"label": "no", "regions": ["R0"]}
        ]
      },
      "novel": []
    },
    {
      "leaf_id": "root_no_yes_yes_yes_no_yes",
      "lit_review": {
        "name": "Planck CMB energy-injection bound",
        "observable": "p_ann = f_eff*sigmav/m < 3.2e-28 cm3/s/GeV ?",
        "refs": ["arXiv:1807.06209", "arXiv:1506.03811"],
        "reasoning": "All nine regions share MDM 4-5.5 GeV, MZp 1-1.5, eps <= 7e-5, alpha1 0.002-0.003; the CMB test is identical across regions, which differ only in quartics - honest failure.",
        "status": "No Split!",
        "outcomes": [
          {"label": "all", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8",
          "name": "Ultra-deep DM self-interaction probe",
          "observable": "sigma/m >= 1e-5 cm2/g from halo cores/mergers ?",
          "reasoning": "Large-quartic regions (R0,R3,R7,R8 with alpha4/alpha5 up to 10) predict ~1e4 larger sigma/m than R1,R2,R4,R5,R6, but both far below astrophysical sensitivity.",
          "feasibility": "Cluster SIDM bounds at 0.5 cm2/g are the closest instrument; >1e4 improvement needed; systematic: baryonic feedback.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R3", "R7", "R8"]},
            {"label": "no", "regions": ["R1", "R2", "R4", "R5", "R6"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes_yes_yes_no_no_no",
      "lit_review": {
        "name": "LHCb dark-photon dimuon mass measurement",
        "observable": "prompt mumu resonance: m(mumu) = 1.0, 1.3, or 4.7 GeV ?",
        "refs": ["arXiv:1710.02867", "arXiv:1910.06926"],
        "reasoning": "All three regions are inside LHCb prompt reach (R0: m=1.0 GeV, eps=0.1; R1: m=4.7 GeV, eps=0.1; R2: m=1.33 GeV, eps~0.01); the measured resonance mass separates them fully.",
        "status": "Splits!",
        "outcomes": [
          {"label": "4.7 GeV", "regions": ["R1"]},
          {"label": "1.3 GeV", "regions": ["R2"]},
          {"label": "1.0 GeV", "regions": ["R0"]}
        ]
      },
      "novel": []
    },
    {
      "leaf_id": "root_no_yes_yes_no_yes",
      "lit_review": {
        "name": "LHCb dark-photon dimuon search",
        "observable": "prompt mumu resonance, m 1-3.3 GeV, eps reach ~1e-3 ?",
        "refs": ["arXiv:1710.02867", "arXiv:1910.06926"],
        "reasoning": "Only R5 (eps to 0.047), R16 (1.0-1.5e-3) and R18 (4.5-7.1e-3) exceed the prompt eps~1e-3 reach; all other regions sit below (R11 max 2e-3 marginal, assigned not-seen by log-midpoint).",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R5", "R16", "R18"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R17", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R6+R7+R8+R9+R10+R11+R12+R13+R14+R15+R17+R19+R20+R21+R22+R23+R24+R25+R26+R27",
          "name": "Belle II 50/ab gamma-A' scan",
          "observable": "gamma A'(->mumu) at eps >= ~2e-4, m 1-3.3 GeV ?",
          "reasoning": "R1,R2,R4,R9,R10,R11,R13,R14,R23,R26 have eps upper edges 2.6e-4-3.7e-3, within nominal Belle II reach; the remaining 15 regions (eps <= ~1e-4) stay hidden and differ only in quartics.",
          "feasibility": "Belle II, funded; 50/ab projects eps~2e-4, factor ~2-3 beyond current; systematic: QED mumugamma background.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R1", "R2", "R4", "R9", "R10", "R11", "R13", "R14", "R23", "R26"]},
            {"label": "not seen", "regions": ["R0", "R3", "R6", "R7", "R8", "R12", "R15", "R17", "R19", "R20", "R21", "R22", "R24", "R25", "R27"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes_yes_no_no_yes_no_no",
      "lit_review": {
        "name": "AMS-02 cosmic-ray positron spectrum",
        "observable": "positron bump E < 94 GeV, sigmav(e+e-) >= 1e-26 cm3/s ?",
        "refs": ["arXiv:1306.3983"],
        "reasoning": "R1 (gU1p up to 0.073, MZp 56-94 GeV partly open) has sigmav(Z'Z') ~ gU1p^4 ~ 2.8e-5 comparable to portal sigmav(WW) ~ alpha1^2 ~ 7e-6, and kinetically-mixed Z' decays are ~30% leptonic, giving a hard positron flux at AMS-02 reach; R0 (Z' at 2-2.8 TeV, channel closed) and R2 (gU1p=0.003, g^4 negligible) predict none. Marginal for R1's low-gU1p corner.",
        "status": "Splits!",
        "outcomes": [
          {"label": "excess", "regions": ["R1"]},
          {"label": "none", "regions": ["R0", "R2"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2",
          "name": "FCC-hh 100 TeV dilepton search",
          "observable": "ee/mumu resonance 2-3 TeV, sigma*BR >= 0.01 fb ?",
          "reasoning": "R0's 2-2.8 TeV Z' with eps=0.1 is trivially visible at 100 TeV; R2's 1 GeV, eps=1e-6 Z' is invisible to any collider.",
          "feasibility": "FCC-hh (proposed, 30/ab) projects Z' dilepton reach to tens of TeV for SM-strength couplings; eps=0.1 at 2.5 TeV needs no improvement beyond the proposed machine, but the machine itself is next-generation; systematic: high-mass PDF uncertainty.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0"]},
            {"label": "not seen", "regions": ["R2"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes_yes_no_no_no_yes_yes",
      "lit_review": {
        "name": "No external discriminator found",
        "observable": "p_ann = f_eff*sigmav/m < 3.2e-28 cm3/s/GeV ?",
        "refs": ["arXiv:1807.06209"],
        "reasoning": "R0 and R1 coincide in MDM (92.3-92.6), MZp (~18-21), eps (~1.4e-4), gU1p (0.1597) and alpha1; they differ only in alpha2/alpha4 details; the eps~1.4e-4 dimuon rate is ~50x below scouting reach; every literature measurement predicts identical outcomes.",
        "status": "No Split!",
        "outcomes": [
          {"label": "all", "regions": ["R0", "R1"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1",
          "name": "10x-coupling dimuon scouting upgrade",
          "observable": "mumu resonance at eps ~ 1e-4: m(mumu) < 20.5 GeV ?",
          "reasoning": "R0 spans MZp 17.6-20.8 GeV while R1 is pinned at 20.83; a resonance found below 20.5 GeV selects R0 (partial overlap at the top of R0's range - stated).",
          "feasibility": "Closest: CMS dimuon scouting, reach eps~1e-3 at 20 GeV; needs 10x coupling (100x rate) improvement, beyond HL-LHC statistics alone - would need a dedicated trigger-level program; systematic: DY continuum modeling.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "below 20.5", "regions": ["R0"]},
            {"label": "at 20.8", "regions": ["R1"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes_yes_no_no_no_yes_no",
      "lit_review": {
        "name": "SHiP displaced dark-photon vertex",
        "observable": "displaced mumu/hadronic vertex mass >= 1.5 GeV ?",
        "refs": ["arXiv:1504.04956"],
        "reasoning": "Both regions have eps ~ 1e-6, giving ctau ~ 0.3-0.5 m - in SHiP's decay-volume band via proton bremsstrahlung; the reconstructed vertex mass separates R0 (MZp 1.6-1.7 GeV) from R1 (1.0-1.3 GeV).",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R0"]},
          {"label": "no", "regions": ["R1"]}
        ]
      },
      "novel": []
    },
    {
      "leaf_id": "root_no_yes_yes_no_no_no_no_no",
      "lit_review": {
        "name": "LHCb dark-photon dimuon mass measurement",
        "observable": "prompt mumu resonance: m(mumu) = 4.7 vs 1.05 GeV vs none ?",
        "refs": ["arXiv:1710.02867", "arXiv:1910.06926"],
        "reasoning": "R2 (m=4.7 GeV, eps=0.1) and R0 (m~1.05 GeV, eps~2.6e-3) are inside prompt reach with distinct masses; R1 (m=3.8 GeV, eps~2e-6) is invisible. Fully split.",
        "status": "Splits!",
        "outcomes": [
          {"label": "4.7 GeV", "regions": ["R2"]},
          {"label": "1.05 GeV", "regions": ["R0"]},
          {"label": "none", "regions": ["R1"]}
        ]
      },
      "novel": []
    },
    {
      "leaf_id": "root_no_yes_no_yes_no",
      "lit_review": {
        "name": "LHCb/CMS scouting dark-photon dimuon search",
        "observable": "prompt mumu resonance, m 1-18 GeV, eps reach ~1e-3 ?",
        "refs": ["arXiv:1710.02867", "arXiv:1912.04776"],
        "reasoning": "MDM (69.67), gU1p (0.1464) and alpha1 (0.001) are pinned; only (MZp, eps) and quartics vary. Regions with eps log-midpoint >= 1e-3 (R1,R2,R4,R8,R11,R15,R22,R25,R28) are visible; R15 marginal at ~1.8e-3.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1", "R2", "R4", "R8", "R11", "R15", "R22", "R25", "R28"]},
          {"label": "not seen", "regions": ["R0", "R3", "R5", "R6", "R7", "R9", "R10", "R12", "R13", "R14", "R16", "R17", "R18", "R19", "R20", "R21", "R23", "R24", "R26", "R27", "R29", "R30"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R3+R5+R6+R7+R9+R10+R12+R13+R14+R16+R17+R18+R19+R20+R21+R23+R24+R26+R27+R29+R30",
          "name": "Belle II 50/ab gamma-A' scan",
          "observable": "gamma A'(->mumu) at eps >= ~2e-4, m 1-10 GeV ?",
          "reasoning": "R5,R6,R12,R13,R20,R21,R24 have eps upper edges 1.8e-4-3.4e-3, reachable; the other 15 regions have eps <= ~1.3e-4 (mostly 1e-6) and differ only in quartics.",
          "feasibility": "Belle II, funded; 50/ab projects eps~2e-4, factor ~2-3 beyond current; systematic: QED continuum.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R5", "R6", "R12", "R13", "R20", "R21", "R24"]},
            {"label": "not seen", "regions": ["R0", "R3", "R7", "R9", "R10", "R14", "R16", "R17", "R18", "R19", "R23", "R26", "R27", "R29", "R30"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes_no_no_yes_yes",
      "lit_review": {
        "name": "LHCb dark-photon dimuon search",
        "observable": "prompt mumu resonance, m 1-16 GeV, eps reach ~1e-3 ?",
        "refs": ["arXiv:1710.02867", "arXiv:1910.06926"],
        "reasoning": "R0 (eps 0.05-0.1), R2 (6.5e-3-0.1), R3 (0.1) and R6 (1.6-3.6e-3) exceed prompt reach; R1 (2.4e-4-2e-3), R4 (2.7-9.4e-4) and R5 (<=1.6e-5) do not.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0", "R2", "R3", "R6"]},
          {"label": "not seen", "regions": ["R1", "R4", "R5"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R4+R5",
          "name": "Belle II 50/ab gamma-A' scan",
          "observable": "gamma A'(->mumu) at eps >= ~2e-4, m 1-16 GeV ?",
          "reasoning": "R1 (to 2e-3) and R4 (to 9.4e-4) are reachable at 50/ab; R5 (eps <= 1.6e-5) is not.",
          "feasibility": "Belle II, funded; 50/ab reach eps~2e-4, factor ~2-3 beyond current; systematic: QED continuum (masses above ~10.6 GeV inaccessible - R1/R4 MZp partly above, marginal).",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R1", "R4"]},
            {"label": "not seen", "regions": ["R5"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes_no_no_no_yes_yes",
      "lit_review": {
        "name": "Planck CMB energy-injection bound",
        "observable": "p_ann = f_eff*sigmav/m < 3.2e-28 cm3/s/GeV ?",
        "refs": ["arXiv:1807.06209", "arXiv:1506.03811"],
        "reasoning": "All nine regions share MDM 4-5.7 GeV, MZp ~1-1.4, eps <= 1.6e-4, alpha1 = 0.001; the CMB prediction is identical across regions, which differ only in quartics.",
        "status": "No Split!",
        "outcomes": [
          {"label": "all", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8",
          "name": "Ultra-deep DM self-interaction probe",
          "observable": "sigma/m >= 1e-5 cm2/g from halo cores/mergers ?",
          "reasoning": "Large-quartic regions (R0,R2,R3,R5,R7,R8; alpha4/alpha6 up to 10) predict ~1e4 larger sigma/m than R1,R4,R6, but all sit >=1e4 below cluster bounds.",
          "feasibility": "Cluster SIDM bounds at 0.5 cm2/g; >1e4 improvement required; systematic: baryonic feedback.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R2", "R3", "R5", "R7", "R8"]},
            {"label": "no", "regions": ["R1", "R4", "R6"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes_no_no_no_no",
      "lit_review": {
        "name": "LHCb/CMS dark-photon dimuon mass measurement",
        "observable": "prompt mumu resonance: m(mumu) = 60, 4.7, 1-1.3 GeV, or none ?",
        "refs": ["arXiv:1710.02867", "arXiv:1912.04776"],
        "reasoning": "R4 (MZp=60.45, eps=0.1) gives a 60 GeV dimuon; R3 (4.7, eps=0.1) a 4.7 GeV one; R0,R2,R7,R9,R13,R14 (m 1-1.3, eps 1.7e-3-0.1) a ~1 GeV one; R1,R5,R6,R8,R10,R11,R12,R15,R16 are below reach (R10 max 1.7e-3 marginal).",
        "status": "Splits!",
        "outcomes": [
          {"label": "60 GeV", "regions": ["R4"]},
          {"label": "4.7 GeV", "regions": ["R3"]},
          {"label": "1-1.3 GeV", "regions": ["R0", "R2", "R7", "R9", "R13", "R14"]},
          {"label": "none", "regions": ["R1", "R5", "R6", "R8", "R10", "R11", "R12", "R15", "R16"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R5+R6+R8+R10+R11+R12+R15+R16",
          "name": "Belle II 50/ab gamma-A' scan",
          "observable": "gamma A'(->mumu/ee) at eps >= ~2e-4, m 1-5 GeV ?",
          "reasoning": "R10 (eps to 1.7e-3) and R15 (to 4.2e-4) are reachable; R1,R5,R6,R8,R11,R12,R16 have eps <= ~1.2e-4 and remain hidden.",
          "feasibility": "Belle II, funded; 50/ab reach eps~2e-4, factor ~2-3 beyond current; systematic: QED continuum.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R10", "R15"]},
            {"label": "not seen", "regions": ["R1", "R5", "R6", "R8", "R11", "R12", "R16"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_yes_yes",
      "lit_review": {
        "name": "CMS scouting dimuon rate measurement",
        "observable": "sigma*BR(mumu) >= ~10 pb at m(mumu) 13-25 GeV ?",
        "refs": ["arXiv:1912.04776", "arXiv:1710.02867"],
        "reasoning": "Every region is dimuon-visible (eps >= 4.5e-3, MDM/gU1p/alpha1 pinned), so the rate, not visibility, splits: sigma*BR ~ eps^2 differs by x16-400 between the eps ~0.03-0.1 group and R6/R10/R14 (eps log-mid 0.007-0.017).",
        "status": "Splits!",
        "outcomes": [
          {"label": "high rate", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R7", "R8", "R9", "R11", "R12", "R13", "R15", "R16"]},
          {"label": "low rate", "regions": ["R6", "R10", "R14"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R6+R10+R14",
          "name": "CTA deep-GC spectral endpoint fit",
          "observable": "WW gamma spectrum endpoint E_end >= 150 GeV ?",
          "reasoning": "R14's MDM extends to 177.6 GeV while R6/R10 are pinned at 136.8; only R14's upper part passes - partial split, stated as marginal.",
          "feasibility": "CTA-South, energy resolution ~10% at 100-200 GeV, energy-scale systematic ~2-3%; needs planned deep GC exposure only; systematic: halo-profile degeneracy.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R14"]},
            {"label": "no", "regions": ["R6", "R10"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R7+R8+R9+R11+R12+R13+R15+R16",
          "name": "Ultra-deep DM self-interaction probe",
          "observable": "sigma/m >= 1e-6 cm2/g from halo cores/mergers ?",
          "reasoning": "These regions coincide in all portal/Z' parameters and differ only in quartics; large-quartic regions (R0-R4,R7,R8,R9,R11,R12,R15,R16) vs small (R5,R13) differ ~1e4 in sigma/m, all >=1e5 below cluster bounds.",
          "feasibility": "Cluster SIDM bounds at 0.5 cm2/g; >1e5 improvement required; systematic: baryonic feedback.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R1", "R2", "R3", "R4", "R7", "R8", "R9", "R11", "R12", "R15", "R16"]},
            {"label": "no", "regions": ["R5", "R13"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_yes_no_no",
      "lit_review": {
        "name": "LHCb/CMS scouting dark-photon dimuon search",
        "observable": "prompt mumu resonance, 1-140 GeV, sigma*BR >~ 0.1 fb ?",
        "refs": ["arXiv:1710.02867", "arXiv:1912.04776"],
        "reasoning": "Same eps^2-rate visibility cut (geometric-mean eps >= 2e-3 across 1-140 GeV); the measured mass further sub-splits the seen group for free. Broad-eps regions (R0,R2,R5) straddle and are assigned by log-midpoint - marginal, stated.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0", "R1", "R2", "R4", "R5", "R6", "R10", "R11", "R12", "R13", "R16", "R18", "R20", "R22", "R23", "R26", "R27", "R28", "R29", "R30", "R32", "R33", "R41", "R42", "R45", "R47", "R48", "R49", "R50", "R56", "R57", "R58", "R59", "R62", "R64", "R67", "R68", "R69", "R70", "R73", "R76", "R78", "R79", "R80", "R82", "R85", "R89", "R90"]},
          {"label": "not seen", "regions": ["R3", "R7", "R8", "R9", "R14", "R15", "R17", "R19", "R21", "R24", "R25", "R31", "R34", "R35", "R36", "R37", "R38", "R39", "R40", "R43", "R44", "R46", "R51", "R52", "R53", "R54", "R55", "R60", "R61", "R63", "R65", "R66", "R71", "R72", "R74", "R75", "R77", "R81", "R83", "R84", "R86", "R87", "R88", "R91", "R92"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R3+R7+R8+R9+R14+R15+R17+R19+R21+R24+R25+R31+R34+R35+R36+R37+R38+R39+R40+R43+R44+R46+R51+R52+R53+R54+R55+R60+R61+R63+R65+R66+R71+R72+R74+R75+R77+R81+R83+R84+R86+R87+R88+R91+R92",
          "name": "CTA deep-GC spectral endpoint fit",
          "observable": "WW gamma spectrum endpoint E_end >= 180 GeV ?",
          "reasoning": "E_end = MDM separates heavy regions (e.g. R3 186-313, R9 216-316, R44 260-295) from light ones (R51 115-130, R61 ~110, R92 126-192); straddling regions (R14,R21,R25,R63,R91) assigned by log-midpoint - marginal.",
          "feasibility": "CTA-South GC halo; ~10% energy resolution, 2-3% energy-scale systematic; with 10-100x-limit flux the endpoint localizes to ~5%; systematic: halo-profile/spectral-shape degeneracy.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R3", "R7", "R8", "R9", "R14", "R17", "R19", "R24", "R34", "R38", "R39", "R40", "R43", "R44", "R52", "R53", "R54", "R77", "R83", "R84", "R86", "R87", "R91"]},
            {"label": "no", "regions": ["R15", "R21", "R25", "R31", "R35", "R36", "R37", "R46", "R51", "R55", "R60", "R61", "R63", "R65", "R66", "R71", "R72", "R74", "R75", "R81", "R88", "R92"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_no_yes_no",
      "lit_review": {
        "name": "MOLLER/P2 parity-violating weak-mixing-angle shift",
        "observable": "delta sin2(theta_eff) >= 1e-4 at Q ~ 0.1 GeV ?",
        "refs": ["arXiv:1411.4088", "arXiv:1802.04759"],
        "reasoning": "A 66-1459 GeV Z' with eps 0.03-0.1 (R0) shifts the low-energy weak mixing angle by eps^2*MZ^2/MZp^2 ~ 1e-4-8e-3, within MOLLER's ~1e-4 sensitivity; R30 (375-433 GeV, eps 0.045-0.1) gives ~2.5e-4, marginal but included; all other regions (MZp up to 10 TeV and/or eps <= 1e-3) predict < 1e-5.",
        "status": "Splits!",
        "outcomes": [
          {"label": "shift", "regions": ["R0", "R30"]},
          {"label": "no shift", "regions": ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R18", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R3+R4+R5+R6+R7+R8+R9+R10+R11+R12+R13+R14+R15+R16+R17+R18+R19+R20+R21+R22+R23+R24+R25+R26+R27+R28+R29",
          "name": "FCC-hh 100 TeV dilepton search",
          "observable": "ee/mumu resonance 0.5-10 TeV, sigma*BR >= 0.01 fb ?",
          "reasoning": "R2,R8,R13,R15,R24,R26,R27 combine MZp 0.45-10 TeV with eps ~0.01-0.1, inside FCC-hh's projected dilepton reach; the remaining 22 regions have eps <= ~1e-3 or MZp otherwise out of reach (R18's 1 GeV, eps 1e-6 Z' included).",
          "feasibility": "FCC-hh (proposed, 30/ab): Z' dilepton reach to tens of TeV at SM-strength coupling, i.e. eps~0.01 at 10 TeV; requires the next-generation machine itself, not an improvement factor beyond it; systematic: large-x PDF uncertainty.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R2", "R8", "R13", "R15", "R24", "R26", "R27"]},
            {"label": "not seen", "regions": ["R1", "R3", "R4", "R5", "R6", "R7", "R9", "R10", "R11", "R12", "R14", "R16", "R17", "R18", "R19", "R20", "R21", "R22", "R23", "R25", "R28", "R29"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_no_no_no",
      "lit_review": {
        "name": "No external discriminator exists",
        "observable": "p_ann = f_eff*sigmav/m < 3.2e-28 cm3/s/GeV ?",
        "refs": ["arXiv:1807.06209"],
        "reasoning": "All seven regions have identical MDM=297.9, MZp=1.212, eps=0.1, gU1p=0.1217, alpha1=0.003822 - every external observable, including the 1.2 GeV eps=0.1 dark photon LHCb would see, is identical; regions differ purely in alpha2-6.",
        "status": "No Split!",
        "outcomes": [
          {"label": "all", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6",
          "name": "Ultra-deep DM self-interaction probe",
          "observable": "sigma/m >= 1e-6 cm2/g from halo cores/mergers ?",
          "reasoning": "Only the quartics differ: R0,R3,R4,R5 (couplings up to 10) predict sigma/m ~1e4 above R1,R2,R6, but all are >=1e5 below cluster SIDM bounds.",
          "feasibility": "Cluster mergers/halo shapes constrain sigma/m ~ 0.5 cm2/g today; required sensitivity 1e-6 cm2/g is >1e5 beyond any proposed technique; systematic: baryonic feedback on halo profiles.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R3", "R4", "R5"]},
            {"label": "no", "regions": ["R1", "R2", "R6"]}
          ]
        }
      ]
    }
  ]
}
```