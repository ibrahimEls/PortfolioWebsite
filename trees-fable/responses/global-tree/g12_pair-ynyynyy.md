This is a degeneracy-breaking task for one target leaf. Before writing the answer, I need to verify the arXiv references I plan to cite, per the card's rules. Let me load the web tools and check them.
Both references check out (Ilten–Soreq–Thaler–Williams–Xue, "Inclusive Dark Photon Search at LHCb", and the LHCb A′→μ⁺μ⁻ search). I now have everything needed — here is the full answer.

---

# Reasoning — Leaf `root_yes_no_yes_yes_no_yes_yes_no` (159 pts, 13 units, all CsSg_U1p[+])

## What this leaf physically is

All 13 units are the **same Lagrangian** — a complex scalar singlet DM charged under a dark U(1)′ — so every split here separates parameter-space islands, not models. The catalog path pins the shared physics tightly:

- **MDM ≈ 4.6–5.6 GeV** in every region (a ~5 GeV scalar), portal coupling α1 ≈ 0.0035–0.006 fixed jointly by BR(h→inv) ∈ [0.032, 0.1] (Γ(h→SS) ≈ α1²v²/8πm_h ≈ 0.1–0.4 MeV → BR ≈ 3–9%, consistent) and by σ_SI sitting in the 1–10× XLZD band but below LZ.
- **gU1p ≈ 0.042 in all 13 regions** (spread < 7%): the relic is set by the secluded channel SS* → Z′Z′, whose σv ≈ g′⁴/16πM² ≈ 3×10⁻²⁶ cm³/s at g′ = 0.042 — that's why the scan froze it.
- **MZp ≈ 1–2.2 GeV « 2·MDM ≈ 10 GeV**, so the Z′ *cannot* decay invisibly to DM. It decays **visibly** to SM leptons/hadrons through kinetic mixing ε, with cτ₀ ~ 1 cm × (10⁻⁶/ε)² × (1.5 GeV/MZp).

The only parameters that actually differ between islands are therefore: **ε (spanning 10⁻⁶ → 1.8×10⁻⁴, two decades)** and the **dark quartics α2–α6 (four decades)**. The catalog contains no visible-dark-photon observable at all — so a GeV-scale dimuon-resonance search is the natural, maximally-orthogonal Level-1 split.

## Level 1: LHCb inclusive dark-photon → μ⁺μ⁻ search

The LHCb collaboration already runs an inclusive prompt A′→μ⁺μ⁻ resonance search from the dimuon threshold to 70 GeV (arXiv:1910.06926, current limits ε² ~ few×10⁻⁹ in the 1–2.7 GeV window between the φ and J/ψ vetoes). The published Run 3+ projection (arXiv:1603.08926) reaches **ε² ≈ 10⁻¹⁰–10⁻⁹ in the 1.1–2.7 GeV band with 15 fb⁻¹**, improving another factor ~4–5 with Upgrade II (300 fb⁻¹). Cut: a prompt dimuon peak at 1.0–2.2 GeV at the ε ≳ 10⁻⁵ level.

Per-region predicted ε² (the signal rate scales as ε²):

| Region | ε range | ε² | LHCb Run 3–6 verdict |
|---|---|---|---|
| R5 | 1.4e-5 – 9.2e-5 | 1.9e-10 – 8.5e-9 | **seen** (lower edge needs Upgrade II lumi) |
| R8 | 1.8e-5 – 1.2e-4 | 3.4e-10 – 1.3e-8 | **seen** |
| R9 | 2.1e-5 – 1.6e-4 | 4.6e-10 – 2.4e-8 | **seen** |
| R12 | 6.6e-5 – 1.8e-4 | 4.3e-9 – 3.3e-8 | **seen** (10–100× above projected reach) |
| R7 | 2.5e-6 – 1.1e-5 | 6e-12 – 1.2e-10 | not seen (upper tail marginal) |
| R1 | ≤ 8.9e-6 | ≤ 7.9e-11 | not seen (tail marginal) |
| R0,R2,R3,R4,R6,R10,R11 | ≤ 3.9e-6 | ≤ 1.6e-11 | not seen, 10–100× below reach |

Honesty notes: (i) R7's and R1's upper tails graze the Upgrade II boundary — the split is clean for their bulk. (ii) MZp = 1.00 GeV points sit at the φ(1020) veto window; that affects R1/R4/R7 (all in the "no" group anyway) and the low-MZp ends of R9/R12, whose large ε gives ample margin over the rest of their mass range. Split: **seen = {R5, R8, R9, R12}; not seen = {R0–R4, R6, R7, R10, R11}**.

## Level 2a: near-target displaced-dimuon spectrometer (attach to the "not seen" nine)

