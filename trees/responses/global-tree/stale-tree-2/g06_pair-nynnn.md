I'll verify the arXiv references I plan to cite before composing the full answ
All three references now verified (BaBar visible A′ search is arXiv:1406.2980 — the 1702.03327 paper turned out to be BaBar's *invisible*-decay search, so I've swapped it out). Full answer follows.

---

# Degeneracy-breaking analysis — leaf `root_no_yes_no_no_no_no`

(The sibling `root_no_yes_no_no_no_yes` is context-only per the card; no answer required for it.)

## Why this leaf is degenerate in the catalog

Every unit in this leaf sits in the same narrow Higgs-portal window: the path pins BR(h→inv) to [0.001, 0.0032], and indeed every CsSg region has α1 ≈ 0.001 (Γ(h→s_r s_r) ≈ α1²v²/8πm_h ≈ 2×10⁻⁵ GeV → BR ≈ few×10⁻³, exactly this bin). With the portal frozen and all ID/DD/collider catalog observables returning "nothing," the *entire remaining physics difference* between the 39 CsSg units lives in the dark-radiation sector: a Z′ of mass ≈1 GeV (a few units at 1.33, 4.7, 14.4, 60 GeV) with kinetic mixing ε spanning **five decades, 10⁻⁶ → 0.1**, and dark coupling g′ ≈ 0.031 (except R9: 0.30, R28: 0.13, R11: 11.4). The catalog's Z′-dilepton observable is a high-mass HL-LHC Drell-Yan recast and is blind to a ~1 GeV visibly-decaying dark photon — which is precisely the regime where the B-factory/LHCb dark-photon program is world-leading. R0 (Real Scalar Singlet, MDM ≈ 94 GeV) is the unique unit with **no dark U(1) at all**. (Aside: R0's nonzero BR(h→inv) at MDM ≈ 94 GeV is kinematically impossible for on-shell h→ss and must be a pipeline proxy; its separation below rests on the *absence* of any dark-photon signal, which is robust to that oddity.)

Rejected level-1 alternatives: **CMB energy injection (Planck p_ann)** — with MZp ≈ MDM the s-wave χχ→Z′Z′ channel is at/below threshold and s-channel Z′→ff annihilation of scalars is p-wave, so recombination-era injection is suppressed for essentially all units and does not split. **MeV–GeV gamma-rays (AMEGO-class)** — same p-wave/forbidden suppression. **Low-mass direct detection** — catalog-adjacent (SuperCDMS/DarkSide are catalog observables), and ambiguous because only s_r has the H² portal, so σ_SI depends on whether the DM state is s_r or s_i; I use it only as corroboration, not a node. Throughout I adopt the working assumption DM = s_r (the portal state — required for h→s_r s_r to be counted invisible).

A caveat on [+] vs [−]: the sign of the dark charge of a single complex scalar is unphysical (field redefinition χ↔χ*), so no experiment separates the two Lagrangians *as Lagrangians*; they are separated here only through the disjoint (ε, m_Z′) regions the RL search populated. Notably the ε ≥ 0.03, m ≈ 1 GeV outcome happens to contain only U1p[+] units.

## Level 1 — lit review: visible dark-photon dilepton search (Belle II γℓℓ + LHCb A′→μμ)

BaBar's radiative-return search (arXiv:1406.2980) already excludes ε ≈ 10⁻⁴–10⁻³... wait — excludes ε ≳ (0.6–2)×10⁻³ over 0.02–10.2 GeV; Belle II projects reach to ε ≈ 3×10⁻⁴ with 50 ab⁻¹ (arXiv:1808.10567); LHCb's prompt A′→μμ search covers up to 70 GeV (arXiv:1910.06926). The measurement returns not just seen/not-seen but **m(ℓℓ)** (few-MeV resolution) and **σ·BR ∝ ε²**, giving a multi-way split for free. Expected Belle II yield: N ≈ 5.8×10¹⁰ ε² (50 ab⁻¹, m ≈ 1 GeV, before BR(μμ) ≈ 0.15); lifetime cτ ≈ 2.5 cm × (10⁻⁶/ε)² — everything with ε ≳ 3×10⁻⁴ is prompt.

Per-region geometric-mid ε and assignment:

