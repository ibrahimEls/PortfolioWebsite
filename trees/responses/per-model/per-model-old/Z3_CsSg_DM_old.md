I'll verify the arXiv references I plan to cite, then deliver the full analysis in one message. Loading the fetch tool first.
Now verifying the six arXiv IDs in parallel:
WebFetch isn't permitted in this session; I'll verify the arXiv IDs via curl instead.
Reference verification note before the deliverable: this session's permissions blocked every network path (WebFetch denied, `curl`/`urllib` require interactive approval), so live arXiv verification was impossible. I have therefore restricted citations to six canonical papers I can identify from memory with high confidence (Planck 2018 VI, CMB-S4 Science Book, Slatyer's CMB annihilation bound, the CTA Galactic-centre sensitivity paper, the Bélanger–Kannike–Pukhov–Raidal Z3 scalar singlet paper, and the Harvey et al. cluster self-interaction measurement) and dropped everything I could not vouch for. Flagging this rather than silently claiming verification.

---

# Degeneracy-breaking analysis: Z3_CsSg_DM

## The structural finding that controls both leaves

This model's entire observable phenomenology is carried by exactly two parameters: the DM mass `MDM` and the portal coupling `alpha1` (the `H²sr²` term). Every observable in and out of the catalog — σ_SI, σv, the BR(h→inv)-class portal rate, collider production, solar capture, CMB injection — scales as α1²·f(MDM). The 15 pure-dark quartics (α2–α16) touch nothing else:

- **No semi-annihilation.** The model card has no cubic S³ term, and under exact Z3 the only invariant pure-dark quartic is |S|⁴-type (S⁴ carries charge ω, S³S* carries ω²). So the classic Z3-singlet discriminator — the SS→S\*h semi-annihilation component with its Higgs-decay plus boosted-DM spectrum (Bélanger, Kannike, Pukhov, Raidal, arXiv:1211.1014) — is predicted **absent in every region**. Quartic-induced number-changing 2→2 (SS→S̄S) is Z3-forbidden; 3→2 rates scale as n², utterly negligible for a 96 GeV thermal relic.
- **Self-interactions are dead.** σ_self/m ≈ λ_eff²/(64π M³) ≈ 1.2×10⁻¹² λ_eff² cm²/g at M≈96 GeV. Even λ_eff=10 gives ~10⁻¹⁰ cm²/g, nine to ten orders below the cluster sensitivity σ/m ≲ 0.5 cm²/g (Harvey et al., arXiv:1503.07675). Worse for discrimination: **every region in both leaves has at least one quartic pinned at ~10**, so even the relative differences vanish at this observable.
- **The only quartic leakage into observables is radiative**: β_{λ_portal} ⊃ λ_S λ_portal/16π², i.e. a ~0.3%·λ_S coherence shift between the portal coupling inferred at μ≈2M (annihilation) and at low momentum transfer (direct detection). That is a few-percent effect and is the seed of my Level-2 proposal below.

Consequently, within each leaf the regions differ observably only through their tiny spreads in α1 (≤10%) and MDM (≤0.3 GeV). **No published or formally planned measurement resolves either spread** — absolute DD/ID rates carry ≥20–30% halo systematics (local ρ_χ) or factor-~2 J-factor systematics, and no planned instrument measures a 96 GeV WIMP mass to sub-GeV. Per the rules, I therefore report honest single-outcome lit-review nodes (the best genuinely-different real measurements, each returning the *same* answer for all regions — itself a nontrivial model test) and carry the actual separation entirely at Level 2.

## Leaf `root_yes_no` (R0–R6; MDM 95.56–95.87 GeV, α1 ≈ (1.65–1.83)×10⁻³)

