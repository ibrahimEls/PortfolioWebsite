I'll verify the references I plan to cite, then deliver the full analysis in one message. Loading the fetch tool first.
Now verifying all seven arXiv IDs in parallel:
All seven arXiv references verified (titles match my claims). Here is the full degeneracy-breaking analysis for the two sibling leaves.

---

# Reasoning

## Common physics of both leaves

Every unit in both leaves is the same field content — a complex scalar SM singlet `S` carrying dark charge −1 under a gauged U(1)′, plus the SM Higgs — differing only in which Z_N-allowed dark-potential quartics are switched on (the Z2 build has 4 quartics; the merged Z2+3+4+5 build has 6, adding the odd `si·sr³` and `si³·sr` terms). Three facts drive everything below:

1. **The Z′ always decays visibly.** Throughout both leaves MZp ≤ 990 GeV < 2·MDM (MDM ≥ 317 GeV), so Z′ → DM DM is kinematically closed and the Z′ decays 100% to SM fermions through the kinetic mixing ε. Every Z′ here is a textbook "visibly decaying dark photon," and the entire (MZp, ε) plane of dark-photon searches — which is *not* in the catalog (the catalog dilepton entry is the high-mass pp → Z′ → ℓℓ σ×BR recast) — becomes usable. Regions span MZp = 1–990 GeV and ε = 1e-6–0.1: four orders of magnitude of separation.

2. **Relic conditioning locks gU1p to MDM for the "secluded" units.** Wherever MZp < MDM and gU1p ≳ 0.3, the annihilation ss* → Z′Z′ is open, s-wave, with σv ≈ g⁴/(8π MDM²)·(1−MZp²/MDM²)^{3/2}(1−MZp²/2MDM²)^{-2}. Plugging the tabulated values (e.g. g = 0.43, MDM = 615 GeV → 4e-26 cm³/s; g = 0.514, MDM = 700, MZp = 550 → 3e-26 after phase space) gives the thermal cross-section every time — these units are secluded annihilators whose relic is set by Z′Z′. Units with g ≲ 0.15 instead give σv(Z′Z′) ≲ 2e-27–2e-28 cm³/s (e.g. g = 0.1, MDM = 500 → 1.9e-28); their relic comes from the large dark quartics (α2, α3 ~ 10 driving annihilation into the dark partner scalar), which is *invisible*. Crucially, the catalog's indirect-detection entries are per-2-body-SM-channel templates (CTA WW, Fermi WW, IceCube ν); the dominant ss* → Z′Z′ → 4-fermion **cascade** channel is not tested by any catalog observable — which is exactly why these thermal s-wave annihilators sit in a "CTA (WW): NO" branch. A cascade-template search is therefore a genuinely new measurement, not a refinement.

3. **Direct detection is Higgs-portal (isoscalar) in all units**, because the α1 H²sr² term splits sr from si by δ ≈ α1v²/2MDM ~ 0.5–1.5 GeV, making the Z′ vertex (which connects sr↔si) inelastic at the GeV level — kinematically dead at μv ~ 100 MeV momentum transfer. This is why units with ε g/MZp² large enough to naively give σ_p ~ 1e-43 cm² are still viable, and it kills multi-target f_n/f_p tests as a discriminator: I checked this option and rejected it.

The two Lagrangians themselves (Z2 vs Z2+3+4+5) differ only in dark-sector quartics whose spectrum imprint is sub-GeV and hidden; no measurement targets them *directly*. They separate only statistically, through where their viable regions sit in (MZp, ε, g) — the LHCb split below achieves the best such separation (leaf 2: 5 of 7 Z2 units on one side).

Throughout, units whose parameter box straddles a cut are assigned by the log-midpoint of the box; I flag each such marginal call.

## Leaf `root_yes_yes_no_no_yes` (DarkSide YES, 54 units)

