I'll verify the arXiv references I plan to cite before composing the single-message answer. Loading the web tools first.
All three references resolve and match (BaBar visible A′→ℓℓ, BaBar invisible A′, Belle II Physics Book). Composing the full answer now.

# Reasoning — leaf `root_no_yes_no_yes_yes_no_no_no_no_no`

## Why this leaf is degenerate for our catalog, and where the leverage is

Every unit in this leaf is a ~1–2 GeV complex scalar singlet charged under a dark U(1)′, sitting where the whole catalog goes quiet: BR(h→inv) is pinned at 0.01–0.032 by the portal coupling α₁ ≈ 0.002–0.003 (that is what put them in this leaf), while DD, ID, and neutrino telescopes all return "nothing." What the catalog never probes is **direct production of the Z′ itself**. Our only Z′ observable is the high-mass pp→Z′→ℓℓ Drell-Yan recast, which has no coverage at m(Z′) = 1–21 GeV where every one of these Z′ lives. The units differ enormously in exactly the parameters that control Z′ production and decay:

- **kinetic mixing ε spans five decades**: 0.1 (R2, R10), 0.072 (R5), ~10⁻²–10⁻³ (R1, R3, R11), ~10⁻⁴ (R4), ~10⁻⁶–3×10⁻⁵ (R6–R9, R12), with R0 smeared over [10⁻⁶, 1.5×10⁻³];
- **m(Z′)**: 1.00 GeV (R0–R2, R6–R9, R12), 1.254 GeV (R3, R4), 1.331 GeV (R11), 4.73 GeV (R10), 21 GeV (R5);
- **visible vs invisible Z′**: where m(Z′) < 2·M_DM (R0–R4, R6–R9, R11, R12) the Z′ can only decay to SM via ε — a classic *visible* dark photon. R10 (m(Z′)=4.73, M_DM=1, g′=0.30, ε=0.1) and R5 (m(Z′)=21, M_DM=1, g′=10) decay *invisibly*: Γ_inv/Γ_vis ≈ g′²/(ε²e²·N_f) ≈ 10²–10⁶.

So the natural Level-1 measurement is the B-factory dark-photon program, e⁺e⁻→γA′, which measures both decay modes of the same object in one apparatus and is not in the catalog in any form.

## Level 1: Belle II γ + dark-photon search (visible μμ/ee and single-photon invisible)

BaBar already excludes ε ≳ (1–3)×10⁻³ for visible A′ over 0.02–10.2 GeV (arXiv:1406.2980) and ε ≳ ~10⁻³ for invisibly decaying A′ up to 8 GeV (arXiv:1702.03327); Belle II runs both channels with projected reach a factor of a few better at full luminosity (arXiv:1808.10567). Taking a decision threshold ε ≈ 10⁻³ for 1 ≤ m(A′) ≤ 8 GeV, the per-region predictions are:

| Outcome | Regions | Predicted signal |
|---|---|---|
| **μμ/ee peak** | R2 (ε=0.1, 1.00 GeV), R3 (ε=8.9×10⁻³, 1.254 GeV), R11 (ε≈0.010, 1.331 GeV), R1 (ε=1.5×10⁻³–2.8×10⁻², 1.00 GeV) | narrow dimuon resonance; σ(e⁺e⁻→γA′)∝ε², from ~2× above the BaBar bound (R1 low edge, marginal) to ~10⁴× (R2). R2, R3, R11 and the upper half of R1 are in fact *already excluded* by 1406.2980 — this branch is partly a done measurement. |
| **invisible (missing-mass) peak** | R10 (ε=0.1, m=4.73 GeV, BR_inv≈95% since g′=0.30 ≫ εe) | monophoton with m²_miss peaked at 22 GeV², ~100× above the BaBar invisible bound; a weak μμ line (BR~5%) may accompany it. |
| **nothing** | R0, R4, R5, R6, R7, R8, R9, R12 | ε ≤ 1.5×10⁻³ (R0's top sliver is marginal — flagged), ε ≤ 1.8×10⁻⁴ (R4), ε ≤ 3.3×10⁻⁵ (R6–R9, R12); R5's ε=0.072 would be loud but m(Z′)=21 GeV is beyond the √s=10.58 GeV kinematic reach. |

This is a genuine three-way split, and it separates Lagrangians: both U(1)′[+] high-ε regions (R2, R10) land in "seen" branches distinct from most of the U(1)′[−] population.

## Level 2 chain (each node attaches to the still-degenerate outcome of the node above)

**N1 — A′ line spectroscopy (attach R1+R2+R3+R11).** The peak position itself finishes most of the work: 1.00 GeV (R1, R2) vs 1.254 GeV (R3) vs 1.331 GeV (R11). Belle II/LHCb dimuon mass resolution at 1 GeV is ~5–10 MeV; the smallest splitting to resolve is 77 MeV. No improvement factor needed → **possible**. Note R3 vs R11 is also a Lagrangian split (U(1)′[−] vs U(1)′[+]).

**N2 — A′ rate → mixing strength (attach R1+R2).** Same peak mass, but σ·BR ∝ ε²: R2 predicts ε = 0.1, R1 predicts ε ≤ 0.028 — a factor ≥ 13 in rate. A ±10% rate measurement at a cut ε = 0.05 cleanly separates them and splits the [+] from the [−] Lagrangian. **Possible** (dominant systematic: hadronic vacuum-polarization background near 1 GeV under the μμ continuum).

**N3 — Z-lineshape EW fit (attach R0+R4+R5+R6+R7+R8+R9+R12).** Kinetic mixing with m(Z′) ≪ m_Z shifts Z-pole observables at O(ε²); LEP-era EW fits constrain ε ≲ 0.03 for m(A′) < m_Z (Curtin–Essig–Gori–Shelton analysis), with FCC-ee Tera-Z projected to ~3×10⁻³. R5 predicts ε = 0.072 — already a >2× violation of the existing bound, i.e. a *detection* (or exclusion) in a re-fit of existing data; every other region predicts ε ≤ 1.5×10⁻³, invisible to any EW fit. **Possible** — it needs archival LEP data, not new hardware. (R5 is independently pathological: g′ = 10, α₂ = 9 are non-perturbative, so its Z′ is a ~14 GeV-wide continuum; the EW-fit statement uses only the ε² shift, which is robust to that.)

**N4 — SHiP beam-dump displaced A′ (attach R0+R4+R6+R7+R8+R9+R12).** A visible 1.0 GeV A′ has cτ ≈ 3 cm × (10⁻⁶/ε)² (ee+μμ+hadrons); with SHiP boosts γ ~ 20–100 behind ~45 m of shield and 4×10²⁰ POT, the accessible band at 1 GeV is ε ~ few×10⁻⁷ to ~2–3×10⁻⁶. Predictions: R12 (ε = 1.0–1.4×10⁻⁶, γcτ ~ 1–8 m, thousands produced) squarely inside; R6 (1–3.2×10⁻⁶) and R9 (1–3.9×10⁻⁶) inside at their lower edges, marginal at the top — flagged honestly. R7 (7.9×10⁻⁶, cτ ~ 0.5 mm), R8 (≤3.3×10⁻⁵), R4 (≤1.8×10⁻⁴, decays in the dump) predict zero decays in the volume; R0's log-bulk (median ε ~ 3×10⁻⁵) likewise, though its lowest decade would leak in — flagged. SHiP is approved and under construction at CERN ECN3 → **possible** (dominant systematic: proton-bremsstrahlung production form factor, a ~2–3× rate uncertainty that moves the band edge, which is why the R6/R9 upper edges are marginal). Note this split also isolates the Z2-only Lagrangian build (R12) into a two-Lagrangian branch.

**N5 — Halo-ensemble self-interaction (attach R6+R9+R12).** These three are identical in (M_DM, m_Z′, ε, g′); they differ only in the dark quartics, whose one observable handle is DM self-scattering. With the 4! vertex enhancement, σ_T/m ≈ (24α)²/(128π m³): R12 (α₄(si⁴) = 8–10, plus α₂(sr⁴) = 0.5–9.9 → *both* components strongly self-coupled) predicts ~0.02–0.05 cm²/g; R9 (α₆(si⁴) = 3.5–10, one component) ~0.004–0.03 cm²/g; R6 (all α ≤ 0.12) ~10⁻⁵ cm²/g. The R6-vs-rest cut at 3×10⁻³ cm²/g is a clean ≥100× separation; the R12-vs-R9 cut at 0.015 cm²/g overlaps at the range edges — stated as marginal. Current cluster ensembles bound ~0.5–1 cm²/g; Rubin-era halo-shape/merger ensembles project ~0.1; reaching 3×10⁻³ needs a further ~30× with baryonic-feedback systematics dominant → **speculative**, honestly.

**N6 — Belle II 50 ab⁻¹ displaced-vertex A′ (attach R0+R4+R7+R8).** The remaining gap band ε ~ 5×10⁻⁶–2×10⁻⁴ at 1–1.3 GeV gives flight lengths of 50 μm–1 cm at Belle II boosts. R4 (ε = 3×10⁻⁵–1.8×10⁻⁴ at m = 1.254 GeV) predicts ~3–90 displaced-ℓℓ events at 50 ab⁻¹ with flight 50–170 μm — resolvable against the ~15 μm vertex resolution but statistically thin at the low-ε edge; R0/R7/R8 peak at 1.00 GeV or yield <1 event (R7: ~0.15 events). The decision is the *peak mass*: a displaced peak at 1.25 GeV tags R4. Needs full 50 ab⁻¹ plus vertexing at its resolution limit, ~3–10× beyond today's Belle II dataset → **unlikely** (dominant systematic: material-conversion and K_S backgrounds in the 100 μm–1 cm decay-length window).

**N7 — Ultra-faint SIDM tier (attach R0+R7+R8) — honest near-failure.** After all of the above, these three differ only in quartics and overlapping tiny ε (R7's ε = 7.9×10⁻⁶ lies *inside* R8's range, so no production observable can ever separate R7 from R8). Predicted σ_T/m: R0 (α₆ ≥ 1.5, up to 10) ~7×10⁻⁴–0.03 cm²/g; R7 (α₅,α₆ ~ 0.1) ~10⁻⁵; R8 (all α ≤ 0.003) ~10⁻⁹ cm²/g. The R0 tier (≥5×10⁻⁴) is ~200× beyond proposed sensitivity, and the R7/R8 boundary (10⁻⁶ cm²/g) is beyond any conceived probe — this node is recorded as **speculative** and is effectively the statement of what would be required rather than a plan.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_yes_yes_no_no_no_no_no",
      "lit_review": {
        "name": "Belle II gamma + dark-photon search",
        "observable": "A' at eps >= 1e-3, m(A') 1-8 GeV: mumu peak / invisible peak / nothing?",
        "refs": ["arXiv:1406.2980", "arXiv:1702.03327", "arXiv:1808.10567"],
        "reasoning": "The catalog never probes direct Z' production below the pp Drell-Yan dilepton range; every unit here has m(Z') = 1-21 GeV. e+e- -> gamma A' measures both decay modes in one apparatus. Visible-A' regions (m(Z') < 2 M_DM, decays to SM only via eps): R2 (eps=0.1, 1.00 GeV), R3 (8.9e-3, 1.254 GeV), R11 (1.0e-2, 1.331 GeV), R1 (1.5e-3 to 2.8e-2, 1.00 GeV) all sit 2x-1e4x above the BaBar visible bound eps ~ 1e-3 (R2/R3/R11 are already excluded by 1406.2980; R1's low edge is marginal). R10 (eps=0.1, m=4.73 GeV, g'=0.30 >> eps*e so BR_inv ~ 95%) gives a monophoton missing-mass peak ~100x above the BaBar invisible bound. All others predict nothing: eps <= 1.5e-3 (R0, top sliver marginal), <= 1.8e-4 (R4), <= 3.3e-5 (R6-R9, R12); R5 (eps=0.072) is kinematically out of reach at m(Z')=21 GeV. Also a Lagrangian split: the loud branches isolate U(1)'[+] regions R2/R10/R11 from the mostly U(1)'[-] quiet set.",
        "status": "Splits!",
        "outcomes": [
          {"label": "mumu peak", "regions": ["R1", "R2", "R3", "R11"]},
          {"label": "invisible peak", "regions": ["R10"]},
          {"label": "nothing", "regions": ["R0", "R4", "R5", "R6", "R7", "R8", "R9", "R12"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R3+R11",
          "name": "A' dimuon line spectroscopy",
          "observable": "m(mumu) peak: 1.00 / 1.25 / 1.33 GeV (+-0.02 GeV)?",
          "reasoning": "The discovered peak's position separates three of the four units at once: R1 and R2 predict m(A') = 1.00 GeV, R3 predicts 1.254 GeV, R11 predicts 1.331 GeV. Smallest splitting to resolve is 77 MeV (R3 vs R11), 10x the detector resolution; it is also a U(1)'[-] vs U(1)'[+] Lagrangian split.",
          "feasibility": "Belle II / LHCb dimuon mass resolution at 1 GeV is 5-10 MeV; required separation 77-330 MeV, improvement factor 1x (none needed). Dominant systematic: momentum-scale calibration, already at the 1e-4 level.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "1.00 GeV", "regions": ["R1", "R2"]},
            {"label": "1.25 GeV", "regions": ["R3"]},
            {"label": "1.33 GeV", "regions": ["R11"]}
          ]
        },
        {
          "attach_to": "R1+R2",
          "name": "A' signal-rate mixing fit",
          "observable": "sigma(ee -> gamma A') x BR(mumu) implies eps >= 0.05?",
          "reasoning": "Same 1.00 GeV peak, but sigma is proportional to eps^2: R2 predicts eps = 0.1 (U(1)'[+]), R1 predicts eps = 1.5e-3 to 2.8e-2 (U(1)'[-]) -- at least a factor 13 in rate. A +-10% cross-section measurement against the cut eps = 0.05 separates them and the two Lagrangians.",
          "feasibility": "Belle II with existing dataset; rate measurements of a resolved resonance are statistics-rich at these eps. Improvement factor 1x. Dominant systematic: hadronic vacuum-polarization background under the mumu continuum near 1 GeV, well below a factor-13 discrimination.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R2"]},
            {"label": "no", "regions": ["R1"]}
          ]
        },
        {
          "attach_to": "R0+R4+R5+R6+R7+R8+R9+R12",
          "name": "Z-lineshape EW fit, kinetic mixing",
          "observable": "EW-fit eps >= 0.03 at m(Z') ~ 21 GeV?",
          "reasoning": "Kinetic mixing with m(Z') << m_Z shifts Z-pole observables at O(eps^2); LEP EW fits constrain eps <~ 0.03 for m(A') < m_Z, FCC-ee Tera-Z projects ~3e-3. R5 predicts eps = 0.072, a >2x violation of the existing bound -- detectable in a re-fit of archival LEP data regardless of its huge (g'=10) invisible width. All other regions predict eps <= 1.5e-3, invisible to any EW fit.",
          "feasibility": "LEP Z-lineshape data (existing) reanalyzed with a light-Z' hypothesis; current sensitivity eps ~ 0.03 vs required 0.07 signal -- improvement factor <1x (already sensitive). Dominant systematic: theory uncertainty in SM EW inputs (m_t, alpha_had), at the eps ~ 0.02 level, safely below 0.072.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R5"]},
            {"label": "no", "regions": ["R0", "R4", "R6", "R7", "R8", "R9", "R12"]}
          ]
        },
        {
          "attach_to": "R0+R4+R6+R7+R8+R9+R12",
          "name": "SHiP beam-dump displaced A'",
          "observable": ">= 3 displaced ee/mumu vertices with m(ll) ~ 1.0 GeV?",
          "reasoning": "A visible 1 GeV A' has ctau ~ 3 cm x (1e-6/eps)^2; SHiP's decay volume (~45 m downstream, gamma ~ 20-100, 4e20 POT) is sensitive at eps ~ few e-7 to ~2-3e-6. R12 (eps = 1.0-1.4e-6) is squarely inside; R6 (1-3.2e-6) and R9 (1-3.9e-6) are inside at their lower edges, marginal at the top. R7 (7.9e-6, ctau ~ 0.5 mm), R8 (<= 3.3e-5) and R4 (<= 1.8e-4, m = 1.25 GeV) decay inside the dump -- zero events; R0's log-bulk (median eps ~ 3e-5) likewise, though its lowest decade would leak in (flagged marginal). Also isolates the Z2-only build R12 into a small branch.",
          "feasibility": "SHiP, approved and under construction at CERN ECN3 (data ~2031); dark-photon sensitivity at 1 GeV covers exactly the predicted eps band, improvement factor ~1x over the funded design. Dominant systematic: proton-bremsstrahlung A' production form factor (~2-3x rate), which moves the upper band edge that R6/R9 straddle.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R6", "R9", "R12"]},
            {"label": "not seen", "regions": ["R0", "R4", "R7", "R8"]}
          ]
        },
        {
          "attach_to": "R6+R9+R12",
          "name": "Halo-ensemble DM self-interaction",
          "observable": "sigma_T/m: >= 0.015 / 0.003-0.015 / < 0.003 cm^2/g?",
          "reasoning": "These units are identical in (M_DM, m_Z', eps, g'); only the dark quartics differ, and their sole observable handle is DM self-scattering, sigma_T/m ~ (24 alpha)^2/(128 pi m^3). R12 (alpha4(si^4) = 8-10 AND alpha2(sr^4) = 0.5-9.9, both components self-coupled) predicts ~0.02-0.05 cm^2/g; R9 (alpha6(si^4) = 3.5-10 only) ~0.004-0.03; R6 (all alpha <= 0.12) ~1e-5. The R6-vs-rest cut is a clean >=100x separation; the R12-vs-R9 cut at 0.015 overlaps at range edges and is marginal.",
          "feasibility": "Closest probes: cluster merger/halo-shape ensembles (current bound ~0.5-1 cm^2/g); Rubin-LSST-era ensemble analyses project ~0.1 cm^2/g. Required: 3e-3 cm^2/g, a further ~30x beyond proposed sensitivity. Dominant systematic: baryonic feedback degeneracy in halo shapes.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": ">=0.015", "regions": ["R12"]},
            {"label": "mid", "regions": ["R9"]},
            {"label": "<0.003", "regions": ["R6"]}
          ]
        },
        {
          "attach_to": "R0+R4+R7+R8",
          "name": "Belle II 50/ab displaced-vertex A'",
          "observable": "displaced ll vertex peak at m = 1.25 GeV?",
          "reasoning": "The gap band eps ~ 5e-6 to 2e-4 at 1-1.3 GeV gives flight lengths 50 um - 1 cm at Belle II boosts. R4 (eps = 3e-5 to 1.8e-4 at m = 1.254 GeV) predicts ~3-90 displaced-ll events at 50/ab with flight 50-170 um; a displaced peak at 1.25 GeV uniquely tags R4 (the others sit at 1.00 GeV or yield <1 event: R7 ~0.15 events at eps = 7.9e-6). Statistically thin at R4's low-eps edge -- marginal there.",
          "feasibility": "Belle II vertexing (impact-parameter resolution ~15 um) can resolve the 50-170 um flight, but needs the full 50/ab dataset and background-free displaced selection: ~3-10x beyond today's recorded luminosity. Dominant systematic: material-conversion and K_S backgrounds in the 100 um - 1 cm decay-length window.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R4"]},
            {"label": "no", "regions": ["R0", "R7", "R8"]}
          ]
        },
        {
          "attach_to": "R0+R7+R8",
          "name": "Ultra-faint SIDM tier",
          "observable": "sigma_T/m: >= 5e-4 / 1e-6-5e-4 / < 1e-6 cm^2/g?",
          "reasoning": "Honest near-failure node. R7's eps (7.9e-6) lies inside R8's range (4.4e-6 to 3.3e-5), so no production or lifetime observable can ever separate them; the only differing physical parameters are dark quartics. Predicted sigma_T/m: R0 (alpha6 = 1.5-10) ~7e-4 to 0.03 cm^2/g; R7 (alpha5, alpha6 ~ 0.1) ~1e-5; R8 (all alpha <= 0.003) ~1e-9. The tiers are well separated in prediction (>=50x between adjacent regions) but sit far below any measurement concept.",
          "feasibility": "Closest probe: Rubin-era halo-shape ensembles at ~0.1 cm^2/g projected. Required: 5e-4 cm^2/g for the R0 tier (~200x beyond proposed) and 1e-6 for R7 vs R8 (~1e5x, beyond any conceived instrument). Dominant systematic: baryonic feedback, which already saturates well above these levels.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": ">=5e-4", "regions": ["R0"]},
            {"label": "mid", "regions": ["R7"]},
            {"label": "<1e-6", "regions": ["R8"]}
          ]
        }
      ]
    }
  ]
}
```