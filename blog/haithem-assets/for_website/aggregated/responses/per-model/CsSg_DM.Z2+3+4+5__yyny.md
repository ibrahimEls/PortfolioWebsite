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
