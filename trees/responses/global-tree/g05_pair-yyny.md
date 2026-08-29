## Reasoning — leaf `root_yes_yes_no_yes_no` (3086 pts, 52 units)

### 1. What the catalog has already used up, and what it is structurally blind to

All 52 units are the same Lagrangian family (complex scalar singlet with a Higgs portal `alpha1` plus a dark U(1)′ with mass `MZp`, dark gauge coupling `gU1p`, and kinetic mixing `epsilon`). The path to this leaf pins the DM mass to **321–710 GeV** and the portal coupling to the XLZD band.

Two systematics are worth stating before choosing an observable, because they explain *why* the tree stalled:

- **`alpha1` is locked to `MDM`.** Across every unit, `alpha1 ≈ MDM[GeV]/(1.4–2.1)×10⁴` (R0: 415/0.0198 → 710/0.0501; R2: 587/0.0301 → 695/0.0468; R14: 699/0.0373 → 709/0.0478). That is exactly the locus σ_SI ∝ α₁²/M_DM² = const, i.e. the "1–10× XLZD" band the path already demanded. Consequently **every Higgs-portal observable — σ_SI on any target, BR(h→inv), the loop-corrected hhh coupling — is a function of one number that the path has already measured.** Δλ_hhh/λ_SM ~ (1 − M₀²/M_S²)³ ≈ 2×10⁻⁷ here (α₁v²/2 ≈ 1.5×10³ GeV² vs M_DM² ≈ 3×10⁵ GeV²), so di-Higgs is dead too.
- **`gU1p` has a hard attractor at 0.4309** (R2, R10, R11, R19, R22, R31, R41–R46). α_D = g²/4π = 0.0148, and π α_D²/M_DM² at M_DM ≈ 650 GeV gives ⟨σv⟩ ≈ 2.6×10⁻²⁶ cm³/s — the thermal value. These are the *secluded* units where χχ* → Z′Z′ sets the relic. The M_Z′ ≈ 1 GeV units instead sit at g ≈ 0.018–0.029 (α_D ≈ 3×10⁻⁵) with large dark quartics α₃–α₅ ~ O(1–10): a scalar-sector, not gauge-sector, freeze-out.

So the *only* free axis the entire catalog never touches is the **vector portal (`epsilon`, `MZp`)**. That is where the split has to come from.

**Discriminators I checked and rejected as honestly too weak (stated so the record is complete):**
- *Self-interaction (cluster/dwarf σ/m).* σ_T = 4πα_D²M_DM²/M_Z′⁴. Worst case (R6: α_D = 4×10⁻⁵, M_DM = 500 GeV, M_Z′ = 1 GeV) gives σ_T ≈ 5×10⁻³ GeV⁻² = 2×10⁻³⁰ cm², i.e. **σ/m ≈ 2×10⁻⁹ cm²/g** — nine orders below the ~1 cm²/g Bullet-Cluster bound. Useless.
- *CMB energy injection.* f_eff⟨σv⟩/m ≈ 0.2×2.6×10⁻²⁶/650 ≈ 8×10⁻³⁰ cm³ s⁻¹ GeV⁻¹ vs Planck p_ann < 3.2×10⁻²⁸. A factor 40 short, and CMB-S4 gains only ~2–3×. Sommerfeld would rescue it only if ε_φ = M_Z′/(α_D M_DM) ≲ 1, but the g–M_Z′ correlation keeps ε_φ ≈ 20–100 in the light-Z′ units and 4–22 in the g = 0.4309 units. Only R7 (α_D = 4.1, ε_φ = 0.44) would be enhanced — and its g = 7.2 is non-perturbative, so I do not build a split on it.
- *AMS-02 antiprotons.* The M_Z′ < 2m_p ≈ 1.88 GeV units (R6, R8, R12, R20, R24, R25, R32–R35, R47–R50) genuinely produce **zero** antiprotons while the M_Z′ ≳ 2 GeV secluded units produce O(1)/annihilation — beautiful physics, but at M_DM ≈ 600 GeV and thermal ⟨σv⟩ the AMS-02 limit is ~1×10⁻²⁵ cm³/s, so *neither* side is detectable. The path already told us CTA(WW) is silent; antiprotons are weaker still.

### 2. Level 1 — Z-pole electroweak fit to kinetic mixing

