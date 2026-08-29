I'll verify the arXiv references I plan to cite (via arxiv.org), then deliver the full answer in a single message.
All three references verified (LHCb A′→μμ arXiv:1910.06926; CMS narrow dimuon resonance arXiv:1912.04776; Belle II Physics Book arXiv:1808.10567). Here is the complete answer.

---

# Degeneracy breaking for the two `root_yes_no_yes*` sibling leaves

## Shared physics of these leaves

Both leaves contain **only** the complex-scalar-singlet + dark-U(1)′ Lagrangians (charge +1 and −1 variants). Every unit carries a light kinetically-mixed Z′ with **MZp = 1–37 GeV and ε = 10⁻⁶–0.1**, while MDM = 320–710 GeV. Three consequences drive everything below:

1. **The Z′ decays 100% visibly.** Since MZp ≪ 2·MDM, the invisible channel is closed; the Z′ decays through kinetic mixing to SM fermions with BR(μμ) ≈ 15–30% at these masses (photon-like couplings). Width Γ ≈ N_eff·α ε² m/3, so cτ ≈ 2 cm·(10⁻⁶/ε)²·(1 GeV/m): for ε ≳ 10⁻³ the decay is prompt at a collider; for ε ~ 10⁻⁵–10⁻⁴ it is (sub-)mm displaced; for ε ~ 10⁻⁶ it is cm-scale — always far too short-lived for beam dumps (SHiP-class experiments cannot reach m ≥ 1 GeV at ε ≥ 10⁻⁶: the lab decay length at a dump is ≲ 1 m versus ~50 m of shielding).
2. **The catalog's Z′-dilepton observable does not cover this mass range.** Our catalog entry is a high-mass Drell-Yan σ×BR recast (HL-LHC resonance reach, ≳ 100–200 GeV). The 1–37 GeV window is covered instead by the LHCb prompt A′→μμ scan (214 MeV–70 GeV, ε² sensitivity down to ~10⁻⁷–10⁻⁶ away from the φ, J/ψ, ψ′, Υ vetoes; arXiv:1910.06926) and the CMS low-mass scouting dimuon search (11.5–45 GeV; arXiv:1912.04776). These are genuinely different measurements: a **narrow μμ mass peak**, whose position measures MZp to <1% and whose rate scales as ε². This is the single most powerful un-cataloged observable for these leaves, and — decisively — the mass **bins separate the two Lagrangians**, because within each leaf the viable [+] and [−] islands sit at different (MZp, ε).
3. **Direct detection carries no Z′ information here.** The U(1)′ current of a complex scalar split into (sr, si) by the U(1)′-breaking quartics is purely off-diagonal, so elastic Z′ exchange on nuclei is absent/inelastically forbidden; σ_SI is Higgs-portal (α1) dominated and isoscalar for every unit. That is why ε = 0.1 points coexist with σ_SI at the 10⁻⁴⁸–10⁻⁴⁷ cm² level, and why no direct-detection refinement (isospin ratios, modulation, directionality) can split these units — the DD amplitude simply does not know about ε, MZp or gU1p. This eliminates an entire class of would-be discriminators and focuses everything on the dark-photon plane plus γ-ray spectral information.

Honesty note that applies to both leaves: units with ε ≈ 0.1 at MZp = 10–40 GeV (R3, R7, R16 in the first leaf; R0, R16 in the second) predict prompt dimuon rates 10³–10⁴× above the *current* LHCb/CMS limits and are in tension with LEP kinetic-mixing bounds (ε ≲ 0.03). Within this exercise that makes the proposed measurement maximally decisive: a first look at existing/near-term data either reveals a spectacular peak or immediately kills those regions.

---

## Leaf `root_yes_no_yes_yes` (IceCube-Gen2 ✓, CTA WW 1–10×, DARWIN ✓; 29 units)

### Level 1 — LHCb/CMS prompt A′→μμ mass scan

The observable is the position (or absence) of a narrow prompt dimuon peak, 1–40 GeV. Predicted signals, using rate ∝ ε² normalized to the LHCb ε² ≈ 10⁻⁶ sensitivity (σ·BR ~ 10 fb scale):

