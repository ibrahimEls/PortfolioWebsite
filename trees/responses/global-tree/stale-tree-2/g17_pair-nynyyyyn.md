I'll verify the references I plan to cite (per the rules), then deliver the full answer in one message. Loading the web tools first:
Now verifying the three arXiv IDs I intend to cite:
All three references resolved and match their claims (Ilten et al. LHCb dark-photon projection; the LHCb A′→μμ search; Pospelov–Ritz–Voloshin secluded WIMPs). Here is the full deliverable.

# Reasoning — Leaf `root_no_yes_no_yes_yes_yes_yes_no_no`

## What this leaf physically is

All ten units belong to the **same** Lagrangian (complex scalar singlet charged +1 under a dark U(1)′, Z₂…Z₅ builds pooled), so every split here separates parameter-space regions, not models. The shared phenomenology pins the picture down tightly:

- **m_DM ≈ 4.4–5.2 GeV, m_Z′ ≈ 1.0–2.6 GeV, g′ ≈ 0.040–0.044 in every unit.** The gauge coupling being razor-pinned is no accident: with α_D = g′²/4π ≈ 1.4×10⁻⁴, the secluded annihilation χχ* → Z′Z′ gives σv ≈ πα_D²/m² ≈ 3×10⁻²⁶ cm³/s — the thermal-relic surface. This is the classic secluded-WIMP regime (Pospelov–Ritz–Voloshin): the indirect-detection signal (the "bb-like" template at 10–100× the Fermi 15-yr limit on the leaf path) is the 4-body cascade χχ → Z′Z′ → SM×4, and BR(h→inv) = 3–10% comes from the Higgs portal α₁ ≈ 0.004, common to all units.
- **Crucially, m_DM > m_Z′, so Z′ → DM DM is closed: the dark photon decays 100% visibly through the kinetic mixing ε.** Its lifetime is cτ ≈ 0.03 m × (10⁻⁶/ε)² × (GeV/m_Z′) (including hadronic modes), spanning prompt (ε ~ 10⁻⁴) to ~cm (ε ~ 10⁻⁶).
- The only axes that vary observably across the ten units are **(m_Z′, ε)**. The quartics α₂–α₆ differ wildly between units (e.g. R6 has everything at the sampling floor; R5 has α₄ = 10) but feed only dark-sector self-couplings: even at λ = 10, σ_self/m ≈ λ²/(64π m_DM³) ~ 10⁻⁶ cm²/g, six orders below cluster SIDM bounds. Those directions are honestly experimentally inaccessible, and I say so where they are all that remains.
- One leaf-wide honesty note (not a splitter, since all units predict the same thing): χχ* → Z′Z′ is s-wave for scalar DM, so σv at recombination ≈ σv today ≈ 3×10⁻²⁶ cm³/s at 5 GeV, which sits a factor ~5 above the Planck energy-injection bound (f_eff ≈ 0.3 → σv ≲ 6×10⁻²⁷ cm³/s). A CMB-injection test would stress the whole leaf uniformly — worth doing, but it cannot separate the units, so it is not my split.

## Level 1 — lit-review split: LHCb inclusive dark-photon A′→μμ search

The kinetic mixing cleanly bimodalizes the leaf. In ε² (the quantity dark-photon searches actually report limits on):

| unit | m_Z′ [GeV] | ε² |
|---|---|---|
| R4 | 1.38–2.58 | 1.9×10⁻¹⁰ – 7.0×10⁻⁹ |
| R7 | 1.25–1.32 | 3.4×10⁻¹⁰ – 1.3×10⁻⁸ |
| R8 | 1.00–1.55 | 4.6×10⁻¹⁰ – 2.4×10⁻⁸ |
| R1 | 1.00 | ≤ 1.2×10⁻¹⁰ |
| R6 | 1.00–1.01 | ≤ 7.9×10⁻¹¹ |
| R0 | 1.00–1.59 | ≤ 8.7×10⁻¹² |
| R9 | 1.545 | ≤ 1.6×10⁻¹¹ |
| R2 | 1.45–1.55 | ≤ 4.2×10⁻¹² |
| R5 | 1.00–1.45 | ≤ 1.7×10⁻¹² |
| R3 | 1.00–1.55 | = 1.0×10⁻¹² |

