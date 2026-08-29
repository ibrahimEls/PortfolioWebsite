<!-- CsSg_U1p.p_DM.Z2.md -->

# Degeneracy-Breaking Analysis — CsSg_U1p[+]_DM.Z2

## Global physics of this model (why these degeneracies exist)

Three structural facts drive everything below, and they explain *why* the catalog saturates:

1. **Direct detection is purely Higgs-portal.** After U(1)′ breaking the complex singlet splits into two **real** mass eigenstates s_r, s_i. A real scalar has no vector current, so the U(1)′ current is strictly off-diagonal, `Z'^μ (s_r ∂_μ s_i − s_i ∂_μ s_r)`. Z′ exchange therefore does **not** contribute to elastic DM–nucleus scattering. σ_SI is controlled by α1 alone — and indeed along every XLZD-boundary leaf α1/M_DM is nearly constant (α1 ≈ 3.6e-3 at M_DM ≈ 235 GeV; α1 ≈ 0.027 at M_DM ≈ 640 GeV). **This is the root cause of the degeneracies: (ε, M_Z′) are completely unconstrained by the direct-detection legs of the tree**, and are free to roam over 5 decades inside a single leaf.

2. **Annihilation is secluded.** With g_U1p ≈ 0.1–0.47 and M_Z′ ≪ M_DM, the dominant channel is DM DM → Z′Z′ → SM, with ⟨σv⟩ ≈ π α′²/M_DM² (α′ = g_U1p²/4π). For g_U1p = 0.25, M_DM = 200 GeV this is 2.1e-26 cm³/s — thermal. Crucially **the SM composition of the cascade is set by M_Z′ alone, not by ε** (ε only rescales the Z′ width, never its branching ratios). So M_Z′ is readable from the *spectrum* of cosmic-ray secondaries, which is an observable the catalog (gamma-ray channels, solar ν) does not carry.

3. **The dark quartics α2, α3, α4 are unobservable, full stop.** Contact self-scattering gives σ/m ≈ λ²/(64π M³) ≈ **4e-14 cm²/g** for λ = 1, M = 300 GeV — thirteen orders of magnitude below the ~1 cm²/g cluster/dwarf sensitivity. Z′-mediated self-scattering vanishes at tree level (point 1). Wherever two regions differ *only* in α2/α3/α4, I say so and leave them together rather than invent an experiment; that is an honest physical statement about this model, not a failure of imagination.

So the two real handles are **ε** (probed by electroweak precision at large ε, and by dedicated dark-photon searches at small ε) and **M_Z′** (probed by the hadronic composition of the annihilation cascade, and by the mass of any dark-photon resonance found).

Useful formulae used throughout:
- Oblique shift from kinetic mixing: Δρ ≈ ε² s_W² m_Z²/(m_Z² − M_Z′²), Δm_W ≈ 5.75e4 MeV × Δρ, Δs²_eff ≈ −0.33 Δρ. Sign flips for M_Z′ > m_Z. Current m_W precision ≈ ±13 MeV; a Z-pole/W-threshold e⁺e⁻ program targets ±0.5 MeV and ±3e-6 on s²_eff.
- Dark photon width: Γ = (α ε² M_Z′/3)(3 + R_had) ⇒ cτ ≈ 2 cm at M_Z′ = 1 GeV, ε = 1e-6 (scaling as 1/ε²M).
- Radiative-return rate scale used for the proposed Z-factory searches: σ(e⁺e⁻ → γ A′, A′→ℓℓ) ≈ 1 fb at ε = 1e-3 for M_A′ = 10–70 GeV at √s = m_Z, scaling as ε².

---

## Leaf `root_yes_yes_yes_no` (R0, R1)

R0 and R1 are nearly identical in the catalog: both sit at 1–10× XLZD/DarkSide with an IceCube-Gen2-level solar ν flux. Their DM masses overlap (628–655 vs 410–693 GeV) and g_U1p is the same to 10%. What differs by **two orders of magnitude in ε²** is the kinetic mixing: R0 has ε ≤ 3.0e-3 (most points ≲ 1e-3), R1 has ε = 0.011–0.028. M_Z′ is also clean (39.3 vs 58.7 GeV), but a Drell-Yan dilepton resonance is already in the catalog, so I use the *oblique* consequence of the mixing instead — a genuinely different measurement (a precision mass, not a bump hunt), and one that is sensitive to ε² even when the resonance is buried under the DY continuum.

**Numbers.** R0: M_Z′ = 39.3 GeV ⇒ m_Z²/(m_Z²−M′²) = 1.23, Δρ = 0.284 ε² ≤ 2.6e-6, **Δm_W ≤ 0.15 MeV** — below even a Tera-Z-era W-threshold scan. R1: M_Z′ = 58.7 GeV ⇒ factor 1.71, Δρ = 0.395 ε² = 4.7e-5 … 3.1e-4, **Δm_W = 2.7 … 18 MeV** — the upper half of R1 is already in mild tension with today's world average, and all of R1 is a >5σ effect at a 0.5 MeV machine. A 2 MeV threshold separates the two with no overlap and ~18× margin at the R1 lower edge.

Dominant systematic: the SM prediction of m_W is limited by m_t (±0.3 GeV → ±2 MeV) and α_had; the split at 2 MeV is therefore only decisive with a Tera-Z-improved input set. Both regions are fully separated, so no novel node is needed.

---

## Leaf `root_yes_yes_no` (R0–R6, 7 regions)

This is the worst leaf. All seven regions share M_DM ∈ [317, 685] GeV, g_U1p ∈ [0.31, 0.46], α1 ∈ [0.006, 0.022] — i.e. identical σ_SI, identical ⟨σv⟩, identical cascade spectrum to within the spread. M_Z′ overlaps everywhere (15–165 GeV). **The only projection that separates anything is ε**, and even there R0/R1/R2 are broad blobs that straddle any cut.

