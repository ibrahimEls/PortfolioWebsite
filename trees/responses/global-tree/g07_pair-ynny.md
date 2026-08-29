Verified all five arXiv IDs (titles/authors match). Reasoning first, then the single JSON block.

---

# Physics setup common to both leaves

Both leaves are the same secluded dark-photon WIMP: a complex scalar of dark charge −1 under a Stückelberg U(1)′, kinetically mixed with hypercharge by ε, plus a Higgs portal α₁.

**What is already fixed, and therefore cannot discriminate.**

- `gU1p ≈ 0.202` is pinned in essentially every region. That is the relic-density condition: α_D = g²/4π = 3.25×10⁻³, and for M_Z′ ≪ M_DM the secluded annihilation χχ\*→Z′Z′ gives ⟨σv⟩ ≈ πα_D²/m² = 1.7×10⁻⁹ GeV⁻² = **2.0×10⁻²⁶ cm³/s**, i.e. thermal, for m = 137 GeV. Every region therefore has the *same* annihilation rate into the *same* final state (Z′Z′ → 4 SM fermions with kinetically-mixed branchings ≈ 15% ee, 15% μμ, 15% ττ, 55% hadrons at M_Z′ ≳ 10 GeV). This is why the whole family collapses into one indirect-detection leaf, and it is why no gamma-ray/neutrino observable — in the catalog or out of it — can split these regions.
- σ_SI is Higgs-portal-only in this scan: the LZ split that separates the two sibling leaves is literally a cut on α₁ — leaf `..._yes` has α₁ ∈ [0.0036, 0.0048], leaf `..._no` has α₁ ∈ [0.0025, 0.0036] at m = 136.8 GeV. So α₁ carries no residual information *within* a leaf.
- α₂…α₆ are **pure dark-sector quartics** with no SM leg. They cannot generate masses (no dark vev in the field content), so their only conceivable observable is DM self-scattering: σ/m ≈ λ²/(64π m³) ≈ 4×10⁻¹¹ cm²/g for λ = 10 at m = 137 GeV, against a Bullet-Cluster/relaxed-cluster sensitivity of ~0.1–1 cm²/g. That is **ten orders of magnitude** short. Two regions that differ only in α₂…α₆ are, as far as I can tell, physically indistinguishable by any conceivable experiment. This is the honest limit of both leaves, and it is also why the two *Lagrangians* in leaf `..._no` (Z2 vs Z2+3+4+5) cannot be separated as Lagrangians: they differ only by the odd quartics α₃ sr³si and α₅ sr si³, which are SM-blind. The Z2 units can only be reached through their *parameter values* (they sit at systematically higher M_Z′ and m_DM), which is what my Level-2 nodes exploit.

**What is left: ε, M_Z′, m_DM.** All three of my node types measure one of these in absolute units.

**Caveat worth flagging.** With ε as large as 0.1 and M_Z′ ≈ 15 GeV, Z′ exchange gives a proton-coupled SI cross section σ_p ≈ μ²(g_D εe)²/(π M_Z′⁴) ≈ 8×10⁻³⁸ cm², ten orders of magnitude above the σ_SI the scan reports for these same points. The scan's direct-detection numbers are evidently Higgs-portal-only, i.e. the kinetic mixing is not propagating into the micrOMEGAs nucleon amplitude. If that vertex were included, every ε ≳ 10⁻⁶ region here would already be excluded. I have written the proposals for the model as specified (ε enters only the Z′'s SM couplings/decays), but this should be checked before any of it is quoted.

---

# Leaf `root_yes_no_no_yes_yes` (499 pts, 21 units, all CsSg_U1p[+]_DM.Z2+3+4+5)

All 21 units are one Lagrangian, so only regions are on the table. m_DM = 136.8 GeV in 15 of 21 units; M_Z′ clusters at 13–22 GeV; the discriminating spread is in **ε: 10⁻⁶ → 0.1, five decades**.

### Level 1 — dark photon in Z → 4ℓ

