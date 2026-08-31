<!-- CsSg_DM.Z2+3+4+5.md -->

I'll verify the arXiv references I plan to cite (as the rules require), then deliver the full analysis in one message.
All three references resolve and match their claims (de Blas et al. Higgs@Future-Colliders report; CTA Consortium Galactic-centre DM sensitivity; Harvey et al. cluster self-interaction limit σ/m < 0.47 cm²/g). Here is the complete deliverable.

# Degeneracy-breaking analysis: CsSg_DM.Z2+3+4+5

## TLDR

For both degenerate leaves the honest verdict is **"No Split!"** at the literature level: after quantitatively checking every catalog-external observable class (precision Higgs couplings at lepton colliders, indirect detection in dwarfs/GC/CMB, solar-capture neutrinos, neutron-star heating, multi-target and modulation/directional direct detection, cluster self-interactions, collider pair production, EWPO), none comes within 3–9 orders of magnitude of resolving the surviving regions. This is a physical statement about the model, not a failure of imagination: the regions within each leaf differ almost exclusively in **dark-sector quartic self-couplings that decouple from every Standard Model probe**, plus sub-percent offsets in the DM mass. I attach two novel-experiment nodes per leaf — a sub-percent-resolution gamma-ray line spectrometer (splits the mass clusters) and an ultra-deep halo self-interaction probe (splits the quartic tiers) — both rated *speculative*, with the required improvement factors stated explicitly.

## Common physics of the model (why this leaf structure is so degenerate)

The model is a complex scalar singlet S = (sr + i·si)/√2 with a single Higgs-portal coupling α1·H²·sr² and fifteen dark quartics (which, after summing the triplicated monomial slots of the merged Z_N builds, collapse to five effective couplings: λ_sr⁴ = α2+α7+α12, λ_si⁴ = α6+α11+α16, λ_conv = α4+α9+α14, and two mixed odd combinations). Everything the Standard Model can see enters through α1 and MDM only:

- **σ_SI ∝ α1²/MDM²** (tree-level Higgs exchange). Both leaves have this pinned to the 1–10× XLZD band by construction.
- **BR(h→inv)**: with MDM ≈ 95.5–97.9 GeV > m_h/2 = 62.5 GeV, on-shell h → SS is kinematically closed; the recorded BR above the SM 4ν floor (BR(h→ZZ*→4ν) ≈ 1.1×10⁻³) must come from the pipeline's off-shell/threshold treatment of the portal width. Its within-leaf variation (factor ~3 in leaf `root_yes_no`) is therefore **not predictable from (α1, MDM) alone** — α1² varies only ~30% across that leaf — so no per-region BR prediction can honestly be stated, which disqualifies any Higgs-precision split under the rules ("state the predicted value in EACH region").
- **Annihilation today**: s-channel h* exchange at √s ≈ 2·MDM ≈ 192–196 GeV, far off the Higgs pole. Anchoring to the known scalar-singlet relic curve (thermal portal λ ≈ 0.03–0.05 at ~100 GeV, ⟨σv⟩ ≈ 2×10⁻²⁶ cm³/s), the α1 ≈ 0.001–0.0019 points here give ⟨σv⟩ ≈ few×10⁻²⁹–10⁻²⁸ cm³/s into WW/ZZ — at least **3–4 orders below** CTA's projected Galactic-centre reach at 100 GeV (arXiv:2007.16129) and further below Fermi dwarf and CMB-injection sensitivities. Line photons (γγ) are an additional loop factor ~10⁻³ down.
- **Solar capture**: capture scales with σ_SI ≈ few×10⁻⁴⁹–10⁻⁴⁸ cm²; IceCube's WW-channel sensitivity at ~100 GeV corresponds to σ_SI ≳ 10⁻⁴⁴ cm² — 4 orders short. Neutron-star kinetic heating saturates only above the geometric threshold ~2×10⁻⁴⁵ cm², 2.5–3 orders above these points.
- **Mass information**: the within-leaf MDM spread is 0.4–0.65 GeV (0.4–0.7%). Xenon/argon recoil spectra at ~96 GeV give only lower-side mass bounds (fractional precision ≳30%, upper side unbounded); annual modulation and directionality carry no additional mass resolution at this scale. No published or formally planned experiment measures a ~96 GeV WIMP mass to 0.1%.
- **Dark quartics**: their only low-energy imprints are (i) DM self-scattering, σ/m ≈ 3.6×10⁻¹⁰·(λ_eff)² cm²/g at m ≈ 96 GeV (amplitude 4!·α; even λ_eff ~ 30 gives ~3×10⁻⁷ cm²/g, i.e. **10⁶–10⁹ below** the cluster-ensemble bound σ/m < 0.47 cm²/g, arXiv:1503.07675), and (ii) the sr↔si conversion rate in the early universe, which reshuffles the two co-stable components (split by δ ≈ α1v²/2MDM ≈ 0.54 GeV in leaf `root_yes_no`, ≈ 0.31 GeV in `root_no` — far too large for inelastic DD kinematics, far too small for collider resolution, and with no allowed decay sr → si + SM).

