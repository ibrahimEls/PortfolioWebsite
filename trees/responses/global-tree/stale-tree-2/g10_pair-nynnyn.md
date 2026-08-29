I'll verify the arXiv references I plan to cite before composing the single answer message.
All five references verified against arXiv (titles match my claims). Here is the complete degeneracy-breaking analysis.

# Reasoning — Leaf `root_no_yes_no_no_yes_no_yes` (389 pts, 14 units)

## Physics of the leaf

Both Lagrangians in this leaf are the *same* Higgs-portal complex scalar singlet charged under a dark U(1)′, differing only in the sign of the dark charge (+1 vs −1). The sign itself is not directly measurable (it is a charge-conjugation relabeling at the level of the gauge interaction); what makes the two builds distinguishable is *where the RL scan's viability constraints pushed their surviving parameter space* — and here that difference is stark and clean:

- **All nine dark-U(1)+ units** (R0, R1, R2, R3, R6, R10, R11, R12, R13): MDM ∈ [4.06, 5.72] GeV.
- **All five dark-U(1)− units** (R4, R5, R7, R8, R9): MDM ∈ [3.14, 3.56] GeV.

There is a clean mass gap from 3.56 to 4.06 GeV with *zero overlap*. Every unit also carries a light dark photon, MZp ∈ [1.0, 1.6] GeV, with kinetic mixing ε spanning 1e-6 to 0.1, and gU1p ≈ 0.037–0.045. The tight correlation gU1p ∝ √MDM (0.037 at 3.3 GeV → 0.043 at 5.1 GeV, i.e. g⁴/m² ≈ const) is the signature of a **secluded thermal relic**: annihilation is dominated by χχ† → Z′Z′ with σv ≈ g⁴/(16π m²) ≈ 2×10⁻²⁶ cm³/s, and the Z′ subsequently decays to SM states through kinetic mixing (Pospelov–Ritz–Voloshin mechanism). The "bb-like" indirect signal 10–100× the Fermi 15-yr limit that defines this leaf is really this two-step cascade: each Z′ (1–1.6 GeV, decaying to μμ, ππ, KK̄, multi-pion) is emitted with E = MDM, and the resulting photon spectrum (π⁰ decay + FSR) is a smooth cascade with **kinematic endpoint at E_γ ≈ MDM**. Note also that the U(1)− units, at 3.1–3.6 GeV, sit *below* the bb̄ threshold — their signal physically cannot be b-quarks; the pipeline's bb template is only an effective proxy there, which further degrades a bb fit for those units.

## Level 1 — lit-review split: measure the endpoint of the already-detected gamma-ray signal

This leaf's path *guarantees a detected signal*: 10–100× above the projected Fermi 15-yr dwarf bb limit (and seen by CTA-bb). The natural next real measurement — not in the catalog, which only contains flux limits per annihilation-channel template — is the **spectral cutoff energy of that detected signal, in GeV**, with Fermi-LAT (30 MeV–300 GeV is exactly the right band; CTA cannot help below ~20 GeV). This is an absolute, falsifiable observable: fit a cascade spectrum with free cutoff E_cut to the stacked-dwarf (and far brighter Galactic-center) excess and ask **E_cut ≥ 3.8 GeV?**

- **YES** → MDM ≳ 4 GeV → the nine U(1)+ units (predicted endpoints 4.06–5.72 GeV).
- **NO** → MDM ≲ 3.6 GeV → the five U(1)− units (predicted endpoints 3.14–3.56 GeV).

Quantitatively: at 10–100× the 15-yr stacked-dwarf sensitivity, the dwarf stack alone yields hundreds of signal photons and the GC (J-factor ~10²–10³ larger, at the cost of halo-profile systematics) yields tens of thousands. Fermi-LAT energy resolution is ≈8% at 3–5 GeV, so the 3.3 vs 5.0 GeV cutoff hypotheses differ by ~6 resolution widths; even though a cascade endpoint is a soft rolloff rather than a sharp edge (Elor–Rodd–Slatyer spectra), a 50% difference in cutoff energy is decisively distinguishable with these statistics. This split separates the two **Lagrangians** perfectly — the highest-value outcome. Honest caveats: the dominant systematic is modeling the Z′ hadronic branching fractions near the ρ/ω/φ region (the 1.0–1.6 GeV Z′ mass sits on hadronic resonances, shifting the π⁰ multiplicity and hence the shape just below the endpoint); this affects the shape, not the endpoint location, so the split is robust. References verified: arXiv:0711.4866 (secluded WIMPs — why the cascade is the signal), arXiv:1503.01773 (cascade annihilation spectra and their endpoints), arXiv:1503.02641 (Fermi-LAT dwarf analysis this measurement extends).

## Level 2 — novel nodes for the two surviving groups

