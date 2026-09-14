<!-- g00_leaf-nny.md -->

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

---

<!-- g01_leaf-ynnnn.md -->

## Reasoning — leaf `root_yes_no_no_no_no` (8,837 pts, R0 + R1 + R2 + R3)

**Fermi-LAT 6-yr dwarf-spheroidal stacking** (literature split). R1/R3 (secluded ss->Z'Z'->4f): sigmav ~ 1e-27 to 2.4e-26 cm^3/s (g'^4/(16 pi M^2), g'=0.086-0.31, M=100-300 GeV for R3; R1's secluded majority similar). R0/R2 (Higgs portal, alpha1~1e-3): sigmav ~ 1e-29 to 1e-30 cm^3/s. The published limits (~1e-26 at 100 GeV rising to ~5e-26 at 300 GeV, for bb) sit a factor 2-5 above the R1/R3 predictions once the softer 4-body cascade spectrum is accounted for, and exclude only scattered upper-edge points of no whole unit. Existing data does NOT split these regions: the bb/tautau templates are mismatched to the Z'Z' four-body cascade, and even the matched sensitivity would sit a factor ~2-5 above most of R1/R3. Dominant systematic: dwarf J-factor (dark-matter density profile) uncertainties, ~0.3-0.4 dex.

**Fermi-LAT 15-yr dwarf recast, dark-photon cascade template** (literature projection on R0 + R1 + R2 + R3). R3 predicts s-wave sigmav(ss->Z'Z') ~ 1e-27 to 2.4e-26 cm^3/s with the g' >~ 0.2 bulk near thermal; R1's secluded majority (MZp < MDM) is comparable. R0/R2 predict sigmav ~ 1e-29 to 1e-30 cm^3/s (alpha1^2 suppression), unobservable at any foreseeable indirect-detection sensitivity. Marginal caveats: the low-g' sub-thermal tail of R3 and the ~5% non-secluded (MZp > MDM) fraction of R1 would also read 'not seen'; the split captures the bulk of each unit, not every point. A next-generation alternative separating the same groups - the Xe-vs-Ar per-nucleon cross-section ratio (photon-like Z' exchange couples to Z^2, Higgs portal to A^2, a ~20% rate-ratio effect) at an ARGO-scale argon detector - is strictly less feasible than this reanalysis and is noted here rather than added as a split. Today-experiment: Fermi-LAT 6-yr dwarf stack, sigmav(bb) limit ~1e-26 cm^3/s at 100 GeV, ~5e-26 at 300 GeV, and weaker against 4-body cascades. Required: ~(1-2)e-26 cm^3/s in the cascade channel across 100-300 GeV. Gain: matched cascade template (~1.5x) plus 15 vs 6 years of already-recorded data (~2x, quasi-background-free signal-limited scaling) = factor ~3; no new data or hardware. Dominant systematic: dwarf J-factors.

**Dark-quartic fingerprint via DM self-scattering** (novel observable on R1 + R3). R3's parameter box is nested inside R1's in EVERY shared parameter (M_DM, M_Z', alpha1, eps, g', even quartics), and its operator set is a subset of R1's: the discriminating operators (odd quartics alpha3 si*sr^3, alpha5 si^3*sr) enter no SM-coupled vertex, generate no mass splitting (the dark scalar has no vev), and first appear in dark 2->2 self-scattering, at sigma_self/m up to ~2e-10 cm^2/g for R1 (quartics O(10)) versus ~1e-16-1e-10 for R3 - overlapping ranges, so even a perfect measurement separates them only statistically. The seemingly stronger Z'-exchange channel closes on this branch: relic viability pins the secluded-channel dark coupling to g' ~ 0.1-0.3 in both units (larger g' with a light Z' means 1e2-1e4 x thermal annihilation - underabundant and already excluded by the dwarf data below), capping sigma/m at <= ~1e-4 cm^2/g identically for R1 and R3; R1's large-g' points (up to 12.57) are confined to M_Z' > M_DM, where sigma/m <~ 1e-6 cm^2/g. The null direction is irreducible in principle by parametric containment; the yes-outcome records what a (physically unreachable) measurement WOULD favor. Closest existing technique: merging-cluster offset analyses, bounding sigma/m <~ 0.5-1 cm^2/g, with a baryonic-feedback systematic floor near 0.1 cm^2/g. Required: ~1e-11 cm^2/g - a >= 1e10 improvement in an astrophysical observable with no instrument concept; historically one order of magnitude here takes a decade. Blocked by a hard floor and by the overlap of the two predictions themselves; rated impossible - this node documents WHY the R1/R3 degeneracy cannot be broken, in either direction.

