I'll verify the arXiv references I plan to cite, then deliver the full analysis in a single message.
All four candidate references verified against arXiv (LHCb A'→μμ search 1910.06926; Ilten et al. inclusive dark-photon proposal 1603.08926; LHCb Upgrade II physics case 1808.08865; BaBar visible dark-photon search 1406.2980 — the latter I'll mention in reasoning but keep the cited three most relevant). Here is the complete degeneracy-breaking analysis.

---

# Reasoning — Leaf `root_no_yes_no_no_yes_yes_no` (912 pts, 38 units)

## What these units physically are

Every unit is a complex scalar singlet DM (split into `sr`/`si` by the Z_N-allowed quartics) charged under a dark U(1)′ with a **light Z′ (MZp = 1–27 GeV)**, Stückelberg-type mass, kinetic mixing **ε spanning five decades (1e-6 to 0.1)**, and dark gauge coupling g′ ≈ 0.146 (except R27 at 0.058). DM mass is pinned near 69.67 GeV for most units, with outliers R27 (10.4 GeV), R36 (44.4), R37 (62.7), R17 (54–56), and wide-range R3/R15/R24/R25/R34. The leaf conditions guarantee: a gamma-ray signal 10–100× the CTA(bb) sensitivity (so CTA *will* see a bright GC source), σ_SI below DARWIN, no IceCube-Gen2 signal, BR(h→inv) in [0.001, 0.0032).

Two structural facts shape the strategy:

1. **The Z′ decays 100% visibly.** MZp < 2·MDM everywhere in this leaf, so the only open channels are SM fermion pairs through the kinetic mixing — a textbook visible dark photon with μμ branching of order 10% for m > 2m_μ. At ε = 1e-4, m = 10 GeV the decay is prompt (cτ ~ 0.1 μm); at ε = 1e-6 it becomes displaced (mm–cm) but the production rate (∝ ε²) collapses.
2. **The catalog has no sub-30 GeV dark-photon coverage.** Our "Z′ dilepton" catalog entry is the high-mass Drell-Yan σ×BR recast; it has no reach in the 1–30 GeV window where the LHCb A′→μμ bump-hunt technique operates. So a low-mass dark-photon search is a genuinely NEW observable for this tree, and it targets exactly the quantity (ε, MZp) that varies most violently across the 38 units.

A caveat worth recording: the [+] and [−] U(1)′ Lagrangians are related by dark charge conjugation (s → s*), so **no measurement can separate a [+] unit from a [−] unit at equal parameters**; every separation below that happens to split [+] from [−] units does so through their parameter differences (ε, MZp, MDM), never through the charge sign itself. Also, the highest-ε corners (ε ≳ 1e-2 at MZp < 10 GeV: tops of R1/R2/R8/R11/R25/R31, and R26 at 17 GeV) are already excluded by the existing BaBar visible search (arXiv:1406.2980, ε ≳ 1e-3 for m < 8 GeV) and the published LHCb result — the scan never applied these bounds, so the proposed measurement doubles as an immediate consistency check on those regions.

## Level 1 — Lit review: LHCb (Upgrade II) A′→μμ, 1–30 GeV

The published LHCb search (arXiv:1910.06926, 5.5 fb⁻¹) already excludes ε ≳ 1e-3 across most of 1–30 GeV outside the J/ψ, ψ′, Υ vetoes; the inclusive-dimuon strategy (arXiv:1603.08926) plus the Upgrade II dataset (300 fb⁻¹, arXiv:1808.08865) projects prompt+displaced reach to **ε ≈ 1e-4** over the full 1–30 GeV window. One measurement returns three things at once: existence, the resonance mass m_μμ (per-mille resolution), and the signal yield. I cut at ε = 1e-4 (detection) and m_μμ = 10 GeV (Υ region divides the ranges naturally).

Predicted (ε, MZp) per region:

- **Seen, m_μμ ≥ 10 GeV**: R26 (ε 0.025–0.1, MZp 17.1 — already in tension with current data), R18 (9.5e-4–3.4e-3, 12.1–15.6), R24 (1.7e-4–2.9e-4, 10.5–16.8), R12 (4e-4–1.1e-3, MZp 7.1–15.8, log-majority above 10 — *marginal*).
- **Seen, m_μμ < 10 GeV**: R1 (2.7e-3–0.1, MZp 1–3.7), R2 (2.4e-3–0.1, 1–5.2), R8 (2.8e-3–0.1, 1–1.7), R11 (5.4e-3–0.1, 1–7), R25 (1.5e-2–0.1, 1.4–4.7), R31 (0.069–0.1, MZp=1), R34 (6.8e-3–1.4e-2, 2–5.8), R30 (2.8e-4–1.5e-3, MZp=1), R5 (9.6e-5–3.4e-3, 1–11.1, *marginal both cuts*), R13 (5.5e-5–8e-4, 5.5–16.5, *marginal both cuts*), R4 (3.1e-4–0.1, MZp 2.1–18.1, *straddles the mass cut*, log-majority below 10).
- **Not seen** (ε below ~1e-4, all 23 remaining): floor-ε regions R7, R9, R10, R14, R15, R17, R19, R20, R22, R29, R32, R33, R36, R37 (ε ~ 1e-6–6e-6), plus R0 (≤2e-5), R3 (≤3.2e-5), R16 (1.9–4.2e-5), R28 (3.9e-5), and the marginal straddlers R6 (6e-6–4.3e-4), R21 (2.7–7.7e-5), R23 (5e-5–1.8e-4), R27 (3.9e-5–2.7e-4), R35 (6.1e-5–1.3e-4), each assigned by log-range majority.

This is the best available single literature split: 38 units → 4 + 11 + 23, and it isolates the only [−] unit with large ε (R26) on the heavy-seen branch. Honest weakness: six regions straddle the ε cut and three straddle the mass cut (flagged above); the branch assignment for those is probabilistic, not sharp.

## Level 2 — Novel experiments

**N1 (attach R12+R18+R24+R26): mixing strength from the discovery sample.** Once the A′ is found, its yield plus the known kinetic-mixing production cross section determines ε² to ~20–30% (production-model systematic dominates). Predictions: R26 ε ≥ 0.025; R18 ~1e-3–3.4e-3 and R12 ~4e-4–1.1e-3 (pooled band 3e-4–1e-2); R24 1.7e-4–2.9e-4. Three-way split isolates R26 (the U(1)− Lagrangian) and R24. R12 vs R18 then remain degenerate: they overlap in every observable (m_A′, ε, MDM = 69.67, g′ = 0.1464) and differ only in the dark quartic α5 (0.0035–0.027 vs 0.20–0.24), which has no low-energy signature — honest terminal degeneracy.

**N2 (attach the eleven m<10 regions): same yield analysis, cut ε = 3e-3.** Above: R1, R2, R4, R8, R11, R25, R31, R34 (lower edges of R1/R2/R8 sit at ~2.5e-3, marginal). Below: R5, R13, R30 (all ε ≤ 3.4e-3, log-majority well below). The surviving groups overlap heavily in (m_A′, ε) and differ mainly in quartics — honest terminal after this split.

**N3 (attach all 23 not-seen regions): gamma-ray spectral endpoint of the guaranteed GC signal.** The leaf conditions put the annihilation flux 10–100× above CTA's sensitivity, so CTA gets a high-statistics spectrum for free; the bb̄-like spectrum terminates near MDM. Predictions: R27 (MDM 10.4 GeV) → spectrum dead by ~10 GeV, i.e. *nothing in the CTA band at all*, with Fermi-LAT seeing the entire signal below 10 GeV; R36 (44.4) and R17 (53.9–56.3) → endpoint 44–56 GeV; everything else → endpoint 63–74 GeV (crowd at 69.67, R16/R28 at 71–73, R37 at 62.7). Cuts at 20 and 58 GeV give a clean 1 / 2 / 20 split. Marginal: R3 (51–70) and R15 (44–74) have wide mass ranges that straddle 58 GeV; they are assigned to the high band by density but individual points could land in the middle band. Feasibility: CTA energy resolution ~10% at 50–100 GeV comfortably resolves 45 vs 70 GeV endpoints; dominant systematic is the GC diffuse-emission model under the bright signal.

