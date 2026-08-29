I'll verify the arXiv references I plan to cite before composing the single-message answer.
All three references verified (BaBar visible dark-photon search 1406.2980, BaBar invisible/mono-photon search 1702.03327, LHCb A′→μ⁺μ⁻ 1910.06926). Here is the complete degeneracy-breaking analysis.

# Reasoning

## Leaf `root_no_yes_no_yes_no_no_no_no_no` (190 pts, 6 units)

**What the catalog already told us, and what it missed.** Every unit in this leaf has BR(h→inv) locked into 0.0032–0.01 (so m_DM < m_h/2 — the MDM/MZp numbers are GeV-scale: DM at 1–3.8 GeV, dark photon Z′ at 1–4.7 GeV), and every direct-detection, indirect-detection, and collider observable in the catalog is null. Crucially, the catalog's only Z′ probe is the *high-mass prompt LHC dilepton* recast, which has no acceptance for a 1–5 GeV dark photon. The six units span **five decades in kinetic mixing** (ε from 10⁻⁶ to 0.1) — exactly the axis that the enormous, mature *low-mass dark-photon program* (B-factories, LHCb low-mass dimuon) measures directly and that our catalog never touches. That is the obvious lit-review lever.

**Per-unit dark-photon phenomenology** (Γ(A′→ℓℓ) = αε²m/3, invisible channel open only when M_Z′ > 2M_DM):

- **R0** (U1p[−]: M_DM = M_Z′ = 1 GeV, ε ≈ (1–3.4)×10⁻⁶): invisible closed (2M_DM > M_Z′); visible A′ with ε ~300× below the BaBar limit. cτ ≈ 8 mm — too short-lived for beam dumps/SHiP (decays ~0.2 m from a 400 GeV target, 45 m before the decay volume), too faint for prompt searches (rate ∝ ε², ~10⁻⁵ of the ε = 10⁻³ yield even at 50 ab⁻¹). This is the classic unreachable wedge.
- **R1** (U1p[+]: M_DM = 2.17, M_Z′ ≈ 1.03–1.08 GeV, ε ≈ (2.3–3.0)×10⁻³): invisible closed; a *visible* dark photon at ~1.05 GeV with ε **3–4× above** the BaBar visible limit (~8×10⁻⁴ near 1 GeV). Caveat (honest marginality): the low edge of the M_Z′ window sits ~15–30 MeV above the φ(1020) resonance veto; Belle II's finer binning and independent hadronic systematics close that gap. Corroboration: with χχ*→Z′Z′ open (s-wave, secluded), a thermal σv at 2.2 GeV overshoots the Planck p_ann bound by ~5–10× — another non-catalog measurement that flags R1.
- **R2** (U1p[−]: M_DM = M_Z′ = 1 GeV, ε ≈ 1.4×10⁻⁴): visible, prompt (cτ ~ 0.04 mm), but ~6× *below* the BaBar limit and just below current LHCb prompt reach — invisible to today's searches, reachable by planned ones.
- **R3** (U1p[−]: M_DM ≈ 1.9–2.25, M_Z′ ≈ 3.1–4.2 GeV, ε ≈ 0.025–0.081): ε is **25–80× above** the B-factory limits whichever way A′ decays (some points have M_Z′ ≷ 2M_DM, so both the visible dimuon and mono-photon channels are engaged). The low-mass edge touches the J/ψ veto, irrelevant at these enormous ε. Corroboration: ε ≳ 0.03 is independently excluded by LEP/SLC electroweak-precision fits.
- **R4** (U1p[+]: M_DM = 3.755, M_Z′ = 3.824 GeV, ε ≈ 2.5×10⁻⁶): invisible closed (2M_DM ≫ M_Z′); like R0, sits in the ε ~ 10⁻⁶, multi-GeV wedge (cτ ≈ 1.5 mm) that no existing or funded dark-photon experiment can reach.
- **R5** (U1p[+]: M_DM = 1, M_Z′ = 4.73 GeV, ε = 0.1, g′ = 0.30): invisible **open** and dominant (Γ_inv/Γ_vis ≈ (g′/εe)² ~ 10²); the BaBar mono-photon search excludes ε ≳ 1.5×10⁻³ at this mass, so R5 is ~70× above the limit (and its residual ~1% visible width alone is above the visible limit; ε = 0.1 also violates EW-precision fits).

**Level-1 split (lit review): B-factory γ + A′ search, visible + invisible, ε sensitivity ~10⁻³ over 1–5 GeV.** This is a real, published pair of measurements (BaBar 1406.2980 visible; 1702.03327 mono-photon; LHCb 1910.06926 covers the prompt dimuon part) that our catalog does not contain. Prediction: **seen** for R1 (3–4× over limit — the marginal one; flagged), R3 (25–80×), R5 (~70×); **not seen** for R0 (300× below), R2 (6× below), R4 (400× below). This splits the leaf 3–3, and note it also does Lagrangian-level work within the "seen" branch: it isolates the only U1p[−] unit (R3) from the two U1p[+] units by the follow-up mass measurement below. (The [+] vs [−] dark-charge *sign* itself is essentially unobservable — all rates go as (εg′q)² — except through Higgs-portal/Z′-exchange interference in σ_SI, which is hopeless at these ε; we separate regions, not charge signs.)

