I'll verify the arXiv references I intend to cite before composing the single-message answer.
All five references verified against arXiv (titles and content match). Composing the full answer now.

---

# Reasoning — Leaf `root_yes_yes_no_yes_no` (3086 pts, 52 units, all CsSg_U1p DM)

## What lives in this leaf

Every unit is the same Lagrangian class: a complex scalar singlet DM (MDM ≈ 320–710 GeV) charged under a dark U(1)′, seen at XLZD/LZ (σ_SI within 1–10× projected limits) and at IceCube-Gen2 (ν flux 1–10× the limit, implying ⟨σv⟩ ~ 10⁻²⁵–10⁻²⁴ cm³/s at these masses), invisible to CTA(WW) and to invisible-Higgs. The Z2 vs Z2+3+4+5 label and most of the α₂–α₆ spread are **pure dark-sector quartics** (no singlet vev, so they split nothing and couple to nothing visible) — those directions are externally unmeasurable, and I say so below rather than pretending otherwise.

The physically meaningful spread across the 52 regions is in exactly two couplings the catalog never directly probes:

- **M_Z′**: three families — light (≈1–8 GeV: R3, R8, R9, R12, R13, R17, R20, R24, R25, R28–R30, R32–R35, R40, R47–R50), intermediate (≈10–200 GeV: R2, R4, R5, R10, R11, R16, R18, R19, R21–R23, R26, R27, R31, R36–R39, R41–R46, R51), and heavy (≈556–986 GeV: R7, R14, R15).
- **kinetic mixing ε**: spans 10⁻⁶ to 0.1 — five decades. Since M_Z′ < 2·MDM everywhere, the Z′ decays 100% visibly through ε, so the entire visible-dark-photon phenomenology applies unmodified: production and detection both scale as ε².

## Level 1 — lit review: visible dark-photon dimuon searches (LHCb + BaBar/Belle II)

LHCb's prompt A′→μ⁺μ⁻ search (arXiv:1910.06926) covers 0.214–70 GeV and reaches ε ≈ 10⁻³ (ε² ~ 10⁻⁶, best ~2×10⁻⁷ in 10.6–30 GeV, i.e. ε ≈ 4×10⁻⁴); BaBar (arXiv:1406.2980) excludes ε ≈ 10⁻³ over 0.02–10.2 GeV; Belle II with 50 ab⁻¹ projects a few ×10⁻⁴ up to ~10 GeV (arXiv:1808.10567). Cut: **a prompt dimuon resonance at 1–70 GeV with ε ≳ 10⁻³**.

