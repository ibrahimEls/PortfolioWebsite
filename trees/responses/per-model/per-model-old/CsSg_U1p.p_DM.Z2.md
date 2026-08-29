I'll verify the arXiv references I plan to cite before composing the answer.
All three references verified against arXiv (CMS 1912.04776: narrow dimuon resonance search covering 11.5–45 GeV; LHCb 1910.06926: A′→μμ up to 70 GeV with the strongest bounds at 10.6–30 GeV; Curtin–Essig–Gori–Shelton 1412.0018: EW-precision bound ε ≲ 3×10⁻²). Here is the complete degeneracy-breaking analysis.

---

## Physics setup common to both leaves

In this model the relic and the indirect-detection signal are **secluded**: the complex scalar annihilates SS → Z′Z′ through the dark gauge coupling (gU1p ≈ 0.2–0.47 gives ⟨σv⟩ ≈ πα_D²/M_DM² ~ 10⁻²⁶–10⁻²⁴ cm³/s at these masses, exactly the shared "10–100× CTA (WW)" class), and the boosted Z′ pairs decay through kinetic mixing ε into photon-current final states. Because m_Z′ ≪ M_DM everywhere, the cascade γ/ν spectra are nearly self-similar across regions — so dwarf-vs-GC ratios, CMB energy injection, and AMS-02 antiprotons all scale with the *same* ⟨σv⟩ shared by every region in a leaf and **cannot split within a leaf** (CMB/p̄ tension at the top of the ⟨σv⟩ band applies leaf-wide, uniformly). The quantity our 18-observable catalog never probes is the **(m_Z′, ε) plane below the high-mass dilepton recast**: a kinetically-mixed Z′ with m_Z′ = 1–70 GeV and 2M_DM > m_Z′ (no invisible width) is *precisely* the minimal dark-photon benchmark of the LHCb/CMS low-mass searches, so published ε limits apply with no model translation. That plane is also where the regions separate.

## Leaf `root_yes_yes_no` (R0–R3)

Region coordinates in the (m_Z′, ε) plane: **R3** (39 GeV, ε = 0.1), **R1** (38.9–39.7 GeV, ε ≤ 3×10⁻³), **R2** (15.5–28 GeV, ε = 2–6.9×10⁻³), **R0** (1.4–9.5 GeV, ε undetermined: 4.6×10⁻⁵–0.1).