This is precisely the "dark-quartic residual degeneracy is physical" situation: the experimental catalog already exhausts the model's coupled surface.

## Leaf `root_yes_no` (15 regions)

**Structure.** The regions organize into anti-correlated (MDM, α1) tiers along a relic/DD iso-contour: MDM ≈ 95.44–95.55 with α1 ≈ 0.00182–0.00188 (R2, R4–R9); MDM ≈ 95.56–95.72 with α1 ≈ 0.00169–0.00183 (R1, R3, R13); MDM ≈ 95.77–95.87 with α1 ≈ 0.00165–0.00174 (R0, R10, R11, R12, R14). R1 (MDM 95.56–95.85) straddles the upper two tiers. All remaining separation is in dark quartics.

**Best lit candidate examined — FCC-ee/CEPC recoil-tagged BR(h→inv), and why it fails.** The Z-recoil invisible-width measurement at e⁺e⁻ Higgs factories (95% CL sensitivity ≈ 2–3×10⁻³, i.e. 1σ ≈ 1×10⁻³ absolute; arXiv:1905.03764) is a genuinely different measurement from the catalog's half-decade-binned invisible-Higgs axis and is the strongest α1-sensitive handle in the literature. But the predictable part of the signal scales as α1², and the tier separation is only (0.00184/0.00171)² ≈ 1.16 — a ~16% relative difference on a BR of ≲2×10⁻³, i.e. ≈ 0.3σ even at FCC-ee; and the leaf's own factor-3 BR spread is not attributable to α1, so per-region values cannot be assigned. The same 16% problem kills any precision-σ_SI split (also quasi-forbidden as "improve XLZD"). CTA/Fermi/CMB/solar/NS/self-interaction candidates fail by the orders of magnitude quoted above. **Verdict: No Split!** — all 15 regions in one outcome.

**Novel node A — gamma-line spectrometer (E_line = MDM).** A two-body annihilation line sits exactly at the DM mass, so a ~0.1%-resolution measurement of the line energy is a direct sub-percent mass measurement — the only observable that cleanly tracks the MDM clusters. Predicted line energies: R0 95.85–95.87, R10 95.85, R11 95.77, R12 95.78–95.81, R14 95.80 GeV (branch E ≥ 95.75); R1 95.56–95.85 (straddles; assigned below by bulk), R3 95.69–95.71, R13 95.71–95.72, R2 95.47–95.55, R4–R9 95.44–95.51 GeV (branch E < 95.75). Feasibility is the problem twice over: resolution (DAMPE/HERD-class calorimeters reach ΔE/E ≈ 1–1.5% at 100 GeV; need 5–10× better) and, dominantly, flux (⟨σv⟩_γγ ~ 10⁻³²±1 cm³/s vs CTA line reach ~10⁻²⁸; need ≳10³–10⁴ in effective exposure). Speculative.

**Novel node B — halo self-interaction (quartic tiers).** Taking the potential-sign convention in which si (no tree portal) is the lighter co-stable state, its effective self-coupling λ_si⁴ = α6+α11+α16 tiers the regions: HIGH (λ ≈ 1.5–21, σ/m ≈ 8×10⁻¹⁰–1.6×10⁻⁷ cm²/g): R0 (3.3–10), R1 (7.9–20), R2 (6–10), R4 (8.8), R5 (10), R6 (8.8–10), R8 (8–10), R9 (1.48 — just above cut, marginal), R10 (16–21), R11 (10.2), R13 (12.3), R14 (12–13); LOW (λ ≲ 0.4, σ/m ≲ 5×10⁻¹¹): R3 (0.03–0.21), R7 (0.23–0.36), R12 (0.34). Caveat recorded: under the conjugate sign convention the roles of sr/si swap and the discriminating sum becomes α2+α7+α12, under which this leaf does **not** split — the assignment is convention-dependent. Requires ~10⁹ beyond the cluster-lensing bound; speculative, and effectively a statement that this residual degeneracy is unobservable.

