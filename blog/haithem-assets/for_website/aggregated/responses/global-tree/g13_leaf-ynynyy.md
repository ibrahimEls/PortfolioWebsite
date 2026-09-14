## Reasoning — leaf `root_yes_no_yes_no_yes_yes` (47 pts, R0 + R1)

**Existing dark-photon searches: BaBar, LHCb, CMS scouting** (literature split). Both regions predict a kinetically-mixed Z' with g' ~ 0.06-0.13 and eps spanning ~1e-5 to 0.1. Existing nulls exclude eps >~ 1e-3 for m < 10.2 GeV (BaBar) and eps^2 >~ 1e-6 for ~10.6-45 GeV (LHCb prompt, CMS scouting). Predicted outcome in R0: any surviving Z' sits at 1-5.4 GeV with eps below today's reach — nothing seen. Predicted outcome in R1: surviving Z' anywhere in 1-36 GeV, likewise below today's reach — nothing seen. Identical observed result for both regions: the data in hand constrain but do not split. No split from existing data: the null results are consistent with every surviving point of both regions, because the two boxes fully overlap in the (mass, eps) plane below current sensitivity for m < 5.4 GeV, and R1's heavier points hide below eps^2 ~ 1e-6. Dominant systematic in these searches is the smooth irreducible dimuon continuum (Drell-Yan, heavy-flavour decays), irrelevant here since no bump is claimed.