Within each Lagrangian group, the regions overlap almost completely in MDM, MZp, and gU1p (all relic-locked), and α1 is pinned at ≈0.001 everywhere (that is what put the leaf in the BR(h→inv) 0.001–0.0032 bin). The *only* observable that varies strongly across regions is the kinetic mixing ε — spanning five orders of magnitude — via a visible dark-photon resonance at m_A′ ≈ 1–1.6 GeV. The dark-sector quartics (α2–α6), which formally distinguish several regions, feed no laboratory or astrophysical observable at these values: e.g. even λ ≈ 10 gives σ_self/m ~ 3×10⁻⁵ cm²/g, five orders below cluster-halo sensitivity. So both novel nodes are dimuon dark-photon bump hunts, with tiered outcomes read off the measured signal strength (rate ∝ ε²).

**U(1)+ group (R0,R1,R2,R3,R6,R10,R11,R12,R13):** an inclusive prompt A′→μμ scan at LHCb Upgrade II statistics over m_μμ = 1.0–1.6 GeV. Current LHCb (arXiv:1910.06926) reaches ε ≈ (0.5–1)×10⁻⁴ in this window off the φ; Upgrade II's ~50× luminosity improves the background-dominated bump-hunt reach by ~L^(1/4) ≈ 2.7×, to ε ≈ 2×10⁻⁵. Outcomes: ε ≥ 2.5e-4 → R10 (ε = 4.9×10⁻⁴, already at the edge of current limits; ~30× the rate of the next group); ε in [2e-5, 2.5e-4] → R1 (1.7e-5–1.6e-4) + R11 (5.8e-5–8.7e-5); not seen → R0, R2, R3, R6, R12, R13 (ε ≤ 2.1×10⁻⁵). Marginality stated honestly: R1's lower tail (1.7e-5) and R6/R0's upper edges (2.1e-5, 1.6e-5) straddle the 2e-5 boundary, so a few points migrate across it. The unseen six, and R1-vs-R11 within the middle tier, remain irreducibly degenerate: their ε ∈ [1e-6, 2e-5] sits in the classic gap at 1 GeV — too prompt for beam-dump geometries (cτ ≈ 8 μm × (10⁻⁴/ε)², i.e. decay lengths of μm–cm even boosted) and too faint (∝ε²) for colliders — and their remaining differences are unobservable quartics. Rating: **possible** (funded program, ~3× improvement).

