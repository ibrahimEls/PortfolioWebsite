## Reasoning — leaf `root_yes_no_yes_yes_yes_no` (77 pts, R0 + R1 + R2)

**LHC Run-2 dimuon and dilepton resonance scans** (literature split). R1 (MZp 20.8-23.9 GeV, eps 9.4e-5-1.5e-2): the published LHCb/CMS-scouting nulls at eps^2 ~ 2e-6 exclude its eps >~ 1.4e-3 top but leave the core (eps ~ 1e-4-1e-3) alive - a within-region cut, not a region split. R2 (0.85-10 TeV, eps 1.9e-4-0.1): quark coupling eps*e gives sigma.BR <~ 0.01 fb at 0.85 TeV, below the ~0.1 fb ATLAS limit everywhere except the eps >~ 3e-2, M <~ 3 TeV corner (also grazed by the model-independent EW bound eps <~ 0.03); masses above 6 TeV are not covered at all. R0 (1-80 GeV, eps <= 5.4e-5): production scales as eps^2 <= 3e-9, a factor 20-1000 below reach in coupling - untouched. No region is uniformly seen or uniformly excluded, so the honest verdict is no split. Underlying this: the Z' gauge current is purely off-diagonal between the two real dark-scalar mass eigenstates, so direct detection is identical isoscalar Higgs-portal exchange in all three regions - no DD observable of any kind can ever split this leaf, forcing the Z'- and annihilation-sector probes below. Data already recorded and published; the nulls trim R1's and R2's high-mixing corners but separate no region as a whole - status: no split. Dominant systematics: Drell-Yan/heavy-flavour continuum shape under a narrow bump at low mass (LHCb resolution ~0.5%), PDF uncertainty on the falling Drell-Yan tail at high mass; both irrelevant at the signal levels the surviving cores predict.

**Fermi-LAT dwarf-stack cascade-spectrum reanalysis** (literature projection on R0 + R1 + R2). R0 and R1 have MZp < MDM, so the s-wave secluded channel SS*->Z'Z' is open, <sigma v> ~ g'^4/(16 pi MDM^2), and the Z' decays promptly on galactic scales everywhere in the scan (ctau <= 2 cm), giving 4-body cascade photons. R1 (g' pinned at 0.1597): predicts 1.7e-26 cm^3/s - marginally above the 1.5e-26 cut, within the factor ~2 J-factor systematic, disclosed. R0 (g' = 0.003-0.16): flux ~ g'^4 spans ~1e-33 up to 1.7e-26; the pooled Lagrangian's present-day rate is not relic-pinned, so only the g' >~ 0.1 corner is actually visible. R2 (MZp >= 850 GeV): Z'Z' closed at every point, the s-channel Z'* rate is p-wave (v^2 ~ 1e-6 today), and the s-wave Higgs-portal remainder with alpha1 ~ 2.1e-3 gives ~2e-28 cm^3/s - ~75x below the cut, a robust null. This split is one-sided and states its direction: only R0/R1 can produce a cascade signal at any parameter point, so 'seen' is exclusive to them, but a null excludes neither R0's low-g' bulk nor even R1 within systematics; R2 alone is a guaranteed null. Today-experiment: Fermi-LAT 6-yr combined dwarf stack, ~2.5e-26 cm^3/s at 90 GeV with a bb-bar template (no cascade template published). Required: ~1.5e-26 cm^3/s with a two-step cascade template (a la Elor-Rodd-Slatyer) on the already-recorded 15+ yr dataset with the enlarged dwarf sample - factor ~2 in the <sigma v> observable, assuming background-limited sqrt(exposure) scaling plus the template gain. No new data, no new hardware: reanalysis. Dominant systematic: dwarf J-factors (factor ~2), which is what makes R1's marginal 'seen' and R0's corner-only visibility honest caveats.

