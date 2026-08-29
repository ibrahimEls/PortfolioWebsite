## Reasoning — Leaf `root_no_yes_no_yes_no_no_no_no` (192 pts, 7 units)

**What this leaf is physically.** Every unit here shows *only* an invisible-Higgs signal (BR(h→inv) ≈ 0.0032–0.01) with nulls at IceCube-Gen2, CTA (WW and bb), Fermi-10x, and DarkSide. Six of the seven units (R0–R5) are GeV-scale complex-scalar DM with a GeV-scale kinetically-mixed dark U(1)′ boson Z′; R6 is a 92 GeV real-scalar Higgs portal with no dark sector beyond the DM itself. One honest structural note first: `CsSg_U1p[+]` and `CsSg_U1p[-]` differ only in the sign of the singlet's dark charge, which is removable by the field redefinition S→S\*; no experiment can distinguish those two *labels*. What is separable is the seven parameter-space *regions*, and my ladder below separates all seven.

**The key handle our catalog never touches: the light Z′ itself.** The catalog's Z′ observable is the HL-LHC high-mass dilepton recast, blind to mZ′ = 1–5 GeV. But the regions span **five decades in kinetic mixing ε** at mZ′ = 1.0–4.7 GeV — exactly the plane mapped by low-energy dark-photon searches, none of which are in the catalog.

**Level 1 (lit review): the e⁺e⁻ → γA′ dark-photon search (BaBar published, Belle II formally projected), sensitive to ε ≳ 1×10⁻³ for mA′ = 1–5 GeV in both visible (A′→ℓ⁺ℓ⁻, arXiv:1406.2980) and invisible (monophoton, arXiv:1702.03327) modes.** Predicted signal strength per region (rate ∝ ε²; limits quoted against the ~1×10⁻³ BaBar-level ceiling that Belle II confirms and extends, arXiv:1808.10567):

- **R1** (ε = 2.3–3.0×10⁻³, mZ′ = 1.03–1.08 GeV): Z′→χχ is closed (2M_DM = 4.34 GeV > mZ′), so the decay is fully visible; the predicted dimuon peak sits a factor 5–9 in rate above the BaBar exclusion. Caveat: 1.03–1.08 GeV abuts the φ(1020), where the μμ limit weakens; Belle II statistics settle it either way. → **seen**.
- **R3** (ε = 0.025–0.081, mZ′ = 3.1–4.2 GeV): depending on the point, Z′→χχ may be open (2M_DM = 3.78–4.51 GeV brackets mZ′); if open the monophoton mode fires, if closed the dilepton mode does — either way the rate is 10²·⁵–10⁴ above the corresponding limit. → **seen**.
- **R5** (ε = 0.1, mZ′ = 4.73 GeV, g′ = 0.30): Z′→χχ is wide open (2M_DM = 2 GeV) and dominates (g′² ≫ ε²e²), so this is a monophoton signal with ε² four orders of magnitude above the BaBar invisible limit; even the residual ~10⁻³ visible fraction is separately detectable. → **seen**, spectacularly.
- **R2** (ε = 1.3–1.5×10⁻⁴): rate is ~50× below the BaBar ceiling and at/below Belle II's ultimate visible reach (few ×10⁻⁴). → **not seen** (marginal: if Belle II's final prompt reach touches 1.5×10⁻⁴, R2 migrates to "seen" — flagged honestly).
- **R0, R4** (ε = 1–3.4×10⁻⁶): rates 10⁵–10⁶ below reach. → **not seen**.
- **R6**: no Z′ exists. → **not seen**.

This splits {R1, R3, R5} from {R0, R2, R4, R6} — and it separates the RsSg *Lagrangian* from three of the six U(1)′ units in one shot. Status: **Splits!**

**Novel ladder, "seen" branch {R1, R3, R5}.** The same Belle II measurement returns the resonance mass (σ_m ≈ 5 MeV in μμ; ~tens of MeV from photon-recoil in the invisible mode), so two read-out nodes finish the job with no new hardware: m(A′) ≥ 2.5 GeV separates R3+R5 (3.1–4.7 GeV) from R1 (1.03–1.08 GeV); then m(A′) ≥ 4.4 GeV separates R5 (4.726 GeV, and invisible-dominated) from R3 (≤ 4.18 GeV, gap of ~0.5 GeV ≫ resolution). Both "possible".

