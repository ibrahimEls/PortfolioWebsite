## Reasoning — leaf `root_yes_no_yes_no_yes_yes` (47 pts, R0 + R1)

**Existing dark-photon searches (BaBar, LHCb, CMS scouting)** (literature split). Elastic direct detection in this model is pure Higgs portal (the U(1)' current of a complex scalar is off-diagonal between its real components, and the ~GeV inelastic splitting is closed), and annihilation is secluded, so no catalog observable depends on eps: both regions carry the full eps range, ~5e-6 to 0.1, with the same distribution. Predicted dilepton signal: R0 - a possible peak at 1-5.36 GeV with rate ~ eps^2; R1 - a possible peak anywhere in 1-35.6 GeV with the same eps distribution. The published nulls (BaBar eps >~ 1e-3 below 10.2 GeV; LHCb eps^2 ~ 1e-6 at 10.6-30 GeV; CMS scouting comparable at 11.5-45 GeV) therefore trim the high-eps corner of BOTH boxes identically, and both regions retain viable points orders of magnitude below every limit. A peak above 5.5 GeV in the recorded data would have tagged R1 uniquely, but the data contain no peak anywhere: one shared outcome, no split. Data recorded and published; the answer is NO SPLIT, and it is structural, not marginal: the regions overlap over the entire (MZp, eps) plane the searches have reached, so the common null assigns no differential outcome, and the combined coverage (0.02-10.2, 10.6-30, 11.5-45 GeV) leaves no unexamined seam in R1's exclusive window that could hide an already-recorded discovery. Dominant systematic in the searches (continuum dimuon background modelling and hadronic-resonance vetoes) is irrelevant to the verdict.

**Dimuon dark-photon scan above 5.5 GeV (Belle II + CMS scouting + LHCb Run 3)** (literature projection on R0 + R1). Predicted value per region: R0 - the probability of a peak above 5.5 GeV is identically zero (its Z' window closes at 5.36 GeV); any R0 discovery lies at 1-5.4 GeV. R1 - a peak anywhere in 1-35.6 GeV; the exclusive window 5.5-35.6 GeV is roughly half its log-mass range, visible when eps >~ 3e-4 (eps^2 ~ 1e-7), the top ~1.5 of its ~4.3 decades of eps. Because elastic DD here is pure Higgs portal, eps is uncorrelated with MZp - the discoverable corner of R1 is its large-eps slice at any mass, not preferentially the heavy points. The split is one-sided, stated plainly: 'peak > 5.5 GeV' excludes R0 outright; 'no peak' only favors R0, since R1 points with MZp < 5.5 GeV or eps <~ 3e-4 also give a null, and R1's eps tail (to 5e-6) plus the disjoint dark quartic alpha2 remain unreachable behind that null (see lit_search_note). Today-experiments and their best published sensitivity in the observable: BaBar, eps ~ 1e-3 (eps^2 ~ 1e-6) up to 10.2 GeV; CMS scouting and LHCb, eps^2 ~ 1e-6 over 10.6-45 GeV. Required: eps^2 ~ 1e-7 across 5.5-36 GeV - representative improvement factor ~10 in eps^2. Scaling assumed: background-limited bump hunts, eps^2 limit ~ 1/sqrt(L): Belle II 0.4 -> 50 ab^-1 gives ~x11 over BaBar below 10.2 GeV; CMS ~100 fb^-1 -> 3000 fb^-1 (HL-LHC) gives ~x5.5 at 11.5-45 GeV; LHCb Run 3's software trigger adds coverage at 10.6-36 GeV. All are approved programs of experiments running today - no new facility - so 'possible' at factor ~10 is honest; LHCb Upgrade II's inclusive scan (eps^2 ~ 1e-8) is the deeper eventual extension of the same node. Dominant systematic: the smoothly falling QED/Drell-Yan and heavy-flavour dimuon continuum under a narrow peak, plus quarkonium vetoes near 9.4-10.4 GeV.
```json
{
  "model": "CsSg_U1p[+]_DM.Z2+3+4+5",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_no_yes_yes",
      "lit_search_note": "Existing data searched: BaBar gamma-A' (0.02-10.2 GeV, eps >~ 1e-3), LHCb prompt dimuon (best 10.6-30 GeV, eps^2 ~ 1e-6), CMS scouting (11.5-45 GeV) - together covering both regions' entire Z' windows; nulls trim the high-eps corners of BOTH boxes identically since both span eps ~ 5e-6 to 0.1 with alpha1, gU1p, MDM overlapping (no split, recorded as Split 1). EW-precision kinetic-mixing caps (eps <~ few e-2): identical trimming. Planck energy injection / Fermi dwarfs: overlapping secluded-cascade sigma-v ranges (and the pooled Z2+3+4+5 build's present-day rate is not relic-pinned pointwise). Recoil-spectrum mediator tomography and Xe/Ar target ratios: dead - the Z' elastic amplitude vanishes (off-diagonal current, GeV-scale inelastic splitting closed), both regions are identical isoscalar Higgs-portal scatterers at alpha1 = 1e-3. The one disjoint axis, the dark quartic alpha2 (lambda_rrrr sum; R0 3.4-10 vs R1 0.003-2.5), has exactly one physical imprint - DM self-scattering at sigma/m ~ 1e-9 to 1e-5 cm^2/g depending on normalization - which sits 5-8 orders below the ~1e-2 to 1 cm^2/g astrophysical floor, with R1's alpha3 = 6.1 corner additionally blurring the oracle cut. No existing or conceivable measurement reaches that axis; the tree therefore splits on the R1-exclusive Z' mass window instead.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Existing dark-photon searches (BaBar, LHCb, CMS scouting)",
          "observable": "narrow dilepton resonance, 1-45 GeV, eps^2 >~ 1e-6 ?",
          "what_this_is": "Three completed collider searches - BaBar (electron-positron collisions, resonances from 0.02 to 10.2 GeV), LHCb (proton collisions, dimuon bumps up to 70 GeV) and CMS's high-rate 'scouting' trigger stream (dimuon bumps from 11.5 to 45 GeV) - together scanned the entire mass range where this model's Z' boson could sit, looking for the narrow lepton-pair peak a kinetically mixed gauge boson would produce. All three found nothing. Because the two regions predict the same range of mixing strengths, that recorded null constrains both in exactly the same way, and this node is the honest record that no data already on disk tells them apart.",
          "refs": [
            "arXiv:1406.2980",
            "arXiv:1910.06926",
            "arXiv:1912.04776"
          ],
          "reasoning": "Elastic direct detection in this model is pure Higgs portal (the U(1)' current of a complex scalar is off-diagonal between its real components, and the ~GeV inelastic splitting is closed), and annihilation is secluded, so no catalog observable depends on eps: both regions carry the full eps range, ~5e-6 to 0.1, with the same distribution. Predicted dilepton signal: R0 - a possible peak at 1-5.36 GeV with rate ~ eps^2; R1 - a possible peak anywhere in 1-35.6 GeV with the same eps distribution. The published nulls (BaBar eps >~ 1e-3 below 10.2 GeV; LHCb eps^2 ~ 1e-6 at 10.6-30 GeV; CMS scouting comparable at 11.5-45 GeV) therefore trim the high-eps corner of BOTH boxes identically, and both regions retain viable points orders of magnitude below every limit. A peak above 5.5 GeV in the recorded data would have tagged R1 uniquely, but the data contain no peak anywhere: one shared outcome, no split.",
          "feasibility": "Data recorded and published; the answer is NO SPLIT, and it is structural, not marginal: the regions overlap over the entire (MZp, eps) plane the searches have reached, so the common null assigns no differential outcome, and the combined coverage (0.02-10.2, 10.6-30, 11.5-45 GeV) leaves no unexamined seam in R1's exclusive window that could hide an already-recorded discovery. Dominant systematic in the searches (continuum dimuon background modelling and hadronic-resonance vetoes) is irrelevant to the verdict.",
          "outcomes": [
            {
              "label": "no split",
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
          "name": "Dimuon dark-photon scan above 5.5 GeV (Belle II + CMS scouting + LHCb Run 3)",
          "observable": "narrow l+l- resonance with m(ll) in 5.5-36 GeV at eps^2 >~ 1e-7 ?",
          "what_this_is": "Belle II (an electron-positron collider now running in Japan), the CMS scouting stream and LHCb (both at the Large Hadron Collider, now in Run 3) are all continuing to scan the lepton-pair mass spectrum for a narrow peak. A bump hunt measures one thing superbly: the mass of a new resonance. That mass is the single sharp visible-sector difference between the two regions - one region's Z' can never be heavier than about 5.4 GeV, the other's reaches 36 GeV - so a peak found anywhere above 5.5 GeV settles the question in a single measurement, using experiments that are already taking data.",
          "refs": [
            "arXiv:1406.2980",
            "arXiv:1912.04776",
            "arXiv:1808.10567"
          ],
          "reasoning": "Predicted value per region: R0 - the probability of a peak above 5.5 GeV is identically zero (its Z' window closes at 5.36 GeV); any R0 discovery lies at 1-5.4 GeV. R1 - a peak anywhere in 1-35.6 GeV; the exclusive window 5.5-35.6 GeV is roughly half its log-mass range, visible when eps >~ 3e-4 (eps^2 ~ 1e-7), the top ~1.5 of its ~4.3 decades of eps. Because elastic DD here is pure Higgs portal, eps is uncorrelated with MZp - the discoverable corner of R1 is its large-eps slice at any mass, not preferentially the heavy points. The split is one-sided, stated plainly: 'peak > 5.5 GeV' excludes R0 outright; 'no peak' only favors R0, since R1 points with MZp < 5.5 GeV or eps <~ 3e-4 also give a null, and R1's eps tail (to 5e-6) plus the disjoint dark quartic alpha2 remain unreachable behind that null (see lit_search_note).",
          "feasibility": "Today-experiments and their best published sensitivity in the observable: BaBar, eps ~ 1e-3 (eps^2 ~ 1e-6) up to 10.2 GeV; CMS scouting and LHCb, eps^2 ~ 1e-6 over 10.6-45 GeV. Required: eps^2 ~ 1e-7 across 5.5-36 GeV - representative improvement factor ~10 in eps^2. Scaling assumed: background-limited bump hunts, eps^2 limit ~ 1/sqrt(L): Belle II 0.4 -> 50 ab^-1 gives ~x11 over BaBar below 10.2 GeV; CMS ~100 fb^-1 -> 3000 fb^-1 (HL-LHC) gives ~x5.5 at 11.5-45 GeV; LHCb Run 3's software trigger adds coverage at 10.6-36 GeV. All are approved programs of experiments running today - no new facility - so 'possible' at factor ~10 is honest; LHCb Upgrade II's inclusive scan (eps^2 ~ 1e-8) is the deeper eventual extension of the same node. Dominant systematic: the smoothly falling QED/Drell-Yan and heavy-flavour dimuon continuum under a narrow peak, plus quarkonium vetoes near 9.4-10.4 GeV.",
          "feasibility_rating": "possible",
          "improvement_factor": 10,
          "outcomes": [
            {
              "label": "peak > 5.5 GeV",
              "regions": [
                "R1"
              ]
            },
            {
              "label": "no such peak",
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