**N4 (attach the 20 high-endpoint regions): ultra-deep displaced dimuon search to ε ≈ 2e-5.** Within the residual, ε still spans 1e-6 to ~4e-4. A search 5× beyond the Upgrade II coupling reach (25× in rate; displaced vertices at ε ~ 2e-5, m ~ 5 GeV give cτ ~ mm — background-free but production-starved) would split: seen → R6, R16, R21, R23, R28, R35 (ε ranges 2e-5–4.3e-4); unseen → R0, R3, R7, R9, R10, R14, R15, R19, R20, R22, R29, R32, R33, R37 (ε ~ 1e-6–3e-5; R0/R3 tops marginal). Rated *unlikely*: needs a dedicated next-generation effort (HL-LHCb-beyond or an FCC-era forward detector), not an existing funded instrument.

**N5 (attach the floor-14): percent-level endpoint energy calibration.** The last physical difference in the residual is R37's MDM = 62.74 GeV (also the only Z2-only Lagrangian left — this split separates the Z2 model from the Z2+3+4+5 models) versus the 69.7–74 GeV crowd: an 11% endpoint shift. Cutting E_end at 66 GeV requires the gamma-ray energy scale known to ~2%, versus CTA's expected 5–10% — a 3–5× calibration improvement (muon-ring + Crab cross-calibration program), hence *unlikely*. R3 (51–70) and R15 (44–74) again straddle and are assigned to the high side by density.

