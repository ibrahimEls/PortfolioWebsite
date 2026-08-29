This is a physics-reasoning deliverable. Before writing the single final answer, I'll verify the three arXiv references I plan to cite, as the rules require.
All three references verified (BaBar 1406.2980, LHCb 1910.06926, Belle II Physics Book 1808.10567 — titles and coverage match my claims). Here is the full degeneracy-breaking analysis.

---

# Reasoning — Leaf `root_yes_no_no_no_no` (2733 pts, 39 units)

## What the leaf physically is

Every unit is the same class of model: a complex scalar singlet (split by the Z_N-preserving potential into real components sr, si) charged ±1 under a broken dark U(1)', with a small Higgs portal (alpha1 ~ 0.003–0.04, hence BR(h→inv) below the 4ν floor and σ_SI below DARWIN), DM mass 320–710 GeV, and — in 38 of 39 units — a **GeV-scale dark photon** (MZp ≈ 1–6.2 GeV) with kinetic mixing ε spanning 10⁻⁶ to 0.1. The one exception is **R1** (U(1)[−]), pinned at MZp = 986 GeV, ε = 0.068, g' = 7.2 — a heavy near-resonant Z' (2·MDM/MZp ≈ 1.11), with Z'→DM DM kinematically closed.

The catalog cannot see ε at all in this leaf: the indirect-detection signals (IceCube-Gen2 at 1–10× sensitivity, sub-threshold CTA) come from secluded annihilation DM DM → Z'Z' followed by Z' decay to SM, whose rates depend on g' and MDM but **not on ε** (the Z' always decays eventually — even cτ ~ cm is instantaneous astrophysically). Direct detection through Z'-exchange is switched off because the mass-split sr/si eigenstates couple to Z' off-diagonally (inelastic, kinematically closed for O(GeV)-scale splittings), leaving only the small Higgs portal. The catalog's Z'-dilepton observable is the high-mass pp→Z'→ℓℓ recast and does not cover sub-10 GeV resonances. So a **laboratory dark-photon search is exactly the orthogonal axis** the catalog lacks, and the units are spread across four decades of it.

## Level 1 — lit-review split: visible dark-photon resonance search, 1–6 GeV

BaBar's e⁺e⁻ → γA', A'→ℓ⁺ℓ⁻ search (arXiv:1406.2980) already excludes ε ≈ 10⁻³ across 0.02–10.2 GeV; LHCb's prompt A'→μμ search (arXiv:1910.06926) covers 0.214–70 GeV at comparable strength near a few GeV; Belle II with 50 ab⁻¹ is projected to reach ε ≈ (3–5)×10⁻⁴ over this whole mass window (arXiv:1808.10567). A' decays here are visible and prompt for ε ≥ 10⁻⁴ (cτ ≈ 2.5 cm × (10⁻⁶/ε)² × (1 GeV/m), i.e. μm at ε = 10⁻⁴), and BR(A'→μμ) ≈ 10–30% for 1–6 GeV. So the measurement "narrow ℓℓ resonance in 1–6 GeV at kinetic-mixing strength ε ≥ 3×10⁻⁴" is real, current-to-near-term, and directly falsifiable.

**And the resonance mass separates the two Lagrangians.** Every high-ε U(1)[−] unit sits at MZp = 1.000 GeV exactly (R9, R21), while every high-ε U(1)[+] unit has MZp ≥ 1.086 GeV (minima: R3 1.086, R38 1.092, R11 1.198, R4 1.189, R37 1.258, R14 1.475, R18 1.565, R31 1.573, R19 1.656, R8 1.897, R25 2.085). Dimuon mass resolution at LHCb/Belle II is ~5–10 MeV, so a cut at m(ℓℓ) = 1.05 GeV cleanly assigns the discovered resonance. (Caveat: 1.00 GeV sits between the ω/ρ and φ(1020) veto windows — searches mask ±~30 MeV around φ, which leaves 1.00 GeV accessible; a fortunate miss. R38's minimum 1.092 GeV is within ~4% of the cut — noted as marginal.)

Outcome assignment by region ε-range (log-central value where a DBSCAN region spans the cut):

- **Seen at 1.00 GeV** (ε ≥ 3×10⁻⁴, m = 1.000): **R9, R21** — both pure U(1)[−]. (R9: ε 3.2×10⁻³–1.0×10⁻²; R21: 5.5×10⁻³–2.4×10⁻².)
- **Seen at m ≥ 1.05 GeV**: **R3, R4, R8, R11, R14, R18, R19, R25, R31, R37, R38** — all pure U(1)[+]. R37 (ε 6.8–8.7×10⁻⁴) is genuinely a *Belle II* discovery (below BaBar's current reach); R4, R8, R11, R14, R19 (ε up to 0.1) would already be showing up in existing BaBar/LHCb data. Marginal: R3 spans ε 1.2×10⁻⁵–0.1 (log-center 1.1×10⁻³ → assigned "seen"; ~1/3 of its log-range lies below the cut).
- **Not seen**: the remaining 26 units — all with ε_max ≲ 3×10⁻⁴ (R0's and R6's top edges graze 3.3–3.7×10⁻⁴; R5 reaches 2.5×10⁻³ over the top ~1/3 of its log-range — assigned here by log-center) — plus **R1**, whose 986 GeV Z' produces no GeV-mass resonance at all.

This is a genuine three-group split, with two of the three outcomes single-Lagrangian.

## Level 2 — novel/follow-up nodes for the still-degenerate outcomes

**Outcome "seen ≥ 1.05 GeV" (11 U(1)[+] regions).** MDM and MZp ranges overlap heavily among these regions, but ε does not, and ε is measured for free at discovery: the yield σ(e⁺e⁻→γA')·BR ∝ ε², giving ε to a few percent (statistics-limited; ISR/efficiency systematics at the % level). A cut at ε = 5×10⁻³ separates {R4, R8, R11, R14, R18, R19, R31, R38} (ε_min ≥ 5.8×10⁻³, except R18 which spans 1.8×10⁻³–1.9×10⁻², ~57% of log-range above the cut — marginal) from {R3, R25, R37} (ε ≲ 1.4×10⁻³ except R3's high tail). Rated **possible** — this is automatic once the resonance exists.

**Outcome "seen at 1.00 GeV" (R9 + R21).** These two U(1)[−] regions are the honest hard case: they overlap in ε (5.5×10⁻³–1.0×10⁻²), g' (0.025–0.04), alpha1, and MDM (402–557 GeV). Their only disjoint Lagrangian parameter is the DM self-quartic alpha2 (R9: 0.028–10 vs R21: ≤ 0.0023), which maps to a self-interaction σ/m ~ 10⁻¹³ cm²/g at these masses — twelve orders of magnitude below cluster-scale sensitivity (~0.5 cm²/g); unobservable by any conceivable means. The only physical handle is the DM mass itself via the neutrino-spectrum endpoint at IceCube-Gen2 (E_max = MDM for halo annihilation at rest): R9 extends down to 337 GeV while R21 starts at 402 GeV, so "endpoint < 400 GeV" tags R9 uniquely; the 402–557 GeV overlap remains genuinely degenerate. With flux only 1–10× Gen2 sensitivity (O(10) signal events) and muon-track energy resolution a factor ~2, this needs ~3× Gen2's effective area or a cascade-rich sample: rated **unlikely**; dominant systematic is the track-energy-proxy unfolding against the atmospheric-ν background.

**Outcome "not seen" (26 regions).** The same ε-axis still stratifies this group, just below current reach — the natural instrument is the planned LHCb Upgrade II (300 fb⁻¹) inclusive A'→μμ program, run in both prompt and displaced-vertex modes (the Ilten–Soreq–Thaler–Williams–Xue strategy already implemented in the Run 2 search). Prompt projections reach ε ≈ 2×10⁻⁵ at 1–6 GeV (~×50 in ε² over the current 5.5 fb⁻¹ result: ~×55 luminosity plus the removal of trigger prescales); the displaced mode covers exactly the VELO-scale window these models predict, cτ ≈ 2.5 cm × (10⁻⁶/ε)² × (1 GeV/m), i.e. 0.1–30 mm for ε ≈ (1–10)×10⁻⁶ at 1–3 GeV. Dominant systematic for displaced μμ above 1 GeV is the b→μμX cascade background, needing vertex-isolation cuts ~3× better than Run 2 — within the Upgrade II design, so rated **possible**. Outcomes (log-central assignment for spanning regions, noted marginal):

- **Prompt peak** (2×10⁻⁵ ≲ ε ≲ 3×10⁻⁴): R0 (log-center 1.9×10⁻⁵, right at the cut — marginal; this 706-pt blob spans 2.5 decades and genuinely straddles all three outcomes), R5, R6, R12, R16, R17, R20, R26, R28, R34, R35, R36. Bonus not encoded in the node: R28 and R2 are U(1)[−] with MZp ≈ 1.00, so a prompt peak at exactly 1.00 GeV would again point to the [−] Lagrangian.
- **Displaced vertex** (ε ≈ (2–10)×10⁻⁶): R2 (marginal, log-center 1.1×10⁻⁵), R7, R10, R24, R27, R30, R32.
- **Nothing** (ε ≈ 10⁻⁶, below even displaced reach at these masses — rate ∝ ε² is ~400× below the prompt cut — plus the heavy-Z' region): R1, R13, R15, R22, R23, R29, R33. Residual degeneracy is acknowledged; within it, R1 is the odd unit out (it uniquely predicts a 986 GeV dilepton peak — already a catalog axis — and a hard ~546 GeV neutrino line from near-resonant s-channel annihilation to SM fermion pairs, versus the soft boosted-cascade spectra of the light-Z' units; a Gen2 spectral-shape analysis could pick it off, but no further node slots exist under the stated attachment rules).

A final honesty note: the [+] vs [−] dark-charge sign is not by itself a locally observable quantum number (it can be flipped by a field redefinition up to the Z_N-odd potential terms); what the tree separates is where the RL scan found the two builds' viable regions — most sharply, the MZp = 1.000 GeV pinning of the high-ε [−] regions — and those are absolute, falsifiable mass/coupling predictions. Also, units with ε ≳ 10⁻³ at 1–6 GeV (R11's ε = 0.1 especially) sit in territory BaBar has nominally excluded already; they survive in this scan only because the catalog has no GeV-dark-photon observable — which makes this split not just discriminating but immediately actionable on existing data.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_no_no_no",
      "lit_review": {
        "name": "Dark-photon resonance search (BaBar / LHCb / Belle II)",
        "observable": "ll resonance in 1-6 GeV with eps >= 3e-4 ? If seen: m(ll) < 1.05 GeV ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "All units except R1 predict a visible, prompt dark photon at 1-6 GeV; the leaf's indirect-detection signals are eps-independent (secluded annihilation), so lab eps-reach is the orthogonal axis the catalog lacks. BaBar e+e- -> gamma A' (A'->ll) already excludes eps ~ 1e-3 over 0.02-10.2 GeV; LHCb prompt A'->mumu covers 0.214-70 GeV; Belle II 50/ab projects eps ~ 3e-4 across 1-6 GeV. High-eps U(1)[-] units (R9, R21) sit at MZp = 1.000 GeV exactly, while every high-eps U(1)[+] unit has MZp >= 1.086 GeV; dimuon mass resolution ~5-10 MeV makes the 1.05 GeV cut trivial, so the discovery mass separates the two LAGRANGIANS. R1 (MZp = 986 GeV) predicts nothing at GeV masses. Marginal: R3 spans eps 1.2e-5-0.1 (assigned seen by log-center 1.1e-3); R5's top third exceeds the cut but its log-center 1.7e-4 is below (assigned not seen); R38's mass minimum 1.092 GeV is 4% above the 1.05 cut; the phi(1020) veto window (~1.02 +- 0.03 GeV) narrowly misses the 1.000 GeV prediction.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen at 1.0", "regions": ["R9", "R21"]},
          {"label": "seen above 1.05", "regions": ["R3", "R4", "R8", "R11", "R14", "R18", "R19", "R25", "R31", "R37", "R38"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R5", "R6", "R7", "R10", "R12", "R13", "R15", "R16", "R17", "R20", "R22", "R23", "R24", "R26", "R27", "R28", "R29", "R30", "R32", "R33", "R34", "R35", "R36"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R3+R4+R8+R11+R14+R18+R19+R25+R31+R37+R38",
          "name": "Belle II / LHCb kinetic-mixing determination from A' yield",
          "observable": "sigma(e+e- -> gamma A')*BR(ll) => eps >= 5e-3 ?",
          "reasoning": "MDM and MZp ranges of these 11 U(1)[+] regions overlap, but eps does not: R4, R8, R11, R14, R19, R31, R38 have eps_min >= 5.8e-3 (R11 pinned at 0.1), while R25 and R37 have eps <= 1.4e-3 and R3's log-center is 1.1e-3. The discovery yield scales as eps^2, so eps is measured to few-percent statistical precision for free once the resonance is found. Marginal: R18 spans 1.8e-3-1.9e-2 (57% of log-range above the cut); R3 spans four decades.",
          "feasibility": "Belle II (50/ab) and LHCb: signal-yield measurement at an already-discovered resonance; current single-photon+dilepton analyses reach few-% statistical precision on eps^2 at eps > 1e-3, improvement factor ~1 (no new reach needed). Dominant systematic: ISR modeling and tracking efficiency at the percent level.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R4", "R8", "R11", "R14", "R18", "R19", "R31", "R38"]},
            {"label": "no", "regions": ["R3", "R25", "R37"]}
          ]
        },
        {
          "attach_to": "R9+R21",
          "name": "IceCube-Gen2 nu-spectrum endpoint",
          "observable": "nu endpoint E_max < 400 GeV ?",
          "reasoning": "R9 and R21 overlap in eps, gU1p, alpha1, and MDM (402-557 GeV); their only disjoint parameter is the DM self-quartic alpha2 (R9: 0.028-10 vs R21: <= 0.0023), which gives sigma_self/m ~ 1e-13 cm^2/g — twelve orders below cluster bounds, unobservable. The one physical handle is MDM via the halo-annihilation neutrino endpoint E_max = MDM: R9 extends down to 337 GeV, R21 starts at 402 GeV, so an endpoint below 400 GeV uniquely tags R9. The 402-557 GeV overlap remains honestly degenerate; this split only peels off R9's low-mass tail.",
          "feasibility": "IceCube-Gen2 (planned): muon-track energy resolution ~ factor 2, cascades ~15%; signal is only 1-10x Gen2 sensitivity (O(10) events), so a 15%-level endpoint needs ~3x Gen2 effective area or a cascade-dominated sample. Dominant systematic: track energy-proxy unfolding against the atmospheric-nu background.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R9"]},
            {"label": "no", "regions": ["R21"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R5+R6+R7+R10+R12+R13+R15+R16+R17+R20+R22+R23+R24+R26+R27+R28+R29+R30+R32+R33+R34+R35+R36",
          "name": "LHCb Upgrade II inclusive A' -> mumu",
          "observable": "prompt mumu peak 1-6 GeV (eps >= 2e-5) ? displaced mumu vertex (ctau 0.1-30 mm) ?",
          "reasoning": "The eps axis still stratifies this group below current reach. Prompt Upgrade II reach eps ~ 2e-5 at 1-6 GeV catches the mid-eps regions (log-centers 3e-5 to 3e-4): R0, R5, R6, R12, R16, R17, R20, R26, R28, R34, R35, R36. The displaced mode covers ctau = 2.5 cm x (1e-6/eps)^2 x (1 GeV/m), i.e. 0.1-30 mm for eps = (2-10)e-6 at 1-3 GeV: R2, R7, R10, R24, R27, R30, R32. Regions at eps ~ 1e-6 (R13, R15, R22, R23, R29, R33; rate 400x below the prompt cut) and the heavy-Z' region R1 (no GeV resonance) see nothing. Marginal: R0 spans 2.5 decades of eps and straddles all three outcomes (assigned prompt by log-center 1.9e-5); R2 likewise (assigned displaced, log-center 1.1e-5). A prompt peak at exactly 1.00 GeV (R28, R2) would additionally point to the U(1)[-] build. Within the 'nothing' outcome, R1 is distinguishable in principle by a hard ~546 GeV neutrino line from near-resonant s-channel annihilation versus soft boosted Z' cascades, but no further node can be attached here.",
          "feasibility": "LHCb Upgrade II (300/fb, planned): current 5.5/fb search reaches eps ~ 1e-3 prompt at these masses; required improvement ~50x in eps^2 comes from ~55x luminosity plus triggerless readout (published projections reach eps ~ 2e-5). Displaced mumu above 1 GeV is limited by b -> mumu X cascade background, needing ~3x tighter vertex isolation than Run 2 — within the upgrade design. Dominant systematic: displaced heavy-flavour background modeling.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "prompt seen", "regions": ["R0", "R5", "R6", "R12", "R16", "R17", "R20", "R26", "R28", "R34", "R35", "R36"]},
            {"label": "displaced seen", "regions": ["R2", "R7", "R10", "R24", "R27", "R30", "R32"]},
            {"label": "nothing", "regions": ["R1", "R13", "R15", "R22", "R23", "R29", "R33"]}
          ]
        }
      ]
    }
  ]
}
```