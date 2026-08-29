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