**Lit split — Z-pole leptonic asymmetries.** Δs²_eff ≈ 0.33 × ε² s_W² × (mass factor):
- **R3** (ε = 0.0133–0.0438, M_Z′ = 34–130): Δs²_eff = 1.6e-5 … 1.7e-4
- **R5** (ε = 0.0178–0.0526, M_Z′ = 29–42): Δs²_eff = 2.7e-5 … 2.4e-4
- **R4** (ε ≤ 1.4e-3): ≤ 1.7e-7. **R6** (ε ≤ 9.6e-5): ≤ 8e-10. Both invisible at any conceivable precision.
- R0, R1, R2 have medians well below the cut but tails reaching ε ≈ 0.06–0.09 (Δs²_eff up to 1.6e-3).

A cut at Δs²_eff = 1.5e-5 — about 5× the projected Z-pole asymmetry precision of a circular Higgs factory, and 10× *below* LEP's ±1.6e-4 — cleanly captures R3 and R5. **I flag this as marginal at the R3 lower edge (1.6e-5, a 1.07× margin) and I flag explicitly that the high-ε tails of R0/R1/R2 will also land in the "yes" branch**; the split is rigorous only for R3, R5 (always yes) and R4, R6 (always no).

**Novel node on R0+R1+R2+R4+R6.** Here ε spans 7e-5 (R6) to 0.09 (R0), and a cut at ε ≈ 2e-4 is clean: R6 tops out at 9.6e-5, while R1 (min 2.5e-4), R2 (min 3.5e-4), R4 (min 4.0e-4) and R0 (min 2.6e-3) all sit above. Translated into a rate: σ(e⁺e⁻ → γ A′, A′→ℓℓ) = 0.05 fb at ε = 2.2e-4. Closest instrument is a Tera-Z run of a circular e⁺e⁻ collider, whose published dark-photon reach is ε ≈ 3–5e-4 over 10–80 GeV; this needs ~2–3× better in ε (≈10× luminosity, plus dimuon mass resolution good enough to cut the γμμ QED continuum). Dominant systematic: the irreducible e⁺e⁻→γμ⁺μ⁻ continuum and beam-energy spread smearing the resonance.

**After both nodes, R0, R1, R2 and R4 remain mutually degenerate, and I claim no experiment can separate them**: their differences are α2 ∈ [0.003, 0.95], α3 ∈ [0.002, 7.7], α4 ∈ [0.001, 1.0], which enter only through self-scattering at σ/m ~ 1e-14 cm²/g.

---

## Leaf `root_yes_no_yes_no` (R0–R3)

Here M_Z′ is genuinely well separated — R3: 2.4–4.5, R1: 7.5–16.2, R2: 34–62, R0: 43–74 GeV — and since the cascade composition depends only on M_Z′, the **antiproton yield per annihilation** is a clean, absolute, non-catalog discriminator. A Z′ below ≈ 5 GeV is essentially incapable of making p̄ (threshold 1.88 GeV, and phase space kills it); a Z′ above ~30 GeV is bb̄/cc̄-dominated and behaves like a hadronic Z decay.

**Numbers.** ⟨σv⟩ ≈ π α′²/M_DM²: R0 (g=0.24, M=185) = 2.2e-26; R1, R2, R3 all within 0.8–3e-26 cm³/s — thermal, so the *rate* does not discriminate, only the *yield*:
- p̄ multiplicity per Z′ decay: R3 (2.4–4.5 GeV) ≈ 0.01–0.05; R1 (7.5–16 GeV) ≈ 0.1–0.3; R2 (34–62 GeV) ≈ 0.6–0.8; R0 (43–74 GeV) ≈ 0.7–0.9 (×2 Z′ per annihilation).
- Translating to the measured ratio: R0/R2 give Δ(p̄/p) ≈ (0.7–1.4)e-5 at T = 10–50 GeV (5–10% of the measured 1.4e-4); R1/R3 give ≤ 2e-6 (≤1.5%).

A 1e-5 threshold splits {R0, R2} from {R1, R3}. **Honest caveat: AMS-02's statistical precision on p̄/p is 2–5%, but secondary p̄ production cross sections and CR propagation carry a 20–40% theory error — this split is currently limited by that systematic and would need the p̄ production cross sections from NA61/SHINE-class measurements to become decisive.**

**Novel node on R0+R2** — these differ only in ε (0.011–0.047 vs 2.6e-4–4.4e-4, a factor 30–180) at M_Z′ = 34–74 GeV, above any B-factory. Proposal: a **high-energy muon-beam A′-strahlung spectrometer** — μN → μN A′(→μμ), σ ∝ ε²α³/M_A′², reconstructing both the resonance and the muon recoil. Closest instrument NA64μ (160 GeV muons, mass reach < 1 GeV, ε ~ 1e-3 invisible-mode); this requires ~1 TeV beam energy and a 100× extension in mass reach → **speculative**.

**Novel node on R1+R3** — M_Z′ = 7.5–16.2 GeV (ε ≥ 6.4e-3) vs 2.4–4.5 GeV (ε ≈ 1.5e-3). Both are above the projected 50 ab⁻¹ B-factory sensitivity of ε ≈ 3e-4, but R1 straddles the √s = 10.58 GeV kinematic ceiling. Proposal: a **high-luminosity e⁺e⁻ "dark-photon factory" at √s ≈ 30 GeV**, so that γ + A′ radiative return covers 1–25 GeV in one machine; the split is then simply the measured resonance mass. Closest instrument SuperKEKB (√s = 10.58 GeV, 50 ab⁻¹); requires a new ring at 3× the energy with comparable luminosity → **unlikely**.

---

## Leaf `root_yes_no_no_yes_no` (R0, R1)

The cleanest leaf in the set. R1 is a **1.0–1.17 GeV dark photon at ε = 1.0–1.33e-6**; R0 is a **0.36–3.4 TeV Z′ at ε = 0.1** with a nearly decoupled dark coupling (g_U1p = 0.003, so its relic/annihilation is Higgs-portal, α1 = 1.8e-3). (Aside: R0 has M_DM = 95.6 GeV > m_h/2 yet a quoted BR(h→inv) = 0.001–0.0032; that has to be an off-shell/cascade assignment in the pipeline, and it does not affect the discriminator below.)

