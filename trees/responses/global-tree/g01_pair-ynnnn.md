I'll verify the references I want to cite before writing up.
## Reasoning — leaf `root_yes_no_no_no_no_no` (8837 pts, 211 units)

### What the path already fixed, and what it left open

Every unit here has σ_SI in the 1–10× XLZD band, nothing at DarkSide, no ν signal at IceCube-Gen2, no WW-channel γ-ray signal at Fermi-15yr or CTA, and BR(h→inv) < 0.001. That combination pins the *elastic, isoscalar, Higgs-portal* part of every model to essentially the same value (all regions have α1 ≈ 1×10⁻³–7×10⁻³, i.e. λ_hs at the scan floor) and pins m_DM to a narrow band for most units. So no further direct-detection, invisible-Higgs, or WW-channel γ-ray observable can help — which is exactly why the catalog stalled.

### The structure the parameters actually reveal

Reading the U(1)′ regions quantitatively, a sharp physical dichotomy appears that none of the 18 catalog observables tests:

**(A) A "secluded" thermal branch.** A large set of `CsSg_U1p` regions sits on the locus g′⁴ ∝ m_DM² with M_Z′ ≪ M_DM:

| region | M_DM (GeV) | M_Z′ (GeV) | g′ |
|---|---|---|---|
| R0 (473 pts) | 102–211 | 1–31 | 0.108–0.205 |
| R3 | 219–315 | 21–49 | 0.262–0.312 |
| R7 | 146–302 | 17–60 | 0.211–0.306 |
| R114 | 299–315 | 34–37 | 0.304–0.312 |
| R117 | 246–291 | 60–122 | 0.283–0.301 |

For ΦΦ\*→Z′Z′ the s-wave rate is σv ≈ g′⁴/(16π m_DM²). Plugging in:
- R0 (g′=0.17, m=150): 8.35×10⁻⁴ / (16π·2.25×10⁴) = 7.4×10⁻¹⁰ GeV⁻² → **8.6×10⁻²⁷ cm³/s**
- R3 (g′=0.30, m=300): → **2.1×10⁻²⁶ cm³/s**
- R28/R119/R68 (g′≈0.16–0.17, m≈95–115): → **3–5×10⁻²⁷ cm³/s**

That is the thermal locus, and it explains why g′ tracks m_DM across these 33 regions. The relic is set entirely in the dark sector; the Higgs portal is a spectator (which is why α1 is at the floor and BR(h→inv) is below the 4ν floor). The Z′ then decays *promptly* — at ε ≥ 10⁻⁶ and m_Z′ ≥ 1 GeV, Γ ≈ αε²m_Z′ gives cτ ≲ 3 cm, so no long-lived/far-detector signature exists (I checked: the solar-escape "secluded Sun" signature of Schuster–Toro–Yavin needs cτ ≳ R_⊙ and is dead here).

The decisive consequence: a photon-like Z′ of 1–120 GeV has BR(Z′→e⁺e⁻) ≈ BR(→μ⁺μ⁻) ≈ 0.15 (≈0.3 each near 1 GeV), so **each annihilation yields ~0.6–1.2 charged leptons in a hard box spectrum running from E₋ ≈ m_Z′²/4m_DM up to E₊ ≈ m_DM**. Effective leptonic σv ≈ 1×10⁻²⁷–6×10⁻²⁷ cm³/s, with a **sharp positron edge at 100–315 GeV**.

**(B) Everything else — 178 regions — has no such component.** These are: the Real Scalar Singlet R1 (m=94.6–95.1 GeV), all 100+ `CsSg` regions (m=97.4–97.9 GeV), and the `CsSg_U1p` regions where the Z′ is either *too heavy* (M_Z′ = 10²–10⁴ GeV ≫ M_DM: R16, R21, R22, R29, R30, R39, R41–R54, R69, R70, R73, R74, R84–R94, R121–R123, R130, R135, R141–R164) or *too weakly gauged* (g′ = 0.003–0.09 with M_Z′ ~ 1 GeV: R4, R5, R20, R38, R40, R48, R75–R83, R87, R118, R133, R134, R136–R140, R144, R147, R148, R161; also R34 at g′≈0.09, m≈235 → σv ≈ 2.6×10⁻²⁸). For all of these the annihilation proceeds through the λ_hs ≈ 10⁻³ Higgs portal into WW/bb, σv ≲ 10⁻²⁸ cm³/s, giving positrons that are soft (from W and b decay chains), 2–3 orders of magnitude weaker, and with **no spectral edge**.

