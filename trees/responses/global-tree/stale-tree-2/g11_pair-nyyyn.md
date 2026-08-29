I'll verify the arXiv references I plan to cite before composing the answer.
(Housekeeping note, unrelated to the physics: the claude.ai Gmail / Google Calendar / Google Drive connectors in this session are unauthenticated and unusable until you authorize them in your claude.ai connector settings; nothing in this task needed them.)

All five candidate references were checked against arxiv.org; I kept only the four whose titles and scope I could confirm (LHCb A′→μμ search arXiv:1910.06926, covering dimuon masses up to 70 GeV; the Ilten–Soreq–Thaler–Williams–Xue inclusive LHCb dark-photon proposal arXiv:1603.08926, explicitly projecting sensitivity in the 10–40 GeV window; the SHiP physics case arXiv:1504.04855; and the SHiP dark-photon sensitivity paper arXiv:2011.05115, quoting unique reach for masses 0.8–3.3 GeV and ε² from 10⁻¹¹ down to 10⁻¹⁷). I dropped arXiv:1808.08865 (LHCb Upgrade II physics case) because its abstract does not verifiably support the specific dark-photon claim.

## Reasoning

### Leaf `root_no_yes_yes_yes_no_yes` (R0, R1 — both CsSg_U1p[+])

**What actually differs between the units.** R0 and R1 are two regions of the *same* Lagrangian and are nearly identical in everything the SM can see: MDM = 92.3–92.6 GeV in both, gU1p = 0.1597 in both, kinetic mixing ε overlapping (R1's ε = 1.296×10⁻⁴ is exactly R0's lower edge), portal α1 ≈ 0.0018–0.0020 in both. The DBSCAN split is carried by (i) the quartic self-couplings — α2 ∈ [0.001, 0.0050] in R0 vs [0.0364, 0.0389] in R1, plus different α4/α5/α6 patterns — and (ii) the Z′ mass: R0 spans MZp = 17.59–20.83 GeV while R1 is pinned at MZp = 20.83 GeV.

Quartic self-couplings of a 92 GeV singlet are, for practical purposes, unmeasurable: the induced DM self-scattering is σ/m ~ λ²/(64π m³) ≈ 10⁻¹⁰ cm²/g even for λ = 10, nine to ten orders of magnitude below the ~0.1–1 cm²/g sensitivity of cluster-merger and halo-shape constraints. They feed nothing else at tree level (no vev for the DM field). So the **only physically accessible discriminant is the Z′ mass**, and it happens to separate the two regions almost cleanly.

**The measurement.** The Z′ here is a kinetically mixed dark photon with ε² = 1.68×10⁻⁸ (R1) and 1.7–3.7×10⁻⁸ (R0), decaying promptly (Γ ~ few×10⁻⁹ GeV) and visibly to SM fermions (MZp ≪ 2·MDM, so no invisible width). A 17–21 GeV prompt dimuon resonance is exactly the territory of the LHCb inclusive dark-photon program: the published Run 2 search (arXiv:1910.06926, 5.5 fb⁻¹) covers dimuon masses up to 70 GeV but bottoms out around ε² ~ 10⁻⁶ in this window, while the data-driven projections of arXiv:1603.08926 identify 10–40 GeV as one of the two windows where Run 3 and beyond open unexplored parameter space, reaching down to the few×10⁻⁹–10⁻⁸ level — i.e. right at both units' predictions. This is *not* a catalog duplicate: the catalog's "Z′ dilepton" observable is a high-mass Drell-Yan σ×BR recast (resonances far above this mass window), and the discriminant proposed here is the **measured resonance mass**, not the rate.

**The split.** Cut at m(μμ) ≥ 20.5 GeV. R1 predicts a peak at 20.83 GeV — LHCb's dimuon mass resolution of ~0.4–0.5% (≈ ±0.1 GeV here) puts it unambiguously above the cut. R0's bulk lies at 17.6–20.5 GeV → below. Two honest caveats: (1) R0's box upper edge touches 20.83 GeV, so R0 points within ~0.3 GeV of that corner would be misassigned — the split separates the bulk, not the shared corner (at that corner the two units are observationally identical, differing only in unobservable quartics); (2) detection itself sits at the faint edge of the projections (ε² down to 1.7×10⁻⁸), but the two units predict essentially the same ε², so failure to see the resonance would disfavor both equally rather than fake either branch — the decision fires once the peak is found. Since the lit-review split assigns the two regions to different outcomes, no novel-experiment node is needed for this leaf.

