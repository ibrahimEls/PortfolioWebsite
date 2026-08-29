I'll verify the references I plan to cite before writing the answer.
## Reasoning

### Reading the parameter block (this drives everything below)

All 39 units belong to one Lagrangian: a complex scalar singlet `S` charged under a dark U(1)′, i.e. the canonical **secluded dark-photon model** — DM mass `MDM`, dark photon mass `MZp`, kinetic mixing `epsilon`, dark gauge coupling `gU1p`, Higgs portal `alpha1 = λ_hS`, and five dark quartics `alpha2..alpha6` that couple to nothing but themselves.

Two independent checks fix the units as **linear GeV** (not log₁₀):

1. **Higgs portal.** Γ(h→SS\*) ≃ λ²v²/(8π m_h)·β. With λ = 1.35×10⁻³, v = 246 GeV: Γ = 4.3×10⁻⁵ GeV against Γ_SM = 4.07×10⁻³ GeV → BR(h→inv) ≈ 1.0×10⁻². The leaf's α₁ window [1.05, 1.87]×10⁻³ maps onto BR ≈ 3×10⁻³–1.6×10⁻², i.e. exactly the leaf's band 0.0032–0.01. This only works if every point has m_S < m_h/2 = 62.5 GeV — and indeed max(MDM) = 6.29 GeV.
2. **Relic density.** The value `gU1p = 0.04377` recurs *exactly* in 15 units, always paired with MDM ≈ 4.71, MZp ≈ 3.161. α_D = g_D²/4π = 1.52×10⁻⁴, and ⟨σv⟩(SS\*→A′A′) ≃ πα_D²/m_S² = 3.9×10⁻²⁶ cm³/s at m_S = 4.71 GeV — the thermal value. That cluster is the **secluded thermal relic line**, ε-independent.

So: a GeV-scale secluded dark sector, m_A′ ∈ [1.0, 5.5] GeV, m_S ∈ [1.0, 6.3] GeV, with **ε spanning five decades, 10⁻⁶ → 0.1**, across otherwise near-identical regions. Because m_A′ < 2m_S in 36 of 39 units, the dark photon **decays visibly** to SM (μμ / ee / hadrons) — the classic accelerator-search target. Our catalog contains no accelerator observable at all, so this axis is entirely untouched.

### What I checked and rejected (honest negatives)

- **Dark self-interaction (the α₂…α₆ axis).** σ/m ≈ 2.2×10⁻⁴·λ²/(64π m³) cm²/g. At the ceiling λ = 10, m = 4.71 GeV this is **1.0×10⁻⁶ cm²/g**; A′-exchange adds only ~10⁻¹¹ cm²/g (8πα_D²m_S²/m_A′⁴ with α_D ~ 10⁻⁴). Bullet-Cluster-class bounds sit at ~1 cm²/g. **Six orders short** — the quartics are not measurable by anything, ever. Units that differ *only* in α₂…α₆ (e.g. R16/R25/R28, identical at 4.71/3.161/0.04377) are physically, not merely practically, degenerate. I say so rather than inventing a split.
- **DM–electron scattering (SENSEI/DAMIC-M/Oscura, not in the catalog).** σ_e = 16π α α_D ε² μ_e²/m_A′⁴ = 5.7×10⁻⁴¹·ε² cm² for the thermal cluster → 5.7×10⁻⁴⁷ cm² at ε = 10⁻³, four decades below Oscura's ~10⁻⁴³ cm² projection at 5 GeV. Only ε ≳ 0.03 (R31/R35/R36) is reachable — strictly weaker than the accelerator split.
- **Cosmic-ray antiprotons (AMS-02/GAPS).** Attractive because the p̄ threshold at m_A′ = 1.88 GeV cleanly separates the 1-GeV and 3.2-GeV dark-photon groups — but a 3.16 GeV A′ is only 1.7× above threshold, giving N_p̄ ≈ 0.02/annihilation, i.e. a bb̄-equivalent ⟨σv⟩ ~ 4×10⁻²⁸ cm³/s, well below AMS-02, with all the p̄ at T ≲ 1 GeV where solar modulation dominates. Rejected as a discriminator.
- **Beam dumps / far detectors (SHiP, FASER2).** cτ(A′) = 0.65 cm·(10⁻⁶/ε)² at 3.16 GeV, so even at the ε = 10⁻⁶ floor the boosted decay length is ≲ 10 cm. Nothing reaches a 45 m decay volume. (Consistent with the earlier LLP finding for this scan.)
- **CMB p_ann (Planck).** f_eff⟨σv⟩/m ≈ 0.25 × 3.9×10⁻²⁶/4.71 = 2×10⁻²⁷ cm³ s⁻¹ GeV⁻¹ vs the Planck bound 3.2×10⁻²⁸ — the whole secluded thermal cluster is in ~6× tension. Worth flagging for the paper, but it does **not split**: only R34/R35/R36 have m_A′ > m_S and so escape s-wave secluded annihilation.

