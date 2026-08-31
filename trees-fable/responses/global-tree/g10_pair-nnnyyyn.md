I'll verify the three arXiv references I plan to cite before composing the full answer.
All three references verified against arXiv (LHCb A′→μ⁺μ⁻ search; Ilten–Soreq–Thaler–Williams–Xue inclusive dark-photon search at LHCb; Belle II Physics Book). Here is the complete degeneracy-breaking answer.

# Reasoning — Leaf `root_no_no_no_yes_yes_yes_no_no` (434 pts, 25 units)

## What this leaf actually is

Every unit is a complex-scalar-singlet + dark-U(1)′ model (24 units of the Z2+3+4+5 merge, one unit — R24 — of the pure Z2 build). The path pins BR(h→inv) to 1–3.2%, which fixes the Higgs-portal coupling α1 ≈ (1.9–3.3)×10⁻³ in *every* unit — so the Higgs portal cannot discriminate anything here. What actually varies across the 25 units, and therefore what any discriminator must couple to, falls on exactly four physical axes:

1. **Kinetic mixing ε: spans five orders of magnitude, 10⁻⁶ → 0.1**, with the Z′ mass almost always at 1.0–1.5 GeV. This is dark-photon-search territory, and the catalog's Z′-dilepton recast (the high-mass ATLAS/CMS Drell-Yan σ×BR curve) never touches the sub-5-GeV prompt-dimuon regime — which is why units with ε = 0.1 at m = 1 GeV are still sitting in this leaf.
2. **DM mass: a bimodal 1–1.7 GeV family vs a 4.8–5.4 GeV family** (four diffuse units — R3, R4, R9, R18 — span both). Pure kinematics: the nuclear-recoil endpoint differs by ×20.
3. **One unit with an *invisibly* decaying heavy Z′**: R14 (m_Z′ = 21 GeV, ε = 0.072, g′ = 10 ⇒ BR(Z′→DM DM) ≈ 1, BR(μμ) ≈ 4×10⁻⁶). No dimuon peak ever, but a huge γ + missing-mass signal at any e⁺e⁻ machine that can reach 21 GeV (Belle II kinematically cannot).
4. **Dark quartics α2–α6 (10⁻³ → 10)**: couplings that touch no Standard-Model field. Their only conceivable external handle is DM self-interaction, which for a GeV-scale scalar with λ ≲ 10 tops out at σ/m ~ 10⁻⁴ cm²/g — three-plus orders below current astrophysical sensitivity. This is the physically degenerate residue.

## Level 1 — lit review: the low-mass dark-photon dimuon program (LHCb + Belle II)

LHCb's prompt A′→μ⁺μ⁻ bump hunt (arXiv:1910.06926) already excludes ε² down to a few ×10⁻⁸ (ε ≈ 2×10⁻⁴) near 1–1.4 GeV; a cut at **ε ≥ 10⁻³ for a resonance anywhere in 1–5 GeV** is therefore ×5 conservative against *existing* sensitivity and needs no projection at all. Belle II's e⁺e⁻→γμμ search covers the same window independently, including LHCb's narrow φ(1020) veto (relevant because many units sit at m_Z′ ≈ 1.00 GeV). Per-region predictions:

- **Seen, and each at a *different* measured (mass, rate)** — the same measurement separates all five:
  - **R10**: m_μμ = 1.00 GeV, ε = 0.1 — a peak ~10⁴× above the current LHCb bound (in the real world already excluded by BaBar's visible search; the node fires trivially).
  - **R1**: m_μμ = 1.00 GeV, ε = 1.5×10⁻³–2.8×10⁻² — rate 13–4000× below R10; LHCb measures the rate to ~10–20%, cleanly resolving R1 from R10 at the same mass.
  - **R12**: m_μμ = 1.254 GeV, ε ≈ 8.9×10⁻³. LHCb mass resolution ~0.7% (≈9 MeV) trivially separates 1.254 from 1.00.
  - **R20**: m_μμ = 1.331 GeV, ε ≈ 10⁻² — 77 MeV from R12, ≈8σ in mass resolution.
  - **R19**: m_μμ = 4.73 GeV. Here ε = 0.1 but g′ = 0.30 opens Z′→DM DM (m_DM = 1 GeV), so BR(μμ) ≈ 1%; the *effective* visible mixing is still ε_eff ≈ 2×10⁻² — far above reach — and the dominant invisible mode gives a γ + nothing signal ~100× above Belle II's projected single-photon sensitivity. Doubly tagged.
- **Not seen (20 units)**: everything else has ε ≤ 1.8×10⁻⁴ (most ≤ 4×10⁻⁵), except two honest caveats: R0 is a wide DBSCAN unit whose ε range [10⁻⁶, 1.5×10⁻³] grazes the cut at its extreme upper tail, and R14's Z′ is invisible (BR(μμ) ≈ 4×10⁻⁶), so it lands "not seen" despite ε = 0.07.

Status: **Splits!** — six outcomes, five singleton units peeled off including the two loudest ones.

## Level 2 — cascade of novel nodes on the 20 "not seen" units

**N-A. Deep dimuon at the published LHCb Upgrade-II floor (rated possible).** The inclusive-trigger projections (arXiv:1603.08926) reach ε² ≈ 10⁻⁹, i.e. ε ≈ 3×10⁻⁵, exactly in the 1.0–1.5 GeV window where every remaining Z′ sits. Cut ε ≥ 3×10⁻⁵: **yes** = R13 (3×10⁻⁵–1.8×10⁻⁴ at 1.254 GeV), R18 (5.8×10⁻⁵–1.1×10⁻⁴ at 1.00 GeV), R2 (7.6×10⁻⁶–7.4×10⁻⁵, upper half in reach — lower tail leaks), R0 (upper decade of its wide ε range — leaky, flagged). **no** = the 16 others, all ε ≤ 3.3×10⁻⁵ with most ≤ 7×10⁻⁶ (R3 up to 4.4×10⁻⁵ and R9 up to 3.3×10⁻⁵ graze the cut) plus invisible R14.

**N-B / N-C / N-E. Cryogenic Ge recoil-endpoint spectroscopy (rated unlikely).** In Ge, E_max = 2μ²v_max²/m_N with v_max ≈ 780 km/s gives 0.20 keVnr at m_DM = 1 GeV, 0.55 keVnr at 1.7 GeV, 4–5 keVnr at 4.9–5.4 GeV — a ×20 lever arm. Crucially the rate is guaranteed: BR(h→inv) = 1–3.2% pins α1, hence σ_SI ≈ 10⁻⁴²–10⁻⁴¹ cm² for a Higgs-portal scalar, nearly mass-independent across 1–5 GeV (μ² growth offsets 1/m_S²). N-B splits N-A's "yes" four: {R2, R18} heavy vs {R0, R13} light; N-C reuses the same spectrum at a 0.35 keVnr cut to separate R13 (1.68 GeV → 0.55 keV) from R0 (1.0 GeV → 0.20 keV); N-E applies the 1 keVnr cut to the 15 units left after removing R14: heavy {R3, R4, R5, R6, R7, R8, R9, R11, R21, R22, R23} vs light {R15, R16, R17, R24}. Honest flags: R3, R4, R9, R18 span m_DM = 1–5.4 GeV, so the measurement classifies their *points* correctly but splits those units internally; each is assigned to the heavy outcome. A He target (TESSERACT/HeRALD) lifts the 1 GeV endpoint to ~2.3 keV, easing the light-family measurement.

**N-D. γ + invisible recoil-mass scan at a Tera-Z e⁺e⁻ machine (rated unlikely).** Isolates R14: σ(e⁺e⁻→γZ′) ∝ ε² ≈ 5×10⁻³ gives O(10²) fb at √s = 91 GeV — ≥10⁷ events per 100 ab⁻¹ at FCC-ee, a needle-sharp recoil-mass peak at 21.0 GeV. Every other unit predicts < 10⁻² of the 10 fb cut (visible Z′s and/or ε ≤ 1.5×10⁻³). Belle II cannot ever see this: 21 GeV > √s = 10.58 GeV.

**N-F / N-G / N-H. DM self-interaction census (rated speculative — the honest terminus).** σ_self/m ≈ λ²/(64π m³): at m = 1 GeV, λ ≈ 10 gives ~10⁻⁴ cm²/g, λ ≈ 0.1 gives ~10⁻⁸; at m = 5 GeV everything drops by ×125. N-F (cut 10⁻⁵ cm²/g) splits the light residue: {R17 (α6 = 3.5–10), R24 (α4 = 8–10, α2 up to 9.9)} vs {R15, R16 (all quartics ≤ 0.12)}. N-G (cut 3×10⁻⁷ cm²/g) splits the heavy residue: {R3, R6, R11, R21, R22, R23 — at least one quartic ≳ 3} vs {R4, R5, R7, R8, R9 — quartics ≲ 0.2}. N-H does the same for {R2, R18}: R18 (α3, α4 up to 10 → ~10⁻⁶ cm²/g) vs R2 (quartics ≤ 0.04 → ≤10⁻¹¹). Current astrophysical sensitivity is 0.1–1 cm²/g, so these need 10⁴–10⁶× improvement against a baryonic-feedback systematic that is probably a hard floor — they are included as the *only* physical handle that exists, i.e. they state precisely *how* the residual degeneracy is physical.

**Terminal degeneracies (stated plainly).** After the cascade, four groups remain unresolvable: {R17, R24}, {R15, R16}, {R4, R5, R7, R8, R9}, {R3, R6, R11, R21, R22, R23}. The most painful is {R17, R24}, because it is *cross-Lagrangian*: R24 is the pure-Z2 build, R17 the Z2+3+4+5 build, and the entire structural difference — the odd si·sr³ and si³·sr quartic terms — lives in couplings that touch no Standard-Model field and generate no annihilation, scattering, or decay signal at these parameter values (ε ≤ 4×10⁻⁶ kills every portal rate). No measurement, real or proposed, distinguishes them; within each terminal group the units differ only in *which* dark quartic is large. This is a physical, not an instrumental, degeneracy.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_yes_yes_yes_no_no",
      "lit_review": {
        "name": "LHCb + Belle II dark-photon dimuon search",
        "observable": "prompt mu+mu- resonance, 1-5 GeV, kinetic mixing eps >= 1e-3? (record mass, rate)",
        "what_this_is": "LHCb is a detector at the Large Hadron Collider optimized for reconstructing low-mass particles that decay to pairs of muons; Belle II does the same at a cleaner electron-positron collider. Both scan the muon-pair invariant-mass spectrum for a narrow bump from a new gauge boson (a 'dark photon') that mixes weakly with the ordinary photon. Every model in this leaf contains a 1-5 GeV dark U(1)' boson, and the surviving regions differ by five orders of magnitude in the mixing that sets the bump height, so this is the single most discriminating measurement absent from the catalog.",
        "refs": ["arXiv:1910.06926", "arXiv:1603.08926", "arXiv:1808.10567"],
        "reasoning": "Existing LHCb data already reach eps ~ 2e-4 at 1-1.4 GeV, so eps >= 1e-3 is x5 conservative. Seen, each at a distinct (mass, rate): R10 (1.00 GeV, eps = 0.1, ~1e4x above current bound), R1 (1.00 GeV, eps 1.5e-3 - 2.8e-2; rate 13-4000x below R10, resolved by the ~10-20% rate measurement), R12 (1.254 GeV, eps 8.9e-3), R20 (1.331 GeV, eps ~1e-2; 77 MeV from R12 vs 9 MeV mass resolution), R19 (4.73 GeV: g' = 0.30 makes BR(mumu) ~ 1%, but eps_eff ~ 2e-2 still far above reach, and the dominant invisible mode also fires Belle II's single-photon search ~100x above its projection). Not seen: 20 units with eps <= 1.8e-4 (most <= 4e-5); caveats: R0's extreme upper tail reaches 1.5e-3 (leaky), and R14's 21 GeV Z' decays invisibly (BR(mumu) ~ 4e-6 since g' = 10), so it lands here despite eps = 0.07. m_Zp ~ 1.00 GeV sits near LHCb's ~+-30 MeV phi(1020) veto; Belle II gamma-mumu covers that window independently.",
        "status": "Splits!",
        "outcomes": [
          {"label": "1.0 GeV huge", "regions": ["R10"]},
          {"label": "1.0 GeV moderate", "regions": ["R1"]},
          {"label": "1.25 GeV", "regions": ["R12"]},
          {"label": "1.33 GeV", "regions": ["R20"]},
          {"label": "4.7 GeV", "regions": ["R19"]},
          {"label": "not seen", "regions": ["R0", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R11", "R13", "R14", "R15", "R16", "R17", "R18", "R21", "R22", "R23", "R24"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2+R3+R4+R5+R6+R7+R8+R9+R11+R13+R14+R15+R16+R17+R18+R21+R22+R23+R24",
          "name": "LHCb Upgrade II inclusive dimuon at projected floor",
          "observable": "prompt mu+mu- bump, 1.0-1.5 GeV, at eps >= 3e-5?",
          "what_this_is": "The planned LHCb upgrade records every muon pair with a software trigger over ~20x more collisions, pushing the dark-photon bump hunt about an order of magnitude deeper in mixing strength. Its best sensitivity lands exactly in the 1-1.5 GeV window where every remaining Z' in this leaf sits. Four regions predict mixings just below today's reach but at or above the published projected floor, so the already-planned run itself sorts them out.",
          "reasoning": "Published projections reach eps^2 ~ 1e-9 (eps ~ 3e-5) here. Yes: R13 (eps 3e-5 - 1.8e-4 at 1.254 GeV), R18 (5.8e-5 - 1.1e-4 at 1.00 GeV), R2 (7.6e-6 - 7.4e-5; upper half in reach, lower tail leaks), R0 (wide unit, eps 1e-6 - 1.5e-3; only its upper decade is in reach - flagged leaky). No: 16 units with eps <= 3.3e-5, most <= 7e-6 (R3 up to 4.4e-5 and R9 up to 3.3e-5 graze the cut), plus R14 whose Z' is invisible (BR(mumu) ~ 4e-6).",
          "feasibility": "Closest instrument: LHCb itself. Current limits: eps ~ 2e-4 near 1.3 GeV; the Upgrade-II/inclusive-trigger projections (15-300 fb^-1) reach eps ~ 3e-5 in this window, so required improvement over published projections is ~1x. Dominant systematic: smooth prompt-dimuon combinatorial continuum and the phi(1020) veto near 1.02 GeV.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R2", "R13", "R18"]},
            {"label": "not seen", "regions": ["R3", "R4", "R5", "R6", "R7", "R8", "R9", "R11", "R14", "R15", "R16", "R17", "R21", "R22", "R23", "R24"]}
          ]
        },
        {
          "attach_to": "R0+R2+R13+R18",
          "name": "Cryogenic Ge low-threshold recoil-endpoint spectroscopy",
          "observable": "nuclear-recoil spectrum endpoint >= 1 keVnr in Ge?",
          "what_this_is": "A cryogenic germanium detector cooled to millikelvin temperatures senses the tiny heat pulse when a dark matter particle bounces off a nucleus. The maximum recoil energy (the spectrum endpoint) is fixed by collision kinematics and directly encodes the dark matter mass. These regions split into a ~1-1.7 GeV and a ~5 GeV mass family whose endpoints differ by a factor ~20, and the invisible-Higgs branching fraction observed on this tree branch guarantees a scattering rate large enough to measure.",
          "reasoning": "E_max = 2 mu^2 v_max^2 / m_N with v_max ~ 780 km/s: m_DM = 4.9-5.4 GeV (R2, and R18's heavy end) gives 4-5 keVnr; m_DM = 1.0-1.7 GeV (R0, R13) gives 0.20-0.55 keVnr. Rate anchor: BR(h->inv) = 1-3.2% pins alpha1 ~ (1.9-3.3)e-3, hence sigma_SI ~ 1e-42 - 1e-41 cm^2, nearly equal at 1 and 5 GeV since mu^2 growth offsets 1/m_S^2 - both outcomes give measurable spectra. Caveat: R18 spans m_DM = 1-5.4 GeV, so this unit straddles; its points classify individually and only its heavy end remains with R2.",
          "feasibility": "Closest: SuperCDMS SNOLAB HV Ge (funded; eV-scale phonon resolution, ~100 eVnr threshold) and CRESST-III (30 eVnr); a He target (TESSERACT/HeRALD) would lift the 1 GeV endpoint to ~2.3 keV. Detection at 1e-42 cm^2 plus an endpoint fit needs O(50-100) events, i.e. few-hundred kg-yr low-threshold exposure, ~5-10x beyond SNOLAB projections. Dominant systematic: nuclear-recoil energy-scale (yield) calibration below 1 keV.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R2", "R18"]},
            {"label": "no", "regions": ["R0", "R13"]}
          ]
        },
        {
          "attach_to": "R0+R13",
          "name": "Same Ge spectrum, fine endpoint bin",
          "observable": "nuclear-recoil endpoint >= 0.35 keVnr?",
          "what_this_is": "The same cryogenic germanium data as the previous node, re-examined with a finer energy cut near threshold. Because the endpoint scales with dark matter mass squared (through the reduced mass), a 1.0 GeV and a 1.7 GeV particle produce endpoints of about 0.2 and 0.55 keV. That factor ~3 is resolvable with the eV-scale phonon resolution these detectors already achieve.",
          "reasoning": "R13 (m_DM = 1.68 GeV) predicts a Ge endpoint of ~0.55 keVnr; R0 (m_DM = 1.0 GeV) predicts ~0.20 keVnr. The dimuon-node mass readout corroborates: R13's Z' sits at 1.254 GeV vs R0's at 1.00 GeV, so the two measurements cross-check each other.",
          "feasibility": "Closest: SuperCDMS HVeV-class chips (eV phonon resolution - resolution is not the obstacle). Distinguishing 0.2 from 0.55 keV endpoints needs ~50 eV absolute energy-scale accuracy; current nuclear-recoil yield calibration at 200 eV is ~20-30%, so ~3x better calibration plus endpoint statistics are required. Dominant systematic: ionization/phonon yield of sub-keV nuclear recoils.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R13"]},
            {"label": "no", "regions": ["R0"]}
          ]
        },
        {
          "attach_to": "R3+R4+R5+R6+R7+R8+R9+R11+R14+R15+R16+R17+R21+R22+R23+R24",
          "name": "FCC-ee photon + invisible recoil-mass scan",
          "observable": "gamma + missing-mass peak at 21 GeV with sigma >= 10 fb?",
          "what_this_is": "At a future electron-positron collider running on the Z resonance (such as FCC-ee), an event can emit one photon while producing an invisible particle; the photon's energy then reveals the mass of the unseen object as a sharp peak. This 'radiative return' technique is the standard hunt for dark photons that decay to dark matter, and unlike Belle II it reaches masses above 10 GeV. Exactly one region contains a 21 GeV Z' decaying almost entirely to dark matter with large mixing, predicting an enormous peak; every other region predicts essentially nothing.",
          "reasoning": "R14: m_Zp = 21.0 GeV, eps = 0.072, g' = 10 gives BR(invisible) ~ 1 and sigma(e+e- -> gamma Z') ~ O(100) fb at sqrt(s) = 91 GeV - >= 1e7 events per 100 ab^-1, a sub-percent-width recoil-mass peak at 21.0 GeV. All 15 other units: their Z' is below 2 m_DM (decays visibly, already handled by the dimuon nodes) and eps <= 1.5e-3, so any gamma+invisible rate is >= 2000x smaller and far below 10 fb. Belle II is kinematically blind: 21 GeV > sqrt(s) = 10.58 GeV.",
          "feasibility": "Closest: Belle II single-photon search (reaches eps ~ 1e-3 but only m < ~9.5 GeV). Requires a higher-energy e+e- machine - FCC-ee/CEPC Z-pole, proposed but unfunded; the needed sensitivity is trivial once the machine exists (signal ~100 fb vs ab-scale reach), so the obstacle is machine existence, not performance. Dominant background: e+e- -> nu nu gamma.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R14"]},
            {"label": "not seen", "regions": ["R3", "R4", "R5", "R6", "R7", "R8", "R9", "R11", "R15", "R16", "R17", "R21", "R22", "R23", "R24"]}
          ]
        },
        {
          "attach_to": "R3+R4+R5+R6+R7+R8+R9+R11+R15+R16+R17+R21+R22+R23+R24",
          "name": "Cryogenic Ge recoil endpoint, light vs heavy family",
          "observable": "nuclear-recoil endpoint >= 1 keVnr in Ge?",
          "what_this_is": "The same cryogenic-detector concept as above, applied to the remaining fifteen regions: measure the maximum nuclear-recoil energy dark matter can deposit in germanium, which kinematics ties directly to the dark matter mass. These regions divide into a ~5 GeV family (endpoint several keV) and a ~1 GeV family (endpoint ~0.2 keV). The invisible-Higgs branching seen on this tree branch again guarantees a Higgs-portal scattering rate near 1e-42 cm^2, so a spectrum exists to measure.",
          "reasoning": "Heavy (endpoint 3.5-5 keVnr, m_DM ~ 3.8-5.4 GeV): R5, R6, R7, R8, R11, R21, R22, R23; plus R3, R4, R9 whose m_DM ranges span 1-5.4 GeV - these three units straddle, their points classify individually, and they are assigned heavy with that flag. Light (endpoint ~0.20 keVnr, m_DM = 1.0 GeV): R15, R16, R17, R24 - note this cleanly quarantines the lone Z2-Lagrangian unit R24 into a four-unit group. Rates ~1e-42 - 1e-41 cm^2 in all units from the pinned alpha1.",
          "feasibility": "Same as the endpoint node above: SuperCDMS SNOLAB HV / CRESST-III class hardware (funded, threshold adequate), needing ~5-10x their projected exposure for endpoint statistics; light targets (He) ease the 1 GeV side. Dominant systematic: sub-keV nuclear-recoil energy-scale calibration.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R3", "R4", "R5", "R6", "R7", "R8", "R9", "R11", "R21", "R22", "R23"]},
            {"label": "no", "regions": ["R15", "R16", "R17", "R24"]}
          ]
        },
        {
          "attach_to": "R15+R16+R17+R24",
          "name": "Cluster-lensing DM self-interaction census",
          "observable": "sigma_self/m >= 1e-5 cm^2/g?",
          "what_this_is": "If dark matter scatters off itself, dark matter halos become rounder and develop constant-density cores, which gravitational lensing and galaxy-kinematics surveys can detect statistically across many halos. The self-scattering rate in these models is set by the dark scalar's quartic self-couplings - the only parameters left that touch nothing in the Standard Model. Regions with order-ten quartics predict self-interactions thousands of times larger than regions with order-0.1 quartics, so halo structure is, in principle, the only remaining probe.",
          "reasoning": "sigma_self/m ~ lambda^2/(64 pi m^3): at m_DM = 1 GeV, lambda ~ 10 gives ~1e-4 cm^2/g while lambda <= 0.12 gives <= 2e-8. Yes: R17 (alpha6 = 3.5-10) and R24 (alpha4 = 8-10, alpha2 up to 9.9) predict 1e-5 - 1e-4 cm^2/g. No: R15, R16 (all quartics <= 0.12) predict <= 2e-8 cm^2/g, three-plus orders below the cut. Honest terminus: R17 (Z2+3+4+5) and R24 (Z2) land together - the two Lagrangians differ only in dark-sector quartic structure (the odd si*sr^3 terms) that couples to no SM field, so this cross-Lagrangian pair, and the {R15, R16} pair, are physically degenerate beyond this node.",
          "feasibility": "Closest: cluster strong/weak-lensing and halo-shape analyses in the Rubin-LSST/Euclid era; current sensitivity sigma/m ~ 0.1-1 cm^2/g. Required: 1e-5 cm^2/g, i.e. >= 1e4x beyond any proposed analysis, against a baryonic-feedback degeneracy in halo profiles that is likely a hard systematic floor.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R17", "R24"]},
            {"label": "no", "regions": ["R15", "R16"]}
          ]
        },
        {
          "attach_to": "R3+R4+R5+R6+R7+R8+R9+R11+R21+R22+R23",
          "name": "Ultra-faint-dwarf halo-core census",
          "observable": "sigma_self/m >= 3e-7 cm^2/g?",
          "what_this_is": "A statistical survey of the smallest dark-matter-dominated galaxies, whose central density profiles are the most sensitive known tracers of dark matter scattering off itself. For the ~5 GeV dark matter mass of these regions the self-scattering rate is 100x smaller than for the 1 GeV family, so only the extreme large-quartic regions produce any effect at all. It is included because the dark quartics are the only parameter left that differs between these regions.",
          "reasoning": "At m_DM ~ 5 GeV, sigma_self/m ~ lambda^2/(64 pi m^3) gives ~9e-7 cm^2/g for lambda = 10 and <= 1e-9 for lambda <= 0.2. Yes (some quartic >= ~3): R6 (alpha4 up to 10), R11 (alpha4 5.9-10, alpha5 2.2-10), R21, R22 (alpha5 3.5-10), R23 (alpha4 = 10), and R3 (alpha4 up to 10 - straddles, its small-quartic tail leaks). No: R4, R5, R7, R8, R9 (quartics <= ~0.2, mostly <= 0.01). Within each outcome the units differ only in WHICH dark quartic is large - a physically unobservable distinction; those groups are terminal.",
          "feasibility": "Closest: dwarf-galaxy stellar-kinematics and Rubin-LSST satellite censuses; current sensitivity ~0.1-1 cm^2/g. Required: 3e-7 cm^2/g, ~1e6x beyond any proposed capability - effectively a statement that this residual degeneracy is physical rather than instrumental. Dominant systematic: baryonic feedback and tidal effects mimicking cores.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R3", "R6", "R11", "R21", "R22", "R23"]},
            {"label": "no", "regions": ["R4", "R5", "R7", "R8", "R9"]}
          ]
        },
        {
          "attach_to": "R2+R18",
          "name": "Ultra-faint-dwarf halo-core census (heavy pair)",
          "observable": "sigma_self/m >= 3e-7 cm^2/g?",
          "what_this_is": "The same dwarf-galaxy halo-structure survey applied to the last degenerate pair from the endpoint node. These two regions have the same dark matter mass, the same Z' mass and nearly the same kinetic mixing, and differ essentially only in their dark quartic couplings, which control how strongly the dark matter scatters off itself. One region's quartics are near ten, the other's below 0.05, giving self-interaction predictions seven orders of magnitude apart - though both are tiny.",
          "reasoning": "R18 (alpha3 = 0.8-10, alpha4 = 6.4-10 at its m_DM ~ 5 GeV end) predicts sigma_self/m ~ 1e-6 cm^2/g; R2 (all quartics <= 0.04) predicts <= 1e-11 cm^2/g. Caveat: only R18's heavy end is truly degenerate with R2 (its m_DM = 1 GeV points were already separated by the endpoint measurement); the eps ranges (5.8e-5 - 1.1e-4 vs 7.6e-6 - 7.4e-5) overlap too much for a deeper dimuon rate cut to be honest.",
          "feasibility": "Identical to the previous node: needs ~1e6x beyond current 0.1-1 cm^2/g halo-structure sensitivity, with baryonic feedback as the dominant systematic. Included as the only physical handle that distinguishes the pair; in practice this pair is terminally degenerate.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R18"]},
            {"label": "no", "regions": ["R2"]}
          ]
        }
      ]
    }
  ]
}
```