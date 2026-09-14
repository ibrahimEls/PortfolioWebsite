## Reasoning — leaf `root_yes_no_yes_yes_no_no_no_yes_no` (33 pts, R0 + R1)

**BaBar + LHCb dark-photon dimuon searches** (literature split). R0 predicts a Z' at 1-10.2 GeV, R1 at 17.2-22.7 GeV - disjoint, so a detected peak decides instantly. But all production scales as eps^2 and both regions extend down to eps = 1e-6. BaBar (0.02-10.2 GeV) excludes eps >~ (0.3-1)e-3, touching only R0's extreme top edge (eps <= 1.41e-3) and kinematically blind to R1 (sqrt(s) = 10.58 GeV < MZp). LHCb's prompt search covers both windows but only at eps^2 >~ 2e-6-1e-5 (patchwise, with J/psi and Upsilon veto windows blinding slices of R0's range), above R0's cap (eps^2 <= 2e-6) and far above R1's (eps^2 <= 7.4e-7). Predicted outcome in BOTH regions: null in all existing data - the scan's own collider cut already enforced this. The far-detector escape is closed too: at the eps = 1e-6 floor the Z' proper decay length is <= ~2 cm, prompt on all detector scales. Existing data does NOT split: viable points in both regions lie below every published dark-photon limit by construction, and the surviving eps range spans up to three decades below current reach in each region. Dominant systematic (continuum shape under a narrow bump, plus the quarkonium veto windows) is moot given the guaranteed null; the honest record is that no measurement existing today discriminates these regions, foreclosing the cleanest on-paper discriminator (M_Z') and forcing an eps-independent probe.

**XLZD recoil-spectrum dark-matter mass fit** (literature projection on R0 + R1). Xenon recoil e-folding energy E0 ~ 2 mu^2 v0^2 / m_N: for R0's log-median mass ~22 GeV, E0 ~ 3 keV and the spectrum is confined below ~15 keV; for R1 (61.5-63.9 GeV, the Higgs funnel at m_h/2), E0 ~ 15 keV and the spectrum extends past 40 keV. Separating 20 vs 62 GeV needs ~10 signal events; placing the 50 GeV boundary needs ~50-100. A signal at 1-10x the XLZD limit yields ~5-50 events in ~200-400 t yr, so the split works over most of the range and is marginal at 1x the limit. Predicted values: R0 fits M_DM ~ 8-60 GeV with the log-measure bulk near 20 GeV, well under the cut; R1 fits ~62 GeV with a lower bound above ~45 GeV, and a fitted mass consistent with m_h/2 = 62.6 GeV together with the already-measured BR(h->inv) = 0.3-1% independently corroborates the funnel interpretation with a single portal coupling - a consistency R0 cannot mimic at low mass. One-sided direction stated: an R0 point in its 50-61 GeV tail is spectrally indistinguishable from R1 (the DM-nucleus reduced mass saturates toward m_N ~ 122 GeV above ~50 GeV) and would land in the 'heavy' outcome; for that corner only a lucky dark-photon mass tag (1-10 vs 17-23 GeV dimuon peak) could still decide, and at eps ~ 1e-6 nothing can. Alternatives kept off the tree: LZ's own full-exposure spectral fit is earlier and cheaper but holds too few events to place the boundary (see feasibility); the Fermi dwarf cascade endpoint and the h->inv Z'-strahlung closure were tried and fail - the former needs a guaranteed present-day annihilation rate that this merged Lagrangian does not pin, the latter yields only O(10) events at the HL-LHC and would need FCC-hh-scale Higgs statistics. Today-experiment: LZ, 4.2 tonne-years published (arXiv:2410.17036), which at these cross-sections (1-10x the XLZD limit, sigma_SI ~ 1e-48-1e-47 cm^2) would contain only ~1-3 signal events - no useful mass posterior; the full LZ run reaches O(1-10) events, enough for a ~2 sigma light-vs-heavy hint at the top of the margin range but not the 50 GeV boundary. Required: ~30x more signal events for the spectral discrimination, scaling linearly with exposure (signal-statistics-limited; nuclear-recoil background near zero), delivered by XLZD's ~hundreds of tonne-years (arXiv:2410.17137). Dominant systematics: the assumed halo velocity distribution (v0, v_esc), which widens the mass posterior but cannot move a 20 GeV spectrum to 62 GeV, and the hard spectral-shape saturation above ~50 GeV, which sets the ceiling of what any recoil measurement can decide. Rated next generation because XLZD is designed but not yet built; the dataset this fit runs on is the one this branch's path presupposes, so no extra experimental cost beyond the facility itself. No 'possible'-rated novel alternative was found (three were tried), so no OR-alternative is attached.
```json
{
  "model": "CsSg_U1p[+]_DM.Z2+3+4+5",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_no_no_no_yes_no",
      "lit_search_note": "Existing data checked and confirmed non-splitting: BaBar visible dark photon (covers R0's 1-10.2 GeV window only, ceiling-grazing at eps >~ (0.3-1)e-3, kinematically blind to R1); LHCb prompt dimuon (both windows, eps^2 >~ 2e-6-1e-5, above both regions' viable caps); displaced/far-detector searches (dead: ctau <= ~2 cm at the eps = 1e-6 floor); Planck energy injection (trims only R0's m <~ 10-15 GeV corner - partial region, not a partition); AMS-02 positrons/antiprotons (sensitivity varies across R0's mass span, solar-modulation dominated); Fermi dwarf stacking (rate not guaranteed - present-day sigmav is unpinned in the pooled Lagrangian, and where it is thermal the rates coincide within J-factor systematics); Z-pole EWPO and muon g-2 (eps^2-suppressed far below sensitivity); cluster self-interaction (the largest parameter gap, alpha6 <= 0.003 vs 0.28-10, maps to sigma/m ~ 1e-10 cm^2/g against a ~1 cm^2/g floor - the canonical impossible axis, not needed since the mass axis resolves the leaf).",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "BaBar + LHCb dark-photon dimuon searches",
          "observable": "prompt m(mumu) peak, eps^2 >~ 2e-6, 0.2-70 GeV ?",
          "what_this_is": "BaBar collided electrons and positrons and looked for a photon recoiling against a narrow lepton-pair resonance; LHCb hunts a narrow muon-pair mass peak in proton-proton collisions. Both are the standard searches for a 'dark photon' - a light gauge boson that talks to ordinary matter only through a tiny mixing with the photon. They matter here because the two regions predict dark photons in non-overlapping mass windows (1-10 GeV vs 17-23 GeV), so an observed peak at a measured mass would tell them apart instantly - if the mixing were large enough to produce one.",
          "refs": [
            "arXiv:1406.2980",
            "arXiv:1910.06926"
          ],
          "reasoning": "R0 predicts a Z' at 1-10.2 GeV, R1 at 17.2-22.7 GeV - disjoint, so a detected peak decides instantly. But all production scales as eps^2 and both regions extend down to eps = 1e-6. BaBar (0.02-10.2 GeV) excludes eps >~ (0.3-1)e-3, touching only R0's extreme top edge (eps <= 1.41e-3) and kinematically blind to R1 (sqrt(s) = 10.58 GeV < MZp). LHCb's prompt search covers both windows but only at eps^2 >~ 2e-6-1e-5 (patchwise, with J/psi and Upsilon veto windows blinding slices of R0's range), above R0's cap (eps^2 <= 2e-6) and far above R1's (eps^2 <= 7.4e-7). Predicted outcome in BOTH regions: null in all existing data - the scan's own collider cut already enforced this. The far-detector escape is closed too: at the eps = 1e-6 floor the Z' proper decay length is <= ~2 cm, prompt on all detector scales.",
          "feasibility": "Existing data does NOT split: viable points in both regions lie below every published dark-photon limit by construction, and the surviving eps range spans up to three decades below current reach in each region. Dominant systematic (continuum shape under a narrow bump, plus the quarkonium veto windows) is moot given the guaranteed null; the honest record is that no measurement existing today discriminates these regions, foreclosing the cleanest on-paper discriminator (M_Z') and forcing an eps-independent probe.",
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
          "name": "XLZD recoil-spectrum dark-matter mass fit",
          "observable": "recoil-spectrum best-fit M_DM < 50 GeV ?",
          "what_this_is": "XLZD is the planned next-generation liquid-xenon dark-matter detector (about 60 tonnes, the successor to LZ and XENONnT). This branch of the tree already assumes it records a dark-matter scattering signal of tens to a hundred nuclear-recoil events. Instead of merely counting them, one fits the shape of their energy spectrum: a light dark-matter particle can only give the heavy xenon nucleus a gentle kick (recoils of a few keV), while a ~60 GeV particle produces a visibly harder spectrum reaching tens of keV. The fitted particle mass is exactly what differs between the two regions - typically ~20 GeV in one, a narrow band at half the Higgs mass in the other - so the discovery dataset itself resolves the degeneracy.",
          "refs": [
            "arXiv:2410.17036",
            "arXiv:2410.17137"
          ],
          "reasoning": "Xenon recoil e-folding energy E0 ~ 2 mu^2 v0^2 / m_N: for R0's log-median mass ~22 GeV, E0 ~ 3 keV and the spectrum is confined below ~15 keV; for R1 (61.5-63.9 GeV, the Higgs funnel at m_h/2), E0 ~ 15 keV and the spectrum extends past 40 keV. Separating 20 vs 62 GeV needs ~10 signal events; placing the 50 GeV boundary needs ~50-100. A signal at 1-10x the XLZD limit yields ~5-50 events in ~200-400 t yr, so the split works over most of the range and is marginal at 1x the limit. Predicted values: R0 fits M_DM ~ 8-60 GeV with the log-measure bulk near 20 GeV, well under the cut; R1 fits ~62 GeV with a lower bound above ~45 GeV, and a fitted mass consistent with m_h/2 = 62.6 GeV together with the already-measured BR(h->inv) = 0.3-1% independently corroborates the funnel interpretation with a single portal coupling - a consistency R0 cannot mimic at low mass. One-sided direction stated: an R0 point in its 50-61 GeV tail is spectrally indistinguishable from R1 (the DM-nucleus reduced mass saturates toward m_N ~ 122 GeV above ~50 GeV) and would land in the 'heavy' outcome; for that corner only a lucky dark-photon mass tag (1-10 vs 17-23 GeV dimuon peak) could still decide, and at eps ~ 1e-6 nothing can. Alternatives kept off the tree: LZ's own full-exposure spectral fit is earlier and cheaper but holds too few events to place the boundary (see feasibility); the Fermi dwarf cascade endpoint and the h->inv Z'-strahlung closure were tried and fail - the former needs a guaranteed present-day annihilation rate that this merged Lagrangian does not pin, the latter yields only O(10) events at the HL-LHC and would need FCC-hh-scale Higgs statistics.",
          "feasibility": "Today-experiment: LZ, 4.2 tonne-years published (arXiv:2410.17036), which at these cross-sections (1-10x the XLZD limit, sigma_SI ~ 1e-48-1e-47 cm^2) would contain only ~1-3 signal events - no useful mass posterior; the full LZ run reaches O(1-10) events, enough for a ~2 sigma light-vs-heavy hint at the top of the margin range but not the 50 GeV boundary. Required: ~30x more signal events for the spectral discrimination, scaling linearly with exposure (signal-statistics-limited; nuclear-recoil background near zero), delivered by XLZD's ~hundreds of tonne-years (arXiv:2410.17137). Dominant systematics: the assumed halo velocity distribution (v0, v_esc), which widens the mass posterior but cannot move a 20 GeV spectrum to 62 GeV, and the hard spectral-shape saturation above ~50 GeV, which sets the ceiling of what any recoil measurement can decide. Rated next generation because XLZD is designed but not yet built; the dataset this fit runs on is the one this branch's path presupposes, so no extra experimental cost beyond the facility itself. No 'possible'-rated novel alternative was found (three were tried), so no OR-alternative is attached.",
          "feasibility_rating": "next generation",
          "improvement_factor": 30,
          "outcomes": [
            {
              "label": "light (< 50 GeV)",
              "regions": [
                "R0"
              ]
            },
            {
              "label": "heavy (~62 GeV)",
              "regions": [
                "R1"
              ]
            }
          ]
        }
      ]
    }
  ]
}
```
