<!-- g00_leaf-nny.md -->

# Leaf `root_no_no_yes` — 275 units, 12 331 points

## What the leaf actually is, physically

Every unit here is the same field content: a complex scalar `S` (dark charge −1) plus a dark `U(1)′` whose gauge boson `Z′` kinetically mixes with hypercharge (ε), sitting at `M_DM = 317–710 GeV` with `M_Z′ = 1–461 GeV`. The path says: **no XLZD nuclear recoil, no CTA (WW) signal, but a solar-neutrino excess at IceCube-Gen2**. All three catalog handles that could break this leaf probe essentially the *same* product `ε² g′² / M_Z′⁴` (Z′-portal scattering/capture) or the *same* `α₁` (Higgs portal). That is exactly why the leaf is degenerate: the catalog measures one degenerate combination, never ε and `M_Z′` separately.

One structural fact worth recording, because it constrains every prediction below. The scan's `gU1p` and `MDM` are not independent — across essentially all 275 units they track

  g′ ≈ 0.0178 √(M_DM/GeV)  (R80: 0.314 @ 317 GeV; R109: 0.4565 @ 660 GeV; R184: 0.469 @ 690 GeV)

which is precisely the secluded-annihilation relic condition: α′ = g′²/4π = 2.5×10⁻⁵ (M_DM/GeV), so ⟨σv⟩(SS†→Z′Z′) = πα′²/M² = 1.98×10⁻⁹ GeV⁻² = **2.3×10⁻²⁶ cm³/s**, the thermal value, independent of M_DM. So I can quote an absolute annihilation rate for every unit without re-running the scan. The exceptions — units sitting well *below* the locus (R3, R12, R18, R20, R21, R52, R89, R97, R119, R128, R131, R143, R144, R251–R256, all with g′ ≈ 0.07–0.28) — are, without exception, the units with `M_Z′ ≈ 1 GeV` and O(10) dark quartics, i.e. a different relic mechanism. That correlation is what makes the mediator mass the right thing to go after.

Two things I checked and **discarded**, because they do not work here and I would rather say so than dress them up:

- **DM self-interaction (cluster/dwarf halo shapes).** Tempting since it depends on (g′, M_Z′, M_DM) and *not* on ε, i.e. orthogonal to the whole catalog. But the numbers kill it: at the most favourable point (M_Z′ = 1 GeV, g′ = 0.45, M_DM = 500 GeV) the classical-regime transfer cross-section is σ_T ≈ (π/m_φ²)ln²β ≈ 2.4×10² GeV⁻² at dwarf velocities → **σ/m ≈ 1×10⁻⁴ cm²/g**, four orders below the ~1 cm²/g where halo shapes bite; at M_Z′ = 300 GeV it is another 10⁹ smaller. No experiment separates 10⁻⁴ from 10⁻¹³ cm²/g.
- **Long-lived-mediator solar γ-rays (Fermi/HAWC solar disk).** The ε ≥ 10⁻⁶ floor of the scan caps the Z′ lab decay length at cτγ ≈ 500 × 8 cm ≈ 40 m for M_Z′ = 1 GeV, ε = 10⁻⁶ — nine orders below R_⊙. Not one unit in this leaf has a mediator that escapes the Sun, so the entire "dark mediator solar signature" literature is inapplicable.

## Level 1 — Belle II / BaBar radiative dark-photon search

The one thing the catalog never measures is **ε at fixed M_Z′**, by *producing* the mediator rather than exchanging it. At a B factory, `e⁺e⁻ → γ Z′` with `Z′ → ℓ⁺ℓ⁻` has σ ≈ 1.3×10⁵ fb · ε² · BR(ℓℓ) for M_Z′ < √s = 10.58 GeV, and **exactly zero** above it. Normalisation anchored on BaBar's published reach (ε ≳ 10⁻³ at 514 fb⁻¹ ⇒ σ ≈ 0.13 fb); Belle II at 50 ab⁻¹ reaches σ ≈ 5×10⁻³ fb, i.e. ε ≈ 2×10⁻⁴. This is a genuinely different observable from anything on the path — it is a production cross-section in fb, not a scattering rate, and it is blind to g′ and α₁ entirely.

**Cut: σ(e⁺e⁻ → γ Z′, Z′→ℓℓ) ≥ 5×10⁻³ fb at √s = 10.58 GeV.**

Assignment is by the log-midpoint (geometric mean) of each unit's `MZp` and `epsilon` box, which is the median in the scan's own sampling measure.

**Predicted values, "seen" side (34 units).** ε̄ runs from 2.4×10⁻⁴ (R143, M_Z′ ≈ 1.42 GeV) to 0.10 (R97 @ 1.18 GeV; R172 @ 1.00 GeV; R173 @ 1.0–1.7 GeV; R219 @ 4.4–10.2 GeV), giving σ from **7.5×10⁻³ fb up to 1.3×10³ fb**. Worth stating plainly: the upper end of this group (R52, R61, R74, R97, R167, R172, R173, R182, R189, R198, R202, R219, R238, R252–R254 — all ε̄ ≳ 10⁻²) is *already* excluded by the existing BaBar dataset by 1–5 orders of magnitude. This split is therefore available today, not only at 50 ab⁻¹. Representative mid-cases: R144 (M_Z′ 1.0–1.8 GeV, ε̄ = 1.4×10⁻³) → σ ≈ 0.13 fb, ~2×10³ events at Belle II; R251 (1.26–1.59 GeV, ε̄ = 7.7×10⁻⁴) → σ ≈ 0.04 fb; R203 (6.8–8.7 GeV, ε̄ = 2.3×10⁻³) → σ ≈ 0.35 fb.

**Predicted values, "not seen" side (241 units).** Two distinct reasons, both giving a null:
- *Kinematically out of reach*: M_Z′ > 10.58 GeV, σ = 0 identically. This is the bulk — e.g. R8 (95–330 GeV), R54 (106–116), R66/R67/R68/R213 (327 GeV), R93 (130–379), R134/R228 (299–326), R184 (122–216), R220 (191–231), and the three largest blobs R0/R1/R2 (M̄_Z′ = 21.5, 22.1, 13.5 GeV).
- *Too weakly mixed*: M_Z′ ≈ 1 GeV but ε̄ ≈ 10⁻⁶–10⁻⁴ → σ = 1.3×10⁻⁷ fb (R19, R119, R128, ε ≈ 10⁻⁶) to 1.3×10⁻³ fb (R212, ε̄ = 7.9×10⁻⁵) — between 4 and 10 orders below Belle II's 50 ab⁻¹ floor.

**Honest caveats.** (i) The four largest units straddle the cut: R0 (4338 pts) spans M_Z′ = 1–461 GeV and ε = 10⁻⁶–0.1, so ≈ 19 % of its points *would* give a Belle II signal. The split therefore fractures R0/R1/R2/R4 rather than cleanly relocating them; I assign them by log-median and say so. (ii) Near-boundary units within a factor ~2 of the cut, which could migrate under a more careful treatment: R130 (ε̄ = 1.6×10⁻⁴ → 3.3×10⁻³ fb), R164 (1.86×10⁻⁴), R146 (1.5×10⁻⁴), and R60/R81/R205/R262 (M̄_Z′ = 9.2–9.8 GeV, still inside the 10.58 GeV window). (iii) On the Lagrangian question: the split peels exactly one Z2-only unit (R74) away from the other 26 Z2-only units, so it does *not* separate `CsSg_U1p[+]_DM.Z2` from `CsSg_U1p[+]_DM.Z2+3+4+5` as classes. Nothing in the literature does, because the two potentials differ only by odd-in-`s_i` quartics whose observable imprint is a dark-sector mass splitting that no current measurement reaches.

## Level 2 — novel: antiproton threshold at the mediator mass

The 241 "not seen" units stay degenerate. The one absolutely sharp, ε-independent discriminator left inside them is a **kinematic threshold in the mediator's own decay**: antiprotons require m_Z′ ≥ 2m_p = 1.876 GeV. Below it the Z′ can only go to e⁺e⁻, μ⁺μ⁻, π⁺π⁻, π⁺π⁻π⁰ — DM annihilation produces **exactly zero antiprotons**, at any ⟨σv⟩, at any ε. Above ~4 GeV, BR(had) ≈ 0.5 and the p̄ multiplicity is ~0.06–0.2 per Z′.

With ⟨σv⟩ = 2.3×10⁻²⁶ cm³/s (fixed above by the g′–M_DM locus), M_DM = 300–700 GeV and ρ_⊙ = 0.4 GeV/cm³, the heavy-mediator units source ~0.1–0.4 p̄ per annihilation with a soft cascade spectrum, giving a **1–5 % excess over the secondary p̄ flux at T = 20–100 GeV**, i.e. Δ(p̄/p) ≈ 2×10⁻⁶–8×10⁻⁶ against a measured p̄/p ≈ 1.4×10⁻⁴. The 22 sub-threshold units (R3, R19–R21, R41, R69, R75, R89, R108, R115, R119, R128–R131, R136, R156, R194, R195, R211, R212, R222 — all M̄_Z′ = 1.0–1.8 GeV) predict Δ(p̄/p) = 0 exactly. Straddlers: R55 (M̄ = 1.97 GeV) and R258 (2.18 GeV) sit just above threshold with a p̄ yield suppressed by phase space to ≲10⁻³ per Z′; I place them on the "excess" side but they are effectively null.

This is a different messenger (charged CR) and a different instrument from anything in the catalog, and it keys on M_Z′ *without* touching ε — which is precisely what the Level-1 split leaves unmeasured for the ε ≲ 10⁻⁴ units.

---

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_yes",
      "lit_review": {
        "name": "Belle II/BaBar radiative dark-photon search",
        "observable": "sigma(e+e- -> gamma Z', Z'->ll) >= 5e-3 fb at 10.58 GeV ?",
        "refs": ["arXiv:1406.2980", "arXiv:1808.10567"],
        "reasoning": "Every catalog probe on the path (XLZD recoil, IceCube-Gen2 solar capture, CTA) measures the same degenerate combination eps^2 g'^2 / M_Z'^4 or alpha1 alone, so it cannot separate a light weakly-mixed mediator from a heavy strongly-mixed one. B-factory radiative production measures eps at fixed M_Z' directly: sigma = 1.3e5 fb * eps^2 * BR(ll) for M_Z' < 10.58 GeV and identically zero above it (normalisation anchored on BaBar's published eps ~ 1e-3 reach at 514 fb^-1, sigma ~ 0.13 fb; Belle II 50 ab^-1 floor is 5e-3 fb, eps ~ 2e-4). Assignment by log-midpoint of each unit's (MZp, epsilon) box. SEEN side (34 units): eps-bar from 2.4e-4 (R143, M_Z' 1.42 GeV, sigma 7.5e-3 fb) to 0.10 (R97 at 1.18 GeV, R172 at 1.00 GeV, R173, R219), sigma up to 1.3e3 fb; the whole upper half of this group (R52, R61, R74, R97, R167, R172, R173, R182, R189, R198, R202, R219, R238, R252-R254, all eps-bar >~ 1e-2 at M_Z' < 11 GeV) is already excluded by existing BaBar data by 1-5 orders, so the split is available today. Mid-cases: R144 (eps-bar 1.4e-3) sigma 0.13 fb ~2e3 events; R251 (7.7e-4) 0.04 fb; R203 (2.3e-3) 0.35 fb. NOT-SEEN side (241 units) fails for two distinct reasons: kinematics (M_Z' > 10.58 GeV, sigma = 0 exactly: R8 95-330 GeV, R54 106-116, R66/R67/R68/R213 327, R93 130-379, R134/R228 299-326, R184 122-216, R220 191-231, and the blobs R0/R1/R2 with log-median M_Z' = 21.5/22.1/13.5 GeV), or mixing (M_Z' ~ 1 GeV but eps-bar 1e-6 to 1e-4: R19/R119/R128 give sigma 1.3e-7 fb, R212 gives 1.3e-3 fb, i.e. 4-10 orders below the 50 ab^-1 floor). CAVEATS, stated honestly: R0 (4338 pts) spans M_Z' 1-461 GeV and eps 1e-6 to 0.1, so ~19% of its points would in fact give a Belle II signal - the cut fractures R0/R1/R2/R4 rather than relocating them cleanly. Units within a factor ~2 of the boundary that could migrate: R130 (eps-bar 1.6e-4, 3.3e-3 fb), R164 (1.86e-4), R146 (1.5e-4), and R60/R81/R205/R262 (log-median M_Z' 9.2-9.8 GeV, still inside the kinematic window). On Lagrangians: the split peels exactly one Z2-only unit (R74) from the other 26 Z2-only units, so it does not separate CsSg_U1p.Z2 from CsSg_U1p.Z2+3+4+5 as classes; those two potentials differ only by odd-in-s_i quartics whose only imprint is a dark-sector mass splitting no current measurement reaches. Discarded alternatives with numbers: DM self-interaction fails because even the most favourable unit (M_Z' 1 GeV, g' 0.45, M_DM 500 GeV) gives sigma/m ~ 1e-4 cm^2/g at dwarf velocities, 4 orders below halo-shape sensitivity; long-lived-mediator solar gamma-rays fail because the scan's eps >= 1e-6 floor caps the boosted Z' decay length at ~40 m, nine orders below R_sun, so no unit has a mediator escaping the Sun.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R6", "R7", "R9", "R12", "R18", "R52", "R61", "R63", "R72", "R74", "R96", "R97", "R111", "R121", "R143", "R144", "R167", "R172", "R173", "R177", "R182", "R189", "R198", "R199", "R202", "R203", "R219", "R238", "R251", "R252", "R253", "R254", "R255", "R256"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R8", "R10", "R11", "R13", "R14", "R15", "R16", "R17", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R34", "R35", "R36", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50", "R51", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R62", "R64", "R65", "R66", "R67", "R68", "R69", "R70", "R71", "R73", "R75", "R76", "R77", "R78", "R79", "R80", "R81", "R82", "R83", "R84", "R85", "R86", "R87", "R88", "R89", "R90", "R91", "R92", "R93", "R94", "R95", "R98", "R99", "R100", "R101", "R102", "R103", "R104", "R105", "R106", "R107", "R108", "R109", "R110", "R112", "R113", "R114", "R115", "R116", "R117", "R118", "R119", "R120", "R122", "R123", "R124", "R125", "R126", "R127", "R128", "R129", "R130", "R131", "R132", "R133", "R134", "R135", "R136", "R137", "R138", "R139", "R140", "R141", "R142", "R145", "R146", "R147", "R148", "R149", "R150", "R151", "R152", "R153", "R154", "R155", "R156", "R157", "R158", "R159", "R160", "R161", "R162", "R163", "R164", "R165", "R166", "R168", "R169", "R170", "R171", "R174", "R175", "R176", "R178", "R179", "R180", "R181", "R183", "R184", "R185", "R186", "R187", "R188", "R190", "R191", "R192", "R193", "R194", "R195", "R196", "R197", "R200", "R201", "R204", "R205", "R206", "R207", "R208", "R209", "R210", "R211", "R212", "R213", "R214", "R215", "R216", "R217", "R218", "R220", "R221", "R222", "R223", "R224", "R225", "R226", "R227", "R228", "R229", "R230", "R231", "R232", "R233", "R234", "R235", "R236", "R237", "R239", "R240", "R241", "R242", "R243", "R244", "R245", "R246", "R247", "R248", "R249", "R250", "R257", "R258", "R259", "R260", "R261", "R262", "R263", "R264", "R265", "R266", "R267", "R268", "R269", "R270", "R271", "R272", "R273", "R274"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R10+R100+R101+R102+R103+R104+R105+R106+R107+R108+R109+R11+R110+R112+R113+R114+R115+R116+R117+R118+R119+R120+R122+R123+R124+R125+R126+R127+R128+R129+R13+R130+R131+R132+R133+R134+R135+R136+R137+R138+R139+R14+R140+R141+R142+R145+R146+R147+R148+R149+R15+R150+R151+R152+R153+R154+R155+R156+R157+R158+R159+R16+R160+R161+R162+R163+R164+R165+R166+R168+R169+R17+R170+R171+R174+R175+R176+R178+R179+R180+R181+R183+R184+R185+R186+R187+R188+R19+R190+R191+R192+R193+R194+R195+R196+R197+R2+R20+R200+R201+R204+R205+R206+R207+R208+R209+R21+R210+R211+R212+R213+R214+R215+R216+R217+R218+R22+R220+R221+R222+R223+R224+R225+R226+R227+R228+R229+R23+R230+R231+R232+R233+R234+R235+R236+R237+R239+R24+R240+R241+R242+R243+R244+R245+R246+R247+R248+R249+R25+R250+R257+R258+R259+R26+R260+R261+R262+R263+R264+R265+R266+R267+R268+R269+R27+R270+R271+R272+R273+R274+R28+R29+R3+R30+R31+R32+R33+R34+R35+R36+R37+R38+R39+R4+R40+R41+R42+R43+R44+R45+R46+R47+R48+R49+R5+R50+R51+R53+R54+R55+R56+R57+R58+R59+R60+R62+R64+R65+R66+R67+R68+R69+R70+R71+R73+R75+R76+R77+R78+R79+R8+R80+R81+R82+R83+R84+R85+R86+R87+R88+R89+R90+R91+R92+R93+R94+R95+R98+R99",
          "name": "AMS-100-class L2 antiproton spectrometer",
          "observable": "pbar/p excess at 50 GeV >= 3e-6 ?",
          "reasoning": "Antiproton production in the mediator decay has an exact kinematic threshold at m_Z' = 2 m_p = 1.876 GeV. Below it the Z' can only reach e+e-, mu+mu-, pi+pi-, pi+pi-pi0, so DM annihilation yields ZERO antiprotons at any eps, any g', any <sigma v> - a null that no coupling can fake. Above ~4 GeV, BR(hadrons) ~ 0.5 and the pbar multiplicity is 0.06-0.2 per Z'. The annihilation rate is fixed independently of the scan: across this leaf g' = 0.0178 sqrt(M_DM/GeV) (R80 0.314 at 317 GeV, R109 0.4565 at 660 GeV, R184 0.469 at 690 GeV), which is exactly alpha' = 2.5e-5 (M_DM/GeV) and hence <sigma v>(SS -> Z'Z') = pi alpha'^2 / M^2 = 2.3e-26 cm^3/s for every unit. With rho_local = 0.4 GeV/cm^3 and M_DM = 300-700 GeV, the heavy-mediator units source 0.1-0.4 pbar per annihilation in a soft cascade spectrum, giving a 1-5% excess over the secondary pbar flux at T = 20-100 GeV, i.e. Delta(pbar/p) = 2e-6 to 8e-6 against a measured pbar/p = 1.4e-4. The 22 sub-threshold units (R3, R19-R21, R41, R69, R75, R89, R108, R115, R119, R128-R131, R136, R156, R194, R195, R211, R212, R222, all with log-median M_Z' = 1.0-1.8 GeV) predict Delta(pbar/p) = 0 exactly. These are also precisely the units that sit off the relic locus at g' = 0.07-0.28 with O(10) dark quartics, so the null doubles as a probe of the alternative freeze-out mechanism. Marginal: R55 (1.97 GeV) and R258 (2.18 GeV) are barely above threshold with phase-space-suppressed yield <~1e-3 pbar per Z'; they are placed on the excess side but are effectively null. This observable is orthogonal to the Level-1 split because it depends only on M_Z' and the (fixed) annihilation rate, never on eps.",
          "feasibility": "Closest instrument: AMS-02, which already measures pbar/p to 4-7% statistical precision at 50 GeV; the limiting factor is not statistics but ~20-30% theory systematics from secondary pbar production cross-sections (p-p, p-He) and CR propagation (halo height, diffusion index), which is why the existing ~10 GeV pbar excess remains unresolved. The proposal is an AMS-100-class L2 magnetic spectrometer (~1000x AMS-02 acceptance-time, proposed but unfunded), which drives statistics below 1% and, combined with dedicated pbar production measurements at NA61/SHINE and LHCb fixed-target (SMOG) plus Be/B-constrained propagation, would bring the systematic floor to 1-3%. Required improvement over today is a factor ~5-10 on the systematic, not the statistical, side. Dominant systematic: the secondary pbar source term, which is degenerate with a soft DM cascade at exactly the 20-100 GeV energies where the signal lives.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "no pbar", "regions": ["R3", "R19", "R20", "R21", "R41", "R69", "R75", "R89", "R108", "R115", "R119", "R128", "R129", "R130", "R131", "R136", "R156", "R194", "R195", "R211", "R212", "R222"]},
            {"label": "pbar excess", "regions": ["R0", "R1", "R2", "R4", "R5", "R8", "R10", "R11", "R13", "R14", "R15", "R16", "R17", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R34", "R35", "R36", "R37", "R38", "R39", "R40", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50", "R51", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R62", "R64", "R65", "R66", "R67", "R68", "R70", "R71", "R73", "R76", "R77", "R78", "R79", "R80", "R81", "R82", "R83", "R84", "R85", "R86", "R87", "R88", "R90", "R91", "R92", "R93", "R94", "R95", "R98", "R99", "R100", "R101", "R102", "R103", "R104", "R105", "R106", "R107", "R109", "R110", "R112", "R113", "R114", "R116", "R117", "R118", "R120", "R122", "R123", "R124", "R125", "R126", "R127", "R132", "R133", "R134", "R135", "R137", "R138", "R139", "R140", "R141", "R142", "R145", "R146", "R147", "R148", "R149", "R150", "R151", "R152", "R153", "R154", "R155", "R157", "R158", "R159", "R160", "R161", "R162", "R163", "R164", "R165", "R166", "R168", "R169", "R170", "R171", "R174", "R175", "R176", "R178", "R179", "R180", "R181", "R183", "R184", "R185", "R186", "R187", "R188", "R190", "R191", "R192", "R193", "R196", "R197", "R200", "R201", "R204", "R205", "R206", "R207", "R208", "R209", "R210", "R213", "R214", "R215", "R216", "R217", "R218", "R220", "R221", "R223", "R224", "R225", "R226", "R227", "R228", "R229", "R230", "R231", "R232", "R233", "R234", "R235", "R236", "R237", "R239", "R240", "R241", "R242", "R243", "R244", "R245", "R246", "R247", "R248", "R249", "R250", "R257", "R258", "R259", "R260", "R261", "R262", "R263", "R264", "R265", "R266", "R267", "R268", "R269", "R270", "R271", "R272", "R273", "R274"]}
          ]
        }
      ]
    }
  ]
}
```

---

<!-- g01_pair-ynnn.md -->

## Leaf `root_yes_no_no_no_no` — 8837 pts, 211 (Lagrangian, region) units

### What the leaf actually is, physically

Every unit here is a ~95–315 GeV **scalar** whose only *guaranteed* SM coupling is the Higgs portal `alpha1` ≈ 1e-3 – 7e-3. That is not an accident of the scan: the path already fixes it. `sigma_SI` sits at 1–10× the XLZD projection (≈3e-49 – 3e-48 cm² at 100 GeV), which for the portal formula

σ_SI ≈ λ_hs² f_N² m_N⁴ /(4π m_h⁴ M_DM²)

is exactly λ_hs ~ 1e-3 – 5e-3 at M_DM ~ 10² GeV. And `BR(h→inv)` below the 4ν floor is automatic because 2·M_DM ≥ 190 GeV ≫ m_h, so h→SS is kinematically shut. So the Higgs sector is *identically* mute across all 211 units, by construction. Any discriminator must come from somewhere else.

Three candidate "somewhere else" handles exist, and two of them die on arithmetic:

**(a) Dark self-interaction — dead.** The CsSg units are distinguished from each other essentially *only* by their 16 dark quartics (alpha2…alpha16, spanning 1e-3 to 10). A contact quartic λ gives σ_self = λ²/(64π M²); at λ = 10, M = 97.9 GeV this is 2.0e-32 cm², i.e. **σ/m ≈ 1.2e-10 cm²/g**, ten orders of magnitude below the ~1 cm²/g Bullet-Cluster / halo-shape bound. Even the light-Z′ Yukawa cases are hopeless: R28 (g' = 0.174 → α_D = 2.4e-3, m_Z' = 1.8–3.1 GeV, M = 110 GeV) gives Born σ_T/m ≈ 1.5e-6 cm²/g at dwarf velocities. **This is why I do not propose an SIDM split, and it is also why ~110 of the CsSg regions (R2, R6, R8–R17, R23–R27, R31–R33, R45, R46, R55–R64, R95–R110, R165–R209) are, in my judgement, irreducibly degenerate**: their *only* differences live in a sector with no portal to anything measurable.

**(b) CMB energy injection — dead.** The largest annihilation rates here are σv ~ 2e-26 cm³/s at M = 100–300 GeV; Planck's p_ann translates to σv ≲ 1e-24 cm³/s at those masses (f_eff ~ 0.2–0.3). A factor ≥50 short, uniformly. No split.

**(c) The dark U(1)′ — alive, and it is the whole story.** `MZp` runs 1 GeV → 10 TeV and `epsilon` runs 1e-6 → 0.1 across the U(1)′ units, while CsSg and RsSg have no Z′ at all. That is a 10⁻¹⁰-to-10⁻² dynamic range in the *visible* observable ε², and it is genuinely outside our catalog: the catalog's Z′ entry is a **σ×BR recast of the HL-LHC high-mass pp→Z′→ℓℓ resonance search**, which has no reach below ~200 GeV (trigger + Drell–Yan continuum). The sub-200-GeV kinetic-mixing program is a different set of experiments on different machines.

---

### Level 1 — Low-mass dark-photon / dark-Z program (BaBar, LHCb, LEP)

**Cut: is there a visible dilepton resonance with ε ≥ 1e-3 anywhere in m_Z′ ∈ [0.2, 200] GeV?**

The combined published reach is: BaBar radiative return e⁺e⁻ → γ(A′→ℓℓ) excluding ε ≳ 1e-3 over 0.02–10.2 GeV (arXiv:1406.2980); LHCb prompt inclusive dimuon covering ~0.2–70 GeV with comparable-to-better ε reach in the 10–70 GeV window (arXiv:1710.02867); and LEP-I Z-lineshape plus LEP-II e⁺e⁻→ff, which bound ε ≲ 0.02–0.03 for m_Z′ from ~10 GeV up to ~200 GeV (compiled in arXiv:1311.0029). Belle II at 50 ab⁻¹ pushes the m < 10 GeV corner to ε ~ 3e-4, which is what makes the marginal cases decisive.

Quantitatively, per region (rate scales as ε²):

- **Grossly excluded already, by 10³–10⁴ in rate:** R40 and R83 (m_Z′ = 1.00 GeV, ε = 0.10 — that is ε²/ε²_BaBar ≈ 10⁴); R34 (m_Z′ = 1.0 GeV, ε = 0.064–0.10); R120 (m_Z′ = 12.85 GeV, ε = 0.10, squarely in the LHCb dimuon window and far above the LEP-II ε ≲ 0.02 line); R140 (m_Z′ = 17.6–36.6 GeV, ε = 0.10); R148 (m_Z′ = 3.4–7.9 GeV, ε = 0.083–0.10); R128 (m_Z′ = 6.0–9.8 GeV, ε = 0.068–0.10); R18 (m_Z′ = 18–93 GeV, ε = 0.051–0.10); R71 (m_Z′ = 14.9–21.7 GeV, ε = 0.033–0.076); R126 (m_Z′ = 5.6–23.3 GeV, ε = 0.025–0.055); R131 (m_Z′ = 15.7–50 GeV, ε = 0.024–0.068); R37 (m_Z′ = 11–53 GeV, ε = 0.027–0.047); R117 (m_Z′ = 60–122 GeV, ε = 0.012–0.030 — LEP-II territory).
- **At or just above current sensitivity, decisive with Belle II 50/ab and LHCb Run 3:** R19 (ε = 4.6e-3–9.0e-2), R65 (ε = 5.7e-3–2.8e-2), R72 (ε = 1.5e-3–8.2e-3, m_Z′ = 8.2–18.8 GeV), R77 (ε = 3.8e-3–1.4e-2 at m_Z′ = 1.0 GeV → 15–190× the BaBar rate limit), R111 (ε = 1.6e-3–6.1e-3), R115 (ε = 1.5e-3–2.9e-3), R125 (ε = 7.4e-3–1.3e-2), R127 (ε = 3.1e-3–4.0e-3), R132 (ε = 1.5e-3–3.8e-3), R136 (ε = 2.7e-3–4.1e-3 at 1 GeV). I flag these as *marginal today*: the low end of R115/R132/R72 sits within a factor ~2 in ε of the current BaBar/LHCb line, so a null result there is a Belle-II-era statement, not a 2024 one.
- **Not seen, and for two physically distinct reasons.** (i) Genuinely decoupled: all 110+ CsSg regions and RsSg R1 have *no Z′ at all* (ε ≡ 0), and U(1)′ regions like R4, R20, R48, R78, R79, R87, R129, R134, R138 have ε = 1e-6–5e-5, i.e. ε² ≤ 1e-9 — four to six orders below any current or proposed low-mass search. (ii) **Kinematically out of reach, not decoupled** — an honest caveat: R22, R39, R54, R91, R142, R159, R164 carry ε up to 0.1 but with m_Z′ = 375 GeV – 10 TeV, above the LEP-II ceiling. Those fall in "not seen" because the low-energy program cannot look there, and they are precisely the regions that the catalog's HL-LHC dilepton recast owns.

This splits **23 regions off from 188**, and it separates Lagrangians two ways: it isolates U(1)′ units from the pure-singlet CsSg/RsSg units, and it also splits the Z2-only Lagrangian's own regions (R34, R65, R111 → seen; R210 → not seen, ε = 5.6e-4–1.4e-3 straddling the line).

---

### Level 2a — attached to the 23 "dark photon seen" regions

Once a Z′ with ε ≥ 1e-3 and m_Z′ ≪ M_DM exists, the dominant DM annihilation is **SS* → Z′Z′ → 4ℓ** (each Z′ decays visibly through kinetic mixing; for ε ≥ 1e-3, m_Z′ ≥ 1 GeV the Z′ width gives cτ ≈ 3e-9 m — prompt, so this is a clean 4-lepton final state, not an LLP). The rate is set by the dark gauge coupling alone:

σv ≈ π α_D² / M_DM², α_D = g'²/4π

and it is *not* degenerate with the Higgs portal that produced the XLZD signal. Numbers (region midpoints):

- R18 (g′≈0.29, M≈270): **2.3e-26**; R19 (0.23, 180): 2.0e-26; R37 (0.22, 175): 1.8e-26; R65 (0.24, 200): 2.0e-26; R71 (0.21, 140): 2.2e-26; R72 (0.21, 143): 2.2e-26; R111 (0.28, 250): 2.1e-26; R115 (0.29, 277): 2.2e-26; R117 (0.29, 268): 2.3e-26; R120 (0.217, 153): 2.2e-26; R125 (0.23, 166): 2.2e-26; R126 (0.19, 120): 2.1e-26; R127 (0.18, 105): 2.1e-26; R128 (0.175, 107): 2.0e-26; R131 (0.25, 215): 2.0e-26; R132 (0.26, 224): 2.1e-26 cm³/s. (The clustering at ≈2e-26 is the relic-density attractor — these points get their abundance from Z′Z′.)
- R34 (g′≈0.089, M≈235): **2.6e-28**; R136 (0.072, 97.4): 6.6e-28; R77 (0.063, 97.7): 3.9e-28; R140 (0.026, 97.8): ~5e-29; R148 (0.009, 97.6): ~6e-30; R40 (0.009, 97.8): ~6e-30; R83 (0.003, 97.8): ~1e-30.

A **≥30× gap** with no region in between. A cut at 5e-27 cm³/s is safe.

Why this needs a new instrument: AMS-02's present limit on 100–300 GeV DM annihilating to charged leptons is σv ≲ 1–3e-25 cm³/s, and the 4-body (Z′Z′→4ℓ) spectrum is softer and broader than 2-body, costing another factor ~2–3. So we need ~40–100× improvement, plus a genuinely new *analysis* object: a template whose Z′ mass is **fixed by the Level-1 dilepton discovery**, turning a shape-free bump hunt into a one-parameter fit. AMS-100 (arXiv:1907.04168-class, ×1000 acceptance·time) delivers the statistics; the dominant systematic is not statistics but the **positron secondary-production background and the local propagation halo height**, which is why the fixed-m_Z′ template matters. Rating: **unlikely** — a dedicated next-generation instrument, but a proposed one.

### Level 2b — attached to the 188 "dark photon not seen" regions

Here the only surviving handle is the DM mass itself. The mass distribution in this group is strongly bimodal: ~176 regions pile up at **M_DM = 94.6–115 GeV** (RsSg R1 at 94.64–95.07; the entire CsSg block at 97.4–97.9; the light U(1)′ block at 97.5–97.9), while 12 regions sit at **127–315 GeV**: R3 (219–315), R7 (146–302), R35 (175–289), R66 (259–314), R67 (167–314), R73 (127.5), R112 (172–185), R114 (299–315), R116 (292–295), R118 (181.5), R130 (127.5), R210 (237–292).

Proposal: **megatonne-year WIMP mass spectroscopy** — fit M_DM from the nuclear-recoil energy spectrum in a combined heavy (Xe) + light (Ar/Ge) exposure, with the halo velocity distribution externally pinned by Gaia/DESI stellar kinematics rather than marginalized. Cut at M_DM = 120 GeV. Feasibility: XLZD at 200 t·yr, seeing a signal at 1–10× its own limit, yields O(10–10²) events → δM/M ≈ 40%, which cannot even place a region relative to 120 GeV. Reaching ±10% at 120 GeV needs ~10⁴ events, i.e. ~10⁴ t·yr — a factor ~10²  beyond XLZD and beyond anything proposed. The dominant systematic is the M_DM–v₀–v_esc degeneracy, which for M_DM ≫ m_Xe (≈122 GeV) becomes exact: **note honestly that above ~300 GeV the xenon spectrum saturates entirely**, so this cut works as a "≥120 GeV yes/no" and not as a spectroscopy of R3 vs R114. Rating: **speculative**.

What remains after all of this: the ~176-region residue, dominated by the CsSg dark-quartic clusters. I claim these are not separable by *any* experiment, for the reason in (a) above — their differences are confined to a sector whose largest observable consequence is σ/m ~ 1e-10 cm²/g.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_no_no_no",
      "lit_review": {
        "name": "Low-mass dark-photon program (BaBar, LHCb, LEP)",
        "observable": "dilepton resonance with eps >= 1e-3 at m_Z' <= 200 GeV ?",
        "refs": ["arXiv:1406.2980", "arXiv:1710.02867", "arXiv:1311.0029"],
        "reasoning": "All 211 units share an identical Higgs-portal signature (lambda_hs ~ 1e-3-7e-3 fixed by sigma_SI = 1-10x XLZD; h->inv shut because 2*M_DM >= 190 GeV). The only non-degenerate SM-facing coupling is the U(1)' kinetic mixing, spanning eps = 1e-6 to 0.1 and m_Z' = 1 GeV to 10 TeV, versus eps identically 0 for CsSg and RsSg. The catalog's Z'-dilepton entry is an HL-LHC high-mass pp->Z'->ll recast with no reach below ~200 GeV; BaBar radiative return (0.02-10.2 GeV, eps ~ 1e-3), LHCb prompt inclusive dimuon (0.2-70 GeV) and LEP-I/II Z-Z' mixing (10-200 GeV, eps <~ 0.02-0.03) cover exactly the window it cannot. Predicted rates: R40, R83 (m_Z'=1.00 GeV, eps=0.10) exceed the BaBar rate limit by ~1e4; R34 (1 GeV, eps 0.064-0.10), R148 (3.4-7.9 GeV, 0.083-0.10), R128 (6.0-9.8 GeV, 0.068-0.10), R120 (12.85 GeV, 0.10), R140 (17.6-36.6 GeV, 0.10), R18 (18-93 GeV, 0.051-0.10), R71 (14.9-21.7 GeV, 0.033-0.076), R126 (5.6-23.3 GeV, 0.025-0.055), R131 (15.7-50 GeV, 0.024-0.068), R37 (11-53 GeV, 0.027-0.047), R117 (60-122 GeV, 0.012-0.030) are all far above the published lines. Marginal, and only decisive with Belle II 50/ab and LHCb Run 3: R72 (eps 1.5e-3-8.2e-3), R115 (1.5e-3-2.9e-3), R132 (1.5e-3-3.8e-3), R127 (3.1e-3-4.0e-3), R136 (2.7e-3-4.1e-3), R111 (1.6e-3-6.1e-3), R77 (3.8e-3-1.4e-2), R125 (7.4e-3-1.3e-2), R19 (4.6e-3-9.0e-2), R65 (5.7e-3-2.8e-2) - the low ends sit within a factor ~2 in eps of current sensitivity. The 'not seen' side contains two physically different populations: genuinely decoupled units (all CsSg and RsSg with no Z' at all; U(1)' units with eps = 1e-6-5e-5 such as R4, R20, R48, R78, R79, R87, R129, R134, R138, whose eps^2 is 1e-9 or below), and units that are merely out of kinematic reach (R22, R39, R54, R91, R142, R159, R164 carry eps up to 0.1 but at m_Z' = 375 GeV - 10 TeV, above the LEP-II ceiling and inside the catalog's own HL-LHC recast). I deliberately did NOT propose a self-interaction split: the CsSg regions differ only in dark quartics, and lambda = 10 at M = 97.9 GeV gives sigma/m = 1.2e-10 cm^2/g, ten orders below the Bullet-Cluster bound; nor a CMB p_ann split, since the largest sigma v here (2e-26 cm^3/s) is ~50x below the Planck limit at 100-300 GeV.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R18", "R19", "R34", "R37", "R40", "R65", "R71", "R72", "R77", "R83", "R111", "R115", "R117", "R120", "R125", "R126", "R127", "R128", "R131", "R132", "R136", "R140", "R148"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R35", "R36", "R38", "R39", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R61", "R62", "R63", "R64", "R66", "R67", "R68", "R69", "R70", "R73", "R74", "R75", "R76", "R78", "R79", "R80", "R81", "R82", "R84", "R85", "R86", "R87", "R88", "R89", "R90", "R91", "R92", "R93", "R94", "R95", "R96", "R97", "R98", "R99", "R100", "R101", "R102", "R103", "R104", "R105", "R106", "R107", "R108", "R109", "R110", "R112", "R113", "R114", "R116", "R118", "R119", "R121", "R122", "R123", "R124", "R129", "R130", "R133", "R134", "R135", "R137", "R138", "R139", "R141", "R142", "R143", "R144", "R145", "R146", "R147", "R149", "R150", "R151", "R152", "R153", "R154", "R155", "R156", "R157", "R158", "R159", "R160", "R161", "R162", "R163", "R164", "R165", "R166", "R167", "R168", "R169", "R170", "R171", "R172", "R173", "R174", "R175", "R176", "R177", "R178", "R179", "R180", "R181", "R182", "R183", "R184", "R185", "R186", "R187", "R188", "R189", "R190", "R191", "R192", "R193", "R194", "R195", "R196", "R197", "R198", "R199", "R200", "R201", "R202", "R203", "R204", "R205", "R206", "R207", "R208", "R209", "R210"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R18+R19+R34+R37+R40+R65+R71+R72+R77+R83+R111+R115+R117+R120+R125+R126+R127+R128+R131+R132+R136+R140+R148",
          "name": "Dark-photon-templated cosmic-ray positron search",
          "observable": "sigma v (DM DM -> Z'Z' -> 4 leptons) >= 5e-27 cm^3/s ?",
          "reasoning": "Once a Z' with m_Z' << M_DM is established, SS* -> Z'Z' opens with sigma v = pi alpha_D^2 / M_DM^2, set by the dark gauge coupling alone and completely independent of the Higgs portal that produced the XLZD signal. Each Z' decays promptly to leptons via kinetic mixing (eps >= 1e-3, m_Z' >= 1 GeV gives c*tau ~ 3e-9 m), giving a hard 4-lepton spectrum. Predictions at region midpoints: R18 (g'=0.29, M=270 GeV) 2.3e-26; R19 2.0e-26; R37 1.8e-26; R65 2.0e-26; R71 2.2e-26; R72 2.2e-26; R111 2.1e-26; R115 2.2e-26; R117 2.3e-26; R120 2.2e-26; R125 2.2e-26; R126 2.1e-26; R127 2.1e-26; R128 2.0e-26; R131 2.0e-26; R132 2.1e-26 cm^3/s - the pile-up near 2e-26 is the relic-density attractor, these points freeze out through Z'Z'. Against this: R34 (g'=0.089, M=235 GeV) 2.6e-28; R136 6.6e-28; R77 3.9e-28; R140 5e-29; R148 6e-30; R40 6e-30; R83 1e-30. A >=30x gap with nothing in between, so a 5e-27 cm^3/s cut is robust.",
          "feasibility": "Closest instrument: AMS-02, whose current limit on 100-300 GeV DM annihilating to charged leptons is sigma v <~ 1-3e-25 cm^3/s; the 4-body Z'Z' spectrum is softer and broader than 2-body, costing a further factor 2-3. Required improvement ~40-100x in effective sensitivity, delivered by a proposed AMS-100-class spectrometer (~1000x acceptance-time). The genuinely new element is the analysis object: a 4-lepton injection template with m_Z' FIXED by the Level-1 dilepton discovery, converting a shape-free bump hunt into a one-parameter fit. Dominant systematic is not statistics but secondary positron production and the local propagation halo height - which is exactly what the fixed-m_Z' template suppresses.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R18", "R19", "R37", "R65", "R71", "R72", "R111", "R115", "R117", "R120", "R125", "R126", "R127", "R128", "R131", "R132"]},
            {"label": "not seen", "regions": ["R34", "R40", "R77", "R83", "R136", "R140", "R148"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R9+R10+R11+R12+R13+R14+R15+R16+R17+R20+R21+R22+R23+R24+R25+R26+R27+R28+R29+R30+R31+R32+R33+R35+R36+R38+R39+R41+R42+R43+R44+R45+R46+R47+R48+R49+R50+R51+R52+R53+R54+R55+R56+R57+R58+R59+R60+R61+R62+R63+R64+R66+R67+R68+R69+R70+R73+R74+R75+R76+R78+R79+R80+R81+R82+R84+R85+R86+R87+R88+R89+R90+R91+R92+R93+R94+R95+R96+R97+R98+R99+R100+R101+R102+R103+R104+R105+R106+R107+R108+R109+R110+R112+R113+R114+R116+R118+R119+R121+R122+R123+R124+R129+R130+R133+R134+R135+R137+R138+R139+R141+R142+R143+R144+R145+R146+R147+R149+R150+R151+R152+R153+R154+R155+R156+R157+R158+R159+R160+R161+R162+R163+R164+R165+R166+R167+R168+R169+R170+R171+R172+R173+R174+R175+R176+R177+R178+R179+R180+R181+R182+R183+R184+R185+R186+R187+R188+R189+R190+R191+R192+R193+R194+R195+R196+R197+R198+R199+R200+R201+R202+R203+R204+R205+R206+R207+R208+R209+R210",
          "name": "Megatonne-year WIMP mass spectroscopy",
          "observable": "M_DM from nuclear-recoil spectrum >= 120 GeV ?",
          "reasoning": "With the Z' invisible (eps <= 1e-3, or m_Z' above the LEP ceiling) and the Higgs portal identical across the group, the DM mass is the last observable that still varies. It is strongly bimodal here: ~176 regions sit at M_DM = 94.6-115 GeV (RsSg R1 at 94.64-95.07 GeV, the whole CsSg block at 97.4-97.9 GeV, the light U(1)' block at 97.5-97.9 GeV), while twelve sit at 127-315 GeV: R3 (219-315), R7 (146-302), R35 (175-289), R66 (259-314), R67 (167-314), R73 (127.5), R112 (172-185), R114 (299-315), R116 (292-295), R118 (181.5), R130 (127.5), R210 (237-292). A 120 GeV cut separates these cleanly. It does NOT resolve the residue: R1 at 94.9 GeV versus the CsSg cluster at 97.86 GeV is a 3% mass difference, and the ~110 CsSg regions differ only in dark quartics whose largest observable consequence is sigma/m ~ 1e-10 cm^2/g. I regard that residue as irreducibly degenerate.",
          "feasibility": "Closest instrument: XLZD at ~200 t.yr. In this leaf the signal is 1-10x its own limit, i.e. O(10-100) events, giving delta_M/M ~ 40% - not enough to place a region relative to 120 GeV. Reaching +-10% at 120 GeV needs ~1e4 events, i.e. ~1e4 t.yr of xenon plus a matched argon/germanium exposure to break the target degeneracy: a factor ~100 beyond XLZD and beyond any proposed detector. Dominant systematic is the M_DM - v_0 - v_esc degeneracy, which requires the halo to be pinned externally by Gaia/DESI stellar kinematics rather than marginalized; note also that above ~300 GeV (M_DM >> m_Xe = 122 GeV) the recoil spectrum saturates entirely, so this works as a yes/no threshold and not as spectroscopy of R3 versus R114.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "heavy", "regions": ["R3", "R7", "R35", "R66", "R67", "R73", "R112", "R114", "R116", "R118", "R130", "R210"]},
            {"label": "light", "regions": ["R0", "R1", "R2", "R4", "R5", "R6", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R36", "R38", "R39", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R61", "R62", "R63", "R64", "R68", "R69", "R70", "R74", "R75", "R76", "R78", "R79", "R80", "R81", "R82", "R84", "R85", "R86", "R87", "R88", "R89", "R90", "R91", "R92", "R93", "R94", "R95", "R96", "R97", "R98", "R99", "R100", "R101", "R102", "R103", "R104", "R105", "R106", "R107", "R108", "R109", "R110", "R113", "R119", "R121", "R122", "R123", "R124", "R129", "R133", "R134", "R135", "R137", "R138", "R139", "R141", "R142", "R143", "R144", "R145", "R146", "R147", "R149", "R150", "R151", "R152", "R153", "R154", "R155", "R156", "R157", "R158", "R159", "R160", "R161", "R162", "R163", "R164", "R165", "R166", "R167", "R168", "R169", "R170", "R171", "R172", "R173", "R174", "R175", "R176", "R177", "R178", "R179", "R180", "R181", "R182", "R183", "R184", "R185", "R186", "R187", "R188", "R189", "R190", "R191", "R192", "R193", "R194", "R195", "R196", "R197", "R198", "R199", "R200", "R201", "R202", "R203", "R204", "R205", "R206", "R207", "R208", "R209"]}
          ]
        }
      ]
    }
  ]
}
```

