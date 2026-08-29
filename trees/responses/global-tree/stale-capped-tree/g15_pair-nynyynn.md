I'll verify the three references I plan to cite, then deliver the full answer in one message.
All three references verify (BaBar dark-photon search 1406.2980 with ε limits 10⁻⁴–10⁻³ over 0.02–10.2 GeV; the Belle II Physics Book 1808.10567 covering dark-sector searches; Batell–Pospelov–Ritz 0903.0363 on secluded U(1) at B-factories). Here is the complete answer.

# Reasoning

## Target leaf `root_no_yes_no_yes_yes_no_no_no` (208 pts, 13 units)

**What the leaf physically is.** Every unit is a complex scalar singlet (or, for none of the listed units, the doublet — the doublet points all went to the sibling context leaf) charged under a dark U(1)′ with kinetic mixing ε, dark coupling gU1p ~ 0.03 (except R5, R10), MDM ≈ 1–2 GeV and MZp ≈ 1–21 GeV. The leaf path pins BR(h→inv) to 0.01–0.032 (so α1 is nearly the same everywhere, ~0.002–0.003 — the Higgs portal is NOT a discriminating axis inside this leaf), and all catalog DD/ID observables are null. What the catalog does NOT probe is exactly the axis along which these 13 units spread over five decades: the kinetically-mixed Z′ itself, at masses of 1–21 GeV, with ε from 10⁻⁶ to 0.1. Our catalog's only collider Z′ handle is the high-mass Drell-Yan dilepton recast, which has no sensitivity to a 1–5 GeV dark photon; sub-10-GeV dark-photon searches at e⁺e⁻ machines are precisely the uncovered measurement. (The 130 scatter singletons are ignored per instructions.)

**Kinematic bookkeeping that drives everything.** For all units except R5 and R10, MZp < 2·MDM, so the Z′ can only decay back to the SM through ε — a *visible*, prompt dark photon (for every "seen" region below, cτ < 1 μm; e.g. R3: cτ ≈ 10⁻⁵ mm). For R10 (MZp = 4.73, MDM = 1.0) the invisible channel is open but with gU1p = 0.30 vs εe = 0.03 the visible fraction is still ~7% (Γ_inv = g′²m/48π·β³ ≈ 2×10⁻³ GeV vs Γ_vis ≈ ε²αm/3 × (2+R+…) ≈ 7×10⁻⁴ GeV), giving BR(μμ) ≈ 4%. For R5 (MZp = 21 GeV) the Z′ is both invisible (BR_vis ~ 10⁻⁵, and Γ/m ≈ 0.7 — gU1p = 10 makes it a very broad state) and kinematically out of B-factory reach.

### Level 1 (lit review): BaBar/Belle II radiative-return dark-photon search, e⁺e⁻ → γA′(→ℓ⁺ℓ⁻)

BaBar (514 fb⁻¹, arXiv:1406.2980) already excludes ε ≳ (a few)×10⁻⁴–10⁻³ for 0.02 < m_A′ < 10.2 GeV; Belle II with 50 ab⁻¹ pushes to ε ~ few×10⁻⁴ (arXiv:1808.10567; production mechanism per arXiv:0903.0363). The search reports one measured quantity — the dilepton peak mass — with resolution ~2–7 MeV, so it not only splits "seen vs not seen" but *bins the seen regions by MZp*, which differs between units by 70–250 MeV ≫ resolution. Predicted signal per region (quoted as ε at the predicted mass, against the ε ≈ 10⁻³ published reach):

