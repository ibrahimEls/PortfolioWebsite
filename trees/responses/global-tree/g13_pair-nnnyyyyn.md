## Leaf `root_no_no_no_yes_yes_yes_yes_no_no` — 112 pts, units R0 and R1

**What the catalog already fixed, and why it is blind here.** Both units are the same Lagrangian (complex scalar singlet, dark charge −1, Z₂₊₃₊₄₊₅), both sit at ε = 0.1, M_Z′ = 1 GeV, g_U(1)′ ≈ 0.03, α₁ ≈ 0.004, and both land in BR(h→inv) ∈ [0.032, 0.1). Every indirect-detection probe on the path is *kinematically or instrumentally blind* at these masses: CTA (WW) and Fermi15yr (WW) require m_DM > m_W ≈ 80 GeV, and IceCube-Gen2 has no reach at 1–2 GeV. The tree therefore records "no ID signal" for both units as a statement about the catalog, not about the physics. The one place where a 1–2 GeV annihilator is *strongly* constrained by a real, published measurement is CMB energy injection — which is not in the catalog and is not a refinement of any split on the path.

**The physical difference between R0 and R1 is the secluded channel's phase space at v → 0.**

- **R0**: M_DM = 1.000 GeV, M_Z′ = 1.000 GeV — the units sit *exactly at the χχ† → Z′Z′ threshold*. The final-state velocity is β_f = √(1 − 4M_Z′²/s) ≃ v_rel/2, so σv ∝ v. At freeze-out (v_rel ≈ 0.5 c) the channel is fully active and sets the relic density; at recombination (v_rel ~ 10⁻⁸ c after kinetic decoupling) it is suppressed by ~10⁻⁸, giving ⟨σv⟩_CMB ≲ 5×10⁻³⁴ cm³/s. The two residual channels do not rescue it: annihilation through the s-channel Z′ is p-wave for a complex scalar coupled to a vector current (the χ†∂↔χ current requires L = 1), and the Higgs-portal channel with α₁ = 0.0045 through an off-shell 125 GeV Higgs into s-quarks/muons gives ⟨σv⟩ ~ 10⁻⁴⁰ cm³/s. Net: p_ann = f_eff⟨σv⟩/m_DM ≲ 10⁻³³ cm³/s/GeV, five orders below any CMB sensitivity.
- **R1**: M_DM = 2.225 GeV > M_Z′ = 1 GeV, so β_f = √(1 − (1/2.225)²) = 0.89 — the secluded channel is wide open and **s-wave** (seagull g²|χ|²Z′Z′ plus t/u-channel). Numerically ⟨σv⟩ ≈ g_D⁴/(16π M_DM²) = (0.0316)⁴/(16π × 4.95 GeV²) = 4.0×10⁻⁹ GeV⁻² ≈ 4.7×10⁻²⁶ cm³/s — i.e. thermal, as it must be since g_U(1)′ is what the scan tuned to hit the relic density. With ε = 0.1 the 1 GeV Z′ decays promptly to e⁺e⁻/μ⁺μ⁻/hadrons, f_eff ≈ 0.25 at m_DM = 2.2 GeV, giving **p_ann ≈ 5×10⁻²⁷ cm³/s/GeV**, about 16× above the Planck 2018 bound p_ann < 3.3×10⁻²⁸ cm³/s/GeV.

So the same measurement — the CMB TT/EE/lowE constraint on injected ionizing energy — reads "signal/excluded" for R1 and "nothing" for R0, with ~4 orders of margin on each side of the cut. R1 is in fact already *excluded* by Planck; that is a legitimate experimental outcome of the split.

**Honest caveats.** (i) The split hinges on the mass ratio M_DM/M_Z′ ≤ 1 in R0 to the ~1% level implied by the printed values. If R0's true ratio were 1.05 rather than 1.000, β_f = 0.31 and p_ann ≈ 2×10⁻²⁷ — still above the bound, and the split would collapse. Conversely, if M_Z′ exceeded M_DM the suppression becomes Boltzmann-exponential and the split strengthens. (ii) The dominant systematic on the measurement side is the f_eff calculation (energy-deposition efficiency of the hadronic component of a 1 GeV dark photon), good to roughly ±30% — irrelevant against a 16× excess.

