I'll verify the handful of arXiv references I plan to cite before composing the single final answer.
All five references verified against arXiv (titles and content match). Composing the full answer now — everything below is the deliverable.

# Reasoning — Leaf `root_yes_no_yes_yes_yes_yes_no` (426 pts, units R0–R5)

**What the catalog already knows.** Every unit here shows a spin-independent direct-detection signal 1–10× above the XLZD projection (also visible at LZ and DarkSide), no IceCube-Gen2 neutrino flux, and BR(h→inv) in the 0.0032–0.01 band. Within that envelope the six units hide wildly different dark sectors, which the catalog cannot see because its Z′-sensitive observables (HL-LHC dilepton recast, per-channel σv against WW-template curves) are blind to the specific (M_Z′, ε, g′) corners these units occupy.

**The physical handles, quantitatively:**

- **R2** (M_DM ≈ 94.9 GeV, M_Z′ = 22.2 GeV, ε = 6.8–8.5×10⁻⁵, g′ = 0.012): the Z′ is lighter than the DM, so it decays *visibly* to SM fermions through kinetic mixing. Production at LHCb goes like ε² ≈ 4.7–7.1×10⁻⁹. The published LHCb prompt A′→μμ search (arXiv:1910.06926) covers exactly this mass window (10.6–70 GeV) with current limits around ε² ~ 10⁻⁷–10⁻⁶ there; the inclusive-dimuon program (arXiv:1603.08926) identifies 10–40 GeV as the prime reach window, and its extrapolation to the full Upgrade-II dataset (~300 fb⁻¹) closes down to ε² ~ 10⁻⁹. R2 sits a factor of ~5 above that floor — within reach, though I flag honestly that the margin is a factor-few, not orders of magnitude. All other units are invisible to this search: R0 has ε ≈ 1.5×10⁻⁶ (ε² ~ 2×10⁻¹²), R3/R4 have ε = 10⁻⁶, R1's Z′ is at 2–2.8 TeV (outside the bump-hunt range), R5 has no Z′ at all. This is the cleanest literature split, so it is the Level-1 node.