**Lit review — LHCb dark-photon dimuon search (Run 3 → Upgrade II).** LHCb's inclusive A′ → μ⁺μ⁻ search (prompt + displaced) covers 0.214–70 GeV; the published Run 2 result already excludes ε ≳ 1–3e-3 over much of that window, BaBar excludes ε ≳ 1e-3 below 10.2 GeV, and the Upgrade II projection (300 fb⁻¹) reaches ε ~ 2–5e-4 across the full range. Cut: a dimuon resonance at 1–70 GeV with ε ≥ 5e-4.

- **Seen (15 units):** R1 (MZp 17–41 GeV, ε ~0.011–0.1 — the upper half is *already excluded* by the existing LHCb limit), R7, R50 (ε 0.05–0.1 at 24–34 GeV, loudly excluded already), R53 [Z2] (58–60 GeV, ε ~0.02), R17, R33, R42, R49, R34/R35 (MZp = 1 GeV, ε ~5e-3 — already excluded by BaBar), R36, R26, and the marginal straddlers R2 (ε log-mid 1.3e-3), R5 (mass tail reaches 131 GeV), R15 (ε mid 6e-4).
- **Not seen (39 units):** everything with ε below ~5e-4 at the log-midpoint (R3 ≤ 6e-5; R8, R9, R41, R43, R44 at ε ~1e-6; R11 [Z2] mid 3.3e-4 — marginal, Upgrade II's 2e-4 floor could flip it; R12 mid 4.1e-4, also marginal; R16, R22 below cut and/or above 70 GeV) plus every heavy-Z′ unit (R0 at 986 GeV; R4, R10, R14, R21, R23–R25, R27–R30, R45–R48 at 117–583 GeV).

**Novel node on the seen-group (R1+R2+…+R53) — dwarf-spheroidal γ-ray cascade stack.** All seen-group units except R2, R34, R35 have g ≥ 0.31 with MZp ≪ MDM: secluded thermal annihilators predicting ⟨σv⟩(Z′Z′→4f) ≈ 2–4e-26 cm³/s today, s-wave. R2 (g 0.04–0.27), R34, R35 (g ~0.03) predict ≲ 1e-27 (R2's upper tail grazes 1e-26 — marginal). The Fermi-LAT 6-yr stacked dwarf limit at 0.5 TeV is ~1e-25 cm³/s (bb̄-like); 15 years of livetime plus the ~2–3× larger dwarf sample expected from LSST pushes projected sensitivity to ~2–4e-26 at 0.3–0.7 TeV — sitting *right at* the predicted signal, so this is a factor-~1 detection, honestly marginal, with ultra-faint-dwarf J-factors the dominant systematic. Cascade spectra (two-step, 4-quark/4-lepton) are broader and softer than the 2-body templates in our catalog; dedicated cascade-template dwarf analyses exist in the literature. A CTA GC cascade reanalysis would be ~10× more sensitive but carries the cusp-vs-core halo systematic; dwarfs are the clean version.

**Novel node on the not-seen-group (R0+R3+…+R52) — Tera-Z electroweak fit of Z–Z′ kinetic mixing.** A heavy kinetically-mixed Z′ shifts Z-pole observables by δsin²θ_eff ~ ε²(mZ/MZp)². Predictions: R0 (ε = 0.068, MZp = 986) → 4e-5; R45/R23/R25/R47 (ε 0.02–0.1 at ~550 GeV) → 3e-5–1.5e-4; R21, R24, R14, R27 → 1.3e-5–3.5e-5; R30 (117 GeV, ε mid 7e-3) → 3e-5; R4 (broad, mid ~260 GeV, ε mid 0.018) → 4e-5. Versus: R28 → 3e-6, R46 → 5e-6, R48 → 8e-7, and all light-Z′/small-ε units < 1e-8. FCC-ee's Tera-Z program (6×10¹² Z's) targets δsin²θ_eff ~ few×1e-6 statistically, ~1e-5 with systematics — the cut at 1e-5 splits cleanly, with R27 and R4 the marginal members. The residual "no shift" group (28 units) is the honest dead end: its members differ mainly in dark quartics α2–α6 and in MZp = 1–10 GeV at ε ≤ 1e-4, where the Z′ production rate scales as ε² ≤ 1e-8 and cτ ~ cm (below any far-detector displaced search, above every beam-dump lifetime window — the classic gap). I found no credible measurement, existing or conceivable, that separates them; they share one outcome, as the marginality rules require me to admit.

## Leaf `root_yes_yes_no_no_no` (DarkSide NO, 59 units)

**Lit review — Fermi-LAT 15-yr + LSST dwarf stack with dark-cascade template.** Same physics as the cascade node above, but here it is the *primary* split because the g-dichotomy is the cleanest axis of this leaf: 47 units have g ≥ 0.31 with Z′Z′ open (σv ≈ 2–4e-26 cm³/s, e.g. R7/R13/R25 heavies: g = 0.514, MDM ~700, MZp ~550 → 3.1e-26 after the (1−0.63)^{3/2} phase-space factor), while 12 units (R0, R4, R5, R9, R17, R20, R21, R29, R33, R36, R50, R54) have g = 0.04–0.18 with MZp = 1–4.3 GeV → σv ≤ 2e-27 (R0's upper tail) down to 2e-28: a ≥10× gap across the 2e-26 cut. Detection of the seen-group is at threshold (factor ~1 above projected sensitivity), so this split's power is asymmetric: a *detection* decisively isolates the large-g class; a null result at 2e-26 excludes it only marginally. J-factors dominate the systematic budget.

**Novel node on the seen-group (47 units) — dedicated low-mass dimuon scouting at LHCb Upgrade II.** Same instrument and cut as leaf 1's lit split (m(μμ) 1–70 GeV, ε ≥ 5e-4): **yes** for R2, R8, R12 (ε up to 0.1 at 12–60 GeV, partly already excluded), R23 (10 GeV, ε ≥ 1.2e-3 — BaBar-adjacent), R28, R49, and the Z2 units R6, R11, R14, R27, R57 (all 15–130 GeV with ε mid 5e-3–3e-2). **No** for the heavies (R7, R10, R13, R25, R26, R30, R31, R37, R38, R51 at 530–570 GeV; R1, R3, R16, R22, R24, R48, R52, R53 above 70 GeV or at ε ~1e-6), the tiny-ε lights (R15, R32, R34, R35, R41–R47, R55, R56, R58 [Z2], R44, R40 [Z2] — the last two marginal at ε mid ~2–8e-4 and mass mid ~80 GeV), and the wide straddlers R18, R19, R39 (log-mid mass above 70 GeV; R19's ε = 0.05–0.1 tail below 70 GeV is already LHCb-excluded — flagged). Notably 5 of the 7 Z2-Lagrangian units land "yes" while the Z2+3+4+5 population is majority "no" — the best Lagrangian-level separation available anywhere in these leaves.

**Novel node on the not-seen-group (12 units) — Belle II radiative-return dark-photon search.** e⁺e⁻ → γA′ with A′ → μμ/hadrons directly covers MZp = 1–8 GeV independent of production in pp. BaBar's existing limit is ε ≳ 1e-3; Belle II at 50 ab⁻¹ projects ε ~ 3e-4 in this window. **Yes:** R33 (MZp 3.3–4.3 GeV, ε 0.079–0.1) and R54 (2.1–2.4 GeV, ε 0.062–0.1) — both in fact *already excluded* by BaBar, so this split resolves instantly. **No:** R0, R4, R5, R17, R20, R21, R29, R36, R50 (all ε ≤ 2e-4 at the midpoint) and the marginal R9 (ε tail to 2.5e-3 but log-mid 1.7e-4). The "no" residue is the same honest dead end as in leaf 1: multi-GeV Z′ at ε ≤ 1e-4 with small g, distinguishable only by hidden quartics.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_no_no_yes",
      "lit_review": {
        "name": "LHCb dark-photon dimuon search (Run 3 to Upgrade II)",
        "observable": "m(mumu) resonance, 1-70 GeV, kinetic mixing eps >= 5e-4 ?",
        "what_this_is": "The LHCb detector at the Large Hadron Collider records enormous numbers of muon pairs and scans their invariant-mass spectrum for a narrow bump, which would signal a new light gauge boson (a 'dark photon') decaying to two muons. It is the world's most sensitive probe of dark photons with masses between about 1 and 70 GeV whose coupling to ordinary matter comes from kinetic mixing with the photon. Every unit in this leaf contains exactly such a boson, and since it is always too light to decay into the dark-matter particles, it must decay visibly to muons and other fermions; the units differ by four orders of magnitude in the mixing strength, so this single search cleaves the leaf.",
        "refs": ["arXiv:1910.06926", "arXiv:1603.08926", "arXiv:1406.2980"],
        "reasoning": "All Z' here have MZp < 2*MDM, so BR(Z'->SM)=100% and dark-photon searches apply at full strength. Existing LHCb Run 2 prompt+displaced A'->mumu excludes eps ~ 1-3e-3 over much of 0.21-70 GeV and BaBar excludes eps > ~1e-3 below 10.2 GeV; Upgrade II (300/fb) projects eps ~ 2-5e-4 across the window. Seen units: R1 (17-41 GeV, eps 0.011-0.1, upper half already excluded), R7, R50 (eps 0.05-0.1, already excluded), R53 [Z2 Lagrangian] (58-60 GeV, eps ~0.02), R34/R35 (1 GeV, eps ~5e-3, BaBar-excluded), R17, R26, R33, R36, R42, R49, plus marginal straddlers R2 (eps log-mid 1.3e-3), R5, R15. Not seen: all eps <~ 5e-4 units (R3, R8, R9, R41, R43, R44 at eps ~1e-6; marginal R11 [Z2] mid 3.3e-4 and R12 mid 4.1e-4 could flip at the Upgrade II 2e-4 floor) and all heavy Z' (R0 at 986 GeV; R4, R10, R14, R21, R23-R25, R27-R30, R45-R48 at 117-583 GeV). Straddling boxes assigned by log-midpoint; marginal calls flagged.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1", "R2", "R5", "R7", "R15", "R17", "R26", "R33", "R34", "R35", "R36", "R42", "R49", "R50", "R53"]},
          {"label": "not seen", "regions": ["R0", "R3", "R4", "R6", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R16", "R18", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R27", "R28", "R29", "R30", "R31", "R32", "R37", "R38", "R39", "R40", "R41", "R43", "R44", "R45", "R46", "R47", "R48", "R51", "R52"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R5+R7+R15+R17+R26+R33+R34+R35+R36+R42+R49+R50+R53",
          "name": "Dwarf-galaxy gamma-ray stack, dark-cascade template",
          "observable": "<sigma v>(Z'Z' -> 4f cascade, 0.3-0.7 TeV) >= 2e-26 cm3/s ?",
          "what_this_is": "Dwarf spheroidal galaxies are small, dark-matter-dominated satellites of the Milky Way with almost no ordinary gamma-ray emission, making them clean places to look for dark-matter annihilation. Here two dark-matter particles would annihilate into a pair of dark gauge bosons, each of which then decays to quark or lepton pairs, producing a broad four-body 'cascade' gamma-ray spectrum that the standard two-body search templates in our catalog never test. Stacking many dwarfs observed by the Fermi Large Area Telescope, with new dwarfs found by the Rubin/LSST survey, directly measures this cascade annihilation rate and separates units whose relic abundance is set by this channel from units that annihilate invisibly within the dark sector.",
          "reasoning": "Relic conditioning locks gU1p to MDM for secluded units: sigma-v(ss*->Z'Z') = g^4/(8 pi MDM^2) x phase space = 2-4e-26 cm3/s (s-wave) for every seen-group unit with g >= 0.31 (R1, R5, R7, R15, R17, R26, R33, R36, R42, R49, R50, R53 [Z2]). R2 (g 0.04-0.27), R34, R35 (g ~0.03) instead predict <~1e-27 cm3/s (R2 upper tail grazes 1e-26 - marginal) because their relic comes from quartic-driven annihilation into the dark partner scalar, which is invisible. Current Fermi 6-yr dwarf limit at 0.5 TeV is ~1e-25 cm3/s; the signal is at the projected 15-yr + LSST-dwarf sensitivity, so detection is factor ~1 - honest marginal.",
          "feasibility": "Closest instrument: Fermi-LAT (operating) + LSST dwarf discoveries; current stacked-dwarf sensitivity ~1e-25 cm3/s at 0.5 TeV, projected 2-4e-26 with 15-yr livetime and ~2-3x more dwarfs - improvement factor ~3, at threshold for the predicted 2-4e-26 signal. Dominant systematic: J-factors (dark-matter density profiles) of ultra-faint dwarfs. CTA Galactic-Centre cascade reanalysis would gain another ~10x but inherits the cusp-vs-core halo systematic.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R1", "R5", "R7", "R15", "R17", "R26", "R33", "R36", "R42", "R49", "R50", "R53"]},
            {"label": "not seen", "regions": ["R2", "R34", "R35"]}
          ]
        },
        {
          "attach_to": "R0+R3+R4+R6+R8+R9+R10+R11+R12+R13+R14+R16+R18+R19+R20+R21+R22+R23+R24+R25+R27+R28+R29+R30+R31+R32+R37+R38+R39+R40+R41+R43+R44+R45+R46+R47+R48+R51+R52",
          "name": "Tera-Z electroweak fit of Z-Z' kinetic mixing",
          "observable": "Z-pole fit residual delta sin2(theta_eff) >= 1e-5 ?",
          "what_this_is": "A future circular electron-positron collider (FCC-ee or CEPC) running on the Z resonance would record trillions of Z bosons and measure the Z's mass, width, and couplings hundreds of times more precisely than LEP did. A heavy dark gauge boson that kinetically mixes with the photon and Z subtly shifts these precision observables, in proportion to the mixing squared times (mZ/MZp)^2, even when the new boson is never produced directly. That makes this the only realistic probe of the heavy-Z-prime, large-mixing units in this leaf, which are invisible to low-mass dark-photon searches.",
          "reasoning": "Predicted shifts delta sin2(theta_eff) ~ eps^2 (mZ/MZp)^2: R0 (eps 0.068, 986 GeV) -> 4e-5; R23/R25/R45/R47 (eps 0.02-0.1 at ~550 GeV) -> 3e-5 to 1.5e-4; R14/R21/R24 -> 2-3.5e-5; R30 (117 GeV, eps mid 7e-3) -> 3e-5; R4 (mid ~260 GeV, eps mid 0.018) -> 4e-5; R27 -> 1.3e-5 (marginal). Below cut: R28 -> 3e-6, R46 -> 5e-6, R48 -> 8e-7, and all light-Z'/small-eps units < 1e-8. The residual no-shift group (28 units) differs only in dark quartics alpha2-alpha6 and in MZp 1-10 GeV at eps <= 1e-4, where collider production scales as eps^2 <= 1e-8 and c-tau ~ cm sits in the gap between beam-dump and displaced-vertex coverage: no known measurement separates them, so they honestly share one outcome.",
          "feasibility": "Closest instrument: FCC-ee Tera-Z (CERN feasibility study; 6e12 Z bosons), design precision delta sin2(theta_eff) ~ few e-6 statistical, ~1e-5 systematic-limited - the cut equals the design spec, improvement factor ~1 vs the documented plan (Curtin-Essig-Gori-Shelton dark-photon electroweak-fit projections). Dominant systematic: beam-energy calibration and lepton-asymmetry systematics at the Z pole.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "shift", "regions": ["R0", "R4", "R14", "R21", "R23", "R24", "R25", "R27", "R30", "R45", "R47"]},
            {"label": "no shift", "regions": ["R3", "R6", "R8", "R9", "R10", "R11", "R12", "R13", "R16", "R18", "R19", "R20", "R22", "R28", "R29", "R31", "R32", "R37", "R38", "R39", "R40", "R41", "R43", "R44", "R46", "R48", "R51", "R52"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_yes_no_no_no",
      "lit_review": {
        "name": "Fermi-LAT 15-yr + LSST dwarf stack, dark-cascade template",
        "observable": "<sigma v>(Z'Z' -> 4f cascade, 0.3-0.7 TeV) >= 2e-26 cm3/s ?",
        "what_this_is": "The Fermi Large Area Telescope surveys the whole gamma-ray sky, and dwarf spheroidal galaxies - small, dark-matter-dominated Milky Way satellites - are its cleanest dark-matter targets because they emit almost no ordinary gamma rays. In these models two dark-matter particles annihilate into a pair of dark gauge bosons that each decay to quarks or leptons, yielding a broad four-body cascade of gamma rays that none of the two-body channel templates in our catalog tests. Stacking all known dwarfs, plus the new ones the Rubin/LSST survey will find, measures this cascade annihilation rate directly and splits the leaf along its sharpest axis: units whose relic abundance is set by this visible channel versus units that annihilate invisibly inside the dark sector.",
        "refs": ["arXiv:1503.02641", "arXiv:1503.01773", "arXiv:1902.01055"],
        "reasoning": "Relic conditioning ties gU1p to MDM: 47 units have g >= 0.31 with MZp < MDM, giving s-wave sigma-v(ss*->Z'Z') = g^4/(8 pi MDM^2) x phase space = 2-4e-26 cm3/s today (e.g. the heavy units R7/R13/R25: g=0.514, MDM ~700 GeV, MZp ~550 GeV -> 3.1e-26 including the (1-MZp^2/MDM^2)^{3/2} suppression). The 12 small-g units (R0, R4, R5, R9, R17, R20, R21, R29, R33, R36, R50, R54; g = 0.04-0.18, MZp 1-4.3 GeV) predict 2e-28 to 2e-27 - at least 10x below the cut - because their relic is set by large dark quartics annihilating into the invisible partner scalar. Current 6-yr dwarf limit at 0.5 TeV is ~1e-25 cm3/s; 15-yr + LSST dwarfs project 2-4e-26, so a detection decisively isolates the large-g class while a null result is only marginally exclusive - the split's power is asymmetric and J-factor systematics dominate.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1", "R2", "R3", "R6", "R7", "R8", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R18", "R19", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R30", "R31", "R32", "R34", "R35", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R51", "R52", "R53", "R55", "R56", "R57", "R58"]},
          {"label": "not seen", "regions": ["R0", "R4", "R5", "R9", "R17", "R20", "R21", "R29", "R33", "R36", "R50", "R54"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R3+R6+R7+R8+R10+R11+R12+R13+R14+R15+R16+R18+R19+R22+R23+R24+R25+R26+R27+R28+R30+R31+R32+R34+R35+R37+R38+R39+R40+R41+R42+R43+R44+R45+R46+R47+R48+R49+R51+R52+R53+R55+R56+R57+R58",
          "name": "LHCb Upgrade II low-mass dimuon scouting",
          "observable": "m(mumu) resonance, 1-70 GeV, kinetic mixing eps >= 5e-4 ?",
          "what_this_is": "The LHCb detector at the Large Hadron Collider scans its huge sample of muon pairs for a narrow invariant-mass peak from a light dark gauge boson decaying to two muons. It is most sensitive to such bosons between about 1 and 70 GeV whose only link to ordinary matter is kinetic mixing with the photon - exactly the boson every unit here contains, and one that must decay visibly because it is too light to decay to the dark-matter particles. The units differ by five orders of magnitude in mixing strength, and notably five of the seven units belonging to the simpler Z2 Lagrangian sit on the visible side, so this measurement also gives the best available separation between the two Lagrangians.",
          "reasoning": "Cut eps >= 5e-4 for 1 < MZp < 70 GeV (existing LHCb/BaBar already exclude eps >~ 1e-3 in much of the window; Upgrade II 300/fb reaches 2-5e-4). Yes: R2, R8, R12 (eps up to 0.1 at 12-60 GeV, partly already excluded), R23 (10 GeV, eps >= 1.2e-3), R28, R49, and Z2-Lagrangian units R6, R11, R14, R27, R57 (15-130 GeV, eps mid 5e-3 to 3e-2). No: heavy Z' at 530-570 GeV (R7, R10, R13, R25, R26, R30, R31, R37, R38, R51) or above 70 GeV (R1, R3, R16, R22, R24, R48, R52, R53), tiny-eps lights (R15, R32, R34, R35, R41-R47, R55, R56, R58 [Z2]), and marginal straddlers assigned by log-midpoint: R40 [Z2] (mass mid ~80 GeV, eps mid 7.5e-4), R44 (eps mid 2.4e-4), R18, R19, R39 (mass mid > 70 GeV; R19's eps = 0.05-0.1 tail below 70 GeV is already LHCb-excluded).",
          "feasibility": "Closest instrument: LHCb (operating; Upgrade II approved planning for ~300/fb). Current published reach eps ~ 1-3e-3 in 0.21-70 GeV; required reach 5e-4 is the published Upgrade II projection - improvement factor ~3. Dominant systematic: smooth Drell-Yan/hadronic dimuon background modeling under a narrow peak.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R2", "R6", "R8", "R11", "R12", "R14", "R23", "R27", "R28", "R49", "R57"]},
            {"label": "not seen", "regions": ["R1", "R3", "R7", "R10", "R13", "R15", "R16", "R18", "R19", "R22", "R24", "R25", "R26", "R30", "R31", "R32", "R34", "R35", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R51", "R52", "R53", "R55", "R56", "R58"]}
          ]
        },
        {
          "attach_to": "R0+R4+R5+R9+R17+R20+R21+R29+R33+R36+R50+R54",
          "name": "Belle II radiative-return dark-photon search",
          "observable": "e+e- -> gamma + (mumu/qq) peak, 1-8 GeV, eps >= 3e-4 ?",
          "what_this_is": "Belle II is an electron-positron collider experiment in Japan running at about 10.6 GeV collision energy; when an electron and positron annihilate and radiate a photon, the remaining energy can produce a dark gauge boson whose mass shows up as a sharp peak recoiling against that photon or in its visible muon or quark-pair decay. This 'radiative return' technique cleanly probes bosons of mass 1-8 GeV regardless of how they would be produced in proton collisions, and it is the definitive probe for the light dark gauge bosons (1-4 GeV) that all twelve of these small-coupling units contain. Two units have mixing large enough to appear (indeed they conflict with existing BaBar data); the rest are far below reach and remain honestly indistinguishable.",
          "reasoning": "All 12 units have MZp = 1-4.3 GeV, in the e+e- radiative-return window. Yes: R33 (3.3-4.3 GeV, eps 0.079-0.1) and R54 (2.1-2.4 GeV, eps 0.062-0.1) - both already excluded by the existing BaBar limit eps >~ 1e-3, so this outcome resolves with current data. No: R0, R4, R5, R17, R20, R21, R29, R36, R50 (eps log-mid <= 2e-4, most at 1e-6) and marginal R9 (eps tail reaches 2.5e-3 but log-mid 1.7e-4). The no-side residue differs only in hidden dark quartics (alpha2, alpha3 ~ 10 vs small) and MZp within 1-4 GeV at eps <= 1e-4, where production rates scale as eps^2 <= 1e-8 and the cm-scale decay length falls between beam-dump and displaced-vertex coverage; no measurement I can defend separates them further.",
          "feasibility": "Closest instrument: Belle II (operating, 50/ab design dataset). BaBar achieved eps ~ 1e-3 in this mass range; the 3e-4 cut is the published Belle II 50/ab projection - improvement factor ~3. Dominant systematic: QED radiative background shape and trigger efficiency for low-multiplicity events.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R33", "R54"]},
            {"label": "not seen", "regions": ["R0", "R4", "R5", "R9", "R17", "R20", "R21", "R29", "R36", "R50"]}
          ]
        }
      ]
    }
  ]
}
```