**WIMP mass from the nuclear-recoil spectrum** (literature projection on R0 + R2). R0 and R2 are both pure Higgs-portal WIMPs with lambda_hS ~ 2e-3, identical isospin structure (f_n/f_p = 1), identical spectrum shape at fixed mass, identical invisible annihilation (~1e-30-1e-29 cm^3/s), and no accessible second state (R0's complex partner is split by ~0.3 GeV, four orders above the ~100 keV inelastic window, and carries no Higgs coupling). The ONLY difference is the mass: R0 predicts 97.4 +- 0.5 GeV, R2 predicts 94.9 +- 0.2 GeV, with an empty gap at 96.0 GeV. On xenon the spectral scale E_0 = 2 mu^2 v^2/m_Xe differs by only 2.3% between the hypotheses because the reduced mass saturates near m_Xe. A measurement at 96-99 GeV selects R0; 93-96 GeV selects R2. Marginal by construction: percent-level mass reconstruction is required. Today-experiment: LZ (4.2 t-yr, limits only); published multi-target forecasts (Pato et al.) give sigma(m)/m ~ 20-50% at 100 GeV with 1e2-1e3 events. Required: <= 1.3% so the two 1-sigma bands are disjoint - improvement factor ~25 in fractional mass resolution, i.e. ~600x more events (~1e5 t-yr of xenon) at sqrt(N) scaling. Blocked harder by systematics: v_esc = 528 +- 25 km/s (5%) and the f(v) shape enter the spectrum in the same combination mu^2 v^2 as the mass, flooring single-target reconstruction near 10% at any exposure. Rated impossible on that floor, not on cost; the improvement factor alone would understate the obstruction. A paleo-detector two-target endpoint ratio E_max(Xe)/E_max(O) was considered as a cheaper alternative and set aside. (i) Xenon is a noble gas and occurs in no mineral, so no paleo-detector has a xenon target; the alternative conflated XLZD's xenon with a mineral. (ii) The mass lever arm of such a ratio lives in the heavy nucleus (d ln(mu^2/m_N)/d ln m_DM ~ 1.1 for A ~ 130 vs 0.27 for O), but for m_DM ~ 95 GeV the heavy-target kinematic endpoint (E_max ~ 310 keV at v_max = v_esc + v_E ~ 776 km/s) sits at q ~ 280 MeV, qR ~ 8.5-8.8, i.e. beyond the second Helm zero with F^2 ~ 2e-4 -- the endpoint is unpopulated at any exposure, for xenon, barium or any other A >~ 130 target. The heaviest nucleus whose endpoint survives coherence loss at this mass is calcium (qR ~ 2.9, F^2 ~ 0.1), and a Ca/O ratio in one mineral shifts by only +0.76% between 94.9 and 97.4 GeV (S/O: +0.53%), requiring ~0.3% endpoint precision on a vanishing tail -- impossible-class for this 2.6% gap. No alternative rated better than 'impossible' therefore exists for R0 vs R2; the projection stands alone.
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_no_no_no",
      "lit_search_note": "Existing data checked: Fermi-LAT 6-yr dwarf stack (limits ~1e-26 cm^3/s bb at 100 GeV, ~5e-26 at 300 GeV, weaker by 2-5x for 4-body cascades - a factor 2-5 above R1/R3's secluded predictions, kept as the lit record); LHCb prompt+displaced A'->mumu, BaBar gamma-A', NA64 (eps reach ~1e-3 visible / 1e-4 below 1 GeV, while R1/R3 extend to eps ~ 1e-6 and R1 to M_Z' = 10 TeV - removes corners, no whole unit); beam dumps/far detectors (ctau <= 2 cm at the eps floor - no acceptance); LEP/LHC EW precision (bites only eps >~ 3e-2); Planck CMB injection (p_ann floor orders above all units at these masses; portal units also p-wave-irrelevant since their portal channel is s-wave but 1e-30); AMS-02 antiprotons (propagation systematics cover the signal range); cluster self-interaction (<0.47 cm^2/g, 3+ orders above any relic-consistent prediction here); Higgs signal strengths (alpha1 <= 8e-3 invisible). Nothing existing partitions any pair of units.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Fermi-LAT 6-yr dwarf-spheroidal stacking",
          "observable": "sigmav(bb) < 1e-26 cm^3/s at ~100 GeV ?",
          "what_this_is": "The Fermi Large Area Telescope is a gamma-ray satellite; this analysis stacks its data on dwarf spheroidal galaxies, small dark-matter-dominated satellites of the Milky Way with almost no ordinary gamma-ray sources. It is the cleanest existing probe of dark matter annihilating into standard-model particles today. It matters here because two of the four regions are dark-U(1)' models whose annihilation rate today is near the thermal benchmark, while the other two are feeble Higgs-portal models annihilating a thousand times slower.",
          "refs": [
            "arXiv:1503.02641"
          ],
          "reasoning": "R1/R3 (secluded ss->Z'Z'->4f): sigmav ~ 1e-27 to 2.4e-26 cm^3/s (g'^4/(16 pi M^2), g'=0.086-0.31, M=100-300 GeV for R3; R1's secluded majority similar). R0/R2 (Higgs portal, alpha1~1e-3): sigmav ~ 1e-29 to 1e-30 cm^3/s. The published limits (~1e-26 at 100 GeV rising to ~5e-26 at 300 GeV, for bb) sit a factor 2-5 above the R1/R3 predictions once the softer 4-body cascade spectrum is accounted for, and exclude only scattered upper-edge points of no whole unit.",
          "feasibility": "Existing data does NOT split these regions: the bb/tautau templates are mismatched to the Z'Z' four-body cascade, and even the matched sensitivity would sit a factor ~2-5 above most of R1/R3. Dominant systematic: dwarf J-factor (dark-matter density profile) uncertainties, ~0.3-0.4 dex.",
          "outcomes": [
            {
              "label": "no split",
              "regions": [
                "R0",
                "R1",
                "R2",
                "R3"
              ]
            }
          ]
        },
        {
          "kind": "lit_projection",
          "attach_to": "R0+R1+R2+R3",
          "name": "Fermi-LAT 15-yr dwarf recast, dark-photon cascade template",
          "observable": "sigmav(Z'Z'->4f) > 2e-26 cm^3/s ?",
          "what_this_is": "A re-analysis of gamma-ray data the Fermi satellite has already recorded from dwarf galaxies, refitted with the photon spectrum produced when two dark-matter particles annihilate into a pair of dark photons that each decay to a pair of charged standard-model particles (a four-body cascade), instead of the standard two-body templates. It is most sensitive to exactly the secluded annihilation the dark-U(1)' regions predict. A detection tags the dark-U(1)' models; a null result leaves the feeble Higgs-portal models.",
          "refs": [
            "arXiv:1503.02641",
            "arXiv:1503.01773"
          ],
          "reasoning": "R3 predicts s-wave sigmav(ss->Z'Z') ~ 1e-27 to 2.4e-26 cm^3/s with the g' >~ 0.2 bulk near thermal; R1's secluded majority (MZp < MDM) is comparable. R0/R2 predict sigmav ~ 1e-29 to 1e-30 cm^3/s (alpha1^2 suppression), unobservable at any foreseeable indirect-detection sensitivity. Marginal caveats: the low-g' sub-thermal tail of R3 and the ~5% non-secluded (MZp > MDM) fraction of R1 would also read 'not seen'; the split captures the bulk of each unit, not every point. A next-generation alternative separating the same groups - the Xe-vs-Ar per-nucleon cross-section ratio (photon-like Z' exchange couples to Z^2, Higgs portal to A^2, a ~20% rate-ratio effect) at an ARGO-scale argon detector - is strictly less feasible than this reanalysis and is noted here rather than added as a split.",
          "feasibility": "Today-experiment: Fermi-LAT 6-yr dwarf stack, sigmav(bb) limit ~1e-26 cm^3/s at 100 GeV, ~5e-26 at 300 GeV, and weaker against 4-body cascades. Required: ~(1-2)e-26 cm^3/s in the cascade channel across 100-300 GeV. Gain: matched cascade template (~1.5x) plus 15 vs 6 years of already-recorded data (~2x, quasi-background-free signal-limited scaling) = factor ~3; no new data or hardware. Dominant systematic: dwarf J-factors.",
          "feasibility_rating": "reanalysis",
          "improvement_factor": 3,
          "outcomes": [
            {
              "label": "seen",
              "regions": [
                "R1",
                "R3"
              ]
            },
            {
              "label": "not seen",
              "regions": [
                "R0",
                "R2"
              ]
            }
          ]
        },
        {
          "kind": "novel",
          "attach_to": "R1+R3",
          "name": "Dark-quartic fingerprint via DM self-scattering",
          "observable": "sigma_self/m > 1e-11 cm^2/g ?",
          "what_this_is": "A measurement of how strongly dark-matter particles scatter off each other, inferred from the internal structure and collision dynamics of galaxy clusters and halos. Self-scattering is the only process that feels the dark sector's pure self-couplings, and here the ONLY operators distinguishing the pooled Z2+3+4+5 dark-U(1)' family from the Z2-only family are quartic self-couplings among the two components of the dark scalar, which touch no standard-model particle at all. This node documents that the required sensitivity is about ten orders of magnitude beyond any astrophysical capability - the honest record of why these two regions cannot be told apart.",
          "why_novel": "Self-interaction bounds in the literature target strongly self-interacting dark matter (sigma/m ~ 0.1-1 cm^2/g) as a small-scale-structure solution; using precision self-scattering at the 1e-11 cm^2/g level as a spectroscopic fingerprint of the quartic-coupling structure of a weak-scale dark scalar has no literature counterpart. Closest work is the cluster-merger bound itself.",
          "refs": [
            "arXiv:0704.0261"
          ],
          "reasoning": "R3's parameter box is nested inside R1's in EVERY shared parameter (M_DM, M_Z', alpha1, eps, g', even quartics), and its operator set is a subset of R1's: the discriminating operators (odd quartics alpha3 si*sr^3, alpha5 si^3*sr) enter no SM-coupled vertex, generate no mass splitting (the dark scalar has no vev), and first appear in dark 2->2 self-scattering, at sigma_self/m up to ~2e-10 cm^2/g for R1 (quartics O(10)) versus ~1e-16-1e-10 for R3 - overlapping ranges, so even a perfect measurement separates them only statistically. The seemingly stronger Z'-exchange channel closes on this branch: relic viability pins the secluded-channel dark coupling to g' ~ 0.1-0.3 in both units (larger g' with a light Z' means 1e2-1e4 x thermal annihilation - underabundant and already excluded by the dwarf data below), capping sigma/m at <= ~1e-4 cm^2/g identically for R1 and R3; R1's large-g' points (up to 12.57) are confined to M_Z' > M_DM, where sigma/m <~ 1e-6 cm^2/g. The null direction is irreducible in principle by parametric containment; the yes-outcome records what a (physically unreachable) measurement WOULD favor.",
          "feasibility": "Closest existing technique: merging-cluster offset analyses, bounding sigma/m <~ 0.5-1 cm^2/g, with a baryonic-feedback systematic floor near 0.1 cm^2/g. Required: ~1e-11 cm^2/g - a >= 1e10 improvement in an astrophysical observable with no instrument concept; historically one order of magnitude here takes a decade. Blocked by a hard floor and by the overlap of the two predictions themselves; rated impossible - this node documents WHY the R1/R3 degeneracy cannot be broken, in either direction.",
          "feasibility_rating": "impossible",
          "outcomes": [
            {
              "label": "yes",
              "regions": [
                "R1"
              ]
            },
            {
              "label": "no",
              "regions": [
                "R3"
              ]
            }
          ]
        },
        {
          "kind": "lit_projection",
          "attach_to": "R0+R2",
          "name": "WIMP mass from the nuclear-recoil spectrum",
          "observable": "m_DM > 96.0 GeV, resolved to +-1 GeV ?",
          "what_this_is": "Once a direct-detection experiment has recorded actual dark-matter events, the energy spectrum of the recoiling nuclei carries information about the dark-matter mass. This is a fit to the shape of that spectrum, ideally combining targets. It is the only observable separating the two remaining regions, because the real and complex scalar singlets here are physically identical apart from disjoint mass windows two and a half percent apart - and the fit is floored by our ignorance of the local dark-matter velocity distribution, which is why this final degeneracy is documented as irreducible by conventional means.",
          "refs": [
            "arXiv:2410.17036",
            "arXiv:1012.3458"
          ],
          "reasoning": "R0 and R2 are both pure Higgs-portal WIMPs with lambda_hS ~ 2e-3, identical isospin structure (f_n/f_p = 1), identical spectrum shape at fixed mass, identical invisible annihilation (~1e-30-1e-29 cm^3/s), and no accessible second state (R0's complex partner is split by ~0.3 GeV, four orders above the ~100 keV inelastic window, and carries no Higgs coupling). The ONLY difference is the mass: R0 predicts 97.4 +- 0.5 GeV, R2 predicts 94.9 +- 0.2 GeV, with an empty gap at 96.0 GeV. On xenon the spectral scale E_0 = 2 mu^2 v^2/m_Xe differs by only 2.3% between the hypotheses because the reduced mass saturates near m_Xe. A measurement at 96-99 GeV selects R0; 93-96 GeV selects R2. Marginal by construction: percent-level mass reconstruction is required.",
          "feasibility": "Today-experiment: LZ (4.2 t-yr, limits only); published multi-target forecasts (Pato et al.) give sigma(m)/m ~ 20-50% at 100 GeV with 1e2-1e3 events. Required: <= 1.3% so the two 1-sigma bands are disjoint - improvement factor ~25 in fractional mass resolution, i.e. ~600x more events (~1e5 t-yr of xenon) at sqrt(N) scaling. Blocked harder by systematics: v_esc = 528 +- 25 km/s (5%) and the f(v) shape enter the spectrum in the same combination mu^2 v^2 as the mass, flooring single-target reconstruction near 10% at any exposure. Rated impossible on that floor, not on cost; the improvement factor alone would understate the obstruction. A paleo-detector two-target endpoint ratio E_max(Xe)/E_max(O) was considered as a cheaper alternative and set aside. (i) Xenon is a noble gas and occurs in no mineral, so no paleo-detector has a xenon target; the alternative conflated XLZD's xenon with a mineral. (ii) The mass lever arm of such a ratio lives in the heavy nucleus (d ln(mu^2/m_N)/d ln m_DM ~ 1.1 for A ~ 130 vs 0.27 for O), but for m_DM ~ 95 GeV the heavy-target kinematic endpoint (E_max ~ 310 keV at v_max = v_esc + v_E ~ 776 km/s) sits at q ~ 280 MeV, qR ~ 8.5-8.8, i.e. beyond the second Helm zero with F^2 ~ 2e-4 -- the endpoint is unpopulated at any exposure, for xenon, barium or any other A >~ 130 target. The heaviest nucleus whose endpoint survives coherence loss at this mass is calcium (qR ~ 2.9, F^2 ~ 0.1), and a Ca/O ratio in one mineral shifts by only +0.76% between 94.9 and 97.4 GeV (S/O: +0.53%), requiring ~0.3% endpoint precision on a vanishing tail -- impossible-class for this 2.6% gap. No alternative rated better than 'impossible' therefore exists for R0 vs R2; the projection stands alone.",
          "feasibility_rating": "impossible",
          "improvement_factor": 25,
          "outcomes": [
            {
              "label": "heavier",
              "regions": [
                "R0"
              ]
            },
            {
              "label": "lighter",
              "regions": [
                "R2"
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

<!-- g02_leaf-ynynn.md -->

## Reasoning — leaf `root_yes_no_yes_no_no` (4,606 pts, R0 + R1 + R2 + R3)

**LHCb + BaBar light dark-photon search** (literature split). R0 is the only unit with M_Zp reaching into [0.02, 70] GeV (its range is [1, 1e4] GeV, log-uniform, roughly half below ~100 GeV) with kinetic mixing up to eps = 0.1 - one to two decades above the published LHCb prompt A'->mumu exclusion (eps^2 down to ~1e-6 over 0.214-70 GeV) and the BaBar exclusions (visible 0.02-10.2 GeV; monophoton+invisible below ~8 GeV, which covers the case M_Zp > 2 M_DM with gU1p >> eps*e where the dimuon branching collapses). Predicted signal: R0 - a prompt narrow dimuon peak or monophoton excess for its eps >~ 1e-3, M_Zp <~ 70 GeV sub-volume (~20% of its log measure; existing nulls already carve part of it out, and Planck's p_ann bound independently brushes its lightest relic-pinned secluded corner, m <~ 15-20 GeV at thermal s-wave rates); R1 and R2 - exactly zero (no dark U(1) exists); R3 - exactly zero in this window (M_Zp >= 359 GeV). One-sided, stated plainly: a detection is decisive for R0; a null leaves R0's feeble-mixing and heavy-Z' remainder sharing the 'not seen' phenotype, and the burden passes down the chain. Data fully in hand (BaBar complete; LHCb Run 1+2 published, Run 3 accumulating): the split is available today in the discovery direction, and existing nulls already exclude part of R0's box. Dominant systematic: smooth continuum-dimuon background modeling under a narrow peak and the masked vector-meson windows (rho/omega/phi, quarkonia) at LHCb; single-photon trigger efficiency at BaBar. The limitation is coverage, not measurement error.

**FCC-ee Tera-Z electroweak fit (Z-Z' kinetic mixing)** (literature projection on R1 + R2 + R3). Kinetic mixing shifts Z-pole observables by ~eps^2 (m_Z/M_Zp)^2 x O(0.1-1). R1, R2: identically zero - no extra U(1) exists and the alpha1 ~ 1e-3 portal is far below electroweak-fit sensitivity. R3 (eps in [1.6e-4, 0.1], M_Zp in [359, 4065] GeV): delta sin^2(theta_eff) ranges from ~1e-9 at the feeble floor up to ~(1-10)e-4 at (eps = 0.1, M_Zp ~ 400 GeV). Against 5e-6 precision the detectable sub-volume is eps >~ 0.03-0.05 x (M_Zp/TeV) - i.e. eps >~ 0.011-0.018 at 359 GeV, rising past R3's eps ceiling of 0.1 for M_Zp >~ 2-3 TeV, so FCC-ee covers roughly the top half-decade of R3's mixing range at the lower half of its mass range and nothing beyond. One-sided and marginal, stated plainly: a shift can only be R3 (R0 was wholly assigned to the root split's discovery branch); an SM-like result honestly retains R1+R2 and most of R3's volume - and R3's feeble-eps tail is irreducible in principle, since with no dark Higgs the Z' is Stueckelberg-massive, every dark-sector observable scales as eps^2, and R3 connects continuously to the plain complex singlet R1 as eps -> 0 with all catalog observables fixed. Today-experiment: the LEP/SLD Z-pole fit, delta sin^2(theta_eff) ~ 1.6e-4, bounding eps <~ 0.3-0.5 x (M_Zp/TeV) - which the scan's viability filter never applied, so R3's top corner is already in tension with existing data. Required: 5e-6 on the same observable, factor ~30, as projected for FCC-ee Tera-Z (statistics-dominated, sqrt(N) from 1.7e7 to ~5e12 Z's, saturated by beam-energy calibration and alpha_QED(m_Z) systematics, which the 5e-6 figure already folds in). A next-generation facility of a routinely designed kind, not yet funded. No strictly better-rated novel alternative found: Xe/Ar isospin ratios are void (Z'-mediated scattering is inelastic, kinematically closed), parity violation is blind to vector-like mixing, and DY-interference reanalyses reach only eps ~ 1e-2.

**Gamma-ray annihilation-line centroid (DM mass spectroscopy)** (literature projection on R1 + R2). R1 predicts a line at E_gamma = M_DM in [95.31, 97.03] GeV, R2 in [93.65, 94.75] GeV - disjoint windows with a clean gap at 95.0 GeV, and a companion gamma-Z line at M(1 - m_Z^2/4M^2) ~ 72-75 GeV whose fractional separation (3.4% vs 2.1%) gives an even better lever arm plus an absolute-energy-scale cross-check. The rate kills it: the sigma_SI window on this path pins alpha1 = (1.1-1.9)e-3, a factor 13-24 below the relic-normalized portal coupling at 95 GeV, so sigma_v_tot ~ (0.4-1.2)e-28 cm3/s, and the off-shell-Higgs W-loop gives BR(gamma gamma) ~ 1.4e-5 at sqrt(s) ~ 190 GeV (Gamma_gg ~ 20 keV against Gamma_tot ~ 1.4 GeV) - hence sigma_v_gg ~ (0.5-1.6)e-33 cm3/s in both regions, ~1e5 below the Fermi-LAT Pass-8 line sensitivity (~1e-28 cm3/s at 95 GeV), and suppressed further as the square of any sub-dominant relic fraction. Real-vs-complex multiplicity carries no independent signature (the relic rescaling of sigma_v cancels against halo density-squared counting), and no other observable reads M_DM at sub-percent precision: xenon recoil spectra saturate for M >> m_Xe/2 with a +/-15-30 GeV halo-systematics floor, and collider pair production through a 1e-3 portal is hopeless. This node documents why the real-vs-complex singlet degeneracy in this leaf is irreducible; its outcomes record what the line would separate. Today-experiment: Fermi-LAT Pass 8 line search, sigma_v_gg <~ 1e-28 cm3/s at ~95 GeV. Required: ~1e-33 cm3/s - factor ~1e5 in the observable - AND a sub-percent line-energy measurement (space-calorimeter resolution ~1%, absolute energy scale ~0.3%; air-Cherenkov arrays are floored at 5-7% by shower fluctuations). Even linear-in-exposure scaling for a near-background-free line search demands ~1e5 times the Fermi effective-area-times-time at percent resolution: far fewer than one signal photon per decade in any instrument conceivable within 100 years. Hard flux floor, hence impossible; no novel alternative at speculative or better exists (the centroid-as-mass-spectrometer reading itself is the same flux-starved measurement).
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_no_no",
      "lit_search_note": "Existing data checked: LHCb/BaBar dark-photon searches (split - used at root); LEP/SLD Z-pole fit (bites only eps >~ 0.03 x (M_Z'/TeV), the top sliver of R3/R0 - folded into the FCC-ee node); Planck p_ann (95 GeV units predict ~2e-31 cm3/s/GeV, a factor ~1e3 below the 3.2e-28 bound once the sub-relic alpha1 is used - no split; only R0's light secluded relic-pinned corner is brushed); Fermi-LAT line search (predictions ~1e-33 vs limit ~1e-28); AMS-02 antiprotons (sub-thermal rates, no reach); cluster self-interaction (contact quartic gives sigma/m ~ 1e-10 cm2/g); beam dumps and far detectors (no acceptance: c*tau <= 2 cm everywhere in the scan); precision Higgs couplings (alpha1 ~ 1e-3 portal invisible).",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "LHCb + BaBar light dark-photon search",
          "observable": "prompt mumu (or monophoton+invisible) resonance, m(A') in 0.02-70 GeV ?",
          "what_this_is": "BaBar (an electron-positron collider experiment, complete) and LHCb (a forward detector at the Large Hadron Collider) have already recorded and published searches for a light new gauge boson that mixes weakly with the photon: it would appear as a narrow bump in the invariant mass of muon pairs, or, if it decays invisibly to dark matter, as a single photon recoiling against nothing. These are the most sensitive existing probes of a dark photon lighter than about 70 GeV. Only region R0 can contain such a light dark force carrier - R3's is heavier than 359 GeV and R1/R2 have none at all - so a bump anywhere in this recorded data uniquely identifies R0.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1406.2980",
            "arXiv:1702.03327"
          ],
          "reasoning": "R0 is the only unit with M_Zp reaching into [0.02, 70] GeV (its range is [1, 1e4] GeV, log-uniform, roughly half below ~100 GeV) with kinetic mixing up to eps = 0.1 - one to two decades above the published LHCb prompt A'->mumu exclusion (eps^2 down to ~1e-6 over 0.214-70 GeV) and the BaBar exclusions (visible 0.02-10.2 GeV; monophoton+invisible below ~8 GeV, which covers the case M_Zp > 2 M_DM with gU1p >> eps*e where the dimuon branching collapses). Predicted signal: R0 - a prompt narrow dimuon peak or monophoton excess for its eps >~ 1e-3, M_Zp <~ 70 GeV sub-volume (~20% of its log measure; existing nulls already carve part of it out, and Planck's p_ann bound independently brushes its lightest relic-pinned secluded corner, m <~ 15-20 GeV at thermal s-wave rates); R1 and R2 - exactly zero (no dark U(1) exists); R3 - exactly zero in this window (M_Zp >= 359 GeV). One-sided, stated plainly: a detection is decisive for R0; a null leaves R0's feeble-mixing and heavy-Z' remainder sharing the 'not seen' phenotype, and the burden passes down the chain.",
          "feasibility": "Data fully in hand (BaBar complete; LHCb Run 1+2 published, Run 3 accumulating): the split is available today in the discovery direction, and existing nulls already exclude part of R0's box. Dominant systematic: smooth continuum-dimuon background modeling under a narrow peak and the masked vector-meson windows (rho/omega/phi, quarkonia) at LHCb; single-photon trigger efficiency at BaBar. The limitation is coverage, not measurement error.",
          "outcomes": [
            {
              "label": "resonance seen",
              "regions": [
                "R0"
              ]
            },
            {
              "label": "not seen",
              "regions": [
                "R1",
                "R2",
                "R3"
              ]
            }
          ]
        },
        {
          "kind": "lit_projection",
          "attach_to": "R1+R2+R3",
          "name": "FCC-ee Tera-Z electroweak fit (Z-Z' kinetic mixing)",
          "observable": "|delta sin^2(theta_eff)| > 5e-6 ?",
          "what_this_is": "The proposed FCC-ee circular electron-positron collider would sit on the Z-boson resonance and record trillions of Z decays, measuring the Z's couplings roughly thirty times more precisely than the 1990s LEP experiments. A heavy dark gauge boson that mixes with the photon drags the measured weak mixing angle away from its Standard Model value through Z-Z' mixing, even when far too heavy to produce directly. Of the three remaining regions only R3 contains such a boson, so a coherent shift in the Z-pole fit tags it, while R1 and R2 predict exactly no shift.",
          "refs": [
            "arXiv:hep-ex/0509008",
            "arXiv:1412.0018"
          ],
          "reasoning": "Kinetic mixing shifts Z-pole observables by ~eps^2 (m_Z/M_Zp)^2 x O(0.1-1). R1, R2: identically zero - no extra U(1) exists and the alpha1 ~ 1e-3 portal is far below electroweak-fit sensitivity. R3 (eps in [1.6e-4, 0.1], M_Zp in [359, 4065] GeV): delta sin^2(theta_eff) ranges from ~1e-9 at the feeble floor up to ~(1-10)e-4 at (eps = 0.1, M_Zp ~ 400 GeV). Against 5e-6 precision the detectable sub-volume is eps >~ 0.03-0.05 x (M_Zp/TeV) - i.e. eps >~ 0.011-0.018 at 359 GeV, rising past R3's eps ceiling of 0.1 for M_Zp >~ 2-3 TeV, so FCC-ee covers roughly the top half-decade of R3's mixing range at the lower half of its mass range and nothing beyond. One-sided and marginal, stated plainly: a shift can only be R3 (R0 was wholly assigned to the root split's discovery branch); an SM-like result honestly retains R1+R2 and most of R3's volume - and R3's feeble-eps tail is irreducible in principle, since with no dark Higgs the Z' is Stueckelberg-massive, every dark-sector observable scales as eps^2, and R3 connects continuously to the plain complex singlet R1 as eps -> 0 with all catalog observables fixed.",
          "feasibility": "Today-experiment: the LEP/SLD Z-pole fit, delta sin^2(theta_eff) ~ 1.6e-4, bounding eps <~ 0.3-0.5 x (M_Zp/TeV) - which the scan's viability filter never applied, so R3's top corner is already in tension with existing data. Required: 5e-6 on the same observable, factor ~30, as projected for FCC-ee Tera-Z (statistics-dominated, sqrt(N) from 1.7e7 to ~5e12 Z's, saturated by beam-energy calibration and alpha_QED(m_Z) systematics, which the 5e-6 figure already folds in). A next-generation facility of a routinely designed kind, not yet funded. No strictly better-rated novel alternative found: Xe/Ar isospin ratios are void (Z'-mediated scattering is inelastic, kinematically closed), parity violation is blind to vector-like mixing, and DY-interference reanalyses reach only eps ~ 1e-2.",
          "feasibility_rating": "next generation",
          "improvement_factor": 30,
          "outcomes": [
            {
              "label": "shift seen",
              "regions": [
                "R3"
              ]
            },
            {
              "label": "SM-like",
              "regions": [
                "R1",
                "R2"
              ]
            }
          ]
        },
        {
          "kind": "lit_projection",
          "attach_to": "R1+R2",
          "name": "Gamma-ray annihilation-line centroid (DM mass spectroscopy)",
          "observable": "E(gamma-gamma line) >= 95.0 GeV ?",
          "what_this_is": "When two dark-matter particles in the Galactic halo annihilate directly into a pair of photons, each photon carries an energy exactly equal to the dark-matter mass, producing a razor-sharp line in the gamma-ray sky whose position weighs the particle to better than a percent. That is the one quantity that could tell these last two regions apart, because the complex singlet R1 predicts a mass of 95.3-97.0 GeV while the real singlet R2 predicts 93.7-94.8 GeV, and every other signature of these two Higgs-portal models is identical. This node records honestly that the required photon flux does not exist: the measurement is a thousand-fold too faint for any instrument that could be built in a century.",
          "refs": [
            "arXiv:1506.00013"
          ],
          "reasoning": "R1 predicts a line at E_gamma = M_DM in [95.31, 97.03] GeV, R2 in [93.65, 94.75] GeV - disjoint windows with a clean gap at 95.0 GeV, and a companion gamma-Z line at M(1 - m_Z^2/4M^2) ~ 72-75 GeV whose fractional separation (3.4% vs 2.1%) gives an even better lever arm plus an absolute-energy-scale cross-check. The rate kills it: the sigma_SI window on this path pins alpha1 = (1.1-1.9)e-3, a factor 13-24 below the relic-normalized portal coupling at 95 GeV, so sigma_v_tot ~ (0.4-1.2)e-28 cm3/s, and the off-shell-Higgs W-loop gives BR(gamma gamma) ~ 1.4e-5 at sqrt(s) ~ 190 GeV (Gamma_gg ~ 20 keV against Gamma_tot ~ 1.4 GeV) - hence sigma_v_gg ~ (0.5-1.6)e-33 cm3/s in both regions, ~1e5 below the Fermi-LAT Pass-8 line sensitivity (~1e-28 cm3/s at 95 GeV), and suppressed further as the square of any sub-dominant relic fraction. Real-vs-complex multiplicity carries no independent signature (the relic rescaling of sigma_v cancels against halo density-squared counting), and no other observable reads M_DM at sub-percent precision: xenon recoil spectra saturate for M >> m_Xe/2 with a +/-15-30 GeV halo-systematics floor, and collider pair production through a 1e-3 portal is hopeless. This node documents why the real-vs-complex singlet degeneracy in this leaf is irreducible; its outcomes record what the line would separate.",
          "feasibility": "Today-experiment: Fermi-LAT Pass 8 line search, sigma_v_gg <~ 1e-28 cm3/s at ~95 GeV. Required: ~1e-33 cm3/s - factor ~1e5 in the observable - AND a sub-percent line-energy measurement (space-calorimeter resolution ~1%, absolute energy scale ~0.3%; air-Cherenkov arrays are floored at 5-7% by shower fluctuations). Even linear-in-exposure scaling for a near-background-free line search demands ~1e5 times the Fermi effective-area-times-time at percent resolution: far fewer than one signal photon per decade in any instrument conceivable within 100 years. Hard flux floor, hence impossible; no novel alternative at speculative or better exists (the centroid-as-mass-spectrometer reading itself is the same flux-starved measurement).",
          "feasibility_rating": "impossible",
          "improvement_factor": 100000,
          "outcomes": [
            {
              "label": "line 95-97 GeV",
              "regions": [
                "R1"
              ]
            },
            {
              "label": "line 93-95 GeV",
              "regions": [
                "R2"
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

<!-- g03_leaf-nnnn.md -->

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

---

<!-- g04_leaf-yynyn.md -->

## Reasoning — leaf `root_yes_yes_no_yes_no` (3,086 pts, R0 + R1 + R2)

**Existing prompt dark-photon dilepton searches (BaBar, LHCb, CMS)** (literature split). The Z' decays visibly with BR ~ 1 everywhere in this leaf (Z' -> DM DM is closed since MZp < 2*MDM >~ 630 GeV), with BR(mumu) ~ 0.1 above 10 GeV, so published dark-photon limits apply directly. Predicted values: R2 (MZp 5.4-121 GeV, entirely inside existing coverage; eps^2 spanning 2e-11 to 2.6e-3) has ~40% of its eps decades (eps >~ 1e-3) 10-1000x above published limits (eps = 0.05 at 20 GeV gives eps^2 = 2.5e-3 vs LHCb ~2e-6) and its log-median point within a factor of a few of the LHCb curve: a narrow peak already present in recorded data is its generic prediction. R1 predicts strictly nothing: eps^2 <= 2.6e-7 is >= 4x below the best curve in its 39-200 GeV overlap and its 200-300 GeV portion is uncovered. R0 straddles (excluded corner ~1/4-1/3 of log-volume) but its typical point (eps ~ 3e-4, mass often above 200 GeV) is invisible, so it shares the nothing branch. One-sided and statistical, stated plainly: a peak falsifies R1 outright and generically tags R2 rather than R0's corner, while a null does not exclude R2's low-eps tail (down to 4.4e-6) -- that tail is covered next-round by LHCb Upgrade II's approved eps^2 ~ 1e-8 scan (~30x today), which sits above this node's data and below nothing else in the tree. Distinct from the catalog's Z'-dilepton entry, which is the projected high-mass Drell-Yan sigma x BR recast, not these recorded low-mass prompt datasets. Data already recorded and published; the split exists now but is soft-edged: sharp for R1 (never visible), statistical for R2's low-eps tail and R0's high-eps corner, both flagged. Dominant systematic: Drell-Yan/QED continuum shape under a narrow peak and dimuon mass-resolution modelling near the LHCb window edge.

**LEP/LHC Z-Z' kinetic-mixing fit** (literature split on R0 + R1). LEP electroweak precision constrains epsilon >~ 3e-2 near MZ; CMS off-peak dimuon reaches epsilon ~1e-2 over 11.5-200 GeV. R1 predicts epsilon <= 5.1e-4 (log-median 2e-5): 20-1000x below reach. R0 predicts a typical epsilon ~3e-4: ~30x below reach; only its extreme sliver (epsilon ~0.1 near MZ) would register, far from the unit's typical point. Both regions land in 'unconstrained', so the existing precision data yields no split. No: existing data sits 1.5-3 orders of magnitude above both regions' typical mixing in the coupling itself. Dominant systematic irrelevant at this distance from the predictions; the limitation is pure signal size, not measurement error.

**Belle II gamma + dark-photon search, 50 ab^-1** (literature projection on R0 + R1). R1 predicts exactly zero signal, kinematically: MZp >= 38.9 GeV exceeds the ~10.2 GeV production endpoint at sqrt(s)=10.58 GeV, so any narrow ee/mumu peak below 10 GeV falsifies R1 outright. R0's MZp in [1,10] GeV, eps >= 3e-4 corner (~15-20% of its log-volume) predicts sigma(e+e- -> gamma A') ~ 0.01-0.1 fb at eps=1e-3, i.e. O(1000) events in 50 ab^-1 -> a clear detection, and a Lagrangian-level identification of the Z2+3+4+5 build. Marginality flagged: a null result leaves R0's bulk degenerate with R1; the outcome assignment records the positive discrimination direction, and the residual R0-R1 degeneracy is the quartic-sector one argued irreducible in the lit_search_note. Alternative considered: LHCb Upgrade II A'->mumu at eps^2 ~1e-7 in 10-70 GeV could positively detect R1's 39-70 GeV corner, but R1's eps^2 reaches only 2.6e-7 at its very edge - more marginal, later, and less kinematically clean, so it was kept out of the tree. Today-experiment: BaBar (514 fb^-1), visible dark-photon reach eps ~1e-3 over 0.02-10.2 GeV. Required: eps ~3e-4, i.e. a factor ~10 in the signal-rate observable (proportional to eps^2), matching background-limited sqrt(L) scaling with the approved 50 ab^-1 Belle II dataset (sqrt(50/0.514) ~ 10). Belle II is running now and 50 ab^-1 is its design program - more running time, no new facility. Dominant systematic: irreducible QED gamma-ll continuum and peaking backgrounds at the J/psi and Upsilon masses (masked windows).
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_no_yes_no",
      "lit_search_note": "Existing data checked: LEP Z-pole / e+e- kinetic-mixing fits (verified hep-ph/9710441, 1006.0973: eps <~ 3e-2 over 1 GeV-1 TeV; both surviving units 30-1000x below); Planck CMB energy injection p_ann (all units thermal-or-below secluded s-wave, ~5x under the 3.2e-28 bound); merging-cluster self-interaction (R1 ~1e-10 cm^2/g, R0 up to its unitarity-capped ~1e-5 cm^2/g corner, >= 5 orders below the ~1-2 cm^2/g bound -- no split, and the reason the dark-quartic axis is a hard floor); beam dumps and far detectors (MZp >= 1 GeV and ctau <= 2 cm at the eps floor: zero acceptance); Xe-vs-Ar isospin ratio, recoil shape, annual modulation, directionality, spin-dependent DD (all units are identical isoscalar Higgs-portal elastic scatterers; Z'-exchange DD is inelastic with a ~GeV splitting, closed); Fermi dwarf spheroidals (identical secluded thermal-level sigmav across units, below sensitivity); solar flux/sigma_SI closure (fails: quartic si-sr conversion conserves dark-quantum number, so all units share the Z'Z'->4f solar spectrum). Residual R0-vs-R1 axis after the tree: only the si-odd dark quartics (lambda_rrri, lambda_riii sums) differ; their sole observable is dark self-conversion at sigma/m ~ 1e-16 cm^2/g (exactly zero for Z2) against an astrophysical floor of ~0.5 cm^2/g -- physically irreducible, which is why the Belle II null branch cannot be improved upon.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Existing prompt dark-photon dilepton searches (BaBar, LHCb, CMS)",
          "observable": "narrow prompt l+l- resonance, 0.21-200 GeV, eps^2 >= 1e-6 ?",
          "what_this_is": "Three completed collider searches have already scanned recorded data for a narrow bump in the mass spectrum of electron or muon pairs: BaBar in electron-positron collisions below 10 GeV, and LHCb and CMS in proton-proton collisions up to 200 GeV. Such a bump is the classic signature of a dark photon, a new force carrier that talks to ordinary matter only through a tiny mixing with the photon. Every region in this leaf contains exactly such a particle; they differ in its mass and mixing strength, and one region generically predicts a bump that the data in hand would already show.",
          "refs": [
            "arXiv:1406.2980",
            "arXiv:1910.06926",
            "arXiv:1912.04776"
          ],
          "reasoning": "The Z' decays visibly with BR ~ 1 everywhere in this leaf (Z' -> DM DM is closed since MZp < 2*MDM >~ 630 GeV), with BR(mumu) ~ 0.1 above 10 GeV, so published dark-photon limits apply directly. Predicted values: R2 (MZp 5.4-121 GeV, entirely inside existing coverage; eps^2 spanning 2e-11 to 2.6e-3) has ~40% of its eps decades (eps >~ 1e-3) 10-1000x above published limits (eps = 0.05 at 20 GeV gives eps^2 = 2.5e-3 vs LHCb ~2e-6) and its log-median point within a factor of a few of the LHCb curve: a narrow peak already present in recorded data is its generic prediction. R1 predicts strictly nothing: eps^2 <= 2.6e-7 is >= 4x below the best curve in its 39-200 GeV overlap and its 200-300 GeV portion is uncovered. R0 straddles (excluded corner ~1/4-1/3 of log-volume) but its typical point (eps ~ 3e-4, mass often above 200 GeV) is invisible, so it shares the nothing branch. One-sided and statistical, stated plainly: a peak falsifies R1 outright and generically tags R2 rather than R0's corner, while a null does not exclude R2's low-eps tail (down to 4.4e-6) -- that tail is covered next-round by LHCb Upgrade II's approved eps^2 ~ 1e-8 scan (~30x today), which sits above this node's data and below nothing else in the tree. Distinct from the catalog's Z'-dilepton entry, which is the projected high-mass Drell-Yan sigma x BR recast, not these recorded low-mass prompt datasets.",
          "feasibility": "Data already recorded and published; the split exists now but is soft-edged: sharp for R1 (never visible), statistical for R2's low-eps tail and R0's high-eps corner, both flagged. Dominant systematic: Drell-Yan/QED continuum shape under a narrow peak and dimuon mass-resolution modelling near the LHCb window edge.",
          "outcomes": [
            {
              "label": "peak seen (or corner already excluded)",
              "regions": [
                "R2"
              ]
            },
            {
              "label": "nothing",
              "regions": [
                "R0",
                "R1"
              ]
            }
          ]
        },
        {
          "kind": "lit",
          "attach_to": "R0+R1",
          "name": "LEP/LHC Z-Z' kinetic-mixing fit",
          "observable": "epsilon >~ 1e-2 anywhere in 10-200 GeV ?",
          "what_this_is": "LEP measured the Z boson's mass and couplings to per-mille precision, and CMS has scanned for extra dimuon resonances up to a few hundred GeV; together these existing datasets bound how strongly any new neutral force carrier may mix with the photon and Z. Such mixing would shift Z-pole observables and produce dimuon bumps. Both surviving regions predict mixing tens to thousands of times below these bounds, so the existing data cannot tell them apart; this node is the honest record of that.",
          "refs": [
            "arXiv:hep-ph/9710441",
            "arXiv:1006.0973",
            "arXiv:1912.04776"
          ],
          "reasoning": "LEP electroweak precision constrains epsilon >~ 3e-2 near MZ; CMS off-peak dimuon reaches epsilon ~1e-2 over 11.5-200 GeV. R1 predicts epsilon <= 5.1e-4 (log-median 2e-5): 20-1000x below reach. R0 predicts a typical epsilon ~3e-4: ~30x below reach; only its extreme sliver (epsilon ~0.1 near MZ) would register, far from the unit's typical point. Both regions land in 'unconstrained', so the existing precision data yields no split.",
          "feasibility": "No: existing data sits 1.5-3 orders of magnitude above both regions' typical mixing in the coupling itself. Dominant systematic irrelevant at this distance from the predictions; the limitation is pure signal size, not measurement error.",
          "outcomes": [
            {
              "label": "no discrimination",
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
          "name": "Belle II gamma + dark-photon search, 50 ab^-1",
          "observable": "e+e- -> gamma A'(->ll) peak, m(A') < 10 GeV, epsilon >= 3e-4 ?",
          "what_this_is": "Belle II is an electron-positron collider experiment in Japan, running today, that can radiate a photon and produce a dark photon which decays to an electron or muon pair, seen as a narrow mass peak below 10 GeV. Its collision energy means it can only ever see a dark force carrier lighter than about 10 GeV, which is exactly what makes it decisive here: one region's Z' is guaranteed heavier than 39 GeV and so can never appear, while the other region's Z' mass range extends down to 1 GeV. A peak below 10 GeV therefore uniquely identifies the Lagrangian with the extra dark self-couplings.",
          "refs": [
            "arXiv:1406.2980",
            "arXiv:1808.10567"
          ],
          "reasoning": "R1 predicts exactly zero signal, kinematically: MZp >= 38.9 GeV exceeds the ~10.2 GeV production endpoint at sqrt(s)=10.58 GeV, so any narrow ee/mumu peak below 10 GeV falsifies R1 outright. R0's MZp in [1,10] GeV, eps >= 3e-4 corner (~15-20% of its log-volume) predicts sigma(e+e- -> gamma A') ~ 0.01-0.1 fb at eps=1e-3, i.e. O(1000) events in 50 ab^-1 -> a clear detection, and a Lagrangian-level identification of the Z2+3+4+5 build. Marginality flagged: a null result leaves R0's bulk degenerate with R1; the outcome assignment records the positive discrimination direction, and the residual R0-R1 degeneracy is the quartic-sector one argued irreducible in the lit_search_note. Alternative considered: LHCb Upgrade II A'->mumu at eps^2 ~1e-7 in 10-70 GeV could positively detect R1's 39-70 GeV corner, but R1's eps^2 reaches only 2.6e-7 at its very edge - more marginal, later, and less kinematically clean, so it was kept out of the tree.",
          "feasibility": "Today-experiment: BaBar (514 fb^-1), visible dark-photon reach eps ~1e-3 over 0.02-10.2 GeV. Required: eps ~3e-4, i.e. a factor ~10 in the signal-rate observable (proportional to eps^2), matching background-limited sqrt(L) scaling with the approved 50 ab^-1 Belle II dataset (sqrt(50/0.514) ~ 10). Belle II is running now and 50 ab^-1 is its design program - more running time, no new facility. Dominant systematic: irreducible QED gamma-ll continuum and peaking backgrounds at the J/psi and Upsilon masses (masked windows).",
          "feasibility_rating": "possible",
          "improvement_factor": 10,
          "outcomes": [
            {
              "label": "seen",
              "regions": [
                "R0"
              ]
            },
            {
              "label": "not seen",
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

<!-- g05_leaf-yynny.md -->

## Reasoning — leaf `root_yes_yes_no_no_yes` (2,495 pts, R0 + R1)

**Existing LHCb/CMS prompt dark-photon dimuon scans** (literature split). Both regions are the same complex-scalar + dark-U(1)' model with the Higgs portal pinned to the same band by the XLZD/DarkSide-yes, LZ-no sandwich on this path; all separating power lives in (MZp, eps, g'). Existing limits: LHCb excludes eps^2 down to ~1e-6..1e-5 over 0.214-70 GeV; CMS down to ~1e-6..1e-4 over 11.5-200 GeV. Predicted signal in each region: R0 (eps in [1e-6, 0.1], MZp in [1, 986] GeV) has an already-excluded large-eps slice AND an untouched eps <~ 1e-4 bulk; R1 (eps in [7e-6, 0.1], MZp in [17.5, 285] GeV) likewise. Both supports straddle the current exclusion contour over the same overlapping mass window, so existing data carve both regions without assigning either wholly to one side. Status: No Split - but the sub-17.5 GeV mass window, where R0 alone can live, is exactly where the next node pushes deeper. Does NOT split: the published exclusions cut through the interior of both regions identically; neither region is wholly excluded or wholly allowed. Dominant systematic in these searches is the huge prompt combinatorial dimuon background and the SM resonance vetoes (phi, J/psi, psi', Upsilon), which blind narrow mass slices but do not change the no-split verdict.

**LHCb Upgrade II low-mass dimuon scan** (literature projection on R0 + R1). Set-level asymmetry: R1's MZp support is bounded below at 17.5 GeV, so R1 predicts exactly zero resonance signal in the 1-17 GeV dimuon window at any eps. R0's MZp is log-distributed over [1, 986] GeV: ~40% of its log-mass prior lies below 17.5 GeV, and within that corner the Upgrade II reach eps^2 ~ 1e-7..1e-8 (eps >~ 1e-4) covers roughly the upper 60% of R0's log-eps prior, predicting a visible narrow prompt peak. This is the low-mass complement of the catalog's high-mass Drell-Yan Z'-dilepton recast, not a refinement of it. Marginal in one direction, stated honestly: R0 points with MZp > 17.5 GeV or eps < 1e-4 also yield 'no peak', so the 'none' branch is where R1 is assigned rather than proven; that residue is irreducible because R0's surviving secluded points reproduce R1's relic-pinned g' band [0.31, 0.48] (g' ~ sqrt(MDM), from ss* -> Z'Z' thermal freeze-out) and then differ only by unobservable dark quartics (sigma_self/m ~ 3e-12 cm^2/g vs ~1 cm^2/g cluster sensitivity). Today-experiment: LHCb prompt A'->mumu on 5.5 fb^-1, eps^2 sensitivity ~1e-6 in its best sub-20-GeV windows. Required: eps^2 ~ 1e-7 over 1-17 GeV. Factor ~10 in eps^2, consistent with background-limited sqrt(L) scaling from 5.5 to 300 fb^-1 (sqrt(55) ~ 7) plus trigger and detector gains. Rated possible: Upgrade II is an approved upgrade of an operating experiment and the trigger-level-analysis bump-hunt technique is already demonstrated. Dominant systematic: prompt combinatorial background shape and the SM resonance vetoes (J/psi, psi', Upsilon), which blind narrow mass slices within the window.
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_no_no_yes",
      "lit_search_note": "Existing data checked and found non-separating: LHCb prompt+displaced A'->mumu (arXiv:1910.06926, 0.214-70 GeV, eps^2 to ~1e-6 in its best windows) and CMS dimuon incl. scouting (arXiv:1912.04776, 11.5-200 GeV) trim the large-eps slice of BOTH units over the shared mass window; Fermi-LAT dwarf stack recast with a 4-body cascade template (limit ~(0.5-1)e-25 cm^3/s at 300-700 GeV, a factor 3-5 above R1's relic-pinned (2-3)e-26 prediction, R0 up to 5 orders below); AMS-02 antiprotons (effective cascade sensitivity ~1e-25 cm^3/s, systematics-limited); LEP/EWPO kinetic-mixing fits (eps <~ 0.03, straddled by both); Planck CMB injection (R1's f_eff*sigmav/m ~20x below the bound); BaBar/NA64/Belle II (touch only R0's sub-10 GeV tail below prompt reach - one-sided non-exclusion today); cluster self-interaction (sigma/m ~ 1e-12 cm^2/g, >=10 orders below any floor); solar-disk gammas from escaping mediators (closed: eps >= 1e-6 caps boosted decay lengths at ~m scale). Direct detection cannot separate by construction: the dark-U(1)' current is purely off-diagonal, so Z'-mediated recoil is inelastic by ~GeV and sigma_SI is pure Higgs portal with identical alpha1 boxes. Residue after the splits above: R0's secluded members (g' in [0.31,0.48], MZp < MDM, including its pooled Z2 builds) are physically identical to R1 and differ only by dark-sector-only odd quartics whose sole handle, DM self-scattering at sigma/m <~ 3e-11 cm^2/g, is >=1e10 below cluster sensitivity - irreducible.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Existing LHCb/CMS prompt dark-photon dimuon scans",
          "observable": "prompt mumu resonance with eps^2 >~ 1e-6, m in 0.2-200 GeV ?",
          "what_this_is": "The Large Hadron Collider experiments LHCb and CMS have already recorded billions of proton-proton collisions and scanned the invariant mass of muon pairs for a narrow bump: the signature of a new gauge boson (a 'dark photon' Z') that mixes slightly with the ordinary photon and so is produced in collisions and decays to muon pairs. This is the most sensitive existing probe of exactly the mass-versus-mixing plane where these two model regions differ, because everything else on this leaf - direct detection, the solar neutrino flux, Higgs decays - is already pinned to be identical between them. It must be checked first, and today it does not decide.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1912.04776"
          ],
          "reasoning": "Both regions are the same complex-scalar + dark-U(1)' model with the Higgs portal pinned to the same band by the XLZD/DarkSide-yes, LZ-no sandwich on this path; all separating power lives in (MZp, eps, g'). Existing limits: LHCb excludes eps^2 down to ~1e-6..1e-5 over 0.214-70 GeV; CMS down to ~1e-6..1e-4 over 11.5-200 GeV. Predicted signal in each region: R0 (eps in [1e-6, 0.1], MZp in [1, 986] GeV) has an already-excluded large-eps slice AND an untouched eps <~ 1e-4 bulk; R1 (eps in [7e-6, 0.1], MZp in [17.5, 285] GeV) likewise. Both supports straddle the current exclusion contour over the same overlapping mass window, so existing data carve both regions without assigning either wholly to one side. Status: No Split - but the sub-17.5 GeV mass window, where R0 alone can live, is exactly where the next node pushes deeper.",
          "feasibility": "Does NOT split: the published exclusions cut through the interior of both regions identically; neither region is wholly excluded or wholly allowed. Dominant systematic in these searches is the huge prompt combinatorial dimuon background and the SM resonance vetoes (phi, J/psi, psi', Upsilon), which blind narrow mass slices but do not change the no-split verdict.",
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
          "name": "LHCb Upgrade II low-mass dimuon scan",
          "observable": "prompt A'->mumu peak, m_mumu < 17 GeV, eps^2 >~ 1e-8 ?",
          "what_this_is": "LHCb is a detector at the Large Hadron Collider with exceptionally sharp mass resolution for muon pairs; its approved Upgrade II will collect roughly fifty times the current dataset and push the bump hunt for a dark photon decaying to two muons an order of magnitude deeper in the mixing parameter. It probes best exactly the light end of the dark-photon mass range, below about 17 GeV. That window is decisive here: one region's Z' boson can be that light, while the other region's Z' is always heavier than 17.5 GeV, so a confirmed peak below 17 GeV picks out the first region unambiguously.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1603.08926",
            "arXiv:1808.08865"
          ],
          "reasoning": "Set-level asymmetry: R1's MZp support is bounded below at 17.5 GeV, so R1 predicts exactly zero resonance signal in the 1-17 GeV dimuon window at any eps. R0's MZp is log-distributed over [1, 986] GeV: ~40% of its log-mass prior lies below 17.5 GeV, and within that corner the Upgrade II reach eps^2 ~ 1e-7..1e-8 (eps >~ 1e-4) covers roughly the upper 60% of R0's log-eps prior, predicting a visible narrow prompt peak. This is the low-mass complement of the catalog's high-mass Drell-Yan Z'-dilepton recast, not a refinement of it. Marginal in one direction, stated honestly: R0 points with MZp > 17.5 GeV or eps < 1e-4 also yield 'no peak', so the 'none' branch is where R1 is assigned rather than proven; that residue is irreducible because R0's surviving secluded points reproduce R1's relic-pinned g' band [0.31, 0.48] (g' ~ sqrt(MDM), from ss* -> Z'Z' thermal freeze-out) and then differ only by unobservable dark quartics (sigma_self/m ~ 3e-12 cm^2/g vs ~1 cm^2/g cluster sensitivity).",
          "feasibility": "Today-experiment: LHCb prompt A'->mumu on 5.5 fb^-1, eps^2 sensitivity ~1e-6 in its best sub-20-GeV windows. Required: eps^2 ~ 1e-7 over 1-17 GeV. Factor ~10 in eps^2, consistent with background-limited sqrt(L) scaling from 5.5 to 300 fb^-1 (sqrt(55) ~ 7) plus trigger and detector gains. Rated possible: Upgrade II is an approved upgrade of an operating experiment and the trigger-level-analysis bump-hunt technique is already demonstrated. Dominant systematic: prompt combinatorial background shape and the SM resonance vetoes (J/psi, psi', Upsilon), which blind narrow mass slices within the window.",
          "feasibility_rating": "possible",
          "improvement_factor": 10,
          "outcomes": [
            {
              "label": "peak < 17 GeV",
              "regions": [
                "R0"
              ]
            },
            {
              "label": "none",
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

<!-- g06_leaf-yynnn.md -->

## Reasoning — leaf `root_yes_yes_no_no_no` (1,820 pts, R0 + R1)

**Existing dark-photon dilepton searches (LHCb, BaBar, CMS)** (literature split). R1 has M_Z' in [8.3, 165] GeV; R0 has M_Z' in [1, 933] GeV; both span epsilon = 1e-6 to 0.1. The recorded searches (LHCb prompt A'->mumu, 0.214-70 GeV, excluding eps >~ 2e-4; BaBar visible gamma+A', 0.02-10.2 GeV, eps >~ 1e-3; CMS dimuon scouting, 11.5-200 GeV, eps >~ 1e-3..1e-2) all returned null. A bump in an R0-exclusive window (below ~8 GeV) would already have tagged R0, but none was seen; and because R1's (M_Z', eps) box is a strict subset of R0's, the null itself removes only the shared large-epsilon corner of BOTH units identically. Predicted value in each region: no observable resonance (every surviving point sits below the published limits by construction). Status: No Split. Existing, published data; it does NOT separate the units. The failure is structural -- total support overlap below 165 GeV plus an epsilon floor (1e-6) three orders of magnitude below any recorded reach -- not experimental. Dominant systematic in these searches is the smooth combinatorial dimuon continuum and the quarkonium veto windows, irrelevant to the null recorded here.

**LHCb-U2 + HL-LHC dilepton scan of the R0-exclusive Z' mass windows** (literature projection on R0 + R1). R1's viable Z' support is exactly [8.3, 165] GeV -- its gauge coupling is locked to the secluded thermal band (g' = 0.31-0.46 tracking sqrt(M_DM)), and the cluster contains no state outside that window -- so it predicts strictly zero signal in either exclusive window at any epsilon. R0 predicts, for its light corner, a narrow prompt dimuon peak anywhere in 1-8 GeV (outside the J/psi and psi(2S) vetoes) with sigma proportional to eps^2 and no invisible width (Z'->SS* closed since M_DM >= 317 GeV), visible for eps >~ 7e-5; and for its heavy corner a Drell-Yan resonance, e.g. M_Z' = 500 GeV with eps = 0.05 giving sigma.BR(ll) ~ 0.1-1 fb. About 56% of R0's log-mass range is exclusive (31% below 8.3 GeV, 25% above 165 GeV), so with the epsilon-visibility fraction folded in roughly a third of R0 fires YES. ONE-SIDED, stated plainly: a detection in either window is decisive for R0; a null only weakly favors R1, since true-R0 points in the shared 8.3-165 GeV window or with epsilon below reach follow the R1 branch, and there they differ from R1 only by the odd dark quartics (lambda_rrri, lambda_riii), four-dark-leg operators with no SM-visible vertex. The strongest follow-up on the null branch -- kept out of the tree only because this terminal carries one split and this scan is nearer -- is the CTA Galactic-halo search refit with a boosted-Z' four-fermion cascade template: R1's relic-pinned s-wave sigmav ~ 2-3e-26 cm^3/s in that soft spectrum, vs <~1e-27 for R0's bulk (p-wave Z'-portal, closed M_Z' > M_DM channel, or quartic-conversion-set relic), a next-generation, factor-~10 measurement whose 'seen' outcome would tag R1. Today-experiments: LHCb Run-2 prompt A'->mumu (5.4 fb^-1, arXiv:1910.06926) reaches eps ~ 2e-4 across 1-8 GeV; ATLAS/CMS narrow-dilepton searches at ~140 fb^-1 reach sigma.BR ~ 0.3-1 fb near 500 GeV. Required: eps ~ 7e-5 (LHCb Upgrade II, 300 fb^-1: prompt search is background-limited, eps^2 limit scales as 1/sqrt(L), x7.5 in rate = x2.7-3 in eps) and sigma.BR ~ 0.05-0.2 fb in the 165-950 GeV window (3 ab^-1, background-limited sqrt(L) scaling: factor ~5 in sigma.BR). Quoted improvement_factor = 3, in epsilon for the primary low-mass window. Both machines are approved upgrades of running facilities -- no new facility -- hence 'possible'. Dominant systematics: prompt combinatorial dimuon background and charmonium veto regions (light window); Drell-Yan continuum modeling under a narrow peak (heavy window); the mass measurement itself is trivial once a bump is seen.
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_no_no_no",
      "lit_search_note": "Existing probes checked: LHCb prompt A'->mumu (arXiv:1910.06926), BaBar visible gamma-A' (arXiv:1406.2980), CMS dimuon scouting 11.5-200 GeV (arXiv:1912.04776) -- all returned nulls that trim only the shared large-epsilon corner since R1's (M_Z', eps) box is a strict subset of R0's; LEP/EWPT kinetic-mixing fits (eps <~ 0.03 near m_Z) likewise cut identical corners; Fermi-LAT dwarf and H.E.S.S. Inner Galaxy soft-cascade limits sit ~5-10x above R1's relic-pinned 2-3e-26 cm^3/s; AMS-02 antiprotons (limit ~2e-25 cm^3/s at 500 GeV) sit a factor ~7 above R1 with factor 5-10 propagation systematics; Planck p_ann is ~50x too weak for 300-700 GeV s-wave; cluster self-interaction bounds miss by ~12 orders (sigma/m ~ 1e-12 cm^2/g); solar Z'-escape signatures are dead (eps >= 1e-6 gives c*tau <~ cm << R_sun); Z'-mediated inelastic DD is kinematically closed by the ~GeV portal-induced sr-si splitting in BOTH units. No recorded dataset assigns a unit.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Existing dark-photon dilepton searches (LHCb, BaBar, CMS)",
          "observable": "narrow prompt ll resonance, 0.02-200 GeV, epsilon >~ 2e-4 ?",
          "what_this_is": "The dark Z' boson in both regions mixes slightly with the photon, so it can be produced in particle collisions and decay to an electron or muon pair, appearing as a narrow bump in the pair's invariant-mass spectrum. LHCb and CMS at the Large Hadron Collider and the BaBar electron-positron experiment have already scanned masses from about 20 MeV to 200 GeV for exactly such bumps. Because the allowed Z' mass ranges of the two regions differ at their edges, this archival bump hunt is the natural first check -- and its recorded outcome everywhere is null.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1406.2980",
            "arXiv:1912.04776"
          ],
          "reasoning": "R1 has M_Z' in [8.3, 165] GeV; R0 has M_Z' in [1, 933] GeV; both span epsilon = 1e-6 to 0.1. The recorded searches (LHCb prompt A'->mumu, 0.214-70 GeV, excluding eps >~ 2e-4; BaBar visible gamma+A', 0.02-10.2 GeV, eps >~ 1e-3; CMS dimuon scouting, 11.5-200 GeV, eps >~ 1e-3..1e-2) all returned null. A bump in an R0-exclusive window (below ~8 GeV) would already have tagged R0, but none was seen; and because R1's (M_Z', eps) box is a strict subset of R0's, the null itself removes only the shared large-epsilon corner of BOTH units identically. Predicted value in each region: no observable resonance (every surviving point sits below the published limits by construction). Status: No Split.",
          "feasibility": "Existing, published data; it does NOT separate the units. The failure is structural -- total support overlap below 165 GeV plus an epsilon floor (1e-6) three orders of magnitude below any recorded reach -- not experimental. Dominant systematic in these searches is the smooth combinatorial dimuon continuum and the quarkonium veto windows, irrelevant to the null recorded here.",
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
          "name": "LHCb-U2 + HL-LHC dilepton scan of the R0-exclusive Z' mass windows",
          "observable": "narrow prompt ll resonance with m_ll in 1.1-8.0 GeV (eps >~ 7e-5) or 165-950 GeV (sigma.BR >~ 0.05 fb) ?",
          "what_this_is": "LHCb's planned Upgrade II will collect roughly sixty times its current dataset and re-run its inclusive dark-photon bump hunt in the few-GeV dimuon mass range, while the High-Luminosity LHC's ATLAS and CMS will push the search for heavier dilepton resonances a factor of several deeper. The key quantity is not whether a bump exists but WHERE it sits: the pure-Z2 region can only ever host a Z' between about 8 and 165 GeV, while the merged Z2+3+4+5 region allows masses from 1 GeV up to nearly a TeV. A confirmed resonance below 8 GeV or above 165 GeV can therefore only come from the merged region, so its measured mass decides.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1808.08865",
            "arXiv:1812.07831"
          ],
          "reasoning": "R1's viable Z' support is exactly [8.3, 165] GeV -- its gauge coupling is locked to the secluded thermal band (g' = 0.31-0.46 tracking sqrt(M_DM)), and the cluster contains no state outside that window -- so it predicts strictly zero signal in either exclusive window at any epsilon. R0 predicts, for its light corner, a narrow prompt dimuon peak anywhere in 1-8 GeV (outside the J/psi and psi(2S) vetoes) with sigma proportional to eps^2 and no invisible width (Z'->SS* closed since M_DM >= 317 GeV), visible for eps >~ 7e-5; and for its heavy corner a Drell-Yan resonance, e.g. M_Z' = 500 GeV with eps = 0.05 giving sigma.BR(ll) ~ 0.1-1 fb. About 56% of R0's log-mass range is exclusive (31% below 8.3 GeV, 25% above 165 GeV), so with the epsilon-visibility fraction folded in roughly a third of R0 fires YES. ONE-SIDED, stated plainly: a detection in either window is decisive for R0; a null only weakly favors R1, since true-R0 points in the shared 8.3-165 GeV window or with epsilon below reach follow the R1 branch, and there they differ from R1 only by the odd dark quartics (lambda_rrri, lambda_riii), four-dark-leg operators with no SM-visible vertex. The strongest follow-up on the null branch -- kept out of the tree only because this terminal carries one split and this scan is nearer -- is the CTA Galactic-halo search refit with a boosted-Z' four-fermion cascade template: R1's relic-pinned s-wave sigmav ~ 2-3e-26 cm^3/s in that soft spectrum, vs <~1e-27 for R0's bulk (p-wave Z'-portal, closed M_Z' > M_DM channel, or quartic-conversion-set relic), a next-generation, factor-~10 measurement whose 'seen' outcome would tag R1.",
          "feasibility": "Today-experiments: LHCb Run-2 prompt A'->mumu (5.4 fb^-1, arXiv:1910.06926) reaches eps ~ 2e-4 across 1-8 GeV; ATLAS/CMS narrow-dilepton searches at ~140 fb^-1 reach sigma.BR ~ 0.3-1 fb near 500 GeV. Required: eps ~ 7e-5 (LHCb Upgrade II, 300 fb^-1: prompt search is background-limited, eps^2 limit scales as 1/sqrt(L), x7.5 in rate = x2.7-3 in eps) and sigma.BR ~ 0.05-0.2 fb in the 165-950 GeV window (3 ab^-1, background-limited sqrt(L) scaling: factor ~5 in sigma.BR). Quoted improvement_factor = 3, in epsilon for the primary low-mass window. Both machines are approved upgrades of running facilities -- no new facility -- hence 'possible'. Dominant systematics: prompt combinatorial dimuon background and charmonium veto regions (light window); Drell-Yan continuum modeling under a narrow peak (heavy window); the mass measurement itself is trivial once a bump is seen.",
          "feasibility_rating": "possible",
          "improvement_factor": 3,
          "outcomes": [
            {
              "label": "resonance in exclusive window",
              "regions": [
                "R0"
              ]
            },
            {
              "label": "not seen",
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

<!-- g07_leaf-nnnyn.md -->

## Reasoning — leaf `root_no_no_no_yes_no` (1,158 pts, R0 + R1 + R2)

**LEP Z-pole invisible width and electroweak fit** (literature split). Kinetic mixing eps with hypercharge induces Z-Z' mass mixing with angle theta = eps*tan(theta_W)*m_Z^2/(m_Z^2 - m_Z'^2). R2 (eps = 0.1, m_Z' = 60.1-60.45 GeV) gives theta = 0.1*0.546*8315/4715 = 0.096, theta^2 = 9.3e-3. Its Z' is very wide into dark matter: Gamma(Z'->chi chi*) = (g'^2/48pi) m_Z' (1-4 m_DM^2/m_Z'^2)^(3/2) = (130.2/150.8)*60*0.98 = 51 GeV, since g_U1p = 11.41 (alpha' = 10.4) and m_Z'/2 = 30 GeV >> m_DM = 3.494 GeV. Leaking through the mixing this predicts Delta Gamma(Z->inv) = theta^2 * 51 GeV ~ 470 MeV, against the LEP measurement Gamma_inv = 499.0 +/- 1.5 MeV: a 100% excess. The Z mass shift theta^2 (m_Z^2 - m_Z'^2)/(2 m_Z) ~ 240 MeV independently dwarfs the 2.1 MeV LEP uncertainty on m_Z, and eps = 0.1 at 60 GeV exceeds the standard electroweak-fit bound eps <~ 0.03 for a 10-100 GeV dark photon by a factor ~3 in eps (~10 in eps^2). R0 at its characteristic point (eps ~ 3e-4, m_Z' ~ 8 GeV, g' ~ 0.5, geometric means of its log-uniform ranges) gives theta ~ 1.8e-4 and Gamma(Z'->chi chi*) ~ 12 MeV, hence Delta Gamma(Z->inv) ~ 4e-7 MeV. R1 (eps <= 7.4e-6, m_Z' = 1 GeV) gives theta ~ 4e-6, and its Z' has no invisible channel at all because m_Z' = 1 GeV < 2 m_DM >= 2 GeV, so it perturbs only the visible Z widths at the theta^2 ~ 1.6e-11 level, Delta Gamma ~ 1e-7 MeV. Predicted values: R2 ~ 470 MeV, R0 ~ 4e-7 MeV, R1 ~ 1e-7 MeV, against a 3 MeV (2-sigma) experimental cut. Marginality: R0's bounding box does reach eps = 0.1 and m_Z' = 62.9 GeV, so from the log-uniform draws roughly 5% of its points (eps >~ 0.03, ~10%, times m_Z' >~ 10 GeV, ~44%) are also LEP-excluded; the region characterised by its median passes by six orders of magnitude while R2, which is pinned at the corner, fails by two to three. Yes - the existing data already splits, and very cleanly: R2 is excluded by roughly two orders of magnitude in the invisible width (and >30 sigma even if one is conservative by a factor of ten), while R0 and R1 are unobservable at the 1e-7 MeV level. This is LEP-I data taken in the 1990s and permanently frozen; there is no statistical question. The dominant systematic is theoretical rather than experimental: the kinetic-mixing convention (mixing with hypercharge versus with the photon changes theta by a factor tan(theta_W) ~ 0.55) and, more seriously, the fact that R2's Z' has Gamma/m ~ 0.85 so the narrow-resonance mixing formula is only indicative - but no reasonable treatment of an 85%-wide 60 GeV state that mixes at the 10% level can hide a sub-MeV effect. This is a different observable from the catalog's Z'-dilepton recast, which is a hadron-collider resonance search and correctly sees nothing: a 60 GeV, ~50 GeV-wide, invisibly-decaying Z' is buried under Drell-Yan.

**Planck CMB energy injection at recombination** (literature split on R0 + R1). R1 is a textbook secluded WIMP (Pospelov-Ritz-Voloshin): m_DM = 1.0-1.40 GeV just above m_Z' = 1.0 GeV opens chi chi* -> Z'Z', s-wave for a scalar pair annihilating to two vectors. With alpha' = 5.8-7.7e-5, sigma v = pi alpha'^2/m^2 x (1-r^2)^(3/2)/(1-r^2/2)^2 ~ 5e-26 cm^3/s at the cluster midpoint (6e-26 at 1.4 GeV). This must be the relic-setting channel: R1's Z2 potential (s_r^4, s_r^2 s_i^2, s_i^4 only) has no number-changing dark self-interaction and the s-channel route is dead at eps ~ 1e-6, so the relic pins sigma v thermal for every point - confirmed empirically by the razor-thin g' band [0.027, 0.031]. Each Z' decays 100% visibly (invisible channel closed) with ctau ~ 0.4 mm-2 cm; with f_eff = 0.2-0.4, p_ann(R1) = 2e-27 to 3e-26 cm^3/s/GeV, a factor 6-90 above the Planck ceiling: excluded by data on disk. R0's bulk (~3/4 with m_Z' > m_DM) has the secluded channel closed; s-channel Z'* annihilation of scalar DM requires L = 1 (p-wave), suppressed by v^2 ~ 1e-16 at recombination -> p_ann <~ 1e-30; its relic rides the odd quartics alpha3 s_i s_r^3 and alpha5 s_i^3 s_r - genuine 3->1 number-changing vertices present only in the Z2+3+4+5 potential, injecting nothing visible; the shared Higgs portal at alpha1 ~ 1e-3 gives only p_ann ~ 2e-32. Predicted values: R1 ~ 2e-27 to 3e-26 (excluded), R0 <~ 1e-30 (allowed). The split thus lands on exactly the operator content distinguishing the two Lagrangians. Marginality, stated: R1 points with m_DM within a few percent of 1.00 GeV have the channel phase-space-throttled and would soften the exclusion (the bulk at 1.1-1.4 GeV is hit at full strength); the ~quarter of R0's log-volume with m_Z' < m_DM is s-wave like R1 and is impurity in the 'allowed' branch; and 'allowed' does not positively confirm R0. Existing data already splits: the Planck 2018 likelihood is published and final, and the two region-characteristic predictions straddle the bound by 6-90x (R1, over) versus 2+ orders (R0, under). Dominant systematic is f_eff for sub-GeV mixed ee/mumu/pion injection (factor ~2 from Slatyer's tables), far too small to bridge the margin. The one genuine model-dependence is the assumption of a symmetric thermal relic: an asymmetric R1 would evade the bound but would then lack any account of its abundance, since its Z2 potential offers no number-changing alternative. This is precisely where the catalog is blind: CTA/Fermi/IceCube have no reach at 1-1.4 GeV, and the CMB isolates the v -> 0 s-wave piece.
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_yes_no",
      "lit_search_note": "Beyond the splits above, the following were checked and do not partition: visible dark-photon production searches (BaBar prompt eps ~ 1e-4-1e-3 at 1 GeV, LHCb displaced confined below ~0.35-0.5 GeV, E137/NuCal/CHARM dumps losing reach above ~0.5-0.7 GeV) cannot touch R1's eps <= 7.4e-6 at m_Z' = 1 GeV with ctau ~ 2-3 cm; CMS dimuon scouting at 60 GeV fails on R2 (BR(mumu) ~ 3e-5, Gamma/M ~ 0.85, no bump); DM self-interaction sigma/m <= 6e-5 cm^2/g vs ~0.1-1 cm^2/g astrophysical sensitivity (>= 1e4 short); SN1987A cooling Boltzmann-dead for a >= 1 GeV mediator; N_eff/BBN harmless (Z' lifetime ~ 1e-11 s); DM-electron scattering (SENSEI/DAMIC-M) 6+ orders below reach at R1's parameters; Lyman-alpha irrelevant for cold >= 1 GeV DM.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "LEP Z-pole invisible width and electroweak fit",
          "observable": "Delta Gamma(Z -> inv) <= 3 MeV ?",
          "what_this_is": "LEP was an electron-positron collider at CERN that spent the 1990s producing millions of Z bosons and measuring the Z's mass and decay rates to about one part in a thousand, including how much of its decay rate goes into particles that leave no trace (the 'invisible width', which matches exactly three neutrino species). Any new neutral force carrier that mixes with the Z steals a little of the Z's identity, so if that new particle can decay into dark matter, some of the Z's decays become invisible too. Here one of the regions has a 60 GeV dark force carrier with a very large mixing and an enormous decay rate into dark matter, so it would have shifted the LEP numbers by a huge amount, while the other regions mix a thousand times more weakly and change nothing.",
          "refs": [
            "arXiv:hep-ex/0509008",
            "arXiv:1006.0973",
            "arXiv:1412.0018"
          ],
          "reasoning": "Kinetic mixing eps with hypercharge induces Z-Z' mass mixing with angle theta = eps*tan(theta_W)*m_Z^2/(m_Z^2 - m_Z'^2). R2 (eps = 0.1, m_Z' = 60.1-60.45 GeV) gives theta = 0.1*0.546*8315/4715 = 0.096, theta^2 = 9.3e-3. Its Z' is very wide into dark matter: Gamma(Z'->chi chi*) = (g'^2/48pi) m_Z' (1-4 m_DM^2/m_Z'^2)^(3/2) = (130.2/150.8)*60*0.98 = 51 GeV, since g_U1p = 11.41 (alpha' = 10.4) and m_Z'/2 = 30 GeV >> m_DM = 3.494 GeV. Leaking through the mixing this predicts Delta Gamma(Z->inv) = theta^2 * 51 GeV ~ 470 MeV, against the LEP measurement Gamma_inv = 499.0 +/- 1.5 MeV: a 100% excess. The Z mass shift theta^2 (m_Z^2 - m_Z'^2)/(2 m_Z) ~ 240 MeV independently dwarfs the 2.1 MeV LEP uncertainty on m_Z, and eps = 0.1 at 60 GeV exceeds the standard electroweak-fit bound eps <~ 0.03 for a 10-100 GeV dark photon by a factor ~3 in eps (~10 in eps^2). R0 at its characteristic point (eps ~ 3e-4, m_Z' ~ 8 GeV, g' ~ 0.5, geometric means of its log-uniform ranges) gives theta ~ 1.8e-4 and Gamma(Z'->chi chi*) ~ 12 MeV, hence Delta Gamma(Z->inv) ~ 4e-7 MeV. R1 (eps <= 7.4e-6, m_Z' = 1 GeV) gives theta ~ 4e-6, and its Z' has no invisible channel at all because m_Z' = 1 GeV < 2 m_DM >= 2 GeV, so it perturbs only the visible Z widths at the theta^2 ~ 1.6e-11 level, Delta Gamma ~ 1e-7 MeV. Predicted values: R2 ~ 470 MeV, R0 ~ 4e-7 MeV, R1 ~ 1e-7 MeV, against a 3 MeV (2-sigma) experimental cut. Marginality: R0's bounding box does reach eps = 0.1 and m_Z' = 62.9 GeV, so from the log-uniform draws roughly 5% of its points (eps >~ 0.03, ~10%, times m_Z' >~ 10 GeV, ~44%) are also LEP-excluded; the region characterised by its median passes by six orders of magnitude while R2, which is pinned at the corner, fails by two to three.",
          "feasibility": "Yes - the existing data already splits, and very cleanly: R2 is excluded by roughly two orders of magnitude in the invisible width (and >30 sigma even if one is conservative by a factor of ten), while R0 and R1 are unobservable at the 1e-7 MeV level. This is LEP-I data taken in the 1990s and permanently frozen; there is no statistical question. The dominant systematic is theoretical rather than experimental: the kinetic-mixing convention (mixing with hypercharge versus with the photon changes theta by a factor tan(theta_W) ~ 0.55) and, more seriously, the fact that R2's Z' has Gamma/m ~ 0.85 so the narrow-resonance mixing formula is only indicative - but no reasonable treatment of an 85%-wide 60 GeV state that mixes at the 10% level can hide a sub-MeV effect. This is a different observable from the catalog's Z'-dilepton recast, which is a hadron-collider resonance search and correctly sees nothing: a 60 GeV, ~50 GeV-wide, invisibly-decaying Z' is buried under Drell-Yan.",
          "outcomes": [
            {
              "label": "excluded",
              "regions": [
                "R2"
              ]
            },
            {
              "label": "allowed",
              "regions": [
                "R0",
                "R1"
              ]
            }
          ]
        },
        {
          "kind": "lit",
          "attach_to": "R0+R1",
          "name": "Planck CMB energy injection at recombination",
          "observable": "p_ann = f_eff <sigma v>/m_DM <= 3.2e-28 cm^3/s/GeV ?",
          "what_this_is": "The cosmic microwave background is the light released when the universe became transparent about 380,000 years after the Big Bang, and the Planck satellite mapped it to exquisite precision. If dark matter particles were still annihilating into ordinary particles at that epoch, the injected energy would have partly re-ionised the gas and measurably blurred the map, so Planck caps the annihilation power per unit dark-matter mass. Because the dark matter was then moving at a hundred-millionth of the speed of light, only annihilation that survives at zero velocity counts - and the two remaining regions differ in exactly that property: the small pinned region must annihilate at full strength into visible particles at all times to explain its abundance, while the broad region's annihilation switches off in the cold early universe.",
          "refs": [
            "arXiv:1807.06209",
            "arXiv:1506.03811",
            "arXiv:0711.4866"
          ],
          "reasoning": "R1 is a textbook secluded WIMP (Pospelov-Ritz-Voloshin): m_DM = 1.0-1.40 GeV just above m_Z' = 1.0 GeV opens chi chi* -> Z'Z', s-wave for a scalar pair annihilating to two vectors. With alpha' = 5.8-7.7e-5, sigma v = pi alpha'^2/m^2 x (1-r^2)^(3/2)/(1-r^2/2)^2 ~ 5e-26 cm^3/s at the cluster midpoint (6e-26 at 1.4 GeV). This must be the relic-setting channel: R1's Z2 potential (s_r^4, s_r^2 s_i^2, s_i^4 only) has no number-changing dark self-interaction and the s-channel route is dead at eps ~ 1e-6, so the relic pins sigma v thermal for every point - confirmed empirically by the razor-thin g' band [0.027, 0.031]. Each Z' decays 100% visibly (invisible channel closed) with ctau ~ 0.4 mm-2 cm; with f_eff = 0.2-0.4, p_ann(R1) = 2e-27 to 3e-26 cm^3/s/GeV, a factor 6-90 above the Planck ceiling: excluded by data on disk. R0's bulk (~3/4 with m_Z' > m_DM) has the secluded channel closed; s-channel Z'* annihilation of scalar DM requires L = 1 (p-wave), suppressed by v^2 ~ 1e-16 at recombination -> p_ann <~ 1e-30; its relic rides the odd quartics alpha3 s_i s_r^3 and alpha5 s_i^3 s_r - genuine 3->1 number-changing vertices present only in the Z2+3+4+5 potential, injecting nothing visible; the shared Higgs portal at alpha1 ~ 1e-3 gives only p_ann ~ 2e-32. Predicted values: R1 ~ 2e-27 to 3e-26 (excluded), R0 <~ 1e-30 (allowed). The split thus lands on exactly the operator content distinguishing the two Lagrangians. Marginality, stated: R1 points with m_DM within a few percent of 1.00 GeV have the channel phase-space-throttled and would soften the exclusion (the bulk at 1.1-1.4 GeV is hit at full strength); the ~quarter of R0's log-volume with m_Z' < m_DM is s-wave like R1 and is impurity in the 'allowed' branch; and 'allowed' does not positively confirm R0.",
          "feasibility": "Existing data already splits: the Planck 2018 likelihood is published and final, and the two region-characteristic predictions straddle the bound by 6-90x (R1, over) versus 2+ orders (R0, under). Dominant systematic is f_eff for sub-GeV mixed ee/mumu/pion injection (factor ~2 from Slatyer's tables), far too small to bridge the margin. The one genuine model-dependence is the assumption of a symmetric thermal relic: an asymmetric R1 would evade the bound but would then lack any account of its abundance, since its Z2 potential offers no number-changing alternative. This is precisely where the catalog is blind: CTA/Fermi/IceCube have no reach at 1-1.4 GeV, and the CMB isolates the v -> 0 s-wave piece.",
          "outcomes": [
            {
              "label": "excluded",
              "regions": [
                "R1"
              ]
            },
            {
              "label": "allowed",
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

<!-- g08_leaf-ynnyn.md -->

## Reasoning — leaf `root_yes_no_no_yes_no` (630 pts, R0 + R1)

**Dark-photon dimuon searches (LHCb, CMS scouting, BaBar)** (literature split). Both units predict a possible narrow visible Z' resonance with sigma.BR proportional to eps^2. R0 spans MZp = 1-246.2 GeV with eps = 1e-6 to 0.1; R1 spans MZp = 2.2-145.8 GeV with eps = 1.1e-6 to 0.085 - nested entirely inside R0. LHCb's prompt A'->mumu scan excludes eps >~ 5e-4-1e-3 in patches from threshold to 70 GeV, CMS dimuon scouting excludes eps >~ 4e-3-2e-2 over 11.5-200 GeV, and BaBar covers below 10.2 GeV at eps >~ 1e-3: every exclusion carves the identical high-eps slice from BOTH regions, and no peak exists in the data, so no outcome of the existing datasets assigns the units to different sides. Two honest caveats for the future, not the present: a peak measured above 146 GeV would one-sidedly tag R0 (a valid kinematic window - but no such peak exists today), and in R0's MZp > 2*MDM corner the dimuon branching ratio collapses by ~g_D^2/(eps^2 e^2), so even there the current null is uninformative. Status: No Split. Data already on tape; does NOT split these regions - the verdict is structural (R1's (MZp, eps) box is a strict subset of R0's), not sensitivity-limited. Dominant systematic in the searches themselves is the smooth Drell-Yan/quarkonium continuum shape under a narrow peak, irrelevant to the no-split conclusion.

**AMS-02 cosmic-ray antiproton DM fit** (literature split on R0 + R1). R1 (Z2) can only make the observed relic through secluded SS*->Z'Z' (the Higgs portal at alpha1 <= 0.011 gives sigma_v <~ 2e-27 cm^3/s, an order short), so relic pinning guarantees a present-day s-wave sigma_v ~ 2-3e-26 cm^3/s into Z'Z'->4f, ~55-60% hadronic, at every point. R0's characteristic configurations (closed channel MZp > MDM, or g' down to 0.043) predict ~0-1e-27, rising to the thermal value only in its R1-like corner. Published AMS-02 analyses limit bb-like channels to (1-3)e-26 cm^3/s at 100-300 GeV; the softer 4-body cascade spectrum weakens this by ~2x to roughly (2-6)e-26, which straddles R1's guaranteed band rather than cutting below it. Status: No Split - but it is the closest existing data, and it motivates the gamma-ray projection below, which shares the messenger physics with controllable systematics. No split from data in hand: the existing limit sits within a factor ~2 of R1's guaranteed band but cannot decisively exclude it, because the fit is dominated by correlated cosmic-ray propagation parameters, antiproton production cross-sections and solar modulation, which can absorb a thermal-strength cascade signal. Both regions remain allowed today.

**Fermi-LAT 15-yr + LSST dwarf stacking, secluded-cascade template** (literature projection on R0 + R1). R1 predicts a guaranteed sigma_v ~ (1-5)e-26 cm^3/s into Z'Z'->4f (relic-pinned: g'=0.10,M=110 -> 1.2e-26; g'=0.2,M=200 -> 1.9e-26; g'=0.31,M=307 -> 4.6e-26); R0's distinguishing configurations (closed Z'Z' channel with MZp>MDM, or g' down to 0.043) predict ~0 to 1e-27 cm^3/s. The cascade softens the spectrum so 100-300 GeV DM emits mostly at 3-15 GeV, keeping Fermi (not CTA) the right instrument. Marginal in one direction only: R0's box contains an R1-like thermal corner, so a detection does not exclude R0 - but a null limit below 1e-26 excludes all of R1. This is the narrowest R1 prediction available; parameter nesting makes a two-sided split impossible in principle. Not the catalog's Fermi15yr(WW) node: different spectral template (two-step 4-body cascade vs direct WW) and enlarged LSST-era dwarf stack. Today-experiment: Fermi-LAT 6-yr combined dwarf search, limit ~1e-25 cm^3/s at 200 GeV for bb-like spectra. Required: ~1e-26 cm^3/s over 100-300 GeV. Factor ~10, matching the collaboration's published 15-yr + ~45-dwarf projection; scaling assumed sqrt(t) in exposure (background-limited at few GeV) times linear gain in stacked J-factor from LSST-discovered dwarfs. Dominant systematic: dwarf J-factors (~factor 2). Rated possible: Fermi has >17 yr of data in hand, Rubin/LSST is operating, no new hardware needed - only the dedicated cascade template analysis.
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_no_yes_no",
      "lit_search_note": "Existing data swept: dark-photon dimuon scans (LHCb 0.214-70 GeV, CMS scouting 11.5-200 GeV, BaBar <10.2 GeV) carve only the eps >~ 5e-4-1e-2 top slice identically from both nested units; muon g-2 reaches only eps >~ 1.5e-2 at low MZp and its cut is HVP-theory-limited; LEP/EWPT Z-Z' mixing bites only eps >~ 3e-2 near MZ; Planck p_ann sits an order above both units' thermal s-wave injection with no Sommerfeld rescue (alpha_D*MDM < MZp where channels are open); beam dumps and far detectors have zero acceptance (c*tau <= 2 cm at the eps=1e-6 floor); secluded solar gammas need eps <~ 1.5e-11, five orders below the scan floor; DM-electron scattering is (mu_e/mu_n)^2-suppressed to ~1e-54 cm^2; every DD handle (isospin ratio, modulation, spectral shape) is blind because both units share the numerically identical Higgs-portal alpha1 band and the Z' vertex is purely off-diagonal (inelastic, GeV-split, closed). AMS-02 antiprotons come closest - within ~2x of R1's guaranteed cascade band - and are kept as the second no-split record. Post-split residue, physical and irreducible: on the 'thermal signal' branch R0's Z2-identical open-secluded corner mimics R1 exactly, and the only Lagrangian-level difference - the parity-odd dark quartics alpha3*si*sr^3, alpha5*si^3*sr (physical sums lambda_rrri, lambda_riii) - feeds no SM-facing vertex; its unique observable, the inelastic fraction of DM self-scattering at sigma/m <~ 1e-9 cm^2/g, is >=1e9 below cluster-scale sensitivity and channel-tagging is beyond any gravitational probe (recorded here rather than as an impossible node).",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Dark-photon dimuon searches (LHCb, CMS scouting, BaBar)",
          "observable": "narrow mumu (or ee) resonance, 0.2-200 GeV, eps >~ 1e-3 ?",
          "what_this_is": "Collider experiments have already combed their recorded data for a new short-lived particle decaying to a pair of muons or electrons, which would appear as a narrow bump on the smooth lepton-pair mass spectrum. That bump is the classic signature of a dark photon - a new gauge boson talking to ordinary matter only through a small kinetic mixing with the photon - and both regions here contain exactly such a particle. The recorded data, however, only reach mixing strengths at the very top of what either region predicts, so they cannot yet decide between them.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1912.04776",
            "arXiv:1406.2980"
          ],
          "reasoning": "Both units predict a possible narrow visible Z' resonance with sigma.BR proportional to eps^2. R0 spans MZp = 1-246.2 GeV with eps = 1e-6 to 0.1; R1 spans MZp = 2.2-145.8 GeV with eps = 1.1e-6 to 0.085 - nested entirely inside R0. LHCb's prompt A'->mumu scan excludes eps >~ 5e-4-1e-3 in patches from threshold to 70 GeV, CMS dimuon scouting excludes eps >~ 4e-3-2e-2 over 11.5-200 GeV, and BaBar covers below 10.2 GeV at eps >~ 1e-3: every exclusion carves the identical high-eps slice from BOTH regions, and no peak exists in the data, so no outcome of the existing datasets assigns the units to different sides. Two honest caveats for the future, not the present: a peak measured above 146 GeV would one-sidedly tag R0 (a valid kinematic window - but no such peak exists today), and in R0's MZp > 2*MDM corner the dimuon branching ratio collapses by ~g_D^2/(eps^2 e^2), so even there the current null is uninformative. Status: No Split.",
          "feasibility": "Data already on tape; does NOT split these regions - the verdict is structural (R1's (MZp, eps) box is a strict subset of R0's), not sensitivity-limited. Dominant systematic in the searches themselves is the smooth Drell-Yan/quarkonium continuum shape under a narrow peak, irrelevant to the no-split conclusion.",
          "outcomes": [
            {
              "label": "no peak in existing data",
              "regions": [
                "R0",
                "R1"
              ]
            }
          ]
        },
        {
          "kind": "lit",
          "attach_to": "R0+R1",
          "name": "AMS-02 cosmic-ray antiproton DM fit",
          "observable": "sigma_v(hadronic cascades) < 5e-26 cm^3/s at m_DM 100-300 GeV ?",
          "what_this_is": "The AMS-02 spectrometer on the International Space Station has measured the cosmic-ray antiproton flux to percent-level precision. Dark matter annihilating into a pair of dark Z' bosons that decay mostly to quarks would add a bump of antiprotons on top of the astrophysical background, so this is the existing dataset that comes closest to testing the one region whose relic abundance forces it to annihilate at full thermal strength into exactly such hadron-rich final states. It brushes that prediction without being able to confirm or exclude it.",
          "refs": [
            "arXiv:1610.03071",
            "arXiv:1712.00002"
          ],
          "reasoning": "R1 (Z2) can only make the observed relic through secluded SS*->Z'Z' (the Higgs portal at alpha1 <= 0.011 gives sigma_v <~ 2e-27 cm^3/s, an order short), so relic pinning guarantees a present-day s-wave sigma_v ~ 2-3e-26 cm^3/s into Z'Z'->4f, ~55-60% hadronic, at every point. R0's characteristic configurations (closed channel MZp > MDM, or g' down to 0.043) predict ~0-1e-27, rising to the thermal value only in its R1-like corner. Published AMS-02 analyses limit bb-like channels to (1-3)e-26 cm^3/s at 100-300 GeV; the softer 4-body cascade spectrum weakens this by ~2x to roughly (2-6)e-26, which straddles R1's guaranteed band rather than cutting below it. Status: No Split - but it is the closest existing data, and it motivates the gamma-ray projection below, which shares the messenger physics with controllable systematics.",
          "feasibility": "No split from data in hand: the existing limit sits within a factor ~2 of R1's guaranteed band but cannot decisively exclude it, because the fit is dominated by correlated cosmic-ray propagation parameters, antiproton production cross-sections and solar modulation, which can absorb a thermal-strength cascade signal. Both regions remain allowed today.",
          "outcomes": [
            {
              "label": "no decisive excess or exclusion",
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
          "name": "Fermi-LAT 15-yr + LSST dwarf stacking, secluded-cascade template",
          "observable": "sigma_v(Z'Z'->4f) limit < 1e-26 cm^3/s at 100-300 GeV ?",
          "what_this_is": "The Fermi Large Area Telescope is a gamma-ray satellite that stares at dwarf spheroidal galaxies - small, dark-matter-dominated satellites of the Milky Way with almost no ordinary gamma-ray emission, making them the cleanest places to look for dark-matter annihilation. Here two dark-matter particles annihilate into a pair of dark Z' bosons, each of which decays to quarks and leptons; the resulting two-step cascade produces a soft, broad gamma-ray spectrum peaking at a few GeV, right where Fermi is most sensitive. The Z2 region must produce this signal at full thermal strength to explain the relic abundance, while the characteristic configurations of the Z2+3+4+5 region predict far less, so pushing the dwarf limit below thermal strength cleanly separates them.",
          "refs": [
            "arXiv:1503.02641",
            "arXiv:1605.02016"
          ],
          "reasoning": "R1 predicts a guaranteed sigma_v ~ (1-5)e-26 cm^3/s into Z'Z'->4f (relic-pinned: g'=0.10,M=110 -> 1.2e-26; g'=0.2,M=200 -> 1.9e-26; g'=0.31,M=307 -> 4.6e-26); R0's distinguishing configurations (closed Z'Z' channel with MZp>MDM, or g' down to 0.043) predict ~0 to 1e-27 cm^3/s. The cascade softens the spectrum so 100-300 GeV DM emits mostly at 3-15 GeV, keeping Fermi (not CTA) the right instrument. Marginal in one direction only: R0's box contains an R1-like thermal corner, so a detection does not exclude R0 - but a null limit below 1e-26 excludes all of R1. This is the narrowest R1 prediction available; parameter nesting makes a two-sided split impossible in principle. Not the catalog's Fermi15yr(WW) node: different spectral template (two-step 4-body cascade vs direct WW) and enlarged LSST-era dwarf stack.",
          "feasibility": "Today-experiment: Fermi-LAT 6-yr combined dwarf search, limit ~1e-25 cm^3/s at 200 GeV for bb-like spectra. Required: ~1e-26 cm^3/s over 100-300 GeV. Factor ~10, matching the collaboration's published 15-yr + ~45-dwarf projection; scaling assumed sqrt(t) in exposure (background-limited at few GeV) times linear gain in stacked J-factor from LSST-discovered dwarfs. Dominant systematic: dwarf J-factors (~factor 2). Rated possible: Fermi has >17 yr of data in hand, Rubin/LSST is operating, no new hardware needed - only the dedicated cascade template analysis.",
          "feasibility_rating": "possible",
          "improvement_factor": 10,
          "outcomes": [
            {
              "label": "thermal signal",
              "regions": [
                "R1"
              ]
            },
            {
              "label": "no signal",
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

<!-- g09_leaf-ynnyy.md -->

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

---

<!-- g10_leaf-ynyyyyn.md -->

## Reasoning — leaf `root_yes_no_yes_yes_yes_yes_no` (426 pts, R0 + R1 + R2 + R3 + R4)

**Existing dark-photon searches (BaBar + LHCb dimuon)** (literature split). R0 is the only unit with a second neutral gauge boson; R1-R4 predict exactly zero dilepton bumps off the Z pole at any luminosity. R0 predicts a prompt resonance at m(ll) = MZp (its Z' decays within cm everywhere in the scan) with rate proportional to eps^2, but its viable box spans eps in [1e-6, 0.1] and MZp in [1, 1e4] GeV while published sensitivity stops at sigma.BR ~ few fb (eps ~ 1e-3) below 70 GeV. The observed null is therefore the predicted outcome of all five units: no split. Two things make this record worth its node: (i) in R0's untouched corner (heavy MZp, or tiny eps and gD) the Lagrangian reduces exactly to R1-R3's, which is why no null result can ever remove R0 from this leaf -- the degeneracy is confirmable but not excludable; (ii) the scan's viability filter applied no low-mass dark-photon bound, so a free recast of these published limits onto R0's (MZp, eps) plane already prunes its eps >~ 1e-3, MZp <~ 70 GeV corner and sharpens the projection below, without splitting the unit. Data published (BaBar visible A' -> ll; LHCb prompt A' -> mumu, most stringent for 10.6-70 GeV); the result does NOT split: every unit is consistent with the null because R0's mixing range extends three decades below reach and R1-R4 predict nothing. Dominant systematic in these searches -- the smooth dimuon continuum shape -- is irrelevant at region level; the limitation is coverage of R0's decoupling corner, which produces no signal by construction.

**LHCb Upgrade II + Belle II dark-photon scan** (literature projection on R0 + R1 + R2 + R3 + R4). R1-R4: identically zero at any sensitivity -- no second U(1) exists in those Lagrangians. R0: for the sub-volume with 1 < MZp < 70 GeV (~46% of its log-prior) and eps >~ 1e-4..3e-4, sigma(pp -> A'X).BR(mumu) is ~0.05 fb to tens of fb at LHCb, and e+e- -> gamma A' is fb-scale at Belle II below ~8 GeV -- a detectable bump whose position measures MZp directly. ONE-SIDED and stated: 'seen' is decisive for R0 (no other unit can fire it), while 'not seen' does not exclude R0's decoupled corners (eps -> 1e-6, or MZp in the 70 GeV-10 TeV half) -- R0 contains the exact observational limit of R1-R3, so this leaf's Lagrangian degeneracy is confirmable but never fully excludable; R0 is assigned to 'seen' per the kinematic-window rule. Runner-up considered for this slot: a Fermi+LSST stacked-dwarf search with a Z'Z' cascade template (also rated possible, factor ~4) would fire on R0's s-wave secluded corner at (0.5-2)e-26 cm3/s, but its 1-4x margin is the same size as its factor-2 J-factor systematic and a detection would not measure MZp, so the dimuon scan is kept. Today-experiments: LHCb Run 2 prompt A'->mumu at 5.5 fb-1 (sigma.BR sensitivity ~ few fb over 1-70 GeV) and BaBar (eps ~ 1e-3 below 10 GeV). Projections: inclusive LHCb search at 15-300 fb-1 through Upgrade II reaches eps^2 ~ 1e-7..1e-8; Belle II at 50 ab-1 reaches eps ~ 3e-4 below ~8 GeV. In the observable itself, background-limited sqrt(L) scaling from ~6 to 300 fb-1 gives ~7x, plus software-trigger and PID gains: factor ~10 in sigma.BR, to ~0.5 fb. LHCb Upgrade II is within the approved LHCb program and Belle II is running -- no new facility. Dominant systematic: modeling the smooth Drell-Yan and meson-decay dimuon continuum under a narrow peak, plus vetoed SM-resonance windows.

**Higgs-factory invisible width vs sigma_SI** (literature projection on R1 + R2 + R3 + R4). Parameter-free ratio test. For a scalar Higgs portal at fixed (lambda, m): sigma_SI per particle is identical for real and complex scalars, while Gamma(h->inv) is 2x for the complex case -- either both components couple (two final states), or only sr couples and quartic-mediated equilibration puts ~half the local density in the non-scattering si, halving the DD rate per unit width; both readings give the same factor 2. Predicted values at the leaf's measured sigma_SI (~5e-48 to 5e-47 cm^2, consistent with lambda ~ 0.0022 at m ~ 92 GeV) and m in [91.6, 94.9] GeV: R1, R2, R3 sit at ~2x the published real-scalar-portal BR(h->inv) translation; R4 sits at ~1x. The 5% mass spread between regions shifts the ratio by < 10%, negligible against the factor 2. Marginality: within BR bin 0.0032-0.01, the test is 2-5 sigma near the top and marginal at the bottom. Not a refinement of the catalog's BR thresholds: the discrimination lives in the correlation with sigma_SI, not a finer BR cut. No novel alternative at rating 'possible' was found (annual modulation, directionality, ID flux normalization all fail or need catalog observables), so none is reported. Today: ATLAS combination BR(h->inv) < 0.107 at 95% CL (2301.10731). Required: absolute BR_inv measurement at the (1-2)e-3 level to resolve factor 2 inside the 0.32-1% bin; FCC-ee/ILC project sigma(BR_inv) ~ 0.1-0.2% (1905.03764). Factor ~ 0.107/0.003 ~ 35; statistics-limited sqrt(L) scaling at the lepton collider assumed. Dominant systematic: the local DM density rho_0 (+-20-30%) normalizing sigma_SI, comparable to the factor 2 -- Gaia-era vertical-kinematics determinations reduce it toward +-10%, preserving the test. Requires a new e+e- facility: next generation.

**DM self-interaction from cluster halo shapes** (literature projection on R1 + R2 + R3). R1, R2 and R3 have the same Lagrangian, masses agreeing to 0.8% and portal couplings agreeing to 15%. They differ only in the quartic self-couplings among the dark scalars, which connect to nothing in the Standard Model. For a contact quartic lambda, sigma/m = lambda^2/(128 pi m^3) = 6e-11 cm^2/g at lambda = 10 and m = 94.5 GeV. Predicted values: R1 has the s_r^4 combination alpha2+alpha7+alpha12 bounded below at ~2.3, giving sigma/m >~ 3e-12 cm^2/g and up to ~6e-10; R2 spans 0.15-10 in the same combination, giving 3e-14 to 6e-11; R3 spans 0.05-10 with its s_i self-couplings pinned tiny (alpha6 <= 0.007, alpha11 <= 0.06, alpha7 at the 1e-3 floor), giving 1e-14 to 6e-11. MARGINAL AND ONE-SIDED, flagged: only R1 carries a guaranteed floor, so only a measured value below 3e-12 cm^2/g would exclude it; the upper ranges of all three overlap, and R2 and R3 are not separated from each other by this or by any other observable I could construct. Nothing is chained below this node. Today-experiment: the Bullet Cluster 1E 0657-56 dark-matter/gas offset and numerical simulations give sigma/m < ~1 cm^2/g (arXiv:0704.0261), with cluster-merger and halo-shape ensembles now reaching ~0.2 cm^2/g (reviewed in arXiv:1705.02358). Required: 3e-12 cm^2/g. Factor ~1e11. No scaling from exposure or luminosity applies - this is an astrophysical dynamical measurement, and the relevant scattering rate in a cluster core at 1e-12 cm^2/g corresponds to far less than one scattering per particle per Hubble time, so no system anywhere in the observable Universe responds to it. That is a hard floor, not a funding limitation, which is why the rating is impossible even though a factor of 1e11 could in other contexts be argued down. Dominant systematic in the existing measurement: the degeneracy between self-interaction and the assumed merger geometry and infall velocity, which is what limits current bounds to a factor of a few - entirely irrelevant at the level required here. I looked for a better-rated novel alternative on the same partition (dark-sector 4->2 number-changing freeze-out, which is suppressed by lambda^4/m^8 and utterly negligible at 94 GeV; low-scale dark Landau-pole phenomenology, which is not an observable; and bosonic-dark-matter neutron-star collapse, which is void because every quartic here far exceeds the ~1e-15 repulsive coupling that halts collapse) and found none.
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_yes_yes_no",
      "lit_search_note": "Existing data checked and non-splitting: BaBar/LHCb dark-photon dimuon nulls (recorded as the lit node; R0 spans eps down to 1e-6, three decades below reach); Fermi-LAT 14-yr dwarf stack (R0's loudest s-wave secluded corner sits at ~1x the ~1-2e-26 cm3/s limit, pure-portal units 20-50x below -> no unit excluded); Planck p_ann < 3.2e-28 cm3/s/GeV (all predictions below; portal units by 3-4 decades); LEP/EWPO kinetic-mixing fits (bite only eps >~ 1e-2 near m_Z, interior to R0); LHC Higgs-coupling fits and mono-jet/VBF+MET (alpha1^2 ~ 6e-6, invisible); Xe/Ar isospin ratio (returns isoscalar for every unit: the Z'-mediated vertex is off-diagonal, hence inelastic with a ~GeV splitting and kinematically closed, so no Z' elastic amplitude exists); cluster self-interaction bounds (~10 orders above every prediction); SN1987A/Neff (void, M_Zp >= 1 GeV); displaced/far-detector searches (void, c*tau <= 2 cm everywhere in the scan).",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Existing dark-photon searches (BaBar + LHCb dimuon)",
          "observable": "narrow prompt l+l- resonance, 0.2-70 GeV, sigma.BR >~ 2 fb ?",
          "what_this_is": "BaBar (an electron-positron collider experiment) and LHCb (a forward detector at the Large Hadron Collider) have already searched their recorded data for a new short-lived particle decaying to an electron or muon pair, which would appear as a narrow bump in the dilepton mass spectrum -- the classic signature of a 'dark photon' that mixes slightly with the ordinary photon. Exactly one of the five surviving dark-matter models contains such a particle, so these are the sharpest existing data that could have separated them. Both searches saw nothing, and because the surviving points of that one model extend to mixings a thousand times below today's reach, the null result is consistent with every model here.",
          "refs": [
            "arXiv:1406.2980",
            "arXiv:1710.02867",
            "arXiv:1910.06926"
          ],
          "reasoning": "R0 is the only unit with a second neutral gauge boson; R1-R4 predict exactly zero dilepton bumps off the Z pole at any luminosity. R0 predicts a prompt resonance at m(ll) = MZp (its Z' decays within cm everywhere in the scan) with rate proportional to eps^2, but its viable box spans eps in [1e-6, 0.1] and MZp in [1, 1e4] GeV while published sensitivity stops at sigma.BR ~ few fb (eps ~ 1e-3) below 70 GeV. The observed null is therefore the predicted outcome of all five units: no split. Two things make this record worth its node: (i) in R0's untouched corner (heavy MZp, or tiny eps and gD) the Lagrangian reduces exactly to R1-R3's, which is why no null result can ever remove R0 from this leaf -- the degeneracy is confirmable but not excludable; (ii) the scan's viability filter applied no low-mass dark-photon bound, so a free recast of these published limits onto R0's (MZp, eps) plane already prunes its eps >~ 1e-3, MZp <~ 70 GeV corner and sharpens the projection below, without splitting the unit.",
          "feasibility": "Data published (BaBar visible A' -> ll; LHCb prompt A' -> mumu, most stringent for 10.6-70 GeV); the result does NOT split: every unit is consistent with the null because R0's mixing range extends three decades below reach and R1-R4 predict nothing. Dominant systematic in these searches -- the smooth dimuon continuum shape -- is irrelevant at region level; the limitation is coverage of R0's decoupling corner, which produces no signal by construction.",
          "outcomes": [
            {
              "label": "no excess (observed)",
              "regions": [
                "R0",
                "R1",
                "R2",
                "R3",
                "R4"
              ]
            }
          ]
        },
        {
          "kind": "lit_projection",
          "attach_to": "R0+R1+R2+R3+R4",
          "name": "LHCb Upgrade II + Belle II dark-photon scan",
          "observable": "narrow prompt l+l- resonance, 1-70 GeV, sigma.BR > 0.5 fb ?",
          "what_this_is": "LHCb's upgraded detector will re-run its dark-photon bump hunt with about fifty times more collisions and a trigger that keeps every muon pair, while Belle II in Japan scans the 1-10 GeV window in electron-positron collisions; together they push sensitivity to a new dilepton resonance roughly ten times deeper in rate. Such a resonance away from the Z pole can only be produced by the one model containing a dark U(1) gauge boson, so a bump anywhere in this window identifies that model outright and simultaneously measures the new boson's mass. This low-mass window is invisible to the high-mass LHC dilepton projection already in our catalog.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1603.08926",
            "arXiv:1808.10567"
          ],
          "reasoning": "R1-R4: identically zero at any sensitivity -- no second U(1) exists in those Lagrangians. R0: for the sub-volume with 1 < MZp < 70 GeV (~46% of its log-prior) and eps >~ 1e-4..3e-4, sigma(pp -> A'X).BR(mumu) is ~0.05 fb to tens of fb at LHCb, and e+e- -> gamma A' is fb-scale at Belle II below ~8 GeV -- a detectable bump whose position measures MZp directly. ONE-SIDED and stated: 'seen' is decisive for R0 (no other unit can fire it), while 'not seen' does not exclude R0's decoupled corners (eps -> 1e-6, or MZp in the 70 GeV-10 TeV half) -- R0 contains the exact observational limit of R1-R3, so this leaf's Lagrangian degeneracy is confirmable but never fully excludable; R0 is assigned to 'seen' per the kinematic-window rule. Runner-up considered for this slot: a Fermi+LSST stacked-dwarf search with a Z'Z' cascade template (also rated possible, factor ~4) would fire on R0's s-wave secluded corner at (0.5-2)e-26 cm3/s, but its 1-4x margin is the same size as its factor-2 J-factor systematic and a detection would not measure MZp, so the dimuon scan is kept.",
          "feasibility": "Today-experiments: LHCb Run 2 prompt A'->mumu at 5.5 fb-1 (sigma.BR sensitivity ~ few fb over 1-70 GeV) and BaBar (eps ~ 1e-3 below 10 GeV). Projections: inclusive LHCb search at 15-300 fb-1 through Upgrade II reaches eps^2 ~ 1e-7..1e-8; Belle II at 50 ab-1 reaches eps ~ 3e-4 below ~8 GeV. In the observable itself, background-limited sqrt(L) scaling from ~6 to 300 fb-1 gives ~7x, plus software-trigger and PID gains: factor ~10 in sigma.BR, to ~0.5 fb. LHCb Upgrade II is within the approved LHCb program and Belle II is running -- no new facility. Dominant systematic: modeling the smooth Drell-Yan and meson-decay dimuon continuum under a narrow peak, plus vetoed SM-resonance windows.",
          "feasibility_rating": "possible",
          "improvement_factor": 10,
          "outcomes": [
            {
              "label": "bump seen",
              "regions": [
                "R0"
              ]
            },
            {
              "label": "not seen",
              "regions": [
                "R1",
                "R2",
                "R3",
                "R4"
              ]
            }
          ]
        },
        {
          "kind": "lit_projection",
          "attach_to": "R1+R2+R3+R4",
          "name": "Higgs-factory invisible width vs sigma_SI",
          "observable": "BR(h->inv) >= 1.5x real-scalar-portal value at measured sigma_SI ?",
          "what_this_is": "A future electron-positron 'Higgs factory' (FCC-ee or ILC) would measure the fraction of Higgs bosons decaying invisibly to per-mille precision, far beyond the LHC. Comparing that number with the dark-matter scattering rate already seen in the underground xenon and argon detectors tests how many dark particles share the Higgs coupling: a complex scalar (two degrees of freedom) gives twice the invisible width per unit of scattering cross section that a real scalar (one degree of freedom) gives. That factor of two is exactly what separates the complex-scalar regions from the real-scalar region here.",
          "refs": [
            "arXiv:2301.10731",
            "arXiv:1905.03764"
          ],
          "reasoning": "Parameter-free ratio test. For a scalar Higgs portal at fixed (lambda, m): sigma_SI per particle is identical for real and complex scalars, while Gamma(h->inv) is 2x for the complex case -- either both components couple (two final states), or only sr couples and quartic-mediated equilibration puts ~half the local density in the non-scattering si, halving the DD rate per unit width; both readings give the same factor 2. Predicted values at the leaf's measured sigma_SI (~5e-48 to 5e-47 cm^2, consistent with lambda ~ 0.0022 at m ~ 92 GeV) and m in [91.6, 94.9] GeV: R1, R2, R3 sit at ~2x the published real-scalar-portal BR(h->inv) translation; R4 sits at ~1x. The 5% mass spread between regions shifts the ratio by < 10%, negligible against the factor 2. Marginality: within BR bin 0.0032-0.01, the test is 2-5 sigma near the top and marginal at the bottom. Not a refinement of the catalog's BR thresholds: the discrimination lives in the correlation with sigma_SI, not a finer BR cut. No novel alternative at rating 'possible' was found (annual modulation, directionality, ID flux normalization all fail or need catalog observables), so none is reported.",
          "feasibility": "Today: ATLAS combination BR(h->inv) < 0.107 at 95% CL (2301.10731). Required: absolute BR_inv measurement at the (1-2)e-3 level to resolve factor 2 inside the 0.32-1% bin; FCC-ee/ILC project sigma(BR_inv) ~ 0.1-0.2% (1905.03764). Factor ~ 0.107/0.003 ~ 35; statistics-limited sqrt(L) scaling at the lepton collider assumed. Dominant systematic: the local DM density rho_0 (+-20-30%) normalizing sigma_SI, comparable to the factor 2 -- Gaia-era vertical-kinematics determinations reduce it toward +-10%, preserving the test. Requires a new e+e- facility: next generation.",
          "feasibility_rating": "next generation",
          "improvement_factor": 35,
          "outcomes": [
            {
              "label": "2x (complex)",
              "regions": [
                "R1",
                "R2",
                "R3"
              ]
            },
            {
              "label": "1x (real)",
              "regions": [
                "R4"
              ]
            }
          ]
        },
        {
          "kind": "lit_projection",
          "attach_to": "R1+R2+R3",
          "name": "DM self-interaction from cluster halo shapes",
          "observable": "sigma_self/m >= 3e-12 cm^2/g ?",
          "what_this_is": "If dark-matter particles scatter off each other, colliding galaxy clusters and the shapes of dark-matter haloes are altered: the dark matter lags behind or is puffed into a rounder shape. Comparing the offset between the dark matter and the hot gas in merging clusters, and the ellipticity of relaxed haloes, bounds the self-scattering cross-section per unit dark-matter mass. It is the only observable that responds to interactions purely internal to the dark sector, which is the only thing that distinguishes these three candidates.",
          "refs": [
            "arXiv:0704.0261",
            "arXiv:1705.02358"
          ],
          "reasoning": "R1, R2 and R3 have the same Lagrangian, masses agreeing to 0.8% and portal couplings agreeing to 15%. They differ only in the quartic self-couplings among the dark scalars, which connect to nothing in the Standard Model. For a contact quartic lambda, sigma/m = lambda^2/(128 pi m^3) = 6e-11 cm^2/g at lambda = 10 and m = 94.5 GeV. Predicted values: R1 has the s_r^4 combination alpha2+alpha7+alpha12 bounded below at ~2.3, giving sigma/m >~ 3e-12 cm^2/g and up to ~6e-10; R2 spans 0.15-10 in the same combination, giving 3e-14 to 6e-11; R3 spans 0.05-10 with its s_i self-couplings pinned tiny (alpha6 <= 0.007, alpha11 <= 0.06, alpha7 at the 1e-3 floor), giving 1e-14 to 6e-11. MARGINAL AND ONE-SIDED, flagged: only R1 carries a guaranteed floor, so only a measured value below 3e-12 cm^2/g would exclude it; the upper ranges of all three overlap, and R2 and R3 are not separated from each other by this or by any other observable I could construct. Nothing is chained below this node.",
          "feasibility": "Today-experiment: the Bullet Cluster 1E 0657-56 dark-matter/gas offset and numerical simulations give sigma/m < ~1 cm^2/g (arXiv:0704.0261), with cluster-merger and halo-shape ensembles now reaching ~0.2 cm^2/g (reviewed in arXiv:1705.02358). Required: 3e-12 cm^2/g. Factor ~1e11. No scaling from exposure or luminosity applies - this is an astrophysical dynamical measurement, and the relevant scattering rate in a cluster core at 1e-12 cm^2/g corresponds to far less than one scattering per particle per Hubble time, so no system anywhere in the observable Universe responds to it. That is a hard floor, not a funding limitation, which is why the rating is impossible even though a factor of 1e11 could in other contexts be argued down. Dominant systematic in the existing measurement: the degeneracy between self-interaction and the assumed merger geometry and infall velocity, which is what limits current bounds to a factor of a few - entirely irrelevant at the level required here. I looked for a better-rated novel alternative on the same partition (dark-sector 4->2 number-changing freeze-out, which is suppressed by lambda^4/m^8 and utterly negligible at 94 GeV; low-scale dark Landau-pole phenomenology, which is not an observable; and bosonic-dark-matter neutron-star collapse, which is void because every quartic here far exceeds the ~1e-15 repulsive coupling that halts collapse) and found none.",
          "feasibility_rating": "impossible",
          "improvement_factor": 100000000000,
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
                "R2",
                "R3"
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

<!-- g11_leaf-ynyynny.md -->

## Reasoning — leaf `root_yes_no_yes_yes_no_no_yes` (159 pts, R0 + R1 + R2 + R3 + R4)

**LHCb/CMS prompt dark-photon dimuon search** (literature split). R1: MZp = 21-24 GeV with eps in [9.4e-5, 1.5e-2] (eps^2 in [8.8e-9, 2.4e-4]); Z'->DM DM is kinematically closed (MDM ~ 92 GeV > MZp/2), so BR(Z'->SM) = 1 with BR(mumu) ~ 10%. Published prompt-A' sensitivity at this mass is eps^2 ~ 1-2e-6 (LHCb 1910.06926; CMS 1912.04776 covers 11.5-45 GeV), so the upper ~half of R1's log-range in eps is visible or excluded with existing data, and LHCb Upgrade II (eps -> ~3e-4) covers most of the remainder. R0: eps^2 <= 3e-9, three orders below reach -- nothing. R2: MZp = 0.85-10 TeV, outside this window; its high-mass dilepton signal is the catalog's own recast, already applied and passed. R3/R4: no Z', exactly zero. Marginality: the low-eps tail of R1 (eps < ~3e-4) is not covered even by Upgrade II; as a unit R1 is still the only region that can fire. Splits now for a large part of R1: the data are published, the analysis exists, and eps^2 down to ~1e-6 at 22 GeV is on the books. Dominant systematic is the smoothness of the Drell-Yan + heavy-flavour dimuon continuum used for the bump hunt, well controlled at this mass (away from the Upsilon region).

**CTA Galactic-Centre cascade-continuum search** (literature projection on R0 + R2 + R3 + R4). R0 is the only unit with an unsuppressed annihilation channel: SS*->Z'Z' is open for every point (MZp = 1-80 GeV < MDM >= 92 GeV) and s-wave, with g' up to 0.16; because the pooled Z2+3+4+5 rate is not relic-pinned, the present-day sigmav spans orders of magnitude up to the ~2e-26 cm^3/s thermal ceiling, with a featureless multi-step cascade spectrum cutting off at ~93 GeV. R3/R4 annihilate only through the portal with alpha1 ~ 0.002, giving sigmav ~ 1e-29 cm^3/s - invisible to any foreseeable instrument. R2's s-channel Z' exchange into SM fermions is both eps-suppressed and p-wave (v^2 ~ 1e-6 today), far below the 2e-27 cut. One-sided direction stated: the small-g'/underabundant tail of R0 (signal ~ f^2 sigmav) also lands in 'nothing', so the null branch does not exclude R0; the relic-dominant bulk is covered and a detected 93 GeV-endpoint soft continuum is unambiguous R0. Today-experiment: Fermi-LAT 6-yr dwarf-spheroidal stacking, ~2e-26 cm^3/s for soft hadronic spectra at ~93 GeV - exactly at R0's ceiling, which is why no lit split exists on this axis. Required: ~2e-27 cm^3/s, a factor ~10 in sigmav, matching the published CTA Galactic-Centre projection at ~100 GeV (Einasto, 500h; background-limited, sensitivity ~ sqrt(t)). CTA is a funded next-generation facility under construction. Dominant systematic: the inner-halo density profile - a strongly cored profile costs up to an order of magnitude - plus Galactic diffuse-emission modeling. No novel 'possible'-rated alternative found: the only cheaper route is a Fermi cascade-template refit, which stalls at ~2e-26 (see improvement_attempts).

**FCC-ee Tera-Z electroweak precision fit** (literature projection on R2 + R3 + R4). Z-Z' kinetic mixing shifts sin^2(theta_eff) by ~ eps^2 (M_Z/M_Z')^2 x O(0.1-1). R2 (MZp = 0.85-10 TeV, eps = 1.9e-4 to 0.1) predicts ~1e-5 to 1e-4 at (eps=0.1, MZp=850 GeV), well above FCC-ee's ~5e-6 precision; the covered slice is eps >~ 0.04 x (MZp/TeV) - the top decade of R2's mixing range - while the low-eps/high-mass bulk (e.g. eps = 2e-4 at 10 TeV, shift ~1e-9) stays invisible. One-sided direction stated: a null does not exclude R2 as a unit; a coherent shift selects it uniquely, since R0 (eps <= 5.4e-5, light Z') predicts < 1e-9 and R3/R4 exactly zero. The current global fit only grazes eps >~ 0.03-0.05 at TeV masses, which is why no lit split exists on this axis (the viability filter applied no EWPT bound, so R2's extreme corner survives in the scan). Today: sin^2(theta_eff) known to 1.6e-4 (LEP+SLD); FCC-ee Tera-Z projects ~5e-6 with ~6e12 Z decays - factor ~30 in the observable itself, statistics-rich with beam-energy calibration by resonant depolarization; the dominant systematic is the SM electroweak two-loop theory uncertainty, which must improve in parallel. A routinely-planned successor collider that must still be funded and built (data 2040s). No novel 'possible'-rated alternative found: every production or precision effect of this mostly-invisible multi-TeV Z' carries the same eps^2 suppression (see improvement_attempts).

**Dark-quartic self-interaction from halo structure** (literature projection on R3 + R4). R3 and R4 share identical SM-facing physics (alpha1 ~ 0.0019-0.0022, MDM ~ 95 GeV in both: identical sigma_SI, BR(h->inv), annihilation). Arguing with the physical sums per the duplicate-monomial structure: lambda_rrrr = alpha2+alpha7+alpha12 spans 0.12-10.2 in R3 vs 3.5-20 in R4, and lambda_iiii = alpha6+alpha11+alpha16 spans 3.3-20 in R3 vs 7.9-10 in R4 - R4's floor is higher in the sr sector, but BOTH sums overlap between the regions. These couplings enter only dark-dark 2->2 amplitudes: with sigma = lambda_eff^2/(64 pi s), s = 4 MDM^2, lambda_eff = 10 gives sigma/m ~ 3e-11 cm^2/g, lambda_eff = 3.5 gives ~4e-12, lambda_eff = 0.3 gives ~3e-14. So R4 predicts roughly 4e-12 to 3e-11 cm^2/g and R3 anywhere from ~1e-14 up to the same 3e-11 ceiling - the discriminator is marginal even in principle, and the quartics' early-universe sr<->si conversions are already integrated into the one measured relic number. The node documents that this residual dark-quartic degeneracy is physical. Today-experiment: Bullet Cluster merger simulations and relaxed-halo shapes, sigma/m <~ 0.5-0.7 cm^2/g. Required: ~1e-11 cm^2/g, a factor ~5e10 in the cross-section-per-mass observable itself (not exposure). Rated impossible against a hard floor: at that level a 95 GeV particle at v ~ 1e-3 c scatters far less than once per Hubble time in any halo, no astrophysical system amplifies the effect, and no laboratory confines dark matter to see DM-DM scattering at all; the existing measurement is itself systematics-limited at ~0.1 cm^2/g by merger geometry and lensing mass reconstruction. Even a perfect measurement separates the regions only partially because both quartic-sum ranges overlap. No novel alternative at 'speculative' or better exists (see improvement_attempts); nothing is chained below this node.
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_no_no_yes",
      "lit_search_note": "Existing data checked: LHCb/CMS prompt dimuon is the only existing dataset that splits (used as split 1). Checked and not splitting: BaBar/Belle II (mass reach <10.6 GeV, below R1's window; needs eps>~1e-3, above R0's range); beam dumps E137/CHARM/NuCal/NA62 and all far detectors (Z' lifetime floor ctau<~2 cm, no acceptance); LEP/SLD electroweak fit (bounds only eps>~0.03-0.05 at TeV, grazing R2's box top - null for all units, no split); Fermi-LAT dwarfs (~2e-26 cm3/s at 93 GeV, exactly R0's thermal ceiling); AMS-02 antiprotons/positrons (O(1) propagation systematics, order short); Planck p_ann (~10x short for all units); (g-2)_mu (3 orders short); SN1987A/stellar cooling (M_Z'>=1 GeV too heavy); cluster self-interaction (10 orders short); precision Higgs fits (alpha1~0.002 gives sub-permille shifts).",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "LHCb/CMS prompt dark-photon dimuon search",
          "observable": "narrow mumu resonance at 20-25 GeV, eps^2 >~ 1e-6 ?",
          "what_this_is": "The LHCb and CMS detectors at the Large Hadron Collider record huge samples of muon pairs and scan the pair-mass spectrum for a narrow bump, which is how a new short-lived neutral boson decaying to two muons would appear. This is the most sensitive existing probe of a 'dark photon': a light Z' boson that talks to ordinary matter only through a small mixing with the photon. In region R1 the Z' sits at 21-24 GeV and, because the dark-matter particle is too heavy for the Z' to decay into, it must decay visibly to muons and other fermions -- so this search either sees it or rules the mixing range out; no other region has a visible resonance in this window.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1912.04776"
          ],
          "reasoning": "R1: MZp = 21-24 GeV with eps in [9.4e-5, 1.5e-2] (eps^2 in [8.8e-9, 2.4e-4]); Z'->DM DM is kinematically closed (MDM ~ 92 GeV > MZp/2), so BR(Z'->SM) = 1 with BR(mumu) ~ 10%. Published prompt-A' sensitivity at this mass is eps^2 ~ 1-2e-6 (LHCb 1910.06926; CMS 1912.04776 covers 11.5-45 GeV), so the upper ~half of R1's log-range in eps is visible or excluded with existing data, and LHCb Upgrade II (eps -> ~3e-4) covers most of the remainder. R0: eps^2 <= 3e-9, three orders below reach -- nothing. R2: MZp = 0.85-10 TeV, outside this window; its high-mass dilepton signal is the catalog's own recast, already applied and passed. R3/R4: no Z', exactly zero. Marginality: the low-eps tail of R1 (eps < ~3e-4) is not covered even by Upgrade II; as a unit R1 is still the only region that can fire.",
          "feasibility": "Splits now for a large part of R1: the data are published, the analysis exists, and eps^2 down to ~1e-6 at 22 GeV is on the books. Dominant systematic is the smoothness of the Drell-Yan + heavy-flavour dimuon continuum used for the bump hunt, well controlled at this mass (away from the Upsilon region).",
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
                "R0",
                "R2",
                "R3",
                "R4"
              ]
            }
          ]
        },
        {
          "kind": "lit_projection",
          "attach_to": "R0+R2+R3+R4",
          "name": "CTA Galactic-Centre cascade-continuum search",
          "observable": "sigmav(93 GeV DM -> Zp Zp -> soft gamma continuum) >= 2e-27 cm^3/s ?",
          "what_this_is": "The Cherenkov Telescope Array (CTA) is a new pair of gamma-ray observatories under construction in Chile and the Canary Islands. Its deepest program stares at the centre of our Galaxy, where dark matter is densest, looking for gamma rays from dark-matter annihilation. In the 'secluded' region R0, dark matter annihilates into a pair of light dark photons which then cascade into ordinary quarks and leptons, giving a smooth, soft gamma-ray continuum ending at the dark-matter mass - a signal the other regions, whose annihilation is throttled by a tiny Higgs-portal coupling or by velocity suppression, cannot produce.",
          "refs": [
            "arXiv:2007.16129",
            "arXiv:1503.02641"
          ],
          "reasoning": "R0 is the only unit with an unsuppressed annihilation channel: SS*->Z'Z' is open for every point (MZp = 1-80 GeV < MDM >= 92 GeV) and s-wave, with g' up to 0.16; because the pooled Z2+3+4+5 rate is not relic-pinned, the present-day sigmav spans orders of magnitude up to the ~2e-26 cm^3/s thermal ceiling, with a featureless multi-step cascade spectrum cutting off at ~93 GeV. R3/R4 annihilate only through the portal with alpha1 ~ 0.002, giving sigmav ~ 1e-29 cm^3/s - invisible to any foreseeable instrument. R2's s-channel Z' exchange into SM fermions is both eps-suppressed and p-wave (v^2 ~ 1e-6 today), far below the 2e-27 cut. One-sided direction stated: the small-g'/underabundant tail of R0 (signal ~ f^2 sigmav) also lands in 'nothing', so the null branch does not exclude R0; the relic-dominant bulk is covered and a detected 93 GeV-endpoint soft continuum is unambiguous R0.",
          "feasibility": "Today-experiment: Fermi-LAT 6-yr dwarf-spheroidal stacking, ~2e-26 cm^3/s for soft hadronic spectra at ~93 GeV - exactly at R0's ceiling, which is why no lit split exists on this axis. Required: ~2e-27 cm^3/s, a factor ~10 in sigmav, matching the published CTA Galactic-Centre projection at ~100 GeV (Einasto, 500h; background-limited, sensitivity ~ sqrt(t)). CTA is a funded next-generation facility under construction. Dominant systematic: the inner-halo density profile - a strongly cored profile costs up to an order of magnitude - plus Galactic diffuse-emission modeling. No novel 'possible'-rated alternative found: the only cheaper route is a Fermi cascade-template refit, which stalls at ~2e-26 (see improvement_attempts).",
          "feasibility_rating": "next generation",
          "improvement_factor": 10,
          "outcomes": [
            {
              "label": "continuum seen",
              "regions": [
                "R0"
              ]
            },
            {
              "label": "nothing",
              "regions": [
                "R2",
                "R3",
                "R4"
              ]
            }
          ]
        },
        {
          "kind": "lit_projection",
          "attach_to": "R2+R3+R4",
          "name": "FCC-ee Tera-Z electroweak precision fit",
          "observable": "delta sin^2(theta_eff) >= 1e-5 ?",
          "what_this_is": "FCC-ee is a proposed circular electron-positron collider that would sit on the Z-boson resonance and record trillions of Z decays, measuring the Z's properties thousands of times more precisely than LEP did. A heavy Z' that kinetically mixes with the photon slightly distorts the Z's couplings through quantum mixing of the two bosons, shifting the effective weak mixing angle. Only the heavy, strongly-mixed Z' of region R2 can produce such a coherent shift; the ultra-feeble light Z' of R0 and the Z'-less singlets R3/R4 leave the Z pole untouched.",
          "refs": [
            "arXiv:1308.6176",
            "arXiv:1412.0018"
          ],
          "reasoning": "Z-Z' kinetic mixing shifts sin^2(theta_eff) by ~ eps^2 (M_Z/M_Z')^2 x O(0.1-1). R2 (MZp = 0.85-10 TeV, eps = 1.9e-4 to 0.1) predicts ~1e-5 to 1e-4 at (eps=0.1, MZp=850 GeV), well above FCC-ee's ~5e-6 precision; the covered slice is eps >~ 0.04 x (MZp/TeV) - the top decade of R2's mixing range - while the low-eps/high-mass bulk (e.g. eps = 2e-4 at 10 TeV, shift ~1e-9) stays invisible. One-sided direction stated: a null does not exclude R2 as a unit; a coherent shift selects it uniquely, since R0 (eps <= 5.4e-5, light Z') predicts < 1e-9 and R3/R4 exactly zero. The current global fit only grazes eps >~ 0.03-0.05 at TeV masses, which is why no lit split exists on this axis (the viability filter applied no EWPT bound, so R2's extreme corner survives in the scan).",
          "feasibility": "Today: sin^2(theta_eff) known to 1.6e-4 (LEP+SLD); FCC-ee Tera-Z projects ~5e-6 with ~6e12 Z decays - factor ~30 in the observable itself, statistics-rich with beam-energy calibration by resonant depolarization; the dominant systematic is the SM electroweak two-loop theory uncertainty, which must improve in parallel. A routinely-planned successor collider that must still be funded and built (data 2040s). No novel 'possible'-rated alternative found: every production or precision effect of this mostly-invisible multi-TeV Z' carries the same eps^2 suppression (see improvement_attempts).",
          "feasibility_rating": "next generation",
          "improvement_factor": 30,
          "outcomes": [
            {
              "label": "shift seen",
              "regions": [
                "R2"
              ]
            },
            {
              "label": "no shift",
              "regions": [
                "R3",
                "R4"
              ]
            }
          ]
        },
        {
          "kind": "lit_projection",
          "attach_to": "R3+R4",
          "name": "Dark-quartic self-interaction from halo structure",
          "observable": "sigma_self/m >= 1e-11 cm^2/g ?",
          "what_this_is": "When galaxy clusters collide, the dark-matter halos pass through each other; how much they drag and lag measures how strongly dark matter scatters off itself, and the round shapes of relaxed halos bound the same quantity. It is the relevant measurement here because the last two regions are identical in every coupling to ordinary matter and differ only in how strongly the dark scalar interacts with itself - couplings that touch no ordinary-matter field whatsoever. The predicted rate sits ten orders of magnitude below what any astrophysical system can register, so this node documents an irreducible degeneracy rather than a realistic measurement.",
          "refs": [
            "arXiv:0704.0261",
            "arXiv:1705.02358"
          ],
          "reasoning": "R3 and R4 share identical SM-facing physics (alpha1 ~ 0.0019-0.0022, MDM ~ 95 GeV in both: identical sigma_SI, BR(h->inv), annihilation). Arguing with the physical sums per the duplicate-monomial structure: lambda_rrrr = alpha2+alpha7+alpha12 spans 0.12-10.2 in R3 vs 3.5-20 in R4, and lambda_iiii = alpha6+alpha11+alpha16 spans 3.3-20 in R3 vs 7.9-10 in R4 - R4's floor is higher in the sr sector, but BOTH sums overlap between the regions. These couplings enter only dark-dark 2->2 amplitudes: with sigma = lambda_eff^2/(64 pi s), s = 4 MDM^2, lambda_eff = 10 gives sigma/m ~ 3e-11 cm^2/g, lambda_eff = 3.5 gives ~4e-12, lambda_eff = 0.3 gives ~3e-14. So R4 predicts roughly 4e-12 to 3e-11 cm^2/g and R3 anywhere from ~1e-14 up to the same 3e-11 ceiling - the discriminator is marginal even in principle, and the quartics' early-universe sr<->si conversions are already integrated into the one measured relic number. The node documents that this residual dark-quartic degeneracy is physical.",
          "feasibility": "Today-experiment: Bullet Cluster merger simulations and relaxed-halo shapes, sigma/m <~ 0.5-0.7 cm^2/g. Required: ~1e-11 cm^2/g, a factor ~5e10 in the cross-section-per-mass observable itself (not exposure). Rated impossible against a hard floor: at that level a 95 GeV particle at v ~ 1e-3 c scatters far less than once per Hubble time in any halo, no astrophysical system amplifies the effect, and no laboratory confines dark matter to see DM-DM scattering at all; the existing measurement is itself systematics-limited at ~0.1 cm^2/g by merger geometry and lensing mass reconstruction. Even a perfect measurement separates the regions only partially because both quartic-sum ranges overlap. No novel alternative at 'speculative' or better exists (see improvement_attempts); nothing is chained below this node.",
          "feasibility_rating": "impossible",
          "improvement_factor": 50000000000,
          "outcomes": [
            {
              "label": "above cut (sr-quartics large)",
              "regions": [
                "R4"
              ]
            },
            {
              "label": "below cut",
              "regions": [
                "R3"
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

<!-- g12_leaf-ynyynnn.md -->

## Reasoning — leaf `root_yes_no_yes_yes_no_no_no` (131 pts, R0 + R1)

**Existing dark-photon, dwarf-galaxy and CMB data** (literature split). R0 predicts a dimuon resonance somewhere in 1-44 GeV at a rate from already-excluded (eps ~ 0.1, visible) down to 1e-12 of Drell-Yan (eps ~ 1e-6), and a dwarf-galaxy cascade signal spanning 1e-29 to 3e-26 cm3/s - the pooled unit is not relic-pinned, so sub-thermal points are generic; its Planck p_ann runs from ~5e-28 cm3/s/GeV at 6 GeV (that m <~ 10-20 GeV slice IS excluded, with f_eff ~ 0.2-0.3 for 1-44 GeV mediator cascades) down to ~3e-29 at 90 GeV. R1 predicts exactly zero resonance, sigmav ~ 4e-28 cm3/s (alpha1^2-suppressed at 95.3 GeV) and p_ann ~ 1e-30 - below everything. Because R0's predictions straddle each existing limit while R1 sits below all of them, the recorded nulls are consistent with both units: Status No Split. A future positive in any of the three would uniquely tag R0. Existing data does NOT split: LHCb/BaBar have already carved R0's eps >~ 1e-3 visible corner and Planck its lightest secluded slice, so every surviving point of both units predicts null in all three datasets. Dominant systematics: the dimuon continuum shape, dwarf J-factors (factor ~2), and the f_eff cascade-deposition modeling with its tau-reionization degeneracy - none large enough to change the verdict, whose obstacle is physical (five decades of eps; non-pinned annihilation rate), not experimental.

**XLZD recoil-spectrum DM mass** (literature projection on R0 + R1). R1 predicts m_DM = 95.29 +/- 0.01 GeV: on xenon (m_N ~ 122 GeV) the reduced mass is 53.5 GeV, mean recoil ~13 keV, a hard spectrum extending past 40 keV whose fit returns m >~ 80 GeV (the shape saturates approaching m_N, leaving a lower bound; Green, hep-ph/0703217) - always failing the m_DM < 60 GeV cut. R0's true mass lies anywhere in 6.1-93.6 GeV, with ~80-85% of the log-range below 60 GeV: at a representative 30 GeV the mean recoil is ~3 keV, a factor ~4 softer, fit to +/-20-30% with O(30) events at the leaf's 1-10x-limit rate; a light-target partner tightens the heavy end from ~30-50% to ~20%. Stated leak: R0's 70-94 GeV tail is spectrally indistinguishable from 95.3 GeV on xenon and lands on the 'heavy' branch - 'heavy' does not strictly exclude R0, while 'light' is decisive. This is NOT a refinement of the path node 'See anything at XLZD?': that compares a rate to a limit curve (cm^2); this measures a spectrum and returns a mass (GeV). Cheaper one-sided confirmers, kept out of the tree by the one-split rule: a Fermi-LAT dwarf recast with dark-cascade templates ('cascade seen' at ~1e-26 cm3/s with fit mass 6-60 GeV uniquely tags R0's thermal slice, but the non-pinned unit spans 1e-29-3e-26 so null is uninformative) and the LHCb Upgrade II / Belle II dimuon scan (a 1-44 GeV resonance is impossible in R1, but reach eps ~ 5e-4 covers only the top of R0's eps box). OR-alternative (drawn on this node): the Ca/O recoil-spectrum ratio in a single paleo mineral, which measures the same mass boundary without the v_0/v_esc systematic (predicted 1.11-1.49 for R0's bulk vs 1.73 for R1) rated 'new experiment', the same tier as this node, and attached because it removes this node's v_0/v_esc systematic. Today-experiment: LZ, best published SI limit 2.2e-48 cm^2 (median sensitivity 5.1e-48) at ~40 GeV over 4.2 t-yr - and by this leaf's own path, zero signal events recorded by any running detector. Required: O(30) spectroscopy events on a signal at 3e-49-3e-48 cm^2, i.e. ~2e-49 cm^2 sensitivity, factor ~10 in the cross-section itself under near-background-free linear-in-exposure scaling (60 t XLZD vs 5.5 t LZ fiducial; a +/-20% precision mass at the top of the range would need ~100 events, up to factor ~100-300 in the faintest corner under a stricter accounting). Rated next generation because XLZD must be built - though this leaf's path already presupposes it exists and has seen the signal, so conditional on reaching this leaf the spectral fit costs nothing beyond the analysis. Dominant systematics: the local velocity distribution and escape velocity (degenerate with mass at the heavy end, ~10% shift at 90 GeV) and the light/charge-yield calibration below 5 keV. No novel alternative at a strictly better rating exists: the mass information lives only in recoil events no current detector records, every mediator-based route is either confirm-only (dimuon, cascade) or excluded (displaced vertices dead at c*tau <~ 2 cm; beam dumps stop at m_A' ~ 1 GeV), and neutron-star heating, solar reflection and fifth-force probes predict identical signals for both units.

**Novel alternative — Paleo-detector Ca/O recoil-spectrum ratio (halo-independent mass).** Both ingredients exist separately. Comparing recoil spectra from two different targets to reconstruct the dark-matter mass without a halo model is an established idea (matching moments of the velocity distribution inferred from each target), and paleo minerals have been studied as dark-matter recorders, including mass reconstruction from a single mineral's track-length spectrum under an assumed halo; the closest paper analyses gypsum and halite that way but never forms this ratio. What has not been proposed is to take the two targets from ONE mineral: the calcium and oxygen recoil populations of gypsum share the same exposure time, age, readout, and radiogenic environment (neutrons from uranium and thorium decays in the surrounding rock strike both), so the systematics that plague a two-experiment comparison drop out along with the escape velocity. Calcium is the right heavy partner: for a 30-100 GeV particle its endpoint momentum transfer (qR of 2.5-2.9, Helm form factor squared 0.1-0.2) still leaves a populated spectrum, whereas the endpoint on barium or xenon sits past the second form-factor zero (qR ~ 8.5, F^2 ~ 2e-4) and is empty at any exposure. Attached at equal tier to the next-generation xenon spectral fit because it removes that fit's dominant systematic, the local velocity distribution, rather than repeating the fit more cheaply. The largest recoil energy a dark-matter particle of mass m can deposit on nucleus N is E_max = v_esc^2 / alpha_N^2 with alpha_N^2 = m_N / (2 mu_N^2), mu_N the dark-matter-nucleus reduced mass. Taking the ratio for two nuclei in the same crystal gives E_max(Ca)/E_max(O) = alpha_O^2/alpha_Ca^2 = mu_Ca^2 m_O / (mu_O^2 m_Ca), a function of the nuclear masses and m only - the escape velocity and the shape of the velocity distribution cancel, so nothing about the Galaxy's assembly history enters. Because very few halo particles move near v_esc, the strict endpoint is starved of events; the same cancellation holds for the ratio of any velocity moment reconstructed from the two spectra, which uses every track and is the form actually fitted. Predicted values: R0 spans 6-94 GeV, so its ratio runs from ~0.6 at the light end through 1.11 at its log-median 30 GeV to 1.49 at 60 GeV; R1 at 95.3 GeV gives 1.73. The cut at 1.45 corresponds to m ~ 60 GeV, the same boundary as the xenon spectral fit it accompanies, so the outcome groups are identical and so is the one-sidedness: R0 points above ~60 GeV fall on the heavy side and are not separated. Form factors do not spoil the comparison: over this mass range the calcium endpoint runs from 100 keV (q ~ 85 MeV, qR ~ 1.8, F^2 ~ 0.4) at 30 GeV to 260 keV (q ~ 140 MeV, qR ~ 2.9, F^2 ~ 0.1) at 95 GeV and the oxygen endpoint from 90 to 150 keV with qR <~ 1 and F^2 ~ 0.75 throughout. What survives as a systematic is the calibration that converts each ion's track length into a recoil energy. Closest existing technique: track-length spectroscopy of a single paleo mineral fitted under a fixed halo model, and two-target halo-independent mass reconstruction with conventional detectors; neither has been combined with the other. What must be built: a readout programme - nanometre-resolution imaging (helium-ion microscopy or X-ray nanotomography) of gram-scale samples of radiopure gypsum or calcite - and an ion-beam calibration of the calcium and oxygen track-length-versus-energy relations to the few-percent level, since range predictions for keV nuclei in minerals are only good to 10-20% today. Dominant systematics: (i) which nucleus made a given track - the recorded spectrum is the sum over Ca, S and O recoils and this proposal does not specify how the populations are separated, whether by a template fit to the combined spectrum or by secondary track properties, an idea that has been suggested but whose practicality is unstudied; (ii) the per-ion calibration, which replaces the halo systematic the method removes; (iii) radiogenic backgrounds - alpha-recoil nuclei from uranium and thorium and neutron-induced recoils - populating the same 50-300 keV band. Statistics are comparable to the xenon fit rather than far beyond it: at this leaf's cross section a 1 Gyr-old sample holds ~10-100 signal tracks per gram, so ~100 g read out at nanometre resolution gives O(1e3) tracks against XLZD's O(100) events - the gain is halo independence, not counts. Realistic obstacle: no one has yet shown that per-track nucleus identification works at this resolution, so the practicality of the observable is unproven. Rated 'new experiment': a dedicated readout programme with existing technology on a normal funding timescale, equal in tier to the next-generation xenon fit it is attached to.
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_no_no_no",
      "lit_search_note": "Existing data checked against the scan facts: LHCb prompt A'->mumu and BaBar visible/invisible dark-photon searches (carve only R0's eps >~ 1e-3 corner; surviving points evade via eps << 1e-3 or invisible Z'->DM decays); NA64/E137/LSND beam dumps (reach eps ~ 1e-5-1e-6 only for m_A' <~ 1 GeV, below R0's 1-44 GeV mediator); all displaced/far-detector searches (dead by the c*tau <~ 2 cm fact); SN1987A (m_A' <~ 100 MeV); LEP EW precision (eps <~ 0.03, a slice); muon g-2 (Delta a_mu ~ 1e-17 at eps = 1e-6); Fermi-LAT dwarfs (R0's cascade sigmav spans 1e-29-3e-26 cm3/s because the pooled unit is not relic-pinned - straddles; R1 ~ 4e-28, invisible); Planck p_ann (kills only R0's m <~ 10-20 GeV secluded slice); self-interaction (both units <~ 1.6e-3 cm2/g vs ~0.5-1 cm2/g astrophysical floor); AMS-02 antiprotons (propagation-swamped); Xe-vs-Ar target ratio (both units isoscalar Higgs-portal elastic scatterers - the Z' amplitude is inelastic with ~GeV splitting, kinematically closed); low-threshold DD (light tail only). Nothing existing splits the units.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Existing dark-photon, dwarf-galaxy and CMB data",
          "observable": "mumu resonance 1-44 GeV, or sigmav >= 1e-26 cm^3/s, or p_ann >= 3.2e-28 cm^3/s/GeV ?",
          "what_this_is": "Three datasets already in hand could in principle tell these two theories apart: collider searches for a light new particle decaying to muon pairs, gamma-ray observations of dwarf galaxies where annihilating dark matter would shine, and the cosmic microwave background, which remembers energy injected by annihilation in the early universe. Each probes the extra dark force that exists in one theory and not the other. All three return null for every surviving point of both, so no verdict follows - this node records that honestly.",
          "refs": [
            "arXiv:1910.06926",
            "arXiv:1503.02641",
            "arXiv:1807.06209"
          ],
          "reasoning": "R0 predicts a dimuon resonance somewhere in 1-44 GeV at a rate from already-excluded (eps ~ 0.1, visible) down to 1e-12 of Drell-Yan (eps ~ 1e-6), and a dwarf-galaxy cascade signal spanning 1e-29 to 3e-26 cm3/s - the pooled unit is not relic-pinned, so sub-thermal points are generic; its Planck p_ann runs from ~5e-28 cm3/s/GeV at 6 GeV (that m <~ 10-20 GeV slice IS excluded, with f_eff ~ 0.2-0.3 for 1-44 GeV mediator cascades) down to ~3e-29 at 90 GeV. R1 predicts exactly zero resonance, sigmav ~ 4e-28 cm3/s (alpha1^2-suppressed at 95.3 GeV) and p_ann ~ 1e-30 - below everything. Because R0's predictions straddle each existing limit while R1 sits below all of them, the recorded nulls are consistent with both units: Status No Split. A future positive in any of the three would uniquely tag R0.",
          "feasibility": "Existing data does NOT split: LHCb/BaBar have already carved R0's eps >~ 1e-3 visible corner and Planck its lightest secluded slice, so every surviving point of both units predicts null in all three datasets. Dominant systematics: the dimuon continuum shape, dwarf J-factors (factor ~2), and the f_eff cascade-deposition modeling with its tau-reionization degeneracy - none large enough to change the verdict, whose obstacle is physical (five decades of eps; non-pinned annihilation rate), not experimental.",
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
          "name": "XLZD recoil-spectrum DM mass",
          "observable": "spectral-fit m_DM < 60 GeV ?",
          "what_this_is": "XLZD is the planned next-generation liquid-xenon dark-matter detector, the ~60-tonne successor to today's LZ and XENONnT. When a dark-matter particle scatters off a nucleus, the energy of the recoil depends on the particle's mass: a light particle can only deliver soft nudges with a steeply falling energy spectrum, while a heavy one produces harder, flatter recoils. Both candidate theories are guaranteed to light up XLZD on this branch of the tree, so fitting the shape of the recoil-energy spectrum weighs the dark-matter particle - and the two theories predict very different masses. A companion light-target detector (argon, germanium or silicon), whose kinematics turn over at a different mass, sharpens the fit at the heavy end.",
          "refs": [
            "arXiv:2410.17036",
            "arXiv:2410.17137",
            "arXiv:hep-ph/0703217"
          ],
          "reasoning": "R1 predicts m_DM = 95.29 +/- 0.01 GeV: on xenon (m_N ~ 122 GeV) the reduced mass is 53.5 GeV, mean recoil ~13 keV, a hard spectrum extending past 40 keV whose fit returns m >~ 80 GeV (the shape saturates approaching m_N, leaving a lower bound; Green, hep-ph/0703217) - always failing the m_DM < 60 GeV cut. R0's true mass lies anywhere in 6.1-93.6 GeV, with ~80-85% of the log-range below 60 GeV: at a representative 30 GeV the mean recoil is ~3 keV, a factor ~4 softer, fit to +/-20-30% with O(30) events at the leaf's 1-10x-limit rate; a light-target partner tightens the heavy end from ~30-50% to ~20%. Stated leak: R0's 70-94 GeV tail is spectrally indistinguishable from 95.3 GeV on xenon and lands on the 'heavy' branch - 'heavy' does not strictly exclude R0, while 'light' is decisive. This is NOT a refinement of the path node 'See anything at XLZD?': that compares a rate to a limit curve (cm^2); this measures a spectrum and returns a mass (GeV). Cheaper one-sided confirmers, kept out of the tree by the one-split rule: a Fermi-LAT dwarf recast with dark-cascade templates ('cascade seen' at ~1e-26 cm3/s with fit mass 6-60 GeV uniquely tags R0's thermal slice, but the non-pinned unit spans 1e-29-3e-26 so null is uninformative) and the LHCb Upgrade II / Belle II dimuon scan (a 1-44 GeV resonance is impossible in R1, but reach eps ~ 5e-4 covers only the top of R0's eps box). OR-alternative (drawn on this node): the Ca/O recoil-spectrum ratio in a single paleo mineral, which measures the same mass boundary without the v_0/v_esc systematic (predicted 1.11-1.49 for R0's bulk vs 1.73 for R1) rated 'new experiment', the same tier as this node, and attached because it removes this node's v_0/v_esc systematic.",
          "feasibility": "Today-experiment: LZ, best published SI limit 2.2e-48 cm^2 (median sensitivity 5.1e-48) at ~40 GeV over 4.2 t-yr - and by this leaf's own path, zero signal events recorded by any running detector. Required: O(30) spectroscopy events on a signal at 3e-49-3e-48 cm^2, i.e. ~2e-49 cm^2 sensitivity, factor ~10 in the cross-section itself under near-background-free linear-in-exposure scaling (60 t XLZD vs 5.5 t LZ fiducial; a +/-20% precision mass at the top of the range would need ~100 events, up to factor ~100-300 in the faintest corner under a stricter accounting). Rated next generation because XLZD must be built - though this leaf's path already presupposes it exists and has seen the signal, so conditional on reaching this leaf the spectral fit costs nothing beyond the analysis. Dominant systematics: the local velocity distribution and escape velocity (degenerate with mass at the heavy end, ~10% shift at 90 GeV) and the light/charge-yield calibration below 5 keV. No novel alternative at a strictly better rating exists: the mass information lives only in recoil events no current detector records, every mediator-based route is either confirm-only (dimuon, cascade) or excluded (displaced vertices dead at c*tau <~ 2 cm; beam dumps stop at m_A' ~ 1 GeV), and neutron-star heating, solar reflection and fifth-force probes predict identical signals for both units.",
          "feasibility_rating": "next generation",
          "improvement_factor": 10,
          "outcomes": [
            {
              "label": "light",
              "regions": [
                "R0"
              ]
            },
            {
              "label": "heavy",
              "regions": [
                "R1"
              ]
            }
          ],
          "proposed_novel_alternative": {
            "name": "Paleo-detector Ca/O recoil-spectrum ratio (halo-independent mass)",
            "observable": "E_max(Ca)/E_max(O) in gypsum tracks < 1.45 (Drees-Shan moment match) ?",
            "what_this_is": "A paleo-detector is a mineral that has sat kilometres underground for up to a billion years: every nucleus knocked hard enough by a passing particle left a permanent damage trail in the crystal, so a single gram of it stores an exposure no tonne-scale detector can match. The recoil energies a dark-matter particle can give a nucleus stop at a maximum set by the fastest dark matter still bound to the Galaxy, and that maximum depends on the dark-matter mass through the nucleus mass and the reduced mass of the pair - so if the escape velocity were known, the end of the recoil spectrum would weigh the dark matter. It is not known well, especially over a billion years of Galactic history, but the ratio of the endpoints on two different nuclei recorded in the same crystal - here calcium and oxygen in gypsum - cancels the velocity entirely and depends on the dark-matter mass alone. Mass is almost the only thing that differs between these two regions, so a velocity-free mass measurement is exactly the right question.",
            "why_novel": "Both ingredients exist separately. Comparing recoil spectra from two different targets to reconstruct the dark-matter mass without a halo model is an established idea (matching moments of the velocity distribution inferred from each target), and paleo minerals have been studied as dark-matter recorders, including mass reconstruction from a single mineral's track-length spectrum under an assumed halo; the closest paper analyses gypsum and halite that way but never forms this ratio. What has not been proposed is to take the two targets from ONE mineral: the calcium and oxygen recoil populations of gypsum share the same exposure time, age, readout, and radiogenic environment (neutrons from uranium and thorium decays in the surrounding rock strike both), so the systematics that plague a two-experiment comparison drop out along with the escape velocity. Calcium is the right heavy partner: for a 30-100 GeV particle its endpoint momentum transfer (qR of 2.5-2.9, Helm form factor squared 0.1-0.2) still leaves a populated spectrum, whereas the endpoint on barium or xenon sits past the second form-factor zero (qR ~ 8.5, F^2 ~ 2e-4) and is empty at any exposure. Attached at equal tier to the next-generation xenon spectral fit because it removes that fit's dominant systematic, the local velocity distribution, rather than repeating the fit more cheaply.",
            "refs": [
              "arXiv:2608.10105"
            ],
            "reasoning": "The largest recoil energy a dark-matter particle of mass m can deposit on nucleus N is E_max = v_esc^2 / alpha_N^2 with alpha_N^2 = m_N / (2 mu_N^2), mu_N the dark-matter-nucleus reduced mass. Taking the ratio for two nuclei in the same crystal gives E_max(Ca)/E_max(O) = alpha_O^2/alpha_Ca^2 = mu_Ca^2 m_O / (mu_O^2 m_Ca), a function of the nuclear masses and m only - the escape velocity and the shape of the velocity distribution cancel, so nothing about the Galaxy's assembly history enters. Because very few halo particles move near v_esc, the strict endpoint is starved of events; the same cancellation holds for the ratio of any velocity moment reconstructed from the two spectra, which uses every track and is the form actually fitted. Predicted values: R0 spans 6-94 GeV, so its ratio runs from ~0.6 at the light end through 1.11 at its log-median 30 GeV to 1.49 at 60 GeV; R1 at 95.3 GeV gives 1.73. The cut at 1.45 corresponds to m ~ 60 GeV, the same boundary as the xenon spectral fit it accompanies, so the outcome groups are identical and so is the one-sidedness: R0 points above ~60 GeV fall on the heavy side and are not separated. Form factors do not spoil the comparison: over this mass range the calcium endpoint runs from 100 keV (q ~ 85 MeV, qR ~ 1.8, F^2 ~ 0.4) at 30 GeV to 260 keV (q ~ 140 MeV, qR ~ 2.9, F^2 ~ 0.1) at 95 GeV and the oxygen endpoint from 90 to 150 keV with qR <~ 1 and F^2 ~ 0.75 throughout. What survives as a systematic is the calibration that converts each ion's track length into a recoil energy.",
            "feasibility": "Closest existing technique: track-length spectroscopy of a single paleo mineral fitted under a fixed halo model, and two-target halo-independent mass reconstruction with conventional detectors; neither has been combined with the other. What must be built: a readout programme - nanometre-resolution imaging (helium-ion microscopy or X-ray nanotomography) of gram-scale samples of radiopure gypsum or calcite - and an ion-beam calibration of the calcium and oxygen track-length-versus-energy relations to the few-percent level, since range predictions for keV nuclei in minerals are only good to 10-20% today. Dominant systematics: (i) which nucleus made a given track - the recorded spectrum is the sum over Ca, S and O recoils and this proposal does not specify how the populations are separated, whether by a template fit to the combined spectrum or by secondary track properties, an idea that has been suggested but whose practicality is unstudied; (ii) the per-ion calibration, which replaces the halo systematic the method removes; (iii) radiogenic backgrounds - alpha-recoil nuclei from uranium and thorium and neutron-induced recoils - populating the same 50-300 keV band. Statistics are comparable to the xenon fit rather than far beyond it: at this leaf's cross section a 1 Gyr-old sample holds ~10-100 signal tracks per gram, so ~100 g read out at nanometre resolution gives O(1e3) tracks against XLZD's O(100) events - the gain is halo independence, not counts. Realistic obstacle: no one has yet shown that per-track nucleus identification works at this resolution, so the practicality of the observable is unproven. Rated 'new experiment': a dedicated readout programme with existing technology on a normal funding timescale, equal in tier to the next-generation xenon fit it is attached to.",
            "feasibility_rating": "new experiment",
            "outcomes": [
              {
                "label": "light (ratio below cut)",
                "regions": [
                  "R0"
                ]
              },
              {
                "label": "heavy (ratio above cut)",
                "regions": [
                  "R1"
                ]
              }
            ]
          }
        }
      ]
    }
  ]
}
```

---

<!-- g13_leaf-ynynyy.md -->

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

---

<!-- g14_leaf-ynyyynnnn.md -->

## Reasoning — leaf `root_yes_no_yes_yes_yes_no_no_no_no` (33 pts, R0 + R1)

**BaBar + LHCb + CMS scouting dark-photon dimuon archive** (literature split). R0 predicts a Z' at 1.0-10.2 GeV, R1 at 17.2-22.7 GeV - fully disjoint windows, so a detected peak labels the unit uniquely. The Z' is fully visible in both units: the invisible channel Z' -> DM DM* needs M_Z' > 2 M_DM, and max(M_Z') = 10.2 GeV < 2 x 7.75 GeV = 15.5 GeV in R0 (22.7 << 123 GeV in R1), giving dark-photon-like decays with BR(mumu) ~ 10-30%. But every production rate scales as eps^2, and both units run from eps ~ 1e-3 down to 1e-6 (eps^2 = 1e-12), while the existing archive reaches only eps^2 ~ 1e-6 to 1e-7 (BaBar eps ~ 1e-4-1e-3 over R0's window; LHCb and CMS scouting eps ~ 1e-3 over R1's). At the floor the decays stay prompt (cTau = 2.7 cm at 1 GeV, 0.14 cm at 20 GeV), so displaced-vertex and far-detector searches gain nothing. 'No peak' is the honest prediction of the surviving bulk of BOTH units - recorded as No Split. Kept at the root because the data are free and in hand, and because any future peak (e.g. LHCb Upgrade II, which still falls ~1e4 short in eps^2 of the floor) would resolve the leaf by mass position alone, including the marginal high-mass R0 tail the split below cannot handle. Existing published data; does NOT split. Only the top decade of each unit's eps range is probed, and the null there is shared; the remaining two-plus decades predict no signal in either unit. Dominant systematic in these searches is the smooth Drell-Yan/QED dimuon continuum under a narrow bump - irrelevant to the verdict, which is set by the eps^2 rate floor, not by systematics.

**XLZD nuclear-recoil spectrum mass fit** (literature projection on R0 + R1). R0 (M_DM = 7.75-60.9 GeV, log-space bulk well below ~45 GeV): on xenon the spectrum is crammed against threshold (<E_R> <~ 5-10 keVnr at M ~ 10-30 GeV, essentially nothing above ~25 keVnr); a fit to O(1e2) events returns a closed mass interval whose 95% upper edge lies below 45 GeV (e.g. ~30 +/- 8 GeV at true M = 30; Green arXiv:0805.1704). R1 (M_DM = 61.5-63.9 GeV, reduced mass ~41 GeV): a hard, flat spectrum extending to ~40 keVnr; the fit returns a lower bound near 45 GeV with a weak upper edge, because the shape depends on M only through the DM-Xe reduced mass, which saturates as M -> m_Xe = 122 GeV. Cut: fit excludes M_DM > 45 GeV -> R0; fails to -> R1. Marginality, stated honestly: R0 points in the sparse ~45-61 GeV tail are spectroscopically identical to the funnel - the 60.9 vs 61.5 GeV boundary is a hard kinematic floor (reduced-mass saturation) no target nucleus beats and no exposure fixes; for those points the only fallback is a future dimuon peak position (<= 10.2 GeV vs 17-23 GeV), documented at the root and not guaranteed. Corroboration for R1 comes free: a fitted mass consistent with m_h/2 = 62.6 GeV alongside the path's BR(h->inv) = 0.0032-0.01 despite the near-threshold phase-space suppression is the Higgs-funnel signature. OR-alternative (drawn on this node): the Ca/O recoil-spectrum ratio in a single paleo mineral, which places the same 45 GeV boundary without the v_0/v_esc systematic (predicted <= 1.17 for R0's bulk vs 1.50 for R1) rated 'new experiment', the same tier as this node, and attached because it removes this node's v_0/v_esc systematic. Today-experiment: LZ, published 4.2 tonne-year search, limit 2.2e-48 cm^2 at 40 GeV - holding only ~1-4 signal events at this leaf's sigma_SI ~ (0.3-3)e-48 cm^2, far too few for a mass fit (which is why this is NOT a reanalysis: the fittable dataset is presupposed from XLZD, not recorded). Required: spectroscopy at sigma_SI down to the XLZD reach of 3e-49 cm^2, a factor ~7 in the cross-section observable, assuming near-background-free linear-in-exposure scaling (standard for xenon TPCs above the neutrino fog); XLZD at 200-1000 t-yr then collects ~30-250 events across the leaf's 1-10x band. LZ's remaining approved run gives a bright-end preview (~5-30 events for the brightest, lightest points) but cannot guarantee the 45-GeV discrimination across the band. Dominant systematic: the assumed halo velocity distribution (v_0, v_esc), shifting the fitted mass by ~10% - well inside the 45-vs-62 GeV gap being tested but part of why the fit degrades above ~50 GeV. No novel alternative at a strictly better ('possible') rating was found: the LZ-only fit, Belle II's one-sided kinematic tagger and the gamma-ray endpoint all fail.

**Novel alternative — Paleo-detector Ca/O recoil-spectrum ratio (halo-independent mass).** Both ingredients exist separately. Comparing recoil spectra from two different targets to reconstruct the dark-matter mass without a halo model is an established idea (matching moments of the velocity distribution inferred from each target), and paleo minerals have been studied as dark-matter recorders, including mass reconstruction from a single mineral's track-length spectrum under an assumed halo; the closest paper analyses gypsum and halite that way but never forms this ratio. What has not been proposed is to take the two targets from ONE mineral: the calcium and oxygen recoil populations of gypsum share the same exposure time, age, readout, and radiogenic environment (neutrons from uranium and thorium decays in the surrounding rock strike both), so the systematics that plague a two-experiment comparison drop out along with the escape velocity. Calcium is the right heavy partner: for a 30-100 GeV particle its endpoint momentum transfer (qR of 2.5-2.9, Helm form factor squared 0.1-0.2) still leaves a populated spectrum, whereas the endpoint on barium or xenon sits past the second form-factor zero (qR ~ 8.5, F^2 ~ 2e-4) and is empty at any exposure. Attached at equal tier to the next-generation xenon spectral fit because it removes that fit's dominant systematic, the local velocity distribution, rather than repeating the fit more cheaply. The largest recoil energy a dark-matter particle of mass m can deposit on nucleus N is E_max = v_esc^2 / alpha_N^2 with alpha_N^2 = m_N / (2 mu_N^2), mu_N the dark-matter-nucleus reduced mass. Taking the ratio for two nuclei in the same crystal gives E_max(Ca)/E_max(O) = alpha_O^2/alpha_Ca^2 = mu_Ca^2 m_O / (mu_O^2 m_Ca), a function of the nuclear masses and m only - the escape velocity and the shape of the velocity distribution cancel, so nothing about the Galaxy's assembly history enters. Because very few halo particles move near v_esc, the strict endpoint is starved of events; the same cancellation holds for the ratio of any velocity moment reconstructed from the two spectra, which uses every track and is the form actually fitted. Predicted values: R0's 8-35 GeV bulk gives 0.64-1.19 (the ratio passes through 1 near 23 GeV, where light dark matter starts depositing more on the heavier nucleus); R1 at 62-64 GeV gives 1.50-1.52. The cut at 1.35 corresponds to m ~ 46 GeV, the same boundary as the xenon spectral fit it accompanies, so the outcome groups are identical and so is the one-sidedness: R0's sparse 50-61 GeV tail, at 1.38-1.49, lands on the heavy side. Form factors do not spoil the comparison: over this mass range the calcium endpoint runs from 16 keV at 8 GeV to 200 keV at 64 GeV (qR up to ~2.5, F^2 >~ 0.2) and the oxygen endpoint from 24 to 130 keV with qR <~ 1 and F^2 ~ 0.8 throughout. What survives as a systematic is the calibration that converts each ion's track length into a recoil energy. Closest existing technique: track-length spectroscopy of a single paleo mineral fitted under a fixed halo model, and two-target halo-independent mass reconstruction with conventional detectors; neither has been combined with the other. What must be built: a readout programme - nanometre-resolution imaging (helium-ion microscopy or X-ray nanotomography) of gram-scale samples of radiopure gypsum or calcite - and an ion-beam calibration of the calcium and oxygen track-length-versus-energy relations to the few-percent level, since range predictions for keV nuclei in minerals are only good to 10-20% today. Dominant systematics: (i) which nucleus made a given track - the recorded spectrum is the sum over Ca, S and O recoils and this proposal does not specify how the populations are separated, whether by a template fit to the combined spectrum or by secondary track properties, an idea that has been suggested but whose practicality is unstudied; (ii) the per-ion calibration, which replaces the halo systematic the method removes; (iii) radiogenic backgrounds - alpha-recoil nuclei from uranium and thorium and neutron-induced recoils - populating the same 50-300 keV band. Statistics are comparable to the xenon fit rather than far beyond it: at this leaf's cross section a 1 Gyr-old sample holds ~10-100 signal tracks per gram, so ~100 g read out at nanometre resolution gives O(1e3) tracks against XLZD's O(100) events - the gain is halo independence, not counts. Realistic obstacle: no one has yet shown that per-track nucleus identification works at this resolution, so the practicality of the observable is unproven. Rated 'new experiment': a dedicated readout programme with existing technology on a normal funding timescale, equal in tier to the next-generation xenon fit it is attached to.
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_yes_no_no_no_no",
      "lit_search_note": "Checked: BaBar/LHCb/CMS-scouting dimuon archives (disjoint M_Z' windows 1-10.2 vs 17.2-22.7 GeV, but both units run to eps = 1e-6, two-plus decades below the eps^2 ~ 1e-6/1e-7 reach; cTau <= 2.7 cm keeps decays prompt, so LLP detectors cannot help); Planck p_ann (would bite only R0's lightest corner, bisecting R0 rather than separating the units, and is not even guaranteed since these pooled Z2+3+4+5 units are not relic-pinned); Fermi dwarfs / AMS-02 (present-day sigma-v not pinned for pooled units and the leaf sits below every catalog ID projection, so no disjoint prediction); electroweak precision (needs eps ~ 1e-2 at these Z' masses vs <= 1.4e-3 in the boxes); cluster self-interactions (alpha6 gap maps to sigma/m ~ 1e-12 to 1e-7 cm^2/g vs the ~0.1-1 cm^2/g astrophysical floor); finer BR(h->inv) (both units boxed into the identical 0.0032-0.01 bin by the path). Nothing existing splits R0 from R1.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "BaBar + LHCb + CMS scouting dark-photon dimuon archive",
          "observable": "narrow l+l- resonance, 1-25 GeV, at eps^2 >~ 1e-7 ?",
          "what_this_is": "Collider experiments have already scanned the invariant-mass spectrum of lepton pairs for a narrow bump - the signature of a light dark-sector gauge boson (a 'dark photon') that mixes slightly with the ordinary photon and decays back to ordinary particles. BaBar covers bump masses of 0.02-10.2 GeV, LHCb is strongest at 10.6-30 GeV, and CMS trigger-level 'scouting' covers 11.5-45 GeV. This matters here because the two parameter regions predict such a boson at completely non-overlapping masses (1-10 GeV vs 17-23 GeV), so a bump at either mass would identify the region instantly - but both regions allow the mixing to be so small that no bump is visible, and none has been seen.",
          "refs": [
            "arXiv:1406.2980",
            "arXiv:1910.06926",
            "arXiv:1912.04776"
          ],
          "reasoning": "R0 predicts a Z' at 1.0-10.2 GeV, R1 at 17.2-22.7 GeV - fully disjoint windows, so a detected peak labels the unit uniquely. The Z' is fully visible in both units: the invisible channel Z' -> DM DM* needs M_Z' > 2 M_DM, and max(M_Z') = 10.2 GeV < 2 x 7.75 GeV = 15.5 GeV in R0 (22.7 << 123 GeV in R1), giving dark-photon-like decays with BR(mumu) ~ 10-30%. But every production rate scales as eps^2, and both units run from eps ~ 1e-3 down to 1e-6 (eps^2 = 1e-12), while the existing archive reaches only eps^2 ~ 1e-6 to 1e-7 (BaBar eps ~ 1e-4-1e-3 over R0's window; LHCb and CMS scouting eps ~ 1e-3 over R1's). At the floor the decays stay prompt (cTau = 2.7 cm at 1 GeV, 0.14 cm at 20 GeV), so displaced-vertex and far-detector searches gain nothing. 'No peak' is the honest prediction of the surviving bulk of BOTH units - recorded as No Split. Kept at the root because the data are free and in hand, and because any future peak (e.g. LHCb Upgrade II, which still falls ~1e4 short in eps^2 of the floor) would resolve the leaf by mass position alone, including the marginal high-mass R0 tail the split below cannot handle.",
          "feasibility": "Existing published data; does NOT split. Only the top decade of each unit's eps range is probed, and the null there is shared; the remaining two-plus decades predict no signal in either unit. Dominant systematic in these searches is the smooth Drell-Yan/QED dimuon continuum under a narrow bump - irrelevant to the verdict, which is set by the eps^2 rate floor, not by systematics.",
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
          "name": "XLZD nuclear-recoil spectrum mass fit",
          "observable": "spectral fit of the xenon nuclear-recoil energy spectrum excludes m_DM > 45 GeV at 95% CL ?",
          "what_this_is": "XLZD is the proposed next-generation liquid-xenon detector (60-tonne active target), the successor to LZ. This leaf's premise is that it SEES a dark-matter signal; beyond counting events, the energy distribution of the recoiling xenon nuclei encodes the dark-matter particle's mass, because a light particle can only give the heavy nucleus gentle kicks while a heavier one produces a harder, flatter spectrum. Fitting the shape of the guaranteed signal therefore weighs the dark-matter particle - exactly the axis separating these two regions, one spanning roughly 8-61 GeV and the other pinned at half the Higgs-boson mass, ~62 GeV.",
          "refs": [
            "arXiv:2410.17036",
            "arXiv:2410.17137",
            "arXiv:0805.1704"
          ],
          "reasoning": "R0 (M_DM = 7.75-60.9 GeV, log-space bulk well below ~45 GeV): on xenon the spectrum is crammed against threshold (<E_R> <~ 5-10 keVnr at M ~ 10-30 GeV, essentially nothing above ~25 keVnr); a fit to O(1e2) events returns a closed mass interval whose 95% upper edge lies below 45 GeV (e.g. ~30 +/- 8 GeV at true M = 30; Green arXiv:0805.1704). R1 (M_DM = 61.5-63.9 GeV, reduced mass ~41 GeV): a hard, flat spectrum extending to ~40 keVnr; the fit returns a lower bound near 45 GeV with a weak upper edge, because the shape depends on M only through the DM-Xe reduced mass, which saturates as M -> m_Xe = 122 GeV. Cut: fit excludes M_DM > 45 GeV -> R0; fails to -> R1. Marginality, stated honestly: R0 points in the sparse ~45-61 GeV tail are spectroscopically identical to the funnel - the 60.9 vs 61.5 GeV boundary is a hard kinematic floor (reduced-mass saturation) no target nucleus beats and no exposure fixes; for those points the only fallback is a future dimuon peak position (<= 10.2 GeV vs 17-23 GeV), documented at the root and not guaranteed. Corroboration for R1 comes free: a fitted mass consistent with m_h/2 = 62.6 GeV alongside the path's BR(h->inv) = 0.0032-0.01 despite the near-threshold phase-space suppression is the Higgs-funnel signature. OR-alternative (drawn on this node): the Ca/O recoil-spectrum ratio in a single paleo mineral, which places the same 45 GeV boundary without the v_0/v_esc systematic (predicted <= 1.17 for R0's bulk vs 1.50 for R1) rated 'new experiment', the same tier as this node, and attached because it removes this node's v_0/v_esc systematic.",
          "feasibility": "Today-experiment: LZ, published 4.2 tonne-year search, limit 2.2e-48 cm^2 at 40 GeV - holding only ~1-4 signal events at this leaf's sigma_SI ~ (0.3-3)e-48 cm^2, far too few for a mass fit (which is why this is NOT a reanalysis: the fittable dataset is presupposed from XLZD, not recorded). Required: spectroscopy at sigma_SI down to the XLZD reach of 3e-49 cm^2, a factor ~7 in the cross-section observable, assuming near-background-free linear-in-exposure scaling (standard for xenon TPCs above the neutrino fog); XLZD at 200-1000 t-yr then collects ~30-250 events across the leaf's 1-10x band. LZ's remaining approved run gives a bright-end preview (~5-30 events for the brightest, lightest points) but cannot guarantee the 45-GeV discrimination across the band. Dominant systematic: the assumed halo velocity distribution (v_0, v_esc), shifting the fitted mass by ~10% - well inside the 45-vs-62 GeV gap being tested but part of why the fit degrades above ~50 GeV. No novel alternative at a strictly better ('possible') rating was found: the LZ-only fit, Belle II's one-sided kinematic tagger and the gamma-ray endpoint all fail.",
          "feasibility_rating": "next generation",
          "improvement_factor": 7,
          "outcomes": [
            {
              "label": "light (fit < 45 GeV)",
              "regions": [
                "R0"
              ]
            },
            {
              "label": "heavy (fit allows ~62 GeV)",
              "regions": [
                "R1"
              ]
            }
          ],
          "proposed_novel_alternative": {
            "name": "Paleo-detector Ca/O recoil-spectrum ratio (halo-independent mass)",
            "observable": "E_max(Ca)/E_max(O) in gypsum tracks < 1.35 (Drees-Shan moment match) ?",
            "what_this_is": "A paleo-detector is a mineral that has sat kilometres underground for up to a billion years: every nucleus knocked hard enough by a passing particle left a permanent damage trail in the crystal, so a single gram of it stores an exposure no tonne-scale detector can match. The recoil energies a dark-matter particle can give a nucleus stop at a maximum set by the fastest dark matter still bound to the Galaxy, and that maximum depends on the dark-matter mass through the nucleus mass and the reduced mass of the pair - so if the escape velocity were known, the end of the recoil spectrum would weigh the dark matter. It is not known well, especially over a billion years of Galactic history, but the ratio of the endpoints on two different nuclei recorded in the same crystal - here calcium and oxygen in gypsum - cancels the velocity entirely and depends on the dark-matter mass alone. Mass is almost the only thing that differs between these two regions, so a velocity-free mass measurement is exactly the right question.",
            "why_novel": "Both ingredients exist separately. Comparing recoil spectra from two different targets to reconstruct the dark-matter mass without a halo model is an established idea (matching moments of the velocity distribution inferred from each target), and paleo minerals have been studied as dark-matter recorders, including mass reconstruction from a single mineral's track-length spectrum under an assumed halo; the closest paper analyses gypsum and halite that way but never forms this ratio. What has not been proposed is to take the two targets from ONE mineral: the calcium and oxygen recoil populations of gypsum share the same exposure time, age, readout, and radiogenic environment (neutrons from uranium and thorium decays in the surrounding rock strike both), so the systematics that plague a two-experiment comparison drop out along with the escape velocity. Calcium is the right heavy partner: for a 30-100 GeV particle its endpoint momentum transfer (qR of 2.5-2.9, Helm form factor squared 0.1-0.2) still leaves a populated spectrum, whereas the endpoint on barium or xenon sits past the second form-factor zero (qR ~ 8.5, F^2 ~ 2e-4) and is empty at any exposure. Attached at equal tier to the next-generation xenon spectral fit because it removes that fit's dominant systematic, the local velocity distribution, rather than repeating the fit more cheaply.",
            "refs": [
              "arXiv:2608.10105"
            ],
            "reasoning": "The largest recoil energy a dark-matter particle of mass m can deposit on nucleus N is E_max = v_esc^2 / alpha_N^2 with alpha_N^2 = m_N / (2 mu_N^2), mu_N the dark-matter-nucleus reduced mass. Taking the ratio for two nuclei in the same crystal gives E_max(Ca)/E_max(O) = alpha_O^2/alpha_Ca^2 = mu_Ca^2 m_O / (mu_O^2 m_Ca), a function of the nuclear masses and m only - the escape velocity and the shape of the velocity distribution cancel, so nothing about the Galaxy's assembly history enters. Because very few halo particles move near v_esc, the strict endpoint is starved of events; the same cancellation holds for the ratio of any velocity moment reconstructed from the two spectra, which uses every track and is the form actually fitted. Predicted values: R0's 8-35 GeV bulk gives 0.64-1.19 (the ratio passes through 1 near 23 GeV, where light dark matter starts depositing more on the heavier nucleus); R1 at 62-64 GeV gives 1.50-1.52. The cut at 1.35 corresponds to m ~ 46 GeV, the same boundary as the xenon spectral fit it accompanies, so the outcome groups are identical and so is the one-sidedness: R0's sparse 50-61 GeV tail, at 1.38-1.49, lands on the heavy side. Form factors do not spoil the comparison: over this mass range the calcium endpoint runs from 16 keV at 8 GeV to 200 keV at 64 GeV (qR up to ~2.5, F^2 >~ 0.2) and the oxygen endpoint from 24 to 130 keV with qR <~ 1 and F^2 ~ 0.8 throughout. What survives as a systematic is the calibration that converts each ion's track length into a recoil energy.",
            "feasibility": "Closest existing technique: track-length spectroscopy of a single paleo mineral fitted under a fixed halo model, and two-target halo-independent mass reconstruction with conventional detectors; neither has been combined with the other. What must be built: a readout programme - nanometre-resolution imaging (helium-ion microscopy or X-ray nanotomography) of gram-scale samples of radiopure gypsum or calcite - and an ion-beam calibration of the calcium and oxygen track-length-versus-energy relations to the few-percent level, since range predictions for keV nuclei in minerals are only good to 10-20% today. Dominant systematics: (i) which nucleus made a given track - the recorded spectrum is the sum over Ca, S and O recoils and this proposal does not specify how the populations are separated, whether by a template fit to the combined spectrum or by secondary track properties, an idea that has been suggested but whose practicality is unstudied; (ii) the per-ion calibration, which replaces the halo systematic the method removes; (iii) radiogenic backgrounds - alpha-recoil nuclei from uranium and thorium and neutron-induced recoils - populating the same 50-300 keV band. Statistics are comparable to the xenon fit rather than far beyond it: at this leaf's cross section a 1 Gyr-old sample holds ~10-100 signal tracks per gram, so ~100 g read out at nanometre resolution gives O(1e3) tracks against XLZD's O(100) events - the gain is halo independence, not counts. Realistic obstacle: no one has yet shown that per-track nucleus identification works at this resolution, so the practicality of the observable is unproven. Rated 'new experiment': a dedicated readout programme with existing technology on a normal funding timescale, equal in tier to the next-generation xenon fit it is attached to.",
            "feasibility_rating": "new experiment",
            "outcomes": [
              {
                "label": "light (ratio below cut)",
                "regions": [
                  "R0"
                ]
              },
              {
                "label": "heavy (ratio above cut)",
                "regions": [
                  "R1"
                ]
              }
            ]
          }
        }
      ]
    }
  ]
}
```

---

<!-- g15_leaf-ynyyynyy.md -->

## Reasoning — leaf `root_yes_no_yes_yes_yes_no_yes_yes` (28 pts, R0 + R1)

**BaBar + LHCb visible dark-photon searches** (literature split). Z' -> DM DM is kinematically closed everywhere (M_DM ~ 5.7-6.7 GeV > M_Z'/2), so BR(visible)=100% and standard visible dark-photon limits apply directly. Predicted kinetic mixing: R0 eps in [1e-6, 9.5e-4] at M_Z' 1.00-1.67 GeV; R1 eps in [2.2e-6, 4.4e-4] at M_Z' 1.00-3.37 GeV. BaBar excludes eps >~ 1e-3 across the whole band; LHCb prompt reaches eps ~ (2-8)e-4 only in patchy windows with vetoes at the phi (1.02 GeV) and J/psi (3.10 GeV). Both regions' surviving points sit at or below today's reach, with almost fully overlapping eps ranges, so existing data cuts the same thin top slice off both regions and separates nothing at region level. No split: the two regions predict statistically indistinguishable null results in all existing dark-photon datasets - the eps ranges overlap over ~3 decades and both extend well below current sensitivity. Dominant systematic in these searches is the smooth QED/hadronic dimuon continuum shape under a narrow bump, plus the resonance vetoes that blind LHCb exactly at 1.02 and 3.10 GeV.

**HL-LHC h->invisible + dark-bremsstrahlung dimuon (mono-Z')** (literature projection on R0 + R1). Rate: BR(h->inv) >= 0.032 on this branch and g' ~ 0.047 pinned in both units give a dark-bremsstrahlung probability ~ (g'^2/4pi^2)ln^2(m_h/MZp) ~ 1e-3, so BR(h -> SS* Z') >~ 3.5e-5 and, with BR(Z'->mumu) ~ 0.1-0.2, an effective BR ~ 1e-5: ~1e3 dimuon events among ~1.7e8 HL-LHC Higgses, O(100) after MET/VBF selection -- enough for a mass peak, independent of eps. Predicted peak position: R0 -> strictly 1.0-1.67 GeV; R1 -> anywhere in 1.0-3.37 GeV. Cut at 1.7 GeV (between the phi and J/psi): above -> unambiguously R1; at or below -> assigned R0. ONE-SIDED, stated plainly: ~half of R1's log-uniform MZp span lies below 1.7 GeV and leaks to the R0 branch; that residue maps onto the disjoint but SM-blind dark quartic alpha5 (R0 <= 0.063, R1 >= 0.096, self-scattering <= 1e-7 cm^2/g vs a ~0.1 cm^2/g astrophysical floor) and is irreducible. Alternatives on the same partition, both dominated: Belle II 50/ab gamma+mumu scan (same 'possible' rating but rate ~ eps^2, reaching only the eps >~ 2e-4 tail while both units extend to ~2e-6 -- for most points nothing is produced in either region); cosmic-ray antiprotons via the MZp > 2m_p = 1.876 GeV threshold (eps-independent and clean, but needs an AMS-100-class spectrometer -- next generation -- and misassigns R1 points with MZp in 1.671-1.876 GeV, which the dimuon peak gets right; an above-threshold discovery would nonetheless cross-check this split for free). Today-experiment: ATLAS compressed-electroweakino search in soft same-flavor dileptons + MET (139/fb), sigma*BR sensitivity ~ 10-30 fb for few-GeV dimuon pairs. Required: ~0.3-1 fb. Factor ~30, assuming background-limited sqrt(L) scaling 139 -> 3000/fb (x4.6) plus a dedicated narrow-bump fit over the smooth soft-Drell-Yan background -- the stretched end of 'possible', kept because HL-LHC is a funded upgrade within the existing program and the search is a template refit of a topology already analysed. Dominant systematics: dimuon continuum shape and muon momentum scale near the phi/J/psi (the 1.7 GeV cut sits between them). At the eps ~ 1e-6 floor the boosted Z' decay length reaches up to ~1 m, so the analysis must combine prompt and displaced dimuon vertices; both regions share the same eps range, so this does not bias the split.
```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_yes_no_yes_yes",
      "lit_search_note": "Existing data searched, all no-split: BaBar gamma-A' and LHCb prompt/displaced A'->mumu (both units sit at or below eps ~ 1e-3 reach with nested (MZp, eps) boxes -> recorded as the drawn no-split node); cluster-merger/halo-shape self-interaction bounds at 0.1-1 cm^2/g vs predictions <= 1e-7 cm^2/g that moreover overlap between units because alpha3/alpha4/alpha6 reach 10 in R0; Planck CMB energy injection and Fermi dwarfs (identical pinned g', M_DM, hence identical <sigma v> in both units); AMS-02 antiprotons as published (~20x too weak at 6 GeV); electroweak precision on Z-Z' mixing (blind at eps <= 1e-3); beam dumps and far detectors (c*tau <= ~1 m lab-frame at eps >= 1e-6, MZp >= 1 GeV -- no acceptance). The only disjoint parameter is the dark quartic alpha5 (R0 <= 0.063, R1 >= 0.096), a pure dark-sector self-coupling with no SM-facing vertex; the only measurable difference is the MZp ceiling (1.671 vs 3.369 GeV), which the projection below exploits.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "BaBar + LHCb visible dark-photon searches",
          "observable": "prompt A' -> mu mu resonance at 1-3.4 GeV with epsilon >~ 1e-3 ?",
          "what_this_is": "Both experiments hunt for a light 'dark photon' - a new force carrier that mixes slightly with the ordinary photon and so decays to pairs of muons or electrons. BaBar looked for it recoiling against a single photon in electron-positron collisions; LHCb scans its dimuon mass spectrum for a narrow bump. In this leaf the dark-matter particle (about 6 GeV) is too heavy for the 1-3.4 GeV dark photon to decay into, so the dark photon must decay visibly, making these searches the direct probe of the one sector where the two regions differ.",
          "refs": [
            "arXiv:1406.2980",
            "arXiv:1910.06926"
          ],
          "reasoning": "Z' -> DM DM is kinematically closed everywhere (M_DM ~ 5.7-6.7 GeV > M_Z'/2), so BR(visible)=100% and standard visible dark-photon limits apply directly. Predicted kinetic mixing: R0 eps in [1e-6, 9.5e-4] at M_Z' 1.00-1.67 GeV; R1 eps in [2.2e-6, 4.4e-4] at M_Z' 1.00-3.37 GeV. BaBar excludes eps >~ 1e-3 across the whole band; LHCb prompt reaches eps ~ (2-8)e-4 only in patchy windows with vetoes at the phi (1.02 GeV) and J/psi (3.10 GeV). Both regions' surviving points sit at or below today's reach, with almost fully overlapping eps ranges, so existing data cuts the same thin top slice off both regions and separates nothing at region level.",
          "feasibility": "No split: the two regions predict statistically indistinguishable null results in all existing dark-photon datasets - the eps ranges overlap over ~3 decades and both extend well below current sensitivity. Dominant systematic in these searches is the smooth QED/hadronic dimuon continuum shape under a narrow bump, plus the resonance vetoes that blind LHCb exactly at 1.02 and 3.10 GeV.",
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
          "name": "HL-LHC h->invisible + dark-bremsstrahlung dimuon (mono-Z')",
          "observable": "m(mumu) peak recoiling against MET > 1.7 GeV ?",
          "what_this_is": "At the High-Luminosity Large Hadron Collider (the funded upgrade of the LHC), the Higgs boson decays to a pair of invisible dark-matter scalars several percent of the time in these models, and one of those scalars occasionally radiates the light dark force carrier Z', which then decays to a muon pair. The signature is a narrow low-mass dimuon resonance recoiling against large missing energy, and the position of the dimuon peak directly measures the Z' mass. Crucially the production rate is set by the Higgs invisible branching ratio (already observed on this branch) and the dark gauge coupling (nearly identical in both regions), not by the tiny photon mixing, so the peak is measurable for every parameter point here. Region R0 only allows a Z' below about 1.7 GeV, while R1 extends to 3.4 GeV, so a peak above 1.7 GeV identifies R1.",
          "refs": [
            "arXiv:1911.12606",
            "arXiv:1504.01386",
            "arXiv:1812.07831"
          ],
          "reasoning": "Rate: BR(h->inv) >= 0.032 on this branch and g' ~ 0.047 pinned in both units give a dark-bremsstrahlung probability ~ (g'^2/4pi^2)ln^2(m_h/MZp) ~ 1e-3, so BR(h -> SS* Z') >~ 3.5e-5 and, with BR(Z'->mumu) ~ 0.1-0.2, an effective BR ~ 1e-5: ~1e3 dimuon events among ~1.7e8 HL-LHC Higgses, O(100) after MET/VBF selection -- enough for a mass peak, independent of eps. Predicted peak position: R0 -> strictly 1.0-1.67 GeV; R1 -> anywhere in 1.0-3.37 GeV. Cut at 1.7 GeV (between the phi and J/psi): above -> unambiguously R1; at or below -> assigned R0. ONE-SIDED, stated plainly: ~half of R1's log-uniform MZp span lies below 1.7 GeV and leaks to the R0 branch; that residue maps onto the disjoint but SM-blind dark quartic alpha5 (R0 <= 0.063, R1 >= 0.096, self-scattering <= 1e-7 cm^2/g vs a ~0.1 cm^2/g astrophysical floor) and is irreducible. Alternatives on the same partition, both dominated: Belle II 50/ab gamma+mumu scan (same 'possible' rating but rate ~ eps^2, reaching only the eps >~ 2e-4 tail while both units extend to ~2e-6 -- for most points nothing is produced in either region); cosmic-ray antiprotons via the MZp > 2m_p = 1.876 GeV threshold (eps-independent and clean, but needs an AMS-100-class spectrometer -- next generation -- and misassigns R1 points with MZp in 1.671-1.876 GeV, which the dimuon peak gets right; an above-threshold discovery would nonetheless cross-check this split for free).",
          "feasibility": "Today-experiment: ATLAS compressed-electroweakino search in soft same-flavor dileptons + MET (139/fb), sigma*BR sensitivity ~ 10-30 fb for few-GeV dimuon pairs. Required: ~0.3-1 fb. Factor ~30, assuming background-limited sqrt(L) scaling 139 -> 3000/fb (x4.6) plus a dedicated narrow-bump fit over the smooth soft-Drell-Yan background -- the stretched end of 'possible', kept because HL-LHC is a funded upgrade within the existing program and the search is a template refit of a topology already analysed. Dominant systematics: dimuon continuum shape and muon momentum scale near the phi/J/psi (the 1.7 GeV cut sits between them). At the eps ~ 1e-6 floor the boosted Z' decay length reaches up to ~1 m, so the analysis must combine prompt and displaced dimuon vertices; both regions share the same eps range, so this does not bias the split.",
          "feasibility_rating": "possible",
          "improvement_factor": 30,
          "outcomes": [
            {
              "label": "peak above 1.7 GeV",
              "regions": [
                "R1"
              ]
            },
            {
              "label": "peak at or below 1.7 GeV",
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
