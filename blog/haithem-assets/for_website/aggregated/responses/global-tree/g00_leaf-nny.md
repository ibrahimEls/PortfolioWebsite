## Reasoning — leaf `root_no_no_yes` (12,331 pts, R0 + R1)

**Existing dark-photon, EWPT and CMB bounds** (literature split). Both regions span epsilon in [1e-6, 0.1] and include M_Z' in [1, 8] GeV, so BaBar/LHCb visible dark-photon limits (eps <~ 1e-3 there) exclude the large-eps light-Z' corner of R0 AND of R1 alike; EWPT (eps <~ 0.03 below M_Z) does the same; Planck's injection bound removes Sommerfeld-resonant light-Z' corners of both (alpha' M_DM >~ M_Z' holds for M_Z' <~ few GeV in both regions); cluster self-interaction (sigma/m <~ 1 cm^2/g) touches only R0's extreme corner g' >~ 5 with M_Z' <~ few GeV while typical points in both regions sit near 1e-5 cm^2/g. Predicted response is identical for the surviving bulk of R0 and R1: no existing dataset responds differently to the two regions as units. Existing data does NOT split these regions: every published probe cuts symmetric corners (large eps, light Z', Sommerfeld-resonant) present in both R0 and R1, and both regions extend to eps = 1e-6 where all visible-decay and precision probes are blind. Dominant systematic is irrelevant to the verdict; the failure is structural (overlapping epsilon and M_Z' ranges), not statistical.

**CTA GC+dwarfs, secluded Z'Z' cascade template** (literature projection on R0 + R1). R1 (Z2 build): M_Z' <= 285.1 GeV < M_DM >= 317.7 GeV for every point, the portal (alpha1 <= 0.015, sigmav ~ 4e-28 cm^3/s) cannot deplete the relic, and the Z2 potential has no other channel, so g' is relic-pinned ([0.155, 0.474] is the thermal band) and secluded SS*->Z'Z' annihilation at sigmav ~ 2-3e-26 cm^3/s, s-wave today, is unavoidable: a 4-body cascade gamma continuum peaking near M_DM/20 with a cutoff near M_DM, at thermal strength, is a forced prediction of every R1 point. R0 (Z2+3+4+5 pool): the odd quartics and closed-channel points (M_Z' up to 1450 GeV) decouple g' from the relic requirement (hence its spread 0.059-12.57), so its present-day cascade rate is unpinned and typically <~ 1e-27 cm^3/s. Path consistency is what makes this work: the leaf's IceCube-Gen2 condition is the SOLAR-CAPTURE muon flux (it pins portal scattering, not the halo rate), so in-leaf R0 points are selected for scattering, not for visible annihilation -- their gamma flux really can be far below thermal -- while the CTA (WW) null is a template mismatch the soft cascade evades. One-sided, stated plainly: 'not seen' falsifies R1 outright (the clean direction), while 'seen at thermal' is guaranteed for R1 but also captures R0's secluded-thermal corner, which mimics R1 point-for-point in the gauge sector and remains degenerate there (differing only in dark quartic sums, an irreducible residue). Today-experiment: Fermi-LAT dwarf-spheroidal stacking (arXiv:1611.03184), whose soft-channel limits at 0.3-0.7 TeV are ~1-3e-25 cm^3/s. Required: ~2e-26 cm^3/s with the cascade template, i.e. a factor ~10 in sigmav. Published CTA Galactic-centre projections (arXiv:2007.16129) reach ~1e-26 cm^3/s for soft channels at these masses (background-limited, sqrt(t) scaling over the planned ~500 h GC survey), a factor ~2 below the cut; dwarfs give an independent cross-check with cleaner astrophysics. Dominant systematic: Galactic diffuse-emission modelling at the GC and J-factor uncertainties for dwarfs -- both far smaller than the two-order-of-magnitude B-field systematic of the competing radio route. Rated possible because CTAO is funded and under construction with LST-1 already taking data: this is an analysis template within its core approved program, not a facility that still has to be funded.
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_yes",
      "lit_search_note": "Existing data checked: LHCb prompt/displaced A'->mumu, BaBar visible and invisible A', CMS dimuon scouting, ATLAS/CMS high-mass dilepton, LEP/EWPO kinetic-mixing fits, beam dumps (no acceptance: c*tau <= ~2 cm at the eps = 1e-6 floor), Planck CMB energy injection (both units ~25x below the bound), cluster self-interaction (both typically ~1e-9 cm^2/g), AMS-02 antiprotons (propagation/solar-modulation limited at factor ~3), MeerKAT/ATCA dwarf radio (~1e-25 cm^3/s at 500 GeV, B-field systematics), and a secluded solar Z'-escape signal (closed: the Z' decays ~8 cm from production against R_sun ~ 7e10 cm). Every existing probe cuts symmetric corners from both units (shared eps in [1e-6, 0.1], shared light-MZp window); none partitions region-wide. Residual note: R0's secluded-thermal corner mimics R1 point-for-point in the gauge sector and lands on the 'seen' branch of the CTA split; there the Lagrangians differ only in the phase-odd dark quartic sums (lambda_rrri, lambda_riii), whose sole imprint is DM self-scattering at ~1e-13..1e-7 cm^2/g against an astrophysical floor of ~0.1-1 cm^2/g -- irreducible by the historical standard.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Existing dark-photon, EWPT and CMB bounds",
          "observable": "eps <~ 1e-3 (M_Z' 1-8 GeV); f_eff*sigmav/m < 3.5e-28 cm3/s/GeV ?",
          "what_this_is": "A sweep of measurements already published: collider searches for a light 'dark photon' (a new force carrier that mixes faintly with the ordinary photon and decays to electron or muon pairs), precision fits of the Z boson's properties, and the cosmic microwave background's limit on energy injected by dark matter annihilating in the early universe. Together these probe the mixing strength and mass of the dark force carrier and the annihilation rate at early times. They matter here because both candidate regions rely on exactly such a mixed dark force carrier, so any existing bound on it could in principle have separated them.",
          "refs": [
            "arXiv:1406.2980",
            "arXiv:1910.06926",
            "arXiv:1807.06209"
          ],
          "reasoning": "Both regions span epsilon in [1e-6, 0.1] and include M_Z' in [1, 8] GeV, so BaBar/LHCb visible dark-photon limits (eps <~ 1e-3 there) exclude the large-eps light-Z' corner of R0 AND of R1 alike; EWPT (eps <~ 0.03 below M_Z) does the same; Planck's injection bound removes Sommerfeld-resonant light-Z' corners of both (alpha' M_DM >~ M_Z' holds for M_Z' <~ few GeV in both regions); cluster self-interaction (sigma/m <~ 1 cm^2/g) touches only R0's extreme corner g' >~ 5 with M_Z' <~ few GeV while typical points in both regions sit near 1e-5 cm^2/g. Predicted response is identical for the surviving bulk of R0 and R1: no existing dataset responds differently to the two regions as units.",
          "feasibility": "Existing data does NOT split these regions: every published probe cuts symmetric corners (large eps, light Z', Sommerfeld-resonant) present in both R0 and R1, and both regions extend to eps = 1e-6 where all visible-decay and precision probes are blind. Dominant systematic is irrelevant to the verdict; the failure is structural (overlapping epsilon and M_Z' ranges), not statistical.",
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
          "name": "CTA GC+dwarfs, secluded Z'Z' cascade template",
          "observable": "sigmav(cascade, 0.3-0.7 TeV) > 2e-26 cm^3/s ?",
          "what_this_is": "The Cherenkov Telescope Array (CTA) is a ground-based gamma-ray observatory, funded and under construction, that images the faint flashes produced when high-energy gamma rays hit the atmosphere. It will search the centre of our Galaxy and its satellite dwarf galaxies for the diffuse gamma-ray glow of dark matter annihilating -- here into pairs of dark photons that decay to ordinary quarks and leptons, giving a characteristically broad, soft spectrum rather than the W-boson template already in our catalog. In one of the two theories that annihilation channel is the only way the dark matter could have reached its observed cosmic abundance, so the glow must be present at a calculable strength; in the other the abundance can be set by dark-sector-internal channels and the glow can be absent.",
          "refs": [
            "arXiv:1611.03184",
            "arXiv:2007.16129",
            "arXiv:0711.4866"
          ],
          "reasoning": "R1 (Z2 build): M_Z' <= 285.1 GeV < M_DM >= 317.7 GeV for every point, the portal (alpha1 <= 0.015, sigmav ~ 4e-28 cm^3/s) cannot deplete the relic, and the Z2 potential has no other channel, so g' is relic-pinned ([0.155, 0.474] is the thermal band) and secluded SS*->Z'Z' annihilation at sigmav ~ 2-3e-26 cm^3/s, s-wave today, is unavoidable: a 4-body cascade gamma continuum peaking near M_DM/20 with a cutoff near M_DM, at thermal strength, is a forced prediction of every R1 point. R0 (Z2+3+4+5 pool): the odd quartics and closed-channel points (M_Z' up to 1450 GeV) decouple g' from the relic requirement (hence its spread 0.059-12.57), so its present-day cascade rate is unpinned and typically <~ 1e-27 cm^3/s. Path consistency is what makes this work: the leaf's IceCube-Gen2 condition is the SOLAR-CAPTURE muon flux (it pins portal scattering, not the halo rate), so in-leaf R0 points are selected for scattering, not for visible annihilation -- their gamma flux really can be far below thermal -- while the CTA (WW) null is a template mismatch the soft cascade evades. One-sided, stated plainly: 'not seen' falsifies R1 outright (the clean direction), while 'seen at thermal' is guaranteed for R1 but also captures R0's secluded-thermal corner, which mimics R1 point-for-point in the gauge sector and remains degenerate there (differing only in dark quartic sums, an irreducible residue).",
          "feasibility": "Today-experiment: Fermi-LAT dwarf-spheroidal stacking (arXiv:1611.03184), whose soft-channel limits at 0.3-0.7 TeV are ~1-3e-25 cm^3/s. Required: ~2e-26 cm^3/s with the cascade template, i.e. a factor ~10 in sigmav. Published CTA Galactic-centre projections (arXiv:2007.16129) reach ~1e-26 cm^3/s for soft channels at these masses (background-limited, sqrt(t) scaling over the planned ~500 h GC survey), a factor ~2 below the cut; dwarfs give an independent cross-check with cleaner astrophysics. Dominant systematic: Galactic diffuse-emission modelling at the GC and J-factor uncertainties for dwarfs -- both far smaller than the two-order-of-magnitude B-field systematic of the competing radio route. Rated possible because CTAO is funded and under construction with LST-1 already taking data: this is an analysis template within its core approved program, not a facility that still has to be funded.",
          "feasibility_rating": "possible",
          "improvement_factor": 10,
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
