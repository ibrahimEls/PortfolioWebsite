I'll verify the three arXiv references I plan to cite, then deliver the full answer in one message.
All three references resolve with the expected titles (Planck 2018 VI; Slatyer's f_eff paper; D'Agnolo–Ruderman "Forbidden Dark Matter"). Here is the complete answer.

*(Side note: the claude.ai Gmail/Calendar/Drive connectors in this session need re-authorization via your claude.ai connector settings before they can be used; unrelated to this task.)*

---

## Reasoning — Leaf `root_no_yes_no_yes_yes_yes_no_no_no_no` (75 pts, units R0 and R1)

Both units are the **same** Lagrangian (complex scalar singlet charged +1 under a dark U(1)′, Z₂₊₃₊₄₊₅ pool), so this is a region–region degeneracy. The two regions share essentially identical portal and gauge-sector parameters — α₁ ≈ 0.004 (hence both sit in the same BR(h→inv) = 0.032–0.1 bin), MZ′ = 1 GeV, ε = 0.1, g′ ≈ 0.03 — and differ in exactly one structurally decisive way:

- **R0: M_DM = 1.0 GeV = MZ′.** The secluded channel SS* → Z′Z′ sits exactly at kinematic threshold: the phase-space factor √(1 − MZ′²/M²) → 0 as v → 0. This is the "forbidden dark matter" configuration (D'Agnolo & Ruderman): freeze-out proceeds through the Boltzmann tail at v ≈ 0.3, but today (v ~ 10⁻³) and at recombination (v ≪ 10⁻⁶) the channel is exponentially/kinematically shut off. The residual channels are both negligible: SS* → f f̄ through the s-channel Z′ is p-wave for a scalar pair coupling to a vector (σv ∝ v², suppressed by ≳10⁻¹⁶ at recombination), and the Higgs-portal s-wave SS* → μ⁺μ⁻/hadrons carries α₁² y_f² v_h²/m_h⁴ ~ 10⁻³⁶ cm³/s or less. **Predicted p_ann ≲ 10⁻³¹ cm³ s⁻¹ GeV⁻¹** — invisible to the CMB by ≥3 orders of magnitude.

- **R1: M_DM = 2.225 GeV > MZ′ = 1 GeV, g′ = 0.0316.** The secluded channel is fully open and **s-wave**: σv ≈ (g′⁴/8πM²)·√(1−r²)·O(1) with r = MZ′/M ≈ 0.45, giving σv ≈ (0.5–1)×10⁻²⁵ cm³/s — thermal-relic scale, and velocity-independent, so the same σv operates at recombination. Each 1 GeV Z′ with ε = 0.1 decays promptly and visibly (e⁺e⁻ ≈ 30%, μ⁺μ⁻ ≈ 25%, ππ/hadrons the rest), for which Slatyer's injection-efficiency curves give f_eff ≈ 0.2–0.3 at these energies. **Predicted p_ann = f_eff σv/M ≈ 1×10⁻²⁷ – 1×10⁻²⁶ cm³ s⁻¹ GeV⁻¹**, i.e. a factor ~3 above the Planck 2018 95% bound p_ann < 3.2×10⁻²⁸ in the most conservative normalization, and ~20× in the central one.

**The split: Planck CMB exotic energy-injection (p_ann).** This is a published measurement (Planck 2018 VI, §7.5), channel-inclusive, and free of halo-profile and propagation systematics — the dominant uncertainty is f_eff for the hadronic fraction of Z′ decays, an O(30%) effect that cannot close a ≥3× (typically ~20×) gap. It is genuinely outside the catalog: the catalog's indirect-detection axes are WW and bb recasts (CTA, Fermi, IceCube), all of which are blind here — b b̄ is kinematically closed at 1–2.2 GeV, WW vastly so, CTA has no sensitivity below ~tens of GeV, and the actual final state (4e/4μ/4π through two boosted 1 GeV Z′s) matches none of the templated channels. That blindness is precisely why these two regions landed in the same leaf, and the CMB observable is precisely the channel-agnostic probe that reopens the distinction. Outcome direction: **p_ann bound satisfied (no injection) → R0; injection at ~10⁻²⁷ cm³ s⁻¹ GeV⁻¹ (or exclusion) → R1.** Supporting but unused: Voyager-1/AMS-02 low-energy positrons would also see R1's s-wave 2.2 GeV leptonic annihilation and nothing from R0, but with heliospheric/propagation systematics the CMB does the job more cleanly.

Two honesty notes. First, R0 sits *exactly* at MZ′ = M_DM in the reported ranges; if the true point were even a few percent above threshold, some late-time annihilation reopens — but at recombination velocities the phase-space suppression remains total unless M_DM exceeds MZ′ by more than the ~10⁻⁶ kinetic energy fraction, so the split direction is safe. Second, both regions share the same visible dark photon (MZ′ = 1 GeV, ε = 0.1), so B-factory/fixed-target dark-photon searches (BaBar-type e⁺e⁻ → γZ′) would fire **identically** for both — useful for confirming the Lagrangian against other models, useless for this region split, and in fact ε = 0.1 at 1 GeV is already in tension with existing dark-photon limits (a scan-viability question, not a degeneracy-breaking one). Hence they are not proposed as the split.

The lit-review split fully separates the two units, so no Level-2 novel experiment is attached.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_yes_yes_yes_no_no_no_no",
      "lit_review": {
        "name": "Planck CMB annihilation energy-injection bound",
        "observable": "p_ann = f_eff<sigma v>/m_DM < 3.2e-28 cm^3 s^-1 GeV^-1 ?",
        "refs": ["arXiv:1807.06209", "arXiv:1506.03811", "arXiv:1505.07107"],
        "reasoning": "R1 (M_DM=2.225 GeV > MZp=1 GeV) annihilates s-wave to Z'Z' with sigma-v ~ g'^4/(8 pi M^2) ~ 1e-25 cm^3/s; the 1 GeV Z' (eps=0.1) decays visibly to e+e-/mu+mu-/pions with f_eff ~ 0.2-0.3, giving p_ann ~ 1e-27 to 1e-26 - a factor 3-20 above the Planck 2018 95% bound of 3.2e-28 cm^3 s^-1 GeV^-1. R0 (M_DM = MZp = 1 GeV) is the forbidden-channel configuration: SS*->Z'Z' has zero phase space at recombination velocities, Z'-mediated SS*->ff is p-wave, and the Higgs-portal s-wave is Yukawa- and m_h^4-suppressed (sigma-v <~ 1e-36 cm^3/s), giving p_ann <~ 1e-31 - three-plus orders below the bound. The catalog's ID axes (WW/bb templates at CTA/Fermi/IceCube) are all kinematically or spectrally blind to 4-lepton/4-pion final states at 1-2 GeV, which is why these regions co-inhabit this leaf; the CMB injection bound is channel-inclusive and free of halo/propagation systematics. Dominant uncertainty is f_eff of the hadronic Z' fraction (~30%), far smaller than the discrimination margin.",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R0"]},
          {"label": "no", "regions": ["R1"]}
        ]
      },
      "novel": []
    }
  ]
}
```