---

<!-- g01_pair-ynnnn.md -->

I'll verify the references I want to cite before writing up.
## Reasoning — leaf `root_yes_no_no_no_no_no` (8837 pts, 211 units)

### What the path already fixed, and what it left open

Every unit here has σ_SI in the 1–10× XLZD band, nothing at DarkSide, no ν signal at IceCube-Gen2, no WW-channel γ-ray signal at Fermi-15yr or CTA, and BR(h→inv) < 0.001. That combination pins the *elastic, isoscalar, Higgs-portal* part of every model to essentially the same value (all regions have α1 ≈ 1×10⁻³–7×10⁻³, i.e. λ_hs at the scan floor) and pins m_DM to a narrow band for most units. So no further direct-detection, invisible-Higgs, or WW-channel γ-ray observable can help — which is exactly why the catalog stalled.

### The structure the parameters actually reveal

Reading the U(1)′ regions quantitatively, a sharp physical dichotomy appears that none of the 18 catalog observables tests:

**(A) A "secluded" thermal branch.** A large set of `CsSg_U1p` regions sits on the locus g′⁴ ∝ m_DM² with M_Z′ ≪ M_DM:

| region | M_DM (GeV) | M_Z′ (GeV) | g′ |
|---|---|---|---|
| R0 (473 pts) | 102–211 | 1–31 | 0.108–0.205 |
| R3 | 219–315 | 21–49 | 0.262–0.312 |
| R7 | 146–302 | 17–60 | 0.211–0.306 |
| R114 | 299–315 | 34–37 | 0.304–0.312 |
| R117 | 246–291 | 60–122 | 0.283–0.301 |

For ΦΦ\*→Z′Z′ the s-wave rate is σv ≈ g′⁴/(16π m_DM²). Plugging in:
- R0 (g′=0.17, m=150): 8.35×10⁻⁴ / (16π·2.25×10⁴) = 7.4×10⁻¹⁰ GeV⁻² → **8.6×10⁻²⁷ cm³/s**
- R3 (g′=0.30, m=300): → **2.1×10⁻²⁶ cm³/s**
- R28/R119/R68 (g′≈0.16–0.17, m≈95–115): → **3–5×10⁻²⁷ cm³/s**

That is the thermal locus, and it explains why g′ tracks m_DM across these 33 regions. The relic is set entirely in the dark sector; the Higgs portal is a spectator (which is why α1 is at the floor and BR(h→inv) is below the 4ν floor). The Z′ then decays *promptly* — at ε ≥ 10⁻⁶ and m_Z′ ≥ 1 GeV, Γ ≈ αε²m_Z′ gives cτ ≲ 3 cm, so no long-lived/far-detector signature exists (I checked: the solar-escape "secluded Sun" signature of Schuster–Toro–Yavin needs cτ ≳ R_⊙ and is dead here).

The decisive consequence: a photon-like Z′ of 1–120 GeV has BR(Z′→e⁺e⁻) ≈ BR(→μ⁺μ⁻) ≈ 0.15 (≈0.3 each near 1 GeV), so **each annihilation yields ~0.6–1.2 charged leptons in a hard box spectrum running from E₋ ≈ m_Z′²/4m_DM up to E₊ ≈ m_DM**. Effective leptonic σv ≈ 1×10⁻²⁷–6×10⁻²⁷ cm³/s, with a **sharp positron edge at 100–315 GeV**.

**(B) Everything else — 178 regions — has no such component.** These are: the Real Scalar Singlet R1 (m=94.6–95.1 GeV), all 100+ `CsSg` regions (m=97.4–97.9 GeV), and the `CsSg_U1p` regions where the Z′ is either *too heavy* (M_Z′ = 10²–10⁴ GeV ≫ M_DM: R16, R21, R22, R29, R30, R39, R41–R54, R69, R70, R73, R74, R84–R94, R121–R123, R130, R135, R141–R164) or *too weakly gauged* (g′ = 0.003–0.09 with M_Z′ ~ 1 GeV: R4, R5, R20, R38, R40, R48, R75–R83, R87, R118, R133, R134, R136–R140, R144, R147, R148, R161; also R34 at g′≈0.09, m≈235 → σv ≈ 2.6×10⁻²⁸). For all of these the annihilation proceeds through the λ_hs ≈ 10⁻³ Higgs portal into WW/bb, σv ≲ 10⁻²⁸ cm³/s, giving positrons that are soft (from W and b decay chains), 2–3 orders of magnitude weaker, and with **no spectral edge**.

Note this is fully consistent with the path: a 4ℓ-cascade spectrum is γ-poor relative to WW, so σv ~ 10⁻²⁶ evades the CTA(WW) and Fermi15yr(WW) catalog cuts, and no channel here produces the hard ν's IceCube-Gen2 needs.

### Level 1 — lit review: cosmic-ray positron flux

Antimatter cosmic rays are **not** in the catalog (which uses γ-rays per channel plus neutrinos). The measurement is a real one with published DM limits (Bergström et al., AMS-02) and a formally proposed successor with published projections (AMS-100). The falsifiable statement in absolute units: *is there a hard primary e⁺ component with a spectral edge in 100–315 GeV corresponding to σv ≥ 5×10⁻²⁷ cm³/s into a 4-lepton cascade?*

- Branch A (33 regions): predicted 1–6×10⁻²⁷ cm³/s in leptons from a total σv of 3×10⁻²⁷–2×10⁻²⁶, with the edge at E = m_DM.
- Branch B (178 regions): predicted leptonic σv < 10⁻²⁹ cm³/s, no edge.

**Honesty caveat (important):** current AMS-02 limits for μ⁺μ⁻/4μ at 100–300 GeV are σv ≲ 1–5×10⁻²⁵ cm³/s, i.e. a factor 20–100 *above* the branch-A prediction. This split is therefore **not** realizable with today's data — it requires AMS-100's ~10³× acceptance-time, which its design report projects will push leptonic σv sensitivity below 10⁻²⁷ cm³/s. The dominant systematic is the pulsar contribution to the ≥100 GeV positron flux (which itself cuts off near ~285 GeV) plus CR propagation modelling; the *edge* shape, not the integrated flux, is what carries the discrimination. Two marginal assignments: R36 (g′ 0.107–0.168 at m up to 143) and R0's lowest-mass corner (g′ 0.108 at m ≈ 102) sit right at the 5×10⁻²⁷ threshold and could fall either way.

### Level 2 — novel experiments

**A. Positron-box edge spectroscopy** (attached to the 33 secluded regions). The box's upper edge is at E = m_DM to better than 1%, so measuring the edge *energy* — not the flux — reads off m_DM. Branch A splits cleanly: R3 (219–315), R7 (146–302), R18 (239–301), R19 (112–248), R35 (175–289), R37 (103–248), R65 (162–238), R66 (259–314), R67 (167–314), R111 (184–315), R112, R114–R117, R120 (151–155), R125 (127–205), R131 (124–309), R132 (213–235), R210 (237–292) predict an edge ≥150 GeV; R28 (103–115), R36 (102–143), R68 (94.8–95.0), R71 (132–149), R72 (107–179), R113 (111–150), R119 (95–113), R124 (106–170), R126 (102–139), R127 (102–109), R128 (101–112), R129 (102–104) predict <150 GeV. **R0 straddles the cut (102–211 GeV) and would be split internally** — I assign it to the low branch by its lower bound, and flag that this is the one dishonest-looking assignment in the tree.

**B. Ultra-exposure multi-target recoil mass spectroscopy** (attached to the 178 non-secluded regions). Here the *only* remaining lever is m_DM, and it is 3% apart between the Real Scalar Singlet (R1: 94.6–95.1 GeV, 409 pts — a whole Lagrangian isolated) and the 97.4–97.9 GeV pile, with four heavy outliers (R34 222–249, R73 127.5, R118 181.5, R130 127.5). This is genuinely hard: above m_N the recoil spectrum becomes nearly mass-independent, so mass reconstruction saturates. Rating is speculative and I say so below.