The one existing, non-catalog measurement with real teeth at M_Z′ = 10–30 GeV and ε ~ 10⁻²–10⁻¹ is the rare-Z decay Z → ℓ⁺ℓ⁻A′(→ℓ⁺ℓ⁻): production ∝ ε², A′ branching ε-independent, so BR(Z→4ℓ with a narrow 10–30 GeV pair) ∝ ε². Curtin–Essig–Gori–Shelton (1412.0018) project HL-LHC 95% reach at ε ≈ 10⁻²  for m_Zd = 10–35 GeV, which corresponds to BR ≈ 10⁻⁹ against the SM Z→4ℓ continuum of 4.5×10⁻⁶; the LEP-based model-independent bound ε < 0.03 (1006.0973) already brackets the top of the range. This is *not* the catalog's pp→Z′→ℓℓ σ×BR recast: different production (on-shell Z decay), different mass window, different background.

Predicted BR ∝ ε², anchored on 10⁻⁹ at ε = 10⁻²:

- ε = 0.1 (R14, R15, R17, R19; log-centres of R2, R4, R5, R6, R9, R13, R18 all 0.06–0.08) → BR ≈ 10⁻⁷: a several-hundred-event 4ℓ peak at HL-LHC. Loud.
- ε ≈ 0.02–0.04 (R0 0.029, R1 0.041, R3 0.043, R20 0.030, R7 0.021) → BR ≈ 4×10⁻⁹–2×10⁻⁸. Seen.
- ε ≈ 0.011–0.013 (R16, R11) → BR ≈ 1.2–1.7×10⁻⁹. **Marginal** — these two sit within 30% of the projected threshold and are the weak point of the split.
- ε ≈ 0.0067 (R12) → BR ≈ 4×10⁻¹⁰; ε ≈ 0.0019 (R8) → 4×10⁻¹¹; ε ≈ 10⁻⁶ (R10) → 10⁻¹⁷. Invisible, now and ever.

**Splits 18 vs 3.** Straddling regions (R0 spans 0.0085–0.1, R1 0.017–0.1, R3 0.019–0.1) are assigned by their log-midpoint, all comfortably above the cut; R7, R11, R16 are the honest marginals.

### Level 2a — the 18 seen regions: Tera-Z dark-photon mass

Once a 4ℓ peak exists, the resonance mass is the only remaining lever, but HL-LHC would have ~5 events at threshold. A Tera-Z run (FCC-ee/CEPC, 10¹² Z vs ~10¹⁰ usable at HL-LHC) localises m(ℓℓ) to ≪0.1 GeV even at ε ~ 0.01. M_Z′ log-centres: R1 19.8, R9 18.3, R19 17.6, R20 19.2 GeV → above 17 GeV; R5 10.5, R16 10.9, R18 13.8, R6 14.6, R4 14.8, R2 15.0, R17 15.6, R3 15.7, R14 15.8, R11 15.9, R15 16.1, R0 16.2, R13 16.4, R7 16.7 GeV → below. The split is real but **marginal for R0, R7, R13, R15** (within 1 GeV of the cut, and R0 itself spans 12–22 GeV). The 14 regions below the cut cluster inside 14–17 GeV with identical m_DM, α₁, g_D — they differ *only* in α₂…α₆ and are, per the argument above, terminally degenerate.

### Level 2b — the 3 unseen regions: displaced GeV dimuon

R10 is the outlier of the whole leaf: m_DM = 288–308 GeV, M_Z′ = 1.0–1.6 GeV, g_D = 0.033–0.057, ε ≈ 10⁻⁶. Its dark photon is *long-lived*: Γ = (α ε² M_Z′/3)·N_eff with N_eff ≈ 4.2 at 1.3 GeV gives Γ = 1.5×10⁻¹⁴ GeV, i.e. **cτ ≈ 1.3 cm** — a macroscopic, vertexable displacement with a 1–2 GeV dimuon mass. R8 (M_Z′ = 17–38 GeV, ε ≈ 0.002) and R12 (M_Z′ ≈ 15.4 GeV, ε ≈ 0.007) give cτ < 10⁻⁸ cm: prompt, and at masses ≥ 15 GeV. So the signature is qualitatively different, not just quantitatively. R8 and R12 remain mutually degenerate (they differ by a factor ~3 in ε and a factor ~1.5 in M_Z′, both far below any proposed sensitivity at these ε).

