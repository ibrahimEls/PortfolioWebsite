I'll first verify the arXiv references I intend to cite (the rules require it), then deliver the full analysis in one message.
All four references verify (LHCb `A′→μ⁺μ⁻` search = arXiv:1910.06926, Belle II Physics Book = arXiv:1808.10567, "The Dark Photon" review = arXiv:2005.01515, "Secluded WIMP Dark Matter" = arXiv:0711.4866). Here is the full degeneracy-breaking analysis for leaf `root_yes_no_no`.

---

# Reasoning — Leaf `root_yes_no_no` (2802 pts, 43 units)

## 1. Physical anatomy of the leaf

Every unit in this leaf is the **same physical theory**: a complex scalar singlet S (MDM ≈ 320–710 GeV) charged under a broken dark U(1)′, kinetically mixed with hypercharge by ε. One structural fact worth stating up front: the `[+]` and `[−]` builds are related by the field redefinition S → S* combined with Z′ → −Z′ (equivalently si → −si with sign flips of the odd quartics α3, α5). **The sign of the dark charge is not an observable.** No experiment — in our catalog or outside it — can distinguish the CsSg_U1p[+] *label* from the CsSg_U1p[−] *label*. All physically meaningful separation in this leaf is separation of *parameter regions*; the split of viable points between the two labels is an artifact of how the RL sampler explored two gauge-equivalent copies of one theory. I therefore treat all 43 units purely as regions of one (MDM, MZp, ε, g′, α_i) space.

The regions fall into three qualitatively different phenomenological classes:

- **Light dark photon, 41/43 units**: MZp ≈ 1–6.2 GeV ≪ MDM. Since MZp < 2·MDM, the Z′ has no invisible decay channel and decays 100% visibly (μμ, ee, hadrons via ρ/ω mixing) with prompt-on-astrophysical-scales lifetimes for all ε here (cτ ≲ few cm even at ε = 10⁻⁶). Annihilation is **secluded** (Pospelov–Ritz–Voloshin, arXiv:0711.4866): the diagonal scalar-QED seagull g′²Z′²(sr²+si²) drives s-wave SS → Z′Z′, followed by boosted 4-body cascades (γ ≈ MDM/MZp ~ 10²). This is exactly why the leaf looks the way it does: a soft, broad γ/ν cascade that fails the CTA WW template (path: CTA-WW NO) while accumulating enough flux to sit at 1–10× the IceCube-Gen2 limit, with a tiny Higgs portal (α1 ≲ 0.04, and the h couples to the sr component, largely orthogonal to the DM eigenstate) keeping BR(h→inv) below the 4ν floor and σ_SI mostly below DARWIN.
- **R1** (501 pts): the outlier. MZp = 986 GeV ≈ 1.8·MDM (546 GeV), α_D = g′²/4π ≈ 4.2, ε = 0.068. Secluded annihilation is closed (MDM < MZp); annihilation proceeds through the **off-shell heavy mediator directly to SM fermions**, SS → Z′* → ff̄ at √s ≈ 1.09 TeV with EM-charge-weighted couplings (uū, cc̄, tt̄ dominant). Completely different final state from everyone else.
- **R17** (5 pts): MZp = 44–196 GeV, ε = 0.1, g′ ≈ 0.47 — an electroweak-scale visible Z′ with enormous kinetic mixing.

The discriminating axes our catalog never touched are therefore: **(ε, MZp) via the visible dark-photon portal**, and **the on-/off-shell character of the annihilation mediator via cosmic-ray antiprotons**.

## 2. Level-1 lit-review split: visible dark-photon search (LHCb + Belle II)

The catalog's "Z′ dilepton" observable is a high-mass Drell-Yan σ×BR recast; it does not cover the 1–70 GeV dimuon window. The LHCb prompt A′→μ⁺μ⁻ search (arXiv:1910.06926, 5.5 fb⁻¹) already excludes ε² down to ~10⁻⁶ (ε ≳ 10⁻³) over much of 0.214–70 GeV outside the J/ψ, ψ′, Υ vetoes, and the end-of-program combination — LHCb Runs 3–6 plus Belle II e⁺e⁻ → γA′(→ℓ⁺ℓ⁻) at 50 ab⁻¹ (arXiv:1808.10567) — reaches **ε ≈ 3×10⁻⁴ across 1–7 GeV** (limits compiled in arXiv:2005.01515). Because these Z′ decay 100% visibly, the published (m_A′, ε) exclusions apply directly with no BR correction. The cut is falsifiable by anyone: *is a prompt narrow μμ resonance seen corresponding to ε ≥ 3×10⁻⁴?*