- **Peak at 1.0 GeV**: R4 (ε 0.006–0.1) and R13 (ε 0.004–0.014), both [−] variants with MZp pinned at 1.000–1.003 GeV — predicted σ·BR ~ 0.2–100 pb, i.e. 10²–10⁴× current sensitivity. *Caveat:* this sits ~17 MeV below the φ(1020); LHCb's dimuon resolution (~7 MeV) resolves it, but the φ radiative tail is the dominant background, so this bin is the least clean of the "seen" outcomes.
- **Peak 2.2–2.5 GeV**: R10 (ε = 0.1) and R20 (ε ≈ 0.005), both [+].
- **Peak 2.5–3.0 GeV**: R28 (ε 0.054–0.1), [+]. LHCb mass resolution (~0.5%) cleanly separates 2.43 from 2.57 GeV, hence the two bins.
- **Peak 12–15 GeV**: R16 (ε 0.078–0.1), [−] — also inside CMS scouting coverage, predicted ~10⁴× the current limit.
- **Peak 19–25 GeV**: R3 (ε = 0.1), [+].
- **Peak ≈ 37 GeV**: R7 (ε 0.031–0.059), [+].
- **No peak**: all remaining 21 units, whose ε is ≲ 5×10⁻⁴ (rates ≥ 4× below even LHCb Upgrade-II reach, ε² ~ 10⁻⁷) — except three flagged stragglers: R0 and R1 span ε = 10⁻⁶–0.1, so their high-ε *tails* would be carved away by a peak at 5–20 GeV (R0) or 1.7–5.4 GeV (R1) — the split trims but does not fully classify them; and R17 (9.83–9.89 GeV, ε 0.0014–0.0035) falls in the LHCb Υ-veto shadow and below the 11.5 GeV CMS scouting floor, so despite a nominally reachable ε it lands honestly in "no peak" at hadron colliders.

**Every "seen" outcome is single-Lagrangian**: 1.0 GeV and 12–15 GeV ⇒ pure U1p[−]; 2.2–3.0, 19–25 and 37 GeV ⇒ pure U1p[+]. One measurement separates the two Lagrangians whenever it fires. Status: **Splits!**

### Level 2 — novel nodes

- **R4+R13** (both [−], MZp = 1 GeV, everything overlapping): the only remaining lever is the peak *rate*. At 1 GeV the LHCb ε² ≈ 10⁻⁶ sensitivity corresponds to σ·BR of order 10 fb, so ε = 0.02 maps to ~ 4 pb. Cut σ·BR ≥ 1 pb: R4 (ε up to 0.1, most of its range above 0.02) passes; R13 (ε ≤ 0.014) fails. **Marginal**: the ε ranges overlap in 0.006–0.014, and the σ·BR normalization at 1 GeV carries an O(3) production-model uncertainty; a low-rate outcome does not strictly exclude low-ε R4. Dominant systematic: the φ→μμ radiative tail. Rating: possible (it is the same LHCb Upgrade-II dataset, read out for signal strength).
- **R10+R20** (both [+], masses overlap at 2.30–2.43 GeV): rate ratio (0.1/0.005)² ≈ 400 is robust to any normalization. Predicted σ·BR ~ 100 pb (R10) vs ~ 0.25 pb (R20); cut at 1 pb. Clean; rating possible.
- **The 21-unit "no peak" blob** gets two independent probes:
  - **Belle II ISR scan** (a funded program, placed here only because the schema allows one Level-1 node): e⁺e⁻→γ A′(→μμ), 50 ab⁻¹, reaches ε ≈ (3–10)×10⁻⁴ up to ~10 GeV and, crucially, has no Υ-shadow problem — R17's 9.83–9.89 GeV peak sits between the ISR-produced Υ(1S) (9.46) and Υ(2S) (10.02), resolvable at ~10 MeV resolution. Only R17 (ε ≥ 1.4×10⁻³) is above reach across its whole range; upper tails of R5 (≤5×10⁻⁴) and of R0/R1 are marginal. Outcomes: peak at 9.8 GeV ⇒ R17; nothing ⇒ the rest.
  - **CTA Galactic-center spectral decomposition** (spectral *shape*, not the cataloged flux-vs-limit): secluded annihilation φφ*→Z′Z′ scales as ⟨σv⟩ ≈ π α_D²/m² with α_D = g²/4π. For R0's upper range (g ≈ 0.33, m ≈ 650 GeV) this is ~7×10⁻²⁷ cm³/s, i.e. a 2–16% soft, boosted-cascade admixture on top of the observed WW-like flux (4×10⁻²⁶–4×10⁻²⁵ cm³/s); for R17 (g = 0.23, m ≈ 337 GeV) ~5%. For every g ≲ 0.05 unit (the entire [−] MZp = 1 family and the [+] MZp = 1.3–1.8 family) the fraction is < 10⁻³ — unobservable. Cut: cascade component ≥ 3% of the DM flux. Yes ⇒ {R0, R17}; No ⇒ the other 19. **Marginal for R0's low-g half and for R2/R18/R19 (0.1–1%, assigned "no")**; requires percent-level spectral modeling on a few-σ signal — rated unlikely.
  - What remains after both — the deep interior ε ≲ 10⁻⁴ at MZp = 1–6 GeV — sits in the well-known open window of the dark-photon plane between prompt searches and beam dumps (lifetimes too short for dumps, rates too small for prompt triggers). I state this as an honest hard floor for this leaf rather than inventing a fake discriminator; the displaced-vertex concept proposed for the sibling leaf (below) is the only idea that touches it, and it is speculative.