---

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_no_no_no_no",
      "lit_review": {
        "name": "AMS-100 cosmic-ray positron flux, hard cascade component",
        "observable": "sigma_v(DM DM -> 4 leptons) >= 5e-27 cm^3/s with e+ edge in 100-315 GeV ?",
        "refs": ["arXiv:1306.3983", "arXiv:1907.04168", "arXiv:0711.4866"],
        "reasoning": "33 CsSg_U1p regions sit on the secluded thermal locus g'^4 ~ m_DM^2 with M_Z' << M_DM: sigma_v = g'^4/(16 pi m_DM^2) gives 8.6e-27 cm^3/s for R0 (g'=0.17, m=150 GeV), 2.1e-26 for R3 (g'=0.30, m=300 GeV), 3-5e-27 for R28/R68/R119 (g'~0.17, m~95-115 GeV). The Z' is photon-like and prompt (c*tau < 3 cm at eps >= 1e-6), with BR(Z'->ee) = BR(Z'->mumu) ~ 0.15 (0.3 near 1 GeV), so each annihilation gives 0.6-1.2 charged leptons in a box spectrum from E- ~ m_Z'^2/4m_DM up to a sharp edge at E+ ~ m_DM; effective leptonic sigma_v 1-6e-27 cm^3/s. The other 178 regions (Real Scalar Singlet R1, all CsSg, and CsSg_U1p with M_Z' = 1e2-1e4 GeV or g' = 0.003-0.09) annihilate only through the lambda_hs ~ 1e-3 Higgs portal into WW/bb with sigma_v < 1e-28 cm^3/s, giving soft secondary positrons 2-3 orders of magnitude weaker and no edge. This is consistent with the path: a 4-lepton cascade is gamma-poor relative to WW, so it evades the CTA(WW) and Fermi15yr(WW) catalog cuts, and produces no hard neutrinos. MARGINAL: current AMS-02 limits for mumu/4mu at 100-300 GeV are sigma_v < 1-5e-25 cm^3/s, i.e. 20-100x above the prediction, so this split is NOT available today; it needs AMS-100's ~1e3 larger acceptance-time, whose published projections reach below 1e-27 cm^3/s for leptonic channels. Dominant systematic is the pulsar component of the >100 GeV positron flux plus CR propagation; the edge shape rather than the integrated flux carries the discrimination. R36 (g' 0.107-0.168) and the lowest-mass corner of R0 (g' 0.108, m 102 GeV) sit within a factor ~2 of the 5e-27 cut and could fall either way.",
        "status": "Splits!",
        "outcomes": [
          {"label": "hard edge seen", "regions": ["R0", "R3", "R7", "R18", "R19", "R28", "R35", "R36", "R37", "R65", "R66", "R67", "R68", "R71", "R72", "R111", "R112", "R113", "R114", "R115", "R116", "R117", "R119", "R120", "R124", "R125", "R126", "R127", "R128", "R129", "R131", "R132", "R210"]},
          {"label": "not seen", "regions": ["R1", "R2", "R4", "R5", "R6", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R29", "R30", "R31", "R32", "R33", "R34", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R61", "R62", "R63", "R64", "R69", "R70", "R73", "R74", "R75", "R76", "R77", "R78", "R79", "R80", "R81", "R82", "R83", "R84", "R85", "R86", "R87", "R88", "R89", "R90", "R91", "R92", "R93", "R94", "R95", "R96", "R97", "R98", "R99", "R100", "R101", "R102", "R103", "R104", "R105", "R106", "R107", "R108", "R109", "R110", "R118", "R121", "R122", "R123", "R130", "R133", "R134", "R135", "R136", "R137", "R138", "R139", "R140", "R141", "R142", "R143", "R144", "R145", "R146", "R147", "R148", "R149", "R150", "R151", "R152", "R153", "R154", "R155", "R156", "R157", "R158", "R159", "R160", "R161", "R162", "R163", "R164", "R165", "R166", "R167", "R168", "R169", "R170", "R171", "R172", "R173", "R174", "R175", "R176", "R177", "R178", "R179", "R180", "R181", "R182", "R183", "R184", "R185", "R186", "R187", "R188", "R189", "R190", "R191", "R192", "R193", "R194", "R195", "R196", "R197", "R198", "R199", "R200", "R201", "R202", "R203", "R204", "R205", "R206", "R207", "R208", "R209"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R3+R7+R18+R19+R28+R35+R36+R37+R65+R66+R67+R68+R71+R72+R111+R112+R113+R114+R115+R116+R117+R119+R120+R124+R125+R126+R127+R128+R129+R131+R132+R210",
          "name": "Positron-box edge spectroscopy",
          "observable": "e+ spectral edge energy >= 150 GeV ?",
          "reasoning": "For DM DM -> Z'Z' -> 4 leptons the positron spectrum is a box whose upper edge sits at E = m_DM to better than 1% (the correction is O(m_Z'^2/m_DM^2) < 0.2% for M_Z' <~ 30 GeV). Measuring the edge ENERGY rather than the flux therefore reads m_DM off directly. Predicted edges: R3 219-315, R7 146-302, R18 239-301, R19 112-248, R35 175-289, R37 103-248, R65 162-238, R66 259-314, R67 167-314, R111 184-315, R112 172-185, R114 299-315, R115 251-303, R116 292-295, R117 246-291, R120 151-155, R125 127-205, R131 124-309, R132 213-235, R210 237-292 GeV (all >= 150 GeV for the bulk of their points); versus R28 103-115, R36 102-143, R68 94.8-95.0, R71 132-149, R72 107-179, R113 111-150, R119 95-113, R124 106-170, R126 102-139, R127 102-109, R128 101-112, R129 102-104 GeV. CAVEAT: R0 (473 pts) straddles the cut at 102-211 GeV and would be split internally by this measurement; it is assigned to the low branch by its lower bound, and R19, R37, R72, R124 and R131 each have a minority tail on the wrong side.",
          "feasibility": "Closest instrument: AMS-02, with ~2-3% rigidity resolution at 100 GeV (adequate) but only 0.05 m^2 sr acceptance, yielding a few hundred total positrons above 200 GeV - far too few to fit an edge against the pulsar continuum. The proposed AMS-100 (Lagrange point 2, ~100 m^2 sr, ~1000x acceptance-time) would deliver 1e3-1e4 DM positrons above 100 GeV, enough to localise an edge to ~3%. Required improvement over the best existing instrument is ~1e3 in acceptance; relative to the proposed AMS-100 it is ~1x, so this needs that dedicated next-generation mission to fly and nothing more. Dominant systematic: the intrinsic ~285 GeV cutoff of the pulsar/secondary positron spectrum, which mimics an edge and must be separated by shape (a box edge is a step, a pulsar cutoff is exponential) using the simultaneously measured electron and antiproton spectra.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "edge >= 150 GeV", "regions": ["R3", "R7", "R18", "R19", "R35", "R37", "R65", "R66", "R67", "R111", "R112", "R114", "R115", "R116", "R117", "R120", "R125", "R131", "R132", "R210"]},
            {"label": "edge < 150 GeV", "regions": ["R0", "R28", "R36", "R68", "R71", "R72", "R113", "R119", "R124", "R126", "R127", "R128", "R129"]}
          ]
        },
        {
          "attach_to": "R1+R2+R4+R5+R6+R8+R9+R10+R11+R12+R13+R14+R15+R16+R17+R20+R21+R22+R23+R24+R25+R26+R27+R29+R30+R31+R32+R33+R34+R38+R39+R40+R41+R42+R43+R44+R45+R46+R47+R48+R49+R50+R51+R52+R53+R54+R55+R56+R57+R58+R59+R60+R61+R62+R63+R64+R69+R70+R73+R74+R75+R76+R77+R78+R79+R80+R81+R82+R83+R84+R85+R86+R87+R88+R89+R90+R91+R92+R93+R94+R95+R96+R97+R98+R99+R100+R101+R102+R103+R104+R105+R106+R107+R108+R109+R110+R118+R121+R122+R123+R130+R133+R134+R135+R136+R137+R138+R139+R140+R141+R142+R143+R144+R145+R146+R147+R148+R149+R150+R151+R152+R153+R154+R155+R156+R157+R158+R159+R160+R161+R162+R163+R164+R165+R166+R167+R168+R169+R170+R171+R172+R173+R174+R175+R176+R177+R178+R179+R180+R181+R182+R183+R184+R185+R186+R187+R188+R189+R190+R191+R192+R193+R194+R195+R196+R197+R198+R199+R200+R201+R202+R203+R204+R205+R206+R207+R208+R209",
          "name": "Ultra-exposure multi-target recoil mass spectroscopy",
          "observable": "reconstructed m_DM to +-1.5%: < 96.5, 96.5-120, or >= 120 GeV ?",
          "reasoning": "These 178 regions are all pure Higgs-portal scatterers with lambda_hs at the 1e-3 floor, so every rate-based observable is identical by construction; the only surviving physical difference is the DM mass. The Real Scalar Singlet R1 (409 pts) predicts m_DM = 94.64-95.07 GeV; every Complex Scalar Singlet region and every heavy-Z'/weakly-gauged CsSg_U1p region predicts 96.98-97.90 GeV (e.g. R2 97.43-97.89, R6 97.86, R16 97.62, R110 97.25-97.55, R209 97.53-97.56); and four outliers predict much heavier DM: R34 222.5-248.5, R118 181.5, R73 127.5, R130 127.5 GeV. A 1.5% mass measurement therefore isolates an entire Lagrangian (the Real Scalar Singlet) from the complex-singlet family, and peels off the four heavy stragglers. It leaves the 173-region 97.4-97.9 GeV pile degenerate - those units differ only in quartic self-couplings that touch no observable at this portal strength, and I do not claim any measurement separates them.",
          "feasibility": "Closest instruments: XLZD (60-80 t xenon) plus a light-target partner (Argo, or SuperCDMS/Ge). Published mass-reconstruction studies show that for m_DM >> m_N the recoil spectrum becomes nearly mass-independent: ~100 events at 100 GeV give roughly a factor-2 mass uncertainty, and even 1e4 events saturate near 10-20% because m_DM is degenerate with the halo escape velocity and the shape of the high-velocity tail. At 1-10x the XLZD limit a 1000 t-yr xenon exposure yields only O(1e2) signal events. Reaching +-1.5% needs of order 1e6 signal events - a >1e4 increase in exposure x rate, i.e. a ~kiloton-year noble-liquid programme - AND independent percent-level knowledge of v_esc and f(v) that no current or planned astrometric survey provides. Dominant systematic is precisely that halo-model degeneracy, not statistics, so the light-target cross-check (which breaks it only partially, and is itself signal-starved here since DarkSide sees nothing) does not rescue it. This is more than 10x beyond any proposed instrument.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "m < 96.5 GeV", "regions": ["R1"]},
            {"label": "96.5-120 GeV", "regions": ["R2", "R4", "R5", "R6", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R17", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R29", "R30", "R31", "R32", "R33", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R58", "R59", "R60", "R61", "R62", "R63", "R64", "R69", "R70", "R74", "R75", "R76", "R77", "R78", "R79", "R80", "R81", "R82", "R83", "R84", "R85", "R86", "R87", "R88", "R89", "R90", "R91", "R92", "R93", "R94", "R95", "R96", "R97", "R98", "R99", "R100", "R101", "R102", "R103", "R104", "R105", "R106", "R107", "R108", "R109", "R110", "R121", "R122", "R123", "R133", "R134", "R135", "R136", "R137", "R138", "R139", "R140", "R141", "R142", "R143", "R144", "R145", "R146", "R147", "R148", "R149", "R150", "R151", "R152", "R153", "R154", "R155", "R156", "R157", "R158", "R159", "R160", "R161", "R162", "R163", "R164", "R165", "R166", "R167", "R168", "R169", "R170", "R171", "R172", "R173", "R174", "R175", "R176", "R177", "R178", "R179", "R180", "R181", "R182", "R183", "R184", "R185", "R186", "R187", "R188", "R189", "R190", "R191", "R192", "R193", "R194", "R195", "R196", "R197", "R198", "R199", "R200", "R201", "R202", "R203", "R204", "R205", "R206", "R207", "R208", "R209"]},
            {"label": "m >= 120 GeV", "regions": ["R34", "R73", "R118", "R130"]}
          ]
        }
      ]
    }
  ]
}
```

---

<!-- g02_leaf-ynynn.md -->

## Reasoning — leaf `root_yes_no_yes_no_no` (4606 pts, 104 units)

**What the leaf actually contains.** Every unit here sits at m_DM ≈ 53–97 GeV with a Higgs portal pinned to α₁ ≈ 1.0–1.9×10⁻³ (h→inv is at the SM 4ν floor, 1.1–3.2×10⁻³, because m_DM > m_h/2 shuts off h→DM DM), and a spin-independent rate in the 1–10× XLZD band but below LZ. All the *catalog* handles are therefore saturated. The real structural variety is invisible to the catalog and lives in the dark sector:

1. **Kinetic mixing ε spans 1×10⁻⁶ → 0.1** across the U(1)′ units, with m_Z′ from 1 GeV to 10 TeV. The catalog's Z′ observable is the *high-mass* Drell–Yan σ×BR recast (hundreds of GeV–TeV); it says nothing about a 1–70 GeV dark photon at the ε-scale. That is an entirely different instrument, mass window, and analysis.
2. **The dark gauge coupling is bimodal.** Plotting g′/√m_DM: R1 0.1341/√57.6 = 0.0177, R11–R13 0.1464/√69.67 = 0.0175, R16 0.156/√79.4 = 0.0175, R9/R41 0.1649/√90.15 = 0.0174, R50 0.1327/√53.9 = 0.0181, R103 0.1391/√62.74 = 0.0176. That constant is not an accident: α′ = g′²/4π ≈ 1.7×10⁻³ gives ⟨σv⟩(χχ*→Z′Z′) ≈ πα′²/m² ≈ 1.9×10⁻⁹ GeV⁻² = **2.2×10⁻²⁶ cm³/s**, i.e. exactly the thermal value. These ~50 units are *secluded* DM: the relic is set by annihilation into a pair of GeV-scale dark photons, s-wave, hence unsuppressed today. The other family (g′ ≈ 0.003–0.045, or m_Z′ ≫ m_DM so Z′Z′ is closed, plus every RsSg and CsSg unit which has no dark force at all) annihilates only through the α₁ ≈ 1.5×10⁻³ Higgs portal: ⟨σv⟩ ≈ λ²·3/(16π m²) ~ 1×10⁻²⁸ cm³/s — more than two orders of magnitude weaker, and into WW/bb with a smooth spectrum.

These two axes (ε, and "is there a thermal dark force?") are physically independent, which is why I use one for the lit-review split and the other for the novel node on *both* branches.

### Level 1 — low-mass dark-photon dimuon resonance (ε ≳ 10⁻³, 1–70 GeV)

LHCb's inclusive A′→μ⁺μ⁻ search covers 214 MeV–70 GeV in both prompt and displaced topologies and reaches ε ≈ 1–3×10⁻³ over most of that window; BaBar's e⁺e⁻→γ(A′→ℓℓ) covers ≲10.2 GeV at ε ≈ 10⁻³; CMS's dedicated high-rate displaced-dimuon stream closes the mm–cm lifetime gap. Every unit in this leaf with m_Z′ inside the window and ε above ~10⁻³ produces a narrow, prompt dimuon peak; everything else produces nothing at any planned sensitivity.

**Predicted values, unit by unit (seen):** ε = 0.1 flat for R20, R78; 0.069–0.1 R58; 0.016–0.1 R6, R46, R80; 0.0065–0.1 R10; 0.0054–0.1 R21; 0.0147–0.025 R63 (m_Z′ = 17–24 GeV, inside LHCb's 10.6–70 GeV band); 0.0068–0.0135 R61; 0.0076–0.019 R65; 0.0024–0.1 R2, R3, R17; 0.0016–0.0036 R64. Two are honestly marginal: **R34** (ε = 9.5×10⁻⁴–3.4×10⁻³, geometric mean 1.8×10⁻³, m_Z′ = 12–16 GeV) and **R5** (ε straddles 3×10⁻⁴–0.1); I place both on the "seen" side but a null result would only move them, not the split.

**Predicted values (not seen):** the bulk of the U(1)′ units sit at ε = 1×10⁻⁶–5×10⁻⁵ (R1, R4, R7, R8, R13, R15, R16, R18, R19, R23, R24, R27, R30, R31, R35–R40, R42, R44, R45, R47–R50, R54–R56, R59, R60, R62, R74, R86–R92, R103), i.e. ε² ≤ 2.5×10⁻⁹ — three to six orders below any current or projected reach. Straddling-but-below cases: R9 (2.4×10⁻⁴–2.0×10⁻³), R11 (1×10⁻⁴–3.4×10⁻³), R28 (4×10⁻⁴–1.1×10⁻³), R57 (2.8×10⁻⁴–1.5×10⁻³), R41, R29 — flagged as marginal. Units with large ε but a *heavy* Z′ (R33 at ε = 0.1, m_Z′ = 359–3416 GeV; R76 at ε = 0.054–0.1, m_Z′ ≥ 5.3 TeV; R22, R32, R43, R66–R73, R75, R77, R79, R81–R85, R89) fall outside the 1–70 GeV window entirely — that mass range is the catalog's business, not this search's. Finally R0 (RsSg) and R25, R26, R51–R53, R93–R102 (CsSg) have **no** dark photon: exactly zero, by construction.

This splits 17 units off, and — the point of the exercise — it cleanly severs a block of U(1)′ Lagrangian points from the RsSg and CsSg points.

### Level 2 — positron box edge (both branches)

Everything left is separated by whether DM annihilates into a *pair* of GeV-scale dark photons. For χχ*→Z′Z′ with Z′→e⁺e⁻/μ⁺μ⁻/hadrons, the positron spectrum is a **box** running from E₋ ≈ m_Z′²/4m_DM up to a hard edge at E₊ ≈ m_DM (for m_Z′/m_DM = 1/70 to 1/3, the boost γ = 3–70). The edge sits at 69.7 GeV for the huge 0.1464-coupling family, 90.2 GeV for R9/R41/R10/R64, 96 GeV for the heavier ones, 53.9–56.3 GeV for R50, 62.7 GeV for R103. Amplitude: ⟨σv⟩ = 2.2×10⁻²⁶ cm³/s with BR(Z′→e⁺e⁻+μ⁺μ⁻) ≈ 30–50% at these masses. Crucially the box **does not depend on ε** (any ε ≥ 10⁻⁶ makes the Z′ decay at cτ ≲ 2 cm, so it always decays promptly in the halo), which is what makes this node orthogonal to the level-1 split. The Higgs-portal-only units predict no edge at all and a total ⟨σv⟩ ~10⁻²⁸ cm³/s into WW/bb — a smooth spectrum ~200× weaker. Note this is *not* a repackaged catalog gamma-ray limit: the catalog uses WW/bb photon templates, and the cascade's photons (FSR plus π⁰ from hadronic Z′ decay) are soft and featureless; the discriminating power is entirely in the sharp positron edge against a smooth astrophysical power law.

Border cases: **R45** (g′ = 0.040–0.045 → ⟨σv⟩(Z′Z′) ≈ 9×10⁻²⁹ cm³/s, 250× sub-thermal) and **R86** (g′ straddles 0.058–0.167) are placed on the no-box and box sides respectively, both marginal. R67 (g′ = 0.097 but m_Z′ = 119–339 GeV > m_DM) and R22 (g′ ≈ 0.4–1.0 but m_Z′ = 10 TeV) have the channel closed, so they go no-box despite large couplings.

**What stays degenerate, honestly.** R0 (real singlet, m = 93.7–94.8 GeV, λ = 1.1–1.4×10⁻³) and the thirteen CsSg units (m = 95.4–95.9 GeV, λ = 1.65–1.9×10⁻³) are phenomenologically the same object up to a factor ~2 in σ_SI and ~1.3 GeV in mass; nothing here separates them, and I would not pretend otherwise. Likewise the ~30 secluded units all sitting at m_DM = 69.67 GeV with g′ = 0.1464 differ only in quartics that touch no observable — they are a single physical prediction fragmented by DBSCAN, and the box edge lands on top of itself for all of them.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_no_no",
      "lit_review": {
        "name": "Low-mass dark-photon dimuon search (LHCb/BaBar/CMS)",
        "observable": "narrow mu+mu- resonance, 1-70 GeV, eps >= 1e-3 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1406.2980", "arXiv:2112.13769"],
        "reasoning": "Distinct from the catalog's high-mass Drell-Yan Z'->ll recast: this is the 1-70 GeV dark-photon program at the eps scale (LHCb inclusive A'->mumu, 214 MeV-70 GeV prompt+displaced; BaBar e+e-->gamma A' below 10.2 GeV; CMS displaced-dimuon scouting for cm lifetimes), reaching eps ~ 1-3e-3. Seen side: eps = 0.1 (R20, R78), 0.069-0.1 (R58), 0.016-0.1 (R6, R46, R80), 0.0065-0.1 (R10), 0.0054-0.1 (R21), 0.0147-0.025 with m_Z' = 17-24 GeV (R63), 0.0068-0.0135 (R61), 0.0076-0.019 (R65), 0.0024-0.1 (R2, R3, R17), 0.0016-0.0036 (R64); marginal: R34 (9.5e-4-3.4e-3, geometric mean 1.8e-3) and R5 (straddles 3e-4-0.1). Not-seen side: the bulk of U(1)' units sit at eps = 1e-6-5e-5, i.e. eps^2 <= 2.5e-9, three to six orders below any projected reach; R9, R11, R28, R29, R41, R57 straddle 1e-4-3e-3 and are marginal; R22, R32, R33, R43, R66-R73, R75-R77, R79, R81-R85, R89 have m_Z' = 40 GeV-10 TeV, outside the window (that regime is the catalog's); and R0 (real singlet), R25, R26, R51-R53, R93-R102 (complex singlet) have no dark photon at all, predicting exactly zero. The split severs a block of U(1)' Lagrangian points from every RsSg and CsSg point.",
        "status": "Splits!",
        "outcomes": [
          {"label": "resonance seen", "regions": ["R2", "R3", "R5", "R6", "R10", "R17", "R20", "R21", "R34", "R46", "R58", "R61", "R63", "R64", "R65", "R78", "R80"]},
          {"label": "not seen", "regions": ["R0", "R1", "R4", "R7", "R8", "R9", "R11", "R12", "R13", "R14", "R15", "R16", "R18", "R19", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R35", "R36", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R59", "R60", "R62", "R66", "R67", "R68", "R69", "R70", "R71", "R72", "R73", "R74", "R75", "R76", "R77", "R79", "R81", "R82", "R83", "R84", "R85", "R86", "R87", "R88", "R89", "R90", "R91", "R92", "R93", "R94", "R95", "R96", "R97", "R98", "R99", "R100", "R101", "R102", "R103"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R4+R7+R8+R9+R11+R12+R13+R14+R15+R16+R18+R19+R22+R23+R24+R25+R26+R27+R28+R29+R30+R31+R32+R33+R35+R36+R37+R38+R39+R40+R41+R42+R43+R44+R45+R47+R48+R49+R50+R51+R52+R53+R54+R55+R56+R57+R59+R60+R62+R66+R67+R68+R69+R70+R71+R72+R73+R74+R75+R76+R77+R79+R81+R82+R83+R84+R85+R86+R87+R88+R89+R90+R91+R92+R93+R94+R95+R96+R97+R98+R99+R100+R101+R102+R103",
          "name": "Positron box-edge spectrometer",
          "observable": "e+ box edge at 50-100 GeV, sigma v >= 2e-26 cm^3/s ?",
          "reasoning": "The box regions carry a thermal dark force: g'/sqrt(m_DM) is constant at 0.0175-0.0181 (R11-R13 0.1464/69.67 GeV, R16 0.156/79.4, R9/R41 0.1649/90.15, R50 0.1327/53.9, R103 0.1391/62.74), giving alpha' = 1.7e-3 and s-wave chi chi* -> Z'Z' with sigma v = pi alpha'^2/m^2 = 2.2e-26 cm^3/s, unsuppressed today. Each Z' (1-27 GeV, boost 3-70) decays to e+e-/mu+mu-/hadrons with BR(ee+mumu) = 30-50%, producing a positron box with a hard edge at E = m_DM: 53.9-56.3 GeV (R50), 62.7 GeV (R103), 69.7 GeV (the large 0.1464 family), 79-85 GeV (R16, R40, R88, R90, R92), 90.2 GeV (R9, R41). The signal is independent of eps: even at eps = 1e-6 a 5 GeV Z' has ctau = 1.6 cm, so it always decays promptly in the halo - which is what makes this orthogonal to the dimuon split. The no-box units annihilate only through the alpha1 = 1.2-1.9e-3 Higgs portal, sigma v ~ 1e-28 cm^3/s into WW/bb: ~200x weaker and spectrally smooth. This includes every RsSg/CsSg unit (no dark force), the g' = 0.003-0.01 units (R7, R8, R14, R15, R23, R24, R31, R33, R44, R47, R48, R74, R87), and units where Z'Z' is kinematically closed (R22 at m_Z' = 10 TeV, R67 at 119-339 GeV, all heavy-Z' units). Marginal: R45 (g' = 0.043 gives 9e-29 cm^3/s, 250x sub-thermal, placed no-box) and R86 (g' straddles 0.058-0.167, placed box).",
          "feasibility": "Closest instrument: AMS-02, which currently limits leptonic/cascade annihilation at m ~ 70-100 GeV to sigma v ~ 1e-25 cm^3/s (mu+mu-) and ~1e-26 cm^3/s (e+e-); the leptonic fraction of the predicted 2.2e-26 cm^3/s is ~1e-26, so a factor 5-10 in sigma v reach is needed. AMS-100 (proposed, ~1000x acceptance-time and 2-3% energy resolution at 70 GeV) delivers that margin and resolves a 70 vs 90 GeV edge. Dominant systematic: the pulsar/secondary positron background and solar modulation - mitigated because astrophysical positrons are a smooth power law while the signal is a sharp step, so the discriminant is the edge, not the normalization.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "box edge", "regions": ["R1", "R4", "R9", "R11", "R12", "R13", "R16", "R18", "R19", "R27", "R28", "R29", "R30", "R35", "R36", "R37", "R38", "R39", "R40", "R41", "R42", "R49", "R50", "R54", "R55", "R56", "R57", "R59", "R60", "R62", "R86", "R88", "R90", "R91", "R92", "R103"]},
            {"label": "no edge", "regions": ["R0", "R7", "R8", "R14", "R15", "R22", "R23", "R24", "R25", "R26", "R31", "R32", "R33", "R43", "R44", "R45", "R47", "R48", "R51", "R52", "R53", "R66", "R67", "R68", "R69", "R70", "R71", "R72", "R73", "R74", "R75", "R76", "R77", "R79", "R81", "R82", "R83", "R84", "R85", "R87", "R89", "R93", "R94", "R95", "R96", "R97", "R98", "R99", "R100", "R101", "R102"]}
          ]
        },
        {
          "attach_to": "R2+R3+R5+R6+R10+R17+R20+R21+R34+R46+R58+R61+R63+R64+R65+R78+R80",
          "name": "Positron box edge tagged to the measured Z' mass",
          "observable": "e+ box edge at 50-100 GeV, sigma v >= 2e-26 cm^3/s ?",
          "reasoning": "On this branch the dark photon has already been reconstructed as a dimuon resonance, so m_Z' is known (1-3.7 GeV for R2, R6, R10, R17, R46, R58, R64, R65, R78, R80; 12-25 GeV for R34, R63) and the expected box lower edge m_Z'^2/4m_DM and boost are fixed - a matched-template search, not a blind one. The 14 units with g' = 0.128-0.166 are thermal secluded DM: sigma v(Z'Z') = 2.2e-26 cm^3/s with an edge at m_DM = 53-92 GeV (R6 53-90, R61 54-70, R2/R3/R5/R17/R21/R34/R58 69.7, R63 62-87, R65 67-80, R10/R20/R64 87-92). The three units with g' = 0.003-0.0097 (R46, R78, R80, all at m_DM = 95.8-96.4 GeV) have alpha' <= 7.5e-6, so sigma v(Z'Z') <= 4e-31 cm^3/s - five orders below - and annihilate only through the alpha1 = 1.4e-3 portal into WW: no edge, ~1e-28 cm^3/s. Their large eps (0.015-0.1) is precisely why they were caught by the dimuon search while carrying no dark-force annihilation, so this node separates a coupling that the collider resonance itself cannot measure (Z'->DM DM is closed for m_Z' << 2 m_DM).",
          "feasibility": "Same platform as the other branch: AMS-02 reaches sigma v ~ 1e-25 cm^3/s for cascade channels at 70-100 GeV; an AMS-100-class spectrometer (~1000x acceptance, 2-3% resolution at 70 GeV) supplies the required factor 5-10. Knowing m_Z' from the dimuon peak sharpens the template and buys roughly a further factor 2 in significance. Dominant systematic: pulsar-dominated primary positron background; the sharp edge against a smooth power law is the discriminant.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "box edge", "regions": ["R2", "R3", "R5", "R6", "R10", "R17", "R20", "R21", "R34", "R58", "R61", "R63", "R64", "R65"]},
            {"label": "no edge", "regions": ["R46", "R78", "R80"]}
          ]
        }
      ]
    }
  ]
}
```

---

<!-- g03_pair-yynn.md -->

## Leaf `root_yes_yes_no_no_yes` (2495 pts, 54 units)

**What is actually free to vary here.** All 54 units are the same complex-scalar-singlet DM charged under a dark U(1)′, at MDM = 317–710 GeV. The parameters are (MDM, MZp, ε, g′, α1) plus the dark self-quartics α2–α6. Two facts set the ceiling on what any experiment can do:

- **α2–α6 are unobservable.** They are pure DM self-quartics (no dark Higgs in the field content — MZp is an input, so there is no VEV and these terms generate no masses or mixings). Their only physical effect is DM–DM contact scattering: for the maximum α = 10 and m_χ = 500 GeV, σ = α²/(64π m_χ²) ≈ 8·10⁻³⁴ cm², i.e. σ/m ≈ 9·10⁻¹³ cm²/g — twelve orders below the ~1 cm²/g cluster/dwarf sensitivity. No conceivable experiment separates R21 from R25. This is the irreducible floor, and it is why ~40 of the 54 units cannot be split by *anything*.
- **α1 is also effectively invisible** beyond σ_SI: MDM ≫ m_h/2 closes h→inv (consistent with the path), and the one-loop universal Higgs-coupling shift from a |φ|²|H|² operator with α1 ≈ 0.01–0.037 and m_φ ≈ 500 GeV is δκ ≈ α1²v²/(48π²m_φ²) ≈ 5·10⁻⁷ — hopeless at any collider.

So the only real handles left are **MZp (1 → 986 GeV)** and **ε (10⁻⁶ → 0.1)**, and secondarily MDM.

**Level 1 — dark-photon visible resonance search (BaBar / Belle II 50 ab⁻¹ / LHC prompt dimuon).** This is genuinely outside the catalog: the catalog's Z′ entry is a *high-mass* pp→Z′→ℓℓ Drell–Yan recast, whereas the discriminator here is the low-mass (1–70 GeV) narrow-dimuon window covered by e⁺e⁻ radiative return and by dedicated prompt-dimuon searches, where the reach is ε ≳ 3·10⁻⁴ (Belle II, m < 10 GeV) to ε ≈ 10⁻³ (10–70 GeV). Signal strength ∝ ε², so the threshold is ε² ≈ 10⁻⁶.

Region-by-region predictions (ε² relative to the 10⁻⁶ threshold, MZp in the 1–70 GeV acceptance):

*Seen* — R1 (MZp 16.6–40.8, ε 1.1·10⁻²–0.1 → ε² = 1.1·10⁻⁴–10⁻², i.e. 10²–10⁴× threshold), R50 (MZp 24–34, ε 0.051–0.1 → 2.6·10⁻³–10⁻², 10³–10⁴×), R53 (MZp 57.8–59.6, ε 0.011–0.028 → 10²–10³×), R7 (MZp 16.5–36.9, ε 2.9·10⁻³–0.1 → 10–10⁴×), R34/R35 (MZp = 1.0 GeV exactly, ε 3.2·10⁻³–9.9·10⁻³ → 10–10²× threshold, and at 1 GeV Belle II reach is ε ≈ 3·10⁻⁴ so the margin is ~10³ in ε²), R42 (MZp 36, ε 2.0·10⁻³ → 4×), R36 (MZp 58–83, ε 1.5·10⁻³–4.9·10⁻³ → 2–24×; note the top of its mass range leaks past 70 GeV), R17 (MZp 38–45, ε 5.9·10⁻⁴–2.2·10⁻³ → 0.35–5×, **marginal**), R49 (MZp 27.5, ε 8.6·10⁻⁴–2.0·10⁻³ → 0.7–4×, **marginal**), R2 (MZp 1.1–11.3, ε spans 1.6·10⁻⁵–0.1; the upper 2/3 of the range is 10–10⁴× threshold — assigned "seen", but this unit genuinely straddles).

*Not seen* — two distinct reasons. (i) **ε too small at accessible mass**: R3 (ε ≤ 5.9·10⁻⁵ → ε² ≤ 3.5·10⁻⁹, 300× below), R6/R8/R9/R19/R31/R32/R37/R39/R41/R43/R44/R51 (ε = 10⁻⁶–5·10⁻⁶ → ε² ≤ 3·10⁻¹¹, 10⁴–10⁶× below), R13/R18/R20/R38/R40/R52 (ε ~ 10⁻⁵–3·10⁻⁴ → 10⁻²–10⁻¹× threshold), R11/R12/R15/R16/R22/R26/R33 (ε ~ 10⁻⁴–3·10⁻³ but geometric-mean ε² below threshold). (ii) **MZp outside the 1–70 GeV window entirely**: R0 (986 GeV), R4 (117–583), R6 (120–278), R10/R29 (298–331), R30 (117), and the whole MZp ≈ 540–570 GeV cluster R14, R21, R23, R24, R25, R27, R28, R45, R46, R47, R48 — for these the only production is high-mass Drell–Yan, which is precisely the catalog observable and is therefore excluded from this proposal.

**Level 2a — attached to the "seen" branch (R1, R2, R7, R17, R34, R35, R36, R42, R49, R50, R53).** Once the Z′ is found, the remaining physical difference is its decay composition, which is fixed by MZp and is imprinted on the *cosmic positron* spectrum from χχ→Z′Z′. At MZp = 1.0 GeV (R34, R35, and the light end of R2) the dark photon is below open charm/τ: R(s) ≈ 2, so BR(e⁺e⁻)+BR(μ⁺μ⁻) ≈ 50%, and the cascade gives a hard positron spectrum with endpoint at m_χ = 337–490 GeV. At MZp = 16–83 GeV (R1, R7, R17, R36, R42, R49, R50, R53) the charge-weighted R(s) ≈ 6.7, so BR(e+μ) drops to ≈ 30% and most of the energy goes into jets and τ's, softening the positrons by a further factor ~2. Net: the predicted e⁺ excess at 300 GeV (for the thermal σv ≈ 2·10⁻²⁶ cm³/s these points sit at) is **≈ 10–20% of the measured AMS-02 e⁺ flux** for the MZp ≈ 1 GeV units, versus **≈ 2–4%** for the MZp = 16–83 GeV units. Cut at 5%. This is a factor-4 discriminator, not a factor-100 one — honestly marginal, and it is limited by secondary-positron propagation modelling, not by statistics.

**Level 2b — attached to the "not seen" branch (43 units).** These leaves are on the path "IceCube-Gen2 → YES", so there *is* a solar signal to spectroscope, and the neutrino spectrum from χχ→Z′Z′ in the solar core has a sharp threshold behaviour in MZp that no rate-only limit captures. For MZp < 2m_D ≈ 3.7 GeV the Z′ can only decay to e⁺e⁻, μ⁺μ⁻, π⁺π⁻, K⁺K⁻; in the solar core (ρ ≈ 150 g/cm³) muons and charged pions of any energy range out and stop long before decaying, so the neutrinos emerge at E ≲ 100 MeV — no detectable high-energy signal at all. For MZp > 3.7 GeV, D mesons (cτ ≈ 100–300 μm) and τ's decay promptly, giving a hard neutrino spectrum whose median energy is capped by solar absorption at E_med ≈ 50–120 GeV for m_χ = 320–710 GeV.

Predicted E_med: **≲ 1 GeV (i.e. effectively no above-threshold signal)** for R3 (MZp 1–6.8, bulk ≈ 2.6), R13 (1.13–1.31), R18 (1.24–1.71), R19 (1.24–1.63), R20 (1.16–1.48), R31 (1.0), R37 (1.0), R38 (1.9–2.1), R39 (1.44–4.03), R40 (1.44–1.56), R52 (1.8–4.1). **50–120 GeV** for the other 32 units (MZp ≥ 3.9 GeV): R0 (986), R4, R5, R6, R8, R9, R10, R11, R12, R14, R15, R16, R21–R30, R32 (3.91–4.22, right at the charm threshold — the weakest assignment in this group), R33, R41, R43–R48, R51.

This also flags a real fragility in the underlying scan: for the eleven light-MZp units the catalog's "IceCube-Gen2 sees it" verdict is probably an artefact of computing the ν yield from direct annihilation channels rather than the Z′ cascade. The proposed measurement is exactly the one that would expose that.

---

## Leaf `root_yes_yes_no_no_no` (1820 pts, 59 units)

Same model, same irreducible α2–α6 floor. The systematic difference from the sibling leaf is a uniformly **lower Higgs portal**: α1 = 0.0053–0.025 here versus 0.0089–0.037 in the DarkSide-yes sibling — which is exactly why these points fall below the argon threshold. That shift is already spent on the path split, so it is unavailable.

**Level 1 — same dark-photon dimuon search.** Predictions:

*Seen* — R12 (MZp 13.8–152, ε 0.033–0.1 → ε² = 10⁻³–10⁻², 10³–10⁴× threshold), R8 (MZp 14.9–36, ε 0.014–0.1 → 2·10²–10⁴×), R19 (MZp 33.7–202, ε 0.047–0.1 → 2·10³–10⁴×; only the MZp < 70 GeV part of the range is in acceptance), R33 (MZp 3.3–4.3, ε 0.079–0.1 → 6·10³–10⁴×, and at 4 GeV Belle II threshold is ε ≈ 3·10⁻⁴ so ~10⁵ in ε²), R54 (MZp 2.1–2.4, ε 0.062–0.1 → same order), R57 [Z2] (MZp 28.7–42, ε 0.018–0.053 → 3·10²–3·10³×), R27 [Z2] (MZp 34–130, ε 0.013–0.044 → 1.8·10²–2·10³×), R6 [Z2] (MZp 17–125, ε 2.6·10⁻³–0.093 → 7–8·10³×), R49 (MZp 47.6, ε 0.011 → 1.2·10²×), R23 (MZp 9.82–9.92, ε 1.25·10⁻³–9.4·10⁻³ → 1.6–90× and inside Belle II's best window), R2 (MZp 11.6–59.4, ε 4.7·10⁻⁵–0.1 → straddles; upper half is 10²–10⁴×), R11 [Z2] (MZp 15.5–104, ε 2.5·10⁻⁴–0.086 → straddles, geometric mean ≈ 20×), R14 [Z2] (MZp 29.8–84.8, ε 3.5·10⁻⁴–0.062 → geometric mean ≈ 22×).

Note that three of the five Z2-only units (R6, R14, R27, R57) land on the "seen" side while the Z2+3+4+5 units are spread across both — so this split does carry a little **Lagrangian**-level separating power, though not cleanly.

*Not seen* — (i) ε below reach at accessible mass: R5 (ε ≤ 3·10⁻⁶), R17 (≤ 2.7·10⁻⁶), R20 (≤ 5.6·10⁻⁶), R21/R34/R36/R41/R42/R43/R46 (ε = 10⁻⁶ → ε² = 10⁻¹², 10⁶× below), R3 (ε ~ 10⁻⁶), R32/R35/R56 (≤ 3·10⁻⁶), R0 (≤ 3.3·10⁻⁵), R4 (≤ 1.9·10⁻⁴), R9 (1.2·10⁻⁵–2.5·10⁻³, geometric mean 1.7·10⁻⁴ → 0.03×), R15, R29, R44, R45, R47, R50, R55, R58 [Z2] (ε ~ 10⁻⁵–4·10⁻⁴ → 10⁻³–0.2×), R28, R40 [Z2] (geometric-mean ε² ≈ 0.6× threshold, marginal). (ii) MZp outside the window: R1 (96.6–476), R16 (52.7–238, bulk 112), R18 (38.8–560, bulk 147), R22 (309.5), R24 (323–327), R39 (117), R48 (77–255), R52 (307), R53 (298.7), and the MZp ≈ 530–570 GeV cluster R7, R10, R13, R25, R26, R30, R31, R37, R38, R51.

**Level 2a — "seen" branch (13 units).** Same positron-composition argument: R33 (MZp 3.3–4.3) and R54 (MZp 2.1–2.4) sit below/at the open-charm threshold, so BR(Z′→e⁺e⁻+μ⁺μ⁻) ≈ 45–50% and the positron spectrum is hard with endpoint m_χ ≈ 440–705 GeV → predicted e⁺ excess ≈ 10–20% of the AMS-02 flux at 300 GeV. The remaining eleven units have MZp = 9.8–152 GeV, R(s) ≈ 6.7, BR(e+μ) ≈ 30% with much softer spectra → ≈ 2–4%. Cut at 5%. Same factor-4 marginality caveat.

**Level 2b — "not seen" branch (46 units).** Solar-neutrino spectroscopy, cut at E_med = 50 GeV. Predicted E_med **≲ 1 GeV** (stopped μ/π only, no hard component) for the ten sub-3.7-GeV units: R0 (MZp 1–3.8), R4 (1.49–2.11), R5 (1.29–1.81), R9 (1–1.46), R17 (1.07–1.46), R20 (1.49–1.88), R21 (1.63–1.97), R29 (1.10–1.29), R36 (1.0), R50 (1.0). Predicted **50–120 GeV** for the other 36 units (MZp = 9.7–570 GeV), where prompt charm/τ/W decays supply the neutrinos.

Honest limits on both leaves: after these two levels, ~32 units in leaf A and ~36 in leaf B remain in a single bucket. They differ only in α2–α6 (unobservable, see above), in overlapping MDM windows, and in ε values spread over decades at masses no accelerator can reach. I do not believe that residual degeneracy is breakable even in principle within this model.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_no_no_yes",
      "lit_review": {
        "name": "Dark-photon dimuon resonance search (BaBar / Belle II / LHC prompt)",
        "observable": "narrow mu+mu- resonance, 1-70 GeV, eps >~ 1e-3 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1808.10567", "arXiv:1412.0018"],
        "reasoning": "Distinct from the catalog's high-mass pp->Z'->ll Drell-Yan recast: this is the low-mass narrow-dimuon window (radiative return at BaBar/Belle II, prompt dimuon at the LHC), reach eps ~ 3e-4 below 10 GeV rising to ~1e-3 at 70 GeV, i.e. a threshold in eps^2 of ~1e-6. Seen: R1 (MZp 16.6-40.8, eps 1.1e-2-0.1, eps^2 = 1e2-1e4 x threshold), R50 (MZp 24-34, eps 0.051-0.1, 1e3-1e4x), R53 (MZp 58-60, eps 0.011-0.028, 1e2-1e3x), R7 (MZp 16.5-37, eps 2.9e-3-0.1, 10-1e4x), R34/R35 (MZp exactly 1.0 GeV, eps 3.2e-3-9.9e-3, ~1e3x the Belle II 1-GeV threshold), R42 (MZp 36, eps 2.0e-3, 4x), R36 (MZp 58-83, eps 1.5e-3-4.9e-3, 2-24x), and marginally R17 (MZp 38-45, eps 5.9e-4-2.2e-3, 0.35-5x), R49 (MZp 27.5, eps 8.6e-4-2.0e-3, 0.7-4x) and R2 (MZp 1.1-11.3, eps straddles 1.6e-5-0.1). Not seen for two reasons: eps far too small at accessible mass -- R6, R8, R9, R19, R31, R32, R37, R39, R41, R43, R44, R51 at eps = 1e-6-5e-6 are 1e4-1e6 x below, R3 at eps <= 5.9e-5 is 300x below, R13/R18/R20/R38/R40/R52 at eps ~ 1e-5-3e-4 are 10-100x below, R11/R12/R15/R16/R22/R26/R33 have geometric-mean eps^2 below threshold; or MZp outside the 1-70 GeV acceptance -- R0 (986 GeV), R4 (117-583), R6 (120-278), R10/R29 (298-331), R30 (117) and the MZp = 540-570 GeV cluster R14, R21, R23, R24, R25, R27, R28, R45, R46, R47, R48, for which the only production channel is the catalog's own high-mass dilepton recast.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1", "R2", "R7", "R17", "R34", "R35", "R36", "R42", "R49", "R50", "R53"]},
          {"label": "not seen", "regions": ["R0", "R3", "R4", "R5", "R6", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R18", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R37", "R38", "R39", "R40", "R41", "R43", "R44", "R45", "R46", "R47", "R48", "R51", "R52"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R7+R17+R34+R35+R36+R42+R49+R50+R53",
          "name": "AMS-100-class positron-endpoint spectrometer",
          "observable": "e+ excess >= 5% of measured e+ flux at 300 GeV ?",
          "reasoning": "Annihilation is secluded (chi chi -> Z'Z'), so the positron spectrum is fixed by the Z' decay composition, i.e. by MZp. At MZp = 1.0 GeV (R34, R35, light end of R2) the Z' is below open charm and tau: R(s) ~ 2, so BR(ee)+BR(mumu) ~ 50%, and the cascade positrons are hard with endpoint at m_chi = 337-490 GeV -> predicted excess ~10-20% of the AMS-02 e+ flux at 300 GeV for the thermal sigma v ~ 2e-26 cm^3/s these points carry. At MZp = 16-83 GeV (R1, R7, R17, R36, R42, R49, R50, R53) charge-weighted R(s) ~ 6.7 drops BR(e+mu) to ~30% and routes the rest into jets and taus, softening the spectrum by a further factor ~2 -> ~2-4%. The discriminator is a factor ~4, not orders of magnitude; it is honestly marginal.",
          "feasibility": "Closest instrument: AMS-02, which measures the e+ flux at 300 GeV with ~2-3% systematics and is statistics-limited above ~500 GeV; its leptophilic-DM limit at m_chi ~ 400 GeV is sigma v ~ 1e-25 cm^3/s, a factor ~5 above the thermal value needed here. AMS-100 (proposed, ~100 m^2 sr, ~1000x AMS-02 acceptance) supplies the statistics; the required improvement is ~5x in effective sigma v sensitivity. Dominant systematic is not statistical but the secondary-positron background from cosmic-ray propagation, currently uncertain at the 20-40% level, which must be controlled to <5% for this cut to be meaningful.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R2", "R34", "R35"]},
            {"label": "no", "regions": ["R1", "R7", "R17", "R36", "R42", "R49", "R50", "R53"]}
          ]
        },
        {
          "attach_to": "R0+R3+R4+R5+R6+R8+R9+R10+R11+R12+R13+R14+R15+R16+R18+R19+R20+R21+R22+R23+R24+R25+R26+R27+R28+R29+R30+R31+R32+R33+R37+R38+R39+R40+R41+R43+R44+R45+R46+R47+R48+R51+R52",
          "name": "High-resolution solar dark-matter neutrino spectrometer",
          "observable": "median E_nu of solar nu_mu excess >= 50 GeV ?",
          "reasoning": "This leaf lies on the IceCube-Gen2 = YES branch, so a solar signal exists to spectroscope, and the cascade chi chi -> Z'Z' has a sharp MZp threshold that a rate-only limit cannot see. For MZp < 2m_D = 3.7 GeV the Z' can only go to ee, mumu, pi pi, KK; in the solar core (rho ~ 150 g/cm^3) muons and charged pions of any energy range out and stop before decaying, so the emerging neutrinos have E <~ 100 MeV and there is no above-threshold signal at all: predicted E_med <~ 1 GeV for R3 (MZp 1-6.8, bulk ~2.6), R13 (1.13-1.31), R18 (1.24-1.71), R19 (1.24-1.63), R20 (1.16-1.48), R31 (1.0), R37 (1.0), R38 (1.9-2.1), R39 (1.44-4.03), R40 (1.44-1.56), R52 (1.8-4.1). For MZp > 3.7 GeV, D mesons (c tau ~ 100-300 um) and taus decay promptly and the spectrum is hard, with solar absorption capping the median at E_med ~ 50-120 GeV for m_chi = 320-710 GeV: this covers the other 32 units, from R0 (MZp 986) through the MZp ~ 550 GeV cluster down to R32 (MZp 3.91-4.22), which sits right at the charm threshold and is the weakest assignment in the group. A side benefit: for the eleven light-MZp units the catalog's own 'IceCube-Gen2 sees it' verdict is likely an artefact of using direct annihilation channels rather than the Z' cascade, and this measurement is exactly what would expose that.",
          "feasibility": "Closest instruments: IceCube/DeepCore, whose muon-neutrino energy resolution is ~0.3 in log10(E) above 100 GeV and worse near 30 GeV, and KM3NeT/ORCA, better in the 10-100 GeV band but with far smaller effective area for a solar search. The proposal is an IceCube-Gen2 dense in-fill optimised for solar-direction reconstruction and calorimetric energy response, requiring ~2-3x better energy resolution and ~10x the solar-excess statistics of the Gen2 baseline. Dominant systematic is the atmospheric-neutrino background energy and angular model within a few degrees of the Sun, compounded by solar-absorption/regeneration modelling which itself carries ~20% uncertainty at 100 GeV.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R4", "R5", "R6", "R8", "R9", "R10", "R11", "R12", "R14", "R15", "R16", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R32", "R33", "R41", "R43", "R44", "R45", "R46", "R47", "R48", "R51"]},
            {"label": "no", "regions": ["R3", "R13", "R18", "R19", "R20", "R31", "R37", "R38", "R39", "R40", "R52"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_yes_no_no_no",
      "lit_review": {
        "name": "Dark-photon dimuon resonance search (BaBar / Belle II / LHC prompt)",
        "observable": "narrow mu+mu- resonance, 1-70 GeV, eps >~ 1e-3 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1808.10567", "arXiv:1412.0018"],
        "reasoning": "Same low-mass narrow-dimuon window (threshold eps^2 ~ 1e-6), distinct from the catalog's high-mass pp->Z'->ll recast. Seen: R12 (MZp 13.8-152, eps 0.033-0.1, eps^2 = 1e3-1e4 x threshold), R8 (MZp 14.9-36, eps 0.014-0.1, 2e2-1e4x), R19 (MZp 33.7-202, eps 0.047-0.1, 2e3-1e4x, low-mass part of the range in acceptance), R33 (MZp 3.3-4.3, eps 0.079-0.1, ~1e5x the Belle II 4-GeV threshold), R54 (MZp 2.1-2.4, eps 0.062-0.1, same order), R57 [Z2] (MZp 28.7-42, eps 0.018-0.053, 3e2-3e3x), R27 [Z2] (MZp 34-130, eps 0.013-0.044, 2e2-2e3x), R6 [Z2] (MZp 17-125, eps 2.6e-3-0.093, 7-8e3x), R49 (MZp 47.6, eps 0.011, 1.2e2x), R23 (MZp 9.82-9.92, eps 1.25e-3-9.4e-3, 1.6-90x, in Belle II's best window), plus the straddling R2 (MZp 11.6-59.4, eps 4.7e-5-0.1), R11 [Z2] (MZp 15.5-104, eps 2.5e-4-0.086, geometric mean ~20x) and R14 [Z2] (MZp 29.8-84.8, eps 3.5e-4-0.062, ~22x). Four of the five Z2-only units land on the seen side, so the split carries some Lagrangian-level power. Not seen: eps too small -- R21, R34, R36, R41, R42, R43, R46 and R3 at eps ~ 1e-6 are 1e6 x below threshold in eps^2; R5, R17, R20, R32, R35, R56 at eps <= 3e-6; R0 (<= 3.3e-5), R4 (<= 1.9e-4), R9 (geometric mean 1.7e-4), R15, R29, R44, R45, R47, R50, R55, R58 [Z2] at eps ~ 1e-5-4e-4; R28 and R40 [Z2] marginally below. Or MZp outside acceptance -- R1 (96.6-476), R16 (52.7-238), R18 (38.8-560), R22 (309.5), R24 (323-327), R39 (117), R48 (77-255), R52 (307), R53 (298.7) and the MZp = 530-570 GeV cluster R7, R10, R13, R25, R26, R30, R31, R37, R38, R51.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R2", "R6", "R8", "R11", "R12", "R14", "R19", "R23", "R27", "R33", "R49", "R54", "R57"]},
          {"label": "not seen", "regions": ["R0", "R1", "R3", "R4", "R5", "R7", "R9", "R10", "R13", "R15", "R16", "R17", "R18", "R20", "R21", "R22", "R24", "R25", "R26", "R28", "R29", "R30", "R31", "R32", "R34", "R35", "R36", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R50", "R51", "R52", "R53", "R55", "R56", "R58"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R2+R6+R8+R11+R12+R14+R19+R23+R27+R33+R49+R54+R57",
          "name": "AMS-100-class positron-endpoint spectrometer",
          "observable": "e+ excess >= 5% of measured e+ flux at 300 GeV ?",
          "reasoning": "R33 (MZp 3.3-4.3 GeV) and R54 (MZp 2.1-2.4 GeV) sit at or below the open-charm threshold, so R(s) ~ 2-3 and BR(Z'->ee)+BR(Z'->mumu) ~ 45-50%: the chi chi -> Z'Z' cascade gives a hard positron spectrum with endpoint at m_chi = 440-705 GeV, predicting an excess ~10-20% of the AMS-02 e+ flux at 300 GeV for sigma v ~ 2e-26 cm^3/s. The other eleven units have MZp = 9.8-152 GeV, where charge-weighted R(s) ~ 6.7 gives BR(e+mu) ~ 30% with the balance in jets and taus, predicting ~2-4%. Factor ~4 separation only -- marginal, and it degrades further if sigma v in the light-Z' units sits at the low end of the relic-compatible band.",
          "feasibility": "Closest instrument: AMS-02 (e+ flux at 300 GeV to ~2-3% systematics, statistics-limited above 500 GeV; leptophilic-DM reach sigma v ~ 1e-25 cm^3/s at m_chi ~ 400 GeV, a factor ~5 above what is needed). AMS-100, with ~1000x the acceptance, supplies the statistics; required improvement ~5x in effective sigma v sensitivity. Dominant systematic is the secondary-positron background from cosmic-ray propagation (currently 20-40% uncertain), which must be pinned to <5% before a 5% excess cut is meaningful.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R33", "R54"]},
            {"label": "no", "regions": ["R2", "R6", "R8", "R11", "R12", "R14", "R19", "R23", "R27", "R49", "R57"]}
          ]
        },
        {
          "attach_to": "R0+R1+R3+R4+R5+R7+R9+R10+R13+R15+R16+R17+R18+R20+R21+R22+R24+R25+R26+R28+R29+R30+R31+R32+R34+R35+R36+R37+R38+R39+R40+R41+R42+R43+R44+R45+R46+R47+R48+R50+R51+R52+R53+R55+R56+R58",
          "name": "High-resolution solar dark-matter neutrino spectrometer",
          "observable": "median E_nu of solar nu_mu excess >= 50 GeV ?",
          "reasoning": "The leaf sits on IceCube-Gen2 = YES, so a solar excess exists to spectroscope. Below MZp = 2m_D = 3.7 GeV the Z' decays only to ee, mumu, pi pi, KK, and in the solar core muons and charged pions stop before decaying, so the neutrinos emerge at E <~ 100 MeV: predicted E_med <~ 1 GeV, i.e. no above-threshold signal, for R0 (MZp 1-3.8), R4 (1.49-2.11), R5 (1.29-1.81), R9 (1-1.46), R17 (1.07-1.46), R20 (1.49-1.88), R21 (1.63-1.97), R29 (1.10-1.29), R36 (1.0), R50 (1.0). Above 3.7 GeV, prompt charm, tau and (for the MZp ~ 550 GeV cluster) W/Z/t decays give a hard spectrum whose median is capped by solar absorption at E_med ~ 50-120 GeV for m_chi = 317-710 GeV: this covers the remaining 36 units, MZp = 9.7-570 GeV. As in the sibling leaf, the ten light-MZp units are the ones whose catalog neutrino verdict is most likely an artefact of using direct annihilation channels instead of the Z' cascade.",
          "feasibility": "Closest instruments: IceCube/DeepCore (nu_mu energy resolution ~0.3 in log10 E above 100 GeV, degrading near 30 GeV) and KM3NeT/ORCA (better in 10-100 GeV, far smaller effective area for a solar search). Proposal is an IceCube-Gen2 dense in-fill optimised for solar-direction reconstruction and calorimetric response: ~2-3x better energy resolution and ~10x the Gen2 baseline solar-excess statistics. Dominant systematic is the atmospheric-neutrino energy/angular model within a few degrees of the Sun, plus ~20% solar absorption/regeneration modelling uncertainty at 100 GeV.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R1", "R3", "R7", "R10", "R13", "R15", "R16", "R18", "R22", "R24", "R25", "R26", "R28", "R30", "R31", "R32", "R34", "R35", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R51", "R52", "R53", "R55", "R56", "R58"]},
            {"label": "no", "regions": ["R0", "R4", "R5", "R9", "R17", "R20", "R21", "R29", "R36", "R50"]}
          ]
        }
      ]
    }
  ]
}
```

---

<!-- g04_leaf-nnnn.md -->

## Leaf `root_no_no_no_no` — 4170 pts, 140 units

### What the leaf is, physically

Every unit here is the same physics object: a complex scalar $\chi$ of mass $M_{\rm DM}=105\text{–}316$ GeV carrying dark charge $-1$ under a Stückelberg-massive $U(1)'$, with a *tiny* Higgs portal. The path already tells us why nothing in the catalog fires:

- $\alpha_1 \le 4.3\times10^{-3}$ in **every** unit → $\mathrm{BR}(h\to\rm inv) < 10^{-3}$ and $\sigma_{\rm SI}$ below XLZD. The Higgs portal is therefore **not** a discriminator: its range is one decade wide and identical across all 140 units.
- Since $M_{Z'} < 2M_{\rm DM}$ everywhere (max $M_{Z'}=140$ GeV vs min $2M_{\rm DM}=210$ GeV), the $Z'$ has **zero invisible width** — it is a pure visible dark photon.
- The relic density fixes the secluded channel: $\langle\sigma v\rangle(\chi\chi^*\to Z'Z')\simeq \pi\alpha'^2/M_{\rm DM}^2$. Plugging the actual ranges, $\alpha' = g'^2/4\pi$ runs from $1.2\times10^{-3}$ ($g'=0.122$, $M_{\rm DM}\sim170$) to $8.0\times10^{-3}$ ($g'=0.317$, $M_{\rm DM}\sim316$) — i.e. $\alpha'/M_{\rm DM}$ is **constant to ~30%**, giving $\langle\sigma v\rangle \approx 1\text{–}3\times10^{-26}\,{\rm cm^3/s}$ in *every single unit*. Indirect detection of any kind (dwarfs, GC, positrons, CMB) is therefore useless here: I checked and discarded it.
- Self-interaction is also dead: for the most favourable case ($M_{Z'}=1$ GeV, $\alpha'=3\times10^{-3}$, $M_{\rm DM}=200$ GeV) the Yukawa Born result is $\sigma_T/m \approx 6\times10^{-6}\,{\rm cm^2/g}$ — five orders below cluster/dwarf sensitivity. Sommerfeld is off too ($\alpha' M_{\rm DM}/M_{Z'} = 0.2\text{–}0.8 < 1$).

That leaves exactly **two** free axes that differ wildly across the leaf: the kinetic mixing $\varepsilon\in[10^{-6},0.1]$ (five decades) and $M_{Z'}\in[1,140]$ GeV (two decades). Both are read off from *one* physical object — a visible dark photon resonance — through two independent observables: its **production rate** ($\propto \varepsilon^2$) and its **proper decay length** ($c\tau \propto 1/\varepsilon^2 M_{Z'}$). This is not a catalog observable: the catalog's Z′-dilepton entry is a high-mass Drell–Yan $pp\to Z'\to\ell\ell$ recast (which is why it never appears anywhere in the tree — all $M_{Z'}$ here are 1–140 GeV, below its reach), whereas a low-mass inclusive dimuon spectroscopy search is a different analysis with different backgrounds and a completely different sensitivity envelope.

### Level 1 — LHCb/BaBar prompt dimuon dark-photon search

Cut: a narrow $\mu^+\mu^-$ resonance anywhere in $m=1\text{–}70$ GeV at $\varepsilon\ge 2\times10^{-3}$ (i.e. $\varepsilon^2\ge 4\times10^{-6}$), which is approximately LHCb's published prompt-like inclusive dimuon reach across that mass range (arXiv:1910.06926), complemented below 10.2 GeV by BaBar's $e^+e^-\to\gamma A'$ (arXiv:1406.2980).

Assigning each unit by the geometric mean of its $\varepsilon$ interval:

- **Seen (55 units)** — $\bar\varepsilon$ from $2.6\times10^{-3}$ (R22, R72) up to $0.1$ (R0, R18, R39–R42, R52, R82, R90, R97, R98, R114, R123, R134). At $\varepsilon=0.1$, $\varepsilon^2=10^{-2}$ is ~3–4 orders above the LHCb boundary: these are not marginal, they are enormous signals. Representative predictions: R0 → $m(A')=1.0\text{–}1.2$ GeV, $\varepsilon^2=10^{-2}$; R47 → $m(A')=38\text{–}100$ GeV, $\varepsilon^2\sim 2\times10^{-3}$; R73 (Z2) → $m(A')=13\text{–}20$ GeV, $\varepsilon^2\sim6\times10^{-4}$.
- **Not seen (85 units)** — $\bar\varepsilon$ from $10^{-6}$ (R19, R24, R50, R55, R59, R85, R86, R96, R99, R117) to $\sim1.8\times10^{-3}$ (R91), i.e. $\varepsilon^2 \le 3\times10^{-6}$, at or below the boundary and in most cases $10^{-12}$ — hopeless by 6 orders.

**Honest caveats.** Five units straddle the cut because their $\varepsilon$ intervals span the full scan range: R1 ($10^{-6}$–0.1), R2, R3, R4, R6. I assign them by geometric mean (R1, R2, R3 → not seen; R4, R6 → seen), but a fraction of their points will land on the other side. Three more are within a factor 1.5 of the cut and could flip: R16 ($1.5\times10^{-3}$), R91 ($1.8\times10^{-3}$), R94 ($1.5\times10^{-3}$) — all placed "not seen". Also, LHCb's prompt reach degrades sharply in the $\rho/\omega/\phi$ band ($0.7\text{–}1.1$ GeV) and under the $J/\psi$, $\psi(2S)$, $\Upsilon$ vetoes; that is precisely the mass window occupied by many of the "seen" units, and it is the reason node 2b below is not redundant with node 1.

### Level 2a (novel) — displaced $A'$ vertex, for the 85 invisible-at-LHCb units

Within the low-$\varepsilon$ group, $\varepsilon$ alone no longer helps (rate $\propto\varepsilon^2 \sim 10^{-12}$), but the *lifetime* grows as $1/\varepsilon^2$ and becomes macroscopic. Using $\Gamma(A'\to{\rm all}) = \varepsilon^2 m_{A'}\,R/411$ with $R\simeq3$:

$$c\tau \;\simeq\; \frac{2.7\times10^{-12}\,{\rm cm}}{\varepsilon^2\, m_{A'}[{\rm GeV}]}$$

Cut at $c\tau \ge 100\,\mu$m ($\varepsilon^2 m_{A'} \le 2.7\times10^{-10}$). Predicted values:

- **Long-lived, 32 units**: R85/R86/R96/R99/R117 ($\varepsilon=10^{-6}$, $m_{A'}=1$ GeV) → $c\tau = 2.7$ cm; R30/R50/R55/R93/R119 → $c\tau\approx2.2\text{–}2.7$ cm; R110/R111/R108/R109 → $c\tau=0.3\text{–}1$ cm; R12 ($\varepsilon=1.4\times10^{-6}$, $m_{A'}=96.7$ GeV) → $c\tau=142\,\mu$m; R5 → $470\,\mu$m; R137 → $108\,\mu$m.
- **Still prompt, 53 units**: R9 ($25\,\mu$m), R61 ($68\,\mu$m), R135 ($60\,\mu$m), R125 ($90\,\mu$m), down to R3 ($3\times10^{-7}$ cm) and R91/R89/R75 ($<10^{-8}$ cm).

Borderline (within a factor 2 of the cut, could flip): R13 ($87\,\mu$m), R125 ($90\,\mu$m), R61, R132, R135. I place all of these "prompt".

**Feasibility, stated bluntly.** The $m_{A'}\lesssim2$ GeV corner of the long-lived set (R30, R50, R55, R85, R86, R93, R96, R99, R110, R117, R119, and marginally R108/R109/R111 — ~14 of the 32) is squarely inside the approved SHiP reach at the CERN SPS Beam Dump Facility, which projects $\varepsilon^2$ down to $\sim10^{-16}$ for $m_{A'}<2$ GeV with $2\times10^{20}$ POT — that part is already funded physics. The rest of the cut is not: reaching $\varepsilon\sim10^{-6}$ at $m_{A'}=10\text{–}130$ GeV requires collider production at $\varepsilon^2\sim10^{-12}$, roughly $10^{3}\text{–}10^{4}$ beyond the LHCb VELO displaced $A'\to\mu\mu$ search (which reaches $\varepsilon^2\sim10^{-8}$ and only below ~0.7 GeV). Because the *stated cut* spans the whole mass range, the rating is **speculative**; the dominant systematic is displaced heavy-flavour and VELO material-interaction background.

### Level 2b (novel) — radiative-return $A'$ scan, for the 55 seen units

The 55 "seen" units still span $m_{A'}=1$ GeV to 125 GeV. A photon-tagged $e^+e^-\to\gamma A'$ scan at $\sqrt s=10.58$ GeV, with $A'\to\ell\ell$ *and* hadrons, covers $m_{A'}\le10$ GeV with a recoil-mass resolution of ~10 MeV and essentially no continuum background at 1 GeV — exactly where LHCb's inclusive dimuon search is blinded by the $\rho/\omega/\phi$ complex. It is therefore a genuine, non-redundant second measurement, not merely "read the mass off node 1".

- **$m_{A'}\le10$ GeV, 24 units**: R0/R18/R39–R42/R123 ($m_{A'}=1.21$ GeV), R20/R62/R79/R80/R97/R98 ($m_{A'}=1.0$ GeV), R130 (4.4–5.2), R134 (4.8–8.4), R139 (4.3–7.3, Z2), R6 (1–25, gm 5.1), R25 (3.2–14), R35 (3.8–16), R65 (5.3–9.0), R11 (5.2–10.7), R101 (7.2–11.4), R102 (7.1), R124 (6.1–12.5). Signal rate at $\varepsilon=0.1$: $\sigma(e^+e^-\to\gamma A')\approx\varepsilon^2\cdot\sigma_{\rm QED}$, i.e. tens of fb — a several-thousand-event peak in 50 ab$^{-1}$.
- **$m_{A'}>10$ GeV, 31 units**: kinematically inaccessible at a B-factory; zero events regardless of $\varepsilon$. Examples: R82 (104–125 GeV), R90 (60–126), R72 (40–105), R47 (38–100), R14 (27–89), R44/R73 (Z2, 10–25 GeV).

Marginal (gm within 25% of 10 GeV, could flip): R103 (9.75–12.4), R114 (6.8–16.1), R101 (7.2–11.4). Feasibility: Belle II is funded to 50 ab$^{-1}$ and already reaches $\varepsilon\sim5\times10^{-4}$ for $m_{A'}<10$ GeV in $\gamma\ell\ell$; extending to hadronic $A'$ decays over the full 1–10 GeV band at $\varepsilon\ge2\times10^{-3}$ needs $\lesssim2\times$ → **possible**. Dominant systematic: photon-energy scale and $e^+e^-\to\gamma\,{\rm hadrons}$ continuum modelling near the $\phi$ and $J/\psi$.

### Documented limitation (loud)

**Nothing proposed here — or anywhere — separates `CsSg_U1p[+]_DM.Z2` from `CsSg_U1p[+]_DM.Z2+3+4+5`.** The five Z2 units (R44, R45, R73, R138, R139) differ from their Z_N siblings only by the presence of $\alpha_3\,s_i s_r^3$ and $\alpha_5\,s_i^3 s_r$. With no dark-Higgs vev these are pure quartic DM self-interactions: they generate no mass splitting, no vertex with any SM field, and contribute only to $2\to2$ DM–DM scattering, which I showed above sits at $\sigma_T/m\sim10^{-5}\,{\rm cm^2/g}$ — unobservable. R44 and R73 land in "seen / heavy $A'$", R139 in "seen / light $A'$", R45 and R138 in "not seen / prompt", each pooled with dozens of Z_N units they are physically indistinguishable from. This is a genuine degeneracy of the physics, not a failure of the proposed measurements.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_no",
      "lit_review": {
        "name": "LHCb/BaBar prompt dimuon dark-photon search",
        "observable": "narrow mu+mu- resonance, m(A') = 1-70 GeV, eps >= 2e-3 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1406.2980"],
        "reasoning": "All 140 units share a visible-only dark photon (M_Zp < 2 M_DM everywhere, so zero invisible width) and a relic-fixed alpha'/M_DM, which makes <sigma v>(chi chi* -> Z'Z') = 1-3e-26 cm^3/s in every unit and kills indirect detection as a discriminator; alpha1 <= 4.3e-3 everywhere kills the Higgs portal too. The only axis that varies is the kinetic mixing, over five decades: eps = 1e-6 to 0.1. Prompt A' production scales as eps^2, so LHCb's inclusive dimuon reach (eps^2 ~ 4e-6 over 1-70 GeV) cuts the leaf almost in half. Seen: 55 units with geometric-mean eps from 2.6e-3 (R22, R72) to 0.1 (R0, R18, R39-R42, R52, R82, R90, R97, R98, R114, R123, R134), i.e. eps^2 up to 1e-2, three to four orders above threshold. Not seen: 85 units with eps^2 <= 3e-6 and typically ~1e-12 (R19, R24, R50, R55, R59, R85, R86, R96, R99, R117 all at eps = 1e-6). Caveats: R1, R2, R3, R4, R6 have eps intervals spanning the full scan range and are assigned by geometric mean, so a fraction of their points flips; R16, R91, R94 sit within 1.5x of the cut and are placed 'not seen'. LHCb also loses reach in the rho/omega/phi band and under quarkonium vetoes, which is exactly why node 2b is not redundant. This is NOT the catalog's Z'-dilepton observable, which is a high-mass Drell-Yan pp->Z'->ll recast and never fires anywhere in this tree because every M_Zp here is 1-140 GeV.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0","R4","R6","R7","R8","R11","R14","R18","R20","R22","R23","R25","R26","R29","R31","R32","R35","R39","R40","R41","R42","R44","R47","R52","R56","R57","R58","R60","R62","R63","R64","R65","R72","R73","R79","R80","R82","R83","R90","R97","R98","R101","R102","R103","R105","R107","R113","R114","R120","R123","R124","R127","R130","R134","R139"]},
          {"label": "not seen", "regions": ["R1","R2","R3","R5","R9","R10","R12","R13","R15","R16","R17","R19","R21","R24","R27","R28","R30","R33","R34","R36","R37","R38","R43","R45","R46","R48","R49","R50","R51","R53","R54","R55","R59","R61","R66","R67","R68","R69","R70","R71","R74","R75","R76","R77","R78","R81","R84","R85","R86","R87","R88","R89","R91","R92","R93","R94","R95","R96","R99","R100","R104","R106","R108","R109","R110","R111","R112","R115","R116","R117","R118","R119","R121","R122","R125","R126","R128","R129","R131","R132","R133","R135","R136","R137","R138"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R3+R5+R9+R10+R12+R13+R15+R16+R17+R19+R21+R24+R27+R28+R30+R33+R34+R36+R37+R38+R43+R45+R46+R48+R49+R50+R51+R53+R54+R55+R59+R61+R66+R67+R68+R69+R70+R71+R74+R75+R76+R77+R78+R81+R84+R85+R86+R87+R88+R89+R91+R92+R93+R94+R95+R96+R99+R100+R104+R106+R108+R109+R110+R111+R112+R115+R116+R117+R118+R119+R121+R122+R125+R126+R128+R129+R131+R132+R133+R135+R136+R137+R138",
          "name": "Next-generation displaced dark-photon vertex search",
          "observable": "A' proper decay length ctau >= 100 um ?",
          "reasoning": "Below the prompt-search threshold the production rate is dead (eps^2 ~ 1e-12) but the lifetime is not: ctau = 2.7e-12 cm / (eps^2 m_A'[GeV]) using Gamma = eps^2 m_A' R/411 with R ~ 3. The cut ctau >= 100 um is eps^2 m_A' <= 2.7e-10. Long-lived (32 units): R85, R86, R96, R99, R117 (eps = 1e-6, m_A' = 1 GeV) give ctau = 2.7 cm; R30, R50, R55, R93, R119 give 2.2-2.7 cm; R108, R109, R110, R111 give 0.3-1 cm; R12 (eps = 1.4e-6, m_A' = 96.7 GeV) gives 142 um; R5 gives 470 um; R137 gives 108 um. Still prompt (53 units): R9 (25 um), R61 (68 um), R135 (60 um), R125 (90 um), falling to 3e-7 cm for R3 and below 1e-8 cm for R75, R89, R91. Borderline within a factor 2 and placed 'prompt': R13 (87 um), R125, R61, R132, R135. The discriminant is physically eps^2 * M_Zp, an axis orthogonal to the level-1 rate cut.",
          "feasibility": "Closest approved instrument: SHiP at the CERN SPS Beam Dump Facility, projecting eps^2 down to ~1e-16 for m_A' < 2 GeV at 2e20 POT - that already covers ~14 of the 32 long-lived units (the m_A' ~ 1 GeV ones: R30, R50, R55, R85, R86, R93, R96, R99, R110, R117, R119, marginally R108, R109, R111). The rest of the stated cut is not covered: reaching eps ~ 1e-6 at m_A' = 10-130 GeV means collider production at eps^2 ~ 1e-12, about 1e3-1e4 beyond the LHCb VELO displaced A'->mu mu search (eps^2 ~ 1e-8, and only below ~0.7 GeV). Because the cut as written spans the full mass range, the honest rating is speculative even though its light-mass corner is funded. Dominant systematic: displaced heavy-flavour dimuons and VELO material-interaction vertices.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "long-lived", "regions": ["R5","R12","R17","R19","R24","R27","R28","R30","R50","R55","R59","R67","R68","R69","R71","R85","R86","R93","R95","R96","R99","R108","R109","R110","R111","R112","R115","R117","R119","R129","R136","R137"]},
            {"label": "prompt", "regions": ["R1","R2","R3","R9","R10","R13","R15","R16","R21","R33","R34","R36","R37","R38","R43","R45","R46","R48","R49","R51","R53","R54","R61","R66","R70","R74","R75","R76","R77","R78","R81","R84","R87","R88","R89","R91","R92","R94","R100","R104","R106","R116","R118","R121","R122","R125","R126","R128","R131","R132","R133","R135","R138"]}
          ]
        },
        {
          "attach_to": "R0+R4+R6+R7+R8+R11+R14+R18+R20+R22+R23+R25+R26+R29+R31+R32+R35+R39+R40+R41+R42+R44+R47+R52+R56+R57+R58+R60+R62+R63+R64+R65+R72+R73+R79+R80+R82+R83+R90+R97+R98+R101+R102+R103+R105+R107+R113+R114+R120+R123+R124+R127+R130+R134+R139",
          "name": "Belle-II-class radiative-return A' mass scan",
          "observable": "e+e- -> gamma A' peak with m(A') <= 10 GeV ?",
          "reasoning": "The 55 prompt-visible units still span m_A' = 1 to 125 GeV. A photon-tagged scan at sqrt(s) = 10.58 GeV with A' -> leptons AND hadrons has ~10 MeV recoil-mass resolution and negligible continuum at 1 GeV, precisely where the hadron-collider dimuon search is blinded by the rho/omega/phi complex - so this is an independent measurement, not a re-read of node 1. Accessible (24 units): R0, R18, R39-R42, R123 at m_A' = 1.21 GeV; R20, R62, R79, R80, R97, R98 at 1.0 GeV; R130 (4.4-5.2), R134 (4.8-8.4), R139 (4.3-7.3, Z2), R6 (gm 5.1), R25 (3.2-14), R35 (3.8-16), R65 (5.3-9.0), R11 (5.2-10.7), R101 (7.2-11.4), R102 (7.1), R124 (6.1-12.5). At eps = 0.1 the rate is eps^2 times the QED radiative-return cross section, tens of fb, i.e. thousands of peak events in 50 ab^-1. Inaccessible (31 units): kinematically zero regardless of eps - R82 (104-125 GeV), R90 (60-126), R72 (40-105), R47 (38-100), R14 (27-89), R44 and R73 (Z2, 10-25 GeV). Marginal and could flip: R103 (9.75-12.4), R114 (6.8-16.1), R101 (7.2-11.4).",
          "feasibility": "Closest instrument: Belle II, funded to 50 ab^-1, already reaching eps ~ 5e-4 for m_A' < 10 GeV in e+e- -> gamma l+l-. Covering the full 1-10 GeV band including hadronic A' decays at eps >= 2e-3 needs at most ~2x beyond the approved programme. Dominant systematic: photon energy-scale calibration and e+e- -> gamma hadrons continuum modelling near the phi and J/psi.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "light A'", "regions": ["R0","R6","R11","R18","R20","R25","R35","R39","R40","R41","R42","R62","R65","R79","R80","R97","R98","R101","R102","R123","R124","R130","R134","R139"]},
            {"label": "heavy A'", "regions": ["R4","R7","R8","R14","R22","R23","R26","R29","R31","R32","R44","R47","R52","R56","R57","R58","R60","R63","R64","R72","R73","R82","R83","R90","R103","R105","R107","R113","R114","R120","R127"]}
          ]
        }
      ]
    }
  ]
}
```

---

<!-- g05_pair-yyny.md -->

## Reasoning — leaf `root_yes_yes_no_yes_no` (3086 pts, 52 units)

### 1. What the catalog has already used up, and what it is structurally blind to

All 52 units are the same Lagrangian family (complex scalar singlet with a Higgs portal `alpha1` plus a dark U(1)′ with mass `MZp`, dark gauge coupling `gU1p`, and kinetic mixing `epsilon`). The path to this leaf pins the DM mass to **321–710 GeV** and the portal coupling to the XLZD band.

Two systematics are worth stating before choosing an observable, because they explain *why* the tree stalled:

- **`alpha1` is locked to `MDM`.** Across every unit, `alpha1 ≈ MDM[GeV]/(1.4–2.1)×10⁴` (R0: 415/0.0198 → 710/0.0501; R2: 587/0.0301 → 695/0.0468; R14: 699/0.0373 → 709/0.0478). That is exactly the locus σ_SI ∝ α₁²/M_DM² = const, i.e. the "1–10× XLZD" band the path already demanded. Consequently **every Higgs-portal observable — σ_SI on any target, BR(h→inv), the loop-corrected hhh coupling — is a function of one number that the path has already measured.** Δλ_hhh/λ_SM ~ (1 − M₀²/M_S²)³ ≈ 2×10⁻⁷ here (α₁v²/2 ≈ 1.5×10³ GeV² vs M_DM² ≈ 3×10⁵ GeV²), so di-Higgs is dead too.
- **`gU1p` has a hard attractor at 0.4309** (R2, R10, R11, R19, R22, R31, R41–R46). α_D = g²/4π = 0.0148, and π α_D²/M_DM² at M_DM ≈ 650 GeV gives ⟨σv⟩ ≈ 2.6×10⁻²⁶ cm³/s — the thermal value. These are the *secluded* units where χχ* → Z′Z′ sets the relic. The M_Z′ ≈ 1 GeV units instead sit at g ≈ 0.018–0.029 (α_D ≈ 3×10⁻⁵) with large dark quartics α₃–α₅ ~ O(1–10): a scalar-sector, not gauge-sector, freeze-out.

So the *only* free axis the entire catalog never touches is the **vector portal (`epsilon`, `MZp`)**. That is where the split has to come from.

**Discriminators I checked and rejected as honestly too weak (stated so the record is complete):**
- *Self-interaction (cluster/dwarf σ/m).* σ_T = 4πα_D²M_DM²/M_Z′⁴. Worst case (R6: α_D = 4×10⁻⁵, M_DM = 500 GeV, M_Z′ = 1 GeV) gives σ_T ≈ 5×10⁻³ GeV⁻² = 2×10⁻³⁰ cm², i.e. **σ/m ≈ 2×10⁻⁹ cm²/g** — nine orders below the ~1 cm²/g Bullet-Cluster bound. Useless.
- *CMB energy injection.* f_eff⟨σv⟩/m ≈ 0.2×2.6×10⁻²⁶/650 ≈ 8×10⁻³⁰ cm³ s⁻¹ GeV⁻¹ vs Planck p_ann < 3.2×10⁻²⁸. A factor 40 short, and CMB-S4 gains only ~2–3×. Sommerfeld would rescue it only if ε_φ = M_Z′/(α_D M_DM) ≲ 1, but the g–M_Z′ correlation keeps ε_φ ≈ 20–100 in the light-Z′ units and 4–22 in the g = 0.4309 units. Only R7 (α_D = 4.1, ε_φ = 0.44) would be enhanced — and its g = 7.2 is non-perturbative, so I do not build a split on it.
- *AMS-02 antiprotons.* The M_Z′ < 2m_p ≈ 1.88 GeV units (R6, R8, R12, R20, R24, R25, R32–R35, R47–R50) genuinely produce **zero** antiprotons while the M_Z′ ≳ 2 GeV secluded units produce O(1)/annihilation — beautiful physics, but at M_DM ≈ 600 GeV and thermal ⟨σv⟩ the AMS-02 limit is ~1×10⁻²⁵ cm³/s, so *neither* side is detectable. The path already told us CTA(WW) is silent; antiprotons are weaker still.

### 2. Level 1 — Z-pole electroweak fit to kinetic mixing

