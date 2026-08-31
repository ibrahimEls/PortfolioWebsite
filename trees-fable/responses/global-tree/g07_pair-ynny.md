I'll first verify the arXiv references I plan to cite (per the card's rules), then deliver the full answer as one message.
# Degeneracy-breaking analysis for the two sibling leaves under `root_yes_no_no_yes`

**TLDR:** Both leaves contain a light dark U(1)′ gauge boson (Z′, 1–75 GeV) whose kinetic mixing ε spans up to nine orders of magnitude across regions, while the catalog's Z′-dilepton observable is a high-mass Drell-Yan recast that is blind below ~150 GeV. The single most powerful non-catalog measurement is therefore the **LHCb prompt low-mass dimuon (dark-photon) search** — it splits both leaves at Level 1, and precision follow-ups on the same peak (rate, mass, and the Upgrade II luminosity extension) do most of the remaining work. The residual degeneracy inside the surviving groups is *physical*: those regions coincide in every SM-coupled parameter (M_DM, M_Z′, ε, g_D, α1) and differ only in the dark quartics α2–α6, whose sole observable — DM self-scattering — sits ~10 orders of magnitude below cluster bounds. I say so honestly rather than inventing a fake discriminator.

## Common physics

Both Lagrangians are a complex scalar singlet DM (charge −1 under a dark U(1)′) plus Higgs portal α1. In every unit M_DM > M_Z′, so the Z′ cannot decay to dark matter and decays **visibly** to SM fermions through kinetic mixing ε, exactly like a heavy dark photon: a narrow μ⁺μ⁻ resonance with BR(μμ) ≈ 10–15% above 10 GeV. Production at the LHC is photon-like: σ×BR(μμ) ≈ ε² × (3π/2α) × m × dσ_DY/dm ≈ **2×10⁷ fb × ε²** at m ≈ 15 GeV (falling to ~6×10⁶ fb × ε² by 40–60 GeV). The published LHCb Run-2 prompt limit (ε² ≈ 2×10⁻⁷–10⁻⁶ over 10.6–70 GeV) corresponds to σ×BR ≈ 4 fb, which anchors my cuts. CMS dimuon scouting covers 11.5–75 GeV with comparable reach, closing LHCb's 70 GeV edge (relevant for leaf-2 R7, M_Z′ up to 74 GeV). This is *not* a catalog observable: the catalog's Z′-dilepton entry is the high-mass σ×BR recast whose limit curves start far above these Z′ masses, which is precisely why the tree never used it here.

Two discriminators I checked and rejected, for the record: (i) **beam dumps / far detectors** for the ε ~ 10⁻⁶ units — at m_Z′ ≈ 1–3 GeV and ε ≈ 1.5×10⁻⁶ the Z′ width gives cτ ≈ 0.7–3 cm; even with beam boosts γ ~ 20 the decay length is ≲ 1 m, so nothing survives the ~40 m to a SHiP-type decay volume: these Z′ are invisible to *every* accelerator probe, and that non-observation is itself the split. (ii) **DM self-interactions** from the quartics: for λ ~ 10, M_DM ~ 137 GeV, σ/m ~ 10⁻¹¹ cm²/g vs the cluster bound ~0.5 cm²/g — hopeless, which is why the quartic directions are unmeasurable. Indirect detection doesn't discriminate either: nearly all units share g_D ≈ 0.202 and M_DM ≈ 137 GeV, giving essentially the same ⟨σv⟩(ss̄→Z′Z′) ≈ 2×10⁻²⁶ cm³/s.

## Leaf `root_yes_no_no_yes_yes` (499 pts, 21 units, all one Lagrangian)

