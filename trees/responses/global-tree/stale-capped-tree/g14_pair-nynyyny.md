I'll verify the arXiv references I plan to cite, then deliver the full analysis in one message.
Both references verify (Ilten–Soreq–Thaler–Williams–Xue, "Inclusive Dark Photon Search at LHCb"; LHCb, "Search for A′→μ⁺μ⁻ decays", PRL 124, 041801). Here is the complete analysis.

# Reasoning — leaf `root_no_yes_no_yes_yes_no_yes_yes` (273 pts, R0–R8)

## What this leaf physically is

All nine units are the **same Lagrangian** (complex scalar singlet charged under a dark U(1)′, Higgs portal α₁, kinetic mixing ε), so every split here is region-vs-region. The shared physics is tightly pinned by the path to the leaf:

- **MDM ≈ 4.1–5.5 GeV, g′ ≈ 0.040–0.044, MZ′ ≈ 1–1.5 GeV** in every unit. This is the classic *secluded* regime: SS\*→Z′Z′ with σv ≈ πα′²/MDM² ≈ 2.9×10⁻²⁶ cm³/s (α′ = g′²/4π ≈ 1.4×10⁻⁴) — the relic-density condition is what freezes g′ to 0.042, and the resulting halo σv is exactly the 10–100× Fermi-15yr(bb) signal the leaf demands. The Z′ (1–1.5 GeV < 2MDM ≈ 10 GeV) decays **only visibly**, to e⁺e⁻/μ⁺μ⁻/hadrons, with rate set by ε.
- **α₁ ≈ 0.0019–0.0033 in every unit** — fixed by the BR(h→inv) ∈ [0.01, 0.032] window on the path. No further mileage there (and refining the BR cut is forbidden).
- Direct detection is portal-only: the Z′ vertex on a complex scalar is off-diagonal in (Re S, Im S), so tree-level Z′-mediated nuclear scattering is inelastic and kinematically dead for any component splitting ≳ keV (max energy transfer at v ~ 10⁻³ is ~0.2 keV). That is why even ε = 7×10⁻⁵ points show no DD flags, and why DD refinements cannot split these regions: σ_SI ∝ α₁²/MDM², identical across units to within a factor ~3.
- The quartics α₂–α₆ (the dark scalar's self-couplings) are the *main* thing that actually differs between several regions (e.g. R2 vs R4, R1 vs R7), and they are essentially **unobservable**: they generate DM self-scattering σ/m ≲ 10⁻⁹ cm²/g (vs. cluster bounds ~0.5 cm²/g), no visible collider process, and no ID/DD imprint. This leaf contains genuine, honest observational degeneracy, and I flag it as such below.

**Honesty note on the whole leaf:** SS\*→Z′Z′ is s-wave, so a σv ~ 3×10⁻²⁶ cm³/s at 5 GeV is in ~4× tension with the Planck CMB injection bound (p_ann < 3.2×10⁻²⁸ cm³/s/GeV with f_eff ≈ 0.2), and the implied ~5 GeV positron box edge is in tension with AMS-02 sub-10-GeV positron limits. Neither is in the catalog; both hit **all nine regions equally**, so they constrain the leaf but cannot split it — which is why they are not my Level-1 choice despite being the "obvious" catalog-external observables.

## The discriminating axes

With g′, α₁, σv, BR(h→inv) all pinned, the only handles that differ across regions are ε, MZ′, and (weakly) MDM:

| Unit | ε range (log-mid) | MDM (GeV) | MZ′ (GeV) | cτ(A′) at log-mid ε |
|---|---|---|---|---|
| R0 | 1e-6 – 4.4e-5 (6.6e-6) | 4.81–5.40 | 1.00–1.55 | ~0.4 mm |
| R1 | 6.2e-6 – 7.4e-5 (2.1e-5) | 4.87–5.53 | 1.00–1.28 | ~0.04 mm |
| R2 | 1e-6 – 6.5e-6 (2.5e-6) | 4.83–5.51 | 1.00–1.16 | ~3 mm |
| R3 | 1e-6 – 5.7e-6 (2.4e-6) | 4.09–5.02 | 1.00–1.42 | ~3 mm |
| R4 | 1e-6 – 6.2e-6 (2.5e-6) | 4.93–5.28 | 1.02–1.28 | ~3 mm |
| R5 | 3.0e-6 – 2.2e-5 (8.1e-6) | 5.01–5.12 | 1.00–1.40 | ~0.3 mm |
| R6 | pinned 1e-6 | 4.96–5.13 | 1.00 | ~20 mm |
| R7 | 1.06e-5 – 2.2e-5 (1.5e-5) | 4.84–4.87 | 1.00–1.26 | ~0.08 mm |
| R8 | pinned 1e-6 | 4.14–4.85 | 1.00–1.27 | ~20 mm |

using cτ(A′) ≈ 0.2 mm × (10⁻⁵/ε)² × (1 GeV/m_A′), including e⁺e⁻+μ⁺μ⁻+hadronic partial widths at these masses.

## Level 1 (lit review): LHCb displaced dimuon dark-photon search

The catalog's "Z′ dilepton" entry is a **prompt σ×BR resonance recast**; at m_A′ ~ 1 GeV that only reaches ε ≳ few×10⁻⁴, which is why the tree never split on it here. What the catalog does *not* contain is a **lifetime-based displaced-vertex** dimuon search, and that is precisely where this leaf lives: cτγ at LHCb (γ ~ 10–50) ranges from ~40 μm (R1) to ~1 m (R6/R8). The Ilten–Soreq–Thaler–Williams–Xue inclusive A′→μμ strategy (arXiv:1603.08926) plus the published LHCb implementation (arXiv:1910.06926, PRL 124, 041801 — world-leading long-lived A′ limits at ~1 ps lifetimes) extends, with Run 3–6 / Upgrade II luminosity, into detached-vertex territory ε² ~ 10⁻¹¹ (ε ~ 3×10⁻⁶) in the 1.1–1.6 GeV dimuon window between the φ and the charmonium region.

**Cut: displaced μμ vertex at m(μμ) = 1.0–1.6 GeV, ε ≳ 3×10⁻⁶.**
- **Seen** → R0, R1, R5, R7. Predicted ε at log-mid: R1 ≈ 2.1×10⁻⁵, R7 ≈ 1.5×10⁻⁵ (both robustly inside reach; R7 is *entirely* above 1.06×10⁻⁵), R5 ≈ 8×10⁻⁶ (fully above 3×10⁻⁶ — its floor is 2.97×10⁻⁶), R0 ≈ 6.6×10⁻⁶ (assigned by bulk; its lower tail dips to 10⁻⁶ and would leak to "not seen" — marginal, stated plainly).
- **Not seen** → R2, R3, R4 (log-mids ≈ 2.4–2.5×10⁻⁶, just below the projected boundary — marginal at the edge), R6, R8 (pinned at ε = 10⁻⁶, cτγ ~ 0.5–1 m, robustly invisible to LHCb *and* too prompt for SHiP, whose upper contour at 1 GeV is ε ~ 2×10⁻⁷).

This is the strongest single real-measurement split available: it cleanly peels off the two highest-ε units and the bulk of two more, and every remaining degeneracy is then handled below. Marginality is concentrated at the R0 lower tail and the R2/R3/R4 upper edges; also note the φ(1020) veto window eats the very bottom of the MZ′ range.

## Level 2 (novel nodes — they chain: each `attach_to` names the still-degenerate group left by the node above it)

**Not-seen branch {R2,R3,R4,R6,R8}:**

1. **DarkQuest-class 120 GeV proton-dump displaced search** (ε ≈ 10⁻⁶ band, m 1.0–1.3 GeV). At DarkQuest kinematics (γ ~ 30, decay volume 5–6 m from the dump), ε = 10⁻⁶ gives decay length ~0.5–1 m — inside the sensitivity band; ε ≳ 2×10⁻⁶ decays before the fiducial volume. **Seen → R6+R8** (ε pinned at 10⁻⁶); **not seen → R2+R3+R4** (bulk at 2.4–6.5×10⁻⁶; their 10⁻⁶ lower tails leak — marginal). SpinQuest hardware exists; the DarkQuest EMCal upgrade projections reach ε ≈ 10⁻⁶ at 1 GeV with ~10¹⁸ POT. Rated **possible**.
2. **{R6,R8} → AMS-02 positron box-edge.** SS\*→Z′Z′, Z′→e⁺e⁻ produces a box positron spectrum with a sharp upper edge at E₊ = (MDM/2)(1+β_Z′) ≈ 0.98·MDM. R6 predicts E₊ ≈ 5.0 GeV (MDM 4.96–5.13); R8 predicts E₊ ≈ 4.4 GeV (MDM 4.14–4.85) — the MDM ranges are **disjoint**, the one clean pair in this leaf. AMS-02 has %-level flux precision at 5 GeV; the dominant systematics are solar modulation (~0.5 GV shifts) and propagation smearing of the edge, comparable to the 0.6 GeV separation — marginal but genuinely there. Rated **possible**.
3. **{R2,R3,R4} → same positron-edge measurement, lower cut.** R3 (MDM mid 4.5, E₊ ≈ 4.45 GeV) vs R2/R4 (mids 5.1–5.2, E₊ ≈ 5.0 GeV). R3's upper tail reaches 5.02 GeV so the split is by bulk — marginal, stated. Rated **possible**.
4. **{R2,R4} → honest terminal degeneracy.** R2 and R4 differ *only* in the dark-quartic pattern (α₅ up to 0.22 vs ≤ 0.0056; α₆ ≤ 0.0062 vs 0.011–0.038); ε, MDM, MZ′, α₁ all overlap. The only physical quantity that responds at all is DM self-scattering: σ_self/m ≲ 4×10⁻¹⁰ cm²/g (R2's α₅ tail) vs ≲ 10⁻¹¹ (R4) — nine orders of magnitude below cluster-scale sensitivity (~0.5 cm²/g from ensemble halo-shape/merger constraints). I propose it anyway as the least-impossible discriminator and rate it **speculative**; these two units should be regarded as observationally identical.

**Seen branch {R0,R1,R5,R7}:** once the A′ is found, LHCb itself measures its properties — three cheap post-discovery nodes:

5. **Lifetime: reconstructed cτ ≥ 0.15 mm?** Predicts R0 ≈ 0.4 mm, R5 ≈ 0.3 mm (yes) vs R1 ≈ 0.04 mm, R7 ≈ 0.08 mm (no). Factor ~5 separation of mids with ~10 μm vertex resolution at γ ~ 20 (lab lengths mm-scale); ε-range tails overlap, so assignment is by bulk. **Possible.**
6. **{R1,R7} → signal-strength ε ≥ 2.5×10⁻⁵?** One-sided: R7 caps at 2.2×10⁻⁵, so "yes" is unambiguously R1 (its range runs to 7.4×10⁻⁵); "no" is assigned R7 but roughly half of R1's range also lands there. Weak and honestly so — R1 vs R7 otherwise differ only in unobservable quartics (their MDM ranges are formally disjoint at 4.87 GeV but by 0.1%, far below any endpoint resolution). **Possible** (as a measurement; the discrimination is partial).
7. **{R0,R5} → m(A′) ≥ 1.40 GeV?** R5's MZ′ caps at 1.395 GeV while R0 extends to 1.545 GeV: "yes" is unambiguously R0 (dimuon mass resolution ~10 MeV makes the measurement trivial); "no" is R5 by assignment with R0 overlap below 1.4 GeV. One-sided, stated. **Possible.**

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_yes_yes_no_yes_yes",
      "lit_review": {
        "name": "LHCb Upgrade displaced dimuon dark-photon search",
        "observable": "displaced A'->mumu vertex, m(mumu) 1.0-1.6 GeV, eps >~ 3e-6 ?",
        "refs": ["arXiv:1603.08926", "arXiv:1910.06926"],
        "reasoning": "All units share a secluded ~5 GeV complex scalar annihilating to a 1-1.5 GeV dark photon; relic density pins g'~0.042 and the BR(h->inv) window pins alpha1~0.002-0.003, so kinetic mixing eps is the dominant free observable axis. cTau(A') ~ 0.2 mm x (1e-5/eps)^2 x (1 GeV/m): for R1 (eps log-mid 2.1e-5) and R7 (fully in 1.06-2.2e-5) decays are sub-0.1 mm; R5 (3e-6-2.2e-5) and R0 bulk (mid 6.6e-6) give mm-scale detached vertices; R2/R3/R4 (mids ~2.5e-6) and R6/R8 (pinned 1e-6, cTau*gamma ~ 0.5-1 m) fall below the projected Run 3-6/Upgrade II detached-vertex reach eps^2 ~ 1e-11 in the phi-to-charmonium dimuon window. This is lifetime-based, distinct from the catalog's prompt sigma x BR Z' dilepton recast (which only reaches eps ~ few e-4 at 1 GeV and never split the tree). Marginal: R0's lower tail (to 1e-6) leaks to 'not seen'; R2/R3/R4 upper edges (to 6.5e-6) sit at the boundary; assignment is by region bulk (log-mid).",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0", "R1", "R5", "R7"]},
          {"label": "not seen", "regions": ["R2", "R3", "R4", "R6", "R8"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R2+R3+R4+R6+R8",
          "name": "DarkQuest proton-dump displaced-vertex search",
          "observable": "A'->ee/mumu decay vertex 5-6 m downstream, m 1.0-1.3 GeV, eps ~ 1e-6 ?",
          "reasoning": "R6 and R8 sit at eps = 1e-6 exactly: at 120 GeV proton-dump kinematics (gamma ~ 30) the A' decay length is ~0.5-1 m, matching a decay volume metres behind the dump; R2/R3/R4 (bulk eps 2.4-6.5e-6) decay within ~10 cm, before the fiducial volume, and are unseen. This eps ~ 1e-6, m ~ 1 GeV band is above SHiP's upper contour (~2e-7 at 1 GeV, decays too prompt at gamma ~ 100 with a 40 m standoff) and below collider displaced reach - a dedicated short-standoff dump is the only probe. Marginal: the 1e-6 lower tails of R2/R3/R4 leak into 'seen'.",
          "feasibility": "SpinQuest spectrometer operating at Fermilab; DarkQuest EMCal upgrade proposed with published projections reaching eps ~ 1e-6 at m ~ 1 GeV for ~1e18 POT - improvement factor ~1-2x over Phase-1 curves. Dominant systematic: muon and hadronic punch-through background from the dump plus proton-bremsstrahlung A' production-rate modeling.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R6", "R8"]},
            {"label": "not seen", "regions": ["R2", "R3", "R4"]}
          ]
        },
        {
          "attach_to": "R6+R8",
          "name": "AMS-02 positron box-edge spectroscopy",
          "observable": "positron box-edge energy >= 4.7 GeV ?",
          "reasoning": "SS->Z'Z' with Z'->e+e- yields a box positron spectrum with sharp upper edge E+ = (MDM/2)(1+beta_Z') ~ 0.98 MDM. R6 (MDM 4.96-5.13) predicts E+ ~ 5.0 GeV; R8 (MDM 4.14-4.85) predicts E+ ~ 4.4 GeV. The MDM ranges are disjoint - the cleanest pair in the leaf. The flux is large by construction (sigma-v ~ 3e-26 cm^3/s, the same annihilation giving the 10-100x Fermi bb signal), so statistics are not limiting.",
          "feasibility": "AMS-02 (existing) measures the positron flux at 2-10 GeV with percent-level statistical precision - improvement factor ~1x. Dominant systematic: solar modulation (~0.5 GV energy shifts) and diffusive-propagation smearing of the edge, together comparable to the 0.6 GeV separation - marginal but mitigable with time-resolved and electron-channel data.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R6"]},
            {"label": "no", "regions": ["R8"]}
          ]
        },
        {
          "attach_to": "R2+R3+R4",
          "name": "AMS-02 positron box-edge, low-mass cut",
          "observable": "positron box-edge energy <= 4.7 GeV ?",
          "reasoning": "Same box-edge observable, different cut direction: R3 (MDM 4.09-5.02, mid 4.5) predicts E+ ~ 4.45 GeV, while R2 (4.83-5.51) and R4 (4.93-5.28) predict E+ ~ 5.0 GeV. Marginal: R3's upper tail reaches 5.0 GeV and overlaps R2/R4; assignment is by bulk. R3 is also independently flagged by its lower gauge coupling (g' 0.0398-0.0423 vs >= 0.0419), the relic-density shadow of its lower mass, but that is not separately observable beyond sigma-v already in the catalog.",
          "feasibility": "Same as the R6/R8 node: AMS-02 existing, improvement ~1x, dominated by solar-modulation and propagation smearing of the edge; the 0.55 GeV mid-to-mid separation is at the systematic floor.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R3"]},
            {"label": "no", "regions": ["R2", "R4"]}
          ]
        },
        {
          "attach_to": "R2+R4",
          "name": "Ultra-deep halo self-interaction probe",
          "observable": "sigma_self/m > 1e-10 cm^2/g ?",
          "reasoning": "R2 and R4 differ only in dark-sector quartics (R2: alpha5 up to 0.22; R4: alpha6 0.011-0.038, alpha5 <= 0.0056) with eps, MDM, MZp, alpha1 all overlapping - they are observationally degenerate in every accessible channel (quartics give no collider, DD or ID imprint at these couplings). The sole physical response is DM self-scattering: sigma/m up to ~4e-10 cm^2/g for R2's alpha5 tail vs ~1e-11 for R4. Even this cut only catches R2's high-coupling tail; most of R2 also fails it. Honest verdict: not separable by any foreseeable experiment.",
          "feasibility": "Closest probe: ensemble halo-shape / dwarf-survival / merging-cluster constraints at sigma/m ~ 0.1-1 cm^2/g. Required improvement ~1e9x - far beyond any proposed technique; no known astrophysical system is sensitive at 1e-10 cm^2/g. Dominant systematic: baryonic feedback degeneracy in halo shapes.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R2"]},
            {"label": "no", "regions": ["R4"]}
          ]
        },
        {
          "attach_to": "R0+R1+R5+R7",
          "name": "LHCb A' lifetime measurement",
          "observable": "reconstructed cTau(A') >= 0.15 mm ?",
          "reasoning": "Post-discovery, the vertex-displacement distribution measures cTau directly, i.e. eps given m, with no production-model dependence. Predicted cTau at eps log-mid: R0 ~ 0.4 mm and R5 ~ 0.3 mm (pass) vs R1 ~ 0.04 mm and R7 ~ 0.08 mm (fail) - a factor ~5 separation of region bulks. LHCb vertex resolution (~10 um) at gamma ~ 20 resolves these mm-scale lab decay lengths easily. Marginal: eps ranges overlap between the groups (especially R0's broad 1e-6-4.4e-5 span), so tails cross the cut; assignment is by log-mid.",
          "feasibility": "LHCb itself, on the discovery sample from the Level-1 node; proper-time resolution far exceeds the needed 0.1 mm discrimination, improvement ~1x. Dominant systematic: displacement-dependent selection efficiency and prompt-background contamination at the shortest lifetimes.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "long-lived", "regions": ["R0", "R5"]},
            {"label": "prompt-like", "regions": ["R1", "R7"]}
          ]
        },
        {
          "attach_to": "R1+R7",
          "name": "A' signal-strength epsilon extraction",
          "observable": "eps from sigma x BR: eps >= 2.5e-5 ?",
          "reasoning": "R1 and R7 differ otherwise only in unobservable quartics (their MDM ranges are disjoint only at the 0.1% level - far below any endpoint resolution). The one-sided handle: R7's eps caps at 2.2e-5 while R1 extends to 7.4e-5, so a measured eps above 2.5e-5 is unambiguously R1. Below the cut the assignment defaults to R7 but roughly half of R1's log-range also lands there - a partial, probabilistic split, stated honestly.",
          "feasibility": "LHCb sigma x BR measurement on the discovery sample determines eps^2 to ~10-20% - improvement ~1x; the limitation is physics overlap of the regions, not instrumentation. Dominant systematic: A' production-mechanism (meson-decay vs Drell-Yan mixing) modeling entering the eps extraction.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R1"]},
            {"label": "no", "regions": ["R7"]}
          ]
        },
        {
          "attach_to": "R0+R5",
          "name": "A' mass measurement",
          "observable": "m(A') >= 1.40 GeV ?",
          "reasoning": "R5's MZp range ends at 1.395 GeV while R0 extends to 1.545 GeV: a dimuon mass above 1.40 GeV is unambiguously R0. Below 1.40 GeV the ranges overlap (both reach down to 1.0 GeV) and the assignment defaults to R5 - one-sided discrimination; all other axes (eps mids 6.6e-6 vs 8.1e-6, MDM 4.81-5.40 vs 5.01-5.12 nested) overlap, and the remaining differences are unobservable quartics (alpha4: R0 0.04-10 vs R5 <= 0.009).",
          "feasibility": "LHCb dimuon mass resolution ~5-10 MeV at 1.4 GeV - improvement ~1x, trivial once the resonance is found. Dominant systematic: none significant for the mass itself; the residual ambiguity below 1.40 GeV is physics overlap, not measurement error.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R0"]},
            {"label": "no", "regions": ["R5"]}
          ]
        }
      ]
    }
  ]
}
```