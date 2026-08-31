I'll verify the arXiv references I plan to cite, then deliver the full analysis and JSON in one message. Loading the web tools first:
Verifying the seven arXiv IDs I plan to cite:
Six of seven IDs check out; 0708.1517 was wrong (a galaxy power-spectrum paper), so let me find the correct WIMP-mass-determination reference:
All references verified (the WIMP-mass paper is [arXiv:hep-ph/0703217](https://arxiv.org/abs/hep-ph/0703217), not the ID I first guessed; all others resolved with matching titles). Here is the complete degeneracy-breaking analysis.

---

# Reasoning

## Physics overview

Every degenerate leaf of this model is spanned by the same eight parameters, and the key observation is which of them our 18-observable catalog is *blind* to. The catalog sees: σ_SI (portal α1 + Z′-exchange combination), solar-capture ν flux, BR(h→inv), HL-LHC topologies, and a high-mass Z′-dilepton recast. It does **not** see: (a) the **low-mass prompt dark-photon dimuon window** (LHCb A′→μμ, [arXiv:1910.06926](https://arxiv.org/abs/1910.06926), current reach ε ≈ 2×10⁻⁴–10⁻³ over 0.21–70 GeV; CMS scouting extends 11.5–200 GeV at ε ≈ 3×10⁻³–10⁻², [arXiv:1912.04776](https://arxiv.org/abs/1912.04776); LHCb Upgrade II projects ~3× further, [arXiv:1808.08865](https://arxiv.org/abs/1808.08865)); (b) the **shape** of the direct-detection recoil spectrum (mass information, not just rate); (c) anything sensitive to the dark quartics α2, α3, α4.

Since MZp ∈ [1, 165] GeV and ε ∈ [10⁻⁶, 0.1] across regions, the dimuon scan is the workhorse: the same single measurement returns *(detection, peak mass, σ·BR)*, and σ·BR ∝ ε² varies by up to 10 orders between regions. I use "σ·BR > 0.5 fb" as the approximate LHCb-UII/CMS detection floor (their ε ≈ 2–3×10⁻⁴ reach corresponds to fiducial σ·BR of order 0.1–1 fb at tens of GeV). Rough conversion used throughout: at m ~ 10–60 GeV, σ·BR(μμ) ≈ ε² × (1–3)×10⁶ fb, i.e. ε = 10⁻³ → ~1–3 pb×10⁻³ ≈ few fb; good to a factor ~3, and I flag every region whose ε range straddles the threshold.

The residual degeneracies that no ε- or MZp-based split touches are pure **dark-quartic** degeneracies (α2 = sr⁴, α3 = sr²si², α4 = si⁴). These couplings only feed DM self-scattering, σ_self/m ≈ λ²/(64π m³) ≈ 10⁻¹²–10⁻¹⁷ cm²/g for λ ~ 0.01–5 and m ~ 150–700 GeV — 12+ orders below the cluster-lensing bound σ/m ≲ 0.1–1 cm²/g. (Z′-mediated self-scattering is also hopeless here: even the lightest MZp ≈ 1 GeV with g′ ≈ 0.4 gives σ/m ~ 10⁻⁷ cm²/g.) Where a leaf reduces to quartics only, I say so and attach an honestly-speculative Level-2 node.

## Leaf `root_yes_yes_yes_no` (R0, R1)

R0 and R1 overlap in MDM but have cleanly disjoint Z′ masses: R0 MZp ∈ [38.9, 39.7] GeV, R1 MZp ∈ [57.8, 59.6] GeV — and R1 has large mixing ε ∈ [0.011, 0.028], at or above *current* LHCb prompt limits (ε ≈ 10⁻³ at 60 GeV), so its dimuon peak carries σ·BR ~ 0.3–2 pb, hundreds of times the Upgrade II floor. A mass-window cut is therefore decision-perfect: **a μμ peak inside 48–70 GeV with σ·BR > 0.2 fb** fires for every R1 point and for no R0 point — R0's resonance sits at ~39 GeV, outside the window, regardless of whether it is bright enough to see (its ε spans 3.7×10⁻⁵–3×10⁻³, so the upper tail of R0 would produce a *visible* peak at 39 GeV — still a "no" for the window cut, which is why I cut on mass, not on detection). No marginality in the split itself; fully separates. No novel node needed.

## Leaf `root_yes_yes_no` (R0–R6)

Masses overlap heavily (everything sits in MZp ~ 15–165 GeV), so mass windows fail; detection is the axis. Log-median ε per region: R0 ≈ 1.6×10⁻², R1 ≈ 4.6×10⁻³, R2 ≈ 4.7×10⁻³, R3 ≈ 2.4×10⁻² (MZp up to 130 → covered by CMS scouting at ε ≥ 1.3×10⁻²), R5 ≈ 3.1×10⁻² → all give σ·BR ≫ 0.5 fb → **seen**. R4 (ε 4×10⁻⁴–1.4×10⁻³, MZp 41–165) and R6 (ε 7–9.6×10⁻⁵) → **not seen**. Marginality: the low-ε tails of R1/R2 (2.5–3.5×10⁻⁴) dip to the threshold, and R4's upper tail at MZp < 70 GeV would be visible at Upgrade II — R4 is the one genuinely borderline assignment, placed "not seen" on its median.

Level 2, unseen pair {R4, R6}: their ε differ by ~10×. A radiative-return γ+μμ scan at a Tera-Z e⁺e⁻ factory (FCC-ee-class, ~6×10¹² Z) reaches ε ~ 10⁻⁴ for MZp < MZ, right between them: R4 predicts σ(e⁺e⁻→γZ′→γμμ) ~ 0.1–1 fb → thousands of events; R6 (ε² ≈ 5–9×10⁻⁹) sits ~3–10× below reach. Caveats: R6's top edge (9.6×10⁻⁵) is within a factor ~1.5 of the projected floor, and the fraction of R4 with MZp > 91 GeV needs the (weaker) 161/240 GeV runs.

Level 2, seen quintet {R0, R1, R2, R3, R5}: once seen, mass and rate overlap region-to-region; the *only* surviving distinction is the dark quartics — R2 (α3 ~ 0.2–7.7) and R5 (α4 ~ 0.6–1.7, α2 ~ 0.2–1) are strongly self-coupled, versus R3 (all quartics ≲ 0.1), with R0/R1 broad but median-small. Predicted σ_self/m: R2, R5 ~ 10⁻¹⁴–3×10⁻¹³ cm²/g; R3 ≲ 10⁻¹⁶; R0/R1 medians ~ 10⁻¹⁵. This is a physical degeneracy: I attach the self-interaction node with cut σ/m > 10⁻¹⁴ cm²/g and rate it speculative (≈12 orders beyond Rubin/Euclid cluster constraints); R0/R1's upper quartic tails straddle the cut.

## Leaf `root_yes_no_yes_no` (R0–R3)

The lucky leaf: the three detectable regions have *disjoint* Z′ mass windows — R3: 2.4–4.5 GeV (ε ~ 1.5–1.9×10⁻³, ~10× above current LHCb limits there), R1: 7.5–16.2 GeV (ε ~ 6×10⁻³–5×10⁻², far above threshold), R0: 43–74 GeV (ε ~ 10⁻²–5×10⁻², σ·BR ~ 0.1–1 pb; the 70–74 GeV sliver is covered by CMS scouting). R2 (ε 2.6–4.4×10⁻⁴ at 34–62 GeV) sits within ~1.5–2× of the Upgrade II floor — assigned "no peak", flagged marginal: a faint peak near threshold would still land in R0's window in mass but ~1000× below R0's rate, so mis-assignment risk is low if the rate is also read. One four-outcome mass-scan node fully separates the leaf. No novel node needed.

## Leaf `root_yes_no_no_yes_no` (R0, R1)

These regions differ wildly, but their handles are awkward: R1's Z′ (MZp ≈ 1 GeV, ε ≈ 10⁻⁶) is invisible everywhere — cτ ≈ 3–8 cm boosted to ~1 m decay lengths, too short for far detectors (consistent with our LLP audit) and ε² = 10⁻¹² kills all prompt rates; R0's Z′ (0.36–3.4 TeV, ε = 0.1) lights up high-mass dileptons, but that is our catalog's Z′-dilepton recast — disallowed. The clean non-catalog axis is the **DM mass itself**: R0 pins MDM = 95.6 GeV, R1 pins MDM = 62.7 GeV, and both sit at σ_SI 1–10× the XLZD floor, i.e. XLZD sees O(10–100) recoil events. The recoil-spectrum slope parameter E₀ ∝ μ²/m_N differs by ~1.8× between 63 and 96 GeV on xenon — comfortably distinguishable with ≳30 events; spectral mass reconstruction below ~100 GeV is a published capability of multi-ton xenon detectors ([arXiv:hep-ph/0703217](https://arxiv.org/abs/hep-ph/0703217), [arXiv:1306.3244](https://arxiv.org/abs/1306.3244), [arXiv:2410.17137](https://arxiv.org/abs/2410.17137)). Cut: fitted M_DM < 80 GeV → R1; > 80 GeV → R0. Marginality: at the faint end of the signal band (few events) the fit degrades to ~±30%, and mass determination saturates just above 100 GeV — R0 at 96 GeV is near that soft ceiling; a signal at the 5–10× band makes this crisp. (Backup, noted for the record: R1 also predicts s-wave ⟨σv⟩(ss̄→Z′Z′) ~ 10⁻²⁶ cm³/s at 63 GeV → p_ann ~ 0.5–2×10⁻²⁸ cm³ s⁻¹ GeV⁻¹, within a factor ~3 of CMB-S4's projected energy-injection reach, while R0's g′ = 0.003 gives p_ann < 10⁻³¹ — a marginal but independent cross-check.) Fully separates; no novel node.

## Leaf `root_yes_no_no_no` (R0–R3)

All four regions are detectable in dimuons, so the split is *mass then rate*. R0 sits at MZp ≈ 1.0 GeV with ε = 0.06–0.1 — a spectacular sub-2-GeV peak (BaBar-style e⁺e⁻→γA′ territory, [arXiv:1406.2980](https://arxiv.org/abs/1406.2980), plus LHCb), σ·BR ~ nb-scale; no other region reaches below 5 GeV. R1 (5.5–21 GeV), R2 (15–66), R3 (9–16) overlap in mass but their ε² ranges are nearly disjoint ladders: R1 3×10⁻⁵–8×10⁻⁴, R2 2.6×10⁻⁶–3.6×10⁻⁵, R3 3×10⁻⁷–2×10⁻⁶ (R3's minimum ε = 5.6×10⁻⁴ still clears the Upgrade II floor at 9–16 GeV). Level-1 outcomes: peak in 0.5–2 GeV → R0; peak in 2–70 GeV → {R1, R2, R3}. Level 2: measure σ·BR of the discovered peak — approximate mapping gives R1 ≳ 300 fb (up to tens of pb), R2 ~ 3–300 fb, R3 ≲ 3 fb; ladder cuts at 300 and 3 fb wait, set at >30 / 3–30 / <3 fb: R1 > 30 fb, R2 in 3–30 fb, R3 < 3 fb. The R1/R2 and R2/R3 boundaries each carry ~2–3× theory uncertainty from the ε²→σ·BR conversion (parton fluxes, mass dependence across 5–66 GeV) — the ladder is honest but its bin edges are marginal at the ~2× level; counting events in an observed peak is itself routine (rated possible).

## Leaf `root_no_yes` (R0–R26, the monster)

All 27 regions share the IceCube-Gen2-only signature; gU1p (0.29–0.47) and MDM (317–710 GeV) are nearly common, so ε and MZp are the only external handles, and the quartics span the full prior box. Level 1 is again the dimuon scan, σ·BR > 0.5 fb (⇔ ε ≳ 2–5×10⁻⁴ over 2–200 GeV). **Seen** (median ε and coverage): R2 (2.2×10⁻³–5×10⁻²), R3 (3.7×10⁻⁴–5.2×10⁻³), R4 (5×10⁻³–0.1), R7 (3.8×10⁻²–0.1), R9 (3.7×10⁻⁴–2.3×10⁻³), R17 (2.1×10⁻³–5.5×10⁻³), R22 (0.1), R23 (4.6×10⁻²–0.1), R24 (3.7–4.9×10⁻⁴, just above floor — marginal), plus **R0**. R0 (841 points) is an umbrella cluster spanning ε ∈ [10⁻⁶, 0.1] — the full range — so *no* external cut can place it on one side; its log-median ε ≈ 3×10⁻⁴ sits exactly at threshold. I assign it "seen" and state plainly: roughly half of R0's volume falls on each side; it needs sub-clustering before any experimental split can be meaningful. **Not seen**: R1, R5, R6, R8, R10, R11, R12, R13, R14, R15, R16, R18, R19, R20, R21, R25, R26 (all median ε ≤ 1.5×10⁻⁴; R12 and R20, at 2.3–4×10⁻⁴, are threshold-marginal and assigned by median).

Level 2, seen side: rate ladder at the discovered peak. σ·BR > 30 fb (⇔ ε ≳ 5×10⁻³) → {R2, R4, R7, R22, R23} (medians ε ≥ 10⁻²); below → {R0, R3, R9, R17, R24} (R17 at ~12 fb predicted is the marginal one). Beyond this, seen-side regions overlap in every visible observable; residual structure is quartic-only.

Level 2, unseen side (17 regions): only a Tera-Z radiative-return scan reaches further down in ε (floor ~10⁻⁴). Predicted to fire: R8 (median ε ≈ 1.5×10⁻⁴), R11 (≈10⁻⁴, marginal), R12 (≈3×10⁻⁴), R20 (≈2.8×10⁻⁴); the remaining 13 regions all sit at ε ≲ 5×10⁻⁵, some at 10⁻⁶ (R16's MZp tail exceeds MZ, weakening its already-null prediction — harmless). The 13-region "no" bucket is the **physical floor of this model's degeneracy**: those regions differ almost solely in (α2, α3, α4) combinations — exactly the dark-quartic degeneracy we have previously established as unmeasurable (self-scattering predictions 10⁻¹²–10⁻¹⁷ cm²/g). I state this rather than manufacture a fake split; the Tera-Z node is rated unlikely (next-generation machine, ~5× beyond any current ε reach in this mass range).

## Leaf `root_no_no_no` (R0–R4)

Four of five regions are dimuon-visible with usable mass structure: R1 at MZp = 1.0 GeV (ε 6.4×10⁻⁴–1.3×10⁻³, ~3–6× above current LHCb limits at 1 GeV — seen, mildly marginal at the low edge), R4 at 4.3–7.3 GeV (ε ~ 2–4×10⁻², blazing), {R0, R2} overlapping at 10–25 GeV (both ε ≳ 6×10⁻³ — unambiguous), and R3 (ε ~ 10⁻⁵ at 3.4–5.1 GeV) invisible by ~10× even at Upgrade II. Four-outcome mass scan: 0.5–1.5 → R1; 3–8 → R4; 9–26 → {R0, R2}; none → R3.

Level 2, {R0, R2}: these are near-twins in *every* visible quantity — ε (0.021–0.087 vs 0.0063–0.094), MZp, MDM, gU1p all overlap — and differ only in dark quartics, with genuine gaps: α3 = 0.087–0.71 (R0) vs 1.59–3.89 (R2), α4 differing ×6 the same way. Predicted σ_self/m: R2 ~ 7×10⁻¹³ cm²/g, R0 ~ 10⁻¹⁴–7×10⁻¹⁴; cut at 2×10⁻¹³. That is ~12 orders below cluster-lensing sensitivity — speculative, and the honest terminus of this leaf.

---

```json
{
  "model": "CsSg_U1p[+]_DM.Z2",
  "leaves": [
    {
      "leaf_id": "root_yes_yes_yes_no",
      "lit_review": {
        "name": "LHCb Upgrade II prompt dark-photon dimuon scan",
        "observable": "mumu peak in 48-70 GeV with sigma*BR > 0.2 fb ?",
        "what_this_is": "The Large Hadron Collider beauty (LHCb) experiment records pairs of oppositely charged muons and scans their combined invariant mass for a narrow bump over the smooth background. A bump is the classic signature of a new short-lived neutral particle -- here the dark Z' boson, which mixes slightly with the photon, so proton collisions can produce it and it can decay to two muons. The two regions predict Z' bosons at clearly different masses (about 39 vs 58 GeV), so asking whether a bump appears in the upper mass window tells them apart regardless of how bright it is.",
        "refs": ["arXiv:1910.06926", "arXiv:1808.08865"],
        "reasoning": "R1 has MZp = 57.8-59.6 GeV with epsilon = 0.011-0.028, at or above current LHCb prompt limits (epsilon ~ 1e-3 near 60 GeV): predicted sigma*BR(mumu) ~ 0.3-2 pb, hundreds of times the Upgrade II floor (~0.1-1 fb), so a peak inside 48-70 GeV is guaranteed. R0 has MZp = 38.9-39.7 GeV: its resonance can never enter the window. Cutting on peak mass rather than detection makes the split robust even though R0's epsilon range (3.7e-5 to 3.0e-3) straddles the detection threshold -- a bright R0 point shows a 39 GeV peak, still 'no' for this window.",
        "status": "Splits!",
        "outcomes": [
          {"label": "peak 48-70", "regions": ["R1"]},
          {"label": "no/other", "regions": ["R0"]}
        ]
      },
      "novel": []
    },
    {
      "leaf_id": "root_yes_yes_no",
      "lit_review": {
        "name": "LHCb Upgrade II + CMS scouting dimuon scan",
        "observable": "mumu peak, 2-200 GeV, sigma*BR > 0.5 fb ?",
        "what_this_is": "The LHCb and Compact Muon Solenoid (CMS) experiments at the Large Hadron Collider both scan the invariant mass of muon pairs for a narrow resonance; together they cover new bosons from about 2 to 200 GeV. Such a resonance is how a dark Z' that mixes weakly with the photon would appear. The regions here have overlapping Z' masses but photon-mixing strengths differing by up to 400x, so detection versus non-detection of the peak is the discriminator.",
        "refs": ["arXiv:1910.06926", "arXiv:1912.04776", "arXiv:1808.08865"],
        "reasoning": "Detection floor sigma*BR ~ 0.5 fb corresponds to epsilon ~ 2-5e-4 (LHCb UII below 70 GeV; CMS scouting ~3e-3 up to 200 GeV). Median epsilon: R0 1.6e-2, R1 4.6e-3, R2 4.7e-3, R3 2.4e-2, R5 3.1e-2 -> sigma*BR from tens of fb to ~1 pb, seen. R4 (4e-4 to 1.4e-3, MZp 41-165 GeV) and R6 (7.0-9.6e-5) fall below -> not seen. Marginal: low-epsilon tails of R1/R2 touch the floor, and R4's upper tail below 70 GeV would be visible -- R4 assigned by median, flagged.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0", "R1", "R2", "R3", "R5"]},
          {"label": "not seen", "regions": ["R4", "R6"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R4+R6",
          "name": "Tera-Z radiative-return Z' scan",
          "observable": "e+e- -> gamma + mumu peak with sigma > 0.1 fb ?",
          "what_this_is": "A proposed circular electron-positron collider (such as FCC-ee) running on the Z-boson resonance would collect trillions of Z decays. In events where an initial electron radiates a photon, the remaining collision energy can create a dark Z' recoiling against that photon, showing up as a narrow muon-pair peak plus a photon. This clean environment reaches photon-mixing strengths several times below any hadron-collider search -- exactly the range that separates these two regions.",
          "reasoning": "R4 (epsilon 4e-4 to 1.4e-3) predicts sigma(gamma Z' -> gamma mumu) ~ 0.1-1 fb, i.e. thousands of events at ~100 ab^-1 -> seen. R6 (epsilon^2 ~ 5-9e-9) sits 3-10x below the projected epsilon ~ 1e-4 floor -> null. Caveats: R6's top edge (9.6e-5) is within ~1.5x of the floor, and the part of R4 with MZp > 91 GeV requires the weaker 161/240 GeV runs.",
          "feasibility": "Closest instrument: FCC-ee Tera-Z (proposed, ~6e12 Z). Current best epsilon sensitivity at 10-100 GeV is ~1e-3 (LHC prompt searches); required ~5x improvement to epsilon ~ 1e-4. Dominant systematic: modeling of the irreducible QED gamma+mumu continuum lineshape.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R4"]},
            {"label": "not seen", "regions": ["R6"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R5",
          "name": "Cluster-halo DM self-scattering survey",
          "observable": "sigma_self/m > 1e-14 cm^2/g ?",
          "what_this_is": "If dark matter particles scatter off each other, the shapes and mass profiles of dark-matter halos in galaxy clusters are subtly altered, which weak gravitational lensing surveys can constrain. Self-scattering is the only observable that feels the dark scalar's quartic self-couplings, which are the parameters that actually differ between these regions. The predicted effect is, however, roughly twelve orders of magnitude below current sensitivity -- this node is an honest statement of a physical degeneracy, not a realistic near-term measurement.",
          "reasoning": "After the dimuon peak is seen, these five regions overlap in mass, rate, gU1p and MDM; only the quartics differ. sigma_self/m ~ lambda^2/(64 pi m^3): R2 (alpha3 up to 7.7) and R5 (alpha4 0.6-1.7) give ~1e-14 to 3e-13 cm^2/g; R3 (quartics <~ 0.1) gives <~ 1e-16; R0/R1 medians ~1e-15 but their upper quartic tails straddle the cut -- assignment by median, flagged marginal.",
          "feasibility": "Closest instruments: Rubin LSST / Euclid cluster ellipticity and merging-cluster lensing, currently sigma/m ~ 0.1-1 cm^2/g; required improvement ~1e12-1e13x, far beyond any proposed technique. Dominant systematic: baryonic-feedback distortion of halo shapes.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R2", "R5"]},
            {"label": "no", "regions": ["R0", "R1", "R3"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_no",
      "lit_review": {
        "name": "LHCb Upgrade II dark-photon mumu mass scan",
        "observable": "mumu peak position: 2-5 / 6-20 / 40-75 GeV / none ?",
        "what_this_is": "The Large Hadron Collider beauty (LHCb) experiment scans the invariant mass of muon pairs for a narrow bump, the signature of a dark Z' boson that mixes slightly with the photon. The position of the bump directly measures the Z' mass. Three of the four regions predict bright peaks in mutually disjoint mass windows, and the fourth predicts none, so this single scan resolves the whole leaf.",
        "refs": ["arXiv:1910.06926", "arXiv:1808.08865"],
        "reasoning": "R3: MZp 2.4-4.5 GeV, epsilon 1.5-1.9e-3 (~10x current limits) -> bright peak in 2-5. R1: 7.5-16.2 GeV, epsilon 6e-3 to 5e-2 -> bright peak in 6-20. R0: 43-74 GeV, epsilon 1-5e-2 -> sigma*BR ~ 0.1-1 pb peak in 40-75 (70-74 GeV sliver covered by CMS scouting). R2: epsilon 2.6-4.4e-4 at 34-62 GeV, within ~2x of the Upgrade II floor -> 'none' (marginal: a faint threshold peak would land in the 40-75 window but ~1000x below R0's rate, so reading the rate resolves any confusion).",
        "status": "Splits!",
        "outcomes": [
          {"label": "2-5 GeV", "regions": ["R3"]},
          {"label": "6-20 GeV", "regions": ["R1"]},
          {"label": "40-75 GeV", "regions": ["R0"]},
          {"label": "none", "regions": ["R2"]}
        ]
      },
      "novel": []
    },
    {
      "leaf_id": "root_yes_no_no_yes_no",
      "lit_review": {
        "name": "XLZD recoil-spectrum dark-matter mass fit",
        "observable": "fitted M_DM < 80 GeV ?",
        "what_this_is": "XLZD is the planned multi-tonne liquid-xenon detector that observes the tiny nuclear recoils of xenon atoms struck by passing dark-matter particles. Beyond counting events, the energy spectrum of the recoils encodes the dark-matter particle's mass: a lighter particle produces a spectrum that falls more steeply with recoil energy. The two regions pin the dark-matter mass at about 63 and 96 GeV respectively, giving measurably different spectral slopes -- a different observable from the detection-reach margins already in the catalog.",
        "refs": ["arXiv:hep-ph/0703217", "arXiv:1306.3244", "arXiv:2410.17137"],
        "reasoning": "Both regions sit at sigma_SI 1-10x the XLZD floor, so XLZD records O(10-100) events. The exponential slope parameter E0 ~ mu^2/m_N differs by ~1.8x between M = 62.7 GeV (R1) and 95.6 GeV (R0) on xenon; with >~30 events the fitted mass separates at >2 sigma, and spectral mass reconstruction is demonstrated in projections up to ~100 GeV. Marginal at the faint end of the band (few events -> +-30% mass) and R0 sits near the ~100 GeV ceiling where the fit softens; the 5-10x-floor part of the band is crisp. The regions' Z' sectors offer no non-catalog handle: R1's Z' (1 GeV, epsilon ~ 1e-6) is invisible everywhere (boosted decay length ~1 m, rates ~ epsilon^2 = 1e-12), and R0's TeV Z' dilepton signal is already a catalog observable. Independent cross-check noted for the record: R1 predicts s-wave annihilation p_ann ~ 1e-28 cm^3 s^-1 GeV^-1, within ~3x of CMB-S4's energy-injection reach, versus < 1e-31 for R0 (gU1p = 0.003).",
        "status": "Splits!",
        "outcomes": [
          {"label": "yes (~63 GeV)", "regions": ["R1"]},
          {"label": "no (~96 GeV)", "regions": ["R0"]}
        ]
      },
      "novel": []
    },
    {
      "leaf_id": "root_yes_no_no_no",
      "lit_review": {
        "name": "LHCb / BaBar-class dark-photon dimuon scan",
        "observable": "mumu peak: 0.5-2 GeV or 2-70 GeV, sigma*BR > 0.5 fb ?",
        "what_this_is": "Collider experiments (LHCb at the Large Hadron Collider; BaBar-style electron-positron machines at low mass) scan the invariant mass of muon pairs for a narrow bump, the signature of a dark Z' that mixes slightly with the photon. The bump position measures the Z' mass. One region predicts a spectacular peak at about 1 GeV, while the other three predict peaks between 5 and 66 GeV, so a low-versus-high mass window is the first cut.",
        "refs": ["arXiv:1406.2980", "arXiv:1910.06926"],
        "reasoning": "R0: MZp = 1.0 GeV with epsilon = 0.06-0.1, roughly 100x above existing BaBar/LHCb limits at 1 GeV -> unmistakable sub-2-GeV peak at ~nb-scale rate. R1 (5.5-21 GeV, epsilon 5.7e-3 to 2.8e-2), R2 (15-66 GeV, 1.6e-3 to 6e-3) and R3 (9-16 GeV, 5.6e-4 to 1.4e-3) all clear the LHCb Upgrade II floor (~2e-4) -> peak in 2-70 GeV; R3's low edge is the closest to threshold (~3x above). No region is invisible, so the two outcomes are mass windows.",
        "status": "Splits!",
        "outcomes": [
          {"label": "0.5-2 GeV", "regions": ["R0"]},
          {"label": "2-70 GeV", "regions": ["R1", "R2", "R3"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R3",
          "name": "Dimuon peak cross-section ladder at LHCb Upgrade II",
          "observable": "sigma*BR(mumu peak): >30 / 3-30 / <3 fb ?",
          "what_this_is": "Once a dimuon bump is found, its production rate (cross-section times branching ratio) is measured simply by counting the events in the peak with the known detector efficiency. The rate scales as the square of the Z'-photon mixing strength, which differs by one to three orders of magnitude among these regions. So the same discovery dataset, read quantitatively rather than as yes/no, ranks the regions.",
          "reasoning": "epsilon^2 ladders: R1 3e-5 to 8e-4 -> sigma*BR >~ 300 fb (up to tens of pb); R2 2.6e-6 to 3.6e-5 -> ~3-30(+) fb; R3 3e-7 to 2e-6 -> <~ 3 fb. The bin edges at 30 and 3 fb each carry ~2-3x theory uncertainty from converting epsilon^2 to a fiducial cross-section across 5-66 GeV (parton fluxes, mass dependence), so adjacent-bin assignments near the edges are marginal; the R1-vs-R3 separation (>100x) is robust.",
          "feasibility": "Closest instrument: LHCb Upgrade II (planned, ~300 fb^-1); rate measurement of a discovered narrow peak is routine to ~10% statistical. Required improvement: none instrumentally. Dominant systematic: production-model (parton distribution and acceptance) uncertainty ~2-3x when mapping the measured rate onto model regions.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": ">30 fb", "regions": ["R1"]},
            {"label": "3-30 fb", "regions": ["R2"]},
            {"label": "<3 fb", "regions": ["R3"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_yes",
      "lit_review": {
        "name": "LHCb Upgrade II + CMS scouting dimuon scan",
        "observable": "mumu peak, 2-200 GeV, sigma*BR > 0.5 fb ?",
        "what_this_is": "The LHCb and Compact Muon Solenoid (CMS) experiments at the Large Hadron Collider scan the invariant mass of muon pairs for a narrow resonance, the signature of a dark Z' boson mixing slightly with the photon; together they cover 2-200 GeV. All 27 regions in this leaf share nearly the same dark-matter mass and gauge coupling, so the photon-mixing strength -- spanning five orders of magnitude -- is the main external handle, and this scan is the most powerful single test of it.",
        "refs": ["arXiv:1910.06926", "arXiv:1912.04776", "arXiv:1808.08865"],
        "reasoning": "Floor sigma*BR ~ 0.5 fb <=> epsilon ~ 2-5e-4 (LHCb UII < 70 GeV, CMS scouting to 200 GeV). Seen (median epsilon): R2 1.1e-2, R3 1.4e-3, R4 2.2e-2, R7 6e-2, R9 9e-4, R17 3.4e-3, R22 1e-1, R23 7e-2, R24 4.3e-4 (marginal, just above floor). R0 (841 pts) is an umbrella cluster spanning the FULL epsilon range 1e-6 to 0.1 -- no external cut can place it cleanly; its log-median (~3e-4) sits at threshold, so it is assigned 'seen' with the explicit caveat that ~half its volume falls on each side and it requires sub-clustering. Not seen: all remaining regions have median epsilon <= 1.5e-4 (R12 and R20, at 2.3-4e-4, are threshold-marginal and assigned by median).",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0", "R2", "R3", "R4", "R7", "R9", "R17", "R22", "R23", "R24"]},
          {"label": "not seen", "regions": ["R1", "R5", "R6", "R8", "R10", "R11", "R12", "R13", "R14", "R15", "R16", "R18", "R19", "R20", "R21", "R25", "R26"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2+R3+R4+R7+R9+R17+R22+R23+R24",
          "name": "Dimuon peak cross-section ladder (LHCb/CMS)",
          "observable": "sigma*BR(mumu peak) > 30 fb ?",
          "what_this_is": "Once a dimuon bump is discovered, counting the events in the peak measures its production rate, which scales as the square of the Z'-photon mixing. The bright and faint halves of this group differ by 10-100x in that rate. This uses the same discovery dataset quantitatively instead of as a yes/no.",
          "reasoning": "sigma*BR > 30 fb corresponds to epsilon >~ 5e-3 at tens of GeV. Yes: R2, R4, R7, R22, R23 (median epsilon >= 1e-2, rates 100 fb to nb). No: R3, R9, R24 (median epsilon <= 1.4e-3, rates ~1-10 fb), R17 (predicted ~12 fb -- the marginal case, within ~3x of the cut), and R0 (umbrella region, assigned by its threshold-level median; same caveat as at Level 1). Beyond this ladder the seen-side regions overlap in every visible observable; their residual structure is dark-quartic only.",
          "feasibility": "Closest instruments: LHCb Upgrade II and CMS scouting (planned/running); peak-rate measurement to ~10% statistical is routine. Required improvement: none instrumentally. Dominant systematic: ~2-3x theory uncertainty converting measured rate to epsilon^2 across the 2-200 GeV range.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": ">30 fb", "regions": ["R2", "R4", "R7", "R22", "R23"]},
            {"label": "<30 fb", "regions": ["R0", "R3", "R9", "R17", "R24"]}
          ]
        },
        {
          "attach_to": "R1+R5+R6+R8+R10+R11+R12+R13+R14+R15+R16+R18+R19+R20+R21+R25+R26",
          "name": "Tera-Z radiative-return Z' scan",
          "observable": "e+e- -> gamma + mumu peak with sigma > 0.1 fb ?",
          "what_this_is": "A proposed circular electron-positron collider (such as FCC-ee) running on the Z resonance would collect trillions of Z decays; events with a radiated photon can produce a dark Z' recoiling against it, appearing as a narrow muon-pair peak plus a photon. This reaches photon-mixing strengths a few times below any hadron-collider search, peeling off the regions with mixing near 1e-4. The many regions below even that reach differ only in dark self-couplings, which no known experiment can measure.",
          "reasoning": "Projected floor epsilon ~ 1e-4 for MZp < 91 GeV. Yes: R8 (median epsilon 1.5e-4), R12 (3e-4), R20 (2.8e-4), and R11 (1e-4, marginal). No: the remaining 13 regions all have epsilon <~ 5e-5, some at 1e-6 (R16's MZp tail above 91 GeV weakens an already-null prediction). The 13-region 'no' bucket is the physical degeneracy floor of this model: those regions differ almost solely in the dark quartics alpha2/alpha3/alpha4, whose only observable (DM self-scattering, ~1e-12 to 1e-17 cm^2/g) is ~12 orders below any lensing sensitivity -- stated honestly rather than split artificially.",
          "feasibility": "Closest instrument: FCC-ee Tera-Z (proposed, ~6e12 Z). Current epsilon sensitivity in this mass range ~1e-3 (LHC); required ~5-10x improvement. Dominant systematic: QED gamma+mumu continuum modeling; also reduced reach for the MZp > 91 GeV tails.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R8", "R11", "R12", "R20"]},
            {"label": "not seen", "regions": ["R1", "R5", "R6", "R10", "R13", "R14", "R15", "R16", "R18", "R19", "R21", "R25", "R26"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_no_no_no",
      "lit_review": {
        "name": "LHCb / BaBar-class dimuon mass scan",
        "observable": "mumu peak: 0.5-1.5 / 3-8 / 9-26 GeV / none ?",
        "what_this_is": "Collider experiments (LHCb at the Large Hadron Collider, and BaBar-style electron-positron machines at the lowest masses) scan the invariant mass of muon pairs for a narrow bump -- the signature of a dark Z' boson that mixes slightly with the photon -- and the bump position measures the Z' mass. Four of the five regions predict visible peaks, three of them in distinct mass windows, and one region predicts nothing, so a single mass scan sorts most of this leaf.",
        "refs": ["arXiv:1910.06926", "arXiv:1406.2980", "arXiv:1808.08865"],
        "reasoning": "R1: MZp = 1.0 GeV, epsilon 6.4e-4 to 1.3e-3, ~3-6x above current LHCb limits at 1 GeV -> peak in 0.5-1.5 (low edge mildly marginal). R4: 4.3-7.3 GeV, epsilon 2-4e-2 -> bright peak in 3-8. R0 (10.2-25.4 GeV, epsilon 2.1e-2 to 8.7e-2) and R2 (12.8-20.2 GeV, 6.3e-3 to 9.4e-2) -> unambiguous peaks in the overlapping 9-26 window; they cannot be separated here because both mass and rate ranges overlap fully. R3: epsilon ~ 1-4e-5 at 3.4-5.1 GeV, >~10x below the Upgrade II floor -> none.",
        "status": "Splits!",
        "outcomes": [
          {"label": "0.5-1.5 GeV", "regions": ["R1"]},
          {"label": "3-8 GeV", "regions": ["R4"]},
          {"label": "9-26 GeV", "regions": ["R0", "R2"]},
          {"label": "none", "regions": ["R3"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R2",
          "name": "Ultra-deep halo self-interaction survey",
          "observable": "sigma_self/m > 2e-13 cm^2/g ?",
          "what_this_is": "If dark-matter particles scatter off each other, the density profiles and shapes of dark-matter halos in galaxy clusters are altered, which gravitational-lensing surveys can constrain. Self-scattering is the only observable sensitive to the dark scalar's quartic self-couplings -- and those quartics are the ONLY parameters distinguishing these two regions, which are twins in every collider and astroparticle observable. The predicted effect is about twelve orders of magnitude below current sensitivity: this node is an honest declaration of a physical degeneracy.",
          "reasoning": "R0 and R2 overlap fully in epsilon, MZp, MDM and gU1p; only the quartics differ, with real gaps: alpha3 = 0.087-0.71 (R0) vs 1.59-3.89 (R2), alpha4 ~6x higher in R2. sigma_self/m ~ lambda^2/(64 pi m^3) gives ~7e-13 cm^2/g for R2 vs ~1e-14 to 7e-14 for R0 at m ~ 220 GeV; cut at 2e-13 cm^2/g separates the medians by ~10x, though the formula itself is only good to a factor of a few.",
          "feasibility": "Closest instruments: Rubin LSST / Euclid cluster-lensing shape constraints, currently sigma/m ~ 0.1-1 cm^2/g; required improvement ~1e12x, beyond any proposed technique. Dominant systematic: baryonic feedback mimicking or masking halo-shape changes.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R2"]},
            {"label": "no", "regions": ["R0"]}
          ]
        }
      ]
    }
  ]
}
```