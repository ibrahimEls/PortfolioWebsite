## Reasoning — leaf `root_no_no_no_no` (4,170 pts, R0 + R1)

**Fermi-LAT dwarf stack, dark-photon cascade template** (literature split). R1 (Z2): MZp <= 115.4 GeV < MDM >= 133.7 GeV, so S S* -> Z'Z' is always open; with the Higgs portal off along this path (alpha1 <= 0.0046) that channel alone sets the relic density, pinning g' ~ 0.24 (MDM/200 GeV)^(1/2) - exactly R1's box [0.173, 0.314] - and locking an s-wave present-day sigma v ~ 2.2e-26 cm^3/s into Z'Z' -> 4f for every point. R0 (Z2+3+4+5): heterogeneous - its characteristic closed-channel branch (MZp up to 381 GeV > MDM, g' up to 6.4) annihilates today only p-wave at ~1e-30 cm^3/s, while its open-channel minority mimics R1's thermal rate; region-level prediction spans 0 to ~1e-25. The best existing measurement of this observable - the 6-yr Pass 8 dwarf stack recast onto a one-step cascade template - reaches only ~1e-25 cm^3/s at MDM = 130-315 GeV, a factor ~4-5 above R1's guaranteed prediction, so both regions are consistent with the observed null: Status No Split. This is a genuinely different observable from the path's CTA(WW)/Fermi(WW) catalog nodes, whose W-boson templates lose the soft 4-body cascade - which is exactly why this leaf passed them at a thermal cross-section. The data exist and are published; they do NOT split the regions: current cascade-template sensitivity ~1e-25 cm^3/s at 130-315 GeV versus R1's 2.2e-26 prediction and R0's 0-to-1e-25 band, so every outcome assignment today puts both units in 'not seen'. Dominant systematic: the J-factors of the stacked dwarfs (factor ~2 each for ultra-faint systems), which set the normalisation floor of the stack.

**Full-mission Fermi dwarf refit, secluded Z'Z' cascade template** (literature projection on R0 + R1). R1: every point predicts a present-day s-wave sigma v ~ 2-3e-26 cm^3/s into Z'Z' -> 4f (relic-pinned, no Sommerfeld enhancement since alpha'*MDM/MZp <= 1), with spectral endpoint at MDM = 134-315 GeV - a guaranteed signal at a 2e-26 sensitivity. R0: its characteristic closed-channel population (MZp > MDM, large g') predicts ~1e-30 cm^3/s (p-wave), permanently invisible; its odd-quartic conversion and semi-annihilation points are likewise decoupled from the thermal band; region-level prediction 'not seen'. One-sided, stated plainly: a NULL at 2e-26 excludes every point of R1 - R1 makes no other prediction - so 'not seen' cleanly assigns R0; a DETECTION at the thermal rate is shared with R0's open-channel relic-band minority (which contains byte-identical Z2 twin builds), so 'seen' confirms the R1-like mechanism without strictly excluding R0 - that residual mimicry is the physically irreducible dark-quartic twin, and the ~0.75*MDM semi-annihilation edge is the natural spectroscopic follow-up in the detection branch. Marginal at the top of the mass range (MDM ~ 300 GeV), where the projected reach only grazes 3e-26. Today-experiment: Fermi-LAT 6-yr Pass 8 dwarf stack (1503.02641) plus the 45-satellite update (1611.03184), recast onto the Z'Z' -> 4f cascade template: ~8e-26 cm^3/s at 130-315 GeV. Required: 2e-26. Factor ~4, in the cross-section itself. Scaling assumed: dwarf fields above ~10 GeV are quasi-background-free, so the limit improves roughly linearly with exposure times target count - supported by the published record (2-yr -> 6-yr limits improved ~x7 on x3 exposure via Pass 8 plus census growth), against which sqrt(t) objections fail; 17 yr recorded (x2.8) plus the already-discovered DES/Pan-STARRS satellites deliver the factor with NO new data or hardware, hence reanalysis. Dominant systematic: J-factors of the ultra-faint dwarfs (few member stars, factor ~2 each); if that caps the usable gain near x2, the identical 2e-26 target is delivered by a CTA Galactic-centre cascade-template search at next-generation tier, with the halo profile then the dominant systematic.
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_no",
      "lit_search_note": "Existing data searched and found non-discriminating (verified against the unit boxes): BaBar/LHCb dark-photon dileptons and LEP/EWPT kinetic-mixing fits fail structurally because R1's (MZp, epsilon) box [1,115.4]x[1e-6,0.1] is nested inside R0's [1,381.4]x[1e-6,0.1], so every exclusion carves both identically; Planck energy injection gives p_ann ~ 2e-29 cm^3/s/GeV for R1 vs the 3.2e-28 bound (factor ~16 short); AMS-02 antiprotons are non-decisive (R1 points with MZp < 2 GeV cascade leptonically, and propagation systematics span the margin); self-interaction is unitarity-capped at ~0.02 cm^2/g at cluster velocities with both regions below 1e-4; beam-dump/far-detector searches have no acceptance (c*tau <= ~cm at the eps=1e-6, MZp=1 GeV corner); the odd-quartic operator difference feeds only DM-DM self-scattering at sigma/m ~ 1e-11 cm^2/g. Cheaper novel alternatives tried and dead: solar capture (sigma_SI below XLZD), darkonium lines (needs alpha' ~ 1 with light Z', unpopulated corner), dark phase-transition gravitational waves (Stuckelberg Z' mass, no dark Higgs).",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Fermi-LAT dwarf stack, dark-photon cascade template",
          "observable": "sigma v(DM DM -> Z'Z' -> 4f) > 1e-25 cm^3/s ?",
          "what_this_is": "The Fermi Large Area Telescope is a satellite gamma-ray camera that has monitored the Milky Way's dwarf satellite galaxies - dense, dark-matter-dominated, and nearly free of ordinary gamma-ray sources - since 2008. Here its published stacked search is read against a different spectral shape from the usual one: the dark matter in both candidate theories annihilates not into W bosons but into a pair of dark photons that each decay in flight to ordinary charged particles, giving a softer, broader 'cascade' spectrum. This is the existing measurement closest to the one quantity that actually differs between the two theories, and today it falls short of both predictions, so the data in hand cannot tell them apart.",
          "refs": [
            "arXiv:0711.4866",
            "arXiv:1503.02641",
            "arXiv:1611.03184"
          ],
          "reasoning": "R1 (Z2): MZp <= 115.4 GeV < MDM >= 133.7 GeV, so S S* -> Z'Z' is always open; with the Higgs portal off along this path (alpha1 <= 0.0046) that channel alone sets the relic density, pinning g' ~ 0.24 (MDM/200 GeV)^(1/2) - exactly R1's box [0.173, 0.314] - and locking an s-wave present-day sigma v ~ 2.2e-26 cm^3/s into Z'Z' -> 4f for every point. R0 (Z2+3+4+5): heterogeneous - its characteristic closed-channel branch (MZp up to 381 GeV > MDM, g' up to 6.4) annihilates today only p-wave at ~1e-30 cm^3/s, while its open-channel minority mimics R1's thermal rate; region-level prediction spans 0 to ~1e-25. The best existing measurement of this observable - the 6-yr Pass 8 dwarf stack recast onto a one-step cascade template - reaches only ~1e-25 cm^3/s at MDM = 130-315 GeV, a factor ~4-5 above R1's guaranteed prediction, so both regions are consistent with the observed null: Status No Split. This is a genuinely different observable from the path's CTA(WW)/Fermi(WW) catalog nodes, whose W-boson templates lose the soft 4-body cascade - which is exactly why this leaf passed them at a thermal cross-section.",
          "feasibility": "The data exist and are published; they do NOT split the regions: current cascade-template sensitivity ~1e-25 cm^3/s at 130-315 GeV versus R1's 2.2e-26 prediction and R0's 0-to-1e-25 band, so every outcome assignment today puts both units in 'not seen'. Dominant systematic: the J-factors of the stacked dwarfs (factor ~2 each for ultra-faint systems), which set the normalisation floor of the stack.",
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
          "name": "Full-mission Fermi dwarf refit, secluded Z'Z' cascade template",
          "observable": "sigma v(DM DM -> Z'Z' -> 4f) > 2e-26 cm^3/s ?",
          "what_this_is": "The same stacked gamma-ray search toward dwarf satellite galaxies, but re-analysed with everything already on disk: seventeen years of recorded Fermi exposure instead of the six years in the published analysis, the dozens of satellites discovered since 2015 added to the stack, and the dark-photon cascade spectrum used as the fit template in place of the standard single-channel shapes. This pushes the reachable annihilation rate down to the value a thermally produced dark matter particle must have. That threshold is decisive here because the strict-Z2 theory is forced by its own relic-abundance bookkeeping to sit exactly at it, while the other theory's characteristic branch is four to six orders of magnitude fainter.",
          "refs": [
            "arXiv:1611.03184",
            "arXiv:1503.01773",
            "arXiv:0711.4866"
          ],
          "reasoning": "R1: every point predicts a present-day s-wave sigma v ~ 2-3e-26 cm^3/s into Z'Z' -> 4f (relic-pinned, no Sommerfeld enhancement since alpha'*MDM/MZp <= 1), with spectral endpoint at MDM = 134-315 GeV - a guaranteed signal at a 2e-26 sensitivity. R0: its characteristic closed-channel population (MZp > MDM, large g') predicts ~1e-30 cm^3/s (p-wave), permanently invisible; its odd-quartic conversion and semi-annihilation points are likewise decoupled from the thermal band; region-level prediction 'not seen'. One-sided, stated plainly: a NULL at 2e-26 excludes every point of R1 - R1 makes no other prediction - so 'not seen' cleanly assigns R0; a DETECTION at the thermal rate is shared with R0's open-channel relic-band minority (which contains byte-identical Z2 twin builds), so 'seen' confirms the R1-like mechanism without strictly excluding R0 - that residual mimicry is the physically irreducible dark-quartic twin, and the ~0.75*MDM semi-annihilation edge is the natural spectroscopic follow-up in the detection branch. Marginal at the top of the mass range (MDM ~ 300 GeV), where the projected reach only grazes 3e-26.",
          "feasibility": "Today-experiment: Fermi-LAT 6-yr Pass 8 dwarf stack (1503.02641) plus the 45-satellite update (1611.03184), recast onto the Z'Z' -> 4f cascade template: ~8e-26 cm^3/s at 130-315 GeV. Required: 2e-26. Factor ~4, in the cross-section itself. Scaling assumed: dwarf fields above ~10 GeV are quasi-background-free, so the limit improves roughly linearly with exposure times target count - supported by the published record (2-yr -> 6-yr limits improved ~x7 on x3 exposure via Pass 8 plus census growth), against which sqrt(t) objections fail; 17 yr recorded (x2.8) plus the already-discovered DES/Pan-STARRS satellites deliver the factor with NO new data or hardware, hence reanalysis. Dominant systematic: J-factors of the ultra-faint dwarfs (few member stars, factor ~2 each); if that caps the usable gain near x2, the identical 2e-26 target is delivered by a CTA Galactic-centre cascade-template search at next-generation tier, with the halo profile then the dominant systematic.",
          "feasibility_rating": "reanalysis",
          "improvement_factor": 4,
          "outcomes": [
            {
              "label": "thermal cascade seen",
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
