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