Per-region predictions (the discriminating observable is the resonance strength ε at mass MZp; both are listed for **all 43 regions**):

| Region | MZp [GeV] | ε | Lit outcome | N3 outcome |
|---|---|---|---|---|
| R0 | 1–5.3 | 1e-6 – 3.7e-4 | no (straddles cut at top edge) | no (bulk < 3e-5) |
| R1 | 986 | 0.068 | no (mass outside window) | no (out of scan range) |
| R2 | 1–6.2 | 1e-6 – 2.1e-4 | no | no |
| R3 | 1.1–5.4 | 1.2e-5 – 0.1 | **yes** (>½ of log-volume already LHCb-excluded; low-ε tail caveat) | — |
| R4 | 1.2–3.4 | 6.3e-3 – 0.1 | **yes** (LHCb-excluded today) | — |
| R5 | 1–2.0 | 1.1e-5 – 2.5e-3 | no (bulk below) | yes |
| R6 | 1.1–1.7 | 9.7e-6 – 3.3e-4 | no | yes |
| R7 | 1–2.7 | 1e-6 – 5.2e-6 | no | no |
| R8 | 1.00 | 3.2e-3 – 6.3e-2 | **yes** | — |
| R9 | 1.9–2.8 | 7.4e-3 – 0.1 | **yes** | — |
| R10 | 1.0–1.7 | 2.3e-6 – 2e-5 | no | no |
| R11 | 1.2–2.0 | 0.1 | **yes** | — |
| R12 | 1.2–1.5 | 2.5e-5 – 2.2e-4 | no | yes |
| R13 | 1.0 | 1e-6 | no | no |
| R14 | 1.5–1.6 | 6.4e-3 – 0.1 | **yes** | — |
| R15 | 2.5–4.2 | 1e-6 – 1.4e-6 | no | no |
| R16 | 1.00 | 0.082–0.1 | **yes** | — |
| R17 | 44–196 | 0.1 | **yes** (44–70 GeV in LHCb window; see below) | — |
| R18 | 1.24–1.33 | 5.4e-5 – 9.8e-5 | no | yes |
| R19 | 1.1–2.2 | 1.5e-5 – 8e-5 | no | yes |
| R20 | 1.57 | 1.8e-3 – 1.9e-2 | **yes** | — |
| R21 | 1.7–2.4 | 0.041–0.1 | **yes** | — |
| R22 | 1.8–4.1 | 1.7e-5 – 6.6e-5 | no | yes |
| R23 | 1.00 | 5.5e-3 – 2.4e-2 | **yes** | — |
| R24 | 1.0 | 1e-6 | no | no |
| R25 | 1.0 | 1e-6 | no | no |
| R26 | 1.8–2.0 | 3.6e-6 – 6.4e-6 | no | no |
| R27 | 1.0 | 1e-6 – 2e-6 | no | no |
| R28 | 2.1–2.9 | 5.4e-4 – 1.4e-3 | **yes** | — |
| R29 | 1.2–1.6 | 7.2e-6 – 3.7e-5 | no | no (bulk below) |
| R30 | 1.6–2.8 | 4.6e-5 – 1.6e-4 | no | yes |
| R31 | 1.0 | 1e-6 – 6.5e-6 | no | no |
| R32 | 1.0 | 6.5e-5 – 1.3e-4 | no | yes |
| R33 | 1.0 | 3.4e-5 – 1.3e-4 | no | yes |
| R34 | 1.0 | 1e-6 – 5.3e-6 | no | no |
| R35 | 1.6–3.8 | 8.3e-3 – 3e-2 | **yes** | — |
| R36 | 1.23–1.31 | 4.4e-6 – 6e-6 | no | no |
| R37 | 1.1–1.6 | 1e-6 – 1.5e-6 | no | no |
| R38 | 1.2–1.5 | 2.3e-5 – 9.6e-5 | no | yes |
| R39 | 1.7–2.9 | 6.1e-5 – 1.9e-4 | no | yes |
| R40 | 1–1.2 | 2.4e-4 – 3.4e-4 | no (sits exactly at the cut — most marginal call in this leaf) | yes |
| R41 | 1.3–1.6 | 6.8e-4 – 8.7e-4 | **yes** | — |
| R42 | 1.1–3.1 | 5.8e-3 – 1.3e-2 | **yes** | — |

