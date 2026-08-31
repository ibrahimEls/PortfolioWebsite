I'll verify the arXiv references I intend to cite before composing the full answer.
All three references verified against arXiv (titles and scope match: Ilten et al. "Inclusive Dark Photon Search at LHCb"; LHCb "Search for A′→μ⁺μ⁻ decays", covering dimuon masses up to 70 GeV; "Physics case for an LHCb Upgrade II"). Here is the complete degeneracy-breaking card.

---

# Reasoning — Leaf `root_no_no_no_yes_yes_no_no` (1008 pts, 39 units, all CsSg_U1p[+]_DM.Z2+3+4+5)

## What the catalog has already used up, and what it left free

Every unit in this leaf is the same Lagrangian: a complex scalar singlet DM candidate charged under a dark U(1)′, whose gauge boson Z′ (mass M_Zp ≈ 1–5.5 GeV, Stueckelberg-massive — note there is no dark Higgs field in the spectrum) talks to the Standard Model only through kinetic mixing ε. The catalog observables that carved the path to this leaf are all controlled by **other** parameters:

- **BR(h→inv) ∈ [0.0032, 0.01]** pins the Higgs portal α1 — and indeed α1 is squeezed into [0.0011, 0.0019] in *every* region. No further leverage there (and refining the BR band is forbidden anyway).
- **Relic density** is dominantly secluded annihilation SS* → Z′Z′ governed by g′ and the M_DM/M_Zp ratio. That is why so many regions sit on the attractor M_DM ≈ 4.71, M_Zp ≈ 3.16, gU1p ≈ 0.0438: a one-dimensional relic ridge. Annihilation of scalar DM through these channels is p-wave, so today's ⟨σv⟩ is v²-suppressed by ~10⁻⁶–10⁻⁷ — which is exactly why CTA, Fermi and IceCube-Gen2 all said NO on the path, and why no indirect-detection observable (dwarfs, GC, CMB energy injection: ⟨σv⟩ at recombination ≲ 10⁻³² cm³/s, orders below the Planck p_ann bound) can split anything here. I checked and discarded that whole family.
- **Direct detection** (below XLZD, below 100× SuperCDMS) is set by the same α1 portal plus a subdominant Z′-exchange piece; both mediators (125 GeV and 1–5 GeV) are far heavier than the ~MeV momentum transfer of a 1–6 GeV WIMP, so recoil-spectrum shape, annual modulation, directionality, and target-material (f_n/f_p) comparisons are all shape-degenerate and rate-starved. Discarded.

The one parameter the catalog leaves essentially **unmeasured is ε itself** — and it spans **five orders of magnitude across the 39 regions** (10⁻⁶ to 10⁻¹). A dark-photon-style dimuon bump hunt measures ε directly and is therefore the orthogonal axis this leaf needs.

## Level 1 — LHCb inclusive prompt A′→μμ search (Run 3 → Upgrade II)

For all but one region M_Zp < 2 M_DM, so the Z′ has **no invisible channel**: it decays back to SM leptons/hadrons through ε with BR(μμ) ≈ 0.2–0.3 in this mass window, and cτ ≲ µm–mm even at ε = 10⁻⁵ — i.e. a textbook *prompt* dark-photon signature, exactly what the inclusive LHCb dimuon search targets (proposal: arXiv:1603.08926; existing search over 0.214–70 GeV: arXiv:1910.06926; ~300 fb⁻¹ Upgrade II: arXiv:1808.08865). The Run 3 reach is ε ≈ 3×10⁻⁴ (ε² ~ 10⁻⁷), corresponding to σ·BR(μμ) ~ 0.1 fb in acceptance at these masses; Upgrade II's ~20× data pushes the background-limited reach roughly as L^(1/4) to **ε ≈ 10⁻⁴, i.e. σ·BR ≈ 0.01 fb** — that is the cut on the node.

Predicted signal per region (ε_gm = geometric mean of the box; σ·BR scaled as 0.1 fb × (ε_gm/3×10⁻⁴)²):