**Level-2, "seen" branch (R1+R3+R5): A′ mass spectroscopy.** Once the resonance exists, its mass is measured for free by the same machines: dimuon mass resolution at Belle II/LHCb is 5–10 MeV; for the invisible mode, the recoil mass against the mono-photon is reconstructed to a few tens of MeV. Predictions are cleanly separated: R1 → 1.03–1.08 GeV, R3 → 3.1–4.2 GeV, R5 → 4.73 GeV; the 0.5 GeV gap between R3's upper edge and R5 is ≳10σ of the recoil-mass resolution. One three-bin measurement (< 3 GeV / 3–4.5 GeV / > 4.5 GeV) fully separates the branch. Improvement factor over existing hardware: 1× → rated possible. (An equivalent cross-check: R5 shows up *only* in mono-photon — BR_inv ≈ 0.99 — while R1 is purely visible.)

**Level-2, "not seen" branch (R0+R2+R4), step 1: planned prompt-dimuon reach.** LHCb Upgrade II (300 fb⁻¹) and full-luminosity Belle II project prompt A′→μμ sensitivity down to ε ≈ (3–5)×10⁻⁵ across 1–5 GeV. R2 (ε = 1.4×10⁻⁴, prompt) is ~3–4× above that projected reach → **seen**; R0 and R4 (ε ≈ 2×10⁻⁶) are ~50× below → **not seen**. Dominant systematic, honestly stated: R2's M_Z′ (1.000–1.001 GeV) sits ~19 MeV below the φ(1020), at the shoulder of LHCb's resonance veto (σ_m ≈ 7 MeV); Belle II, with different backgrounds and binning, covers the same window, so the split survives but the LHCb-only margin is tighter than the raw 3–4×. Funded/planned instruments, improvement factor ≲3× over current published reach → possible.

**Level-2, "not seen" branch, step 2 (R0 vs R4) — the genuinely hard pair.** Both have ε ≈ 2×10⁻⁶ at 1–4 GeV: too short-lived (cτ ≈ 1.5–8 mm) for SHiP or any beam dump, ~10⁻³ in amplitude below any projected prompt or displaced collider search, invisible channel closed so LDMX-type missing-momentum experiments don't apply, self-interactions negligible, and both are CMB-safe (Z′Z′ closed for R4, threshold-forbidden for R0; s-channel Z′→ff̄ annihilation of scalar DM is p-wave). What *differs* is the DM mass itself: 1.0 vs 3.76 GeV, at nearly identical Higgs-portal couplings (α1 ≈ 1.3×10⁻³ vs 1.5×10⁻³, giving σ_SI ~ 10⁻⁴⁴ cm² for both, below every catalog experiment). The novel proposal: a **low-threshold Si/Ge nuclear-recoil spectrum measurement at σ_SI ~ 10⁻⁴⁴ cm² sensitivity for 1–4 GeV DM**, using the recoil endpoint E_max = 2μ²v_esc²/m_N as the mass discriminator: on Si, R0 (μ ≈ 0.96 GeV) predicts an endpoint ≈ 0.5 keV, R4 (μ ≈ 3.3 GeV) ≈ 5 keV — a factor ~11, so a simple "any recoils above 2 keV?" cut separates them. Feasibility: closest instruments are SuperCDMS SNOLAB Ge/Si-HV (projected ~10⁻⁴³–4×10⁻⁴⁴ cm² at 1–4 GeV) and Oscura-class skipper-CCD arrays; reaching 10⁻⁴⁴ cm² *with keV-scale spectral resolution retained* needs a ~3–10× exposure/background improvement beyond funded projections. The dominant systematic is irreducible: the solar ⁸B CEνNS "fog" sits at exactly these recoil energies and mimics a ~3 GeV WIMP on Si/Ge, so the >2 keV bin must be discriminated against a known ⁸B spectrum — this is why the rating is unlikely rather than possible.

