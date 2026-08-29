This is a physics-reasoning task with a verification step: before writing the single final answer, I'll verify the arXiv references I intend to cite, as the rules require. Loading the fetch tool and checking six candidate IDs.
Now verifying all six candidate references in parallel:
All six references resolve and their titles match my claims (GAMBIT scalar-singlet global fit; Cline et al. singlet update; Harvey et al. cluster σ/m < 0.47 cm²/g; Tulin–Yu SIDM review; CTA Galactic-centre sensitivity; Planck 2018 parameters, which contains the p_ann annihilation bound in its extensions section). I can now deliver the full answer.

---

# Degeneracy-breaking analysis: CsSg_DM.Z2+3+4+5

## The structure of the degeneracy (applies to both leaves)

This model has exactly **one** SM portal: `alpha1 * H^2 * sr^2`. The imaginary component `si` and all fifteen quartics `alpha2–alpha16` are pure dark-sector self-couplings with no SM legs. Every observable any laboratory can see — σ_SI (∝ α1²μ²f_N²/m_h⁴m_S²), ⟨σv⟩ into WW/ZZ/bb (s-channel off-shell h, ∝ α1²), the invisible/off-shell Higgs width, any collider production, any solar-capture or CMB-injection signal — is a function of **(MDM, α1) only**.

Now look at what actually varies across regions inside each leaf:

- **Leaf `root_yes_no`**: MDM ∈ [95.44, 95.87] (0.45% total spread), α1 ∈ [0.00165, 0.00188] (±7%). σ_SI differs between the extreme regions by (0.00185/0.00170)² ≈ 18%; ⟨σv⟩ and BR(h→inv) similarly at the ≤20% level.
- **Leaf `root_no`**: α1 is pinned at the scan floor 0.001 in ~87 of 91 regions (R0, R33, R45, R90 reach at most 0.00116), MDM ∈ [97.25, 97.90] (0.65% spread). Inter-region σ_SI spread ≤ (1.16)² ≈ 35%, and the absolute scale is σ_SI ~ 10⁻⁵⁰ cm² — beneath the xenon neutrino fog, i.e. there is no direct-detection rate to modulate, point directionally, or capture in the Sun.

The regions are instead separated by **orders-of-magnitude differences in α2–α16** (e.g. leaf-1 R0 has α4 = α12 = 10 while R12 has every quartic ≤ 0.29) plus a **0.3 GeV bimodality in MDM**. So the question is: does any real measurement couple to the dark quartics, or resolve 0.3% in a 96 GeV DM mass?

**Systematic sweep of catalog-external candidates (with numbers):**

- **Dwarf spheroidals vs Galactic centre, radio, antiprotons, CMB injection** (Planck p_ann < 3.2×10⁻²⁸ cm³/s/GeV, arXiv:1807.06209): the annihilation is s-wave through the same portal into the same WW-dominated final state in every region — the leaf's shared class "⟨σv⟩ 1–10× CTA(WW)" is common to all regions by construction. Ratios between regions ≈ 1. No split.
- **Solar neutrinos (IceCube)**: capture ∝ σ_SI (σ_SD ≡ 0 for a scalar singlet); inter-region σ_SI spread 18–35%, far below the ~factor-2 capture-rate systematics (local ρ_DM, velocity distribution) — and in `root_no` the absolute capture rate is negligible anyway. No split.
- **Annual modulation / directional DD**: needs a rate; σ_SI ~ 10⁻⁴⁹–10⁻⁵⁰ cm² gives none. No split.
- **Beam dumps / fixed target**: DM at 96–98 GeV with no light mediator — kinematically dead. No split.
- **Precision Higgs couplings (FCC-ee/CEPC)**: the singlet has no vev, hence no h–s mixing; the only Higgs effect is the (off-shell) invisible width, which is already the catalog's BR(h→inv) axis. No new information.
- **DM self-interactions — the ONLY observable the quartics enter**: σ_self ≈ α_eff²/(64π m²) ≈ 1.1×10⁻³⁴ cm² × α_eff². Per region: any region with an α = 10 (most of them, e.g. leaf-1 R0, R2, R5; leaf-2 R0, R17, R29…) predicts σ/m ≈ 1.2×10⁻¹⁰ cm²/g; the smallest-quartic regions (leaf-1 R12, α_max ≈ 0.29 → ~1×10⁻¹³; leaf-1 R9, α_max ≈ 1.4 → ~2×10⁻¹²; leaf-2 R58, α_max ≈ 1.6 → ~3×10⁻¹²) predict less. The strongest real bound is σ/m < 0.47 cm²/g from 72 colliding clusters (arXiv:1503.07675), with small-scale-structure sensitivity ~0.1–1 cm²/g (arXiv:1705.02358). Every region sits **9–13 orders of magnitude below** the bound. The measurement is real, falsifiable, catalog-external — and returns "no" for every region.