Note this is fully consistent with the path: a 4ℓ-cascade spectrum is γ-poor relative to WW, so σv ~ 10⁻²⁶ evades the CTA(WW) and Fermi15yr(WW) catalog cuts, and no channel here produces the hard ν's IceCube-Gen2 needs.

### Level 1 — lit review: cosmic-ray positron flux

Antimatter cosmic rays are **not** in the catalog (which uses γ-rays per channel plus neutrinos). The measurement is a real one with published DM limits (Bergström et al., AMS-02) and a formally proposed successor with published projections (AMS-100). The falsifiable statement in absolute units: *is there a hard primary e⁺ component with a spectral edge in 100–315 GeV corresponding to σv ≥ 5×10⁻²⁷ cm³/s into a 4-lepton cascade?*

- Branch A (33 regions): predicted 1–6×10⁻²⁷ cm³/s in leptons from a total σv of 3×10⁻²⁷–2×10⁻²⁶, with the edge at E = m_DM.
- Branch B (178 regions): predicted leptonic σv < 10⁻²⁹ cm³/s, no edge.

**Honesty caveat (important):** current AMS-02 limits for μ⁺μ⁻/4μ at 100–300 GeV are σv ≲ 1–5×10⁻²⁵ cm³/s, i.e. a factor 20–100 *above* the branch-A prediction. This split is therefore **not** realizable with today's data — it requires AMS-100's ~10³× acceptance-time, which its design report projects will push leptonic σv sensitivity below 10⁻²⁷ cm³/s. The dominant systematic is the pulsar contribution to the ≥100 GeV positron flux (which itself cuts off near ~285 GeV) plus CR propagation modelling; the *edge* shape, not the integrated flux, is what carries the discrimination. Two marginal assignments: R36 (g′ 0.107–0.168 at m up to 143) and R0's lowest-mass corner (g′ 0.108 at m ≈ 102) sit right at the 5×10⁻²⁷ threshold and could fall either way.

### Level 2 — novel experiments

**A. Positron-box edge spectroscopy** (attached to the 33 secluded regions). The box's upper edge is at E = m_DM to better than 1%, so measuring the edge *energy* — not the flux — reads off m_DM. Branch A splits cleanly: R3 (219–315), R7 (146–302), R18 (239–301), R19 (112–248), R35 (175–289), R37 (103–248), R65 (162–238), R66 (259–314), R67 (167–314), R111 (184–315), R112, R114–R117, R120 (151–155), R125 (127–205), R131 (124–309), R132 (213–235), R210 (237–292) predict an edge ≥150 GeV; R28 (103–115), R36 (102–143), R68 (94.8–95.0), R71 (132–149), R72 (107–179), R113 (111–150), R119 (95–113), R124 (106–170), R126 (102–139), R127 (102–109), R128 (101–112), R129 (102–104) predict <150 GeV. **R0 straddles the cut (102–211 GeV) and would be split internally** — I assign it to the low branch by its lower bound, and flag that this is the one dishonest-looking assignment in the tree.

**B. Ultra-exposure multi-target recoil mass spectroscopy** (attached to the 178 non-secluded regions). Here the *only* remaining lever is m_DM, and it is 3% apart between the Real Scalar Singlet (R1: 94.6–95.1 GeV, 409 pts — a whole Lagrangian isolated) and the 97.4–97.9 GeV pile, with four heavy outliers (R34 222–249, R73 127.5, R118 181.5, R130 127.5). This is genuinely hard: above m_N the recoil spectrum becomes nearly mass-independent, so mass reconstruction saturates. Rating is speculative and I say so below.

