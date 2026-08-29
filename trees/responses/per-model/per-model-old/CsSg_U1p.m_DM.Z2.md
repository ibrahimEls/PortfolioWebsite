I'll verify the three arXiv references I plan to cite, then deliver the full answer in one message.
All three references resolve and match their claimed content (Babu–Kolda–March-Russell on generalized Z–Z′ mixing; Hook–Izaguirre–Wacker "Model Independent Bounds on Kinetic Mixing" from e⁺e⁻ data for 1 GeV–1 TeV vectors; Curtin–Essig–Gori–Shelton with current EWPT excluding ε ≳ 3×10⁻², improving ×2 at HL-LHC and ×4 more at ILC/GigaZ). Here is the full deliverable.

---

# Degeneracy-breaking analysis: CsSg_U1p[-]_DM.Z2 (complex scalar singlet + dark U(1)′, Z₂)

## Model physics that controls what can and cannot split

Before the leaves, four structural facts about this Lagrangian that drive every choice below:

1. **The relic and the indirect-detection signal are secluded.** The dark gauge coupling tracks the DM mass exactly as g ∝ √M_DM (leaf 1: gU1p 0.31 at 317 GeV → 0.47 at 710 GeV; 0.31 × √(710/317) = 0.46; leaf 2: 0.21 predicted at 150 GeV vs 0.18–0.22 observed). That is the fingerprint of a thermal relic set by si si → Z′Z′ with σv ≈ g⁴/16πM² ≈ 3×10⁻²⁶ cm³/s. The 10–100× CTA excess in today's halo is Sommerfeld enhancement from the light Z′ (α_d ≈ 0.014, S_sat ~ πα_d M_DM/M_Z′ up to ~40). Crucially, the enhancement is *saturated* in every region (saturation velocity ~ M_Z′/M_DM ≥ 4×10⁻³ exceeds both GC v~10⁻³ and dwarf v~3×10⁻⁵), so the classic dwarf-vs-GC σv(v) ratio test is flat across all regions and **cannot split anything here** — this is why I do not use it.
2. **γ-ray and ν spectra are insensitive to M_Z′.** The Z′ decays through kinetic mixing with Q²-weighted branching ratios (BR(bb̄) ≈ 5%, BR per charged-lepton pair ≈ 15%) that barely change from M_Z′ = 3 GeV to 165 GeV, and for M_Z′ ≪ M_DM the boosted 4-body cascade shape is M_Z′-independent to first order. Spectral fits at CTA cannot separate regions; I discard that option too.
3. **Direct detection and h→inv are structurally dead**, which is why these leaves exist: only sr couples to the Higgs (α₁H²sr²), so after EWSB the states split by δ = α₁v²/2M_DM ≈ 0.1–1 GeV and the DM (si) couples to the Z′ *only off-diagonally* (sr↔si). Z′-mediated nuclear scattering is inelastic with δ ~ GeV — kinematically forbidden — and M_DM > m_h/2 closes h→inv.
4. **Therefore the only observable axes that differ between regions are (ε, M_Z′)**, plus M_DM at the margins. Regions that differ only in the dark quartics α₂, α₃, α₄ are — to the best of current physics — *fundamentally* indistinguishable: the quartics' one observable, DM self-scattering, gives σ/m ~ λ²/(4πM³) ≈ 10⁻¹²–10⁻¹⁴ cm²/g, eleven orders of magnitude below cluster-scale sensitivity (~0.1–1 cm²/g). I say this honestly where it applies rather than inventing a fake discriminator.

---

## Leaf `root_yes_no_yes` (883 pts, 26 clustered regions)

**Level 1 — electroweak-precision kinetic-mixing fit (LEP now; GigaZ/Tera-Z projected).** ε spans five decades across the regions, and EW precision is the one measurement class that probes ε for 3–165 GeV vectors *without* being a dilepton σ×BR recast (already in the catalog). Kinetic mixing shifts the Z-pole couplings by δsin²θ_eff ≈ t_w²ε²·M_Z²/(M_Z²−M_Z′²) ~ 0.3ε² (enhanced ×2–4 for M_Z′ approaching M_Z). Current LEP/LHC fits exclude ε ≳ 3×10⁻² (verified: arXiv:1412.0018); HL-LHC ×2 and ILC/GigaZ ×4 more push the reach to ε ≈ 4×10⁻³, i.e. δsin²θ_eff ≈ 6×10⁻⁶ — matching the projected Tera-Z precision on sin²θ_eff. Per region (log-center ε → δsin²θ_eff):