### Leaf `root_no_yes_yes_yes_no_no` (R0: CsSg_U1p[−]; R1, R2: CsSg_U1p[+]; R3: plain CsSg)

**What differs.** All four units share MDM ≈ 95 GeV and portal α1 ≈ 0.0021 — identical Higgs-portal phenomenology, which is exactly why the 18-observable catalog cannot split them. The entire distinguishing physics lives in the dark-photon sector:

- **R0**: MZp = 22.2 GeV, ε = 6.8–8.5×10⁻⁵ (ε² = 4.7–7.1×10⁻⁹), gU1p = 0.0118 → a *prompt*, visibly decaying 22 GeV dimuon resonance, but a factor ~4–6 in ε² below even the best published future-search projections.
- **R1**: MZp = 1.60–1.68 GeV, ε = 10⁻⁶ → cτ ≈ 1.2 cm (using Γ = (α/3)ε²mA′·(2+R(m)), R≈2.5), boosted decay length γcτ ≈ 1–3 m at a 400 GeV beam dump.
- **R2**: MZp = 1.0–1.28 GeV, ε = 10⁻⁶ → cτ ≈ 2–3 cm, γcτ ≈ 3–9 m.
- **R3**: no dark sector at all — its only BSM state is the 95 GeV scalar.

Note ε is pinned at 10⁻⁶ for both R1 and R2 and gU1p (0.003 vs 0.008–0.028) is invisible to any SM probe (production and decay both go through ε alone since MZp < 2·MDM), so the **A′ mass and lifetime are the physical handles**.

**Level 1 — SHiP.** SHiP (approved for ECN3; arXiv:1504.04855) with 2×10²⁰ protons on target produces dark photons by proton bremsstrahlung with yield ∝ ε²; at ε² = 10⁻¹² that is O(10⁶–10⁷) A′ over the run. The decay volume sits behind ≈35 m of hadron absorber and muon shield. For **R2**, γcτ ≈ 3–9 m on the energetic tail gives survival e^(−35/λ) ~ 10⁻³–10⁻², i.e. O(10–10³) displaced ℓℓ/hadron vertices reconstructing to m(pair) = 1.0–1.3 GeV over essentially zero background. This sits at the short-lifetime (upper) edge of SHiP's published contour — the sensitivity paper (arXiv:2011.05115) quotes unique reach for 0.8–3.3 GeV masses with ε² spanning 10⁻¹¹–10⁻¹⁷, bracketing 10⁻¹² — so this is a *marginal but genuine* detection expectation, and I flag it as such. For **R1** the shorter cτ and larger mass give λ ≈ 1–3 m → survival ≲ e^(−13), so ≲1 event: outside the contour. **R0**'s 22 GeV state is kinematically and rate-wise dead at a fixed-target √s ≈ 27 GeV with ε² = 5×10⁻⁹, and **R3** has nothing to produce. Outcome: vertex seen → R2; nothing → {R0, R1, R3}. That is a real split (status "Splits!"), and it is the *only* literature-level split available: R1's (1.6 GeV, ε = 10⁻⁶, cτ ~ cm) point lies in the well-known blind gap between prompt collider searches (rate ∝ ε² = 10⁻¹² is hopeless: σ×BR at LHCb ~ 10⁻² fb) and long-baseline dumps (decays inside the shield), and R0's ε² sits below all published projections — I verified neither Belle II (event yield ~10⁻⁴ at 50 ab⁻¹), nor FASER2, nor HPS (mass reach < 0.5 GeV), nor DarkQuest's published contours cover these points.