- **Seen** (ε ≥ 1.4×10⁻³ AND M_Z′ in 1–47 GeV — factors 3–200 above demonstrated reach): R4 (ε 0.037–0.1 at 18–42 GeV), R6 (≥0.004 at 1 GeV), R16, R18, R36, R38, R39 (ε ≈ 0.02–0.1 at 20–47 GeV), R21 (≥0.007 at 32–40), R27 (0.0014–0.0035 at 9.85 GeV — marginal: sits between ϒ(1S) and ϒ(2S), partially inside resonance-veto windows; Belle II radiative return closes it), R37 (≥0.078 at 12–15), R51 (0.054–0.1 at 2.6–2.9). Several of these (R51, R18-family at ε = 0.1) are frankly already in tension with the published BaBar/LHCb limits — the RL pipeline's dilepton curves are recast placeholders — which makes this the most decisive possible first split: it is a measurement that largely already exists.
- **Not seen**: everything else. Most have ε ≤ 10⁻⁴, i.e. production suppressed by ≥10⁻⁸ relative to the seen group (for M_Z′ = 1 GeV, ε = 10⁻⁶: cτ ≈ 8 cm but yield ∝ ε² kills any accelerator signal — consistent with our earlier finding that no LLP far detector helps at this ε floor). Honest edge cases: R5 (ε up to 9.4×10⁻³ but M_Z′ = 69–118 GeV — above the dimuon-search range yet below high-mass Drell-Yan acceptance, a genuine coverage gap); R14/R15/R7 (M_Z′ = 556–986 GeV, ε = 0.01–0.07 — that is the catalog's own Z′-dilepton territory, so I may not re-propose it); R33/R49 (ε ~ 1–2×10⁻⁴ at 1 GeV, just below the Belle II projection); and the two broad DBSCAN blobs R0, R1, whose ε ranges span all five decades — I assign them by log-bulk (≈60% of their ε prior sits below 10⁻³) and flag them as straddlers: a seen dimuon peak at 1.5–37 GeV remains consistent with R0's high-ε tail.

This is not "refining Z′ dilepton": the catalog observable is a high-mass (≳150 GeV) Drell-Yan recast; the 1–70 GeV window is only accessible to dark-photon-style resonance searches, a different instrument, technique, and mass regime.

## Level 2a — novel node on the "seen" branch: dimuon-peak mass spectroscopy

If the peak is seen, its **mass is measured for free** to ~0.5% (LHCb dimuon resolution), and the seen-branch regions occupy nearly disjoint M_Z′ bands: R6 at 1.0 GeV, R51 at 2.6–2.9, R27 at 9.85, R37 at 12–15, versus R4/R16/R18/R21/R36/R38/R39 all at 18–47 GeV. A single cut **m(μμ) < 16 GeV** cleanly separates the two clusters, and within the low branch the measured value isolates R6, R51, R27, R37 individually (disjoint ranges). Within the ≥16 GeV branch, R4/R16/R18/R38/R39 overlap each other in every visible coordinate and differ mainly in dark quartics — no external experiment can finish that separation; the mass value still narrows it (e.g. m ≈ 20.7 GeV is consistent only with R4/R18/R38/R39, m ≈ 45 GeV only with R36/R4/R16). Feasibility is trivial — it is the discovery measurement itself — dominant systematic is the dimuon mass-scale calibration, far below the needed 16 GeV discrimination.

## Level 2b — novel node on the "not seen" branch: cosmic-ray antiproton decomposition

The 41 remaining regions split by a **kinematic, coupling-independent** feature: whether the annihilation cascade ss* → Z′Z′ → SM can make antiprotons.

- **Heavy-mediator group** (M_Z′ ≥ 45 GeV: R1, R2, R5, R7, R10, R11, R14, R15, R19, R22, R23, R26, R31, R41–R46): the Z′ couples photon-like, so ~55% of decays are hadronic (Σ Q²N_c: quarks 3.67 vs leptons 3), each Z′ pair yielding O(2–3) antiprotons. At ⟨σv⟩ ~ 10⁻²⁵–10⁻²⁴ cm³/s (the level implied by the leaf's own IceCube-Gen2-scale flux) and MDM ≈ 0.5 TeV, this predicts a p̄ component in the 10–300 GeV range at or above current AMS-02 sensitivity — existing p̄/p analyses already constrain ~10⁻²⁴ cm³/s for bb̄-like channels at these masses.
- **Light-mediator group** (M_Z′ ≈ 1–2 GeV, the bulk: R8, R9, R12, R13, R17, R20, R24, R25, R30, R32–R35, R40, R47–R50): M_Z′ < 2m_p ≈ 1.88 GeV, so antiproton production is **kinematically forbidden** — exactly zero p̄ flux, while the same annihilation power flows into e±/μ±/π's. Marginal members: R3 (M_Z′ up to 7.9 GeV), R28/R29 (5.6–5.9 GeV) — above threshold but with p̄ multiplicity ~0.1 per annihilation (e⁺e⁻-data-like baryon yields at √s ≈ 6 GeV), an order of magnitude below the heavy group; and the straddling blobs R0 (1.5–37 GeV) assigned here by log-bulk. All flagged marginal.

The mirrored positron signal makes the test two-sided rather than a bare null: the light group dumps 30–60% of the annihilation power into a hard leptonic cascade, and AMS-02 positron analyses with pulsar-marginalized backgrounds (John & Linden, arXiv:2107.10261) already reach sub-thermal sensitivity to 380 GeV for direct e⁺e⁻ — i.e. within a factor of a few of the 4-lepton cascade prediction here. So the branch outcome is "p̄ excess" vs "no p̄ but hard e⁺". Closest instruments: AMS-02 (operating, funded through ~2030, p̄/p at few-% precision to 500 GeV; needs ≲3× more reach), then ALADInO/AMS-100 (arXiv:1907.04168; ≥10³× acceptance). Dominant systematics: antiproton production cross-sections (~10–20%) and propagation halo height; for the positron side, the pulsar-component degeneracy. Rating: **possible**.

## Honest residual degeneracy

After all three nodes, regions inside each terminal group that differ only in the dark quartics α₂–α₆ (e.g. R8 vs R12 vs R25; R18 vs R38 vs R39) or in the Z_N label are physically inseparable: with no singlet vev those couplings feed only DM self-scattering, and at MDM ≈ 500 GeV the induced σ/m is ~15 orders below the cluster-scale sensitivity (~0.1 cm²/g). No experiment, existing or conceivable, splits them; the discriminating program above extracts everything the visible sector carries.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_no_yes_no",
      "lit_review": {
        "name": "LHCb + Belle II visible dark-photon dimuon search",
        "observable": "prompt A'->mumu resonance, 1-70 GeV, epsilon >~ 1e-3 ?",
        "what_this_is": "Particle detectors at colliders look for a new short-lived particle, a 'dark photon', that mixes slightly with the ordinary photon and so can be produced in collisions and decay to a pair of muons, appearing as a narrow bump in the muon-pair mass spectrum. These searches are most sensitive to the mixing strength epsilon for masses between about 1 and 70 GeV. In this leaf the dark-matter particle interacts through exactly such a Z' boson, and the surviving regions differ by up to five orders of magnitude in epsilon, so seeing or not seeing this bump immediately sorts them.",
        "refs": ["arXiv:1910.06926", "arXiv:1406.2980", "arXiv:1808.10567"],
        "reasoning": "All regions have M_Z' < 2*MDM, so the Z' decays 100% visibly with rate proportional to epsilon^2. LHCb prompt A'->mumu reaches epsilon ~ 1e-3 (best 4e-4) over 1-70 GeV; BaBar excludes ~1e-3 below 10.2 GeV; Belle II projects few x 1e-4. The 'seen' regions all have epsilon >= 1.4e-3 with M_Z' = 1-47 GeV (factors 3-200 above demonstrated reach; some, e.g. R51 and the epsilon = 0.1 cluster, are already in tension with published limits). The 'not seen' regions have epsilon <= 1e-4 (production suppressed by >= 1e-8), or M_Z' outside the search window (R5 at 69-118 GeV in the coverage gap; R7/R14/R15 at 556-986 GeV, which is the catalog's own Drell-Yan dilepton territory). Marginal: R27 sits between Upsilon(1S) and Upsilon(2S) inside partial veto windows; R33/R49 lie just below Belle II reach; broad blobs R0/R1 span the full epsilon range and are assigned to 'not seen' by log-bulk (~60% of their prior below 1e-3).",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R4", "R6", "R16", "R18", "R21", "R27", "R36", "R37", "R38", "R39", "R51"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R5", "R7", "R8", "R9", "R10", "R11", "R12", "R13", "R14", "R15", "R17", "R19", "R20", "R22", "R23", "R24", "R25", "R26", "R28", "R29", "R30", "R31", "R32", "R33", "R34", "R35", "R40", "R41", "R42", "R43", "R44", "R45", "R46", "R47", "R48", "R49", "R50"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R4+R6+R16+R18+R21+R27+R36+R37+R38+R39+R51",
          "name": "Dimuon-peak mass spectroscopy (LHCb / Belle II)",
          "observable": "m(mumu peak) < 16 GeV ?",
          "what_this_is": "Once the muon-pair bump from the dark photon is found, the same detector measures the position of the bump, which is simply the mass of the new particle, to better than one percent. The bump position directly reveals the mediator mass, the one parameter these regions disagree on most. The surviving regions cluster into a light group (1-15 GeV) and a heavy group (18-47 GeV), so a single mass cut separates them.",
          "reasoning": "R6 (1.0 GeV), R51 (2.6-2.9), R27 (9.85), R37 (12-15) fall below 16 GeV; R4, R16, R18, R21, R36, R38, R39 (18-47 GeV) fall above. Within the low branch the measured value isolates each region individually since their mass ranges are disjoint. Within the high branch R4/R16/R18/R38/R39 overlap in every visible coordinate and differ mainly in dark quartic couplings, which affect nothing observable; the precise mass value still narrows the candidates but cannot finish the separation.",
          "feasibility": "This is the discovery measurement itself: LHCb dimuon mass resolution is ~0.5% and Belle II similar; discriminating at 16 GeV requires no improvement (factor 1). Dominant systematic is the dimuon mass-scale calibration, negligible at this precision.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "light", "regions": ["R6", "R27", "R37", "R51"]},
            {"label": "heavy", "regions": ["R4", "R16", "R18", "R21", "R36", "R38", "R39"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R5+R7+R8+R9+R10+R11+R12+R13+R14+R15+R17+R19+R20+R22+R23+R24+R25+R26+R28+R29+R30+R31+R32+R33+R34+R35+R40+R41+R42+R43+R44+R45+R46+R47+R48+R49+R50",
          "name": "Cosmic-ray antiproton decomposition (AMS-02 -> ALADInO/AMS-100)",
          "observable": "pbar/p excess, 10-300 GeV, at sigmav >~ 1e-25 cm^3/s ?",
          "what_this_is": "A magnetic spectrometer in space counts antiprotons among cosmic rays and compares their flux to the well-understood background from ordinary cosmic-ray collisions. Dark matter annihilating in our Galaxy through a mediator heavier than two proton masses adds antiprotons on top of that background; a mediator lighter than two proton masses cannot make antiprotons at all. Since the remaining regions differ precisely in whether the Z' mediator is ~1 GeV or >= 45 GeV, the presence or absence of an antiproton excess is a clean, kinematically forced discriminator.",
          "reasoning": "Heavy-mediator regions (M_Z' >= 45 GeV) have photon-like Z' couplings, ~55% hadronic decays, O(2-3) antiprotons per annihilation; at the sigmav ~ 1e-25 to 1e-24 cm^3/s implied by this leaf's IceCube-Gen2-level flux and MDM ~ 0.5 TeV, the predicted 10-300 GeV pbar component sits at current AMS-02 sensitivity. Light-mediator regions (M_Z' ~ 1-2 GeV < 2 m_p) produce exactly zero antiprotons, dumping 30-60% of the power into hard leptons instead, where AMS-02 positron analyses (arXiv:2107.10261) are already within a factor of a few of the cascade prediction, making the test two-sided. Marginal assignments: R3 (up to 7.9 GeV) and R28/R29 (5.6-5.9 GeV) are above pbar threshold but with ~10x suppressed yield, grouped with 'no'; straddling blobs R0 (1.5-37 GeV) and R1 (23-119 GeV) assigned by log-bulk to 'no' and 'yes' respectively.",
          "feasibility": "Closest instrument: AMS-02, operating and funded, pbar/p at few-percent precision to ~500 GeV; current DM analyses constrain ~1e-24 cm^3/s at these masses, so a factor <~3 is needed, reachable with the full dataset through 2030. ALADInO/AMS-100 (arXiv:1907.04168) offers >= 1000x acceptance beyond that. Dominant systematics: antiproton production cross-sections (~10-20%) and propagation halo height; pulsar-background degeneracy on the positron side.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "pbar seen", "regions": ["R1", "R2", "R5", "R7", "R10", "R11", "R14", "R15", "R19", "R22", "R23", "R26", "R31", "R41", "R42", "R43", "R44", "R45", "R46"]},
            {"label": "no pbar", "regions": ["R0", "R3", "R8", "R9", "R12", "R13", "R17", "R20", "R24", "R25", "R28", "R29", "R30", "R32", "R33", "R34", "R35", "R40", "R47", "R48", "R49", "R50"]}
          ]
        }
      ]
    }
  ]
}
```