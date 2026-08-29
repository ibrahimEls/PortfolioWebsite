I'll verify the arXiv references I plan to cite, then deliver the full analysis in one message. First, loading the WebFetch tool:
Now verifying the three candidate references in parallel:
Both key references verified (the third was inconclusive from its abstract, so I drop it and cite only the two confirmed IDs). Everything below is the complete deliverable.

---

## Reasoning — Leaf `root_no_yes_no_yes_yes_yes_no_no_yes` (165 pts, 12 units, all CsSg_U1p[+]_DM.Z2+3+4+5)

### Physics of this leaf

All 12 units belong to a single Lagrangian: a complex scalar singlet DM `s` (mass MDM ≈ 4.1–5.6 GeV) charged under a dark U(1)′ whose gauge boson Z′ (MZp ≈ 1.0–2.6 GeV) couples to the SM only through kinetic mixing ε, plus a Higgs portal α1 H²sr². The catalog observables on the path have already pinned almost every combination that they can see:

- **gU1p ≈ 0.040–0.044 in every region** — the relic condition. With MZp < MDM the annihilation is secluded, DM DM → Z′Z′ → 4f: σv ≈ g′⁴/(16π M²) ≈ 2–3×10⁻²⁶ cm³/s at g′ = 0.042, MDM = 5 GeV, i.e. thermal. Because g′ and MDM barely vary, the indirect-detection cascade signal (the "CTA(bb)" tag) is nearly identical across regions — no further ID split possible.
- **α1 ≈ 0.0035–0.0064 in every region** — pinned by the leaf's BR(h→inv) window: Γ(h→ss) ≈ (α1 v)²/(8π m_h) ≈ 3×10⁻⁴ GeV → BR ≈ 0.03–0.1. ✓ Consistent, and useless for splitting.
- Direct detection is below DarkSide/DARWIN on this leaf, and MDM ranges overlap almost completely.

