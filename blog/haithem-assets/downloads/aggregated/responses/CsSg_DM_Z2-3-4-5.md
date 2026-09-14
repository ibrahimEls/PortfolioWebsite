<!-- CsSg_DM.Z2+3+4+5__yyny.md -->

## Reasoning — leaf `root_yes_yes_no_yes` (82 pts, R0 + R1)

**Merging-cluster DM self-interaction bound** (literature split). The regions coincide in (MDM, alpha1) -- R1 nested inside R0 -- so they differ only in the dark quartic self-couplings, whose sole present-day manifestation is DM-DM scattering. For 95 GeV scalars with the card's un-normalized quartics (amplitude 24*alpha per sr^4-type vertex), sigma/m ~ 3.7e-10 alpha^2 cm^2/g per channel; summing the physical coupling sums gives R0 ~ 4e-9 to 1.5e-7 cm^2/g (si^4 sum 3.3-20 dominant) and R1 ~ 3e-8 to 2e-7 cm^2/g (sr^4, sr^2si^2, si^4 all large) -- overlapping ranges, both 8-9 orders of magnitude below the existing bounds (Bullet Cluster sigma/m < 1 cm^2/g, Markevitch et al.; 72-merger ensemble < 0.47 cm^2/g at 95% CL, Harvey et al.). The one separated coupling, lambda(si^3 sr) (R0 <= 0.06, R1 >= 0.48), feeds only the species-changing channel sr si -> si si (R1 up to ~2e-9, R0 <= 1e-13 cm^2/g), which any species-blind astrophysical measurement buries under the overlapping elastic channels -- so this observable cannot partition even at arbitrary sensitivity. No split. Existing data does NOT separate the regions: both predict sigma_self/m ~ 1e-8 +/- 1 dex against a 0.47 cm^2/g bound, 8-9 orders of magnitude short, and the region-separated conversion channel is subdominant to elastic channels whose strengths overlap between regions. Dominant systematic in the cluster analyses is the modelling of the galaxy-vs-dark-matter lensing offsets and baryonic contamination of the centroids, which floors the method at the ~0.1-0.5 cm^2/g level -- irrelevant at this margin.

