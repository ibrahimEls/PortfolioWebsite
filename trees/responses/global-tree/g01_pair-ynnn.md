## Leaf `root_yes_no_no_no_no` — 8837 pts, 211 (Lagrangian, region) units

### What the leaf actually is, physically

Every unit here is a ~95–315 GeV **scalar** whose only *guaranteed* SM coupling is the Higgs portal `alpha1` ≈ 1e-3 – 7e-3. That is not an accident of the scan: the path already fixes it. `sigma_SI` sits at 1–10× the XLZD projection (≈3e-49 – 3e-48 cm² at 100 GeV), which for the portal formula

σ_SI ≈ λ_hs² f_N² m_N⁴ /(4π m_h⁴ M_DM²)

is exactly λ_hs ~ 1e-3 – 5e-3 at M_DM ~ 10² GeV. And `BR(h→inv)` below the 4ν floor is automatic because 2·M_DM ≥ 190 GeV ≫ m_h, so h→SS is kinematically shut. So the Higgs sector is *identically* mute across all 211 units, by construction. Any discriminator must come from somewhere else.

Three candidate "somewhere else" handles exist, and two of them die on arithmetic:

**(a) Dark self-interaction — dead.** The CsSg units are distinguished from each other essentially *only* by their 16 dark quartics (alpha2…alpha16, spanning 1e-3 to 10). A contact quartic λ gives σ_self = λ²/(64π M²); at λ = 10, M = 97.9 GeV this is 2.0e-32 cm², i.e. **σ/m ≈ 1.2e-10 cm²/g**, ten orders of magnitude below the ~1 cm²/g Bullet-Cluster / halo-shape bound. Even the light-Z′ Yukawa cases are hopeless: R28 (g' = 0.174 → α_D = 2.4e-3, m_Z' = 1.8–3.1 GeV, M = 110 GeV) gives Born σ_T/m ≈ 1.5e-6 cm²/g at dwarf velocities. **This is why I do not propose an SIDM split, and it is also why ~110 of the CsSg regions (R2, R6, R8–R17, R23–R27, R31–R33, R45, R46, R55–R64, R95–R110, R165–R209) are, in my judgement, irreducibly degenerate**: their *only* differences live in a sector with no portal to anything measurable.

**(b) CMB energy injection — dead.** The largest annihilation rates here are σv ~ 2e-26 cm³/s at M = 100–300 GeV; Planck's p_ann translates to σv ≲ 1e-24 cm³/s at those masses (f_eff ~ 0.2–0.3). A factor ≥50 short, uniformly. No split.

**(c) The dark U(1)′ — alive, and it is the whole story.** `MZp` runs 1 GeV → 10 TeV and `epsilon` runs 1e-6 → 0.1 across the U(1)′ units, while CsSg and RsSg have no Z′ at all. That is a 10⁻¹⁰-to-10⁻² dynamic range in the *visible* observable ε², and it is genuinely outside our catalog: the catalog's Z′ entry is a **σ×BR recast of the HL-LHC high-mass pp→Z′→ℓℓ resonance search**, which has no reach below ~200 GeV (trigger + Drell–Yan continuum). The sub-200-GeV kinetic-mixing program is a different set of experiments on different machines.

---

### Level 1 — Low-mass dark-photon / dark-Z program (BaBar, LHCb, LEP)

**Cut: is there a visible dilepton resonance with ε ≥ 1e-3 anywhere in m_Z′ ∈ [0.2, 200] GeV?**

The combined published reach is: BaBar radiative return e⁺e⁻ → γ(A′→ℓℓ) excluding ε ≳ 1e-3 over 0.02–10.2 GeV (arXiv:1406.2980); LHCb prompt inclusive dimuon covering ~0.2–70 GeV with comparable-to-better ε reach in the 10–70 GeV window (arXiv:1710.02867); and LEP-I Z-lineshape plus LEP-II e⁺e⁻→ff, which bound ε ≲ 0.02–0.03 for m_Z′ from ~10 GeV up to ~200 GeV (compiled in arXiv:1311.0029). Belle II at 50 ab⁻¹ pushes the m < 10 GeV corner to ε ~ 3e-4, which is what makes the marginal cases decisive.

