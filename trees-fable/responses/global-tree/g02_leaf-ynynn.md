I'll verify the arXiv references I plan to cite before composing the answer.
All three references resolve and match my claims (LHCb A′→μ⁺μ⁻ prompt search covering 214 MeV–70 GeV; the Belle II Physics Book with its dark-sector projections; the Fabbrichesi–Gabrielli–Lanfranchi dark-photon review). Here is the complete analysis and the JSON block.

---

## Reasoning — Leaf `root_yes_no_yes_no_no` (4606 pts, 104 units)

**What this leaf is.** Every unit here predicts a spin-independent direct-detection signal 1–10× above the projected XLZD limit (but below LZ/DarkSide reach), an invisible-Higgs branching ratio in the narrow band 0.001–0.0032, and nothing at any indirect-detection probe in the catalog. Three Lagrangian families coexist: (i) the Real Scalar Singlet R0 at M ≈ 94 GeV, (ii) the Complex Scalar Singlet (no dark gauge group) in R25–R26, R51–R53, R93–R102 at M ≈ 95.5–95.9 GeV, and (iii) the Complex Scalar + dark U(1)′ family (everything else, incl. R33/R103 from the Z2 build) with M ≈ 52–97 GeV, a Z′ of mass 1 GeV–10 TeV, kinetic mixing ε ∈ [10⁻⁶, 0.1], and dark coupling g′ ∈ [0.003, 12.6].

**The structural handle the catalog never touches.** The U(1)′ models contain a second, *visible* particle whose phenomenology is completely independent of the dark matter: a kinetically-mixed Z′ (a "dark photon" A′). Since M(Z′) < 2·M(DM) in every region here, the Z′ cannot decay invisibly to DM — it must decay to Standard-Model leptons/hadrons with rates set only by (M(Z′), ε). The catalog's Z′ entry is the *high-mass HL-LHC dilepton resonance* recast; the low-mass (1–70 GeV) visible dark-photon program at Belle II and LHCb is a genuinely different set of measurements and is exactly the beam-dump/fixed-target/collider production class the rules invite. Crucially, the no-Z′ Lagrangians (R0, all CsSg_DM regions) predict *exactly zero* signal in any such search, so a positive outcome kills two of the three Lagrangian families outright — the highest-value kind of split.

**Level-1 split: visible A′ → ℓ⁺ℓ⁻ resonance, 1–70 GeV, at ε ≳ 10⁻³.** Belle II (e⁺e⁻ → γA′, A′ → ℓ⁺ℓ⁻ radiative return; sensitivity to ε ~ few×10⁻⁴ for M(A′) ≲ 9.5 GeV at 50 ab⁻¹, per the Physics Book, arXiv:1808.10567) and LHCb (prompt A′→μ⁺μ⁻, 214 MeV–70 GeV, ε² reach ~10⁻⁶–10⁻⁷ improving with Upgrade II, arXiv:1910.06926) jointly cover the whole light-Z′ band of this leaf. I place the decision cut at ε ≥ 10⁻³, comfortably inside both experiments' published/projected reach across 1–70 GeV.

Quantitative per-region predictions (signal strength ∝ ε²):
- **Loud discovery** (ε² 10²–10⁴ × above the ~10⁻⁶ ε² sensitivity): R2, R3, R6, R10, R17, R20, R21, R46, R58, R61, R65, R78, R80 (ε ~ 3×10⁻³–0.1, M(Z′) 1–14 GeV); R63 (ε 0.015–0.025 at 17–24.5 GeV, LHCb μμ territory); R64 (ε 1.6–3.6×10⁻³); R34 (ε 0.95–3.4×10⁻³, log-midpoint 1.8×10⁻³, just above cut); R5 (ε spans 3×10⁻⁴–0.1, log-midpoint ~6×10⁻³ — its low-ε tail leaks into the other branch, flagged as marginal).
- **Invisible** (ε² ≥ 3 orders below any planned probe): all regions with ε ≤ few×10⁻⁵ (e.g. R7: ε² ≤ 4×10⁻¹⁰), plus regions with a Z′ too heavy for these searches — R33 (0.36–3.4 TeV, ε = 0.1), R70, R76, R85, and the M(Z′) ≈ 10 TeV cluster (R22, R72, R73, R77, R79, R81–R85, R89) — and, trivially, the Z′-less RsSg/CsSg regions. A future FCC-hh 100 TeV dilepton search would later peel off R33/R70/R76/R85 (ε ≳ 5×10⁻³ at 0.2–10 TeV), which I note here but do not spend the split on.
- **Borderline boxes** R9, R11, R28, R57 straddle ε = 10⁻³; their log-midpoints (~6–7×10⁻⁴) put them on the "not seen" side. This is honest: the measurement itself performs the true within-box split, since ε is the measured quantity.