| Region | M_Zp (GeV) | ε range | ε_gm | σ·BR(μμ) [fb] | Outcome |
|---|---|---|---|---|---|
| R31 | 1.3 | 3.4e-2–9.3e-2 | 5.6e-2 | ~350 | **seen** |
| R35 | 3.1–4.2 | 2.5e-2–8.1e-2 | 4.5e-2 | ~225 | **seen** |
| R36 | 4.7 | 0.1 | 0.1 (eff. ~6e-3, see below) | ~40 | **seen** |
| R19 | 3.1–5.5 | 2.0e-3–1.7e-2 | 5.8e-3 | ~37 | **seen** |
| R26 | 3.16 | 4.5e-3–7.1e-3 | 5.7e-3 | ~36 | **seen** |
| R6 | 3.1–3.3 | 4.4e-4–4.7e-2 | 4.5e-3 | ~23 | **seen** |
| R11 | 1.03–1.08 | 2.3e-3–3.0e-3 | 2.6e-3 | ~7.5 | **seen** |
| R24 | 3.16 | 1.0e-3–1.5e-3 | 1.2e-3 | ~1.6 | **seen** |
| R15 | 3.16 | 5.5e-4–2.0e-3 | 1.05e-3 | ~1.2 | **seen** |
| R37 | ~1.0 | 8.5e-4–9.7e-4 | 9.1e-4 | ~0.9 | **seen** |
| R20 | 2.9–3.16 | 2.3e-4–1.0e-3 | 4.8e-4 | ~0.26 | **seen** |
| R1 | 1–3.2 | 1.6e-4–1.3e-3 | 4.5e-4 | ~0.23 | **seen** |
| R2 | 2.8–3.1 | 4.6e-5–3.7e-3 | 4.1e-4 | ~0.19 | **seen** (box straddles; see caveats) |
| R17 | 3.0–3.16 | ~3.45e-4 | 3.45e-4 | ~0.13 | **seen** |
| R4 | 3.15 | 8.0e-5–6.1e-4 | 2.2e-4 | ~0.054 | **seen** |
| R30 | 2.9–3.16 | 1.5e-4–2.6e-4 | 2.0e-4 | ~0.044 | **seen** |
| R34 | ~1.0 | 1.3e-4–1.5e-4 | 1.4e-4 | ~0.022 | **seen** |
| R13 | 2.9–3.05 | 4.0e-5–3.6e-4 | 1.2e-4 | ~0.016 | **seen** |
| R12 | 1–1.17 | 2.7e-5–3.6e-4 | 9.8e-5 | ~0.011 | **seen** (marginal, at the cut) |
| R33 | 1–1.6 | 4.2e-5–1.3e-4 | 7.3e-5 | ~6e-3 | not seen |
| R0 | 1–3.8 | 1e-6–2.6e-3 | 5e-5 | ~3e-3 | not seen (box straddles; see caveats) |
| R3 | 1–1.6 | 2.0e-5–1.2e-4 | 4.9e-5 | ~3e-3 | not seen |
| R16 | 3.16 | 3.3e-5 | 3.3e-5 | ~1.2e-3 | not seen |
| R25 | 3.16 | 1.5e-5–3.3e-5 | 2.2e-5 | ~5e-4 | not seen |
| R8 | 1–1.4 | 3.8e-6–8.7e-5 | 1.8e-5 | ~4e-4 | not seen |
| R28 | 3.0–3.16 | 8.1e-6–3.8e-5 | 1.8e-5 | ~4e-4 | not seen |
| R7 | 1.3–3.16 | 4.2e-6–3.9e-5 | 1.2e-5 | ~1.6e-4 | not seen |
| R23 | 1–1.5 | 1e-6–8.4e-6 | 2.9e-6 | ~9e-6 | not seen |
| R27 | 3.16 | 1e-6–7.1e-6 | 2.7e-6 | ~8e-6 | not seen |
| R14 | 1–3.8 | 1e-6–5.6e-6 | 2.4e-6 | ~6e-6 | not seen |
| R18 | 1–3.16 | 1e-6–5.3e-6 | 2.3e-6 | ~6e-6 | not seen |
| R5 | 1–1.3 | 1e-6–4.3e-6 | 2.0e-6 | ~4e-6 | not seen |
| R22 | 3.0–3.8 | 1e-6–2.7e-6 | 1.6e-6 | ~3e-6 | not seen |
| R9 | 1–1.3 | 1e-6–2.1e-6 | 1.4e-6 | ~2e-6 | not seen |
| R32 | 1–3.16 | 1e-6–1.4e-6 | 1.2e-6 | ~1.6e-6 | not seen |
| R38 | ~1.0 | 1e-6–1.4e-6 | 1.2e-6 | ~1.6e-6 | not seen |
| R10 | 1–1.3 | 1e-6–1.3e-6 | 1.1e-6 | ~1.3e-6 | not seen |
| R21 | 1–1.9 | 1e-6 | 1e-6 | ~1e-6 | not seen |
| R29 | 3.0–3.1 | 1e-6 | 1e-6 | ~1e-6 | not seen |