Quantitatively, per region (rate scales as ε²):

- **Grossly excluded already, by 10³–10⁴ in rate:** R40 and R83 (m_Z′ = 1.00 GeV, ε = 0.10 — that is ε²/ε²_BaBar ≈ 10⁴); R34 (m_Z′ = 1.0 GeV, ε = 0.064–0.10); R120 (m_Z′ = 12.85 GeV, ε = 0.10, squarely in the LHCb dimuon window and far above the LEP-II ε ≲ 0.02 line); R140 (m_Z′ = 17.6–36.6 GeV, ε = 0.10); R148 (m_Z′ = 3.4–7.9 GeV, ε = 0.083–0.10); R128 (m_Z′ = 6.0–9.8 GeV, ε = 0.068–0.10); R18 (m_Z′ = 18–93 GeV, ε = 0.051–0.10); R71 (m_Z′ = 14.9–21.7 GeV, ε = 0.033–0.076); R126 (m_Z′ = 5.6–23.3 GeV, ε = 0.025–0.055); R131 (m_Z′ = 15.7–50 GeV, ε = 0.024–0.068); R37 (m_Z′ = 11–53 GeV, ε = 0.027–0.047); R117 (m_Z′ = 60–122 GeV, ε = 0.012–0.030 — LEP-II territory).
- **At or just above current sensitivity, decisive with Belle II 50/ab and LHCb Run 3:** R19 (ε = 4.6e-3–9.0e-2), R65 (ε = 5.7e-3–2.8e-2), R72 (ε = 1.5e-3–8.2e-3, m_Z′ = 8.2–18.8 GeV), R77 (ε = 3.8e-3–1.4e-2 at m_Z′ = 1.0 GeV → 15–190× the BaBar rate limit), R111 (ε = 1.6e-3–6.1e-3), R115 (ε = 1.5e-3–2.9e-3), R125 (ε = 7.4e-3–1.3e-2), R127 (ε = 3.1e-3–4.0e-3), R132 (ε = 1.5e-3–3.8e-3), R136 (ε = 2.7e-3–4.1e-3 at 1 GeV). I flag these as *marginal today*: the low end of R115/R132/R72 sits within a factor ~2 in ε of the current BaBar/LHCb line, so a null result there is a Belle-II-era statement, not a 2024 one.
- **Not seen, and for two physically distinct reasons.** (i) Genuinely decoupled: all 110+ CsSg regions and RsSg R1 have *no Z′ at all* (ε ≡ 0), and U(1)′ regions like R4, R20, R48, R78, R79, R87, R129, R134, R138 have ε = 1e-6–5e-5, i.e. ε² ≤ 1e-9 — four to six orders below any current or proposed low-mass search. (ii) **Kinematically out of reach, not decoupled** — an honest caveat: R22, R39, R54, R91, R142, R159, R164 carry ε up to 0.1 but with m_Z′ = 375 GeV – 10 TeV, above the LEP-II ceiling. Those fall in "not seen" because the low-energy program cannot look there, and they are precisely the regions that the catalog's HL-LHC dilepton recast owns.

This splits **23 regions off from 188**, and it separates Lagrangians two ways: it isolates U(1)′ units from the pure-singlet CsSg/RsSg units, and it also splits the Z2-only Lagrangian's own regions (R34, R65, R111 → seen; R210 → not seen, ε = 5.6e-4–1.4e-3 straddling the line).

---

### Level 2a — attached to the 23 "dark photon seen" regions

Once a Z′ with ε ≥ 1e-3 and m_Z′ ≪ M_DM exists, the dominant DM annihilation is **SS* → Z′Z′ → 4ℓ** (each Z′ decays visibly through kinetic mixing; for ε ≥ 1e-3, m_Z′ ≥ 1 GeV the Z′ width gives cτ ≈ 3e-9 m — prompt, so this is a clean 4-lepton final state, not an LLP). The rate is set by the dark gauge coupling alone:

σv ≈ π α_D² / M_DM², α_D = g'²/4π

and it is *not* degenerate with the Higgs portal that produced the XLZD signal. Numbers (region midpoints):