What is **not** pinned, and varies by 2+ orders of magnitude across regions, is the kinetic mixing **ε ∈ [1×10⁻⁶, 1.8×10⁻⁴]** and, to a lesser extent, **MZp**. Since 2·MDM > MZp, the Z′ cannot decay invisibly — it is a classic *visibly decaying dark photon* at 1–2.6 GeV, exactly the target of low-mass dilepton searches. (This is distinct from the catalog's "Z′ dilepton" observable, which is a high-mass prompt pp→Z′→ℓℓ Drell-Yan recast with zero reach at 1–2.6 GeV and ε ≤ 2×10⁻⁴; the LHCb dark-photon program is a genuinely different measurement not in the catalog.)

### Level 1 — lit review: LHCb inclusive dark-photon search (A′→μμ)

The regions cluster into two ε classes with a real gap between the boxes (max of the low class 1.105×10⁻⁵ in R1; min of the high class 1.375×10⁻⁵ in R4):

| Unit | MZp [GeV] | ε | cτ(A′) ≈ 8 μm·(10⁻⁴/ε)²·(GeV/MZp) | LHCb prompt μμ? |
|---|---|---|---|---|
| R4 | 1.38–2.58 | 1.4–8.3 ×10⁻⁵ | 6 μm – 0.3 mm | **yes** (edge marginal) |
| R8 | 1.25–1.32 | 1.8–11.6 ×10⁻⁵ | 5 μm – 0.2 mm | **yes** |
| R9 | 1.0–1.55 | 2.1–15.6 ×10⁻⁵ | 3 μm – 0.2 mm | **yes** |
| R11 | 1.0–1.6 | 6.6–18.2 ×10⁻⁵ | < 20 μm | **yes** |
| R0 | 1.0–1.59 | 1–3 ×10⁻⁶ | 0.7–6 cm | no |
| R1 | 1.0 | 1–11 ×10⁻⁶ | 0.7 mm – 8 cm | no |
| R2 | 1.45–1.55 | 1–2.1 ×10⁻⁶ | 1–5 cm | no |
| R3 | 1.0–1.55 | ~1.0 ×10⁻⁶ | 5–8 cm | no |
| R5 | 1.0–1.55 | 1–3.6 ×10⁻⁶ | 0.4–8 cm | no |
| R6 | 1.0–1.45 | 1–1.3 ×10⁻⁶ | 4–8 cm | no |
| R7 | 1.0–1.01 | 1–8.9 ×10⁻⁶ | 1 mm – 8 cm | no |
| R10 | 1.545 | 1–3.9 ×10⁻⁶ | 0.3–5 cm | no |

LHCb has already demonstrated the measurement — the inclusive prompt A′→μμ resonance scan from the dimuon threshold to 70 GeV (arXiv:1910.06926, 5.5 fb⁻¹) — and the published projections (arXiv:1603.08926) show that with Run 3 through Upgrade II luminosity (15→300 fb⁻¹) the prompt scan between the ρ/ω/φ and J/ψ vetoes reaches ε² ≈ few×10⁻¹⁰–10⁻⁹, i.e. **ε ≈ 1.5–3×10⁻⁵ for m(μμ) = 1.0–2.6 GeV**. The high-ε units R4, R8, R9, R11 decay promptly (cτ ≤ 0.3 mm) with production rate ∝ ε², sitting at or above that reach; the low-ε units are 1–3 orders of magnitude below it *and* mm–cm displaced, killing the prompt selection twice over. Honesty note: the lower edges of R4 (1.4×10⁻⁵) and R8 (1.8×10⁻⁵) are marginal against the ε ≈ 1.5×10⁻⁵ Upgrade-II floor — a null result at full luminosity would carve into but not fully cover R4/R8; the box gap at (1.1–1.4)×10⁻⁵ still makes this the cleanest available literature cut. Hadronic decays reduce BR(A′→μμ) to ~10–30% in this mass range (R-ratio), which is already folded into the published projections. Nothing else in the literature touches this band: BaBar γ+μμ stops at ε ≈ 10⁻³; beam dumps (E137, ν-CAL, SHiP, FASER2) top out at ε ≲ 10⁻⁶ for m ≥ 1 GeV because γcτ falls short of their baselines.

**Split:** yes → {R4, R8, R9, R11}; no → {R0, R1, R2, R3, R5, R6, R7, R10}.

### Level 2 — novel experiment for R0+R1+R2+R3+R5+R6+R7+R10

These eight units live in the notorious blind spot ε ≈ 1–10×10⁻⁶ at m ≈ 1–1.6 GeV: proper decay lengths 0.5 mm–8 cm — too short-lived for any far beam-dump (SHiP/FASER2 upper reach ε ≲ 10⁻⁶ here) and too rare/displaced for prompt collider scans. But those decay lengths are *ideal* for a vertex-detector-scale displaced search. **Proposal: a dedicated displaced-dimuon dark-photon trigger at LHCb Upgrade II** — select μ⁺μ⁻ vertices with transverse displacement 1 mm–5 cm (VELO vertex resolution ~20–30 μm makes ≥1 mm trivially clean), reconstruct m(μμ) with LHCb's ~5–10 MeV dimuon mass resolution, and veto photon conversions by material maps and heavy flavor by impact-parameter topology. The measurement returns (m(A′), decay length) — dark-photon spectroscopy, not just detection.

The discriminating cut is the A′ **mass**: R1 (MZp pinned at 1.000 GeV) and R7 (1.00–1.01 GeV) predict m(μμ) ≈ 1.0 GeV; R2 (1.452–1.545) and R10 (1.545) predict m(μμ) ≥ 1.45 GeV — separated by ~50σ of mass resolution. Cut: **m(μμ) ≥ 1.4 GeV**. Honesty: R0, R3, R5, R6 span MZp = 1–1.6 GeV, so they straddle the cut (roughly 60–70% of their log-boxes below 1.4 GeV); I place them in the "no" outcome by box majority, flagged as marginal. Moreover R0/R3/R5/R6 (and R1 vs the low-mass tails) differ from each other mainly in the dark-sector quartics α2–α6, which at these values have **no accessible signature by any external measurement**: with no dark VEV they generate no tree-level mass splittings or new vertices to the SM, and the DM self-interaction they induce is σ/m ≈ λ²/(64π m³) ~ 10⁻⁶ cm²/g at λ = 10, m = 5 GeV — five orders of magnitude below cluster-merger bounds (~0.5–1 cm²/g). Those sub-degeneracies are honestly irreducible; the proposed node extracts everything nature makes visible, namely the (m, ε) tomography of the dark photon.

Feasibility: LHCb's existing displaced A′→μμ search worked only below 0.35 GeV; extending it to 1–1.6 GeV at ε ~ 3×10⁻⁶ requires the Upgrade II luminosity (300 fb⁻¹), a dedicated software-trigger displaced-dimuon line, and ~10× better displaced-background rejection (dominant systematic: material-interaction and b→μμX vertices faking displaced resonances) than the Run 1–2 analysis — a dedicated next-generation effort on an existing detector: rated **unlikely**.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_yes_yes_yes_no_no_yes",
      "lit_review": {
        "name": "LHCb inclusive dark-photon search (Run 3 - Upgrade II)",
        "observable": "prompt A'->mumu peak, m(mumu) 1.0-2.6 GeV, epsilon >= 1.5e-5 ?",
        "refs": ["arXiv:1603.08926", "arXiv:1910.06926"],
        "reasoning": "All 12 units are one Lagrangian: 4-5.6 GeV scalar DM secluded-annihilating via a 1-2.6 GeV visibly-decaying dark photon (2*MDM > MZp, so BR(A'->SM)=1); relic pins gU1p~0.042 and the h->inv window pins alpha1~0.004 in every region, leaving kinetic mixing epsilon as the only spread observable. R4/R8/R9/R11 have epsilon = 1.4e-5 - 1.8e-4 (prompt, ctau < 0.3 mm), at or above the published LHCb prompt-scan projection of epsilon ~ 1.5-3e-5 for m = 1-3 GeV at 15-300 fb^-1; R0/R1/R2/R3/R5/R6/R7/R10 have epsilon = 1e-6 - 1.1e-5 (1-3 orders below reach AND mm-cm displaced, failing the prompt selection twice). A real box gap exists at (1.1-1.4)e-5. Marginal: lower edges of R4 (1.4e-5) and R8 (1.8e-5) sit near the Upgrade-II floor. This is NOT the catalog's Z' dilepton observable, which is a high-mass Drell-Yan recast with no reach at these masses.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R4", "R8", "R9", "R11"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R5", "R6", "R7", "R10"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R5+R6+R7+R10",
          "name": "LHCb Upgrade II displaced-dimuon dark-photon trigger",
          "observable": "displaced mumu vertex (1 mm - 5 cm), m(mumu) >= 1.4 GeV ?",
          "reasoning": "These units occupy the beam-dump/collider blind spot epsilon ~ 1e-6 - 1e-5 at m ~ 1-1.6 GeV, giving ctau = 0.5 mm - 8 cm: ideal for a vertex-detector-scale displaced search. The measurement returns (mass, decay length); the mass cut splits R1 (MZp pinned 1.000 GeV) and R7 (1.00-1.01) from R2 (1.452-1.545) and R10 (1.545) by ~50x the 5-10 MeV dimuon mass resolution. R0/R3/R5/R6 span 1-1.6 GeV and straddle the cut; placed in 'no' by box majority (marginal). Their residual mutual degeneracy is in dark quartics alpha2-alpha6 only, which produce no external signature (no dark VEV; self-interaction sigma/m ~ 1e-6 cm^2/g, 1e5 below cluster bounds) and is honestly irreducible.",
          "feasibility": "Closest instrument: LHCb (VELO vertex resolution 20-30 um, dimuon mass resolution 5-10 MeV; existing displaced A'->mumu search limited to m < 0.35 GeV). Requires Upgrade II 300 fb^-1, a dedicated displaced-dimuon trigger line, and ~10x better displaced-background rejection; dominant systematic: material-interaction and heavy-flavour vertices faking displaced resonances.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R2", "R10"]},
            {"label": "no", "regions": ["R0", "R1", "R3", "R5", "R6", "R7"]}
          ]
        }
      ]
    }
  ]
}
```