**Dark-partner conversion cross-section si si -> si sr** (novel observable on R0 + R1). After resumming the merged builds' duplicate monomials, lambda(si^3 sr) = alpha5+alpha10+alpha15 is the ONLY strictly non-overlapping physical quantity: R0 <= 0.06, R1 >= 0.48. It mediates si si -> si sr with sigma = lambda^2/(64 pi s); at threshold sqrt(s) ~ 2*MDM + dm ~ 191 GeV this gives R1: 1.2e-35 to 5e-33 cm^2 vs R0: <= 2e-37 cm^2 -- a deterministic factor >= 60 gap, so the 1e-35 cm^2 cut partitions every point of the leaf, unlike any elastic sigma/m proposal (those overlap). Every less direct imprint fails: halo dark matter moves at ~1e-3 c, far below the ~0.18 c needed to open the 0.8 GeV endothermic channel, and the exothermic reverse has essentially no target since si was depleted at T ~ 1 GeV (both regions keep f_sr ~ 1 via their overlapping depletion channels); one-loop h -> si si adds up to 3.6% (R1) vs 0.55% (R0) to the invisible width -- overlapping, since R1's floor gives ~0.01%; lambda(sr^4) loop corrections to the sigma_SI/BR(h->inv) relation are 2-13% (R1) vs 0.07-7% (R0) -- overlapping; radiative sr-si mixing gives the partner an O(10 s) lifetime, but its collider regeneration carries (alpha1*lambda/16pi^2)^2 ~ 1e-10 on an already invisible-Higgs-suppressed rate -- far below one event ever. Closest existing technique: halo-scale self-interaction constraints (Bullet-cluster-type lensing), which probe the wrong particle and the wrong coupling and overlap between regions here. What would have to be built: a source and collider of si beams at ~95 GeV and v ~ 0.2c -- impossible, since si is cosmologically extinct, SM-sterile in both initial and final state, and its only production channel from our sector is a doubly portal- and loop-suppressed process (effective coupling ~ alpha1*lambda/16pi^2 ~ 1e-5) yielding far fewer than one pair at any conceivable luminosity; halo number densities are ~40 orders of magnitude below any usable beam. This is a hard rate floor, not a technology gap: the couplings that distinguish R0 from R1 belong to a particle the universe destroyed at T ~ 1 GeV, so the residual degeneracy is physically irreducible. The elastic sigma/m alternative was considered and rejected because its predictions overlap between the regions at any sensitivity.
```json
{
  "model": "CsSg_DM.Z2+3+4+5",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_no_yes",
      "lit_search_note": "Existing data checked: LZ 4.2 t-yr / XENONnT / PandaX SI limits (both regions predict identical sigma_SI ~ 1-3e-48 cm^2, below the ~5e-48 cm^2 LZ limit at 95 GeV, consistent with the LZ->NO path step); ATLAS/CMS h->invisible combination (predicted 0.0032-0.01 vs limit 0.107); Fermi-LAT dwarfs, H.E.S.S./CTA GC, AMS-02 antiprotons, Planck p_ann (portal <sigma v> ~ few e-28 cm^3/s, identical between regions); IceCube/Super-K solar capture; LEP invisible width and oblique parameters (gauge singlet); DD annual modulation, directionality, exothermic down-scattering; precision mass measurement (R1's MDM and alpha1 nested inside R0's, so no function of (alpha1, MDM) partitions at any precision). The sigma_SI/BR(h->inv) composition ratio fails: both regions carry a guaranteed-strong si-depletion channel (R0: lambda(si sr^3) >= 0.74; R1: lambda(sr^2 si^2) >= 1.5 and lambda(si^3 sr) >= 0.48), so both predict f_sr ~ 1 and the same ratio ~ 3e-45 cm^2. Loop imprints of the differing quartics overlap: one-loop h -> si si adds up to 3.6% (R1) vs 0.55% (R0) with R1's floor below R0's ceiling; lambda(sr^4)-driven shifts of the sigma_SI/BR relation are 2-13% (R1) vs 0.07-7% (R0). Neutron-star bosonic-collapse bounds are a threshold probe both regions saturate identically (both have quartics >~ 1) and strictly apply to non-annihilating DM. The only separated quantity, lambda(si^3 sr), has four dark legs and no SM leg.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Merging-cluster DM self-interaction bound",
          "observable": "sigma_self/m > 0.5 cm^2/g at v ~ 1000-4000 km/s ?",
          "what_this_is": "When two galaxy clusters collide, the hot gas slams together and lags behind while the galaxies sail through; gravitational-lensing maps show whether the dark matter lagged too, which happens only if dark-matter particles scatter off one another. This is the only existing class of measurement sensitive to the dark sector's self-couplings, and those self-couplings are the only parameters that differ between these two regions -- every property involving ordinary matter is identical. The data exist and are recorded here as an honest null: both regions predict self-scattering billions of times below what the lensing maps can see.",
          "refs": [
            "arXiv:astro-ph/0309303",
            "arXiv:1503.07675"
          ],
          "reasoning": "The regions coincide in (MDM, alpha1) -- R1 nested inside R0 -- so they differ only in the dark quartic self-couplings, whose sole present-day manifestation is DM-DM scattering. For 95 GeV scalars with the card's un-normalized quartics (amplitude 24*alpha per sr^4-type vertex), sigma/m ~ 3.7e-10 alpha^2 cm^2/g per channel; summing the physical coupling sums gives R0 ~ 4e-9 to 1.5e-7 cm^2/g (si^4 sum 3.3-20 dominant) and R1 ~ 3e-8 to 2e-7 cm^2/g (sr^4, sr^2si^2, si^4 all large) -- overlapping ranges, both 8-9 orders of magnitude below the existing bounds (Bullet Cluster sigma/m < 1 cm^2/g, Markevitch et al.; 72-merger ensemble < 0.47 cm^2/g at 95% CL, Harvey et al.). The one separated coupling, lambda(si^3 sr) (R0 <= 0.06, R1 >= 0.48), feeds only the species-changing channel sr si -> si si (R1 up to ~2e-9, R0 <= 1e-13 cm^2/g), which any species-blind astrophysical measurement buries under the overlapping elastic channels -- so this observable cannot partition even at arbitrary sensitivity. No split.",
          "feasibility": "Existing data does NOT separate the regions: both predict sigma_self/m ~ 1e-8 +/- 1 dex against a 0.47 cm^2/g bound, 8-9 orders of magnitude short, and the region-separated conversion channel is subdominant to elastic channels whose strengths overlap between regions. Dominant systematic in the cluster analyses is the modelling of the galaxy-vs-dark-matter lensing offsets and baryonic contamination of the centroids, which floors the method at the ~0.1-0.5 cm^2/g level -- irrelevant at this margin.",
          "outcomes": [
            {
              "label": "not seen",
              "regions": [
                "R0",
                "R1"
              ]
            }
          ]
        },
        {
          "kind": "novel",
          "attach_to": "R0+R1",
          "name": "Dark-partner conversion cross-section si si -> si sr",
          "observable": "sigma(si si -> si sr) > 1e-35 cm^2 at sqrt(s) = 191 GeV ?",
          "what_this_is": "The dark-matter particle here has a slightly heavier twin, called si, that existed in the hot early universe but annihilated away completely as the universe cooled and cannot be regenerated. The one measurement that would tell the two regions apart is the probability that two of these twins collide and one converts into a dark-matter particle, absorbing about 0.8 GeV of kinetic energy -- a two-to-two scattering cross-section that directly measures the single coupling the regions do not share. It would require producing and colliding beams of a particle that no longer exists anywhere and has essentially no coupling to ordinary matter, which is why this node documents an irreducible degeneracy rather than a feasible experiment.",
          "why_novel": "No literature proposes measuring the quartic self-couplings of a cosmologically depleted dark-sector partner state: existing dark self-coupling work (SIDM constraints from halo shapes and cluster mergers, reviewed by Tulin & Yu) probes only the surviving relic's elastic self-scattering, which here is both hopelessly small and overlapping between the regions; inelastic-SIDM studies consider keV-MeV splittings with astrophysically active channels. The strictly separating quantity lambda(si^3 sr) appears only in scattering with at least three extinct-partner legs -- an observable never considered because it is unreachable.",
          "refs": [
            "arXiv:1705.02358"
          ],
          "reasoning": "After resumming the merged builds' duplicate monomials, lambda(si^3 sr) = alpha5+alpha10+alpha15 is the ONLY strictly non-overlapping physical quantity: R0 <= 0.06, R1 >= 0.48. It mediates si si -> si sr with sigma = lambda^2/(64 pi s); at threshold sqrt(s) ~ 2*MDM + dm ~ 191 GeV this gives R1: 1.2e-35 to 5e-33 cm^2 vs R0: <= 2e-37 cm^2 -- a deterministic factor >= 60 gap, so the 1e-35 cm^2 cut partitions every point of the leaf, unlike any elastic sigma/m proposal (those overlap). Every less direct imprint fails: halo dark matter moves at ~1e-3 c, far below the ~0.18 c needed to open the 0.8 GeV endothermic channel, and the exothermic reverse has essentially no target since si was depleted at T ~ 1 GeV (both regions keep f_sr ~ 1 via their overlapping depletion channels); one-loop h -> si si adds up to 3.6% (R1) vs 0.55% (R0) to the invisible width -- overlapping, since R1's floor gives ~0.01%; lambda(sr^4) loop corrections to the sigma_SI/BR(h->inv) relation are 2-13% (R1) vs 0.07-7% (R0) -- overlapping; radiative sr-si mixing gives the partner an O(10 s) lifetime, but its collider regeneration carries (alpha1*lambda/16pi^2)^2 ~ 1e-10 on an already invisible-Higgs-suppressed rate -- far below one event ever.",
          "feasibility": "Closest existing technique: halo-scale self-interaction constraints (Bullet-cluster-type lensing), which probe the wrong particle and the wrong coupling and overlap between regions here. What would have to be built: a source and collider of si beams at ~95 GeV and v ~ 0.2c -- impossible, since si is cosmologically extinct, SM-sterile in both initial and final state, and its only production channel from our sector is a doubly portal- and loop-suppressed process (effective coupling ~ alpha1*lambda/16pi^2 ~ 1e-5) yielding far fewer than one pair at any conceivable luminosity; halo number densities are ~40 orders of magnitude below any usable beam. This is a hard rate floor, not a technology gap: the couplings that distinguish R0 from R1 belong to a particle the universe destroyed at T ~ 1 GeV, so the residual degeneracy is physically irreducible. The elastic sigma/m alternative was considered and rejected because its predictions overlap between the regions at any sensitivity.",
          "feasibility_rating": "impossible",
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

<!-- CsSg_DM.Z2+3+4+5__yyy.md -->

## Reasoning — leaf `root_yes_yes_yes` (112 pts, R0 + R1 + R2)

**Cluster-merger dark-matter self-interaction bound** (literature split). The regions differ only in the physical quartic sums (lambda_rrrr = a2+a7+a12, etc. - the merged Z2..Z5 builds triplicate each monomial). At geometric-mean couplings, taking the card's literal alpha*O normalization (4! vertex factor): R0 lambda(sr^4) ~ 8.3, lambda(si^2sr^2) ~ 11.8 -> sigma/m ~ 1.6e-8 cm^2/g; R1 -> ~3.5e-10; R2 -> ~1.4e-10 cm^2/g. R0 is the only region with floors (lambda_rrrr >= 2.28, lambda_rrii >= 6.81). The published bounds are sigma/m < 0.47 cm^2/g (72 collisions) and < 1.25 cm^2/g (Bullet Cluster): every region sits 7-9 orders below, so existing data returns the identical 'not seen' for all three. A lambda/4! operator convention would lower all predictions by ~576, only strengthening the null. No split: the strongest region (R0) predicts 1.6e-8 cm^2/g, a factor ~3e7 below the 0.47 cm^2/g bound. The dominant systematic in the bound (lensing-vs-galaxy centroid modelling in ongoing mergers) is irrelevant at this margin; no reinterpretation moves it seven orders. Recorded as the honest statement that the one existing measurement aimed at the differing couplings is hopelessly far away.

**XLZD rate vs FCC-ee invisible-width consistency** (literature projection on R0 + R1 + R2). The portal term alpha1 H^2 sr^2 splits the complex scalar into two stable states separated by dm = alpha1 v^2/2M ~ 0.8 GeV, of which only sr talks to the SM; the sterile-si fraction is set by dark conversion (si si <-> sr sr via lambda_rrii, si sr <-> sr sr via lambda_rrri) during and after freeze-out. R0 (lambda_rrii >= 6.8) and R2 (lambda_rrri >= 0.19, sigma_v ~ 8e-26 cm^3/s, above thermal) have conversion floors that PIN their composition at a common conversion-equilibrium value, predicting a common ratio ~2-4e-45 cm^2; R1 is the only region whose depletion floors are all ~0.02-0.05, letting conversion freeze early and the composition drift, ratio ~0.3-1.5e-45 cm^2. Consistency: ratio x BR(0.0032-0.01) gives sigma_SI ~ 1e-47 cm^2, exactly the path's 1-10x-LZ band. Two flagged caveats: (i) sr is the heavier state, and late conversion equilibrium favors the lighter si, so the pinned value need not be f_sr ~ 1 and the sign of R1's departure depends on the conversion-decoupling temperature relative to dm - the robust content is that R0/R2 sit at a common pinned ratio while R1 alone drifts, so a ratio away from the pinned band in either direction indicates R1; (ii) one-sided: R1's strong-coupling tail (lambda_rrii up to 7.8) lands on the pinned side - the split targets R1's cluster core, and the 'full ratio' outcome does not exclude R1. Today: ATLAS Run-2 combination bounds BR(h->inv) < 0.107 (limit only); required: measure BR ~ 0.005 to ~30%, i.e. sensitivity ~2e-3, the published FCC-ee/CEPC reach (de Blas et al.) -> factor ~50 in the branching-ratio observable itself (no luminosity conversion needed; the projection is quoted directly in BR). XLZD side: the path guarantees a signal at 1-10x the LZ limit, giving O(10^2-10^3) events in ~1000 t.yr - rate to ~5-25%, statistics-limited (sqrt(exposure) scaling). Dominant systematic: the local dark-matter density (~20-30%), which enters the rate-to-sigma_SI conversion but not the factor >=2 composition effect being sought. Both facilities are proposed, routinely-built classes: next generation.

**Self-interaction erosion of the Sgr A* dark-matter spike** (novel observable on R0 + R2). In a Gondolo-Silk spike (rho ~ r^-7/3, saturating at the annihilation plateau rho_ann = m/(<sigma v> t)), the self-scattering optical depth scales as r^-17/6, a core forms at r_c ~ sigma_self^(6/17), and the flux scales as Phi ~ sigma_self^(-10/17). Predicted elastic cross-sections (physical sums, literal normalization): sigma_self ~ 2.7e-30 cm^2 (R0) vs 2.4e-32 cm^2 (R2) - a factor ~110, giving a flux ratio ~16. Using this leaf's actual portal annihilation <sigma v> ~ (1-3)e-28 cm^3/s (not the thermal 3e-26: alpha1 ~ 0.0024 suppresses it ~100-300x, raising the plateau density and shrinking the plateau radius; net flux scales as <sigma v>^(2/7), ~5x dimmer than the thermal-assumption estimate): Phi(E>10 GeV) ~ 3e-10 cm^-2 s^-1 for R2 vs ~1e-11 for R0, both as a hard-spectrum source with a sharp endpoint at 94.5 GeV against the softer astrophysical 4FGL J1745.6-2859. All fluxes are order-of-magnitude and scale linearly with the spike normalization. One-sided, flagged: a bright hard source with the 94.5 GeV endpoint selects R2; a dim result does NOT exclude R2, since 'no spike ever formed' also gives dim. A lambda/4! operator convention would lower both sigma_self values ~576x and weaken the erosion lever; the factor-110 R0/R2 ratio survives. The obvious alternative on this terminal, a cluster-lensing self-interaction bound pushed to sigma/m ~ 1e-10 cm^2/g, needs a ~5e9 sensitivity gain against a ~0.1 cm^2/g astrophysical floor - impossible - which is why this speculative route is proposed instead. Closest existing technique: Fermi-LAT and H.E.S.S. Galactic-Centre point-source data plus GRAVITY S-star astrometry (bounding the extended mass inside S2's orbit at the ~1000 M_sun level); CTA has the effective area and angular resolution for the spectral separation, so no new instrument is needed. The dominant systematic is astrophysical, not instrumental: whether an adiabatic spike survives around Sgr A* (stellar heating, merger history) is unknown at the order-of-magnitude level, and the normalization enters the flux linearly - extracting a factor-16 deficit requires an independent dynamical determination of the spike to better than a factor of a few, beyond any funded astrometric program. That inversion, not the photon counting, is the realistic obstacle: speculative.
```json
{
  "model": "CsSg_DM.Z2+3+4+5",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_yes",
      "lit_search_note": "Existing-data sweep, all confirmed non-discriminating: Fermi-LAT dwarf stacking and H.E.S.S./MAGIC/VERITAS GC (all regions predict sigma_v ~ (1-3)e-28 cm^3/s, >=100x below reach); Planck CMB energy injection (same alpha1^2 suppression); AMS-02 antiprotons; published LZ/XENONnT/PandaX limits (per-particle sigma_SI fixed by shared (alpha1, MDM)); ATLAS/CMS h->inv (limit 0.107 vs predicted 0.003-0.01); LEP EWPO (gauge singlet); electron EDM (R1's dark-CP-odd couplings reach the SM at >=3 loops, ~1e-40 e.cm); h*->4S collider production (sub-attobarn); cluster self-interaction (the no-split node above). The merged Z2..Z5 builds duplicate monomials - only the sums lambda_rrrr=a2+a7+a12, lambda_rrii=a4+a9+a14, lambda_iiii=a6+a11+a16, lambda_rrri=a3+a8+a13, lambda_riii=a5+a10+a15 are physical; part of the DBSCAN separation lies along redundant directions and all splits argue with the sums.",
      "splits": [
        {
          "kind": "lit",
          "attach_to": "leaf",
          "name": "Cluster-merger dark-matter self-interaction bound",
          "observable": "sigma_self/m_DM > 0.47 cm^2/g ?",
          "what_this_is": "When two galaxy clusters collide, their stars pass through each other while the hot gas is slowed by ordinary collisions; gravitational lensing maps where the dark matter ends up, which measures how strongly dark-matter particles scatter off each other. This is the best existing probe of forces acting purely inside the dark sector, and it is the relevant check here because the three regions of this leaf are identical in everything a Standard-Model-facing experiment sees and differ only in their dark self-couplings.",
          "refs": [
            "arXiv:0704.0261",
            "arXiv:1503.07675"
          ],
          "reasoning": "The regions differ only in the physical quartic sums (lambda_rrrr = a2+a7+a12, etc. - the merged Z2..Z5 builds triplicate each monomial). At geometric-mean couplings, taking the card's literal alpha*O normalization (4! vertex factor): R0 lambda(sr^4) ~ 8.3, lambda(si^2sr^2) ~ 11.8 -> sigma/m ~ 1.6e-8 cm^2/g; R1 -> ~3.5e-10; R2 -> ~1.4e-10 cm^2/g. R0 is the only region with floors (lambda_rrrr >= 2.28, lambda_rrii >= 6.81). The published bounds are sigma/m < 0.47 cm^2/g (72 collisions) and < 1.25 cm^2/g (Bullet Cluster): every region sits 7-9 orders below, so existing data returns the identical 'not seen' for all three. A lambda/4! operator convention would lower all predictions by ~576, only strengthening the null.",
          "feasibility": "No split: the strongest region (R0) predicts 1.6e-8 cm^2/g, a factor ~3e7 below the 0.47 cm^2/g bound. The dominant systematic in the bound (lensing-vs-galaxy centroid modelling in ongoing mergers) is irrelevant at this margin; no reinterpretation moves it seven orders. Recorded as the honest statement that the one existing measurement aimed at the differing couplings is hopelessly far away.",
          "outcomes": [
            {
              "label": "not seen",
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
          "name": "XLZD rate vs FCC-ee invisible-width consistency",
          "observable": "sigma_SI(std halo) / BR(h->inv) >= 2e-45 cm^2 ?",
          "what_this_is": "A next-generation xenon detector (XLZD) counts dark-matter recoils and turns them into a scattering cross-section assuming all local dark matter scatters, while an electron-positron Higgs factory (FCC-ee or CEPC) measures how often the Higgs decays invisibly. In this model both come from the same Higgs coupling, but the recoil rate is additionally proportional to how much of the local dark matter is the Higgs-coupled component of the complex scalar, whereas the Higgs decay is not. The ratio of the two therefore measures the dark matter's composition - exactly the quantity that only region R1 can vary.",
          "refs": [
            "arXiv:2410.17137",
            "arXiv:1905.03764",
            "arXiv:2301.10731"
          ],
          "reasoning": "The portal term alpha1 H^2 sr^2 splits the complex scalar into two stable states separated by dm = alpha1 v^2/2M ~ 0.8 GeV, of which only sr talks to the SM; the sterile-si fraction is set by dark conversion (si si <-> sr sr via lambda_rrii, si sr <-> sr sr via lambda_rrri) during and after freeze-out. R0 (lambda_rrii >= 6.8) and R2 (lambda_rrri >= 0.19, sigma_v ~ 8e-26 cm^3/s, above thermal) have conversion floors that PIN their composition at a common conversion-equilibrium value, predicting a common ratio ~2-4e-45 cm^2; R1 is the only region whose depletion floors are all ~0.02-0.05, letting conversion freeze early and the composition drift, ratio ~0.3-1.5e-45 cm^2. Consistency: ratio x BR(0.0032-0.01) gives sigma_SI ~ 1e-47 cm^2, exactly the path's 1-10x-LZ band. Two flagged caveats: (i) sr is the heavier state, and late conversion equilibrium favors the lighter si, so the pinned value need not be f_sr ~ 1 and the sign of R1's departure depends on the conversion-decoupling temperature relative to dm - the robust content is that R0/R2 sit at a common pinned ratio while R1 alone drifts, so a ratio away from the pinned band in either direction indicates R1; (ii) one-sided: R1's strong-coupling tail (lambda_rrii up to 7.8) lands on the pinned side - the split targets R1's cluster core, and the 'full ratio' outcome does not exclude R1.",
          "feasibility": "Today: ATLAS Run-2 combination bounds BR(h->inv) < 0.107 (limit only); required: measure BR ~ 0.005 to ~30%, i.e. sensitivity ~2e-3, the published FCC-ee/CEPC reach (de Blas et al.) -> factor ~50 in the branching-ratio observable itself (no luminosity conversion needed; the projection is quoted directly in BR). XLZD side: the path guarantees a signal at 1-10x the LZ limit, giving O(10^2-10^3) events in ~1000 t.yr - rate to ~5-25%, statistics-limited (sqrt(exposure) scaling). Dominant systematic: the local dark-matter density (~20-30%), which enters the rate-to-sigma_SI conversion but not the factor >=2 composition effect being sought. Both facilities are proposed, routinely-built classes: next generation.",
          "feasibility_rating": "next generation",
          "improvement_factor": 50,
          "outcomes": [
            {
              "label": "full ratio",
              "regions": [
                "R0",
                "R2"
              ]
            },
            {
              "label": "suppressed",
              "regions": [
                "R1"
              ]
            }
          ]
        },
        {
          "kind": "novel",
          "attach_to": "R0+R2",
          "name": "Self-interaction erosion of the Sgr A* dark-matter spike",
          "observable": "Phi_gamma(E > 10 GeV, Sgr A* point source) >= 1e-10 cm^-2 s^-1 ?",
          "what_this_is": "A black hole that grows slowly at a galaxy's centre drags dark matter into an extremely dense 'spike', where annihilation makes a gamma-ray point source. If dark-matter particles scatter off each other even very weakly, they are deflected into the black hole, carving out the spike's core and dimming that source. The spike's density is ~10 orders of magnitude above a cluster core, so it is the one environment in nature where the dark self-couplings that alone distinguish R0 from R2 leave any observable mark: R0's guaranteed-large couplings erode the spike ~16 times more than R2's.",
          "why_novel": "The literature uses black-hole spikes as amplifiers of the annihilation signal and treats self-scattering there as a nuisance degrading the prediction; it has not proposed the spike as a self-interaction METER - inverting the point-source flux deficit, via Phi ~ sigma_self^(-10/17), into a measurement of sigma_self in the 1e-32 to 1e-30 cm^2 range, ten orders below any halo-scale probe. The closest paper (Gondolo-Silk) computes the spike annihilation flux assuming collisionless dark matter.",
          "refs": [
            "arXiv:astro-ph/9906391"
          ],
          "reasoning": "In a Gondolo-Silk spike (rho ~ r^-7/3, saturating at the annihilation plateau rho_ann = m/(<sigma v> t)), the self-scattering optical depth scales as r^-17/6, a core forms at r_c ~ sigma_self^(6/17), and the flux scales as Phi ~ sigma_self^(-10/17). Predicted elastic cross-sections (physical sums, literal normalization): sigma_self ~ 2.7e-30 cm^2 (R0) vs 2.4e-32 cm^2 (R2) - a factor ~110, giving a flux ratio ~16. Using this leaf's actual portal annihilation <sigma v> ~ (1-3)e-28 cm^3/s (not the thermal 3e-26: alpha1 ~ 0.0024 suppresses it ~100-300x, raising the plateau density and shrinking the plateau radius; net flux scales as <sigma v>^(2/7), ~5x dimmer than the thermal-assumption estimate): Phi(E>10 GeV) ~ 3e-10 cm^-2 s^-1 for R2 vs ~1e-11 for R0, both as a hard-spectrum source with a sharp endpoint at 94.5 GeV against the softer astrophysical 4FGL J1745.6-2859. All fluxes are order-of-magnitude and scale linearly with the spike normalization. One-sided, flagged: a bright hard source with the 94.5 GeV endpoint selects R2; a dim result does NOT exclude R2, since 'no spike ever formed' also gives dim. A lambda/4! operator convention would lower both sigma_self values ~576x and weaken the erosion lever; the factor-110 R0/R2 ratio survives. The obvious alternative on this terminal, a cluster-lensing self-interaction bound pushed to sigma/m ~ 1e-10 cm^2/g, needs a ~5e9 sensitivity gain against a ~0.1 cm^2/g astrophysical floor - impossible - which is why this speculative route is proposed instead.",
          "feasibility": "Closest existing technique: Fermi-LAT and H.E.S.S. Galactic-Centre point-source data plus GRAVITY S-star astrometry (bounding the extended mass inside S2's orbit at the ~1000 M_sun level); CTA has the effective area and angular resolution for the spectral separation, so no new instrument is needed. The dominant systematic is astrophysical, not instrumental: whether an adiabatic spike survives around Sgr A* (stellar heating, merger history) is unknown at the order-of-magnitude level, and the normalization enters the flux linearly - extracting a factor-16 deficit requires an independent dynamical determination of the spike to better than a factor of a few, beyond any funded astrometric program. That inversion, not the photon counting, is the realistic obstacle: speculative.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {
              "label": "dim",
              "regions": [
                "R0"
              ]
            },
            {
              "label": "bright",
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