**Novel ladder, "not seen" branch {R0, R2, R4, R6}.**
- **LHCb Upgrade II prompt A′→μμ at ~1 GeV.** R2's Z′ decays promptly (cτ ~ μm) with ε² = 1.6–2.3×10⁻⁸; the published LHCb inclusive-dimuon projections for Run 3 → Upgrade II reach ε² ≈ 10⁻⁸–10⁻⁹ in this window, i.e. R2 sits a factor ~2 above the projected floor (marginal — 1.0 GeV lies just below the φ, needing the ~5 MeV mass resolution and careful φ-tail modeling). R0 and R4 predict ε² ≈ 4×10⁻¹², four orders below reach; R6 predicts nothing. Splits **R2** from {R0, R4, R6}. Rated "possible" (existing detector + approved upgrade; improvement factor ≲ 2).
- **Why R0/R4 are invisible to *all* dark-photon programs, and how to catch them anyway.** At ε ≈ 2×10⁻⁶, mZ′ = 1 GeV, cτ(Z′) ≈ 5–10 mm: too prompt for beam dumps (at SHiP/FASER boosts the decay length is 0.1–10 m versus 50–480 m baselines) and too rare for prompt collider searches (rate ∝ ε²). This is the classic inaccessible wedge — it is *why* these points survived. But both regions have a second face: a Higgs-portal α1 ≈ 1.2–1.6×10⁻³ that the invisible-Higgs signal already confirms, giving tree-level nucleon cross sections σ_SI ≈ 3–6×10⁻⁴⁵ cm² at M_DM = 1 GeV (R0) and ≈ 9×10⁻⁴⁶ cm² at 3.76 GeV (R4). R6's 92 GeV scalar (α1 ≈ 2.2×10⁻³) predicts σ_SI ~ 10⁻⁴⁸ cm², invisible to any kg-scale device. So a **sub-keV-threshold cryogenic nuclear-recoil search reaching σ_SI ~ 10⁻⁴⁶ cm² over 1–5 GeV** fires for R0 and R4 but not R6. Closest hardware: SuperCDMS SNOLAB (~10⁻⁴³–10⁻⁴⁴ here) and DarkSide-LowMass (projected ~10⁻⁴⁵ at 3–5 GeV): R4 is within ~3× of the latter, R0 needs ~10× plus discrimination against the ⁸B/⁷Be CEνNS fog, which is the dominant systematic (annual modulation or directionality required at 1 GeV) — rated "unlikely" overall.
- **R0 vs R4: recoil kinematics in the same detector.** Given a signal, the endpoint separates the masses decisively: on Ge, E_max = 2μ²v_max²/m_N ≈ **0.19 keV for M_DM = 1 GeV (R0)** versus **≈ 2.5 keV for 3.76 GeV (R4)** — a factor 13, trivial for eV-resolution phonon detectors. Cut: Ge endpoint ≥ 1 keV. Rated "possible" (conditional on the previous node's detection, same apparatus).

Every one of the seven units ends in its own bin. The two genuinely marginal calls (R2 at both Belle II and LHCb; R0's fog problem) are flagged in the reasoning fields.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_yes_no_no_no_no",
      "lit_review": {
        "name": "BaBar/Belle II dark-photon search, visible + invisible modes",
        "observable": "e+e- -> gamma A' signal, mA' 1-5 GeV, epsilon >~ 1e-3 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1702.03327", "arXiv:1808.10567"],
        "reasoning": "Six of seven units contain a 1-4.7 GeV kinetically-mixed Z' spanning five decades in epsilon; the catalog's only Z' probe is the high-mass HL-LHC dilepton recast, blind below ~10 GeV. Signal rate scales as epsilon^2 against the ~1e-3 BaBar ceiling. R1 (eps 2.3-3.0e-3, mZ' ~1.05 GeV, chi-chi closed so fully visible): 5-9x above the dimuon limit (phi(1020) proximity is the one caveat). R3 (eps 0.025-0.081, 3.1-4.2 GeV): 10^2.5-10^4 above limit in whichever of visible/monophoton mode is open. R5 (eps 0.1, 4.73 GeV, g'=0.30, invisible-dominated): 1e4 above the monophoton limit. R2 (eps 1.3-1.5e-4): ~50x below the ceiling and at/below Belle II ultimate reach - not seen, marginal. R0/R4 (eps ~2e-6): 1e5-1e6 below reach. R6: no Z' exists. Bonus: this split isolates the RsSg Lagrangian on the null side against three U1p regions at once. Note: U1p[+] vs U1p[-] labels are related by S -> S* and are physically identical; only regions are separable.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1", "R3", "R5"]},
          {"label": "not seen", "regions": ["R0", "R2", "R4", "R6"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R3+R5",
          "name": "Belle II A' resonance mass read-out",
          "observable": "m(A') >= 2.5 GeV ?",
          "reasoning": "Same Belle II dataset as the level-1 detection: the peak position separates R1 (mZ' = 1.03-1.08 GeV) from R3 (3.10-4.18 GeV) and R5 (4.726 GeV). Mass resolution is ~5 MeV in the dimuon mode and tens of MeV in photon-recoil, versus a >2 GeV gap between the groups.",
          "feasibility": "Belle II itself; dimuon mass resolution ~5 MeV, monophoton recoil-mass resolution ~10s of MeV; improvement factor 1x; dominant systematic is the phi(1020) tail for the R1 window, irrelevant to the 2.5 GeV cut.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R3", "R5"]},
            {"label": "no", "regions": ["R1"]}
          ]
        },
        {
          "attach_to": "R3+R5",
          "name": "Belle II A' mass, fine cut",
          "observable": "m(A') >= 4.4 GeV ?",
          "reasoning": "R5 predicts a single peak at 4.726 GeV (invisible-dominated: g' = 0.30 with Z'->DM DM open, BR_inv ~ 99%); R3 predicts 3.10-4.18 GeV. The 0.5 GeV gap is far above resolution. The decay mode corroborates: R5 is monophoton-only, while most R3 points (Z'->chi chi closed) show visible dileptons.",
          "feasibility": "Belle II; recoil-mass resolution 10s of MeV at 4.5 GeV, improvement factor 1x; dominant systematic is the monophoton recoil-mass tail calibration.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R5"]},
            {"label": "no", "regions": ["R3"]}
          ]
        },
        {
          "attach_to": "R0+R2+R4+R6",
          "name": "LHCb Upgrade II prompt A' -> mumu scan",
          "observable": "prompt mumu peak near 1.0 GeV, epsilon >= 1e-4 ?",
          "reasoning": "R2's Z' (mZ' = 1.000-1.001 GeV, eps = 1.28-1.51e-4, cτ ~ 1 μm, chi-chi closed) gives eps^2 = 1.6-2.3e-8, a factor ~2 above the published LHCb inclusive-dimuon projection of eps^2 ~ 1e-8 in this window - a marginal but real detection. R0 and R4 give eps^2 ~ 4e-12, four orders below reach; R6 has no Z'. The 1.0 GeV peak sits just below the phi(1020); LHCb's ~5 MeV dimuon resolution separates them.",
          "feasibility": "LHCb Run 3 / Upgrade II (300 fb^-1), an approved detector; current Run 2 limits at 1 GeV are within ~5-10x of the required eps^2, covered by luminosity scaling; dominant systematic is phi(1020) tail and Drell-Yan continuum modeling.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R2"]},
            {"label": "not seen", "regions": ["R0", "R4", "R6"]}
          ]
        },
        {
          "attach_to": "R0+R4+R6",
          "name": "Sub-keV-threshold kg-yr cryogenic recoil search",
          "observable": "nuclear-recoil signal with sigma_SI >= 1e-46 cm^2, mDM 1-5 GeV ?",
          "reasoning": "R0/R4's Z' (eps ~ 2e-6, cτ ~ mm) sits in the classic dark-photon wedge - too prompt for dumps, too rare for colliders - so the discriminating face is their Higgs portal, already confirmed by the observed BR(h->inv): alpha1 ~ 1.2-1.6e-3 gives sigma_SI ~ 3-6e-45 cm^2 at 1 GeV (R0) and ~9e-46 cm^2 at 3.76 GeV (R4), both above a 1e-46 reach. R6 (92 GeV, alpha1 ~ 2.2e-3) predicts sigma_SI ~ 1e-48 cm^2 and, at kg-scale exposure, zero events in any case. Marginality: R0's prediction sits near the 8B/7Be CEvNS fog at 1 GeV, requiring modulation or directional discrimination.",
          "feasibility": "Closest: SuperCDMS SNOLAB HVeV (~1e-43-1e-44 here) and DarkSide-LowMass (projected ~1e-45 at 3-5 GeV). R4 needs ~3x beyond DarkSide-LM; R0 needs ~10x plus solar-neutrino CEvNS discrimination, the dominant systematic alongside the instrumental low-energy excess.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R4"]},
            {"label": "not seen", "regions": ["R6"]}
          ]
        },
        {
          "attach_to": "R0+R4",
          "name": "Recoil-spectrum endpoint, same detector",
          "observable": "Ge recoil endpoint >= 1 keV ?",
          "reasoning": "Given the detection in the previous node, kinematics fixes the DM mass: E_max = 2 mu^2 v_max^2 / m_N on Ge is ~0.19 keV for R0 (mDM = 1 GeV) versus ~2.5 keV for R4 (mDM = 3.76 GeV), a factor 13 separation far above eV-scale phonon resolution.",
          "feasibility": "Same cryogenic apparatus as the parent node; SuperCDMS-class eV phonon resolution already suffices (improvement factor 1x); dominant systematic is the low-energy-excess background shape near threshold, which affects the 0.19 keV endpoint far more than the 2.5 keV one.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R4"]},
            {"label": "no", "regions": ["R0"]}
          ]
        }
      ]
    }
  ]
}
```