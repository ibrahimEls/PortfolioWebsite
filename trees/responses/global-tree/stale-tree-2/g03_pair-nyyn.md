I'll first verify the arXiv references I plan to cite (as the rules require), then deliver the complete answer in one message.
All three references now verify: arXiv:1406.2980 (BaBar visible A′→ℓℓ), arXiv:1910.06926 (LHCb A′→μμ), arXiv:1808.10567 (Belle II Physics Book). Here is the complete answer.

---

# Reasoning

## Physics common to both leaves

Every unit in these two leaves except the 15 `CsSg_DM` clusters of the second leaf carries a dark U(1)′ gauge boson Z′ with kinetic mixing ε, and in **every** case MZp ≪ 2·MDM, so the Z′ cannot decay to dark matter: it decays **visibly** to SM leptons/hadrons with rates ∝ ε². The scan's catalog contains only the *high-mass prompt LHC dilepton recast*; it contains **no** low-mass dark-photon program (B-factory radiative-return, LHCb inclusive dimuon, beam-dump displaced vertices). Yet the leaves' units spread over six decades of ε (10⁻⁶–10⁻¹) and four decades of MZp (1–10⁴ GeV). That makes the visible dark-photon program the natural Level-1 axis for both leaves: it is orthogonal to everything on the tree path, it is real (BaBar archival data already exists; Belle II and LHCb projections are published), and any "seen" outcome anywhere in the chain instantly establishes the gauged-U(1)′ Lagrangian class — a Lagrangian-level split, the most valuable kind here.

Published sensitivities I use (verified refs): BaBar A′→ℓℓ, 514 fb⁻¹, excludes ε ≳ (0.5–1)×10⁻³ over 0.02–10.2 GeV (arXiv:1406.2980); LHCb prompt A′→μμ reaches ε ~ 10⁻³ up to m ≈ 70 GeV (arXiv:1910.06926); Belle II with 50 ab⁻¹ projects visible-mode reach ε ≈ (1–3)×10⁻⁴ for 0.1–10 GeV (arXiv:1808.10567). I place the decision cut at ε ≈ 3×10⁻⁴, the Belle II floor. Signal rate scales as ε², so regions a decade above/below the cut differ by 100× in yield — the split is sharp except where noted.

## Leaf `root_no_yes_yes_no_yes` (12 units, all U(1)′ models, MDM 76–95 GeV, MZp 1–20 GeV, gU1p ≈ 0.155–0.166)

**Level 1 — visible dark-photon search (BaBar archival + Belle II 50 ab⁻¹ + LHCb).** Predicted mixing (the quantity these experiments report, in the (m_A′, ε) plane) per region:

- **Seen (ε ≥ 3×10⁻⁴):** R0 (ε 0.052–0.1 at 1–3.4 GeV), R2 (6.5×10⁻³–0.1 at 1–2.8 GeV), R4 (ε = 0.1 at 1–14.1 GeV), R11 (1.6–3.6×10⁻³ at 1.9–4.7 GeV), R1 (2.4×10⁻⁴–2.0×10⁻³ at 3.7–12.9 GeV), R5 (2.7–9.4×10⁻⁴ at 3.7–16.4 GeV). R0/R2/R4 sit 10–100× **above** the existing BaBar limit — archival data alone already decides for or against them, no new running needed. R1 and R5 are the marginal members: their lower edges (2.4–2.7×10⁻⁴) graze the Belle II floor, and their upper mass tails (>10.5 GeV) fall to LHCb, whose reach (~10⁻³) covers only their upper-ε portions; I assign them to "seen" because >~80% of their log-range is above the cut, and say so honestly.
- **Not seen (ε ≤ 1.5×10⁻⁴):** R3 and R8 (ε = 10⁻⁶), R9 (5–8×10⁻⁶), R10 (3.8×10⁻⁶–1.6×10⁻⁵), R6 (1.0–2.7×10⁻⁵), R7 (4.0×10⁻⁵–1.5×10⁻⁴). Yields are ≥400× (R7, worst case a factor 2 below the cut in ε, i.e. 4× in rate — the one marginal call) to 10⁸× below the seen group.

A bonus recorded here: within "seen", the *same measurement* sub-splits the group, because a discovered peak gives (m_A′, ε): R0/R2/R4 (ε ≥ 6.5×10⁻³) vs R1/R5/R11 (ε ≤ 3.6×10⁻³) differ by ≥2× in ε, trivially resolved once a peak exists. So I attach no novel node to the seen outcome.

