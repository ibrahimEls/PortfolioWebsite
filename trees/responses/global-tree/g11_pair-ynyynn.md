## Reasoning

Both leaves sit in the same corner of the tree — a ~1–10× XLZD signal, no IceCube-Gen2, BR(h→inv) in 0.0032–0.01 — so every catalog handle is exhausted. What the catalog never looks at is the **dark sector itself**: the U(1)′ regions all carry a light Z′ whose mass, kinetic mixing ε and dark coupling g′ vary by orders of magnitude between units, and the pure-singlet region carries none. Two independent consequences of that Z′ do the separating: (i) the *annihilation* channel SS\*→Z′Z′, fixed entirely by g′ and M_DM, which feeds cosmic-ray antiprotons and is invisible to the catalog's per-SM-channel γ-ray limits; (ii) the *production* of the Z′ itself as a low-mass dilepton resonance, which the catalog's Z′-dilepton entry (a high-mass pp→Z′→ℓℓ σ×BR recast, sensitive only above a few hundred GeV) is structurally blind to at 1–21 GeV.

Numbers used throughout: α′ = g′²/4π, σv(SS\*→Z′Z′) ≃ πα′²/M_DM² × (1−x²)^{3/2}/(1−x²/2)² with x = M_Z′/M_DM (s-wave, unsuppressed); 1 GeV⁻² = 1.17×10⁻¹⁷ cm³/s. Dark-photon lifetime cτ = ħc/Γ with Γ ≃ (1/3)αε²M_Z′(2+R).

---

### Leaf `root_yes_no_yes_yes_no_no_yes` (159 pts; R0, R1, R2, R3)

**What actually differs.** All four units have M_DM ≈ 92–95 GeV and α1 ≈ 0.002 (hence the common DD/h→inv tags). The dark coupling is what splits them:

| unit | M_Z′ | g′ | α′ | σv(Z′Z′) |
|---|---|---|---|---|
| R0 | 20.83 GeV | 0.1597 | 2.03×10⁻³ | **1.7×10⁻²⁶ cm³/s** |
| R1 | 1.60–1.68 GeV | 0.0077–0.028 | 4.8×10⁻⁶–6.3×10⁻⁵ | 9×10⁻³²–1.6×10⁻²⁹ |
| R2 | 1.00–1.28 GeV | 0.003 | 7.2×10⁻⁷ | 2×10⁻³³ |
| R3 | *no Z′* | — | — | Higgs-portal only, ~10⁻²⁸ |

R0 is a textbook **secluded WIMP**: M_Z′ = 20.8 GeV < M_DM = 92.3 GeV opens SS\*→Z′Z′, and with g′ = 0.1597 the s-wave cross section lands at 1.7×10⁻²⁶ cm³/s — essentially the thermal value, i.e. this is where its relic abundance comes from. Each 20.8 GeV Z′ then decays *promptly* (ε = 1.30×10⁻⁴ ⇒ cτ ≈ 4×10⁻⁶ cm) with photon-like branchings: R(20 GeV) ≈ 3.7 ⇒ BR(hadrons) ≈ 0.55 per Z′, so ≥1 hadronic Z′ in ~80% of annihilations. That dumps ~90 GeV of hadronic energy per annihilation into the halo and produces antiprotons peaking at T ≈ 10–40 GeV.

The other three units are dark: R1 and R2 have g′ smaller by 6–50×, so σv(Z′Z′) is suppressed by 10³–10⁷ and sits at 10⁻²⁹–10⁻³³ cm³/s; R3 has no Z′ at all and only a λ = 0.0021 Higgs portal, giving σv ~ 10⁻²⁸ cm³/s. **Three or more orders of magnitude** separate R0 from the rest.

**Level 1 — AMS-02 cosmic-ray antiprotons.** This is genuinely outside the catalog: the catalog's γ-ray entries are per-SM-channel (WW, bb̄, …) limits, and a Z′Z′ → 4f cascade is not one of those channels, so the absence of a CTA/Fermi tag on this leaf carries no information about R0's cascade. AMS-02's p̄/p spectrum constrains hadronic σv at m ≈ 90 GeV at the (1–5)×10⁻²⁶ cm³/s level; Cuoco–Krämer–Korsmeier report a *positive* hint at m ≈ 80 GeV with σv ≈ 3×10⁻²⁶ cm³/s, and Cui et al. independently find m ≈ 20–80 GeV, σv ≈ (0.2–5)×10⁻²⁶. R0's prediction — effective hadronic σv ≈ 1.4×10⁻²⁶ cm³/s at 92 GeV — sits squarely inside that best-fit island, a factor ~2 below the nominal 95% limit. R1/R2/R3 predict ≤1.6×10⁻²⁹, i.e. ≥3 orders below anything AMS-02 or a successor could ever reach.