**Discriminators considered and rejected.** Dark-photon production searches (BaBar e⁺e⁻→γA′, LHCb, NA48/2) cannot split: both units share ε = 0.1 and M_Z′ = 1 GeV. (Worth flagging separately: ε = 0.1 at 1 GeV is already excluded by ~two orders of magnitude by BaBar — this is a scan-boundary artifact affecting both units equally.) Self-interaction bounds from clusters look tempting given α₃ = 10 in R1 vs 0.001–0.004 in R0, but the contact-quartic cross section is σ ≈ α₃²/(64π s) = 0.025 GeV⁻² = 9.8×10⁻³⁰ cm², i.e. σ/m ≈ 2.5×10⁻⁶ cm²/g — five orders below the ~0.1–1 cm²/g cluster bound; the Z′-mediated piece (α_D = 7.9×10⁻⁵) is comparable in both units. No split there. Low-threshold direct detection would resolve 1 vs 2.2 GeV, but that is a refinement of the SuperCDMS/XLZD axis already on the path.

Because the lit-review split fully separates R0 from R1, no novel experiment is required.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_yes_yes_yes_yes_no_no",
      "lit_review": {
        "name": "Planck CMB energy-injection bound on s-wave annihilation",
        "observable": "p_ann = f_eff<sigma v>/m_DM > 3.3e-28 cm^3/s/GeV ?",
        "refs": ["arXiv:1807.06209", "arXiv:1506.03811", "arXiv:1610.02743"],
        "reasoning": "Both units are 1-2 GeV DM with a 1 GeV dark photon, where every catalog ID probe (CTA WW, Fermi15yr WW, IceCube-Gen2) is kinematically or instrumentally blind; CMB energy injection is the one real published probe with reach there. R1 (M_DM=2.225 GeV > M_Zp=1 GeV) has the secluded chi chi -> Zp Zp channel open with beta_f=0.89 and s-wave via the g^2|chi|^2 ZpZp seagull: <sigma v> = g_D^4/(16 pi M_DM^2) = (0.0316)^4/(16 pi x 4.95 GeV^2) = 4.7e-26 cm^3/s (thermal, as required by the relic constraint that fixed g_U1p). The 1 GeV Zp with eps=0.1 decays promptly to e+e-/mu+mu-/hadrons, f_eff ~ 0.25 at 2.2 GeV, so p_ann ~ 5e-27 cm^3/s/GeV, about 16x above the Planck 2018 95% CL bound of 3.3e-28. R0 sits exactly at threshold (M_DM = M_Zp = 1.000 GeV): beta_f ~ v_rel/2, so sigma v ~ v and the rate is suppressed by ~1e-8 between freeze-out (v~0.5c) and recombination (v~1e-8 c), giving <sigma v>_CMB <~ 5e-34 cm^3/s. The residual channels do not rescue R0: s-channel Zp annihilation of a complex scalar through a vector current is p-wave (L=1), and the Higgs portal with alpha1=0.0045 through an off-shell 125 GeV Higgs into s-quarks/muons gives ~1e-40 cm^3/s. So p_ann(R0) <~ 1e-33 cm^3/s/GeV, five orders below the cut. Caveat: the split relies on R0's mass ratio M_DM/M_Zp <= 1 at the ~1% level; at a ratio of 1.05, beta_f=0.31 and p_ann ~ 2e-27 would also exceed the bound, collapsing the split. Dominant systematic is the f_eff energy-deposition efficiency for the hadronic Zp decay component (~30%), negligible against a 16x excess. Rejected alternatives: dark-photon production searches (BaBar/LHCb/NA48) see identical eps=0.1, M_Zp=1 GeV in both units; cluster self-interaction bounds cannot exploit alpha3=10 vs 0.001 because the contact quartic gives only sigma/m ~ 2.5e-6 cm^2/g, five orders below the ~0.1-1 cm^2/g limit.",
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