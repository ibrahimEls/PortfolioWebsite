I'll verify the arXiv references I plan to cite before composing the single-message answer.
All four references resolve and match (BaBar visible dark-photon search, LHCb A′→μμ, Belle II Physics Book, LHCb inclusive dark-photon proposal). Everything below is the complete answer.

---

# Reasoning — Leaf `root_no_yes_no_no_yes_no_yes` (441 pts, 15 units)

## What these points physically are

Every unit in this leaf is a complex scalar singlet charged (±1) under a dark U(1)′ with:

- **M_DM ≈ 3.1–8.9 GeV, M_Z′ ≈ 1.0–1.6 GeV.** Since 2·M_DM ≥ 6.3 GeV > M_Z′ everywhere, **Z′→DM DM is kinematically closed: the Z′ decays 100% visibly** (to μμ, ππ, hadrons via kinetic mixing ε). This is the single most important fact for degeneracy-breaking, because it makes every visible dark-photon search applicable.
- **Secluded thermal relic.** M_DM > M_Z′ in every unit, so DM DM → Z′Z′ is open. σv ≈ g′⁴/(16π M_DM²): with g′ = 0.037, M_DM = 3.3 GeV → ≈ 4×10⁻²⁶ cm³/s; with g′ = 0.055, M_DM = 8.9 GeV → ≈ 2×10⁻²⁶ cm³/s. The scan's g′ values track √M_DM exactly as the thermal secluded relic requires, confirming that the indirect-detection signal this leaf sees (Fermi/CTA "bb"-template flux) is really DM DM → Z′Z′ → 4 SM fermions. Crucially, this channel is **independent of ε**, which is why ε ranges over five decades (10⁻⁶–0.1) inside one leaf: the catalog never measures it.
- **Higgs portal pinned:** α1 ≈ 0.001 in all units (fixed by the leaf's BR(h→inv) = 0.001–0.0032 window), so the portal carries no discriminating power beyond what the tree already used.

**The catalog's blind spot:** its only Z′ observable is the HL-LHC high-mass pp→Z′→ℓℓ dilepton recast, which has no acceptance at M_Z′ ≈ 1 GeV. Low-mass radiative-return and prompt-dimuon dark-photon searches are a genuinely different measurement — different machines, different mass regime — and ε is the axis along which this leaf's units are spread.

## Level 1 (lit review): B-factory / LHCb dark-photon resonance scan, 1.0–1.6 GeV

σ(e⁺e⁻→γA′) at √s = 10.58 GeV is ≈ ε² × O(1 nb). BaBar (arXiv:1406.2980) excludes ε ≳ (0.5–1)×10⁻³ over 0.02–10.2 GeV; LHCb's prompt A′→μμ search (arXiv:1910.06926) is comparable near 1–2 GeV; Belle II with 50 ab⁻¹ (arXiv:1808.10567) pushes to ≈ 2×10⁻⁴ in this mass window. Predicted signal per unit:

- **R5 (ε = 0.1, [−] build):** σ ≈ 10 pb → ~10⁶ resonance events in the existing BaBar dataset, 10⁴× above its sensitivity. This point is in fact *already excluded* by the published search — "seen" trivially.
- **R4 (ε = 0.032, [−]):** ~10³× BaBar sensitivity. Seen trivially, but 10× fewer events than R5 — the yield itself separates R4 from R5, hence the 0.05 bin boundary.
- **R10 (ε = 4.9×10⁻⁴, [+]):** just below current BaBar reach, ~6× above the Belle II 50 ab⁻¹ / LHCb-upgrade reach in event rate. Marginal but expected visible; honestly flagged as the weakest "yes".
- **All 12 remaining units (ε ≤ 1.8×10⁻⁴):** below the 2.5×10⁻⁴ cut. R1 (≤1.64×10⁻⁴) and R8 (≤1.76×10⁻⁴) approach it within a factor ~1.4 — marginal non-detections, picked up cleanly by the Level-2 deep scan instead.

Note this split also separates Lagrangians: the two "seen strongly" units are both [−] builds, R10 is a [+] build.

## Level 2 (novel), three independent measurements on the 12-unit "not seen" outcome

**Novel 1 — γ-ray spectral endpoint of the annihilation signal (cut: 3.75 GeV).** The 4-fermion cascade spectrum from DM DM → Z′Z′ terminates at E = M_DM. The [−] units R7, R8, R9 all have M_DM ≤ 3.56 GeV; every [+] unit here has M_DM ≥ 3.94 GeV — a clean 10% gap with no straddlers. The leaf guarantees a signal 1–10× above Fermi's 15-yr bb sensitivity, i.e. thousands of signal photons; Fermi-LAT's ΔE/E ≈ 8% at 3–5 GeV makes a spectral-shape mass fit at the required 10% separation feasible with existing hardware (an AMEGO-X-class successor improves it). The charge sign [+] vs [−] is fundamentally unobservable (every rate ∝ ε²g′²), but the two builds' viable populations happen to occupy disjoint mass bands, so this measurement *empirically separates the two Lagrangians*. Dominant systematic: the cascade spectrum is soft near its endpoint, so the fit must use the full spectral shape against the Galactic diffuse model, not just the last bin.

**Novel 2 — LHCb Upgrade II inclusive prompt A′→μμ scan (cut: ε = 3×10⁻⁵).** The triggerless-readout inclusive dimuon strategy (proposed in arXiv:1603.08926) with 50–300 fb⁻¹ projects roughly a decade improvement in ε² over the current ε ≈ 10⁻⁴ reach near 1–2 GeV, i.e. ε ≈ 3×10⁻⁵ — a ~3× improvement in ε, at the edge of the funded program. Predictions: R1 (1.7×10⁻⁵–1.6×10⁻⁴, bulk above cut), R8 (6×10⁻⁵–1.8×10⁻⁴, fully above), R11 (5.8–8.7×10⁻⁵, fully above, 2–3× above cut) → seen; all other nine units have ε ≤ 2.2×10⁻⁵ → not seen. R1's lower tail straddles the cut — flagged. Dominant systematic: the prompt QCD dimuon continuum, and the φ(1020) veto window, which overlaps the M_Z′ ≈ 1.00–1.02 GeV lower edge common to many units. Crossed with Novel 1 this isolates **R8** uniquely (low endpoint + seen) and groups {R1, R11} (high endpoint + seen).

**Novel 3 — FCC-ee TeraZ radiative-return A′ scan (cut: ε = 3×10⁻⁶).** With 6×10¹² Z's, ISR-return μμ(γ) events probe 1–1.6 GeV masses at rates ∝ ε²; reaching ε ≈ 3×10⁻⁶ requires ~10× in ε (100× in rate) beyond the LHCb Upgrade II projection, beyond any published sensitivity study — hence "speculative". If achieved: R2 (2.2×10⁻⁶–1.0×10⁻⁵), R14 (3.0–8.5×10⁻⁶) and the bulk of R0, R6 (log-midpoints ≈ 4–5×10⁻⁶) → seen; R3 (≤2.6×10⁻⁶), R12, R13 (≈10⁻⁶) and R7 (10⁻⁶), R9 (midpoint 2×10⁻⁶) → not seen. R0, R2, R6, R9 straddle the cut to varying degrees; assignments are by the bulk of each cluster and the split is honestly probabilistic at the edges. Dominant systematic: irreducible μμ(γ) continuum and dimuon mass resolution at the Z pole.

## Honest residuals

After all three levels the irreducible groups are {R1,R11}, {R7,R9}, {R0,R2,R6,R14}, {R3,R12,R13}. Within each, the units overlap in *every* physical observable (M_DM, M_Z′, ε, portal, σv); DBSCAN separated them mainly along the dark quartic self-couplings α2–α6, which are experimentally invisible at these masses: the DM self-interaction they induce is σ/m ≲ λ²/(64π M_DM³) ≈ 10⁻⁶ cm²/g even at λ = 10, six orders of magnitude below cluster constraints. No experiment distinguishes them; proposing one would be dishonest.

One leaf-wide cross-check worth recording (not a split, since all units respond alike): the secluded annihilation is s-wave at σv ≈ 2–4×10⁻²⁶ cm³/s with hadronic/leptonic final states (f_eff ≈ 0.2), which sits a factor ~2–6 above the Planck p_ann bound for 3–9 GeV DM — a future CMB-injection analysis tests the entire leaf's viability rather than separating it.

The sibling leaf `root_no_yes_no_no_yes_no_no` (1 point) is context only, per the brief.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_no_yes_no_yes",
      "lit_review": {
        "name": "B-factory/LHCb dark-photon resonance scan, 1.0-1.6 GeV",
        "observable": "A'->mumu/hadrons peak: eps >= 0.05 / 0.01 / 2.5e-4 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "Z'->DM DM is closed (2*MDM >= 6.3 GeV > MZp <= 1.6 GeV), so the Z' decays 100% visibly and every visible dark-photon search applies; the catalog's only Z' observable is the HL-LHC high-mass dilepton recast, blind at 1 GeV. sigma(ee->gamma A') ~ eps^2 x O(1 nb): R5 (eps=0.1) gives ~10^6 events in existing BaBar data (already excluded by arXiv:1406.2980, whose reach is eps ~ 1e-3); R4 (eps=0.032) is 10x weaker in rate but still ~10^3 x BaBar sensitivity - the yield separates R4 from R5; R10 (eps=4.9e-4) is below BaBar but ~6x above the Belle II 50/ab / LHCb-upgrade rate reach at 1-1.6 GeV (marginal, flagged). All 12 remaining units have eps <= 1.8e-4, below the 2.5e-4 bin edge (R1, R8 approach it within ~1.4x - marginal non-detections, recovered by the Level-2 deep scan). The split also separates Lagrangian builds: R4, R5 are [-] charge, R10 is [+].",
        "status": "Splits!",
        "outcomes": [
          {"label": "eps >= 0.05", "regions": ["R5"]},
          {"label": "eps 0.01-0.05", "regions": ["R4"]},
          {"label": "eps 2.5e-4-0.01", "regions": ["R10"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R6", "R7", "R8", "R9", "R11", "R12", "R13", "R14"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R6+R7+R8+R9+R11+R12+R13+R14",
          "name": "GC gamma-ray spectral endpoint mass fit",
          "observable": "annihilation spectrum endpoint >= 3.75 GeV ?",
          "reasoning": "The leaf guarantees a detected annihilation signal (1-10x above the Fermi 15-yr bb sensitivity) from DM DM -> Z'Z' -> 4 SM fermions, whose photon spectrum terminates at E = MDM. The [-]-charge units R7, R8, R9 have MDM <= 3.56 GeV; all nine [+] units have MDM >= 3.94 GeV - a clean 10% gap with no straddlers. The dark-charge sign itself is unobservable (all rates go as eps^2 g'^2), but the two builds' viable populations occupy disjoint mass bands, so this measurement empirically separates the two Lagrangians.",
          "feasibility": "Fermi-LAT (existing): dE/E ~ 8% at 3-5 GeV, thousands of signal photons at the guaranteed flux, so a full spectral-shape mass fit resolves the required 10% mass gap at ~1x current capability; AMEGO-X-class successors improve it. Dominant systematic: the 4-body cascade spectrum is soft near its endpoint, so the fit leans on the full shape against the Galactic diffuse emission model.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "endpoint high", "regions": ["R0", "R1", "R2", "R3", "R6", "R11", "R12", "R13", "R14"]},
            {"label": "endpoint low", "regions": ["R7", "R8", "R9"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R6+R7+R8+R9+R11+R12+R13+R14",
          "name": "LHCb Upgrade II inclusive prompt A'->mumu scan",
          "observable": "dimuon peak 1.0-1.6 GeV: eps >= 3e-5 ?",
          "reasoning": "The triggerless inclusive dimuon strategy (arXiv:1603.08926) with 50-300/fb projects ~10x in eps^2 beyond the current eps ~ 1e-4 prompt reach near 1-2 GeV, i.e. eps ~ 3e-5. Predictions: R8 (6e-5-1.8e-4) and R11 (5.8e-5-8.7e-5) fully above the cut, R1 (1.7e-5-1.6e-4) mostly above (lower tail straddles - flagged); the other nine units all have eps <= 2.2e-5. Crossed with the endpoint measurement this isolates R8 uniquely (low endpoint + seen) and groups {R1,R11} (high endpoint + seen).",
          "feasibility": "Closest instrument: LHCb (current prompt A'->mumu reach eps ~ 1e-4 at 1-2 GeV with 5.5/fb); funded Upgrade I/II luminosity plus triggerless readout gives the projected ~3x improvement in eps needed. Dominant systematic: prompt QCD dimuon continuum, and the phi(1020) veto window overlapping the MZp ~ 1.00-1.02 GeV lower edge common to many units.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R1", "R8", "R11"]},
            {"label": "not seen", "regions": ["R0", "R2", "R3", "R6", "R7", "R9", "R12", "R13", "R14"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R6+R7+R8+R9+R11+R12+R13+R14",
          "name": "FCC-ee TeraZ radiative-return A' scan",
          "observable": "ISR mumu peak 1.0-1.6 GeV: eps >= 3e-6 ?",
          "reasoning": "With 6e12 Z's, ISR-return mumu(gamma) events probe a 1-1.6 GeV resonance at rate ~ eps^2. If eps ~ 3e-6 is reached: R2 (2.2e-6-1.0e-5), R14 (3.0e-6-8.5e-6) and the bulk of R0, R6 (log-midpoints 4-5e-6) are seen; R3 (<=2.6e-6), R7, R12, R13 (~1e-6) and R9 (midpoint ~2e-6) are not. R0, R2, R6, R9 straddle the cut; assignments follow each cluster's bulk and the edge cases are honestly probabilistic. Residual groups {R1,R11}, {R7,R9}, {R0,R2,R6,R14}, {R3,R12,R13} are irreducible: within each they overlap in every physical observable and differ mainly in the quartic self-couplings alpha2-alpha6, whose induced self-interaction sigma/m <~ 1e-6 cm^2/g is six orders of magnitude below cluster bounds - no experiment distinguishes them.",
          "feasibility": "Closest instrument: proposed FCC-ee (TeraZ); required reach is ~10x in eps (100x in rate) beyond the LHCb Upgrade II projection of eps ~ 3e-5, beyond any published sensitivity study at this mass. Dominant systematic: irreducible mumu(gamma) continuum and dimuon mass resolution at the Z pole.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R1", "R2", "R6", "R8", "R11", "R14"]},
            {"label": "not seen", "regions": ["R3", "R7", "R9", "R12", "R13"]}
          ]
        }
      ]
    }
  ]
}
```