**Honest conclusion for Level 1, both leaves: `No Split!`** I record the colliding-cluster σ/m bound as the lit-review node (it is the single catalog-external measurement that couples at all to the parameters that differ), with all regions in the one "no" outcome. This is the physically correct statement: the RL scan's residual degenerate directions are dark-sector self-couplings that decouple from every published or planned measurement once the portal and mass are fixed — as the global-fit literature makes explicit by showing all singlet-portal phenomenology collapses onto the (m_S, λ_hS) plane (arXiv:1705.07931, arXiv:1306.4710).

## Level 2 — novel experiment: sub-per-mille γ-line spectroscopy of the Galactic centre

The one physical difference besides the quartics is the **MDM bimodality**, and there exists one observable that reads DM mass in absolute units with no astrophysical modeling: the energy of the loop-induced γγ annihilation line, E_line = MDM exactly (annihilation at rest; each photon carries the DM mass).

**Leaf `root_yes_no`** — two clean mass clusters:
- Low: R2 [95.47–95.55], R4/R5/R6/R9 [95.47], R7 [95.44–95.51], R8 [95.45–95.46] → E_line ≈ 95.44–95.55 GeV.
- High: R0 [95.85–95.87], R1 [95.56–95.85], R3 [95.69–95.71], R10 [95.85], R11 [95.77], R12 [95.78–95.81], R13 [95.71–95.72], R14 [95.80] → E_line ≈ 95.56–95.87 GeV.
- Cut: **E ≥ 95.6 GeV**. Caveat: R1's lower edge (95.56) sits 0.04 GeV below the cut; it is assigned "high" by its bulk — a marginal assignment, flagged honestly.

**Leaf `root_no`** — cut **E ≥ 97.65 GeV**:
- Low: R45 [97.25–97.55], R90 [97.53–97.56].
- High: all 89 other regions, E_line ≈ 97.75–97.90 GeV. Caveats: R0 [97.43–97.89] and R33 [97.55–97.86] straddle the cut and are assigned "high" by bulk. The sub-clusters at 97.75–97.83 vs 97.86–97.90 (0.03–0.1 GeV apart) are **below the Doppler line width and are not resolvable even by this instrument** — they remain degenerate, and I state so rather than invent a finer split.

**Feasibility (honest):** closest instrument is CTA-South's GC survey: energy resolution ~6–8% at 100 GeV, absolute energy-scale calibration ~2%, γ-line sensitivity ⟨σv⟩_γγ ~ 2×10⁻²⁸ cm³/s near 100 GeV (instrument context: arXiv:2007.16129). Required here: the loop-suppressed line rate is ⟨σv⟩_γγ ~ 10⁻⁴ × ⟨σv⟩_tot ~ 10⁻²⁹–10⁻²⁸ cm³/s (up to ~10× below CTA reach → ~10× effective area), and the 0.3 GeV cluster separation demands a line-centroid measurement at ~0.03% absolute energy scale — ~60× beyond current IACT calibration. The halo velocity dispersion (v/c ~ 10⁻³) Doppler-broadens the line to σ_E ≈ 0.1 GeV, so the separation is ~3σ of intrinsic width: centroiding requires O(100) line photons on top of the energy-scale control, whose atmospheric-Cherenkov calibration is the dominant systematic. Both requirements exceed the ~10× threshold → **speculative**, for both leaves.

The remaining intra-cluster degeneracies (pure quartic differences) are physically inaccessible: their only observable, σ_self/m, sits ≥10⁹ below the reach of any existing or proposed instrument, so no defensible further node exists.