| Outcome | Regions (ε_mid; m_Z′ GeV) | Predicted response |
|---|---|---|
| seen, m≈1.0 GeV, ε ≥ 0.03 | R2 (0.055), R5 (0.080), R16 (0.095), R21 (0.10) | N ~ 2–6×10⁸ evts; 30–100× above the existing BaBar bound — already in strong tension; a first-data Belle II run settles it |
| seen, m≈1.0 GeV, ε ≈ 3×10⁻⁴–10⁻² | R3 (3.9e-3), R10 (1.4e-3), R18 (4.1e-3), R25 (3.7e-3), R26 (7.5e-4), R37 (2.3e-3) | N ~ 3×10⁴–10⁶ evts; R26 and the low tail of R10 are marginal (reach limit ≈3×10⁻⁴, and sensitivity degrades in the ρ/ω hadronic window) |
| seen, m≈1.33 GeV | R36 (0.1) | huge prompt peak, mass alone separates it (Δm = 330 MeV ≫ few-MeV resolution) |
| seen, m≈4.7 GeV | R9 (0.1) | Z′→χχ* open (g′=0.30) so BR(ℓℓ) ≈ 5%, still ~10⁷ evts; also a monochromatic single-γ (invisible) signal |
| seen, m≈14.4 GeV (LHCb) | R28 (0.1) | ε² = 10⁻² vs LHCb prompt reach ~10⁻⁶ at this mass; seen at ≥10³× threshold despite BR dilution (Z′→χχ open) |
| not seen | R0 (no Z′); R11 (m=60 GeV but Γ/m ≈ 27% and BR(ℓℓ) ~ 10⁻⁴–10⁻⁵ because g′=11.4 → fails any *narrow*-dilepton search); and the low-ε crowd: R4, R15, R19, R22, R35, R39 (≈1.0e-6), R32 (1.4e-6), R31 (1.7e-6), R17 (2.1e-6), R34 (2.5e-6), R24 (2.8e-6), R8 (3.0e-6), R7 (3.6e-6), R23 (7.1e-6), R6 (7.3e-6), R14 (4.9e-6), R12 (2.8e-5), R20 (2.5e-5), R13 (4.6e-5), R27 (1.2e-4), R38 (1.7e-4), R33 (1.9e-4), R29 (2.2e-4), R30 (2.8e-4), R1 (3.1e-4) | all below prompt bump-hunt reach: rates ≤ ~10³ evts buried under the QED γμμ continuum, or decays displaced |

Marginality flags: R29, R30, R38 have upper tails crossing 3×10⁻⁴ (assigned "not seen" by log-median); **R1 spans 4.6×10⁻⁶–0.021** and straddles three nodes — but the chain is self-consistent for it: after each non-observation the surviving part of R1 collapses toward the ε ~ 10⁻⁵–3×10⁻⁴ "gap strip," which is where it is finally classified.

**Status: Splits!** — 13 regions separated into 5 signal classes; 27 remain in "not seen" → novel chain below.

## Level 2 — novel-experiment chain on the "not seen" branch

**Node A — LHCb-Upgrade-II-class inclusive displaced A′→μμ.** For m ≈ 1 GeV, cτ ≈ 2.5 cm × (10⁻⁶/ε)²; with LHCb boosts (γ ~ 20) the ε ≈ 1–7×10⁻⁶ crowd decays 1–50 cm from the PV — clean displaced dimuon vertices inside the VELO, essentially background-free beyond ~3 mm. The published inclusive-displaced proposal (Ilten, Soreq, Thaler, Williams, Xue — the basis of the actual LHCb dark-photon program) projects coverage of ε ~ 3×10⁻⁶ at 1 GeV with ~15 fb⁻¹; the group floor at ε = 10⁻⁶ needs ~10× more rate, i.e. the planned 300 fb⁻¹ Upgrade II. The gap strip (ε ≳ 2.5×10⁻⁵) decays in ≲ 1 mm — fails the displaced cut, and its prompt rate is below bump-hunt reach: not seen. R0 (no A′) and R11 (60 GeV, not produced in this channel): not seen. Splits 16 vs 11.

**Node B — FCC-ee Tera-Z radiative-return A′ scan (γ + X).** σ(e⁺e⁻→γA′) ≈ 15.7 pb × ε² at √s = m_Z → N ≈ 2.4×10⁹ ε² per 150 ab⁻¹. Three mutually exclusive signal classes plus null: (i) **R11**: monochromatic E_γ = (s−m²)/2√s ≈ 25.7 GeV photon recoiling against a 60 GeV *invisible* system (g′ = 11.4 → BR(χχ) ≈ 1), N ~ 2×10⁷ — unmissable even though the resonance is broad; (ii) **R12, R13, R20** (ε_mid 2.5–4.6×10⁻⁵): γ + displaced μμ at m ≈ 1 GeV, lab decay length γcτ ≈ 0.5–2 mm (γ ≈ 46), ~1.5–5 events, background-free displaced — marginal but decisive if seen (R13 sits nearest the 0.3 mm cut); (iii) **R1, R27, R29, R30, R33, R38** (ε_mid 1.2–3.1×10⁻⁴): prompt γμμ, 30–200 events over the QED continuum — a hard per-mille-resolution bump hunt, the dominant systematic; (iv) **R0**: nothing, isolating the Real Scalar Singlet Lagrangian — the highest-value separation in the leaf. Corroboration for R0 (not a node, since "improve DARWIN" is off-limits): its Higgs-portal σ_SI ≈ 1.4×10⁻⁴⁸ cm² at 94 GeV sits at the xenon ν-fog edge, while every CsSg unit predicts a *low-mass* (1–5 GeV) DD signal instead.