This split is decisive Lagrangian-level physics: "seen" ⇒ dark U(1)′ confirmed (17 units); "not seen" retains 87 units of all three families.

**Level-2 (both branches): joint Xe+Ar recoil-spectrum mass fit.** The DM masses cluster bimodally: a ~52–85 GeV population (dominated by the M = 69.67 GeV U(1)′ cluster) and a ~87–97 GeV population (R0 at 94, CsSg at 95.5–95.9, the U(1)′ 90/96.4 GeV clusters). The leaf *guarantees* a direct-detection signal 1–10× the XLZD limit, i.e. O(10–10²) events in a 60-tonne-Xe × multi-year exposure. The mean recoil energy scales as μ²/m_N (μ = DM–nucleus reduced mass): on xenon, μ²(70 GeV) / μ²(95 GeV) ≈ (44.5/53.4)² ≈ 0.69, a ~30% spectral-shape difference — resolvable at ~2σ with ~30 events, but strongly degenerate with the halo velocity distribution (v₀, v_esc, ρ_loc), which is the dominant systematic. Adding an argon target (DarkSide-20k → Argo; m_N ≈ 37 GeV, different kinematic response) breaks the halo–mass degeneracy; single-target Xe mass reconstruction is known to lose closure above ~100 GeV. Cut: fitted m_DM ≥ 85 GeV.
- *Seen branch:* heavy = R10, R20, R46, R64, R78, R80 (predict 87–96.5 GeV); light = R2, R3, R5, R6, R17, R21, R34, R58, R61, R63, R65 (predict ~53–85 GeV; R2 and R6 straddle 85, assigned by box midpoint).
- *Not-seen branch:* heavy = the 56 regions predicting 85.5–96.9 GeV (incl. R0 and every CsSg region); light = the 31 regions predicting 52.6–85 GeV (R86 and R90 straddle, midpoints < 85).

