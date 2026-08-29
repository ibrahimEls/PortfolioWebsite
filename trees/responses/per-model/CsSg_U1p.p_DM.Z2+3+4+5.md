## Reasoning

**Caveat on references.** The task required a single uninterrupted reply, so I could not run WebSearch/WebFetch to re-verify arXiv IDs; the IDs below are cited from memory of the primary literature (LHCb 1910.06926 dark-photon dimuon; BaBar 1406.2980; SHiP 1504.04956; Belle II Physics Book 1808.10567; CTA GC 2007.16129; Fermi dwarfs 1503.02641; SuperCDMS SNOLAB 1610.00006; LZ 2207.03764; DarkSide-20k 1707.08145; Planck 1807.06209; dark-sector report 1311.0029). They should be re-checked before publication.

**Physics available beyond the catalog.** For this model the only handles outside our 18 observables are (i) the dark photon itself — visible `Z'→ℓℓ` at LHCb/BaBar/Belle II (ε ≳ 10⁻³, m_Z' ≲ 70 GeV) and at proton beam dumps (SHiP: 10⁻⁸ ≲ ε ≲ 10⁻⁵, m_Z' ≲ 2 GeV); (ii) the *secluded* annihilation `SS*→Z'Z'→4f`, whose rate ⟨σv⟩ ≈ g'⁴/(16π m_DM²) = 2.3×10⁻¹⁹ g'⁴/m_DM² cm³/s is a CTA/Fermi-dwarf observable and is **not** what the catalog's per-SM-channel Fermi limits encode; (iii) the DM mass itself, reconstructable from the recoil spectrum wherever a direct-detection signal exists. I checked DM self-interaction as a discriminator and it is dead everywhere: the contact quartics give σ/m = λ²/(64π m³) ≲ 10⁻¹⁰ cm²/g even for λ=10, nine orders below cluster sensitivity — I use it only once, as an explicitly failed (speculative) node.

**Leaves 1–3 (`root_yes_yes_yes_no`, `root_yes_yes_no_yes`, `root_yes_yes_no_no`, 52 regions each, m_DM = 320–710 GeV).** gU1p is the discriminating parameter. Regions with g' ≈ 0.33–0.51 and m_Z' < m_DM give ⟨σv⟩(Z'Z') = 1.4–3.3×10⁻²⁶ cm³/s (e.g. g'=0.431, m=640 GeV → 2.0×10⁻²⁶; g'=0.514, m=704 → 3.3×10⁻²⁶) — at or just above the CTA GC halo reach for cascade spectra. Regions with g' ≈ 0.02–0.15 give 10⁻³¹–10⁻²⁸ cm³/s, six orders below anything. Region R7/R0 of leaf 2 (m_Z' = 986 GeV > m_DM = 546 GeV) has the secluded channel kinematically shut and also lands in "no". I assign each region by the log-midpoint of its gU1p range; the handful of regions spanning 0.04–0.45 (leaf-1 R0, leaf-2 R2) are genuinely straddling and I flag that. Within the CTA-visible group the residual handle is the cascade *shape*: for m_Z'/m_DM ≈ 0.8 (leaf-1 R14/R15, leaf-2/3 heavy-Z' regions) the Z' is nearly at rest and the photon spectrum is hard, whereas m_Z'/m_DM ≈ 0.03–0.1 gives boost γ ≈ 10–30 and a much softer spectrum — the flux ratio Φ(10 GeV)/Φ(100 GeV) goes from ≲ 10 to ≳ 50. For the CTA-blind group the only remaining handle is ε, which spans 10⁻⁶–0.1 within single regions.

