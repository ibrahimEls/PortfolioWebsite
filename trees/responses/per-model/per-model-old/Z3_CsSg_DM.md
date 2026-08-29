I'll verify the arXiv references I plan to cite before composing the answer.
Web access is not granted in this session, so I could not re-verify the arXiv IDs online; I therefore cite only two references whose IDs and contents I know with high confidence (both are canonical, heavily-cited cluster self-interaction measurements) and dropped a third candidate whose ID I was less sure of.

# Degeneracy-breaking analysis: Z3_CsSg_DM

## The core physical situation (both leaves)

Every region in both degenerate leaves has essentially the **same DM mass and the same Higgs-portal coupling**, and differs only in the pure dark-sector quartic self-couplings (alpha2–alpha16). That single fact controls everything below, so I establish it first.

- **Leaf `root_yes_no`** (R0–R6): MDM ∈ [95.56, 95.87] GeV — total spread 0.3%; alpha1 ∈ [1.654, 1.833]×10⁻³ — total spread ~10%, and the seven per-region alpha1 intervals mutually overlap or sit within ~1–2% of each other (low group R0/R2/R6 up to 1.704e-3, high group R4/R5 from 1.721e-3 — a 1% gap, with R3 at 1.709–1.710 inside the gap and R1 spanning 1.687–1.833, i.e. straddling everything).
- **Leaf `root_no`** (R0, R1): MDM 97.25–97.55 vs 97.53–97.56 GeV (ranges touch at 97.53–97.55); alpha1 1.068–1.162e-3 vs 1.048–1.068e-3 (ranges touch exactly at 1.068e-3).

All SM-visible observables of this model — σ_SI, σv into WW/ZZ/bb, the loop-induced γγ line rate, invisible-Higgs quantities, solar capture, CMB energy injection, antiproton/positron fluxes — are functions of (MDM, alpha1) at tree level. The quartics alpha2–alpha16 involve only sr and si and decouple from every SM current. So the regions differ by up to four orders of magnitude in couplings that are, to leading order, invisible; and they coincide to ≲1–10% in the two parameters that are visible. (Any residual per-region spread in the catalog's σv and BR(h→inv) values reflects relic-composition/rescaling effects of the dark quartics, but those values are only known here to the catalog's decade-wide bins, so they cannot anchor a quantitative cut. I also deliberately lean on nothing tied to BR(h→inv): with MDM ≈ 96 GeV the on-shell decay h→SS is closed, so the catalog quantity is an effective off-shell ratio whose per-region value I cannot predict.)

**Real measurements I considered and rejected as separators:**

- *Precision invisible-Higgs at FCC-ee/CEPC* (BR sensitivity ~0.2–0.3% at 95% CL): the leaf-level BR bin (0.001–0.0032) sits at or below that sensitivity, and per-region differences driven by alpha1² are only 2–10% relative — 10–100× below achievable precision. For `root_no` the signal is below the 4ν floor by construction, so no collider invisible-width measurement can even see it, let alone split it.
- *Precision σv at CTA (GC or dwarf stacking)*: per-region σv differences trace alpha1² (≲ 11–20%), while the J-factor systematic is ≥ 25% even for the best Gaia-calibrated dwarfs and a factor ~2 for the GC halo profile. Channel ratios (WW:ZZ:bb) and the line-to-continuum ratio are fixed by the portal structure and identical across regions.
- *Direct detection (annual modulation, directionality, multi-target)*: σ_SI is below DARWIN reach in both leaves (the tree already consumed the DARWIN split upstream), so no existing or formally projected DD program measures anything here.
- *Solar capture neutrinos, CMB p_ann, local antiprotons*: all ∝ alpha1²·f(MDM) — identical across regions to within a few percent.
- *Two-component composition effects*: sr and si split by Δm ≈ alpha1·v²/(2·MDM) ≈ 0.5 GeV, and the sr/si relic ratio depends on the quartic conversion couplings (alpha4+alpha9+alpha14 etc.) — a genuine quartic-sensitive observable in principle. But every region in both leaves has at least one O(10) conversion coupling, so the dark sector is fully chemically coupled at freeze-out in all of them and the composition comes out the same. No split.

