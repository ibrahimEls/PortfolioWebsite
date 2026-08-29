I'll verify my candidate references before writing the final answer.
The API is rate-limiting; let me retry with fewer parallel calls.
I verified all candidate references (LHCb A′→μμ 1910.06926, CMS dimuon scouting 1912.04776, LHCb inclusive-A′ projections 1603.08926, dark-photon collider/EWPO study 1412.0018, BaBar A′ 1406.2980, Belle II Physics Book 1808.10567, CTA GC sensitivity 2007.16129). All IDs resolve and match. Now the analysis and final answer in one message.

---

# Reasoning

## General physics of the model

Complex scalar DM (MDM ≈ 140–710 GeV) charged under a dark U(1)′ with gauge coupling gU1p ≈ 0.17–0.47 and a light Z′ (MZp ≈ 1–165 GeV) that talks to the SM through kinetic mixing ε (spanning 10⁻⁶–10⁻¹ across regions) plus a Higgs portal α₁. The catalog observables (σ_SI, solar/GC ν flux, BR(h→inv), high-mass Z′ dilepton, HL-LHC topologies) are blind to two things that differ wildly between the degenerate regions: **(i) the kinetic mixing ε of a LIGHT (1–165 GeV) Z′**, which is exactly the territory of dedicated *dark-photon* searches (LHCb prompt A′→μμ up to 70 GeV; CMS trigger-level dimuon scouting 11.5–200 GeV; BaBar/Belle II below 10 GeV) — these are physically distinct analyses from the conventional heavy-Z′ dilepton searches in the catalog (different triggers, mass range, and data-driven normalization to γ*→μμ); and **(ii) MDM itself**, measurable via the spectral endpoint of the annihilation cascade SS*→Z′Z′→4f. The dark-sector quartics α₂,₃,₄ (sr⁴, sr²si², si⁴) are essentially invisible: they induce DM self-scattering σ/m ~ λ²/(64π M³DM) ≲ 10⁻¹² cm²/g for MDM ~ 400 GeV, ~11 orders of magnitude below cluster-scale sensitivity (~0.1–1 cm²/g). Regions differing *only* in quartics are physically degenerate; I say so honestly where it happens.

Reach numbers used throughout: current CMS scouting + conventional dimuon excludes ε ≳ (1–2)×10⁻³ for 11.5–75 and 110–200 GeV (1912.04776); LHCb currently reaches ε ~ 10⁻³ for 10.6–30 GeV (1910.06926); LHCb Run 3–6 / HL-LHC scouting project ε ~ (2–3)×10⁻⁴ over ~0.2–70 GeV (1603.08926, 1412.0018). BaBar excludes ε ≳ (0.5–1)×10⁻³ for 0.02–10.2 GeV; Belle II (50 ab⁻¹) projects ε ~ (2–3)×10⁻⁴ there (1406.2980, 1808.10567).

## Leaf `root_yes_yes_no` (7 regions)

ε per region (geometric mid): R0 ~1.6e-2, R1 ~4.6e-3, R2 ~5.8e-3, R3 ~2.4e-2, R4 ~7.5e-4, R5 ~3.1e-2, **R6 ~8×10⁻⁵**. MZp = 17–165 GeV, i.e. squarely in LHCb-prompt + CMS-scouting territory. A HL-era dark-photon dimuon search reaching ε ≈ 3×10⁻⁴ sees R0–R5 (R1's lower tail 2.5×10⁻⁴ is marginal; R4's floor 4×10⁻⁴ sits just above reach) but **cannot** see R6 (ε ≤ 9.6×10⁻⁵, a factor ≥3 below the best projected reach at MZp ~ 40–48 GeV). Caveat: points with MZp in 75–110 GeV (upper R0/R4 tails) hide under the Z peak, but each such region also has points outside the window. → Lit split: {R0–R5} vs {R6}.

