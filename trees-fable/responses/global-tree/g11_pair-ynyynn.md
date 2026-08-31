I'll verify the arXiv references I plan to cite (LHCb dark-photon dimuon searches and projections), then deliver the full analysis and JSON in one message.
All four candidate references resolve and match; I'll cite the three that are directly on point (dropping the Upgrade II physics-case document, whose abstract doesn't explicitly cover the dark-photon projection) and deliver the full analysis now.

# Reasoning

Both target leaves are siblings under the DarkSide split, share the path signature (XLZD signal at 1–10× the projected limit, nothing at IceCube-Gen2 or LZ, BR(h→inv) in 0.0032–0.01), and their degenerate units are dominated by the dark-U(1)′ variant of the complex scalar singlet. The decisive un-cataloged handle is the Z′ itself: our catalog's Z′-dilepton entry is a high-mass ATLAS/CMS-style Drell-Yan recast, whereas every Z′ in these leaves sits at 1–21 GeV — squarely in LHCb's low-mass prompt-dimuon territory, a genuinely different measurement (different experiment, mass range, and trigger strategy), not a refinement of anything on the path.

## Leaf `root_yes_no_yes_yes_no_no_yes` (DarkSide = YES; R0–R2 = U(1)′ model, R3 = plain complex scalar singlet)

**Lit review — LHCb prompt dark-photon dimuon search.** The four units differ radically in their Z′ sector:

- **R0**: M_Z′ = 20.8 GeV, ε = 1.30×10⁻⁴ → ε² = 1.7×10⁻⁸. The dark channel Z′→DM DM is closed (2×92.3 GeV ≫ 20.8 GeV), so the Z′ decays promptly and visibly through kinetic mixing (Γ ∝ ε²m gives cτ ~ 10⁻⁷ m), with BR(μμ) ≈ 0.10–0.15. Expected σ·BR(μμ) ~ 0.1–0.2 fb at LHCb — roughly (ε²/10⁻⁶) × the current few-fb sensitivity floor. That is below the published Run-2 limit (LHCb's 5.5 fb⁻¹ search, arXiv:1910.06926, is most stringent precisely at 10.6–30 GeV but bottoms out around ε² ~ 10⁻⁶ there), yet inside the data-driven inclusive-search projection of Ilten–Soreq–Thaler–Williams–Xue (arXiv:1603.08926), which reaches ε² ~ 10⁻⁹–10⁻⁸ across 10–40 GeV for Run 3 luminosity; Upgrade II (300 fb⁻¹) adds another factor of a few. R0 is therefore a *discoverable* prompt 21 GeV dimuon peak. Marginality note: the margin above the projected floor is ~×3–20, so a Run-3-only dataset might leave R0 borderline; the full HL-LHC LHCb dataset decides cleanly.
- **R1, R2**: M_Z′ = 1.6–1.7 GeV and 1.0–1.3 GeV with ε = 10⁻⁶ → ε² = 10⁻¹², and cτ ≈ 1.6–3 cm. Prompt production scales as ε², i.e. σ·BR ~ 10⁻⁵ fb — four to five orders below any projected prompt sensitivity. The cm-scale lifetime also kills every beam-dump/far-detector option: with a decay volume 5–50 m downstream (SHiP, FASER2, CODEX-b, MATHUSLA), the survival probability is e^(−O(10²⁻³)) ≈ 0. These regions are LHCb-invisible.
- **R3**: no Z′ exists; trivially nothing.

So the split is {R0: peak seen} vs {R1, R2, R3: nothing}, with the cut placed at the projected inclusive-search floor (σ·BR ≈ 0.05 fb in the 15–25 GeV window). This separates one U(1)′ region from the rest. Honest limitation: no published or formally planned measurement can separate R3 (no dark sector at all) from R1/R2 (ε = 10⁻⁶, GeV-scale Z′) — every visible-portal production rate is ∝ ε² = 10⁻¹², and the DM itself (92–95 GeV, portal coupling α₁ ≈ 0.002) gives identical DD/ID/Higgs signatures across R1/R2/R3. That residual 3-way degeneracy goes to the novel node.

**Novel — cm-displaced GeV-mass dimuon vertex search.** The one in-principle smoking gun for R1/R2 is a dimuon vertex displaced by ~1–3 cm (exactly the ε=10⁻⁶ lifetime) at m_μμ = 1.0–1.7 GeV, and the resonance *mass* would further separate R1 (1.5–1.7 GeV) from R2 (1.0–1.3 GeV); R3 predicts no vertex ever. Feasibility is brutal and I rate it honestly: LHCb's displaced A′→μμ search (arXiv:1710.02867, arXiv:1910.06926) demonstrated the vertexing technique but only at 214–350 MeV and ε² ~ 10⁻⁹–10⁻¹⁰; here the production rate ∝ ε² = 10⁻¹² means ≪1 produced event even in 300 fb⁻¹ — the limitation is raw yield, not background, so no detector upgrade fixes it; only ≳10³–10⁴× more luminosity-equivalent production would. Dominant background if rate existed: b-hadron decay vertices, which live at exactly cm displacements. Rating: speculative.

## Leaf `root_yes_no_yes_yes_no_no_no` (DarkSide = NO; all three units U(1)′ model)

**Lit review — LHCb prompt dark-photon dimuon search, current data.** Here R1 is loud:

- **R1**: M_Z′ = 11.2–16.5 GeV with ε = 5.2×10⁻³–1.3×10⁻² → ε² = 2.7×10⁻⁵–1.6×10⁻⁴, i.e. ~30–150× *above* the ε² ~ 10⁻⁶ sensitivity already published by LHCb in exactly this mass range (arXiv:1910.06926; method established in arXiv:1710.02867). Predicted σ·BR(μμ) ~ 50–300 fb. Honesty note: these points sit at or above existing bounds — a limit our catalog doesn't carry — so this measurement is either already decided in archived data or decided immediately by the next dataset; either way it is maximally decisive. (R1 also has M_DM = 65–70 GeV vs 92 GeV, which an XLZD spectral fit would weakly corroborate, but the dimuon peak is the clean split.)
- **R0, R2**: M_Z′ = 17.6–20.8 GeV, ε² = 1.7–3.7×10⁻⁸ → σ·BR ~ 0.05–0.2 fb, two to three orders below the 5 fb cut; invisible in current data (they would eventually appear at Upgrade II, identically for both, so that adds no internal split).

Split: {R1: resonance at 10–17 GeV with σ·BR > 5 fb} vs {R0, R2: nothing at that level}.

**Novel — R0 vs R2, the dark-quartic twins.** R0 and R2 are physically near-identical: same M_DM (92.3–92.6 GeV), same M_Z′ (R2's 20.83 GeV is the endpoint of R0's 17.6–20.8 range), same ε ≈ 1.3×10⁻⁴, same g′ = 0.16. The *only* cleanly disjoint parameter is the sr⁴-type dark quartic α₂ (R2: 0.036–0.039 vs R0: ≤0.005); α₄ and α₆ overlap (R0's α₆ ∈ [1.9, 10] brackets R2's ≈4.1). Dark-scalar self-quartics at a 92 GeV mass touch no collider, DD, ID, or Higgs observable; the sole in-principle probe is DM self-scattering in halos, σ_self/m ~ λ²/(64π m³) ~ 10⁻¹⁵–10⁻¹⁴ cm²/g — about fourteen orders of magnitude below the ~0.1–1 cm²/g sensitivity of cluster-merger and halo-shape constraints. Worse, because the overlapping α₆ (si⁴) coupling dominates the total self-scattering, even a miracle measurement separates the two only in the corners of the α₆ range (total λ_eff ≳ 6 → R0-high side; ≲ 3 → hard to attribute). This is exactly the physically irreducible residual degeneracy the parameter structure predicts; I propose the only concept that differs at all — a component-sensitive halo self-interaction determination — and rate it speculative, stating the ~10¹⁴× gap plainly. Dominant systematic even in principle: baryonic-feedback modeling of halo shapes, plus the α₆ overlap contaminating the α₂ attribution.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_no_no_yes",
      "lit_review": {
        "name": "LHCb inclusive prompt dark-photon dimuon search",
        "observable": "prompt mumu resonance, 15-25 GeV, sigma.BR(mumu) > 0.05 fb ?",
        "what_this_is": "The LHCb detector at the Large Hadron Collider records enormous numbers of muon pairs and can scan their combined mass for a narrow bump, which would signal a new short-lived particle decaying to two muons. It is the world's most sensitive instrument for feebly-coupled 'dark photon' particles in the 10-70 GeV mass range. Three of the four candidate regions here contain a dark-force carrier (a Z' boson), but only one of them has a Z' both heavy enough (21 GeV) and strongly-enough mixed with the ordinary photon to produce such a bump; the projected higher-luminosity version of this search would see it while seeing nothing for the others.",
        "refs": ["arXiv:1603.08926", "arXiv:1910.06926"],
        "reasoning": "R0 has M_Z' = 20.8 GeV with kinetic mixing eps = 1.3e-4 (eps^2 = 1.7e-8); the dark decay channel is closed (2 M_DM = 185 GeV >> M_Z'), so the Z' decays promptly (ctau ~ 1e-7 m) and visibly with BR(mumu) ~ 0.10-0.15, giving sigma.BR ~ 0.1-0.2 fb. The published 5.5 fb^-1 LHCb search bottoms out near eps^2 ~ 1e-6 in this mass window (R0 untouched), but the data-driven inclusive projection reaches eps^2 ~ 1e-9 to 1e-8 across 10-40 GeV, so R0 is discoverable (margin ~3-20x above the floor: marginal for Run 3 alone, clean with the full HL-LHC dataset). R1/R2 (M_Z' = 1.0-1.7 GeV, eps = 1e-6) predict prompt sigma.BR ~ 1e-5 fb, 4-5 orders below any projection, and their ctau ~ 2 cm kills all beam-dump/far-detector alternatives (survival probability e^-O(100) at 5-50 m). R3 has no Z' at all. No published measurement can separate R3 from R1/R2 (all portal observables identical, all eps^2 = 1e-12 production rates dead), so those three go to one outcome with a novel node.",
        "status": "Splits!",
        "outcomes": [
          {"label": "peak seen", "regions": ["R0"]},
          {"label": "nothing", "regions": ["R1", "R2", "R3"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R3",
          "name": "cm-displaced GeV dimuon vertex search, ultra-luminosity LHCb-style",
          "observable": "displaced (0.3-10 cm) mumu vertex: mass 1.5-1.7 or 1.0-1.3 GeV ?",
          "what_this_is": "A collider search for a pair of muons that emerges from a point a few centimetres away from the proton-proton collision, the telltale sign of a light, long-lived particle that flew a short distance before decaying. Vertex detectors like LHCb's are precisely built to resolve such centimetre-scale displaced decays. Two of these regions predict exactly such a particle - a 1-1.7 GeV dark-force carrier with a ~2 cm flight length - while the third region has no dark sector at all, and the measured vertex mass would even tell the two dark-sector regions apart.",
          "reasoning": "R1 predicts a mumu vertex at 1.5-1.7 GeV, R2 at 1.0-1.3 GeV (both with ctau ~ 1.6-3 cm from eps = 1e-6), R3 predicts no vertex ever. The mass windows are disjoint, so a single observation is a three-way discriminator. The obstruction is rate, not signature: production scales as eps^2 = 1e-12, giving <<1 produced Z' even in 300 fb^-1.",
          "feasibility": "Closest instrument: LHCb's displaced A'->mumu search (Run 2), which reached eps^2 ~ 1e-9 to 1e-10 but only for 214-350 MeV masses. Here eps^2 = 1e-12 at 1.0-1.7 GeV requires ~1e3-1e4x more produced signal; since the deficit is raw production yield (background-free expectation is still <<1 event at 300 fb^-1), no detector improvement closes it - only an implausible luminosity leap. Dominant background if rate existed: b-hadron decay vertices, which populate exactly cm displacements at these masses.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "1.5-1.7 GeV", "regions": ["R1"]},
            {"label": "1.0-1.3 GeV", "regions": ["R2"]},
            {"label": "none", "regions": ["R3"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_yes_no_no_no",
      "lit_review": {
        "name": "LHCb prompt dark-photon dimuon search, current dataset",
        "observable": "prompt mumu resonance, 10-17 GeV, sigma.BR(mumu) > 5 fb ?",
        "what_this_is": "The LHCb detector scans the combined mass of muon pairs produced promptly in proton-proton collisions for a narrow bump, the signature of a new short-lived neutral particle. It already sets the world's best limits on photon-like dark-force carriers between about 10 and 70 GeV. One region here predicts a dark Z' at 11-16 GeV mixed with the photon a hundred times more strongly than LHCb's published sensitivity floor, so the existing search strategy sees it immediately; the other two regions predict signals a hundred times below today's reach and stay dark.",
        "refs": ["arXiv:1910.06926", "arXiv:1710.02867"],
        "reasoning": "R1 has M_Z' = 11.2-16.5 GeV with eps^2 = 2.7e-5 to 1.6e-4, i.e. 30-150x above the eps^2 ~ 1e-6 limits LHCb already published in exactly this window (their most stringent region is 10.6-30 GeV); predicted sigma.BR(mumu) ~ 50-300 fb versus a few-fb floor. Honestly, these points sit at or above existing bounds not carried in our catalog, so archived data may already decide this branch - either way it is maximally decisive. R0/R2 (M_Z' = 17.6-20.8 GeV, eps^2 = 1.7-3.7e-8) predict sigma.BR ~ 0.05-0.2 fb, 2-3 orders below the 5 fb cut; they would surface only at future-luminosity LHCb and identically for both, adding no internal split. R1's lower DM mass (65-70 vs 92 GeV) would be weakly corroborated by an XLZD recoil-spectrum fit, but the dimuon peak is the clean discriminator.",
        "status": "Splits!",
        "outcomes": [
          {"label": "peak seen", "regions": ["R1"]},
          {"label": "nothing", "regions": ["R0", "R2"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2",
          "name": "Halo-scale DM self-interaction probe of the dark quartic",
          "observable": "DM self-scattering sigma/m > 3e-14 cm^2/g ?",
          "what_this_is": "Astronomical surveys of colliding galaxy clusters and the shapes of dark-matter halos can bound how often dark-matter particles scatter off each other, since frequent self-scattering rounds halos and drags dark matter behind galaxies in mergers. This is the only kind of measurement sensitive to a dark particle's self-coupling when every coupling to normal matter is identical. These two regions agree in every portal and gauge parameter and differ only in one quartic self-coupling of the dark scalar, so self-scattering is the sole observable that differs at all between them.",
          "reasoning": "R0 and R2 share M_DM (92.3-92.6 GeV), M_Z' (~20.8 GeV), eps (1.3e-4) and g' (0.16); the only disjoint parameter is the sr^4 quartic alpha2 (R2: 0.036-0.039 vs R0: <= 0.005). Self-scattering sigma/m ~ lambda^2/(64 pi m^3) evaluates to ~1e-15 to 1e-14 cm^2/g - and because the overlapping si^4 coupling alpha6 (R0: 1.9-10 brackets R2: ~4.1) dominates the total, even a perfect measurement separates the pair only at the edges of R0's range (total lambda_eff >~ 6 -> R0 side; the mid-range stays ambiguous). This is a physically irreducible residual degeneracy: dark self-quartics at a 92 GeV mass touch no collider, direct-detection, indirect-detection or Higgs observable.",
          "feasibility": "Closest instruments: cluster-merger and halo-shape constraints (Bullet-Cluster-type analyses, Rubin/LSST-era statistical samples), currently sensitive to sigma/m ~ 0.1-1 cm^2/g. The predicted signal is ~1e-14 cm^2/g, i.e. ~13-14 orders of magnitude beyond any existing or proposed sensitivity, and the alpha6 overlap further contaminates attribution to alpha2. Dominant systematic: baryonic-feedback modeling of halo shapes.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "above", "regions": ["R0"]},
            {"label": "below", "regions": ["R2"]}
          ]
        }
      ]
    }
  ]
}
```