**Honest terminal degeneracy.** Within the not-seen/heavy group, R0 (real singlet, 94 GeV), the CsSg regions (complex singlet, ~95.5 GeV) and the low-ε U(1)′ 96.4 GeV clusters differ in mass by 1–2% — far beyond any conceivable recoil-spectrum resolution — and by construction share the same σ_SI band and the same BR(h→inv) band. A real vs complex scalar Higgs portal with matched portal coupling and no accessible mediator is observationally closed to every planned program I am aware of: the only distinguishing physics (number of degrees of freedom, si–sr mass splitting) enters relic-era cosmology, not any lab observable. The mass fit is therefore the best available split, and I rate its feasibility honestly as "unlikely": it requires Argo-scale next-generation argon (proposed, not funded) plus the favorable end of the 1–10× signal-strength window; at the 1× end (~10 events) the fit does not converge against halo systematics.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_no_no",
      "lit_review": {
        "name": "Belle II + LHCb visible dark-photon search",
        "observable": "A' -> l+l- resonance, mass 1-70 GeV, epsilon >= 1e-3 ?",
        "what_this_is": "Belle II (an electron-positron collider experiment in Japan) and LHCb (a forward detector at the Large Hadron Collider) both hunt for a hypothetical 'dark photon': a new light gauge boson that mixes slightly with the ordinary photon and so can be produced in collisions and decay to an electron or muon pair, showing up as a narrow bump in the pair's invariant mass. These searches probe the dark photon's mass and its mixing strength with ordinary matter, completely independently of dark matter itself. That is exactly the right lever here, because one of the three candidate theories in this leaf contains such a light dark photon while the other two contain none at all — a discovered bump instantly rules the other two out.",
        "refs": ["arXiv:1910.06926", "arXiv:1808.10567", "arXiv:2005.01515"],
        "reasoning": "All U(1)' regions here have M(Z') < 2 M(DM), so the Z' decays only to visible SM states with signal strength proportional to epsilon^2. Belle II radiative-return (epsilon ~ few x 1e-4 reach below 9.5 GeV at 50/ab) and LHCb prompt A'->mumu (214 MeV - 70 GeV, epsilon^2 down to ~1e-6-1e-7) cover the light-Z' band. Seen: regions with epsilon >= ~1e-3 and M(Z') = 1-25 GeV (e.g. R6: epsilon^2 = 2.6e-4-1e-2, i.e. 100-10000x above sensitivity; R63 at 17-24.5 GeV in LHCb's dimuon range). Not seen: epsilon <= few x 1e-5 regions (e.g. R7: epsilon^2 <= 4e-10), the heavy-Z' clusters (R33, R70, R76, R85, and the 10 TeV group - beyond these low-mass searches; FCC-hh dileptons could later peel off R33/R70/R76/R85), and the Z'-less RsSg/CsSg Lagrangians which predict exactly zero. Boxes straddling epsilon = 1e-3 (R5, R9, R11, R28, R57) are assigned by log-midpoint; the measurement itself resolves their interiors since epsilon is the measured quantity. A positive outcome eliminates two of the three Lagrangian families outright.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R2", "R3", "R5", "R6", "R10", "R17", "R20", "R21", "R34", "R46", "R58", "R61", "R63", "R64", "R65", "R78", "R80"]},
          {"label": "not seen", "regions": ["R0", "R1", "R4", "R7", "R8", "R9", "R11", "R12", "R13", "R14", "R15", "R16", "R18", "R19", "R22", "R23", "R24", "R25", "R26", "R27", "R28", "R29", "R30", "R31", "R32", "R33", "R35", "R36", "R37", "R38", "R39", "R40", "R41", "R42", "R43", "R44", "R45", "R47", "R48", "R49", "R50", "R51", "R52", "R53", "R54", "R55", "R56", "R57", "R59", "R60", "R62", "R66", "R67", "R68", "R69", "R70", "R71", "R72", "R73", "R74", "R75", "R76", "R77", "R79", "R81", "R82", "R83", "R84", "R85", "R86", "R87", "R88", "R89", "R90", "R91", "R92", "R93", "R94", "R95", "R96", "R97", "R98", "R99", "R100", "R101", "R102", "R103"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R2+R3+R5+R6+R10+R17+R20+R21+R34+R46+R58+R61+R63+R64+R65+R78+R80",
          "name": "Xe+Ar recoil-spectrum DM mass fit",
          "observable": "m_DM from joint dR/dE_R fit >= 85 GeV ?",
          "what_this_is": "When a dark matter particle bounces off an atomic nucleus in an underground detector, the energy it deposits depends on the ratio of the dark matter mass to the nucleus mass. Fitting the measured recoil-energy spectrum simultaneously in a xenon detector (XLZD) and an argon detector (DarkSide-20k/Argo) therefore measures the dark matter particle's mass, with the two different target nuclei breaking the degeneracy with our imperfect knowledge of the local dark matter velocity distribution. This leaf guarantees a signal of tens of events at XLZD, and its regions predict two well-separated mass clusters, so a mass measurement is the natural next discriminator.",
          "reasoning": "Every unit here predicts sigma_SI at 1-10x the XLZD limit, i.e. O(10-100) events in a multi-year 60t exposure. Mean recoil energy scales as mu^2/m_N; on Xe, mu^2(70 GeV)/mu^2(95 GeV) ~ 0.69, a ~30% spectral difference. Heavy branch: R10, R20, R64 (87-92 GeV), R46, R78, R80 (95.8-96.5 GeV). Light branch: the M = 69.67 GeV cluster (R5, R17, R21, R34, R58) plus R3, R61, R65, R63 (53-85 GeV). R2 and R6 straddle 85 GeV and are assigned by box midpoint - the fit itself splits their interiors.",
          "feasibility": "Closest instruments: XLZD (proposed 60t Xe) and DarkSide-20k -> Argo (20t -> 300t Ar). Current LZ has zero signal events, so 'resolution' is set by future statistics: ~30 events give ~2-sigma separation of 70 vs 95 GeV; the 1x-limit end of this leaf's signal range gives only ~10 events, insufficient. Requires the Argo-scale Ar program (~3-10x beyond funded exposure). Dominant systematic: halo velocity distribution (v0, v_esc, rho_local) and energy-scale calibration.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "heavy", "regions": ["R10", "R20", "R46", "R64", "R78", "R80"]},
            {"label": "light", "regions": ["R2", "R3", "R5", "R6", "R17", "R21", "R34", "R58", "R61", "R63", "R65"]}
          ]
        },
        {
          "attach_to": "R0+R1+R4+R7+R8+R9+R11+R12+R13+R14+R15+R16+R18+R19+R22+R23+R24+R25+R26+R27+R28+R29+R30+R31+R32+R33+R35+R36+R37+R38+R39+R40+R41+R42+R43+R44+R45+R47+R48+R49+R50+R51+R52+R53+R54+R55+R56+R57+R59+R60+R62+R66+R67+R68+R69+R70+R71+R72+R73+R74+R75+R76+R77+R79+R81+R82+R83+R84+R85+R86+R87+R88+R89+R90+R91+R92+R93+R94+R95+R96+R97+R98+R99+R100+R101+R102+R103",
          "name": "Xe+Ar recoil-spectrum DM mass fit",
          "observable": "m_DM from joint dR/dE_R fit >= 85 GeV ?",
          "what_this_is": "The energy spectrum of nuclear recoils in an underground dark matter detector encodes the mass of the particle doing the scattering. A joint fit of the guaranteed XLZD xenon signal together with an argon detector (DarkSide-20k/Argo), whose lighter nucleus responds differently, measures that mass while controlling for the unknown dark matter velocity distribution in our galaxy. The surviving regions of this branch cluster at either ~53-85 GeV or ~87-97 GeV, so an 85 GeV mass cut is the sharpest remaining division.",
          "reasoning": "Same physics as the sibling node: ~30% difference in mu^2/m_N between the 69.67 GeV U(1)' cluster and the 94-96.9 GeV cluster. Heavy branch (85.5-96.9 GeV) contains R0 (RsSg, 94 GeV), every CsSg region (95.4-95.9 GeV), and the low-epsilon / heavy-Z' U(1)' clusters at 90-96.9 GeV. Light branch (52.6-85 GeV) is pure U(1)'. R86 and R90 straddle the cut and are assigned by box midpoint. Terminal degeneracy, stated honestly: within the heavy branch, RsSg (94) vs CsSg (95.5) vs U(1)' (96.4) differ by 1-2% in mass and share identical sigma_SI and BR(h->inv) bands by construction; no planned instrument can resolve a 1-2% DM mass difference, and a real vs complex scalar Higgs portal with no accessible mediator differs only in relic-era degrees of freedom - observationally closed.",
          "feasibility": "Closest instruments: XLZD (proposed 60t Xe) and DarkSide-20k -> Argo (20t -> 300t Ar). ~30 signal events separate 70 vs 95 GeV at ~2 sigma; the low end of this leaf's 1-10x XLZD signal window yields only ~10 events, so success needs the favorable half of the window plus Argo-scale argon exposure (~3-10x beyond funded). Dominant systematic: halo velocity-distribution parameters degenerate with mass in a single target; the Xe/Ar combination is what controls it.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "heavy", "regions": ["R0", "R7", "R8", "R9", "R14", "R15", "R22", "R23", "R24", "R25", "R26", "R31", "R32", "R33", "R41", "R43", "R44", "R45", "R47", "R48", "R51", "R52", "R53", "R54", "R55", "R66", "R67", "R68", "R69", "R70", "R71", "R72", "R73", "R74", "R75", "R76", "R77", "R79", "R81", "R82", "R83", "R84", "R85", "R87", "R88", "R89", "R93", "R94", "R95", "R96", "R97", "R98", "R99", "R100", "R101", "R102"]},
            {"label": "light", "regions": ["R1", "R4", "R11", "R12", "R13", "R16", "R18", "R19", "R27", "R28", "R29", "R30", "R35", "R36", "R37", "R38", "R39", "R40", "R42", "R49", "R50", "R56", "R57", "R59", "R60", "R62", "R86", "R90", "R91", "R92", "R103"]}
          ]
        }
      ]
    }
  ]
}
```