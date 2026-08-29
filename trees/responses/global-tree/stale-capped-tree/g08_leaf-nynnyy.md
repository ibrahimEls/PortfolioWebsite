I'll verify the arXiv references I plan to cite before composing the single final answer.
All three arXiv references verified (LHCb A′→μ⁺μ⁻ search 1910.06926, prompt reach up to 70 GeV; Belle II Physics Book 1808.10567; Ilten–Soreq–Thaler–Williams–Xue inclusive LHCb dark-photon projection 1603.08926, explicitly covering the 10–40 GeV window our Z′ masses reach). Here is the full degeneracy-breaking analysis and the JSON block.

## Reasoning — Leaf `root_no_yes_no_no_yes_yes` (938 pts, 40 units)

**What this leaf physically is.** Every unit is the complex scalar singlet charged under a dark U(1)′ with kinetic mixing ε: DM mass MDM ≈ 10–74 GeV (bulk pinned at 69.67 GeV), a light Z′ with MZp ≈ 1–27 GeV, dark gauge coupling gU1p ≈ 0.15 (0.058 in R29), and Higgs portal frozen at its floor (α1 = 0.001 everywhere). Since MZp < 2·MDM in every region, the Z′ cannot decay to DM: it decays 100% visibly through the kinetic mixing, with photon-like branching fractions and lifetime cτ ∝ 1/(ε²MZp). This is exactly the visible-dark-photon parameter plane (m_A′, ε), and the leaf's regions span **five decades in ε (10⁻⁶ to 0.1)** — the single most discriminating physical quantity available, and one our catalog never probes at these masses (the catalog's Z′-dilepton entry is a high-mass HL-LHC Drell–Yan recast; it produced no split on this path).

**An honest structural point first: U1p[+] vs U1p[−] is not experimentally separable.** The two builds differ only in the sign of the scalar's dark charge. The field redefinition s → s† conjugates the dark charge and leaves every cross-section invariant (all SM-visible amplitudes enter as (Q_dark·ε)², and the Higgs-portal interference that could in principle feel the relative sign is killed by α1 = 0.001). I therefore treat the [+] and [−] region labels as bookkeeping and separate **regions**, not Lagrangian signs. Any split that claims to distinguish them would be dishonest.

**Level 1 — visible dark-photon resonance search (Belle II γ+A′(→ℓℓ) and LHCb prompt A′→μμ).** Cut: an A′→μμ peak at m(μμ) = 1–20 GeV with ε ≥ 10⁻³ (ε² ≥ 10⁻⁶). Belle II with 50 ab⁻¹ projects sensitivity to ε ~ 10⁻³ across 0.1–10 GeV in e⁺e⁻ → γA′ (arXiv:1808.10567); the LHCb prompt μμ search already covers dimuon masses up to 70 GeV and sets world-leading limits at 10.6–30 GeV (arXiv:1910.06926), with ε² floors of order 10⁻⁶–10⁻⁷ in the 10–30 GeV window — matching the cut for the regions whose MZp exceeds Belle II's kinematic reach (R4, R12, R20, R27). Prediction per region, using the geometric mean of each ε range: clearly above the cut are R1, R2, R8, R11, R12, R16, R27, R33, R36 (ε up to 0.1 — parts of these are frankly already excluded by the published LHCb limits, which only sharpens the split), plus R4 (gm ε ≈ 5×10⁻³) and R20 (gm ≈ 1.8×10⁻³, **marginal**: its lower edge 9.5×10⁻⁴ sits on the cut). Clearly below are the ε ≲ 10⁻⁵ regions (R0, R3, R7, R9, R10, R15, R17–R19, R21–R24, R31, R34, R35, R38, R39) and the mid-ε regions R5, R6, R13, R14, R25, R26, R28–R30, R32, R37 (gm ε ≈ 3×10⁻⁵–6×10⁻⁴). **Marginal straddlers** assigned by geometric mean: R5, R13, R32 (upper edges 1–3×10⁻³ poke above the cut) go to "no"; R4, R20 go to "yes". This split cuts across the CsSg_U1p[+]/[−] region populations symmetrically, as it must given the charge-conjugation degeneracy.