- **R0** (M_DM ≈ 68 GeV, M_Z′ = 20–34 GeV, g′ = 0.1483): the only unit with a large dark gauge coupling and an open secluded channel. σv(ss̄→Z′Z′) ≈ g′⁴/(16π m²) ≈ 2.4×10⁻²⁶ cm³/s — essentially the thermal value, pinned because g′ is fixed across the region. Each Z′ decays promptly (cτ ~ mm at these masses) to SM fermion pairs, giving a 4-body *cascade* gamma-ray spectrum, softer and broader than the WW templates in our catalog (which is why the catalog's Fermi15yr(WW) node did not fire). The Fermi-LAT dwarf-spheroidal program measures exactly this: the 6-year stacked analysis (arXiv:1503.02641) already reaches the thermal cross section near 70–100 GeV for quark-like channels, and the LAT projection paper (arXiv:1605.02016) shows 15 years of data pushes several times below thermal up to ~400 GeV; cascade spectra cost only a factor ~2 in the limit (Elor–Rodd–Slatyer, arXiv:1503.01773). Every other unit predicts σv ≲ 10⁻²⁸ cm³/s: R2 (g′=0.012) gives ~7×10⁻³¹, R3/R4 (g′=0.003) less still, R1's secluded channel is closed (M_Z′ > M_DM) and its Higgs-portal σv with α₁ ≈ 0.0026 is ~10⁻²⁹, R5 with α₁ ≈ 0.0021 likewise ~4×10⁻²⁹. A dwarf detection at ≥10⁻²⁶ cm³/s tags R0 uniquely. Since the Level-1 slot is taken by LHCb, this becomes the first Level-2 node — but it uses an existing instrument and archival data, hence "possible".

- **R1** (M_DM = 94.2 GeV, M_Z′ = 2.0–2.8 TeV, ε = 0.1, g′ ≈ 0.4): a TeV-scale Z′ with photon-like SM coupling εe ≈ 0.03. The catalog's HL-LHC dilepton recast already covers the 14 TeV reach, so I cannot re-propose it. Electroweak precision is *not* the answer: the Z-pole shift scales as ε²m_Z²/m_Z′² ≈ 1.4×10⁻⁵, at the edge of even a Tera-Z program. The decisive non-catalog measurement is a 100 TeV hadron-collider Drell-Yan bump hunt: at FCC-hh with 30 ab⁻¹, a 2.4 TeV vector with ε = 0.1 yields σ·BR(ℓℓ) at the fb level — O(10⁴) signal events over a smooth background, versus zero signal from R3/R4/R5 (ε = 10⁻⁶ or no Z′). Enormous margin once the machine exists; the gating item is the machine, hence "unlikely".

- **R4 vs R3/R5** — the isospin handle. R4's Z′ (1 GeV, ε = 10⁻⁶, g′ = 0.003) is invisible to any production experiment (rates ∝ ε² = 10⁻¹², cτ ~ 2 cm kills far detectors), but it *mediates direct detection*: the t-channel amplitude f_p = g′εe/M_Z′² ≈ 9×10⁻¹⁰ GeV⁻² gives σ_p ≈ 9×10⁻⁴⁷ cm² — coupled to *protons only* (photon-like), i.e. coherent in Z², not A². That exceeds R4's Higgs-portal isoscalar piece (α₁ ≈ 0.0023 at 94 GeV → ~5×10⁻⁴⁸ cm²), so the majority of R4's observed DD rate is charge-coupled. In R3 the same amplitude is suppressed by (10.35 GeV)⁴ in the propagator → σ_p ~ 10⁻⁵⁰ cm², negligible; R5 has no Z′. A proton-only coupling raises the argon-to-xenon per-nucleon rate ratio by (Z/A)²_Ar/(Z/A)²_Xe = 0.2025/0.170 ≈ 1.19; R4's mixed coupling predicts a net ~10–15% Ar excess over the isoscalar expectation, R3/R5 predict exactly isoscalar. With signals at 1–10× the XLZD limit, both XLZD and a DarkSide-20k/Argo-scale argon exposure collect O(10²) events, so a ~5–10% ratio measurement is statistics-limited and halo-model systematics partially cancel in the ratio (though the two targets weight the velocity integral differently — that is the dominant residual systematic, along with nuclear-response calibration). Marginal but physical → "unlikely".

- **R3 vs R5** — the honest failure. After the above, a Complex Scalar Singlet + dark U(1) with a fully decoupled dark sector (R3: M_Z′ = 10.35 GeV, ε = 10⁻⁶, g′ = 0.003) is observationally identical to a Real Scalar Singlet (R5) in every channel any experiment can reach: same Higgs-portal α₁ (0.0022 vs 0.0021), same isoscalar σ_SI, negligible σv for both, no producible mediator. The *only* physical difference on the table is the DM mass: R5 spans 91.6–92.05 GeV, R3 spans 94.48–94.8 GeV — a 2.5–3 GeV gap at ~93 GeV. Xenon recoil spectra famously lose mass sensitivity above ~50 GeV (the spectrum shape asymptotes to the heavy-DM limit); even joint Xe+Ar spectral fits at these exposures return uncertainties of tens of GeV at m ~ 100 GeV. Resolving a 3% mass difference would need better than percent-level mass reconstruction — more than an order of magnitude beyond any proposed multi-target program, even adding a directional detector to constrain the velocity integral. I propose it as the Level-2 node because it is the *only* observable that differs at all, and rate it "speculative" accordingly.

**Split order** (each node attaches to the still-degenerate outcome of the previous one): LHCb dimuon peels R2 → Fermi dwarf cascade peels R0 → FCC-hh dilepton peels R1 → Ar/Xe isospin ratio peels R4 → percent-level mass fit attempts R5 vs R3. The Ar/Xe node and the mass-fit node are the two that carry real risk, flagged in their feasibility fields.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes_yes_yes_no",
      "lit_review": {
        "name": "LHCb Upgrade prompt dark-photon dimuon search",
        "observable": "prompt m(mumu) peak in 20-35 GeV at eps^2 >= 1e-9 ?",
        "what_this_is": "The LHCb detector at the Large Hadron Collider records enormous numbers of muon pairs and hunts for a narrow bump in their combined mass, which would signal a new short-lived particle decaying to two muons. It is the world's most sensitive probe of a 'dark photon' — a new force carrier that talks to ordinary matter only through a tiny mixing with the photon — in the 10-70 GeV mass range. One region here (R2) contains exactly such a dark photon at 22 GeV with a mixing strength just inside LHCb's projected reach, while every other region's dark force carrier is either far too heavy, mixed a thousand times more weakly, or absent entirely.",
        "refs": ["arXiv:1910.06926", "arXiv:1603.08926"],
        "reasoning": "R2 has M_Z' = 22.2 GeV with eps = 6.8-8.5e-5, i.e. eps^2 = 4.7-7.1e-9, and the Z' decays visibly to SM fermions (M_Z' < M_DM closes the dark channel). The published LHCb prompt A'->mumu search covers 10.6-70 GeV with current limits around eps^2 ~ 1e-7-1e-6 at this mass; the inclusive-dimuon program projects reach to eps^2 ~ 1e-9 in the 10-40 GeV window with the full Upgrade-II dataset (~300 fb^-1). R2 sits a factor ~5 above that floor — covered, though the margin is a factor of a few, not decades. No other unit is visible: R0 has eps ~ 1.5e-6 (eps^2 ~ 2e-12), R3/R4 have eps = 1e-6, R1's Z' at 2-2.8 TeV lies outside the bump-hunt window, and R5 has no Z'.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R2"]},
          {"label": "not seen", "regions": ["R0", "R1", "R3", "R4", "R5"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1+R3+R4+R5",
          "name": "Fermi-LAT dwarf-spheroidal stack with dark-cascade spectral templates",
          "observable": "stacked-dwarf sigma-v (cascade spectrum, ~70 GeV DM) >= 1e-26 cm^3/s ?",
          "what_this_is": "The Fermi Large Area Telescope is a gamma-ray satellite that stares at small satellite galaxies of the Milky Way, which are rich in dark matter but nearly free of ordinary gamma-ray sources. If two dark-matter particles annihilate there into a pair of dark force carriers that each decay to ordinary quarks and leptons, the result is a broad gamma-ray glow with a characteristic 'cascade' energy shape. Only one region here (R0) has a large enough dark coupling to produce this glow at the thermal-relic level; all the others predict gamma-ray rates thousands of times smaller, so seeing or not seeing the glow cleanly tags R0.",
          "reasoning": "R0 (M_DM ~ 68 GeV, g' = 0.1483 pinned across the region, M_Z' = 20-34 GeV) annihilates through the open secluded channel with sigma-v ~ g'^4/(16 pi m^2) ~ 2.4e-26 cm^3/s, essentially thermal, into Z'Z' -> 4 SM fermions — a 4-body cascade spectrum that the catalog's WW-template curves do not fit (which is why no catalog sigma-v node fired here). Fermi's 6-year stacked dwarf limits already touch thermal near 70-100 GeV for quark channels, the 15-year projection reaches several times below thermal, and cascade spectra weaken limits by only ~2x. All other units predict sigma-v <= 1e-28: R1's secluded channel is closed and its portal gives ~1e-29, R3/R4 have g' = 0.003, R5's alpha1 = 0.0021 gives ~4e-29.",
          "feasibility": "Uses the existing Fermi-LAT with 15+ years of archival data already in hand; the only new ingredient is a stacked dwarf reanalysis with 4-body cascade templates, costing ~2x in limit strength versus b-bbar — well under a 3x stretch. Dominant systematic: dwarf J-factor (dark-matter content) uncertainties, ~factor 2 on the flux.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "seen", "regions": ["R0"]},
            {"label": "not seen", "regions": ["R1", "R3", "R4", "R5"]}
          ]
        },
        {
          "attach_to": "R1+R3+R4+R5",
          "name": "FCC-hh 100 TeV Drell-Yan dilepton bump hunt",
          "observable": "dilepton resonance at 2-3 TeV with sigma x BR >= 0.1 fb ?",
          "what_this_is": "A proposed 100 TeV proton-proton collider (FCC-hh) would extend the classic search for a new heavy cousin of the Z boson: look for a narrow peak in the mass spectrum of electron or muon pairs at a few TeV. It is the definitive probe of any TeV-scale force carrier that couples to ordinary quarks and leptons, even weakly. One region here (R1) contains a 2-2.8 TeV dark force carrier with an unusually large photon mixing that would produce tens of thousands of such events, while the remaining regions predict exactly none.",
          "reasoning": "R1 has M_Z' = 2.0-2.8 TeV with eps = 0.1, i.e. a photon-like SM coupling eps*e ~ 0.03, giving sigma x BR(ll) at the fb level at 100 TeV — O(1e4) events in 30 ab^-1, an unmissable peak. Electroweak precision cannot substitute: the Z-pole shift scales as eps^2 m_Z^2/m_Z'^2 ~ 1.4e-5, at the edge of even a Tera-Z program. R3/R4 (eps = 1e-6) and R5 (no Z') give zero signal. The catalog's HL-LHC dilepton recast is already computed, so this node adds the energy frontier beyond it.",
          "feasibility": "Closest instrument: ATLAS/CMS dilepton searches, currently reaching ~5 TeV for sequential-strength Z' at 14 TeV; the required machine is FCC-hh (CDR published, not funded), whose 2-3 TeV dilepton sensitivity exceeds R1's predicted signal by orders of magnitude. Detection margin is huge; the gate is building a next-generation collider. Dominant systematic: parton-distribution uncertainty in the high-mass Drell-Yan tail, irrelevant at this signal size.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "seen", "regions": ["R1"]},
            {"label": "not seen", "regions": ["R3", "R4", "R5"]}
          ]
        },
        {
          "attach_to": "R3+R4+R5",
          "name": "Argon/xenon signal-ratio isospin decomposition",
          "observable": "Ar/Xe per-nucleon rate ratio >= 1.1x isoscalar prediction ?",
          "what_this_is": "Once dark matter is detected scattering off nuclei, comparing the event rate in an argon detector against a xenon detector reveals *what* inside the nucleus it couples to: a Higgs-mediated interaction sees all nucleons equally (rate scales with atomic mass squared), while a photon-mixed force carrier sees only protons (rate scales with charge squared). Argon has a higher proton fraction than xenon, so a proton-only component raises the argon rate relative to xenon by a calculable amount. One region here (R4) hides a light 1 GeV mediator that dominates its scattering with exactly this proton-only pattern, while the other two regions scatter purely through the Higgs.",
          "reasoning": "R4's Z' (1 GeV, eps = 1e-6, g' = 0.003) is invisible to production experiments (rates ~ eps^2 = 1e-12, ctau ~ 2 cm) but mediates direct detection with f_p = g' eps e / M_Z'^2 ~ 9e-10 GeV^-2, giving sigma_p ~ 9e-47 cm^2 on protons only — exceeding R4's isoscalar Higgs-portal piece (~5e-48 cm^2), so most of its rate is charge-coupled. Pure proton coupling raises the Ar/Xe per-nucleon ratio by (18/40)^2/(54/131)^2 ~ 1.19; R4's mixture predicts a ~10-15% argon excess. R3's identical vertex is killed by the (10.35 GeV)^4 propagator (sigma_p ~ 1e-50), and R5 has no Z': both are exactly isoscalar.",
          "feasibility": "Closest instruments: XLZD (xenon) plus DarkSide-20k/Argo (argon), both formally proposed; at the 1-10x-XLZD signal level each collects O(100) events, so the ratio is measured to ~10% statistically — the required ~5% needs roughly the full Argo-scale exposure, a ~2-3x stretch but on an already-marginal measurement. Halo-model uncertainty partially cancels in the ratio; the dominant residual systematics are the different velocity-integral weighting of the two targets and nuclear-response calibration.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "proton-enhanced", "regions": ["R4"]},
            {"label": "isoscalar", "regions": ["R3", "R5"]}
          ]
        },
        {
          "attach_to": "R3+R5",
          "name": "Percent-level DM mass from joint Xe+Ar+directional recoil fit",
          "observable": "recoil-spectrum m_DM <= 93 GeV ?",
          "what_this_is": "The energy spectrum of nuclear recoils in a dark-matter detector encodes the dark-matter particle's mass, and combining targets of different nuclear mass (xenon, argon) plus a gas detector that also measures recoil direction would over-constrain the fit. This proposal is a dedicated multi-target campaign to push the mass measurement to the percent level near 90 GeV. It matters here because the two surviving regions are observationally identical in every other channel — their only physical difference is a 3 GeV mass gap (about 92 vs about 94.6 GeV).",
          "reasoning": "R5 spans M_DM = 91.6-92.05 GeV and R3 spans 94.48-94.8 GeV; a cut at 93 GeV separates them perfectly in principle. Everything else matches: same Higgs-portal coupling (0.0021 vs 0.0022), same isoscalar sigma_SI, both with sigma-v <= 1e-28 cm^3/s, and R3's dark sector (eps = 1e-6, g' = 0.003, M_Z' = 10.35 GeV) is beyond any production or mediation experiment. This is the honest bottom of the discrimination chain: only the mass differs.",
          "feasibility": "Closest program: joint XLZD + DarkSide-20k spectral fits, whose projected mass uncertainty at m ~ 100 GeV is tens of GeV because xenon recoil spectra asymptote to the heavy-DM shape above ~50 GeV; adding a CYGNUS-type directional detector constrains the velocity integral but not enough. Resolving 3% at 93 GeV requires well over 10x better mass reconstruction than any proposed multi-target combination. Dominant systematic: degeneracy between DM mass and the local velocity distribution.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "yes", "regions": ["R5"]},
            {"label": "no", "regions": ["R3"]}
          ]
        }
      ]
    }
  ]
}
```