## Leaf `root_no` (91 regions)

**Structure.** α1 is pinned at ≈ 0.001 (the scan floor) for essentially all regions — mild exceptions R45 (0.00107–0.00116), R90 (0.00105–0.00107), and the straddling R0, R33, R23 (≤0.0011) — and MDM sits at 97.75–97.90 GeV for all but R45 (97.25–97.55), R90 (97.53–97.56) and the spanning R0 (97.43–97.89), R33 (97.55–97.86). BR(h→inv) is below the SM 4ν floor for every region, so lepton-collider invisible-width measurements see pure SM here. The R45/R90 σ_SI enhancement ((α1 ratio)² ≈ 1.1–1.35, ~20–35%) is below any realistic DD precision at discovery (≳30% statistical plus ~10% nuclear-response systematics) and is "improve XLZD" in any case. Everything else differs only in dark quartics. **Verdict: No Split!** — all 91 regions in one outcome; every literature candidate fails by the same margins as above.

**Novel node A — gamma-line spectrometer at 97.7 GeV.** Predicted line energies: R45 → 97.25–97.55 GeV and R90 → 97.53–97.56 GeV (branch E < 97.7); all other regions → 97.75–97.90 GeV (branch E ≥ 97.7). R0 and R33 straddle the cut and are assigned to the high branch by bulk (flagged). Same feasibility barriers as leaf 1 (flux is worse: α1 = 0.001 → ⟨σv⟩ smaller by ~3×). Speculative.

**Novel node B — halo self-interaction.** Same observable and cut (σ/m ≥ 5×10⁻¹⁰ cm²/g ↔ λ_si⁴ ≳ 1.2). LOW tier (λ_si⁴ = α6+α11+α16 ≲ 1, σ/m ≲ 4×10⁻¹⁰, mostly ≲10⁻¹⁰): R13, R21, R22, R24, R26, R27, R30, R35, R36, R38, R46, R48, R51, R58, R67, R70, R71, R74, R84, R85, R86 (21 regions; R21, R22, R74 straddle and are assigned by log-midpoint). HIGH tier: the remaining 70 regions with λ ≈ 2–30 (σ/m ≈ 1.4×10⁻⁹–3×10⁻⁷ cm²/g); R15 and R20 are near the boundary (log-mid λ ≈ 1.6–1.8, flagged marginal). Same convention caveat and same ~10⁹ sensitivity gap. Speculative.

