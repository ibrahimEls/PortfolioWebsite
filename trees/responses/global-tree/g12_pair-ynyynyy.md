## Reasoning

### What is actually variable in this leaf

All 13 units belong to **one** Lagrangian (`CsSg_U1p[+]_DM.Z2+3+4+5`: complex scalar singlet `s = (sr + i·si)/√2` with dark charge −1, plus a dark photon Z′ that mixes kinetically with hypercharge). Before choosing an observable I checked which of the 11 scanned parameters can move a *measurable* quantity, because most of them cannot:

**1. `gU1p` is pinned by the relic density — it carries no information.**
Since M_DM ≈ 5 GeV and M_Z′ ≈ 1–2.2 GeV, the Z′ is far too light to decay to DM, and the annihilation channel is the secluded one, `s s* → Z′Z′` through the gauge seagull (α_D = g′²/4π = 1.42×10⁻⁴):

σv ≈ π α_D²/M_DM² = π(1.42×10⁻⁴)²/(5 GeV)² = 2.5×10⁻⁹ GeV⁻² ≈ **3.0×10⁻²⁶ cm³/s**

— i.e. exactly thermal. That is why every single region reports gU1p ∈ [0.0417, 0.0443], a ±3% spread. **The indirect-detection *rate* is therefore identical to ~10% in all 13 units and can never split them.** Only the *shape* of the annihilation spectrum (which depends on M_DM and M_Z′) can.

**2. `alpha1` is spent by the path.** The portal is H²sr², so BR(h→inv) ∝ α1². The path fixes BR ∈ [0.032, 0.1] — a factor 3 in BR, i.e. a factor 1.73 in coupling — and indeed α1 spans [0.0035, 0.0062], a factor 1.77. The mapping is one-to-one and complete. The same α1 fixes the Higgs-portal σ_SI (all units sit in the same "XLZD yes / LZ no" band), so **nothing in Higgs physics or in a better xenon/argon experiment can split this leaf** — that is already the path.

**3. The dark quartics α2–α6 are unobservable.** They generate DM self-interaction only through contact terms: with λ = 10 (the largest α4/α3 anywhere in the leaf) and M = 5 GeV,
σ_self ≈ λ²/(256π M²) = 5×10⁻³ GeV⁻² = 1.9×10⁻³⁰ cm² → **σ/m ≈ 2×10⁻⁷ cm²/g**, i.e. 10⁶ below Bullet-Cluster/cluster-shape sensitivity (~0.1–1 cm²/g). Z′-exchange self-scattering is worse (5×10⁻¹⁰ cm²/g), and the Z′ current is *off-diagonal* (sr↔si), so it also gives no elastic Z′-mediated direct detection. The quartics only control the heavy partner si (pushed to m_si ≈ √(M_DM² + α1v²/2) ≈ 12 GeV by the portal, which couples to sr alone) and its decay si → sr Z′ — an early-universe-only effect with no present-day signature. **This is a genuine, and I think unavoidable, conclusion: α2–α6 are dark.**

**So the only physical handles left are ε, M_Z′ and M_DM.** Everything below uses those three, in three physically distinct measurement modalities (accelerator dark-photon production; resonance mass spectroscopy; cosmic-ray spectral edge).

### Level 1 — lit review: LHCb displaced + prompt A′→μ⁺μ⁻

The Z′ is a *visible* dark photon (2M_DM ≈ 10 GeV ≫ M_Z′), so it decays back to SM through ε. Its lifetime is
cτ ≈ 207 μm × (10⁻⁵/ε)² × (1 GeV/M_Z′), and at LHCb boosts (γ ≈ 20) the lab decay length is:

| ε | M_Z′ | cτ | lab flight |
|---|---|---|---|
| 1.8×10⁻⁴ | 1.3 | 0.5 μm | ~10 μm (prompt) |
| 2×10⁻⁵ | 1.3 | 40 μm | ~0.8 mm (VELO-displaced) |
| 1×10⁻⁵ | 1.0 | 207 μm | ~4 mm (VELO-displaced) |
| 1×10⁻⁶ | 1.2 | 1.7 cm | ~35 cm (outside VELO) |