**U(1)− group (R4,R5,R7,R8,R9):** Belle II e⁺e⁻ → γA′(→μμ) scan near 1 GeV. BaBar (arXiv:1406.2980, verified) already reached ε ≈ 10⁻³ at 1 GeV with 0.5 ab⁻¹; R4 (ε = 0.032) and R5 (ε = 0.1) predict prompt bumps *hundreds of times above that existing bound* — they are already in severe tension, and the first Belle II dataset settles them instantly, with the ε² rate separating R4 from R5 by a factor ~10. R8 (ε = 0.6–1.8×10⁻⁴) lands in the Belle II 50 ab⁻¹ + LHCb-U2 band (reach ε ~ 3×10⁻⁵–3×10⁻⁴). R7 and R9 (ε ≤ 5×10⁻⁶) are unreachable (same gap as above) and differ from each other only in quartic patterns (R7: α4≈0.8–1.0, α6≈3.4–10 vs R9: α3≈1.3–4.2, α4≈6.7–10) with no experimental handle — honestly irreducible. Outcome cuts (1e-2, 3e-5) sit in the clean empty bands between region ranges. Dominant systematic in both nodes: the μμ continuum and ρ/ω/φ interference tails around 1 GeV. Rating: **possible**.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_no_yes_no_yes",
      "lit_review": {
        "name": "Fermi-LAT gamma-ray endpoint of the detected annihilation signal",
        "observable": "E_cut >= 3.8 GeV ?",
        "refs": ["arXiv:0711.4866", "arXiv:1503.01773", "arXiv:1503.02641"],
        "reasoning": "All 14 units are secluded thermal relics annihilating via chi chi -> Z'Z' (gU1p ~ 0.04 locked to g^4/m^2 ~ const, sigmav ~ 2e-26 cm3/s), with Z' (1.0-1.6 GeV) decaying to mumu/pions/kaons through kinetic mixing; the resulting photon cascade has a kinematic endpoint at E_gamma ~ MDM. Every dark-U(1)+ unit has MDM in [4.06, 5.72] GeV; every dark-U(1)- unit has MDM in [3.14, 3.56] GeV -- a clean, zero-overlap gap at 3.56-4.06 GeV, so a cut at 3.8 GeV separates the two Lagrangians perfectly. The leaf's path guarantees a signal 10-100x the Fermi 15-yr dwarf bb sensitivity, i.e. hundreds of dwarf-stack photons and O(1e4) GC photons; with Fermi-LAT energy resolution ~8% at 3-5 GeV, the 3.3 vs 5.0 GeV cutoff hypotheses differ by ~6 resolution widths and are decisively distinguishable despite the soft cascade rolloff. Bonus diagnostic: the U(1)- units (m < m_b) physically cannot annihilate to bb, so the bb template itself misfits on the NO branch. Dominant systematic: Z' hadronic branching near the rho/omega/phi resonances, which shifts the shape below the endpoint but not the endpoint location.",
        "status": "Splits!",
        "outcomes": [
          {"label": "endpoint above", "regions": ["R0", "R1", "R2", "R3", "R6", "R10", "R11", "R12", "R13"]},
          {"label": "endpoint below", "regions": ["R4", "R5", "R7", "R8", "R9"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R6+R10+R11+R12+R13",
          "name": "Inclusive prompt A'->mumu scan at LHCb Upgrade II",
          "observable": "eps at m_mumu 1.0-1.6 GeV: >=2.5e-4 / >=2e-5 / none ?",
          "reasoning": "All nine U(1)+ units share MDM, MZp, gU1p, and alpha1 within resolution; the only strongly varying observable is kinetic mixing eps, i.e. the visible A'->mumu bump rate (prop. to eps^2). R10 (eps = 4.9e-4) sits at the edge of current LHCb limits and yields ~30x the rate of R1/R11; R1 (1.7e-5-1.6e-4) and R11 (5.8e-5-8.7e-5) fall in the Upgrade II band; R0, R2, R3, R6, R12, R13 (eps <= 2.1e-5) stay invisible. Marginal: R1's lower tail (1.7e-5) and R6/R0 upper edges (2.1e-5/1.6e-5) straddle the 2e-5 boundary. The unseen six, and R1 vs R11 inside the middle tier, remain irreducibly degenerate: eps in [1e-6, 2e-5] at 1 GeV lies in the gap between collider bump hunts (rate too small) and beam dumps (ctau ~ 8 um x (1e-4/eps)^2, decays far too prompt), and their remaining differences are dark quartics alpha2-alpha6 with no laboratory observable (even lambda ~ 10 gives sigma_self/m ~ 3e-5 cm2/g, five orders below cluster sensitivity).",
          "feasibility": "Closest instrument: LHCb prompt A'->mumu search (Run 1-2, eps ~ (0.5-1)e-4 in the 1.1-1.6 GeV window off the phi). Upgrade II's ~50x luminosity gives ~L^(1/4) ~ 2.7x improvement to eps ~ 2e-5 -- required factor ~3. Dominant systematic: continuum Drell-Yan mumu and rho/omega/phi tail modeling; the 1.00-1.05 GeV corner is partially masked by the phi veto.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "bright bump", "regions": ["R10"]},
            {"label": "faint bump", "regions": ["R1", "R11"]},
            {"label": "not seen", "regions": ["R0", "R2", "R3", "R6", "R12", "R13"]}
          ]
        },
        {
          "attach_to": "R4+R5+R7+R8+R9",
          "name": "Belle II gamma + mumu dark-photon scan near 1 GeV",
          "observable": "eps: >=1e-2 / >=3e-5 / none ?",
          "reasoning": "The five U(1)- units differ almost solely in eps, spanning five decades. R5 (eps = 0.1) and R4 (eps = 0.032) predict prompt e+e- -> gamma A'(->mumu) bumps 1000-10000x above BaBar's existing eps ~ 1e-3 bound at 1 GeV -- already in severe tension, settled by the first Belle II data, with the eps^2 rate separating R4 from R5 by a factor ~10. R8 (eps = 0.6-1.8e-4) lands inside the Belle II 50/ab + LHCb Upgrade II band (eps ~ 3e-5-3e-4). R7 (1e-6) and R9 (<= 5e-6) are unreachable -- same prompt-decay/low-rate gap as the U(1)+ group -- and differ from each other only in quartic patterns (R7: large alpha4, alpha6; R9: large alpha3, alpha4) with no experimental handle; honestly irreducible. Both cuts (1e-2, 3e-5) sit in empty bands between region ranges: 1.8e-4 < 1e-2 < 3.2e-2 and 5e-6 < 3e-5 < 6e-5.",
          "feasibility": "Closest instrument: BaBar gamma+mumu dark-photon search (514/fb, eps ~ 1e-3 at 1 GeV). Belle II's 50/ab (~100x) plus LHCb Upgrade II dimuon coverage reaches eps ~ 3e-5 in this mass window -- required factor ~3 beyond BaBar, within published projections of funded programs. Dominant systematic: QED mumu continuum and rho/omega interference near 1 GeV; the top tier (R4/R5) needs no improvement at all, only confirmation-level data.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "huge bump", "regions": ["R4", "R5"]},
            {"label": "moderate bump", "regions": ["R8"]},
            {"label": "not seen", "regions": ["R7", "R9"]}
          ]
        }
      ]
    }
  ]
}
```