**Level 2a — for the 11 "seen" regions: A′ mass spectroscopy.** Once a peak exists, its mass is measured to per-mille precision by the same detectors — no new hardware, just the follow-up measurement. Predicted m(μμ): R27 = 17.09–17.16 GeV (remarkably tight), R20 = 12.1–15.6 GeV, versus MZp ≲ 7 GeV for R1, R2, R8, R11, R16, R33 (R33 pinned at 1.0 GeV), R36 ≤ 5.8 GeV. Cut at 12 GeV separates {R20, R27} from the rest; R12 (5.4–16.1 GeV, gm ≈ 9.3) and R4 (2.1–18 GeV, gm ≈ 6.2) straddle and are assigned to the low-mass side — marginal, flagged as such. The measured (m_A′, σ×BR) pair additionally pins ε and would sub-separate the low-mass group further; that refinement lives here in the record.

**Level 2b — for the 29 "not seen" regions: γ-ray spectral endpoint of the annihilation signal (Fermi-LAT + CTA GC).** This leaf's phenotype guarantees a 10–100× signal over the CTA (bb̄) sensitivity and 1–10× the Fermi 15-yr limit — i.e., a *detected*, high-statistics spectrum, not a limit. The annihilation is dominantly ss* → Z′Z′ → 4 SM fermions (rate ∝ g⁴, unsuppressed by ε; the Higgs-portal bb̄ channel is dead at α1 = 0.001), so the photon continuum cuts off at E ≈ MDM. Predicted endpoints: R29 at 10.4 GeV (all flux below ~10 GeV — Fermi sees a bright GeV source, CTA sees literally nothing, the cleanest possible discrimination); R38 at 44.4 GeV; R19 at 53.9–56.3 GeV; R28 gm ≈ 50 GeV; R17 (gm ≈ 57) and R26 (gm ≈ 56) marginal, assigned to the middle bin; versus the bulk pinned at 69.67 GeV (R39 at 62.7 GeV just clears the 60 GeV cut — marginal). Three outcomes: E_cut < 30 GeV → {R29}; 30–60 GeV → {R17, R19, R26, R28, R38}; ≥ 60 GeV → the 23-region bulk. Feasibility is real but the systematics are honest: the GC diffuse-emission model dominates, and the 30–100 GeV window sits between Fermi's statistics and CTA's threshold (LSTs / high-zenith observation needed), so the 44-vs-70 GeV discrimination is solid while 62.7-vs-69.67 is not.