---

## Leaf `root_yes_no_yes_no` (same path but DARWIN ✗; 24 units)

The DARWIN-null is reflected in the tiny portal couplings (α1 ~ 0.002–0.005) of most [+] units here; the Z′ sector is if anything *more* visible than in the sibling leaf.

### Level 1 — LHCb/CMS prompt A′→μμ mass scan

- **Peak 1.0–2.2 GeV**: R5, R6, R7, R9, R13, R17, R18, R19, R20, R21, R22 — eleven units, **all U1p[+]**, with ε from 0.005 up to 0.1 (σ·BR from ~0.25 pb to ~100 pb, i.e. 25–10⁴× current LHCb sensitivity). Marginal members flagged: R6 (ε down to 1.4×10⁻³) and R9 (down to 2.2×10⁻³) — their low-ε ends need Upgrade-II statistics. φ(1020) caveat applies to the sub-population with MZp ≈ 1.0.
- **Peak 6–9 GeV**: R16 ([−], ε 0.027–0.1) and R23 ([+], ε ≈ 0.0016; only ~1.6× the current limit — Upgrade II makes it solid; flagged marginal today).
- **Peak 17–24 GeV**: R0 ([+], ε = 0.1) — also a 10⁴× signal in CMS scouting.
- **No peak**: R1, R2, R3, R4, R8, R10, R11, R12, R14, R15. Flags: R1 spans ε up to 0.1 (its high-ε tail at 5–16 GeV would be carved away); R2 (≤2.4×10⁻³) and R3 (≤1.6×10⁻³) graze the reach at their extreme tops; R8 (9.82–9.92 GeV, ε up to 9.4×10⁻³) is again the Υ-shadow case — invisible to LHCb/CMS despite a large coupling.

A "peak below 2.2 GeV" or at 17–24 GeV ⇒ uniquely U1p[+]; the 6–9 GeV bin is mixed and handled below. Status: **Splits!**

### Level 2 — novel nodes

