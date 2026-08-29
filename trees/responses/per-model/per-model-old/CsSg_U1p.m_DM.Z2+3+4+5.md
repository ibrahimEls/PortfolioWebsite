I'll verify the arXiv references I plan to cite, then deliver the full analysis in one message.
All four references verified (BaBar 1406.2980; LHCb 1910.06926, A'→μμ up to 70 GeV; Belle II Physics Book 1808.10567; CTA Galactic-centre DM sensitivity 2007.16129). Here is the full degeneracy-breaking analysis.

---

# Reasoning

## Global structure of the degeneracies

Every catalog observable in this tree is a **DM-side** signal (σ_SI, σv per channel, ν flux, BR(h→inv)). The scan's parameter space, however, has a second, almost orthogonal sector: the **mediator side** — the dark photon Z' with mass MZp (spanning 1 GeV to 10 TeV across regions) and kinetic mixing ε (10⁻⁶ to 0.1). Within a leaf, regions share the same DM-signal bins by construction, but their (MZp, ε) values differ by orders of magnitude. The single most powerful class of literature measurements *not* in the catalog is therefore the **visible dark-photon search**: BaBar e⁺e⁻→γA', A'→ℓℓ (excludes ε ≳ (0.6–2)×10⁻³ for 0.02 < m_A' < 10.2 GeV, arXiv:1406.2980), LHCb prompt+displaced A'→μμ (ε ≳ (2–10)×10⁻⁴ for 0.214–70 GeV, arXiv:1910.06926), and Belle II projections reaching ε ≈ 3×10⁻⁴ below 10 GeV with 50 ab⁻¹ (arXiv:1808.10567). These probe only (MZp, ε) and are completely blind to the DM couplings, so they cut across the catalog's leaf structure. An important honesty note that recurs below: several regions carry ε > 10⁻³ with MZp in the BaBar/LHCb windows — they are "viable" only because the scan's catalog contains no dark-photon limits. For those, the lit-review "measurement" is partly a *recast of data already on disk*: either the resonance appears, or the region dies. Both outcomes split the leaf.

The second orthogonal handle is the **DM mass itself** via the gamma-ray spectral *endpoint* (the catalog uses only flux normalization vs. limit per channel, never spectral shape). CTA's energy resolution is ~6–8% above 100 GeV (arXiv:2007.16129), so leaves with bright ID signals and disjoint per-region MDM ranges split on the measured cutoff energy in GeV.

Where neither works, the residual regions typically differ only in the **dark quartic self-couplings** α₂–α₆ (sr/si self-interactions). These control the sr–si mass splitting and dark-sector-internal dynamics and are close to experimentally sterile; I say so explicitly rather than invent a discriminator, and the novel-experiment proposals attached there are honestly rated "unlikely"/"speculative". For region blobs whose ε range *straddles* a search threshold (DBSCAN blobs spanning decades in log ε), I assign the outcome of the log-midpoint and flag the straddle in the node reasoning — a binary tree cannot do better on a region that genuinely spans the cut.

Recurring novel-experiment concepts (feasibility anchored once here): **(N1) muon-beam missing-momentum / beam-dump ε-scan** — closest hardware LDMX (electron beam, m_A' ≲ 0.3 GeV, ε → 3×10⁻⁶) and the M³ muon-beam proposal, plus SHiP (m_A' ≲ 3 GeV at ε ~ 10⁻⁶–10⁻⁴); extending to m_A' ~ 10 GeV at ε ~ 10⁻⁵ needs ~10× the mass reach of anything proposed → "unlikely". **(N2) A' lineshape spectroscopy** — once a dimuon resonance is seen, LHCb mass resolution ~0.5% makes binning by m_A' trivial → "possible". **(N3) FCC-hh high-mass dilepton** — extends ε reach at 0.1–10 TeV masses to few×10⁻³, ~30× beyond HL-LHC → "unlikely". **(N4) FCC-ee Tera-Z electroweak fit** — ~10× tighter than LEP on Z–Z' mixing → "unlikely".

## Leaf root_yes_yes_yes (R0, R1)

The two regions have disjoint DM masses: R0 has MDM ∈ [553, 572] GeV, R1 has MDM ∈ [348, 478] GeV, and both sit at 10–100× the CTA (WW) limit, i.e. the GC spectrum will be measured with high statistics, not just detected. The WW annihilation spectrum cuts off at E = MDM. Predicted cutoff: **R0 ≈ 553–572 GeV; R1 ≈ 348–478 GeV**. With CTA's ~7% energy resolution at 500 GeV (σ_E ≈ 35 GeV), the 75 GeV gap between 478 and 553 GeV is a ≥1.5–2σ_E separation on a bright source — a clean split, though I flag that the cut at 520 GeV sits between region edges, not between region cores, so a point near R1's upper edge is the marginal case. No novel node needed. (R0's fixed MZp = 118.7 GeV with ε up to 0.1 would also show up in Drell-Yan, but high-mass dileptons are in the catalog, so I do not use them.)

## Leaf root_yes_yes_no (91 regions)

The regions share MDM 316–709 GeV and the same ID bins, but (MZp, ε) spans (1–337 GeV) × (10⁻⁶–0.1). Lit split: visible A' search, reach ε ≳ 3×10⁻⁴ for 0.2 < m_A' < 70 GeV. Representative predictions: R3 (ε = 3.5×10⁻³–0.1, MZp 3.7–10 GeV), R29 (ε = 0.015–0.057, MZp 1.4–3.7 GeV), R34 (ε = 0.023–0.061, MZp ≈ 10–12 GeV), R63 (ε = 0.057–0.086, MZp 3.7 GeV) predict prompt dimuon yields 10–10⁴× the LHCb/BaBar sensitivity — several are in the already-excluded band, so existing data resolves them immediately. On the other side, e.g. R2 (ε ≤ 3.3×10⁻⁶), R12/R45/R76/R78 (MZp ≈ 1 GeV, ε ≲ 10⁻⁵), R36 (ε = 10⁻⁶) predict yields 10²–10⁵× below any visible-search reach. Regions with MZp ≈ 117–122 GeV (R47, R48, R73, R80) fall outside the ≤70 GeV window regardless of ε and go to "not seen". Straddlers assigned by log-midpoint and flagged: R0, R4 (ε spans 10⁻⁶–0.1, midpoint ≈ 3×10⁻⁴ → "seen", marginal), R6, R7 ("seen", marginal), R8, R14, R58, R86 ("not seen", midpoints ≈ 2–3×10⁻⁴, marginal). Both outcomes remain massively degenerate, so each gets a novel node: for the seen group, A' lineshape spectroscopy (N2) binning at m(μμ) = 20 GeV (e.g. R29 predicts 1.4–3.7 GeV, R74 predicts 27 GeV, R15 predicts 36–111 GeV); for the not-seen group, a muon-beam/SHiP ε-scan (N1) at ε ≥ 10⁻⁵, m ≤ 10 GeV, which picks out R51, R65, R71, R76, R79, R83, R89, R90 (ε midpoints 1.5×10⁻⁵–2×10⁻⁴ at MZp ≲ 10 GeV) against regions that are either too heavy (R22, R47–R49, R73, R80: MZp ≳ 100 GeV) or too weakly mixed (ε ~ 10⁻⁶). The residual sub-groups differ mainly in dark quartics; stated honestly in the node reasoning.

## Leaf root_yes_no_yes_yes (15 regions)

Distinct (MZp, ε) classes at nearly common MDM (~500–710 GeV): R2 (ε = 6.3×10⁻³–0.1, MZp = 1 GeV) and R7 (ε = 4.1×10⁻³–1.4×10⁻², MZp = 1 GeV) sit in BaBar's already-excluded band; R10 (ε = 0.078–0.1, MZp 12–15 GeV) is deep in LHCb's band; R0 straddles (ε 10⁻⁶–0.1, MZp 5–20 GeV; midpoint 3×10⁻⁴ → "seen", flagged). All others predict ε ≲ 10⁻⁴ (most ≲ 10⁻⁵): no visible resonance. Novel 1 (seen group, N2): m(A') ≥ 5 GeV separates R0 (5–20 GeV) + R10 (12–15 GeV) from R2 + R7 (≈1 GeV). Novel 2 (not-seen group, N1): ε ≥ 2×10⁻⁵ at m ≈ 1–7 GeV picks out R11 (ε ≈ 4.6×10⁻⁵), R12 (ε ≈ 2×10⁻⁴), R14 (ε up to 1.1×10⁻⁴) from R1, R3–R6, R8, R9, R13 (ε ≲ 10⁻⁵). The final residuals (e.g. R4 vs R5 vs R8) differ essentially only in α₂–α₅ quartic patterns at MZp ≈ 1 GeV, gU1p ≈ 0.02 — honestly near-sterile.

## Leaf root_yes_no_yes_no (6 regions)

Lit split as above: R5 (ε = 0.027–0.1, MZp 6.3–8.6 GeV) and R0 (straddler, ε 4.7×10⁻⁶–0.1, MZp 5–16 GeV, midpoint ≈ 7×10⁻⁴ → "seen", flagged) vs R1–R4 (ε ≲ 2×10⁻⁴). Novel 1: within the seen pair, the measured signal strength separates them — R5 predicts σ×BR(μμ) two to three orders above LHCb sensitivity (ε² ≥ 7×10⁻⁴), R0 mostly near threshold; cut σ×BR ≈ 0.1 pb at m 5–16 GeV. Novel 2 (N1): ε ≥ 2×10⁻⁵ separates R4 (ε = 6.2×10⁻⁵–1.9×10⁻⁴, MZp 1.5–2.1 GeV) from R1–R3 (ε ≲ 10⁻⁵). Novel 3 for R1+R2+R3: annihilation-channel spectroscopy. R3 has gU1p = 0.023 with a large portal (α1 ≈ 0.036) → annihilation through the Higgs portal into WW-like direct spectra; R2 has gU1p ≈ 0.25 with a tiny portal (α1 ≈ 0.003–0.004) → secluded srsr→Z'Z' with each ~1 GeV Z' decaying to soft hadrons/leptons, giving a much softer cascade spectrum peaking below ~0.05×MDM; R1 (gU1p 0.035–0.21) is mixed, assigned to the cascade side and flagged. At 1–10× the CTA limit this spectral discrimination needs a deep GC exposure — rated unlikely, dominant systematic the GC diffuse model.

## Leaf root_yes_no_no_no (12 regions)

R0 dominates (501/1100 pts) and is unique: MZp ≈ 986 GeV, ε = 0.068, gU1p ≈ 7.2, with all other regions at MZp ≈ 1–6 GeV and ε ≤ 2.4×10⁻². Lit split (A' search): R2 (ε = 3.2×10⁻³–10⁻²) and R4 (5.5×10⁻³–2.4×10⁻²) at MZp ≈ 1 GeV are in the BaBar band (partly already excluded); everything else invisible (R0 out of the mass window; others ε ≲ 10⁻⁴). Novel 1 (N4): FCC-ee Tera-Z electroweak fit. R0 predicts Z–Z' mixing from ε = 0.068 at ~1 TeV — around current EWPO sensitivity and a factor ~10 inside Tera-Z reach (ε ~ few×10⁻³–10⁻² at 1 TeV); all other regions predict effects 10²–10⁴× smaller (ε ≤ 1.3×10⁻⁴ with MZp ~ GeV, where the mixing observable scales out). Novel 2 (N1): ε ≥ 10⁻⁵ at m ≈ 1–6 GeV picks R9 (ε = 6.5×10⁻⁵–1.3×10⁻⁴) out of the remainder; R1 straddles (midpoint ~10⁻⁵, assigned "no", flagged). Residual regions (R3, R5, R6, R8, R10, R11 at ε ~ 10⁻⁶, MZp = 1 GeV) again differ mostly in quartics.

## Leaf root_no_yes_yes_no (5 regions, MDM 76–95 GeV)

All ε ≤ 1.5×10⁻⁴ (most ~10⁻⁶): dark-photon searches are blind here. But the leaf is bright in ID (σv 10–100× CTA WW), and the regions' DM masses cluster at 80.4 (R0, R3), 94.8 (R1), 85.5 (R2), 76.6–79.1 (R4) GeV. Lit split: spectral endpoint at the GC. Predicted cutoff: R1 ≈ 94.8 GeV vs 76.6–85.5 GeV for the rest; cut at 90 GeV. Honest flag: the 9.3 GeV gap to R2 is ≈1σ_E at CTA's ~10% resolution near 90 GeV — this split is *marginal* and needs the full bright-source statistics; still, it is the only literature observable that moves at all. Novel 1 (N1): beam-dump/SHiP-class ε ≥ 10⁻⁵ at m ≤ 10 GeV picks out R2 (ε = 4×10⁻⁵–1.5×10⁻⁴, MZp 3.7–8.2 GeV); R4 fails on both counts (ε ≈ 5–8×10⁻⁶, MZp 12–20 GeV). Novel 2 for R0+R3+R4: a DM mass determination from the direct-detection recoil spectrum at the ±2 GeV level would separate R4 (76.6–79.1) from R0/R3 (80.4) — but mass reconstruction at ~80 GeV from recoil shape is degenerate with the halo velocity distribution and needs ≳10× DARWIN exposure plus directionality: speculative. R0 vs R3 differ *only* in the si quartic α₆ (7.6–10 vs 0.2) with identical MDM, gU1p, ε — I state plainly that no realistic experiment separates them.

## Leaf root_no_yes_no_no_no (64 regions, MDM 95–316 GeV)

Same lit split as the other mega-leaf. Confident "seen" examples with predicted yields far above LHCb/BaBar sensitivity: R8 (ε = 0.022–0.1, MZp = 1 GeV, BaBar band — already excluded territory), R10 (3.8×10⁻³–4.4×10⁻², MZp 3–33 GeV), R14 (0.012–0.048, MZp 8–20 GeV), R20/R34/R39/R43/R49/R58 (ε = 0.1 in-window), R25 (0.027–0.047, MZp 11–31 GeV). Confident "not seen": ε ~ 10⁻⁶ regions (R7, R26, R40, R41, R47, R56, …) and R62 (MZp = 104.7 GeV, outside the window regardless of its ε up to 1.1×10⁻²— flagged: HL-LHC Drell-Yan could see it, but that's catalog territory). Straddlers flagged: R1 (319 pts, ε spans 10⁻⁶–0.1, midpoint 3×10⁻⁴ → "seen", the single most uncertain assignment in this leaf), R0 (midpoint 1.6×10⁻⁴ → "not seen"), R12, R16, R17, R33, R63 marginal. Novel 1 (N2, seen group): m(A') ≥ 10 GeV bins the 26 regions (e.g. R13 predicts 23–58 GeV, R5 19–43 GeV vs R18 1–7.8 GeV, R44 ≈ 1 GeV). Novel 2 (N1, not-seen group): ε ≥ 10⁻⁵ with m ≤ 10 GeV selects R0, R3, R15, R19, R21, R29, R45, R46, R48 (ε midpoints 1.1×10⁻⁵–1.75×10⁻⁴ at MZp ≈ 1–8 GeV); the 29 remaining regions predict signals ≥10× below even that reach or sit at too-high MZp.

## Leaf root_no_no_yes_yes_no (34 regions, MDM ≈ 96.4 GeV for all)

MDM is pinned at 96.4 GeV in every region — mass-based observables are useless, and this leaf is the purest mediator-side degeneracy in the tree: MZp spans 1 GeV–10 TeV and gU1p spans 0.003–12.6. Lit split: A' search sees R9 (ε = 0.015–0.1, MZp 1–3.6 GeV), R24 (ε = 0.1, MZp = 1 GeV), R26 (ε = 0.017–0.1, MZp 1–3.6 GeV) — all in the BaBar already-excluded band (recast, no new data needed). All 31 other regions predict no visible resonance (ε ≲ 10⁻⁴, or MZp ≥ 100 GeV–10 TeV). Novel 1 (seen trio, N2): m(A') = 1.00 ± 0.05 GeV isolates R24 (exactly 1 GeV) from R9/R26 (1–3.6 GeV) — flagged marginal since R9/R26 ranges include 1 GeV; R9 vs R26 differ only in α₃/α₅ and stay merged. Novel 2 (N3, not-seen group): FCC-hh 100 TeV dilepton at ε ≥ 3×10⁻³, 0.1 < m < 10 TeV. Predictions: R22 (ε = 0.054–0.1 at 5–10 TeV), R31 (0.1 at 10 TeV), R27 (3×10⁻³ at 10 TeV, marginal), R15 (5.2×10⁻³ at 0.24–1.8 TeV) give observable Drell-Yan bumps; the other 27 regions predict rates 10²–10⁶× below (ε ≲ 10⁻⁴ or sub-window masses). The final 27-region residue differs in gU1p (0.003–12.6) and quartics — gU1p is invisible when both ε and the annihilation topology are fixed; honestly unresolved.

## Leaf root_no_no_yes_no_no (53 regions, MDM ≈ 97.6 GeV mostly)

Same anatomy as the previous leaf. Lit "seen": R8, R24 (ε = 0.1, MZp = 1 GeV), R19 (3.8×10⁻³–1.4×10⁻², 1 GeV), R37 (≈3×10⁻³, 1 GeV), R40 (0.1, 17.6–36.6 GeV), R48 (0.083–0.1, 3.4–7.9 GeV), R17 (3.2–8.3×10⁻⁴, 2.4–5.5 GeV), plus marginal R7, R30 (midpoints ≈ 4×10⁻⁴ at 1 GeV, flagged). "Not seen": everything else — including all the MZp = 2–10 TeV regions (R3, R6, R9, R10, R13, R14, R16, R22 in part, R25, R26, R29, R36, R41–R44, R46, R49–R52) regardless of ε, and the ε ~ 10⁻⁶ light-MZp regions. Novel 1 (N2, seen group): m(A') ≥ 3 GeV separates R17 (2.4–5.5, flagged straddle), R40 (17.6–36.6), R48 (3.4–7.9) from the m ≈ 1 GeV cluster R7, R8, R19, R24, R30, R37. Novel 2 (N1, not-seen group): ε ≥ 10⁻⁵, m ≤ 10 GeV selects R0 (midpoint 4.4×10⁻⁵ at 1 GeV, straddler-flagged), R2, R21, R23, R38, R39, R47 (ε midpoints 1.3×10⁻⁵–2.5×10⁻⁴ at MZp ≈ 1–5 GeV). Novel 3 (N3) on the 37-region residue: FCC-hh dilepton picks out R43 (ε = 0.029–0.1 at MZp 6.9–10 TeV); all others predict unobservably small high-mass Drell-Yan (ε ≲ 10⁻³ at 10 TeV or MZp ≈ 1 GeV with tiny ε). The remaining 36 regions differ dominantly in gU1p and quartics at fixed MDM = 97.6 GeV; honestly unresolved.

## Leaf root_no_no_no_yes_yes_yes_yes (R0, R1; MDM ≈ 67.5–72 GeV)

Both regions have ε ≈ 10⁻⁶ (invisible mediator), identical gU1p ≈ 0.148, overlapping MDM (67.5 vs 68.2–72.0 — a 1–7% gap, far below any spectral or recoil resolution), and the same DARWIN/CTA(bb)/BR(h→inv) bins. Honest verdict: **No Split** at the literature level; I record the best candidate (visible A' search) with its single "not seen" outcome, since both regions predict yields ~10⁶ below reach. The only parameter that differs observably in principle is MZp: 34.5 GeV (R0) vs 7.3–17.2 GeV (R1). At fixed gU1p, both regions have the same subdominant srsr→Z'Z' annihilation fraction, but the resulting cascade photons differ: a 34.5 GeV Z' at E_Z' = MDM produces a hard shoulder extending to ~62 GeV with a lower edge near 6 GeV, while a 7–17 GeV Z' yields a softer, broader continuum concentrated below ~15 GeV. Novel: deep GC gamma-ray spectroscopy hunting a secondary spectral shoulder above ~15–20 GeV on top of the bb continuum → R0 yes, R1 no. Rated speculative: the cascade branching is α_D-suppressed (α_D ≈ 1.7×10⁻³) and may be percent-level of the total flux; dominant systematic is the GC diffuse-emission model.

## Leaf root_no_no_no_yes_yes_no_no (6 regions, MDM 10–74 GeV)

Lit split: R3 carries ε = 0.025–0.1 at MZp = 17.1 GeV — squarely in LHCb's prompt A'→μμ band, predicting a dimuon peak orders of magnitude above the published sensitivity (i.e., already excludable from data in hand). All other regions predict nothing visible (ε ≤ 2.7×10⁻⁴). Novel 1: gamma-ray spectral endpoint with Fermi-LAT-class data (15-yr GC dataset already in hand; AMEGO-X-class would improve it): R4's endpoint is at MDM ≈ 10.4 GeV, versus ≥ 44 GeV for R0 (44–74), R1 (71.5–72), R2 (54–56), R5 (71–72.5) — a 4× separation, trivially resolved at ~8% energy resolution: cut endpoint ≥ 20 GeV. Rated possible. Novel 2 (N1): ε ≥ 10⁻⁵ at m ≤ 20 GeV separates R1 (1.9–4.2×10⁻⁵, MZp 11–19 GeV) and R5 (≈3.9×10⁻⁵, MZp 5–13 GeV) from R0 (≤3.3×10⁻⁶) and R2 (1.6×10⁻⁶). Residues: R1 vs R5 would separate on A' mass if the scan ever sees them (11–19 vs 5–13 GeV, partial overlap); R0 vs R2 (MDM 44–74 vs 54–56, MZp 1.7–4.9 vs 26.7) overlap in mass and are both mediator-invisible — noted honestly.

## Leaf root_no_no_no_yes_no_no_yes_yes (5 regions, MDM ≈ 3.1–3.6 GeV, MZp ≈ 1 GeV)

All regions share MDM ≈ 3.4 GeV, MZp ≈ 1 GeV, gU1p ≈ 0.037; they differ almost purely in ε: R0 = 0.032, R1 = 0.1, R2 ≈ 10⁻⁶, R3 = 6×10⁻⁵–1.8×10⁻⁴, R4 = 1–5×10⁻⁶. Lit split: a 1 GeV A' with ε = 0.032–0.1 is excluded by BaBar by ~1.5 orders of magnitude — R0 and R1 are "seen" (or dead) the moment the existing limit is applied; R2, R3, R4 are invisible to all current visible searches (R3's 1.8×10⁻⁴ sits just below LHCb's displaced reach at 1 GeV — flagged marginal). Novel (N1): a DarkQuest/LDMX-μ-class scan at ε ≥ 2×10⁻⁵, m ≈ 1 GeV picks out R3 cleanly; R2 and R4 (ε ≲ 5×10⁻⁶) stay dark and differ only in their quartic pattern (α₄, α₆ large in R4 vs α₆-dominated R2) — honestly unresolvable.

## Leaf root_no_no_no_no_yes_yes_no_no (9 regions, MDM ≈ 1–2 GeV, MZp ≈ 1–21 GeV)

The only catalog signal is BR(h→inv) = 0.01–0.032; everything else is mediator-side. Lit split at ε ≥ 10⁻³ (BaBar/LHCb bands, m ≈ 1–21 GeV): R1 (ε = 1.5×10⁻³–2.8×10⁻², m ≈ 1 GeV), R2 (8.9×10⁻³, 1.25 GeV), R4 (0.072 at MZp = 21 GeV — LHCb prompt window; note this region also carries gU1p ≈ 10, i.e. α_D ≈ 8, but that is invisible here) → all predict signals at or above already-published limits. Not seen: R0 (straddler: ε 10⁻⁶–1.5×10⁻³, midpoint ≈ 4×10⁻⁵, flagged), R3 (3–18×10⁻⁵), R5–R8 (≲3×10⁻⁵). Novel (N1): ε ≥ 10⁻⁵ at m ≈ 1 GeV selects R0 (flagged), R3, R7 (midpoint ≈ 1.2×10⁻⁵, marginal) vs R5, R6, R8 (ε ≲ 8×10⁻⁶). Residues differ in quartics only; noted.

## Leaf root_no_no_no_no_yes_no_no (3 regions, MDM ≈ 1–2.3 GeV)

Lit split: R2 has ε = 0.025–0.081 at MZp = 3.1–4.2 GeV — inside BaBar's excluded band by ≥1.5 orders; R0 (ε ≤ 3.4×10⁻⁶) and R1 (1.3–1.5×10⁻⁴ at MZp ≈ 1 GeV) show nothing in current visible searches (R1 sits a factor ~2–3 below Belle II's projected 3×10⁻⁴). Novel (N1): ε ≥ 10⁻⁵ at m ≈ 1 GeV cleanly separates R1 (predicted 10–15× above that reach) from R0 (30× below it).

## Leaf root_no_no_no_no_no_yes (22 regions, MDM ≈ 1–5.5 GeV, MZp ≈ 1–14 GeV)

Lit split at ε ≥ 10⁻³: seen — R1 (1.5×10⁻³–9.8×10⁻³), R5 (3.7×10⁻⁴–5×10⁻³, midpoint 1.4×10⁻³), R9 (3–5.6×10⁻³), R14 (3–4.5×10⁻³), R15 (ε = 0.1 at MZp = 14.4 GeV, LHCb window); all at or beyond published BaBar/LHCb sensitivity. Not seen — the other 17 regions (ε midpoints 10⁻⁶–3×10⁻⁴); R0 is the big straddler (ε 4.6×10⁻⁶–2.1×10⁻², midpoint ≈ 3×10⁻⁴ → assigned "not seen", flagged). Novel (N1): ε ≥ 3×10⁻⁵ at m ≈ 1 GeV selects R0 (flag), R6 (4.6×10⁻⁵), R16, R17, R20 (midpoints 1.7–2.8×10⁻⁴) vs the 12 remaining regions (ε ≲ 10⁻⁵). The final residue is the familiar quartic-only degeneracy at MZp = 1 GeV, gU1p ≈ 0.031; honestly unresolved.

## Leaf root_no_no_no_no_no_no_no (3 regions — the all-null leaf)

Nothing in the catalog fires, and nothing in the literature does either: R0 (MDM 290–308 GeV, MZp 1.2–2.6 GeV, ε ≤ 1.8×10⁻⁶), R1 and R2 (both MDM = 127.5 GeV, MZp = 145.7 GeV, gU1p = 2.24, differing only in ε ≤ 2×10⁻⁶ vs 1.4×10⁻⁵ and quartics). A 146 GeV Z' with ε ≤ 1.4×10⁻⁵ is ~10³ below any Drell-Yan or EWPO reach; MZp ≈ 1–3 GeV at ε ~ 10⁻⁶ is below even SHiP. **No Split** — recorded as the honest failure with a single outcome. Novel: the one number that differs by an order of magnitude between R0 and R1/R2 is the Higgs-portal σ_SI: R0 (α1 = 0.005–0.012 at MDM ≈ 300 GeV) predicts σ_SI ~ 10⁻⁴⁸ cm² (a few ×10⁻⁴⁹–6×10⁻⁴⁸), while R1/R2 (α1 ≈ 0.0010–0.0015 at 127.5 GeV) predict ~2×10⁻⁴⁹ cm² — both below DARWIN (consistent with the leaf) and at or under the neutrino fog. A post-fog direct-detection program (directional readout or paleo-detectors) reaching σ_SI ≈ 10⁻⁴⁸ cm² with fog rejection would split R0 from R1+R2: rated speculative (needs ≥10× beyond any proposed instrument; dominant systematic is the atmospheric/solar-ν floor itself). R1 vs R2 differ only by an ε shift far below every conceivable probe plus quartics — I know of no concept, literature or novel, that separates them; they stay merged.

---

```json
{
  "model": "CsSg_U1p[-]_DM.Z2+3+4+5",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_yes",
      "lit_review": {
        "name": "CTA Galactic-centre spectral endpoint",
        "observable": "gamma-ray cutoff energy >= 520 GeV ?",
        "refs": ["arXiv:2007.16129"],
        "reasoning": "WW annihilation spectrum cuts off at E=MDM. R0 predicts cutoff 553-572 GeV, R1 predicts 348-478 GeV. Both regions sit 10-100x above the CTA(WW) limit, so the GC source is bright enough for a spectral fit; CTA energy resolution ~7% at 500 GeV (sigma_E ~35 GeV) resolves the 75 GeV gap at >1.5 sigma. Catalog uses only flux vs limit, never spectral shape, so this is catalog-orthogonal.",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R0"]},
          {"label": "no", "regions": ["R1"]}
        ]
      },
      "novel": []
    },
    {
      "leaf_id": "root_yes_yes_no",
      "lit_review": {
        "name": "Visible dark-photon search (BaBar/LHCb/Belle II)",
        "observable": "A'->l+l- resonance, eps >= 3e-4, 0.2 < m(A') < 70 GeV ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "Regions share DM-side bins but differ by decades in (MZp, eps). Seen-side regions predict dimuon/dilepton peaks at or far above published sensitivity (e.g. R3 eps=3.5e-3-0.1 at 3.7-10 GeV; R29 eps=0.015-0.057 at 1.4-3.7 GeV; R63 eps=0.057-0.086 at 3.7 GeV -- several already inside BaBar/LHCb exclusions, so existing data resolves them). Not-seen regions predict eps <~ 1e-4 (e.g. R2, R36 eps~1e-6) or MZp>=100 GeV outside the window (R47,R48,R73,R80 at ~117-122 GeV). Straddlers assigned by log-midpoint and flagged: R0,R4,R6,R7 (seen, marginal); R8,R14,R58,R86 (not seen, marginal ~2-3e-4).",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0","R1","R3","R4","R5","R6","R7","R15","R16","R17","R19","R25","R26","R27","R29","R30","R31","R32","R33","R34","R35","R39","R41","R42","R43","R44","R57","R61","R62","R63","R64","R66","R68","R70","R74","R81","R82","R87"]},
          {"label": "not seen", "regions": ["R2","R8","R9","R10","R11","R12","R13","R14","R18","R20","R21","R22","R23","R24","R28","R36","R37","R38","R40","R45","R46","R47","R48","R49","R50","R51","R52","R53","R54","R55","R56","R58","R59","R60","R65","R67","R69","R71","R72","R73","R75","R76","R77","R78","R79","R80","R83","R84","R85","R86","R88","R89","R90"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R3+R4+R5+R6+R7+R15+R16+R17+R19+R25+R26+R27+R29+R30+R31+R32+R33+R34+R35+R39+R41+R42+R43+R44+R57+R61+R62+R63+R64+R66+R68+R70+R74+R81+R82+R87",
          "name": "A' lineshape spectroscopy",
          "observable": "m(A'->mumu) >= 20 GeV ?",
          "reasoning": "Once the resonance is seen, its mass directly bins the regions: e.g. R29 predicts 1.4-3.7 GeV, R62/R63 ~3.7-12 GeV, R34 ~10-12 GeV vs R74 at 27 GeV, R15 36-111 GeV, R87 34-40 GeV. Wide-MZp regions (R0, R4, R19) straddle the 20 GeV bin and are assigned by their geometric-mean MZp; flagged.",
          "feasibility": "LHCb dimuon mass resolution ~0.5%; measuring the peak position is automatic upon discovery, improvement factor ~1x. Dominant systematic: none beyond the discovery itself; region MZp-range overlaps limit the partition, not the instrument.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "high mass", "regions": ["R0","R1","R4","R5","R15","R16","R17","R19","R25","R26","R31","R33","R35","R39","R42","R61","R68","R74","R81","R82","R87"]},
            {"label": "low mass", "regions": ["R3","R6","R7","R27","R29","R30","R32","R34","R41","R43","R44","R57","R62","R63","R64","R66","R70"]}
          ]
        },
        {
          "attach_to": "R2+R8+R9+R10+R11+R12+R13+R14+R18+R20+R21+R22+R23+R24+R28+R36+R37+R38+R40+R45+R46+R47+R48+R49+R50+R51+R52+R53+R54+R55+R56+R58+R59+R60+R65+R67+R69+R71+R72+R73+R75+R76+R77+R78+R79+R80+R83+R84+R85+R86+R88+R89+R90",
          "name": "Muon-beam missing-momentum / SHiP-class A' scan",
          "observable": "A' signal with eps >= 1e-5, m(A') <= 10 GeV ?",
          "reasoning": "Extends the eps frontier ~30x below LHCb. Yes-side regions predict eps midpoints 1.5e-5-2e-4 at MZp <~ 10 GeV (R51, R65, R71, R76, R79, R83, R89, R90). No-side regions are either too heavy (R22, R47-R49, R73, R80: MZp ~100-120 GeV) or too weakly mixed (eps ~1e-6: R2, R12, R20, R21, R23, R24, R36, R37, R45, R46, R52-R54, R56, R69, R78). Residual sub-groups differ mainly in dark quartics alpha2-alpha6 and remain honestly degenerate.",
          "feasibility": "Closest: LDMX (e-beam, m<~0.3 GeV, eps to 3e-6), M3 muon-beam proposal, SHiP (m<~3 GeV at eps 1e-6-1e-4). Requires ~10x mass-reach extension to ~10 GeV at eps~1e-5. Dominant systematic: photo-nuclear / muon-bremsstrahlung backgrounds faking missing momentum.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R51","R65","R71","R76","R79","R83","R89","R90"]},
            {"label": "not seen", "regions": ["R2","R8","R9","R10","R11","R12","R13","R14","R18","R20","R21","R22","R23","R24","R28","R36","R37","R38","R40","R45","R46","R47","R48","R49","R50","R52","R53","R54","R55","R56","R58","R59","R60","R67","R69","R72","R73","R75","R77","R78","R80","R84","R85","R86","R88"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_yes",
      "lit_review": {
        "name": "Visible dark-photon search (BaBar/LHCb/Belle II)",
        "observable": "A'->l+l- resonance, eps >= 3e-4, 0.2 < m(A') < 70 GeV ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "R2 (eps 6.3e-3-0.1) and R7 (4.1e-3-1.4e-2) at MZp~1 GeV sit inside BaBar's excluded band (recast of existing data). R10 (eps 0.078-0.1 at 12-15 GeV) is deep in LHCb's prompt band. R0 straddles (eps 1e-6-0.1, midpoint ~3e-4, MZp 5-20 GeV) -- assigned seen, flagged marginal. All other regions predict eps <~ 1e-4 (mostly <~1e-5) at MZp ~ 1 GeV: no visible resonance, 10-1000x below reach.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0","R2","R7","R10"]},
          {"label": "not seen", "regions": ["R1","R3","R4","R5","R6","R8","R9","R11","R12","R13","R14"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2+R7+R10",
          "name": "A' lineshape spectroscopy",
          "observable": "m(A'->mumu) >= 5 GeV ?",
          "reasoning": "R0 predicts m(A') = 5-20 GeV and R10 predicts 12-15 GeV; R2 and R7 predict ~1 GeV. Clean mass gap, trivially resolved by LHCb's ~0.5% dimuon resolution.",
          "feasibility": "LHCb dimuon resolution ~0.5% at these masses; improvement factor 1x once the resonance is found. Dominant systematic: none material.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R0","R10"]},
            {"label": "no", "regions": ["R2","R7"]}
          ]
        },
        {
          "attach_to": "R1+R3+R4+R5+R6+R8+R9+R11+R12+R13+R14",
          "name": "Muon-beam missing-momentum A' scan",
          "observable": "A' signal with eps >= 2e-5, m(A') ~ 1-7 GeV ?",
          "reasoning": "R11 (eps ~4.6e-5), R12 (~2e-4) and R14 (up to 1.1e-4) predict signals above an eps=2e-5 scan at MZp~1 GeV; R1, R3-R6, R8, R9, R13 predict eps <~ 1e-5, below reach. Final residues (e.g. R4 vs R5 vs R8) differ only in quartic patterns at identical MZp~1 GeV, gU1p~0.02 -- effectively sterile.",
          "feasibility": "Closest: LDMX/M3 missing-momentum (eps to ~3e-6 but m<~0.3-1 GeV); needs ~5-10x mass reach at GeV-scale masses. Dominant systematic: beam-related neutral backgrounds.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R11","R12","R14"]},
            {"label": "not seen", "regions": ["R1","R3","R4","R5","R6","R8","R9","R13"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_no",
      "lit_review": {
        "name": "Visible dark-photon search (BaBar/LHCb/Belle II)",
        "observable": "A'->l+l- resonance, eps >= 3e-4, 0.2 < m(A') < 70 GeV ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "R5 (eps 0.027-0.1 at MZp 6.3-8.6 GeV) predicts a dimuon peak orders of magnitude above LHCb/BaBar sensitivity (already-excluded band). R0 straddles (eps 4.7e-6-0.1, midpoint ~7e-4 at MZp 5-16 GeV) -- assigned seen, flagged. R1-R4 predict eps <~ 2e-4 (R1-R3 <~ 1.5e-5): invisible.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0","R5"]},
          {"label": "not seen", "regions": ["R1","R2","R3","R4"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R5",
          "name": "A' signal-strength measurement at LHCb",
          "observable": "sigma x BR(A'->mumu) >= 0.1 pb at m 5-16 GeV ?",
          "reasoning": "R5 (eps >= 0.027) predicts a yield 100-1000x the LHCb sensitivity; R0's log-midpoint eps ~7e-4 predicts a yield near threshold, ~1000x smaller. The measured absolute rate separates them even where the masses overlap.",
          "feasibility": "LHCb prompt-dimuon cross-section measurement, standard once a peak exists; improvement factor 1x. Dominant systematic: luminosity and efficiency (~few %), negligible vs the 3-decade signal gap.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R5"]},
            {"label": "no", "regions": ["R0"]}
          ]
        },
        {
          "attach_to": "R1+R2+R3+R4",
          "name": "Muon-beam missing-momentum A' scan",
          "observable": "A' signal with eps >= 2e-5, m(A') ~ 1-2 GeV ?",
          "reasoning": "R4 predicts eps = 6.2e-5-1.9e-4 at MZp 1.5-2.1 GeV -- 3-10x above an eps=2e-5 scan. R1, R2, R3 predict eps <~ 1.5e-5 (mostly ~1e-6): below reach.",
          "feasibility": "Closest: LDMX/M3 (eps to 3e-6 at m<0.3 GeV); needs ~3-5x mass extension to ~2 GeV. Dominant systematic: photo-nuclear backgrounds.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R4"]},
            {"label": "not seen", "regions": ["R1","R2","R3"]}
          ]
        },
        {
          "attach_to": "R1+R2+R3",
          "name": "CTA deep-GC annihilation-channel spectroscopy",
          "observable": "gamma spectrum peak energy <= 0.05 x 600 GeV = 30 GeV (cascade-soft) ?",
          "reasoning": "R2 (gU1p~0.25, portal alpha1~0.003) annihilates dominantly to Z'Z' with ~1 GeV Z' -> soft cascade spectrum peaking below ~30 GeV; R3 (gU1p=0.023, alpha1~0.036) annihilates through the Higgs portal -> hard WW-like spectrum peaking at ~0.1 MDM. R1 (gU1p 0.035-0.21) is mixed; assigned cascade, flagged. Marginal: leaf flux is only 1-10x the CTA limit, so shape discrimination is statistics-starved.",
          "feasibility": "Closest: CTA (dE/E ~7%, ~500 h GC survey); needs ~3x nominal exposure (~1500-3000 h) for shape discrimination at threshold flux. Dominant systematic: GC diffuse-emission model.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "cascade", "regions": ["R1","R2"]},
            {"label": "direct", "regions": ["R3"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_no_no",
      "lit_review": {
        "name": "Visible dark-photon search (BaBar/LHCb/Belle II)",
        "observable": "A'->l+l- resonance at m ~ 1-6 GeV, eps >= 1e-3 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "R2 (eps 3.2e-3-1e-2) and R4 (5.5e-3-2.4e-2) at MZp ~1 GeV sit in the BaBar band -- partly already excluded; recast of existing data. All other regions: R0 has MZp=986 GeV (out of window); R1, R3, R5-R11 have eps <~ 1.3e-4 (mostly ~1e-6) at MZp 1-6 GeV -- 10-1000x below any visible-search reach.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R2","R4"]},
          {"label": "not seen", "regions": ["R0","R1","R3","R5","R6","R7","R8","R9","R10","R11"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R3+R5+R6+R7+R8+R9+R10+R11",
          "name": "FCC-ee Tera-Z electroweak Z-Z' mixing fit",
          "observable": "Z-pole shift equivalent to eps >= 5e-3 at MZp ~ 1 TeV ?",
          "reasoning": "R0 (501 pts) predicts eps = 0.068 at MZp = 986 GeV -- at the edge of current EWPO sensitivity and a factor ~10 inside Tera-Z reach (eps ~ few e-3 to 1e-2 at 1 TeV). All other regions predict eps <= 1.3e-4 with MZp ~ 1-6 GeV, where the induced Z-pole shift is 100-10000x smaller: unobservable.",
          "feasibility": "Closest: LEP EWPO (eps <~ 0.03-0.07 depending on MZp); FCC-ee Tera-Z improves sin2thetaeff/mZ precision ~30-100x, i.e. eps reach ~10x. Requires FCC-ee. Dominant systematic: higher-order electroweak theory uncertainties.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R0"]},
            {"label": "no", "regions": ["R1","R3","R5","R6","R7","R8","R9","R10","R11"]}
          ]
        },
        {
          "attach_to": "R1+R3+R5+R6+R7+R8+R9+R10+R11",
          "name": "Muon-beam missing-momentum A' scan",
          "observable": "A' signal with eps >= 1e-5, m(A') ~ 1-6 GeV ?",
          "reasoning": "R9 predicts eps = 6.5e-5-1.3e-4 at MZp ~ 1 GeV: 6-13x above an eps=1e-5 scan. R1 straddles (upper edge 1.2e-4, midpoint ~1e-5) -- assigned no, flagged. R3, R5-R8, R10, R11 predict eps ~ 1e-6-1e-5: below reach. Residues differ mainly in quartics at MZp~1 GeV; honestly degenerate.",
          "feasibility": "Closest: LDMX/M3, SHiP; needs GeV-scale mass reach at eps~1e-5 (~3-10x beyond proposals). Dominant systematic: missing-momentum fakes.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R9"]},
            {"label": "not seen", "regions": ["R1","R3","R5","R6","R7","R8","R10","R11"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes_yes_no",
      "lit_review": {
        "name": "CTA Galactic-centre spectral endpoint",
        "observable": "gamma-ray cutoff energy >= 90 GeV ?",
        "refs": ["arXiv:2007.16129"],
        "reasoning": "All regions have eps <= 1.5e-4 (dark-photon searches blind), but the leaf is bright (sigmav 10-100x CTA WW), enabling a spectral fit. Predicted cutoff = MDM: R1 = 94.8 GeV; R0/R3 = 80.4 GeV; R2 = 85.5 GeV; R4 = 76.6-79.1 GeV. Honest flag: the R1-R2 gap (9.3 GeV) is ~1 sigma_E at ~10% resolution near 90 GeV -- a marginal split that needs full bright-source statistics; it is nonetheless the only literature observable that responds at all here.",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes", "regions": ["R1"]},
          {"label": "no", "regions": ["R0","R2","R3","R4"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2+R3+R4",
          "name": "SHiP-class beam-dump A' scan",
          "observable": "A' signal with eps >= 1e-5, m(A') <= 10 GeV ?",
          "reasoning": "R2 predicts eps = 4e-5-1.5e-4 at MZp 3.7-8.2 GeV: 4-15x above the cut. R0/R3 predict eps ~ 1e-6 and R4 predicts eps ~ 5-8e-6 at MZp 12-20 GeV (also above SHiP's mass reach): unobservable.",
          "feasibility": "Closest: SHiP proposal (eps 1e-6-1e-4 for m <~ 3 GeV); needs ~2-3x mass extension to 8 GeV. Dominant systematic: muon-induced backgrounds in the decay volume.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R2"]},
            {"label": "not seen", "regions": ["R0","R3","R4"]}
          ]
        },
        {
          "attach_to": "R0+R3+R4",
          "name": "Directional DD recoil-spectrum mass determination",
          "observable": "DM mass from nuclear-recoil spectrum < 80 GeV ?",
          "reasoning": "R4 predicts MDM = 76.6-79.1 GeV vs 80.4 GeV for R0 and R3 -- a 2-5% mass difference. R0 vs R3 have identical MDM, MZp-class, gU1p and eps, differing only in the si quartic alpha6 (7.6-10 vs 0.2): no realistic experiment separates them; they stay merged on the 'no' branch.",
          "feasibility": "Closest: XENONnT/DARWIN (keV-scale recoil resolution). Mass reconstruction at ~80 GeV from spectral shape is degenerate with the halo velocity distribution; a +-2 GeV determination needs >~10x DARWIN exposure plus directional information (CYGNUS-class) to fix astrophysics. Dominant systematic: velocity-distribution uncertainty.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R4"]},
            {"label": "no", "regions": ["R0","R3"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes_no_no_no",
      "lit_review": {
        "name": "Visible dark-photon search (BaBar/LHCb/Belle II)",
        "observable": "A'->l+l- resonance, eps >= 3e-4, 0.2 < m(A') < 70 GeV ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "Seen-side predictions at or far above published sensitivity: R8 (eps 0.022-0.1 at 1 GeV, BaBar-excluded band), R10 (3.8e-3-4.4e-2 at 3-33 GeV), R14 (0.012-0.048 at 8-20 GeV), R20/R34/R39/R43/R49/R58 (eps ~ 0.1 in-window), R25 (0.027-0.047). Not-seen: eps ~1e-6 regions (R7, R26, R40, R41, R47, R56, ...) and R62 (MZp = 104.7 GeV, outside window despite eps up to 1.1e-2; flagged -- high-mass Drell-Yan is catalog territory). Straddlers flagged: R1 (319 pts, eps 1e-6-0.1, midpoint 3e-4 -> seen, most uncertain call in this leaf); R0 (midpoint 1.6e-4 -> not seen); R12, R16, R17, R33, R63 marginal.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1","R5","R8","R9","R10","R13","R14","R16","R17","R18","R20","R23","R25","R34","R35","R36","R38","R39","R43","R44","R49","R50","R51","R54","R57","R58"]},
          {"label": "not seen", "regions": ["R0","R2","R3","R4","R6","R7","R11","R12","R15","R19","R21","R22","R24","R26","R27","R28","R29","R30","R31","R32","R33","R37","R40","R41","R42","R45","R46","R47","R48","R52","R53","R55","R56","R59","R60","R61","R62","R63"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R5+R8+R9+R10+R13+R14+R16+R17+R18+R20+R23+R25+R34+R35+R36+R38+R39+R43+R44+R49+R50+R51+R54+R57+R58",
          "name": "A' lineshape spectroscopy",
          "observable": "m(A'->mumu) >= 10 GeV ?",
          "reasoning": "Predicted resonance masses bin the regions: R13 (23-58 GeV), R5 (19-43), R16 (32-90), R20 (30-46), R43 (17-23), R49 (15-29), R54 (14-61) vs R1/R8/R38/R39/R44 (~1 GeV), R18 (1-8), R9 (3.5-11), R50 (5-9), R57 (5.5-14), R58 (5-8). Wide regions (R10, R35, R51) straddle the bin and are assigned by geometric-mean MZp; flagged.",
          "feasibility": "LHCb dimuon resolution ~0.5%; improvement factor 1x once seen. Dominant systematic: none material.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "high mass", "regions": ["R5","R10","R13","R14","R16","R17","R20","R23","R25","R34","R36","R43","R49","R54"]},
            {"label": "low mass", "regions": ["R1","R8","R9","R18","R35","R38","R39","R44","R50","R51","R57","R58"]}
          ]
        },
        {
          "attach_to": "R0+R2+R3+R4+R6+R7+R11+R12+R15+R19+R21+R22+R24+R26+R27+R28+R29+R30+R31+R32+R33+R37+R40+R41+R42+R45+R46+R47+R48+R52+R53+R55+R56+R59+R60+R61+R62+R63",
          "name": "Muon-beam missing-momentum / SHiP-class A' scan",
          "observable": "A' signal with eps >= 1e-5, m(A') <= 10 GeV ?",
          "reasoning": "Yes-side predictions: R0 (eps midpoint 1.6e-4, MZp mostly <10 GeV), R3, R15, R19, R21, R45, R46, R48 (midpoints 1.6e-5-1e-4 at MZp ~ 1 GeV), R29 (1.1e-5 at ~8 GeV, marginal). No-side: 29 regions with eps <~ 1e-5 (many ~1e-6) or MZp above the mass window (R22 ~110 GeV, R62 104.7 GeV, R33 ~35 GeV). Remaining sub-groups differ mainly in dark quartics; honestly degenerate.",
          "feasibility": "Closest: LDMX/M3 + SHiP; needs ~10x mass reach at eps~1e-5. Dominant systematic: missing-momentum fakes / decay-volume backgrounds.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0","R3","R15","R19","R21","R29","R45","R46","R48"]},
            {"label": "not seen", "regions": ["R2","R4","R6","R7","R11","R12","R22","R24","R26","R27","R28","R30","R31","R32","R33","R37","R40","R41","R42","R47","R52","R53","R55","R56","R59","R60","R61","R62","R63"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_yes_yes_no",
      "lit_review": {
        "name": "Visible dark-photon search (BaBar/LHCb/Belle II)",
        "observable": "A'->l+l- resonance at m ~ 1-4 GeV, eps >= 1e-3 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "MDM is pinned at 96.4 GeV in every region, so this leaf is a pure mediator-side degeneracy (MZp spans 1 GeV-10 TeV, gU1p 0.003-12.6). R9 (eps 0.015-0.1, MZp 1-3.6 GeV), R24 (0.1 at 1 GeV), R26 (0.017-0.1 at 1-3.6 GeV) all sit in the BaBar already-excluded band: a recast of data in hand resolves them. All 31 other regions predict eps <~ 1e-4 or MZp >= 40 GeV-10 TeV: nothing visible.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R9","R24","R26"]},
          {"label": "not seen", "regions": ["R0","R1","R2","R3","R4","R5","R6","R7","R8","R10","R11","R12","R13","R14","R15","R16","R17","R18","R19","R20","R21","R22","R23","R25","R27","R28","R29","R30","R31","R32","R33"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R9+R24+R26",
          "name": "A' lineshape spectroscopy",
          "observable": "m(A'->l+l-) = 1.00 +- 0.05 GeV ?",
          "reasoning": "R24 predicts exactly 1.0 GeV; R9 and R26 predict 1-3.6 GeV. Flagged marginal: R9/R26 ranges include 1 GeV, so only a peak clearly above 1.05 GeV is decisive. R9 vs R26 differ only in alpha3/alpha5 quartics and remain merged.",
          "feasibility": "B-factory/LHCb dilepton mass resolution <<1% at 1 GeV; improvement factor 1x. Dominant systematic: none material.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R24"]},
            {"label": "no", "regions": ["R9","R26"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R7+R8+R10+R11+R12+R13+R14+R15+R16+R17+R18+R19+R20+R21+R22+R23+R25+R27+R28+R29+R30+R31+R32+R33",
          "name": "FCC-hh 100 TeV high-mass dilepton scan",
          "observable": "Drell-Yan Z' peak, eps >= 3e-3, 0.1 < m < 10 TeV ?",
          "reasoning": "R22 (eps 0.054-0.1 at 5.3-10 TeV), R31 (0.1 at 10 TeV), R27 (3e-3 at 10 TeV, marginal), R15 (5.2e-3 at 0.24-1.8 TeV) predict observable high-mass dilepton bumps at FCC-hh. The other 27 regions predict rates 100-1e6x smaller (eps <~ 1e-4 at TeV masses, or GeV-scale MZp with tiny eps). Residue differs dominantly in gU1p (0.003-12.6) and quartics, which are invisible at fixed eps and annihilation topology -- honestly unresolved.",
          "feasibility": "Closest: ATLAS/CMS Drell-Yan (reach ~6 TeV, eps >~ 0.1 at multi-TeV). FCC-hh 30 ab-1 extends to ~10 TeV at eps ~ few e-3, ~30x in rate reach; requires a next-generation collider. Dominant systematic: high-mass PDF uncertainties.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R15","R22","R27","R31"]},
            {"label": "not seen", "regions": ["R0","R1","R2","R3","R4","R5","R6","R7","R8","R10","R11","R12","R13","R14","R16","R17","R18","R19","R20","R21","R23","R25","R28","R29","R30","R32","R33"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_yes_no_no",
      "lit_review": {
        "name": "Visible dark-photon search (BaBar/LHCb/Belle II)",
        "observable": "A'->l+l- resonance, eps >= 3e-4, 0.2 < m(A') < 70 GeV ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "Seen-side predictions: R8/R24 (eps=0.1 at 1 GeV) and R19 (3.8e-3-1.4e-2 at 1 GeV) and R37 (~3e-3 at 1 GeV) in the BaBar band (already-excluded territory); R40 (0.1 at 17.6-36.6 GeV) and R48 (0.083-0.1 at 3.4-7.9 GeV) deep in LHCb's band; R17 (3.2-8.3e-4 at 2.4-5.5 GeV) just above reach; R7, R30 marginal (midpoints ~4e-4 at 1 GeV, flagged). Not-seen: all MZp = 0.1-10 TeV regions regardless of eps (R3, R6, R9, R10, R13, R14, R16, R25, R26, R29, R36, R41-R44, R46, R49-R52, ...) and the eps ~1e-6 light-MZp regions.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R7","R8","R17","R19","R24","R30","R37","R40","R48"]},
          {"label": "not seen", "regions": ["R0","R1","R2","R3","R4","R5","R6","R9","R10","R11","R12","R13","R14","R15","R16","R18","R20","R21","R22","R23","R25","R26","R27","R28","R29","R31","R32","R33","R34","R35","R36","R38","R39","R41","R42","R43","R44","R45","R46","R47","R49","R50","R51","R52"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R7+R8+R17+R19+R24+R30+R37+R40+R48",
          "name": "A' lineshape spectroscopy",
          "observable": "m(A'->mumu) >= 3 GeV ?",
          "reasoning": "R40 predicts 17.6-36.6 GeV, R48 predicts 3.4-7.9 GeV, R17 predicts 2.4-5.5 GeV (straddles the cut, assigned high, flagged); R7, R8, R19, R24, R30, R37 all predict ~1 GeV. The ~1 GeV six-region cluster differs mainly in eps normalization (0.1 vs ~4e-4) which the measured signal strength also resolves partially (noted, not drawn).",
          "feasibility": "LHCb dimuon resolution ~0.5%; improvement factor 1x. Dominant systematic: none material.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "high mass", "regions": ["R17","R40","R48"]},
            {"label": "low mass", "regions": ["R7","R8","R19","R24","R30","R37"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R5+R6+R9+R10+R11+R12+R13+R14+R15+R16+R18+R20+R21+R22+R23+R25+R26+R27+R28+R29+R31+R32+R33+R34+R35+R36+R38+R39+R41+R42+R43+R44+R45+R46+R47+R49+R50+R51+R52",
          "name": "Muon-beam missing-momentum / SHiP-class A' scan",
          "observable": "A' signal with eps >= 1e-5, m(A') <= 10 GeV ?",
          "reasoning": "Yes-side: R0 (midpoint 4.4e-5 at 1 GeV, straddler-flagged), R2, R21, R23, R38, R39, R47 (eps midpoints 1.3e-5-2.5e-4 at MZp 1-5 GeV). No-side: 37 regions that are either TeV-scale in MZp (unreachable by any beam experiment) or eps <~ 1e-5.",
          "feasibility": "Closest: LDMX/M3 + SHiP; ~10x mass-reach extension needed. Dominant systematic: missing-momentum fakes.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R0","R2","R21","R23","R38","R39","R47"]},
            {"label": "not seen", "regions": ["R1","R3","R4","R5","R6","R9","R10","R11","R12","R13","R14","R15","R16","R18","R20","R22","R25","R26","R27","R28","R29","R31","R32","R33","R34","R35","R36","R41","R42","R43","R44","R45","R46","R49","R50","R51","R52"]}
          ]
        },
        {
          "attach_to": "R1+R3+R4+R5+R6+R9+R10+R11+R12+R13+R14+R15+R16+R18+R20+R22+R25+R26+R27+R28+R29+R31+R32+R33+R34+R35+R36+R41+R42+R43+R44+R45+R46+R49+R50+R51+R52",
          "name": "FCC-hh 100 TeV high-mass dilepton scan",
          "observable": "Drell-Yan Z' peak, eps >= 3e-3, 0.1 < m < 10 TeV ?",
          "reasoning": "R43 predicts eps = 0.029-0.1 at MZp 6.9-10 TeV: an observable FCC-hh dilepton bump. All 36 other regions predict eps <~ 1e-3 at TeV masses or GeV-scale MZp with sub-1e-5 eps: rates 100-1e6x below reach. The surviving 36-region residue differs dominantly in gU1p and dark quartics at fixed MDM = 97.6 GeV -- honestly unresolved.",
          "feasibility": "Closest: ATLAS/CMS Drell-Yan; FCC-hh gives ~30x rate reach at 10 TeV; requires next-generation collider. Dominant systematic: high-mass PDFs.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R43"]},
            {"label": "not seen", "regions": ["R1","R3","R4","R5","R6","R9","R10","R11","R12","R13","R14","R15","R16","R18","R20","R22","R25","R26","R27","R28","R29","R31","R32","R33","R34","R35","R36","R41","R42","R44","R45","R46","R49","R50","R51","R52"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_no_yes_yes_yes_yes",
      "lit_review": {
        "name": "Visible dark-photon search (BaBar/LHCb)",
        "observable": "A'->l+l- resonance, eps >= 3e-4, m 7-35 GeV ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926"],
        "reasoning": "Honest failure. Both regions predict eps ~ 1e-6 -- yields ~1e6 below BaBar/LHCb sensitivity at their MZp (34.5 GeV for R0; 7.3-17.2 GeV for R1). MDM overlaps (67.5 vs 68.2-72.0 GeV, a 1-7% gap below any spectral or recoil resolution), gU1p is identical (0.148), and all catalog bins coincide. No literature measurement responds differently between R0 and R1.",
        "status": "No Split!",
        "outcomes": [
          {"label": "not seen", "regions": ["R0","R1"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1",
          "name": "Deep-GC gamma cascade-shoulder spectroscopy",
          "observable": "secondary spectral shoulder above 15 GeV in GC gamma spectrum ?",
          "reasoning": "The only observably different parameter is MZp. Both regions have the same alpha_D ~ 1.7e-3, hence the same (subdominant) srsr->Z'Z' cascade fraction, but R0's 34.5 GeV Z' produces a hard cascade shoulder extending to ~62 GeV with lower edge ~6 GeV, while R1's 7-17 GeV Z' gives a soft continuum concentrated below ~15 GeV, on top of the common bb spectrum (endpoint ~68-72 GeV).",
          "feasibility": "Closest: CTA (dE/E ~7-10% at 20-70 GeV) on a source at 10-100x the CTA bb limit. The cascade branching is alpha_D-suppressed and may be only percent-level of the flux, requiring >>10x the nominal GC exposure and percent-level control of the GC diffuse model (the dominant systematic).",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0"]},
            {"label": "no", "regions": ["R1"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_no_yes_yes_no_no",
      "lit_review": {
        "name": "LHCb prompt dark-photon search",
        "observable": "A'->mumu resonance at m ~ 17 GeV, eps >= 1e-3 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1406.2980"],
        "reasoning": "R3 predicts eps = 0.025-0.1 at MZp = 17.1 GeV -- 25-100x above LHCb's published prompt sensitivity: the resonance appears in existing data or the region dies; either way it separates. All other regions predict eps <= 2.7e-4 (R0: <=3.3e-6, R1: 1.9-4.2e-5, R2: 1.6e-6, R4: 4e-5-2.7e-4 at ~1 GeV -- just below reach, flagged marginal; R5: ~3.9e-5).",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R3"]},
          {"label": "not seen", "regions": ["R0","R1","R2","R4","R5"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R4+R5",
          "name": "GC gamma-ray spectral endpoint (Fermi-LAT-class / AMEGO-X)",
          "observable": "gamma-ray cutoff energy >= 20 GeV ?",
          "reasoning": "R4 predicts endpoint = MDM = 10.4 GeV; R0 (44-74), R1 (71.5-72), R2 (54-56), R5 (71-72.5) predict >= 44 GeV -- a 4x separation trivially resolved at ~8% energy resolution given this leaf's bright bb signal (10-100x CTA bb).",
          "feasibility": "Closest: Fermi-LAT (dE/E ~8%, 15-yr GC dataset already in hand); AMEGO-X-class would sharpen the low-energy side. Improvement factor ~1x -- this is essentially an archival reanalysis. Dominant systematic: GC diffuse foreground.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R0","R1","R2","R5"]},
            {"label": "no", "regions": ["R4"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R5",
          "name": "Muon-beam missing-momentum A' scan",
          "observable": "A' signal with eps >= 1e-5, m(A') <= 20 GeV ?",
          "reasoning": "R1 (eps 1.9-4.2e-5 at MZp 11-19 GeV) and R5 (~3.9e-5 at 5-13 GeV) predict signals 2-4x above the cut; R0 (<=3.3e-6) and R2 (1.6e-6) are 3-10x below. Residues: R1 vs R5 would separate on A' mass if seen (11-19 vs 5-13 GeV, partial overlap); R0 vs R2 (MDM 44-74 vs 54-56 GeV, both mediator-invisible) remain honestly degenerate.",
          "feasibility": "Closest: LDMX/M3; needs ~10-20x mass reach (to ~20 GeV) at eps ~ 1e-5, beyond any proposal. Dominant systematic: missing-momentum fakes.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "seen", "regions": ["R1","R5"]},
            {"label": "not seen", "regions": ["R0","R2"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_no_yes_no_no_yes_yes",
      "lit_review": {
        "name": "BaBar/Belle II visible dark-photon search",
        "observable": "A'->l+l- at m ~ 1 GeV, eps >= 1e-3 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1808.10567", "arXiv:1910.06926"],
        "reasoning": "All regions share MDM ~ 3.4 GeV, MZp ~ 1 GeV, gU1p ~ 0.037; they differ essentially only in eps. R0 (0.032) and R1 (0.1) are ~1.5 orders inside BaBar's excluded band -- recast of existing data decides immediately. R2 (~1e-6), R3 (6e-5-1.8e-4, just under LHCb's displaced reach at 1 GeV -- flagged marginal), R4 (1-5e-6) predict nothing visible.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0","R1"]},
          {"label": "not seen", "regions": ["R2","R3","R4"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R2+R3+R4",
          "name": "DarkQuest/LDMX-class eps scan at 1 GeV",
          "observable": "A' signal with eps >= 2e-5, m(A') ~ 1 GeV ?",
          "reasoning": "R3 predicts eps = 6e-5-1.8e-4: 3-9x above the cut. R2 and R4 predict eps <= 5e-6: below reach. R2 vs R4 then differ only in quartic pattern (alpha6-dominated vs alpha4+alpha6-large) -- honestly unresolvable.",
          "feasibility": "Closest: LDMX (eps to 3e-6 at m < 0.3 GeV), DarkQuest; needs ~3x mass extension to 1 GeV at eps ~ 2e-5, within the envelope of proposed upgrades. Dominant systematic: beam-dump combinatorial backgrounds.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R3"]},
            {"label": "not seen", "regions": ["R2","R4"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_no_no_yes_yes_no_no",
      "lit_review": {
        "name": "Visible dark-photon search (BaBar/LHCb)",
        "observable": "A'->l+l- resonance at m ~ 1-21 GeV, eps >= 1e-3 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "R1 (eps 1.5e-3-2.8e-2 at ~1 GeV), R2 (8.9e-3 at 1.25 GeV) sit inside BaBar's excluded band; R4 (0.072 at MZp = 21 GeV) is deep in LHCb's prompt window (its gU1p ~ 10 / alpha_D ~ 8 is invisible here but noted). Predictions on the other side: R0 straddles (eps 1e-6-1.5e-3, midpoint ~4e-5 -> not seen, flagged); R3 (3e-5-1.8e-4), R5-R8 (<~3e-5): all below reach.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1","R2","R4"]},
          {"label": "not seen", "regions": ["R0","R3","R5","R6","R7","R8"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R3+R5+R6+R7+R8",
          "name": "DarkQuest/LDMX-class eps scan at 1 GeV",
          "observable": "A' signal with eps >= 1e-5, m(A') ~ 1 GeV ?",
          "reasoning": "R3 predicts eps = 3e-5-1.8e-4 (3-18x above cut); R7 midpoint ~1.2e-5 (marginal yes); R0 midpoint ~4e-5 (straddler, flagged). R5, R6, R8 predict eps <= 8e-6: below. Residues differ in quartics only at identical MDM ~1 GeV, MZp = 1 GeV, gU1p ~ 0.031 -- honestly degenerate.",
          "feasibility": "Closest: LDMX/DarkQuest; ~3x mass extension to 1 GeV at eps 1e-5, near proposed-upgrade envelope. Dominant systematic: combinatorial dump backgrounds.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R0","R3","R7"]},
            {"label": "not seen", "regions": ["R5","R6","R8"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_no_no_yes_no_no",
      "lit_review": {
        "name": "BaBar visible dark-photon search",
        "observable": "A'->l+l- at m ~ 3-4 GeV, eps >= 1e-3 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926"],
        "reasoning": "R2 predicts eps = 0.025-0.081 at MZp 3.1-4.2 GeV -- >=1.5 orders inside BaBar's excluded band; existing data decides. R0 (eps <= 3.4e-6) and R1 (1.3-1.5e-4 at ~1 GeV, a factor 2-3 below Belle II's projected 3e-4) predict nothing visible.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R2"]},
          {"label": "not seen", "regions": ["R0","R1"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1",
          "name": "DarkQuest/LDMX-class eps scan at 1 GeV",
          "observable": "A' signal with eps >= 1e-5, m(A') ~ 1 GeV ?",
          "reasoning": "R1 predicts eps = 1.3-1.5e-4: 13-15x above the cut. R0 predicts eps <= 3.4e-6: ~3x below. Clean two-sided separation.",
          "feasibility": "Closest: LDMX/DarkQuest; ~3x mass extension to 1 GeV at eps 1e-5. Dominant systematic: dump backgrounds.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R1"]},
            {"label": "not seen", "regions": ["R0"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_no_no_no_yes",
      "lit_review": {
        "name": "Visible dark-photon search (BaBar/LHCb/Belle II)",
        "observable": "A'->l+l- resonance at m ~ 1-15 GeV, eps >= 1e-3 ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926", "arXiv:1808.10567"],
        "reasoning": "Seen-side predictions: R1 (eps 1.5e-3-9.8e-3), R9 (3-5.6e-3), R14 (3-4.5e-3) at MZp ~ 1 GeV (BaBar band); R15 (eps = 0.1 at MZp = 14.4 GeV, LHCb prompt band); R5 (3.7e-4-5e-3, midpoint 1.4e-3). Not-seen: 17 regions with eps midpoints 1e-6-3e-4; R0 is the big straddler (eps 4.6e-6-2.1e-2, midpoint ~3e-4 -> not seen, flagged as this leaf's most uncertain call).",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R1","R5","R9","R14","R15"]},
          {"label": "not seen", "regions": ["R0","R2","R3","R4","R6","R7","R8","R10","R11","R12","R13","R16","R17","R18","R19","R20","R21"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2+R3+R4+R6+R7+R8+R10+R11+R12+R13+R16+R17+R18+R19+R20+R21",
          "name": "DarkQuest/LDMX-class eps scan at 1 GeV",
          "observable": "A' signal with eps >= 3e-5, m(A') ~ 1 GeV ?",
          "reasoning": "Yes-side: R0 (straddler, flagged), R6 (4.6e-5), R16, R17, R20 (midpoints 1.7-2.8e-4). No-side: R2, R3, R4, R7, R8, R10-R13, R18, R19, R21 (eps <~ 1e-5, mostly ~1e-6). The no-side residue is the quartic-only degeneracy at MZp = 1 GeV, gU1p ~ 0.031 -- honestly unresolved.",
          "feasibility": "Closest: LDMX/DarkQuest; ~3x mass extension to 1 GeV at eps 3e-5. Dominant systematic: dump backgrounds.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R0","R6","R16","R17","R20"]},
            {"label": "not seen", "regions": ["R2","R3","R4","R7","R8","R10","R11","R12","R13","R18","R19","R21"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_no_no_no_no_no",
      "lit_review": {
        "name": "Visible dark-photon search (BaBar/LHCb)",
        "observable": "A'->l+l- resonance, eps >= 3e-4, 0.2 < m(A') < 70 GeV ?",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926"],
        "reasoning": "Honest failure: the all-null leaf. R0 predicts eps <= 1.8e-6 at MZp 1.2-2.6 GeV (below even SHiP); R1/R2 predict a 145.7 GeV Z' at eps <= 1.4e-5, ~1000x below any Drell-Yan or EWPO reach. No catalog observable fires and no literature measurement responds differently across the three regions.",
        "status": "No Split!",
        "outcomes": [
          {"label": "not seen", "regions": ["R0","R1","R2"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2",
          "name": "Post-neutrino-fog direct detection (directional / paleo)",
          "observable": "sigma_SI >= 1e-48 cm^2 at M ~ 100-300 GeV ?",
          "reasoning": "The one order-of-magnitude difference between regions is the Higgs-portal sigma_SI: R0 (alpha1 = 0.005-0.012 at MDM ~ 300 GeV) predicts ~1e-48 cm^2 (few e-49 to 6e-48); R1/R2 (alpha1 ~ 0.0010-0.0015 at 127.5 GeV) predict ~2e-49 cm^2. Both are below DARWIN (consistent with this leaf) and at/under the neutrino fog. R1 vs R2 differ only by an eps shift (2e-6 vs 1.4e-5, both far below every conceivable probe) plus quartics -- no concept known to me separates them; they stay merged.",
          "feasibility": "Closest: DARWIN (reach ~3e-49 cm^2 at 100-300 GeV, fog-limited). Requires >=10x beyond proposed instruments with directional (CYGNUS-class) or paleo-detector fog rejection. Dominant systematic: the atmospheric/solar-neutrino floor itself.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R0"]},
            {"label": "no", "regions": ["R1","R2"]}
          ]
        }
      ]
    }
  ]
}
```