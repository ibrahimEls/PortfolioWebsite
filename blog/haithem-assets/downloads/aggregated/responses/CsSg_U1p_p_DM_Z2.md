<!-- CsSg_U1p.p_DM.Z2__yyyy.md -->

## Reasoning — leaf `root_yes_yes_yes_yes` (13 pts, R0 + R1)

**Existing prompt-dimuon dark-photon searches (LHCb, CMS scouting, BaBar)** (literature split). The Z' is fully visible in both regions: MZp <= 300 GeV < 2*MDM ~ 760 GeV closes dark decays, so it decays 100% to SM fermions via kinetic mixing, with Drell-Yan-like production proportional to eps^2 (at eps^2 ~ 2.6e-3 and MZp ~ 50 GeV, sigma x BR(mumu) is of order 10 pb -- far above recorded limits). R0 predicts a guaranteed null: eps <= 5.1e-4 (eps^2 <= 2.6e-7) over MZp = 39-300 GeV puts its rate a factor ~4-100 below every published limit. R1's eps >~ 1e-3 slice predicts signals 1-1000x above the recorded LHCb/CMS/BaBar limits and is therefore already excluded by the nulls in hand (a genuine trim -- the scan's viability set did not carry these low-mass prompt limits, and R1's eps >~ 0.02, MZp <~ 75 GeV corner is flatly excluded by CMS 1912.04776); but the surviving slice, eps <~ 3e-4, predicts a null identical to R0's, and R1's floor (eps = 4.4e-6) is as invisible as anything in R0. Existing data trims R1 substantially yet cannot classify: after the trim R1's mixing range lies inside R0's. Honest status: No Split. The data exist and the result is known: null across 0.2-200 GeV. It does NOT separate the regions -- the surviving (MZp, eps) supports overlap (39-121 GeV; eps ~ 4e-6 to 5e-4), so no rate cut puts all of R0 on one side and all of R1 on the other; the limitation is parametric, not instrumental. Dominant systematic (irrelevant to the verdict): the smooth Drell-Yan/quarkonium continuum parametrisation under a narrow peak.

