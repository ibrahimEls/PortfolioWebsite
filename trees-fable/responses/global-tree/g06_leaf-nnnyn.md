I'll verify the three arXiv references I plan to cite before composing the answer.
All three references resolve and match (Planck 2018 VI does contain the annihilation constraint in its "dark matter annihilation" subsection, §7.4, even though the abstract doesn't headline it — the ID and title are confirmed). Here is the complete analysis and JSON.

---

# Reasoning

## Leaf `root_no_no_no_yes_no` (1158 pts, 54 units, all Complex Scalar Singlet + dark U(1)')

**What the catalog has already pinned down, and what it cannot see.** Every listed unit belongs to the same Lagrangian family (the 19 `Z2`-build points sit in the 608-point scatter dust, which I ignore per instructions; the Z2 vs Z2+3+4+5 builds differ only in the odd `si·sr³`, `si³·sr` potential terms, which are observationally invisible at this level). The leaf path fixes: dark matter mass MDM ≈ 1–6 GeV (a Higgs-portal coupling α1 ≈ 10⁻³ pinned by BR(h→inv) = 0.001–0.0032 — a sanity check: Γ(h→χχ*) ≈ α1²v²/8πm_h ≈ 2×10⁻⁵ GeV gives BR ≈ 0.5%, exactly this band), no direct detection anywhere (xenon and argon are essentially blind at 1–6 GeV at these cross sections), and no indirect detection in the catalog's WW-channel curves, which are kinematically irrelevant below m_W. The two parameters that vary by **orders of magnitude across the 54 regions and that no catalog observable touches** are:

1. **The mass hierarchy MDM vs MZ′** (dark photon mass, mostly 1–1.7 GeV; outliers R12 at 4.7 GeV, R38 at 14.4 GeV, R13 at 60 GeV). This decides whether the secluded annihilation χχ* → Z′Z′ (an s-wave quartic from |D_μχ|²) is **open today** (MDM > MZ′) or **forbidden** (MDM ≤ MZ′, the D'Agnolo–Ruderman regime where the relic is set by velocity-boosted annihilation at freeze-out and the channel shuts off at late times).
2. **The kinetic mixing ε**, spanning 10⁻⁶ to 0.1 — five orders of magnitude — which controls direct dark-photon production. The catalog's Z′-dilepton recast is a high-mass LHC resonance search and is blind to a ~1 GeV A′ (and to invisibly decaying ones).

### Level 1 (lit): Planck CMB annihilation energy injection

If the secluded channel is open, ⟨σv⟩ today is essentially the thermal value the relic tuned it to: σv ≈ πα′²/MDM² with g′ ≈ 0.031–0.046 (α′ = g′²/4π ≈ 0.8–1.7×10⁻⁴) gives 2.8–5×10⁻²⁶ cm³/s across MDM = 1.7–6 GeV — s-wave, unsuppressed at recombination. The Z′Z′ → e⁺e⁻/μμ/ππ cascade has f_eff ≈ 0.2–0.35 (Slatyer curves), so **p_ann = f_eff⟨σv⟩/MDM ≈ 1–7×10⁻²⁷ cm³ s⁻¹ GeV⁻¹, i.e. 4–20× above the published Planck 2018 bound of 3.2×10⁻²⁸** — the open regions are not merely distinguishable, they are already in tension with existing data. In the forbidden regions (MDM = MZ′ = 1 GeV threshold points, and R12/R13/R38 where MZ′ > MDM), σv(Z′Z′) today is exactly zero (no phase space at v → 0); the residual χχ* → Z′* → f f̄ is p-wave for a scalar pair through a vector, and the Higgs-portal s-wave piece scales as (α1 m_f/m_h²)² — both give p_ann < 10⁻³⁰, four-plus orders below Planck's reach. This is a clean two-sided prediction: excess damping of small-scale CMB anisotropy at the current sensitivity edge for one class, exactly nothing forever for the other.

**Assignments.** Open (yes): R4, R8, R22, R23, R24, R29, R30, R36, R37, R39, R40, R43, R44, R45, R50, R53 (MDM_min > MZ′_max unambiguously). Forbidden (no): R5, R6, R7, R11, R12, R13, R17, R18, R19, R25, R26, R27, R28, R31, R33, R34, R35, R38, R42, R46, R47, R49, R51, R52. **Honesty flag:** 14 regions (R0, R1, R2, R3, R9, R10, R14, R15, R16, R20, R21, R32, R41, R48) have MDM ranges spanning the threshold (e.g. R0: MDM ∈ [1, 5.7] vs MZ′ ≤ 1.7); I assign them to "yes" because the log-uniform majority (~70%) of their MDM range lies above MZ′, but their sub-threshold tails would follow the "no" branch — this split is sharp for 40 regions and statistical for these 14.

### Level 2 (novel), attached to both outcomes: a low-mass dark-photon campaign at ε ≥ 3×10⁻⁴

The orthogonal variable is ε, and it is nearly uncorrelated with the mass hierarchy, so the same probe is the right second cut on both branches. The concept: extend the BaBar-style e⁺e⁻ → γA′ bump hunts (A′ → ℓ⁺ℓ⁻ when Z′→DM is closed, which holds for all MZ′ ≈ 1–1.7 GeV regions since 2·MDM ≥ 2 GeV > MZ′; single-photon + missing energy when it is open, as in R12) plus LHCb prompt dimuon coverage for 10–70 GeV, pushed to ε = 3×10⁻⁴ — the published Belle II full-luminosity projection, a factor ~3 beyond BaBar's existing ε ≈ 10⁻³ exclusion. The regions cleave along a 3–5 decade gap in ε:

- **Forbidden-branch (CMB-no) group:** seen — R6 (ε up to 10⁻²), R7, R19, R28 (ε ≈ 0.06–0.1 at MZ′ ≈ 1 GeV; these are frankly *already excluded* by BaBar 2014, which the tree records as a guaranteed "seen"), R12 (ε = 0.1, MZ′ = 4.7 GeV, invisibly decaying since 2·MDM = 2 GeV < MZ′ — the single-photon search covers it up to 8 GeV), R25, R26, R51 (ε ≈ 2–6×10⁻³), R33 and R49 (ε ≈ 3–17×10⁻⁴, marginal — just at the cut), R38 (MZ′ = 14.4 GeV, ε = 0.1: above the Belle II kinematic limit of 10.6 GeV but squarely in LHCb's dimuon window; the open invisible channel with g′ = 0.13 leaves BR(μμ) ≈ 10%, still an effective ε_eff ≈ 0.08, orders above LHCb reach). Not seen — R5, R11, R17, R18, R27, R31, R34, R35, R47 (ε ≲ 10⁻⁴), R42, R46, R52 (ε ≈ 1–4×10⁻⁴, marginal, log-midpoints below the cut), and **R13** (MZ′ = 60 GeV, ε = 0.1, but g′ = 11.4 makes the invisible width overwhelming, BR(μμ) ~ 10⁻⁵, and Γ/M ≳ 1 — no visible resonance anywhere; an HL-LHC mono-jet would be the natural probe, but that lives in the catalog's topology-reach family, so I leave R13 in the null outcome and note it).
- **Open-branch (CMB-yes) group:** seen — R2 (ε = 0.03–0.1), R8 (0.01–0.03), R30, R50 (ε = 0.1), R48 (1.6–6×10⁻³), R14 (0.4–5×10⁻³), R36 (4.9×10⁻⁴, marginal at 1.6× the cut), and R1 (spans 5×10⁻⁶–0.02; a genuine coin flip — half its log-range is above 3×10⁻⁴ — flagged as the weakest assignment in this answer). Not seen — the remaining 22 regions, all with ε ≲ 2×10⁻⁴ (most at 10⁻⁶–10⁻⁵).

A free bonus not encoded as a node: if a resonance **is** seen, its measured mass immediately sub-separates the seen groups (14.4 GeV → R38, 4.7 GeV invisible → R12, everything else at 1–2 GeV), and its visible-vs-invisible character separates R12 from the leptonic ones.

**Feasibility** is genuinely good: Belle II is funded, running, and its published projections reach exactly the required ε ≈ 3×10⁻⁴; LHCb Upgrade II covers the two heavy-MZ′ outliers. The dominant systematics are the irreducible QED γℓℓ continuum under a ~1 GeV bump (where the ρ/ω and J/ψ vetoes cost windows of mass coverage) and the single-photon trigger efficiency for the invisible mode. Both novel nodes rate **"possible"** (improvement factor ~3× over BaBar). The residual truly-inaccessible unit is R13, which no realistic visible-resonance or B-factory search reaches; separating it from R5/R11/etc. would fall to LHC missing-energy searches already in the catalog family.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_yes_no",
      "lit_review": {
        "name": "Planck CMB annihilation energy-injection fit",
        "observable": "p_ann = f_eff<sigma v>/m_DM >= 3.2e-28 cm^3/s/GeV ?",
        "what_this_is": "The Planck satellite mapped the temperature and polarization of the cosmic microwave background (CMB), the light released when the universe first became transparent. If dark matter annihilates during the cosmic 'dark ages', the injected electrons and photons ionize hydrogen and smear out the small-scale CMB pattern, so Planck's maps put a hard cap on the annihilation power per unit dark-matter mass. Here, half the parameter regions have the dark-matter particle heavier than the dark photon, so pairs of them annihilate into dark photons today at full thermal strength and would leave exactly this imprint; the other half have that channel kinematically closed (the dark photon is as heavy or heavier), so annihilation shut off after the early universe and the CMB shows nothing.",
        "refs": ["arXiv:1807.06209", "arXiv:1506.03811", "arXiv:1505.07107"],
        "reasoning": "Open-hierarchy regions (MDM_min > MZp_max, e.g. R4: MDM 4.7-5.3 GeV vs MZp <= 1.2 GeV) annihilate via the s-wave quartic chi chi* -> Z'Z' with sigma-v = pi*alpha'^2/MDM^2 = 3-5e-26 cm^3/s for g' = 0.031-0.046 (relic-tuned), unsuppressed at recombination; with f_eff = 0.2-0.35 for the Z'Z' -> e/mu/pi cascade this gives p_ann = 1-7e-27 cm^3/s/GeV, i.e. 4-20x ABOVE Planck's published 3.2e-28 bound - these regions are already in tension with existing data. Forbidden regions (MDM = MZp = 1 GeV threshold points, or MZp > MDM as in R12/R13/R38) have zero phase space for Z'Z' at v -> 0; the residual chi chi* -> Z'* -> ff is p-wave and the Higgs-portal s-wave piece scales as (alpha1*m_f/m_h^2)^2, both giving p_ann < 1e-30, four orders below any CMB reach. Caveat: 14 regions (R0,R1,R2,R3,R9,R10,R14,R15,R16,R20,R21,R32,R41,R48) span the MDM = MZp threshold; they are assigned to 'yes' because ~70% of their log-uniform MDM range lies above MZp, but their sub-threshold tails behave like the 'no' branch.",
        "status": "Splits!",
        "outcomes": [
          {"label": "injection seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R8", "R9", "R10", "R14", "R15", "R16", "R20", "R21", "R22", "R23", "R24", "R29", "R30", "R32", "R36", "R37", "R39", "R40", "R41", "R43", "R44", "R45", "R48", "R50", "R53"]},
          {"label": "no injection", "regions": ["R5", "R6", "R7", "R11", "R12", "R13", "R17", "R18", "R19", "R25", "R26", "R27", "R28", "R31", "R33", "R34", "R35", "R38", "R42", "R46", "R47", "R49", "R51", "R52"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R5+R6+R7+R11+R12+R13+R17+R18+R19+R25+R26+R27+R28+R31+R33+R34+R35+R38+R42+R46+R47+R49+R51+R52",
          "name": "Belle II / LHCb-U2 dark-photon campaign",
          "observable": "gamma + (ll or invisible) resonance, eps >= 3e-4 ?",
          "what_this_is": "An electron-positron collider (Belle II) fires beams at each other and looks for events with one photon recoiling against either a narrow electron/muon pair resonance or nothing at all (missing energy) - the signature of producing a 'dark photon', a heavier cousin of the photon that talks to ordinary matter only through a tiny mixing parameter epsilon; LHCb extends the same dimuon bump hunt to masses above 10 GeV. This is the single most sensitive probe of how strongly a GeV-scale dark photon couples to normal matter. The regions in this group are indistinguishable to the CMB (their annihilation shut off), but their epsilon values span five orders of magnitude, so this search cleaves them cleanly.",
          "reasoning": "Within the forbidden-hierarchy group epsilon splits 3-5 decades: R7/R19/R28 (eps 0.06-0.1, MZp ~1 GeV, visible ll - already excluded by BaBar's existing eps > 1e-3 limit, guaranteed 'seen'), R12 (eps 0.1, MZp 4.7 GeV, invisibly decaying since 2*MDM = 2 GeV < MZp, caught by the single-photon search), R38 (eps 0.1, MZp 14.4 GeV: beyond Belle II's 10.6 GeV kinematic limit but in LHCb's dimuon window with BR(mumu) ~ 10% despite the open invisible channel, effective eps_eff ~ 0.08), R6/R25/R26/R51 (eps 2e-3 - 1e-2), and marginally R33/R49 (3-17e-4, just above cut). Not seen: R5,R11,R17,R18,R27,R31,R34,R35,R47 (eps <= 1e-4), marginal R42/R46/R52 (log-midpoints ~2e-4, below cut), and R13 (MZp = 60 GeV with g' = 11.4: invisible width overwhelming, BR(mumu) ~ 1e-5 and Gamma/M >~ 1, no visible resonance possible anywhere). Bonus if seen: the measured resonance mass (1-2 vs 4.7 vs 14.4 GeV) and visible-vs-invisible character further sub-separate R12 and R38 from the light-MZp regions at no extra cost.",
          "feasibility": "Closest instruments: BaBar (existing eps ~ 1e-3 exclusion for visible and invisible A' below 8-10 GeV) and LHCb Run-2 prompt dimuon (few 1e-4 in windows, 10.6-70 GeV). Required: eps = 3e-4 over 0.5-15 GeV, a ~3x improvement, which is exactly the published Belle II 50/ab projection plus LHCb Upgrade II. Dominant systematics: irreducible QED gamma-ll continuum under a ~1 GeV bump (with rho/omega and J/psi veto windows lost) and single-photon trigger efficiency for the invisible mode.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R6", "R7", "R12", "R19", "R25", "R26", "R28", "R33", "R38", "R49", "R51"]},
            {"label": "not seen", "regions": ["R5", "R11", "R13", "R17", "R18", "R27", "R31", "R34", "R35", "R42", "R46", "R47", "R52"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R8+R9+R10+R14+R15+R16+R20+R21+R22+R23+R24+R29+R30+R32+R36+R37+R39+R40+R41+R43+R44+R45+R48+R50+R53",
          "name": "Belle II gamma + dimuon dark-photon bump hunt",
          "observable": "mumu resonance at 1-2 GeV with eps >= 3e-4 ?",
          "what_this_is": "The Belle II experiment collides electrons and positrons and searches for a photon recoiling against a narrow muon-pair resonance - the fingerprint of a dark photon, a hypothetical particle that mixes faintly with the ordinary photon with strength epsilon. It is the world's most sensitive way to measure that mixing for dark photons in the 1-10 GeV mass range. All regions in this group look identical to the CMB (all annihilate into dark photons today), but their mixing strengths differ by up to five orders of magnitude, which this search resolves directly.",
          "reasoning": "In every region of this group MZp (1-1.7 GeV) < 2*MDM, so the dark photon decays visibly to lepton pairs. Epsilon separates: seen - R2 (0.03-0.1), R30/R50 (0.1; like R7 these are already excluded by BaBar's existing limit), R8 (0.01-0.03), R48 (1.6-6e-3), R14 (4e-4-5e-3), R36 (4.9e-4, marginal at 1.6x the cut), and R1 (spans 5e-6-0.02: a genuine coin flip, half its log-range above 3e-4 - the weakest assignment here, flagged). Not seen - the remaining 22 regions all have eps <= 2e-4, most at 1e-6-1e-5 (e.g. R0 <= 1.6e-5, R4 <= 1.6e-4, R39/R40/R43 at the 1e-6 floor), one to three decades below the projected reach.",
          "feasibility": "Closest instrument: BaBar's published gamma + ll search (eps ~ 1e-3, 0.02-10.2 GeV). Required: eps = 3e-4 at 1-2 GeV, a ~3x improvement matching the published Belle II full-luminosity (50/ab) projection on funded, running hardware. Dominant systematic: the irreducible QED e+e- -> gamma mu mu continuum shape under a narrow bump, plus lost coverage in the rho/omega/phi resonance veto windows around 0.8-1.1 GeV, which overlaps part of this group's MZp range.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R1", "R2", "R8", "R14", "R30", "R36", "R48", "R50"]},
            {"label": "not seen", "regions": ["R0", "R3", "R4", "R9", "R10", "R15", "R16", "R20", "R21", "R22", "R23", "R24", "R29", "R32", "R37", "R39", "R40", "R41", "R43", "R44", "R45", "R53"]}
          ]
        }
      ]
    }
  ]
}
```