At M_Z′ = 1 GeV, ε = 1e-6 the width is Γ = (αε²M/3)(3+R) ≈ 9.7e-15 GeV ⇒ **cτ ≈ 2.0 cm**. Boosted by γ ≈ 10–100 in LHC production this is a 0.2–2 m decay length — precisely the displaced-dimuon window. R0 produces no low-mass state at all: a TeV-scale Z′ with ε·e ≈ 0.03 is prompt and heavy, and yields exactly zero displaced O(1 GeV) dimuon vertices. The discriminator is therefore a hard yes/no with no marginality in the *physics*; the marginality is experimental — at m = 1 GeV, ε = 1e-6 sits near the upper edge of the displaced-vertex reach (SHiP's 50 m decay volume is too long for cτγ ≈ 2 m; LHCb's 0.1–30 mm vertex window with Upgrade-II statistics is the right instrument, and FASER's 480 m baseline is too far). I cite the two searches that bracket the window.

Fully split; no novel node.

---

## Leaf `root_yes_no_no_no` (R0–R3)

R0 is the outlier: **M_Z′ = 1.0 GeV exactly, and g_U1p = 0.086–0.093** (α′ = 6.4e-4), giving ⟨σv⟩ ≈ π α′²/M² = 2.7e-28 cm³/s — roughly 100× sub-thermal — *and* a mediator below the pp̄ threshold. Its antiproton signal is zero twice over. R1, R2, R3 all have g_U1p = 0.22–0.31 (thermal ⟨σv⟩ ≈ 1.5–2.5e-26 cm³/s) with M_Z′ = 5.5–66 GeV, so they all inject antiprotons.

**Numbers.** Δ(p̄/p) at 10–40 GeV: R0 ≈ 0 (< 1e-9); R1 (M_Z′ = 5.5–21) ≈ 1.5–4e-6; R3 (9–16) ≈ 1.5–3.5e-6; R2 (15–66) ≈ 7e-6–1.1e-5. A 3e-6 threshold (≈2% of the measured ratio) isolates R0. **R1 and R3 are close to the threshold — same systematic caveat as above; this split is solid for R0 vs R2 and marginal for R0 vs R1/R3.**

**Novel node on R1+R2+R3.** ε separates R3 (5.6e-4–1.4e-3) from R1 (5.7e-3–2.8e-2) and R2 (1.6e-3–6.1e-3) with no overlap at ε ≈ 1.5e-3 ⇒ σ(γ + dilepton resonance) = 2.25 fb at a Tera-Z radiative-return search. The margin is thin (R3 max → 1.96 fb, R2 min → 2.6 fb); I state that explicitly. Closest instrument: projected circular-Hig
gs-factory Z-pole reach is ε ≈ 3–5e-4 for M_A′ = 5–70 GeV, so this cut sits *inside* published projections but requires a dedicated Z-pole dark-photon program rather than a parasitic analysis → **unlikely**.

**R1 and R2 remain degenerate after this node.** They differ only in α3 (0.74–7.5 vs 0.042–0.097) and α4 (0.013–0.065 vs 0.0024–0.017); their M_DM (162–238 vs 184–315), g_U1p (0.22–0.27 vs 0.24–0.31) and M_Z′ (5.5–21 vs 15–66) all overlap. Per the global argument, dark quartics are inaccessible at σ/m ~ 1e-14 cm²/g. I make no proposal there.

---

## Leaf `root_no_yes` (R0–R26, 27 regions)

1191 points, and R0 alone holds 841 of them spanning the **entire** parameter box (ε = 1e-6…0.1, M_Z′ = 1.4…134 GeV) — R0 is the bulk blob, not a physically localized region, and it will straddle every cut below. The other 26 regions are small blobs differing almost entirely in ε and in the dark quartics. M_DM (317–710), g_U1p (0.29–0.47) and α1 (0.001–0.015) are common to all, so σ_SI, ⟨σv⟩ and the solar-ν spectrum are shared by construction. **The only ladder available is ε, and I use it at three rungs.**

**Rung 1 — lit, W-mass fit at 0.5 MeV.** Δm_W = 5.75e4 × 0.28 ε² MeV ⇒ 0.5 MeV at ε = 5.5e-3.
- Always above: **R7** (ε = 0.038–0.1 → Δm_W = 23–160 MeV), **R22** (ε = 0.1 → 160 MeV), **R23** (0.046–0.1 → 34–160 MeV), **R4** (0.0051–0.1 → 0.4–160 MeV; its lowest point is right at the cut, flagged).
- Everything else is below, except the tails of R0 (to 0.1) and R2 (to 0.05) and the top of R17 (0.0055) — flagged.
Note that R7, R22, R23 at ε ≈ 0.05–0.1 with M_Z′ = 13–68 GeV are already in gross conflict with the existing ±13 MeV world average; the scan evidently did not impose electroweak precision, which makes this the single highest-value measurement to apply to this leaf.

**Rung 2 — novel, Tera-Z radiative return at 0.05 fb (ε ≈ 2.2e-4).** Above: R0 (bulk), R2 (0.0022–0.050), R3 (3.7e-4–5.2e-3), R9 (3.7e-4–2.3e-3), R12 (2.4–4.0e-4), R17 (0.0021–0.0055), R20 (2.3–3.5e-4), R24 (3.7–4.9e-4), and R8 (7.3e-5–3.1e-4, straddling — assigned above on its bulk). Below: R1, R5, R6, R10, R11 (max 1.8e-4), R13, R14, R15, R16, R18, R19, R21, R25, R26. Same feasibility as the earlier Tera-Z node: 2–3× beyond published Z-pole projections → **unlikely**.

**Rung 3 — novel, muon-collider dimuon lineshape at ε ≈ 1.5e-5.** A narrow s-channel Z′ scanned in the 5–130 GeV window with σ×BR ≈ 0.5 ab. Above: R1 (8.2e-6–9.3e-5), R11 (5.7e-5–1.8e-4), R13 (2.8–6.8e-5), R19 (1.6–4.6e-5), R21 (1.3–5.9e-5), R25 (3.4e-6–3.2e-5; R1 and R25 straddle and are assigned on their bulk). Below, and **permanently degenerate**: R5, R6, R10, R14, R15, R16, R18, R26 — all with ε ≤ 1.2e-5 and identical M_DM/g_U1p, differing only in α2/α3/α4. Feasibility: closest is a 3–10 TeV muon collider whose published dark-photon reach is ε ≈ 3e-4; reaching 1.5e-5 needs ε² 400× smaller, i.e. ~10⁴ in luminosity or a dedicated low-energy scan mode → **speculative**. Dominant systematic: beam-energy spread (Γ_Z′ ~ 1e-10 GeV is utterly negligible against a ~1e-3 √s spread, so the resonance is dilution-limited, not width-limited).

I do not pretend this resolves 27 regions. It resolves them into four ε-ordered groups; within each group the residual differences are dark-sector quartics, which this model makes unobservable.

---

## Leaf `root_no_no_no` (R0–R4)

Nothing is seen anywhere in this leaf, so every discriminator must be built from scratch. The structure is clean:
- **R1**: M_Z′ = 1.0 GeV, ε = 6.4e-4–1.3e-3, M_DM = 139.5–148.4
- **R3**: M_Z′ = 3.4–5.1, ε = 9.6e-6–4.3e-5, M_DM = 170.5–216.3
- **R4**: M_Z′ = 4.3–7.3, ε = 0.021–0.038, M_DM = 225.6–268.1
- **R0**: M_Z′ = 10.2–25.4, ε = 0.021–0.087
- **R2**: M_Z′ = 12.8–20.2, ε = 0.0063–0.094

**Lit split — B-factory γ + dilepton dark-photon search.** Sensitivity ε ≈ 3e-4 (50 ab⁻¹) over 0.5 < m < 9 GeV, i.e. σ(e⁺e⁻→γA′→γℓℓ) ≳ 0.1 fb at √s = 10.58 GeV. R1 (m = 1.0 GeV, ε up to 1.3e-3) is a 4–20× over-threshold signal; R4 (m = 4.3–7.3, ε = 0.021–0.038) is 70–130× over threshold and in fact is already excluded by the existing BaBar limit. R3 sits at m = 3.4–5.1 GeV — squarely inside the acceptance — but at ε ≈ 2e-5, a factor 15 *below* the projected reach, so it is a firm null. R0 and R2 (m > 10 GeV) are above the kinematic ceiling regardless of ε. So: yes = {R1, R4}, no = {R0, R2, R3}. Dominant systematic: the e⁺e⁻→γμμ QED continuum under the peak, and, for R1 at 1 GeV, the ρ/ω resonance region.

**Novel node on R1+R4** — both would be seen by the lit search, so I need an orthogonal observable rather than the same instrument's mass readout. Their **DM masses do not overlap**: 139.5–148.4 vs 225.6–268.1 GeV. With α1 ≈ 0.001–0.0023 at these masses σ_SI is ~1e-48–1e-49 cm², at or under the ⁸B/atmospheric neutrino fog — which is exactly why this leaf is invisible to XLZD. Proposal: a **directional recoil spectrometer** that beats the fog by using head–tail/angular information, measuring the recoil endpoint and hence M_DM to ±15%. A 180 GeV threshold separates them with ~1.2× margin on each side. Closest instrument: XLZD (200 t·yr, non-directional, fog-limited) and CYGNUS (gas TPC, currently ~m³-scale); this needs a fog-piercing exposure ~10–100× beyond any funded program *plus* directionality at 10–100 keV → **speculative**. Dominant systematic: the solar/atmospheric neutrino recoil spectrum itself, which is what forces directionality.

**Novel node on R0+R2+R3** — R0 (ε ≥ 0.021) and R2 (ε ≥ 0.0063) sit 150–2000× in ε² above R3 (ε ≤ 4.3e-5). A Tera-Z radiative-return search at 0.05 fb (ε ≈ 2.2e-4) covering 5–80 GeV catches R0 and R2 with enormous margin and misses R3 by a factor 5 in ε. Same feasibility as the other Tera-Z nodes → **unlikely**.

**R0 and R2 then remain degenerate.** M_Z′ (10.2–25.4 vs 12.8–20.2), M_DM (165–268 vs 142–308), g_U1p (0.227–0.287 vs 0.209–0.307) and ε all overlap; they are separated in the DBSCAN space by α3 (0.087–0.71 vs 1.6–3.9) and α4 (0.0012–0.0038 vs 0.024–0.053) — inaccessible quartics again.

---

## Summary of what could not be broken

Honest bottom line: in this model the experimentally accessible directions are (α1, M_DM) — already exhausted by the catalog — plus **ε** and **M_Z′**. Every residual degeneracy I leave standing (R0+R1+R2+R4 in `root_yes_yes_no`; R1+R2 in `root_yes_no_no_no`; R0+R2 in `root_no_no_no`; eight regions in `root_no_yes`) is a degeneracy in α2/α3/α4 only, and those couplings enter observables solely through a self-interaction cross section ~13 orders of magnitude below any halo constraint. That is a property of a real-scalar dark sector with an off-diagonal U(1)′ current, not a gap in the proposal list.

```json
{
  "model": "CsSg_U1p[+]_DM.Z2",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_yes_no",
      "lit_review": {
        "name": "W-mass electroweak fit",
        "observable": "m_W minus SM prediction >= 2 MeV ?",
        "refs": ["arXiv:1006.0973", "arXiv:1412.0018"],
        "reasoning": "Both regions have identical M_DM, g_U1p and alpha1, so every catalog observable coincides; they differ by ~100x in epsilon^2. Kinetic mixing shifts the oblique rho parameter, Delta_rho = eps^2 s_W^2 m_Z^2/(m_Z^2 - M_Zp^2), and Delta m_W = 5.75e4 MeV x Delta_rho. R0 (M_Zp = 39.3 GeV, mass factor 1.23, eps <= 3.0e-3) gives Delta_rho <= 2.6e-6 and Delta m_W <= 0.15 MeV, below even a 0.5 MeV Tera-Z/W-threshold program. R1 (M_Zp = 58.7 GeV, mass factor 1.71, eps = 0.011-0.028) gives Delta_rho = 4.7e-5 to 3.1e-4 and Delta m_W = 2.7 to 18 MeV; its upper half is already in tension with the current +-13 MeV world average. The 2 MeV cut has ~18x margin at R1's lower edge and ~13x at R0's upper edge. This is not a rerun of the catalog's Z' dilepton recast: it is a precision mass measurement sensitive to eps^2 even when the resonance is invisible under the Drell-Yan continuum. Dominant systematic: the SM m_W prediction is limited by m_t (+-0.3 GeV -> +-2 MeV) and by hadronic alpha, so the cut only becomes decisive with Tera-Z-improved inputs.",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R1"]},
          {"label": "no", "regions": ["R0"]}
        ]
      },
      "novel": []
    },
    {
      "leaf_id": "root_yes_yes_no",
      "lit_review": {
        "name": "Z-pole leptonic asymmetry fit",
        "observable": "sin^2(theta_eff) shift >= 1.5e-5 ?",
        "refs": ["arXiv:1006.0973", "arXiv:1412.0018"],
        "reasoning": "All seven regions share M_DM 317-685 GeV, g_U1p 0.31-0.46 and alpha1 0.006-0.022, hence identical sigma_SI, identical thermal <sigma v> ~ 2e-26 cm^3/s and identical cascade spectra; M_Zp overlaps across 15-165 GeV. Only epsilon separates anything. Kinetic mixing shifts the effective weak mixing angle by Delta_s2eff = 0.33 x eps^2 s_W^2 m_Z^2/(m_Z^2 - M_Zp^2). R3 (eps 0.0133-0.0438) gives 1.6e-5 to 1.7e-4; R5 (eps 0.0178-0.0526) gives 2.7e-5 to 2.4e-4. R4 (eps <= 1.4e-3) gives <= 1.7e-7 and R6 (eps <= 9.6e-5) gives <= 8e-10, both invisible at any conceivable precision. The 1.5e-5 cut is 5x the projected Z-pole asymmetry precision of a circular Higgs factory and 10x below LEP's +-1.6e-4. MARGINAL in two ways, stated openly: R3's lower edge is 1.6e-5, only 1.07x above the cut; and the high-epsilon tails of the broad blobs R0 (to 0.093), R1 (to 0.086) and R2 (to 0.062) reach 6e-4 to 1.6e-3 and will also populate the yes branch. The split is rigorous only for R3/R5 (always yes) and R4/R6 (always no).",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R3", "R5"]},
          {"label": "no", "regions": ["R0", "R1", "R2", "R4", "R6"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R4+R6",
          "name": "Tera-Z radiative-return dark photon search",
          "observable": "sigma(e+e- -> gamma + 10-160 GeV dilepton resonance) >= 0.05 fb ?",
          "reasoning": "Within this branch epsilon still spans 7e-5 (R6) to 0.09 (R0), and a cut at eps = 2.2e-4 is clean with no overlap: R6 tops out at 9.6e-5, while R1 (min 2.5e-4), R2 (min 3.5e-4), R4 (min 4.0e-4) and R0 (min 2.6e-3) all lie above. Using sigma(e+e- -> gamma A', A'->ll) ~ 1 fb at eps = 1e-3 for M_A' = 10-70 GeV at the Z pole, scaling as eps^2, the cut is 0.05 fb. R6's predicted rate is <= 0.01 fb, a factor 5 below. After this node R0, R1, R2 and R4 remain mutually degenerate and no experiment can separate them: they differ only in alpha2 (0.003-0.95), alpha3 (0.002-7.7) and alpha4 (0.001-1.0), which enter observables solely via contact self-scattering at sigma/m ~ 4e-14 cm^2/g, thirteen orders below cluster sensitivity, since Z'-mediated self-scattering vanishes for real scalar mass eigenstates.",
          "feasibility": "Closest instrument: Tera-Z run of a circular e+e- collider, published dark-photon reach eps ~ 3-5e-4 over 10-80 GeV. Required improvement ~2-3x in epsilon, i.e. ~10x integrated luminosity at the Z pole plus dimuon mass resolution sufficient to suppress the continuum. Dominant systematic: irreducible e+e- -> gamma mu+ mu- QED continuum under the peak, plus beam-energy spread smearing the resonance.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R1", "R2", "R4"]},
            {"label": "not seen", "regions": ["R6"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_no",
      "lit_review": {
        "name": "AMS-02 cosmic-ray antiproton flux",
        "observable": "antiproton/proton excess at 10-50 GeV >= 1e-5 ?",
        "refs": ["arXiv:1610.03071", "arXiv:1610.03840"],
        "reasoning": "Annihilation here is secluded, DM DM -> Z'Z' -> SM, so the SM composition of the cascade is fixed by M_Zp alone and is independent of epsilon. The four regions have thermal and nearly equal <sigma v> = pi alpha'^2/M_DM^2 (0.8-3e-26 cm^3/s for g_U1p 0.13-0.30, M_DM 109-301 GeV), so the rate does not discriminate - only the antiproton yield does. A Z' below ~5 GeV essentially cannot make antiprotons (pp-bar threshold 1.88 GeV, and phase space suppresses what is left), while a Z' above ~30 GeV is bb/cc-dominated and behaves like a hadronic Z decay. Antiproton multiplicity per Z' decay: R3 (2.4-4.5 GeV) ~ 0.01-0.05; R1 (7.5-16.2 GeV) ~ 0.1-0.3; R2 (34-62 GeV) ~ 0.6-0.8; R0 (43-74 GeV) ~ 0.7-0.9, doubled for two Z' per annihilation. Predicted excess on the measured p-bar/p ~ 1.4e-4: R0 and R2 give (0.7-1.4)e-5, i.e. 5-10%; R1 and R3 give <= 2e-6, i.e. <= 1.5%. MARGINAL: AMS-02's statistical precision on p-bar/p is 2-5%, but secondary antiproton production cross sections and CR propagation carry 20-40% theory error, so this split is systematics-limited today and needs NA61/SHINE-class p-bar production data to become decisive.",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R0", "R2"]},
          {"label": "no", "regions": ["R1", "R3"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2",
          "name": "TeV muon-beam dark-photon strahlung spectrometer",
          "observable": "sigma(mu N -> mu N A', A' -> mu mu) >= 10 fb ?",
          "reasoning": "R0 and R2 have overlapping M_DM (154-218 vs 154-296 GeV), overlapping M_Zp (43-74 vs 34-62 GeV) and overlapping g_U1p, and differ only in epsilon: 0.011-0.047 versus 2.6e-4-4.4e-4, a factor 30-180 in coupling and 1e3-3e4 in rate. Since A'-strahlung off a muon beam has sigma proportional to eps^2 alpha^3/M_A'^2, a 10 fb threshold sits between them with more than an order of magnitude of margin on each side, and the same event reconstructs the resonance mass from the dimuon pair and cross-checks it against the muon recoil missing mass. Both regions lie above any B-factory kinematic reach, which is why a fixed-target configuration at high beam energy is needed.",
          "feasibility": "Closest instrument: NA64mu at the CERN M2 line, 160 GeV muons, mass reach below ~1 GeV, eps ~ 1e-3 in the invisible mode. This proposal needs ~1 TeV beam energy (6x) and a ~100x extension of the accessible A' mass range to cover 34-74 GeV. Dominant systematic: muon trident and Bethe-Heitler dimuon backgrounds with the same final state, and target-thickness-limited recoil resolution.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "seen", "regions": ["R0"]},
            {"label": "not seen", "regions": ["R2"]}
          ]
        },
        {
          "attach_to": "R1+R3",
          "name": "30 GeV high-luminosity dark-photon factory",
          "observable": "dilepton resonance mass < 6 GeV ?",
          "reasoning": "R1 has M_Zp = 7.5-16.2 GeV at eps = 0.0064-0.047; R3 has M_Zp = 2.4-4.5 GeV at eps = 1.5e-3-1.9e-3. Both couplings are above the projected 50 ab^-1 B-factory sensitivity of eps ~ 3e-4, so both would be produced, but R1 straddles the 10.58 GeV kinematic ceiling of an existing B factory and cannot be covered there. Raising the machine energy to sqrt(s) ~ 30 GeV puts the whole 1-25 GeV window inside radiative-return acceptance, and the split becomes the directly measured resonance mass: R3 yields a peak at 2.4-4.5 GeV, R1 at 7.5-16.2 GeV, with a 1.7x gap on each side of a 6 GeV cut and no overlap.",
          "feasibility": "Closest instrument: SuperKEKB/Belle II, sqrt(s) = 10.58 GeV, 50 ab^-1, visible dark-photon reach eps ~ 3e-4 for m = 1-9 GeV. Required: a new e+e- ring at ~3x the energy with comparable luminosity - a dedicated next-generation machine, not an upgrade. Dominant systematic: the e+e- -> gamma mu+ mu- QED continuum and, at the low-mass end, the light vector meson region.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R3"]},
            {"label": "no", "regions": ["R1"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_no_yes_no",
      "lit_review": {
        "name": "LHCb/FASER displaced dark-photon search",
        "observable": "displaced mu mu vertex, m(mu mu) = 0.9-1.2 GeV, L >= 1 cm ?",
        "refs": ["arXiv:1910.06926", "arXiv:1811.12522"],
        "reasoning": "The two regions are maximally separated in the dark-photon sector. R1 has M_Zp = 1.0-1.17 GeV with eps = 1.0-1.33e-6; its width is Gamma = (alpha eps^2 M_Zp/3)(3 + R_had) = 9.7e-15 GeV, giving c*tau = 2.0 cm, and with LHC boosts gamma = 10-100 the laboratory decay length is 0.2-2 m - exactly the displaced-dimuon window. R0 has M_Zp = 359-3416 GeV at eps = 0.1, i.e. an effective SM coupling eps*e ~ 0.03: prompt, heavy, and producing exactly zero displaced O(1 GeV) dimuon vertices. R0 also has g_U1p = 0.003, so its dark sector is nearly decoupled and its phenomenology is Higgs-portal (alpha1 = 1.8e-3, M_DM = 95.6 GeV). The physics discrimination is absolute; the marginality is instrumental - at m = 1 GeV and eps = 1e-6 the point sits near the upper edge of the displaced reach, too short-lived for a 50 m-baseline beam-dump decay volume and too short for a 480 m forward detector, so the 0.1-30 mm vertex acceptance of a forward LHC spectrometer with Upgrade-II statistics is the right instrument. As an independent cross-check the two regions also differ in M_DM (95.6 vs 62.7 GeV), which a 200 t-yr xenon recoil-spectrum fit could resolve at ~1.5 sigma.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1"]},
          {"label": "not seen", "regions": ["R0"]}
        ]
      },
      "novel": []
    },
    {
      "leaf_id": "root_yes_no_no_no",
      "lit_review": {
        "name": "AMS-02 cosmic-ray antiproton flux",
        "observable": "antiproton/proton excess at 10-40 GeV >= 3e-6 ?",
        "refs": ["arXiv:1610.03071", "arXiv:1610.03840"],
        "reasoning": "R0 is doubly antiproton-free. Its mediator sits exactly at M_Zp = 1.0 GeV, below the 1.88 GeV pp-bar threshold, so the Z'Z' cascade cannot make antiprotons at all; and its dark coupling g_U1p = 0.086-0.093 gives alpha' = 6.4e-4 and <sigma v> = pi alpha'^2/M_DM^2 = 2.7e-28 cm^3/s at M_DM = 235 GeV, about 100x sub-thermal. R1, R2 and R3 all have g_U1p = 0.22-0.31, hence thermal <sigma v> = 1.5-2.5e-26 cm^3/s, with mediators at 5.5-21, 15-66 and 9-16 GeV respectively, all above threshold. Predicted excess on the measured p-bar/p ~ 1.4e-4: R0 < 1e-9; R1 ~ 1.5-4e-6; R3 ~ 1.5-3.5e-6; R2 ~ 7e-6-1.1e-5. The 3e-6 cut (about 2% of the measured ratio) isolates R0 with essentially infinite margin. MARGINAL for R1 and R3, whose predictions straddle the cut within the 20-40% CR propagation and secondary-production theory error; the split is unambiguous only for R0 versus R2.",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R1", "R2", "R3"]},
          {"label": "no", "regions": ["R0"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R3",
          "name": "Tera-Z radiative-return dark photon search",
          "observable": "sigma(e+e- -> gamma + 5-70 GeV dilepton resonance) >= 2 fb ?",
          "reasoning": "Within this branch epsilon orders the regions with no overlap: R3 = 5.6e-4 to 1.4e-3, R2 = 1.6e-3 to 6.1e-3, R1 = 5.7e-3 to 2.8e-2. Using sigma ~ 1 fb at eps = 1e-3 scaling as eps^2, R3 predicts 0.3-1.96 fb, R2 predicts 2.6-37 fb and R1 predicts 32-780 fb. The 2 fb cut therefore separates R3 from R1+R2, but the margin is thin - R3's top point lands at 1.96 fb and R2's bottom at 2.6 fb, a 1.3x gap - and I flag it as marginal rather than clean. R1 and R2 remain degenerate after this node: their M_DM (162-238 vs 184-315), g_U1p (0.22-0.27 vs 0.24-0.31) and M_Zp (5.5-21 vs 15-66) all overlap, and they are distinguished only by alpha3 (0.74-7.5 vs 0.042-0.097) and alpha4 (0.013-0.065 vs 0.0024-0.017), which are inaccessible at sigma/m ~ 4e-14 cm^2/g.",
          "feasibility": "Closest instrument: Z-pole run of a proposed circular e+e- collider, published dark-photon reach eps ~ 3-5e-4 for M_A' = 5-70 GeV, i.e. the 2 fb cut (eps = 1.4e-3) sits inside projected sensitivity but requires a dedicated Z-pole dark-photon program with a full 5-70 GeV mass scan rather than a parasitic analysis. Dominant systematic: e+e- -> gamma mu+ mu- continuum modelling and the mass-dependent look-elsewhere penalty across the scan.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R1", "R2"]},
            {"label": "not seen", "regions": ["R3"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes",
      "lit_review": {
        "name": "Precision W-mass electroweak fit",
        "observable": "m_W minus SM prediction >= 0.5 MeV ?",
        "refs": ["arXiv:1006.0973", "arXiv:1412.0018"],
        "reasoning": "All 27 regions share M_DM 317-710 GeV, g_U1p 0.29-0.47 and alpha1 0.001-0.015, so sigma_SI, <sigma v> and the solar neutrino spectrum are common by construction; R0 alone holds 841 of the 1191 points and spans the entire box (eps 1e-6 to 0.1, M_Zp 1.4-134 GeV), so it is the bulk blob rather than a localised region and will straddle every cut. Epsilon is the only ladder. With Delta m_W = 5.75e4 MeV x 0.28 eps^2, the 0.5 MeV threshold corresponds to eps = 5.5e-3. Always above: R7 (eps 0.038-0.1, Delta m_W = 23-160 MeV), R22 (eps 0.1, 160 MeV), R23 (eps 0.046-0.1, 34-160 MeV), and R4 (eps 0.0051-0.1, 0.4-160 MeV, whose single lowest point sits right at the cut). Everything else predicts < 0.5 MeV, with the flagged exceptions of the tails of R0 (to 0.1) and R2 (to 0.05) and the top of R17 (0.0055). Worth noting: R7, R22 and R23 at eps ~ 0.05-0.1 with M_Zp = 13-68 GeV are already in gross conflict with the existing +-13 MeV world average, so the scan evidently did not impose electroweak precision - which makes this the single highest-value measurement to apply to this leaf.",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R4", "R7", "R22", "R23"]},
          {"label": "no", "regions": ["R0", "R1", "R2", "R3", "R5", "R6", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R18", "R19", "R20", "R21", "R24", "R25", "R26"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R5+R6+R8+R9+R10+R11+R12+R13+R14+R15+R16+R17+R18+R19+R20+R21+R24+R25+R26",
          "name": "Tera-Z radiative-return dark photon search",
          "observable": "sigma(e+e- -> gamma + 3-90 GeV dilepton resonance) >= 0.05 fb ?",
          "reasoning": "Second rung of the epsilon ladder, at eps = 2.2e-4 (0.05 fb using sigma ~ 1 fb at eps = 1e-3, scaling as eps^2). Above the cut: R2 (0.0022-0.050), R3 (3.7e-4-5.2e-3), R9 (3.7e-4-2.3e-3), R12 (2.4-4.0e-4), R17 (0.0021-0.0055), R20 (2.3-3.5e-4), R24 (3.7-4.9e-4), plus the bulk blob R0; R8 (7.3e-5-3.1e-4) straddles and is assigned above on the bulk of its range. Below: R1 (max 9.3e-5), R11 (max 1.8e-4), R13 (max 6.8e-5), R19 (max 4.6e-5), R21 (max 5.9e-5), R25 (max 3.2e-5), and R5, R6, R10, R14, R15, R16, R18, R26 all at or below 1.2e-5. Because M_Zp spans 3-120 GeV across this branch the search must scan the full mass range, not a single window.",
          "feasibility": "Closest instrument: Tera-Z run of a proposed circular e+e- collider, published reach eps ~ 3-5e-4 over 10-80 GeV. Required improvement ~2-3x in epsilon (~10x luminosity) plus extension of the scan down to 3 GeV. Dominant systematic: the e+e- -> gamma ll QED continuum, and beam-energy spread, which dilutes the peak since the Z' width here (Gamma ~ 1e-10 GeV) is utterly negligible against the spread.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R2", "R3", "R8", "R9", "R12", "R17", "R20", "R24"]},
            {"label": "not seen", "regions": ["R1", "R5", "R6", "R10", "R11", "R13", "R14", "R15", "R16", "R18", "R19", "R21", "R25", "R26"]}
          ]
        },
        {
          "attach_to": "R1+R5+R6+R10+R11+R13+R14+R15+R16+R18+R19+R21+R25+R26",
          "name": "Muon-collider narrow dilepton lineshape scan",
          "observable": "s-channel dilepton resonance with sigma x BR >= 0.5 ab ?",
          "reasoning": "Third and final rung, at eps ~ 1.5e-5, reached by scanning sqrt(s) across 5-130 GeV and looking for a dilution-limited s-channel Z' peak in mu+mu- -> ff. Above the cut: R11 (5.7e-5-1.8e-4), R13 (2.8-6.8e-5), R19 (1.6-4.6e-5), R21 (1.3-5.9e-5), plus R1 (8.2e-6-9.3e-5) and R25 (3.4e-6-3.2e-5), which straddle and are assigned on the bulk of their ranges. Permanently below, and I claim genuinely unsplittable: R5 (4.3-9.6e-6), R6 (1.5-4.7e-6), R10 (1.0-3.4e-6), R14 (4.4e-6-1.2e-5), R15 (4.4-6.9e-6), R16 (1.0-1.1e-6), R18 (2.8-9.6e-6), R26 (1.0-1.6e-6). Those eight have identical M_DM and g_U1p and differ only in alpha2/alpha3/alpha4, whose sole observable consequence is contact self-scattering at sigma/m ~ 1e-14 cm^2/g. This node resolves 27 regions into four epsilon-ordered groups and no further.",
          "feasibility": "Closest instrument: a 3-10 TeV muon collider, published dark-photon reach eps ~ 3e-4. Reaching eps = 1.5e-5 needs eps^2 smaller by ~400x, i.e. ~1e4 in integrated luminosity or a dedicated low-energy scan mode with hundreds of scan points. Dominant systematic: beam-energy spread (~1e-3 x sqrt(s)) versus a Z' width of ~1e-10 GeV, so the effective peak is diluted by ~7 orders of magnitude; the measurement is dilution-limited, not width-limited.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "seen", "regions": ["R1", "R11", "R13", "R19", "R21", "R25"]},
            {"label": "not seen", "regions": ["R5", "R6", "R10", "R14", "R15", "R16", "R18", "R26"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_no",
      "lit_review": {
        "name": "B-factory gamma + dilepton dark-photon search",
        "observable": "narrow dilepton resonance, m < 10 GeV, sigma >= 0.1 fb ?",
        "refs": ["arXiv:1406.2980", "arXiv:1808.10567"],
        "reasoning": "Nothing is seen anywhere in this leaf, so every discriminator must be built from scratch, and the dark-photon sector is the only place with structure. A 50 ab^-1 B factory at sqrt(s) = 10.58 GeV reaches eps ~ 3e-4 over 0.5 < m < 9 GeV, i.e. sigma(e+e- -> gamma A' -> gamma ll) ~ 0.1 fb. R1 (m = 1.0 GeV, eps = 6.4e-4-1.3e-3) is a 4-20x over-threshold signal. R4 (m = 4.3-7.3 GeV, eps = 0.021-0.038) is 70-130x over threshold and is in fact already excluded by the existing BaBar limit. R3 (m = 3.4-5.1 GeV) sits squarely inside the acceptance but at eps = 9.6e-6-4.3e-5, a factor 7-30 below the projected reach, so it is a firm null. R0 (m = 10.2-25.4 GeV) and R2 (m = 12.8-20.2 GeV) are above the kinematic ceiling regardless of their large epsilon. Dominant systematic: the e+e- -> gamma mu+ mu- QED continuum under the peak and, for R1 at 1 GeV, the rho/omega resonance region.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1", "R4"]},
          {"label": "not seen", "regions": ["R0", "R2", "R3"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R4",
          "name": "Directional sub-neutrino-fog DM recoil spectrometer",
          "observable": "DM mass from nuclear-recoil endpoint >= 180 GeV ?",
          "reasoning": "Both regions would be seen by the lit-review search, so an orthogonal observable is required rather than the same instrument's mass readout. Their DM masses do not overlap: R1 = 139.5-148.4 GeV, R4 = 225.6-268.1 GeV, giving 1.2x margin on each side of a 180 GeV cut. With alpha1 = 0.001-0.0023 at these masses the Higgs-portal sigma_SI is ~1e-48 to 1e-49 cm^2, at or beneath the B8/atmospheric neutrino fog - which is precisely why this leaf is invisible to a next-generation xenon detector - so the measurement requires a detector that beats the fog using recoil directionality, then fits the recoil endpoint to extract M_DM to about +-15%.",
          "feasibility": "Closest instruments: XLZD-class xenon (200 t-yr, non-directional, fog-limited) and CYGNUS-style gas TPCs (currently ~m^3 scale). Required: fog-piercing exposure ~10-100x beyond any funded programme combined with head-tail directionality at 10-100 keV recoil energies. Dominant systematic: the solar and atmospheric neutrino recoil spectrum itself, which is exactly the irreducible background that forces directionality rather than more exposure.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R4"]},
            {"label": "no", "regions": ["R1"]}
          ]
        },
        {
          "attach_to": "R0+R2+R3",
          "name": "Tera-Z radiative-return dark photon search",
          "observable": "sigma(e+e- -> gamma + 5-80 GeV dilepton resonance) >= 0.05 fb ?",
          "reasoning": "R0 (eps = 0.021-0.087, M_Zp = 10.2-25.4 GeV) and R2 (eps = 0.0063-0.094, M_Zp = 12.8-20.2 GeV) sit 150-2000x above R3 (eps <= 4.3e-5, M_Zp = 3.4-5.1 GeV) in eps^2. At the 0.05 fb threshold (eps = 2.2e-4) R0 predicts 440-7600 fb and R2 40-8800 fb, while R3 predicts <= 0.002 fb, a factor 25 below - an unambiguous split with no straddling, and one that also covers the 10-25 GeV window inaccessible to a B factory. R0 and R2 remain degenerate afterwards: their M_Zp, M_DM (165-268 vs 142-308 GeV), g_U1p and epsilon ranges all overlap, and they are separated only by alpha3 (0.087-0.71 vs 1.6-3.9) and alpha4 (0.0012-0.0038 vs 0.024-0.053), i.e. by inaccessible dark quartics.",
          "feasibility": "Closest instrument: Z-pole run of a proposed circular e+e- collider, published dark-photon reach eps ~ 3-5e-4 over 10-80 GeV; this cut needs ~2x better in epsilon plus extension of the scan down to 5 GeV. Dominant systematic: e+e- -> gamma ll QED continuum and the look-elsewhere penalty over the scanned mass range.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R2"]},
            {"label": "not seen", "regions": ["R3"]}
          ]
        }
      ]
    }
  ]
}
```