**The one published measurement that couples directly to what actually differs** — the dark quartics — is the DM self-interaction cross-section from colliding galaxy clusters. That is therefore my Level-1 node for both leaves, and I report its outcome honestly: it does not separate anything, because the predicted signal is ~9 orders of magnitude below the bound. Per the rules, all regions then land in one lit-review outcome and the real work is done by a Level-2 novel experiment.

## Leaf `root_yes_no` (R0–R6)

**Level 1 — merging-cluster self-interaction limit (Harvey et al., arXiv:1503.07675: σ/m < 0.47 cm²/g from 72 cluster collisions; Randall et al., arXiv:0704.0261: σ/m < 1.25 cm²/g from the Bullet Cluster).** The effective same-species quartic λ_eff (e.g. sr⁴ sum alpha2+alpha7+alpha12) per region: R0 ≈ 11–20, R1 ≈ 11–20, R2 ≈ 23–30, R3 ≈ 24–29, R4 ≈ 10, R5 ≈ 12, R6 ≈ 14–20. The contact self-scattering σ/m ≈ λ_eff²/(64π·MDM³) evaluates to ≈ 1×10⁻¹⁰ cm²/g (R4, weakest) up to ≈ 1×10⁻⁹ cm²/g (R2/R3, strongest) — the only observable in which the regions differ by O(10) rather than O(few %). But all of it is ~9 orders of magnitude below the 0.47 cm²/g cluster bound, so every region returns "consistent." This is the best available real measurement in the precise sense that it is the *only* published observable with any coupling to the parameters that differ; it simply lacks the sensitivity. All seven regions go to one outcome.

**Level 2 — sub-0.1% γ-line energy spectrometry toward the GC.** The only per-region observable differing beyond the few-percent level in *visible* channels is the line **energy**: SS̄→γγ (portal loop, W-dominated) produces photons at E = MDM. Predicted line energies: R5: 95.71–95.72 GeV; R3: 95.77 GeV; R4: 95.78–95.81 GeV; R6: 95.80 GeV; R0: 95.85–95.87 GeV; R2: 95.85 GeV; R1: 95.56–95.85 GeV. A measurement of the line centroid to ±30–40 MeV splits three groups at cuts 95.75 and 95.83 GeV: {R5 (+R1)} below, {R3, R4, R6} between, {R0, R2} above. Honest caveats: (i) R1's six points span 95.56–95.85 GeV and genuinely straddle the bins — I assign it to the low bin by its lower edge, but it is only partially separable; (ii) within each bin the residual pairs ({R0,R2}, {R3,R4,R6}, {R1,R5}) coincide in both MDM and alpha1 to within any conceivable metrology and differ *only* in SM-decoupled quartics — that residue is physically irreducible by any falsifiable measurement I can defend. Feasibility: the line flux is σv_γγ ~ 10⁻²⁹–10⁻²⁸ cm³/s (γγ/WW ~ 10⁻⁴–10⁻³ on a WW rate at 1–10× the CTA limit), i.e. at the edge of CTA's projected GC line sensitivity; CTA's energy resolution at 100 GeV is ~6–7% (±6 GeV) and space calorimeters (DAMPE/HERD BGO/LYSO) reach ~1% (±1 GeV) but with ~10⁻¹ m²·sr acceptance. The concept needs CTA-scale collection area *with* ~0.04% energy resolution and matching absolute energy-scale calibration — ≳25× beyond the best existing resolution, with the absolute energy scale and the ~0.1% Doppler broadening/bulk-flow centroid shift of the GC halo as the dominant systematics. Rating: speculative.

## Leaf `root_no` (R0, R1)

