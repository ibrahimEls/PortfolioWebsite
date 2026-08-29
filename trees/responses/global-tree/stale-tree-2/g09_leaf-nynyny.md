I'll verify the arXiv references I plan to cite, then deliver the full analysis in one message.
All three references verified (LHCb dark-photon search 1710.02867, LHCb A′→μ⁺μ⁻ 1910.06926, Belle II Physics Book 1808.10567). Here is the full analysis.

## Leaf `root_no_yes_no_yes_no_yes` — 811 pts, 29 units

**Physics of this leaf.** Every unit is a complex scalar singlet DM (mass 3.3–5.5 GeV) charged under a dark U(1)′, with a light dark photon Z′ of mass 1–3.3 GeV that kinetically mixes with hypercharge (ε spanning 10⁻⁶–5×10⁻²). Two structural facts drive everything:

1. **The Z′ decays 100% visibly.** Since M_Z′ (≤ 3.3 GeV) < 2·M_DM (≥ 6.5 GeV), the invisible channel Z′→DM DM is kinematically closed. The Z′ is therefore a *textbook visibly-decaying dark photon*: it decays to SM leptons and hadrons through kinetic mixing, with BR(A′→μμ) ≈ 10–20% in the 1–3.3 GeV window (R-ratio dependent). This is completely different from the catalog's high-mass pp→Z′→ℓℓ dilepton recast, which has no reach at 1–3 GeV.
2. **Relic abundance is secluded, so ε is a free axis.** The narrow pinning of gU1p ≈ 0.037–0.044 across all units is the signature of secluded freeze-out DM DM → Z′Z′ (σv ~ g⁴/16πM² ≈ 3–4×10⁻²⁶ cm³/s at g ≈ 0.044, M ≈ 4.7 GeV), which is also what feeds the Fermi/CTA (bb-like) 4-body gamma signal on the leaf path. Because relic and indirect detection are ε-independent, the scan leaves ε spread over almost five decades — and none of the 18 catalog observables measures it. Kinetic mixing is therefore the natural degeneracy-breaking axis.

**Honest global caveat (not a split):** with s-wave σv ≥ 10× the Fermi 15-yr bb limit at ~5 GeV, all units predict σv ~ 10⁻²⁵–10⁻²⁶ cm³/s, in tension with the Planck energy-injection bound σv ≲ m·3.5×10⁻²⁸/f_eff ≈ 5×10⁻²⁷ cm³/s at 4.7 GeV. This is a real published measurement not in the catalog, but it presses on *all* 29 units nearly uniformly (their σv values sit in the same leaf-defined band), so it tests the leaf rather than splitting it; I do not use it as the discriminator.

### Level 1 — Lit review: prompt dark-photon dimuon search (LHCb + Belle II)

LHCb has published prompt A′→μμ searches covering exactly this mass window (arXiv:1710.02867, arXiv:1910.06926), already excluding ε ≳ 10⁻³ over much of 1–3.3 GeV, and the Upgrade-II/Run-6 projection (plus Belle II e⁺e⁻→γA′(→ℓℓ) with 50 ab⁻¹, arXiv:1808.10567) reaches ε ≈ 3×10⁻⁴ across the window. Cut: **a prompt dimuon resonance at 1–3.3 GeV with ε ≥ 3×10⁻⁴**. Per-region predicted ε (geometric midpoint of the DBSCAN box):

| ε band | regions (predicted ε) |
|---|---|
| **Seen** (ε ≳ 3×10⁻⁴) | R6 (4×10⁻⁴–5×10⁻², upper slice already BaBar/LHCb-excludable), R19 (4.5–7×10⁻³), R17 (1.0–1.5×10⁻³), R27 (~9×10⁻⁴), R12 (5.5×10⁻⁴–2×10⁻³), R15 (mid ≈ 4.8×10⁻⁴), R1 (mid ≈ 4.5×10⁻⁴), R2 (mid ≈ 4×10⁻⁴), R14 (≈3.4×10⁻⁴) |
| **Not seen** (ε ≲ 3×10⁻⁴) | R5, R8, R16, R22, R25, R28 (~10⁻⁶); R20, R23 (few ×10⁻⁶); R7, R9, R18, R21, R13 (10⁻⁵ decade); R3, R26 (2×10⁻⁵–1.3×10⁻⁴); R10, R11 (mid ≈ 10⁻⁴); R24 (1.5–2.6×10⁻⁴, just below cut); R4 (mid ≈ 2.2×10⁻⁴); R0 (10⁻⁶–2.6×10⁻³ — mid ≈ 5×10⁻⁵) |