- R18 (g′≈0.29, M≈270): **2.3e-26**; R19 (0.23, 180): 2.0e-26; R37 (0.22, 175): 1.8e-26; R65 (0.24, 200): 2.0e-26; R71 (0.21, 140): 2.2e-26; R72 (0.21, 143): 2.2e-26; R111 (0.28, 250): 2.1e-26; R115 (0.29, 277): 2.2e-26; R117 (0.29, 268): 2.3e-26; R120 (0.217, 153): 2.2e-26; R125 (0.23, 166): 2.2e-26; R126 (0.19, 120): 2.1e-26; R127 (0.18, 105): 2.1e-26; R128 (0.175, 107): 2.0e-26; R131 (0.25, 215): 2.0e-26; R132 (0.26, 224): 2.1e-26 cm³/s. (The clustering at ≈2e-26 is the relic-density attractor — these points get their abundance from Z′Z′.)
- R34 (g′≈0.089, M≈235): **2.6e-28**; R136 (0.072, 97.4): 6.6e-28; R77 (0.063, 97.7): 3.9e-28; R140 (0.026, 97.8): ~5e-29; R148 (0.009, 97.6): ~6e-30; R40 (0.009, 97.8): ~6e-30; R83 (0.003, 97.8): ~1e-30.

A **≥30× gap** with no region in between. A cut at 5e-27 cm³/s is safe.

Why this needs a new instrument: AMS-02's present limit on 100–300 GeV DM annihilating to charged leptons is σv ≲ 1–3e-25 cm³/s, and the 4-body (Z′Z′→4ℓ) spectrum is softer and broader than 2-body, costing another factor ~2–3. So we need ~40–100× improvement, plus a genuinely new *analysis* object: a template whose Z′ mass is **fixed by the Level-1 dilepton discovery**, turning a shape-free bump hunt into a one-parameter fit. AMS-100 (arXiv:1907.04168-class, ×1000 acceptance·time) delivers the statistics; the dominant systematic is not statistics but the **positron secondary-production background and the local propagation halo height**, which is why the fixed-m_Z′ template matters. Rating: **unlikely** — a dedicated next-generation instrument, but a proposed one.

### Level 2b — attached to the 188 "dark photon not seen" regions

Here the only surviving handle is the DM mass itself. The mass distribution in this group is strongly bimodal: ~176 regions pile up at **M_DM = 94.6–115 GeV** (RsSg R1 at 94.64–95.07; the entire CsSg block at 97.4–97.9; the light U(1)′ block at 97.5–97.9), while 12 regions sit at **127–315 GeV**: R3 (219–315), R7 (146–302), R35 (175–289), R66 (259–314), R67 (167–314), R73 (127.5), R112 (172–185), R114 (299–315), R116 (292–295), R118 (181.5), R130 (127.5), R210 (237–292).

Proposal: **megatonne-year WIMP mass spectroscopy** — fit M_DM from the nuclear-recoil energy spectrum in a combined heavy (Xe) + light (Ar/Ge) exposure, with the halo velocity distribution externally pinned by Gaia/DESI stellar kinematics rather than marginalized. Cut at M_DM = 120 GeV. Feasibility: XLZD at 200 t·yr, seeing a signal at 1–10× its own limit, yields O(10–10²) events → δM/M ≈ 40%, which cannot even place a region relative to 120 GeV. Reaching ±10% at 120 GeV needs ~10⁴ events, i.e. ~10⁴ t·yr — a factor ~10²  beyond XLZD and beyond anything proposed. The dominant systematic is the M_DM–v₀–v_esc degeneracy, which for M_DM ≫ m_Xe (≈122 GeV) becomes exact: **note honestly that above ~300 GeV the xenon spectrum saturates entirely**, so this cut works as a "≥120 GeV yes/no" and not as a spectroscopy of R3 vs R114. Rating: **speculative**.