**Level 1 — same cluster self-interaction limit.** λ_eff(sr⁴) ≈ 19–30 (R0) vs ≈ 16–19 (R1); σ/m ≈ (3–10)×10⁻¹⁰ vs (3–4)×10⁻¹⁰ cm²/g. Both ~9 orders below 0.47 cm²/g → both "consistent," no separation. Same honest verdict as above; both regions to one outcome.

**Level 2 — γ-line energy, binary cut at 97.5 GeV.** Predicted line energy: R1: 97.53–97.56 GeV; R0: 97.25–97.55 GeV (mean ≈ 97.4). A centroid measurement to ±50–70 MeV with the cut E ≥ 97.5 GeV puts R1 on "yes" and the bulk of R0 on "no"; the 20 MeV overlap of R0's upper edge with R1 means the split is marginal for R0's highest-mass points — stated plainly. Same instrument concept and systematics as above (~15–20× beyond DAMPE-class resolution at this energy, plus the absolute-energy-scale and Doppler-centroid systematics, on a loop-suppressed flux). The alternative discriminator — alpha1²-driven σ_SI or σv differing by ~11% in the means — fails because the ranges touch exactly at the boundary (alpha1 = 1.068e-3 is shared) and σ_SI is below DARWIN reach anyway, so I did not use it. Rating: speculative.