Novel node on the "seen" side: once A′ is discovered, σ(A′)·BR(μμ) directly measures ε² (production is fixed by mixing; data-driven normalization to off-shell γ*→μμ per 1603.08926 gives ~20–30% on σ·BR, i.e. ~10–15% on ε). Cut ε ≥ 2×10⁻³: R4 (ε ≤ 1.4×10⁻³) fails; R0 (≥2.6×10⁻³), R3 (≥1.3×10⁻²), R5 (≥1.8×10⁻²) pass solidly; R1, R2 pass at their medians (4.6, 5.8 ×10⁻³) but their lower tails cross the cut — marginal, stated. The residual {R0,R1,R2,R3,R5} degeneracy is *physical*: those regions differ only in the dark quartics (e.g. R3 α₄ ≤ 0.003 vs R5 α₄ ≥ 0.59), which have no laboratory or astrophysical handle at these masses.

## Leaf `root_yes_no_yes_no` (2 regions)

R0: ε = 0.011–0.047, MZp = 43–74 GeV. R1: ε = 2.6–4.4×10⁻⁴, MZp = 34–62 GeV. A factor ≈25 gap in ε with the same mass window. The **existing** CMS scouting/dimuon result (1912.04776) already probes ε ~ 10⁻³ over 30–75 GeV: R0 (min ε = 1.1×10⁻², an order of magnitude above the limit) yields a glaring dimuon peak; R1 (max ε = 4.4×10⁻⁴) is invisible there and only marginally touchable even by LHCb Run-6 projections (~2×10⁻⁴). Cut at ε ≥ 10⁻³: clean, fully separating. No novel node needed.

## Leaf `root_no_yes` (26 regions)

Same logic, at scale. Using HL-era dark-photon reach ε ≈ 2×10⁻⁴ for MZp ≈ 0.2–70 GeV (extended to 200 GeV by CMS scouting/dimuon):

- **Seen** (region ε ranges or geometric mids well above 2×10⁻⁴): R2 (2.2e-3–0.05), R3 (3.7e-4–5.2e-3), R4 (5.1e-3–0.1), R6 (0.038–0.1), R7 (3.7e-4–2.3e-3), R9 (0.031–0.1), R16 (2.1e-3–5.5e-3), R17 (2.7e-4–4e-4, marginal — just above reach), R20/R25 (ε=0.1), R21 (0.046–0.1), R22 (8.3e-3–0.1), plus the diffuse catch-all R0 (ε spans 10⁻⁶–0.1; log-mid 3×10⁻⁴ lands just above reach — assignment marginal by construction, noted).
- **Not seen** (max ε below or at reach): R1 (≤9.3e-5), R5 (≤4.7e-6), R8 (≤3.4e-6), R10 (≤1.8e-4), R11 (≤9.6e-6), R12 (≤6.8e-5), R13 (≤1.2e-5), R14 (≤6.9e-6), R15 (≤1.1e-6), R18 (≤3.1e-4, log-mid 1.7e-4, marginal), R19 (≤4.6e-5), R23 (≤3.2e-5), R24 (≤1.6e-6).

Novel node 1 (seen side): ε extraction from σ·BR, cut ε ≥ 0.03. Passes: R6 (≥0.038), R9 (≥0.031), R20, R25 (=0.1), R21 (≥0.046), R22 (mid 0.029 — marginal, upper half at 0.1). Fails: R0 (diffuse), R2 (mid 0.011), R3 (mid 1.4e-3), R4 (mid 0.023 — marginal), R7 (mid 9e-4), R16 (mid 3.4e-3), R17 (mid 3.3e-4). Two clean decades separate e.g. R17 from R20; R4/R22 straddle and are flagged.