---

# Leaf `root_yes_no_no_yes_no` (630 pts, 16 units, two Lagrangians)

Same structure, weaker Higgs portal (α₁ = 0.0025–0.0036, hence LZ-blind). Here ε spans **1.4×10⁻⁶ to 0.1** with a clean gap, and m_DM spans 109–301 GeV. Four units (R7, R13, R14, R15) are the Z2 Lagrangian; as argued above they are not separable *as Lagrangians*, only through the fact that they populate higher M_Z′ (R7: 43–74 GeV, R14: 34–62 GeV) and higher m_DM (R14, R15: up to ~300 GeV) than the Z2+3+4+5 bulk.

### Level 1 — same Z → 4ℓ dark-photon search, cut BR ≥ 10⁻⁹ (ε ≈ 10⁻²)

ε log-centres split with a factor-4 gap on either side of the threshold:

- Seen: R9 0.074, R3 0.051, R2 0.033, R5 0.025, R7 0.023, R0 0.022, R6 0.019, R13 0.017, R4 0.017 → BR ≈ 3×10⁻⁹ to 5×10⁻⁸. Note R7's dark photon at 43–74 GeV is phase-space suppressed in Z decay (M_Z′ + m_ℓℓ < m_Z); its ε ≈ 0.023 buys that back only partly, so R7 is the marginal member of this group.
- Not seen: R8 4.4×10⁻³ (BR ≈ 2×10⁻¹⁰), R15 1.7×10⁻³, R1 1.1×10⁻³, R10 9.0×10⁻⁴, R14 3.4×10⁻⁴, R11 4.5×10⁻⁵, R12 1.6×10⁻⁶ → BR ≤ 2×10⁻¹⁰, down to 10⁻¹⁷. R1 spans 2×10⁻⁵–0.057 and is the one genuinely ambiguous unit; its 28-point bulk sits at low ε and m_DM = 136.8, so I place it below.

**Splits 9 vs 7**, and it puts Z2 units on both sides (R7, R13 seen; R14, R15 unseen) — confirming that this observable tracks ε, not the Lagrangian.

### Level 2a — the 9 seen regions: resonance mass ≥ 30 GeV

M_Z′ log-centres: R7 56.5 GeV (Z2) and R2 36.1 GeV are above; R0 13.9, R3 15.0, R4 16.1, R5 14.4, R6 14.8, R9 16.5, R13 11.0 GeV are all in the narrow 11–17 GeV band below. This is the one node in either leaf that isolates a **Z2 unit (R7) from the Z2+3+4+5 units**, which is the most valuable split available here. R2 spans 21.5–60.5 GeV and straddles the cut — flagged. The seven low-mass regions remain degenerate (identical m_DM = 136.8, overlapping M_Z′, differing only in dark quartics).

### Level 2b — the 7 unseen regions: WIMP mass from the xenon recoil spectrum

These regions have m_DM spread over 109–301 GeV, and the leaf *does* have a direct-detection signal (XLZD and DarkSide positive). The mean nuclear-recoil energy in xenon, ⟨E_R⟩ ≈ E₀r with E₀ = ½m_χv₀² and r = 4m_χm_N/(m_χ+m_N)² (v₀ = 220 km/s, m_N = 122 GeV), is a spectrum-shape observable orthogonal to the rate cuts already on the path:

- R11, m = 108.8 GeV → ⟨E_R⟩ ≈ **29 keV**
- R1, R10, m = 136.8 GeV (bulk) → **37 keV**
- R8, m = 166–179 GeV → **45 keV**
- R14, m log-centre 213 GeV (Z2) → **53 keV**
- R15, m log-centre 253 GeV (Z2) → **58 keV**
- R12, m = 300 GeV → **66 keV**