*Honest caveat:* the "yes" branch is marginal, not decisive. The dominant systematic is cosmic-ray propagation (halo height, diffusion index) together with the p̄ production cross sections and, critically, the AMS-02 correlated-error covariance matrix — Cuoco et al. show the same data give 3σ without correlations and >5σ with them. So a null result at the 10⁻²⁶ level is a ~2σ statement against R0 today, firming up with full AMS-02 exposure and a released covariance matrix. The "no" branch, by contrast, is airtight: R1/R2/R3 can never produce a p̄ signal.

**Level 2 — the 1–2 GeV, ε = 10⁻⁶ blind spot.** R1, R2, R3 stay degenerate, and I checked that *no existing or planned experiment separates them*, which is itself the interesting result. R1/R2 have M_Z′ = 1.0–1.7 GeV at ε = 10⁻⁶, giving ε² = 10⁻¹² and cτ = ħc/Γ ≈ 1.2 cm (1.6 GeV) to 2.5 cm (1.1 GeV). That is the nightmare corner:

- *Prompt searches die on coupling:* LHCb and Belle II reach ε² ~ 10⁻⁶ at 1–2 GeV — six orders short.
- *Beam dumps die on lifetime:* at SHiP/SPS a 1.5 GeV A′ carries E ~ 20–40 GeV, γ ~ 15–25, so βγcτ ≈ 0.2–0.6 m against a decay volume starting ~45 m downstream ⇒ e^(−100) or worse. SHADOWS (~14 m) and DarkQuest (~5 m) fail the same way. FASER2 is worse still: γ ~ 700 gives βγcτ ≈ 8 m against L = 480 m.

So the proposal is the missing geometry, not a missing luminosity: a **vertex spectrometer whose decay volume starts 1 cm and ends ~3 m behind a thin target** on a high-energy, high-intensity proton beam. There the geometric acceptance for βγcτ ≈ 0.2–1 m is O(1) rather than e^(−100), which buys back the entire 10⁴ in ε² that beam dumps pay to reach ε ~ 10⁻⁸. Rates are fine — with ~10²⁰ POT and bremsstrahlung yields ~10⁻⁴ε² per POT, ε² = 10⁻¹² gives ~10⁴ A′ produced and O(10²) reconstructed dileptons. The measurement is then the *mass* of the displaced ℓ⁺ℓ⁻ peak, which splits three ways: 1.5–1.8 GeV (R1), 0.9–1.4 GeV (R2), nothing (R3). The required mass resolution (~0.2 GeV at 1.3 GeV) is trivial for any spectrometer; the entire difficulty is background.

Two notes on what this node does *not* rest on. R1 vs R2 also differ in g′ (0.008–0.028 vs 0.003), hence in σv by ~10³ — but at 10⁻²⁹ vs 10⁻³³ cm³/s neither is remotely observable, so mass is the only usable handle. And R3's large dark quartics (α6 = 10, α14 ≈ 9.3, α11 ≈ 5–10) give self-scattering σ/m ~ 10⁻¹⁰ cm²/g at M = 95 GeV, nine orders below cluster/dwarf sensitivity — self-interaction cannot be used to tag R3 either.

---

### Leaf `root_yes_no_yes_yes_no_no_no` (131 pts; R0, R1, R2)

**What actually differs.** Here the annihilation handle is *useless*: all three units have g′ ≈ 0.14–0.16 with M_Z′ < M_DM, so σv(Z′Z′) ≈ 1.7×10⁻²⁶ (R0, R2) and 2.2×10⁻²⁶ cm³/s (R1) — identical to within 30%. Antiprotons cannot split this leaf. The kinetic mixing, however, differs by two orders:

| unit | M_Z′ | ε | ε² | σ(pp→Z′→μμ), rough |
|---|---|---|---|---|
| R0 | 17.59–20.83 GeV | 1.30–1.94×10⁻⁴ | 1.7–3.7×10⁻⁸ | ~10⁻³ pb |
| R1 | 11.19–16.45 GeV | 5.2×10⁻³–1.27×10⁻² | 2.7×10⁻⁵–1.6×10⁻⁴ | ~1–30 pb |
| R2 | 20.83 GeV | 1.30×10⁻⁴ | 1.7×10⁻⁸ | ~10⁻³ pb |

**Level 1 — low-mass prompt dimuon resonance search.** R1's Z′ is a narrow, prompt, photon-like resonance at 11–16 GeV with 2m_μ < M_Z′ < 2M_DM (so BR(μμ) ≈ 0.15 and no invisible decay). LHCb's inclusive A′→μ⁺μ⁻ search explicitly sets its strongest high-mass constraints over 10.6 ≲ m ≲ 30 GeV, and CMS dimuon scouting covers 11.5–45 GeV; published sensitivity there is ε² ≈ (1–10)×10⁻⁶, i.e. σ×BR of order 0.1–1 pb. R1 overshoots that by 3–100× — it is *already excluded or would have been seen*. R0 and R2 sit at ε² ≈ 2×10⁻⁸, ~500× below current reach and ~10⁻³ pb, invisible. A cut at σ×BR = 0.1 pb has three orders of headroom on either side; this is the cleanest split in either leaf.

This is not the catalog's Z′-dilepton observable: that entry is a high-mass pp→Z′→ℓℓ σ×BR recast, which has no acceptance at all for an 11–21 GeV resonance (it starts hundreds of GeV higher, and no such split appears anywhere in the tree). The cross-section values above are order-of-magnitude, anchored to the published ε² limits rather than computed at NLO — the ε² statement is the robust one.

**Level 2 — R0 vs R2 are physically the same point.** I compared every listed parameter: M_DM (92.31–92.64 vs 92.31–92.48), M_Z′ (17.59–20.83 vs 20.83), ε (1.30–1.94×10⁻⁴ vs 1.30×10⁻⁴), g′ (0.1597 both), α1 (0.00172–0.00186 vs 0.00178), α3, α4, α5, α6 — all overlapping or nested. The **only** disjoint direction is α2 (the sr⁴ dark quartic): 0.001–0.005 for R0 vs 0.0364–0.0389 for R2, a factor 7–40. That coupling touches nothing that couples to the Standard Model: it does not shift the DM mass (no vev), does not enter σ_SI except at ~α1α2/16π² ≈ 10⁻⁶ relative, and cannot be produced at any collider at an observable rate. Its one physical consequence is DM self-scattering, σ ≈ λ²/4πM², giving

- R2: σ/m ≈ 3×10⁻¹⁴ cm²/g
- R0: σ/m ≲ 6×10⁻¹⁶ cm²/g

a factor ~50 apart but both ~10¹³ below the ~0.1 cm²/g reach of cluster-merger offsets, halo ellipticities and dwarf cores. So the honest verdict is that DBSCAN split this cluster along a direction with **no low-energy observable consequence whatsoever**; I attach the self-scattering proposal because it is the only physics that distinguishes them, and I rate it speculative with the true improvement factor stated rather than dressing it up.