The LHCb inclusive dimuon programme (prompt + displaced, Run 3 → Upgrade II) bottoms out near **ε ≈ 10⁻⁵ for m_μμ = 1–2.2 GeV**: below that the prompt search is drowned by Drell-Yan/heavy-flavour and the displaced search loses the vertex out of the VELO. That threshold falls in exactly the right place:

- units with ε_max ≤ 1.1×10⁻⁵: R0 (3.0e-6), R1 (8.9e-6), R2 (2.1e-6), R3 (1.0e-6), R4 (3.4e-6), R6 (1.3e-6), R7 (1.1e-5), R10 (3.9e-6), R11 (2.8e-6)
- units with ε_min ≥ 1.4×10⁻⁵: R5 (1.4e-5–9.2e-5), R8 (1.8e-5–1.2e-4), R9 (2.1e-5–1.6e-4), R12 (6.6e-5–1.8e-4)

This is the one **completely clean, non-overlapping** cut available anywhere in this leaf: the largest ε in the "no" group (1.105×10⁻⁵, R7) sits below the smallest ε in the "yes" group (1.375×10⁻⁵, R5). A cut at ε = 1.2×10⁻⁵ separates {R5,R8,R9,R12} from the other nine with zero region overlap. Note this is *not* a refinement of anything on the path — the catalog contains no accelerator dark-photon production observable at all (the collider entries are HL-LHC topology reach and a Z′ dilepton *resonance* recast, both irrelevant at m_Z′ ≈ 1 GeV).

Honest caveat: the exact ε floor of the LHCb search at 1–2 GeV is a projection with O(2) uncertainty; if it lands at 2×10⁻⁵ instead, R5 migrates. The split is robust for R9/R12 (ε up to 1.6–1.8×10⁻⁴) and marginal for R5.

### Level 2a — inside the high-ε group {R5, R8, R9, R12}