- **R16+R23** (the one mixed-Lagrangian outcome, masses overlapping at 7.3 GeV): peak rate. R23 predicts σ·BR ~ 25 fb; R16 predicts 7–100 pb (ratio ≥ 285, robust). Cut σ·BR ≥ 0.5 pb: yes ⇒ R16 [−], no ⇒ R23 [+] — **this rate cut separates the two Lagrangians**. Rating: possible (LHCb Upgrade-II signal-strength readout; dominant systematic is the production-model normalization, dwarfed by the ×285 ratio).
- **The 11-unit [+] group at 1–2.2 GeV**: same Lagrangian, so lower value, but the units stratify in MDM. Propose a **CTA deep-exposure γ-ray spectral endpoint measurement** (endpoint at E ≈ MDM; J-factor-independent, unlike the cataloged flux ratio). Cut: endpoint ≥ 450 GeV. Below ⇒ {R7, R18, R22} (MDM 338–497, 355–433, 376–433 GeV); above ⇒ {R5, R6, R9, R13, R17, R19, R20, R21} (452–692 GeV). Marginal: R7 (338–497) and R17 (370–641) straddle the cut; CTA's ~7% energy resolution and the softness of the WW endpoint limit MDM to ±15–20% on a few-σ signal, so this discriminates the ends of the distribution, not the middle. Rating: possible (CTA is under construction; needs ~2–3× deeper GC exposure than the baseline survey; dominant systematic: energy-scale calibration).
- **The 10-unit "no peak" blob** gets two probes:
  - **Belle II ISR γμμ scan, 50 ab⁻¹**: uniquely rescues **R8** — 9.82–9.92 GeV lies between the ISR Υ(1S) and Υ(2S) peaks, and ε ≥ 1.25×10⁻³ is ≥ 4× above Belle II's ε ≈ 3×10⁻⁴ reach across the whole unit. Outcomes: peak at 9.8–9.9 GeV ⇒ R8; nothing ⇒ rest (upper tails of R2, R3, R12, R14 are within ~1–2× of reach — flagged marginal "no"). Rating: possible (funded instrument; dominant systematic: ISR μμ continuum shape).
  - **Displaced-dimuon vertex scan** (genuinely novel concept): a high-rate LHCb-Upgrade-II-class spectrometer with a dedicated displaced low-mass dimuon trigger, targeting ε² ~ 10⁻⁹ (ε ~ 3×10⁻⁵) at 1–16 GeV — the open window. In this window lab decay lengths are 20 μm–5 cm (e.g. ε = 10⁻⁵ at 1.2 GeV: cτ ≈ 110 μm, ×γ ≈ 30 ⇒ ~3 mm), distinguishable from prompt background with ~20 μm IP resolution but currently untriggerable. Outcomes by peak mass: ≤ 2.2 GeV ⇒ {R2, R10, R11, R12, R14, R15}; > 3 GeV ⇒ {R1, R3}; nothing ⇒ {R4} (ε ≤ 2.1×10⁻⁶ gives ≲ 1 expected event even at 300 fb⁻¹ — out of reach of any proposed machine). Honesty: R4's mass range (1.6–7.9 GeV) straddles the bins and only its rate puts it in "nothing"; R1's assignment covers its reachable low-ε portion. This needs ~100× the Upgrade-II ε² sensitivity: rated **speculative**.