Novel node 2 (not-seen side): here ε ≤ 3×10⁻⁴ kills all lab probes of the Z′, but every region still annihilates SS*→Z′Z′→4f with ⟨σv⟩ ≈ g⁴/(8πM²DM) ≈ 2–4×10⁻²⁶ cm³/s (g≈0.33–0.47, MDM≈340–700 GeV — thermal-scale, within CTA GC-survey reach per 2007.16129, which quotes sensitivity to thermal cross sections at these masses even including diffuse-emission systematics; the Z′ decays promptly on astrophysical scales, cτγ ≲ metres, so the cascade photons emerge at source). The *shape* observable — the sharp spectral cutoff at E = MDM — measures the DM mass with CTA's ~7% energy resolution; systematics-limited endpoint localization of ±15–20% is realistic. Cut E_cut ≥ 450 GeV: passes R1 (MDM mid 526), R5 (548), R12 (518), R13 (566), R18 (551); fails R8 (~357), R11 (428), R15 (~373), R23 (~368), R24 (~361), and — marginally, mids 452–467 — R10, R14, R19 assigned "no". Residual degeneracy inside each outcome (e.g. R8 vs R24, differing only in quartics α₃/α₄) is physical and irreducible; stated honestly.

## Leaf `root_no_no_no` (2 regions)

R0: MZp = 1 GeV, ε = 6.4×10⁻⁴–1.3×10⁻³ — right at the current BaBar limit (ε ~ (0.5–1)×10⁻³ at 1 GeV, 1406.2980) and a factor 3–5 above Belle II's 50 ab⁻¹ projection (~2–3×10⁻⁴, 1808.10567): Belle II sees a 1 GeV e⁺e⁻→γA′, A′→ℓ⁺ℓ⁻ peak. R1: MZp = 10–25 GeV, above the Belle II kinematic ceiling (√s = 10.58 GeV) — no Belle II signal possible regardless of its large ε = 0.021–0.087 (that region instead lights up LHCb/CMS, but the Belle II measurement alone already separates them cleanly). Cut: γ+dilepton resonance with m(A′) < 8 GeV at ε ≥ 3×10⁻⁴. Fully separating; no novel node needed.

---