- **Seen** (δ ≳ 6×10⁻⁶): R21, R25 (ε = 0.1 → δ ≈ 3×10⁻³, *already 20σ excluded by existing LEP data* — a zero-cost immediate split, also independently covered by the model-independent e⁺e⁻ continuum bounds of Hook et al.); R9 (0.03–0.1 → ≥ 3×10⁻⁴, also already testable); R4 (center 2.3×10⁻² → 1.6×10⁻⁴); R22 (2.9×10⁻² → 2.5×10⁻⁴); R2 (1.1×10⁻² → 3×10⁻⁵; its low edge 2.2×10⁻³ straddles the cut — marginal); R17 (center 3.4×10⁻³ → ~4–6×10⁻⁶ including the M_Z-proximity factor: *right at threshold; assignment marginal*, flagged).
- **Not seen**: everything else, with δ ≤ 10⁻⁸ for the fourteen ε ≤ 2×10⁻⁴ regions (hopeless for any fit). Marginal cases flagged: R3 (3.7×10⁻⁴–5.2×10⁻³) and R6 (9×10⁻⁴–6×10⁻³) straddle the cut with log-centers below it; R0 is the 546-point diffuse bulk spanning ε = 10⁻⁶–0.1 — its log-median (~3×10⁻⁴) puts the bulk of its volume on "not seen", but individual R0 points above 4×10⁻³ would migrate; no binary cut can do better for a cluster that spans the whole prior.

