I'll verify the arXiv references I plan to cite and quickly confirm the kinetic-mixing convention in the repo, then deliver the full answer as one message.
All four references verified (titles match: Pospelov–Ritz–Voloshin "Secluded WIMP Dark Matter" 0711.4866; Fermi-LAT 6-yr dwarf-spheroidal search 1503.02641; Elor–Rodd–Slatyer cascade-annihilation spectra 1503.01773; LHCb A′→μ⁺μ⁻ 1910.06926). Here is the complete answer.

## Reasoning — Leaf `root_no_yes_no_yes_yes_yes_no` (273 pts, 9 units, all `CsSg_U1p[+]_DM.Z2+3+4+5`)

**What this leaf physically is.** All nine units are the *same* Lagrangian: a complex scalar singlet S (M_DM ≈ 4.1–5.5 GeV) charged under a dark U(1)′ with gauge coupling g′ ≈ 0.040–0.044, a light dark photon Z′ (M_Z′ ≈ 1.0–1.5 GeV) kinetically mixed with strength ε ∈ [1e-6, 7.4e-5], and a Higgs portal α1 ≈ 0.0019–0.0033 that fixes the leaf's BR(h→inv) window of 0.01–0.032. This is textbook *secluded* dark matter (Pospelov–Ritz–Voloshin): since M_DM > M_Z′, annihilation is SS†→Z′Z′ with ⟨σv⟩ ≈ g′⁴/(16π M_DM²) ≈ 3×10⁻²⁶ cm³/s at g′ = 0.042, M_DM = 5 GeV — exactly thermal. That is why g′ is pinned to a ±5% band in *every* region: the relic density fixes it, so no annihilation-*rate* observable (dwarfs vs GC, CMB p_ann, positrons, radio) can separate the regions — they all predict the same ⟨σv⟩ to ~50%. The "Fermi bb 10–100×" signal is the Z′Z′→4-fermion cascade (e, μ, π, K only — M_Z′ < 1.9 GeV is below the antiproton threshold, so no p̄/d̄ handle either) fit against a bb template. Side remark for the record: an s-wave visible cascade at 5 GeV with ⟨σv⟩ ≈ 1–10×10⁻²⁶ cm³/s is already in tension with the Planck 2018 p_ann bound (⟨σv⟩ ≲ 1.2×10⁻²⁶ cm³/s at 5 GeV for f_eff ≈ 0.2), but this presses all nine regions *equally* — it excludes, it does not split.

