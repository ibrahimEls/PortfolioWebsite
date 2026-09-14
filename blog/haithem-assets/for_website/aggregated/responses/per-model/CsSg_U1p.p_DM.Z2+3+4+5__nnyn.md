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