Kinetic mixing induces Z–Z′ mixing, which shifts the Z's couplings to fermions and hence the measured leptonic effective weak mixing angle. Over 1 GeV ≲ M_Z′ ≲ ½m_Z the shift is approximately **Δsin²θ_eff ≈ 0.2 ε²**, with an O(1) mass-dependent coefficient that grows near m_Z and decouples as m_Z²/M_Z′² well above it. The LEP+SLD combination gives sin²θ_eff^lept = 0.23153 ± 0.00016, so a **1σ cut is |Δsin²θ_eff| ≥ 1.6×10⁻⁴, i.e. ε ≳ 0.03** — which reproduces the standard EW-fit dark-photon bound.

Predicted shifts:

| unit | ε | Δsin²θ_eff | |
|---|---|---|---|
| R18, R36, R38, R39 | 0.1 (pinned) | 2.0×10⁻³ | 12σ — **yes** |
| R37 | 0.078–0.1 | 1.2–2.0×10⁻³ | **yes** |
| R51 | 0.054–0.1 | 5.8×10⁻⁴–2.0×10⁻³ | **yes** |
| R4 | 0.037–0.1 | 2.7×10⁻⁴–2.0×10⁻³ | **yes** (whole range above cut) |
| R16 | 0.019–0.1 | 7.2×10⁻⁵–2.0×10⁻³ | **yes**, log-median ε = 0.044 → 3.9×10⁻⁴ (straddles; ~2/3 of its volume above) |
| R14, R15 | 0.013–0.051 | 3.4×10⁻⁵–5.2×10⁻⁴ | log-median 0.025 → 1.3×10⁻⁴, just below → **no** (closest miss) |
| R6 | 0.0041–0.1 | 3.4×10⁻⁶–2.0×10⁻³ | log-median 0.020 → 8×10⁻⁵ → **no** (straddles; also note R6 at M_Z′ = 1.000 GeV is where the EW effect is weakest) |
| R21 | 0.0071–0.029 | 1.0×10⁻⁵–1.7×10⁻⁴ | **no** (marginal) |
| R7 | 0.068, M_Z′ = 986 GeV | 7.9×10⁻⁶ (decoupled by m_Z²/M_Z′²) | **no** — heavy Z′ evades the fit; LEP-II contact scale M_Z′/(εe) ≈ 47 TeV is far beyond reach |
| all others | ε ≤ 9×10⁻³, mostly ≤ 5×10⁻⁵ | ≤ 1.6×10⁻⁵, typically ≤ 5×10⁻¹⁰ | **no** |

**Result: 8 units separated (R4, R16, R18, R36, R37, R38, R39, R51; 152 pts) from the remaining 44.** This is a genuine split and it is orthogonal to everything on the path, but it is honest to say it resolves ~5% of the leaf's points: the leaf is dominated by R0/R1/R2/R3 (1975 pts) whose ε priors are either flat over five decades or pinned at ~10⁻⁶.

### 3. Level 2a — the 44 low-/broad-ε units: a Tera-Z dark-photon program

The natural next rung in ε is a Z factory. Dark-photon strahlung off the Z decay products gives BR(Z → A′ f f̄, A′→visible) ≈ ε² × O(10⁻²), so **BR ≥ 10⁻¹² ⟺ ε ≳ 10⁻⁵** — two orders below the EW fit. Crucially the observable is *zero by kinematics* for M_Z′ ≳ 85 GeV, which is itself discriminating: it separates the heavy-mediator units regardless of ε.

- **Signal (BR ≥ 10⁻¹²):** R0 (ε log-median 3×10⁻⁴, M_Z′ 1.5–37 GeV → BR ~ 10⁻⁹), R1 (3×10⁻⁴, M_Z′ median 52 GeV), R5 (ε 4×10⁻⁵–9×10⁻³ → BR up to 9×10⁻⁷), R6 (ε ≥ 4×10⁻³ → BR ≥ 1.7×10⁻⁷), R21 (7×10⁻³–0.029), R19 (1.3–2.7×10⁻³), R26 (2.9×10⁻⁴–2.4×10⁻³), R27 (1.4–3.5×10⁻³, M_Z′ = 9.85 GeV), R33 (2×10⁻⁴), R9, R11, R22, R31, R32, R42, R43, R44, R49 (ε 1.2×10⁻⁵–1.2×10⁻⁴ → BR 1.4×10⁻¹²–1.4×10⁻¹⁰), and marginally R8, R13 (log-median ε ≈ 1.1×10⁻⁵, right at the cut). **20 units.**
- **No signal:** the 
ε ≈ 10⁻⁶ floor units (R3, R10, R12, R17, R20, R23, R24, R25, R28, R29, R30, R34, R35, R40, R41, R45, R46, R47, R48, R50 — BR ≤ 10⁻¹⁴), plus R2 (ε ≤ 4.8×10⁻⁵ but M_Z′ log-median 94 GeV), and the three kinematically-closed units **R7 (M_Z′ = 986 GeV), R14 and R15 (M_Z′ ≈ 560 GeV)** — these three carry large ε (0.013–0.068) yet give exactly zero rate at √s = 91 GeV, which is a real, falsifiable statement, not a fudge. **24 units.**

R7's dark coupling gU1p = 7.2 (α_D = 4.1) makes it physically unique among all 52, but no existing *or* proposed instrument measures a dark-sector self-coupling for a 986 GeV mediator that couples to the SM only through ε = 0.068; it therefore sits in the null bin and stays degenerate with R14/R15 and the ε-floor units. That is the honest outcome.

### 4. Level 2b — the 8 EW-flagged units: sub-10⁻¹⁰ muon g−2

Once the EW fit has established ε ≳ 0.03, a second observable with a *different* power of M_Z′ pins the mediator mass. The dark-photon one-loop contribution is exactly

Δa_μ = (α/2π) ε² · 2m_μ²/(3M_Z′²) = 8.7×10⁻⁶ · ε²/M_Z′²[GeV²]

which scales as ε²/M_Z′², whereas the Z-pole shift scales as ε² alone. Cutting at |Δa_μ| ≥ 10⁻¹⁰:

| unit | ε | M_Z′ [GeV] | Δa_μ | |
|---|---|---|---|---|
| R51 | 0.054–0.1 | 2.57–2.87 | 3.1×10⁻⁹ – 1.3×10⁻⁸ | **yes** |
| R37 | 0.078–0.1 | 12.2–14.5 | 2.5×10⁻¹⁰ – 5.8×10⁻¹⁰ | **yes** |
| R39 | 0.1 | 19.8–21.6 | 1.9×10⁻¹⁰ – 2.2×10⁻¹⁰ | **yes** |
| R38 | 0.1 | 20.5–21.0 | 2.0×10⁻¹⁰ – 2.1×10⁻¹⁰ | **yes** |
| R18 | 0.1 | 21.1–24.5 | 1.5×10⁻¹⁰ – 2.0×10⁻¹⁰ | **yes** |
| R36 | 0.1 | 35.0–46.6 | 4.0×10⁻¹¹ – 7.1×10⁻¹¹ | **no** |
| R4 | 0.037–0.1 | 17.7–41.9 | median 4.2×10⁻¹¹ (range 6.6×10⁻¹² – 2.8×10⁻¹⁰) | **no** (straddles at the top) |
| R16 | 0.019–0.1 | 23.4–40.7 | median 1.7×10⁻¹¹ | **no** |

R18, R38 and R39 all sit at ε = 0.1, M_Z′ ≈ 20–24 GeV and are predicted to be identical in **both** observables — they remain mutually degenerate, and nothing I can construct separates them, since their only distinguishing parameters are the dark quartics α₂–α₆, whose largest observable consequence (σ/m ≈ 10⁻¹² cm²/g) is unmeasurable.

**Net:** 52 units → 4 resolved groups (R51/R37/R39/R38/R18 · R4/R16/R36 · 20-unit Tera-Z-signal · 24-unit Tera-Z-null), i.e. the leaf's 3086 points are cut into blocks of ~15 / ~137 / ~2100 / ~840. The two largest units (R0, R1; 1592 pts) survive only into the Tera-Z-signal bin because their ε priors are unconstrained across five decades — that is a property of the scan, not of the physics, and it caps what any ε-based probe can do here.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_no_yes_no",
      "lit_review": {
        "name": "LEP/SLD Z-pole electroweak fit to dark-photon kinetic mixing",
        "observable": "|Delta sin^2(theta_eff^lept)| >= 1.6e-4 ?",
        "refs": ["arXiv:1006.0973", "arXiv:1412.0018"],
        "reasoning": "The path has already fixed the Higgs portal: alpha1 = MDM/(1.4-2.1)e4 across every unit, which is exactly the sigma_SI = const x MDM^2 locus the '1-10x XLZD' branch demands. So every Higgs-portal observable (any DD target, BR(h->inv), and the loop hhh shift, which is only 2e-7 here since alpha1*v^2/2 = 1.5e3 GeV^2 << MDM^2 = 3e5 GeV^2) is a function of one number the tree already measured. The only untouched axis is the vector portal (epsilon, MZp). Z-Z' mixing from kinetic mixing shifts the Z couplings by Delta sin^2(theta_eff) ~ 0.2*epsilon^2 (O(1) mass-dependent coefficient, growing near m_Z, decoupling as m_Z^2/MZp^2 above it); LEP+SLD give sin^2(theta_eff) = 0.23153 +- 0.00016, so 1.6e-4 is a 1-sigma cut, i.e. epsilon >~ 0.03. Predicted: R18/R36/R38/R39 (epsilon pinned at 0.1) 2.0e-3 = 12 sigma; R37 (0.078-0.1) 1.2-2.0e-3; R51 (0.054-0.1) 5.8e-4-2.0e-3; R4 (0.0366-0.1) 2.7e-4-2.0e-3, entire range above cut; R16 (0.019-0.1) log-median 0.044 -> 3.9e-4, straddles with ~2/3 of its volume above. Below: R14/R15 (log-median 0.025 -> 1.3e-4, the closest miss), R6 (0.0041-0.1, log-median 0.020 -> 8e-5, and MZp = 1.000 GeV is where the EW effect is weakest), R21 (<=0.029 -> <=1.7e-4), R7 (epsilon 0.068 but MZp = 986 GeV, decoupled to 7.9e-6; its LEP-II contact scale MZp/(e*epsilon) = 47 TeV is far out of reach), and the remaining 35 units with epsilon <= 9e-3 and typically ~1e-6, giving <= 1.6e-5 and usually <= 5e-10. Rejected alternatives, for the record: self-interaction sigma/m <= 2e-9 cm^2/g (nine orders below the ~1 cm^2/g cluster bound, since sigma_T = 4*pi*alpha_D^2*MDM^2/MZp^4 with alpha_D <= 0.015); CMB p_ann ~ 8e-30 vs Planck 3.2e-28, with no Sommerfeld rescue because the g-MZp correlation keeps MZp/(alpha_D*MDM) = 4-100 everywhere except the non-perturbative R7; and AMS-02 antiprotons, where the MZp < 2m_p = 1.88 GeV units (R6, R8, R12, R20, R24, R25, R32-R35, R47-R50) genuinely make zero antiprotons while the secluded gU1p = 0.4309 units make O(1) each, but at MDM ~ 600 GeV and thermal <sigma v> = 2.6e-26 cm^3/s neither side clears the ~1e-25 AMS-02 limit. This split resolves 8 units / 152 pts; the leaf's bulk (R0, R1, R2, R3 = 1975 pts) has epsilon either flat over five decades or pinned at the 1e-6 floor, which caps what any epsilon-based probe can do.",
        "status": "Splits!",
        "outcomes": [
          {"label": "shift seen", "regions": ["R4", "R16", "R18", "R36", "R37", "R38", "R39", "R51"]},
          {"label": "no shift", "regions": ["R0", "R1", "R2", "R3", "R5", "R6", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R17", "R19", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R34", "R35", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R5+R6+R7+R8+R9+R10+R11+R12+R13+R14+R15+R17+R19+R20+R21+R22+R23+R24+R25+R26+R27+R28+R29+R30+R31+R32+R33+R34+R35+R40+R41+R42+R43+R44+R45+R46+R47+R48+R49+R50",
          "name": "Tera-Z dark-photon program: 10^13 Z, prompt plus displaced tag",
          "observable": "BR(Z -> A' f fbar, A' -> visible) >= 1e-12 ?",
          "reasoning": "Dark-photon strahlung off the Z decay products has BR(Z -> A' f fbar) ~ epsilon^2 x O(1e-2), so the 1e-12 cut is epsilon ~ 1e-5, two decades below the Z-pole fit, and it is identically zero for MZp >~ 85 GeV. That double handle is what separates this group. Signal side (20 units): R0 (epsilon log-median 3e-4, MZp 1.5-37 GeV -> BR ~ 1e-9), R1 (3e-4, MZp median 52 GeV), R5 (epsilon 4.2e-5-9.4e-3 -> BR up to 9e-7), R6 (epsilon >= 4.1e-3 -> BR >= 1.7e-7), R21 (7.1e-3-0.029), R19 (1.3-2.7e-3), R26 (2.9e-4-2.4e-3), R27 (1.4-3.5e-3 at MZp = 9.85 GeV), R33 (2.0e-4), and R9/R11/R22/R31/R32/R42/R43/R44/R49 (epsilon 1.2e-5-1.2e-4 -> BR 1.4e-12 to 1.4e-10); R8 and R13 sit right at the cut (log-median epsilon 1.1e-5) and are the marginal entries. Null side (24 units): the epsilon = 1e-6 floor units R3, R10, R12, R17, R20, R23, R24, R25, R28, R29, R30, R34, R35, R40, R41, R45, R46, R47, R48, R50 all give BR <= 1e-14; R2 has epsilon <= 4.8e-5 but MZp log-median 94 GeV; and R7 (MZp = 986 GeV), R14 and R15 (MZp = 556-575 GeV) carry large epsilon (0.013-0.068) yet are kinematically closed at sqrt(s) = 91 GeV, so their null is a statement about the mediator mass, not about epsilon. R7 is physically unique in the whole leaf (gU1p = 7.2, alpha_D = 4.1, the only mediator heavier than the DM), but nothing existing or proposed measures a dark-sector self-coupling for a 986 GeV mediator that reaches the SM only through epsilon, so it stays degenerate with R14/R15 and the epsilon-floor units.",
          "feasibility": "Closest instrument: FCC-ee / CEPC Tera-Z (~5e12 Z). Published dark-photon reach from Z -> A' f fbar is epsilon ~ 3e-5 in the prompt channel for m_A' = 1-50 GeV, i.e. ~5 events at epsilon = 1e-5 in 5e12 Z. Reaching a discovery-grade 1e-12 branching ratio needs a ~10x larger Z sample or a background-free displaced tag; at epsilon = 1e-5 and MZp = 1 GeV the decay length is ctau ~ 200 um (well inside vertex-detector reach), but the decay is prompt for MZp > 20 GeV, so the heavier signal units need the prompt channel and the full 10x. Dominant systematic: the irreducible Z -> 4f continuum, and above ~20 GeV the ~5 GeV dijet mass resolution, which smears the resonance into the continuum.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R1", "R5", "R6", "R8", "R9", "R11", "R13", "R19", "R21", "R22", "R26", "R27", "R31", "R32", "R33", "R42", "R43", "R44", "R49"]},
            {"label": "not seen", "regions": ["R2", "R3", "R7", "R10", "R12", "R14", "R15", "R17", "R20", "R23", "R24", "R25", "R28", "R29", "R30", "R34", "R35", "R40", "R41", "R45", "R46", "R47", "R48", "R50"]}
          ]
        },
        {
          "attach_to": "R16+R18+R36+R37+R38+R39+R4+R51",
          "name": "Sub-1e-10 muon g-2: J-PARC E34 plus a space-like HVP measurement",
          "observable": "|delta a_mu| >= 1e-10 ?",
          "reasoning": "The Z-pole fit measures epsilon^2; the dark-photon g-2 loop measures epsilon^2/MZp^2, delta a_mu = (alpha/2pi)*epsilon^2*2m_mu^2/(3 MZp^2) = 8.7e-6 * epsilon^2 / MZp^2[GeV^2]. The different power of MZp is what pins the mediator mass once epsilon is known. Predictions: R51 (epsilon 0.054-0.1, MZp 2.57-2.87 GeV) 3.1e-9 to 1.3e-8; R37 (0.078-0.1, 12.2-14.5) 2.5e-10 to 5.8e-10; R39 (0.1, 19.8-21.6) 1.9-2.2e-10; R38 (0.1, 20.5-21.0) 2.0-2.1e-10; R18 (0.1, 21.1-24.5) 1.5-2.0e-10 -- all above the cut. Below: R36 (0.1, 35.0-46.6) 4.0-7.1e-11; R4 (0.037-0.1, 17.7-41.9) median 4.2e-11, though its top corner reaches 2.8e-10 so it straddles; R16 (0.019-0.1, 23.4-40.7) median 1.7e-11. Honest limitation: R18, R38 and R39 all sit at epsilon = 0.1 with MZp ~ 20-24 GeV and are predicted identical in both observables, so they stay mutually degenerate; their only remaining differences are the dark quartics alpha2-alpha6, whose largest observable consequence is a self-scattering sigma/m ~ 1e-12 cm^2/g.",
          "feasibility": "Closest instrument: Fermilab E989, which has measured a_mu to 1.5e-10 (127 ppb) -- already better than the 1e-10 cut on the experimental side. The blocker is entirely theoretical: the SM prediction carries a ~4e-10 hadronic-vacuum-polarisation error with an unresolved CMD-3 vs KLOE/BaBar R-ratio discrepancy. A MUonE-style space-like HVP measurement at ~0.3% plus an independent J-PARC E34 storage-ring result would bring the comparison to ~1e-10, an improvement factor of about 3 on the theory error. Dominant systematic: hadronic vacuum polarisation, specifically the e+e- -> hadrons normalisation.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R18", "R37", "R38", "R39", "R51"]},
            {"label": "not seen", "regions": ["R4", "R16", "R36"]}
          ]
        }
      ]
    }
  ]
}
```

---

<!-- g06_leaf-nnnyn.md -->

All three cited arXiv IDs resolve and match the claims (2308.06230 = Fermilab Muon g−2 0.20 ppm measurement; 2505.21476 = 2025 SM White Paper update, a_μ^SM = 116592033(62)×10⁻¹¹; 0811.1030 = Pospelov, *Secluded U(1) below the weak scale*, which derives the dark-photon Δa_μ).

# Reasoning — leaf `root_no_no_no_yes_no`

## What is actually degenerate here

All 54 listed units belong to **one** Lagrangian (`CsSg_U1p[+]_DM.Z2+3+4+5`), so this is a pure region-vs-region problem — there is no Lagrangian-separating prize available. The leaf is the low-mass corner of the complex-scalar + dark-U(1)′ model: **M_DM = 1–6 GeV, M_Z′ ≈ 1 GeV (except R12 = 4.7, R38 = 14.4, R13 = 60.5 GeV), g′ ≈ 0.031 (except R12 = 0.30, R38 = 0.13, R13 = 11.4)**, and **α₁ pinned at the scan floor 1.0–1.05 × 10⁻³** in *every* region. That α₁ pinning is why they all land in the same BR(h→inv) ∈ [0.001, 0.0032] bin, and the 1–6 GeV mass is why XLZD/CTA/Fermi/IceCube all return null: the recoil spectrum is below xenon threshold and the γ-ray/ν limits at these masses are far above the p-wave annihilation rate.

The **only** parameter that varies by orders of magnitude and is *tight within each region* is the kinetic mixing **ε, spanning 10⁻⁶ → 0.1**, i.e. 10 decades in ε². M_DM ranges overlap heavily between regions (most run [1, ~5] GeV), and the dark quartics α₂–α₆ are observationally inert:

- Contact self-scattering from the largest quartic (α ≈ 10, M_DM = 1 GeV): σ/m ≈ λ²/(128π M³) ≈ 5 × 10⁻⁵ cm²/g — **3–4 orders below** the ~0.5 cm²/g cluster/Bullet bound.
- Z′-mediated self-scattering with α′ = g′²/4π ≈ 7.6 × 10⁻⁵, M_Z′ = 1 GeV: σ/m ~ 10⁻¹¹ cm²/g.

So SIDM, and with it any handle on α₂–α₆, is dead by four orders of magnitude. **ε is the axis, and any honest split of this leaf is a split in ε (plus M_Z′).** I say up front: a 54-unit leaf cannot be fully resolved this way; I get a clean 4-way partition and the residue is genuinely irreducible with the observables that exist.

## Level 1 — muon g−2 (chosen over dark-photon dilepton searches on purpose)

A GeV-scale dark photon shifts the muon anomaly by
Δa_μ = (α/2π) ε² · (2/3)(m_μ/M_Z′)² = **8.65 × 10⁻⁶ · ε² · (1 GeV / M_Z′)²** (M_Z′ ≫ m_μ limit, Pospelov 0811.1030).

I deliberately did **not** propose a low-mass A′→ℓℓ resonance search, even though it would give a more balanced split: the catalog already contains a "Z′ dilepton" observable, and although that one is a high-mass Drell–Yan σ×BR recast, a dilepton-resonance proposal is too close to it to count as genuinely new. g−2 is a completely different measurement, is reported in absolute (dimensionless) units, and is the best-measured quantity in particle physics.

**Cut: Δa_μ ≥ 1 × 10⁻⁹.** Status today: a_μ^exp − a_μ^SM = 38(63) × 10⁻¹¹ (2308.06230 + 2505.21476), so 10⁻⁹ is a ~1.6σ positive shift now and becomes decisive once the HVP uncertainty (currently 62 × 10⁻¹¹, lattice-dominated) is halved — a stated goal of the lattice/MUonE program. At M_Z′ = 1 GeV the cut sits at **ε = 1.1 × 10⁻²**.

Predicted Δa_μ per region (max ε, min M_Z′; ranges given where the region spans the cut):

| above cut | Δa_μ | | below cut | Δa_μ |
|---|---|---|---|---|
| R2 (ε 0.031–0.1) | 8.1e-9 → 8.6e-8 | | R38 (ε 0.1, M_Z′ 14.4) | 4.2e-10 |
| R7 (0.064–0.1) | 3.5e-8 → 8.6e-8 | | R13 (ε 0.1, M_Z′ 60.5) | 2.4e-11 |
| R19 (0.090–0.1) | 7.1e-8 → 8.6e-8 | | R48 | ≤3.4e-10 |
| R28, R30 (0.1) | 8.6e-8 | | R26 | ≤2.7e-10 |
| R50 (0.1, M_Z′ 1.33) | 4.9e-8 | | R14 | ≤2.2e-10 |
| R12 (0.1, M_Z′ 4.73) | 3.9e-9 | | R25 | ≤1.7e-10 |
| R8 (0.0095–0.032) | 7.8e-10 → 9.0e-9 | | R51 | ≤7.9e-11 |
| | | | R33 | ≤2.5e-11 |
| | | | R6 | ≤8.2e-10 |
| | | | R1 (ε 4.6e-6–0.021) | ≤3.8e-9 (bulk ≪) |
| | | | R20/R42/R46/R49/R52 | 1.3–2.1e-12 |
| | | | R4/R16/R32/R34/R36/R41/R44 | 1e-13 – 2e-12 |
| | | | R5/R9/R24/R37 | 2e-14 – 7e-14 |
| | | | R0/R3/R10/R11/R17/R23/R29/R31/R45/R53 | 1e-16 – 5e-15 |
| | | | R15/R18/R21/R22/R27/R35/R39/R40/R43/R47 | 1e-17 – 6e-17 |

**Honest caveats.** Two regions genuinely straddle: **R8** (its ε_min = 9.5 × 10⁻³ gives 7.8 × 10⁻¹⁰, just under the cut; its geometric-mean point gives 2.6 × 10⁻⁹, so I place it above and flag that its lowest-ε points would fall the other way) and **R1** (ε spans 4.6 × 10⁻⁶ → 0.021, so its top ~10% of points would show a signal while its bulk sits at Δa_μ ~ 10⁻¹³; placed below). **R6** (8.2 × 10⁻¹⁰) and **R48** (3.4 × 10⁻¹⁰) sit within a factor 1.2–3 of the cut and would move if the theory error shrinks below ~2 × 10⁻¹⁰. Note also that a g−2 *signal* here is a discovery statement, not just an exclusion — R2/R7/R19/R28/R30/R50 predict Δa_μ ≈ 5–9 × 10⁻⁸, i.e. 50–90× the current total uncertainty, so those regions are in fact already in strong tension with the measured anomaly. That tension is exactly what makes the split sharp.

## Level 2a — the g−2-positive group (R2, R7, R8, R12, R19, R28, R30, R50)

These eight share ε ≳ 10⁻², so ε cannot separate them further. What *does* differ is whether the Z′ can decay back into the dark sector, which is a pure kinematic threshold: **Z′ → S S\* is open iff M_Z′ > 2 M_DM**.

- **R12**: M_Z′ = 4.726 GeV, M_DM = 1 GeV ⇒ open, β = 0.91. Γ_inv = g′²M β³/48π = 2.1 × 10⁻³ GeV; Γ_vis = ε²e²M ΣQ²N_c/12π ≈ 7.2 × 10⁻⁴ GeV (Σ ≈ 6.3 with τ, u, c, d, s open at 4.7 GeV). **BR(Z′→inv) ≈ 0.74.**
- **R2, R7, R8, R19, R28, R30, R50**: M_Z′ = 1.00–1.33 GeV while 2M_DM ≥ 2 GeV ⇒ channel closed, **BR(Z′→inv) = 0 exactly.**

This is a zero-vs-0.74 contrast, not a marginal one. The proposal is not another *limit* on invisible dark photons (Belle II already sets those) but a **partial-width measurement** of an already-produced resonance: tag e⁺e⁻ → γ Z′, and compare the rate in the recoil-mass peak with no visible activity against the rate with a reconstructed ℓ⁺ℓ⁻/hadronic Z′. At ε = 0.1 the production rate is 10⁴× above Belle II's current sensitivity floor, so this is systematics-limited, not rate-limited. Residual degeneracy after this node: the seven BR_inv = 0 regions remain unseparated (they differ only in ε within [0.01, 0.1] and in M_DM ranges that overlap). I state that plainly rather than inventing a discriminator.

## Level 2b — the g−2-null group (46 regions)

Here ε runs from 10⁻⁶ to ~6 × 10⁻³ and everything else is nearly identical (M_Z′ = 1 GeV, g′ = 0.031, α₁ = 10⁻³). The only lever is a direct A′ production rate at GeV masses, one decade beyond present reach. I set the cut at **ε² ≥ 10⁻⁷ (ε ≥ 3.2 × 10⁻⁴)** for **M_Z′ ∈ [0.3, 10] GeV**, which is ~10× beyond LHCb/BaBar and therefore rateable as "unlikely" rather than fantasy.

Above the cut: **R1** (up to 0.021), **R6** (1.5–9.8 × 10⁻³), **R14** (3.7 × 10⁻⁴–5 × 10⁻³), **R25** (1.7–4.5 × 10⁻³), **R26** (3.0–5.6 × 10⁻³), **R33** (3.3 × 10⁻⁴–1.7 × 10⁻³), **R36** (4.9 × 10⁻⁴), **R48** (1.6–6.2 × 10⁻³), **R49** (3.7–3.9 × 10⁻⁴), **R51** (1.7–3.0 × 10⁻³).
Below: the remaining 36, with ε ≤ 2 × 10⁻⁴ and mostly ≤ 10⁻⁵ (ε² ≤ 10⁻¹⁰, i.e. 1000× below even this proposed reach).

Three honesty notes. (i) **R20 (4.1 × 10⁻⁴), R42 (3.9 × 10⁻⁴), R46 (4.6 × 10⁻⁴), R52 (4.2 × 10⁻⁴)** have upper edges just above the cut; I assign them by geometric-mean ε (1.1–2.8 × 10⁻⁴, below) and flag that their top points would migrate. **R1** likewise straddles by five decades. (ii) **R13 (M_Z′ = 60.5 GeV, ε = 0.1, g′ = 11.4)** and **R38 (14.4 GeV, ε = 0.1)** carry huge mixing but sit outside the 0.3–10 GeV window, so they stay in the null branch — they would light up a high-mass dilepton resonance search, but that is precisely the catalog's Z′-dilepton observable and is therefore off-limits here. That is a real limitation of this leaf's resolution, not an oversight. (iii) The dominant systematic is brutal and specific: most regions pin M_Z′ = 1.000 GeV, sitting between the ω(782) and φ(1020), where the dilepton continuum is dominated by hadronic resonances — hence the requirement for recoil tagging and a hadronic-decay channel, not just A′→μ⁺μ⁻.

**Bottom line:** the leaf partitions into 4 groups — {R12}, {R2,R7,R8,R19,R28,R30,R50}, the 10 mid-ε regions, and 36 residual low-ε regions. The 36-region residue is irreducibly degenerate: they share the same Lagrangian, the same pinned Higgs portal, the same M_Z′ and g′, and differ only in ε ≤ 2 × 10⁻⁴ and in dark quartics whose sole observable consequence (self-interaction) is four orders of magnitude below any cluster bound.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_yes_no",
      "lit_review": {
        "name": "Muon g-2 dark-photon loop",
        "observable": "Delta a_mu >= 1e-9 ?",
        "refs": ["arXiv:2308.06230", "arXiv:2505.21476", "arXiv:0811.1030"],
        "reasoning": "A GeV dark photon shifts the muon anomaly by Delta a_mu = (alpha/2pi) eps^2 (2/3)(m_mu/M_Zp)^2 = 8.65e-6 eps^2 (1 GeV/M_Zp)^2. All 54 units share one Lagrangian, alpha1 pinned at 1e-3 (identical BR(h->inv)), M_Zp ~ 1 GeV and g' ~ 0.031; the only parameter varying over decades and tight within regions is the kinetic mixing eps (1e-6 to 0.1). Predicted Delta a_mu: R28/R30/R2/R7/R19 = 8.6e-8, R50 = 4.9e-8, R12 (M_Zp=4.73) = 3.9e-9, R8 = 7.8e-10 to 9.0e-9; versus R38 = 4.2e-10, R13 (M_Zp=60.5) = 2.4e-11, R6 = 8.2e-10, R48 = 3.4e-10, R26 = 2.7e-10, R14 = 2.2e-10, R25 = 1.7e-10, R51 = 7.9e-11, R33 = 2.5e-11, and 1e-17 to 2e-12 for the remaining 35 low-eps regions. Cut at 1e-9: current a_mu(exp)-a_mu(SM) = 38(63)e-11, so 1e-9 is a ~1.6 sigma positive shift today and decisive once the 62e-11 lattice HVP error is halved. Caveats: R8 straddles (its eps_min = 9.5e-3 gives 7.8e-10, just under; geometric-mean point 2.6e-9, so placed above); R1 spans eps 4.6e-6 to 0.021 so its top ~10% of points would show a signal while its bulk gives 1e-13 (placed below); R6 and R48 sit within a factor 1.2-3 of the cut. Note the 'seen' regions predict 50-90x the current total uncertainty, so they are already in tension with the measured anomaly - that is what makes the split sharp rather than marginal. Not used: DM self-interaction, which is dead by 3-4 orders (largest quartic alpha=10 at M_DM=1 GeV gives sigma/m = 5e-5 cm^2/g vs the ~0.5 cm^2/g cluster bound), so alpha2-alpha6 are observationally inert. A low-mass A'->ll resonance search would split more evenly but was rejected as too close to the catalog's Z'-dilepton observable.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R2", "R7", "R8", "R12", "R19", "R28", "R30", "R50"]},
          {"label": "not seen", "regions": ["R0", "R1", "R3", "R4", "R5", "R6", "R9", "R10", "R11", "R13", "R14", "R15", "R16", "R17", "R18", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R27", "R29", "R31", "R32", "R33", "R34", "R35", "R36", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R51", "R52", "R53"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R2+R7+R8+R12+R19+R28+R30+R50",
          "name": "Dark-photon invisible-width spectroscopy",
          "observable": "BR(Z' -> invisible) >= 0.1 at m_Z' = 1-5 GeV ?",
          "reasoning": "These eight regions all have eps >~ 1e-2, so mixing cannot separate them further; the remaining discriminator is the kinematic threshold M_Zp > 2 M_DM. R12 has M_Zp = 4.726 GeV with M_DM = 1 GeV, so Z' -> S S* is open with beta = 0.91: Gamma_inv = g'^2 M beta^3/48pi = 2.1e-3 GeV against Gamma_vis = eps^2 e^2 M Sum(Q^2 Nc)/12pi = 7.2e-4 GeV (Sum ~ 6.3 with tau, u, c, d, s open), giving BR(inv) = 0.74. R2, R7, R8, R19, R28, R30 and R50 all have M_Zp = 1.00-1.33 GeV while 2 M_DM >= 2 GeV, so the dark channel is closed and BR(inv) = 0 exactly. Zero versus 0.74 is a threshold statement, not a rate estimate, so it is robust. The seven BR_inv = 0 regions remain mutually degenerate after this node: they differ only in eps within [0.01, 0.1] and in M_DM ranges that overlap.",
          "feasibility": "Closest instrument: the Belle II single-photon search for an invisibly decaying Z' (reaching eps ~ 1e-3 for m up to ~8 GeV) plus its visible gamma + l+l- counterpart. This proposal is not another limit but a partial-width ratio measurement of an already-produced resonance: at eps = 0.1 the e+e- -> gamma Z' rate is ~1e4 above Belle II's sensitivity floor, so it is systematics- not rate-limited. Required improvement is ~2-3x in calorimeter hermeticity and photon-energy calibration on the recoil-mass peak. Dominant systematic: e+e- -> gamma gamma with one photon lost down the beampipe, plus beam-background-induced fake missing energy, which fakes an invisible recoil peak.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R12"]},
            {"label": "not seen", "regions": ["R2", "R7", "R8", "R19", "R28", "R30", "R50"]}
          ]
        },
        {
          "attach_to": "R0+R1+R3+R4+R5+R6+R9+R10+R11+R13+R14+R15+R16+R17+R18+R20+R21+R22+R23+R24+R25+R26+R27+R29+R31+R32+R33+R34+R35+R36+R37+R38+R39+R40+R41+R42+R43+R44+R45+R46+R47+R48+R49+R51+R52+R53",
          "name": "GeV dark-photon factory, recoil-tagged",
          "observable": "prompt A' -> l+l-/hadrons, eps^2 >= 1e-7 for m_A' = 0.3-10 GeV ?",
          "reasoning": "In this group eps runs 1e-6 to 6e-3 while M_Zp = 1 GeV, g' = 0.031 and alpha1 = 1e-3 are common, so the only lever is the A' production rate, which scales as eps^2. Above the eps = 3.2e-4 cut: R1 (up to 0.021), R6 (1.5-9.8e-3), R14 (3.7e-4 to 5e-3), R25 (1.7-4.5e-3), R26 (3.0-5.6e-3), R33 (3.3e-4 to 1.7e-3), R36 (4.9e-4), R48 (1.6-6.2e-3), R49 (3.7-3.9e-4), R51 (1.7-3.0e-3). The other 36 have eps <= 2e-4 and mostly <= 1e-5, i.e. eps^2 <= 1e-10, a factor 1000 below even this proposed reach. Straddlers flagged: R20 (4.1e-4), R42 (3.9e-4), R46 (4.6e-4) and R52 (4.2e-4) have upper edges just above the cut and are assigned by geometric-mean eps (1.1-2.8e-4); R1 spans five decades and is placed above on its upper edge. R13 (M_Zp = 60.5 GeV) and R38 (14.4 GeV) carry eps = 0.1 but fall outside the mass window and so stay in the null branch - they would light up a high-mass dilepton resonance search, which is the catalog's Z'-dilepton observable and therefore unavailable here. This is a real limit on how far this leaf can be resolved.",
          "feasibility": "Closest instruments: the LHCb inclusive A' -> mu+mu- search, which reaches eps^2 ~ 1e-6 for prompt A' near 1 GeV, and the BaBar e+e- -> gamma A' search at eps ~ 1e-3. The cut at eps^2 = 1e-7 needs ~10x in eps^2, i.e. ~10-100x in effective luminosity times background rejection - a dedicated thin-target, full-acceptance machine with hadronic-recoil tagging, not an incremental LHCb upgrade. Dominant systematic is specific and severe: most of these regions pin M_Zp = 1.000 GeV, sitting between the omega(782) and phi(1020), where the dilepton continuum is swamped by hadronic resonances; this is why recoil tagging and a hadronic decay channel are required rather than a dimuon bump hunt alone.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R1", "R6", "R14", "R25", "R26", "R33", "R36", "R48", "R49", "R51"]},
            {"label": "not seen", "regions": ["R0", "R3", "R4", "R5", "R9", "R10", "R11", "R13", "R15", "R16", "R17", "R18", "R20", "R21", "R22", "R23", "R24", "R27", "R29", "R31", "R32", "R34", "R35", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R52", "R53"]}
          ]
        }
      ]
    }
  ]
}
```