R4/R7/R8 have ε ≥ 1.4×10⁻⁵, i.e. prompt-like decays (cτ ≲ 100 μm) of a 1–2.6 GeV vector decaying to μμ/ee/hadrons with SM-photon-like branching ratios. This is exactly the target of the LHCb inclusive dimuon dark-photon program: the published Run-2 search (arXiv:1910.06926, 5.5 fb⁻¹) already sets ε² limits across this mass range, and the Ilten–Soreq–Thaler–Williams–Xue projection (arXiv:1603.08926) shows the prompt reach is background-limited, scaling as ε²_min ∝ 1/√L; extrapolating to Run 3–6 / 300 fb⁻¹ gives ε² sensitivity ≈ (2–3)×10⁻¹⁰ in the 1–2.6 GeV window (between the ρ/φ and J/ψ vetoes). Cut: **prompt A′→μμ peak at 1.0–2.6 GeV with ε² ≥ 2×10⁻¹⁰ → seen = {R4, R7, R8}, not seen = {R0,R1,R2,R3,R5,R6,R9}**.

Marginality, stated honestly: R4's lower edge sits exactly at the projected cut, and the tops of R1 (1.2×10⁻¹⁰) and R6 (7.9×10⁻¹¹) are within a factor ~2 below it, so the boundary corners can leak. The bulk separation (≥ ×30 in ε² between group medians) is robust. The "not seen" group is genuinely unreachable elsewhere: at ε ~ 10⁻⁶–4×10⁻⁶ and m ≥ 1 GeV the boosted decay length is ≲ few m, so SHiP/FASER2 (≥ 45 m to the decay volume) see an e^{-10}-suppressed rate, while Belle II γA′ production (σ ≈ 1.2 nb × ε²) yields ≪ 1 event at 50 ab⁻¹ — this is the known gap between beam dumps and colliders. The one exception is R1's extreme corner (ε ≈ 1.1×10⁻⁵, m = 1.0 GeV: cτ ≈ 0.2 mm, ~mm lab displacement, O(5–10) displaced Belle II events at 50 ab⁻¹) — a corroborating cross-check, not a reliable split.

## Level 2a — novel node on {R4, R7, R8}: A′ mass–lifetime mapping at LHCb

If the peak is seen, the same detector measures its mass to σ_m ≈ 5–7 MeV (0.4–0.5% dimuon resolution), which dwarfs the region gaps. Predictions: R4 → m_μμ ∈ [1.38, 2.58] GeV; R7 → [1.25, 1.32] GeV; R8 → [1.00, 1.55] GeV. The cut **m_μμ ≥ 1.35 GeV** isolates R4 (yes) from R7 (no) cleanly; R8 straddles it (majority of its span below, but real support up to 1.55 GeV), so its assignment to "no" is majority-based — flagged. After the mass cut, R7 vs R8 are irreducible by any external observable I can defend: their ε ranges (hence lifetimes and peak strengths) overlap fully, and what actually separates the DBSCAN clusters is the dark quartic pattern (R7: α₃ = 3.3–10; R8: α₄ = 2.6–10, α₆ = 0.07–0.37), which is self-coupling-only and unobservable at σ_self/m ~ 10⁻⁶ cm²/g. One genuine bonus discriminator inside R4: its upper mass range crosses the antiproton threshold, m_Z′ > 2m_p = 1.877 GeV, switching on a low-energy AMS-02 p̄ cascade flux that is kinematically forbidden for every other unit in the leaf. Feasibility: this is an existing instrument operating at its current resolution — no improvement factor needed; dominant systematic is the hadronic-resonance veto regions fragmenting the mass window. Rating: possible.

## Level 2b — novel node on {R0,R1,R2,R3,R5,R6,R9}: dwarf-spheroidal cascade γ-spectroscopy