---

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_no_no_yes",
      "lit_review": {
        "name": "AMS-02 cosmic-ray antiproton spectrum",
        "observable": "p-bar excess at T = 10-40 GeV: sigma v >= 1e-26 cm^3/s ?",
        "refs": ["arXiv:1610.03071", "arXiv:1610.03840", "arXiv:1903.01472"],
        "reasoning": "R0 has M_Z'=20.83 GeV < M_DM=92.31 GeV, so SS*->Z'Z' is open and s-wave: with g'=0.1597 (alpha'=2.03e-3), sigma v = pi alpha'^2/M_DM^2 x phase space = 1.7e-26 cm^3/s, i.e. the thermal value. Each Z' decays promptly (eps=1.30e-4 => c tau = 4e-6 cm) with photon-like branchings, R(20 GeV)=3.7 => BR(hadrons)=0.55 per Z', so ~80% of annihilations contain a hadronic Z' and the effective hadronic sigma v is ~1.4e-26 cm^3/s, dumping ~90 GeV per annihilation into antiprotons peaking at T = 10-40 GeV. This is exactly the island Cuoco/Kraemer/Korsmeier (m~80 GeV, sigma v ~3e-26) and Cui et al. (m = 20-80 GeV, sigma v = (0.2-5)e-26) identify in AMS-02 p-bar data. R1 (g'=0.0077-0.028) gives sigma v = 9e-32 to 1.6e-29; R2 (g'=0.003) gives 2e-33; R3 has no Z' at all and only a lambda=0.0021 Higgs portal, sigma v ~1e-28 cm^3/s. That is 3-7 orders below AMS-02's ultimate reach, so the 'no' branch is airtight. This is not a catalog observable: the catalog's gamma-ray limits are per SM annihilation channel (WW, bb), and a Z'Z' -> 4f cascade is not among them, so the absence of a CTA/Fermi tag on this leaf says nothing about R0. Honest caveat: the 'yes' branch is marginal, R0 sitting only a factor ~2 below the nominal 95% p-bar limit; the dominant systematics are cosmic-ray propagation (halo height, diffusion index), the p-bar production cross sections, and above all the AMS-02 correlated-error covariance matrix, which moves the same data between 3 sigma and >5 sigma.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0"]},
          {"label": "not seen", "regions": ["R1", "R2", "R3"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R3",
          "name": "Near-target displaced dilepton spectrometer",
          "observable": "m(l+l-) of 1-100 cm displaced vertex: none, 0.9-1.4, or 1.5-1.8 GeV ?",
          "reasoning": "R1 and R2 carry a dark photon at M_Z'=1.60-1.68 GeV and 1.00-1.28 GeV respectively, both at eps=1e-6 (eps^2=1e-12); R3 has none. With Gamma = (1/3) alpha eps^2 M (2+R), c tau = 1.2 cm (1.6 GeV) and 2.5 cm (1.1 GeV) - the one corner no experiment covers. Prompt searches (LHCb, Belle II) bottom out at eps^2 ~ 1e-6, six orders short. Beam dumps fail on geometry, not coupling: at 400 GeV on target a 1.5 GeV A' has E ~ 20-40 GeV, gamma ~ 15-25, so beta gamma c tau = 0.2-0.6 m against SHiP's decay volume at ~45 m (e^-100), SHADOWS at ~14 m, DarkQuest at ~5 m; FASER2 is worse (gamma ~ 700 gives 8 m against L = 480 m). Starting the fiducial volume 1 cm rather than 5-50 m behind a thin target restores O(1) acceptance and recovers the full 1e4 in eps^2 that dumps spend on lifetime. Rate is not the problem: ~1e20 POT with bremsstrahlung yields ~1e-4 eps^2 per POT gives ~1e4 A' produced and O(100) reconstructed dileptons at eps^2=1e-12. The discriminant is then the peak mass, which needs only ~0.2 GeV resolution at 1.3 GeV. g' also differs between R1 and R2 (0.008-0.028 vs 0.003) but the resulting sigma v of 1e-29 vs 2e-33 cm^3/s is unobservable, and R3's large dark quartics give self-scattering sigma/m ~1e-10 cm^2/g, nine orders below halo probes - so the displaced peak is the only handle on all three.",
          "feasibility": "Closest instrument: the LHCb VELO long-lived A'->mu mu search (arXiv:1910.06926), which already vertexes at ~20 micron and reaches c tau ~ 0.3 mm, but only for m(A') < 350 MeV and eps^2 >~ 1e-9. Required improvement is not luminosity (signal yield is adequate at 1e20 POT) but rate capability and mass coverage: 50 micron vertexing 1-10 cm behind a target in a ~1e9-1e10 Hz interaction environment, roughly 100x LHCb Upgrade II occupancy, with the dilepton mass reach extended from 0.35 to 2 GeV, i.e. ~1e6 in eps^2 reach at these masses. Dominant systematic: prompt displaced-vertex backgrounds a few cm from a target - K_S -> pi+pi- and Lambda decays with pion-to-muon misidentification, photon conversions in target material, and combinatorics from secondary interactions; these, not statistics, set the achievable floor.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "1.5-1.8 GeV", "regions": ["R1"]},
            {"label": "0.9-1.4 GeV", "regions": ["R2"]},
            {"label": "no peak", "regions": ["R3"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_yes_no_no_no",
      "lit_review": {
        "name": "LHCb/CMS low-mass prompt dimuon resonance search",
        "observable": "narrow m(mu mu) peak, 10-25 GeV, sigma x BR >= 0.1 pb ?",
        "refs": ["arXiv:1910.06926", "arXiv:1912.04776", "arXiv:1603.08926"],
        "reasoning": "Annihilation cannot split this leaf: all three units have g' = 0.14-0.16 and M_Z' < M_DM, giving sigma v(Z'Z') = 1.7e-26 (R0, R2) and 2.2e-26 cm^3/s (R1) - identical to 30%. Kinetic mixing does split it, by two orders. R1's Z' is prompt, narrow and photon-like at M_Z' = 11.19-16.45 GeV with eps = 5.2e-3 to 1.27e-2 (eps^2 = 2.7e-5 to 1.6e-4); since 2 M_DM = 130-140 GeV > M_Z', it has no invisible mode and BR(mu mu) ~ 0.15. LHCb's inclusive A'->mu+mu- search sets its strongest high-mass limits over 10.6 < m < 30 GeV and CMS dimuon scouting covers 11.5-45 GeV, both at eps^2 ~ (1-10)e-6, i.e. sigma x BR of order 0.1-1 pb: R1 overshoots by 3-100x and is already excluded or would have been seen (~1-30 pb). R0 (M_Z' = 17.59-20.83 GeV, eps^2 = 1.7-3.7e-8) and R2 (20.83 GeV, eps^2 = 1.7e-8) sit ~500x below current reach, ~1e-3 pb, and are invisible; only an LHCb Upgrade II inclusive search reaching eps^2 ~ 1e-8 in the 10-40 GeV window would touch them, and even then their overlapping masses and eps ranges would not separate R0 from R2. Crucially this is NOT the catalog's Z' dilepton entry, which is a high-mass pp->Z'->ll sigma x BR recast with no acceptance below a few hundred GeV - it never appears as a split anywhere in the tree. Caveat: the pb-level numbers are order-of-magnitude, anchored to the published eps^2 limits rather than an NLO calculation; the eps^2 comparison is the robust statement, and the 0.1 pb cut has three orders of headroom on both sides.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1"]},
          {"label": "not seen", "regions": ["R0", "R2"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2",
          "name": "Halo self-scattering survey",
          "observable": "sigma_self/m >= 5e-15 cm^2/g ?",
          "reasoning": "R0 and R2 agree on every SM-facing parameter: M_DM (92.31-92.64 vs 92.31-92.48 GeV), M_Z' (17.59-20.83 vs 20.83 GeV), eps (1.30-1.94e-4 vs 1.30e-4), g' (0.1597 both) and alpha1 (0.00172-0.00186 vs 0.00178), so their sigma_SI, BR(h->inv), sigma v = 1.7e-26 cm^3/s and dimuon rate are all identical, and alpha3-alpha6 overlap. The single disjoint direction is the dark quartic alpha2: 0.001-0.005 (R0) vs 0.0364-0.0389 (R2). That coupling touches no SM current - it generates no vev-induced mass shift and enters sigma_SI only at alpha1 alpha2/16 pi^2 ~ 1e-6 relative. Its only physical consequence is DM self-scattering, sigma ~ lambda^2/(4 pi M_DM^2): sigma/m = 3e-14 cm^2/g for R2 versus <= 6e-16 cm^2/g for R0, a factor ~50 apart. The honest conclusion is that DBSCAN split this cluster along a direction with no observable consequence at any accessible energy; this node records what would be needed, not what is achievable.",
          "feasibility": "Closest existing constraints come from cluster-merger centroid offsets (Bullet-type systems), halo ellipticities and dwarf-galaxy core sizes, which probe sigma/m at the 0.1-1 cm^2/g level; next-generation lensing surveys might reach ~0.01 cm^2/g. Reaching 5e-15 cm^2/g requires an improvement of ~1e13, far beyond any proposed instrument and beyond any astrophysical system's dynamic range. Dominant systematic: baryonic feedback and halo-assembly history, which already dominate core-size and offset inferences at the 0.1 cm^2/g level and would swamp any dark-sector signal many orders earlier. Rated speculative with the true factor stated rather than a plausible-sounding smaller one.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R2"]},
            {"label": "no", "regions": ["R0"]}
          ]
        }
      ]
    }
  ]
}
```