```json
{
  "model": "CsSg_U1p[-]_DM.Z2",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_no",
      "lit_review": {
        "name": "HL-LHC dark-photon dimuon search (LHCb prompt + CMS scouting)",
        "observable": "A'->mumu peak, 10-165 GeV, epsilon >= 3e-4 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1912.04776", "arXiv:1603.08926"],
        "reasoning": "All regions have MZp 17-165 GeV, inside LHCb-prompt (<=70 GeV) plus CMS scouting/dimuon (11.5-200 GeV) coverage; projected HL-era reach is epsilon ~ (2-3)e-4. R0/R3/R5 predict epsilon >= 2.6e-3/1.3e-2/1.8e-2 (10-100x above reach); R1, R2 have geometric-mid epsilon ~ 5e-3 (lower tails 2.5e-4 and 5.4e-4 marginal); R4 sits at 4e-4-1.4e-3, still above reach. R6 has epsilon = 7.0-9.6e-5, a factor >=3 below the best projection at MZp ~ 40-48 GeV: no signal. Caveat: MZp in 75-110 GeV hides under the Z peak (upper R0/R4 tails only). Distinct from the catalog's heavy-Z' dilepton search: low-mass scouting triggers and data-driven gamma*->mumu normalization.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R5"]},
          {"label": "not seen", "regions": ["R6"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R5",
          "name": "A' signal-strength mixing extraction",
          "observable": "epsilon from sigma(A')xBR(mumu): epsilon >= 2e-3 ?",
          "reasoning": "Once the A' peak is found, sigma.BR fixes epsilon^2 directly (production and decay both scale as epsilon^2 for a kinetically mixed Z' with dark decays closed, MDM >> MZp). R4 predicts epsilon <= 1.4e-3, while R0 (>=2.6e-3), R3 (>=1.3e-2), R5 (>=1.8e-2) and the R1/R2 medians (4.6e-3, 5.8e-3) lie above the cut; R1/R2 lower tails cross it (marginal, stated). The surviving R0+R1+R2+R3+R5 degeneracy is physical: these regions differ only in dark quartics alpha2-4 (e.g. R3 alpha4<=0.003 vs R5 alpha4>=0.59), whose only signature, DM self-scattering, is sigma/m ~ 1e-12 cm^2/g, eleven orders below cluster bounds.",
          "feasibility": "LHCb inclusive A' analysis (data-driven normalization to off-shell photon rate) already delivers sigma.BR to ~20-30%, i.e. epsilon to ~10-15%; separating 1.4e-3 from >=2.6e-3 needs no improvement (factor ~1x). Dominant systematic: dimuon efficiency and gamma* normalization, both controlled in situ.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R0", "R1", "R2", "R3", "R5"]},
            {"label": "no", "regions": ["R4"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_no",
      "lit_review": {
        "name": "CMS trigger-level dimuon scouting resonance search",
        "observable": "A'->mumu peak, 30-75 GeV, epsilon >= 1e-3 ?",
        "refs": ["arXiv:1912.04776", "arXiv:1910.06926"],
        "reasoning": "Both regions put the Z' at 34-74 GeV, inside the CMS scouting + conventional dimuon window, where the existing 137/96.6 fb^-1 result already probes epsilon ~ 1e-3. R0 predicts epsilon = 0.011-0.047, an order of magnitude above the current limit: an unmistakable narrow dimuon peak. R1 predicts epsilon = 2.6-4.4e-4, invisible at this sensitivity and only marginally within even LHCb Run-6 projections (~2e-4). The factor ~25 gap between the regions makes the epsilon >= 1e-3 cut a clean separator with existing data plus Run 3.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0"]},
          {"label": "not seen", "regions": ["R1"]}
        ]
      },
      "novel": []
    },
    {
      "leaf_id": "root_no_yes",
      "lit_review": {
        "name": "LHCb Run 3-6 + CMS HL dark-photon dimuon search",
        "observable": "A'->mumu peak, 3-135 GeV, epsilon >= 2e-4 ?",
        "refs": ["arXiv:1603.08926", "arXiv:1910.06926", "arXiv:1912.04776"],
        "reasoning": "All Z' masses (3.1-133 GeV) are covered by LHCb prompt A' (0.21-70 GeV) plus CMS scouting/dimuon (11.5-200 GeV); combined HL-era reach epsilon ~ 2e-4. Seen: R2,R4,R6,R9,R16,R20,R21,R22,R25 (epsilon mids 1e-2-1e-1), R3,R7 (mids 1.4e-3, 9e-4), R17 (2.7-4.0e-4, marginal), and the diffuse catch-all R0 (spans 1e-6-0.1, log-mid 3e-4; assignment intrinsically marginal, noted). Not seen: R5,R8,R14,R15,R23,R24 (epsilon <= 7e-6, 30x+ below reach), R1,R11,R12,R13,R19 (<= 1e-4), R10 (<=1.8e-4) and R18 (log-mid 1.7e-4, marginal). Physics: production and dimuon rate scale as epsilon^2, so the 2-5 decade epsilon spread maps to 4-10 decades in rate.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0", "R2", "R3", "R4", "R6", "R7", "R9", "R16", "R17", "R20", "R21", "R22", "R25"]},
          {"label": "not seen", "regions": ["R1", "R5", "R8", "R10", "R11", "R12", "R13", "R14", "R15", "R18", "R19", "R23", "R24"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2+R3+R4+R6+R7+R9+R16+R17+R20+R21+R22+R25",
          "name": "A' signal-strength mixing extraction",
          "observable": "epsilon from sigma(A')xBR(mumu): epsilon >= 0.03 ?",
          "reasoning": "With the A' discovered, sigma.BR measures epsilon^2. Above the cut: R6 (>=0.038), R9 (>=0.031), R20/R25 (epsilon = 0.1), R21 (>=0.046), R22 (log-mid 0.029, marginal). Below: R17 (<=4e-4), R7 (mid 9e-4), R3 (mid 1.4e-3), R16 (mid 3.4e-3), R2 (mid 1.1e-2), R4 (mid 2.3e-2, marginal), and diffuse R0. That is >=2 decades between e.g. R17 and R20, trivially resolved; R4 and R22 straddle the cut and are flagged. Residual degeneracy within each outcome traces to unobservable dark quartics.",
          "feasibility": "LHCb/CMS measure narrow-dimuon sigma.BR to ~20-30% (epsilon to ~10-15%) at these masses today; discriminating 0.003 vs 0.03 requires no improvement (factor ~1x). Dominant systematic: production-model dependence, removed by data-driven normalization to the off-shell photon spectrum.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R6", "R9", "R20", "R21", "R22", "R25"]},
            {"label": "no", "regions": ["R0", "R2", "R3", "R4", "R7", "R16", "R17"]}
          ]
        },
        {
          "attach_to": "R1+R5+R8+R10+R11+R12+R13+R14+R15+R18+R19+R23+R24",
          "name": "CTA Galactic-centre cascade spectral-endpoint fit",
          "observable": "gamma-ray spectral cutoff E_cut >= 450 GeV ?",
          "reasoning": "With epsilon <= 3e-4 the Z' is lab-invisible, but every region annihilates SS*->Z'Z'->4f with <sigma v> ~ g^4/(8 pi MDM^2) ~ 2-4e-26 cm^3/s (g = 0.33-0.47), i.e. thermal-scale and within CTA GC-survey sensitivity at 340-700 GeV; the Z' decays promptly on astrophysical scales (c-tau-gamma <~ metres). The cascade spectrum ends sharply at E = MDM, so localizing the cutoff measures the DM mass. Above cut: R1 (MDM mid 526 GeV), R5 (548), R12 (518), R13 (566), R18 (551). Below: R8 (~357), R11 (428), R15 (~373), R23 (~368), R24 (~361), plus R10/R14/R19 (mids 452-467, straddle the cut; assigned no, marginal). Remaining intra-outcome degeneracy (e.g. R8 vs R24) is pure dark-quartic and physically irreducible.",
          "feasibility": "CTA-South GC survey (funded; sensitivity to thermal cross sections at these masses per its own projections), energy resolution ~7%; endpoint localization to +-15-20% needs only the planned 500 h exposure, so improvement factor ~1-2x over baseline analysis. Dominant systematic: Galactic diffuse-emission template shape near the cutoff (J-factor uncertainty shifts normalization, not the endpoint).",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "high cutoff", "regions": ["R1", "R5", "R12", "R13", "R18"]},
            {"label": "low cutoff", "regions": ["R8", "R10", "R11", "R14", "R15", "R19", "R23", "R24"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_no",
      "lit_review": {
        "name": "Belle II visible dark-photon search, e+e- -> gamma A'",
        "observable": "gamma + dilepton peak, m(A') < 8 GeV, epsilon >= 3e-4 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1808.10567"],
        "reasoning": "R0 puts the Z' at exactly 1 GeV with epsilon = 6.4e-4-1.3e-3: at or just below the current BaBar limit ((0.5-1)e-3 at 1 GeV) and a factor 3-5 above the Belle II 50/ab projection (~2-3e-4), so Belle II sees a narrow 1 GeV e+e- -> gamma A', A'->l+l- resonance. R1 has MZp = 10-25 GeV, above the Belle II kinematic ceiling (sqrt(s)=10.58 GeV): no Belle II signal is possible despite its large epsilon = 0.021-0.087 (which would instead show up at LHCb/CMS - a free cross-check). Clean, fully separating with a funded experiment.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0"]},
          {"label": "not seen", "regions": ["R1"]}
        ]
      },
      "novel": []
    }
  ]
}
```