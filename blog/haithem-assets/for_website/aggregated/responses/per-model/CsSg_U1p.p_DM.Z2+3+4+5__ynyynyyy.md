## Reasoning — leaf `root_yes_no_yes_yes_no_yes_yes_yes` (27 pts, R0 + R1)

**BaBar/LHCb dark-photon dimuon resonance search** (literature split). The dark U(1)' gauge boson has MZp = 1-3.4 GeV while the dark matter is ~6 GeV, so Z' -> DM DM is kinematically closed and the Z' decays only to Standard Model fermions through kinetic mixing, giving a narrow dimuon resonance. Normalising to BaBar's reach (sigma x BR ~ 1 fb at epsilon ~ 1e-3 for m = 1-3 GeV) and scaling as epsilon^2: R0 has epsilon in [1e-6, 9.5e-4], predicting sigma x BR ~ 1e-6 to 0.9 fb; R1 has epsilon in [2.2e-6, 4.4e-4], predicting ~5e-6 to 0.19 fb. R1's entire predicted range is nested inside R0's, and both regions extend down to the 1e-6 mixing floor, so no contour in the (mass, rate) plane assigns the two regions to different sides. The dark gauge coupling gU1p is pinned to 0.045 in both regions to three digits, so even the Z' width is common. Marginal note: R0's upper epsilon edge grazes the published limit while R1's does not, but this trims points, not regions. The data exist and are published, so this costs nothing to evaluate -- and the answer is that it does NOT separate the regions, cleanly or otherwise, because R1's kinetic-mixing range is a strict subset of R0's. Dominant systematic: the dimuon continuum shape and the sensitivity gaps punched by the rho/omega/phi and J/psi resonances, which sit precisely inside the 1-3.4 GeV window both regions occupy.