### Level 1 — visible dark-photon resonance search (splits!)

The measurement: the radiative-return dark-photon search, e⁺e⁻ → γA′(→μ⁺μ⁻) at √s = 10.58 GeV (BaBar, 514 fb⁻¹; LHCb's inclusive prompt A′→μμ covers the same masses at 13 TeV). Cross section:

σ(e⁺e⁻→γA′) = (4πα²ε²/s)[ln(s/m_e²) − 1](1 − m_A′²/s) ≈ 4.4×10⁴ pb · ε²,

and with BR(A′→μμ) ≈ 0.2 at 3 GeV (R ≈ 2.2, τ channel closed), **σ·BR ≈ 9 fb at ε = 10⁻³** — precisely the level BaBar excludes (their quoted reach 10⁻⁴–10⁻³ over 0.02–10.2 GeV). So the cut **σ·BR ≥ 10 fb ⇔ ε ≳ 10⁻³** is a real, already-delivered measurement.

Predicted σ·BR per region (scaling 9 fb·(ε/10⁻³)²):
- **R36**: ε = 0.1 → ~90 pb. **R31**: 0.034–0.093 → 10–78 pb. **R35**: 0.025–0.081 → 6–59 pb. Grossly excluded already.
- **R6**: 4.4×10⁻⁴–4.7×10⁻² (geo-mean 4.5×10⁻³) → ~180 fb. **R19**: 2.0×10⁻³–1.7×10⁻² → 36 fb–2.6 pb. **R26**: 4.5–7.1×10⁻³ → 180–450 fb. **R24**: 1.0–1.5×10⁻³ → 9–20 fb. **R11**: 2.3–3.0×10⁻³ → 48–81 fb. **R15**: 5.5×10⁻⁴–2.0×10⁻³ → 2.7–36 fb (borderline, geo-mean ≈ 10 fb).
- Everything else sits at ε ≤ 10⁻³ → below 9 fb, most of it far below (12 units never exceed ε = 10⁻⁵ → < 1 ab).

**The honest headline: this measurement has already been made and returned null, so the nine high-ε units are effectively falsified by existing data.** They survive in the scan only because no accelerator observable is in the catalog.

Caveats stated plainly: (i) R0 (333 pts, ε = 10⁻⁶–2.6×10⁻³) and R2 (up to 3.7×10⁻³) straddle the cut — I assign them "no" on their log-median (5×10⁻⁵ and 4×10⁻⁴); R15, R24, R37 (9.7×10⁻⁴) sit within a factor ~2 of it. (ii) m_A′ = 3.161 GeV lands 64 MeV above the J/ψ; LHCb vetoes a window there, so this split leans on BaBar's ~10 MeV dimuon resolution. (iii) R11 at 1.03–1.08 GeV sits on the φ(1020), where BR(A′→μμ) dips to ~0.05–0.1 and searches veto — its 48–81 fb should be read as a factor-2-uncertain number.

### Level 2a — the nine "seen" units

Once a peak exists you read off m_A′ for free (1.03, 1.3, 3.16, 3.1–4.2, 4.73 GeV) — that is not a new experiment, so I don't count it. The genuinely unmeasured quantity is **m_S**, and the only handle is DM-pair production through the (now-known) mediator: a mono-photon recoil-mass endpoint, M_rec² = s − 2√s E_γ, whose **threshold sits at 2m_S**: 9.42 GeV for R6/R15/R24/R26, 9.41–12.58 for R19, versus 4.34 (R11), 3.78–4.51 (R35), 2.00 (R36), 2.21–10.19 (R31 — straddles, assigned low, flagged). Corroborating signature: R36 alone has m_A′ > 2m_S, so its dark photon is ~74% invisible (Γ_inv/Γ_vis ≈ 2.1×10⁻³/7.6×10⁻⁴), a second, independent tell. This node leaves R6/R15/R24/R26 mutually degenerate — they are the identical thermal point differing only in unmeasurable quartics.

### Level 2b — the thirty "not seen" units

Here the cut ε ≈ 10⁻⁵ is exceptionally clean: **all twelve units R5, R9, R10, R14, R18, R21, R22, R23, R27, R29, R32, R38 have ε_max < 10⁻⁵** with no straddlers, while the other eighteen have log-median ε ≥ 10⁻⁵ (R7, R8, R28 straddle by less than a factor 4 and are flagged). σ(pp→A′X)·BR(μμ) ≈ 1 ab at ε = 10⁻⁵ for m_A′ ~ 3 GeV, and cτ = 0.65 cm·(10⁻⁶/ε)² puts that same ε window at cτ = 65 μm–6.5 mm — micro-displaced, i.e. taggable against the prompt Drell-Yan continuum, with b/c → μμX the irreducible background. Below ε ≈ 10⁻⁶ the rate dies and nothing terrestrial survives: those twelve units are separable from the rest but not from each other.

---

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_yes_yes_no_no",
      "lit_review": {
        "name": "BaBar/LHCb prompt dark-photon dimuon search",
        "observable": "sigma(e+e- -> gamma A'(-> mu mu)) >= 10 fb, m_A' = 1-5 GeV ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "All 39 units are one secluded dark-photon Lagrangian (m_S = 1.0-6.3 GeV, m_A' = 1.0-5.5 GeV, m_A' < 2m_S in 36/39 so the A' decays visibly to SM), and the catalog contains no accelerator observable at all. Units differ by five decades in kinetic mixing. Radiative return gives sigma(e+e- -> gamma A') = (4*pi*alpha^2*eps^2/s)[ln(s/m_e^2)-1](1-m_A'^2/s) = 4.4e4 pb * eps^2; with BR(A'->mu mu) ~ 0.2 at 3 GeV this is 9 fb at eps = 1e-3, exactly BaBar's quoted 1e-4 to 1e-3 reach over 0.02-10.2 GeV. Predicted sigma*BR: R36 ~90 pb (eps=0.1), R31 10-78 pb, R35 6-59 pb, R6 ~180 fb, R19 36 fb-2.6 pb, R26 180-450 fb, R11 48-81 fb, R24 9-20 fb, R15 2.7-36 fb; every other unit falls below 9 fb, and twelve of them below 1 ab. The measurement has already been performed and is null, so the nine 'yes' units are effectively falsified by existing data. Caveats: R0 (eps 1e-6 to 2.6e-3) and R2 (to 3.7e-3) straddle the cut and are assigned by log-median (5e-5, 4e-4); R15/R24/R37 lie within a factor ~2 of it; m_A' = 3.161 GeV is 64 MeV above the J/psi, inside LHCb's charmonium veto, so the split leans on BaBar's ~10 MeV dimuon resolution; R11 at 1.03-1.08 GeV sits on the phi(1020) where BR(mu mu) dips to 0.05-0.1. Rejected alternatives, quantitatively: dark self-interaction from the quartics gives sigma/m <= 1e-6 cm^2/g (six decades below cluster bounds); DM-electron scattering gives 5.7e-41*eps^2 cm^2, four decades below Oscura at eps = 1e-3; antiprotons give only 0.02 pbar per annihilation at T < 1 GeV; c*tau <= 10 cm kills all far-detector beam dumps.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R6", "R11", "R15", "R19", "R24", "R26", "R31", "R35", "R36"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R7", "R8", "R9", "R10", "R12", "R13", "R14", "R16", "R17", "R18", "R20", "R21", "R22", "R23", "R25", "R27", "R28", "R29", "R30", "R32", "R33", "R34", "R37", "R38"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R6+R11+R15+R19+R24+R26+R31+R35+R36",
          "name": "Mono-photon recoil-mass threshold scan for dark pairs",
          "observable": "invisible recoil-mass threshold >= 5 GeV ?",
          "reasoning": "With the A' peak in hand its mass and eps are known, so the one unmeasured quantity is the DM mass. Producing S S* through the now-calibrated mediator and reconstructing M_rec^2 = s - 2*sqrt(s)*E_gamma gives a kinematic edge at exactly 2*m_S: 9.42 GeV for R6/R15/R24/R26, 9.41-12.58 GeV for R19, against 4.34 GeV (R11), 3.78-4.51 GeV (R35), 2.00 GeV (R36) and 2.21-10.19 GeV (R31, which straddles and is assigned low). A second independent tell: R36 alone has m_A' > 2*m_S, so its dark photon is ~74 percent invisible (Gamma_inv/Gamma_vis = 2.1e-3/7.6e-4), while every other unit here has a purely visible A'. R6/R15/R24/R26 remain mutually degenerate afterwards: identical 4.71/3.161/0.04377 thermal points differing only in the dark quartics, whose self-scattering is at most 1e-6 cm^2/g and therefore unmeasurable in principle.",
          "feasibility": "Closest instrument: the Belle II single-photon search at SuperKEKB, which reconstructs recoil mass with ~0.2 GeV resolution (ample for a 5 GeV threshold) and reaches eps^2*alpha_D ~ 1e-8 for on-shell invisible A' at 50/ab. Off-shell continuum S S* production here needs eps^2*alpha_D down to 1.5e-10 for the eps ~ 1e-3, alpha_D = 1.5e-4 units (R6/R15/R24/R26) -- roughly 100x beyond the projected 50/ab reach, i.e. a dedicated multi-hundred-ab^-1 machine or a high-energy muon missing-momentum experiment. R36, R35 and R31 (eps 0.03-0.1, alpha_D up to 7e-3) are already inside Belle II's projected reach, so the split fails only at its heavy end. Dominant systematic: the irreducible e+e- -> gamma nu nubar continuum and single-photon trigger efficiency near the endpoint.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "high threshold", "regions": ["R6", "R15", "R19", "R24", "R26"]},
            {"label": "low threshold", "regions": ["R11", "R31", "R35", "R36"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R7+R8+R9+R10+R12+R13+R14+R16+R17+R18+R20+R21+R22+R23+R25+R27+R28+R29+R30+R32+R33+R34+R37+R38",
          "name": "Micron-displaced dimuon spectrometer at a high-intensity proton facility",
          "observable": "sigma*BR(A' -> mu mu) >= 1 ab, m = 1-5 GeV ?",
          "reasoning": "These thirty units are invisible to prompt bump hunts but still carry eps from 1e-6 to 1e-3. The cut sits at eps ~ 1e-5, where sigma*BR ~ 1 ab for m_A' ~ 3 GeV, and it is unusually clean: R5, R9, R10, R14, R18, R21, R22, R23, R27, R29, R32, R38 all have eps_max < 1e-5 with no straddlers, while the other eighteen have log-median eps >= 1e-5 (R7, R8, R28 straddle by less than a factor 4). The enabling handle is lifetime, not luminosity alone: c*tau = 0.65 cm*(1e-6/eps)^2 at m_A' = 3.16 GeV puts eps = 1e-6 to 2.5e-5 at c*tau = 65 micron to 6.5 mm, a micro-displaced vertex that separates the signal from the prompt Drell-Yan continuum. Below eps ~ 1e-6 the eps^2 production rate dies and the twelve 'no' units become unreachable by any terrestrial probe; they also differ from each other only in the dark quartics, so their residual degeneracy is physical rather than instrumental.",
          "feasibility": "Closest instrument: the LHCb inclusive A'->mu mu search (5.5/fb), which reaches eps ~ 1e-3 prompt in the 1-5 GeV window; LHCb Upgrade II (300/fb) with displaced tagging projects roughly eps ~ 1e-4 there. Reaching eps = 1e-5 requires about 10x in eps, i.e. ~100x in signal cross-section, beyond Upgrade II -- a dedicated next-generation forward spectrometer with ~10 micron vertexing and full heavy-flavour veto. Dominant systematic: displaced b/c -> mu mu X background, which is irreducible below ~100 micron and sets the true floor; secondary is the charmonium veto window, which blinds m_A' = 3.161 GeV at a hadron machine and would have to be recovered with a mass resolution better than 20 MeV.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R7", "R8", "R12", "R13", "R16", "R17", "R20", "R25", "R28", "R30", "R33", "R34", "R37"]},
            {"label": "not seen", "regions": ["R5", "R9", "R10", "R14", "R18", "R21", "R22", "R23", "R27", "R29", "R32", "R38"]}
          ]
        }
      ]
    }
  ]
}
```