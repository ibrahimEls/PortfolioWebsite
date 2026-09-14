## Reasoning — leaf `root_yes_no_no_yes_yes` (499 pts, R0 + R1)

**Existing dark-photon dilepton searches (LHCb + CMS + BaBar)** (literature split). R1 predicts a possible dimuon resonance only at 9.8-69.3 GeV with eps in [9.2e-6, 0.08]; R0 predicts one anywhere in 1-211 GeV with eps in [1e-6, 0.1]. Existing limits reach eps^2 ~ 1e-6 to 1e-5 (eps ~ 1e-3) across the LHCb 10.6-70 GeV and CMS 11.5-200 GeV windows and eps ~ 1e-3 below 10.2 GeV at BaBar, with electroweak-precision fits capping eps <~ 0.02-0.03 at all masses. This carves the same large-eps top decade off BOTH units: each spans from grossly excluded (eps ~ 0.08-0.1) down to ~1e6 below reach (eps <~ 1e-5). Because R1's (MZp, eps, gU1p) box is a strict subset of R0's and the two Lagrangians have identical visible sectors, any discovered (mass, sigma.BR) pair in the shared window lies in the overlap of both regions, and the current null is likewise consistent with both. No existing dataset separates the units; the honest outcome is one shared branch. Existing published data; it does NOT split these regions (single shared outcome). It genuinely trims the eps >~ 1e-3 slices of both units - a real reduction in surviving volume the scan's viability filter never applied - but removes neither region and cannot separate them: nested parameter boxes plus identical visible sectors mean every R1 signature is duplicated by R0. Dominant systematic in the searches themselves is the smooth Drell-Yan/heavy-flavour dimuon continuum shape (and, below 10 GeV, the forest of SM resonances forcing vetoed windows); irrelevant to the no-split verdict, which is structural, not experimental.