**Leaf `root_yes_no_yes_yes_yes_yes_no` (5 regions).** R0 sits at m_DM = 67.5–69.8 GeV, R1–R4 at 94.2–95.2 GeV. With σ_SI at 1–10× XLZD, a Xe+Ar joint fit reconstructs m_DM to ±10–15% at 100 GeV (reduced mass on Xe changes 43.6→53.4 GeV between the two clusters), so an 80 GeV cut separates R0 cleanly. R1–R4 then differ only in the dark sector: R1 (m_Z' = 2.0–2.8 TeV, ε = 0.1), R2 (22 GeV, ε = 7×10⁻⁵), R3 (10 GeV, ε = 10⁻⁶), R4 (1 GeV, ε = 10⁻⁶); an e⁺e⁻ dark-photon factory reaching ε = 10⁻⁵ for 1–30 GeV picks out R2 only.

**Leaf `root_yes_no_yes_yes_yes_no` (3).** R1/R2 have m_Z' = 1.0–1.7 GeV with ε = 10⁻⁶ — squarely inside SHiP's dark-photon window; R0 (m_Z' = 20.8 GeV, ε = 1.3×10⁻⁴) is outside it in both mass and lifetime. R1 vs R2 then differ only by m_Z' (1.60–1.68 vs 1.00–1.28 GeV), resolvable at the 10–20 MeV level in a displaced-dilepton spectrometer.

**Leaf `root_yes_no_yes_yes_no_yes_no_no` (13, m_DM ≈ 4.6–5.6 GeV).** All 13 share g' = 0.042, giving ⟨σv⟩ ≈ 2.9×10⁻²⁶ cm³/s — note this is ~4× above the Planck CMB bound at 5 GeV (⟨σv⟩ < 8×10⁻²⁷ for f_eff ≈ 0.2), so the whole leaf is arguably already dead; but CMB does not *split* it. What splits it is ε: nine regions sit at ε = 10⁻⁶–10⁻⁵ (SHiP-visible displaced vertices) and four (R5, R8, R9, R12) at ε = 1.4×10⁻⁵–1.8×10⁻⁴, too prompt to reach SHiP's decay volume and too weak for Belle II. The surviving nine differ only in m_Z' (1.0 vs 1.5 GeV).

**Leaf `root_yes_no_yes_yes_no_no_no_no` (3).** R1 (ε = 5×10⁻³–1.3×10⁻², m_Z' = 11–16 GeV) is squarely inside the LHCb/BaBar dimuon-excluded band; R0/R2 (ε = 1.3×10⁻⁴) are not. R0 and R2 are then the *same physical point* (m_DM = 92.3 GeV, m_Z' = 20.8, g' = 0.1597, ε = 1.3×10⁻⁴) differing only in the DM quartics α₂,α₅,α₆; predicted σ/m = 1.4×10⁻¹⁰ (R0, α₆ ≈ 10) vs 2.3×10⁻¹¹ cm²/g (R2, α₆ ≈ 4) — a real factor-6 difference nine orders below cluster sensitivity. This is my one honest-failure novel node.

**Leaf `root_yes_no_yes_no_no` (86, m_DM = 53–97 GeV).** 21 regions carry m_Z' < 70 GeV with ε reaching 10⁻³–0.1 → an on-shell dimuon resonance at LHCb/Belle II; the other 65 have either ε ≤ 10⁻⁴ or m_Z' ≥ 100 GeV (up to 10 TeV). Within the invisible group the DM mass separates a 96.4 GeV cluster (plus 89–90 GeV) from a 69.7 GeV cluster and a 53–82 GeV spread; with σ_SI at 1–10× XLZD the multi-target recoil fit resolves this at ±5–10%.

**Leaf `root_yes_no_no_yes_yes` (21) and `root_yes_no_no_yes_no` (12).** Both are dominated by one physical point (m_DM = 136.8 GeV, m_Z' ≈ 15–17 GeV, g' = 0.202, ε ≈ 0.02–0.1) which the LHCb/BaBar dimuon search excludes outright; the outliers are R10 (m_DM = 288–308 GeV, m_Z' = 1–1.6 GeV, ε = 10⁻⁶) and, in the second leaf, R10 (108.8 GeV) and R11 (300 GeV). The residual split inside the dimuon-visible group is the DM mass (136.8 vs 150–290 GeV), available because all these points have XLZD+DarkSide signals.

**Leaf `root_yes_no_no_no_no` (115).** 22 regions have m_Z' ≲ 70 GeV with ε ≥ 10⁻³ (visible dimuon); 93 do not — most of those sit at m_Z' = 10²–10⁴ GeV or ε ≈ 10⁻⁶. The DM mass again subdivides: a dense 97.6–97.9 GeV cluster versus regions at 110–315 GeV.

**Leaf `root_no_yes` (248, m_DM = 317–710 GeV, DD-blind).** Same CTA logic: 220 regions have g' ≳ 0.30 → ⟨σv⟩ ≈ 1–3×10⁻²⁶ cm³/s, 28 have g' log-midpoint below 0.30 → ≤ 5×10⁻²⁷. Caveat: the largest region (R0, 4338 pts) spans g' = 0.097–0.48 and genuinely straddles the cut. Within the CTA-visible 220 the only further handle I can defend is the mediator mass through the cascade spectral shape, which separates the 19 regions with m_Z' ≳ 100 GeV (Z' barely boosted, hard spectrum) from the rest. This leaf remains heavily degenerate and I say so.

**Light-DM leaves (`root_no_no_*`, m_DM = 1–6 GeV).** These have no DD, no ID, no h→inv discrimination left — the coarse BR(h→inv) bins are exhausted. The one absolute, model-independent observable is the nuclear-recoil endpoint at a low-threshold Ge/Si detector: E_R,max = 2μ²v_max²/m_N gives 0.1 keV at m_DM = 1 GeV, 0.3 keV at 2.2 GeV and ~1 keV at 5 GeV, all within SuperCDMS SNOLAB's 40 eV-scale resolution, and the Higgs-portal couplings here (α₁ ≈ 1–5×10⁻³) put σ_SI in the 10⁻⁴³–10⁻⁴² cm² band it probes. That splits the 1 GeV from the ~5 GeV clusters in every one of these leaves. The residual splits are then ε (10⁻⁶ vs ≥10⁻⁴ — a factor ~5–10 beyond Belle II 50/ab at 1 GeV, hence "unlikely") and m_Z' (1.0 vs 3.2 GeV — a resolution-limited, hence "possible", measurement).

```json
{
  "model": "CsSg_U1p[+]_DM.Z2+3+4+5",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_yes_no",
      "lit_review": {
        "name": "CTA Galactic Centre halo, Z'Z' cascade",
        "observable": "sigma_v >= 2e-26 cm^3/s ?",
        "refs": ["arXiv:2007.16129", "arXiv:1503.02641"],
        "reasoning": "Secluded annihilation SS*->Z'Z' gives sigma_v = 2.3e-19 g'^4/m_DM^2 cm^3/s. Regions with gU1p 0.33-0.51 and m_Z'<m_DM predict 1.4-3.3e-26 cm^3/s (R2: g'=0.431,m=640 -> 2.0e-26; R14/R15: g'=0.514,m=704 -> 3.3e-26), at the CTA GC cascade reach. Regions with gU1p 0.018-0.15 predict 1e-31 to 2e-28 cm^3/s, six orders below. R7 has m_Z'=986 GeV > m_DM=546 GeV so the channel is shut. Marginal: leaf R0 spans gU1p 0.036-0.42 and genuinely straddles the cut; assigned by log-midpoint 0.12.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1","R2","R4","R5","R10","R11","R14","R15","R16","R18","R19","R21","R22","R23","R26","R31","R36","R38","R39","R41","R42","R43","R44","R45","R46"]},
          {"label": "not seen", "regions": ["R0","R3","R6","R7","R8","R9","R12","R13","R17","R20","R24","R25","R27","R28","R29","R30","R32","R33","R34","R35","R37","R40","R47","R48","R49","R50","R51"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R4+R5+R10+R11+R14+R15+R16+R18+R19+R21+R22+R23+R26+R31+R36+R38+R39+R41+R42+R43+R44+R45+R46",
          "name": "GC cascade spectral-hardness imaging",
          "observable": "flux ratio Phi(10 GeV)/Phi(100 GeV) >= 30 ?",
          "reasoning": "The 4f cascade photon spectrum softens with the Z' boost gamma = m_DM/m_Z'. R14/R15 (m_Z'=560 GeV, m_DM=704, gamma=1.25) give a hard spectrum, ratio ~5; R2,R5,R10,R11,R22,R23,R26,R31,R43,R44,R45 (m_Z'/m_DM 0.1-0.3) give ratio 10-30; R4,R16,R18,R19,R21,R36,R38,R39,R41,R42,R46 (m_Z' 20-55 GeV, gamma 12-30) give ratio 50-200.",
          "feasibility": "Closest is CTA-North+South, which measures GC spectra over 0.05-100 TeV with ~10% energy resolution but ~30% systematic on diffuse-background subtraction between 10 and 100 GeV; a hardness ratio to 20% needs a joint Fermi-LAT/CTA cross-calibrated GC map, roughly 2-3x better background control than current CTA projections.",
          "feasibility_rating": "unlikely",
```json
          "outcomes": [
            {"label": "yes", "regions": ["R4","R16","R18","R19","R21","R36","R38","R39","R41","R42","R46"]},
            {"label": "no", "regions": ["R1","R2","R5","R10","R11","R14","R15","R22","R23","R26","R31","R43","R44","R45"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_yes_no_yes",
      "lit_review": {
        "name": "CTA Galactic Centre halo, Z'Z' cascade",
        "observable": "sigma_v >= 2e-26 cm^3/s ?",
        "refs": ["arXiv:2007.16129", "arXiv:1503.02641"],
        "reasoning": "sigma_v = 2.3e-19 g'^4/m_DM^2 cm^3/s. gU1p 0.31-0.51 with m_Z' < m_DM gives 1.4-3.3e-26 cm^3/s (R13/R20/R22-R27/R44-R47: g'=0.514, m=700 -> 3.3e-26; R8/R9/R40-R43: g'=0.431, m=615 -> 2.1e-26). gU1p 0.02-0.15 gives 1e-31 to 2e-28. R0 (g'=7.2) has m_Z'=986 GeV > m_DM=546 GeV, so Z'Z' is closed and the s-channel rate is eps^2 e^2 suppressed: no cascade.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1","R4","R5","R6","R7","R8","R9","R10","R11","R13","R14","R15","R16","R20","R21","R22","R23","R24","R25","R26","R27","R28","R29","R32","R35","R40","R41","R42","R43","R44","R45","R46","R47","R48","R49"]},
          {"label": "not seen", "regions": ["R0","R2","R3","R12","R17","R18","R19","R30","R31","R33","R34","R36","R37","R38","R39","R50","R51"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2+R3+R12+R17+R18+R19+R30+R31+R33+R34+R36+R37+R38+R39+R50+R51",
          "name": "10^21-POT TeV proton dump, 100 m decay volume",
          "observable": "displaced Z'->ll, 1-10 GeV, eps >= 1e-4 ?",
          "reasoning": "Predicted eps: R0 0.068, R2 1.3e-3, R17 1.1e-4, R33 5e-3, R34 6e-3 (all visible); R3 6e-6, R12 2e-5, R18 2e-6, R19 8e-5, R30 1e-6, R31 1e-6, R36 1e-6, R37 3e-5, R38 1e-6, R39 8e-5, R50 1e-6, R51 4e-5 (invisible). m_Z' is 1-6 GeV throughout, so mass is not the discriminant, lifetime is.",
          "feasibility": "Closest is SHiP (2e20 POT at 400 GeV), sensitive to eps ~1e-8 to 1e-5 at m_Z' = 1 GeV; covering eps = 1e-4 at GeV masses needs a shorter shield plus ~5x POT, i.e. roughly 5-10x beyond the SHiP baseline. Dominant systematic is the muon-induced neutrino background in the decay volume.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R0","R2","R17","R33","R34"]},
            {"label": "no", "regions": ["R3","R12","R18","R19","R30","R31","R36","R37","R38","R39","R50","R51"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_yes_no_no",
      "lit_review": {
        "name": "CTA Galactic Centre halo, Z'Z' cascade",
        "observable": "sigma_v >= 1e-26 cm^3/s ?",
        "refs": ["arXiv:2007.16129", "arXiv:1503.02641"],
        "reasoning": "Same estimator. gU1p 0.31-0.51 with m_Z' < m_DM gives 1.5-3.2e-26 cm^3/s (R21: g'=0.413, m=471 -> 3.1e-26; R6/R9/R11/R22: g'=0.514, m=700 -> 3.2e-26). The 13 excluded regions have gU1p 0.044-0.18 (R0, R4, R5, R8, R14, R17, R18, R25, R29, R32, R45, R49) or g'=0.32 at m_DM=680 (R20), giving 5e-27 down to 1e-30.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1","R2","R3","R6","R7","R9","R10","R11","R12","R13","R15","R16","R19","R21","R22","R23","R24","R26","R27","R28","R30","R31","R33","R34","R35","R36","R37","R38","R39","R40","R41","R42","R43","R44","R46","R47","R48","R50","R51"]},
          {"label": "not seen", "regions": ["R0","R4","R5","R8","R14","R17","R18","R20","R25","R29","R32","R45","R49"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R4+R5+R8+R14+R17+R18+R20+R25+R29+R32+R45+R49",
          "name": "10^21-POT TeV proton dump, 100 m decay volume",
          "observable": "displaced Z'->ll, 1-20 GeV, eps >= 1e-4 ?",
          "reasoning": "Predicted eps: R8 1.7e-4, R20 3e-3, R29 0.09, R49 0.08 (visible); R0 6e-6, R4 1.4e-5, R5 2e-6, R14 2e-6, R17 2e-6, R18 1e-6, R25 7e-5, R32 1e-6, R45 3e-6 (invisible). m_Z' spans 1-10 GeV in both groups.",
          "feasibility": "Closest is SHiP (eps ~1e-8 to 1e-5 at 1 GeV); reaching eps = 1e-4 requires a thinner hadron absorber and ~5x POT, 5-10x beyond baseline. Dominant systematic: neutrino-induced di-lepton background.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R8","R20","R29","R49"]},
            {"label": "no", "regions": ["R0","R4","R5","R14","R17","R18","R25","R32","R45"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_yes_yes_yes_no",
      "lit_review": {
        "name": "Xe+Ar joint recoil-spectrum DM mass fit",
        "observable": "reconstructed m_DM >= 80 GeV ?",
        "refs": ["arXiv:2207.03764", "arXiv:1707.08145"],
        "reasoning": "All five regions give sigma_SI at 1-10x the XLZD limit, i.e. 10^3-10^4 events in a 1000 t-yr xenon exposure plus a DarkSide-20k argon sample. R0 sits at m_DM = 67.5-69.8 GeV (Xe reduced mass 43.6 GeV), R1-R4 at 94.2-95.2 GeV (53.4 GeV); the two-target recoil-slope fit resolves this at the +-10-15% level.",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R1","R2","R3","R4"]},
          {"label": "no", "regions": ["R0"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R3+R4",
          "name": "e+e- dark-photon factory, 1-30 GeV",
          "observable": "e+e- -> gamma Z'(->mumu), eps >= 1e-5 ?",
          "reasoning": "R2 predicts m_Z' = 22.2 GeV with eps = 7-8.5e-5 (visible); R3 (10.4 GeV) and R4 (1.0 GeV) sit at eps = 1e-6, and R1's Z' is at 2.0-2.8 TeV, out of reach in e+e-. R1, R3, R4 stay degenerate under this test.",
          "feasibility": "Closest is Belle II at 50/ab, which reaches eps ~5e-4 for visible A' at 10-20 GeV; eps = 1e-5 needs ~2500x luminosity or a dedicated displaced-vertex trigger, so >10x beyond any funded machine. Dominant systematic: irreducible QED e+e- -> gamma mumu continuum.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R2"]},
            {"label": "no", "regions": ["R1","R3","R4"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_yes_yes_no",
      "lit_review": {
        "name": "SHiP beam-dump dark-photon search",
        "observable": "displaced Z'->ll, m < 2 GeV, eps >= 1e-7 ?",
        "refs": ["arXiv:1504.04956", "arXiv:1311.0029"],
        "reasoning": "R1 (m_Z' = 1.60-1.68 GeV) and R2 (1.00-1.28 GeV) both sit at eps = 1e-6, in the middle of SHiP's dark-photon window (roughly 1e-8 < eps < 1e-5 for m_Z' ~1 GeV), giving O(10-100) displaced di-lepton events at 2e20 POT. R0 has m_Z' = 20.8 GeV with eps = 1.3e-4: production is kinematically suppressed at the dump and the decay is prompt, so SHiP sees nothing.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1","R2"]},
          {"label": "not seen", "regions": ["R0"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2",
          "name": "High-resolution displaced-dilepton mass spectrometer",
          "observable": "m(l+l-) vertex mass >= 1.4 GeV ?",
          "reasoning": "R1 predicts m_Z' = 1.598-1.676 GeV, R2 predicts 1.000-1.277 GeV; the two do not overlap. Everything else (m_DM = 95 GeV, eps = 1e-6, alpha1 ~2e-3) is identical between them.",
          "feasibility": "Closest is the SHiP hidden-sector spectrometer, whose di-lepton mass resolution is already ~10-20 MeV at 1 GeV, far better than the 300 MeV separation required; the limitation is event yield, not resolution, so only ~2x more POT is needed for a 5-sigma mass discrimination. Dominant systematic: vertex-position dependence of the momentum scale.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R1"]},
            {"label": "no", "regions": ["R2"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_yes_no_yes_no_no",
      "lit_review": {
        "name": "SHiP beam-dump dark-photon search",
        "observable": "displaced Z'->ll, m ~1-2 GeV, eps <= 1e-5 ?",
        "refs": ["arXiv:1504.04956", "arXiv:1311.0029"],
        "reasoning": "All 13 regions share m_DM = 4.6-5.6 GeV, m_Z' = 1.0-2.2 GeV and gU1p = 0.042; only eps differs. R0-R4, R6, R7, R10, R11 lie at eps = 1e-6 to 1.1e-5, inside SHiP's decay-volume acceptance. R5 (1.4e-5 to 9.2e-5), R8 (1.8e-5 to 1.2e-4), R9 (2.1e-5 to 1.6e-4) and R12 (6.6e-5 to 1.8e-4) decay inside the 60 m shield and are simultaneously below the Belle II/LHCb prompt reach: a genuine no-man's-land. Note all 13 predict sigma_v(Z'Z') = 2.9e-26 cm^3/s, about 4x above the Planck CMB bound at 5 GeV, so the whole leaf is in tension with cosmology.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0","R1","R2","R3","R4","R6","R7","R10","R11"]},
          {"label": "not seen", "regions": ["R5","R8","R9","R12"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R6+R7+R10+R11",
          "name": "High-resolution displaced-dilepton mass spectrometer",
          "observable": "m(l+l-) vertex mass >= 1.3 GeV ?",
          "reasoning": "R2 (1.494-1.545 GeV) and R10 (1.545 GeV) sit above the cut; R1 (1.000-1.016), R4 (1.000), R7 (1.000) sit at the pion-scale floor, and R0, R3, R6, R11 have log-midpoints of 1.20-1.24 GeV. Below 1.3 GeV the seven remaining regions differ only in the DM self-quartics and stay degenerate.",
          "feasibility": "Closest is the SHiP hidden-sector spectrometer at ~15 MeV di-lepton mass resolution, adequate for the 300-500 MeV separation; only the event yield at eps = 1e-6 (tens of events) limits it, needing ~2x POT. Dominant systematic: momentum scale versus decay-vertex position.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R2","R10"]},
            {"label": "no", "regions": ["R0","R1","R3","R4","R6","R7","R11"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_yes_no_no_no_no",
      "lit_review": {
        "name": "LHCb/BaBar prompt dark-photon dimuon",
        "observable": "Z'->mumu, 10-20 GeV, eps >= 1e-3 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1406.2980"],
        "reasoning": "R1 predicts m_Z' = 11.2-16.5 GeV with eps = 5.2e-3 to 1.3e-2, well inside the LHCb inclusive dimuon and BaBar single-photon exclusions (eps ~1e-3 at these masses). R0 and R2 predict m_Z' = 17.6-20.8 GeV with eps = 1.3-1.9e-4, a factor 5-10 below that frontier.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1"]},
          {"label": "not seen", "regions": ["R0","R2"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2",
          "name": "Cluster-merger DM self-scattering survey",
          "observable": "sigma/m >= 5e-11 cm^2/g ?",
          "reasoning": "R0 and R2 are the same physical point (m_DM = 92.3-92.6 GeV, m_Z' = 20.8 GeV, gU1p = 0.1597, eps = 1.3e-4) and differ only in the DM quartics: alpha6 ~10 for R0 gives sigma/m = lambda^2/(64 pi m^3) = 1.4e-10 cm^2/g, alpha6 ~4.1 for R2 gives 2.3e-11 cm^2/g. Honest assessment: the ordering is real but the magnitude is unreachable.",
          "feasibility": "Closest is the Bullet-Cluster/merging-cluster offset method, which bounds sigma/m at ~1 cm^2/g; separating 1.4e-10 from 2.3e-11 cm^2/g demands roughly 10^9-10^10 improvement, far beyond any conceivable astrophysical measurement, and would in any case be swamped by baryonic-feedback systematics on halo shapes. There is no viable discriminator for this pair.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0"]},
            {"label": "no", "regions": ["R2"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_no_no",
      "lit_review": {
        "name": "LHCb/Belle II prompt dark-photon dimuon",
        "observable": "Z'->mumu, 1-70 GeV, eps >= 1e-3 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "Twenty-one regions predict m_Z' between 1 and 58 GeV with eps reaching 1e-3 to 0.1 (R5 0.016-0.1, R19 0.1, R51 0.069-0.1, R56 0.015-0.025, R58 7.6e-3 to 1.9e-2): an on-shell dimuon resonance with O(10^2-10^4) events at LHCb. The other 65 have either eps <= 3e-4 (mostly 1e-6) or m_Z' from 100 GeV to 10 TeV, where neither LHCb nor Belle II has reach.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1","R2","R4","R5","R8","R9","R10","R16","R19","R20","R25","R30","R42","R50","R51","R54","R56","R57","R58","R71","R73"]},
          {"label": "not seen", "regions": ["R0","R3","R6","R7","R11","R12","R13","R14","R15","R17","R18","R21","R22","R23","R24","R26","R27","R28","R29","R31","R32","R33","R34","R35","R36","R37","R38","R39","R40","R41","R43","R44","R45","R46","R47","R48","R49","R52","R53","R55","R59","R60","R61","R62","R63","R64","R65","R66","R67","R68","R69","R70","R72","R74","R75","R76","R77","R78","R79","R80","R81","R82","R83","R84","R85"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R10+R16+R19+R2+R20+R25+R30+R4+R42+R5+R50+R51+R54+R56+R57+R58+R71+R73+R8+R9",
          "name": "Multi-target recoil-spectrum DM mass fit",
          "observable": "reconstructed m_DM >= 85 GeV ?",
          "reasoning": "Within the dimuon-visible group the DM mass splits two clusters: R8 (90.2-90.5), R9 (90.2-90.4), R19 (87.3-90.9), R42 (96.4), R57 (90.3-91.6), R71 (95.8-96.4), R73 (96.4) versus R4/R10/R16/R20/R25/R30/R50/R51 pinned at 69.67 GeV and R1, R2, R5, R54, R56, R58 spread over 53-90 GeV. sigma_SI is 1-10x XLZD, so a Xe+Ar+Ge fit gives +-5-10% on m_DM.",
          "feasibility": "Closest is the combination of LZ/XLZD xenon with DarkSide-20k argon; current single-target mass resolution at 90 GeV is ~30%, and three-target combination at 10^3 events already reaches ~10%, so the required improvement is <~3x. Dominant systematic: the nuclear-recoil energy scale and the local DM velocity dispersion (+-20 km/s translates to ~5% on m_DM).",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R8","R9","R19","R42","R57","R71","R73"]},
            {"label": "no", "regions": ["R1","R2","R4","R5","R10","R16","R20","R25","R30","R50","R51","R54","R56","R58"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_no_yes_yes",
      "lit_review": {
        "name": "LHCb/BaBar prompt dark-photon dimuon",
        "observable": "Z'->mumu, 6-40 GeV, eps >= 1e-3 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1406.2980"],
        "reasoning": "Twenty of the 21 regions are one physical point (m_DM = 136.8 GeV, m_Z' = 13-25 GeV, gU1p = 0.202) with eps = 1.5e-3 to 0.1, which LHCb's inclusive dimuon search covers by 2-3 orders of magnitude. R10 alone predicts m_Z' = 1.0-1.6 GeV with eps = 1e-6 and m_DM = 288-308 GeV: invisible to every prompt search.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0","R1","R2","R3","R4","R5","R6","R7","R8","R9","R11","R12","R13","R14","R15","R16","R17","R18","R19","R20"]},
          {"label": "not seen", "regions": ["R10"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R11+R12+R13+R14+R15+R16+R17+R18+R19+R2+R20+R3+R4+R5+R6+R7+R8+R9",
          "name": "Multi-target recoil-spectrum DM mass fit",
          "observable": "reconstructed m_DM >= 150 GeV ?",
          "reasoning": "R2 (136.8-166 GeV), R8 (136.8-226.5), R16 (136.8-177.6) and R18 (136.8-166) extend above 150 GeV; the other sixteen are pinned at exactly 136.8 GeV. With signals at 1-10x XLZD in xenon, argon and germanium simultaneously, a 10% mass fit distinguishes 137 from 175-225 GeV. The sixteen pinned regions remain fully degenerate: they differ only in unobservable quartics.",
          "feasibility": "Closest is XLZD plus DarkSide-20k; three-target fits at 10^3-10^4 events already deliver ~10% mass resolution near 140 GeV, so the improvement needed is <~2x. Dominant systematic: above ~150 GeV the recoil spectrum saturates, so the sensitivity comes almost entirely from the target-to-target rate ratio and hence from the nuclear form-factor and A-scaling systematics.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R2","R8","R16","R18"]},
            {"label": "no", "regions": ["R0","R1","R3","R4","R5","R6","R7","R9","R11","R12","R13","R14","R15","R17","R19","R20"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_no_yes_no",
      "lit_review": {
        "name": "LHCb/BaBar prompt dark-photon dimuon",
        "observable": "Z'->mumu, 5-60 GeV, eps >= 1e-3 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1406.2980"],
        "reasoning": "R0-R9 predict m_Z' = 5-60 GeV with eps = 5e-4 to 0.1 (R0 5e-3-0.1, R2 0.011-0.1, R7 2.6e-3-7.3e-3), inside LHCb's inclusive dimuon reach. R10 (m_Z' = 12.3 GeV, eps = 3-7e-5) and R11 (m_Z' = 1.6-3.3 GeV, eps = 1.4-1.8e-6) are one to three orders below it.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0","R1","R2","R3","R4","R5","R6","R7","R8","R9"]},
          {"label": "not seen", "regions": ["R10","R11"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R10+R11",
          "name": "Multi-target recoil-spectrum DM mass fit",
          "observable": "reconstructed m_DM >= 200 GeV ?",
          "reasoning": "R11 predicts m_DM = 300.0-300.6 GeV, R10 predicts 108.8 GeV; on xenon the reduced mass differs by 20% and the argon-to-xenon rate ratio by ~35%.",
          "feasibility": "Closest is XLZD plus DarkSide-20k; at 1-10x the XLZD limit both regions yield >10^3 events and existing two-target fits already reach 15-20% mass resolution at 100-300 GeV, so <~2x improvement is needed. Dominant systematic: the halo escape velocity and velocity dispersion, which degrade the high-mass end of the fit.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R11"]},
            {"label": "no", "regions": ["R10"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9",
          "name": "Multi-target recoil-spectrum DM mass fit",
          "observable": "reconstructed m_DM >= 160 GeV ?",
          "reasoning": "R1 (136.8-259.4 GeV), R2 (237.5-294.1) and R7 (165.7-179.0) extend above 160 GeV; R0, R3-R6, R8, R9 sit at 136.8-173 GeV with log-midpoints below 155. The seven low-mass regions remain degenerate afterwards.",
          "feasibility": "Same instruments as above (XLZD + DarkSide-20k + a germanium target); resolving 137 from 250 GeV needs only ~2x better than today's two-target fits. Dominant systematic: form-factor and A-scaling uncertainty in the cross-target rate ratio.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R1","R2","R7"]},
            {"label": "no", "regions": ["R0","R3","R4","R5","R6","R8","R9"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_no_no_no",
      "lit_review": {
        "name": "LHCb/Belle II prompt dark-photon dimuon",
        "observable": "Z'->mumu, 1-70 GeV, eps >= 1e-3 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "Twenty-two regions predict m_Z' between 1 and 60 GeV with eps of 1e-3 to 0.1 (R7 0.05-0.1, R17 0.027-0.047, R38 0.033-0.076, R78 0.068-0.1, R90 0.1), giving an on-shell dimuon peak. The remaining 93 sit at m_Z' = 100 GeV to 10 TeV (R6, R10, R11, R13, R19, R21-R32, R36, R37, R41, R51-R61, R71-R73, R91-R114) or at eps <= 3e-4, below every prompt-search frontier.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0","R4","R7","R8","R17","R20","R38","R39","R44","R50","R62","R65","R70","R75","R76","R77","R78","R81","R82","R86","R90","R98"]},
          {"label": "not seen", "regions": ["R1","R2","R3","R5","R6","R9","R10","R11","R12","R13","R14","R15","R16","R18","R19","R21","R22","R23","R24","R25","R26","R27","R28","R29","R30","R31","R32","R33","R34","R35","R36","R37","R40","R41","R42","R43","R45","R46","R47","R48","R49","R51","R52","R53","R54","R55","R56","R57","R58","R59","R60","R61","R63","R64","R66","R67","R68","R69","R71","R72","R73","R74","R79","R80","R83","R84","R85","R87","R88","R89","R91","R92","R93","R94","R95","R96","R97","R99","R100","R101","R102","R103","R104","R105","R106","R107","R108","R109","R110","R111","R112","R113","R114"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R17+R20+R38+R39+R4+R44+R50+R62+R65+R7+R70+R75+R76+R77+R78+R8+R81+R82+R86+R90+R98",
          "name": "Multi-target recoil-spectrum DM mass fit",
          "observable": "reconstructed m_DM >= 120 GeV ?",
          "reasoning": "Inside the dimuon-visible group the DM mass splits R0 (101.8-210.7), R4 (146-302), R7 (239-301), R8 (112-248), R17 (103-247), R38 (131.6-148.8), R39 (107-179), R62 (171.6-184.6), R65 (250.9-303.4), R70 (150.7-155.4), R75 (127.4-204.7), R81 (124.1-309.2), R82 (213-235) from the 97.6-112 GeV cluster (R20, R44, R50, R76, R77, R78, R86, R90, R98). All have sigma_SI at 1-10x XLZD, so 10^3+ events are available.",
          "feasibility": "Closest is XLZD + DarkSide-20k + a Ge target; current combined fits give ~15% at 100 GeV and ~25% at 250 GeV, so distinguishing ~98 from >=150 GeV needs <~2x improvement. Dominant systematic: escape-velocity and dispersion uncertainty, which dominates the >200 GeV end.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R0","R4","R7","R8","R17","R38","R39","R62","R65","R70","R75","R81","R82"]},
            {"label": "no", "regions": ["R20","R44","R50","R76","R77","R78","R86","R90","R98"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes",
      "lit_review": {
        "name": "CTA Galactic Centre halo, Z'Z' cascade",
        "observable": "sigma_v >= 2e-26 cm^3/s ?",
        "refs": ["arXiv:2007.16129", "arXiv:1503.02641"],
        "reasoning": "With m_DM = 317-710 GeV and no direct-detection handle, the secluded annihilation rate sigma_v = 2.3e-19 g'^4/m_DM^2 cm^3/s is the only absolute observable left. 220 regions have gU1p log-midpoints of 0.30-0.48, predicting 1.0-3.0e-26 cm^3/s (e.g. g'=0.43, m=500 -> 3.2e-26; g'=0.33, m=450 -> 1.4e-26). The 28 listed as not seen have gU1p log-midpoints of 0.07-0.27, predicting 5e-29 to 5e-27. Honest caveat: the largest region R0 (4338 pts) spans gU1p = 0.097-0.48 and straddles the cut, and the 220-region group remains massively degenerate afterwards.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1","R3","R4","R5","R7","R9","R10","R12","R13","R14","R15","R16","R18","R21","R22","R23","R24","R25","R26","R27","R28","R29","R30","R31","R32","R33","R34","R35","R36","R37","R38","R39","R40","R41","R42","R43","R44","R45","R46","R47","R48","R49","R51","R52","R53","R54","R55","R56","R57","R58","R59","R60","R61","R62","R63","R64","R65","R66","R67","R68","R71","R72","R73","R74","R75","R76","R77","R78","R79","R80","R81","R82","R83","R85","R86","R87","R88","R89","R90","R91","R93","R94","R95","R96","R97","R98","R99","R100","R101","R102","R103","R104","R105","R106","R108","R109","R110","R111","R112","R113","R114","R115","R117","R120","R121","R122","R123","R124","R125","R126","R127","R128","R129","R130","R133","R134","R135","R136","R137","R138","R139","R140","R141","R142","R143","R144","R145","R146","R147","R148","R149","R150","R151","R152","R153","R154","R155","R156","R157","R158","R159","R160","R161","R162","R163","R165","R166","R167","R168","R169","R170","R171","R172","R173","R174","R175","R176","R177","R178","R179","R180","R181","R182","R183","R184","R185","R186","R187","R188","R189","R190","R191","R192","R193","R194","R195","R196","R197","R198","R199","R200","R201","R202","R203","R204","R205","R206","R207","R208","R209","R210","R211","R212","R213","R214","R215","R216","R217","R218","R219","R221","R222","R223","R224","R225","R226","R227","R228","R229","R230","R231","R232","R239","R241","R242","R243","R244","R245","R246","R247"]},
          {"label": "not seen", "regions": ["R0","R2","R6","R8","R11","R17","R19","R20","R50","R69","R70","R84","R92","R107","R116","R118","R119","R131","R132","R164","R220","R233","R234","R235","R236","R237","R238","R240"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R107+R11+R116+R118+R119+R131+R132+R164+R17+R19+R2+R20+R220+R233+R234+R235+R236+R237+R238+R240+R50+R6+R69+R70+R8+R84+R92",
          "name": "Solar dark-mediator gamma-ray observatory",
          "observable": "solar-disk gamma flux >= 1e-10 cm^-2 s^-1 ?",
          "reasoning": "These regions all have m_Z' = 1-7 GeV. DM captured in the Sun annihilates to Z' pairs; for 1e-9 < eps < 1e-6 the boosted Z' escapes the solar radius before decaying and converts to charged pairs in flight, giving a solar-disk gamma continuum near 1e-10 cm^-2 s^-1 for a capture rate saturating equilibrium. R0 (eps 1e-6 to 1e-4), R2, R6, R19, R20, R70, R84, R107, R116, R118, R119, R131, R233, R240 sit in that window; R8, R11, R17, R50, R69, R92, R132, R164, R220, R234-R238 have eps = 1e-3 to 0.1, so the Z' decays inside the Sun and the flux is absorbed, below 1e-13 cm^-2 s^-1.",
          "feasibility": "Closest is Fermi-LAT's solar-disk analysis, which reaches ~1e-9 cm^-2 s^-1 above 1 GeV but is limited by the cosmic-ray-induced solar-disk emission itself; reaching 1e-10 needs ~10x exposure plus a dedicated model of the solar-disk hadronic background, i.e. a next-generation GeV instrument. Dominant systematic: the poorly modelled cosmic-ray cascade emission from the solar surface.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0","R2","R6","R19","R20","R70","R84","R107","R116","R118","R119","R131","R233","R240"]},
            {"label": "not seen", "regions": ["R8","R11","R17","R50","R69","R92","R132","R164","R220","R234","R235","R236","R237","R238"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_yes_yes_yes_yes_no",
      "lit_review": {
        "name": "SuperCDMS SNOLAB Ge recoil endpoint",
        "observable": "E_R endpoint >= 0.3 keV ?",
        "refs": ["arXiv:1610.00006", "arXiv:2207.03764"],
        "reasoning": "Both regions have alpha1 ~4e-3, giving Higgs-portal sigma_SI of order 1e-42 cm^2 at these masses, inside the SuperCDMS SNOLAB Ge reach for 1-3 GeV and invisible to XLZD (hence this leaf). The kinematic endpoint E_R,max = 2 mu^2 v_esc^2/m_Ge is 0.10 keV for R0 (m_DM = 1.0 GeV) and 0.42 keV for R1 (m_DM = 2.225 GeV); the SuperCDMS HV detectors have ~40 eV resolution, so the two spectra are unambiguously different.",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R1"]},
          {"label": "no", "regions": ["R0"]}
        ]
      },
      "novel": []
    },
    {
      "leaf_id": "root_no_no_yes_yes_yes_no",
      "lit_review": {
        "name": "SuperCDMS SNOLAB Ge recoil endpoint",
        "observable": "E_R endpoint >= 0.6 keV ?",
        "refs": ["arXiv:1610.00006", "arXiv:2207.03764"],
        "reasoning": "With alpha1 = 1.9-3.3e-3 the Higgs-portal sigma_SI is ~1e-42 to 1e-43 cm^2, inside the SuperCDMS SNOLAB band for 1-6 GeV. R2, R5-R8, R11, R21-R23 have m_DM = 3.8-5.4 GeV (endpoint 0.9-1.4 keV); R0, R1, R3, R4, R9, R10, R12-R20 have log-midpoint masses of 1.0-2.3 GeV (endpoint 0.10-0.30 keV). The 40 eV HV threshold resolves both.",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R2","R5","R6","R7","R8","R11","R21","R22","R23"]},
          {"label": "no", "regions": ["R0","R1","R3","R4","R9","R10","R12","R13","R14","R15","R16","R17","R18","R19","R20"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R10+R12+R13+R14+R15+R16+R17+R18+R19+R20+R3+R4+R9",
          "name": "Sub-GeV dark-photon factory, eps to 1e-5",
          "observable": "Z'->ll or invisible, m ~1 GeV, eps >= 1e-4 ?",
          "reasoning": "All fifteen have m_Z' = 1.0-1.5 GeV except R14 (21 GeV) and R19 (4.7 GeV), so the discriminant is eps: R1 (up to 2.8e-2), R10 (0.1), R12 (8.9e-3), R13 (3e-5 to 1.8e-4), R14 (7.2e-2), R18 (5.8e-5 to 1.1e-4), R19 (0.1), R20 (1e-2) versus R0, R3, R4, R9, R15, R16, R17 at 1e-6 to 4e-5.",
          "feasibility": "Closest is Belle II at 50/ab, projected to eps ~5e-4 for a 1 GeV dark photon in both visible and invisible modes; eps = 1e-4 requires ~25x luminosity or a factor-5 better single-photon background rejection. Dominant systematic: the e+e- -> gamma gamma(gamma) background with a lost photon.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R1","R10","R12","R13","R14","R18","R19","R20"]},
            {"label": "no", "regions": ["R0","R3","R4","R9","R15","R16","R17"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_yes_yes_no",
      "lit_review": {
        "name": "SuperCDMS SNOLAB Ge recoil endpoint",
        "observable": "E_R endpoint >= 0.6 keV ?",
        "refs": ["arXiv:1610.00006", "arXiv:2207.03764"],
        "reasoning": "alpha1 = 1.05-1.87e-3 gives sigma_SI ~1e-43 cm^2, at the SuperCDMS SNOLAB Ge sensitivity for 3-6 GeV. Thirty regions have m_DM = 3.3-6.3 GeV (endpoint 0.7-1.9 keV); R0, R9, R11, R14, R31, R34, R35, R36, R38 have log-midpoint masses of 1.0-2.8 GeV (endpoint 0.10-0.45 keV).",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R1","R2","R3","R4","R5","R6","R7","R8","R10","R12","R13","R15","R16","R17","R18","R19","R20","R21","R22","R23","R24","R25","R26","R27","R28","R29","R30","R32","R33","R37"]},
          {"label": "no", "regions": ["R0","R9","R11","R14","R31","R34","R35","R36","R38"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R10+R12+R13+R15+R16+R17+R18+R19+R2+R20+R21+R22+R23+R24+R25+R26+R27+R28+R29+R3+R30+R32+R33+R37+R4+R5+R6+R7+R8",
          "name": "High-resolution displaced-dilepton mass spectrometer",
          "observable": "m(l+l-) vertex mass >= 2 GeV ?",
          "reasoning": "The 5 GeV cluster splits by mediator mass: R2, R4, R6, R7, R13, R15-R17, R19, R20, R22, R24-R30 sit at m_Z' = 2.8-5.5 GeV (mostly 3.16 GeV), while R1, R3, R5, R8, R10, R12, R18, R21, R23, R32, R33, R37 sit at 1.0-1.9 GeV. eps ranges from 1e-6 to 0.09 in both, so only the mass separates them.",
          "feasibility": "Closest is the SHiP hidden-sector spectrometer at ~15-20 MeV di-lepton mass resolution, far finer than the 1.5 GeV separation; the binding constraint is acceptance for the eps ~1e-3 to 1e-1 subset, which decays inside the shield, requiring roughly a 3x shorter absorber. Dominant systematic: decay-volume vacuum-induced neutrino background.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R2","R4","R6","R7","R13","R15","R16","R17","R19","R20","R22","R24","R25","R26","R27","R28","R29","R30"]},
            {"label": "no", "regions": ["R1","R3","R5","R8","R10","R12","R18","R21","R23","R32","R33","R37"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_yes_no",
      "lit_review": {
        "name": "SuperCDMS SNOLAB Ge recoil endpoint",
        "observable": "E_R endpoint >= 0.6 keV ?",
        "refs": ["arXiv:1610.00006", "arXiv:2207.03764"],
        "reasoning": "alpha1 is pinned near 1.0e-3 across the leaf, giving sigma_SI ~1e-43 cm^2, so the rate carries no information and only the recoil endpoint does. R4, R8, R13, R22, R23, R29, R30, R36-R40, R43-R45, R53 have m_DM = 3.2-6.1 GeV (endpoint 0.7-1.9 keV); the remaining 38 have log-midpoint masses of 1.0-2.4 GeV (endpoint 0.10-0.35 keV).",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R4","R8","R13","R22","R23","R29","R30","R36","R37","R38","R39","R40","R43","R44","R45","R53"]},
          {"label": "no", "regions": ["R0","R1","R2","R3","R5","R6","R7","R9","R10","R11","R12","R14","R15","R16","R17","R18","R19","R20","R21","R24","R25","R26","R27","R28","R31","R32","R33","R34","R35","R41","R42","R46","R47","R48","R49","R50","R51","R52"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R10+R11+R12+R14+R15+R16+R17+R18+R19+R2+R20+R21+R24+R25+R26+R27+R28+R3+R31+R32+R33+R34+R35+R41+R42+R46+R47+R48+R49+R5+R50+R51+R52+R6+R7+R9",
          "name": "Sub-GeV dark-photon factory, eps to 1e-5",
          "observable": "Z'->ll or invisible, m ~1 GeV, eps >= 1e-4 ?",
          "reasoning": "m_Z' is 1.0-1.7 GeV for essentially all 38 (exceptions R13-like outliers are in the other branch), so eps is the only handle: R1, R2, R6, R7, R12, R14, R19, R20, R25, R26, R28, R33, R34, R42, R46, R48-R52 have eps log-midpoints of 1.2e-4 to 0.1, while R0, R3, R5, R9, R10, R11, R15-R18, R21, R24, R27, R31, R32, R35, R41, R47 sit at 1e-6 to 9e-5.",
          "feasibility": "Closest is Belle II at 50/ab (eps ~5e-4 at 1 GeV); eps = 1e-4 needs ~25x luminosity or a factor-5 background-rejection gain in the single-photon channel. Dominant systematic: photon-veto inefficiency for e+e- -> gamma gamma.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R1","R2","R6","R7","R12","R14","R19","R20","R25","R26","R28","R33","R34","R42","R46","R48","R49","R50","R51","R52"]},
            {"label": "no", "regions": ["R0","R3","R5","R9","R10","R11","R15","R16","R17","R18","R21","R24","R27","R31","R32","R35","R41","R47"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_no",
      "lit_review": {
        "name": "LHCb/Belle II prompt dark-photon dimuon",
        "observable": "Z'->mumu, 1-70 GeV, eps >= 1e-3 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "This leaf is blind in every catalog channel (no XLZD, no IceCube-Gen2, no h->inv), so the dark photon itself is the only accessible object. 59 regions predict m_Z' = 1-60 GeV with eps of 1e-3 to 0.1 (R0, R18, R39-R42, R120 at m_Z' = 1.2 GeV with eps = 0.1; R7 0.03-0.1; R11 0.019-0.1; R35 0.085-0.1; R104 0.04-0.1), all inside the LHCb inclusive-dimuon and BaBar exclusions. The other 76 have eps <= 1e-3 or m_Z' outside 1-70 GeV (R12, R79, R87, R119 at 60-146 GeV).",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0","R4","R6","R7","R8","R11","R16","R18","R20","R21","R22","R23","R25","R26","R29","R31","R32","R35","R39","R40","R41","R42","R45","R50","R54","R55","R56","R58","R60","R61","R62","R63","R70","R72","R76","R77","R80","R84","R86","R88","R91","R94","R95","R97","R98","R99","R100","R101","R102","R104","R110","R111","R117","R120","R121","R124","R127","R128","R131"]},
          {"label": "not seen", "regions": ["R1","R2","R3","R5","R9","R10","R12","R13","R14","R15","R17","R19","R24","R27","R28","R30","R33","R34","R36","R37","R38","R43","R44","R46","R47","R48","R49","R51","R52","R53","R57","R59","R64","R65","R66","R67","R68","R69","R71","R73","R74","R75","R78","R79","R81","R82","R83","R85","R87","R89","R90","R92","R93","R96","R103","R105","R106","R107","R108","R109","R112","R113","R114","R115","R116","R118","R119","R122","R123","R125","R126","R129","R130","R132","R133","R134"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R10+R103+R105+R106+R107+R108+R109+R112+R113+R114+R115+R116+R118+R119+R12+R122+R123+R125+R126+R129+R13+R130+R132+R133+R134+R14+R15+R17+R19+R2+R24+R27+R28+R3+R30+R33+R34+R36+R37+R38+R43+R44+R46+R47+R48+R49+R5+R51+R52+R53+R57+R59+R64+R65+R66+R67+R68+R69+R71+R73+R74+R75+R78+R79+R81+R82+R83+R85+R87+R89+R9+R90+R92+R93+R96",
          "name": "10^21-POT TeV proton dump, 100 m decay volume",
          "observable": "displaced Z'->ll vertex mass >= 10 GeV ?",
          "reasoning": "These regions have eps = 1e-6 to 1e-3, i.e. displaced decays, and split by mediator mass: R2, R3, R5, R12-R15, R19, R28, R33, R34, R37, R38, R44, R47, R49, R51, R52, R64-R66, R69, R71, R73, R74, R78, R79, R85, R87, R103, R113, R119, R123, R125, R130, R134 have m_Z' log-midpoints of 10-113 GeV, while R1, R9, R10, R17, R24, R27, R30, R36, R43, R46, R48, R53, R57, R59, R67, R68, R75, R81-R83, R89, R90, R92, R93, R96, R105-R109, R112, R114-R116, R118, R122, R126, R129, R132, R133 sit at 1-9 GeV.",
          "feasibility": "Closest is SHiP (2e20 POT at 400 GeV), which loses acceptance above m_Z' ~10 GeV because production falls as 1/m^2 and the boost drops; a TeV-energy, 10^21-POT dump with a 100 m volume is roughly 10x the SHiP baseline in both POT and beam energy. Di-lepton mass resolution (~20 MeV) is not the limitation; yield is. Dominant systematic: neutrino-induced di-lepton background scaling with POT.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R2","R3","R5","R12","R13","R14","R15","R19","R28","R33","R34","R37","R38","R44","R47","R49","R51","R52","R64","R65","R66","R69","R71","R73","R74","R78","R79","R85","R87","R103","R113","R119","R123","R125","R130","R134"]},
            {"label": "no", "regions": ["R1","R9","R10","R17","R24","R27","R30","R36","R43","R46","R48","R53","R57","R59","R67","R68","R75","R81","R82","R83","R89","R90","R92","R93","R96","R105","R106","R107","R108","R109","R112","R114","R115","R116","R118","R122","R126","R129","R132","R133"]}
          ]
        }
      ]
    }
  ]
}
```