```json
{
  "model": "Z3_CsSg_DM",
  "leaves": [
    {
      "leaf_id": "root_yes_no",
      "lit_review": {
        "name": "Merging-cluster DM self-interaction limit",
        "observable": "sigma/m < 0.5 cm^2/g ?",
        "refs": [
          "arXiv:1503.07675",
          "arXiv:0704.0261"
        ],
        "reasoning": "The seven regions coincide in MDM (95.56-95.87 GeV, 0.3% spread) and portal alpha1 ((1.65-1.83)e-3, mutually overlapping), so every SM-visible observable (sigma_SI, sigmav, line rate, invisible-Higgs, capture, CMB p_ann) agrees across regions to a few percent; they differ by orders of magnitude only in the dark quartics alpha2-alpha16. The unique published measurement coupling to those quartics is DM self-scattering in colliding clusters (sigma/m < 0.47 cm^2/g, Harvey et al; < 1.25 cm^2/g Bullet). Predicted sigma/m = lambda_eff^2/(64 pi MDM^3) with lambda_eff ~ 10 (R4), ~11-20 (R0,R1,R5,R6), ~23-30 (R2,R3): sigma/m ~ 1e-10 to 1e-9 cm^2/g - nine orders below the bound. All regions are consistent; the measurement cannot separate them, so all seven pass to the novel-experiment node. Rejected alternatives: FCC-ee BR(h->inv) precision (region differences 2-10% relative on a BR at/below the 0.2-0.3% sensitivity floor), CTA sigmav precision (<=20% region spread vs >=25% J-factor systematic), DD observables (sigma_SI below DARWIN reach in this branch).",
        "status": "No Split!",
        "outcomes": [
          {
            "label": "consistent",
            "regions": [
              "R0",
              "R1",
              "R2",
              "R3",
              "R4",
              "R5",
              "R6"
            ]
          }
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6",
          "name": "Sub-0.1% GC gamma-line spectrometer",
          "observable": "E(gamma line): <95.75 / 95.75-95.83 / >=95.83 GeV ?",
          "reasoning": "The loop-induced SS->gamma gamma line sits at E = MDM, the only visible observable differing between regions beyond the percent level. Predicted centroids: R5 95.71-95.72; R3 95.77; R4 95.78-95.81; R6 95.80; R0 95.85-95.87; R2 95.85; R1 spans 95.56-95.85 GeV. Cuts at 95.75 and 95.83 GeV give three groups: {R1,R5} low, {R3,R4,R6} mid, {R0,R2} high. Caveats: R1 genuinely straddles the bins (assigned low by its lower edge, only partially separable); within-bin pairs coincide in both MDM and alpha1 and differ only in SM-decoupled quartics - irreducible by any falsifiable measurement. Line flux sigmav_gg ~ 1e-29 to 1e-28 cm^3/s (gamma gamma/WW ~ 1e-4 to 1e-3 on a WW rate at 1-10x the CTA limit), at the edge of CTA GC line sensitivity.",
          "feasibility": "Closest instruments: CTA (line sensitivity ~1e-28 cm^3/s at 100 GeV but dE/E ~ 6-7%) and DAMPE/HERD-class calorimeters (dE/E ~ 1% at 100 GeV but ~0.1 m^2 sr acceptance). Requires CTA-scale collection with ~0.04% energy resolution: >~25x beyond the best demonstrated resolution at this energy, on a loop-suppressed flux. Dominant systematics: absolute energy-scale calibration at the 3e-4 level and the ~0.1% Doppler broadening / bulk-flow centroid shift of the GC halo.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {
              "label": "below 95.75",
              "regions": [
                "R1",
                "R5"
              ]
            },
            {
              "label": "95.75-95.83",
              "regions": [
                "R3",
                "R4",
                "R6"
              ]
            },
            {
              "label": "above 95.83",
              "regions": [
                "R0",
                "R2"
              ]
            }
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no",
      "lit_review": {
        "name": "Merging-cluster DM self-interaction limit",
        "observable": "sigma/m < 0.5 cm^2/g ?",
        "refs": [
          "arXiv:1503.07675",
          "arXiv:0704.0261"
        ],
        "reasoning": "R0 and R1 coincide in the visible parameters - MDM 97.25-97.55 vs 97.53-97.56 GeV (ranges touch) and alpha1 (1.068-1.162)e-3 vs (1.048-1.068)e-3 (ranges touch at 1.068e-3) - and BR(h->inv) is below the 4nu floor, so no collider invisible-width measurement applies; sigma_SI is below DARWIN reach; sigmav means differ by only ~11% (alpha1^2), under the >=25% best-case J-factor systematic. The regions differ substantially only in dark quartics (e.g. alpha2: 10 vs 1.4-2.6; alpha16: 1.4-2.2 vs 10), probed only by cluster self-interaction data. Predicted sigma/m ~ (3-10)e-10 (R0) vs (3-4)e-10 cm^2/g (R1) - both nine orders below the 0.47 cm^2/g bound, so both return consistent and pass to the novel node.",
        "status": "No Split!",
        "outcomes": [
          {
            "label": "consistent",
            "regions": [
              "R0",
              "R1"
            ]
          }
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1",
          "name": "Sub-0.1% GC gamma-line spectrometer",
          "observable": "E(gamma line) >= 97.5 GeV ?",
          "reasoning": "The SS->gamma gamma line centroid at E = MDM is predicted at 97.53-97.56 GeV in R1 vs 97.25-97.55 GeV (mean ~97.4) in R0. A centroid measurement to +-50-70 MeV with a cut at 97.5 GeV assigns R1 to yes and the bulk of R0 to no; the 20 MeV overlap of R0's upper edge with R1's range makes the split marginal for R0's highest-mass points. The alternative alpha1^2-driven sigma_SI/sigmav split (~11% in means) fails because the alpha1 ranges share the boundary value 1.068e-3 and sigma_SI is below DARWIN reach.",
          "feasibility": "Same concept as the root_yes_no node: CTA has the collection area (line sensitivity ~1e-28 cm^3/s near 100 GeV) but 6-7% resolution; DAMPE/HERD calorimeters reach ~1% resolution with far too little acceptance. Requires ~15-20x beyond DAMPE-class resolution at 97 GeV plus 5e-4 absolute energy-scale control; dominant systematics are the absolute energy scale and the GC Doppler/bulk-flow centroid shift, on a loop-suppressed line flux.",
          "feasibility_rating": "speculative",
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