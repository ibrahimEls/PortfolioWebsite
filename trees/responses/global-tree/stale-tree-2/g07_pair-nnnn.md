I'll first verify the arXiv references I plan to cite (as the rules require), then deliver the complete analysis in one message. Loading the fetch tool:
Now verifying the three arXiv IDs I intend to cite:
All three references verify (BaBar dark-photon search 0.02–10.2 GeV with ε limits 10⁻⁴–10⁻³; LHCb A′→μμ up to 70 GeV; Belle II Physics Book dark-sector projections). Here is the complete degeneracy-breaking analysis.

---

# Reasoning — Leaf `root_no_no_no_no_no` (1068 pts, 12 units)

This is the "nothing anywhere" leaf: no IceCube-Gen2, BR(h→inv) < 10⁻³, no CTA(WW), no DARWIN. The catalog is blind here — but most of the leaf is spectacularly *not* invisible to measurements outside the catalog, because eight of the twelve units carry a **~1 GeV dark photon with kinetic mixing ε ≈ 0.06–0.1**. The catalog's only Z′ probe is the high-mass LHC Drell-Yan dilepton recast, which is blind below ~10 GeV; a B-factory radiative-return scan is a genuinely different measurement and is the obvious lever.

**Unit inventory by Lagrangian.** Group A = R0, R2, R5, R6, R7, R10, R11 — all the *same* Lagrangian (CsSg_U1p[+].Z2+3+4+5) at *identical* portal parameters (M_DM = 297.9 GeV, M_Z′ = 1.212 GeV, ε = 0.1, g′ = 0.1217, α1 = 0.003822), differing only in the dark quartics α2–α6. R4 = CsSg_U1p[−].Z2, M_DM ≈ 222–248 GeV, M_Z′ = 1.00 GeV, ε = 0.064–0.1. R3 = CsSg_U1p[−].Z2345, M_DM ≈ 290–308 GeV, M_Z′ = 1.18–2.57 GeV, ε ≈ (1.0–1.8)×10⁻⁶. R8, R9 = CsSg_U1p[−].Z2345, M_DM = 127.5 GeV, M_Z′ = 145.7 GeV, ε ≤ 1.4×10⁻⁵. R1 = RsSg (real singlet), M_DM ≈ 95 GeV, λ_portal ≈ 0.001, no dark sector at all.

## Level 1 — Lit review: visible dark-photon scan (BaBar / Belle II / LHCb)

The radiative-return cross section at an e⁺e⁻ B-factory is σ(e⁺e⁻→γA′) ≈ 1.2 nb × ε² at √s = 10.58 GeV, with A′→ℓℓ/hadrons fully visible here (all Z′ masses are far below the 2M_DM threshold, so BR(visible) ≈ 1).

Quantitative prediction per unit:

- **Group A (R0,R2,R5,R6,R7,R10,R11):** ε = 0.1 → σ ≈ 12 pb, a narrow μμ/ee/hadronic resonance at **m = 1.212 GeV**. That is ~10⁴ times the existing BaBar sensitivity (ε ~ 10⁻³–10⁻⁴ over 0.02–10.2 GeV, arXiv:1406.2980) — in fact these points are already excluded/discoverable in archival BaBar data; Belle II and the LHCb prompt A′→μμ scan (mass reach to 70 GeV, arXiv:1910.06926) re-measure the peak with few-MeV mass resolution.
- **R4:** ε = 0.064–0.1 → σ ≈ 5–12 pb at **m = 1.00 GeV**. Caveat stated honestly: 1.00 GeV sits ~20 MeV below the φ(1020), near the edge of the standard hadronic-resonance veto windows, but at ε² ~ 10⁻²·nb-level rates the peak is unmissable in the μμ and e⁺e⁻ channels, and LHCb's dimuon mass resolution (~7 MeV at 1 GeV) cleanly separates 1.00 from 1.212 GeV.
- **R3:** ε ≈ 10⁻⁶ → σ ≈ 10⁻³ ab. Zero events at any collider (prompt production ∝ ε² is 10⁶× below reach). Not seen.
- **R8, R9:** M_Z′ = 145.7 GeV is kinematically inaccessible at a B-factory; at the LHC, σ·BR(DY) ∝ ε² ≤ 2×10⁻¹⁰ gives ~10⁻⁶ fb. Not seen.
- **R1:** no dark photon exists. Not seen.

So one measured quantity — the γ + dilepton resonance and its mass — gives a decisive **three-way split**: (i) resonance with m ≥ 1.1 GeV → Group A; (ii) resonance below 1.1 GeV → R4; (iii) nothing → {R1, R3, R8, R9}. The cut σ > 1 fb corresponds to ε ~ 10⁻³, i.e. today's BaBar floor: signal units overshoot it by 3–4 orders of magnitude, null units undershoot it by ≥6. This split also separates three of the four distinct Lagrangian classes in the leaf ([+]-charge model vs [−].Z2 vs the rest), which per the value ordering is the most important gain available.