**Level 2 — novel node on R3+R6+R7+R8+R9+R10.** These six regions have Z′ production rates ∝ ε² ≤ 2×10⁻⁸ relative to electromagnetic — beyond every existing or proposed accelerator probe (SHiP's short-lifetime boundary sits near ε ~ 10⁻⁶ only for m ≲ 2.5 GeV, and R9's Z′ at 12–20 GeV is kinematically beyond every dump). But their **DM masses differ**: this leaf sees a Galactic-center signal 10–100× above the CTA 500 h sensitivity, i.e. a discovery at enormous significance (10³–10⁴ signal photons), and the annihilation γ-spectrum endpoint equals MDM regardless of channel (WW or Z′Z′ cascades both terminate at E = m_χ). Predicted endpoint per region: **R6: 94.8 GeV; R10: 89.4 GeV; R7: 85.5 GeV; R3: 79.4–80.4 GeV; R8: 80.4 GeV; R9: 76.6–79.1 GeV.** A dedicated endpoint fit with CTA's ~7–10% energy resolution at 100 GeV, on a source this bright, determines the endpoint to ±2–3 GeV (statistics ±1 GeV; energy-scale systematic ~2% ≈ ±2 GeV dominates). Bins <83 / 83–87 / 87–92 / >92 GeV isolate {R3,R8,R9} / R7 / R10 / R6; the R7↔R10 boundary (85.5 vs 89.4, a 4.5% separation) is comparable to the energy-scale systematic — marginal, honestly flagged. R3/R8/R9 remain irreducibly degenerate: masses overlap (76.6–80.4), and they differ only in dark-sector quartics (α2, α6 — experimentally inert) and in MZp (R9: 12–20 GeV vs R3/R8: 1–7 GeV) at ε ≤ 8×10⁻⁶, where any conceivable production rate is ∝ ε² ≤ 6.5×10⁻¹¹ — >10× beyond any proposed instrument, so I decline to propose a speculative fourth-level split and record the failure.

## Leaf `root_no_yes_yes_no_no` (51 units: 15 `CsSg_DM` with **no** Z′; 34 `CsSg_U1p[−].Z2+3+4+5`; R5 = `U1p[+]`; R10 = `U1p[−].Z2`)

**Level 1 — same dark-photon resonance program, window 1–70 GeV.** Per-region verdicts (discriminating quantities MZp [GeV], ε):

- **Seen:** R13 (1–3.6, ε 0.015–0.1), R31 (1, ε 0.1), R33 (1–3.6, ε 0.017–0.1). All are ≥15× above BaBar's existing limit — again decided by archival 514 fb⁻¹ data, with predicted yields ≥200× the BaBar exclusion contour.
- **Not seen — near misses, quantified:** R20 (45–74 GeV, ε ≤ 2.6×10⁻⁴): 4× below LHCb's ε reach at that mass, ~16× in rate. R22 (236–1769 GeV, ε 5.2×10⁻³), R10 (359–3416 GeV, ε 0.1), R29 (5.3–10 TeV, ε ≤ 0.1), R38 (10 TeV, ε 0.1): all above the 70 GeV window; their only probe is high-mass Drell–Yan dilepton, which is a **catalog observable** and therefore off-limits (and for m ≳ 5 TeV nonexistent anyway; EW-precision shifts scale as ε²m_Z²/MZp² ≤ 10⁻⁶ — invisible even to a Tera-Z run).
- **Not seen — the rest:** all 15 `CsSg_DM` units (R6, R7, R16–R18, R41–R50: no Z′ exists, the null is exact); the feeble-ε light-Z′ units (R0, R1, R3, R5, R8, R12, R14, R15, R26, R27, R39: ε ≤ 2×10⁻⁵); the heavy-decoupled units (R2, R4, R9, R11, R19, R21, R23–R25, R28, R30, R32, R34–R37, R40: MZp 39–10⁴ GeV with ε ≤ 10⁻⁵, or 10 TeV at any ε).