Kinetic mixing induces Z–Z′ mixing, which shifts the Z's couplings to fermions and hence the measured leptonic effective weak mixing angle. Over 1 GeV ≲ M_Z′ ≲ ½m_Z the shift is approximately **Δsin²θ_eff ≈ 0.2 ε²**, with an O(1) mass-dependent coefficient that grows near m_Z and decouples as m_Z²/M_Z′² well above it. The LEP+SLD combination gives sin²θ_eff^lept = 0.23153 ± 0.00016, so a **1σ cut is |Δsin²θ_eff| ≥ 1.6×10⁻⁴, i.e. ε ≳ 0.03** — which reproduces the standard EW-fit dark-photon bound.

Predicted shifts:

| unit | ε | Δsin²θ_eff | |
|---|---|---|---|
| R18, R36, R38, R39 | 0.1 (pinned) | 2.0×10⁻³ | 12σ — **yes** |
| R37 | 0.078–0.1 | 1.2–2.0×10⁻³ | **yes** |
| R51 | 0.054–0.1 | 5.8×10⁻⁴–2.0×10⁻³ | **yes** |
| R4 | 0.037–0.1 | 2.7×10⁻⁴–2.0×10⁻³ | **yes** (whole range above cut) |
| R16 | 0.019–0.1 | 7.2×10⁻⁵–2.0×10⁻³ | **yes**, log-median ε = 0.044 → 3.9×10⁻⁴ (straddles; ~2/3 of its volume above) |
| R14, R15 | 0.013–0.051 | 3.4×10⁻⁵–5.2×10⁻⁴ | log-median 0.025 → 1.3×10⁻⁴, just below → **no** (closest miss) |
| R6 | 0.0041–0.1 | 3.4×10⁻⁶–2.0×10⁻³ | log-median 0.020 → 8×10⁻⁵ → **no** (straddles; also note R6 at M_Z′ = 1.000 GeV is where the EW effect is weakest) |
| R21 | 0.0071–0.029 | 1.0×10⁻⁵–1.7×10⁻⁴ | **no** (marginal) |
| R7 | 0.068, M_Z′ = 986 GeV | 7.9×10⁻⁶ (decoupled by m_Z²/M_Z′²) | **no** — heavy Z′ evades the fit; LEP-II contact scale M_Z′/(εe) ≈ 47 TeV is far beyond reach |
| all others | ε ≤ 9×10⁻³, mostly ≤ 5×10⁻⁵ | ≤ 1.6×10⁻⁵, typically ≤ 5×10⁻¹⁰ | **no** |

**Result: 8 units separated (R4, R16, R18, R36, R37, R38, R39, R51; 152 pts) from the remaining 44.** This is a genuine split and it is orthogonal to everything on the path, but it is honest to say it resolves ~5% of the leaf's points: the leaf is dominated by R0/R1/R2/R3 (1975 pts) whose ε priors are either flat over five decades or pinned at ~10⁻⁶.

### 3. Level 2a — the 44 low-/broad-ε units: a Tera-Z dark-photon program

The natural next rung in ε is a Z factory. Dark-photon strahlung off the Z decay products gives BR(Z → A′ f f̄, A′→visible) ≈ ε² × O(10⁻²), so **BR ≥ 10⁻¹² ⟺ ε ≳ 10⁻⁵** — two orders below the EW fit. Crucially the observable is *zero by kinematics* for M_Z′ ≳ 85 GeV, which is itself discriminating: it separates the heavy-mediator units regardless of ε.

- **Signal (BR ≥ 10⁻¹²):** R0 (ε log-median 3×10⁻⁴, M_Z′ 1.5–37 GeV → BR ~ 10⁻⁹), R1 (3×10⁻⁴, M_Z′ median 52 GeV), R5 (ε 4×10⁻⁵–9×10⁻³ → BR up to 9×10⁻⁷), R6 (ε ≥ 4×10⁻³ → BR ≥ 1.7×10⁻⁷), R21 (7×10⁻³–0.029), R19 (1.3–2.7×10⁻³), R26 (2.9×10⁻⁴–2.4×10⁻³), R27 (1.4–3.5×10⁻³, M_Z′ = 9.85 GeV), R33 (2×10⁻⁴), R9, R11, R22, R31, R32, R42, R43, R44, R49 (ε 1.2×10⁻⁵–1.2×10⁻⁴ → BR 1.4×10⁻¹²–1.4×10⁻¹⁰), and marginally R8, R13 (log-median ε ≈ 1.1×10⁻⁵, right at the cut). **20 units.**
- **No signal:** the 
ε ≈ 10⁻⁶ floor units (R3, R10, R12, R17, R20, R23, R24, R25, R28, R29, R30, R34, R35, R40, R41, R45, R46, R47, R48, R50 — BR ≤ 10⁻¹⁴), plus R2 (ε ≤ 4.8×10⁻⁵ but M_Z′ log-median 94 GeV), and the three kinematically-closed units **R7 (M_Z′ = 986 GeV), R14 and R15 (M_Z′ ≈ 560 GeV)** — these three carry large ε (0.013–0.068) yet give exactly zero rate at √s = 91 GeV, which is a real, falsifiable statement, not a fudge. **24 units.**