**Lit split — CMS dimuon scouting, 11.5–45 GeV (arXiv:1912.04776).** Current data exclude ε ≳ 0.01 across this window (σB limits of order a few fb). Per region:
- **R3**: ε = 0.1 → rate scales as ε², i.e. ~100× the current exclusion, σB(μμ) ~ O(10²) fb at 39 GeV. Unambiguously *seen* (in fact already excluded — a genuine catalog gap). Independently corroborated by LEP/LHC electroweak precision, which caps ε ≲ 3×10⁻² for m_Z′ < m_Z (arXiv:1412.0018).
- **R1**: ε ≤ 3×10⁻³ → ≤ 0.09× the current limit. Not seen.
- **R2**: ε ≤ 6.9×10⁻³ → ≤ 0.5× the limit today; HL-LHC scouting (×20 lumi, ~×2 in ε) could clip the very top of R2 — marginal, so R2 is honestly assigned "not seen".
- **R0**: m_Z′ ≤ 9.51 GeV sits entirely *below* the 11.5 GeV window edge → guaranteed empty **independent of ε**. This determinism is why I chose the mass-windowed CMS search rather than an EWPO or LHCb test (both of which R0's four-decade ε range straddles).

Outcome: {R3} vs {R0, R1, R2}. **Splits!**

**Novel node on R0+R1+R2 — Tera-Z radiative-return dark-photon scan (e⁺e⁻ → γ + Z′→ℓℓ at a Z-factory, plus LHCb-Upgrade-II prompt μμ), reaching ε ≈ 5×10⁻⁵ for 1–10 GeV and ε ≈ few×10⁻⁴ for 10–30 GeV.** The three regions occupy *disjoint mass windows below 30 GeV*, so the discovered-resonance mass (or its absence) is the classifier:
- **m < 10 GeV → R0**: only R0 has m_Z′ there; its ε floor (4.6×10⁻⁵) is at the proposed reach, and ~90% of its log-uniform ε range lies above 10⁻⁴ — a small low-ε tail (~10%) could leak to "none"; stated marginality.
- **10–30 GeV → R2**: guaranteed — ε ≥ 2×10⁻³ is ≥ 5–10× above even the conservative FCC-ee radiative-return reach at 15.5–28 GeV.
- **nothing below 30 GeV → R1**: guaranteed by kinematics (its Z′ sits at 38.9–39.7 GeV); a bonus resonance *at* 39 GeV for the high-ε part of R1 would further confirm.
Feasibility: LHCb Upgrade II projects ε ~ 10⁻⁴ (2–10 GeV, 300 fb⁻¹); FCC-ee Tera-Z radiative return projects ε ~ (2–5)×10⁻⁴ up to m_Z; the 5×10⁻⁵ floor needs a factor ~2–4 in ε (4–16 in rate) beyond those — a dedicated next-generation effort. Dominant systematic: the irreducible Drell-Yan/ISR ℓℓ continuum shape vs dimuon mass resolution. Rating: **unlikely**. This node fully resolves the leaf.

## Leaf `root_no_yes_no` (R0–R5)

Region coordinates: **R3** (4.3–24.8 GeV, ε = 0.021–0.038 — the high-mixing outlier, disjoint from all others), **R4** (3.4–5.1 GeV, ε ≤ 4.3×10⁻⁵ — ultra-dark, disjoint from all but R0's floor), **R5** (6.4–34.7 GeV, ε = 3.5–8.4×10⁻³), **R1** (16–66.5 GeV, ε = 7.2×10⁻⁴–8.4×10⁻³), **R2** (5–21.3 GeV, ε = 1.3×10⁻⁴–1.3×10⁻³), **R0** (5.5–44.9 GeV, ε wide).

**Lit split — LHCb + CMS prompt dark-photon dimuon search, 2–45 GeV (arXiv:1910.06926, arXiv:1912.04776).** LHCb excludes ε ≳ (1–3)×10⁻³ over 2–10 GeV (world-best at 10.6–30 GeV as well); CMS scouting excludes ε ≳ 0.01 at 11.5–45 GeV.
- **R3**: ε ≥ 0.021 is 10–30× above the ε limit (10²–10³× in rate) over essentially its whole mass span — LHCb covers 4.3–10 GeV, CMS covers 11.5–24.8 GeV; only the ϒ-veto sliver 9.5–11.5 GeV (~11% of R3's log-mass range) escapes. *Seen.*
- **R4** (≤ 4.3×10⁻⁵, 20× below any reach), **R2** (≤ 1.3×10⁻³), **R1** and **R5** (≤ 8.4×10⁻³ vs 0.01 at their masses — top edges marginal), and **R0** (top edge 1.4×10⁻² marginally grazes the CMS limit in a thin sliver; bulk below): *not seen.*

Outcome: {R3} vs {R0, R1, R2, R4, R5}. **Splits!**

**Novel node 1 on R0+R1+R2+R4+R5 — next-generation dilepton Z′ scan (LHCb-U2 + Tera-Z class), reach ε ≈ 10⁻⁴ over 1–70 GeV; when a resonance is found, σB pins ε to ~10%.** Three outcomes:
- **No resonance → R4**: guaranteed — its ε ceiling (4.3×10⁻⁵) is below half the reach. (R0's low-ε tail, ~22% of its log range, could also land here; stated.)
- **Resonance with fitted ε ≥ 2×10⁻³ → {R1, R5}**: R5 always qualifies (3.5–8.4×10⁻³); R1 straddles the cut (~58% of its log range above) — marginal, assigned here.
- **Resonance with ε < 2×10⁻³ → {R0, R2}**: R2 always qualifies (≤ 1.3×10⁻³; its floor 1.3×10⁻⁴ is just above reach — marginal at the bottom); R0's bulk (~69% of log range below the cut) assigned here.
Feasibility: same instruments as the leaf-1 node (LHCb-U2 ε ~ 10⁻⁴ at 2–10 GeV; FCC-ee radiative return few×10⁻⁴ to 70 GeV, needing ~2–3× improvement); systematic: DY/ISR continuum. Rating: **unlikely**.

**Novel node 2 on R1+R5 — CTA Galactic-Centre spectral endpoint.** The cascade photon spectrum cuts off at E_max ≈ M_DM, and this leaf's signal is 10–100× the CTA sensitivity, so the endpoint is measurable to roughly ±7% (CTA energy resolution) ≈ ±15–20 GeV with high statistics. M_DM is 275–311 GeV in R5 vs 167–312 GeV in R1: cut at 270 GeV → "yes" is R5 (its floor 275 GeV sits one resolution unit above the cut — marginal but workable with the large event count); "no" is R1 (~74% of its mass range; the top quartile of R1 leaks to "yes" — stated marginality; this is the honest best since R1's mass range envelops R5's from below). Feasibility: CTA is funded and under construction; no improvement factor needed, systematic is the GC diffuse-emission model under the endpoint. Rating: **possible**.

**Novel node 3 on R0+R2 — mass of the discovered dilepton resonance.** R0's observable box (m_Z′, ε) strictly *contains* R2's, so point-wise separation is impossible in principle; the only deterministic handle is one-sided: R2 has m_Z′ ≤ 21.3 GeV, while R0 extends to 44.9 GeV. Once novel node 1 has found the resonance, its mass is known to ≪1%: **m(ℓℓ) > 22 GeV uniquely identifies R0** (no R2 point exists there); m ≤ 22 GeV leaves both (about two-thirds of R0's log-mass range also lies below 22 GeV — a population-level, not point-wise, discriminator, stated plainly). The residual sub-22 GeV degeneracy is physical: R0 and R2 differ only in the dark-sector quartics (α3: R2 ≥ 0.64 vs R0 spanning), which set the unobservable sr–si splitting and have no signal in any accessible channel. Feasibility: mass measurement of a found resonance is free with the scan; rating: **possible** (contingent on the node-1 discovery).

```json
{
  "model": "CsSg_U1p[+]_DM.Z2",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_no",
      "lit_review": {
        "name": "CMS dimuon scouting search",
        "observable": "prompt mumu resonance in 11.5-45 GeV with sigma*B >= 10 fb ?",
        "refs": ["arXiv:1912.04776", "arXiv:1412.0018"],
        "reasoning": "The Z' is a minimal kinetically-mixed dark photon (no invisible width, 2*MDM >> mZp), so published limits apply directly. R3 (mZp=39 GeV, eps=0.1) is ~10x above the current CMS scouting epsilon limit (~0.01), i.e. ~100x in rate, sigma*B ~ O(100) fb: unambiguously seen, and independently corroborated by the EW-precision cap eps < 3e-2. R1 (eps <= 3e-3) is <= 0.09x the limit; R2 (eps <= 6.9e-3) is <= 0.5x (HL-LHC could clip only its very top: marginal, assigned not-seen). R0 (mZp <= 9.51 GeV) lies entirely below the 11.5 GeV window edge, so its outcome is 'not seen' independent of its undetermined eps -- the reason a mass-windowed search was chosen over EWPO/LHCb tests that R0's four-decade eps range straddles.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R3"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2",
          "name": "Tera-Z radiative-return dark-photon scan",
          "observable": "ee->gamma+(Z'->ll) resonance: m < 10 GeV / 10-30 GeV / none ?",
          "reasoning": "The three regions occupy disjoint Z' mass windows below 30 GeV, so the discovered-resonance mass (or its absence) classifies them. m<10 GeV -> R0 only (eps floor 4.6e-5 is at the proposed reach; ~90% of its log-uniform eps range is above 1e-4, a ~10% low-eps tail could leak to 'none'). 10-30 GeV -> R2 guaranteed (eps >= 2e-3 is >= 5-10x above even conservative FCC-ee radiative-return reach at 15.5-28 GeV). Nothing below 30 GeV -> R1 guaranteed by kinematics (its Z' sits at 38.9-39.7 GeV; a bonus 39 GeV resonance for high-eps R1 points would further confirm). Fully resolves the leaf.",
          "feasibility": "Closest instruments: LHCb Upgrade II prompt A'->mumu (projected eps ~ 1e-4, 2-10 GeV, 300/fb) and FCC-ee Tera-Z radiative return (projected eps ~ (2-5)e-4 up to mZ). Required floor 5e-5 needs a factor ~2-4 in eps (4-16 in rate) beyond those projections. Dominant systematic: irreducible Drell-Yan/ISR dilepton continuum shape versus dimuon mass resolution.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "m < 10 GeV", "regions": ["R0"]},
            {"label": "10-30 GeV", "regions": ["R2"]},
            {"label": "none", "regions": ["R1"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes_no",
      "lit_review": {
        "name": "LHCb+CMS prompt dark-photon dimuon search",
        "observable": "prompt mumu resonance in 2-45 GeV with sigma*B >= 5 fb ?",
        "refs": ["arXiv:1910.06926", "arXiv:1912.04776"],
        "reasoning": "LHCb prompt A'->mumu excludes eps > (1-3)e-3 over 2-10 GeV (world-best also at 10.6-30 GeV); CMS scouting excludes eps > ~0.01 at 11.5-45 GeV. R3 (eps = 0.021-0.038) is 10-30x above the eps limit (100-1000x in rate) over its whole mass span 4.3-24.8 GeV except the Upsilon-veto sliver 9.5-11.5 GeV (~11% of its log-mass range): seen. All others sit below current sensitivity: R4 (eps <= 4.3e-5, 20x below any reach), R2 (<= 1.3e-3), R1 and R5 (<= 8.4e-3 vs ~0.01, top edges marginal), R0 (top edge 1.4e-2 grazes the CMS limit in a thin sliver; bulk below): assigned not seen.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R3"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R4", "R5"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R4+R5",
          "name": "Next-generation dilepton Z' scan",
          "observable": "ll resonance in 1-70 GeV: none / fitted eps >= 2e-3 ?",
          "reasoning": "Reach eps ~ 1e-4 across 1-70 GeV; once a resonance is found, sigma*B pins eps to ~10%. No resonance -> R4 guaranteed (eps ceiling 4.3e-5 below half the reach; R0's low-eps tail, ~22% of its log range, could leak here). Fitted eps >= 2e-3 -> R5 always (3.5-8.4e-3) plus R1 assigned (straddles the cut, ~58% of log range above: marginal). eps < 2e-3 -> R2 always (<= 1.3e-3; floor 1.3e-4 just above reach, marginal at the bottom) plus R0's bulk (~69% of log range).",
          "feasibility": "Closest instruments: LHCb Upgrade II (projected eps ~ 1e-4 at 2-10 GeV) and FCC-ee Tera-Z radiative return (few x 1e-4 up to 70 GeV); needs ~2-3x beyond those projections over the full window. Dominant systematic: Drell-Yan/ISR dilepton continuum shape.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "none", "regions": ["R4"]},
            {"label": "eps >= 2e-3", "regions": ["R1", "R5"]},
            {"label": "eps < 2e-3", "regions": ["R0", "R2"]}
          ]
        },
        {
          "attach_to": "R1+R5",
          "name": "CTA Galactic-Centre spectral endpoint",
          "observable": "gamma-ray spectral cutoff E_max >= 270 GeV ?",
          "reasoning": "The SS->Z'Z' cascade photon spectrum cuts off at E_max ~ MDM, and this leaf's flux is 10-100x CTA sensitivity, so the endpoint is measurable to ~ +/-7% (~15-20 GeV). MDM is 275-311 GeV in R5 vs 167-312 GeV in R1: cut at 270 GeV gives yes -> R5 (floor 275 GeV one resolution unit above the cut, marginal but workable with high statistics) and no -> R1 (~74% of its mass range; the top quartile leaks to yes -- honest marginality, since R1's mass range envelops R5's from below).",
          "feasibility": "CTA is funded and under construction; required energy resolution (~7% above 100 GeV) is its design spec, improvement factor ~1x. Dominant systematic: Galactic-Centre diffuse-emission model under the spectral cutoff.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R5"]},
            {"label": "no", "regions": ["R1"]}
          ]
        },
        {
          "attach_to": "R0+R2",
          "name": "Discovered-resonance mass measurement",
          "observable": "m(ll resonance) > 22 GeV ?",
          "reasoning": "R0's observable (mZp, eps) box strictly contains R2's, so point-wise separation is impossible in principle; the deterministic handle is one-sided: R2 has mZp <= 21.3 GeV while R0 extends to 44.9 GeV. The scan that finds the resonance measures its mass to <<1%: m > 22 GeV uniquely identifies R0 (no R2 point exists there); m <= 22 GeV leaves both (about two-thirds of R0's log-mass range also lies there -- a population-level discriminator only). The residue is physical: below 22 GeV, R0 and R2 differ only in dark quartics (alpha3: R2 >= 0.64) that set the unobservable sr-si splitting.",
          "feasibility": "Free with the next-generation dilepton scan (closest instruments LHCb Upgrade II / FCC-ee); dilepton mass resolution <1% is standard, improvement factor 1x. Contingent on the node-1 discovery; dominant limitation is the intrinsic one-sidedness, not instrumentation.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R0"]},
            {"label": "no", "regions": ["R2"]}
          ]
        }
      ]
    }
  ]
}
```