**Node C — dark-matter self-interaction census (attached to R2+R5+R16+R21).** These four U1p[+] units overlap completely in (m_Z′, ε, MDM); the only surviving difference is the DM self-quartic α2: σ_self/m ≈ 2.2×10⁻⁴ λ²/m³ cm²/g → R21 (α2 = 0.32–1.34): 2×10⁻⁵–4×10⁻⁴ cm²/g vs R2/R5/R16 (α2 ≲ 0.08): ≲ 1.5×10⁻⁶. A cut at 10⁻⁵ cm²/g separates them cleanly *in principle* — but current merging-cluster/dwarf-core constraints bottom out at ~0.1 cm²/g, so this needs ≳10³× beyond any proposed probe. Honest rating: speculative. Included because it is the *only* physical direction in which these units differ.

**Irreducible residues (honest failures):** within the "1 GeV low-ε" lit outcome {R3, R10, R18, R25, R26, R37} the ε ranges interleave pairwise (0.33–9.8×10⁻³ with overlapping chains), so even a 1%-precision ε measurement returns values consistent with multiple units — no partition exists. The same holds inside the 16-region displaced-seen group of Node A (ε_mid 1–7×10⁻⁶, overlapping; remaining differences are dark quartics α2–α6, unobservable per Node C's arithmetic, ~10³× weaker still at these α values). These groups end the chain as terminal degeneracies; the physics reason is that a single complex scalar's quartic self-couplings simply do not feed any laboratory or astrophysical observable at measurable strength.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_no_no_no",
      "lit_review": {
        "name": "Belle II + LHCb visible dark-photon search",
        "observable": "prompt l+l- resonance, 0.2-70 GeV, eps >= 3e-4? measure m(ll), sigma*BR",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "All CsSg units share alpha1~0.001 (pinned by the leaf's BR(h->inv) bin), so the only discriminating sector is the dark photon: m_Zp~1-14 GeV with eps spanning 1e-6 to 0.1. Radiative-return gamma+ll at Belle II (reach eps~3e-4 with 50/ab; N~5.8e10*eps^2 at 1 GeV) plus LHCb prompt A'->mumu (to 70 GeV) return m(ll) at few-MeV resolution and rate ~eps^2, giving a six-way split: eps>=0.03 units yield >1e8 events (already 30-100x above the BaBar bound - immediate tension), eps~3e-4-1e-2 units yield 3e4-1e6 events, and R36/R9/R28 are isolated by resonance mass alone (1.33/4.7/14.4 GeV; R9,R28 have Zp->chichi open, diluting BR(ll) but staying >=1e3x above reach). Not seen: R0 (no Z'), R11 (Gamma/m~27%, BR(ll)~1e-5 - fails narrow-resonance searches), and all eps<~3e-4 units (prompt rate under QED continuum or decay displaced). Marginal: R26, R29, R30, R38 tails cross 3e-4; R1 spans 4.6e-6-0.021 and is classified by where its surviving points land after upstream non-observations. Distinct from the catalog's high-mass HL-LHC Drell-Yan Z' recast: this is the low-mass radiative-return/soft-dimuon regime.",
        "status": "Splits!",
        "outcomes": [
          {"label": "1GeV high-eps", "regions": ["R2", "R5", "R16", "R21"]},
          {"label": "1GeV low-eps", "regions": ["R3", "R10", "R18", "R25", "R26", "R37"]},
          {"label": "1.33GeV peak", "regions": ["R36"]},
          {"label": "4.7GeV peak", "regions": ["R9"]},
          {"label": "14GeV peak", "regions": ["R28"]},
          {"label": "not seen", "regions": ["R0", "R1", "R4", "R6", "R7", "R8", "R11", "R12", "R13", "R14", "R15", "R17", "R19", "R20", "R22", "R23", "R24", "R27", "R29", "R30", "R31", "R32", "R33", "R34", "R35", "R38", "R39"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R4+R6+R7+R8+R11+R12+R13+R14+R15+R17+R19+R20+R22+R23+R24+R27+R29+R30+R31+R32+R33+R34+R35+R38+R39",
          "name": "LHCb Upgrade II inclusive displaced A'->mumu search",
          "observable": "mumu vertex displaced > 3 mm, m(mumu) 0.7-2 GeV?",
          "reasoning": "cTau(1 GeV A') ~ 2.5 cm x (1e-6/eps)^2. The eps~1e-6-7e-6 crowd (R4,R6,R7,R8,R14,R15,R17,R19,R22,R23,R24,R31,R32,R34,R35,R39) decays 1-50 cm from the PV at LHCb boosts (gamma~20): clean displaced dimuon vertices, background-free beyond ~3 mm. The gap strip (eps>=2.5e-5: R1,R12,R13,R20,R27,R29,R30,R33,R38) decays within ~1 mm and its prompt rate is below bump-hunt reach: not seen. R0 has no A'; R11 (60 GeV) is not produced in this channel. R6's upper tail (5.3e-5) is marginal.",
          "feasibility": "The LHCb inclusive dark-photon program (Ilten et al. proposal, realized in Run 2/3) projects displaced coverage to eps~3e-6 at m~1 GeV with ~15/fb; the group floor at eps=1e-6 needs ~10x rate, i.e. the planned 300/fb Upgrade II - improvement factor ~2-3x in eps. Dominant systematic: material-interaction and heavy-flavor fake vertices, controlled by vertex isolation.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "displaced seen", "regions": ["R4", "R6", "R7", "R8", "R14", "R15", "R17", "R19", "R22", "R23", "R24", "R31", "R32", "R34", "R35", "R39"]},
            {"label": "not seen", "regions": ["R0", "R1", "R11", "R12", "R13", "R20", "R27", "R29", "R30", "R33", "R38"]}
          ]
        },
        {
          "attach_to": "R0+R1+R11+R12+R13+R20+R27+R29+R30+R33+R38",
          "name": "FCC-ee Tera-Z radiative-return dark-photon scan",
          "observable": "gamma + narrow mumu/invisible recoil peak? prompt, displaced >0.3 mm, or none",
          "reasoning": "N ~ 2.4e9 x eps^2 per 150/ab at the Z pole. R11: monochromatic 25.7 GeV photon + 60 GeV invisible recoil (g'=11.4 makes Zp->chichi dominant), ~2e7 events - unmistakable. R12,R13,R20 (eps 2.5-4.6e-5): gamma + displaced mumu at 1 GeV, lab decay length 0.5-2 mm, ~1.5-5 background-free events (R13 nearest the cut). R1,R27,R29,R30,R33,R38 (eps 1.2-3.1e-4): 30-200 prompt gamma-mumu events over the QED continuum. R0: nothing - isolating the Real Scalar Singlet Lagrangian, the highest-value separation in this leaf.",
          "feasibility": "Closest instrument: proposed FCC-ee (Tera-Z, 6e12 Z). Belle II 50/ab reaches eps~3e-4 at 1 GeV; the displaced class needs eps~3e-5 (10x beyond, but near-zero-background displaced topology makes few-event discovery valid). Dominant systematic: QED gamma-mumu continuum for the prompt class; vertex fakes for the displaced class. Requires a next-generation collider but no performance beyond its design.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "invisible recoil 60GeV", "regions": ["R11"]},
            {"label": "displaced mumu", "regions": ["R12", "R13", "R20"]},
            {"label": "prompt mumu", "regions": ["R1", "R27", "R29", "R30", "R33", "R38"]},
            {"label": "nothing", "regions": ["R0"]}
          ]
        },
        {
          "attach_to": "R2+R5+R16+R21",
          "name": "Dwarf-galaxy DM self-interaction census",
          "observable": "sigma_self/m >= 1e-5 cm^2/g?",
          "reasoning": "These four U1p[+] units overlap fully in (m_Zp, eps, MDM); the only physical difference is the DM self-quartic alpha2. sigma_self/m ~ 2.2e-4 x lambda^2/m^3 cm^2/g at m=1 GeV gives R21 (alpha2=0.32-1.34): 2e-5-4e-4 cm^2/g vs R2/R5/R16 (alpha2<=0.08): <=1.5e-6 cm^2/g - a clean factor >=13 separation at a 1e-5 cut.",
          "feasibility": "Current constraints from merging clusters and dwarf density profiles bottom out at ~0.1-1 cm^2/g; resolving 1e-5 cm^2/g requires >1e3x improvement beyond any proposed structure probe (e.g. Rubin-LSST dwarf-core statistics). Dominant systematic: baryonic feedback degeneracy in inferred core sizes.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R21"]},
            {"label": "no", "regions": ["R2", "R5", "R16"]}
          ]
        }
      ]
    }
  ]
}
```