---

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_no_no_no_no",
      "lit_review": {
        "name": "AMS-100 cosmic-ray positron flux, hard cascade component",
        "observable": "sigma_v(DM DM -> 4 leptons) >= 5e-27 cm^3/s with e+ edge in 100-315 GeV ?",
        "refs": ["arXiv:1306.3983", "arXiv:1907.04168", "arXiv:0711.4866"],
        "reasoning": "33 CsSg_U1p regions sit on the secluded thermal locus g'^4 ~ m_DM^2 with M_Z' << M_DM: sigma_v = g'^4/(16 pi m_DM^2) gives 8.6e-27 cm^3/s for R0 (g'=0.17, m=150 GeV), 2.1e-26 for R3 (g'=0.30, m=300 GeV), 3-5e-27 for R28/R68/R119 (g'~0.17, m~95-115 GeV). The Z' is photon-like and prompt (c*tau < 3 cm at eps >= 1e-6), with BR(Z'->ee) = BR(Z'->mumu) ~ 0.15 (0.3 near 1 GeV), so each annihilation gives 0.6-1.2 charged leptons in a box spectrum from E- ~ m_Z'^2/4m_DM up to a sharp edge at E+ ~ m_DM; effective leptonic sigma_v 1-6e-27 cm^3/s. The other 178 regions (Real Scalar Singlet R1, all CsSg, and CsSg_U1p with M_Z' = 1e2-1e4 GeV or g' = 0.003-0.09) annihilate only through the lambda_hs ~ 1e-3 Higgs portal into WW/bb with sigma_v < 1e-28 cm^3/s, giving soft secondary positrons 2-3 orders of magnitude weaker and no edge. This is consistent with the path: a 4-lepton cascade is gamma-poor relative to WW, so it evades the CTA(WW) and Fermi15yr(WW) catalog cuts, and produces no hard neutrinos. MARGINAL: current AMS-02 limits for mumu/4mu at 100-300 GeV are sigma_v < 1-5e-25 cm^3/s, i.e. 20-100x above the prediction, so this split is NOT available today; it needs AMS-100's ~1e3 larger acceptance-time, whose published projections reach below 1e-27 cm^3/s for leptonic channels. Dominant systematic is the pulsar component of the >100 GeV positron flux plus CR propagation; the edge shape rather than the integrated flux carries the discrimination. R36 (g' 0.107-0.168) and the lowest-mass corner of R0 (g' 0.108, m 102 GeV) sit within a factor ~2 of the 5e-27 cut and could fall either way.",
        "status": "Splits!",
        "outcomes": [
          {"label": "hard edge seen", "regions": ["R0", "R3", "R7", "R18", "R19", "R28", "R35", "R36", "R37", "R65", "R66", "R67", "R68", "R71", "R72", "R111", "R112", "R113", "R114", "R115", "R116", "R117", "R119", "R120", "R124", "R125", "R126", "R127", "R128", "R129", "R131", "R132", "R210"]},
          {"label": "not seen", "regions": ["R1", "R2", "R4", "R5", "R6", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R29", "R30", "R31", "R32", "R33", "R34", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R61", "R62", "R63", "R64", "R69", "R70", "R73", "R74", "R75", "R76", "R77", "R78", "R79", "R80", "R81", "R82", "R83", "R84", "R85", "R86", "R87", "R88", "R89", "R90", "R91", "R92", "R93", "R94", "R95", "R96", "R97", "R98", "R99", "R100", "R101", "R102", "R103", "R104", "R105", "R106", "R107", "R108", "R109", "R110", "R118", "R121", "R122", "R123", "R130", "R133", "R134", "R135", "R136", "R137", "R138", "R139", "R140", "R141", "R142", "R143", "R144", "R145", "R146", "R147", "R148", "R149", "R150", "R151", "R152", "R153", "R154", "R155", "R156", "R157", "R158", "R159", "R160", "R161", "R162", "R163", "R164", "R165", "R166", "R167", "R168", "R169", "R170", "R171", "R172", "R173", "R174", "R175", "R176", "R177", "R178", "R179", "R180", "R181", "R182", "R183", "R184", "R185", "R186", "R187", "R188", "R189", "R190", "R191", "R192", "R193", "R194", "R195", "R196", "R197", "R198", "R199", "R200", "R201", "R202", "R203", "R204", "R205", "R206", "R207", "R208", "R209"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R3+R7+R18+R19+R28+R35+R36+R37+R65+R66+R67+R68+R71+R72+R111+R112+R113+R114+R115+R116+R117+R119+R120+R124+R125+R126+R127+R128+R129+R131+R132+R210",
          "name": "Positron-box edge spectroscopy",
          "observable": "e+ spectral edge energy >= 150 GeV ?",
          "reasoning": "For DM DM -> Z'Z' -> 4 leptons the positron spectrum is a box whose upper edge sits at E = m_DM to better than 1% (the correction is O(m_Z'^2/m_DM^2) < 0.2% for M_Z' <~ 30 GeV). Measuring the edge ENERGY rather than the flux therefore reads m_DM off directly. Predicted edges: R3 219-315, R7 146-302, R18 239-301, R19 112-248, R35 175-289, R37 103-248, R65 162-238, R66 259-314, R67 167-314, R111 184-315, R112 172-185, R114 299-315, R115 251-303, R116 292-295, R117 246-291, R120 151-155, R125 127-205, R131 124-309, R132 213-235, R210 237-292 GeV (all >= 150 GeV for the bulk of their points); versus R28 103-115, R36 102-143, R68 94.8-95.0, R71 132-149, R72 107-179, R113 111-150, R119 95-113, R124 106-170, R126 102-139, R127 102-109, R128 101-112, R129 102-104 GeV. CAVEAT: R0 (473 pts) straddles the cut at 102-211 GeV and would be split internally by this measurement; it is assigned to the low branch by its lower bound, and R19, R37, R72, R124 and R131 each have a minority tail on the wrong side.",
          "feasibility": "Closest instrument: AMS-02, with ~2-3% rigidity resolution at 100 GeV (adequate) but only 0.05 m^2 sr acceptance, yielding a few hundred total positrons above 200 GeV - far too few to fit an edge against the pulsar continuum. The proposed AMS-100 (Lagrange point 2, ~100 m^2 sr, ~1000x acceptance-time) would deliver 1e3-1e4 DM positrons above 100 GeV, enough to localise an edge to ~3%. Required improvement over the best existing instrument is ~1e3 in acceptance; relative to the proposed AMS-100 it is ~1x, so this needs that dedicated next-generation mission to fly and nothing more. Dominant systematic: the intrinsic ~285 GeV cutoff of the pulsar/secondary positron spectrum, which mimics an edge and must be separated by shape (a box edge is a step, a pulsar cutoff is exponential) using the simultaneously measured electron and antiproton spectra.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "edge >= 150 GeV", "regions": ["R3", "R7", "R18", "R19", "R35", "R37", "R65", "R66", "R67", "R111", "R112", "R114", "R115", "R116", "R117", "R120", "R125", "R131", "R132", "R210"]},
            {"label": "edge < 150 GeV", "regions": ["R0", "R28", "R36", "R68", "R71", "R72", "R113", "R119", "R124", "R126", "R127", "R128", "R129"]}
          ]
        },
        {
          "attach_to": "R1+R2+R4+R5+R6+R8+R9+R10+R11+R12+R13+R14+R15+R16+R17+R20+R21+R22+R23+R24+R25+R26+R27+R29+R30+R31+R32+R33+R34+R38+R39+R40+R41+R42+R43+R44+R45+R46+R47+R48+R49+R50+R51+R52+R53+R54+R55+R56+R57+R58+R59+R60+R61+R62+R63+R64+R69+R70+R73+R74+R75+R76+R77+R78+R79+R80+R81+R82+R83+R84+R85+R86+R87+R88+R89+R90+R91+R92+R93+R94+R95+R96+R97+R98+R99+R100+R101+R102+R103+R104+R105+R106+R107+R108+R109+R110+R118+R121+R122+R123+R130+R133+R134+R135+R136+R137+R138+R139+R140+R141+R142+R143+R144+R145+R146+R147+R148+R149+R150+R151+R152+R153+R154+R155+R156+R157+R158+R159+R160+R161+R162+R163+R164+R165+R166+R167+R168+R169+R170+R171+R172+R173+R174+R175+R176+R177+R178+R179+R180+R181+R182+R183+R184+R185+R186+R187+R188+R189+R190+R191+R192+R193+R194+R195+R196+R197+R198+R199+R200+R201+R202+R203+R204+R205+R206+R207+R208+R209",
          "name": "Ultra-exposure multi-target recoil mass spectroscopy",
          "observable": "reconstructed m_DM to +-1.5%: < 96.5, 96.5-120, or >= 120 GeV ?",
          "reasoning": "These 178 regions are all pure Higgs-portal scatterers with lambda_hs at the 1e-3 floor, so every rate-based observable is identical by construction; the only surviving physical difference is the DM mass. The Real Scalar Singlet R1 (409 pts) predicts m_DM = 94.64-95.07 GeV; every Complex Scalar Singlet region and every heavy-Z'/weakly-gauged CsSg_U1p region predicts 96.98-97.90 GeV (e.g. R2 97.43-97.89, R6 97.86, R16 97.62, R110 97.25-97.55, R209 97.53-97.56); and four outliers predict much heavier DM: R34 222.5-248.5, R118 181.5, R73 127.5, R130 127.5 GeV. A 1.5% mass measurement therefore isolates an entire Lagrangian (the Real Scalar Singlet) from the complex-singlet family, and peels off the four heavy stragglers. It leaves the 173-region 97.4-97.9 GeV pile degenerate - those units differ only in quartic self-couplings that touch no observable at this portal strength, and I do not claim any measurement separates them.",
          "feasibility": "Closest instruments: XLZD (60-80 t xenon) plus a light-target partner (Argo, or SuperCDMS/Ge). Published mass-reconstruction studies show that for m_DM >> m_N the recoil spectrum becomes nearly mass-independent: ~100 events at 100 GeV give roughly a factor-2 mass uncertainty, and even 1e4 events saturate near 10-20% because m_DM is degenerate with the halo escape velocity and the shape of the high-velocity tail. At 1-10x the XLZD limit a 1000 t-yr xenon exposure yields only O(1e2) signal events. Reaching +-1.5% needs of order 1e6 signal events - a >1e4 increase in exposure x rate, i.e. a ~kiloton-year noble-liquid programme - AND independent percent-level knowledge of v_esc and f(v) that no current or planned astrometric survey provides. Dominant systematic is precisely that halo-model degeneracy, not statistics, so the light-target cross-check (which breaks it only partially, and is itself signal-starved here since DarkSide sees nothing) does not rescue it. This is more than 10x beyond any proposed instrument.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "m < 96.5 GeV", "regions": ["R1"]},
            {"label": "96.5-120 GeV", "regions": ["R2", "R4", "R5", "R6", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R29", "R30", "R31", "R32", "R33", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R61", "R62", "R63", "R64", "R69", "R70", "R74", "R75", "R76", "R77", "R78", "R79", "R80", "R81", "R82", "R83", "R84", "R85", "R86", "R87", "R88", "R89", "R90", "R91", "R92", "R93", "R94", "R95", "R96", "R97", "R98", "R99", "R100", "R101", "R102", "R103", "R104", "R105", "R106", "R107", "R108", "R109", "R110", "R121", "R122", "R123", "R133", "R134", "R135", "R136", "R137", "R138", "R139", "R140", "R141", "R142", "R143", "R144", "R145", "R146", "R147", "R148", "R149", "R150", "R151", "R152", "R153", "R154", "R155", "R156", "R157", "R158", "R159", "R160", "R161", "R162", "R163", "R164", "R165", "R166", "R167", "R168", "R169", "R170", "R171", "R172", "R173", "R174", "R175", "R176", "R177", "R178", "R179", "R180", "R181", "R182", "R183", "R184", "R185", "R186", "R187", "R188", "R189", "R190", "R191", "R192", "R193", "R194", "R195", "R196", "R197", "R198", "R199", "R200", "R201", "R202", "R203", "R204", "R205", "R206", "R207", "R208", "R209"]},
            {"label": "m >= 120 GeV", "regions": ["R34", "R73", "R118", "R130"]}
          ]
        }
      ]
    }
  ]
}
```