**Outcome "seen" (15 regions):** R3, R4, R8, R9, R11, R14, R16, R17, R20, R21, R23, R28, R35, R41, R42. Twelve of these (all but R28, R41, R3-low) have ε ≥ 2×10⁻³ and are testable with *already-collected* LHCb data. **Outcome "not seen" (28 regions):** the rest.

Honest marginality notes: (i) R3 and R0 straddle the cut — R3 is assigned "seen" because ~2.5 of its 4 decades in ε lie above it, R0 "not seen" because only its extreme upper edge crosses; a real outcome trims rather than kills these. (ii) R40 (2.4–3.4×10⁻⁴) sits *on* the cut. (iii) The MZp = 1.00 GeV cluster (R8, R16, R23) lies in the φ(1020)/hadronic-mixing region where the μμ limit degrades locally by ~2×; at their ε ≥ 3×10⁻³ this does not change the verdict. (iv) R17: the 44–70 GeV part of its range is inside the LHCb high-mass window, where ε = 0.1 gives a Drell-Yan-scale ε²-suppressed cross-section thousands of times above the existing limit; the 70–196 GeV part evades this particular search, but ε = 0.1 for MZp near M_Z is independently excluded by LEP Z-pole electroweak precision (ε ≲ 0.03 constraints reviewed in arXiv:2005.01515) — a genuinely non-catalog observable — so the "seen" assignment is robust across R17's whole range.

## 3. Level-2 novel nodes

**N1 — attached to the "seen" group.** Discovery immediately provides a free second split: the **measured resonance mass**. Cut: m(μμ) ≥ 10 GeV. R17 predicts 44–196 GeV; every other "seen" region predicts 1.0–5.4 GeV. Within the "no" branch, finer binning continues to separate: the [−]-build cluster at exactly 1.00 GeV (R8, R16, R23) vs. everything else at ≥ 1.09 GeV, R9 at 1.9–2.8 GeV, R35 up to 3.8 GeV, etc. — LHCb's ~0.4% dimuon mass resolution (≈10 MeV at 2 GeV) resolves all of these locales, though overlapping MZp ranges (R4/R42/R35) mean mass alone cannot fully separate every pair. Rated **possible** — this is a by-product of the discovery measurement itself.

**N2 — attached to the "not seen" group: cosmic-ray antiprotons.** This is the one axis that cleanly isolates R1 from all 27 light-mediator regions, and the physics is sharp. The light-Z′ regions annihilate into a pair of hadronizing systems each with invariant mass MZp mostly *below the baryon-pair threshold* 2m_p = 1.88 GeV: antiproton production is kinematically forbidden for MZp < 1.88 GeV and phase-space-crushed (≳10² suppression) up to ~4 GeV; only thin MZp tails (R2, R22 up to ~6 GeV) produce any p̄ at all. R1 instead annihilates at √s ≈ 1.09 TeV directly to charge-weighted qq̄ (+tt̄), i.e. the *standard* hard p̄ spectrum, O(1) p̄ per annihilation above 10 GeV, at σv ~ 2×10⁻²⁶ cm³/s (relic-scale s-wave, consistent with its IceCube-Gen2 signal). Current AMS-02 p̄/p data constrain σv(qq̄) at m_DM ≈ 550 GeV at the ~10⁻²⁵ level; the required factor ~3 is within reach of the full 15-year AMS-02 dataset plus GAPS/AMS-100. Cut: a p̄ flux excess at E ~ 30–300 GeV consistent with σv ≥ 10⁻²⁶ cm³/s → yes = R1, no = everyone else. Dominant systematic: p̄ production cross-sections and propagation/solar-modulation modeling. Rated **possible**.