**Level 2 — novel node on the 48-unit "not seen" outcome: next-generation proton beam-dump displaced-vertex A′ search.** Nine of the surviving U(1)′ units have Z′ in the window MZp ≈ 1–10 GeV with ε ≈ 10⁻⁶–2×10⁻⁵, exactly the long-lived regime: Γ(A′→SM) ≈ (αε²m/3)·N_eff gives, at m = 1 GeV and ε = 10⁻⁶, cτ ≈ 2 cm and a lab decay length of O(1 m) at 400 GeV beam energies — sitting on the short-lifetime upper contour of the approved SHiP experiment (data ~2031), which covers m ≲ 2.5 GeV at ε ~ 10⁻⁶–10⁻⁴. Per-region predictions (MZp, ε): R5 (1–1.28, 10⁻⁶), R12 (1–2.2, 10⁻⁶), R27 (1–1.55, 10⁻⁶) — inside SHiP as designed; R0 (1–9.8, ≤2.0×10⁻⁵), R1 (1–7.9, ≤1.3×10⁻⁵), R3 (1–6.3, ≤8.1×10⁻⁶), R15 (1–7.9, ≤2.5×10⁻⁶), R14 (6.3–11.6, 10⁻⁶), R39 (2.25–22.1, ≤1.6×10⁻⁶) — need the proposed concept: a SHiP-class dump with ~10× luminosity·decay-volume and a higher-energy beam to extend the mass reach from ~2.5 to ~10 GeV, since A′ production via proton bremsstrahlung/Drell–Yan collapses steeply above the ρ/φ region (a ~3–10× sensitivity extension; dominant systematic is the proton-bremsstrahlung production-rate/form-factor uncertainty at high m_A′, currently a factor ~2–3). Rating: **unlikely** (dedicated next-generation effort). The remaining 39 units stay degenerate, and I state why this is irreducible: they are the union of (a) `CsSg_DM`, where no Z′ exists and every dark-photon probe is null by construction, and (b) U(1)′ units whose Z′ is in a dead window — 39–10⁴ GeV at ε ≤ 2.6×10⁻⁴ (production ∝ ε² ≤ 7×10⁻⁸ of electroweak, below any proposed collider or fixed-target reach) or 10 TeV at any ε. "No Z′ at all" versus "Z′ we can never produce" has no measurable difference; the residual parameter differences are dark-sector self-quartics (α2–α16), which affect no laboratory or astrophysical observable at these masses. The positive corollary stands: **any** "seen" outcome at either level of this chain establishes the gauged Lagrangian class over `CsSg_DM`.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_yes_no_yes",
      "lit_review": {
        "name": "BaBar/Belle II/LHCb visible dark-photon search",
        "observable": "A' -> ll resonance, 1-17 GeV: epsilon >= 3e-4 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "All 12 units have a Z' at 1-20 GeV that decays visibly (MZp << 2*MDM) with rate prop. to epsilon^2, and epsilon spans 1e-6 to 0.1 across the units. BaBar archival data (514/fb) already excludes epsilon >~ 1e-3 for 0.02-10.2 GeV, LHCb reaches ~1e-3 up to 70 GeV, and Belle II (50/ab) projects (1-3)e-4. Cut at 3e-4: R0/R2/R4 (epsilon 6.5e-3-0.1) are 10-100x above the existing BaBar limit; R11 (1.6-3.6e-3) is firmly in reach; R1/R5 (2.4e-4-2e-3) are marginal at their lower edges but >80% of their range lies above the cut. The not-seen six all have epsilon <= 1.5e-4 (rates 16x-1e8x below the seen group; R7 is the closest call at 2x below the cut in epsilon). A discovered peak also measures (m, epsilon), sub-splitting the seen group (R0/R2/R4 vs R1/R5/R11 differ by >2x in epsilon), so no novel node is needed there.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0", "R1", "R2", "R4", "R5", "R11"]},
          {"label": "not seen", "regions": ["R3", "R6", "R7", "R8", "R9", "R10"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R3+R6+R7+R8+R9+R10",
          "name": "CTA Galactic-center gamma spectral-endpoint mass fit",
          "observable": "annihilation endpoint E_max: <83 / 83-87 / 87-92 / >92 GeV ?",
          "reasoning": "These regions' Z' is unproducible (epsilon <= 1.5e-4, rates prop. epsilon^2), but their DM masses differ and this leaf's GC signal is 10-100x the CTA 500h sensitivity, i.e. a discovery with 1e3-1e4 photons; the gamma endpoint equals m_DM in any channel. Predicted endpoints: R6 94.8 GeV; R10 89.4; R7 85.5; R3 79.4-80.4; R8 80.4; R9 76.6-79.1. Endpoint determined to +-2-3 GeV, so bins at 83/87/92 GeV isolate R6, R10, R7 and the low-mass trio. R7 vs R10 (4.5% apart) is marginal against the ~2% energy-scale systematic. R3/R8/R9 remain irreducibly degenerate: masses overlap and they differ only in inert dark quartics and in MZp at epsilon <= 8e-6, beyond any conceivable production.",
          "feasibility": "CTA-South as designed: 7-10% energy resolution at 100 GeV, ~2% energy-scale systematic; a source 10-100x above nominal sensitivity gives endpoint statistics of +-1 GeV, so no improvement factor beyond design is needed (factor ~1). Dominant systematic: energy-scale calibration plus J-factor/spectral-shape degeneracy in the endpoint fit.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": ">92 GeV", "regions": ["R6"]},
            {"label": "87-92 GeV", "regions": ["R10"]},
            {"label": "83-87 GeV", "regions": ["R7"]},
            {"label": "<83 GeV", "regions": ["R3", "R8", "R9"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes_yes_no_no",
      "lit_review": {
        "name": "B-factory + LHCb dark-photon resonance search",
        "observable": "A' -> ll peak, 1-70 GeV: epsilon >= 3e-4 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "R13, R31, R33 have MZp 1-3.6 GeV with epsilon 0.015-0.1, i.e. 15-100x above BaBar's published visible-mode limit (epsilon ~1e-3, 514/fb) -- archival data already decides these, and Belle II/LHCb only sharpen it. Every other unit fails the cut by construction: the 15 CsSg_DM units have no Z' at all; the feeble light-Z' units have epsilon <= 2e-5; R20 (45-74 GeV) has epsilon <= 2.6e-4, 4x below LHCb reach; R22/R10/R29/R38 have MZp 236 GeV-10 TeV, outside the ll window, and their only probe (high-mass Drell-Yan dilepton) is already a catalog observable, with EW-precision shifts epsilon^2 m_Z^2/MZp^2 <= 1e-6, invisible even to Tera-Z. A seen outcome also immediately establishes the gauged-U(1)' Lagrangian class over CsSg_DM.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R13", "R31", "R33"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R14", "R15", "R16", "R17", "R18", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R32", "R34", "R35", "R36", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9+R10+R11+R12+R14+R15+R16+R17+R18+R19+R20+R21+R22+R23+R24+R25+R26+R27+R28+R29+R30+R32+R34+R35+R36+R37+R38+R39+R40+R41+R42+R43+R44+R45+R46+R47+R48+R49+R50",
          "name": "Next-generation beam-dump displaced-vertex A' search",
          "observable": "displaced l+l- vertex, m_A' 1-10 GeV, epsilon >= 1e-6 ?",
          "reasoning": "Nine U(1)' units sit in the long-lived window MZp ~1-10 GeV, epsilon 1e-6 to 2e-5: at m=1 GeV, epsilon=1e-6 the lab decay length is O(1 m), on SHiP's short-lifetime boundary. R5/R12/R27 (MZp 1-2.2 GeV, epsilon 1e-6) lie inside approved-SHiP reach; R0/R1/R3/R14/R15/R39 need the extension to ~10 GeV. Seen -> gauged U(1)' with light feeble Z'; not seen -> either CsSg_DM (no Z' exists, null exact) or a Z' in a dead window (39 GeV-10 TeV at epsilon <= 2.6e-4, production <= 7e-8 of electroweak). That residual 39-unit bucket is irreducible: 'no Z'' vs 'unproducible Z'' has no measurable difference, and the remaining parameter spread is dark-sector self-quartics with no laboratory or astrophysical handle.",
          "feasibility": "Closest instrument: SHiP at the CERN BDF (approved 2024, data ~2031), covering m_A' <~ 2.5 GeV at epsilon 1e-6 to 1e-4. Required: ~10x luminosity x decay-volume plus a higher-energy proton beam to push mass reach ~4x (to 10 GeV), since bremsstrahlung/Drell-Yan A' production collapses above the rho/phi region -- a 3-10x sensitivity extension. Dominant systematic: proton-bremsstrahlung production-rate (timelike form-factor) uncertainty, currently a factor 2-3 at m_A' > 1 GeV.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R1", "R3", "R5", "R12", "R14", "R15", "R27", "R39"]},
            {"label": "not seen", "regions": ["R2", "R4", "R6", "R7", "R8", "R9", "R10", "R11", "R16", "R17", "R18", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R28", "R29", "R30", "R32", "R34", "R35", "R36", "R37", "R38", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50"]}
          ]
        }
      ]
    }
  ]
}
```