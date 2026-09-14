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