---

<!-- g07_pair-ynny.md -->

Verified all five arXiv IDs (titles/authors match). Reasoning first, then the single JSON block.

---

# Physics setup common to both leaves

Both leaves are the same secluded dark-photon WIMP: a complex scalar of dark charge −1 under a Stückelberg U(1)′, kinetically mixed with hypercharge by ε, plus a Higgs portal α₁.

**What is already fixed, and therefore cannot discriminate.**

- `gU1p ≈ 0.202` is pinned in essentially every region. That is the relic-density condition: α_D = g²/4π = 3.25×10⁻³, and for M_Z′ ≪ M_DM the secluded annihilation χχ\*→Z′Z′ gives ⟨σv⟩ ≈ πα_D²/m² = 1.7×10⁻⁹ GeV⁻² = **2.0×10⁻²⁶ cm³/s**, i.e. thermal, for m = 137 GeV. Every region therefore has the *same* annihilation rate into the *same* final state (Z′Z′ → 4 SM fermions with kinetically-mixed branchings ≈ 15% ee, 15% μμ, 15% ττ, 55% hadrons at M_Z′ ≳ 10 GeV). This is why the whole family collapses into one indirect-detection leaf, and it is why no gamma-ray/neutrino observable — in the catalog or out of it — can split these regions.
- σ_SI is Higgs-portal-only in this scan: the LZ split that separates the two sibling leaves is literally a cut on α₁ — leaf `..._yes` has α₁ ∈ [0.0036, 0.0048], leaf `..._no` has α₁ ∈ [0.0025, 0.0036] at m = 136.8 GeV. So α₁ carries no residual information *within* a leaf.
- α₂…α₆ are **pure dark-sector quartics** with no SM leg. They cannot generate masses (no dark vev in the field content), so their only conceivable observable is DM self-scattering: σ/m ≈ λ²/(64π m³) ≈ 4×10⁻¹¹ cm²/g for λ = 10 at m = 137 GeV, against a Bullet-Cluster/relaxed-cluster sensitivity of ~0.1–1 cm²/g. That is **ten orders of magnitude** short. Two regions that differ only in α₂…α₆ are, as far as I can tell, physically indistinguishable by any conceivable experiment. This is the honest limit of both leaves, and it is also why the two *Lagrangians* in leaf `..._no` (Z2 vs Z2+3+4+5) cannot be separated as Lagrangians: they differ only by the odd quartics α₃ sr³si and α₅ sr si³, which are SM-blind. The Z2 units can only be reached through their *parameter values* (they sit at systematically higher M_Z′ and m_DM), which is what my Level-2 nodes exploit.

**What is left: ε, M_Z′, m_DM.** All three of my node types measure one of these in absolute units.

**Caveat worth flagging.** With ε as large as 0.1 and M_Z′ ≈ 15 GeV, Z′ exchange gives a proton-coupled SI cross section σ_p ≈ μ²(g_D εe)²/(π M_Z′⁴) ≈ 8×10⁻³⁸ cm², ten orders of magnitude above the σ_SI the scan reports for these same points. The scan's direct-detection numbers are evidently Higgs-portal-only, i.e. the kinetic mixing is not propagating into the micrOMEGAs nucleon amplitude. If that vertex were included, every ε ≳ 10⁻⁶ region here would already be excluded. I have written the proposals for the model as specified (ε enters only the Z′'s SM couplings/decays), but this should be checked before any of it is quoted.

---

# Leaf `root_yes_no_no_yes_yes` (499 pts, 21 units, all CsSg_U1p[+]_DM.Z2+3+4+5)

All 21 units are one Lagrangian, so only regions are on the table. m_DM = 136.8 GeV in 15 of 21 units; M_Z′ clusters at 13–22 GeV; the discriminating spread is in **ε: 10⁻⁶ → 0.1, five decades**.

### Level 1 — dark photon in Z → 4ℓ

The one existing, non-catalog measurement with real teeth at M_Z′ = 10–30 GeV and ε ~ 10⁻²–10⁻¹ is the rare-Z decay Z → ℓ⁺ℓ⁻A′(→ℓ⁺ℓ⁻): production ∝ ε², A′ branching ε-independent, so BR(Z→4ℓ with a narrow 10–30 GeV pair) ∝ ε². Curtin–Essig–Gori–Shelton (1412.0018) project HL-LHC 95% reach at ε ≈ 10⁻²  for m_Zd = 10–35 GeV, which corresponds to BR ≈ 10⁻⁹ against the SM Z→4ℓ continuum of 4.5×10⁻⁶; the LEP-based model-independent bound ε < 0.03 (1006.0973) already brackets the top of the range. This is *not* the catalog's pp→Z′→ℓℓ σ×BR recast: different production (on-shell Z decay), different mass window, different background.

Predicted BR ∝ ε², anchored on 10⁻⁹ at ε = 10⁻²:

- ε = 0.1 (R14, R15, R17, R19; log-centres of R2, R4, R5, R6, R9, R13, R18 all 0.06–0.08) → BR ≈ 10⁻⁷: a several-hundred-event 4ℓ peak at HL-LHC. Loud.
- ε ≈ 0.02–0.04 (R0 0.029, R1 0.041, R3 0.043, R20 0.030, R7 0.021) → BR ≈ 4×10⁻⁹–2×10⁻⁸. Seen.
- ε ≈ 0.011–0.013 (R16, R11) → BR ≈ 1.2–1.7×10⁻⁹. **Marginal** — these two sit within 30% of the projected threshold and are the weak point of the split.
- ε ≈ 0.0067 (R12) → BR ≈ 4×10⁻¹⁰; ε ≈ 0.0019 (R8) → 4×10⁻¹¹; ε ≈ 10⁻⁶ (R10) → 10⁻¹⁷. Invisible, now and ever.

**Splits 18 vs 3.** Straddling regions (R0 spans 0.0085–0.1, R1 0.017–0.1, R3 0.019–0.1) are assigned by their log-midpoint, all comfortably above the cut; R7, R11, R16 are the honest marginals.

### Level 2a — the 18 seen regions: Tera-Z dark-photon mass

Once a 4ℓ peak exists, the resonance mass is the only remaining lever, but HL-LHC would have ~5 events at threshold. A Tera-Z run (FCC-ee/CEPC, 10¹² Z vs ~10¹⁰ usable at HL-LHC) localises m(ℓℓ) to ≪0.1 GeV even at ε ~ 0.01. M_Z′ log-centres: R1 19.8, R9 18.3, R19 17.6, R20 19.2 GeV → above 17 GeV; R5 10.5, R16 10.9, R18 13.8, R6 14.6, R4 14.8, R2 15.0, R17 15.6, R3 15.7, R14 15.8, R11 15.9, R15 16.1, R0 16.2, R13 16.4, R7 16.7 GeV → below. The split is real but **marginal for R0, R7, R13, R15** (within 1 GeV of the cut, and R0 itself spans 12–22 GeV). The 14 regions below the cut cluster inside 14–17 GeV with identical m_DM, α₁, g_D — they differ *only* in α₂…α₆ and are, per the argument above, terminally degenerate.

### Level 2b — the 3 unseen regions: displaced GeV dimuon

R10 is the outlier of the whole leaf: m_DM = 288–308 GeV, M_Z′ = 1.0–1.6 GeV, g_D = 0.033–0.057, ε ≈ 10⁻⁶. Its dark photon is *long-lived*: Γ = (α ε² M_Z′/3)·N_eff with N_eff ≈ 4.2 at 1.3 GeV gives Γ = 1.5×10⁻¹⁴ GeV, i.e. **cτ ≈ 1.3 cm** — a macroscopic, vertexable displacement with a 1–2 GeV dimuon mass. R8 (M_Z′ = 17–38 GeV, ε ≈ 0.002) and R12 (M_Z′ ≈ 15.4 GeV, ε ≈ 0.007) give cτ < 10⁻⁸ cm: prompt, and at masses ≥ 15 GeV. So the signature is qualitatively different, not just quantitatively. R8 and R12 remain mutually degenerate (they differ by a factor ~3 in ε and a factor ~1.5 in M_Z′, both far below any proposed sensitivity at these ε).

---

# Leaf `root_yes_no_no_yes_no` (630 pts, 16 units, two Lagrangians)

Same structure, weaker Higgs portal (α₁ = 0.0025–0.0036, hence LZ-blind). Here ε spans **1.4×10⁻⁶ to 0.1** with a clean gap, and m_DM spans 109–301 GeV. Four units (R7, R13, R14, R15) are the Z2 Lagrangian; as argued above they are not separable *as Lagrangians*, only through the fact that they populate higher M_Z′ (R7: 43–74 GeV, R14: 34–62 GeV) and higher m_DM (R14, R15: up to ~300 GeV) than the Z2+3+4+5 bulk.

### Level 1 — same Z → 4ℓ dark-photon search, cut BR ≥ 10⁻⁹ (ε ≈ 10⁻²)

ε log-centres split with a factor-4 gap on either side of the threshold:

- Seen: R9 0.074, R3 0.051, R2 0.033, R5 0.025, R7 0.023, R0 0.022, R6 0.019, R13 0.017, R4 0.017 → BR ≈ 3×10⁻⁹ to 5×10⁻⁸. Note R7's dark photon at 43–74 GeV is phase-space suppressed in Z decay (M_Z′ + m_ℓℓ < m_Z); its ε ≈ 0.023 buys that back only partly, so R7 is the marginal member of this group.
- Not seen: R8 4.4×10⁻³ (BR ≈ 2×10⁻¹⁰), R15 1.7×10⁻³, R1 1.1×10⁻³, R10 9.0×10⁻⁴, R14 3.4×10⁻⁴, R11 4.5×10⁻⁵, R12 1.6×10⁻⁶ → BR ≤ 2×10⁻¹⁰, down to 10⁻¹⁷. R1 spans 2×10⁻⁵–0.057 and is the one genuinely ambiguous unit; its 28-point bulk sits at low ε and m_DM = 136.8, so I place it below.

**Splits 9 vs 7**, and it puts Z2 units on both sides (R7, R13 seen; R14, R15 unseen) — confirming that this observable tracks ε, not the Lagrangian.

### Level 2a — the 9 seen regions: resonance mass ≥ 30 GeV

M_Z′ log-centres: R7 56.5 GeV (Z2) and R2 36.1 GeV are above; R0 13.9, R3 15.0, R4 16.1, R5 14.4, R6 14.8, R9 16.5, R13 11.0 GeV are all in the narrow 11–17 GeV band below. This is the one node in either leaf that isolates a **Z2 unit (R7) from the Z2+3+4+5 units**, which is the most valuable split available here. R2 spans 21.5–60.5 GeV and straddles the cut — flagged. The seven low-mass regions remain degenerate (identical m_DM = 136.8, overlapping M_Z′, differing only in dark quartics).

### Level 2b — the 7 unseen regions: WIMP mass from the xenon recoil spectrum

These regions have m_DM spread over 109–301 GeV, and the leaf *does* have a direct-detection signal (XLZD and DarkSide positive). The mean nuclear-recoil energy in xenon, ⟨E_R⟩ ≈ E₀r with E₀ = ½m_χv₀² and r = 4m_χm_N/(m_χ+m_N)² (v₀ = 220 km/s, m_N = 122 GeV), is a spectrum-shape observable orthogonal to the rate cuts already on the path:

- R11, m = 108.8 GeV → ⟨E_R⟩ ≈ **29 keV**
- R1, R10, m = 136.8 GeV (bulk) → **37 keV**
- R8, m = 166–179 GeV → **45 keV**
- R14, m log-centre 213 GeV (Z2) → **53 keV**
- R15, m log-centre 253 GeV (Z2) → **58 keV**
- R12, m = 300 GeV → **66 keV**

A cut at 50 keV separates {R12, R14, R15} from {R1, R8, R10, R11}, and incidentally lands two of the four Z2 units on one side. Established mass-reconstruction studies (Green 0805.1704; Pato et al. 1012.3458) show a factor-1.8 mass ratio at m > 100 GeV needs O(100) recoils and benefits strongly from the Xe+Ar combination this leaf already provides — with a signal only 1–10× the XLZD limit (≈3–30 events) it is *not* achievable at XLZD alone, which is why I file it as a Level-2 proposal rather than a literature split. Residual degeneracies: R1 vs R10 (identical m_DM = 136.8; differ only in M_Z′ 15.7–44 vs 15.7 GeV and ε, both far below reach) and R14 vs R15 vs R12.

---

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_no_yes_yes",
      "lit_review": {
        "name": "HL-LHC Z->4l dark-photon search",
        "observable": "BR(Z->4l, narrow 10-30 GeV l+l- pair) >= 1e-9 ?",
        "refs": ["arXiv:1412.0018", "arXiv:1006.0973"],
        "reasoning": "All 21 units share g_D=0.202 (relic-fixed, <sigma v>=2e-26 cm3/s into Z'Z') and alpha1~0.004 (DD-fixed), so the only free SM-facing handles are epsilon, M_Z' and m_DM. Z -> l+l- A'(->l+l-) is production-proportional-to-epsilon^2 with an epsilon-independent A' branching, giving BR ~ 1e-9 (epsilon/0.01)^2 for M_A'=10-30 GeV; HL-LHC reach is epsilon ~ 1e-2 (BR ~ 1e-9) against the SM Z->4l continuum of 4.5e-6. Predicted BR: ~1e-7 for the epsilon=0.1 regions (R14,R15,R17,R19 and the log-centres of R2,R4,R5,R6,R9,R13,R18 at 0.06-0.08); 4e-9 to 2e-8 for R0(0.029), R1(0.041), R3(0.043), R20(0.030), R7(0.021); 1.2-1.7e-9 for R16 and R11 (MARGINAL, within 30% of threshold); 4e-10 for R12, 4e-11 for R8, 1e-17 for R10. This is not the catalog pp->Z'->ll recast: different production, mass window and background. R0/R1/R3 straddle the cut and are assigned by log-midpoint.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R6", "R7", "R9", "R11", "R13", "R14", "R15", "R16", "R17", "R18", "R19", "R20"]},
          {"label": "not seen", "regions": ["R8", "R10", "R12"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R9+R11+R13+R14+R15+R16+R17+R18+R19+R20",
          "name": "Tera-Z dark-photon mass spectroscopy",
          "observable": "m(l+l-) resonance >= 17 GeV ?",
          "reasoning": "Given a 4l peak, only its mass discriminates. M_Z' log-centres: R1 19.8, R20 19.2, R9 18.3, R19 17.6 GeV (above); R7 16.7, R13 16.4, R0 16.2, R15 16.1, R11 15.9, R14 15.8, R3 15.7, R17 15.6, R2 15.0, R4 14.8, R6 14.6, R18 13.8, R16 10.9, R5 10.5 GeV (below). R0, R7, R13, R15 sit within 1 GeV of the cut and are marginal; R0 alone spans 12-22 GeV. The 14 regions below the cut have identical m_DM=136.8 GeV, alpha1 and g_D and differ only in the dark quartics alpha2-alpha6, whose sole observable is self-scattering at sigma/m ~ 4e-11 cm2/g versus ~0.1-1 cm2/g cluster sensitivity: terminally degenerate.",
          "feasibility": "Closest instrument: HL-LHC Z->4l, which at the discovery threshold yields ~5 events and cannot localise the resonance mass. FCC-ee/CEPC Tera-Z delivers 1e12 Z versus ~1e10 usable at HL-LHC (x100 statistics) with dimuon mass resolution ~50 MeV, giving sub-0.1 GeV mass determination even at epsilon ~ 0.01. Requires a dedicated next-generation lepton collider. Dominant systematic: SM Z->4l continuum shape under a narrow peak, plus muon momentum-scale calibration at the 1e-4 level.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R1", "R9", "R19", "R20"]},
            {"label": "no", "regions": ["R0", "R2", "R3", "R4", "R5", "R6", "R7", "R11", "R13", "R14", "R15", "R16", "R17", "R18"]}
          ]
        },
        {
          "attach_to": "R8+R10+R12",
          "name": "Displaced GeV-scale dimuon vertex search",
          "observable": "displaced m(mu mu) = 1-2 GeV with ctau ~ 1 cm ?",
          "reasoning": "R10 is the qualitative outlier: m_DM=288-308 GeV, M_Z'=1.0-1.6 GeV, g_D=0.033-0.057, epsilon~1e-6. Its dark photon width Gamma=(alpha eps^2 M_Z'/3)*N_eff with N_eff~4.2 at 1.3 GeV is 1.5e-14 GeV, i.e. ctau = 1.3 cm - a macroscopic, vertexable displacement carrying a 1-2 GeV dimuon mass. R8 (M_Z'=17-38 GeV, eps~0.002) and R12 (M_Z'~15.4 GeV, eps~0.007) give ctau < 1e-8 cm: prompt, and at masses above 15 GeV. The signature differs in kind, not degree. R8 and R12 remain mutually degenerate (factor ~3 in epsilon, ~1.5 in M_Z', both far below any proposed reach).",
          "feasibility": "Closest instrument: the LHCb long-lived dark-photon search, which covers only 214 < m(A') < 350 MeV and reaches epsilon ~ 1e-5 there; the prompt-like arm covers 10.6 MeV-70 GeV but is blind to ctau ~ 1 cm. Extending the displaced arm to 1-2 GeV at epsilon = 1e-6 needs ~100x more signal rate (eps^2) on top of the lower Drell-Yan-like production at 1.3 GeV; LHCb Upgrade II supplies ~10x luminosity, leaving a >10x shortfall requiring a dedicated soft-displaced-dimuon trigger and vertex detector. Dominant systematic: heavy-flavour displaced dimuon background (b/c -> mu mu X) at exactly this mass and flight distance.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R10"]},
            {"label": "no", "regions": ["R8", "R12"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_no_yes_no",
      "lit_review": {
        "name": "HL-LHC Z->4l dark-photon search",
        "observable": "BR(Z->4l, narrow 10-80 GeV l+l- pair) >= 1e-9 ?",
        "refs": ["arXiv:1412.0018", "arXiv:1006.0973"],
        "reasoning": "As in the sibling leaf, g_D and alpha1 are fixed by relic density and by the leaf's own DD path (alpha1 = 0.0025-0.0036), so epsilon is the discriminator; here it spans 1.4e-6 to 0.1 with a factor-4 gap around 1e-2. BR ~ 1e-9 (epsilon/0.01)^2. Seen: R9 (eps 0.074, BR ~5e-8), R3 (0.051), R2 (0.033), R5 (0.025), R7 (0.023), R0 (0.022), R6 (0.019), R13 (0.017), R4 (0.017) -> BR 3e-9 to 5e-8. Not seen: R8 (4.4e-3, BR ~2e-10), R15 (1.7e-3), R1 (1.1e-3), R10 (9.0e-4), R14 (3.4e-4), R11 (4.5e-5), R12 (1.6e-6) -> BR <= 2e-10. Two honest caveats: R7's dark photon at 43-74 GeV is phase-space suppressed in Z decay, so it is the marginal member of the seen group; and R1 spans eps = 2e-5 to 0.057, placed below the cut because its 28-point bulk sits at low epsilon and m_DM = 136.8 GeV. Note this observable tracks epsilon, not the Lagrangian: Z2 units appear on both sides (R7, R13 seen; R14, R15 unseen). The Z2 and Z2+3+4+5 Lagrangians differ only by the odd dark quartics alpha3 sr^3 si and alpha5 sr si^3, which have no SM leg and cannot be separated as Lagrangians by any measurement; only their parameter values can be reached.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0", "R2", "R3", "R4", "R5", "R6", "R7", "R9", "R13"]},
          {"label": "not seen", "regions": ["R1", "R8", "R10", "R11", "R12", "R14", "R15"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2+R3+R4+R5+R6+R7+R9+R13",
          "name": "Tera-Z dark-photon mass spectroscopy",
          "observable": "m(l+l-) resonance >= 30 GeV ?",
          "reasoning": "M_Z' log-centres: R7 56.5 GeV (the Z2 Lagrangian) and R2 36.1 GeV are above the cut; R9 16.5, R4 16.1, R3 15.0, R6 14.8, R5 14.4, R0 13.9, R13 11.0 GeV are all inside a narrow 11-17 GeV band below it. This is the only node in either leaf that isolates a Z2 unit from the Z2+3+4+5 units, which is the most valuable split available here. R2 spans 21.5-60.5 GeV and straddles the cut - flagged as marginal. The seven low-mass regions share m_DM = 136.8 GeV (R13 and R3 extend to ~200 GeV in a few points) and overlapping M_Z', and differ otherwise only in dark quartics: not separable.",
          "feasibility": "Closest instrument: HL-LHC Z->4l (1412.0018), whose reach degrades sharply above m_A' ~ 35 GeV from phase space, exactly where R7 and R2 sit. FCC-ee/CEPC Tera-Z supplies 1e12 Z (x100 over usable HL-LHC statistics), which recovers the phase-space-suppressed 40-75 GeV window and measures the mass to <0.1 GeV. Requires a dedicated next-generation lepton collider. Dominant systematic: modelling of the SM Z->4l continuum in the soft-lepton corner of phase space where the recoiling l+l- pair is nearly collinear.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R2", "R7"]},
            {"label": "no", "regions": ["R0", "R3", "R4", "R5", "R6", "R9", "R13"]}
          ]
        },
        {
          "attach_to": "R1+R8+R10+R11+R12+R14+R15",
          "name": "Xenon recoil-spectrum WIMP mass fit",
          "observable": "mean nuclear-recoil energy (5-100 keV) >= 50 keV ?",
          "reasoning": "This leaf has a live DD signal (XLZD and DarkSide positive), and its unseen-epsilon regions spread over m_DM = 109-301 GeV. The mean recoil energy <E_R> ~ E0*r, with E0 = 0.5 m_chi v0^2 (v0 = 220 km/s) and r = 4 m_chi m_N/(m_chi+m_N)^2 for m_N(Xe) = 122 GeV, is a spectrum-shape observable orthogonal to the rate thresholds already on the path: R11 (109 GeV) -> 29 keV; R1 and R10 (136.8 GeV) -> 37 keV; R8 (166-179 GeV) -> 45 keV; R14 (log-centre 213 GeV, Z2) -> 53 keV; R15 (253 GeV, Z2) -> 58 keV; R12 (300 GeV) -> 66 keV. A 50 keV cut separates {R12,R14,R15} from {R1,R8,R10,R11} and puts two of the four Z2 units on one side. Residual degeneracies: R1 vs R10 (both m_DM = 136.8 GeV) and R14 vs R15 vs R12.",
          "feasibility": "Closest instrument: XLZD (60-80 t, ~200 t.yr) plus argon from DarkSide. With sigma_SI only 1-10x the XLZD 90% CL limit the yield is ~3-30 recoils, whereas published mass-reconstruction studies (0805.1704, 1012.3458) show a factor-1.8 mass ratio above 100 GeV needs O(100) events and benefits strongly from the Xe+Ar combination this leaf already provides. Required improvement: 3-10x exposure beyond XLZD, or a signal at the top of the allowed band. Dominant systematic: halo velocity distribution (v0 and v_esc uncertainties shift <E_R> by ~10%, comparable to the 137-vs-213 GeV separation), followed by the nuclear-recoil energy scale near threshold.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R12", "R14", "R15"]},
            {"label": "no", "regions": ["R1", "R8", "R10", "R11"]}
          ]
        }
      ]
    }
  ]
}
```

---

<!-- g08_pair-nnnyyn.md -->

I'll verify the references I plan to cite before writing the answer.
## Reasoning

### Reading the parameter block (this drives everything below)

All 39 units belong to one Lagrangian: a complex scalar singlet `S` charged under a dark U(1)′, i.e. the canonical **secluded dark-photon model** — DM mass `MDM`, dark photon mass `MZp`, kinetic mixing `epsilon`, dark gauge coupling `gU1p`, Higgs portal `alpha1 = λ_hS`, and five dark quartics `alpha2..alpha6` that couple to nothing but themselves.

Two independent checks fix the units as **linear GeV** (not log₁₀):

1. **Higgs portal.** Γ(h→SS\*) ≃ λ²v²/(8π m_h)·β. With λ = 1.35×10⁻³, v = 246 GeV: Γ = 4.3×10⁻⁵ GeV against Γ_SM = 4.07×10⁻³ GeV → BR(h→inv) ≈ 1.0×10⁻². The leaf's α₁ window [1.05, 1.87]×10⁻³ maps onto BR ≈ 3×10⁻³–1.6×10⁻², i.e. exactly the leaf's band 0.0032–0.01. This only works if every point has m_S < m_h/2 = 62.5 GeV — and indeed max(MDM) = 6.29 GeV.
2. **Relic density.** The value `gU1p = 0.04377` recurs *exactly* in 15 units, always paired with MDM ≈ 4.71, MZp ≈ 3.161. α_D = g_D²/4π = 1.52×10⁻⁴, and ⟨σv⟩(SS\*→A′A′) ≃ πα_D²/m_S² = 3.9×10⁻²⁶ cm³/s at m_S = 4.71 GeV — the thermal value. That cluster is the **secluded thermal relic line**, ε-independent.

So: a GeV-scale secluded dark sector, m_A′ ∈ [1.0, 5.5] GeV, m_S ∈ [1.0, 6.3] GeV, with **ε spanning five decades, 10⁻⁶ → 0.1**, across otherwise near-identical regions. Because m_A′ < 2m_S in 36 of 39 units, the dark photon **decays visibly** to SM (μμ / ee / hadrons) — the classic accelerator-search target. Our catalog contains no accelerator observable at all, so this axis is entirely untouched.

### What I checked and rejected (honest negatives)

- **Dark self-interaction (the α₂…α₆ axis).** σ/m ≈ 2.2×10⁻⁴·λ²/(64π m³) cm²/g. At the ceiling λ = 10, m = 4.71 GeV this is **1.0×10⁻⁶ cm²/g**; A′-exchange adds only ~10⁻¹¹ cm²/g (8πα_D²m_S²/m_A′⁴ with α_D ~ 10⁻⁴). Bullet-Cluster-class bounds sit at ~1 cm²/g. **Six orders short** — the quartics are not measurable by anything, ever. Units that differ *only* in α₂…α₆ (e.g. R16/R25/R28, identical at 4.71/3.161/0.04377) are physically, not merely practically, degenerate. I say so rather than inventing a split.
- **DM–electron scattering (SENSEI/DAMIC-M/Oscura, not in the catalog).** σ_e = 16π α α_D ε² μ_e²/m_A′⁴ = 5.7×10⁻⁴¹·ε² cm² for the thermal cluster → 5.7×10⁻⁴⁷ cm² at ε = 10⁻³, four decades below Oscura's ~10⁻⁴³ cm² projection at 5 GeV. Only ε ≳ 0.03 (R31/R35/R36) is reachable — strictly weaker than the accelerator split.
- **Cosmic-ray antiprotons (AMS-02/GAPS).** Attractive because the p̄ threshold at m_A′ = 1.88 GeV cleanly separates the 1-GeV and 3.2-GeV dark-photon groups — but a 3.16 GeV A′ is only 1.7× above threshold, giving N_p̄ ≈ 0.02/annihilation, i.e. a bb̄-equivalent ⟨σv⟩ ~ 4×10⁻²⁸ cm³/s, well below AMS-02, with all the p̄ at T ≲ 1 GeV where solar modulation dominates. Rejected as a discriminator.
- **Beam dumps / far detectors (SHiP, FASER2).** cτ(A′) = 0.65 cm·(10⁻⁶/ε)² at 3.16 GeV, so even at the ε = 10⁻⁶ floor the boosted decay length is ≲ 10 cm. Nothing reaches a 45 m decay volume. (Consistent with the earlier LLP finding for this scan.)
- **CMB p_ann (Planck).** f_eff⟨σv⟩/m ≈ 0.25 × 3.9×10⁻²⁶/4.71 = 2×10⁻²⁷ cm³ s⁻¹ GeV⁻¹ vs the Planck bound 3.2×10⁻²⁸ — the whole secluded thermal cluster is in ~6× tension. Worth flagging for the paper, but it does **not split**: only R34/R35/R36 have m_A′ > m_S and so escape s-wave secluded annihilation.

### Level 1 — visible dark-photon resonance search (splits!)

The measurement: the radiative-return dark-photon search, e⁺e⁻ → γA′(→μ⁺μ⁻) at √s = 10.58 GeV (BaBar, 514 fb⁻¹; LHCb's inclusive prompt A′→μμ covers the same masses at 13 TeV). Cross section:

σ(e⁺e⁻→γA′) = (4πα²ε²/s)[ln(s/m_e²) − 1](1 − m_A′²/s) ≈ 4.4×10⁴ pb · ε²,

and with BR(A′→μμ) ≈ 0.2 at 3 GeV (R ≈ 2.2, τ channel closed), **σ·BR ≈ 9 fb at ε = 10⁻³** — precisely the level BaBar excludes (their quoted reach 10⁻⁴–10⁻³ over 0.02–10.2 GeV). So the cut **σ·BR ≥ 10 fb ⇔ ε ≳ 10⁻³** is a real, already-delivered measurement.

Predicted σ·BR per region (scaling 9 fb·(ε/10⁻³)²):
- **R36**: ε = 0.1 → ~90 pb. **R31**: 0.034–0.093 → 10–78 pb. **R35**: 0.025–0.081 → 6–59 pb. Grossly excluded already.
- **R6**: 4.4×10⁻⁴–4.7×10⁻² (geo-mean 4.5×10⁻³) → ~180 fb. **R19**: 2.0×10⁻³–1.7×10⁻² → 36 fb–2.6 pb. **R26**: 4.5–7.1×10⁻³ → 180–450 fb. **R24**: 1.0–1.5×10⁻³ → 9–20 fb. **R11**: 2.3–3.0×10⁻³ → 48–81 fb. **R15**: 5.5×10⁻⁴–2.0×10⁻³ → 2.7–36 fb (borderline, geo-mean ≈ 10 fb).
- Everything else sits at ε ≤ 10⁻³ → below 9 fb, most of it far below (12 units never exceed ε = 10⁻⁵ → < 1 ab).

**The honest headline: this measurement has already been made and returned null, so the nine high-ε units are effectively falsified by existing data.** They survive in the scan only because no accelerator observable is in the catalog.

Caveats stated plainly: (i) R0 (333 pts, ε = 10⁻⁶–2.6×10⁻³) and R2 (up to 3.7×10⁻³) straddle the cut — I assign them "no" on their log-median (5×10⁻⁵ and 4×10⁻⁴); R15, R24, R37 (9.7×10⁻⁴) sit within a factor ~2 of it. (ii) m_A′ = 3.161 GeV lands 64 MeV above the J/ψ; LHCb vetoes a window there, so this split leans on BaBar's ~10 MeV dimuon resolution. (iii) R11 at 1.03–1.08 GeV sits on the φ(1020), where BR(A′→μμ) dips to ~0.05–0.1 and searches veto — its 48–81 fb should be read as a factor-2-uncertain number.

### Level 2a — the nine "seen" units

Once a peak exists you read off m_A′ for free (1.03, 1.3, 3.16, 3.1–4.2, 4.73 GeV) — that is not a new experiment, so I don't count it. The genuinely unmeasured quantity is **m_S**, and the only handle is DM-pair production through the (now-known) mediator: a mono-photon recoil-mass endpoint, M_rec² = s − 2√s E_γ, whose **threshold sits at 2m_S**: 9.42 GeV for R6/R15/R24/R26, 9.41–12.58 for R19, versus 4.34 (R11), 3.78–4.51 (R35), 2.00 (R36), 2.21–10.19 (R31 — straddles, assigned low, flagged). Corroborating signature: R36 alone has m_A′ > 2m_S, so its dark photon is ~74% invisible (Γ_inv/Γ_vis ≈ 2.1×10⁻³/7.6×10⁻⁴), a second, independent tell. This node leaves R6/R15/R24/R26 mutually degenerate — they are the identical thermal point differing only in unmeasurable quartics.

### Level 2b — the thirty "not seen" units

Here the cut ε ≈ 10⁻⁵ is exceptionally clean: **all twelve units R5, R9, R10, R14, R18, R21, R22, R23, R27, R29, R32, R38 have ε_max < 10⁻⁵** with no straddlers, while the other eighteen have log-median ε ≥ 10⁻⁵ (R7, R8, R28 straddle by less than a factor 4 and are flagged). σ(pp→A′X)·BR(μμ) ≈ 1 ab at ε = 10⁻⁵ for m_A′ ~ 3 GeV, and cτ = 0.65 cm·(10⁻⁶/ε)² puts that same ε window at cτ = 65 μm–6.5 mm — micro-displaced, i.e. taggable against the prompt Drell-Yan continuum, with b/c → μμX the irreducible background. Below ε ≈ 10⁻⁶ the rate dies and nothing terrestrial survives: those twelve units are separable from the rest but not from each other.

---

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_yes_yes_no_no",
      "lit_review": {
        "name": "BaBar/LHCb prompt dark-photon dimuon search",
        "observable": "sigma(e+e- -> gamma A'(-> mu mu)) >= 10 fb, m_A' = 1-5 GeV ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "All 39 units are one secluded dark-photon Lagrangian (m_S = 1.0-6.3 GeV, m_A' = 1.0-5.5 GeV, m_A' < 2m_S in 36/39 so the A' decays visibly to SM), and the catalog contains no accelerator observable at all. Units differ by five decades in kinetic mixing. Radiative return gives sigma(e+e- -> gamma A') = (4*pi*alpha^2*eps^2/s)[ln(s/m_e^2)-1](1-m_A'^2/s) = 4.4e4 pb * eps^2; with BR(A'->mu mu) ~ 0.2 at 3 GeV this is 9 fb at eps = 1e-3, exactly BaBar's quoted 1e-4 to 1e-3 reach over 0.02-10.2 GeV. Predicted sigma*BR: R36 ~90 pb (eps=0.1), R31 10-78 pb, R35 6-59 pb, R6 ~180 fb, R19 36 fb-2.6 pb, R26 180-450 fb, R11 48-81 fb, R24 9-20 fb, R15 2.7-36 fb; every other unit falls below 9 fb, and twelve of them below 1 ab. The measurement has already been performed and is null, so the nine 'yes' units are effectively falsified by existing data. Caveats: R0 (eps 1e-6 to 2.6e-3) and R2 (to 3.7e-3) straddle the cut and are assigned by log-median (5e-5, 4e-4); R15/R24/R37 lie within a factor ~2 of it; m_A' = 3.161 GeV is 64 MeV above the J/psi, inside LHCb's charmonium veto, so the split leans on BaBar's ~10 MeV dimuon resolution; R11 at 1.03-1.08 GeV sits on the phi(1020) where BR(mu mu) dips to 0.05-0.1. Rejected alternatives, quantitatively: dark self-interaction from the quartics gives sigma/m <= 1e-6 cm^2/g (six decades below cluster bounds); DM-electron scattering gives 5.7e-41*eps^2 cm^2, four decades below Oscura at eps = 1e-3; antiprotons give only 0.02 pbar per annihilation at T < 1 GeV; c*tau <= 10 cm kills all far-detector beam dumps.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R6", "R11", "R15", "R19", "R24", "R26", "R31", "R35", "R36"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R5", "R7", "R8", "R9", "R10", "R12", "R13", "R14", "R16", "R17", "R18", "R20", "R21", "R22", "R23", "R25", "R27", "R28", "R29", "R30", "R32", "R33", "R34", "R37", "R38"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R6+R11+R15+R19+R24+R26+R31+R35+R36",
          "name": "Mono-photon recoil-mass threshold scan for dark pairs",
          "observable": "invisible recoil-mass threshold >= 5 GeV ?",
          "reasoning": "With the A' peak in hand its mass and eps are known, so the one unmeasured quantity is the DM mass. Producing S S* through the now-calibrated mediator and reconstructing M_rec^2 = s - 2*sqrt(s)*E_gamma gives a kinematic edge at exactly 2*m_S: 9.42 GeV for R6/R15/R24/R26, 9.41-12.58 GeV for R19, against 4.34 GeV (R11), 3.78-4.51 GeV (R35), 2.00 GeV (R36) and 2.21-10.19 GeV (R31, which straddles and is assigned low). A second independent tell: R36 alone has m_A' > 2*m_S, so its dark photon is ~74 percent invisible (Gamma_inv/Gamma_vis = 2.1e-3/7.6e-4), while every other unit here has a purely visible A'. R6/R15/R24/R26 remain mutually degenerate afterwards: identical 4.71/3.161/0.04377 thermal points differing only in the dark quartics, whose self-scattering is at most 1e-6 cm^2/g and therefore unmeasurable in principle.",
          "feasibility": "Closest instrument: the Belle II single-photon search at SuperKEKB, which reconstructs recoil mass with ~0.2 GeV resolution (ample for a 5 GeV threshold) and reaches eps^2*alpha_D ~ 1e-8 for on-shell invisible A' at 50/ab. Off-shell continuum S S* production here needs eps^2*alpha_D down to 1.5e-10 for the eps ~ 1e-3, alpha_D = 1.5e-4 units (R6/R15/R24/R26) -- roughly 100x beyond the projected 50/ab reach, i.e. a dedicated multi-hundred-ab^-1 machine or a high-energy muon missing-momentum experiment. R36, R35 and R31 (eps 0.03-0.1, alpha_D up to 7e-3) are already inside Belle II's projected reach, so the split fails only at its heavy end. Dominant systematic: the irreducible e+e- -> gamma nu nubar continuum and single-photon trigger efficiency near the endpoint.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "high threshold", "regions": ["R6", "R15", "R19", "R24", "R26"]},
            {"label": "low threshold", "regions": ["R11", "R31", "R35", "R36"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R7+R8+R9+R10+R12+R13+R14+R16+R17+R18+R20+R21+R22+R23+R25+R27+R28+R29+R30+R32+R33+R34+R37+R38",
          "name": "Micron-displaced dimuon spectrometer at a high-intensity proton facility",
          "observable": "sigma*BR(A' -> mu mu) >= 1 ab, m = 1-5 GeV ?",
          "reasoning": "These thirty units are invisible to prompt bump hunts but still carry eps from 1e-6 to 1e-3. The cut sits at eps ~ 1e-5, where sigma*BR ~ 1 ab for m_A' ~ 3 GeV, and it is unusually clean: R5, R9, R10, R14, R18, R21, R22, R23, R27, R29, R32, R38 all have eps_max < 1e-5 with no straddlers, while the other eighteen have log-median eps >= 1e-5 (R7, R8, R28 straddle by less than a factor 4). The enabling handle is lifetime, not luminosity alone: c*tau = 0.65 cm*(1e-6/eps)^2 at m_A' = 3.16 GeV puts eps = 1e-6 to 2.5e-5 at c*tau = 65 micron to 6.5 mm, a micro-displaced vertex that separates the signal from the prompt Drell-Yan continuum. Below eps ~ 1e-6 the eps^2 production rate dies and the twelve 'no' units become unreachable by any terrestrial probe; they also differ from each other only in the dark quartics, so their residual degeneracy is physical rather than instrumental.",
          "feasibility": "Closest instrument: the LHCb inclusive A'->mu mu search (5.5/fb), which reaches eps ~ 1e-3 prompt in the 1-5 GeV window; LHCb Upgrade II (300/fb) with displaced tagging projects roughly eps ~ 1e-4 there. Reaching eps = 1e-5 requires about 10x in eps, i.e. ~100x in signal cross-section, beyond Upgrade II -- a dedicated next-generation forward spectrometer with ~10 micron vertexing and full heavy-flavour veto. Dominant systematic: displaced b/c -> mu mu X background, which is irreducible below ~100 micron and sets the true floor; secondary is the charmonium veto window, which blinds m_A' = 3.161 GeV at a hadron machine and would have to be recovered with a mass resolution better than 20 MeV.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R7", "R8", "R12", "R13", "R16", "R17", "R20", "R25", "R28", "R30", "R33", "R34", "R37"]},
            {"label": "not seen", "regions": ["R5", "R9", "R10", "R14", "R18", "R21", "R22", "R23", "R27", "R29", "R32", "R38"]}
          ]
        }
      ]
    }
  ]
}
```