R7's dark coupling gU1p = 7.2 (α_D = 4.1) makes it physically unique among all 52, but no existing *or* proposed instrument measures a dark-sector self-coupling for a 986 GeV mediator that couples to the SM only through ε = 0.068; it therefore sits in the null bin and stays degenerate with R14/R15 and the ε-floor units. That is the honest outcome.

### 4. Level 2b — the 8 EW-flagged units: sub-10⁻¹⁰ muon g−2

Once the EW fit has established ε ≳ 0.03, a second observable with a *different* power of M_Z′ pins the mediator mass. The dark-photon one-loop contribution is exactly

Δa_μ = (α/2π) ε² · 2m_μ²/(3M_Z′²) = 8.7×10⁻⁶ · ε²/M_Z′²[GeV²]

which scales as ε²/M_Z′², whereas the Z-pole shift scales as ε² alone. Cutting at |Δa_μ| ≥ 10⁻¹⁰:

| unit | ε | M_Z′ [GeV] | Δa_μ | |
|---|---|---|---|---|
| R51 | 0.054–0.1 | 2.57–2.87 | 3.1×10⁻⁹ – 1.3×10⁻⁸ | **yes** |
| R37 | 0.078–0.1 | 12.2–14.5 | 2.5×10⁻¹⁰ – 5.8×10⁻¹⁰ | **yes** |
| R39 | 0.1 | 19.8–21.6 | 1.9×10⁻¹⁰ – 2.2×10⁻¹⁰ | **yes** |
| R38 | 0.1 | 20.5–21.0 | 2.0×10⁻¹⁰ – 2.1×10⁻¹⁰ | **yes** |
| R18 | 0.1 | 21.1–24.5 | 1.5×10⁻¹⁰ – 2.0×10⁻¹⁰ | **yes** |
| R36 | 0.1 | 35.0–46.6 | 4.0×10⁻¹¹ – 7.1×10⁻¹¹ | **no** |
| R4 | 0.037–0.1 | 17.7–41.9 | median 4.2×10⁻¹¹ (range 6.6×10⁻¹² – 2.8×10⁻¹⁰) | **no** (straddles at the top) |
| R16 | 0.019–0.1 | 23.4–40.7 | median 1.7×10⁻¹¹ | **no** |

R18, R38 and R39 all sit at ε = 0.1, M_Z′ ≈ 20–24 GeV and are predicted to be identical in **both** observables — they remain mutually degenerate, and nothing I can construct separates them, since their only distinguishing parameters are the dark quartics α₂–α₆, whose largest observable consequence (σ/m ≈ 10⁻¹² cm²/g) is unmeasurable.