## Level 2 — Novel experiments for the residual degeneracies

### (a) `R1+R3+R8+R9` — near-target displaced-vertex proton-dump spectrometer

R3 is the only unit here with any accessible new state: a 1.2–2.6 GeV dark photon at ε ≈ (1–1.8)×10⁻⁶. Its width gives cτ ≈ 0.7–3 cm — the notorious coverage gap: too displaced/faint for prompt bump hunts (production ∝ ε² = 10⁻¹²), yet far too short-lived for existing dump geometries. At SHiP the boost γ ~ 40–120 gives decay lengths of only 0.5–2 m against a decay volume starting ~45 m downstream (survival ~e⁻³⁰: nothing); DarkQuest's fiducial region starts at 5 m (survival ~e⁻¹⁰: marginal at best); FASER sits at 480 m. I therefore propose a *dedicated short-standoff* dump experiment: precision vertexing beginning ~0.1–3 m behind a SHiP-intensity proton dump. With ~10²⁰–10²¹ POT and per-proton A′ yield ~ε²×(10⁻³–10⁻⁴) from proton bremsstrahlung and meson decays, R3 predicts 10⁴–10⁶ produced A′ with O(10–10³) decays inside a 0.1–3 m fiducial shell — a displaced ℓ⁺ℓ⁻/ππ mass peak at 1.2–2.6 GeV. R1 predicts strictly zero (no dark sector); R8/R9 predict zero below 3 GeV (their Z′ is at 145.7 GeV). Feasibility is the honest sticking point: nobody has run a vertex tracker 1 m from an active multi-10¹⁹-POT dump; beam-induced muon/hadron flux and fake vertices are the dominant systematic (it is *why* SHiP sits 45 m back). Rated **unlikely** (dedicated next-generation effort combining DarkQuest geometry ~5× closer with ~100× its POT).

Residual after this node: **R1 vs R8+R9 is terminally degenerate**, and it is a cross-Lagrangian degeneracy (real singlet vs complex singlet + sealed dark U(1)). Their only differing predictions are σ_SI ≈ 1×10⁻⁴⁹ cm² at 95 GeV (R1, λ ≈ 0.001) vs ≈1.1×10⁻⁴⁹ cm² at 127.5 GeV (R8/R9, α1 ≈ 0.0014) — nearly identical rates, both inside the xenon neutrino fog, distinguishable only by recoil-spectrum shape *after* a detection no proposed instrument can make. I state this as an honest failure rather than invent a split.

### (b) `R0+R2+R5+R6+R7+R10+R11` — extreme-precision self-interaction survey (honest near-failure)

These seven regions are one Lagrangian at byte-identical portal parameters; they differ *only* in the dark quartics α2–α6. Quartics enter observables only through vertices with ≥4 dark legs — the single physical observable they feed at tree level is DM–DM elastic self-scattering. The numbers are brutal: the quartic contact piece is σ/m ≈ λ²/(64π M³) ≈ 4×10⁻¹² cm²/g at λ ≈ 10 (R6, R7, R10 upper ends, and parts of R0) falling to ≲5×10⁻¹⁵ cm²/g for R2 (λ ≤ 0.33), with R5, R11 at ≲10⁻¹³. Worse, all seven share a *common* Z′-exchange floor σ/m ≈ 5.3×10⁻⁷ cm²/g (g′ = 0.122, M_Z′ = 1.212 GeV — contact-like at halo velocities since q ~ M v ~ 0.3 GeV < M_Z′, so not even velocity-shape separable), which depends on the never-directly-measured dark coupling and would have to be subtracted at the 10⁻⁵ relative level. Current cluster/halo bounds sit at ~0.5 cm²/g — the required sensitivity is ~11 orders beyond anything conceivable, and R0's quartic ranges span both sides of any cut (I assign R0 to the large-quartic outcome and flag the straddle). Rated **speculative**; the physically meaningful conclusion, recorded here, is that this degeneracy is essentially irreducible because dark-sector quartics decouple from every SM-visible observable — but it is a *region-level* degeneracy within a single Lagrangian, the least costly kind.

