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