Every unit ends in its own bin: R1 / R3 / R5 via lit split + mass spectroscopy; R2 via LHCb-U2/Belle II prompt dimuon; R0 vs R4 via the low-threshold recoil endpoint.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_yes_no_no_no_no_no",
      "lit_review": {
        "name": "B-factory dark-photon search (visible + mono-photon)",
        "observable": "e+e- -> gamma A' signal, 1-5 GeV, eps >~ 1e-3 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1702.03327", "arXiv:1910.06926"],
        "reasoning": "The catalog's only Z' probe is the high-mass LHC dilepton recast, blind to 1-5 GeV dark photons; the units span eps = 1e-6 to 0.1, straddling the published BaBar visible (eps ~ 8e-4 near 1 GeV) and mono-photon invisible (eps ~ 1.5e-3 at 4.7 GeV) limits, with LHCb prompt dimuon covering the same plane. R1 (eps 2.3-3.0e-3, M_Z' ~ 1.05 GeV, visible since 2M_DM > M_Z') is 3-4x above limit (marginal: low edge near the phi(1020) veto; Belle II closes it); R3 (eps 0.025-0.081 at 3.1-4.2 GeV) is 25-80x above in visible and/or mono-photon depending on whether M_Z' > 2M_DM, and eps > 0.03 is independently excluded by EW-precision fits; R5 (eps = 0.1 at 4.73 GeV, BR_inv ~ 0.99 since g'/(eps*e) ~ 10) is ~70x above the mono-photon limit. R0 (eps ~ 2e-6), R2 (eps ~ 1.4e-4, 6x below), R4 (eps ~ 2.5e-6) are all below both searches. Planck CMB p_ann corroborates flagging R1 (open s-wave secluded Z'Z' annihilation at 2.2 GeV overshoots the bound ~5-10x).",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1", "R3", "R5"]},
          {"label": "not seen", "regions": ["R0", "R2", "R4"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R3+R5",
          "name": "A' mass spectroscopy at Belle II / LHCb",
          "observable": "m(A') < 3 GeV, 3-4.5 GeV, or > 4.5 GeV ?",
          "reasoning": "Once the resonance is seen, its mass separates the three units cleanly: R1 predicts 1.03-1.08 GeV (visible dimuon), R3 predicts 3.1-4.2 GeV, R5 predicts 4.73 GeV (mono-photon recoil mass only, BR_inv ~ 0.99). The 0.5 GeV gap between R3's upper edge and R5 is >10 sigma of the recoil-mass resolution; dimuon resolution is 5-10 MeV. As a cross-check, R5 appears exclusively in the invisible channel while R1 is exclusively visible.",
          "feasibility": "Same instruments as the discovery search (Belle II, LHCb): dimuon mass resolution 5-10 MeV, mono-photon recoil-mass resolution tens of MeV; improvement factor ~1x. Dominant systematic: photon energy scale in the recoil reconstruction, far smaller than the 0.5 GeV R3/R5 gap.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "below 3", "regions": ["R1"]},
            {"label": "3 to 4.5", "regions": ["R3"]},
            {"label": "above 4.5", "regions": ["R5"]}
          ]
        },
        {
          "attach_to": "R0+R2+R4",
          "name": "LHCb Upgrade II / full-lumi Belle II prompt dimuon",
          "observable": "prompt mumu resonance 0.95-1.1 GeV, eps >= 5e-5 ?",
          "reasoning": "LHCb Upgrade II (300 fb^-1) and Belle II at 50 ab^-1 project prompt A'->mumu reach to eps ~ (3-5)e-5 over 1-5 GeV. R2 (eps = 1.4e-4, ctau ~ 0.04 mm, fully prompt) is 3-4x above that reach; R0 and R4 (eps ~ 2e-6) are ~50x below and stay invisible. Marginality: R2's M_Z' (1.000-1.001 GeV) lies ~19 MeV below the phi(1020), at the shoulder of LHCb's resonance veto (sigma_m ~ 7 MeV); Belle II's independent systematics cover the same window, preserving the split with a reduced margin.",
          "feasibility": "Closest instruments: LHCb (current published reach eps ~ 2e-4 at 1 GeV) and Belle II; required improvement ~3x, within funded upgrade projections. Dominant systematic: hadronic resonance (phi) veto shape near 1.02 GeV.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R2"]},
            {"label": "not seen", "regions": ["R0", "R4"]}
          ]
        },
        {
          "attach_to": "R0+R4",
          "name": "Low-threshold Si/Ge recoil-spectrum endpoint",
          "observable": "nuclear recoils at E_R >= 2 keV, sigma_SI ~ 1e-44 cm2 ?",
          "reasoning": "R0 and R4 are mutually unreachable through the dark-photon portal (eps ~ 2e-6 at 1-4 GeV: ctau 1.5-8 mm is too prompt for beam dumps, rate is ~1e-3 in amplitude below projected collider searches, invisible channel closed) but differ in DM mass: 1.0 vs 3.76 GeV at nearly equal Higgs-portal couplings (alpha1 ~ 1.3e-3 vs 1.5e-3, sigma_SI ~ 1e-44 cm2 for both). The recoil endpoint E_max = 2 mu^2 v_esc^2 / m_N on Si is ~0.5 keV for R0 (mu = 0.96 GeV) vs ~5 keV for R4 (mu = 3.3 GeV) - a factor ~11 - so any recoil population above 2 keV selects R4.",
          "feasibility": "Closest instruments: SuperCDMS SNOLAB Ge/Si-HV (projected 1e-43 to 4e-44 cm2 at 1-4 GeV) and Oscura-class skipper-CCD arrays; reaching 1e-44 cm2 with keV spectral resolution needs ~3-10x beyond funded projections. Dominant systematic: solar 8B CEvNS fog, which mimics a ~3 GeV WIMP on Si/Ge in exactly the >2 keV signal bin and must be subtracted spectrally.",
          "feasibility_rating": "unlikely",
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