---

<!-- g09_pair-ynyyyy.md -->

## Reasoning — leaf `root_yes_no_yes_yes_yes_yes_no` (426 pts, 6 units)

*(Note on references: the prompt's output instruction forbids tool use in this reply, so I could not run WebSearch/WebFetch verification. I have therefore cited only three arXiv IDs I hold with high confidence — Cuoco/Krämer/Korsmeier PRL 118, 191102; Cui/Yuan/Tsai/Fan PRL 118, 191101; Pospelov/Ritz/Voloshin PLB 662, 53 — and no others.)*

### What actually differs between the six units

All six sit in the same direct-detection box (σ_SI within 1–10× XLZD, seen at LZ and DarkSide, BR(h→inv) 0.0032–0.01), and five of them are the *same* Lagrangian (`CsSg_U1p[+]_DM.Z2+3+4+5`); only R5 is a different Lagrangian (real singlet, no dark sector). The Higgs-portal couplings are nearly identical across all six (α1 = 0.0021–0.0026), which is exactly why the catalog cannot separate them — every catalog observable except the ID ones is a monotone function of α1 and m_DM, and m_DM only spans 68 → 95 GeV.

The **dark sector**, which the catalog never probes (ε enters only the dilepton recast, and every ε here except R1's is ≤ 1e-4), is where the units are wildly different. Two derived quantities do the work:

**(1) Present-day annihilation into dark photons.** For a complex scalar with dark charge 1, χχ\* → Z′Z′ is s-wave with σv ≈ π α_D²/m_χ² × phase space, α_D = g_U1p²/4π:

| unit | m_DM | m_Z′ | g_U1p | α_D | Z′Z′ open? | σv(Z′Z′) today |
|---|---|---|---|---|---|---|
| R0 | 67.5–69.8 | 20.4–34.5 | 0.1483 | 1.74e-3 | **yes** (2m_Z′ ≤ 69 < 2m_χ) | **≈ 2e-26 cm³/s** |
| R1 | 94.2 | 1989–2831 | 0.36–0.42 | 1.0–1.4e-2 | no (m_Z′ ≫ m_χ) | ~1e-33 (ε²-suppressed s-channel) |
| R2 | 94.9 | 22.2 | 0.0118 | 1.10e-5 | yes | 5e-31 cm³/s |
| R3 | 94.5–94.8 | 10.35 | 0.00302 | 7.2e-7 | yes | 2e-33 cm³/s |
| R4 | 94.4–94.7 | 1.0 | 0.0030 | 7.2e-7 | yes | 2e-33 cm³/s |
| R5 | 91.6–92.0 | — | — | — | — | 0 |

R0 is a **secluded thermal relic** (Pospelov–Ritz–Voloshin): its α_D reproduces ⟨σv⟩ ≈ 2×10⁻²⁶ cm³/s *by itself*, unsuppressed today. The Z′ (20–34 GeV, ε=1e-6) has cτ ≈ 0.05 cm — prompt on any astrophysical scale — and decays by charge²: ≈ 55 % hadronic, ≈ 45 % into e/μ/τ pairs. So R0 injects antiprotons and hard leptons into the halo with a 4-body cascade spectrum ending at 68 GeV. Everything else is a pure Higgs-portal annihilator: with α1 ≈ 0.0021–0.0026 (versus λ_hs ≈ 0.03–0.05 needed for a thermal ~90 GeV singlet), σv today is ≈ 5e-29–1e-27 cm³/s — at least 20× below any current cosmic-ray sensitivity. (Caveat: if the scan's α1 normalization differs from λ_hs/2 by a factor of 2–4, these σv values move up by ≤16×, still ≥10× below the discriminating threshold.)

**(2) The dark photon itself.** cτ(Z′) = ħc/Γ with Γ ≈ (1/3)αε²m_Z′·N_eff: R4 → **2.7 cm at 1.0 GeV**; R3 → **1.2 mm at 10.35 GeV**; R2 → **0.1 μm (prompt) at 22.2 GeV** but with ε² = 5.8e-9, i.e. 5800× the production rate of R3/R4; R1 → a genuine 2–2.8 TeV resonance with ε e = 0.030 coupling to the EM current; R5 → nothing at all.

### Level 1 — AMS-02 antiproton flux

The catalog's indirect-detection entries are γ-rays (Fermi, CTA) and neutrinos (IceCube-Gen2), all in the WW channel. Charged cosmic-ray antiprotons are a genuinely different measurement (different target — the local halo — different backgrounds, different systematics), and for m ~ 70 GeV with a hadronic final state AMS-02 is the single most sensitive probe in existence: the published analyses reach, and in fact report a hint at, σv ≈ (1–3)×10⁻²⁶ cm³/s for m_DM ≈ 50–90 GeV.

Predicted values: **R0** gives σv ≈ 2×10⁻²⁶ cm³/s with 55 % of it into Z′→qq̄ at E_Z′ ≈ 68 GeV; halving for non-self-conjugate DM, the self-conjugate-equivalent rate is ≈ 1×10⁻²⁶ cm³/s with a p̄ spectrum peaking at T ≈ 5–15 GeV — squarely inside the AMS-02 hint/sensitivity band. **R1–R5** give ≤ 1×10⁻²⁷ cm³/s (R1: 1e-33 from the dark sector, ~1e-28 from the portal; R2: 5e-31; R3/R4: 2e-33; R5: ~5e-29), i.e. at least a factor 20 below AMS-02 reach and 5–7 orders of magnitude below R0 in the dark-sector channel.

Consistency check with the tree: Fermi dSph limits at 68 GeV for hadronic channels are ≈ 3×10⁻²⁶ cm³/s, weakened by ~2× for a 4-body cascade and another 2× for complex DM — so R0 sits *just below* the γ-ray limits, which is exactly why the catalog's Fermi/CTA nodes never fired on this path. Antiprotons are the few-× more sensitive channel at this mass and channel, which is what makes this a real split rather than a repackaging of the catalog.

Honest caveat: the p̄ interpretation is systematics-dominated — CR propagation (diffusion halo height, secondary production cross sections) and solar modulation — and the reported 60–90 GeV excess is contested. This is a discriminator at the ~2–3σ level with current data, not a clean yes/no; it strengthens with the full AMS-02 dataset and correlated-error treatment.

**Split: yes → R0; no → R1, R2, R3, R4, R5.**

### Level 2a — displaced GeV dark photon (R4 out)

R4's Z′ is 1.0 GeV with ε = 1e-6 → cτ = 2.7 cm. This is the notorious dark-photon "gap": too short-lived for beam dumps (SHiP/NA62-dump need γcτ ≳ 50 m; here γcτ ≈ 0.7 m, so they are blind above ε ≈ 1e-7), too weakly coupled for prompt searches. The right instrument is a decay volume of 0.1–3 m immediately behind a high-intensity thin target, with a dimuon/dielectron vertex detector. Predicted signature: a narrow ℓ⁺ℓ⁻ peak at 1.00 GeV with vertices at 1–100 cm; R1 (2.4 TeV), R2 (22.2 GeV), R3 (10.35 GeV), R5 (nothing) all give zero yield in this mass/lifetime window.

### Level 2b — 5–30 GeV dimuon sweep to ε = 1e-6 (R2 vs R3)

R2 and R3 both have Z′ masses in the 10–25 GeV window but differ by 76× in ε and 2× in mass. A dimuon spectrometer able to reach ε = 1e-6 across 5–30 GeV reads them off directly by peak mass: **10.4 GeV (R3, cτ = 1.2 mm, ε = 1e-6)** versus **22.2 GeV (R2, prompt, ε = 7.6e-5)**; R1 and R5 give no peak anywhere in the window. Note R3 is by far the harder of the two — its rate is 5800× below R2's — so this node's yes-branches have very unequal cost.

### Level 2c — ultra-precision m_W (R1 vs R5)

R1's Z′ (1989–2831 GeV, ε = 0.1, g_U1p ≈ 0.4) is the only unit with a *heavy* kinetically mixed vector. Z–Z′ mixing angle θ ≈ ε s_W m_Z²/m_Z′² = 1.0e-4 (m_Z′ = 1989) to 5.0e-5 (2831), giving Δρ = θ² m_Z′²/m_Z² ≈ 4.8e-6 → 2.4e-6, hence |m_W − m_W(SM)| ≈ 0.27 → 0.14 MeV and δsin²θ_eff ≈ 1.6e-6. R5 has no new vector at all: the shift is identically zero, and R2/R3/R4's Z′ are too light and too weakly mixed to matter (their Δρ ≲ 1e-16). I deliberately avoid the pp → Z′ → ℓℓ route (catalog) and the LEP-II contact-interaction route (Λ = m_Z′/εe = 66–93 TeV, versus ~15–20 TeV reachable at FCC-ee — hopeless); the Z-pole/WW-threshold ρ-parameter route is 3–5× more powerful for this operator.

### Physics flag worth recording (not used in any split)

For the U(1)′ units the Z′–DM current is off-diagonal between the two real components of the complex scalar, which are degenerate here (no dark Higgs vev — the mass is Stueckelberg), so Z′ exchange gives a **proton-only, kinematically-elastic** DD amplitude that micrOMEGAs will not report if it only builds the diagonal elastic amplitude. Taking the parameters at face value: σ_p(Z′) ≈ 4.8e-46 cm² for R1 and ≈ 3.3e-47 cm² for R2 — 10²–10³× above the Higgs-portal piece that put these points in this leaf, and isospin-violating (Xe/Ar/Ge ratios would break A²-scaling). If that channel is real, R1 and R2 do not belong in this leaf at all. I did not build a split on it because it contradicts the tree's own σ_SI inputs, but it is worth checking in the pipeline.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_yes_yes_no",
      "lit_review": {
        "name": "AMS-02 antiproton flux, DM cascade component",
        "observable": "sigma_v(hadronic) >= 1e-26 cm^3/s at m_DM ~ 70 GeV ?",
        "refs": ["arXiv:1610.03071", "arXiv:1610.03840", "arXiv:0711.4866"],
        "reasoning": "R0 is a secluded thermal relic: g_U1p=0.148 gives alpha_D=1.74e-3 and chi chi* -> Z'Z' is open (2 m_Z' <= 69 GeV < 2 m_DM = 135 GeV), so sigma_v = pi alpha_D^2/m_chi^2 ~ 2e-26 cm^3/s, s-wave and unsuppressed today (1e-26 cm^3/s self-conjugate-equivalent for complex DM). The 20-34 GeV Z' has ctau = 0.05 cm and decays by charge^2: ~55% hadronic, giving antiprotons peaking at T ~ 5-15 GeV with an endpoint at 68 GeV -- exactly the mass/rate band where AMS-02 antiprotons are most sensitive and where a (1-3)e-26 cm^3/s excess is reported. All other units are pure Higgs-portal annihilators with alpha1 = 0.0021-0.0026, i.e. 12-20x below the lambda_hs ~ 0.04 needed for a thermal 90 GeV singlet, so sigma_v <= 1e-27 cm^3/s: R1 1e-33 (Z'Z' closed, m_Z' = 2-2.8 TeV), R2 5e-31 (alpha_D = 1.1e-5), R3/R4 2e-33 (alpha_D = 7.2e-7), R5 zero dark sector. Consistency with the tree: Fermi dSph hadronic limits at 68 GeV (~3e-26, weakened ~4x by the 4-body cascade and complex-DM factor) sit just above R0's prediction, which is why the catalog gamma-ray nodes never fired; antiprotons are the few-x more sensitive channel at this mass. Honest caveat: this is a 2-3 sigma discriminator, dominated by CR propagation, secondary-production cross sections and solar modulation, and the 60-90 GeV excess is contested.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0"]},
          {"label": "not seen", "regions": ["R1", "R2", "R3", "R4", "R5"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R3+R4+R5",
          "name": "Displaced GeV dark-photon spectrometer",
          "observable": "l+l- vertex at m = 1.0 GeV, ctau ~ 3 cm ?",
          "reasoning": "R4's Z' is m = 1.00 GeV with eps = 1e-6: Gamma = (1/3) alpha eps^2 m N_eff = 7e-15 GeV, so ctau = 2.7 cm -- the dark-photon 'gap' where beam dumps are blind (they need gamma*ctau >~ 50 m; here it is ~0.7 m) and prompt searches lack the rate. A 0.1-3 m decay volume behind a thin high-intensity target with dilepton vertexing reads it directly. Predictions elsewhere: R3 gives ctau = 1.2 mm at 10.35 GeV (outside this mass window), R2 is prompt at 22.2 GeV (ctau = 0.1 um), R1 sits at 2.0-2.8 TeV, R5 has no vector at all -- all give zero yield at m = 1 GeV with cm-scale displacement.",
          "feasibility": "Closest instruments: LHCb Run 3/Upgrade inclusive displaced dimuon search, reaching eps^2 ~ 1e-11 (eps ~ 3e-6) near 1 GeV, and SHiP/NA62-dump, which are blind above eps ~ 1e-7 at this mass. Required improvement ~3x in eps (~10x in rate), plus a decay volume matched to ctau ~ 3 cm rather than 50 m. Dominant systematic: combinatorial displaced-vertex background from K_S/Lambda decays and material interactions inside the fiducial volume.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R4"]},
            {"label": "not seen", "regions": ["R1", "R2", "R3", "R5"]}
          ]
        },
        {
          "attach_to": "R1+R2+R3+R5",
          "name": "Dimuon resonance sweep to eps = 1e-6",
          "observable": "m(mu+mu-) peak at 10.4 or 22.2 GeV ?",
          "reasoning": "R3 and R2 both carry a Z' in the 10-25 GeV window but differ by 76x in kinetic mixing: R3 is m = 10.35 GeV, eps = 1e-6, ctau = 1.2 mm; R2 is m = 22.2 GeV, eps = 7.6e-5, prompt (ctau = 0.1 um) with 5800x the production rate. The peak mass alone labels the unit. R1's Z' is at 1989-2831 GeV and R5 has none, so both give a flat dimuon continuum across 5-30 GeV.",
          "feasibility": "Closest instruments: CMS dimuon scouting (11.5-45 GeV, eps >~ 1e-3) and LHCb inclusive dimuon (Upgrade II projections eps >~ 2e-4 at 10-30 GeV). R2 needs eps = 7.6e-5: ~3x in eps, ~10x in rate beyond Upgrade II. R3 needs eps = 1e-6: ~200x in eps, ~4e4 in rate, with the 1.2 mm displacement as the only background handle. Dominant systematic: Drell-Yan and heavy-flavour continuum under a peak of intrinsic width Gamma/m ~ 1e-11, so the search is entirely detector-mass-resolution limited.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "10.4 GeV", "regions": ["R3"]},
            {"label": "22.2 GeV", "regions": ["R2"]},
            {"label": "no peak", "regions": ["R1", "R5"]}
          ]
        },
        {
          "attach_to": "R1+R5",
          "name": "Ultra-precision m_W test of TeV kinetic mixing",
          "observable": "|m_W - m_W(SM)| >= 0.3 MeV ?",
          "reasoning": "R1 is the only unit with a heavy kinetically mixed vector: m_Z' = 1989-2831 GeV at eps = 0.1. Z-Z' mixing theta = eps s_W m_Z^2/m_Z'^2 = 1.0e-4 (at 1989 GeV) to 5.0e-5 (at 2831 GeV) gives Delta rho = theta^2 m_Z'^2/m_Z^2 = 4.8e-6 to 2.4e-6, i.e. |delta m_W| = 0.27 to 0.14 MeV and |delta sin^2 theta_eff| = 1.6e-6. R5 is a real singlet with no new vector: the shift is exactly zero. The pp -> Z' -> ll route is already in the catalog and the LEP-II/FCC-ee contact-interaction route is hopeless here (the induced scale is Lambda = m_Z'/(eps e) = 66-93 TeV versus ~15-20 TeV reachable), so the rho-parameter route is the strongest handle by 3-5x.",
          "feasibility": "Closest instrument: FCC-ee WW-threshold run, projected delta m_W = 0.25-0.5 MeV (and delta sin^2 theta_eff ~ 2-6e-6 at TeraZ); current world average is +-9 MeV with an unresolved ATLAS/CDF tension of tens of MeV. Required improvement ~3-5x beyond the best proposed machine, i.e. ~0.1 MeV. Dominant systematic is not statistics but beam-energy calibration and the theory wall: missing higher-order EW corrections to the WW lineshape currently sit at ~0.5 MeV, so the theory prediction must improve in step.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "shift seen", "regions": ["R1"]},
            {"label": "no shift", "regions": ["R5"]}
          ]
        }
      ]
    }
  ]
}
```

---

<!-- g10_pair-nnnyyyn.md -->

# Reasoning

## What this leaf actually is, physically

All 25 units sit at `BR(h→inv) ∈ [0.01, 0.032]` with `alpha1 ≈ 0.0019–0.0033` — the Higgs portal is essentially *identical* across every region, which is exactly why the catalog's Higgs and direct-detection observables have run out of resolving power. The catalog's indirect-detection observables (CTA/Fermi in `WW`, IceCube-Gen2 neutrinos) are *kinematically inapplicable* here: `MDM ∈ [1, 5.4] GeV`, so `WW` is closed by a factor of ~30 in mass. The tree therefore never got to ask the one question that matters for this leaf.

The real structure is a **secluded dark-photon sector** (Pospelov–Ritz–Voloshin type). Check the numbers: for a complex scalar annihilating to two dark photons, `σv = π α_D²/m_χ² × (1−m_V²/m_χ²)^{3/2}/(1−m_V²/2m_χ²)²`.

- Heavy regions (`gU1p ≈ 0.042`, `α_D = 1.40e-4`, `m_χ ≈ 5 GeV`): `σv ≈ 2.8e-26 cm³/s`
- Light regions (`gU1p ≈ 0.030`, `α_D ≈ 7.2e-5`, `m_χ ≈ 1.7 GeV`): `σv ≈ 3.5e-26 cm³/s`

Both land on the thermal value. So `gU1p` is not a free parameter in this leaf — it is *tuned by the relic constraint* to the secluded channel `χχ* → Z'Z' → 4(ℓ/π)`. That immediately gives the discriminator the catalog is missing.

## Level 1 — the Planck CMB energy-injection bound

`χχ* → Z'Z'` for a complex scalar is **s-wave**, so `σv` today equals `σv` at freeze-out — *unless* the channel is closed or sitting exactly at threshold. That's the split, and the two sides differ by 25–30 orders of magnitude in the observable.

**Channel open** (`m_χ > m_Z'`, phase-space factor `O(1)`), predicted `p_ann = f_eff⟨σv⟩/m_χ` with `f_eff ≈ 0.3` for the μ/π-rich 4-body final state:

| regions | m_χ (GeV) | σv (cm³/s) | p_ann (cm³ s⁻¹ GeV⁻¹) | vs Planck 3.2e-28 |
|---|---|---|---|---|
| R2, R6, R7, R8, R21, R22 | 4.8–5.4 | 2.8e-26 | 1.7e-27 | 5× above |
| R5, R11, R23 | 4.1–5.1 | 3.3e-26 | 2.2e-27 | 7× above |
| R3, R4, R9, R18 | 2.3 (log-mid) | 6.4e-26 | 8.3e-27 | 26× above |
| R12, R13, R20 | 1.68–1.72 | 3.5e-26 | 6.3e-27 | 20× above |
| R1 | 1.43 (log-mid) | 6.7e-26 | 1.4e-26 | 44× above |

**Channel closed or at threshold** — these are the escape cases:
- `R0, R15, R16, R17, R24`: `MDM = MZp = 1.000 GeV` exactly. `β_f = v/√2 ≈ 7e-4` today, and `σv ∝ β_f³` → `σv ≈ 3e-34 cm³/s`, `p_ann ≈ 9e-35`. Classic *forbidden* DM: works at freeze-out (`v² ≈ 0.1`), dead today.
- `R10`: same (`1.000/1.000`), despite `ε = 0.1`.
- `R14` (`m_χ = 1.008 < m_{Z'} = 21.0`) and `R19` (`1.0 < 4.73`): `Z'Z'` closed outright; relic set by `χχ* → Z'* → SM`, which for scalar–antiscalar into a vector is **p-wave** → `σv(today) ≈ 1e-31 cm³/s`, `p_ann ≈ 3e-32`.

So the measured quantity `p_ann` is **5–44× above** the Planck 2018 95% CL bound for 17 units and **≥1e4× below** it for 8 units. There is no overlap. Honest framing: this is not merely a discriminator, it is a *viability verdict* — the 17 "yes" units are already in tension with existing CMB data, and the scan evidently did not impose it. The dominant systematic is `f_eff`, which for π±/μ± final states carries maybe a factor-2 uncertainty — irrelevant against a 5–44× margin, and irrelevant to the 25-decade gap at the split.