```json
{
  "model": "CsSg_DM.Z2+3+4+5",
  "leaves": [
    {
      "leaf_id": "root_yes_no",
      "lit_review": {
        "name": "FCC-ee/CEPC recoil-tagged invisible-Higgs branching ratio",
        "observable": "BR(h->inv) >= 0.002 ?",
        "what_this_is": "An electron-positron Higgs factory produces Higgs bosons alongside a Z boson, and by measuring only the Z it can tell that a Higgs was made even when the Higgs decays to invisible particles. This 'recoil' technique gives the world's most precise measurement of how often the Higgs decays invisibly. Because the dark matter here talks to the Standard Model only through the Higgs, this is the sharpest published probe of that single coupling beyond our catalog. We examined it as the best available literature candidate for these regions.",
        "refs": ["arXiv:1905.03764", "arXiv:2007.16129", "arXiv:1503.07675"],
        "reasoning": "Honest failure. The predictable part of the invisible signal scales as alpha1^2, and the tier separation across this leaf is only (0.00184/0.00171)^2 = 1.16, i.e. ~16% of a BR <= 2e-3 -- about 0.3 sigma at FCC-ee's ~1e-3 (1 sigma) absolute precision. Moreover the leaf's factor-3 BR spread (0.001-0.0032, with MDM ~95.5 GeV > m_h/2 so the on-shell channel is closed and the recorded BR is an off-shell/threshold quantity) is not attributable to (alpha1, MDM), so per-region BR values cannot be honestly assigned. All other catalog-external candidates fail by orders of magnitude: <sigma v> today ~ few x 1e-29-1e-28 cm^3/s vs CTA GC reach >~1e-26 (arXiv:2007.16129); solar-capture neutrinos need sigma_SI >~1e-44 cm^2 vs few x 1e-48 here; self-interactions sigma/m <= 3e-7 cm^2/g vs cluster bound 0.47 cm^2/g (arXiv:1503.07675); no experiment measures a 96 GeV DM mass to the required 0.1%. The residual regions differ in dark quartics that decouple from all SM probes.",
        "status": "No Split!",
        "outcomes": [
          {"label": "all regions", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9+R10+R11+R12+R13+R14",
          "name": "Sub-percent-resolution space gamma-line spectrometer, Galactic-halo stare",
          "observable": "E(gamma line) >= 95.75 GeV ?",
          "what_this_is": "A space-borne gamma-ray telescope built around a deep crystal calorimeter, staring at the inner Galaxy to look for a sharp spike in the gamma-ray spectrum. When two dark matter particles annihilate directly into two photons, each photon carries away exactly the dark matter particle's rest-mass energy, so the spike's position is a direct measurement of the dark matter mass. The regions in this leaf cluster at slightly different masses (95.45, 95.7 and 95.85 GeV), so a fine enough energy measurement separates them when nothing else can.",
          "reasoning": "The line energy equals MDM, which is the one cleanly computable per-region difference. Predicted E_line (GeV): R0 95.85-95.87, R10 95.85, R11 95.77, R12 95.78-95.81, R14 95.80 (yes branch); R3 95.69-95.71, R13 95.71-95.72, R2 95.47-95.55, R4-R9 95.44-95.51, and R1 95.56-95.85 which straddles the cut and is assigned to the no branch by bulk (flagged marginal). A 0.1-0.2% energy resolution resolves the 0.4 GeV cluster gap at ~3 sigma.",
          "feasibility": "Closest instruments: DAMPE and the proposed HERD (BGO/LYSO calorimeters, dE/E ~ 1-1.5% at 100 GeV, ~1-3 m^2 sr). Needs ~5-10x better energy resolution AND ~1e3-1e4 more line-flux sensitivity, since the portal-loop line rate is <sigma v>_gg ~ 1e-32 cm^3/s vs CTA's ~1e-28 reach at 100 GeV. Dominant systematics: absolute energy-scale calibration and the diffuse continuum under the line.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R10", "R11", "R12", "R14"]},
            {"label": "no", "regions": ["R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R13"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9+R10+R11+R12+R13+R14",
          "name": "Ultra-deep dark-matter self-scattering survey, cluster-merger lensing ensemble",
          "observable": "sigma_self/m >= 5e-10 cm^2/g ?",
          "what_this_is": "When galaxy clusters collide, the stars, gas and dark matter separate slightly, and gravitational lensing maps where the dark matter went. If dark matter particles scatter off each other, the dark matter clump lags behind the stars by a measurable offset. This is the only known observable that responds to the dark-sector quartic self-couplings -- the couplings that make these regions different -- because those couplings touch nothing in the Standard Model.",
          "reasoning": "At m = 95.5 GeV, sigma/m = 3.6e-10 x lambda_eff^2 cm^2/g with lambda_eff = alpha6+alpha11+alpha16 (self-coupling of the lighter, si-like state under the standard potential-sign convention). HIGH tier (yes): R0 (3.3-10), R1 (7.9-20), R2 (6-10), R4 (8.8), R5 (10), R6 (8.8-10), R8 (8-10), R9 (1.48, marginal just above cut), R10 (16-21), R11 (10.2), R13 (12.3), R14 (12-13) giving sigma/m ~ 8e-10 to 1.6e-7 cm^2/g. LOW tier (no): R3 (0.03-0.21), R7 (0.23-0.36), R12 (0.34) giving sigma/m <~ 5e-11 cm^2/g. Caveat: under the conjugate mass-ordering convention the discriminating sum becomes alpha2+alpha7+alpha12 and this leaf does not split -- assignment is convention-dependent.",
          "feasibility": "Closest measurement: ensemble lensing of 72 cluster mergers, sigma/m < 0.47 cm^2/g at 95% CL (Harvey et al.). Reaching 5e-10 cm^2/g requires ~1e9 improvement -- beyond any conceivable astrophysical program; dominant systematic is baryonic and projection-induced star/DM offsets. Included as the honest quartic probe: in practice this records that the residual degeneracy is physically unobservable.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R1", "R2", "R4", "R5", "R6", "R8", "R9", "R10", "R11", "R13", "R14"]},
            {"label": "no", "regions": ["R3", "R7", "R12"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no",
      "lit_review": {
        "name": "FCC-ee/CEPC recoil-tagged invisible-Higgs branching ratio",
        "observable": "BR(h->inv) >= 0.0016 ?",
        "what_this_is": "An electron-positron Higgs factory tags Higgs bosons through the accompanying Z boson and so can measure the rate of invisible Higgs decays with per-mille precision, far beyond the LHC. Since the only door between this dark sector and the Standard Model is the Higgs coupling, this is the natural first place to look for a finer split. We examined it as the strongest literature candidate; here every region sits at the Standard Model floor, so it returns the same answer for all of them.",
        "refs": ["arXiv:1905.03764", "arXiv:2007.16129", "arXiv:1503.07675"],
        "reasoning": "Honest failure. All 91 regions have alpha1 pinned at ~0.001 (R45/R90 at most 0.00116) and BR(h->inv) below the SM 4nu floor (1.1e-3); every region predicts a measured BR ~ 0.0011, below the cut, indistinguishable from the SM at FCC-ee/CEPC precision (~1e-3 at 1 sigma, arXiv:1905.03764). The mild R45/R90 sigma_SI enhancement (20-35% from alpha1^2) is below DD discovery-mode precision and is a forbidden 'improve XLZD' split. Indirect detection (<sigma v> ~ 1e-29 cm^3/s vs CTA >~1e-26, arXiv:2007.16129), solar capture (4 orders short of IceCube), neutron-star heating (2.5-3 orders below the geometric capture threshold), self-interactions (<= 3e-7 vs 0.47 cm^2/g, arXiv:1503.07675) and any sub-percent mass measurement at 97.8 GeV all fail. The regions differ almost solely in dark quartics invisible to every SM probe, plus 0.3-0.6% MDM offsets for R45/R90.",
        "status": "No Split!",
        "outcomes": [
          {"label": "all regions", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R18", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R34", "R35", "R36", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R61", "R62", "R63", "R64", "R65", "R66", "R67", "R68", "R69", "R70", "R71", "R72", "R73", "R74", "R75", "R76", "R77", "R78", "R79", "R80", "R81", "R82", "R83", "R84", "R85", "R86", "R87", "R88", "R89", "R90"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9+R10+R11+R12+R13+R14+R15+R16+R17+R18+R19+R20+R21+R22+R23+R24+R25+R26+R27+R28+R29+R30+R31+R32+R33+R34+R35+R36+R37+R38+R39+R40+R41+R42+R43+R44+R45+R46+R47+R48+R49+R50+R51+R52+R53+R54+R55+R56+R57+R58+R59+R60+R61+R62+R63+R64+R65+R66+R67+R68+R69+R70+R71+R72+R73+R74+R75+R76+R77+R78+R79+R80+R81+R82+R83+R84+R85+R86+R87+R88+R89+R90",
          "name": "Sub-percent-resolution space gamma-line spectrometer, Galactic-halo stare",
          "observable": "E(gamma line) >= 97.7 GeV ?",
          "what_this_is": "A space-borne gamma-ray telescope with a deep crystal calorimeter, staring at the inner Galaxy for a sharp spectral spike from dark matter annihilating directly into photon pairs. The spike's energy equals the dark matter particle's mass, so the measurement is effectively a sub-percent dark-matter mass scale. Two regions in this leaf (R45, R90) sit about half a GeV lighter than the other 89, and no other observable is sensitive to that offset.",
          "reasoning": "Predicted line energies: R45 97.25-97.55 GeV and R90 97.53-97.56 GeV (no branch); all other regions 97.75-97.90 GeV (yes branch). R0 (97.43-97.89) and R33 (97.55-97.86) straddle the cut and are assigned to the yes branch by bulk of their range (flagged marginal). A 0.1-0.2% energy resolution resolves the ~0.4 GeV gap at ~2-3 sigma per line photon population; everything else about the leaf is line-energy degenerate.",
          "feasibility": "Closest instruments: DAMPE/HERD calorimeters (dE/E ~ 1-1.5% at 100 GeV). Needs ~5-10x better resolution and ~1e3-1e4 more line-flux sensitivity: with alpha1 = 0.001 the loop-suppressed line rate is <sigma v>_gg ~ 1e-33-1e-32 cm^3/s vs CTA's ~1e-28 reach. Dominant systematics: energy-scale calibration and diffuse-emission modeling; at this alpha1 the flux deficit is the limiting factor.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R18", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R34", "R35", "R36", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R46", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R61", "R62", "R63", "R64", "R65", "R66", "R67", "R68", "R69", "R70", "R71", "R72", "R73", "R74", "R75", "R76", "R77", "R78", "R79", "R80", "R81", "R82", "R83", "R84", "R85", "R86", "R87", "R88", "R89"]},
            {"label": "no", "regions": ["R45", "R90"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9+R10+R11+R12+R13+R14+R15+R16+R17+R18+R19+R20+R21+R22+R23+R24+R25+R26+R27+R28+R29+R30+R31+R32+R33+R34+R35+R36+R37+R38+R39+R40+R41+R42+R43+R44+R45+R46+R47+R48+R49+R50+R51+R52+R53+R54+R55+R56+R57+R58+R59+R60+R61+R62+R63+R64+R65+R66+R67+R68+R69+R70+R71+R72+R73+R74+R75+R76+R77+R78+R79+R80+R81+R82+R83+R84+R85+R86+R87+R88+R89+R90",
          "name": "Ultra-deep dark-matter self-scattering survey, cluster-merger lensing ensemble",
          "observable": "sigma_self/m >= 5e-10 cm^2/g ?",
          "what_this_is": "Gravitational lensing maps of many colliding galaxy clusters, measuring whether the dark matter lags behind the collisionless stars during the collision -- the telltale sign that dark matter particles scatter off each other. This is the only observable that couples to the dark-sector quartic self-interactions, which are the couplings that actually distinguish the 89 same-mass regions in this leaf; every Standard Model channel is blind to them.",
          "reasoning": "At m = 97.9 GeV, sigma/m = 3.5e-10 x lambda_eff^2 cm^2/g with lambda_eff = alpha6+alpha11+alpha16 (lighter si-like state, standard sign convention). LOW tier (no branch, lambda <~ 1, sigma/m <~ 4e-10 and mostly <~ 1e-10): R13, R21, R22, R24, R26, R27, R30, R35, R36, R38, R46, R48, R51, R58, R67, R70, R71, R74, R84, R85, R86 (R21, R22, R74 straddle the cut; assigned by log-midpoint, flagged). HIGH tier (yes branch): remaining 70 regions with lambda ~ 2-30, sigma/m ~ 1.4e-9 to 3e-7 cm^2/g; R15 and R20 are boundary-marginal (log-mid lambda ~ 1.6-1.8). Convention caveat as in the other leaf: the conjugate mass ordering swaps the discriminating sum to alpha2+alpha7+alpha12 and reshuffles the tiers.",
          "feasibility": "Closest measurement: 72-merger lensing ensemble, sigma/m < 0.47 cm^2/g at 95% CL (Harvey et al.). Required sensitivity 5e-10 cm^2/g is ~1e9 beyond that -- no conceivable lensing or halo-structure program closes this gap; dominant systematic is baryonic star/DM offset contamination. Recorded as the honest statement that the quartic-only degeneracy among these regions is physically unobservable.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R14", "R15", "R16", "R17", "R18", "R19", "R20", "R23", "R25", "R28", "R29", "R31", "R32", "R33", "R34", "R37", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R47", "R49", "R50", "R52", "R53", "R54", "R55", "R56", "R57", "R59", "R60", "R61", "R62", "R63", "R64", "R65", "R66", "R68", "R69", "R72", "R73", "R75", "R76", "R77", "R78", "R79", "R80", "R81", "R82", "R83", "R87", "R88", "R89", "R90"]},
            {"label": "no", "regions": ["R13", "R21", "R22", "R24", "R26", "R27", "R30", "R35", "R36", "R38", "R46", "R48", "R51", "R58", "R67", "R70", "R71", "R74", "R84", "R85", "R86"]}
          ]
        }
      ]
    }
  ]
}
```