**LHCb Upgrade II prompt A' -> mumu scan below 38 GeV** (literature projection on R0 + R1). This is a kinematic-window partition: R1 spans MZp = 5.4-121 GeV while R0 has zero support below 38.9 GeV, so any narrow dimuon bump at m < 38 GeV is unambiguously R1. A factor ~10 improvement in eps^2 sensitivity uncovers R1's characteristic support (eps >= 3e-4 across the window; the Z' decays promptly, ctau <= 2 cm even at the eps floor, so a prompt search has full acceptance). R0 predicts no bump below 38 GeV under any circumstances; its own marginal corner (eps ~ 5e-4, MZp < 70 GeV) could only ever produce a bump ABOVE 39 GeV, which falls on the 'no' side of the cut, and conversely a bump in R0's exclusive 121-300 GeV window (reachable by HL-LHC scouting to 200 GeV, though marginal at R0's eps^2 <= 2.6e-7) would tag R0. One-sided, stated explicitly: R1's eps tail reaches 4.4e-6 (eps^2 ~ 2e-11, permanently invisible in Drell-Yan), so a null result demotes but does not exclude R1 -- the 'no bump' branch is assigned to R0 as the honest best classification, with the residue resting on the dark quartic alpha3 alone, whose axis is physically unreachable (see lit_search_note). Distinct from the catalog's Z'-dilepton entry, which is a high-mass HL-LHC Drell-Yan recast that does not cover this 5-38 GeV prompt window. Alternatives considered on this terminal: a CTA or solar annihilation-rate route fails because the present-day rate is relic-pinned identically in both regions, and the self-interaction and Sgr A* spike-glow routes are impossible-rated. Today-experiment: LHCb Run 2 prompt A'->mumu search (5.5 fb^-1), eps^2 ~ 1e-6 across the 10-70 GeV window, i.e. sigma x BR sensitivity of order 10 fb. Required: eps^2 ~ 1e-7 (sigma x BR ~ 1 fb) to cover R1's bulk. Improvement factor ~10 in eps^2, the observable's own reporting unit: background-limited sqrt(L) scaling with 300 fb^-1 gives x7.4, with the removal of the hardware trigger and improved mass resolution supplying the remainder. Upgrade II is an approved extension of an existing experiment's own program -- no new facility. Dominant systematic: modelling the smooth dimuon continuum shape under a narrow resonance hypothesis.
```json
{
  "model": "CsSg_U1p[+]_DM.Z2",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_yes_yes",
      "lit_search_note": "Existing data checked: existing dimuon dark-photon data (LHCb 1910.06926, CMS scouting 1912.04776, BaBar 1406.2980) trims R1's eps >~ 1e-3 slice but the survivors of both regions predict identical nulls (no split; the root record). Also checked and non-partitioning: LEP/e+e- kinetic-mixing fits (eps < 0.03, Hook-Izaguirre-Wacker 1006.0973 -- both regions a factor >= 60 below), muon g-2 (touches only R1's eps ~ 0.05, MZp ~ 5 GeV corner, smaller than the SM theory spread), beam dumps and far detectors (ctau <= 2 cm, no acceptance), Xe-vs-Ar isospin ratio, recoil shape, modulation and directionality (elastic scattering is pure isoscalar Higgs portal in both regions; Z'-mediated scattering is inelastic with a ~GeV splitting, closed), gamma-ray and solar-nu spectral shapes (MZp overlap 39-121 GeV), Planck CMB injection and existing dwarf/GC/antiproton annihilation limits (present-day sigma*v is relic-pinned thermal in BOTH regions of this Z2 unit, so identical predictions), BBN from late s_i decays (lifetime spans the same 1e-9-700 s range in both regions), and h->inv (identically zero, MDM >> m_h/2). If the Upgrade II dimuon scan nulls, the residual R1 contamination of the R0 branch rests on the only disjoint axis, the dark quartic alpha3 (0.0013-0.0104 vs 0.054-1.29), which has no SM legs: its conversion channel is threshold-closed (2*delta ~ 2-5 GeV) everywhere except within ~60 Schwarzschild radii of Sgr A* (flux floor ~1e6 below any instrument, spike normalization uncertain by >= 4 orders), its elastic halo imprint is loop-suppressed (tree-level self-scattering is alpha2- and Z'-driven, both overlapping, and ~6+ orders below cluster bounds anyway), so that residue is physically irreducible.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Existing prompt-dimuon dark-photon searches (LHCb, CMS scouting, BaBar)",
          "observable": "narrow prompt mumu resonance with sigma x BR >= ~10 fb, m(mumu) in 5-200 GeV ?",
          "what_this_is": "Experiments at the LHC (LHCb, CMS) and at an electron-positron collider (BaBar) have already scanned the muon-pair mass spectrum from about 0.2 to 200 GeV for a narrow bump -- the signature of a new neutral boson that talks to ordinary matter only through a small quantum-mechanical mixing with the photon. Both regions of this model contain exactly such a boson, and it can decay nowhere except to ordinary particles (it is too light to decay into the dark matter itself), so this recorded data is the first thing an experimentalist would consult.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1912.04776",
            "arXiv:1406.2980"
          ],
          "reasoning": "The Z' is fully visible in both regions: MZp <= 300 GeV < 2*MDM ~ 760 GeV closes dark decays, so it decays 100% to SM fermions via kinetic mixing, with Drell-Yan-like production proportional to eps^2 (at eps^2 ~ 2.6e-3 and MZp ~ 50 GeV, sigma x BR(mumu) is of order 10 pb -- far above recorded limits). R0 predicts a guaranteed null: eps <= 5.1e-4 (eps^2 <= 2.6e-7) over MZp = 39-300 GeV puts its rate a factor ~4-100 below every published limit. R1's eps >~ 1e-3 slice predicts signals 1-1000x above the recorded LHCb/CMS/BaBar limits and is therefore already excluded by the nulls in hand (a genuine trim -- the scan's viability set did not carry these low-mass prompt limits, and R1's eps >~ 0.02, MZp <~ 75 GeV corner is flatly excluded by CMS 1912.04776); but the surviving slice, eps <~ 3e-4, predicts a null identical to R0's, and R1's floor (eps = 4.4e-6) is as invisible as anything in R0. Existing data trims R1 substantially yet cannot classify: after the trim R1's mixing range lies inside R0's. Honest status: No Split.",
          "feasibility": "The data exist and the result is known: null across 0.2-200 GeV. It does NOT separate the regions -- the surviving (MZp, eps) supports overlap (39-121 GeV; eps ~ 4e-6 to 5e-4), so no rate cut puts all of R0 on one side and all of R1 on the other; the limitation is parametric, not instrumental. Dominant systematic (irrelevant to the verdict): the smooth Drell-Yan/quarkonium continuum parametrisation under a narrow peak.",
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
          "name": "LHCb Upgrade II prompt A' -> mumu scan below 38 GeV",
          "observable": "narrow prompt mumu resonance, 5 < m(mumu) < 38 GeV, sigma x BR >= ~1 fb (eps^2 ~ 1e-7) ?",
          "what_this_is": "LHCb is a detector at the Large Hadron Collider specialised in precisely reconstructing low-mass particle decays; its Upgrade II will collect roughly fifty times more data with a fully software-based trigger. It hunts the dark photon as a narrow peak in the muon-pair mass spectrum. The two regions occupy different mediator-mass windows: only region R1 contains a Z' lighter than 39 GeV, so finding a peak below 38 GeV identifies R1 outright, mass window by mass window rather than by rate.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1808.08865",
            "arXiv:1912.04776"
          ],
          "reasoning": "This is a kinematic-window partition: R1 spans MZp = 5.4-121 GeV while R0 has zero support below 38.9 GeV, so any narrow dimuon bump at m < 38 GeV is unambiguously R1. A factor ~10 improvement in eps^2 sensitivity uncovers R1's characteristic support (eps >= 3e-4 across the window; the Z' decays promptly, ctau <= 2 cm even at the eps floor, so a prompt search has full acceptance). R0 predicts no bump below 38 GeV under any circumstances; its own marginal corner (eps ~ 5e-4, MZp < 70 GeV) could only ever produce a bump ABOVE 39 GeV, which falls on the 'no' side of the cut, and conversely a bump in R0's exclusive 121-300 GeV window (reachable by HL-LHC scouting to 200 GeV, though marginal at R0's eps^2 <= 2.6e-7) would tag R0. One-sided, stated explicitly: R1's eps tail reaches 4.4e-6 (eps^2 ~ 2e-11, permanently invisible in Drell-Yan), so a null result demotes but does not exclude R1 -- the 'no bump' branch is assigned to R0 as the honest best classification, with the residue resting on the dark quartic alpha3 alone, whose axis is physically unreachable (see lit_search_note). Distinct from the catalog's Z'-dilepton entry, which is a high-mass HL-LHC Drell-Yan recast that does not cover this 5-38 GeV prompt window. Alternatives considered on this terminal: a CTA or solar annihilation-rate route fails because the present-day rate is relic-pinned identically in both regions, and the self-interaction and Sgr A* spike-glow routes are impossible-rated.",
          "feasibility": "Today-experiment: LHCb Run 2 prompt A'->mumu search (5.5 fb^-1), eps^2 ~ 1e-6 across the 10-70 GeV window, i.e. sigma x BR sensitivity of order 10 fb. Required: eps^2 ~ 1e-7 (sigma x BR ~ 1 fb) to cover R1's bulk. Improvement factor ~10 in eps^2, the observable's own reporting unit: background-limited sqrt(L) scaling with 300 fb^-1 gives x7.4, with the removal of the hardware trigger and improved mass resolution supplying the remainder. Upgrade II is an approved extension of an existing experiment's own program -- no new facility. Dominant systematic: modelling the smooth dimuon continuum shape under a narrow resonance hypothesis.",
          "feasibility_rating": "possible",
          "improvement_factor": 10,
          "outcomes": [
            {
              "label": "bump below 38 GeV",
              "regions": [
                "R1"
              ]
            },
            {
              "label": "no bump below 38 GeV",
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