**Caveats, stated honestly.** (1) DBSCAN boxes R0, R2, R12 (and to a lesser degree R1, R13) straddle the ε ≈ 10⁻⁴ cut; I assign them by geometric mean, so a minority of their points will land on the wrong branch — the split is statistical, not surgical, for those three. (2) The big M_Zp = 3.161 GeV cluster sits ~60 MeV above the J/ψ (3.097 GeV); if it falls inside the LHCb resonance veto window the yes-branch regions there (R15, R17, R24, R26…) need the dedicated between-charmonium reanalysis — the search range itself (0.214–70 GeV, arXiv:1910.06926) fully covers all M_Zp in this leaf. Similarly R11 (1.03–1.08 GeV) is just above the φ(1020) veto. (3) R36 is the one region with M_Zp > 2M_DM (M_DM = 1, M_Zp = 4.73): the Z′ decays mostly invisibly, suppressing BR(μμ) by ~(εe/g′)² ≈ 10⁻², but with ε = 0.1 its effective visible strength ε_eff ≈ 6×10⁻³ still yields tens of fb — loudly seen (indeed BaBar γ+invisible data likely already probes it; that search is not in the catalog, which is why the point survives). (4) Alternatives rejected: Belle II γ+μμ and BaBar visible searches cover only ε ≳ 10⁻³ (weaker than LHCb here); beam dumps/far detectors fail because even at ε = 10⁻⁶ this GeV-mass Z′ has cτ ≲ 2 cm (too prompt to displace, too weak to bump-hunt); CMB/indirect are p-wave-dead as argued above. A Lagrangian-separating split would be preferable in principle, but this leaf's separable units are all one Lagrangian (the 6 Z2-only points are scatter dust), so region separation is the whole game.

## Level 2a — beyond-Upgrade-II dimuon reach (the ε = 10⁻⁵–10⁻⁴ band)

The 20 not-seen regions fall into two cleanly separated ε bands with an order-of-magnitude gap between them: eight regions (R0, R3, R7, R8, R16, R25, R28, R33) have ε_gm ≈ 1.2×10⁻⁵–7×10⁻⁵ (σ·BR ≈ 1.6×10⁻⁴–6×10⁻³ fb), while the remaining twelve have ε_gm ≤ 3×10⁻⁶ (σ·BR ≤ 10⁻⁵ fb). A dimuon bump hunt reaching σ·BR ~ 10⁻⁴ fb (ε ~ 10⁻⁵) — a further ~10× in coupling beyond Upgrade II, via a post-Upgrade-II LHCb dataset or radiative-return γμμ at an FCC-ee Tera-Z run — splits exactly along that gap. This is honest speculation: GeV-mass, ε ~ 10⁻⁵ prompt dark photons are the notorious gap between collider bump hunts and beam-dump displaced searches (background-limited reach scales only as L^(1/4), so ~100× in rate means ~10⁴× in data). Rated accordingly.

## Level 2b — DM self-interaction (the deep-ε remainder: quartic-only degeneracy)

The twelve deep-ε regions (ε ≲ 3×10⁻⁶) have unobservably small couplings to us beyond the already-measured Higgs portal; they differ essentially only in the dark quartics α2–α6 (and modestly in masses along the same relic ridge, unmeasurable without producing the Z′). The only observable that responds to quartics is DM elastic self-scattering: σ/m ≈ 5×10⁻⁹ λ_eff² cm²/g at M_DM ≈ 4.7 GeV (which eigenstate combination of sr/si sets λ_eff depends on the mixing, so treat max αᵢ as the scale). Large-quartic regions — R5, R9, R10, R14, R18, R23, R27, R29, R38, each with some αᵢ reaching ≳ 3–10 — predict σ/m ≈ 10⁻⁷–5×10⁻⁷ cm²/g; small-quartic R21 (α_max ≈ 0.7), R22 (≈ 0.24), R32 (≈ 0.15) predict ≲ 3×10⁻⁹ cm²/g. A cut at σ/m = 10⁻⁷ cm²/g separates them — but current merging-cluster/halo-shape sensitivity is ~0.1–1 cm²/g, six to seven orders away. I propose it because it is the *only* physical handle, and rate it speculative: within this catalog and the foreseeable literature, the dark-quartic residual degeneracy is physical.