```json
{
  "model": "CsSg_DM.Z2+3+4+5",
  "leaves": [
    {
      "leaf_id": "root_yes_no",
      "lit_review": {
        "name": "Colliding-cluster DM self-interaction bound (only catalog-external probe of the differing quartics)",
        "observable": "sigma/m > 0.5 cm^2/g ?",
        "refs": ["arXiv:1705.07931", "arXiv:1503.07675", "arXiv:1807.06209"],
        "reasoning": "Regions share MDM to 0.45% and portal alpha1 to +/-7%, so every SM-facing observable (sigma_SI, sigmav, h->inv, solar capture, CMB p_ann) agrees across regions to <~20% -- below any measurement's systematics; the only parameters that differ, the dark quartics alpha2-16, enter solely DM self-scattering: sigma_self/m ~ 1.1e-34 cm^2 x alpha_eff^2 / m gives 1e-13 (R12, alpha_max~0.29) to 1.2e-10 cm^2/g (alpha=10 regions like R0), i.e. 9-13 orders below the 0.47 cm^2/g cluster bound, so all 15 regions land in the single 'no' outcome.",
        "status": "No Split!",
        "outcomes": [
          {"label": "no", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9+R10+R11+R12+R13+R14",
          "name": "Galactic-centre gamma-line spectroscopy at 0.03% absolute energy scale",
          "observable": "E(gamma-gamma line) >= 95.6 GeV ?",
          "reasoning": "The gamma-gamma line sits at E=MDM exactly; regions split into a low-mass cluster (R2,R4,R5,R6,R7,R8,R9: 95.44-95.55 GeV) and a high-mass cluster (R0,R1,R3,R10,R11,R12,R13,R14: 95.56-95.87 GeV), 0.3 GeV apart; line rate sigmav_gg ~ 1e-4 x sigmav_tot ~ 1e-29..1e-28 cm^3/s; R1's lower edge (95.56) is marginally below the cut and assigned by bulk; intra-cluster quartic differences remain unresolvable.",
          "feasibility": "Closest instrument CTA-South GC survey: ~6-8% energy resolution, ~2% absolute energy-scale calibration, line sensitivity ~2e-28 cm^3/s near 100 GeV; needs ~60x better absolute energy scale (0.03%) plus ~10x effective area for the loop-suppressed line; Doppler width from halo dispersion (~0.1 GeV) makes the separation ~3 sigma, requiring O(100) line photons; dominant systematic is atmospheric-Cherenkov energy-scale calibration.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "high mass", "regions": ["R0", "R1", "R3", "R10", "R11", "R12", "R13", "R14"]},
            {"label": "low mass", "regions": ["R2", "R4", "R5", "R6", "R7", "R8", "R9"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no",
      "lit_review": {
        "name": "Self-interaction bounds, clusters and small-scale structure (only probe of the differing quartics)",
        "observable": "sigma/m > 0.5 cm^2/g ?",
        "refs": ["arXiv:1306.4710", "arXiv:1705.02358", "arXiv:2007.16129"],
        "reasoning": "alpha1 is pinned at 0.001 in ~87 of 91 regions (max 0.00116 in R45/R90/R0/R33) and MDM agrees to 0.65%, so sigma_SI ~ 1e-50 cm^2 (below the neutrino fog: no DD, modulation, directional or solar-capture rate exists), sigmav is the same s-wave WW class in all regions (dwarfs/GC/CMB ratios ~1), and beam dumps and Higgs-coupling fits are blind (97 GeV singlet, no h-mixing); the differing quartics enter only sigma_self/m ~ 4e-13 (R58-like, alpha_max~1.6) to 1.2e-10 cm^2/g (alpha=10 regions), 9-13 orders below the 0.47 cm^2/g cluster bound -- single 'no' outcome for all 91 regions.",
        "status": "No Split!",
        "outcomes": [
          {"label": "no", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R18", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R34", "R35", "R36", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R61", "R62", "R63", "R64", "R65", "R66", "R67", "R68", "R69", "R70", "R71", "R72", "R73", "R74", "R75", "R76", "R77", "R78", "R79", "R80", "R81", "R82", "R83", "R84", "R85", "R86", "R87", "R88", "R89", "R90"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9+R10+R11+R12+R13+R14+R15+R16+R17+R18+R19+R20+R21+R22+R23+R24+R25+R26+R27+R28+R29+R30+R31+R32+R33+R34+R35+R36+R37+R38+R39+R40+R41+R42+R43+R44+R45+R46+R47+R48+R49+R50+R51+R52+R53+R54+R55+R56+R57+R58+R59+R60+R61+R62+R63+R64+R65+R66+R67+R68+R69+R70+R71+R72+R73+R74+R75+R76+R77+R78+R79+R80+R81+R82+R83+R84+R85+R86+R87+R88+R89+R90",
          "name": "Galactic-centre gamma-line spectroscopy at 0.03% absolute energy scale",
          "observable": "E(gamma-gamma line) >= 97.65 GeV ?",
          "reasoning": "E_line = MDM: R45 (97.25-97.55 GeV) and R90 (97.53-97.56 GeV) sit ~0.3 GeV below the remaining 89 regions (97.75-97.90 GeV); R0 (97.43-97.89) and R33 (97.55-97.86) straddle the cut and are assigned high by bulk; the 97.75-97.83 vs 97.86-97.90 sub-clusters are 0.03-0.1 GeV apart, below the ~0.1 GeV Doppler width, so they stay degenerate even here -- their residual differences are pure dark quartics with no accessible observable.",
          "feasibility": "Closest instrument CTA-South GC survey: ~6-8% energy resolution, ~2% absolute energy-scale calibration, line sensitivity ~2e-28 cm^3/s near 100 GeV; the loop-suppressed line at sigmav_gg ~ 1e-29..1e-28 cm^3/s needs ~10x effective area and the 0.3 GeV separation needs ~60x better absolute energy calibration; dominant systematics are the atmospheric-Cherenkov energy scale and the halo velocity-dispersion line width (~0.1 GeV), requiring O(100) line photons for centroiding.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "high mass", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R18", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R34", "R35", "R36", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R46", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R61", "R62", "R63", "R64", "R65", "R66", "R67", "R68", "R69", "R70", "R71", "R72", "R73", "R74", "R75", "R76", "R77", "R78", "R79", "R80", "R81", "R82", "R83", "R84", "R85", "R86", "R87", "R88", "R89"]},
            {"label": "low mass", "regions": ["R45", "R90"]}
          ]
        }
      ]
    }
  ]
}
```