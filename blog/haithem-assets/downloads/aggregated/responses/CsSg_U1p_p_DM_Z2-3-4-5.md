<!-- CsSg_U1p.p_DM.Z2+3+4+5__nnyn.md -->

## Reasoning — leaf `root_no_no_yes_no` (1,139 pts, R0 + R1)

**LEP Z-pole invisible width** (literature split on R0 + R1). Kinetic mixing induces a Z-Z' mass-mixing angle theta = eps tan(theta_W) M_Z'^2 / |M_Z^2 - M_Z'^2 - i M_Z' Gamma_Z'|, so the Z inherits a coupling theta*g_U1p to the dark current. R1: eps = 0.1, M_Z' = 60.3 GeV, and including the 52 GeV Z' width in the denominator (|4679 - 3134i| = 5631 GeV^2) gives theta = 0.035, hence an effective Z-DM coupling of 0.035 x 11.41 = 0.40. With 2 M_DM = 6.99 GeV far below M_Z, Gamma(Z->ss*) = (theta g)^2 M_Z beta^3 / 48pi = 0.16 x 91.19 x 0.99 / 150.8 = 96 MeV, i.e. an excess of Delta N_nu = +0.57 neutrino species. R0 at its cluster bulk (eps ~ 1e-3, M_Z' ~ 8 GeV, g_U1p ~ 0.5): theta = 1.3e-6, effective coupling 6e-7, Gamma < 1e-6 MeV - ten orders of magnitude below the experimental error. Predicted values: R1 ~ 1e2 MeV, R0 ~ 1e-6 MeV. The same physics is corroborated by the oblique S,T fit, which limits eps < 0.02-0.03 for a 60 GeV dark photon, so R1 is over-mixed by a factor 3-5 in eps by that independent route as well. Yes - the existing LEP-I data already separates them, and in fact rules R1 out outright. The measured invisible width is 499.0 +- 1.5 MeV against a Standard Model prediction of 501.4 MeV (N_nu = 2.9963 +- 0.0074 after the updated small-angle Bhabha normalisation), so any excess above ~4 MeV is excluded at 2 sigma; R1's 96 MeV is a ~65 sigma effect and survives even a factor-30 haircut for the O(1) ambiguity in the eps convention and for the fact that g_U1p = 11.41 implies alpha_D = 10.4, formally non-perturbative. Crucially this observable is a width, not a lineshape, so R1's 52 GeV mediator width cannot hide it - unlike the bump hunt above. Dominant systematic: the LEP luminosity normalisation through the theoretical small-angle Bhabha cross-section, ~0.05% on N_nu; on the theory side, the definition of eps (factor ~2 in theta) and the Breit-Wigner treatment of a mediator whose width is comparable to its mass (17% on theta, already included). Caveat for the record: the partition sends all of R0 to 'not seen', which is true of where its 1127 points actually live, but the extreme upper corner of R0's bounding box (eps = 0.1, M_Z' = 62.9 GeV, g_U1p = 8.68) would give theta*g = 0.43 and ~110 MeV and be excluded as well - a statement about the box, not the cluster.
```json
{
  "model": "CsSg_U1p[+]_DM.Z2+3+4+5",
  "leaves": [
    {
      "leaf_id": "root_no_no_yes_no",
      "lit_search_note": "Searched and rejected: LHCb/CMS prompt dimuon dark-photon bump hunts (R1's Z' has Gamma/M ~ 0.86 and BR(mumu) ~ 2e-5 -- ~0.1 fb smeared over ~50 GeV, no bump; R0's bulk sits below the window at eps ~ 1e-3); BaBar/Belle II gamma+invisible (sqrt(s) = 10.6 GeV < MZp ~ 60 GeV for R1); beam dumps and far-detector displaced searches (c*tau <= cm-scale everywhere in this scan, and beam-dump eps reach cuts within R0, not between regions); low-threshold direct detection (Z' vertex is off-diagonal with ~GeV splitting -- elastic channel is the Higgs portal, identical in both regions); Planck CMB energy injection (fermionic channels p-wave; the secluded s-wave channel spans both sides of the bound within R0 -- no partition); cluster self-interaction bounds (sigma/m ~ 1e-7 to 1e-5 cm^2/g vs a ~1 cm^2/g floor). The LEP Z-pole dataset is the unique existing discriminator, and it splits decisively.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "R0+R1",
          "name": "LEP Z-pole invisible width",
          "observable": "Gamma(Z->invisible) excess > 5 MeV ?",
          "what_this_is": "At the LEP collider, electrons and positrons were collided at exactly the energy needed to make Z bosons at rest, and the total and visible decay rates of the Z were measured to a precision of a few parts in a thousand. The difference between them is the rate at which the Z decays to particles that leave no trace in the detector, which in the Standard Model is just the three neutrino species - so any new light invisible particle that the Z can reach shows up as an excess. Here the dark photon mixes with the Z, which lets the Z decay directly into a pair of 3.5 GeV dark matter particles; the strength of that decay is set by the product of the mixing and the dark gauge coupling, which is the one combination in which the two regions differ enormously.",
          "refs": [
            "arXiv:hep-ex/0509008",
            "arXiv:1912.02067",
            "arXiv:1412.0018"
          ],
          "reasoning": "Kinetic mixing induces a Z-Z' mass-mixing angle theta = eps tan(theta_W) M_Z'^2 / |M_Z^2 - M_Z'^2 - i M_Z' Gamma_Z'|, so the Z inherits a coupling theta*g_U1p to the dark current. R1: eps = 0.1, M_Z' = 60.3 GeV, and including the 52 GeV Z' width in the denominator (|4679 - 3134i| = 5631 GeV^2) gives theta = 0.035, hence an effective Z-DM coupling of 0.035 x 11.41 = 0.40. With 2 M_DM = 6.99 GeV far below M_Z, Gamma(Z->ss*) = (theta g)^2 M_Z beta^3 / 48pi = 0.16 x 91.19 x 0.99 / 150.8 = 96 MeV, i.e. an excess of Delta N_nu = +0.57 neutrino species. R0 at its cluster bulk (eps ~ 1e-3, M_Z' ~ 8 GeV, g_U1p ~ 0.5): theta = 1.3e-6, effective coupling 6e-7, Gamma < 1e-6 MeV - ten orders of magnitude below the experimental error. Predicted values: R1 ~ 1e2 MeV, R0 ~ 1e-6 MeV. The same physics is corroborated by the oblique S,T fit, which limits eps < 0.02-0.03 for a 60 GeV dark photon, so R1 is over-mixed by a factor 3-5 in eps by that independent route as well.",
          "feasibility": "Yes - the existing LEP-I data already separates them, and in fact rules R1 out outright. The measured invisible width is 499.0 +- 1.5 MeV against a Standard Model prediction of 501.4 MeV (N_nu = 2.9963 +- 0.0074 after the updated small-angle Bhabha normalisation), so any excess above ~4 MeV is excluded at 2 sigma; R1's 96 MeV is a ~65 sigma effect and survives even a factor-30 haircut for the O(1) ambiguity in the eps convention and for the fact that g_U1p = 11.41 implies alpha_D = 10.4, formally non-perturbative. Crucially this observable is a width, not a lineshape, so R1's 52 GeV mediator width cannot hide it - unlike the bump hunt above. Dominant systematic: the LEP luminosity normalisation through the theoretical small-angle Bhabha cross-section, ~0.05% on N_nu; on the theory side, the definition of eps (factor ~2 in theta) and the Breit-Wigner treatment of a mediator whose width is comparable to its mass (17% on theta, already included). Caveat for the record: the partition sends all of R0 to 'not seen', which is true of where its 1127 points actually live, but the extreme upper corner of R0's bounding box (eps = 0.1, M_Z' = 62.9 GeV, g_U1p = 8.68) would give theta*g = 0.43 and ~110 MeV and be excluded as well - a statement about the box, not the cluster.",
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

---

<!-- CsSg_U1p.p_DM.Z2+3+4+5__ynynyy.md -->

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

---

<!-- CsSg_U1p.p_DM.Z2+3+4+5__ynyynnnyn.md -->

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

---

<!-- CsSg_U1p.p_DM.Z2+3+4+5__ynyynyyy.md -->

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

---

<!-- CsSg_U1p.p_DM.Z2+3+4+5__ynyyyn.md -->

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