**LHCb Run 3-Run 4 dark-photon dimuon scan, 5.5-36 GeV** (literature projection on R0 + R1). R0 predicts M_Z' in [1, 5.36] GeV: a resonance above 5.5 GeV is kinematically impossible for every R0 point, at any mixing - a disjoint-window partition. R1 predicts M_Z' in [1, 35.6] GeV with eps up to 0.1: the M_Z' > 5.4 GeV, eps >~ 3e-4 part of its box (roughly the top ~2.5 of its 4.3 decades in eps) yields a discoverable narrow prompt mumu peak, with sigma x BR proportional to eps^2. Discovery of a 5.5-36 GeV line therefore uniquely tags R1. One-sided, stated: a null is what R0 always predicts, but the light-Z' (M_Z' < 5.4 GeV) or feeble-mixing (eps <~ 3e-4) corner of R1 also gives a null - 'not seen' is R0-favored, not R0-proven. Additional dilution: R1 points with M_Z' > 2*M_DM (possible above ~20 GeV) have BR(mumu) reduced by the open invisible Z' -> S S* channel (gU1p ~ 0.1 vs eps*e). The Z' is prompt everywhere in the scan (c*tau <= ~2 cm at the eps floor), so LHCb's prompt+displaced selection has full acceptance. CMS Run 3 dimuon scouting (11.5-36 GeV) is the equal-rated alternative for the upper window and Belle II (5.5-10.5 GeV only) for the lower; both cover strictly less of the window, so the LHCb scan is the node. Today-experiment: LHCb prompt A'->mumu with 5.5 fb^-1 (arXiv:1910.06926), best current sensitivity eps^2 ~ 1e-6 in the 10.6-45 GeV window (CMS scouting comparable at 11.5-45 GeV). Near-term: the same inclusive scan on Run 3-Run 4 data (~50 fb^-1) with the fully software trigger, projected in arXiv:1603.08926 to open large unexplored regions at 10-40 GeV; eps^2 sensitivity gains sqrt(50/5.5) ~ 3 from luminosity (background-limited scaling assumed) times ~3 from triggerless readout and selection, i.e. improvement factor ~10 in eps^2, reaching eps ~ 3e-4. Rated possible: Run 3 is recorded/being recorded within the approved program. LHCb Upgrade II (300 fb^-1, arXiv:1808.08865) extends the same scan to ~100x in eps^2 (eps ~ 1e-4) in the 2030s. Dominant systematic: modeling the smooth Drell-Yan/heavy-flavour dimuon continuum under a narrow peak, plus the Upsilon veto windows (9.1-10.6 GeV) inside the scan range. Honest caveat: the eps <~ 3e-4 (Run 3) or <~ 1e-4 (Upgrade II) tail of R1 stays hidden at any planned sensitivity.
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_no_yes_yes",
      "lit_search_note": "Searched (checked against sources): dark-photon dimuon/dilepton archives (BaBar 1406.2980, eps ~ 1e-4-1e-3 up to 10.2 GeV; LHCb 1910.06926, to 70 GeV; CMS scouting 1912.04776, 11.5-45 GeV) - trim the high-eps tops of BOTH boxes without assigning the leaf, since both units populate the shared 1-5.4 GeV low-eps window; cluster-merger and strong-lensing self-interaction bounds (0.47 and 0.13 cm^2/g) - both units predict sigma/m <= few x 1e-5 cm^2/g (R0 quartic-dominated at 1e-7-3e-5, R1 Z'-exchange-dominated at 1e-12-1e-6), 5-12 orders below any bound; Planck p_ann and Fermi dwarfs - both units contain secluded s-wave (MZp<MDM) and suppressed points with the same gU1p and MDM; EW-precision Z-Z' mixing, (g-2)_mu, NA64/beam dumps - functions of (eps, MZp, gU1p) with overlapping ranges, and beam-dump/far-detector displaced searches have zero acceptance since c*tau <= 2 cm; Xe/Ar target ratios, recoil spectra, modulation, precision h->inv - alpha1 pinned at 0.001 in both, contact-like q << MZp in both. The only disjoint coupling axis is the dark quartic alpha2 (3.41-10 vs 0.0029-2.50), reachable solely through DM self-scattering ~6 orders below any conceivable astrophysical floor; the disjoint viable MZp windows (above 5.4 GeV only R1) are the one exploitable handle.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Existing dark-photon searches: BaBar, LHCb, CMS scouting",
          "observable": "prompt mumu resonance, 1-36 GeV, eps^2 >~ 1e-6 ?",
          "what_this_is": "Several completed or running experiments have already scanned for a new light gauge boson (a 'dark photon') that mixes weakly with the ordinary photon and would appear as a narrow bump in the mass spectrum of electron or muon pairs. BaBar looked in electron-positron collisions up to 10 GeV; LHCb and CMS looked in proton-proton collisions up to and beyond 70 GeV. Both of our candidate parameter regions contain exactly such a boson, so these archives are the first place to look — but their null results only shave off the largest-mixing corners of both regions equally.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1406.2980",
            "arXiv:1912.04776"
          ],
          "reasoning": "Both regions predict a kinetically-mixed Z' with g' ~ 0.06-0.13 and eps spanning ~1e-5 to 0.1. Existing nulls exclude eps >~ 1e-3 for m < 10.2 GeV (BaBar) and eps^2 >~ 1e-6 for ~10.6-45 GeV (LHCb prompt, CMS scouting). Predicted outcome in R0: any surviving Z' sits at 1-5.4 GeV with eps below today's reach — nothing seen. Predicted outcome in R1: surviving Z' anywhere in 1-36 GeV, likewise below today's reach — nothing seen. Identical observed result for both regions: the data in hand constrain but do not split.",
          "feasibility": "No split from existing data: the null results are consistent with every surviving point of both regions, because the two boxes fully overlap in the (mass, eps) plane below current sensitivity for m < 5.4 GeV, and R1's heavier points hide below eps^2 ~ 1e-6. Dominant systematic in these searches is the smooth irreducible dimuon continuum (Drell-Yan, heavy-flavour decays), irrelevant here since no bump is claimed.",
          "outcomes": [
            {
              "label": "null - no split",
              "regions": [
                "R0",
                "R1"
              ]
            }
          ]
        },
        {
          "kind": "lit_projection",
          "attach_to": "R0+R1",
          "name": "LHCb Run 3-Run 4 dark-photon dimuon scan, 5.5-36 GeV",
          "observable": "narrow prompt mumu resonance, 5.5 < m(mumu) < 36 GeV ?",
          "what_this_is": "LHCb is a detector at the Large Hadron Collider that measures muon pairs with excellent mass resolution; since 2022 it runs with a fully software-based trigger and is accumulating roughly ten times its previous dataset, letting it scan the dimuon mass spectrum for a narrow bump from a dark photon far more deeply than before. The mass range of that bump is exactly what separates our two regions: one region's dark gauge boson can never be heavier than about 5.4 GeV, while the other's extends to 36 GeV, so a bump above 5.5 GeV picks out the second region uniquely.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1603.08926",
            "arXiv:1808.08865"
          ],
          "reasoning": "R0 predicts M_Z' in [1, 5.36] GeV: a resonance above 5.5 GeV is kinematically impossible for every R0 point, at any mixing - a disjoint-window partition. R1 predicts M_Z' in [1, 35.6] GeV with eps up to 0.1: the M_Z' > 5.4 GeV, eps >~ 3e-4 part of its box (roughly the top ~2.5 of its 4.3 decades in eps) yields a discoverable narrow prompt mumu peak, with sigma x BR proportional to eps^2. Discovery of a 5.5-36 GeV line therefore uniquely tags R1. One-sided, stated: a null is what R0 always predicts, but the light-Z' (M_Z' < 5.4 GeV) or feeble-mixing (eps <~ 3e-4) corner of R1 also gives a null - 'not seen' is R0-favored, not R0-proven. Additional dilution: R1 points with M_Z' > 2*M_DM (possible above ~20 GeV) have BR(mumu) reduced by the open invisible Z' -> S S* channel (gU1p ~ 0.1 vs eps*e). The Z' is prompt everywhere in the scan (c*tau <= ~2 cm at the eps floor), so LHCb's prompt+displaced selection has full acceptance. CMS Run 3 dimuon scouting (11.5-36 GeV) is the equal-rated alternative for the upper window and Belle II (5.5-10.5 GeV only) for the lower; both cover strictly less of the window, so the LHCb scan is the node.",
          "feasibility": "Today-experiment: LHCb prompt A'->mumu with 5.5 fb^-1 (arXiv:1910.06926), best current sensitivity eps^2 ~ 1e-6 in the 10.6-45 GeV window (CMS scouting comparable at 11.5-45 GeV). Near-term: the same inclusive scan on Run 3-Run 4 data (~50 fb^-1) with the fully software trigger, projected in arXiv:1603.08926 to open large unexplored regions at 10-40 GeV; eps^2 sensitivity gains sqrt(50/5.5) ~ 3 from luminosity (background-limited scaling assumed) times ~3 from triggerless readout and selection, i.e. improvement factor ~10 in eps^2, reaching eps ~ 3e-4. Rated possible: Run 3 is recorded/being recorded within the approved program. LHCb Upgrade II (300 fb^-1, arXiv:1808.08865) extends the same scan to ~100x in eps^2 (eps ~ 1e-4) in the 2030s. Dominant systematic: modeling the smooth Drell-Yan/heavy-flavour dimuon continuum under a narrow peak, plus the Upsilon veto windows (9.1-10.6 GeV) inside the scan range. Honest caveat: the eps <~ 3e-4 (Run 3) or <~ 1e-4 (Upgrade II) tail of R1 stays hidden at any planned sensitivity.",
          "feasibility_rating": "possible",
          "improvement_factor": 10,
          "outcomes": [
            {
              "label": "seen",
              "regions": [
                "R1"
              ]
            },
            {
              "label": "not seen",
              "regions": [
                "R0"
              ]
            }
          ]
        }
      ]
    }
  ]
}
```