A cut at 50 keV separates {R12, R14, R15} from {R1, R8, R10, R11}, and incidentally lands two of the four Z2 units on one side. Established mass-reconstruction studies (Green 0805.1704; Pato et al. 1012.3458) show a factor-1.8 mass ratio at m > 100 GeV needs O(100) recoils and benefits strongly from the Xe+Ar combination this leaf already provides — with a signal only 1–10× the XLZD limit (≈3–30 events) it is *not* achievable at XLZD alone, which is why I file it as a Level-2 proposal rather than a literature split. Residual degeneracies: R1 vs R10 (identical m_DM = 136.8; differ only in M_Z′ 15.7–44 vs 15.7 GeV and ε, both far below reach) and R14 vs R15 vs R12.

---

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_no_yes_yes",
      "lit_review": {
        "name": "HL-LHC Z->4l dark-photon search",
        "observable": "BR(Z->4l, narrow 10-30 GeV l+l- pair) >= 1e-9 ?",
        "refs": ["arXiv:1412.0018", "arXiv:1006.0973"],
        "reasoning": "All 21 units share g_D=0.202 (relic-fixed, <sigma v>=2e-26 cm3/s into Z'Z') and alpha1~0.004 (DD-fixed), so the only free SM-facing handles are epsilon, M_Z' and m_DM. Z -> l+l- A'(->l+l-) is production-proportional-to-epsilon^2 with an epsilon-independent A' branching, giving BR ~ 1e-9 (epsilon/0.01)^2 for M_A'=10-30 GeV; HL-LHC reach is epsilon ~ 1e-2 (BR ~ 1e-9) against the SM Z->4l continuum of 4.5e-6. Predicted BR: ~1e-7 for the epsilon=0.1 regions (R14,R15,R17,R19 and the log-centres of R2,R4,R5,R6,R9,R13,R18 at 0.06-0.08); 4e-9 to 2e-8 for R0(0.029), R1(0.041), R3(0.043), R20(0.030), R7(0.021); 1.2-1.7e-9 for R16 and R11 (MARGINAL, within 30% of threshold); 4e-10 for R12, 4e-11 for R8, 1e-17 for R10. This is not the catalog pp->Z'->ll recast: different production, mass window and background. R0/R1/R3 straddle the cut and are assigned by log-midpoint.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R9", "R11", "R13", "R14", "R15", "R16", "R17", "R18", "R19", "R20"]},
          {"label": "not seen", "regions": ["R8", "R10", "R12"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R9+R11+R13+R14+R15+R16+R17+R18+R19+R20",
          "name": "Tera-Z dark-photon mass spectroscopy",
          "observable": "m(l+l-) resonance >= 17 GeV ?",
          "reasoning": "Given a 4l peak, only its mass discriminates. M_Z' log-centres: R1 19.8, R20 19.2, R9 18.3, R19 17.6 GeV (above); R7 16.7, R13 16.4, R0 16.2, R15 16.1, R11 15.9, R14 15.8, R3 15.7, R17 15.6, R2 15.0, R4 14.8, R6 14.6, R18 13.8, R16 10.9, R5 10.5 GeV (below). R0, R7, R13, R15 sit within 1 GeV of the cut and are marginal; R0 alone spans 12-22 GeV. The 14 regions below the cut have identical m_DM=136.8 GeV, alpha1 and g_D and differ only in the dark quartics alpha2-alpha6, whose sole observable is self-scattering at sigma/m ~ 4e-11 cm2/g versus ~0.1-1 cm2/g cluster sensitivity: terminally degenerate.",
          "feasibility": "Closest instrument: HL-LHC Z->4l, which at the discovery threshold yields ~5 events and cannot localise the resonance mass. FCC-ee/CEPC Tera-Z delivers 1e12 Z versus ~1e10 usable at HL-LHC (x100 statistics) with dimuon mass resolution ~50 MeV, giving sub-0.1 GeV mass determination even at epsilon ~ 0.01. Requires a dedicated next-generation lepton collider. Dominant systematic: SM Z->4l continuum shape under a narrow peak, plus muon momentum-scale calibration at the 1e-4 level.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R1", "R9", "R19", "R20"]},
            {"label": "no", "regions": ["R0", "R2", "R3", "R4", "R5", "R6", "R7", "R11", "R13", "R14", "R15", "R16", "R17", "R18"]}
          ]
        },
        {
          "attach_to": "R8+R10+R12",
          "name": "Displaced GeV-scale dimuon vertex search",
          "observable": "displaced m(mu mu) = 1-2 GeV with ctau ~ 1 cm ?",
          "reasoning": "R10 is the qualitative outlier: m_DM=288-308 GeV, M_Z'=1.0-1.6 GeV, g_D=0.033-0.057, epsilon~1e-6. Its dark photon width Gamma=(alpha eps^2 M_Z'/3)*N_eff with N_eff~4.2 at 1.3 GeV is 1.5e-14 GeV, i.e. ctau = 1.3 cm - a macroscopic, vertexable displacement carrying a 1-2 GeV dimuon mass. R8 (M_Z'=17-38 GeV, eps~0.002) and R12 (M_Z'~15.4 GeV, eps~0.007) give ctau < 1e-8 cm: prompt, and at masses above 15 GeV. The signature differs in kind, not degree. R8 and R12 remain mutually degenerate (factor ~3 in epsilon, ~1.5 in M_Z', both far below any proposed reach).",
          "feasibility": "Closest instrument: the LHCb long-lived dark-photon search, which covers only 214 < m(A') < 350 MeV and reaches epsilon ~ 1e-5 there; the prompt-like arm covers 10.6 MeV-70 GeV but is blind to ctau ~ 1 cm. Extending the displaced arm to 1-2 GeV at epsilon = 1e-6 needs ~100x more signal rate (eps^2) on top of the lower Drell-Yan-like production at 1.3 GeV; LHCb Upgrade II supplies ~10x luminosity, leaving a >10x shortfall requiring a dedicated soft-displaced-dimuon trigger and vertex detector. Dominant systematic: heavy-flavour displaced dimuon background (b/c -> mu mu X) at exactly this mass and flight distance.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R10"]},
            {"label": "no", "regions": ["R8", "R12"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_no_yes_no",
      "lit_review": {
        "name": "HL-LHC Z->4l dark-photon search",
        "observable": "BR(Z->4l, narrow 10-80 GeV l+l- pair) >= 1e-9 ?",
        "refs": ["arXiv:1412.0018", "arXiv:1006.0973"],
        "reasoning": "As in the sibling leaf, g_D and alpha1 are fixed by relic density and by the leaf's own DD path (alpha1 = 0.0025-0.0036), so epsilon is the discriminator; here it spans 1.4e-6 to 0.1 with a factor-4 gap around 1e-2. BR ~ 1e-9 (epsilon/0.01)^2. Seen: R9 (eps 0.074, BR ~5e-8), R3 (0.051), R2 (0.033), R5 (0.025), R7 (0.023), R0 (0.022), R6 (0.019), R13 (0.017), R4 (0.017) -> BR 3e-9 to 5e-8. Not seen: R8 (4.4e-3, BR ~2e-10), R15 (1.7e-3), R1 (1.1e-3), R10 (9.0e-4), R14 (3.4e-4), R11 (4.5e-5), R12 (1.6e-6) -> BR <= 2e-10. Two honest caveats: R7's dark photon at 43-74 GeV is phase-space suppressed in Z decay, so it is the marginal member of the seen group; and R1 spans eps = 2e-5 to 0.057, placed below the cut because its 28-point bulk sits at low epsilon and m_DM = 136.8 GeV. Note this observable tracks epsilon, not the Lagrangian: Z2 units appear on both sides (R7, R13 seen; R14, R15 unseen). The Z2 and Z2+3+4+5 Lagrangians differ only by the odd dark quartics alpha3 sr^3 si and alpha5 sr si^3, which have no SM leg and cannot be separated as Lagrangians by any measurement; only their parameter values can be reached.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0", "R2", "R3", "R4", "R5", "R6", "R7", "R9", "R13"]},
          {"label": "not seen", "regions": ["R1", "R8", "R10", "R11", "R12", "R14", "R15"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2+R3+R4+R5+R6+R7+R9+R13",
          "name": "Tera-Z dark-photon mass spectroscopy",
          "observable": "m(l+l-) resonance >= 30 GeV ?",
          "reasoning": "M_Z' log-centres: R7 56.5 GeV (the Z2 Lagrangian) and R2 36.1 GeV are above the cut; R9 16.5, R4 16.1, R3 15.0, R6 14.8, R5 14.4, R0 13.9, R13 11.0 GeV are all inside a narrow 11-17 GeV band below it. This is the only node in either leaf that isolates a Z2 unit from the Z2+3+4+5 units, which is the most valuable split available here. R2 spans 21.5-60.5 GeV and straddles the cut - flagged as marginal. The seven low-mass regions share m_DM = 136.8 GeV (R13 and R3 extend to ~200 GeV in a few points) and overlapping M_Z', and differ otherwise only in dark quartics: not separable.",
          "feasibility": "Closest instrument: HL-LHC Z->4l (1412.0018), whose reach degrades sharply above m_A' ~ 35 GeV from phase space, exactly where R7 and R2 sit. FCC-ee/CEPC Tera-Z supplies 1e12 Z (x100 over usable HL-LHC statistics), which recovers the phase-space-suppressed 40-75 GeV window and measures the mass to <0.1 GeV. Requires a dedicated next-generation lepton collider. Dominant systematic: modelling of the SM Z->4l continuum in the soft-lepton corner of phase space where the recoiling l+l- pair is nearly collinear.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R2", "R7"]},
            {"label": "no", "regions": ["R0", "R3", "R4", "R5", "R6", "R9", "R13"]}
          ]
        },
        {
          "attach_to": "R1+R8+R10+R11+R12+R14+R15",
          "name": "Xenon recoil-spectrum WIMP mass fit",
          "observable": "mean nuclear-recoil energy (5-100 keV) >= 50 keV ?",
          "reasoning": "This leaf has a live DD signal (XLZD and DarkSide positive), and its unseen-epsilon regions spread over m_DM = 109-301 GeV. The mean recoil energy <E_R> ~ E0*r, with E0 = 0.5 m_chi v0^2 (v0 = 220 km/s) and r = 4 m_chi m_N/(m_chi+m_N)^2 for m_N(Xe) = 122 GeV, is a spectrum-shape observable orthogonal to the rate thresholds already on the path: R11 (109 GeV) -> 29 keV; R1 and R10 (136.8 GeV) -> 37 keV; R8 (166-179 GeV) -> 45 keV; R14 (log-centre 213 GeV, Z2) -> 53 keV; R15 (253 GeV, Z2) -> 58 keV; R12 (300 GeV) -> 66 keV. A 50 keV cut separates {R12,R14,R15} from {R1,R8,R10,R11} and puts two of the four Z2 units on one side. Residual degeneracies: R1 vs R10 (both m_DM = 136.8 GeV) and R14 vs R15 vs R12.",
          "feasibility": "Closest instrument: XLZD (60-80 t, ~200 t.yr) plus argon from DarkSide. With sigma_SI only 1-10x the XLZD 90% CL limit the yield is ~3-30 recoils, whereas published mass-reconstruction studies (0805.1704, 1012.3458) show a factor-1.8 mass ratio above 100 GeV needs O(100) events and benefits strongly from the Xe+Ar combination this leaf already provides. Required improvement: 3-10x exposure beyond XLZD, or a signal at the top of the allowed band. Dominant systematic: halo velocity distribution (v0 and v_esc uncertainties shift <E_R> by ~10%, comparable to the 137-vs-213 GeV separation), followed by the nuclear-recoil energy scale near threshold.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R12", "R14", "R15"]},
            {"label": "no", "regions": ["R1", "R8", "R10", "R11"]}
          ]
        }
      ]
    }
  ]
}
```