Marginality, stated honestly: R1, R2, R4, R14, R15, R24 straddle or sit within a factor ~2 of the cut, and the dominant region R0 (316 pts) spans it entirely — its upper ε tail would be seen, so R0's assignment to "not seen" is by bulk, not cleanly. One instrumental caveat: the large 3.16-GeV M_Z′ cluster lies only ~60 MeV above the J/ψ (3.097), abutting LHCb's J/ψ veto window; the Belle II γμμ channel provides the clean cross-check there. This split also carries structure beyond region-sorting: it directly measures the one Lagrangian parameter (ε) the entire catalog is blind to.

### Level 2a — Novel node on the "seen" outcome: A′ mass spectroscopy

Once the resonance is seen, its mass is free. Predicted m(A′): R27 at 1.00–1.02 GeV; R2 (2.84–3.09), R6 (3.06–3.28), R14 (3.03–3.16), and R12/R15/R17/R19 (all pinned at 3.161 GeV) — versus LHCb dimuon resolution σ(m) ≈ 0.5% (~15 MeV at 3 GeV). Cut **m(A′) ≥ 2 GeV** cleanly puts R27 (and R1, whose M_Z′ box 1–3.16 GeV straddles; assigned low by log-midpoint ≈ 1.8 GeV, noted as marginal) on the "no" side and the seven ~3-GeV regions on "yes". Residual degeneracy within the 3.16-GeV cluster is largely irreducible: those regions differ mainly in the dark-sector quartics α₂–α₆, which only feed DM self-interaction at σ/m ~ 10⁻⁶ cm²/g — six orders below cluster bounds — though the measured signal yield (∝ ε²) would still separate R19/R6 (ε ~ 5×10⁻³, ~100× rate) from R12/R15/R17 (ε ~ 10⁻³) statistically; their ε boxes partially overlap, so I do not draw that as a node.

### Level 2b — Novel node on the "not seen" outcome: annihilation spectral-endpoint fit