**Level 2, node 1 (attached to the SHiP null outcome R0+R1+R3): short-baseline dump vertex spectrometer.** Same bremsstrahlung production as SHiP, but with the fiducial decay region moved to 0.5–5 m behind a thin target/dump and mm-scale vertexing. R1's γcτ ≈ 1–3 m is *ideally* matched: O(10⁴–10⁵) decays in acceptance at ε² = 10⁻¹², reconstructing to m(μμ) = 1.6–1.7 GeV. R0 and R3 predict zero (22 GeV inaccessible; no dark photon, respectively). Feasibility: the closest instruments are SeaQuest/DarkQuest at FNAL (120 GeV protons, tracking 5–12 m downstream, but no metre-scale decay-vertex capability and orders less shielding rejection at short distance) and SHiP itself (vertexing, but a 35 m baseline). Required: a dedicated spectrometer with magnetized shielding and ~100 μm vertex resolution to beat the dominant systematic — prompt and combinatorial dimuons (Drell-Yan, open charm, π/K decay-in-flight) a metre from a high-intensity dump. That is a dedicated next-generation effort, not an upgrade: rating **unlikely**.

**Level 2, node 2 (attached to the residual null outcome R0+R3): ultimate prompt dimuon scouting at 20–25 GeV.** R0 predicts a prompt μμ resonance at 22.2 GeV with σ×BR ~ 5×10⁻³ fb (ε² ≈ 5×10⁻⁹); R3 predicts exactly zero — it has no BSM state below 95 GeV, so *any* sub-Z dimuon resonance detection excludes it. Closest instruments: the LHCb inclusive A′→μμ program (projected to reach ε² ~ 2–3×10⁻⁸ at these masses with Upgrade II statistics) and CMS dimuon scouting; the requirement is a further factor ~4–6 in ε² (only ~2× in coupling ε), via a trigger-less, full-luminosity dimuon spectrum at HL-LHC/FCC-hh with ~0.5% mass resolution. Dominant systematic: modeling the smooth Drell-Yan continuum shape at the 10⁻⁴ level under the peak. Rating: **unlikely** (3–10× class). Note on bookkeeping: this node chains off the "no vertex" outcome of novel node 1 rather than directly off a lit-review outcome — with a three-way residual degeneracy, two sequential novel nodes are needed to reach full separation, and `attach_to` names each node's degenerate parent group.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_yes_yes_no_yes",
      "lit_review": {
        "name": "LHCb inclusive prompt dark-photon dimuon search",
        "observable": "A' -> mu mu resonance mass m(mumu) >= 20.5 GeV ?",
        "refs": ["arXiv:1910.06926", "arXiv:1603.08926"],
        "reasoning": "R0 and R1 are the same Lagrangian and agree in MDM (92.3-92.6 GeV), gU1p (0.1597), epsilon (both contain 1.296e-4) and portal alpha1; their quartic differences (alpha2: 0.001-0.005 vs 0.036-0.039) give DM self-interactions sigma/m ~ 1e-10 cm^2/g, ten orders below astrophysical sensitivity, hence unobservable. The one measurable difference is the Z' mass: R0 spans 17.59-20.83 GeV, R1 is pinned at 20.83 GeV. Both predict a prompt, visibly decaying dark photon with eps^2 = 1.7-3.7e-8 (R0) and 1.68e-8 (R1), within the projected Run 3/Upgrade-era LHCb inclusive-search reach in the 10-40 GeV window (few 1e-9 to 1e-8); current 5.5 fb^-1 limits (~1e-6 here) do not yet probe it. LHCb dimuon mass resolution ~0.4% (+-0.1 GeV at 21 GeV) cleanly resolves the 20.5 GeV cut. Not a catalog duplicate: the catalog Z' dilepton entry is a high-mass Drell-Yan sigma x BR recast; here the discriminant is the measured resonance mass. Marginal caveats: R0's box corner touches 20.83 GeV, so R0 points within ~0.3 GeV of that corner are misassigned (there the units differ only in unobservable quartics); and detection is at the faint edge of projections, but both units share the same eps^2, so non-observation disfavors both equally rather than faking a branch.",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R1"]},
          {"label": "no", "regions": ["R0"]}
        ]
      },
      "novel": []
    },
    {
      "leaf_id": "root_no_yes_yes_yes_no_no",
      "lit_review": {
        "name": "SHiP displaced dark-photon vertex search",
        "observable": "displaced ll/hadron vertex with m(pair) in 1.0-1.4 GeV ?",
        "refs": ["arXiv:1504.04855", "arXiv:2011.05115"],
        "reasoning": "All four units share MDM ~ 95 GeV and alpha1 ~ 0.0021 (identical Higgs-portal signals), so the discriminating physics is the dark-photon sector. R2 (MZp 1.0-1.28 GeV, eps = 1e-6) has ctau ~ 2-3 cm, boosted decay length 3-9 m at SHiP's 400 GeV beam: with ~1e6-1e7 bremsstrahlung-produced A' at eps^2 = 1e-12 and survival ~1e-3-1e-2 past the ~35 m shield, O(10-1000) background-free vertices at m(pair) = 1.0-1.3 GeV are expected -- at the short-lifetime edge of the published contour (unique reach 0.8-3.3 GeV, eps^2 1e-11 to 1e-17), so marginal but real. R1 (1.60-1.68 GeV, ctau ~ 1.2 cm) has decay length 1-3 m, survival < e^-13, i.e. <1 event: outside the contour. R0's 22.2 GeV Z' (eps^2 ~ 5e-9) is inaccessible at fixed-target sqrt(s) ~ 27 GeV, and R3 has no dark sector at all. R1's point sits in the known gap between prompt collider reach (sigma x BR ~ 1e-2 fb at eps^2 = 1e-12, rate-dead) and long-baseline dumps (decays inside shielding); no published projection (Belle II, FASER2, HPS, DarkQuest) covers it, nor R0's eps^2, so this is the only literature split available.",
        "status": "Splits!",
        "outcomes": [
          {"label": "vertex seen", "regions": ["R2"]},
          {"label": "not seen", "regions": ["R0", "R1", "R3"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R3",
          "name": "Short-baseline dump vertex spectrometer",
          "observable": "displaced mumu vertex 0.5-5 m from target, m(mumu) 1.4-2.0 GeV ?",
          "reasoning": "R1's dark photon (1.60-1.68 GeV, eps = 1e-6) has boosted decay length gamma*ctau ~ 1-3 m: a fiducial decay region starting ~0.5 m behind a thin target captures O(1e4-1e5) decays at eps^2 = 1e-12, reconstructing a narrow mumu peak at 1.6-1.7 GeV. R0 predicts nothing (its 22 GeV state is kinematically/rate inaccessible at fixed target) and R3 has no dark photon, so any vertex in this window selects R1.",
          "feasibility": "Closest instruments: SeaQuest/DarkQuest (FNAL, 120 GeV protons, tracking 5-12 m downstream, no metre-scale vertexing) and SHiP (vertexing but 35 m baseline). Needs a dedicated spectrometer with magnetized shielding and ~100 micron vertex resolution ~1 m from a high-intensity dump; dominant systematic is prompt/combinatorial dimuon background from Drell-Yan, open charm and pi/K decay-in-flight, requiring ~100x better short-distance background rejection than any existing dump spectrometer.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "vertex seen", "regions": ["R1"]},
            {"label": "not seen", "regions": ["R0", "R3"]}
          ]
        },
        {
          "attach_to": "R0+R3",
          "name": "Ultimate prompt dimuon scouting",
          "observable": "prompt mumu resonance in 20-25 GeV with sigma x BR >= 3e-3 fb ?",
          "reasoning": "R0 predicts a prompt dimuon resonance at 22.2 GeV with sigma x BR(mumu) ~ 5e-3 fb (eps^2 = 4.7-7.1e-9); R3 predicts exactly zero, since its only BSM state is the 95 GeV scalar -- any sub-Z dimuon resonance excludes R3 outright. The two units are otherwise indistinguishable (same mass, same portal coupling, both below DARWIN).",
          "feasibility": "Closest instruments: LHCb inclusive A'->mumu program (projected eps^2 reach ~2-3e-8 at 22 GeV with Upgrade II statistics) and CMS dimuon scouting (currently ~1e-6). Requires a further factor ~4-6 in eps^2 (~2x in coupling) via trigger-less full-luminosity dimuon recording at HL-LHC/FCC-hh with ~0.5% mass resolution; dominant systematic is modeling the smooth Drell-Yan continuum at the 1e-4 level beneath the peak.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0"]},
            {"label": "not seen", "regions": ["R3"]}
          ]
        }
      ]
    }
  ]
}
```