**Level 2a — on the "shift seen" group (R2, R4, R9, R17, R21, R22, R25).** These all have ε ≥ 2×10⁻³, i.e. the Z′ is *producible*; what still differs is its mass: R4 sits at M_Z′ = 4.8–11.2 GeV while the others live at 9.7–120 GeV. A dedicated prompt-dimuon resonance scan of LHCb-Upgrade-II class (existing instrument; current prompt A′→μμ limits reach ε² ~ 10⁻⁶–10⁻⁵ over 10–70 GeV, ~3× better in ε with 300 fb⁻¹; CMS-scouting-class coverage extends 11.5–200 GeV for R9's upper range) measures the peak position to ~0.5%, so the cut m_μμ < 12 GeV cleanly selects R4. Marginality stated: R17 and R9 have lower box edges at 9.7 and 10.4 GeV, so their bottom corners leak below the cut; R2's edge is 11.3 GeV. Rating "possible" — this is within an existing, funded program; the dominant systematic is the Drell-Yan/continuum shape under a narrow peak.

**Level 2b — on the 19-region "no shift" group.** With ε ≤ 10⁻⁴–10⁻³ the Z′ is invisible to every collider (σ ∝ ε² ≤ 10⁻⁸ of DY) yet still decays promptly on astrophysical scales, so the *only* surviving M_Z′ handle is kinematic: DM DM → Z′Z′, Z′ → e⁺e⁻ (BR ≈ 15%) produces a **box positron spectrum with a sharp lower edge at E_min = M_Z′²/4M_DM** — a real spectral step, in absolute units, on top of the softer μ/hadron cascade. Per region (range, log-center): R16 → 0.5–9.4 GeV (2.2); R20 → 0.9–6.3 (2.3); R6 → 0.5–6.6 (1.9); versus R14 (0.95), R1 (0.8), R12 (0.6), R13/R15 (~0.5), R7/R5 (~0.3–0.7), R8 (0.14–0.23), R10 (0.007–1.1), R23 (7–15 MeV), R24 (0.3–1.5), R3/R11/R18/R19 ≲ 1, R0 bulk ~0.3. A cut "step at E ≥ 1.5 GeV" selects {R6, R16, R20}; the σv = 10–100× CTA normalization guarantees enormous statistics. I flag this as genuinely marginal: several "no" regions' upper corners (R13, R14) cross 1.5 GeV, and below ~2 GeV solar modulation and the pulsar/secondary positron background dominate. Closest instrument: AMS-02 (percent-level e⁺ statistics at a few GeV); an AMS-100-class successor gives ~10³ exposure, but the required percent-level *astrophysical-background shape* control at 1–10 GeV is >10× beyond anything demonstrated → **speculative**. Residual honesty: after this node, the many remaining regions (e.g. R1 vs R5 vs R8 vs R19 vs R24…) differ essentially only in α₂–α₄ and in ε within the collider-dead window 10⁻⁶–10⁻⁴; per the structural argument above (σ_self/m ~ 10⁻¹² cm²/g), I believe this residue is physically unobservable with any conceivable experiment, and I prefer stating that to proposing fiction.

---

## Leaf `root_no_yes_no_no` (130 pts, 6 clustered regions)

Here M_DM = 137–309 GeV and the region structure is beautifully bimodal in ε: {R0, R2, R4, R5} at ε = 0.011–0.094 versus {R1, R3} at ε = 2.6–6.4×10⁻⁴ — a factor ≥17 gap around the EW-fit threshold.

**Level 1 — the same EW-precision fit splits this leaf cleanly.** δsin²θ_eff ≈ 0.3ε²: R4 → 3.5×10⁻⁴–1.9×10⁻³ (*at or above the current LEP bound ε ≈ 0.03 — partially testable today*); R2 → 1.3×10⁻⁴–2.7×10⁻³; R0 → 3.5×10⁻⁵–2.3×10⁻³; R5 → 6.6×10⁻⁵–6.7×10⁻⁴ — all ≥ 10× the 6×10⁻⁶ cut. R1 and R3 give ≤ 1.2×10⁻⁷, fifty times below it. No marginal assignments; both margins exceed a factor of 6 in ε. Status: clean split.

**Level 2a — on {R0, R2, R4, R5}.** Once ε and (via a follow-up dimuon peak) M_Z′ are measured, these four regions still overlap in every observable-relevant parameter (M_DM 137–309 with full mutual overlap, M_Z′ 7.5–74 overlapping, ε overlapping); DBSCAN separates them along the dark quartics: R2 uniquely has α₃ ≈ 1.0–6.6 while the others sit at ≤ 0.74. The only physical print of α₃ is sr–si self-scattering: σ/m ≈ α₃²/(4πM_DM³) ≈ 10⁻¹¹±¹ cm²/g for R2 versus ≲ 5×10⁻¹⁴ for R0/R4/R5. I therefore attach the honest version of the only possible experiment — DM self-interaction from an ensemble of merging galaxy clusters (offset/shape statistics), cut σ_self/m > 10⁻¹² cm²/g. Closest instruments (existing weak-lensing + X-ray merger samples, Euclid/Rubin-era ensembles) reach ~0.1–1 cm²/g; the required improvement is ~10¹¹ with the dominant systematic being baryonic scatter in offsets → **speculative**, and R0 vs R4 vs R5 (which differ only in α₂/α₄) remain degenerate even in principle. That residual degeneracy is, as far as I can tell, fundamental.

**Level 2b — on {R1, R3}.** These two are cleanly separable on hardware that already exists. R3 is a pencil: M_Z′ = 1.0 GeV, ε = 6.4×10⁻⁴, M_DM = 143.5–148.4 GeV. R1 has M_Z′ = 13–62 GeV — *kinematically unreachable at an Υ(4S) machine* (√s = 10.58 GeV), guaranteeing an exact zero. A Belle-II radiative-return scan (e⁺e⁻ → γA′, A′ → e⁺e⁻/μ⁺μ⁻) at m_ll ≈ 1 GeV expects σ ≈ 2πα²ε²/s × O(1) ≈ 0.5 ab for R3, i.e. ~25 produced events in the design 50 ab⁻¹, with the published Belle-II visible-dark-photon projections reaching ε ~ (3–5)×10⁻⁴ there — R3's 6.4×10⁻⁴ is inside reach with no improvement factor needed beyond the already-planned dataset → **possible**. Dominant systematic, stated honestly: m = 1.0 GeV sits next to the φ(1020) and the ρ/ω hadronic structure, so the QED+hadronic continuum shape under the peak is the limiting effect; a narrow-peak scan (mass resolution ~few MeV ≪ hadronic features) mitigates it.

---

```json
{
  "model": "CsSg_U1p[-]_DM.Z2",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes",
      "lit_review": {
        "name": "Z-pole EW-precision kinetic-mixing fit (LEP now, GigaZ/Tera-Z projected)",
        "observable": "|Delta sin^2 theta_eff^lept| >= 6e-6 ?",
        "refs": ["arXiv:hep-ph/9710441", "arXiv:1006.0973", "arXiv:1412.0018"],
        "reasoning": "Regions differ observably only in (epsilon, MZp): DD is inelastically forbidden (delta=alpha1 v^2/2MDM ~ 0.1-1 GeV), Sommerfeld is saturated so dwarf/GC ratios are flat, and Z' branching ratios are Q^2-weighted so ID spectra are MZp-blind. Kinetic mixing shifts Z-pole couplings by dsin2 ~ 0.3 eps^2 x MZ^2/(MZ^2-MZp^2). Current fits exclude eps >~ 3e-2 (R21/R25 at eps=0.1 give 3e-3, already ~20 sigma excluded by LEP; R9 upper range likewise); GigaZ-class precision (6e-6 on sin^2 theta_eff) reaches eps ~ 4e-3. Seen: R21,R25 (3e-3), R9 (>=3e-4), R22 (2.5e-4), R4 (1.6e-4), R2 (3e-5, low edge marginal), R17 (~4-6e-6, at threshold, marginal). Not seen: the 19 others, with shifts <=1e-8 for the fourteen eps<=2e-4 regions; R3 and R6 straddle the cut (log-centers below); R0 spans the full prior and is assigned by its log-median eps~3e-4.",
        "status": "Splits!",
        "outcomes": [
          {"label": "shift seen", "regions": ["R2", "R4", "R9", "R17", "R21", "R22", "R25"]},
          {"label": "no shift", "regions": ["R0", "R1", "R3", "R5", "R6", "R7", "R8", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R18", "R19", "R20", "R23", "R24"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R2+R4+R9+R17+R21+R22+R25",
          "name": "Prompt dimuon Z' mass scan, LHCb-Upgrade-II class",
          "observable": "mu+mu- resonance peak at m < 12 GeV ?",
          "reasoning": "All regions in this outcome have eps >= 2e-3, so the Z' is producible and decays promptly to mu+mu-; the remaining discriminant is its mass. R4 sits at MZp = 4.8-11.2 GeV; the others occupy 9.7-120 GeV. A peak-position measurement at 0.5% resolution implements the 12 GeV cut directly. Marginal at the boundary: R17 and R9 lower box edges reach 9.7 and 10.4 GeV, R2's edge is 11.3 GeV, so corner points can leak across; the split is clean for the region bulks. sigma x BR ~ eps^2 additionally separates eps=0.1 (R21,R25) from eps~3e-3 (R17), but peak position is the cleaner binary.",
          "feasibility": "LHCb prompt A'->mumu already covers 0.21-70 GeV at eps^2 ~ 1e-6-1e-5 above 10 GeV; Upgrade II (300 fb^-1) gains ~3x in eps, and CMS-scouting-class searches cover 11.5-200 GeV for R9's upper range. Required improvement <~3x over existing funded programs; mass resolution ~0.5% is far finer than the cut. Dominant systematic: Drell-Yan continuum shape under a narrow peak.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R4"]},
            {"label": "no", "regions": ["R2", "R9", "R17", "R21", "R22", "R25"]}
          ]
        },
        {
          "attach_to": "R0+R1+R3+R5+R6+R7+R8+R10+R11+R12+R13+R14+R15+R16+R18+R19+R20+R23+R24",
          "name": "Space magnetic spectrometer (AMS-100 class) positron box-edge search",
          "observable": "step in e+ spectrum at E >= 1.5 GeV ?",
          "reasoning": "With eps <= ~1e-4-1e-3 the Z' is collider-invisible (sigma ~ eps^2), so the only surviving MZp handle is kinematic: DM DM -> Z'Z', Z' -> e+e- (BR ~ 15%) yields a box positron spectrum with lower edge E_min = MZp^2/(4 MDM). Log-center E_min: R16 2.2 GeV (range 0.5-9.4), R20 2.3 (0.9-6.3), R6 1.9 (0.5-6.6) vs R14 0.95, R1 0.8, R12 0.6, R13/R15 ~0.5, R7/R5/R24 0.3-0.7, R8 0.2, R23 0.01, R0 bulk ~0.3. sigmav at 10-100x the CTA limit guarantees high statistics. Marginal: R13/R14 upper corners cross 1.5 GeV, and below ~2 GeV solar modulation blurs the edge. Regions left degenerate on either branch differ only in dark quartics alpha2-alpha4 (self-interaction sigma/m ~ 1e-12 cm^2/g) or in eps within 1e-6-1e-4 — physically unobservable residue, stated honestly.",
          "feasibility": "Closest instrument: AMS-02, percent-level e+ statistics at 1-10 GeV; an AMS-100-class successor offers ~1000x exposure. The limitation is not statistics but astrophysical background shape: pulsar/secondary positrons plus solar modulation at 1-6 GeV must be modeled to sub-percent, >10x beyond demonstrated capability. Dominant systematic: solar modulation and degenerate astrophysical positron sources.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "edge above 1.5 GeV", "regions": ["R6", "R16", "R20"]},
            {"label": "no high edge", "regions": ["R0", "R1", "R3", "R5", "R7", "R8", "R10", "R11", "R12", "R13", "R14", "R15", "R18", "R19", "R23", "R24"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes_no_no",
      "lit_review": {
        "name": "Z-pole EW-precision kinetic-mixing fit (LEP now, GigaZ/Tera-Z projected)",
        "observable": "|Delta sin^2 theta_eff^lept| >= 6e-6 ?",
        "refs": ["arXiv:hep-ph/9710441", "arXiv:1006.0973", "arXiv:1412.0018"],
        "reasoning": "This leaf is bimodal in eps with a >x17 gap: {R0,R2,R4,R5} at eps = 0.011-0.094 vs {R1,R3} at 2.6-6.4e-4. The kinetic-mixing shift dsin2 ~ 0.3 eps^2 gives 3.5e-5 to 2.7e-3 for the high group — all >= 10x the GigaZ-class cut of 6e-6, with R4 (eps 0.034-0.080) already at/above the current LEP bound eps ~ 3e-2 and hence partially testable today — versus <= 1.2e-7 for R1/R3, fifty times below the cut. Both sides clear the threshold by more than a factor of 6 in eps; no marginal assignments.",
        "status": "Splits!",
        "outcomes": [
          {"label": "shift seen", "regions": ["R0", "R2", "R4", "R5"]},
          {"label": "no shift", "regions": ["R1", "R3"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2+R4+R5",
          "name": "Galaxy-cluster merger ensemble: dark-matter self-interaction offsets",
          "observable": "sigma_self/m > 1e-12 cm^2/g ?",
          "reasoning": "These four regions overlap in every portal-observable parameter (MDM, MZp, eps, alpha1); DBSCAN separates them along the dark quartics. R2 uniquely has alpha3 = 1.0-6.6 (others <= 0.74), and alpha3's only physical imprint is sr-si self-scattering: sigma/m ~ alpha3^2/(4 pi MDM^3) ~ 1e-11 cm^2/g for R2 vs <= 5e-14 for R0/R4/R5. The proposed cut selects R2 in principle. R0 vs R4 vs R5 differ only in alpha2/alpha4 and remain degenerate even under this measurement — that residue appears physically unobservable, and honesty is preferable to a fabricated discriminator.",
          "feasibility": "Closest probes: weak-lensing + X-ray offset statistics in merging-cluster ensembles and halo-shape constraints, currently sensitive to sigma/m ~ 0.1-1 cm^2/g (Rubin/Euclid-era samples marginally better). Required sensitivity 1e-12 cm^2/g is ~11 orders of magnitude beyond any conceived astrophysical probe; dominant systematic is baryonic scatter in merger offsets.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R2"]},
            {"label": "no", "regions": ["R0", "R4", "R5"]}
          ]
        },
        {
          "attach_to": "R1+R3",
          "name": "Belle II 50/ab radiative-return dark-photon scan",
          "observable": "sigma(e+e- -> gamma ll, m_ll ~ 1 GeV) > 0.3 ab ?",
          "reasoning": "R3 is a pencil at MZp = 1.0 GeV, eps = 6.4e-4: sigma(e+e- -> gamma A') ~ 2 pi alpha^2 eps^2/s ~ 0.5 ab at sqrt(s) = 10.58 GeV, i.e. ~25 produced events in 50 ab^-1 with a few-MeV-wide dilepton peak. R1 has MZp = 13-62 GeV, kinematically unreachable at an Upsilon(4S) machine — an exact zero — and its eps = 2.6-4.8e-4 at those masses is invisible to every other collider probe. The split is therefore clean and one-sided.",
          "feasibility": "Belle II is running (~0.5 ab^-1 recorded; 50 ab^-1 is the design goal). Published visible-dark-photon projections reach eps ~ (3-5)e-4 at m ~ 1 GeV with the full dataset, so eps = 6.4e-4 needs no improvement beyond the planned program (factor ~1x). Dominant systematic: QED and hadronic (rho/omega/phi(1020)) continuum shape near m_ll = 1 GeV; the narrow-peak scan mitigates it.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R3"]},
            {"label": "not seen", "regions": ["R1"]}
          ]
        }
      ]
    }
  ]
}
```