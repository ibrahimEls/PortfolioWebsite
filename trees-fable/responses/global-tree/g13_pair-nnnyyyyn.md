I'll verify the arXiv references I plan to cite before delivering the single-message answer.
All three references verified (Planck 2018 VI — its §7.4 reports the annihilation constraint even though the abstract doesn't name it; Slatyer's f_eff paper; Boudaud–Lavalle–Salati Voyager 1). Here is the full answer.

## Reasoning

### Leaf `root_no_no_no_yes_yes_yes_yes_no_no` (112 pts; targets R0, R1)

Both units belong to the same Lagrangian (complex scalar singlet DM charged under a dark U(1)′, Z2+3+4+5 pool), and the catalog path pins them identically: invisible under XLZD/CTA/IceCube-Gen2, BR(h→inv) in 0.032–0.1, not 100× above SuperCDMS. The parameter cards, however, differ in one decisive kinematic fact:

- **R0**: MDM = 1.0 GeV, MZ′ = 1.0 GeV — the dark matter is exactly *at threshold* for annihilation into dark-photon pairs. The s-wave cross-section for χχ̄ → Z′Z′ carries the phase-space factor β = √(1 − M²_Z′/M²_DM) = 0, so the secluded channel is closed at the tiny relative velocities (v ~ 10⁻⁸c) of the recombination era and the Galactic halo. The only surviving annihilation is through the Higgs portal (α₁ ≈ 4.5×10⁻³): the amplitude is Yukawa-suppressed by (m_f/v_EW) and by 1/m_h⁴, giving σv ~ α₁² m_f²/(8π m_h⁴) ~ 10⁻³²–10⁻³³ cm³/s — utterly invisible to any energy-injection probe.

- **R1**: MDM = 2.225 GeV, MZ′ = 1.0 GeV — the secluded channel χχ̄ → Z′Z′ is wide open (β ≈ 0.89) and is s-wave for a gauged complex scalar. With g′ = 0.0316 (α′ = g′²/4π ≈ 8×10⁻⁵), σv ≈ πα′²β/M²_DM ≈ 4×10⁻²⁶ cm³/s — essentially the thermal-relic value, which is presumably exactly why this point freezes out correctly (secluded freeze-out). Each Z′ (1 GeV, ε = 0.1) decays promptly and *visibly* into e⁺e⁻/μ⁺μ⁻/pions (Z′→χχ is kinematically closed in both regions since MDM > MZ′/2), so all 4.45 GeV of annihilation energy ends up in electromagnetically-interacting particles.

**Level-1 split — Planck CMB energy injection.** The CMB is the one catalog-orthogonal probe that is maximally sensitive to exactly this: s-wave annihilation into e/μ/π at recombination smears the surface of last scattering and modifies the temperature/polarization spectra. Planck 2018 reports p_ann = f_eff⟨σv⟩/M_DM < 3.5×10⁻²⁸ cm³ s⁻¹ GeV⁻¹ (95% CL). Using Slatyer's f_eff tables, a 2.2 GeV WIMP annihilating through 1 GeV dark photons into an e/μ/π mix has f_eff ≈ 0.25–0.35. Then:

- R1: p_ann ≈ 0.3 × 4×10⁻²⁶ / 2.225 ≈ 5×10⁻²⁷ cm³ s⁻¹ GeV⁻¹ — **~15× above the Planck bound**. The injection signal is (or would be) seen; indeed R1 is in serious tension with published Planck data already.
- R0: p_ann ≈ 0.3 × 10⁻³² / 1.0 ≈ 3×10⁻³³ — **five orders of magnitude below** the bound. Nothing seen, ever, including by CMB-S4.

The split is robust to O(1) uncertainties in the annihilation prefactor and f_eff because the two predictions are separated by ~6 orders of magnitude. Honest caveats: (i) if χ is only a subdominant fraction f of the dark matter, the signal scales as f², so a ~4× underabundance would push R1 to the margin — but the scan's relic conditioning keeps points near the observed abundance; (ii) R0 sits *exactly* at the Z′Z′ threshold, and forbidden-channel annihilation at finite temperature could matter during freeze-out, but not at recombination where v is negligible. As an independent cross-check in the same outcome direction, Voyager 1's interstellar e± flux constrains ⟨σv⟩ into leptons at the 10⁻²⁸–10⁻²⁶ cm³/s level for GeV masses — R1's 4×10⁻²⁶ into Z′Z′→e⁺e⁻/μ⁺μ⁻ is again visible, R0's is not.

Since the lit-review split cleanly separates the leaf's only two units, no Level-2 novel experiment is needed (novel list left empty).

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_yes_yes_yes_yes_no_no",
      "lit_review": {
        "name": "Planck CMB annihilation energy-injection bound",
        "observable": "p_ann = f_eff<sigma v>/M_DM > 3.5e-28 cm^3/s/GeV ?",
        "what_this_is": "The Planck satellite mapped the cosmic microwave background (CMB), the afterglow light released when the universe first became transparent. If dark matter particles annihilate into electrons, muons or pions at that epoch, the injected energy heats and ionizes the gas and measurably blurs the CMB temperature and polarization patterns, so Planck sets a strict ceiling on the annihilation power per unit dark-matter mass. This probe cares only about velocity-independent (s-wave) annihilation into electromagnetically visible particles, which is precisely what distinguishes these two regions: in one the dark matter is heavy enough to annihilate into pairs of dark photons that decay to electrons and pions, in the other that channel is exactly at kinematic threshold and shut off.",
        "refs": ["arXiv:1807.06209", "arXiv:1506.03811", "arXiv:1612.07698"],
        "reasoning": "R1 (MDM=2.225 GeV > MZp=1 GeV) has the open s-wave secluded channel chi chibar -> Z'Z' with sigma-v ~ pi*alpha'^2*beta/MDM^2 ~ 4e-26 cm^3/s for g'=0.0316 (alpha'=8e-5, beta=0.89) — the thermal value, consistent with secluded freeze-out. Both Z' (1 GeV, eps=0.1) decay promptly to e+e-/mu+mu-/pions (Z'->chi chi closed since MDM>MZp/2), giving f_eff~0.3, hence p_ann ~ 0.3*4e-26/2.225 ~ 5e-27 cm^3/s/GeV — about 15x ABOVE the Planck 2018 95% bound of 3.5e-28: injection seen (R1 already in tension with published Planck data). R0 (MDM=MZp=1 GeV exactly) sits at the Z'Z' threshold: beta=0, channel closed at recombination velocities, leaving only Yukawa- and 1/m_h^4-suppressed Higgs-portal annihilation with sigma-v ~ 1e-32 cm^3/s, i.e. p_ann ~ 3e-33 — five orders below the bound. The 6-order gap makes the split robust to O(1) prefactor and f_eff uncertainties; the marginal case is only if chi is ~4x underabundant (signal scales as the squared abundance fraction). Voyager 1 interstellar e+- fluxes (limits 1e-28..1e-26 cm^3/s at GeV masses) give an independent confirmation in the same direction.",
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