**HL-LHC dimuon scouting + LHCb Upgrade II, 21-24 GeV** (literature projection on R0 + R1). R1: MZp = 20.8-23.9 GeV with surviving eps in [9.4e-5, ~1.4e-3]; predicted sigma.BR(mumu) up to a few fb at the top of that range. The combined reach - HL-LHC scouting at 3 ab^-1 (eps^2 ~ 4e-7) and the LHCb Upgrade II inclusive search (eps^2 ~ 2e-7, i.e. sigma.BR ~ 0.3 fb at 22 GeV) - sees R1 for eps >~ 4.5e-4, roughly the upper 40% of its surviving log-range. R0: MZp anywhere in 1-80 GeV but eps^2 <= 2.9e-9, about two orders of magnitude below reach in rate at any mass - a robust null. One-sided, direction stated: a peak at 21-24 GeV identifies R1 uniquely (R0 cannot produce one at any point), but a null does not exclude R1's eps < 4.5e-4 tail, which remains degenerate with R0 in this channel; no proposed facility reaches eps^2 ~ 9e-9 at 22 GeV (Tera-Z radiative return is background-limited to eps ~ 4e-4; a resonant scan or fixed target is hopeless), so that tail is closed by nothing on any planned timescale. Today-experiment: CMS dimuon scouting (~1e2 fb^-1) and LHCb prompt A'->mumu (5.5 fb^-1), limits eps^2 ~ 2e-6, i.e. sigma.BR ~ few fb at 22 GeV. Required: sigma.BR ~ 0.3 fb (eps^2 ~ 2e-7) - factor ~10 in the cross-section observable, from background-limited 1/sqrt(L) scaling of the limit at 3 ab^-1 (CMS) and 300 fb^-1 with the fully software trigger (LHCb, per the Ilten et al. inclusive-search projection). Both are approved items of the existing experiments' programs: possible. Dominant systematic: smooth Drell-Yan/heavy-flavour dimuon continuum modelling under a narrow bump near 22 GeV, well above the Upsilon region.
```json
{
  "model": "CsSg_U1p[+]_DM.Z2+3+4+5",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_yes_no",
      "lit_search_note": "Existing data checked: LHCb prompt+displaced A'->mumu and CMS dimuon scouting (trim only R1's eps >~ 1e-3 top; recorded in split 1); ATLAS/CMS 139/fb high-mass dilepton and model-independent EW kinetic-mixing bounds (bite only R2's eps >~ 3e-2, M <~ 3 TeV corner; folded into split 1); BaBar/Belle II (mass reach <= 10.2 GeV, eps floor too high for R0); beam dumps and far detectors (ctau <= 2 cm scan-wide, no acceptance); LEP EWPT (R2 shifts eps^2 mZ^2/MZp^2 <= 1e-4, below precision); muon g-2 (Delta a_mu <~ 1e-14); Planck energy injection (all >= 10x below p_ann); cluster self-interaction (sigma/m ~ 1e-10 cm^2/g vs ~1 cm^2/g bound); Xe-vs-Ar DD ratio (identical isoscalar Higgs-portal amplitude everywhere - the Z' current is off-diagonal between the real mass eigenstates, so no elastic Z'-mediated scattering exists in any region); published Fermi-LAT 6-yr dwarf per-channel limits (2.5e-26 at 90 GeV grazes but does not exclude R1's 1.7e-26 cascade, and no cascade template was published - which is exactly the reanalysis gap split 2 exploits).",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "LHC Run-2 dimuon and dilepton resonance scans",
          "observable": "mumu/ee resonance peak, 10-200 GeV or 0.25-6 TeV ?",
          "what_this_is": "The LHC experiments have already scanned their recorded muon-pair and electron-pair mass spectra for a narrow bump from a new neutral boson: LHCb's prompt dark-photon search and CMS's dimuon 'scouting' stream cover 10-200 GeV, and the ATLAS/CMS high-mass searches cover 0.25-6 TeV. All three regions of this leaf contain exactly such a boson, differing only in its mass and its tiny mixing with the photon, so the recorded data is the mandatory first check - and it comes back null for every region.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1912.04776",
            "arXiv:1903.06248"
          ],
          "reasoning": "R1 (MZp 20.8-23.9 GeV, eps 9.4e-5-1.5e-2): the published LHCb/CMS-scouting nulls at eps^2 ~ 2e-6 exclude its eps >~ 1.4e-3 top but leave the core (eps ~ 1e-4-1e-3) alive - a within-region cut, not a region split. R2 (0.85-10 TeV, eps 1.9e-4-0.1): quark coupling eps*e gives sigma.BR <~ 0.01 fb at 0.85 TeV, below the ~0.1 fb ATLAS limit everywhere except the eps >~ 3e-2, M <~ 3 TeV corner (also grazed by the model-independent EW bound eps <~ 0.03); masses above 6 TeV are not covered at all. R0 (1-80 GeV, eps <= 5.4e-5): production scales as eps^2 <= 3e-9, a factor 20-1000 below reach in coupling - untouched. No region is uniformly seen or uniformly excluded, so the honest verdict is no split. Underlying this: the Z' gauge current is purely off-diagonal between the two real dark-scalar mass eigenstates, so direct detection is identical isoscalar Higgs-portal exchange in all three regions - no DD observable of any kind can ever split this leaf, forcing the Z'- and annihilation-sector probes below.",
          "feasibility": "Data already recorded and published; the nulls trim R1's and R2's high-mixing corners but separate no region as a whole - status: no split. Dominant systematics: Drell-Yan/heavy-flavour continuum shape under a narrow bump at low mass (LHCb resolution ~0.5%), PDF uncertainty on the falling Drell-Yan tail at high mass; both irrelevant at the signal levels the surviving cores predict.",
          "outcomes": [
            {
              "label": "no split",
              "regions": [
                "R0",
                "R1",
                "R2"
              ]
            }
          ]
        },
        {
          "kind": "lit_projection",
          "attach_to": "R0+R1+R2",
          "name": "Fermi-LAT dwarf-stack cascade-spectrum reanalysis",
          "observable": "<sigma v>(DM DM -> vector pair -> 4 fermions) >= 1.5e-26 cm^3/s at m ~ 93 GeV, cascade spectral template ?",
          "what_this_is": "The Fermi Large Area Telescope has surveyed the dark-matter-dominated dwarf satellite galaxies of the Milky Way for annihilation gamma rays, and over fifteen years of data are already on disk against the six years in the published limits. In two of these regions the dark matter annihilates into a pair of light dark force-carriers that each decay to ordinary particles, producing a distinctive softened 'cascade' photon spectrum that the published single-channel fits were never tuned to; in the third region that channel is kinematically shut and the annihilation surviving today is far too feeble to see. Refitting the existing data with the cascade template is therefore a pure reanalysis that asks whether the dark-photon annihilation door is open.",
          "refs": [
            "arXiv:1503.02641",
            "arXiv:1503.01773"
          ],
          "reasoning": "R0 and R1 have MZp < MDM, so the s-wave secluded channel SS*->Z'Z' is open, <sigma v> ~ g'^4/(16 pi MDM^2), and the Z' decays promptly on galactic scales everywhere in the scan (ctau <= 2 cm), giving 4-body cascade photons. R1 (g' pinned at 0.1597): predicts 1.7e-26 cm^3/s - marginally above the 1.5e-26 cut, within the factor ~2 J-factor systematic, disclosed. R0 (g' = 0.003-0.16): flux ~ g'^4 spans ~1e-33 up to 1.7e-26; the pooled Lagrangian's present-day rate is not relic-pinned, so only the g' >~ 0.1 corner is actually visible. R2 (MZp >= 850 GeV): Z'Z' closed at every point, the s-channel Z'* rate is p-wave (v^2 ~ 1e-6 today), and the s-wave Higgs-portal remainder with alpha1 ~ 2.1e-3 gives ~2e-28 cm^3/s - ~75x below the cut, a robust null. This split is one-sided and states its direction: only R0/R1 can produce a cascade signal at any parameter point, so 'seen' is exclusive to them, but a null excludes neither R0's low-g' bulk nor even R1 within systematics; R2 alone is a guaranteed null.",
          "feasibility": "Today-experiment: Fermi-LAT 6-yr combined dwarf stack, ~2.5e-26 cm^3/s at 90 GeV with a bb-bar template (no cascade template published). Required: ~1.5e-26 cm^3/s with a two-step cascade template (a la Elor-Rodd-Slatyer) on the already-recorded 15+ yr dataset with the enlarged dwarf sample - factor ~2 in the <sigma v> observable, assuming background-limited sqrt(exposure) scaling plus the template gain. No new data, no new hardware: reanalysis. Dominant systematic: dwarf J-factors (factor ~2), which is what makes R1's marginal 'seen' and R0's corner-only visibility honest caveats.",
          "feasibility_rating": "reanalysis",
          "improvement_factor": 2,
          "outcomes": [
            {
              "label": "cascade seen",
              "regions": [
                "R0",
                "R1"
              ]
            },
            {
              "label": "not seen",
              "regions": [
                "R2"
              ]
            }
          ]
        },
        {
          "kind": "lit_projection",
          "attach_to": "R0+R1",
          "name": "HL-LHC dimuon scouting + LHCb Upgrade II, 21-24 GeV",
          "observable": "sigma.BR(pp -> Z' -> mumu) >= 0.3 fb at m(mumu) = 21-24 GeV ?",
          "what_this_is": "CMS's 'scouting' stream and LHCb's software trigger record enormous samples of low-mass muon pairs that ordinary triggers discard, and the approved High-Luminosity LHC program plus LHCb Upgrade II will multiply those datasets by factors of thirty to sixty. This is the most sensitive planned probe of a light new boson whose only link to ordinary matter is a small mixing with the photon. The two remaining regions differ exactly there: one predicts a 22 GeV boson with mixing large enough to produce a visible bump, the other a secluded boson two orders of magnitude fainter that no collider will ever see.",
          "refs": [
            "arXiv:1912.04776",
            "arXiv:1910.06926",
            "arXiv:1603.08926"
          ],
          "reasoning": "R1: MZp = 20.8-23.9 GeV with surviving eps in [9.4e-5, ~1.4e-3]; predicted sigma.BR(mumu) up to a few fb at the top of that range. The combined reach - HL-LHC scouting at 3 ab^-1 (eps^2 ~ 4e-7) and the LHCb Upgrade II inclusive search (eps^2 ~ 2e-7, i.e. sigma.BR ~ 0.3 fb at 22 GeV) - sees R1 for eps >~ 4.5e-4, roughly the upper 40% of its surviving log-range. R0: MZp anywhere in 1-80 GeV but eps^2 <= 2.9e-9, about two orders of magnitude below reach in rate at any mass - a robust null. One-sided, direction stated: a peak at 21-24 GeV identifies R1 uniquely (R0 cannot produce one at any point), but a null does not exclude R1's eps < 4.5e-4 tail, which remains degenerate with R0 in this channel; no proposed facility reaches eps^2 ~ 9e-9 at 22 GeV (Tera-Z radiative return is background-limited to eps ~ 4e-4; a resonant scan or fixed target is hopeless), so that tail is closed by nothing on any planned timescale.",
          "feasibility": "Today-experiment: CMS dimuon scouting (~1e2 fb^-1) and LHCb prompt A'->mumu (5.5 fb^-1), limits eps^2 ~ 2e-6, i.e. sigma.BR ~ few fb at 22 GeV. Required: sigma.BR ~ 0.3 fb (eps^2 ~ 2e-7) - factor ~10 in the cross-section observable, from background-limited 1/sqrt(L) scaling of the limit at 3 ab^-1 (CMS) and 300 fb^-1 with the fully software trigger (LHCb, per the Ilten et al. inclusive-search projection). Both are approved items of the existing experiments' programs: possible. Dominant systematic: smooth Drell-Yan/heavy-flavour dimuon continuum modelling under a narrow bump near 22 GeV, well above the Upsilon region.",
          "feasibility_rating": "possible",
          "improvement_factor": 10,
          "outcomes": [
            {
              "label": "peak seen",
              "regions": [
                "R1"
              ]
            },
            {
              "label": "no peak",
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