**N3 — attached to the "not seen" group: the GeV gap.** The remaining regions split into a mid-ε band (~3×10⁻⁵–3×10⁻⁴: R5, R6, R12, R18, R19, R22, R30, R32, R33, R38, R39, R40) and a deep-hidden band (ε ≲ 10⁻⁵: R0-bulk, R2-bulk, R7, R10, R13, R15, R24–R27, R29, R31, R34, R36, R37). No planned experiment covers the mid band: at MZp ~ 1–6 GeV and ε ~ 10⁻⁵ the A′ decays at 60 μm (prompt — beam dumps, FASER2 and displaced-vertex searches all lose the decay-volume race, since cτ·γ never exceeds ~m even at ε = 10⁻⁶), while prompt-production rates ∝ ε² are hopeless at colliders below ε ~ 3×10⁻⁴. The only conceivable handle is **s-channel resonant production**: a fine-step √s scan at a super-tau-charm-class e⁺e⁻ machine, exploiting the ε-independent peak cross-section σ_peak = 12πB_ee B_μμ/m². The catch is the width: Γ_A′ ≈ (α/3)ε²m/B_ee ~ 10⁻¹¹ GeV at ε = 3×10⁻⁵, so a ~1 MeV beam-energy spread dilutes the resonance by ~10⁶, leaving ~10⁻² fb effective signal over a 20 pb QED μμ continuum per MeV window — reaching ε = 3×10⁻⁵ needs ~10³ beyond a realistic STCF R-scan, i.e. Γ-level monochromatization or absurd luminosity. I propose it because it is the *only* concept that scales into this band at all, and rate it honestly **speculative**. The deep-hidden band (ε ≲ 10⁻⁵) lands in this node's "no" outcome and is, as far as I can determine, mutually indistinguishable by any known or conceivable dark-photon-portal technique — its only observable handles (the ν/γ cascade flux) are already in the catalog, and its regions differ mainly in quartics (α2–α6) that feed no accessible observable. That residual degeneracy is real and I am flagging it rather than papering over it.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_no",
      "lit_review": {
        "name": "LHCb + Belle II visible dark-photon search",
        "observable": "prompt A'->mumu resonance, 1-70 GeV: epsilon >= 3e-4 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1808.10567", "arXiv:2005.01515"],
        "reasoning": "All units except R1 contain a 1-6 GeV dark photon that decays 100% visibly (MZp < 2 MDM closes the invisible channel), so published (m, epsilon) exclusions apply directly. LHCb 5.5 fb^-1 already excludes epsilon >~ 1e-3 over most of 1-70 GeV; LHCb Runs 3-6 plus Belle II 50 ab^-1 gamma+ll reach epsilon ~ 3e-4 over 1-7 GeV. Seen: R4,R8,R9,R11,R14,R16,R20,R21,R23,R35,R42 (epsilon >= 2e-3, testable with existing data), R28,R41 (5e-4-1.4e-3, end-of-program), R3 (>half its log-volume above cut; low-epsilon tail caveat), R17 (44-70 GeV slice in LHCb window at epsilon=0.1, thousands of times above limit; the 70-196 GeV remainder is independently excluded by LEP Z-pole EWPO epsilon <~ 0.03). Not seen: all regions with epsilon <~ 3e-4, plus R1 whose 986 GeV Z' is outside the window. Marginal: R0 upper edge (3.7e-4) and R40 (2.4-3.4e-4) sit at the cut; assigned 'no' by bulk. The catalog Z' dilepton recast is a high-mass Drell-Yan observable and does not cover this window, so this is a genuinely new measurement. Note: the [+] vs [-] Lagrangian labels are gauge-equivalent (S -> S*, Z' -> -Z'); only region separation is physical.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R3", "R4", "R8", "R9", "R11", "R14", "R16", "R17", "R20", "R21", "R23", "R28", "R35", "R41", "R42"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R5", "R6", "R7", "R10", "R12", "R13", "R15", "R18", "R19", "R22", "R24", "R25", "R26", "R27", "R29", "R30", "R31", "R32", "R33", "R34", "R36", "R37", "R38", "R39", "R40"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R3+R4+R8+R9+R11+R14+R16+R17+R20+R21+R23+R28+R35+R41+R42",
          "name": "Dark-photon resonance mass determination",
          "observable": "m(A'->mumu) >= 10 GeV ?",
          "reasoning": "R17 predicts a 44-196 GeV resonance; every other seen-region predicts 1.0-5.4 GeV. Within the light group, finer mass binning keeps separating locales: R8/R16/R23 cluster at exactly 1.00 GeV, all others at >= 1.09 GeV; R9 at 1.9-2.8 GeV, R35 up to 3.8 GeV. Overlapping MZp ranges (R4/R42/R35) limit full pairwise separation, and the measured epsilon adds a second coordinate (e.g. R41 at 7-9e-4 vs R11/R16 at ~0.1).",
          "feasibility": "By-product of the discovery measurement itself: LHCb dimuon mass resolution ~0.4% (about 10 MeV at 2 GeV), Belle II comparable; no improvement factor required; dominant systematic is momentum-scale calibration, negligible at this precision.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R17"]},
            {"label": "no", "regions": ["R3", "R4", "R8", "R9", "R11", "R14", "R16", "R20", "R21", "R23", "R28", "R35", "R41", "R42"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R5+R6+R7+R10+R12+R13+R15+R18+R19+R22+R24+R25+R26+R27+R29+R30+R31+R32+R33+R34+R36+R37+R38+R39+R40",
          "name": "Cosmic-ray antiproton spectrum (AMS-02/AMS-100, GAPS)",
          "observable": "pbar excess at 30-300 GeV from sigmav >= 1e-26 cm3/s ?",
          "reasoning": "R1 annihilates through its off-shell 986 GeV mediator directly to charge-weighted qq/tt at sqrt(s) ~ 1.09 TeV, giving the standard hard antiproton spectrum, O(1) pbar per annihilation, at relic-scale sigmav ~ 2e-26 cm3/s. Every light-Z' region annihilates to Z' pairs whose rest-frame invariant mass is mostly below the baryon threshold 2m_p = 1.88 GeV: pbar production is kinematically forbidden there and suppressed by >~ 100x up to MZp ~ 4 GeV, so those regions predict essentially zero pbar flux. Order-of-magnitude-clean yes/no; only thin MZp tails of R2/R22 (up to ~6 GeV) blur it slightly.",
          "feasibility": "AMS-02 (operating) constrains sigmav(qq) at m_DM ~ 550 GeV at the ~1e-25 level; required improvement ~3x, within the full 15-yr AMS-02 dataset plus GAPS antideuteron/low-energy pbar and the proposed AMS-100. Dominant systematic: pbar production cross-sections and galactic propagation / solar modulation modeling.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R1"]},
            {"label": "no", "regions": ["R0", "R2", "R5", "R6", "R7", "R10", "R12", "R13", "R15", "R18", "R19", "R22", "R24", "R25", "R26", "R27", "R29", "R30", "R31", "R32", "R33", "R34", "R36", "R37", "R38", "R39", "R40"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R5+R6+R7+R10+R12+R13+R15+R18+R19+R22+R24+R25+R26+R27+R29+R30+R31+R32+R33+R34+R36+R37+R38+R39+R40",
          "name": "Monochromatized super-tau-charm sqrt(s) resonance scan",
          "observable": "narrow mumu resonance in sqrt(s) scan 1-6 GeV: epsilon >= 3e-5 ?",
          "reasoning": "The undetected regions split into a mid-epsilon band (3e-5 to 3e-4: R5,R6,R12,R18,R19,R22,R30,R32,R33,R38,R39,R40) and a deep band (epsilon <~ 1e-5: rest). In the GeV-mass gap no displaced/beam-dump concept works (cxtau ~ 60 um at epsilon=1e-5; even at 1e-6 boosted decay lengths stay under meters) and prompt production scales as epsilon^2, so the only concept that scales into the band is s-channel resonant production, whose peak cross-section 12*pi*B_ee*B_mumu/m^2 is epsilon-independent; epsilon enters only through the width that must be caught by the scan. Straddlers assigned by log-bulk: R0, R2, R29 to 'no'; R6, R19, R22, R38 to 'yes'. The 'no' outcome (epsilon <~ 1e-5) is flagged as possibly irreducible: those regions differ mainly in quartic couplings feeding no accessible observable.",
          "feasibility": "Closest instruments: BESIII R-scan, proposed STCF (1 ab^-1/yr, sqrt(s) = 2-7 GeV). A ~1 MeV beam-energy spread vs the ~1e-11 GeV A' width dilutes the resonance by ~1e6, leaving ~1e-2 fb effective signal over a ~20 pb QED mumu continuum per MeV window: reaching epsilon = 3e-5 needs ~1e3 beyond projected STCF scan sensitivity, i.e. width-level monochromatization. Dominant systematic: irreducible QED dimuon continuum under an MeV-scale mass window.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R5", "R6", "R12", "R18", "R19", "R22", "R30", "R32", "R33", "R38", "R39", "R40"]},
            {"label": "no", "regions": ["R0", "R1", "R2", "R7", "R10", "R13", "R15", "R24", "R25", "R26", "R27", "R29", "R31", "R34", "R36", "R37"]}
          ]
        }
      ]
    }
  ]
}
```