I'll verify the arXiv references I plan to cite before composing the single final answer. Loading the web tools first.
All three references verified (titles match: Planck 2018 VI cosmological parameters; Slatyer's f_eff paper; Pospelov–Ritz–Voloshin secluded WIMP paper). Here is the full analysis and JSON.

## Reasoning — Leaf `root_no_yes_no_yes_yes_no_yes_no_no_no_no`

Both units are the *same* Lagrangian (Complex Scalar Singlet charged +1 under a dark U(1)′, Z2+3+4+5 pool), so this is a region–region degeneracy. The parameter cards differ in one physics-defining way:

- **R0**: m_DM = 1.0 GeV, m_Z′ = 1.0 GeV — DM and dark photon exactly degenerate. g′ = 0.029, ε = 0.1, α1 (Higgs portal) = 4.5×10⁻³.
- **R1**: m_DM = 2.225 GeV, m_Z′ = 1.0 GeV — the secluded channel χχ† → Z′Z′ is wide open. g′ = 0.0316, ε = 0.1, α1 = 3.9×10⁻³, α3 = 10.

(A units sanity check: with α1 ≈ 4×10⁻³, Γ(h→SS†) gives BR(h→inv) ≈ 0.05–0.09, exactly this leaf's 0.032–0.1 band, confirming masses are in GeV and both regions sit below every catalog direct-detection threshold — which is why DarkSide/DARWIN/SuperCDMS all say "no" on the path.)

**The discriminator is late-time (CMB-epoch) annihilation — the "CMB injection bound", which is not in the catalog.**

**R1 (open secluded channel):** χχ† → Z′Z′ proceeds in the s-wave through the |S|²Z′Z′ seagull plus t-channel exchange. With r = m_Z′/m_DM = 0.449, σv ≈ (g′⁴/8πm²)·(1−r²)^{3/2}/(1−r²/2)² ≈ 8×10⁻²⁶ cm³/s (g′⁴ = 1.0×10⁻⁶, m² = 4.95 GeV²) — i.e. thermal-scale and velocity-independent, the classic secluded-WIMP configuration (arXiv:0711.4866). Each 1 GeV Z′ decays through the ε = 0.1 kinetic mixing to e⁺e⁻/μ⁺μ⁻/light hadrons; using the injection efficiencies of arXiv:1506.03811, f_eff ≈ 0.2–0.4 for this final-state mix. So p_ann = f_eff⟨σv⟩/m_DM ≈ (0.7–1.5)×10⁻²⁶ cm³ s⁻¹ GeV⁻¹ — a factor ~20–45 **above** the Planck 2018 95% CL bound p_ann < 3.2×10⁻²⁸ cm³ s⁻¹ GeV⁻¹ (arXiv:1807.06209, §7.5). An important robustness point: the large U(1)′-breaking quartics (α3 = 10) split S into two real states with off-diagonal gauge coupling, but the seagull contact term is diagonal, so the s-wave χχ → Z′Z′ rate survives regardless of the mass splitting — the prediction is not an artifact of treating S as unsplit.

**R0 (exactly degenerate, forbidden channel):** with m_DM = m_Z′ the phase-space factor (1−m_Z′²/m_DM²)^{3/2} vanishes as v → 0, so χχ† → Z′Z′ is kinematically *forbidden* at recombination-epoch velocities (v/c ~ 10⁻⁸); it only operated at freeze-out (v/c ~ 0.3). The residual channels are both dead: s-channel Z′ → ff̄ is p-wave for scalar DM (σv ∝ v²), and the Higgs-portal s-wave piece with α1 ≈ 4×10⁻³, far off the h pole at √s = 2 GeV, gives σv ≲ 10⁻³³ cm³/s. So p_ann ≲ 10⁻³³ cm³ s⁻¹ GeV⁻¹ — five-plus orders below the Planck bound.

The split is therefore ~30× above threshold on one side and >10⁵× below on the other — not marginal. The dominant systematic is the f_eff modeling of the hadronic Z′ decay fraction at 1 GeV (ρ/ω/φ resonance region), which moves p_ann by a factor ≲2–3, far smaller than the ~30× margin. Honest caveat: Planck data already exists, so this node is retrodictive — R1 is in fact already in tension with the published bound; as a discriminator that only makes it decisive today, and CMB-S4 / improved low-ℓ polarization tightens it further. A runner-up discriminator (not needed as a node): both regions predict a large Z′-mediated σ_p ~ (2–5)×10⁻³⁵ cm² visible to low-threshold cryogenic detectors, with nuclear-recoil endpoints on oxygen of ~0.8 keV (R0) vs ~3.4 keV (R1); this would give an independent mass-based confirmation via CRESST-III-class instruments.

Since the lit-review split fully separates the two units, no novel-experiment node is required.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_yes_yes_no_yes_no_no_no_no",
      "lit_review": {
        "name": "Planck CMB exotic energy-injection bound",
        "observable": "p_ann = f_eff<sigma v>/m_DM >= 3.2e-28 cm^3 s^-1 GeV^-1 ?",
        "refs": ["arXiv:1807.06209", "arXiv:1506.03811", "arXiv:0711.4866"],
        "reasoning": "R1 (m_DM=2.225 GeV > m_Z'=1 GeV) has the open, s-wave secluded channel chi chi -> Z'Z' via the |S|^2 Z'Z' seagull: sigma v ~ g'^4/(8 pi m^2) x (1-r^2)^{3/2}/(1-r^2/2)^2 ~ 8e-26 cm^3/s with g'=0.0316, r=0.449. The 1 GeV Z' decays through eps=0.1 kinetic mixing to e+e-/mu+mu-/hadrons, f_eff ~ 0.2-0.4 (Slatyer 1506.03811), giving p_ann ~ 1e-26 cm^3/s/GeV, roughly 30x ABOVE the Planck 2018 95% bound p_ann < 3.2e-28 (1807.06209). R0 (m_DM = m_Z' = 1 GeV exactly) has this channel phase-space FORBIDDEN at v->0 ((1-m_Z'^2/m_DM^2)^{3/2}=0); its residual annihilation is p-wave s-channel Z'->ff (sigma v ~ v^2, dead at v~1e-8 c) plus an off-pole Higgs-portal piece with alpha1~4e-3 giving sigma v <~ 1e-33 cm^3/s, so p_ann <~ 1e-33 -- five orders below the bound. The R1 prediction is robust to the large alpha3=10 U(1)'-breaking splitting because the seagull term is diagonal in the split real states. Dominant systematic: f_eff of hadronic Z' decays in the rho/omega/phi region (factor <~3), small vs the ~30x margin. Retrodictive caveat: Planck data already exists, so R1 is already in tension -- the node decides with current data.",
        "status": "Splits!",
        "outcomes": [
          {"label": "injection seen", "regions": ["R1"]},
          {"label": "no injection", "regions": ["R0"]}
        ]
      },
      "novel": []
    }
  ]
}
```