The remaining nine regions split further only by ε in the notorious **seesaw gap** ε ∈ [10⁻⁶, 10⁻⁵] at GeV masses: rate ∝ ε² is too small for prompt collider fits, yet the lab decay length (γ ~ 20–30 ⇒ L ≈ 1 mm–1 m) is far too short for beam-dump decay volumes — SHiP's fiducial volume starts ~45 m from target and DarkQuest's ~5 m, so everything here decays inside the shielding. No existing or proposed instrument covers this wedge. Proposal: a high-intensity proton target with rad-hard silicon vertexing beginning O(1 cm) downstream, reconstructing displaced μμ vertices at 1 mm–30 cm. R7 (ε = 2.5×10⁻⁶–1.1×10⁻⁵ → L ≈ 1 mm–20 cm, rate 4–200× the ε=5×10⁻⁷ benchmark) is squarely in acceptance; the other eight regions predict cτ at or beyond the ε = 10⁻⁶ scan floor (L ≳ 20 cm–1 m) with 10–100× lower production — outside for the bulk of their range (R1's 8.9×10⁻⁶ tail leaks into "yes"). Closest instrument is the LHCb VELO (displaced dimuons, but ~10⁻³ of dump intensity) / SHiP (intensity but 45 m standoff); needs ~10× in ε reach over LHCb, dominant systematic being tracker occupancy and beam-induced background at cm standoff → **unlikely**.

## Level 2b/2c: dark-quartic residual is (almost) physical — self-interaction as the only handle

After splitting on ε, regions differ only in the dark quartics α2–α6, which touch **no** SM-visible amplitude at tree level: they don't feed σ_SI, BR(h→inv), the relic channel, or the Z′ signal. Their only observable consequence is DM **self-scattering**: σ/m ≈ λ̄²/(64π M³) ≈ 4×10⁻⁹ λ̄² cm²/g at M = 5 GeV. That gives σ/m ≈ 4×10⁻⁷ cm²/g for the α₄=10 islands (R4, R6; R2 at 0.8–4×10⁻⁷) versus ≲ 10⁻⁸–10⁻¹² for the small-quartic islands (R1, R3), with R0/R10/R11 straddling the 10⁻⁷ cut. Same story in the "seen" group: R8 (α3 = 3.3–10 → up to 4×10⁻⁷) vs R12 (≤ 3×10⁻⁸), R5/R9 straddling. Current astrophysical sensitivity (merging clusters, halo shapes) is σ/m ~ 0.1–1 cm²/g — a ~10⁶ shortfall — so both attachments are honestly rated **speculative**: this degeneracy is, for practical purposes, physical, and I flag the straddlers explicitly rather than pretend a clean cut.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_no_yes_yes_no",
      "lit_review": {
        "name": "LHCb inclusive dark-photon dimuon search (Run 3 - Upgrade II)",
        "observable": "prompt mu+mu- resonance at 1.0-2.2 GeV with eps >~ 1e-5 ?",
        "what_this_is": "The LHCb detector at the Large Hadron Collider records enormous numbers of muon pairs and scans their combined mass for a narrow bump that would reveal a new short-lived particle. It is the world's most sensitive probe of a 'dark photon' -- a light hidden-sector force carrier that mixes faintly with the ordinary photon and so occasionally decays to a muon pair. Every model point in this leaf contains exactly such a 1-2 GeV dark force carrier that must decay visibly (it is too light to decay to the dark matter), and the parameter-space islands differ by two orders of magnitude in the mixing strength that sets the size of the bump.",
        "refs": ["arXiv:1603.08926", "arXiv:1910.06926"],
        "reasoning": "All 13 units share MDM~5 GeV, g'~0.042 and MZp=1-2.2 GeV < 2*MDM, so the Z' decays only to SM via kinetic mixing eps; the prompt dimuon signal scales as eps^2. Published LHCb limits (1910.06926) sit at eps^2 ~ few x 1e-9 in the 1.1-2.7 GeV window; the Run 3 projection (1603.08926, 15 fb^-1) reaches eps^2 ~ 1e-10-1e-9 there, with Upgrade II (300 fb^-1) gaining another ~4-5x. Regions R5 (eps^2 = 1.9e-10-8.5e-9), R8 (3.4e-10-1.3e-8), R9 (4.6e-10-2.4e-8) and R12 (4.3e-9-3.3e-8) all sit at or well above that reach -> seen; the other nine regions have eps^2 <= 1.2e-10 (mostly <= 1.6e-11) -> not seen. Marginalities: R5's lower edge needs Upgrade II statistics; R7's upper tail (1.2e-10) and R1's tail (7.9e-11) graze the boundary; MZp = 1.00 GeV points sit in the phi(1020) veto window, which affects only low-eps regions plus the low-mass ends of R9/R12 (their large eps leaves ample margin elsewhere in their mass range).",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R5", "R8", "R9", "R12"]},
          {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R6", "R7", "R10", "R11"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R2+R3+R4+R6+R7+R10+R11",
          "name": "Near-target displaced-dimuon spectrometer",
          "observable": "displaced mu mu vertex 1 mm-30 cm from target, mass 1.0-2.2 GeV ?",
          "what_this_is": "A proposed fixed-target experiment that slams an intense proton beam into a thin target and places precision silicon tracking starting only centimeters downstream, looking for muon pairs that emerge from a point visibly separated from the target. It targets the 'seesaw gap': dark photons whose mixing is too weak to make a prompt collider bump, yet strong enough that they decay within centimeters -- long before reaching the distant decay volumes of beam-dump experiments. The nine remaining islands differ exactly in this regime: one predicts millimeter-to-centimeter decay lengths at detectable rates, the rest predict decays too long and too rare.",
          "reasoning": "For eps in [1e-6, 1e-5] at MZp = 1-2 GeV, ctau0 ~ 0.1 mm-1 cm and lab decay lengths at gamma ~ 20-30 are 1 mm-1 m: inside the shielding of SHiP (fiducial volume ~45 m away) and DarkQuest (~5 m), yet too displaced/rare for prompt LHCb fits (rate ~ eps^2 <= 1.2e-10). R7 (eps = 2.5e-6-1.1e-5) predicts vertices at 1 mm-20 cm with 6-120x the rate of the eps = 1e-6 floor -> in acceptance. The other eight regions cluster at eps <= 3.9e-6 (six of them <= 3e-6), giving decay lengths pushing 20 cm-1 m and rates 10-100x lower -> below reach for the bulk of their range; R1's upper tail (8.9e-6) leaks into the yes branch.",
          "feasibility": "Closest instruments: LHCb VELO (displaced dimuon vertexing at ~30 micron resolution but ~1e-3 of dump-experiment intensity) and SHiP (~1e20 POT but 45 m standoff). Requires ~10x better eps reach than LHCb Upgrade II at these masses, i.e. rad-hard vertexing surviving ~cm standoff from a >1e18 POT target; dominant systematic is beam-induced occupancy/combinatorial background at that standoff.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R7"]},
            {"label": "not seen", "regions": ["R0", "R1", "R2", "R3", "R4", "R6", "R10", "R11"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R3+R4+R6+R10+R11",
          "name": "Ultra-deep halo self-interaction probe",
          "observable": "sigma_self/m > 1e-7 cm^2/g ?",
          "what_this_is": "A (far-future) astrophysical measurement of how strongly dark matter scatters off itself, extracted from the detailed shapes and offsets of dark-matter halos in colliding galaxy clusters and from strong gravitational lensing of halo cores. Self-scattering is the only physical process that the dark-sector quartic couplings of this model feed into -- they touch no Standard-Model-visible amplitude at all. The remaining islands differ by four orders of magnitude in those quartics, so their predicted self-scattering rates span five decades.",
          "reasoning": "sigma/m ~ lambda^2/(64 pi M^3) ~ 4e-9 lambda^2 cm^2/g at M = 5 GeV. R4 and R6 (alpha4 pinned at 10) predict ~4e-7 cm^2/g and R2 (alpha4 = 4.4-10) 0.8-4e-7 -> yes; R1 (all quartics <= 0.05, ~1e-12) and R3 (<= 1.5, <= 1e-8) -> no. R0 (alpha4 = 0.9-10), R10 (2.5-7.7) and R11 (alpha3 = 2-10) straddle the 1e-7 cut -- assigned to 'no' by their lower bulk, honestly a partial discriminator for those three.",
          "feasibility": "Closest constraints: merging-cluster and halo-shape analyses (Bullet-cluster class), currently sensitive to sigma/m ~ 0.1-1 cm^2/g. Discriminating at 1e-7 cm^2/g needs ~1e6 improvement, far beyond any proposed survey; dominant systematic is baryonic feedback mimicking or erasing the core signatures. This residual degeneracy is, in practice, physical.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R2", "R4", "R6"]},
            {"label": "no", "regions": ["R0", "R1", "R3", "R10", "R11"]}
          ]
        },
        {
          "attach_to": "R12+R5+R8+R9",
          "name": "Ultra-deep halo self-interaction probe",
          "observable": "sigma_self/m > 1e-7 cm^2/g ?",
          "what_this_is": "The same astrophysical self-scattering measurement applied to the islands that LHCb would see: once the dark force carrier's mass and mixing are measured from the dimuon bump, these islands still differ only in their dark-sector self-couplings, which are invisible to every laboratory probe. Only the rate at which dark matter scatters off itself in galaxy halos distinguishes them.",
          "reasoning": "Within the LHCb-seen group the measured (mass, rate) pairs overlap (MZp ranges 1-2.2 GeV, eps^2 ranges overlap across R5/R8/R9/R12), so the residual split is again quartic-driven. R8 (alpha3 = 3.3-10) predicts sigma/m up to ~4e-7 cm^2/g -> yes; R12 (max quartic ~2.8, <= 3e-8) -> no; R5 (alpha4 = 0.9-10) and R9 (alpha4 = 2.6-10) straddle the cut and are assigned to 'no' by their lower bulk -- at best a statistical discriminator for those two.",
          "feasibility": "Same as above: current cluster/halo-shape sensitivity ~0.1-1 cm^2/g versus the required 1e-7 cm^2/g, a ~1e6 gap beyond any proposed instrument; baryonic-physics degeneracies dominate. Honest verdict: the dark-quartic degeneracy is physical.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R8"]},
            {"label": "no", "regions": ["R12", "R5", "R9"]}
          ]
        }
      ]
    }
  ]
}
```