Here a signal *has* been seen, so the resonance mass comes essentially for free (LHCb dimuon mass resolution is ~5–8 MeV at 1.5 GeV). M_Z′ per unit: R5 **1.377–2.2 GeV**, R8 1.247–1.319, R9 1.0–1.545, R12 1.0–1.598. A peak above **1.6 GeV can only be R5** — no other unit in the leaf reaches there. This is a one-sided discriminator (roughly half of R5's points lie below 1.6 GeV and would be misassigned), which I state plainly rather than dress up.

For the remainder {R8, R9, R12} I use the **positron box**. Because annihilation is `s s* → Z′Z′` with each Z′ carrying E = M_DM in the halo frame, and Z′→e⁺e⁻ has BR ≈ 0.24 at m ≈ 1.3 GeV (R(s) ≈ 2.2), the injected positron spectrum is a *box* with edges E± = (M_DM/2)(1 ± β), β = √(1 − M_Z′²/M_DM²) ≈ 0.95–0.98. Predicted upper edges:

- R8: 4.75–4.81 GeV
- R9: 4.64–4.93 GeV
- R12: **4.76–5.56 GeV** (median ≈ 5.1)
- (R5, for reference: 4.38–5.23 GeV)

A cut at 4.9 GeV puts R8 entirely and R9 essentially entirely below, R12 mostly above. Marginal — R12's low-mass tail overlaps R9 — and I flag it as such. **R8 and R9 remain irreducibly degenerate**: they differ only in α3 (3.3–10 vs 0.001) and α6 (0.001 vs 0.07–0.37), which by the argument above have no present-day observable, and their M_DM/M_Z′/ε ranges are nested rather than disjoint. I see no experiment, real or invented, that separates them.

### Level 2b — inside the low-ε group (nine units)

Nothing existing reaches ε < 10⁻⁵ at m ≈ 1–1.5 GeV: this is the genuine "wedge". Beam dumps (SHiP, DarkQuest) need cτγ ≳ 10 m to reach their decay volume, which at 1 GeV requires ε ≲ 3×10⁻⁷; colliders need ε ≳ 10⁻⁵. At ε ~ 10⁻⁶–10⁻⁵ the Z′ flies 4 mm–35 cm — too far for a vertex detector's prompt window, too short for a dump. Hence the novel concept: a **thin-target, high-intensity proton fixed-target run with a segmented silicon decay volume starting ~1 cm downstream**, covering flight distances 1 cm–1 m and m_μμ = 0.5–2.5 GeV.

Region ε ceilings: only R1 (8.9×10⁻⁶) and R7 (1.1×10⁻⁵) exceed 4×10⁻⁶; the other seven all cap below 3.94×10⁻⁶ (R10) — so a threshold at ε = 4×10⁻⁶ isolates {R1, R7} cleanly at the region level.

For the seven remaining, the mass again: M_Z′ ranges are R0 1.0–1.545, R2 **1.494–1.545**, R3 1.0–1.545, R10 **1.545 (single value)**, versus R4 = 1.0 exactly, R6 ≤ 1.452, R11 ≤ 1.484. A peak at ≥ 1.49 GeV therefore excludes R4, R6, R11 outright. But measuring a peak at ε ~ 10⁻⁶ requires ~40× the rate reach of the previous node — beyond any proposed instrument, so I rate it speculative rather than pretend otherwise.

**Final residual degeneracies**, all stated honestly: {R8,R9}, {R1,R7}, {R0,R2,R3,R10}, {R4,R6,R11}. Within each of these the units differ *only* in α2–α6 (and in sub-5% slivers of M_DM/M_Z′/ε that are nested, not disjoint). Given σ/m ≈ 2×10⁻⁷ cm²/g and a 12 GeV partner that is unstable and cosmologically irrelevant, I do not believe these are separable by any experiment, and I would rather say so than invent one.

*Reference note:* the prompt requires a single tool-free reply, so I could not run WebSearch verification in this message; I have therefore cited only the two arXiv IDs I am confident of — arXiv:1603.08926 (Ilten, Soreq, Thaler, Williams, Xue, "Proposed Inclusive Dark Photon Search at LHCb", PRL 116, 251803) and arXiv:1910.06926 (LHCb, "Search for A′→μ⁺μ⁻ Decays", PRL 124, 041801) — and dropped a third (a DarkQuest/SeaQuest dark-sector projection) whose ID I could not verify.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_no_yes_yes_no",
      "lit_review": {
        "name": "LHCb displaced+prompt dimuon dark-photon search",
        "observable": "A'->mu mu peak, 1-2.2 GeV: eps >= 1.2e-5 ?",
        "refs": ["arXiv:1603.08926", "arXiv:1910.06926"],
        "reasoning": "The Z' is a visible dark photon (2*M_DM ~ 10 GeV >> M_Z' = 1-2.2 GeV), so it decays to SM pairs via kinetic mixing; the catalog contains no accelerator dark-photon production observable at all. Lifetime cτ ≈ 207 μm × (1e-5/eps)^2 × (1 GeV/M_Z'), giving lab flight lengths at LHCb (γ≈20) of ~10 μm at eps=1.8e-4, ~0.8 mm at eps=2e-5, ~4 mm at eps=1e-5, ~35 cm at eps=1e-6. The LHCb inclusive prompt+displaced dimuon programme (Run 3 to Upgrade II) bottoms out near eps ≈ 1e-5 in the 1-2.2 GeV window. Region eps ranges: R5 1.4e-5-9.2e-5, R8 1.8e-5-1.2e-4, R9 2.1e-5-1.6e-4, R12 6.6e-5-1.8e-4 (all above), versus R0 <=3.0e-6, R1 <=8.9e-6, R2 <=2.1e-6, R3 <=1.0e-6, R4 <=3.4e-6, R6 <=1.3e-6, R7 <=1.1e-5, R10 <=3.9e-6, R11 <=2.8e-6 (all below). This is the only fully non-overlapping cut in the leaf: max of the 'no' group (1.105e-5) < min of the 'yes' group (1.375e-5). Caveat: the projected eps floor carries an O(2) uncertainty; the split is robust for R9/R12 and marginal for R5. Note eps is the only free handle besides M_Z' and M_DM: gU1p is pinned to 0.042 by the relic (sigma v = pi alpha_D^2/M^2 = 3.0e-26 cm^3/s, thermal), alpha1 is fully spent by the BR(h->inv) 0.032-0.1 band on the path, and the dark quartics alpha2-alpha6 give sigma/m ~ 2e-7 cm^2/g, a million times below cluster bounds.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R5", "R8", "R9", "R12"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R6", "R7", "R10", "R11"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R5+R8+R9+R12",
          "name": "Dark-photon lineshape spectroscopy",
          "observable": "m(mu+mu-) resonance peak >= 1.6 GeV ?",
          "reasoning": "Once the resonance is seen (eps >= 1.2e-5), its mass is measured for free. Predicted M_Z': R5 1.377-2.2 GeV, R8 1.247-1.319 GeV, R9 1.0-1.545 GeV, R12 1.0-1.598 GeV. No unit anywhere in this leaf except R5 reaches above 1.6 GeV, so a peak at or above 1.6 GeV uniquely identifies R5. Honestly one-sided: roughly half of R5's points sit below 1.6 GeV and would land in the 'no' branch, so a negative answer is uninformative about R5.",
          "feasibility": "LHCb (existing): dimuon invariant-mass resolution ~5-8 MeV (0.5%) at 1.5 GeV, versus the ~100 MeV precision needed here - improvement factor 1, no upgrade required beyond the discovery dataset itself. Dominant systematic: separating a narrow Z' peak from SM light-meson structure (rho/omega/phi) below 1.1 GeV and from the smooth Drell-Yan/heavy-flavour continuum at 1.6-2.2 GeV; at eps ~ 2e-5 the sample is displaced and essentially background-free.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R5"]},
            {"label": "no", "regions": ["R8", "R9", "R12"]}
          ]
        },
        {
          "attach_to": "R8+R9+R12",
          "name": "Cosmic-ray positron box-edge spectrometer",
          "observable": "e+ box upper edge >= 4.9 GeV ?",
          "reasoning": "Annihilation is secluded, s s* -> Z'Z', each Z' carrying E = M_DM in the halo frame; Z'->e+e- has BR ~ 0.24 at m ~ 1.3 GeV (R(s) ~ 2.2), giving ~0.5 positrons per annihilation in a box spectrum with edges E± = (M_DM/2)(1 ± beta), beta = sqrt(1 - M_Z'^2/M_DM^2) = 0.95-0.98. Predicted upper edges: R8 4.75-4.81 GeV, R9 4.64-4.93 GeV, R12 4.76-5.56 GeV (median ~5.1). A cut at 4.9 GeV puts R8 entirely and R9 essentially entirely below and R12 mostly above. Marginal: R12's low-M_DM tail overlaps R9. The overall rate cannot help - sigma v = 3.0e-26 cm^3/s to within 10% in every unit because gU1p is relic-pinned - so only the edge POSITION carries information. R8 and R9 are left irreducibly degenerate: they differ only in alpha3 (3.3-10 vs 0.001) and alpha6 (0.001 vs 0.07-0.37), which have no present-day observable, and their M_DM/M_Z'/eps ranges are nested rather than disjoint.",
          "feasibility": "AMS-02 (operating): positron flux measured to 1-2% with ~2-3% energy resolution at 5 GeV, so the edge position itself is already resolvable; what is missing is the ability to see a few-percent spectral break on a steeply falling secondary-positron background. Requires ~3-10x better control of the secondary production cross sections and solar modulation below 10 GeV; the closest proposed instrument with the needed statistics is a next-generation space magnetic spectrometer (AMS-100 class). Dominant systematic: solar modulation and secondary e+ production modelling below 10 GeV, which is exactly where the edge sits.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R12"]},
            {"label": "no", "regions": ["R8", "R9"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R6+R7+R10+R11",
          "name": "Near-target cm-baseline displaced dimuon spectrometer",
          "observable": "eps >= 4e-6 at m(mu mu) = 1-1.5 GeV ?",
          "reasoning": "At eps ~ 1e-6 to 1e-5 with M_Z' ~ 1-1.5 GeV the Z' flies 4 mm to 35 cm in the lab - too far for a collider vertex detector's prompt window, too short to reach a beam-dump decay volume 10-50 m downstream (which would need eps <~ 3e-7). The proposal fills that wedge: a thin production target with a segmented silicon decay volume beginning ~1 cm downstream, instrumented for flight distances 1 cm to 1 m and m_mumu = 0.5-2.5 GeV. Region eps ceilings: only R1 (8.9e-6) and R7 (1.1e-5) exceed 4e-6; R0 3.0e-6, R2 2.1e-6, R3 1.0e-6, R4 3.4e-6, R6 1.3e-6, R10 3.9e-6, R11 2.8e-6 all cap below it, so the threshold isolates {R1, R7} at region level. R1 and R7 cannot be separated further: M_Z' is 1.0-1.016 vs 1.0, M_DM 4.83-5.15 vs 5.00-5.05 (nested), and they differ only in alpha2/alpha5.",
          "feasibility": "Closest instruments: DarkQuest/SpinQuest at Fermilab (120 GeV protons, decay volume 5-12 m from the dump, reach eps ~ 1e-5-1e-6 but only for m_A' <~ 1 GeV, where the boost is favourable) and the LHCb VELO displaced dimuon search (~1e-5 at 1 GeV). Pushing the reach to eps = 4e-6 at 1-1.5 GeV is a ~6x improvement in eps, i.e. ~40x in signal rate - a dedicated next-generation run, not an existing capability. Dominant systematic: prompt heavy-flavour (D -> mu X) and K/pi decay-in-flight backgrounds at displacements of only a few cm, plus vertex resolution and secondary interactions in the target material.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R1", "R7"]},
            {"label": "not seen", "regions": ["R0", "R2", "R3", "R4", "R6", "R10", "R11"]}
          ]
        },
        {
          "attach_to": "R0+R2+R3+R4+R6+R10+R11",
          "name": "Multi-MW beam dump dark-photon mass scan",
          "observable": "m(mu+mu-) resonance peak >= 1.49 GeV ?",
          "reasoning": "Predicted M_Z': R2 1.494-1.545 GeV and R10 exactly 1.545 GeV sit entirely at or above the cut; R0 and R3 both span 1.0-1.545 GeV and can reach it; whereas R4 is fixed at 1.0 GeV, R6 caps at 1.452 GeV and R11 at 1.484 GeV, so none of those three can ever produce a peak at 1.49 GeV or above. A positive answer therefore excludes R4, R6, R11 outright. R0/R2/R3/R10 stay degenerate afterwards: their eps ceilings (3.0e-6, 2.1e-6, 1.0e-6, 3.9e-6) differ only within a factor 4 at the 1e-6 level, which is beyond any conceivable rate measurement, and they are otherwise distinguished only by alpha2-alpha6.",
          "feasibility": "This requires first DETECTING the resonance at eps down to ~1e-6, i.e. ~16x less rate than the near-target spectrometer node above and ~40x below the best existing/projected reach (LHCb displaced, eps ~ 1e-5 at 1 GeV); no funded or proposed instrument covers eps ~ 1e-6 at m_A' = 1-1.5 GeV, because the 1-30 cm decay length falls between collider vertexing and dump geometries. Would need a multi-MW proton driver feeding a near-target segmented decay volume, roughly 100x the intensity of DarkQuest. Dominant systematic: charm-induced prompt dimuons and beam-correlated neutron/muon halo in a detector sited centimetres from a multi-MW target.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R2", "R3", "R10"]},
            {"label": "no", "regions": ["R4", "R6", "R11"]}
          ]
        }
      ]
    }
  ]
}
```