For the accelerator-blind group, the remaining observable axis is m_Z′ itself, and it is imprinted on the indirect-detection **spectral shape** — which our catalog never uses (it only carries template amplitudes). The leaf path guarantees a Fermi bb-template signal at 10–100× the 15-yr limit, i.e. a *detection* with thousands of photons in a stacked dwarf analysis — enough for a shape fit, and dwarfs (vs the GC) keep the astrophysical background minimal. The physics: the Z′ branching fractions are fixed by the measured e⁺e⁻ → hadrons R-ratio at √s = m_Z′. At m_Z′ ≈ 1.00–1.01 GeV (between the ω and φ, R ≈ 1) the Z′ is lepton-rich — BR(ee) ≈ BR(μμ) ≈ 1/3 each — so the χχ → Z′Z′ cascade produces few π⁰ and a hard direct-e±/FSR tail extending to m_DM ≈ 5 GeV. At m_Z′ ≈ 1.4–1.6 GeV (R ≈ 2–2.5) hadronic modes dominate (~55–60%), giving multi-pion final states whose π⁰ bump peaks at 0.2–0.7 GeV and falls steeply above ~1.5 GeV. Roughly, the band-flux hardness ratio F(1–5 GeV)/F(0.3–1 GeV) ≈ 0.4–0.8 for the lepton-rich case vs ≈ 0.15–0.3 for the pion-rich case; cut at 0.35. Assignments: yes (lepton-rich) → R1, R6 (m_Z′ pinned at 1.0–1.01 GeV); no (pion-rich) → R2, R9 (cleanly at 1.45–1.55 GeV) plus R0, R3, R5. The last three span m_Z′ from 1.0 to ~1.5–1.6 GeV, so their low-mass tails would land on the wrong side — this is a genuine straddle inherited from clusters that separate only in the joint 10-dim space, and it is the honest residual of this split; the leftover intra-group differences are again pure dark quartics (inaccessible). Feasibility: Fermi-LAT already covers 0.3–5 GeV (AMEGO-X would sharpen the low band); J-factor uncertainty (~×2) cancels in a same-target band ratio, so the dominant systematic is hadronization modeling of a 1–1.6 GeV vector — data-driven from BaBar/BESIII ISR R-scan measurements. The required ~2× shape discrimination on a strong detected signal needs no new hardware. Rating: possible.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_no_yes_yes_yes_yes_no_no",
      "lit_review": {
        "name": "LHCb Run 3-6 inclusive dark-photon dimuon search",
        "observable": "prompt A'->mumu peak, 1.0-2.6 GeV, eps^2 >= 2e-10 ?",
        "refs": ["arXiv:1603.08926", "arXiv:1910.06926", "arXiv:0711.4866"],
        "reasoning": "Secluded scalar DM (m_DM~5 GeV, g'~0.042 pinned to the thermal relic surface via chi chi -> Z'Z') with m_Z' = 1.0-2.6 GeV < m_DM, so the dark photon decays 100% visibly through kinetic mixing. Units bimodalize in eps^2: R4/R7/R8 have eps >= 1.4e-5 (eps^2 = 1.9e-10 to 2.4e-8), i.e. prompt-like (ctau <~ 100 um) visible A' within the LHCb inclusive mumu program's Run 3-6 projected reach (~2-3e-10 at 1-2.6 GeV, background-limited 1/sqrt(L) scaling from the published Run-2 search). All other units have eps^2 <= 1.2e-10 (mostly <= 1.6e-11) and lifetimes ctau ~ mm-cm: too short-lived for SHiP/FASER2 (>=45 m baselines) and too rarely produced at Belle II (sigma ~ 1.2 nb x eps^2 -> <1 event at 50/ab) -- the known beam-dump/collider gap, hence robustly 'not seen'. Marginal corners flagged: R4's lower edge sits at the cut; R1 (top eps^2=1.2e-10) and R6 (7.9e-11) are within ~2x below it, and R1's extreme corner (eps~1.1e-5, m=1 GeV) could yield O(5-10) mm-displaced Belle II vertices as a cross-check.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R4", "R7", "R8"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R5", "R6", "R9"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R4+R7+R8",
          "name": "A' mass-lifetime mapping with LHCb vertexing",
          "observable": "m(A'->mumu) >= 1.35 GeV ?",
          "reasoning": "Once the peak is seen, its mass separates the units far beyond detector resolution (sigma_m ~ 5-7 MeV): R4 predicts m in [1.38, 2.58] GeV, R7 in [1.25, 1.32] GeV, R8 in [1.00, 1.55] GeV. Cut at 1.35 GeV: yes -> R4, no -> R7 (clean); R8 straddles the cut (majority below, support up to 1.55 GeV) so its 'no' assignment is majority-based. R7 vs R8 remain irreducible afterward: their eps ranges (1.8e-5-1.2e-4 vs 2.1e-5-1.6e-4) overlap fully, so lifetime and peak strength cannot separate them, and the true cluster-separating directions are dark-sector quartics (R7: alpha3=3.3-10; R8: alpha4=2.6-10, alpha6=0.07-0.37) with self-scattering sigma/m ~ 1e-6 cm^2/g, six orders below cluster bounds. Bonus within R4: its m_Z' > 2m_p = 1.877 GeV portion uniquely switches on a low-energy AMS-02 antiproton cascade flux, kinematically forbidden for R7/R8.",
          "feasibility": "LHCb itself: dimuon mass resolution 0.4-0.5% (~6 MeV at 1.3 GeV), no improvement factor needed; dominant systematic is the hadronic-resonance (phi, rho', J/psi) veto windows fragmenting the search range.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R4"]},
            {"label": "no", "regions": ["R7", "R8"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R5+R6+R9",
          "name": "Dwarf-spheroidal cascade gamma spectroscopy (Fermi-LAT/AMEGO-X)",
          "observable": "stacked-dwarf flux ratio F(1-5 GeV)/F(0.3-1 GeV) >= 0.35 ?",
          "reasoning": "The leaf path guarantees a Fermi dwarf detection at 10-100x the 15-yr bb-template limit, so a spectral shape fit is statistics-rich; the catalog uses only template amplitudes, never shape. Z' branching fractions are fixed by the measured e+e- R-ratio at sqrt(s)=m_Z': at m_Z'=1.00-1.01 GeV (between omega and phi, R~1) the Z' is lepton-rich (BR(ee)~BR(mumu)~1/3), giving few pi0 and a hard direct-e/FSR tail to 5 GeV -- predicted hardness ratio ~0.4-0.8; at m_Z'=1.4-1.6 GeV (R~2-2.5, ~55-60% hadronic) multi-pion cascades peak at 0.2-0.7 GeV and fall steeply above 1.5 GeV -- ratio ~0.15-0.3. Yes -> R1+R6 (m_Z' pinned 1.0-1.01); no -> R2+R9 (clean, 1.45-1.55) plus R0/R3/R5, whose m_Z' spans reach down to 1.0 GeV so their low-mass tails would be misassigned -- an honest straddle inherited from clusters separated only in the joint 10-dim space. Residual intra-group differences are pure dark quartics (sigma_self/m ~ 1e-6 cm^2/g), experimentally inaccessible.",
          "feasibility": "Fermi-LAT (existing, 0.1-300 GeV) already covers both bands; AMEGO-X would sharpen 0.3-1 GeV. J-factor uncertainty (~2x) cancels in the same-target band ratio; dominant systematic is hadronization modeling of a 1-1.6 GeV vector, data-driven from BaBar/BESIII ISR R-scan data. Required ~2x shape discrimination on a detected signal: no new hardware, improvement factor ~1.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "lepton-rich", "regions": ["R1", "R6"]},
            {"label": "pion-rich", "regions": ["R0", "R2", "R3", "R5", "R9"]}
          ]
        }
      ]
    }
  ]
}
```