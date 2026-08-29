I'll verify the references I plan to cite before composing the full answer. First, loading the web tools.
Now verifying the four candidate arXiv references in parallel.
All four references resolve; three match my claims (the LHCb Upgrade II physics case doesn't verifiably cover dark photons in its abstract, so I drop it and keep the three confirmed LHCb dark-photon papers). One important correction from verification: the published Ilten–Soreq–Thaler–Williams–Xue projections claim new displaced-dimuon territory mainly at 210–520 MeV, not at 1–1.6 GeV — so my proposed split rests on the *technique* (which exists and is planned for Run 3+) extrapolated to this mass window, and I flag it as marginal accordingly. Here is the complete deliverable.

---

## Reasoning

### Target leaf `root_no_yes_no_yes_yes_yes_no_yes_yes` (86 pts, units R0, R1)

**What the leaf is physically.** Both units are the *same* Lagrangian — a complex scalar singlet S (components sr, si) charged +1 under a dark U(1)′ — so this is a region–region degeneracy, not a Lagrangian–Lagrangian one. Shared phenomenology fixed by the leaf path: m_DM ≈ 5–6 GeV, m_Z′ ≈ 1.0–1.55 GeV, g′ ≈ 0.042–0.047, Higgs portal α₁ ≈ 0.004–0.006 (hence BR(h→inv) = 3–10%), σ_SI within 10× of DARWIN's projected limit, ⟨σv⟩ within 10× of the CTA b b̄ limit, ε ~ 10⁻⁶. Crucially m_Z′ < 2 m_DM, so the dark photon decays **only visibly**, with width Γ ≈ (α/3) ε² m_Z′ (2+R). That gives cτ ≈ 1.3–2 cm for R1 (ε = 1.0–1.22×10⁻⁶ at m_Z′ = 1.00 GeV) and cτ ≈ 1 mm–2 cm for R0 (ε up to 3.8×10⁻⁶, m_Z′ up to 1.55 GeV).

**Where the regions actually differ.** Comparing the 10-dimensional boxes:
- **Clean gaps (factor 30–1000), but dark-sector-only:** α₄ (si²sr² quartic) = 8.9–10 in R0 vs 0.008–0.035 in R1; α₂ (sr⁴) = 0.001 in R0 vs 0.31–0.59 in R1; α₅ (si³sr) = 0.001 vs 0.082–0.23. These couplings do not touch any SM current at tree level; their only in-principle observable is DM self-scattering.
- **Partial gaps in SM-facing parameters:** ε ∈ [1.0, 3.83]×10⁻⁶ (R0) vs [1.0, 1.22]×10⁻⁶ (R1) — separated except at the shared scan floor 10⁻⁶; m_Z′ ∈ [1.0, 1.55] GeV (R0) vs exactly 1.00 GeV (R1, boundary pile-up); m_DM ∈ [4.91, 5.34] GeV (R0) vs [5.13, 6.23] GeV (R1) — small overlap [5.13, 5.34].
- **No gap at all:** α₁, g′, α₃, α₆ — so every catalog-adjacent rate (h→inv, σ_SI normalization, ⟨σv⟩, secluded SS̄→Z′Z′ strength) overlaps. This is why CMB energy-injection bounds, AMS-02 positrons, dwarf-vs-GC morphology, and solar neutrinos — the usual "new axis" candidates — constrain the *leaf* but cannot *split* it: they measure combinations of (α₁, g′, m_DM) that the two regions share.

**Level-1 choice: measure the dark photon itself.** The (m_Z′, ε) plane is where the regions are most separated among laboratory-accessible parameters. The kinematic regime matters: with cτ ~ mm–cm and lab boosts γ ~ 10–50, the A′ decays centimeters-to-a-meter from its production point. That kills every beam-dump/far-detector option (SHiP, FASER2, DarkQuest need cτγ of order tens of meters here, i.e. ε ≲ 3×10⁻⁷ at 1 GeV — these A′ decay inside the shielding) and every prompt search (LHCb prompt, Belle II γA′ need ε ≳ 10⁻⁴ for rate, since production scales as ε²). The **unique planned probe** of the cm-displacement regime is the LHCb inclusive displaced A′→μ⁺μ⁻ program: proposed in arXiv:1603.08926, demonstrated on data in arXiv:1710.02867 (first displaced-A′ sensitivity, 214–350 MeV) and arXiv:1910.06926 (world-leading displaced limits at O(1 ps) lifetimes — exactly the lifetime scale here), and continuing through Run 3 into the HL-LHC era.

Quantitatively: the resonant enhancement over the off-shell-photon continuum gives N(A′→μμ) ≈ (3πε²/2α)·m·(dN_{γ*→μμ}/dm). With dN/dm ~ 10¹⁰/GeV in LHCb acceptance at 300 fb⁻¹ near m_μμ ≈ 1.3 GeV, R0's upper range (ε ≈ 3.8×10⁻⁶, ε² = 1.5×10⁻¹¹) yields O(10–10²) reconstructed displaced decays with mm–cm vertex separation — plausibly observable over the displaced b→μμX continuum thanks to the narrow mass peak and vertex pointing. R1 (ε² ≤ 1.5×10⁻¹², cτγ up to ~1 m so many decays exit the VELO) sits an order of magnitude below in rate with worse acceptance: not observable. I place the decision cut at ε ≥ 1.5×10⁻⁶ in the 1.0–1.6 GeV window. Predicted values: R0 ε = (1.0–3.8)×10⁻⁶ (bulk above 1.5×10⁻⁶), R1 ε = (1.0–1.2)×10⁻⁶. A discovery also measures m_μμ to ~MeV: any peak above 1.05 GeV identifies R0 independently of ε, since R1 sits exactly at 1.00 GeV.

**Honest marginality, stated plainly.** (i) The published projections claim new displaced territory at 210–520 MeV; the 1–1.6 GeV, ε² ~ 10⁻¹¹ reach is my rate estimate for the same technique at HL-LHC luminosity, not a published contour — I rate the split real but marginal. (ii) The split is one-directional: a *positive* signal at ε ≥ 1.5×10⁻⁶ uniquely selects R0 (R1 cannot produce it), but a *null* result leaves R0's low-ε tail (its interval touches the shared scan floor 10⁻⁶) degenerate with R1. (iii) Dominant systematic at the R1 mass point: the φ(1020)→μμ line sits in the window; the displaced-vertex cut removes the prompt φ but resolution/material-interaction tails must be controlled. Because of (ii), the "not seen" branch is not truly pure, so I attach both novel-experiment nodes there.

**Level-2 novel experiment A — DM mass from the recoil spectrum.** The one remaining SM-facing gap is m_DM: R0 = [4.91, 5.34] GeV vs R1 = [5.13, 6.23] GeV. The leaf already guarantees a DARWIN-observable σ_SI (1–10× its projected limit, i.e. ~3×10⁻⁴⁵–3×10⁻⁴⁴ cm² at these masses), but xenon at 5 GeV sees only the last ~1 keV above threshold — poor for mass reconstruction. A low-threshold Ge/Si phonon experiment (SuperCDMS-HV style, eV-scale thresholds) sees the full recoil spectrum up to the ~4.6 keV kinematic endpoint in Ge, and the threshold-region slope is extremely mass-sensitive at 5 GeV; jointly fitting Ge/Si + xenon events pins m_DM to roughly ±5–10%. Cut: fitted m_DM ≥ 5.4 GeV → R1 (predicted 5.1–6.2 GeV, bulk above cut); < 5.4 GeV → R0 (predicted 4.9–5.34 GeV, entirely below). Marginality: R1's lower edge (5.13 GeV) can be misassigned — roughly one point in three. Feasibility: SuperCDMS SNOLAB projects ~10⁻⁴³–10⁻⁴⁴ cm² sensitivity at 5 GeV; the signal here needs ~3–30× beyond that (larger Ge/Si exposure with the DARWIN signal already anchoring the rate), and the dominant systematic is the halo-model degeneracy (ρ₀, v₀, v_esc trade against m_DM) plus the sub-keV ionization/phonon energy-scale calibration. A dedicated next-generation exposure: rated **unlikely** (in the 3–10× band).

**Level-2 novel experiment B — the only probe of the truly gapped parameters.** The quartics carry the clean 10²–10³ gaps and feed exactly one observable: DM self-scattering. With vertex 4α₄, σ(sr si→sr si)/m ≈ α₄²/(4π m³): R0 (α₄ ≈ 9–10, m ≈ 5.1 GeV) predicts σ/m ≈ 10⁻⁵ cm²/g; R1 (largest quartic α₂ ≈ 0.6) predicts ~10⁻⁷–10⁻⁸ cm²/g. Two-decade separation — but the absolute scale is brutal: merging-cluster and halo-shape analyses currently constrain σ/m ≲ 0.5–1 cm²/g, and even Rubin-LSST-era population statistics of subhalo cores/strong lenses project ~10⁻² cm²/g before baryonic-feedback systematics saturate. Measuring at 10⁻⁶ cm²/g requires ≥10⁴× beyond anything proposed: rated **speculative**, but included because it is the *only* measurement, existing or conceivable, that addresses the parameters in which R0 and R1 genuinely, unambiguously differ.

### Sibling leaf `root_no_yes_no_yes_yes_yes_no_yes_no` (3 pts)
Context only per the brief — no separable units, no answer required.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_yes_yes_yes_no_yes_yes",
      "lit_review": {
        "name": "LHCb inclusive displaced dark-photon search",
        "observable": "displaced mu+mu- peak, 1.0-1.6 GeV, epsilon >= 1.5e-6 ?",
        "refs": ["arXiv:1603.08926", "arXiv:1710.02867", "arXiv:1910.06926"],
        "reasoning": "Both regions host a visibly-decaying dark photon (m_Z' < 2 m_DM) with Gamma ~ (alpha/3) eps^2 m (2+R), giving ctau ~ 1 mm-2 cm: too short-lived for beam dumps (SHiP/FASER2 need eps <~ 3e-7 here), too weakly produced for prompt searches (need eps >~ 1e-4). The only planned probe of this cm-displacement regime is LHCb's inclusive displaced A'->mumu program, already demonstrated with O(1 ps) lifetime sensitivity. Resonant enhancement N(A') ~ (3 pi eps^2 / 2 alpha) m dN_gamma*/dm gives O(10-100) displaced decays at 300 fb^-1 for R0's upper range (eps up to 3.8e-6, eps^2 = 1.5e-11, ctau ~ 1-10 mm), while R1 (eps <= 1.22e-6, ctau ~ 2 cm with decays exiting the VELO) is ~10x below in rate. Predicted eps: R0 (1.0-3.8)e-6, R1 (1.0-1.2)e-6; any peak with m > 1.05 GeV also selects R0 since R1 sits at exactly 1.00 GeV. Marginal and one-directional: published projections cover 210-520 MeV, the 1-1.6 GeV reach is an extrapolated estimate; a null result leaves R0's low-eps tail (interval touches the shared floor 1e-6) degenerate with R1 -- novel nodes attached to the null branch. Dominant systematic: phi(1020)->mumu resolution tails at R1's mass point.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0"]},
          {"label": "not seen", "regions": ["R1"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1",
          "name": "Low-threshold Ge/Si recoil-spectrum mass fit",
          "observable": "m_DM from nuclear-recoil spectrum >= 5.4 GeV ?",
          "reasoning": "The regions' only remaining SM-facing gap is the DM mass: R0 predicts 4.91-5.34 GeV, R1 predicts 5.13-6.23 GeV. The leaf guarantees sigma_SI at 1-10x DARWIN (~3e-45 to 3e-44 cm^2), but xenon at 5 GeV sees only ~1 keV above threshold; an eV-threshold Ge/Si phonon detector sees the full spectrum up to the ~4.6 keV Ge endpoint, where the threshold-region slope pins m_DM to ~5-10% in a joint fit with the DARWIN events. Cut at 5.4 GeV: R0 falls entirely below; R1's bulk lies above, though its lower edge (5.13 GeV) risks misassignment for roughly one point in three.",
          "feasibility": "Closest instrument: SuperCDMS SNOLAB HV Ge/Si (eV-scale phonon thresholds, projected ~1e-43 to 1e-44 cm^2 at 5 GeV). Needs ~3-30x more sensitivity (larger dedicated exposure; the DARWIN signal anchors the rate). Dominant systematics: halo-parameter (rho0, v0, vesc) degeneracy with mass, and sub-keV energy-scale calibration.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R1"]},
            {"label": "no", "regions": ["R0"]}
          ]
        },
        {
          "attach_to": "R1",
          "name": "Halo-population dark-matter self-interaction survey",
          "observable": "sigma_self/m >= 1e-6 cm^2/g ?",
          "reasoning": "The parameters that cleanly separate the regions are dark quartics: alpha4 = 8.9-10 (R0) vs quartics <= 0.6 (R1), a gap invisible to all SM probes except DM self-scattering. sigma/m ~ alpha4^2/(4 pi m^3) predicts ~1e-5 cm^2/g for R0 vs ~1e-7 to 1e-8 cm^2/g for R1 -- a two-decade separation. Concept: population-level inference of subhalo core sizes and halo shapes (strong-lens ensembles plus dwarf stellar kinematics over ~1e5-1e6 systems) to push the astrophysical sigma/m sensitivity floor far below current limits.",
          "feasibility": "Closest capability: merging-cluster and halo-shape analyses (current sensitivity sigma/m ~ 0.5-1 cm^2/g); Rubin-LSST-era population statistics project ~1e-2 cm^2/g before baryonic-feedback systematics dominate. Reaching 1e-6 cm^2/g requires >= 1e4x beyond any proposed program; dominant systematic is degeneracy of feedback-induced cores with self-interaction cores.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0"]},
            {"label": "no", "regions": ["R1"]}
          ]
        }
      ]
    }
  ]
}
```