---

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_yes_no_yes_yes",
      "lit_review": {
        "name": "LHCb/CMS prompt A'->mumu scan",
        "observable": "narrow mumu peak: none | 1.0 | 2.2-2.5 | 2.5-3.0 | 12-15 | 19-25 | 37 GeV ?",
        "refs": ["arXiv:1910.06926", "arXiv:1912.04776"],
        "reasoning": "All units carry a kinetically mixed Z' (1-37 GeV) decaying 100% visibly (MZp << 2 MDM), BR(mumu)~15-30%. Peak position measures MZp to <1%; rate scales as eps^2 against LHCb's eps^2~1e-6 floor (CMS scouting covers 11.5-45 GeV). High-eps units predict 1e2-1e4 x current sensitivity: R4,R13 at 1.0 GeV (phi(1020) tail is the background caveat); R10,R20 at 2.3-2.4; R28 at 2.6-2.9 (0.5% resolution splits it from R10/R20); R16 at 12-15; R3 at 19-25; R7 at 36.6. Every seen bin is single-Lagrangian: 1.0 and 12-15 GeV are pure U1p[-], the rest pure U1p[+]. Remaining units have eps <~ 5e-4 (below even Upgrade-II reach) except: R0,R1 straddle eps=1e-6..0.1 (their high-eps tails get carved, not classified) and R17 (9.83 GeV, eps to 3.5e-3) hides in the LHCb Upsilon veto below the CMS 11.5 GeV floor. Catalog's Z' dilepton is the high-mass DY recast, >~100 GeV; this window is untouched by it.",
        "status": "Splits!",
        "outcomes": [
          {"label": "no peak", "regions": ["R0", "R1", "R2", "R5", "R6", "R8", "R9", "R11", "R12", "R14", "R15", "R17", "R18", "R19", "R21", "R22", "R23", "R24", "R25", "R26", "R27"]},
          {"label": "1.0 GeV", "regions": ["R4", "R13"]},
          {"label": "2.2-2.5 GeV", "regions": ["R10", "R20"]},
          {"label": "2.5-3.0 GeV", "regions": ["R28"]},
          {"label": "12-15 GeV", "regions": ["R16"]},
          {"label": "19-25 GeV", "regions": ["R3"]},
          {"label": "37 GeV", "regions": ["R7"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R4+R13",
          "name": "LHCb Upgrade-II peak signal strength",
          "observable": "sigma.BR(A'->mumu, 1.0 GeV) >= 1 pb ?",
          "reasoning": "Same peak, different eps: R4 spans 0.006-0.1, R13 only 0.004-0.014; rate ~ eps^2 with sigma.BR(eps^2=1e-6) ~ 10 fb, so eps=0.02 maps to ~4 pb. Above 1 pb favors R4, below favors R13. Marginal: eps ranges overlap in 0.006-0.014 and the 1 GeV production normalization is uncertain by O(3).",
          "feasibility": "LHCb Upgrade II (300 fb^-1); current 5.5 fb^-1 search already at eps^2~1e-6 here; needed improvement is none in reach, only rate readout; dominant systematic: phi(1020)->mumu radiative tail under the 1.00 GeV peak.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "yes", "regions": ["R4"]},
            {"label": "no", "regions": ["R13"]}
          ]
        },
        {
          "attach_to": "R10+R20",
          "name": "LHCb Upgrade-II peak signal strength",
          "observable": "sigma.BR(A'->mumu, 2.3-2.5 GeV) >= 1 pb ?",
          "reasoning": "Masses overlap (2.30-2.43 GeV) but eps=0.1 (R10) vs 0.005 (R20) gives a x400 rate ratio, robust to normalization: ~100 pb vs ~0.25 pb.",
          "feasibility": "LHCb Upgrade II; both peaks are far above the current eps^2~1e-6 floor, so this is pure signal-strength discrimination; dominant systematic: dark-photon production model at low mass (O(3)), small against x400.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "high rate", "regions": ["R10"]},
            {"label": "low rate", "regions": ["R20"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R5+R6+R8+R9+R11+R12+R14+R15+R17+R18+R19+R21+R22+R23+R24+R25+R26+R27",
          "name": "Belle II ISR gamma+mumu scan, 50/ab",
          "observable": "ISR mumu peak at 9.8-9.9 GeV (>=5 sigma) ?",
          "reasoning": "Belle II radiative return reaches eps~(3-10)e-4 up to ~10 GeV with no Upsilon-veto problem: R17 (9.83-9.89 GeV, eps 1.4e-3-3.5e-3) sits between ISR Upsilon(1S) and Upsilon(2S), resolvable at ~10 MeV, and is above reach over its whole range. All other units have eps <~ 5e-4 (upper tails of R0, R1, R5 marginal).",
          "feasibility": "Belle II, funded, 50 ab^-1 baseline; current sensitivity eps~1e-3, projection 3e-4 (factor ~3); dominant systematic: ISR mumu continuum and Upsilon radiative tails.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "peak 9.8", "regions": ["R17"]},
            {"label": "no peak", "regions": ["R0", "R1", "R2", "R5", "R6", "R8", "R9", "R11", "R12", "R14", "R15", "R18", "R19", "R21", "R22", "R23", "R24", "R25", "R26", "R27"]}
          ]
        },
        {
          "attach_to": "R0+R1+R2+R5+R6+R8+R9+R11+R12+R14+R15+R17+R18+R19+R21+R22+R23+R24+R25+R26+R27",
          "name": "CTA GC spectral decomposition, Z'Z' cascade",
          "observable": "soft cascade component >= 3% of DM gamma flux ?",
          "reasoning": "Secluded phi phi* -> Z'Z' scales as pi.alpha_D^2/m^2: g=0.33, m=650 GeV gives ~7e-27 cm3/s, a 2-16% boosted-cascade admixture on the observed WW-like flux (4e-26 to 4e-25); g=0.23 at 337 GeV (R17) ~5%. All g<~0.05 units predict <0.1%. Marginal: R0's low-g half and R2/R18/R19 (0.1-1%) sit below cut and are assigned 'no'. This is spectral shape, not the cataloged flux-vs-limit.",
          "feasibility": "CTA (under construction); needs percent-level spectral template separation on a few-sigma GC signal, ~3x beyond baseline-survey statistics; dominant systematic: GC astrophysical emission model degenerate with a soft DM component.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "cascade seen", "regions": ["R0", "R17"]},
            {"label": "pure WW", "regions": ["R1", "R2", "R5", "R6", "R8", "R9", "R11", "R12", "R14", "R15", "R18", "R19", "R21", "R22", "R23", "R24", "R25", "R26", "R27"]}
          ]
        }
      ]
    },
    {
      "leaf_id": "root_yes_no_yes_no",
      "lit_review": {
        "name": "LHCb/CMS prompt A'->mumu scan",
        "observable": "narrow mumu peak: none | 1.0-2.2 | 6-9 | 17-24 GeV ?",
        "refs": ["arXiv:1910.06926", "arXiv:1912.04776"],
        "reasoning": "Same physics as the sibling leaf: peak position = MZp, rate ~ eps^2 vs LHCb's eps^2~1e-6 floor (CMS scouting from 11.5 GeV). Eleven units peak at 1.0-2.2 GeV with eps 0.005-0.1 (0.25-100 pb, 25-1e4 x current sensitivity) and are ALL U1p[+] - a single-Lagrangian outcome (R6, R9 low-eps ends need Upgrade II; phi(1020) caveat at 1.0 GeV). 6-9 GeV: R16 [-] (eps to 0.1) plus marginal R23 [+] (eps 1.6e-3, ~1.6x current limit; solid at Upgrade II). 17-24 GeV: R0 [+] at eps=0.1, also a 1e4x CMS scouting signal. No peak: eps<~2e-3 units; flags: R1 straddles eps to 0.1 (high-eps tail gets carved), R2/R3 tops graze reach, R8 (9.82-9.92 GeV, eps to 9.4e-3) hides in the Upsilon shadow below CMS's 11.5 GeV floor.",
        "status": "Splits!",
        "outcomes": [
          {"label": "1.0-2.2 GeV", "regions": ["R5", "R6", "R7", "R9", "R13", "R17", "R18", "R19", "R20", "R21", "R22"]},
          {"label": "6-9 GeV", "regions": ["R16", "R23"]},
          {"label": "17-24 GeV", "regions": ["R0"]},
          {"label": "no peak", "regions": ["R1", "R2", "R3", "R4", "R8", "R10", "R11", "R12", "R14", "R15"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R16+R23",
          "name": "LHCb Upgrade-II peak signal strength",
          "observable": "sigma.BR(A'->mumu, 6-9 GeV) >= 0.5 pb ?",
          "reasoning": "Masses overlap at 7.3 GeV but eps differs x17-60: R16 predicts 7-100 pb, R23 ~25 fb (ratio >= 285, robust to normalization). This cut also separates the two Lagrangians: high rate => U1p[-], low => U1p[+].",
          "feasibility": "LHCb Upgrade II; R23 needs ~2x beyond the current eps^2 limit (well within 300 fb^-1); dominant systematic: production-model normalization, negligible against x285.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "high rate", "regions": ["R16"]},
            {"label": "low rate", "regions": ["R23"]}
          ]
        },
        {
          "attach_to": "R13+R17+R18+R19+R20+R21+R22+R5+R6+R7+R9",
          "name": "CTA deep-exposure GC spectral endpoint",
          "observable": "gamma spectrum endpoint >= 450 GeV ?",
          "reasoning": "Endpoint sits at E~MDM, J-factor independent (unlike the cataloged flux ratio). Below cut: R7 (338-497), R18 (355-433), R22 (376-433). Above: R5, R6, R9, R13, R19, R20, R21 (452-692) and R17. Marginal: R7 and R17 (370-641) straddle; with ~7% energy resolution and a soft WW endpoint, MDM comes out to +-15-20% on a few-sigma signal, so only the ends of the mass distribution separate cleanly.",
          "feasibility": "CTA southern array; energy resolution ~7% above 100 GeV is sufficient, but needs ~2-3x the baseline GC-survey exposure for endpoint statistics; dominant systematic: energy-scale calibration and endpoint softness.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "heavy", "regions": ["R5", "R6", "R9", "R13", "R17", "R19", "R20", "R21"]},
            {"label": "light", "regions": ["R7", "R18", "R22"]}
          ]
        },
        {
          "attach_to": "R1+R10+R11+R12+R14+R15+R2+R3+R4+R8",
          "name": "Belle II ISR gamma+mumu scan, 50/ab",
          "observable": "ISR mumu peak at 9.8-9.9 GeV (>=5 sigma) ?",
          "reasoning": "R8 (9.82-9.92 GeV, eps 1.25e-3-9.4e-3) is invisible at hadron colliders (Upsilon shadow, below CMS 11.5 GeV floor) but sits between the ISR Upsilon(1S) and Upsilon(2S) at Belle II, >=4x above the eps~3e-4 projected reach over its entire range. All other units are below reach (upper tails of R2, R3, R12, R14 within ~1-2x: marginal 'no').",
          "feasibility": "Belle II, funded, 50 ab^-1; current eps~1e-3, projection 3e-4 (factor ~3); dominant systematic: ISR continuum and Upsilon radiative tails, resolved at ~10 MeV mass resolution.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "peak 9.8", "regions": ["R8"]},
            {"label": "no peak", "regions": ["R1", "R2", "R3", "R4", "R10", "R11", "R12", "R14", "R15"]}
          ]
        },
        {
          "attach_to": "R1+R10+R11+R12+R14+R15+R2+R3+R4+R8",
          "name": "Displaced-dimuon vertex spectrometer (LHCb-U2 class)",
          "observable": "displaced mumu peak (vertex 0.02-50 mm), 1-16 GeV: mass bin ?",
          "reasoning": "These units occupy the open dark-photon window (eps ~ 1e-6-1e-3 at 1-16 GeV): decay lengths 20 um-5 cm (e.g. eps=1e-5, 1.2 GeV: c.tau ~110 um, x gamma~30 => ~3 mm) - too short for beam dumps, untriggered by prompt searches. A dedicated displaced low-mass dimuon trigger reaching eps^2~1e-9 sees peaks at MZp: <=2.2 GeV => R2, R10, R11, R12, R14, R15; >3 GeV => R1, R3. R4 (eps<=2.1e-6) yields <~1 event even then => nothing. Caveats: R4's mass range straddles the bins (assigned by rate); R1 classification covers its reachable low-eps portion.",
          "feasibility": "Closest instrument: LHCb Upgrade II displaced-vertex trigger (IP resolution ~20 um); current displaced A'->mumu coverage stops at 0.35 GeV; requires ~100x the projected Upgrade-II eps^2 sensitivity at these masses plus a new trigger path; dominant systematic: heavy-flavor double-semileptonic displaced background.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "peak <=2.2", "regions": ["R2", "R10", "R11", "R12", "R14", "R15"]},
            {"label": "peak >3", "regions": ["R1", "R3"]},
            {"label": "nothing", "regions": ["R4"]}
          ]
        }
      ]
    }
  ]
}
```