The sibling leaf `root_no_no_no_no_yes` is context-only (no separable units) and gets no entry.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_no_no",
      "lit_review": {
        "name": "Dark-photon dimuon scan (BaBar/Belle II/LHCb)",
        "observable": "e+e- -> gamma A'(->mumu) resonance sigma > 1 fb; m_A' >= 1.1 GeV ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "Eight of twelve units carry a visibly decaying ~1 GeV dark photon with epsilon = 0.064-0.1: radiative-return cross section sigma(e+e- -> gamma A') ~ 1.2 nb x eps^2 = 5-12 pb, i.e. 3-4 orders of magnitude above the existing BaBar floor (eps ~ 1e-3, corresponding to the 1 fb cut) -- already discoverable in archival data. Group A (R0,R2,R5,R6,R7,R10,R11) predicts a narrow peak at exactly 1.212 GeV; R4 predicts 5-12 pb at 1.00 GeV (near the phi(1020) veto edge, but unmissable at this rate; LHCb dimuon resolution ~7 MeV cleanly splits 1.00 from 1.212). Null side: R3 has eps ~ 1e-6 giving sigma ~ 1e-3 ab (zero events); R8/R9 have M_Z' = 145.7 GeV, inaccessible at a B-factory and giving only ~1e-6 fb in LHC Drell-Yan at eps <= 1.4e-5; R1 has no dark photon. The catalog's Z'-dilepton observable is a high-mass LHC DY recast, blind below ~10 GeV, so this is a genuinely new measurement. Bonus: the split separates 3 of the 4 Lagrangian classes present.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen >=1.1 GeV", "regions": ["R0", "R2", "R5", "R6", "R7", "R10", "R11"]},
          {"label": "seen <1.1 GeV", "regions": ["R4"]},
          {"label": "not seen", "regions": ["R1", "R3", "R8", "R9"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R3+R8+R9",
          "name": "Near-target displaced-vertex proton-dump spectrometer",
          "observable": "displaced l+l-/pipi vertex 0.1-3 m from dump, m(ll) 1.0-2.7 GeV: >= 10 events ?",
          "reasoning": "R3's dark photon (m = 1.18-2.57 GeV, eps = 1.0-1.8e-6) has ctau ~ 0.7-3 cm -- in the gap between prompt searches (production ~ eps^2 = 1e-12, hopeless) and existing dumps (SHiP decay volume at ~45 m vs boosted decay length 0.5-2 m: survival ~ e^-30; DarkQuest fiducial starts at 5 m). A vertexing region 0.1-3 m behind a SHiP-intensity dump captures it: with 1e20-1e21 POT and A' yield ~ eps^2 x (1e-3 - 1e-4) per proton, expect 1e4-1e6 produced A' and O(10-1000) in-fiducial dilepton/dipion decays peaking at 1.2-2.6 GeV. R1 predicts exactly zero (no dark sector); R8/R9 predict zero below 3 GeV (Z' at 145.7 GeV). Residual R1 vs R8+R9 is terminally degenerate: both predict sigma_SI ~ 1e-49 cm^2 (portal ~0.001-0.0015 at 95 vs 127.5 GeV), inside the xenon neutrino fog, distinguishable only by recoil-spectrum shape after a detection no proposed instrument can make -- an honest cross-Lagrangian failure.",
          "feasibility": "Closest instruments: DarkQuest/SpinQuest (displaced dileptons, fiducial 5-12 m, ~1.4e18 POT) and SHiP (2e20 POT, approved, decay volume ~45 m downstream). Needs ~5x shorter standoff than DarkQuest at ~100x its POT; dominant systematic is beam-induced muon/hadron flux and vertex fakes ~1 m from an active dump (the reason SHiP sits 45 m back).",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R3"]},
            {"label": "not seen", "regions": ["R1", "R8", "R9"]}
          ]
        },
        {
          "attach_to": "R0+R2+R5+R6+R7+R10+R11",
          "name": "Extreme-precision halo self-interaction survey",
          "observable": "sigma_self/m in halos >= 5.3e-7 + 1e-12 cm^2/g ?",
          "reasoning": "These seven regions are one Lagrangian at identical portal parameters (M_DM = 297.9, M_Z' = 1.212, eps = 0.1, g' = 0.1217, alpha1 = 0.003822), differing only in dark quartics alpha2-6, which enter observables solely via 4-dark-leg vertices: DM-DM self-scattering is the unique quartic-sensitive observable. Quartic contact piece: ~1-4e-12 cm^2/g for lambda ~ 5-10 (R6, R7, R10, upper R0) vs <= 5e-15 (R2, lambda <= 0.33), <= 1e-13 (R5), <= 6e-14 (R11); cut set 1e-12 above the common Z'-exchange floor of 5.3e-7 cm^2/g, which is contact-like at halo velocities (q ~ 0.3 GeV < M_Z') and so not even velocity-shape separable. R0's broad quartic ranges straddle the cut (assigned to the large-quartic outcome, flagged). Honest verdict: needs ~11 orders beyond current cluster bounds (~0.5 cm^2/g) plus subtraction of an unmeasured common floor at 1e-5 relative precision -- this region-level, single-Lagrangian degeneracy is physically near-irreducible because dark quartics decouple from all SM-visible observables.",
          "feasibility": "Closest capability: stacked weak-lensing + X-ray halo-shape/merger analyses (current sensitivity ~0.5 cm^2/g; Rubin/Euclid era ~0.1). Required improvement ~1e11-1e12 in sigma/m sensitivity, far beyond any proposed program; dominant systematics are baryonic-feedback-induced halo-shape changes mimicking SIDM and the un-subtractable Z'-mediated common floor.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R6", "R7", "R10"]},
            {"label": "no", "regions": ["R2", "R5", "R11"]}
          ]
        }
      ]
    }
  ]
}
```