**Fermi-LAT 25-yr + LSST dwarf-spheroidal stack** (literature projection on R0 + R1). R1 (Z2 island): MZp in [9.8, 69.3] GeV lies below MDM in [113, 313] GeV at every point and gU1p in [0.185, 0.31] (alpha_D 2.7e-3 to 7.6e-3) is exactly the thermal band, so the s-wave secluded channel SS*->Z'Z' sets the relic (the eps-mediated channel is p-wave, the Higgs portal ~alpha1^2 is negligible) and the present-day rate is pinned at <sigma v> ~ (1-3)e-26 cm^3/s, with no Sommerfeld correction (alpha_D*MDM ~ 0.3-2.4 GeV < MZp): a MANDATORY thermal-strength cascade gamma signal at every R1 point. R0 (merged Z2+3+4+5 unit): its distinguishing large-gU1p points (up to 2.74) would be catastrophically underabundant with an open secluded channel, so they sit at MZp >~ MDM and froze out through the FORBIDDEN channel, exponentially quenched at halo velocities to <sigma v> <~ 1e-30 cm^3/s - no signal ever; the odd-quartic conversion and semi-annihilation channels likewise unpin the rate downward. ONE-SIDED, stated plainly: a null at 2e-26 sensitivity excludes R1 outright (its signal is guaranteed), which is the decisive branch; 'seen' is consistent with R1 but also with R0's small-g open-secluded mimic subpopulation, and R1's heaviest points (~313 GeV) sit at the edge of the projected reach - the split is typical-value on the seen side and flagged as such. Alternatives considered and dropped: Belle II 50 ab^-1 gamma+mumu in the 1-9.8 GeV window R1 cannot populate (same 'possible' rating, but its decisive branch fires only for the ~fifth of R0 with MZp < 9.8 GeV and eps >~ 3e-4 and its null branch separates nothing) and LHCb Upgrade II at 10.7-70 GeV (no decisive branch in either direction - nested boxes). Not a catalog refinement: the catalog carries the Fermi15yr WW-template curve, which did not split this leaf; this node uses the Z'Z'->4f cascade template and exposure beyond 15 years. Today-experiment: the Fermi-LAT 6-yr Pass-8 dwarf stack limits a soft cascade-like spectrum to ~5e-26 - 2e-25 cm^3/s over 100-300 GeV; required: 2e-26 cm^3/s, a factor ~5 in <sigma v>. Scaling assumed: dwarf stacking is essentially signal-limited, so sensitivity grows ~linearly in exposure x stacked J-factor; 14->25 years of data plus the LSST-era roughly-doubling of the known dwarf J-factor stock supplies the factor, consistent with the published Fermi sensitivity projections (arXiv:1605.02016). Rated 'possible': an operating satellite accumulating exposure plus an already-funded survey's dwarf discoveries - no new facility. Dominant systematic: dwarf J-factor uncertainties (factor ~2), small against the >= 4-order predicted rate contrast between R1 and R0's typical forbidden-channel points.
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_no_yes_yes",
      "lit_search_note": "Existing data checked: LHCb prompt A'->mumu (0.214-70 GeV), CMS dimuon scouting + conventional (11.5-200 GeV, Z-window gap), BaBar gamma A' (0.02-10.2 GeV) - all reach only eps >~ 1e-3, trimming the top epsilon decade of both nested boxes identically; EWPT cap eps <~ 0.02-0.03 trims both identically; beam dumps and far detectors have no acceptance (c*tau(Z') <~ 2 cm at the eps = 1e-6 floor); Planck p_ann for R1's thermal s-wave signal is ~5e-29 cm^3/s/GeV, an order below the bound, with no Sommerfeld enhancement (alpha_D*MDM ~ 0.3-2.4 GeV < MZp); Higgs-coupling shifts are per-mille and identical; cluster self-interaction predictions sit 11+ orders below sensitivity. Nothing existing splits: R1's box is strictly nested in R0's on every axis and the visible sectors are identical. Residue after the split above: R0's own small-g open-secluded subpopulation lands on the 'seen' side and at identical (MDM, MZp, eps, g, alpha1) differs from R1 only by the SM-blind odd dark quartics (conversion sr sr -> sr si at sigma/m ~ 1e-19 to 1e-11 cm^2/g vs an astrophysical floor of ~0.1 cm^2/g) - physical and irreducible, but not a multi-unit terminal of this tree.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Existing dark-photon dilepton searches (LHCb + CMS + BaBar)",
          "observable": "prompt l+l- resonance with eps^2 >= 1e-6, m = 0.02-200 GeV ?",
          "what_this_is": "Collider experiments have already scanned their recorded data for a new short-lived particle decaying to a pair of muons or electrons, which would appear as a narrow bump in the dilepton invariant-mass spectrum: LHCb and CMS at the Large Hadron Collider cover masses from about 10 to 200 GeV, and the older BaBar electron-positron collider covers 0.02 to 10 GeV. Such a bump is the classic signature of the light Z' boson that both dark-matter models in this leaf contain, coupled to ordinary matter through a small kinetic mixing with the photon. These published bump hunts are the first place to look - but they only reach mixing strengths at the top of what either region predicts, so they constrain both without telling them apart.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1912.04776",
            "arXiv:1406.2980"
          ],
          "reasoning": "R1 predicts a possible dimuon resonance only at 9.8-69.3 GeV with eps in [9.2e-6, 0.08]; R0 predicts one anywhere in 1-211 GeV with eps in [1e-6, 0.1]. Existing limits reach eps^2 ~ 1e-6 to 1e-5 (eps ~ 1e-3) across the LHCb 10.6-70 GeV and CMS 11.5-200 GeV windows and eps ~ 1e-3 below 10.2 GeV at BaBar, with electroweak-precision fits capping eps <~ 0.02-0.03 at all masses. This carves the same large-eps top decade off BOTH units: each spans from grossly excluded (eps ~ 0.08-0.1) down to ~1e6 below reach (eps <~ 1e-5). Because R1's (MZp, eps, gU1p) box is a strict subset of R0's and the two Lagrangians have identical visible sectors, any discovered (mass, sigma.BR) pair in the shared window lies in the overlap of both regions, and the current null is likewise consistent with both. No existing dataset separates the units; the honest outcome is one shared branch.",
          "feasibility": "Existing published data; it does NOT split these regions (single shared outcome). It genuinely trims the eps >~ 1e-3 slices of both units - a real reduction in surviving volume the scan's viability filter never applied - but removes neither region and cannot separate them: nested parameter boxes plus identical visible sectors mean every R1 signature is duplicated by R0. Dominant systematic in the searches themselves is the smooth Drell-Yan/heavy-flavour dimuon continuum shape (and, below 10 GeV, the forest of SM resonances forcing vetoed windows); irrelevant to the no-split verdict, which is structural, not experimental.",
          "outcomes": [
            {
              "label": "no split (no peak; eps >~ 1e-3 excluded for both)",
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
          "name": "Fermi-LAT 25-yr + LSST dwarf-spheroidal stack",
          "observable": "<sigma v>(Z'Z' cascade template, 100-315 GeV) >= 2e-26 cm^3/s ?",
          "what_this_is": "The Fermi Large Area Telescope is a gamma-ray satellite that stacks observations of dwarf spheroidal galaxies - small, dark-matter-dominated satellites of the Milky Way with almost no competing gamma-ray sources - while the Rubin/LSST survey will roughly double the number of known dwarfs to stack. If dark matter pairs there annihilate into two dark Z' bosons, each Z' decays to ordinary quarks and leptons whose showers make a broad gamma-ray glow Fermi can detect. The two regions disagree on whether this annihilation still runs today: in the small Z2 region it must proceed at full thermal strength at every point, while the typical point of the merged Z2+3+4+5 region froze out through a channel that is switched off at today's low velocities, so a deeper dwarf stack decides between them.",
          "refs": [
            "arXiv:1503.02641",
            "arXiv:1605.02016"
          ],
          "reasoning": "R1 (Z2 island): MZp in [9.8, 69.3] GeV lies below MDM in [113, 313] GeV at every point and gU1p in [0.185, 0.31] (alpha_D 2.7e-3 to 7.6e-3) is exactly the thermal band, so the s-wave secluded channel SS*->Z'Z' sets the relic (the eps-mediated channel is p-wave, the Higgs portal ~alpha1^2 is negligible) and the present-day rate is pinned at <sigma v> ~ (1-3)e-26 cm^3/s, with no Sommerfeld correction (alpha_D*MDM ~ 0.3-2.4 GeV < MZp): a MANDATORY thermal-strength cascade gamma signal at every R1 point. R0 (merged Z2+3+4+5 unit): its distinguishing large-gU1p points (up to 2.74) would be catastrophically underabundant with an open secluded channel, so they sit at MZp >~ MDM and froze out through the FORBIDDEN channel, exponentially quenched at halo velocities to <sigma v> <~ 1e-30 cm^3/s - no signal ever; the odd-quartic conversion and semi-annihilation channels likewise unpin the rate downward. ONE-SIDED, stated plainly: a null at 2e-26 sensitivity excludes R1 outright (its signal is guaranteed), which is the decisive branch; 'seen' is consistent with R1 but also with R0's small-g open-secluded mimic subpopulation, and R1's heaviest points (~313 GeV) sit at the edge of the projected reach - the split is typical-value on the seen side and flagged as such. Alternatives considered and dropped: Belle II 50 ab^-1 gamma+mumu in the 1-9.8 GeV window R1 cannot populate (same 'possible' rating, but its decisive branch fires only for the ~fifth of R0 with MZp < 9.8 GeV and eps >~ 3e-4 and its null branch separates nothing) and LHCb Upgrade II at 10.7-70 GeV (no decisive branch in either direction - nested boxes). Not a catalog refinement: the catalog carries the Fermi15yr WW-template curve, which did not split this leaf; this node uses the Z'Z'->4f cascade template and exposure beyond 15 years.",
          "feasibility": "Today-experiment: the Fermi-LAT 6-yr Pass-8 dwarf stack limits a soft cascade-like spectrum to ~5e-26 - 2e-25 cm^3/s over 100-300 GeV; required: 2e-26 cm^3/s, a factor ~5 in <sigma v>. Scaling assumed: dwarf stacking is essentially signal-limited, so sensitivity grows ~linearly in exposure x stacked J-factor; 14->25 years of data plus the LSST-era roughly-doubling of the known dwarf J-factor stock supplies the factor, consistent with the published Fermi sensitivity projections (arXiv:1605.02016). Rated 'possible': an operating satellite accumulating exposure plus an already-funded survey's dwarf discoveries - no new facility. Dominant systematic: dwarf J-factor uncertainties (factor ~2), small against the >= 4-order predicted rate contrast between R1 and R0's typical forbidden-channel points.",
          "feasibility_rating": "possible",
          "improvement_factor": 5,
          "outcomes": [
            {
              "label": "seen at thermal strength",
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