(Caveat on sourcing: the output format for this task forbade tool use, so I could not re-resolve the arXiv IDs. I have cited only two, both of which I am confident in: Planck 2018 VI cosmological parameters, and Slatyer's `f_eff` generalization paper that defines the `p_ann` bound I am quoting.)

## Level 2a — the 17 CMB-loud units: annihilation spectral endpoint

They all share `σv ≈ 3e-26 cm³/s`, so the *rate* carries no information. The **spectrum** does: `χχ* → Z'Z'`, each `Z'(≈1 GeV)` decaying to π±/π⁰/ℓ, gives a photon spectrum with a hard cutoff at `E_γ = m_χ`. The endpoint splits cleanly into two clusters:

- **Endpoint 4.1–5.4 GeV**: R2, R5, R6, R7, R8, R11, R21, R22, R23
- **Endpoint 1.0–2.0 GeV**: R1, R12, R13, R20

R3, R4, R9, R18 are the weak point: their DBSCAN bounding boxes span `MDM = 1 → 5.3`, so the region genuinely straddles a 3 GeV cut. I place them on the low side by log-midpoint (2.24–2.33 GeV) and flag it as marginal — that assignment is the least reliable claim in this answer.

The endpoint is a *spectral* feature, so it is immune to the J-factor normalization uncertainty that dominates dwarf-spheroidal analyses — that is the reason to prefer it over a flux measurement. The catch is photon statistics: measuring a cutoff to ±30% at 1–5 GeV needs a detection, not a limit, and Fermi-LAT's dwarf-stacking sensitivity at these masses (`~2e-27 cm³/s`) is only marginally below the predicted `3e-26 cm³/s` once you demand enough >1 GeV photons to locate the break.

## Level 2b — the 8 CMB-quiet units: cm-scale Z' decay length

Six of these have `MZp = 1.000 GeV` with `B(Z'→inv) = 0` (the DM is too heavy for `Z'→χχ`), so the Z' decays visibly to `e⁺e⁻/μ⁺μ⁻/ππ`, with `Γ_tot ≈ 3Γ_ee ≈ 7e-3 ε² GeV`, i.e. **cτ = 2.8e-12/ε² cm**:

| region | ε (log-mid) | cτ |
|---|---|---|
| R24 | 1.2e-6 | 1.9 cm |
| R15 | 1.8e-6 | 8.7 mm |
| R17 | 2.0e-6 | 7.0 mm (lower edge 1.8 mm — marginal) |
| R16 | 7.9e-6 | 0.45 mm |
| R0 | 3.9e-5 | 18 μm |
| R10 | 0.1 | prompt (~1e-10 cm) |
| R14, R19 | — | no 1 GeV resonance at all (Z' at 21.0 / 4.73 GeV, invisible) |

This is precisely the sensitivity hole noted in the LLP audit: `cτ ≲ 3 cm` is too short for any far detector (SHiP, FASER2, MATHUSLA all require the Z' to survive tens of metres) and `ε ≲ 1e-5` is too rare for prompt resonance searches. Nothing existing or proposed covers `cτ ∈ [2 mm, 3 cm]` at `m_A' ≈ 1 GeV` — hence a novel instrument.

R0 is the honest weakness here: its ε bounding box spans `1e-6 → 1.5e-3`, so its low-ε tail would populate the "yes" side. I assign it by log-midpoint.

Independent cross-check worth recording (not used as the node, because DAMIC-M and SENSEI-100 already do it): DM–electron scattering via the Z', `σ̄_e = 16π α α_D ε² μ_{χe}²/m_{Z'}⁴`, gives **R10 = 2.9e-41, R14 = 7.9e-42, R19 = 5.4e-42 cm²** versus **< 1e-44 cm²** for R0/R15/R16/R17/R24 — a 3-decade gap that peels off exactly the three loud units. That is a cleaner cut than the lifetime one, and it is reachable by funded detectors, so an experimentalist should run it too; it just isn't a *novel* proposal.

## What this cannot do

The two Lagrangians are **not** separated. R24 is the sole `CsSg_U1p[+]_DM.Z2` unit and it ends up grouped with R15 and R17 (both `Z2+3+4+5`). This is not a failure of imagination: the entire difference between the two builds is the pair of dark-sector quartics `α3 si sr³` and `α5 si³ sr`, which carry no SM leg. The only observable they touch is DM self-interaction, and at `α2 ≲ 10`, `m = 1 GeV` that is `σ/m ≈ 4e-4 cm²/g` (R24) versus `4e-10 cm²/g` (R15) — a 6-decade contrast that is nonetheless 200–2000× below the ~0.1–1 cm²/g reach of cluster-merger and dwarf-rotation-curve constraints. I am not proposing it; I am recording that it is the only handle and that it is out of reach by more than two orders of magnitude.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_yes_yes_yes_no_no",
      "lit_review": {
        "name": "Planck CMB energy-injection bound on s-wave annihilation",
        "observable": "f_eff x <sigma v> / m_chi >= 3.2e-28 cm^3/s/GeV ?",
        "refs": ["arXiv:1807.06209", "arXiv:1506.03811"],
        "reasoning": "gU1p is fixed by the relic constraint to the secluded channel chi chi* -> Z'Z', giving sigma v = pi alpha_D^2/m_chi^2 x phase space ~ 3e-26 cm^3/s in every region. For a complex scalar this is s-wave, so sigma v today equals sigma v at freeze-out WHENEVER the channel is open. Open regions: heavy set (gU1p 0.040-0.044, m_chi 4.1-5.4 GeV) gives sigma v = 2.8-3.3e-26 and p_ann = 1.7-2.2e-27, i.e. 5-7x above the Planck 95% CL bound 3.2e-28 cm^3/s/GeV; light set R1/R12/R13/R20 (m_chi 1.4-1.7 GeV) gives p_ann = 6.3e-27 to 1.4e-26, 20-44x above; the mass-straddling set R3/R4/R9/R18 (log-mid 2.3 GeV) gives 8.3e-27, 26x above. Closed/threshold regions escape by 25-30 orders of magnitude: R0/R10/R15/R16/R17/R24 have MDM = MZp = 1.000 GeV exactly, so beta_f = v/sqrt(2) = 7e-4 today and sigma v ~ beta_f^3 -> 3e-34 cm^3/s, p_ann ~ 9e-35 (forbidden DM: alive at freeze-out with v^2 ~ 0.1, dead today); R14 (m_chi 1.008 < MZp 21.0) and R19 (1.0 < 4.73) have Z'Z' shut entirely and annihilate through an off-shell Z' into a vector, which is p-wave, giving sigma v ~ 1e-31 and p_ann ~ 3e-32. The catalog's CTA/Fermi WW and IceCube channels are kinematically closed for 1-5 GeV DM, so this observable is genuinely absent from the tree. Dominant systematic is f_eff (factor ~2 for the pi/mu-rich 4-body final state), negligible against a 5-44x margin and irrelevant to the 25-decade gap at the cut. Honest note: the 'yes' branch is therefore already in tension with existing CMB data, not merely distinguishable.",
        "status": "Splits!",
        "outcomes": [
          {"label": "above bound", "regions": ["R1", "R11", "R12", "R13", "R18", "R2", "R20", "R21", "R22", "R23", "R3", "R4", "R5", "R6", "R7", "R8", "R9"]},
          {"label": "below bound", "regions": ["R0", "R10", "R14", "R15", "R16", "R17", "R19", "R24"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R11+R12+R13+R18+R2+R20+R21+R22+R23+R3+R4+R5+R6+R7+R8+R9",
          "name": "GeV gamma-ray annihilation endpoint spectroscopy",
          "observable": "photon spectrum cutoff energy >= 3 GeV ?",
          "reasoning": "All 17 regions share sigma v ~ 3e-26 cm^3/s, so the flux normalization carries no information; the spectrum does. chi chi* -> Z'Z' with each Z'(~1.0-1.5 GeV) decaying to pi+-/pi0/leptons produces a photon spectrum with a hard kinematic cutoff at E_gamma = m_chi. Predicted endpoints: 4.87-5.42 GeV (R2), 3.82-5.13 (R5), 4.95-5.27 (R6), 4.93-5.28 (R7), 4.81-5.40 (R8), 4.09-5.02 (R11), 4.84-4.92 (R21), 4.84-4.87 (R22), 4.14-4.85 (R23) versus 1.0-2.04 GeV (R1), 1.681 (R12), 1.680 (R13), 1.715 (R20). Because the endpoint is a spectral feature it is immune to the J-factor normalization uncertainty that dominates dwarf analyses. Marginal, and stated as such: R3, R4, R9, R18 have bounding boxes spanning MDM = 1 to 5.3 GeV and are assigned to the low side only by log-midpoint (2.24-2.33 GeV); their true membership is genuinely mixed.",
          "feasibility": "Closest instrument is Fermi-LAT: 0.1-300 GeV, dE/E ~ 10% at 1-10 GeV, dwarf-stacking sensitivity ~2e-27 cm^3/s at m_chi = 5 GeV in leptonic channels. Setting a limit is already possible; locating a cutoff to +-30% requires a >5 sigma detection with sufficient >1 GeV photon statistics, i.e. roughly 3-10x more effective-area x exposure than 15 yr of Fermi (a next-generation GeV telescope such as AMEGO-X or APT, or a Fermi successor). Dominant systematic is Galactic diffuse-emission modelling near the cutoff, not the J-factor.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "high endpoint", "regions": ["R11", "R2", "R21", "R22", "R23", "R5", "R6", "R7", "R8"]},
            {"label": "low endpoint", "regions": ["R1", "R12", "R13", "R18", "R20", "R3", "R4", "R9"]}
          ]
        },
        {
          "attach_to": "R0+R10+R14+R15+R16+R17+R19+R24",
          "name": "Near-target displaced dilepton spectrometer",
          "observable": "c*tau of 1.0 GeV dilepton resonance >= 2 mm ?",
          "reasoning": "Six of these eight have MZp = 1.000 GeV with B(Z'->invisible) = 0 (DM too heavy for Z'->chi chi), so the Z' decays visibly with Gamma_tot ~ 3 Gamma_ee ~ 7e-3 eps^2 GeV, i.e. c*tau = 2.8e-12/eps^2 cm. Predicted proper decay lengths: R24 1.3-2.8 cm, R15 2.7-28 mm, R17 1.8-28 mm, versus R16 0.45 mm, R0 18 microns (log-mid eps 3.9e-5), R10 prompt (eps = 0.1, c*tau ~ 1e-10 cm). R14 (MZp 21.0 GeV) and R19 (MZp 4.73 GeV) have B_inv ~ 1 and produce no 1 GeV resonance at all, so they sit unambiguously on the 'no' side. This window is a genuine literature gap: c*tau <~ 3 cm is far too short for SHiP/FASER2/MATHUSLA, while eps <~ 1e-5 is too rare for prompt resonance searches. Two honest weaknesses: R17's lower edge (1.8 mm) sits right at the cut, and R0's eps bounding box spans 1e-6 to 1.5e-3 so its low-eps tail would leak to the 'yes' side. Independent cross-check that peels off the same 'no' subset more cleanly: DM-electron scattering via the Z' gives sigma_e-bar = 2.9e-41 (R10), 7.9e-42 (R14), 5.4e-42 (R19) versus < 1e-44 cm^2 for R0/R15/R16/R17/R24 - a 3-decade gap already within reach of DAMIC-M and SENSEI-100, which is why it is not proposed as the novel node. Not separated by anything here: R24 is the only CsSg_U1p[+]_DM.Z2 unit and lands with R15/R17; the two Lagrangians differ only in dark-sector quartics with no SM leg, whose sole observable is self-interaction, sigma/m ~ 4e-4 cm^2/g (R24) versus 4e-10 (R15), i.e. 200-2000x below cluster-merger sensitivity.",
          "feasibility": "Closest instruments: LHCb's VELO displaced dimuon dark-photon search, whose displaced arm is published only for m < 350 MeV, and DarkQuest/SpinQuest at Fermilab, whose decay volume sits 5-12 m downstream of the target and so is blind to c*tau ~ cm. The proposal is a VELO-class silicon vertex tracker with a fiducial decay volume 2 mm-20 cm from the production point at a high-intensity proton target (~1e18 POT), requiring vertex resolution <~ 300 microns on 1 GeV dilepton pairs - a ~25x shorter baseline than any proposed dark-photon experiment, roughly 3-10x beyond what LHCb Run 3/4 will reach in this mass window. Dominant systematic is displaced-dimuon background from heavy-flavour decays and material interactions at m_ll ~ 1 GeV, sitting in an environment with far higher occupancy than any existing vertex detector operates in.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "displaced", "regions": ["R15", "R17", "R24"]},
            {"label": "prompt or absent", "regions": ["R0", "R10", "R14", "R16", "R19"]}
          ]
        }
      ]
    }
  ]
}
```

---

<!-- g11_pair-ynyynn.md -->

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

---

<!-- g12_pair-ynyynyy.md -->

## Reasoning

### What is actually variable in this leaf

All 13 units belong to **one** Lagrangian (`CsSg_U1p[+]_DM.Z2+3+4+5`: complex scalar singlet `s = (sr + i·si)/√2` with dark charge −1, plus a dark photon Z′ that mixes kinetically with hypercharge). Before choosing an observable I checked which of the 11 scanned parameters can move a *measurable* quantity, because most of them cannot:

**1. `gU1p` is pinned by the relic density — it carries no information.**
Since M_DM ≈ 5 GeV and M_Z′ ≈ 1–2.2 GeV, the Z′ is far too light to decay to DM, and the annihilation channel is the secluded one, `s s* → Z′Z′` through the gauge seagull (α_D = g′²/4π = 1.42×10⁻⁴):

σv ≈ π α_D²/M_DM² = π(1.42×10⁻⁴)²/(5 GeV)² = 2.5×10⁻⁹ GeV⁻² ≈ **3.0×10⁻²⁶ cm³/s**

— i.e. exactly thermal. That is why every single region reports gU1p ∈ [0.0417, 0.0443], a ±3% spread. **The indirect-detection *rate* is therefore identical to ~10% in all 13 units and can never split them.** Only the *shape* of the annihilation spectrum (which depends on M_DM and M_Z′) can.

**2. `alpha1` is spent by the path.** The portal is H²sr², so BR(h→inv) ∝ α1². The path fixes BR ∈ [0.032, 0.1] — a factor 3 in BR, i.e. a factor 1.73 in coupling — and indeed α1 spans [0.0035, 0.0062], a factor 1.77. The mapping is one-to-one and complete. The same α1 fixes the Higgs-portal σ_SI (all units sit in the same "XLZD yes / LZ no" band), so **nothing in Higgs physics or in a better xenon/argon experiment can split this leaf** — that is already the path.

**3. The dark quartics α2–α6 are unobservable.** They generate DM self-interaction only through contact terms: with λ = 10 (the largest α4/α3 anywhere in the leaf) and M = 5 GeV,
σ_self ≈ λ²/(256π M²) = 5×10⁻³ GeV⁻² = 1.9×10⁻³⁰ cm² → **σ/m ≈ 2×10⁻⁷ cm²/g**, i.e. 10⁶ below Bullet-Cluster/cluster-shape sensitivity (~0.1–1 cm²/g). Z′-exchange self-scattering is worse (5×10⁻¹⁰ cm²/g), and the Z′ current is *off-diagonal* (sr↔si), so it also gives no elastic Z′-mediated direct detection. The quartics only control the heavy partner si (pushed to m_si ≈ √(M_DM² + α1v²/2) ≈ 12 GeV by the portal, which couples to sr alone) and its decay si → sr Z′ — an early-universe-only effect with no present-day signature. **This is a genuine, and I think unavoidable, conclusion: α2–α6 are dark.**

**So the only physical handles left are ε, M_Z′ and M_DM.** Everything below uses those three, in three physically distinct measurement modalities (accelerator dark-photon production; resonance mass spectroscopy; cosmic-ray spectral edge).

### Level 1 — lit review: LHCb displaced + prompt A′→μ⁺μ⁻

The Z′ is a *visible* dark photon (2M_DM ≈ 10 GeV ≫ M_Z′), so it decays back to SM through ε. Its lifetime is
cτ ≈ 207 μm × (10⁻⁵/ε)² × (1 GeV/M_Z′), and at LHCb boosts (γ ≈ 20) the lab decay length is:

| ε | M_Z′ | cτ | lab flight |
|---|---|---|---|
| 1.8×10⁻⁴ | 1.3 | 0.5 μm | ~10 μm (prompt) |
| 2×10⁻⁵ | 1.3 | 40 μm | ~0.8 mm (VELO-displaced) |
| 1×10⁻⁵ | 1.0 | 207 μm | ~4 mm (VELO-displaced) |
| 1×10⁻⁶ | 1.2 | 1.7 cm | ~35 cm (outside VELO) |

The LHCb inclusive dimuon programme (prompt + displaced, Run 3 → Upgrade II) bottoms out near **ε ≈ 10⁻⁵ for m_μμ = 1–2.2 GeV**: below that the prompt search is drowned by Drell-Yan/heavy-flavour and the displaced search loses the vertex out of the VELO. That threshold falls in exactly the right place:

- units with ε_max ≤ 1.1×10⁻⁵: R0 (3.0e-6), R1 (8.9e-6), R2 (2.1e-6), R3 (1.0e-6), R4 (3.4e-6), R6 (1.3e-6), R7 (1.1e-5), R10 (3.9e-6), R11 (2.8e-6)
- units with ε_min ≥ 1.4×10⁻⁵: R5 (1.4e-5–9.2e-5), R8 (1.8e-5–1.2e-4), R9 (2.1e-5–1.6e-4), R12 (6.6e-5–1.8e-4)

This is the one **completely clean, non-overlapping** cut available anywhere in this leaf: the largest ε in the "no" group (1.105×10⁻⁵, R7) sits below the smallest ε in the "yes" group (1.375×10⁻⁵, R5). A cut at ε = 1.2×10⁻⁵ separates {R5,R8,R9,R12} from the other nine with zero region overlap. Note this is *not* a refinement of anything on the path — the catalog contains no accelerator dark-photon production observable at all (the collider entries are HL-LHC topology reach and a Z′ dilepton *resonance* recast, both irrelevant at m_Z′ ≈ 1 GeV).

Honest caveat: the exact ε floor of the LHCb search at 1–2 GeV is a projection with O(2) uncertainty; if it lands at 2×10⁻⁵ instead, R5 migrates. The split is robust for R9/R12 (ε up to 1.6–1.8×10⁻⁴) and marginal for R5.

### Level 2a — inside the high-ε group {R5, R8, R9, R12}

Here a signal *has* been seen, so the resonance mass comes essentially for free (LHCb dimuon mass resolution is ~5–8 MeV at 1.5 GeV). M_Z′ per unit: R5 **1.377–2.2 GeV**, R8 1.247–1.319, R9 1.0–1.545, R12 1.0–1.598. A peak above **1.6 GeV can only be R5** — no other unit in the leaf reaches there. This is a one-sided discriminator (roughly half of R5's points lie below 1.6 GeV and would be misassigned), which I state plainly rather than dress up.

For the remainder {R8, R9, R12} I use the **positron box**. Because annihilation is `s s* → Z′Z′` with each Z′ carrying E = M_DM in the halo frame, and Z′→e⁺e⁻ has BR ≈ 0.24 at m ≈ 1.3 GeV (R(s) ≈ 2.2), the injected positron spectrum is a *box* with edges E± = (M_DM/2)(1 ± β), β = √(1 − M_Z′²/M_DM²) ≈ 0.95–0.98. Predicted upper edges:

- R8: 4.75–4.81 GeV
- R9: 4.64–4.93 GeV
- R12: **4.76–5.56 GeV** (median ≈ 5.1)
- (R5, for reference: 4.38–5.23 GeV)

A cut at 4.9 GeV puts R8 entirely and R9 essentially entirely below, R12 mostly above. Marginal — R12's low-mass tail overlaps R9 — and I flag it as such. **R8 and R9 remain irreducibly degenerate**: they differ only in α3 (3.3–10 vs 0.001) and α6 (0.001 vs 0.07–0.37), which by the argument above have no present-day observable, and their M_DM/M_Z′/ε ranges are nested rather than disjoint. I see no experiment, real or invented, that separates them.

### Level 2b — inside the low-ε group (nine units)

Nothing existing reaches ε < 10⁻⁵ at m ≈ 1–1.5 GeV: this is the genuine "wedge". Beam dumps (SHiP, DarkQuest) need cτγ ≳ 10 m to reach their decay volume, which at 1 GeV requires ε ≲ 3×10⁻⁷; colliders need ε ≳ 10⁻⁵. At ε ~ 10⁻⁶–10⁻⁵ the Z′ flies 4 mm–35 cm — too far for a vertex detector's prompt window, too short for a dump. Hence the novel concept: a **thin-target, high-intensity proton fixed-target run with a segmented silicon decay volume starting ~1 cm downstream**, covering flight distances 1 cm–1 m and m_μμ = 0.5–2.5 GeV.

Region ε ceilings: only R1 (8.9×10⁻⁶) and R7 (1.1×10⁻⁵) exceed 4×10⁻⁶; the other seven all cap below 3.94×10⁻⁶ (R10) — so a threshold at ε = 4×10⁻⁶ isolates {R1, R7} cleanly at the region level.

For the seven remaining, the mass again: M_Z′ ranges are R0 1.0–1.545, R2 **1.494–1.545**, R3 1.0–1.545, R10 **1.545 (single value)**, versus R4 = 1.0 exactly, R6 ≤ 1.452, R11 ≤ 1.484. A peak at ≥ 1.49 GeV therefore excludes R4, R6, R11 outright. But measuring a peak at ε ~ 10⁻⁶ requires ~40× the rate reach of the previous node — beyond any proposed instrument, so I rate it speculative rather than pretend otherwise.

**Final residual degeneracies**, all stated honestly: {R8,R9}, {R1,R7}, {R0,R2,R3,R10}, {R4,R6,R11}. Within each of these the units differ *only* in α2–α6 (and in sub-5% slivers of M_DM/M_Z′/ε that are nested, not disjoint). Given σ/m ≈ 2×10⁻⁷ cm²/g and a 12 GeV partner that is unstable and cosmologically irrelevant, I do not believe these are separable by any experiment, and I would rather say so than invent one.

*Reference note:* the prompt requires a single tool-free reply, so I could not run WebSearch verification in this message; I have therefore cited only the two arXiv IDs I am confident of — arXiv:1603.08926 (Ilten, Soreq, Thaler, Williams, Xue, "Proposed Inclusive Dark Photon Search at LHCb", PRL 116, 251803) and arXiv:1910.06926 (LHCb, "Search for A′→μ⁺μ⁻ Decays", PRL 124, 041801) — and dropped a third (a DarkQuest/SeaQuest dark-sector projection) whose ID I could not verify.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_no_yes_yes_no",
      "lit_review": {
        "name": "LHCb displaced+prompt dimuon dark-photon search",
        "observable": "A'->mu mu peak, 1-2.2 GeV: eps >= 1.2e-5 ?",
        "refs": ["arXiv:1603.08926", "arXiv:1910.06926"],
        "reasoning": "The Z' is a visible dark photon (2*M_DM ~ 10 GeV >> M_Z' = 1-2.2 GeV), so it decays to SM pairs via kinetic mixing; the catalog contains no accelerator dark-photon production observable at all. Lifetime cτ ≈ 207 μm × (1e-5/eps)^2 × (1 GeV/M_Z'), giving lab flight lengths at LHCb (γ≈20) of ~10 μm at eps=1.8e-4, ~0.8 mm at eps=2e-5, ~4 mm at eps=1e-5, ~35 cm at eps=1e-6. The LHCb inclusive prompt+displaced dimuon programme (Run 3 to Upgrade II) bottoms out near eps ≈ 1e-5 in the 1-2.2 GeV window. Region eps ranges: R5 1.4e-5-9.2e-5, R8 1.8e-5-1.2e-4, R9 2.1e-5-1.6e-4, R12 6.6e-5-1.8e-4 (all above), versus R0 <=3.0e-6, R1 <=8.9e-6, R2 <=2.1e-6, R3 <=1.0e-6, R4 <=3.4e-6, R6 <=1.3e-6, R7 <=1.1e-5, R10 <=3.9e-6, R11 <=2.8e-6 (all below). This is the only fully non-overlapping cut in the leaf: max of the 'no' group (1.105e-5) < min of the 'yes' group (1.375e-5). Caveat: the projected eps floor carries an O(2) uncertainty; the split is robust for R9/R12 and marginal for R5. Note eps is the only free handle besides M_Z' and M_DM: gU1p is pinned to 0.042 by the relic (sigma v = pi alpha_D^2/M^2 = 3.0e-26 cm^3/s, thermal), alpha1 is fully spent by the BR(h->inv) 0.032-0.1 band on the path, and the dark quartics alpha2-alpha6 give sigma/m ~ 2e-7 cm^2/g, a million times below cluster bounds.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R5", "R8", "R9", "R12"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R6", "R7", "R10", "R11"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R5+R8+R9+R12",
          "name": "Dark-photon lineshape spectroscopy",
          "observable": "m(mu+mu-) resonance peak >= 1.6 GeV ?",
          "reasoning": "Once the resonance is seen (eps >= 1.2e-5), its mass is measured for free. Predicted M_Z': R5 1.377-2.2 GeV, R8 1.247-1.319 GeV, R9 1.0-1.545 GeV, R12 1.0-1.598 GeV. No unit anywhere in this leaf except R5 reaches above 1.6 GeV, so a peak at or above 1.6 GeV uniquely identifies R5. Honestly one-sided: roughly half of R5's points sit below 1.6 GeV and would land in the 'no' branch, so a negative answer is uninformative about R5.",
          "feasibility": "LHCb (existing): dimuon invariant-mass resolution ~5-8 MeV (0.5%) at 1.5 GeV, versus the ~100 MeV precision needed here - improvement factor 1, no upgrade required beyond the discovery dataset itself. Dominant systematic: separating a narrow Z' peak from SM light-meson structure (rho/omega/phi) below 1.1 GeV and from the smooth Drell-Yan/heavy-flavour continuum at 1.6-2.2 GeV; at eps ~ 2e-5 the sample is displaced and essentially background-free.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R5"]},
            {"label": "no", "regions": ["R8", "R9", "R12"]}
          ]
        },
        {
          "attach_to": "R8+R9+R12",
          "name": "Cosmic-ray positron box-edge spectrometer",
          "observable": "e+ box upper edge >= 4.9 GeV ?",
          "reasoning": "Annihilation is secluded, s s* -> Z'Z', each Z' carrying E = M_DM in the halo frame; Z'->e+e- has BR ~ 0.24 at m ~ 1.3 GeV (R(s) ~ 2.2), giving ~0.5 positrons per annihilation in a box spectrum with edges E± = (M_DM/2)(1 ± beta), beta = sqrt(1 - M_Z'^2/M_DM^2) = 0.95-0.98. Predicted upper edges: R8 4.75-4.81 GeV, R9 4.64-4.93 GeV, R12 4.76-5.56 GeV (median ~5.1). A cut at 4.9 GeV puts R8 entirely and R9 essentially entirely below and R12 mostly above. Marginal: R12's low-M_DM tail overlaps R9. The overall rate cannot help - sigma v = 3.0e-26 cm^3/s to within 10% in every unit because gU1p is relic-pinned - so only the edge POSITION carries information. R8 and R9 are left irreducibly degenerate: they differ only in alpha3 (3.3-10 vs 0.001) and alpha6 (0.001 vs 0.07-0.37), which have no present-day observable, and their M_DM/M_Z'/eps ranges are nested rather than disjoint.",
          "feasibility": "AMS-02 (operating): positron flux measured to 1-2% with ~2-3% energy resolution at 5 GeV, so the edge position itself is already resolvable; what is missing is the ability to see a few-percent spectral break on a steeply falling secondary-positron background. Requires ~3-10x better control of the secondary production cross sections and solar modulation below 10 GeV; the closest proposed instrument with the needed statistics is a next-generation space magnetic spectrometer (AMS-100 class). Dominant systematic: solar modulation and secondary e+ production modelling below 10 GeV, which is exactly where the edge sits.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R12"]},
            {"label": "no", "regions": ["R8", "R9"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R6+R7+R10+R11",
          "name": "Near-target cm-baseline displaced dimuon spectrometer",
          "observable": "eps >= 4e-6 at m(mu mu) = 1-1.5 GeV ?",
          "reasoning": "At eps ~ 1e-6 to 1e-5 with M_Z' ~ 1-1.5 GeV the Z' flies 4 mm to 35 cm in the lab - too far for a collider vertex detector's prompt window, too short to reach a beam-dump decay volume 10-50 m downstream (which would need eps <~ 3e-7). The proposal fills that wedge: a thin production target with a segmented silicon decay volume beginning ~1 cm downstream, instrumented for flight distances 1 cm to 1 m and m_mumu = 0.5-2.5 GeV. Region eps ceilings: only R1 (8.9e-6) and R7 (1.1e-5) exceed 4e-6; R0 3.0e-6, R2 2.1e-6, R3 1.0e-6, R4 3.4e-6, R6 1.3e-6, R10 3.9e-6, R11 2.8e-6 all cap below it, so the threshold isolates {R1, R7} at region level. R1 and R7 cannot be separated further: M_Z' is 1.0-1.016 vs 1.0, M_DM 4.83-5.15 vs 5.00-5.05 (nested), and they differ only in alpha2/alpha5.",
          "feasibility": "Closest instruments: DarkQuest/SpinQuest at Fermilab (120 GeV protons, decay volume 5-12 m from the dump, reach eps ~ 1e-5-1e-6 but only for m_A' <~ 1 GeV, where the boost is favourable) and the LHCb VELO displaced dimuon search (~1e-5 at 1 GeV). Pushing the reach to eps = 4e-6 at 1-1.5 GeV is a ~6x improvement in eps, i.e. ~40x in signal rate - a dedicated next-generation run, not an existing capability. Dominant systematic: prompt heavy-flavour (D -> mu X) and K/pi decay-in-flight backgrounds at displacements of only a few cm, plus vertex resolution and secondary interactions in the target material.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R1", "R7"]},
            {"label": "not seen", "regions": ["R0", "R2", "R3", "R4", "R6", "R10", "R11"]}
          ]
        },
        {
          "attach_to": "R0+R2+R3+R4+R6+R10+R11",
          "name": "Multi-MW beam dump dark-photon mass scan",
          "observable": "m(mu+mu-) resonance peak >= 1.49 GeV ?",
          "reasoning": "Predicted M_Z': R2 1.494-1.545 GeV and R10 exactly 1.545 GeV sit entirely at or above the cut; R0 and R3 both span 1.0-1.545 GeV and can reach it; whereas R4 is fixed at 1.0 GeV, R6 caps at 1.452 GeV and R11 at 1.484 GeV, so none of those three can ever produce a peak at 1.49 GeV or above. A positive answer therefore excludes R4, R6, R11 outright. R0/R2/R3/R10 stay degenerate afterwards: their eps ceilings (3.0e-6, 2.1e-6, 1.0e-6, 3.9e-6) differ only within a factor 4 at the 1e-6 level, which is beyond any conceivable rate measurement, and they are otherwise distinguished only by alpha2-alpha6.",
          "feasibility": "This requires first DETECTING the resonance at eps down to ~1e-6, i.e. ~16x less rate than the near-target spectrometer node above and ~40x below the best existing/projected reach (LHCb displaced, eps ~ 1e-5 at 1 GeV); no funded or proposed instrument covers eps ~ 1e-6 at m_A' = 1-1.5 GeV, because the 1-30 cm decay length falls between collider vertexing and dump geometries. Would need a multi-MW proton driver feeding a near-target segmented decay volume, roughly 100x the intensity of DarkQuest. Dominant systematic: charm-induced prompt dimuons and beam-correlated neutron/muon halo in a detector sited centimetres from a multi-MW target.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R2", "R3", "R10"]},
            {"label": "no", "regions": ["R4", "R6", "R11"]}
          ]
        }
      ]
    }
  ]
}
```

---

<!-- g13_pair-nnnyyyyn.md -->

## Leaf `root_no_no_no_yes_yes_yes_yes_no_no` — 112 pts, units R0 and R1

**What the catalog already fixed, and why it is blind here.** Both units are the same Lagrangian (complex scalar singlet, dark charge −1, Z₂₊₃₊₄₊₅), both sit at ε = 0.1, M_Z′ = 1 GeV, g_U(1)′ ≈ 0.03, α₁ ≈ 0.004, and both land in BR(h→inv) ∈ [0.032, 0.1). Every indirect-detection probe on the path is *kinematically or instrumentally blind* at these masses: CTA (WW) and Fermi15yr (WW) require m_DM > m_W ≈ 80 GeV, and IceCube-Gen2 has no reach at 1–2 GeV. The tree therefore records "no ID signal" for both units as a statement about the catalog, not about the physics. The one place where a 1–2 GeV annihilator is *strongly* constrained by a real, published measurement is CMB energy injection — which is not in the catalog and is not a refinement of any split on the path.

**The physical difference between R0 and R1 is the secluded channel's phase space at v → 0.**

- **R0**: M_DM = 1.000 GeV, M_Z′ = 1.000 GeV — the units sit *exactly at the χχ† → Z′Z′ threshold*. The final-state velocity is β_f = √(1 − 4M_Z′²/s) ≃ v_rel/2, so σv ∝ v. At freeze-out (v_rel ≈ 0.5 c) the channel is fully active and sets the relic density; at recombination (v_rel ~ 10⁻⁸ c after kinetic decoupling) it is suppressed by ~10⁻⁸, giving ⟨σv⟩_CMB ≲ 5×10⁻³⁴ cm³/s. The two residual channels do not rescue it: annihilation through the s-channel Z′ is p-wave for a complex scalar coupled to a vector current (the χ†∂↔χ current requires L = 1), and the Higgs-portal channel with α₁ = 0.0045 through an off-shell 125 GeV Higgs into s-quarks/muons gives ⟨σv⟩ ~ 10⁻⁴⁰ cm³/s. Net: p_ann = f_eff⟨σv⟩/m_DM ≲ 10⁻³³ cm³/s/GeV, five orders below any CMB sensitivity.
- **R1**: M_DM = 2.225 GeV > M_Z′ = 1 GeV, so β_f = √(1 − (1/2.225)²) = 0.89 — the secluded channel is wide open and **s-wave** (seagull g²|χ|²Z′Z′ plus t/u-channel). Numerically ⟨σv⟩ ≈ g_D⁴/(16π M_DM²) = (0.0316)⁴/(16π × 4.95 GeV²) = 4.0×10⁻⁹ GeV⁻² ≈ 4.7×10⁻²⁶ cm³/s — i.e. thermal, as it must be since g_U(1)′ is what the scan tuned to hit the relic density. With ε = 0.1 the 1 GeV Z′ decays promptly to e⁺e⁻/μ⁺μ⁻/hadrons, f_eff ≈ 0.25 at m_DM = 2.2 GeV, giving **p_ann ≈ 5×10⁻²⁷ cm³/s/GeV**, about 16× above the Planck 2018 bound p_ann < 3.3×10⁻²⁸ cm³/s/GeV.

So the same measurement — the CMB TT/EE/lowE constraint on injected ionizing energy — reads "signal/excluded" for R1 and "nothing" for R0, with ~4 orders of margin on each side of the cut. R1 is in fact already *excluded* by Planck; that is a legitimate experimental outcome of the split.

**Honest caveats.** (i) The split hinges on the mass ratio M_DM/M_Z′ ≤ 1 in R0 to the ~1% level implied by the printed values. If R0's true ratio were 1.05 rather than 1.000, β_f = 0.31 and p_ann ≈ 2×10⁻²⁷ — still above the bound, and the split would collapse. Conversely, if M_Z′ exceeded M_DM the suppression becomes Boltzmann-exponential and the split strengthens. (ii) The dominant systematic on the measurement side is the f_eff calculation (energy-deposition efficiency of the hadronic component of a 1 GeV dark photon), good to roughly ±30% — irrelevant against a 16× excess.

**Discriminators considered and rejected.** Dark-photon production searches (BaBar e⁺e⁻→γA′, LHCb, NA48/2) cannot split: both units share ε = 0.1 and M_Z′ = 1 GeV. (Worth flagging separately: ε = 0.1 at 1 GeV is already excluded by ~two orders of magnitude by BaBar — this is a scan-boundary artifact affecting both units equally.) Self-interaction bounds from clusters look tempting given α₃ = 10 in R1 vs 0.001–0.004 in R0, but the contact-quartic cross section is σ ≈ α₃²/(64π s) = 0.025 GeV⁻² = 9.8×10⁻³⁰ cm², i.e. σ/m ≈ 2.5×10⁻⁶ cm²/g — five orders below the ~0.1–1 cm²/g cluster bound; the Z′-mediated piece (α_D = 7.9×10⁻⁵) is comparable in both units. No split there. Low-threshold direct detection would resolve 1 vs 2.2 GeV, but that is a refinement of the SuperCDMS/XLZD axis already on the path.

Because the lit-review split fully separates R0 from R1, no novel experiment is required.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_yes_yes_yes_yes_no_no",
      "lit_review": {
        "name": "Planck CMB energy-injection bound on s-wave annihilation",
        "observable": "p_ann = f_eff<sigma v>/m_DM > 3.3e-28 cm^3/s/GeV ?",
        "refs": ["arXiv:1807.06209", "arXiv:1506.03811", "arXiv:1610.02743"],
        "reasoning": "Both units are 1-2 GeV DM with a 1 GeV dark photon, where every catalog ID probe (CTA WW, Fermi15yr WW, IceCube-Gen2) is kinematically or instrumentally blind; CMB energy injection is the one real published probe with reach there. R1 (M_DM=2.225 GeV > M_Zp=1 GeV) has the secluded chi chi -> Zp Zp channel open with beta_f=0.89 and s-wave via the g^2|chi|^2 ZpZp seagull: <sigma v> = g_D^4/(16 pi M_DM^2) = (0.0316)^4/(16 pi x 4.95 GeV^2) = 4.7e-26 cm^3/s (thermal, as required by the relic constraint that fixed g_U1p). The 1 GeV Zp with eps=0.1 decays promptly to e+e-/mu+mu-/hadrons, f_eff ~ 0.25 at 2.2 GeV, so p_ann ~ 5e-27 cm^3/s/GeV, about 16x above the Planck 2018 95% CL bound of 3.3e-28. R0 sits exactly at threshold (M_DM = M_Zp = 1.000 GeV): beta_f ~ v_rel/2, so sigma v ~ v and the rate is suppressed by ~1e-8 between freeze-out (v~0.5c) and recombination (v~1e-8 c), giving <sigma v>_CMB <~ 5e-34 cm^3/s. The residual channels do not rescue R0: s-channel Zp annihilation of a complex scalar through a vector current is p-wave (L=1), and the Higgs portal with alpha1=0.0045 through an off-shell 125 GeV Higgs into s-quarks/muons gives ~1e-40 cm^3/s. So p_ann(R0) <~ 1e-33 cm^3/s/GeV, five orders below the cut. Caveat: the split relies on R0's mass ratio M_DM/M_Zp <= 1 at the ~1% level; at a ratio of 1.05, beta_f=0.31 and p_ann ~ 2e-27 would also exceed the bound, collapsing the split. Dominant systematic is the f_eff energy-deposition efficiency for the hadronic Zp decay component (~30%), negligible against a 16x excess. Rejected alternatives: dark-photon production searches (BaBar/LHCb/NA48) see identical eps=0.1, M_Zp=1 GeV in both units; cluster self-interaction bounds cannot exploit alpha3=10 vs 0.001 because the contact quartic gives only sigma/m ~ 2.5e-6 cm^2/g, five orders below the ~0.1-1 cm^2/g limit.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1"]},
          {"label": "not seen", "regions": ["R0"]}
        ]
      },
      "novel": []
    }
  ]
}
```