**LHCb Run 3-4 inclusive dark-photon scan above 1.7 GeV** (literature projection on R0 + R1). R0's Z' mass range ends at 1.671 GeV - a hard kinematic edge of the region - so R0 predicts identically zero resonance above 1.7 GeV at any sensitivity, ever. R1's range extends to 3.37 GeV with eps in [2.2e-6, 4.4e-4]; at eps ~ 1e-4 and m ~ 2.5 GeV the Run 3-4 scan sees an O(100)-event prompt dimuon bump in the open slices between the charmonium vetoes. One-sided in two ways, stated plainly: (i) an R1 point with MZp < 1.7 GeV lands in 'not seen', so discovery above 1.7 GeV proves R1 while a null only favors R0; (ii) R1 points with eps <~ 1e-5 give ctau ~ 100 um - 2 mm, too prompt for any beam-dump or far-detector coverage (ctau <= 2 cm everywhere in this scan) yet below the bump-hunt reach - the classic dark-photon gap, unreachable down to R1's eps floor of 2.2e-6 by any proposed facility. The genuinely disjoint parameter axis (the dark quartic alpha5, i.e. the physical sum lambda_riii) is unmeasurable at any conceivable sensitivity (self-scattering 1e-11-3e-8 cm^2/g vs a ~0.1 cm^2/g astrophysical floor, with no channel tagging), so this mass window is the only handle the model offers. Today-experiment: LHCb Run-2 prompt A'->mumu (arXiv:1910.06926), open-slice limits eps^2 ~ 1e-9-1e-8 at 1.7-3.4 GeV, with veto gaps at the phi and J/psi. Required: eps^2 ~ 1e-9-1e-10 across the window plus coverage of the veto gaps -> factor ~10 in the signal cross section (proportional to eps^2). Scaling assumed: background-limited bump hunt, eps^2_min ~ 1/sqrt(L), with the Run 3-4 gain from ~10x luminosity plus the removed hardware trigger, per the Ilten et al. inclusive-search projection (arXiv:1603.08926) - an established part of the funded LHCb Upgrade-I program, hence 'possible'. Dominant systematic: smooth Drell-Yan/misID dimuon continuum shape under a narrow bump near the charmonium band. Guaranteed coverage of R1's full eps range would instead need ~6e4 in eps^2 and exists on no roadmap - the null branch stays one-sided evidence. Belle II at 50 ab^-1 was checked as an alternative and is ~10x weaker than even today's LHCb limits here.
```json
{
  "model": "CsSg_U1p[+]_DM.Z2+3+4+5",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_no_yes_yes_yes",
      "lit_search_note": "Existing data checked, all no-split: BaBar visible gamma-A' (eps >~ 1e-3, 0.02-10.2 GeV) and LHCb Run-2 prompt A'->mumu (eps^2 ~ 1e-9-1e-8 in slices between the phi/J/psi vetoes) trim the top decade of BOTH regions' eps ranges equally (viability never applied low-mass dark-photon bounds), and R1's eps range is strictly nested inside R0's, so no contour splits; displaced/beam-dump coverage is excluded by ctau <~ 2 cm at the eps floor; Planck CMB injection, Fermi dwarfs, Voyager e+, Super-K solar capture are identical (relic-pinned gU1p ~ 0.046, shared MDM ~ 6 GeV, same secluded SS*->Z'Z'); precision Higgs fits and DD spectra identical (shared alpha1); Xe/Ar ratio blind (Z'-mediated elastic amplitude absent - the Z' vertex is off-diagonal and inelastic with Delta ~ GeV, closed); EWPT/g-2 need eps ~ 1e-2. The genuinely disjoint axis is the dark quartic alpha5 (R0 <= 0.063, R1 >= 0.096; physically the sum lambda_riii = alpha5+alpha10+alpha15 over the merged byte-identical builds), whose only imprint is a composition-changing self-scattering channel at 1e-11-3e-8 cm^2/g against a ~0.1 cm^2/g astrophysical systematics floor with no channel tagging - physically irreducible, so the tree leans on R1's exclusive Z' mass window instead.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "BaBar/LHCb dark-photon dimuon resonance search",
          "observable": "sigma(e+e- -> gamma A', A'->mu mu) > 1 fb for m = 1-3.4 GeV ?",
          "what_this_is": "A dark photon is a hypothetical new force carrier that mixes very weakly with the ordinary photon, so it can be produced in electron-positron collisions and then decay into a pair of muons. BaBar (an experiment at the SLAC B-factory) and LHCb (a detector at CERN's Large Hadron Collider) have each combed their already-recorded data for a narrow bump in the muon-pair mass spectrum. Both parameter regions here predict exactly such a particle, with a mass between 1 and 3.4 GeV, and it is the only visible particle the dark sector has -- so this is the first place any experimentalist would look.",
          "refs": [
            "arXiv:1406.2980",
            "arXiv:1910.06926"
          ],
          "reasoning": "The dark U(1)' gauge boson has MZp = 1-3.4 GeV while the dark matter is ~6 GeV, so Z' -> DM DM is kinematically closed and the Z' decays only to Standard Model fermions through kinetic mixing, giving a narrow dimuon resonance. Normalising to BaBar's reach (sigma x BR ~ 1 fb at epsilon ~ 1e-3 for m = 1-3 GeV) and scaling as epsilon^2: R0 has epsilon in [1e-6, 9.5e-4], predicting sigma x BR ~ 1e-6 to 0.9 fb; R1 has epsilon in [2.2e-6, 4.4e-4], predicting ~5e-6 to 0.19 fb. R1's entire predicted range is nested inside R0's, and both regions extend down to the 1e-6 mixing floor, so no contour in the (mass, rate) plane assigns the two regions to different sides. The dark gauge coupling gU1p is pinned to 0.045 in both regions to three digits, so even the Z' width is common. Marginal note: R0's upper epsilon edge grazes the published limit while R1's does not, but this trims points, not regions.",
          "feasibility": "The data exist and are published, so this costs nothing to evaluate -- and the answer is that it does NOT separate the regions, cleanly or otherwise, because R1's kinetic-mixing range is a strict subset of R0's. Dominant systematic: the dimuon continuum shape and the sensitivity gaps punched by the rho/omega/phi and J/psi resonances, which sit precisely inside the 1-3.4 GeV window both regions occupy.",
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
          "name": "LHCb Run 3-4 inclusive dark-photon scan above 1.7 GeV",
          "observable": "A'->mumu resonance with m(mumu) = 1.7-3.4 GeV at eps^2 >= 1e-9 ?",
          "what_this_is": "The upgraded LHCb experiment, already installed and taking data, records every muon pair it produces with no hardware trigger and scans the whole dimuon invariant-mass spectrum for a narrow bump. The two parameter regions here predict the same physics in every channel except one: only region R1 allows the dark gauge boson to be heavier than 1.7 GeV. So finding the muon-pair bump above that mass - a plain resonance-mass measurement, needing no model input - would single out R1 on the spot.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1603.08926"
          ],
          "reasoning": "R0's Z' mass range ends at 1.671 GeV - a hard kinematic edge of the region - so R0 predicts identically zero resonance above 1.7 GeV at any sensitivity, ever. R1's range extends to 3.37 GeV with eps in [2.2e-6, 4.4e-4]; at eps ~ 1e-4 and m ~ 2.5 GeV the Run 3-4 scan sees an O(100)-event prompt dimuon bump in the open slices between the charmonium vetoes. One-sided in two ways, stated plainly: (i) an R1 point with MZp < 1.7 GeV lands in 'not seen', so discovery above 1.7 GeV proves R1 while a null only favors R0; (ii) R1 points with eps <~ 1e-5 give ctau ~ 100 um - 2 mm, too prompt for any beam-dump or far-detector coverage (ctau <= 2 cm everywhere in this scan) yet below the bump-hunt reach - the classic dark-photon gap, unreachable down to R1's eps floor of 2.2e-6 by any proposed facility. The genuinely disjoint parameter axis (the dark quartic alpha5, i.e. the physical sum lambda_riii) is unmeasurable at any conceivable sensitivity (self-scattering 1e-11-3e-8 cm^2/g vs a ~0.1 cm^2/g astrophysical floor, with no channel tagging), so this mass window is the only handle the model offers.",
          "feasibility": "Today-experiment: LHCb Run-2 prompt A'->mumu (arXiv:1910.06926), open-slice limits eps^2 ~ 1e-9-1e-8 at 1.7-3.4 GeV, with veto gaps at the phi and J/psi. Required: eps^2 ~ 1e-9-1e-10 across the window plus coverage of the veto gaps -> factor ~10 in the signal cross section (proportional to eps^2). Scaling assumed: background-limited bump hunt, eps^2_min ~ 1/sqrt(L), with the Run 3-4 gain from ~10x luminosity plus the removed hardware trigger, per the Ilten et al. inclusive-search projection (arXiv:1603.08926) - an established part of the funded LHCb Upgrade-I program, hence 'possible'. Dominant systematic: smooth Drell-Yan/misID dimuon continuum shape under a narrow bump near the charmonium band. Guaranteed coverage of R1's full eps range would instead need ~6e4 in eps^2 and exists on no roadmap - the null branch stays one-sided evidence. Belle II at 50 ab^-1 was checked as an alternative and is ~10x weaker than even today's LHCb limits here.",
          "feasibility_rating": "possible",
          "improvement_factor": 10,
          "outcomes": [
            {
              "label": "seen above 1.7 GeV",
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