(The sibling leaf `root_no_no_no_yes_yes_no_yes` is context-only per the brief — no separable units — so no card is produced for it.)

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_yes_yes_no_no",
      "lit_review": {
        "name": "LHCb inclusive prompt dark-photon search, Run 3 through Upgrade II",
        "observable": "prompt m(mumu) peak, 1-6 GeV, sigma*BR(mumu) >~ 0.01 fb ?",
        "what_this_is": "LHCb is a detector at the Large Hadron Collider with excellent mass resolution for pairs of muons produced close to the beam. Its inclusive dark-photon search scans the muon-pair mass spectrum for a narrow bump: a new gauge boson that mixes slightly with the ordinary photon would be produced in collisions and decay promptly back to muons at a rate set by the square of that mixing. Every region in this leaf contains a GeV-scale dark gauge boson whose only unmeasured link to normal matter is exactly this mixing, and the regions differ in it by up to five orders of magnitude, so this bump hunt is the single most discriminating measurement absent from the catalog.",
        "refs": ["arXiv:1603.08926", "arXiv:1910.06926", "arXiv:1808.08865"],
        "reasoning": "All regions have a 1-5.5 GeV Z' decaying promptly (ctau < mm) to SM via kinetic mixing epsilon, with BR(mumu)~0.2-0.3 since M_Zp<2M_DM everywhere but R36 (where epsilon=0.1 overwhelms the invisible-width suppression, eff. epsilon~6e-3, still loud). Catalog observables fix alpha1 (h->inv), g' and masses (relic), leaving epsilon free: it spans 1e-6 to 1e-1 across regions. LHCb Run 3 reaches sigma*BR~0.1 fb (epsilon~3e-4); Upgrade II (~300/fb) reaches ~0.01 fb (epsilon~1e-4). Seen: R31,R35,R36 (sigma*BR ~200-350 fb), R6,R19,R26 (~20-40), R11 (~8), R15,R24,R37 (~1), R1,R2,R17,R20 (~0.1-0.3), R4,R13,R30,R34 (~0.02-0.05), R12 (~0.011, marginal). Not seen: R33,R0,R3 (~3-6e-3), R16,R25,R8,R28,R7 (~2e-4-1e-3), and the deep group R5,R9,R10,R14,R18,R21,R22,R23,R27,R29,R32,R38 (<1e-5 fb). Caveats: boxes R0,R2,R12 straddle the cut (assigned by geometric mean); the M_Zp=3.161 GeV cluster lies 60 MeV above the J/psi and may need the between-charmonium veto reanalysis; search range 0.214-70 GeV covers all M_Zp here.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1", "R2", "R4", "R6", "R11", "R12", "R13", "R15", "R17", "R19", "R20", "R24", "R26", "R30", "R31", "R34", "R35", "R36", "R37"]},
          {"label": "not seen", "regions": ["R0", "R3", "R5", "R7", "R8", "R9", "R10", "R14", "R16", "R18", "R21", "R22", "R23", "R25", "R27", "R28", "R29", "R32", "R33", "R38"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R3+R5+R7+R8+R9+R10+R14+R16+R18+R21+R22+R23+R25+R27+R28+R29+R32+R33+R38",
          "name": "Post-Upgrade-II / Tera-Z ultimate dimuon bump hunt",
          "observable": "m(mumu) peak, 1-6 GeV, sigma*BR(mumu) >= 1e-4 fb ?",
          "what_this_is": "A next-generation bump hunt in the same muon-pair mass spectrum, using either a far larger LHCb dataset beyond the planned Upgrade II or the trillions of Z-boson decays at a future electron-positron 'Tera-Z' factory, where the dark gauge boson is radiated off the collision and decays to two muons. It probes the same photon/dark-photon mixing, but roughly ten times weaker in the mixing parameter. The regions surviving the LHCb split fall into two mixing bands separated by an order of magnitude, so one more decade of reach cuts cleanly between them.",
          "reasoning": "The not-seen group splits into epsilon_gm = 1.2e-5 to 7e-5 (R0,R3,R7,R8,R16,R25,R28,R33: predicted sigma*BR 1.6e-4 to 6e-3 fb) versus epsilon_gm <= 3e-6 (the other twelve: sigma*BR <= 1e-5 fb), with an order-of-magnitude gap between the lowest 'yes' (R7, 1.6e-4 fb) and highest 'no' (R23, 9e-6 fb). A reach of sigma*BR ~ 1e-4 fb (epsilon ~ 1e-5) therefore separates the bands robustly despite box-edge blur. These Z' are still prompt (ctau <~ mm even at epsilon=1e-5), so beam-dump and displaced-vertex programs cannot substitute.",
          "feasibility": "Closest instruments: LHCb Upgrade II (approved physics case, ~300/fb, reach sigma*BR ~ 0.01 fb i.e. epsilon ~ 1e-4) and FCC-ee Tera-Z (~6e12 Z bosons, radiative-return gamma+mumu). The target is ~100x smaller signal rate (10x in coupling); with a background-limited bump hunt reach scaling as L^(1/4), that means ~1e4x more effective luminosity than Upgrade II. Dominant systematic: modelling the smooth Drell-Yan and heavy-flavour dimuon continuum and the hadronic-resonance vetoes (J/psi at 3.10 GeV sits 60 MeV below the 3.16 GeV cluster).",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "seen", "regions": ["R0", "R3", "R7", "R8", "R16", "R25", "R28", "R33"]},
            {"label": "not seen", "regions": ["R5", "R9", "R10", "R14", "R18", "R21", "R22", "R23", "R27", "R29", "R32", "R38"]}
          ]
        },
        {
          "attach_to": "R5+R9+R10+R14+R18+R21+R22+R23+R27+R29+R32+R38",
          "name": "Dark-matter self-interaction from cluster lensing ensembles",
          "observable": "sigma_self/m >= 1e-7 cm^2/g ?",
          "what_this_is": "When galaxy clusters collide, the galaxies, the hot gas, and the dark matter (mapped through gravitational lensing) separate slightly if dark-matter particles scatter off each other; large ensembles of such collisions and of halo shapes bound the self-scattering cross-section per unit mass. This is the only observable that responds to the dark sector's internal quartic self-couplings, which are the only parameters still distinguishing these regions -- their couplings to normal matter are all unobservably small. Large-quartic and small-quartic regions predict self-scattering rates differing by about two orders of magnitude, though both lie far below present astrophysical sensitivity.",
          "reasoning": "With epsilon <= 3e-6 (prompt-decay ctau <~ 2 cm, no accelerator or detection handle) and alpha1 already fixed by BR(h->inv), only the quartics alpha2-alpha6 differ. Elastic DM self-scattering gives sigma/m ~ 5e-9 * lambda_eff^2 cm^2/g at M_DM ~ 4.7 GeV, with lambda_eff set by the largest quartic reachable by the DM eigenstate (sr/si mixing-dependent -- an admitted approximation). Large-quartic regions R5,R9,R10,R14,R18,R23,R27,R29,R38 (some alpha_i ~ 3-10) predict sigma/m ~ 1e-7 to 5e-7 cm^2/g; small-quartic R21 (~0.7), R22 (~0.24), R32 (~0.15) predict <~ 3e-9 cm^2/g. The cut at 1e-7 cm^2/g sits between the bands; honestly, this is the only physical handle and it is far out of reach -- the residual quartic degeneracy is effectively physical.",
          "feasibility": "Closest measurements: ensemble weak-lensing offsets in ~70 merging clusters and stacked halo-shape analyses, current sensitivity sigma/m ~ 0.1-1 cm^2/g. Required sensitivity of 1e-7 cm^2/g is ~1e6-1e7x beyond that; Rubin/Euclid-era statistics improve this by ~10x at best, and the dominant systematic (baryonic-feedback modelling of halo profiles) is already comparable to the signal at current precision.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R5", "R9", "R10", "R14", "R18", "R23", "R27", "R29", "R38"]},
            {"label": "no", "regions": ["R21", "R22", "R32"]}
          ]
        }
      ]
    }
  ]
}
```