**The only observable coordinates that differ between units.**
1. **M_DM**: a light group {R3: 4.09–5.02, R8: 4.14–4.85} vs a heavy group {R0, R1, R2, R4, R5, R6, R7: ≥ 4.81} GeV.
2. **ε** (the Z′–SM coupling): high {R7: 1.1–2.2e-5, R1: 6.2e-6–7.4e-5}, low {R2, R3, R4 ≤ 6.5e-6; R6, R8 pinned at the 1e-6 prior floor}, straddling {R0: 1e-6–4.4e-5, R5: 3e-6–2.2e-5}. The Z′ proper decay length is cτ ≈ (2×10⁻¹² cm)/ε² at 1.2 GeV: 3.6 μm (ε = 7.4e-5) → 40–170 μm (R7) → ~0.5 mm (ε = 6e-6) → ~2 cm (ε = 1e-6).
3. **Quartics α2–α6** (the wildest inter-region differences, e.g. R6's α2 ≈ 0.13–0.48, R8's α4 = 10 vs R2/R5's ≲0.01): with no dark vev these generate no mass splitting and no decay — their *only* physical imprint is DM self-scattering, σ/m ≈ λ²/(64π M_DM²)/M_DM ≈ 9×10⁻⁷ cm²/g even at λ = 10, five to six orders of magnitude below the cluster-lensing frontier (~0.1–1 cm²/g). Units separated *only* by quartic pattern are honestly indistinguishable by any experiment, existing or conceivable — I say so explicitly below rather than inventing a fake discriminator.

**Why no literature dark-photon search works as Level 1.** The entire ε window at 1.0–1.5 GeV sits in the well-known visible-dark-photon blind spot: prompt searches (LHCb A′→μμ, BaBar, CMS dimuon scouting) require ε ≳ few×10⁻⁴ at this mass; beam-dump and forward-LLP bands (SHiP, FASER2, DarkQuest) require cτγ ~ 10–100 m, i.e. ε ≲ few×10⁻⁷ at 1 GeV since cτ ∝ 1/(ε²m); and LHCb's published *displaced* A′→μμ search covers only 214–350 MeV (arXiv:1910.06926). ε ∈ [1e-6, 7.4e-5] falls squarely between the bands — decays too prompt for dumps, too rare for prompt triggers. So ε-based splits are pushed to Level 2.

**Level 1 (lit review): γ-ray spectral endpoint = DM mass spectroscopy in dwarf spheroidals.** The leaf *guarantees* ⟨σv⟩ is 10–100× the Fermi-LAT 15-yr stacked-dwarf bb sensitivity, i.e. a discovery-level signal of hundreds–thousands of photons in the existing dwarf program (arXiv:1503.02641) — so the spectrum, not just the rate, becomes measurable. This is a genuinely new observable: the catalog encodes only limit-crossing ratios, never the photon energy distribution. For SS†→Z′Z′ each Z′ carries E = M_DM, and the hardest photon (FSR/π⁰ from a forward-boosted Z′) reaches E_max = (M_DM/2)(1+β), β = √(1−M_Z′²/M_DM²) ≈ 0.97, so E_max ≈ 0.985·M_DM — the cascade endpoint tracks the DM mass directly (arXiv:1503.01773 gives the general cascade spectra). Predicted endpoints per region: R3: 4.0–4.9 GeV, R8: 4.1–4.8 GeV, vs R0: 4.7–5.3, R1: 4.8–5.4, R2: 4.8–5.4, R4: 4.9–5.2, R5: 4.9–5.0, R6: 4.9–5.1, R7: 4.77–4.80 GeV. Cut: **E_max ≥ 4.75 GeV** separates the heavy seven from {R3, R8}. Honesty about margins: Fermi's energy resolution is ~8% (≈0.4 GeV) at 5 GeV, so the split is statistical (endpoint fit over many photons); R7 (4.77–4.80) and R0's lower edge (4.73) sit within one resolution bin of the cut, and R3's upper tail (up to ~4.95) leaks across. The split is clean for the ~75% of light-group points below 4.6 GeV and heavy-group points above 4.9 GeV; the dominant systematic is the energy-dispersion model, not the J-factor (a rate-free shape measurement).

**Level 2a (novel), attached to R0+R1+R2+R4+R5+R6+R7: millimeter-displacement dimuon dark-photon search.** These regions differ almost solely in ε, and their predicted Z′ flight distances at LHCb boosts (γ ~ 10–30) are 30 μm–5 mm for ε ≳ 5e-6 — inside the VELO but below current displaced-search mass coverage. Proposal: an inclusive A′→μ⁺μ⁻ search at 1.0–1.6 GeV requiring vertex displacement 0.05–10 mm, at Upgrade-II statistics (300 fb⁻¹). Rate scales as ε²; the detectability threshold lands at ε ≈ 5e-6 (ε² ≈ 2.5e-11). Outcomes: **seen** → {R1 (ε ≥ 6.2e-6), R7 (≥1.1e-5)} plus straddlers R0, R5 assigned here because the log-majority of both ranges (log-midpoints 6.6e-6 and 8e-6) lies above threshold — stated marginal, their low-ε floors would land in "not seen"; **not seen** → {R2, R4, R6} (ε ≤ 6.5e-6, mostly at the 1e-6 decade). Feasibility: closest instrument is LHCb's own displaced A′→μμ analysis, which reached ε² ~ 1e-9–1e-10 but only at 214–350 MeV; extending to 1.0–1.6 GeV requires ~10× rejection of the dominant systematic — displaced B/D→μμX vertices — plus Upgrade-II luminosity: a dedicated next-generation analysis, hence **unlikely**. Residual degeneracy inside "not seen" {R2, R4, R6}: these differ *only* in quartic pattern (item 3 above, σ_self/m ~ 1e-6 cm²/g) — terminally indistinguishable, and I decline to pretend otherwise. Inside "seen", a measured (m_A′, cτ) pair further localizes ε and M_Z′ but the R0/R1/R5/R7 ranges overlap too much for a clean second cut.

**Level 2b (novel), attached to R3+R8: downstream long-lived dark-photon spectrometer.** R3 vs R8 differ observably only in ε: R3 spans 1e-6–5.7e-6 (log-midpoint 2.4e-6, cτ ≈ 0.6 mm–2 cm, flight 1–40 cm at γ ~ 20), while R8 is pinned at ε = 1e-6 (cτ ≈ 2 cm, but rate ε² = 1e-12). Proposal: an ultra-high-luminosity forward spectrometer reconstructing μμ/ππ vertices 1–50 cm from the interaction point at 1.0–1.5 GeV mass, with sensitivity ε² ≈ 3e-12 (ε ≈ 1.7e-6). Outcomes: **seen** → R3 (bulk of its range above threshold), **not seen** → R8. Feasibility: closest concepts are the proposed LHCb downstream/inclusive A′ program (projected ε² ~ 1e-10 at ≲0.7 GeV) and CODEX-b; the required reach is 30–100× beyond those projections in a mass–lifetime corner where charm and strange-hadron decay vertices are the dominant systematic — **speculative**. Marginal by construction: R3's ε range extends down to the same 1e-6 floor as R8, so this catches only R3's upper ~60%; a null result leaves the R3-floor⊕R8 corner degenerate, which is a true physical degeneracy (remaining differences are pure quartics).

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_yes_yes_yes_no",
      "lit_review": {
        "name": "Fermi-LAT stacked dwarf-spheroidal spectral-endpoint (DM mass spectroscopy)",
        "observable": "gamma endpoint E_max >= 4.75 GeV ?",
        "refs": ["arXiv:0711.4866", "arXiv:1503.02641", "arXiv:1503.01773"],
        "reasoning": "All nine units are one secluded-dark-photon Lagrangian; g' is relic-pinned (~0.042) so annihilation rates are identical, but the leaf guarantees a 10-100x-above-sensitivity dwarf signal, making the SPECTRUM measurable. Cascade SS->Z'Z' endpoint E_max = 0.985*M_DM: R3 predicts 4.0-4.9 GeV and R8 4.1-4.8 GeV, vs 4.73-5.4 GeV for R0/R1/R2/R4/R5/R6/R7 (R7: 4.77-4.80). Cut at 4.75 GeV separates the light-mass pair from the heavy seven. Marginal at the boundary: Fermi energy resolution ~8% at 5 GeV; R7 and R0's lower edge sit within one resolution bin of the cut and R3's tail (to 4.95) leaks; clean for the ~75% of points away from 4.7-4.9 GeV. Dominant systematic: energy-dispersion model (shape-only, J-factor-free).",
        "status": "Splits!",
        "outcomes": [
          {"label": "endpoint high", "regions": ["R0", "R1", "R2", "R4", "R5", "R6", "R7"]},
          {"label": "endpoint low", "regions": ["R3", "R8"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R4+R5+R6+R7",
          "name": "LHCb Upgrade II millimeter-displaced dimuon dark-photon search",
          "observable": "mu+mu- resonance 1.0-1.6 GeV, vertex 0.05-10 mm: seen ?",
          "reasoning": "These regions differ essentially only in kinetic mixing epsilon; Z' proper lifetime ctau ~ 2e-12 cm/eps^2 gives 30 um - 5 mm flight at LHCb boosts for eps >~ 5e-6 -- the classic visible-dark-photon gap no existing or planned search covers at this mass. Rate ~ eps^2 sets threshold eps ~ 5e-6 (eps^2 ~ 2.5e-11 at 300/fb). Seen: R1 (6.2e-6-7.4e-5), R7 (1.1-2.2e-5), plus straddlers R0 and R5 whose log-majority lies above threshold (marginal; their low-eps floors would be missed). Not seen: R2/R4/R6 (eps <= 6.5e-6, mostly at the 1e-6 floor). Residual: R2/R4/R6 differ only in dark quartics whose sole imprint is sigma_self/m ~ 1e-6 cm^2/g, ~10^6 below cluster bounds -- honestly terminal.",
          "feasibility": "Closest: LHCb displaced A'->mumu (arXiv:1910.06926), eps^2 ~ 1e-9-1e-10 but only at 214-350 MeV; needs Upgrade II (300/fb) plus ~10x rejection of displaced B/D->mumu X vertices (dominant systematic) to reach eps^2 ~ 2.5e-11 at 1.0-1.6 GeV.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R1", "R5", "R7"]},
            {"label": "not seen", "regions": ["R2", "R4", "R6"]}
          ]
        },
        {
          "attach_to": "R3+R8",
          "name": "Downstream long-lived dark-photon spectrometer",
          "observable": "mumu/pipi vertex 1-50 cm, mass 1.0-1.5 GeV: seen ?",
          "reasoning": "R3 and R8 differ observably only in epsilon: R3 spans 1e-6-5.7e-6 (ctau 0.6 mm - 2 cm, flight 1-40 cm at gamma~20) while R8 is pinned at 1e-6 (rate eps^2 = 1e-12, ~100x below any projection). A forward spectrometer reconstructing decimeter-scale mumu/pipi vertices with eps^2 ~ 3e-12 sensitivity sees the upper ~60% of R3 and nothing of R8. Marginal: R3's floor reaches the same eps = 1e-6 as R8, so a null result leaves that corner degenerate -- remaining differences (alpha3: 0.06-0.26 vs 0.003-0.009) are pure dark quartics with no external observable.",
          "feasibility": "Closest: proposed LHCb downstream/inclusive A' program (arXiv:1603.08926; eps^2 ~ 1e-10 projected, <~0.7 GeV) and CODEX-b; requires 30-100x beyond those projections at 1.0-1.5 GeV, against charm/strange displaced-vertex backgrounds (dominant systematic).",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "seen", "regions": ["R3"]},
            {"label": "not seen", "regions": ["R8"]}
          ]
        }
      ]
    }
  ]
}
```