All 21 units are CsSg_U1p[+].Z2+3+4+5, so only region-splitting is available. Predicted prompt σ×BR(μμ) per region (from each region's ε range at its M_Z′):

- **R10 is the outlier**: M_Z′ = 1–1.6 GeV, ε ≈ 10⁻⁶ → σ×BR ~ 10⁻⁴ fb; also M_DM = 288–308 GeV and g_D = 0.03–0.06 instead of 0.202. Nothing at any collider or dump sees this Z′ (lifetime argument above).
- **Everything else** has ε ≥ 1.45×10⁻³ at M_Z′ = 6.8–38 GeV: R0: 1.4–190 pb; R1: 5.2–190 pb; R2: 27–190 pb; R3: 6.6–190 pb; R4: 29–190 pb; R5: 56–190 pb; R6: 65–190 pb; R7: 6.3–11 pb; R8: ~20–100 fb (ε = 1.45–2.5×10⁻³, m = 17–38 GeV); R9: 32–190 pb; R11: 1.9–4.9 pb; R12: 0.4–1.9 pb; R13: 65–190 pb; R14, R15, R17, R19: ~190 pb (ε pinned at 0.1); R16: 0.7–6.6 pb; R18: 92–190 pb; R20: 4.5–65 pb.

So a cut at **σ×BR > 5 fb** (≈ current LHCb sensitivity) separates R10 (five orders below) from the other 20 regions (≥4× above, mostly 10³–10⁵×). Honesty note: the high-ε regions predict peaks 10²–10⁵ times the *published* bounds — they are already in strong tension with existing LHCb/CMS data (a genuine catalog gap), so simply consulting the 2020 datasets already collapses this leaf either way: peak seen → R10 excluded; no peak → only R10 survives. That is the strongest kind of lit-review split.

**Novel node on the 20-region "seen" group:** the same detector measures the peak's cross-section to ~3% (these peaks contain 10³–10⁶ events), and σ×BR ∝ ε² is the main *observable* axis along which the regions differ. Cut at **σ×BR > 15 pb** (ε ≈ 0.028 at 15 GeV): cleanly below are R7 (≤11 pb), R8 (≤0.1 pb), R11 (≤4.9 pb), R12 (≤1.9 pb), R16 (≤6.6 pb); cleanly above are R2, R4, R5, R6, R9, R13, R14, R15, R17, R18, R19 (minima 27–190 pb). Four region boxes straddle the cut — R0 (1.4–190 pb, log-mid ≈ 16 pb), R1 (log-mid ≈ 31 pb), R3 (≈ 35 pb), R20 (≈ 17 pb) — I assign them to the high side by log-midpoint and flag them as marginal. Peak *position* (resolution ~0.1%) adds sub-splits (e.g. R5 reaches down to 6.8 GeV, R8 up to 38 GeV) but no universal clean cut, since most M_Z′ ranges overlap at ~15.7 GeV. The degeneracy remaining inside each outcome (e.g. R14 vs R15 vs R17 vs R19: identical M_DM = 136.8, M_Z′ ≈ 15–21, ε = 0.1, g_D = 0.202, α1 ≈ 0.004) is carried entirely by the dark quartics α2–α6 and is physically unbreakable by any SM-coupled experiment — stated in the reasoning rather than papered over.

## Leaf `root_yes_no_no_yes_no` (630 pts, 16 units, 2 Lagrangians)

Z2 units: R7, R13, R14, R15. Z2+3+4+5 units: the rest. The two Lagrangians differ only by the Z_N-odd quartics (si·sr³, si³·sr) — no direct observable — so a global Lagrangian split is impossible; but the split below *does* isolate a pure-Z2 branch (R14) from pure-Z2345 ones (R11, R12).

Predicted prompt σ×BR(μμ): R0: 0.5–190 pb; R1: **8×10⁻³ fb–60 pb** (ε spans 2×10⁻⁵–0.057 — genuinely straddles everything; log-mid ≈ 22 fb); R2: 0.7–60 pb (m 21.5–60.5); R3: 13–190 pb; R4: 1.4–24 pb; R5: 8–19 pb; R6: 2.2–20 pb; R7 (Z2): 0.4–7 pb (m 43–74; CMS scouting covers the >70 GeV tail); R8: 25–320 fb; R9: 55–190 pb; R10: 5–47 fb (marginal at the low end — flagged); R11: 0.02–0.09 fb; R12: ~2×10⁻⁴ fb (m 1.6–3.3 GeV, ε ≈ 1.5×10⁻⁶, and its cτγ ≲ 1 m kills any dump search too); R13 (Z2): 0.8–42 pb; R14 (Z2): 0.4–1.5 fb (m 34–62, ε ≈ 3×10⁻⁴ — a factor 3–10 *below* current reach); R15 (Z2): ~0.1–0.3 pb at m 2.4–4.5 GeV (also ~2× above the BaBar e⁺e⁻→γA′ bound ε ≈ 10⁻³ — already in tension).

**Level-1 cut σ×BR > 5 fb**: seen = {R0, R1, R2, R3, R4, R5, R6, R7, R8, R9, R10, R13, R15}; not seen = {R11, R12, R14}. R10 (1–12× current sensitivity) and especially R1 (log-mid barely above cut) are flagged marginal; R1's DBSCAN box is a long ε-ridge and no cut anywhere avoids bisecting it.

**Novel A (on the 13-region "seen" group): peak mass.** LHCb's dimuon mass resolution (~0.5%) makes M_Z′ an essentially exact measurement, and the seen regions split into disjoint mass families around 20 GeV: heavy = R2 (21.5–60.5), R7 (43–74), R8 (22.4–53.3), plus straddler R1 (15.7–44.5, flagged); light = R0, R3, R4, R5, R6, R9, R10, R13 (all ≤ 18.1) and R15 (2.4–4.5). Only R1 crosses the cut. Within "light", the residuals share (M_DM = 136.8, M_Z′ ≈ 15.7, g_D ≈ 0.202) and differ by quartics + overlapping ε — same physical wall as leaf 1; within "heavy", a rate cut would further pull R8 (ε ≤ 0.007) below R2/R7 (ε ≥ 0.011), noted but not drawn.

**Novel B (on {R11, R12, R14}): LHCb Upgrade II.** With ~300 fb⁻¹ the prompt sensitivity improves to σ×BR ≈ 0.2 fb. R14 predicts 0.4–1.5 fb at 30–65 GeV → *seen* (margin ×2–7); R11 (0.02–0.09 fb, and at 12.3 GeV, outside the cut window) and R12 (10⁻⁴ fb) → *not seen*. This is simultaneously a **Lagrangian split**: yes = pure Z2 (R14), no = pure Z2+3+4+5 (R11, R12). The residual R11-vs-R12 pair is then separable by the XLZD recoil-spectrum mass they will both deliver anyway (M_DM = 108.8 vs 300 GeV — well beyond xenon's spectral-shape resolution threshold even with a few dozen events), noted as the natural follow-up.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_no_yes_yes",
      "lit_review": {
        "name": "LHCb prompt dark-photon dimuon search",
        "observable": "prompt mu+mu- resonance at 2-75 GeV with sigma x BR(mumu) > 5 fb ?",
        "what_this_is": "LHCb is one of the four large detectors at the Large Hadron Collider, specialized in precisely reconstructing low-mass particles decaying to pairs of muons. It has published dedicated searches for a dark photon: a new force carrier that mixes slightly with the ordinary photon, is produced like a photon in proton collisions, and shows up as a narrow bump in the muon-pair mass spectrum. Every region in this leaf contains exactly such a particle (the dark U(1) boson Z'), and the predicted bump size spans nine orders of magnitude across regions, so simply looking for the bump collapses the leaf. The catalog's Z' dilepton entry is a high-mass recast blind below ~150 GeV, so this low-mass search is a genuinely new observable here.",
        "refs": ["arXiv:1910.06926", "arXiv:1912.04776", "arXiv:1801.04847"],
        "reasoning": "All units except R10 have a Z' at 6.8-38 GeV with kinetic mixing eps >= 1.45e-3, giving prompt sigma x BR(mumu) ~ 2e7 fb x eps^2 ~ 20 fb - 190 pb (R8 lowest at ~20-100 fb; most regions 1-190 pb), i.e. 4x to 50,000x the published LHCb Run-2 sensitivity of ~4 fb (eps^2 ~ 2e-7) -- indeed the high-eps regions are already in strong tension with existing LHCb/CMS data, a catalog gap. R10 instead has M_Z' = 1-1.6 GeV with eps ~ 1e-6, predicting ~1e-4 fb, five orders below any projected reach; its Z' is also invisible to beam dumps (ctau x gamma < 1 m at eps=1e-6). CMS scouting (11.5-75 GeV) closes the coverage above LHCb's strongest window. Cut placed at 5 fb ~ current sensitivity.",
        "status": "Splits!",
        "outcomes": [
          {"label": "peak seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R18", "R19", "R20"]},
          {"label": "no peak", "regions": ["R10"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9+R11+R12+R13+R14+R15+R16+R17+R18+R19+R20",
          "name": "HL-LHCb Z' dimuon rate precision",
          "observable": "sigma x BR(mumu) of the 7-40 GeV dimuon peak > 15 pb ?",
          "what_this_is": "Once the muon-pair bump is found, the same LHCb detector can measure its production rate to the percent level, since the predicted peaks contain thousands to millions of events. The rate is proportional to the square of the photon-dark-photon mixing strength, which is the main measurable parameter that differs among these otherwise near-identical regions. A simple rate threshold therefore sorts the regions into strongly-mixed and weakly-mixed families.",
          "reasoning": "Predicted sigma x BR: cleanly below 15 pb are R7 (6.3-11 pb), R8 (0.02-0.1 pb), R11 (1.9-4.9 pb), R12 (0.4-1.9 pb), R16 (0.7-6.6 pb); cleanly above are R2, R4, R5, R6, R9, R13, R14, R15, R17, R18, R19 (minima 27-190 pb, eps up to the 0.1 scan edge). Four boxes straddle the cut and are assigned high by log-midpoint: R0 (1.4-190 pb, mid ~16 pb), R1 (~31 pb), R3 (~35 pb), R20 (~17 pb) -- flagged marginal. Peak-position spectroscopy (0.1% resolution) adds sub-splits but M_Z' ranges overlap at ~15.7 GeV, so rate is the best single cut. Residual degeneracy within each outcome (regions coincident in M_DM=136.8 GeV, M_Z'~15 GeV, eps, g_D=0.202, alpha1~0.004) lives entirely in the dark quartics alpha2-alpha6, whose only observable is DM self-scattering at ~1e-11 cm^2/g vs the ~0.5 cm^2/g cluster bound: physically unbreakable, honestly declared.",
          "feasibility": "Closest instrument: LHCb itself (existing); dimuon rate systematics ~3% (luminosity + efficiency), while the split only needs to distinguish >27 pb from <11 pb peaks -- no improvement factor required. Dominant systematic: Drell-Yan continuum modeling under the peak, negligible at these signal sizes. The real limitation is not instrumental: four region boxes (R0, R1, R3, R20) straddle the 15 pb cut, so their assignment is by log-midpoint.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "high rate", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R9", "R13", "R14", "R15", "R17", "R18", "R19", "R20"]},
            {"label": "low rate", "regions": ["R7", "R8", "R11", "R12", "R16"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_no_yes_no",
      "lit_review": {
        "name": "LHCb prompt dark-photon dimuon search",
        "observable": "prompt mu+mu- resonance at 2-75 GeV with sigma x BR(mumu) > 5 fb ?",
        "what_this_is": "LHCb is one of the four large detectors at the Large Hadron Collider, specialized in precisely reconstructing low-mass particles decaying to pairs of muons. It has published searches for a dark photon: a new force carrier that mixes slightly with the ordinary photon and appears as a narrow bump in the muon-pair mass spectrum. Every region in this leaf contains such a particle (the dark U(1) boson Z') between 1.6 and 74 GeV, with predicted bump sizes spanning nine orders of magnitude, so the existence of the bump is the sharpest single question. The catalog's Z' dilepton entry only covers much heavier resonances, so this measurement is new to the tree.",
        "refs": ["arXiv:1910.06926", "arXiv:1912.04776", "arXiv:1801.04847"],
        "reasoning": "Predicted prompt sigma x BR(mumu) ~ 2e7 fb x eps^2 (at 15 GeV; ~6e6 at 40-60 GeV): seen group R0 0.5-190 pb, R2 0.7-60 pb, R3 13-190 pb, R4 1.4-24 pb, R5 8-19 pb, R6 2.2-20 pb, R7 0.4-7 pb (m 43-74 GeV, CMS scouting covers the >70 GeV tail), R8 25-320 fb, R9 55-190 pb, R13 0.8-42 pb, R15 0.1-0.3 pb (m 2.4-4.5 GeV, also ~2x above the BaBar e+e- -> gamma A' bound), R10 5-47 fb (marginal, 1-12x current sensitivity, flagged). Not seen: R11 (0.02-0.09 fb), R12 (~2e-4 fb; its 1.6-3.3 GeV Z' at eps~1.5e-6 also has ctau x gamma < 1 m, invisible to beam dumps), R14 (0.4-1.5 fb, a factor 3-10 below current reach). R1's box spans 8e-3 fb - 60 pb (eps 2e-5-0.057) and genuinely straddles any cut; assigned seen by log-midpoint (~22 fb) and flagged. A global Z2-vs-Z2345 Lagrangian split is impossible (the distinguishing quartics have no SM coupling), but the not-seen branch sets up a clean Lagrangian separation at the next node.",
        "status": "Splits!",
        "outcomes": [
          {"label": "peak seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R13", "R15"]},
          {"label": "no peak", "regions": ["R11", "R12", "R14"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9+R10+R13+R15",
          "name": "LHCb dimuon peak spectroscopy",
          "observable": "dimuon peak mass > 20 GeV ?",
          "what_this_is": "This measures the position (mass) of the muon-pair bump rather than just its existence, using the same LHCb detector. LHCb's mass resolution for muon pairs is better than one percent, so the Z' mass is measured essentially exactly. The regions in this outcome fall into a light family clustered below 18 GeV and a heavy family above 21 GeV, so the peak position cleanly separates them.",
          "reasoning": "M_Z' ranges are disjoint around 20 GeV: heavy R2 (21.5-60.5), R7 (43.1-74.2), R8 (22.4-53.3) vs light R0 (10.7-18.1), R3 (13-17.3), R4, R5, R6, R9, R10 (all 13-17.3), R13 (7.5-16.2), R15 (2.4-4.5). Only R1 (15.7-44.5) crosses the cut; assigned heavy and flagged marginal. Within 'heavy', a rate cut would further pull R8 (eps <= 0.0073, 25-320 fb) below R2/R7 (eps >= 0.011, >=0.4 pb) -- noted, not drawn. Within 'light', the residual regions coincide in (M_DM = 136.8 GeV, M_Z' ~ 15.7 GeV, g_D ~ 0.202) with overlapping eps and differ mainly in dark quartics alpha2-alpha6, which couple to nothing observable (self-interaction ~1e-11 cm^2/g): that residue is physically unbreakable. Note R7 and R13 here are the Z2 Lagrangian; their boxes overlap Z2345 boxes in every measurable, so this node separates regions, not Lagrangians.",
          "feasibility": "Closest instrument: LHCb itself (existing). Dimuon mass resolution ~0.5% at 15-70 GeV vs the >30% separation between the mass families: ~60x margin, no improvement factor needed. Dominant systematic: momentum-scale calibration, at the per-mille level -- irrelevant here.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "heavy", "regions": ["R1", "R2", "R7", "R8"]},
            {"label": "light", "regions": ["R0", "R3", "R4", "R5", "R6", "R9", "R10", "R13", "R15"]}
          ]
        },
        {
          "attach_to": "R11+R12+R14",
          "name": "LHCb Upgrade II 300 fb^-1 dimuon scan",
          "observable": "sigma x BR(mumu) > 0.2 fb at m(mumu) 30-65 GeV ?",
          "what_this_is": "LHCb Upgrade II is the planned high-luminosity stage of the LHCb experiment, collecting roughly thirty times more collision data in the 2030s, which pushes the smallest detectable muon-pair bump down by nearly an order of magnitude. One region (R14) predicts a bump just below today's sensitivity but comfortably within the upgraded reach, while the other two predict bumps thousands of times smaller still. Seeing or not seeing a bump at the improved sensitivity therefore isolates R14 -- which is also the plain-Z2 Lagrangian, so this bump doubles as a Lagrangian-level discriminator.",
          "reasoning": "R14 (Z2 Lagrangian: M_Z' 34-62 GeV, eps 2.6-4.4e-4) predicts sigma x BR = 0.4-1.5 fb, a factor 2-7 above the projected Upgrade II sensitivity of ~0.2 fb but 3-10x below today's. R11 (Z2345: 12.3 GeV, eps 3-7e-5) predicts 0.02-0.09 fb, at least 2x below even the upgraded reach and outside the 30-65 GeV window; R12 (Z2345: 1.6-3.3 GeV, eps ~1.5e-6) predicts ~2e-4 fb and its Z' also decays within ~1 m of production, killing any beam-dump alternative. So yes = pure Z2, no = pure Z2+3+4+5: a clean Lagrangian split within this outcome. The residual R11-vs-R12 pair is then separable by the XLZD recoil-energy spectrum both will deliver anyway (M_DM = 108.8 vs 300 GeV, i.e. a rising vs flat spectral shape distinguishable with a few dozen signal events).",
          "feasibility": "Closest instrument: LHCb Upgrade II (framework TDR endorsed by CERN for the HL-LHC era). Scaling the published 5.5 fb^-1 prompt search to ~300 fb^-1 improves the eps^2 reach by ~x7, i.e. sigma x BR ~ 0.2 fb at 30-65 GeV; R14 needs at most a x2 margin beyond current projections, R11 stays >=2x below reach. Dominant systematic: modeling the Drell-Yan continuum under a narrow peak at the per-mille level, plus the marginal-flag that R11's upper edge (0.09 fb) approaches the projected floor.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R14"]},
            {"label": "not seen", "regions": ["R11", "R12"]}
          ]
        }
      ]
    }
  ]
}
```