What remains after all of this: the ~176-region residue, dominated by the CsSg dark-quartic clusters. I claim these are not separable by *any* experiment, for the reason in (a) above — their differences are confined to a sector whose largest observable consequence is σ/m ~ 1e-10 cm²/g.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_no_no_no",
      "lit_review": {
        "name": "Low-mass dark-photon program (BaBar, LHCb, LEP)",
        "observable": "dilepton resonance with eps >= 1e-3 at m_Z' <= 200 GeV ?",
        "refs": ["arXiv:1406.2980", "arXiv:1710.02867", "arXiv:1311.0029"],
        "reasoning": "All 211 units share an identical Higgs-portal signature (lambda_hs ~ 1e-3-7e-3 fixed by sigma_SI = 1-10x XLZD; h->inv shut because 2*M_DM >= 190 GeV). The only non-degenerate SM-facing coupling is the U(1)' kinetic mixing, spanning eps = 1e-6 to 0.1 and m_Z' = 1 GeV to 10 TeV, versus eps identically 0 for CsSg and RsSg. The catalog's Z'-dilepton entry is an HL-LHC high-mass pp->Z'->ll recast with no reach below ~200 GeV; BaBar radiative return (0.02-10.2 GeV, eps ~ 1e-3), LHCb prompt inclusive dimuon (0.2-70 GeV) and LEP-I/II Z-Z' mixing (10-200 GeV, eps <~ 0.02-0.03) cover exactly the window it cannot. Predicted rates: R40, R83 (m_Z'=1.00 GeV, eps=0.10) exceed the BaBar rate limit by ~1e4; R34 (1 GeV, eps 0.064-0.10), R148 (3.4-7.9 GeV, 0.083-0.10), R128 (6.0-9.8 GeV, 0.068-0.10), R120 (12.85 GeV, 0.10), R140 (17.6-36.6 GeV, 0.10), R18 (18-93 GeV, 0.051-0.10), R71 (14.9-21.7 GeV, 0.033-0.076), R126 (5.6-23.3 GeV, 0.025-0.055), R131 (15.7-50 GeV, 0.024-0.068), R37 (11-53 GeV, 0.027-0.047), R117 (60-122 GeV, 0.012-0.030) are all far above the published lines. Marginal, and only decisive with Belle II 50/ab and LHCb Run 3: R72 (eps 1.5e-3-8.2e-3), R115 (1.5e-3-2.9e-3), R132 (1.5e-3-3.8e-3), R127 (3.1e-3-4.0e-3), R136 (2.7e-3-4.1e-3), R111 (1.6e-3-6.1e-3), R77 (3.8e-3-1.4e-2), R125 (7.4e-3-1.3e-2), R19 (4.6e-3-9.0e-2), R65 (5.7e-3-2.8e-2) - the low ends sit within a factor ~2 in eps of current sensitivity. The 'not seen' side contains two physically different populations: genuinely decoupled units (all CsSg and RsSg with no Z' at all; U(1)' units with eps = 1e-6-5e-5 such as R4, R20, R48, R78, R79, R87, R129, R134, R138, whose eps^2 is 1e-9 or below), and units that are merely out of kinematic reach (R22, R39, R54, R91, R142, R159, R164 carry eps up to 0.1 but at m_Z' = 375 GeV - 10 TeV, above the LEP-II ceiling and inside the catalog's own HL-LHC recast). I deliberately did NOT propose a self-interaction split: the CsSg regions differ only in dark quartics, and lambda = 10 at M = 97.9 GeV gives sigma/m = 1.2e-10 cm^2/g, ten orders below the Bullet-Cluster bound; nor a CMB p_ann split, since the largest sigma v here (2e-26 cm^3/s) is ~50x below the Planck limit at 100-300 GeV.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R18", "R19", "R34", "R37", "R40", "R65", "R71", "R72", "R77", "R83", "R111", "R115", "R117", "R120", "R125", "R126", "R127", "R128", "R131", "R132", "R136", "R140", "R148"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R35", "R36", "R38", "R39", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R61", "R62", "R63", "R64", "R66", "R67", "R68", "R69", "R70", "R73", "R74", "R75", "R76", "R78", "R79", "R80", "R81", "R82", "R84", "R85", "R86", "R87", "R88", "R89", "R90", "R91", "R92", "R93", "R94", "R95", "R96", "R97", "R98", "R99", "R100", "R101", "R102", "R103", "R104", "R105", "R106", "R107", "R108", "R109", "R110", "R112", "R113", "R114", "R116", "R118", "R119", "R121", "R122", "R123", "R124", "R129", "R130", "R133", "R134", "R135", "R137", "R138", "R139", "R141", "R142", "R143", "R144", "R145", "R146", "R147", "R149", "R150", "R151", "R152", "R153", "R154", "R155", "R156", "R157", "R158", "R159", "R160", "R161", "R162", "R163", "R164", "R165", "R166", "R167", "R168", "R169", "R170", "R171", "R172", "R173", "R174", "R175", "R176", "R177", "R178", "R179", "R180", "R181", "R182", "R183", "R184", "R185", "R186", "R187", "R188", "R189", "R190", "R191", "R192", "R193", "R194", "R195", "R196", "R197", "R198", "R199", "R200", "R201", "R202", "R203", "R204", "R205", "R206", "R207", "R208", "R209", "R210"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R18+R19+R34+R37+R40+R65+R71+R72+R77+R83+R111+R115+R117+R120+R125+R126+R127+R128+R131+R132+R136+R140+R148",
          "name": "Dark-photon-templated cosmic-ray positron search",
          "observable": "sigma v (DM DM -> Z'Z' -> 4 leptons) >= 5e-27 cm^3/s ?",
          "reasoning": "Once a Z' with m_Z' << M_DM is established, SS* -> Z'Z' opens with sigma v = pi alpha_D^2 / M_DM^2, set by the dark gauge coupling alone and completely independent of the Higgs portal that produced the XLZD signal. Each Z' decays promptly to leptons via kinetic mixing (eps >= 1e-3, m_Z' >= 1 GeV gives c*tau ~ 3e-9 m), giving a hard 4-lepton spectrum. Predictions at region midpoints: R18 (g'=0.29, M=270 GeV) 2.3e-26; R19 2.0e-26; R37 1.8e-26; R65 2.0e-26; R71 2.2e-26; R72 2.2e-26; R111 2.1e-26; R115 2.2e-26; R117 2.3e-26; R120 2.2e-26; R125 2.2e-26; R126 2.1e-26; R127 2.1e-26; R128 2.0e-26; R131 2.0e-26; R132 2.1e-26 cm^3/s - the pile-up near 2e-26 is the relic-density attractor, these points freeze out through Z'Z'. Against this: R34 (g'=0.089, M=235 GeV) 2.6e-28; R136 6.6e-28; R77 3.9e-28; R140 5e-29; R148 6e-30; R40 6e-30; R83 1e-30. A >=30x gap with nothing in between, so a 5e-27 cm^3/s cut is robust.",
          "feasibility": "Closest instrument: AMS-02, whose current limit on 100-300 GeV DM annihilating to charged leptons is sigma v <~ 1-3e-25 cm^3/s; the 4-body Z'Z' spectrum is softer and broader than 2-body, costing a further factor 2-3. Required improvement ~40-100x in effective sensitivity, delivered by a proposed AMS-100-class spectrometer (~1000x acceptance-time). The genuinely new element is the analysis object: a 4-lepton injection template with m_Z' FIXED by the Level-1 dilepton discovery, converting a shape-free bump hunt into a one-parameter fit. Dominant systematic is not statistics but secondary positron production and the local propagation halo height - which is exactly what the fixed-m_Z' template suppresses.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R18", "R19", "R37", "R65", "R71", "R72", "R111", "R115", "R117", "R120", "R125", "R126", "R127", "R128", "R131", "R132"]},
            {"label": "not seen", "regions": ["R34", "R40", "R77", "R83", "R136", "R140", "R148"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9+R10+R11+R12+R13+R14+R15+R16+R17+R20+R21+R22+R23+R24+R25+R26+R27+R28+R29+R30+R31+R32+R33+R35+R36+R38+R39+R41+R42+R43+R44+R45+R46+R47+R48+R49+R50+R51+R52+R53+R54+R55+R56+R57+R58+R59+R60+R61+R62+R63+R64+R66+R67+R68+R69+R70+R73+R74+R75+R76+R78+R79+R80+R81+R82+R84+R85+R86+R87+R88+R89+R90+R91+R92+R93+R94+R95+R96+R97+R98+R99+R100+R101+R102+R103+R104+R105+R106+R107+R108+R109+R110+R112+R113+R114+R116+R118+R119+R121+R122+R123+R124+R129+R130+R133+R134+R135+R137+R138+R139+R141+R142+R143+R144+R145+R146+R147+R149+R150+R151+R152+R153+R154+R155+R156+R157+R158+R159+R160+R161+R162+R163+R164+R165+R166+R167+R168+R169+R170+R171+R172+R173+R174+R175+R176+R177+R178+R179+R180+R181+R182+R183+R184+R185+R186+R187+R188+R189+R190+R191+R192+R193+R194+R195+R196+R197+R198+R199+R200+R201+R202+R203+R204+R205+R206+R207+R208+R209+R210",
          "name": "Megatonne-year WIMP mass spectroscopy",
          "observable": "M_DM from nuclear-recoil spectrum >= 120 GeV ?",
          "reasoning": "With the Z' invisible (eps <= 1e-3, or m_Z' above the LEP ceiling) and the Higgs portal identical across the group, the DM mass is the last observable that still varies. It is strongly bimodal here: ~176 regions sit at M_DM = 94.6-115 GeV (RsSg R1 at 94.64-95.07 GeV, the whole CsSg block at 97.4-97.9 GeV, the light U(1)' block at 97.5-97.9 GeV), while twelve sit at 127-315 GeV: R3 (219-315), R7 (146-302), R35 (175-289), R66 (259-314), R67 (167-314), R73 (127.5), R112 (172-185), R114 (299-315), R116 (292-295), R118 (181.5), R130 (127.5), R210 (237-292). A 120 GeV cut separates these cleanly. It does NOT resolve the residue: R1 at 94.9 GeV versus the CsSg cluster at 97.86 GeV is a 3% mass difference, and the ~110 CsSg regions differ only in dark quartics whose largest observable consequence is sigma/m ~ 1e-10 cm^2/g. I regard that residue as irreducibly degenerate.",
          "feasibility": "Closest instrument: XLZD at ~200 t.yr. In this leaf the signal is 1-10x its own limit, i.e. O(10-100) events, giving delta_M/M ~ 40% - not enough to place a region relative to 120 GeV. Reaching +-10% at 120 GeV needs ~1e4 events, i.e. ~1e4 t.yr of xenon plus a matched argon/germanium exposure to break the target degeneracy: a factor ~100 beyond XLZD and beyond any proposed detector. Dominant systematic is the M_DM - v_0 - v_esc degeneracy, which requires the halo to be pinned externally by Gaia/DESI stellar kinematics rather than marginalized; note also that above ~300 GeV (M_DM >> m_Xe = 122 GeV) the recoil spectrum saturates entirely, so this works as a yes/no threshold and not as spectroscopy of R3 versus R114.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "heavy", "regions": ["R3", "R7", "R35", "R66", "R67", "R73", "R112", "R114", "R116", "R118", "R130", "R210"]},
            {"label": "light", "regions": ["R0", "R1", "R2", "R4", "R5", "R6", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R36", "R38", "R39", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R61", "R62", "R63", "R64", "R68", "R69", "R70", "R74", "R75", "R76", "R78", "R79", "R80", "R81", "R82", "R84", "R85", "R86", "R87", "R88", "R89", "R90", "R91", "R92", "R93", "R94", "R95", "R96", "R97", "R98", "R99", "R100", "R101", "R102", "R103", "R104", "R105", "R106", "R107", "R108", "R109", "R110", "R113", "R119", "R121", "R122", "R123", "R124", "R129", "R133", "R134", "R135", "R137", "R138", "R139", "R141", "R142", "R143", "R144", "R145", "R146", "R147", "R149", "R150", "R151", "R152", "R153", "R154", "R155", "R156", "R157", "R158", "R159", "R160", "R161", "R162", "R163", "R164", "R165", "R166", "R167", "R168", "R169", "R170", "R171", "R172", "R173", "R174", "R175", "R176", "R177", "R178", "R179", "R180", "R181", "R182", "R183", "R184", "R185", "R186", "R187", "R188", "R189", "R190", "R191", "R192", "R193", "R194", "R195", "R196", "R197", "R198", "R199", "R200", "R201", "R202", "R203", "R204", "R205", "R206", "R207", "R208", "R209"]}
          ]
        }
      ]
    }
  ]
}
```