- **R1**: peak at 1.00 GeV, ε = 1.5×10⁻³–2.8×10⁻², i.e. 2–800× BaBar's ε² reach → seen.
- **R2**: peak at 1.00 GeV, ε = 0.1, ~10⁴× above reach → seen (blindingly).
- **R3**: peak at 1.254 GeV, ε = 8.9×10⁻³, ε² ≈ 80× above the published limit → seen.
- **R11**: peak at 1.331 GeV, ε ≈ 0.010, ~100× above in ε² → seen. R3 vs R11 are 77 MeV apart — trivially resolved, and they are *different Lagrangians* ([−] vs [+]).
- **R10**: peak at 4.73 GeV with ε²·BR(μμ) ≈ 0.01×0.04 = 4×10⁻⁴ vs sensitivity ~2×10⁻⁷ → seen ~10³× above reach, at a mass no other unit can produce. (A γ+invisible mono-photon signal at σ ~ pb accompanies it as a cross-check — BR_inv ≈ 93%.)
- **R0**: 1.00 GeV, ε ∈ [10⁻⁶, 1.5×10⁻³]. The bulk of the range is far below reach → "no peak". Honest caveat: the top edge exactly abuts R1's bottom edge (the DBSCAN boundary sits at the BaBar limit), so a thin ε-slice of R0 is marginal and could leak into the "peak 1.00 GeV" outcome.
- **R4**: 1.254 GeV, ε ≤ 1.8×10⁻⁴ → ε² ≥ 30× below current limits and ~3× below the 50 ab⁻¹ projection; not seen. This cleanly separates R4 from its near-twin R3 (same Lagrangian, same MDM/MZp, ε differing by ~50×).
- **R5**: no peak, robustly — 21 GeV exceeds √s = 10.58 GeV, and the state is invisible anyway.
- **R6–R9, R12**: ε ≤ 3.3×10⁻⁵ (mostly ~10⁻⁶–10⁻⁵) → ≥10³× below reach in ε²; not seen.

A sharp honesty note for the record: BaBar has *already published* the exclusion of R2, R3, R10, R11 and most of R1. These regions survive our catalog only because the catalog's pp→Z′→ℓℓ recast targets high-mass resonances. So this "split" has partially already fired in the real world — which makes it the most valuable possible first question, not a defect.

This split also separates Lagrangians: R11 and R10 (both CsSg_U1p[+]) each land in their own outcome, and R3 ([−]) is separated from R11 ([+]).

### Level 2 (novel), attached to `R1+R2`: absolute cross-section of the 1.00 GeV peak at Belle II

R1 and R2 predict the same peak mass (1.00 GeV) but occupy disjoint ε ranges — and they are different Lagrangians ([−] vs [+]; the U(1)′ charge sign itself is not directly observable, but here it tracks one-to-one with the ε region). The absolute rate measures ε²: σ(e⁺e⁻→γA′) ≈ (2πα²ε²/s)·ln(s/m_e²)·𝒪(1) ≈ 0.2–0.5 pb at ε = 0.1, so σ×BR(μμ) ≈ 0.05–0.1 pb for **R2** (ε = 0.1 exactly), vs ≤ 0.008 pb for **R1** (ε ≤ 0.028; down to ~2×10⁻⁵ pb at its lower edge). The minimum gap, at the region edges, is (0.1/0.028)² ≈ 13× — far larger than the ~20–30% theory uncertainty on the ε²→rate map from hadronic A′ decay modeling near 1 GeV (ρ/ω/φ region, the dominant systematic). Cut placed at 0.02 pb, inside the gap. With ≥10⁵ signal events at 50 ab⁻¹ even for R1's top edge, statistics are irrelevant; this is a systematics-limited but comfortable factor-13 discrimination. Rated **possible** (existing funded instrument, improvement factor ~1).

### Level 2 (novel), attached to `R0+R4+R5+R6+R7+R8+R9+R12`: Skipper-CCD DM–electron scattering at m_χ ≈ 1 GeV

Within the "no peak" group, R5 is physically unique: gU1p = 10 (α_D ≈ 8) with ε = 0.072. DM–electron scattering via Z′ exchange, σ_e = 16π·α·α_D·ε²·μ_χe²/MZp⁴ (heavy mediator, F_DM = 1), gives:

- **R5**: σ_e ≈ 8×10⁻⁴² cm² at m_χ = 1.008 GeV.
- **R0**: ≤ 6×10⁻⁴⁵ (at its extreme ε top edge; typically ≪).
- **R4**: ≤ 4×10⁻⁴⁷. **R8**: ≤ 3×10⁻⁴⁸. **R6, R7, R9, R12**: 10⁻⁵¹–10⁻⁴⁹.

The Higgs-portal contribution to σ_e is electron-Yukawa suppressed (~10⁻⁵² cm²) and identical across regions (α1 pinned by the leaf's BR(h→inv) window), so σ_e is a *clean* kinetic-mixing probe: a ≥10³× gap between R5 and everything else. Cut at 10⁻⁴² cm². DAMIC-M (funded) projects ~10⁻⁴²–5×10⁻⁴² at 1 GeV and Oscura ~10⁻⁴³; xenon ionization-only analyses already reach ~10⁻⁴²–10⁻⁴³ near 1 GeV, so this split may in fact already be decided by published data — the dedicated Skipper-CCD run makes it definitive. Rated **possible**. (Cross-checks for R5, noted but not drawn: nuclear-recoil σ_p ≈ 7×10⁻³⁶ cm² at 1 GeV, in reach of sub-GeV NR experiments; and no CMB tension since annihilation is s-channel p-wave with χχ→Z′Z′ closed.)

**Residual degeneracy (honest failure).** After both levels, {R0, R4, R6, R7, R8, R9, R12} remain together. These predict *null results everywhere real experiments can look*: visible 1–1.25 GeV dark photon with ε ≤ 1.5×10⁻³ (below B-factory reach; too short-lived for displaced searches at these masses — cτ·γ ≲ cm for ε ≥ 10⁻⁵), σ_e ≤ 10⁻⁴⁴, σ_p ~ 10⁻⁴³ dominated by the leaf-pinned Higgs portal and hence *identical* across the group, and secluded annihilation suppressed. SHiP could catch the ε ≈ (0.3–3)×10⁻⁶ slice at m ≈ 1 GeV (decay length ~10–30 m at SPS boosts) — relevant to R6, R9, R12 bottoms — but R0's three-decade ε range straddles any such cut, so no honest binary exists. Their remaining differences are quartic self-couplings (R12's α2, α4 ~ 10 vs R7's ≤ 0.0025) whose only physical imprint is DM self-scattering at σ/m ~ 10⁻⁴ cm²/g, four orders below cluster bounds, and R4's MDM = 1.68 GeV, measurable only if some signal first appears. I state this as a genuine observational degeneracy rather than invent an unfalsifiable split; the JSON therefore carries the residue inside the novel node's "not seen" outcome.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_yes_yes_no_no_no",
      "lit_review": {
        "name": "BaBar/Belle II radiative-return dark-photon search",
        "observable": "A'->l+l- peak (eps >= 1e-3): none / 1.00 / 1.25 / 1.33 / 4.73 GeV?",
        "refs": ["arXiv:1406.2980", "arXiv:1808.10567", "arXiv:0903.0363"],
        "reasoning": "All units except R5, R10 have MZp < 2 MDM, so the Z' is a prompt visible dark photon; the e+e- -> gamma A'(->ll) peak mass (resolution 2-7 MeV) bins the seen regions by MZp. BaBar 514/fb already excludes eps >~ 1e-3 over 0.02-10.2 GeV; Belle II 50/ab reaches eps ~ few x 1e-4. Predictions: R1 (1.00 GeV, eps 1.5e-3-2.8e-2, 2-800x reach in eps^2), R2 (1.00 GeV, eps=0.1, ~1e4x), R3 (1.254 GeV, eps=8.9e-3, ~80x), R11 (1.331 GeV, eps~0.01, ~100x; 77 MeV from R3, trivially resolved, and different Lagrangian), R10 (4.73 GeV, eps^2 BR(mumu)~4e-4 vs 2e-7 sensitivity, ~1e3x, plus a pb-level gamma+invisible cross-check since BR_inv~93%). No peak: R0 (eps <= 1.5e-3, top edge marginal at the BaBar limit), R4 (eps <= 1.8e-4, >=30x below), R5 (MZp=21 GeV beyond sqrt(s), decays invisibly), R6-R9, R12 (eps <= 3.3e-5, >=1e3x below in eps^2). BaBar has in fact already published exclusion of R2/R3/R10/R11 and most of R1 - these survive our catalog only because its Z'->ll recast targets high-mass Drell-Yan.",
        "status": "Splits!",
        "outcomes": [
          {"label": "peak 1.00 GeV", "regions": ["R1", "R2"]},
          {"label": "peak 1.25 GeV", "regions": ["R3"]},
          {"label": "peak 1.33 GeV", "regions": ["R11"]},
          {"label": "peak 4.73 GeV", "regions": ["R10"]},
          {"label": "no peak", "regions": ["R0", "R4", "R5", "R6", "R7", "R8", "R9", "R12"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2",
          "name": "Belle II absolute A'-peak rate measurement",
          "observable": "sigma x BR(A'->mumu) at 1.00 GeV >= 0.02 pb?",
          "reasoning": "Same peak mass, disjoint eps: the absolute radiative-return rate measures eps^2. R2 (eps=0.1, Lagrangian U1p[+]): sigma x BR(mumu) ~ 0.05-0.1 pb. R1 (eps <= 0.028, U1p[-]): <= 0.008 pb, down to 2e-5 pb at its lower edge. Minimum gap at the region edges is (0.1/0.028)^2 ~ 13x, well beyond the ~20-30% eps^2->rate uncertainty from hadronic A' decay modeling near 1 GeV. Also separates the two Lagrangians of this outcome.",
          "feasibility": "Belle II itself: >=1e5 signal events at 50/ab even at R1's top edge, so statistics are irrelevant; dominant systematic is the hadronic branching model in the rho/omega/phi region (~20-30% on the eps extraction), far smaller than the 13x gap. Improvement factor ~1 over funded hardware.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R2"]},
            {"label": "no", "regions": ["R1"]}
          ]
        },
        {
          "attach_to": "R0+R4+R5+R6+R7+R8+R9+R12",
          "name": "Skipper-CCD DM-electron scattering search",
          "observable": "sigma_e >= 1e-42 cm^2 at m_chi ~ 1 GeV?",
          "reasoning": "sigma_e = 16 pi alpha alpha_D eps^2 mu_e^2 / MZp^4 is a clean kinetic-mixing probe (Higgs-portal contribution is electron-Yukawa suppressed to ~1e-52 and identical across the group since BR(h->inv) pins alpha1). R5 (g'=10, alpha_D~8, eps=0.072, MZp=21 GeV): sigma_e ~ 8e-42 cm^2. All others: <= 6e-45 (R0 extreme top edge) down to 1e-51 (R12), a >=1e3x gap. Cross-checks for R5: sigma_p ~ 7e-36 cm^2 at 1 GeV in sub-GeV nuclear-recoil reach; no CMB conflict (p-wave s-channel, chi chi -> Z'Z' closed). Residue caveat: the 'not seen' side (R0, R4, R6-R9, R12) is a genuine observational degeneracy - identical leaf-pinned Higgs portal, eps below all accelerator and DD reach; only the eps ~ 1e-6 slice (parts of R6, R9, R12) is touchable by SHiP, and R0's three-decade eps range straddles any such cut, so no honest further binary exists.",
          "feasibility": "Closest instruments: DAMIC-M (funded Skipper-CCD, projected sigma_e ~ 1e-42-5e-42 at 1 GeV) and Oscura (~1e-43 proposed); xenon ionization-only analyses already reach ~1e-42-1e-43 near 1 GeV, so the split may already be decided by published data. Required reach 8e-42: improvement factor <~ 3x over current best. Dominant systematic: single/few-electron dark counts and Cherenkov/surface backgrounds.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R5"]},
            {"label": "not seen", "regions": ["R0", "R4", "R6", "R7", "R8", "R9", "R12"]}
          ]
        }
      ]
    }
  ]
}
```