The leaf sits 10–100× above the Fermi 15-yr bb sensitivity, so the Galactic-center/dwarf gamma signal, if real, delivers 10³–10⁴ photons — enough for a spectral *shape* fit, an observable the catalog (which only uses per-channel rate limits) never touches. The DM DM → Z′Z′ → 4-body cascade spectrum cuts off at E_γ ≈ M_DM. Predicted cutoff per region: **R5 at 3.26–3.47 GeV** (the only CsSg_U1p[−] unit among the listed regions — a *Lagrangian*-level separation); R3 at 3.8–5.3 GeV (lower edge marginal); everything else at 4.1–5.5 GeV (most pinned at 4.7 GeV). Cut **spectral cutoff ≥ 3.6 GeV**: "no" isolates R5; "yes" collects the other 19. Fermi-LAT's ΔE/E ≈ 8% at 3–5 GeV comfortably resolves 3.4 vs ≥ 4.1 GeV (a 20–60% difference); the dominant systematic is the Galactic diffuse background model plus the assumed Z′Z′ cascade shape (M_Z′ enters the box-spectrum width, partially degenerate with the endpoint — dwarf stacking, which is background-free, mitigates this). The residual 18-region "yes" cluster (M_DM ≈ 4.7 GeV, M_Z′ mostly 3.16 GeV, ε ≤ 10⁻⁴, distinguished only by α₂–α₆ and sub-detectable ε) is, honestly, observationally irreducible with any instrument I can defend: the quartics are invisible, and separating ε = 10⁻⁶ from 10⁻⁵ for a 3-GeV visibly-decaying A′ is beyond even SHiP's mass reach (production dies above ~2 GeV at beam dumps). I flag that limit rather than invent a fake split.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_yes_no_yes",
      "lit_review": {
        "name": "LHCb/Belle II prompt dark-photon search",
        "observable": "A' -> mu mu peak at 1-3.3 GeV with epsilon >= 3e-4 ?",
        "refs": ["arXiv:1710.02867", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "M_Z' (1-3.3 GeV) < 2 M_DM (6.5-11 GeV), so the Z' decays 100% visibly via kinetic mixing: a textbook prompt dark photon with BR(A'->mumu) ~ 10-20%, in exactly the mass window of the LHCb prompt A'->mumu searches and Belle II gamma-A' projections (ultimate reach eps ~ 3e-4; eps > ~1e-3 already excluded over much of the window). Relic density is secluded (DM DM -> Z'Z', gU1p pinned at 0.037-0.044), so eps is unconstrained by every catalog observable and spans 5 decades across the leaf: seen-branch regions predict eps ~ 3e-4 - 5e-2 (R6 4e-4-5e-2, R19 4.5-7e-3, R17/R27/R12 ~1e-3, R1/R2/R14/R15 ~3-5e-4), not-seen regions predict eps ~ 1e-6 - 2e-4 (R5/R8/R16/R22/R25/R28 ~1e-6; R7/R9/R13/R18/R20/R21/R23 ~1e-5; R3/R10/R11/R26 ~1e-4; R4/R24 ~2e-4). Marginal: R1,R2,R4,R14,R15,R24 sit within ~2x of the cut, and R0 (316 pts, eps 1e-6-2.6e-3) straddles it entirely - assigned 'not seen' by its log-midpoint 5e-5. Caveat: the 3.16 GeV M_Z' cluster lies ~60 MeV above the J/psi, abutting LHCb's veto window; Belle II gamma-mumu covers that gap.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1", "R2", "R6", "R12", "R14", "R15", "R17", "R19", "R27"]},
          {"label": "not seen", "regions": ["R0", "R3", "R4", "R5", "R7", "R8", "R9", "R10", "R11", "R13", "R16", "R18", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R28"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R6+R12+R14+R15+R17+R19+R27",
          "name": "Dark-photon mass spectroscopy (LHCb dimuon)",
          "observable": "m(A' -> mu mu) >= 2 GeV ?",
          "reasoning": "Once the resonance is seen its mass is measured for free: R27 predicts m(A') = 1.00-1.02 GeV while R2/R6/R14 predict 2.8-3.3 GeV and R12/R15/R17/R19 are pinned at 3.161 GeV; the two clusters differ by a factor ~3, versus ~0.5% dimuon mass resolution. R1's box (1-3.16 GeV) straddles the cut and is assigned low-mass by log-midpoint (~1.8 GeV) - marginal. Residual degeneracy inside the 3.16 GeV cluster is dominated by the dark quartics alpha2-alpha6, which only produce DM self-interaction at sigma/m ~ 1e-6 cm^2/g (six orders below cluster bounds) and are effectively unobservable; the signal yield (proportional to eps^2) would further separate R6/R19 (eps ~ 5e-3) from R12/R15/R17 (~1e-3) but their eps ranges partially overlap.",
          "feasibility": "LHCb dimuon spectrometer: sigma(m) ~ 0.5% (~15 MeV at 3 GeV); required separation 1.0 vs 3.16 GeV needs no improvement (factor 1x). Dominant systematic: the 3.16 GeV cluster sits ~60 MeV above the J/psi veto window - Belle II e+e- -> gamma A'(->mumu) provides an independent confirmation channel with comparable resolution.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R2", "R6", "R12", "R14", "R15", "R17", "R19"]},
            {"label": "no", "regions": ["R1", "R27"]}
          ]
        },
        {
          "attach_to": "R0+R3+R4+R5+R7+R8+R9+R10+R11+R13+R16+R18+R20+R21+R22+R23+R24+R25+R26+R28",
          "name": "GC/dwarf annihilation spectral-endpoint fit (Fermi-LAT)",
          "observable": "gamma spectrum cutoff >= 3.6 GeV ?",
          "reasoning": "All units annihilate DM DM -> Z'Z' -> 4-body SM, whose photon spectrum cuts off at E ~ M_DM. The leaf's flux is 10-100x the Fermi 15-yr bb sensitivity, so a detected signal carries 1e3-1e4 photons - enough for a shape fit, an observable the catalog (rate limits only) never uses. Predicted cutoff: R5 at 3.26-3.47 GeV versus 4.1-5.5 GeV for all other regions (most pinned at 4.7 GeV; R3's lower edge 3.79 GeV is marginal). This isolates R5, the only CsSg_U1p[-] unit among the listed regions - a Lagrangian-level separation. The residual 18-region 'yes' cluster (M_DM ~ 4.7 GeV, M_Z' ~ 3.16 GeV, eps <= 1e-4, differing only in unobservable quartics alpha2-alpha6 and sub-beam-dump eps) is honestly irreducible: no proposed instrument separates eps = 1e-6 from 1e-5 for a 3 GeV visibly-decaying A' (SHiP production dies above ~2 GeV).",
          "feasibility": "Fermi-LAT: Delta E/E ~ 8% at 3-5 GeV, already sufficient to resolve a 3.4 vs 4.7 GeV cutoff (20-60% difference, improvement factor ~1x given the high signal statistics this leaf implies); AMEGO-X would sharpen the low-energy side. Dominant systematic: Galactic diffuse emission model and the assumed Z'Z' cascade shape (M_Z' partially degenerate with the endpoint); background-free dwarf-spheroidal stacking mitigates both.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R3", "R4", "R7", "R8", "R9", "R10", "R11", "R13", "R16", "R18", "R20", "R21", "R22", "R23", "R24", "R25", "R26", "R28"]},
            {"label": "no", "regions": ["R5"]}
          ]
        }
      ]
    }
  ]
}
```