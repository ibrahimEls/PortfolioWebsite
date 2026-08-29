## Reasoning — leaf `root_yes_no_yes_yes_yes_yes_no` (426 pts, 6 units)

*(Note on references: the prompt's output instruction forbids tool use in this reply, so I could not run WebSearch/WebFetch verification. I have therefore cited only three arXiv IDs I hold with high confidence — Cuoco/Krämer/Korsmeier PRL 118, 191102; Cui/Yuan/Tsai/Fan PRL 118, 191101; Pospelov/Ritz/Voloshin PLB 662, 53 — and no others.)*

### What actually differs between the six units

All six sit in the same direct-detection box (σ_SI within 1–10× XLZD, seen at LZ and DarkSide, BR(h→inv) 0.0032–0.01), and five of them are the *same* Lagrangian (`CsSg_U1p[+]_DM.Z2+3+4+5`); only R5 is a different Lagrangian (real singlet, no dark sector). The Higgs-portal couplings are nearly identical across all six (α1 = 0.0021–0.0026), which is exactly why the catalog cannot separate them — every catalog observable except the ID ones is a monotone function of α1 and m_DM, and m_DM only spans 68 → 95 GeV.

The **dark sector**, which the catalog never probes (ε enters only the dilepton recast, and every ε here except R1's is ≤ 1e-4), is where the units are wildly different. Two derived quantities do the work:

**(1) Present-day annihilation into dark photons.** For a complex scalar with dark charge 1, χχ\* → Z′Z′ is s-wave with σv ≈ π α_D²/m_χ² × phase space, α_D = g_U1p²/4π:

| unit | m_DM | m_Z′ | g_U1p | α_D | Z′Z′ open? | σv(Z′Z′) today |
|---|---|---|---|---|---|---|
| R0 | 67.5–69.8 | 20.4–34.5 | 0.1483 | 1.74e-3 | **yes** (2m_Z′ ≤ 69 < 2m_χ) | **≈ 2e-26 cm³/s** |
| R1 | 94.2 | 1989–2831 | 0.36–0.42 | 1.0–1.4e-2 | no (m_Z′ ≫ m_χ) | ~1e-33 (ε²-suppressed s-channel) |
| R2 | 94.9 | 22.2 | 0.0118 | 1.10e-5 | yes | 5e-31 cm³/s |
| R3 | 94.5–94.8 | 10.35 | 0.00302 | 7.2e-7 | yes | 2e-33 cm³/s |
| R4 | 94.4–94.7 | 1.0 | 0.0030 | 7.2e-7 | yes | 2e-33 cm³/s |
| R5 | 91.6–92.0 | — | — | — | — | 0 |

R0 is a **secluded thermal relic** (Pospelov–Ritz–Voloshin): its α_D reproduces ⟨σv⟩ ≈ 2×10⁻²⁶ cm³/s *by itself*, unsuppressed today. The Z′ (20–34 GeV, ε=1e-6) has cτ ≈ 0.05 cm — prompt on any astrophysical scale — and decays by charge²: ≈ 55 % hadronic, ≈ 45 % into e/μ/τ pairs. So R0 injects antiprotons and hard leptons into the halo with a 4-body cascade spectrum ending at 68 GeV. Everything else is a pure Higgs-portal annihilator: with α1 ≈ 0.0021–0.0026 (versus λ_hs ≈ 0.03–0.05 needed for a thermal ~90 GeV singlet), σv today is ≈ 5e-29–1e-27 cm³/s — at least 20× below any current cosmic-ray sensitivity. (Caveat: if the scan's α1 normalization differs from λ_hs/2 by a factor of 2–4, these σv values move up by ≤16×, still ≥10× below the discriminating threshold.)

**(2) The dark photon itself.** cτ(Z′) = ħc/Γ with Γ ≈ (1/3)αε²m_Z′·N_eff: R4 → **2.7 cm at 1.0 GeV**; R3 → **1.2 mm at 10.35 GeV**; R2 → **0.1 μm (prompt) at 22.2 GeV** but with ε² = 5.8e-9, i.e. 5800× the production rate of R3/R4; R1 → a genuine 2–2.8 TeV resonance with ε e = 0.030 coupling to the EM current; R5 → nothing at all.

### Level 1 — AMS-02 antiproton flux

The catalog's indirect-detection entries are γ-rays (Fermi, CTA) and neutrinos (IceCube-Gen2), all in the WW channel. Charged cosmic-ray antiprotons are a genuinely different measurement (different target — the local halo — different backgrounds, different systematics), and for m ~ 70 GeV with a hadronic final state AMS-02 is the single most sensitive probe in existence: the published analyses reach, and in fact report a hint at, σv ≈ (1–3)×10⁻²⁶ cm³/s for m_DM ≈ 50–90 GeV.

Predicted values: **R0** gives σv ≈ 2×10⁻²⁶ cm³/s with 55 % of it into Z′→qq̄ at E_Z′ ≈ 68 GeV; halving for non-self-conjugate DM, the self-conjugate-equivalent rate is ≈ 1×10⁻²⁶ cm³/s with a p̄ spectrum peaking at T ≈ 5–15 GeV — squarely inside the AMS-02 hint/sensitivity band. **R1–R5** give ≤ 1×10⁻²⁷ cm³/s (R1: 1e-33 from the dark sector, ~1e-28 from the portal; R2: 5e-31; R3/R4: 2e-33; R5: ~5e-29), i.e. at least a factor 20 below AMS-02 reach and 5–7 orders of magnitude below R0 in the dark-sector channel.

Consistency check with the tree: Fermi dSph limits at 68 GeV for hadronic channels are ≈ 3×10⁻²⁶ cm³/s, weakened by ~2× for a 4-body cascade and another 2× for complex DM — so R0 sits *just below* the γ-ray limits, which is exactly why the catalog's Fermi/CTA nodes never fired on this path. Antiprotons are the few-× more sensitive channel at this mass and channel, which is what makes this a real split rather than a repackaging of the catalog.

Honest caveat: the p̄ interpretation is systematics-dominated — CR propagation (diffusion halo height, secondary production cross sections) and solar modulation — and the reported 60–90 GeV excess is contested. This is a discriminator at the ~2–3σ level with current data, not a clean yes/no; it strengthens with the full AMS-02 dataset and correlated-error treatment.

**Split: yes → R0; no → R1, R2, R3, R4, R5.**

### Level 2a — displaced GeV dark photon (R4 out)

R4's Z′ is 1.0 GeV with ε = 1e-6 → cτ = 2.7 cm. This is the notorious dark-photon "gap": too short-lived for beam dumps (SHiP/NA62-dump need γcτ ≳ 50 m; here γcτ ≈ 0.7 m, so they are blind above ε ≈ 1e-7), too weakly coupled for prompt searches. The right instrument is a decay volume of 0.1–3 m immediately behind a high-intensity thin target, with a dimuon/dielectron vertex detector. Predicted signature: a narrow ℓ⁺ℓ⁻ peak at 1.00 GeV with vertices at 1–100 cm; R1 (2.4 TeV), R2 (22.2 GeV), R3 (10.35 GeV), R5 (nothing) all give zero yield in this mass/lifetime window.

### Level 2b — 5–30 GeV dimuon sweep to ε = 1e-6 (R2 vs R3)

R2 and R3 both have Z′ masses in the 10–25 GeV window but differ by 76× in ε and 2× in mass. A dimuon spectrometer able to reach ε = 1e-6 across 5–30 GeV reads them off directly by peak mass: **10.4 GeV (R3, cτ = 1.2 mm, ε = 1e-6)** versus **22.2 GeV (R2, prompt, ε = 7.6e-5)**; R1 and R5 give no peak anywhere in the window. Note R3 is by far the harder of the two — its rate is 5800× below R2's — so this node's yes-branches have very unequal cost.

### Level 2c — ultra-precision m_W (R1 vs R5)

R1's Z′ (1989–2831 GeV, ε = 0.1, g_U1p ≈ 0.4) is the only unit with a *heavy* kinetically mixed vector. Z–Z′ mixing angle θ ≈ ε s_W m_Z²/m_Z′² = 1.0e-4 (m_Z′ = 1989) to 5.0e-5 (2831), giving Δρ = θ² m_Z′²/m_Z² ≈ 4.8e-6 → 2.4e-6, hence |m_W − m_W(SM)| ≈ 0.27 → 0.14 MeV and δsin²θ_eff ≈ 1.6e-6. R5 has no new vector at all: the shift is identically zero, and R2/R3/R4's Z′ are too light and too weakly mixed to matter (their Δρ ≲ 1e-16). I deliberately avoid the pp → Z′ → ℓℓ route (catalog) and the LEP-II contact-interaction route (Λ = m_Z′/εe = 66–93 TeV, versus ~15–20 TeV reachable at FCC-ee — hopeless); the Z-pole/WW-threshold ρ-parameter route is 3–5× more powerful for this operator.

### Physics flag worth recording (not used in any split)

For the U(1)′ units the Z′–DM current is off-diagonal between the two real components of the complex scalar, which are degenerate here (no dark Higgs vev — the mass is Stueckelberg), so Z′ exchange gives a **proton-only, kinematically-elastic** DD amplitude that micrOMEGAs will not report if it only builds the diagonal elastic amplitude. Taking the parameters at face value: σ_p(Z′) ≈ 4.8e-46 cm² for R1 and ≈ 3.3e-47 cm² for R2 — 10²–10³× above the Higgs-portal piece that put these points in this leaf, and isospin-violating (Xe/Ar/Ge ratios would break A²-scaling). If that channel is real, R1 and R2 do not belong in this leaf at all. I did not build a split on it because it contradicts the tree's own σ_SI inputs, but it is worth checking in the pipeline.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_yes_yes_no",
      "lit_review": {
        "name": "AMS-02 antiproton flux, DM cascade component",
        "observable": "sigma_v(hadronic) >= 1e-26 cm^3/s at m_DM ~ 70 GeV ?",
        "refs": ["arXiv:1610.03071", "arXiv:1610.03840", "arXiv:0711.4866"],
        "reasoning": "R0 is a secluded thermal relic: g_U1p=0.148 gives alpha_D=1.74e-3 and chi chi* -> Z'Z' is open (2 m_Z' <= 69 GeV < 2 m_DM = 135 GeV), so sigma_v = pi alpha_D^2/m_chi^2 ~ 2e-26 cm^3/s, s-wave and unsuppressed today (1e-26 cm^3/s self-conjugate-equivalent for complex DM). The 20-34 GeV Z' has ctau = 0.05 cm and decays by charge^2: ~55% hadronic, giving antiprotons peaking at T ~ 5-15 GeV with an endpoint at 68 GeV -- exactly the mass/rate band where AMS-02 antiprotons are most sensitive and where a (1-3)e-26 cm^3/s excess is reported. All other units are pure Higgs-portal annihilators with alpha1 = 0.0021-0.0026, i.e. 12-20x below the lambda_hs ~ 0.04 needed for a thermal 90 GeV singlet, so sigma_v <= 1e-27 cm^3/s: R1 1e-33 (Z'Z' closed, m_Z' = 2-2.8 TeV), R2 5e-31 (alpha_D = 1.1e-5), R3/R4 2e-33 (alpha_D = 7.2e-7), R5 zero dark sector. Consistency with the tree: Fermi dSph hadronic limits at 68 GeV (~3e-26, weakened ~4x by the 4-body cascade and complex-DM factor) sit just above R0's prediction, which is why the catalog gamma-ray nodes never fired; antiprotons are the few-x more sensitive channel at this mass. Honest caveat: this is a 2-3 sigma discriminator, dominated by CR propagation, secondary-production cross sections and solar modulation, and the 60-90 GeV excess is contested.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0"]},
          {"label": "not seen", "regions": ["R1", "R2", "R3", "R4", "R5"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R3+R4+R5",
          "name": "Displaced GeV dark-photon spectrometer",
          "observable": "l+l- vertex at m = 1.0 GeV, ctau ~ 3 cm ?",
          "reasoning": "R4's Z' is m = 1.00 GeV with eps = 1e-6: Gamma = (1/3) alpha eps^2 m N_eff = 7e-15 GeV, so ctau = 2.7 cm -- the dark-photon 'gap' where beam dumps are blind (they need gamma*ctau >~ 50 m; here it is ~0.7 m) and prompt searches lack the rate. A 0.1-3 m decay volume behind a thin high-intensity target with dilepton vertexing reads it directly. Predictions elsewhere: R3 gives ctau = 1.2 mm at 10.35 GeV (outside this mass window), R2 is prompt at 22.2 GeV (ctau = 0.1 um), R1 sits at 2.0-2.8 TeV, R5 has no vector at all -- all give zero yield at m = 1 GeV with cm-scale displacement.",
          "feasibility": "Closest instruments: LHCb Run 3/Upgrade inclusive displaced dimuon search, reaching eps^2 ~ 1e-11 (eps ~ 3e-6) near 1 GeV, and SHiP/NA62-dump, which are blind above eps ~ 1e-7 at this mass. Required improvement ~3x in eps (~10x in rate), plus a decay volume matched to ctau ~ 3 cm rather than 50 m. Dominant systematic: combinatorial displaced-vertex background from K_S/Lambda decays and material interactions inside the fiducial volume.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R4"]},
            {"label": "not seen", "regions": ["R1", "R2", "R3", "R5"]}
          ]
        },
        {
          "attach_to": "R1+R2+R3+R5",
          "name": "Dimuon resonance sweep to eps = 1e-6",
          "observable": "m(mu+mu-) peak at 10.4 or 22.2 GeV ?",
          "reasoning": "R3 and R2 both carry a Z' in the 10-25 GeV window but differ by 76x in kinetic mixing: R3 is m = 10.35 GeV, eps = 1e-6, ctau = 1.2 mm; R2 is m = 22.2 GeV, eps = 7.6e-5, prompt (ctau = 0.1 um) with 5800x the production rate. The peak mass alone labels the unit. R1's Z' is at 1989-2831 GeV and R5 has none, so both give a flat dimuon continuum across 5-30 GeV.",
          "feasibility": "Closest instruments: CMS dimuon scouting (11.5-45 GeV, eps >~ 1e-3) and LHCb inclusive dimuon (Upgrade II projections eps >~ 2e-4 at 10-30 GeV). R2 needs eps = 7.6e-5: ~3x in eps, ~10x in rate beyond Upgrade II. R3 needs eps = 1e-6: ~200x in eps, ~4e4 in rate, with the 1.2 mm displacement as the only background handle. Dominant systematic: Drell-Yan and heavy-flavour continuum under a peak of intrinsic width Gamma/m ~ 1e-11, so the search is entirely detector-mass-resolution limited.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "10.4 GeV", "regions": ["R3"]},
            {"label": "22.2 GeV", "regions": ["R2"]},
            {"label": "no peak", "regions": ["R1", "R5"]}
          ]
        },
        {
          "attach_to": "R1+R5",
          "name": "Ultra-precision m_W test of TeV kinetic mixing",
          "observable": "|m_W - m_W(SM)| >= 0.3 MeV ?",
          "reasoning": "R1 is the only unit with a heavy kinetically mixed vector: m_Z' = 1989-2831 GeV at eps = 0.1. Z-Z' mixing theta = eps s_W m_Z^2/m_Z'^2 = 1.0e-4 (at 1989 GeV) to 5.0e-5 (at 2831 GeV) gives Delta rho = theta^2 m_Z'^2/m_Z^2 = 4.8e-6 to 2.4e-6, i.e. |delta m_W| = 0.27 to 0.14 MeV and |delta sin^2 theta_eff| = 1.6e-6. R5 is a real singlet with no new vector: the shift is exactly zero. The pp -> Z' -> ll route is already in the catalog and the LEP-II/FCC-ee contact-interaction route is hopeless here (the induced scale is Lambda = m_Z'/(eps e) = 66-93 TeV versus ~15-20 TeV reachable), so the rho-parameter route is the strongest handle by 3-5x.",
          "feasibility": "Closest instrument: FCC-ee WW-threshold run, projected delta m_W = 0.25-0.5 MeV (and delta sin^2 theta_eff ~ 2-6e-6 at TeraZ); current world average is +-9 MeV with an unresolved ATLAS/CDF tension of tens of MeV. Required improvement ~3-5x beyond the best proposed machine, i.e. ~0.1 MeV. Dominant systematic is not statistics but beam-energy calibration and the theory wall: missing higher-order EW corrections to the WW lineshape currently sit at ~0.5 MeV, so the theory prediction must improve in step.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "shift seen", "regions": ["R1"]},
            {"label": "no shift", "regions": ["R5"]}
          ]
        }
      ]
    }
  ]
}
```