**Level 2c — for the same 29 regions: LHCb Upgrade II inclusive prompt+displaced A′→μμ, pushing to ε ≈ 3×10⁻⁵.** The published projection (arXiv:1603.08926) reaches ε² ~ 10⁻⁹–10⁻¹⁰ below ~10 GeV and highlights 10–40 GeV as prime unexplored territory; at 300 fb⁻¹ this covers the mid-ε population: predicted seen (gm ε): R5 (5.7×10⁻⁴), R13 (6.6×10⁻⁴), R32 (6.5×10⁻⁴), R14 (2.1×10⁻⁴), R26, R28 (1.5–2.2×10⁻⁴), R29, R37, R25 (0.9–1×10⁻⁴), and marginally R6 (5.1×10⁻⁵), R23 (4.6×10⁻⁵), R30 (3.9×10⁻⁵). Not seen: the ε ≲ 10⁻⁵ floor regions (R0, R3, R7, R9, R10, R15, R17, R18, R19, R21, R22, R24, R31, R34, R35, R38, R39; R18 at gm 2.8×10⁻⁵ is the marginal one, assigned "no"). Reach degrades at MZp ≳ 15 GeV (relevant for R19's 27 GeV Z′, already on the "no" side anyway).

**Residual degeneracy — stated honestly.** After all three measurements, the ~15 ultra-low-ε regions with MDM = 69.67 GeV (R0, R3, R7, R9, R10, R15, R18, R21, R22, R24, R31, R34, R35, plus R39 and parts of R3) differ from one another essentially only in the dark-sector quartics α2–α6 and in MZp values buried at ε ≤ 10⁻⁵. The quartics feed only DM self-scattering, at σ/m ~ α²/(16πM³) ≲ 10⁻⁹ cm²/g for α ≤ 10 and M ≈ 70 GeV — nine orders of magnitude below cluster/Bullet sensitivity (~1 cm²/g). No experiment, existing or conceivable, resolves them; a "measure α5 via triple-DM self-interactions" proposal would be theater, so I decline to attach one and record the limitation here instead. The only remaining physical handle on MZp in that set would be the low-energy box edge of the annihilation e⁺ spectrum at E₋ ≈ MZp²/4MDM (3 MeV–2.6 GeV across the regions), which drowns in solar modulation and propagation systematics — speculative at best, and I judge it below the honesty bar for a formal node.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_no_yes_yes",
      "lit_review": {
        "name": "Belle II gamma+A' and LHCb prompt dark-photon search",
        "observable": "A'->mumu peak at m(mumu) 1-20 GeV with eps >= 1e-3 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1808.10567", "arXiv:1603.08926"],
        "reasoning": "Every unit is scalar DM charged under a dark U(1)' whose Z' (1-27 GeV, below the 2*MDM invisible threshold) decays 100% visibly via kinetic mixing eps. The regions span eps = 1e-6 to 0.1, and the visible dark-photon plane (m_A', eps) is exactly what Belle II (e+e- -> gamma A', 50 ab^-1 reach eps ~ 1e-3 for m < 10 GeV) and the LHCb prompt A'->mumu search (world-leading up to 70 GeV, eps^2 floors 1e-6 - 1e-7 at 10-30 GeV) measure; our catalog's Z'-dilepton entry is a high-mass HL-LHC Drell-Yan recast and never probes this window. Predicted eps (geometric mean): R1,R2,R8,R11,R12,R16,R27,R33,R36 at 1e-2 - 1e-1 (parts already excluded by published LHCb limits), R4 ~ 5e-3, R20 ~ 1.8e-3 (marginal) -> seen; mid-eps R5,R6,R13,R14,R25,R26,R28,R29,R30,R32,R37 at 3e-5 - 7e-4 and floor regions at eps <= 1e-5 -> not seen. Straddlers R5,R13,R32 assigned to 'no' by geometric mean (upper edges reach 1-3e-3; marginal). Note: U1p[+] vs U1p[-] builds are related by the field redefinition s -> s-dagger (dark-charge conjugation) and are physically identical at alpha1 = 0.001; no measurement separates the sign labels, only the parameter regions.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1", "R2", "R4", "R8", "R11", "R12", "R16", "R20", "R27", "R33", "R36"]},
          {"label": "not seen", "regions": ["R0", "R3", "R5", "R6", "R7", "R9", "R10", "R13", "R14", "R15", "R17", "R18", "R19", "R21", "R22", "R23", "R24", "R25", "R26", "R28", "R29", "R30", "R31", "R32", "R34", "R35", "R37", "R38", "R39"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R4+R8+R11+R12+R16+R20+R27+R33+R36",
          "name": "A' resonance-mass spectroscopy",
          "observable": "m(mumu) >= 12 GeV ?",
          "reasoning": "Once the dimuon peak exists, its mass is the Z' mass: R27 predicts 17.09-17.16 GeV and R20 12.1-15.6 GeV, versus MZp <= 7 GeV for R1,R2,R8,R11,R16,R33 (R33 pinned at 1.0 GeV) and R36 <= 5.8 GeV. R12 (5.4-16.1, gm 9.3 GeV) and R4 (2.1-18, gm 6.2 GeV) straddle the cut and are assigned low-mass side - marginal. The simultaneous sigma x BR measurement pins eps and sub-separates the low-mass group further.",
          "feasibility": "Same detectors as the discovery search (LHCb / Belle II); dimuon mass resolution is per-mille (~0.5% at LHCb), versus the >2x mass separation needed - no improvement factor required. Dominant systematic: none relevant; this is follow-up spectroscopy of a found peak.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "high mass", "regions": ["R20", "R27"]},
            {"label": "low mass", "regions": ["R1", "R2", "R4", "R8", "R11", "R12", "R16", "R33", "R36"]}
          ]
        },
        {
          "attach_to": "R0+R3+R5+R6+R7+R9+R10+R13+R14+R15+R17+R18+R19+R21+R22+R23+R24+R25+R26+R28+R29+R30+R31+R32+R34+R35+R37+R38+R39",
          "name": "Fermi-LAT + CTA Galactic-center annihilation-spectrum endpoint",
          "observable": "gamma continuum cutoff E_cut: < 30 / 30-60 / >= 60 GeV ?",
          "reasoning": "This leaf guarantees a detected signal (sigmav 10-100x the CTA bb sensitivity, 1-10x Fermi 15yr), so the spectrum is measured, not limited. Annihilation is dominantly ss* -> Z'Z' -> 4 fermions (rate ~ g^4, eps-independent; Higgs portal dead at alpha1=0.001), so the photon continuum ends at E ~ MDM. Predicted endpoints: R29 at 10.4 GeV (bright Fermi GeV source, zero CTA flux - cleanest case); R38 44.4 GeV, R19 54-56 GeV, R28 gm ~50 GeV, R17/R26 gm ~56-57 GeV (marginal, spans reach 74 GeV) -> middle bin; bulk pinned at 69.67 GeV -> high bin (R39 at 62.7 GeV marginal). The 62.7-vs-69.67 discrimination is NOT claimed; the 44-vs-70 and 10-vs-70 ones are robust.",
          "feasibility": "CTA (under construction) GC survey plus existing Fermi-LAT; energy resolution 10-15% at 30-100 GeV against the required >30% endpoint separations - factor ~2 margin. Needs LSTs or high-zenith observations to cover 30-70 GeV. Dominant systematic: Galactic-center diffuse-emission modeling.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "below 30", "regions": ["R29"]},
            {"label": "30 to 60", "regions": ["R17", "R19", "R26", "R28", "R38"]},
            {"label": "above 60", "regions": ["R0", "R3", "R5", "R6", "R7", "R9", "R10", "R13", "R14", "R15", "R18", "R21", "R22", "R23", "R24", "R25", "R30", "R31", "R32", "R34", "R35", "R37", "R39"]}
          ]
        },
        {
          "attach_to": "R0+R3+R5+R6+R7+R9+R10+R13+R14+R15+R17+R18+R19+R21+R22+R23+R24+R25+R26+R28+R29+R30+R31+R32+R34+R35+R37+R38+R39",
          "name": "LHCb Upgrade II inclusive prompt+displaced A'->mumu",
          "observable": "A'->mumu signal with eps >= 3e-5 ?",
          "reasoning": "The published LHCb inclusive dark-photon projection reaches eps^2 ~ 1e-9 - 1e-10 below ~10 GeV at 300 fb^-1 and names 10-40 GeV as prime territory, i.e. eps ~ 3e-5. Predicted seen (gm eps): R5 5.7e-4, R13 6.6e-4, R32 6.5e-4, R14 2.1e-4, R26 2.2e-4, R28 1.5e-4, R29 1.0e-4, R25 0.95e-4, R37 0.9e-4, marginally R6 5.1e-5, R23 4.6e-5, R30 3.9e-5. Not seen: floor regions at eps <= ~1e-5 (R18 gm 2.8e-5 is the marginal 'no'). Reach degrades above MZp ~ 15 GeV, relevant only to already-'no' R19 (27 GeV). Residual degeneracy after this node - the eps<=1e-5, MDM=69.67 GeV set differing only in quartics alpha2-alpha6 - is physically unresolvable: quartics feed only DM self-scattering at sigma/m ~ 1e-9 cm^2/g, nine orders below cluster sensitivity; no honest experiment is proposed for them.",
          "feasibility": "LHCb Upgrade II (approved framework TDR, 300 fb^-1); required eps^2 floor is ~2x beyond the current published limit at low mass and is the projection itself, not beyond it; factor ~10 needed at 10-20 GeV is within the published 300 fb^-1 projection. Dominant systematic: prompt combinatorial dimuon background near resonance vetoes.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R5", "R6", "R13", "R14", "R23", "R25", "R26", "R28", "R29", "R30", "R32", "R37"]},
            {"label": "not seen", "regions": ["R0", "R3", "R7", "R9", "R10", "R15", "R17", "R18", "R19", "R21", "R22", "R24", "R31", "R34", "R35", "R38", "R39"]}
          ]
        }
      ]
    }
  ]
}
```