**Honest floor.** After N5, thirteen regions remain (R0, R3, R7, R9, R10, R14, R15, R19, R20, R22, R29, R32, R33): all have MDM ≈ 69.7 (up to the wide R3/R15 tails), g′ = 0.1464, ε at the scan floor, and differ *only* in the dark-sector quartics α2–α6. The sole observable those quartics touch is DM self-scattering, at σ/m ~ 1e-12 cm²/g for 70 GeV DM — eleven orders below the ~0.1 cm²/g astrophysical sensitivity frontier. No measurement, existing or conceivable, separates them; that is recorded here rather than papered over with a speculative node.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_no_yes_yes_no",
      "lit_review": {
        "name": "HL-LHCb dark-photon A'->mumu search",
        "observable": "A'->mumu bump, 1-30 GeV, eps >= 1e-4: m_mumu >= 10 GeV / < 10 GeV / unseen ?",
        "refs": ["arXiv:1910.06926", "arXiv:1603.08926", "arXiv:1808.08865"],
        "reasoning": "Every unit contains a 1-27 GeV Z' decaying 100% visibly to SM fermions via kinetic mixing (MZp < 2*MDM everywhere), and eps spans 1e-6 to 0.1 across regions. The catalog's Z' dilepton entry is the high-mass Drell-Yan recast with no reach below ~30 GeV, so the LHCb prompt+displaced A'->mumu bump hunt (current: eps >~ 1e-3 excluded over 1-30 GeV; Upgrade II 300/fb projection: eps ~ 1e-4) is a genuinely new observable. One measurement yields existence, m_mumu (per-mille), and yield. Seen+heavy: R26 (eps 0.025-0.1, MZp 17.1), R18 (9.5e-4-3.4e-3, 12-15.6), R24 (1.7-2.9e-4, 10.5-16.8), R12 (4e-4-1.1e-3, 7.1-15.8, marginal). Seen+light: R1,R2,R8,R11,R25,R31,R34 (eps 2.4e-3-0.1, MZp 1-7), R30 (2.8e-4-1.5e-3), R4/R5/R13 marginal straddlers assigned by log-majority. Unseen: 23 regions with eps <~ 1e-4 (floor ~1e-6 for R7,R9,R10,R14,R15,R17,R19,R20,R22,R29,R32,R33,R36,R37; R6,R21,R23,R27,R35 marginal). Highest-eps corners (R26, R31, tops of R1/R2/R8/R25) are already in tension with BaBar/LHCb published limits the scan never applied, so either branch outcome is informative immediately. Note: U(1)+ vs U(1)- Lagrangians are related by dark charge conjugation; splits separate them only via parameter differences, never the charge sign.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen, m>=10", "regions": ["R12", "R18", "R24", "R26"]},
          {"label": "seen, m<10", "regions": ["R1", "R2", "R4", "R5", "R8", "R11", "R13", "R25", "R30", "R31", "R34"]},
          {"label": "not seen", "regions": ["R0", "R3", "R6", "R7", "R9", "R10", "R14", "R15", "R16", "R17", "R19", "R20", "R21", "R22", "R23", "R27", "R28", "R29", "R32", "R33", "R35", "R36", "R37"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R12+R18+R24+R26",
          "name": "A' signal-strength mixing determination",
          "observable": "eps from A' yield: >= 1e-2 / 3e-4 - 1e-2 / < 3e-4 ?",
          "reasoning": "The discovered A' yield plus the known kinetic-mixing production cross section fixes eps^2 to ~20-30%. Predictions: R26 eps 0.025-0.1; R18 9.5e-4-3.4e-3 and R12 4e-4-1.1e-3 (pooled middle band); R24 1.7e-4-2.9e-4. Isolates R26 (the U(1)- Lagrangian) and R24. R12 vs R18 remain degenerate afterward: they overlap in m_A', eps, MDM=69.67, g'=0.1464 and differ only in dark quartic alpha5 (0.004-0.03 vs 0.20-0.24), which has no low-energy observable — honest terminal.",
          "feasibility": "LHCb itself, on the discovery dataset; signal-strength-to-eps^2 conversion limited by ~20-30% production-model systematic; improvement factor ~1x.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "eps>=1e-2", "regions": ["R26"]},
            {"label": "mid", "regions": ["R12", "R18"]},
            {"label": "eps<3e-4", "regions": ["R24"]}
          ]
        },
        {
          "attach_to": "R1+R2+R4+R5+R8+R11+R13+R25+R30+R31+R34",
          "name": "A' signal-strength mixing determination (low mass)",
          "observable": "eps from A' yield >= 3e-3 ?",
          "reasoning": "Same yield-to-eps analysis on the light A'. Above cut: R1 (2.7e-3-0.1), R2 (2.4e-3-0.1), R8 (2.8e-3-0.1), R11 (5.4e-3-0.1), R25 (1.5e-2-0.1), R31 (0.069-0.1), R34 (6.8e-3-1.4e-2), R4 (3e-4-0.1, straddles, log-majority above). Below: R5 (1e-4-3.4e-3), R13 (5.5e-5-8e-4), R30 (2.8e-4-1.5e-3). Lower edges of R1/R2/R8 sit just below the cut — marginal. Post-split groups overlap in (m_A', eps) and differ mainly in dark quartics; honest terminal.",
          "feasibility": "LHCb discovery dataset; ~20-30% eps^2 systematic from production modeling; improvement factor ~1x.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R1", "R2", "R4", "R8", "R11", "R25", "R31", "R34"]},
            {"label": "no", "regions": ["R5", "R13", "R30"]}
          ]
        },
        {
          "attach_to": "R0+R3+R6+R7+R9+R10+R14+R15+R16+R17+R19+R20+R21+R22+R23+R27+R28+R29+R32+R33+R35+R36+R37",
          "name": "CTA+Fermi GC spectral endpoint",
          "observable": "gamma endpoint E_end: < 20 GeV / 20-58 GeV / >= 58 GeV ?",
          "reasoning": "The leaf guarantees an annihilation signal 10-100x CTA(bb) sensitivity, so a high-statistics GC spectrum comes for free; the bb-like spectrum terminates near MDM. R27 (MDM 10.4 GeV): spectrum dead by ~10 GeV — nothing in the CTA band, full signal in Fermi-LAT below 10 GeV. R36 (44.4) and R17 (53.9-56.3): endpoint 44-56 GeV. All others: endpoint 63-74 GeV (crowd 69.67, R16/R28 71-73, R37 62.7). R3 (51-70) and R15 (44-74) straddle the 58 GeV cut; assigned high by density — marginal. Spectral SHAPE is a distinct observable from the catalog's flux-vs-limit ratios.",
          "feasibility": "CTA GC survey: ~10% energy resolution at 50-100 GeV, ~20 GeV threshold, plus Fermi-LAT below; source is 10-100x sensitivity so statistics are ample; dominant systematic is GC diffuse-emission modeling under a bright signal; improvement factor ~1x.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "<20 GeV", "regions": ["R27"]},
            {"label": "20-58 GeV", "regions": ["R17", "R36"]},
            {"label": ">=58 GeV", "regions": ["R0", "R3", "R6", "R7", "R9", "R10", "R14", "R15", "R16", "R19", "R20", "R21", "R22", "R23", "R28", "R29", "R32", "R33", "R35", "R37"]}
          ]
        },
        {
          "attach_to": "R0+R3+R6+R7+R9+R10+R14+R15+R16+R19+R20+R21+R22+R23+R28+R29+R32+R33+R35+R37",
          "name": "Ultra-deep displaced dimuon A' search",
          "observable": "A'->mumu signal at eps >= 2e-5, 1-20 GeV ?",
          "reasoning": "Residual eps still spans 1e-6 to 4e-4. A search 5x beyond the LHCb Upgrade II coupling projection (25x in rate; at eps~2e-5, m~5 GeV the A' is mm-displaced — background-free but production-starved) splits: seen — R6 (6e-6-4.3e-4), R16 (1.9-4.2e-5), R21 (2.7-7.7e-5), R23 (5e-5-1.8e-4), R28 (3.9e-5), R35 (6.1e-5-1.3e-4); unseen — R0 (<=2e-5), R3 (<=3.2e-5), and the floor-eps regions R7,R9,R10,R14,R15,R19,R20,R22,R29,R32,R33,R37 (~1e-6-6e-6). R0/R3 tops and R6 bottom overlap the cut — marginal.",
          "feasibility": "Closest instrument: LHCb Upgrade II, projected eps ~ 1e-4 over 1-30 GeV; proposal needs ~5x in coupling (25x in rate) via a dedicated displaced-vertex trigger at an HL-LHC-beyond or FCC-era detector; dominant systematic: tracker-material-interaction fakes for displaced dimuons.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R6", "R16", "R21", "R23", "R28", "R35"]},
            {"label": "not seen", "regions": ["R0", "R3", "R7", "R9", "R10", "R14", "R15", "R19", "R20", "R22", "R29", "R32", "R33", "R37"]}
          ]
        },
        {
          "attach_to": "R0+R3+R7+R9+R10+R14+R15+R19+R20+R22+R29+R32+R33+R37",
          "name": "Percent-level endpoint energy calibration",
          "observable": "E_end >= 66 GeV ?",
          "reasoning": "The last physical difference in the residual is R37's MDM = 62.7 GeV versus the 69.7-74 GeV crowd — an 11% endpoint shift; R37 is also the only Z2-only Lagrangian left, so this separates the Z2 model from the Z2+3+4+5 models. R3 (51-70) and R15 (44-74) straddle and are assigned high by density — marginal. After this node, the remaining 13 regions share MDM~69.7, g'=0.1464, floor eps, and differ ONLY in dark quartics alpha2-alpha6, whose sole observable is DM self-scattering at sigma/m ~ 1e-12 cm^2/g — eleven orders below the ~0.1 cm^2/g astrophysical frontier. No measurement separates them; recorded as the honest floor.",
          "feasibility": "CTA with dedicated energy-scale program: baseline gamma-ray energy-scale systematic ~5-10%; distinguishing 62.7 vs 69.7 GeV endpoints needs ~2%, a 3-5x calibration improvement (muon-ring plus Crab/geomagnetic cross-calibration); dominant systematic: atmospheric-model-driven energy-scale drift.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R3", "R7", "R9", "R10", "R14", "R15", "R19", "R20", "R22", "R29", "R32", "R33"]},
            {"label": "no", "regions": ["R37"]}
          ]
        }
      ]
    }
  ]
}
```