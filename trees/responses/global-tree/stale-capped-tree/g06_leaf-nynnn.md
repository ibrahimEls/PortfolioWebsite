I'll verify the arXiv references I plan to cite, then deliver the full analysis and JSON in one message.
All three references verified (with two corrections caught: arXiv:1702.03327 is BaBar's *invisible*-decay search, and the LHCb μμ scan covers 214–740 MeV plus 10.6–30 GeV — I've adjusted which IDs I cite accordingly). Here is the complete deliverable.

---

# Reasoning — Leaf `root_no_yes_no_no_no` (1217 pts, 40 units)

## What the catalog leaves undetermined here

This leaf is the "quiet" corner: no neutrino telescope signal, no CTA(WW), no Fermi(bb), and a small but nonzero BR(h→inv) in [0.001, 0.0032). Its 40 units fall into two physically very different families that the catalog cannot tell apart:

- **R0** — Real Scalar Singlet, m_DM ≈ 93.65–94.75 GeV, Higgs portal α1 ≈ (1.1–1.4)×10⁻³, **no dark sector at all**. (Just above the WW/ZZ thresholds, which is why such a tiny portal is relic-viable; σ_SI ~ few×10⁻⁵⁰–10⁻⁴⁹ cm², below the neutrino fog — this unit is invisible to essentially all direct detection forever. One honest tension: with m_DM ≈ 94 GeV > m_h/2, on-shell h→inv is closed, so R0's membership in a BR(h→inv) ≥ 0.001 leaf presumably reflects a pipeline convention; I take the parameter ranges at face value.)
- **R1–R39** — Complex Scalar Singlet + dark U(1)′, m_DM ≈ 1–5.5 GeV (mostly pinned at the 1 GeV scan floor), **M_Z′ ≈ 1–1.7 GeV in 36 of 39 units** (outliers: R9 at 4.7 GeV, R28 at 14.4 GeV, R11 at 60.4 GeV), g′ ≈ 0.03 (outliers R9: 0.30, R28: 0.13, R11: 11.4 — nonperturbative), and kinetic mixing ε spanning **six decades, 10⁻⁶ to 0.1**.

The decisive observation: the dark-photon sector (M_Z′, ε) is *completely orthogonal* to every catalog observable on this path, yet A′ production and decay rates at colliders and beam dumps depend **only** on (M_Z′, ε) — not on the DM relic physics, halo profile, or quartics. So predictions per region are quantitative and unconditional, which is exactly what a clean split needs. Note this is *not* a refinement of the catalog's "Z′ dilepton" observable: that is a high-mass Drell-Yan σ×BR recast, which by construction cannot do prompt sub-30-GeV resonance scans at B-factories/LHCb — different measurement, different machines, different mass range.

## Level 1 — lit-review split: low-mass dark-photon dilepton scans (multiway on m_ℓℓ)

**Measurement.** The existing BaBar visible search e⁺e⁻→γA′, A′→ℓ⁺ℓ⁻ (arXiv:1406.2980) excludes/probes ε ~ 10⁻⁴–10⁻³ over 0.02–10.2 GeV; the LHCb prompt A′→μμ scan (arXiv:1910.06926) covers 214–740 MeV and 10.6–30 GeV at similar depth, with LHCb Upgrade II projections (compiled in arXiv:1801.04847) pushing to ε ≈ 10⁻⁴ across the full 0.2–70 GeV range. A companion BaBar single-photon (γ + invisible) search covers invisibly decaying A′ up to 8 GeV at ε ~ 10⁻³. Decision: **is a prompt A′ resonance with ε ≳ 10⁻⁴ found, and in which m_ℓℓ band?** For ε ≥ 10⁻⁴ at 1 GeV, cτ ≈ 3.3×10⁻¹⁴ m/ε² ≤ 3 μm — always prompt.

**Per-region predictions** (signal ∝ ε²):

- **m_ℓℓ ≈ 1.0–1.7 GeV band** (17 units): R2, R5, R16, R21, R36 predict ε = 0.03–0.1 — signal 10³–10⁶ × current sensitivity, unmissable (indeed already-excluded territory, i.e. the data in hand *already* discriminates). R3, R10, R18, R25, R26, R37 predict ε ~ 10⁻³–10⁻², at 1–100× BaBar's depth. R27, R29, R30, R33, R38 predict ε ~ 10⁻⁴–5×10⁻⁴, requiring the LHCb Upgrade II depth. R1 (ε spans 4.6×10⁻⁶–0.021, log-mid ≈ 3×10⁻⁴) is assigned here but is genuinely marginal — its low-ε tail belongs on the other branch. R13 and R38 straddle the 10⁻⁴ cut similarly (noted; assigned by log-midpoint). **Caveat:** most of these units sit at M_Z′ = 1.00 GeV, uncomfortably close to the φ(1020) veto windows of the μμ scans; the split there leans on the e⁺e⁻ channel and on the huge (≥10×) signal-to-limit margins of the high-ε units.
- **m_ℓℓ ≈ 4.7 GeV** (R9 alone): ε = 0.1, and since M_Z′ > 2m_DM with α_D ≫ ε²α the A′ decays mostly invisibly (BR_vis ≈ 1%) — but ε²·BR_vis ≈ 10⁻⁴ is still ~100× the visible-search reach, and the γ+invisible channel sees it outright.
- **m_ℓℓ ≈ 14 GeV** (R28 alone): ε = 0.1, BR_vis ≈ 5%; LHCb 10.6–30 GeV window covers it with ~10³ margin.
- **m_ℓℓ ≈ 60 GeV, broad** (R11 alone): ε = 0.1 with g′ = 11.4 and open invisible channel means Γ/M > 1 — not a narrow resonance but a gross distortion of the e⁺e⁻→ff lineshape/contact-interaction fits at LEP-II and high-mass μμ at LHC; ε = 0.1 at 60 GeV is excluded by an order of magnitude, so "seen" is again unconditional.
- **No resonance** (20 units): R0 (no dark photon exists) plus the 19 CsSg regions with ε ≲ 10⁻⁴ (R4, R6, R7, R8, R12, R13, R14, R15, R17, R19, R20, R22, R23, R24, R31, R32, R34, R35, R39).

This is a genuine multiway **Splits!** — it isolates R9, R28, and R11 individually and cleaves the remaining 36 units into two blocks. It also partially separates Lagrangian sign classes as a by-product: the ε ≥ 0.03 subgroup is entirely U1p[+], the 10⁻³–10⁻² subgroup entirely U1p[−] (a sampling accident, but numerically real).

**Why not the alternatives.** Planck p_ann would over-constrain the secluded s-wave channel φφ→Z′Z′ at 1 GeV (predicted σv ~ 2×10⁻²⁵ cm³/s if open vs the CMB bound ~10⁻²⁷), but with M_Z′ ≈ m_DM ≈ 1 GeV the channel's opening is marginal region-by-region — not a clean split. DM self-interactions are hopeless: even α ~ 10 quartics at 1 GeV give σ/m ~ 10⁻⁴ cm²/g, four decades below cluster sensitivity.

## Level 2 — novel experiment 1 (attached to the 20-unit "no resonance" outcome)

**SHiP-class ECN3 beam-dump displaced-A′ search.** All 19 surviving CsSg regions have M_Z′ ≈ 1–1.7 GeV and ε between the scan floor 10⁻⁶ and ~1.2×10⁻⁴. At SPS energies (γ ≈ 100, A′ from proton bremsstrahlung and meson decays, N_A′ ~ 2×10²⁰ POT × ε² × 10⁻²), the lab decay length is γcτ ≈ 3.3×10⁻¹² m/ε²: ε = 10⁻⁵ → 33 m (ideal), ε = 10⁻⁶ → 3.3 km (compensated by ~10³ decays in the volume), ε = 3×10⁻⁷ → still ~10² decays. The sensitivity window [~3×10⁻⁷, ~4×10⁻⁵] therefore covers *every* remaining dark-U(1) region at least partially (marginal at the top edge for R13, ε up to 1.2×10⁻⁴, whose upper end decays inside the dump — the residual uncovered sliver is ε ≈ 4×10⁻⁵–10⁻⁴). A displaced vertex at m(ℓℓ) ≈ 1 GeV has no φ-veto problem and essentially zero background. **R0 has no dark photon and predicts exactly zero vertices** — this is the Lagrangian-level split (Real Scalar Singlet vs all dark-U(1) models). Corroboration for the "nothing" branch: R0 at 94 GeV annihilating to WW/ZZ predicts a possible AMS-02 antiproton and γ continuum signal, while 1-GeV DM is kinematically incapable of producing antiprotons. Bonus: on the "seen" branch, the measured vertex-position distribution (λ ∝ 1/ε²) and rate determine ε to ~10–20%, banding the 19 regions further (ε ≈ 10⁻⁶ floor cluster R4/R15/R17/R19/R22/R23/R24/R31/R32/R34/R35/R39 vs the 10⁻⁵–10⁻⁴ cluster R7/R12/R13/R20/R29-adjacent), though their internal degeneracy in the dark quartics α2–α6 is experimentally inaccessible. Feasibility: this is essentially the approved SHiP program — rating **possible**.

## Level 2 — novel experiment 2 (attached to the 17-unit "1 GeV band" outcome)

**Kilogram-scale sub-GeV cryogenic nuclear-recoil measurement.** For χ–p scattering through the ε-mixed Z′ at m_χ ≈ M_Z′ ≈ 1 GeV: σ_p ≈ 16π α α_D ε² μ²/M_Z′⁴ ≈ 2.6×10⁻³⁵ (ε/0.1)² cm² (α_D = g′²/4π ≈ 7.6×10⁻⁵). The high-ε subgroup R2, R5, R16, R21, R36 (ε ≥ 0.031) predicts σ_p ≥ 2.5×10⁻³⁷ cm²; the rest of the outcome (max: R37 at ε = 3×10⁻³) predicts ≤ 2.3×10⁻³⁹ cm². A cut at **σ_SI ≥ 10⁻³⁸ cm² at m_χ ≈ 1 GeV** has more than a decade of margin on both sides. Only R1 straddles (its rare ε > 0.02 tail crosses the cut; assigned "no" by bulk). The yes-branch is again all U1p[+] and the no-branch mostly U1p[−]. Honesty note: these rates are so large that existing Migdal/CRESST-III limits at 1 GeV (~10⁻⁴¹–10⁻⁴² cm²) would already exclude the yes-branch — evidently the scan's DD recast CSVs did not extend down to 1 GeV — so in practice this "measurement" is decided by data that mostly exists; a dedicated kg-scale CRESST/SuperCDMS-class run makes it a clean measured number. Residual degeneracy inside each branch is largely physical: identical m_DM ≈ 1 GeV, identical pinned α1 ≈ 0.001, differing mainly in ε (measurable, bands the regions) and dark-sector quartics (not measurable).

## What cannot be split, honestly

**U1p[+] vs U1p[−] as sign classes.** The two Lagrangian families are related by φ→φ*, which flips the dark charge together with the signs of α3, α5, and ε. Every rate in direct detection, indirect detection, colliders, and beam dumps is even in the dark-charge sign for a symmetric relic population (particle and antiparticle interference terms cancel in the average), so *no* experiment distinguishes "+1" from "−1" per se; the splits above separate the sampled [+] and [−] *regions* only because their ε magnitudes happen to differ. Any residual [+]/[−] pair with matched (ε, M_Z′, m_DM) — e.g. sub-blocks of the novel-2 "no" branch — is a labeling redundancy of the scan, not a physical degeneracy an experiment can break; I therefore do not attach a speculative experiment to it.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_no_no",
      "lit_review": {
        "name": "Low-mass dark-photon dilepton scans (BaBar, LHCb, LEP)",
        "observable": "prompt A'->ll with eps >~ 1e-4, 0.2-70 GeV: m_ll band ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1801.04847"],
        "reasoning": "The dark-photon sector (MZp, eps) is orthogonal to every catalog observable yet fixes collider A' rates unconditionally (signal ~ eps^2, independent of DM/halo physics). BaBar e+e- -> gamma A'(->ll) probes eps ~ 1e-4-1e-3 over 0.02-10.2 GeV; LHCb prompt mumu covers 0.214-0.74 and 10.6-30 GeV, with Upgrade II projections reaching eps ~ 1e-4 across 0.2-70 GeV. Predictions: the 1.0-1.7 GeV block spans eps = 1e-4-0.1 (the eps >= 0.03 units exceed current limits by 1e3-1e6); R9 (4.7 GeV, eps = 0.1, BR_vis ~ 1% since invisible channel dominates) is seen both promptly and in the gamma+invisible channel; R28 (14.4 GeV, eps = 0.1, BR_vis ~ 5%) sits ~1e3 above LHCb reach; R11 (60 GeV, eps = 0.1, g' = 11.4, Gamma/M > 1) appears as a gross broad lineshape/contact deviation at LEP-II/LHC rather than a narrow peak. The no-resonance branch holds R0 (no dark photon exists) plus the 19 regions with eps <~ 1e-4. Caveats: MZp = 1.00 GeV sits near the phi(1020) veto (mitigated by the e+e- channel and the large margins); R1, R13, R38 straddle the 1e-4 cut and are assigned by log-midpoint. Not a refinement of the catalog Z' dilepton observable, which is a high-mass Drell-Yan recast that cannot do prompt sub-30-GeV resonance scans.",
        "status": "Splits!",
        "outcomes": [
          {"label": "1 GeV band", "regions": ["R1", "R2", "R3", "R5", "R10", "R16", "R18", "R21", "R25", "R26", "R27", "R29", "R30", "R33", "R36", "R37", "R38"]},
          {"label": "4.7 GeV", "regions": ["R9"]},
          {"label": "14 GeV", "regions": ["R28"]},
          {"label": "60 GeV broad", "regions": ["R11"]},
          {"label": "no resonance", "regions": ["R0", "R4", "R6", "R7", "R8", "R12", "R13", "R14", "R15", "R17", "R19", "R20", "R22", "R23", "R24", "R31", "R32", "R34", "R35", "R39"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R4+R6+R7+R8+R12+R13+R14+R15+R17+R19+R20+R22+R23+R24+R31+R32+R34+R35+R39",
          "name": "SHiP-class ECN3 beam-dump displaced-A' search",
          "observable": "displaced ll/hadron vertices at m ~ 0.9-1.8 GeV ?",
          "reasoning": "All 19 surviving dark-U(1) regions have MZp ~ 1-1.7 GeV and eps in [1e-6, ~1.2e-4]; lab decay length gamma*c*tau ~ 3.3e-12 m/eps^2 (gamma ~ 100 at SPS) puts them in the beam-dump window eps ~ 3e-7 to 4e-5: eps = 1e-5 gives 33 m decay length and >1e4 vertices, eps = 1e-6 gives 3.3 km but still ~1e3 decays in a 50 m volume from ~2e20 POT (only R13's upper end, eps ~ 1e-4, decays inside the dump). A displaced 1 GeV dilepton/hadronic vertex is background-free and immune to the phi(1020) veto. R0 (Real Scalar Singlet, no dark photon, sigma_SI ~ 1e-49 cm^2 below the neutrino fog) predicts exactly zero vertices, so this is the Lagrangian-level separation; corroborated by AMS-02 antiprotons, which 94 GeV WW/ZZ annihilation can produce but 1 GeV DM kinematically cannot. On the seen branch, vertex-position distribution and rate measure eps to ~10-20%, banding the eps ~ 1e-6 floor cluster from the 1e-5-1e-4 cluster; the dark quartics alpha2-alpha6 remain unmeasurable.",
          "feasibility": "Closest instrument: SHiP at the CERN BDF/ECN3 facility (approved), whose published dark-photon sensitivity covers eps ~ 1e-7 to few x 1e-5 at masses up to ~2-3 GeV via bremsstrahlung and meson production - improvement factor ~1x, i.e. the proposal is essentially running the approved program with the 0.9-1.8 GeV dilepton/hadronic mass window prioritized. Dominant systematic: muon-flux and neutrino-induced backgrounds in the decay volume faking displaced vertices.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "vertices seen", "regions": ["R4", "R6", "R7", "R8", "R12", "R13", "R14", "R15", "R17", "R19", "R20", "R22", "R23", "R24", "R31", "R32", "R34", "R35", "R39"]},
            {"label": "nothing", "regions": ["R0"]}
          ]
        },
        {
          "attach_to": "R1+R2+R3+R5+R10+R16+R18+R21+R25+R26+R27+R29+R30+R33+R36+R37+R38",
          "name": "Kilogram-scale sub-GeV cryogenic recoil search",
          "observable": "sigma_SI(m_chi ~ 1 GeV) >= 1e-38 cm^2 ?",
          "reasoning": "Chi-p scattering through the eps-mixed 1 GeV Z' gives sigma_p ~ 16 pi alpha alpha_D eps^2 mu^2 / MZp^4 ~ 2.6e-35 (eps/0.1)^2 cm^2 with alpha_D ~ 7.6e-5. The eps >= 0.031 subgroup (R2, R5, R16, R21, R36 - all U1p[+]) predicts sigma_p >= 2.5e-37 cm^2, while the rest of this outcome tops out at 2.3e-39 cm^2 (R37, eps = 3e-3): the 1e-38 cut has over a decade of margin on both sides. Only R1 straddles via its rare eps > 0.02 tail (assigned no by bulk). Existing Migdal/CRESST-III limits at 1 GeV (~1e-41-1e-42 cm^2) already sit far below the yes-branch prediction - the scan's DD recasts evidently did not extend to 1 GeV - so the yes branch is decided quickly; the measurement also returns eps^2*alpha_D, banding the no branch further. Residual no-branch degeneracy is largely physical: identical m_DM ~ 1 GeV and pinned alpha1 ~ 0.001, differing only in eps magnitude and unmeasurable dark quartics.",
          "feasibility": "Closest instruments: CRESST-III (160 MeV threshold demonstrated, ~1e-41 cm^2 at 1 GeV) and SuperCDMS SNOLAB HV (projected ~1e-43 cm^2 at 1 GeV); the required sensitivity of 1e-38-1e-39 cm^2 at 1 GeV is 3+ orders above already-achieved reach, so improvement factor ~1x - the challenge is exposure and overburden shielding for a kg-year run, not resolution. Dominant systematic: low-energy excess backgrounds (stress-induced phonon events) common to all cryodetectors below ~200 eV recoil energy.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R2", "R5", "R16", "R21", "R36"]},
            {"label": "no", "regions": ["R1", "R3", "R10", "R18", "R25", "R26", "R27", "R29", "R30", "R33", "R37", "R38"]}
          ]
        }
      ]
    }
  ]
}
```