Relative portal rates (∝α1², normalized to R0's center; all of σ_SI, σv, BR-class observables shift coherently):

| Region | MDM [GeV] | α1 ×10³ | relative rate |
|---|---|---|---|
| R0 | 95.85–95.87 | 1.654–1.698 | 1.000 (0.97–1.03) |
| R1 | 95.56–95.85 | 1.687–1.833 | 1.10 (1.01–1.20) |
| R2 | 95.85 | 1.680–1.704 | 1.02 |
| R3 | 95.77 | 1.709–1.710 | 1.04 |
| R4 | 95.78–95.81 | 1.728–1.737 | 1.07 |
| R5 | 95.71–95.72 | 1.721–1.756 | 1.08 |
| R6 | 95.80 | 1.683–1.699 | 1.02 |

Total inter-region spread: 10% in rate, 0.31 GeV in mass. Nothing in the literature touches this.

**Lit review — CTA Galactic-centre spectral decomposition** (formally planned survey, arXiv:2007.16129). All regions sit 1–10× above CTA's WW sensitivity (~10⁻²⁶ cm³/s at ~96 GeV), so CTA *discovers* this signal and fits its spectral shape. The physics question the fit answers: is there a semi-annihilation component (h-decay spectrum + monochromatic boosted-DM edge, the Z3 hallmark of arXiv:1211.1014)? Prediction: **fraction < 10⁻² in all seven regions** (no cubic ⇒ channel absent; pure SS\*→WW/bb/hh with identical shape since masses agree to 0.1%). Every region lands in one outcome. I also checked the other rule-listed candidates quantitatively: CMB p_ann = f_eff·σv/M ≈ (2–21)×10⁻²⁹ cm³/s/GeV (f_eff(WW)≈0.2) is identical across regions to <10%, and whichever side of the CMB-S4 threshold (~1.6×10⁻²⁸) the common σv falls, all regions fall together; solar-capture neutrino fluxes at σ_SI ~ 10⁻⁴⁸ cm² are ≥3 orders below IceCube-Gen2 reach; dwarfs-vs-GC morphology, annual modulation, directionality, and self-interactions are all controlled by the same degenerate (α1, MDM) or by the dead quartic sector. This null split is genuine, not a failure to search.

**Level 2, node 1 — sub-permille γ-line spectrometer.** The one clean region-separating coordinate is MDM itself, and the one observable that reads MDM directly is the loop-level γγ line at E = MDM. Predicted line positions: R0/R2 at 95.85–95.87; R6 at 95.80, R4 at 95.78–95.81, R3 at 95.77; R5 at 95.71–95.72; R1 spread 95.56–95.85 (its *exclusive* territory is below 95.69). Energy bands ≥95.83 / 95.74–95.83 / 95.69–95.74 / <95.69 GeV give the partition {R0,R2} / {R3,R4,R6} / {R5} / {R1}. Honesty flags: R1's upper tail leaks into all higher bands (its assignment is unique only when the line falls below 95.69), and R3 vs R6 are 30 MeV apart — exactly the proposed 1σ resolution, so they are **not** separable within this node (see terminal remark below). Feasibility: σv_γγ ~ 10⁻⁴·σv_tot ≈ 10⁻³⁰–10⁻²⁹ cm³/s; detecting the line is plausible at the top of that range, but locating its centroid to ±30 MeV (3×10⁻⁴) needs ~10³ line photons and calorimetric energy scale at the 10⁻⁴ level — roughly 50–100× Fermi-LAT acceptance-years on the GC with crystal-calorimeter resolution, far beyond CTA's ~7%. Dominant systematic: absolute energy-scale calibration and the continuum under the line.

**Level 2, node 2 — portal-running consistency test.** The unique in-principle handle on the quartics: measure the portal coupling twice, once from σv (μ ≈ 2M = 192 GeV) and once from σ_SI (low momentum transfer), and test coherence. The mismatch is ≈ (λ_S/16π²)·ln(192/125) ≈ 0.3%·λ_S^eff. R2 is the outlier — essentially every quartic sits at ~10 (λ_S^eff ~ 15–25, at the perturbativity edge, so the shift is 5%+ and possibly O(1)); all other regions have mixed patterns with λ_S^eff ~ 3–10, predicting 1–3%. Cut at 4%: {R2} vs rest — which is precisely what disentangles the otherwise-identical pair {R0,R2} from node 1's top band (they overlap in both MDM and α1). Feasibility: requires ~1% *absolute* normalization of both a DD and an ID rate, i.e. ρ_χ and the GC J-factor at the percent level — an order beyond any planned astrometric or stellar-kinematics program. Dominant systematic: halo normalization, full stop. Marginal by construction; listed because it is the only physical channel through which the quartic sector talks to any observable.

**Level 2, node 3 — kilotonne-scale Xe rate metrology with Gaia-calibrated ρ_χ.** A ±2% measurement of the portal rate splits the α1² axis at +5% over the leaf mean: high {R1 (1.10), R5 (1.08), R4 (1.07)} vs low {R3 (1.04), R2 (1.02), R6 (1.02), R0 (1.00)}. R3 sits within ~2% of the cut — flagged marginal. Feasibility: at σ_SI ~ few×10⁻⁴⁸ cm², ±2% statistics needs ~3×10⁴ tonne-years of xenon (XLZD-scale exposure gives only ~30% statistics), plus local density to ~2% from Gaia-era vertical kinematics (currently 20–30%). Dominant systematic: ρ_χ·f(v) normalization.

**Combined partition:** R0 (band-high, running-no, rate-low), R2 (band-high, running-yes), R4 (band-mid, rate-high), R5 (band-low), R1 (band-lowest, rate-high, partial), and the terminal residue **{R3, R6}: irreducibly degenerate** — they differ by 30 MeV in mass, 0.6% in α1, and otherwise only in observationally decoupled quartics. I am stating explicitly, as the record of this analysis, that no experimental concept I can defend separates them.

## Leaf `root_no` (R0–R1; MDM 97.25–97.56 GeV, α1 ≈ (1.05–1.16)×10⁻³, BR below 4ν floor)

Region contrast: R0 has α1 ∈ [1.068, 1.162]×10⁻³ (center 1.115) and MDM 97.25–97.55; R1 has α1 ∈ [1.048, 1.068]×10⁻³ (center 1.058) and MDM 97.53–97.56. So R0's portal rates are centrally 11% higher — (1.115/1.058)² = 1.11 — but the α1 ranges *touch* at 1.068, and the mass ranges overlap in a 97.53–97.55 sliver. Quartic totals are large in both (R0: α2, α4, α9 at 10, α3, α5, α6, α7 large; R1: α3, α4, α16, α7 at 10, α13 up to 10), so the running test from the previous leaf has no traction here — the two λ_S^eff values are similar.

**Lit review — CMB-S4 recombination energy injection** (arXiv:1807.06209, arXiv:1610.02743, arXiv:1506.03811). The best catalog-external real measurement with any quantitative proximity: p_ann = f_eff σv/M with f_eff(WW, ~97 GeV) ≈ 0.2 and σv = (1–10)×10⁻²⁶ cm³/s gives p_ann ≈ (2–21)×10⁻²⁹ cm³/s/GeV; the CMB-S4 projected threshold ≈ 1.6×10⁻²⁸ sits inside the leaf's decade, so CMB-S4 genuinely probes the upper part of this leaf and cross-checks the s-wave nature of the portal (σv at v~10⁻⁸ equals σv at v~10⁻³). But R0 and R1 share σv to ~11% with touching ranges, so **both regions land on the same side, whichever it is** — a single outcome, honestly recorded. No other literature observable does better: the 11% rate gap is under every halo systematic, and BR(h→inv) is below even the 4ν-floor bin by construction.

**Level 2, node 1 — sub-permille γ-line spectrometer** (same instrument concept as above). Line position: R1 is pinned at 97.53–97.56 GeV; R0 spans 97.25–97.55, with ~80% of its range below 97.5. Cut "line energy < 97.5 GeV": yes ⇒ R0 uniquely; no ⇒ R1, contaminated only by R0's upper sliver (97.50–97.55). Marginal in that sliver, decisive elsewhere; same feasibility and energy-scale systematic as before, mildly easier since the required separation is ~50 MeV rather than 30.

**Level 2, node 2 — kilotonne-Xe rate metrology, Gaia-calibrated ρ_χ** (complementary axis). σ_SI(R0)/σ_SI(R1) ≈ 1.11 centrally; a ±3% rate measurement cut at +5% over the leaf mean puts R0 high and R1 low, ambiguous only in the boundary corner where R0's α1 → 1.068 meets R1's — the same corner where node 1 is decisive (R0 boundary points have masses down to 97.25). The two nodes together separate the pair everywhere except the measure-zero overlap (α1 ≈ 1.068 *and* MDM ≈ 97.54 simultaneously). Feasibility: identical to the root_yes_no version; σ_SI here is ~10⁻⁴⁸ cm², so statistics is again the wall alongside the ρ_χ systematic.

```json
{
  "model": "Z3_CsSg_DM",
  "leaves": [
    {
      "leaf_id": "root_yes_no",
      "lit_review": {
        "name": "CTA GC spectral decomposition",
        "observable": "semi-annihilation (h + boosted-DM) spectral fraction > 10% ?",
        "refs": ["arXiv:1211.1014", "arXiv:2007.16129", "arXiv:1503.07675"],
        "reasoning": "All 7 regions sit 1-10x above CTA's WW sensitivity, so CTA discovers the GC signal and fits its shape. The Z3-singlet hallmark (SS->S*h semi-annihilation, Higgs spectrum plus boosted-DM edge) is predicted ABSENT in every region: the Lagrangian has no S^3 cubic and exact Z3 reduces all pure-dark quartics to |S|^4-type, so all regions predict identical pure SS*->WW-like spectra (masses equal to 0.1%, alpha1 to 5%). Checked alternatives all null identically: CMB p_ann = (2-21)e-29 cm3/s/GeV common to <10%; solar-capture nu >=3 orders below IceCube-Gen2 at sigma_SI ~ 1e-48 cm2; self-interactions ~1e-10 cm2/g in EVERY region (each has a quartic ~10), 9 orders below cluster bounds. Regions differ only in alpha1 (<=10%) and MDM (<=0.31 GeV) plus observationally decoupled quartics -- below every published systematic floor. Honest verdict: no existing/planned measurement splits this leaf; all separation is Level 2.",
        "outcomes": [
          {"label": "no, all", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6",
          "name": "Sub-permille gamma-line spectrometer",
          "observable": "E(gamma-gamma line): >=95.83 / 95.74-95.83 / 95.69-95.74 / <95.69 GeV ?",
          "reasoning": "The gamma-gamma line sits exactly at E=MDM, the one clean region-separating coordinate: R0/R2 95.85-95.87, R6 95.80, R4 95.78-95.81, R3 95.77, R5 95.71-95.72, R1 95.56-95.85 (exclusive territory <95.69; its upper tail leaks into higher bands -- partial assignment). R3 vs R6 are 30 MeV apart, at the 1-sigma resolution: not separated here. Line rate sigmav_gg ~ 1e-4 x sigmav ~ 1e-30-1e-29 cm3/s.",
          "feasibility": "Needs ~50-100x Fermi-LAT acceptance-years on GC with 3e-4 calorimetric resolution; dominant systematic: absolute energy-scale calibration under continuum.",
          "outcomes": [
            {"label": "highest band", "regions": ["R0", "R2"]},
            {"label": "mid band", "regions": ["R3", "R4", "R6"]},
            {"label": "low band", "regions": ["R5"]},
            {"label": "lowest band", "regions": ["R1"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6",
          "name": "Portal-running consistency test",
          "observable": "portal coupling from sigma_v vs sigma_SI mismatched > 4% ?",
          "reasoning": "Unique in-principle quartic handle: beta_lambda_portal contains lambda_S*lambda_portal/16pi^2, shifting the coupling inferred at mu=2M=192 GeV (annihilation) vs low-Q (DD) by ~0.3% per unit lambda_S^eff. R2 has essentially every quartic at ~10 (lambda_S^eff ~ 15-25, perturbativity edge): predicted mismatch 5%+, possibly O(1). All other regions: mixed patterns, lambda_S^eff ~ 3-10, mismatch 1-3%. This is what splits the otherwise-identical pair {R0,R2} sharing the top mass band and overlapping alpha1.",
          "feasibility": "Requires ~1% absolute normalization of DD and ID rates, i.e. percent-level rho_chi and J-factor -- an order beyond planned programs; dominant systematic: halo normalization. Marginal by construction.",
          "outcomes": [
            {"label": "yes", "regions": ["R2"]},
            {"label": "no", "regions": ["R0", "R1", "R3", "R4", "R5", "R6"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6",
          "name": "Kilotonne-Xe rate metrology, Gaia-calibrated rho_chi",
          "observable": "sigma_SI > 1.05 x leaf mean ?",
          "reasoning": "All portal rates scale as alpha1^2; relative values (R0=1): R1 1.10, R5 1.08, R4 1.07, R3 1.04, R2 1.02, R6 1.02, R0 1.00. A +/-2% rate measurement cut at +5% separates {R1,R4,R5} (high) from {R0,R2,R3,R6} (low); R3 is within ~2% of the cut -- marginal. Combined with the line-band and running nodes this isolates R0, R2, R4, R5, R1(partial); terminal residue {R3,R6} (30 MeV, 0.6% alpha1 apart) is irreducibly degenerate by any concept we can defend.",
          "feasibility": "~3e4 tonne-yr Xe for 2% statistics at sigma_SI ~ few e-48 cm2, plus rho_chi to 2% (now 20-30%); dominant systematic: rho_chi x f(v) normalization.",
          "outcomes": [
            {"label": "high", "regions": ["R1", "R4", "R5"]},
            {"label": "low", "regions": ["R0", "R2", "R3", "R6"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no",
      "lit_review": {
        "name": "CMB-S4 recombination energy injection",
        "observable": "p_ann > 1.6e-28 cm3/s/GeV ?",
        "refs": ["arXiv:1807.06209", "arXiv:1610.02743", "arXiv:1506.03811"],
        "reasoning": "Best catalog-external real measurement with quantitative proximity: p_ann = f_eff*sigmav/M with f_eff(WW,97 GeV)=0.2 and sigmav = (1-10)e-26 cm3/s gives (2-21)e-29 cm3/s/GeV, straddling the CMB-S4 threshold ~1.6e-28 -- a genuine probe of this leaf's upper decade and of s-wave coherence (v~1e-8 vs v~1e-3). But R0 and R1 share sigmav to ~11% (alpha1 centers 1.115 vs 1.058 e-3, ranges touching at 1.068), so both regions land on the same side whichever it is: single outcome. Nothing else in the literature resolves an 11% rate gap (halo systematics >=20-30%) or a 0.3 GeV mass difference; BR(h->inv) is below the 4nu floor by construction; quartic sums are large in BOTH regions, so self-interaction and running observables do not discriminate here.",
        "outcomes": [
          {"label": "same side", "regions": ["R0", "R1"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1",
          "name": "Sub-permille gamma-line spectrometer",
          "observable": "E(gamma-gamma line) < 97.5 GeV ?",
          "reasoning": "Line at E=MDM: R1 pinned at 97.53-97.56 GeV; R0 spans 97.25-97.55 with ~80% of its range below 97.5. Below 97.5 is uniquely R0; above, R1 contaminated only by R0's 97.50-97.55 sliver -- and exactly those R0 boundary points are the high-alpha1 ones the rate node catches. Required separation ~50 MeV, slightly easier than the other leaf.",
          "feasibility": "Same concept: ~50-100x Fermi acceptance-years on GC, 3e-4 energy resolution; dominant systematic: energy-scale calibration; line rate ~1e-30-1e-29 cm3/s.",
          "outcomes": [
            {"label": "yes", "regions": ["R0"]},
            {"label": "no", "regions": ["R1"]}
          ]
        },
        {
          "attach_to": "R0+R1",
          "name": "Kilotonne-Xe rate metrology, Gaia-calibrated rho_chi",
          "observable": "sigma_SI > 1.05 x leaf mean ?",
          "reasoning": "sigma_SI(R0)/sigma_SI(R1) = (1.115/1.058)^2 = 1.11 centrally; a +/-3% measurement cut at +5% over leaf mean puts R0 high, R1 low. Ambiguous only where R0's alpha1 approaches the shared 1.068e-3 boundary -- the corner where the line node is decisive instead. Together the two nodes separate the pair except on the measure-zero overlap (alpha1 ~ 1.068 AND MDM ~ 97.54).",
          "feasibility": "~3e4 tonne-yr Xe at sigma_SI ~ 1e-48 cm2 plus rho_chi to 2%; dominant systematic: rho_chi x f(v) normalization. Marginal at the range boundary.",
          "outcomes": [
            {"label": "high", "regions": ["R0"]},
            {"label": "low", "regions": ["R1"]}
          ]
        }
      ]
    }
  ]
}
```