**Net:** 52 units → 4 resolved groups (R51/R37/R39/R38/R18 · R4/R16/R36 · 20-unit Tera-Z-signal · 24-unit Tera-Z-null), i.e. the leaf's 3086 points are cut into blocks of ~15 / ~137 / ~2100 / ~840. The two largest units (R0, R1; 1592 pts) survive only into the Tera-Z-signal bin because their ε priors are unconstrained across five decades — that is a property of the scan, not of the physics, and it caps what any ε-based probe can do here.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_no_yes_no",
      "lit_review": {
        "name": "LEP/SLD Z-pole electroweak fit to dark-photon kinetic mixing",
        "observable": "|Delta sin^2(theta_eff^lept)| >= 1.6e-4 ?",
        "refs": ["arXiv:1006.0973", "arXiv:1412.0018"],
        "reasoning": "The path has already fixed the Higgs portal: alpha1 = MDM/(1.4-2.1)e4 across every unit, which is exactly the sigma_SI = const x MDM^2 locus the '1-10x XLZD' branch demands. So every Higgs-portal observable (any DD target, BR(h->inv), and the loop hhh shift, which is only 2e-7 here since alpha1*v^2/2 = 1.5e3 GeV^2 << MDM^2 = 3e5 GeV^2) is a function of one number the tree already measured. The only untouched axis is the vector portal (epsilon, MZp). Z-Z' mixing from kinetic mixing shifts the Z couplings by Delta sin^2(theta_eff) ~ 0.2*epsilon^2 (O(1) mass-dependent coefficient, growing near m_Z, decoupling as m_Z^2/MZp^2 above it); LEP+SLD give sin^2(theta_eff) = 0.23153 +- 0.00016, so 1.6e-4 is a 1-sigma cut, i.e. epsilon >~ 0.03. Predicted: R18/R36/R38/R39 (epsilon pinned at 0.1) 2.0e-3 = 12 sigma; R37 (0.078-0.1) 1.2-2.0e-3; R51 (0.054-0.1) 5.8e-4-2.0e-3; R4 (0.0366-0.1) 2.7e-4-2.0e-3, entire range above cut; R16 (0.019-0.1) log-median 0.044 -> 3.9e-4, straddles with ~2/3 of its volume above. Below: R14/R15 (log-median 0.025 -> 1.3e-4, the closest miss), R6 (0.0041-0.1, log-median 0.020 -> 8e-5, and MZp = 1.000 GeV is where the EW effect is weakest), R21 (<=0.029 -> <=1.7e-4), R7 (epsilon 0.068 but MZp = 986 GeV, decoupled to 7.9e-6; its LEP-II contact scale MZp/(e*epsilon) = 47 TeV is far out of reach), and the remaining 35 units with epsilon <= 9e-3 and typically ~1e-6, giving <= 1.6e-5 and usually <= 5e-10. Rejected alternatives, for the record: self-interaction sigma/m <= 2e-9 cm^2/g (nine orders below the ~1 cm^2/g cluster bound, since sigma_T = 4*pi*alpha_D^2*MDM^2/MZp^4 with alpha_D <= 0.015); CMB p_ann ~ 8e-30 vs Planck 3.2e-28, with no Sommerfeld rescue because the g-MZp correlation keeps MZp/(alpha_D*MDM) = 4-100 everywhere except the non-perturbative R7; and AMS-02 antiprotons, where the MZp < 2m_p = 1.88 GeV units (R6, R8, R12, R20, R24, R25, R32-R35, R47-R50) genuinely make zero antiprotons while the secluded gU1p = 0.4309 units make O(1) each, but at MDM ~ 600 GeV and thermal <sigma v> = 2.6e-26 cm^3/s neither side clears the ~1e-25 AMS-02 limit. This split resolves 8 units / 152 pts; the leaf's bulk (R0, R1, R2, R3 = 1975 pts) has epsilon either flat over five decades or pinned at the 1e-6 floor, which caps what any epsilon-based probe can do.",
        "status": "Splits!",
        "outcomes": [
          {"label": "shift seen", "regions": ["R4", "R16", "R18", "R36", "R37", "R38", "R39", "R51"]},
          {"label": "no shift", "regions": ["R0", "R1", "R2", "R3", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R17", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R34", "R35", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R5+R6+R7+R8+R9+R10+R11+R12+R13+R14+R15+R17+R19+R20+R21+R22+R23+R24+R25+R26+R27+R28+R29+R30+R31+R32+R33+R34+R35+R40+R41+R42+R43+R44+R45+R46+R47+R48+R49+R50",
          "name": "Tera-Z dark-photon program: 10^13 Z, prompt plus displaced tag",
          "observable": "BR(Z -> A' f fbar, A' -> visible) >= 1e-12 ?",
          "reasoning": "Dark-photon strahlung off the Z decay products has BR(Z -> A' f fbar) ~ epsilon^2 x O(1e-2), so the 1e-12 cut is epsilon ~ 1e-5, two decades below the Z-pole fit, and it is identically zero for MZp >~ 85 GeV. That double handle is what separates this group. Signal side (20 units): R0 (epsilon log-median 3e-4, MZp 1.5-37 GeV -> BR ~ 1e-9), R1 (3e-4, MZp median 52 GeV), R5 (epsilon 4.2e-5-9.4e-3 -> BR up to 9e-7), R6 (epsilon >= 4.1e-3 -> BR >= 1.7e-7), R21 (7.1e-3-0.029), R19 (1.3-2.7e-3), R26 (2.9e-4-2.4e-3), R27 (1.4-3.5e-3 at MZp = 9.85 GeV), R33 (2.0e-4), and R9/R11/R22/R31/R32/R42/R43/R44/R49 (epsilon 1.2e-5-1.2e-4 -> BR 1.4e-12 to 1.4e-10); R8 and R13 sit right at the cut (log-median epsilon 1.1e-5) and are the marginal entries. Null side (24 units): the epsilon = 1e-6 floor units R3, R10, R12, R17, R20, R23, R24, R25, R28, R29, R30, R34, R35, R40, R41, R45, R46, R47, R48, R50 all give BR <= 1e-14; R2 has epsilon <= 4.8e-5 but MZp log-median 94 GeV; and R7 (MZp = 986 GeV), R14 and R15 (MZp = 556-575 GeV) carry large epsilon (0.013-0.068) yet are kinematically closed at sqrt(s) = 91 GeV, so their null is a statement about the mediator mass, not about epsilon. R7 is physically unique in the whole leaf (gU1p = 7.2, alpha_D = 4.1, the only mediator heavier than the DM), but nothing existing or proposed measures a dark-sector self-coupling for a 986 GeV mediator that reaches the SM only through epsilon, so it stays degenerate with R14/R15 and the epsilon-floor units.",
          "feasibility": "Closest instrument: FCC-ee / CEPC Tera-Z (~5e12 Z). Published dark-photon reach from Z -> A' f fbar is epsilon ~ 3e-5 in the prompt channel for m_A' = 1-50 GeV, i.e. ~5 events at epsilon = 1e-5 in 5e12 Z. Reaching a discovery-grade 1e-12 branching ratio needs a ~10x larger Z sample or a background-free displaced tag; at epsilon = 1e-5 and MZp = 1 GeV the decay length is ctau ~ 200 um (well inside vertex-detector reach), but the decay is prompt for MZp > 20 GeV, so the heavier signal units need the prompt channel and the full 10x. Dominant systematic: the irreducible Z -> 4f continuum, and above ~20 GeV the ~5 GeV dijet mass resolution, which smears the resonance into the continuum.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R1", "R5", "R6", "R8", "R9", "R11", "R13", "R19", "R21", "R22", "R26", "R27", "R31", "R32", "R33", "R42", "R43", "R44", "R49"]},
            {"label": "not seen", "regions": ["R2", "R3", "R7", "R10", "R12", "R14", "R15", "R17", "R20", "R23", "R24", "R25", "R28", "R29", "R30", "R34", "R35", "R40", "R41", "R45", "R46", "R47", "R48", "R50"]}
          ]
        },
        {
          "attach_to": "R16+R18+R36+R37+R38+R39+R4+R51",
          "name": "Sub-1e-10 muon g-2: J-PARC E34 plus a space-like HVP measurement",
          "observable": "|delta a_mu| >= 1e-10 ?",
          "reasoning": "The Z-pole fit measures epsilon^2; the dark-photon g-2 loop measures epsilon^2/MZp^2, delta a_mu = (alpha/2pi)*epsilon^2*2m_mu^2/(3 MZp^2) = 8.7e-6 * epsilon^2 / MZp^2[GeV^2]. The different power of MZp is what pins the mediator mass once epsilon is known. Predictions: R51 (epsilon 0.054-0.1, MZp 2.57-2.87 GeV) 3.1e-9 to 1.3e-8; R37 (0.078-0.1, 12.2-14.5) 2.5e-10 to 5.8e-10; R39 (0.1, 19.8-21.6) 1.9-2.2e-10; R38 (0.1, 20.5-21.0) 2.0-2.1e-10; R18 (0.1, 21.1-24.5) 1.5-2.0e-10 -- all above the cut. Below: R36 (0.1, 35.0-46.6) 4.0-7.1e-11; R4 (0.037-0.1, 17.7-41.9) median 4.2e-11, though its top corner reaches 2.8e-10 so it straddles; R16 (0.019-0.1, 23.4-40.7) median 1.7e-11. Honest limitation: R18, R38 and R39 all sit at epsilon = 0.1 with MZp ~ 20-24 GeV and are predicted identical in both observables, so they stay mutually degenerate; their only remaining differences are the dark quartics alpha2-alpha6, whose largest observable consequence is a self-scattering sigma/m ~ 1e-12 cm^2/g.",
          "feasibility": "Closest instrument: Fermilab E989, which has measured a_mu to 1.5e-10 (127 ppb) -- already better than the 1e-10 cut on the experimental side. The blocker is entirely theoretical: the SM prediction carries a ~4e-10 hadronic-vacuum-polarisation error with an unresolved CMD-3 vs KLOE/BaBar R-ratio discrepancy. A MUonE-style space-like HVP measurement at ~0.3% plus an independent J-PARC E34 storage-ring result would bring the comparison to ~1e-10, an improvement factor of about 3 on the theory error. Dominant systematic: hadronic vacuum polarisation, specifically the e+e- -> hadrons normalisation.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R18", "R37", "R38", "R39", "R51"]},
            {"label": "not seen", "regions": ["R4", "R16", "R36"]}
          ]
        }
      ]
    }
  ]
}
```