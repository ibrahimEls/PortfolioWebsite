I'll first verify the references I plan to cite (the rules require confirming arXiv IDs before citing), then deliver the complete answer in one message. Let me load the web tools.
Now verifying the three candidate references and pinning down the SHiP/FASER2 sensitivity contours at mA' ≈ 1 GeV.
All three references verified (SHiP sensitivity paper, FPF white paper, dark-photon review), and the key quantitative fact confirmed: SHiP's published unique-sensitivity band covers mA' = 0.8–3.3 GeV with ε² from 10⁻¹¹ down to 10⁻¹⁷ — which brackets region R2 below. I can now deliver the full answer.

(Side note, unrelated to this task: the claude.ai Gmail / Google Calendar / Google Drive connectors need re-authorization via your claude.ai connector settings before they can be used; this session can't run the OAuth flow.)

---

## Reasoning — Leaf `root_no_yes_yes_yes_yes_no` (280 pts, units R0, R1, R2)

**Why the catalog is stuck.** All three units belong to the *same* Lagrangian (Complex Scalar Singlet + dark U(1) [Z2+3+4+5]), so this is a pure region-separation problem. The catalog observables all flow through the Higgs portal and the DM mass, and those are nearly identical across the three regions: MDM ≈ 94.2–94.7 GeV and α₁ ≈ 0.0023–0.0027 everywhere. Identical portal coupling and mass ⇒ identical σ_SI (1–10× DARWIN), identical ⟨σv⟩(WW) (1–10× CTA), same BR(h→inv) band. The quartics (α₂…α₆) differ wildly between regions but are experimentally inert at 94 GeV: even α₆ = 10 gives σ_self/m ~ 10⁻³⁵ cm²/g, ~30 orders below cluster bounds. The **only** sector that differs observably is the dark photon: R0 has (MZ′ = 2.0–2.8 TeV, ε = 0.1, g′ ≈ 0.4); R1 has (MZ′ = 56–163 GeV, ε ≈ 3.6–7.7×10⁻⁵, g′ ≈ 0.02–0.07); R2 has (MZ′ = 1 GeV, ε ≈ 1.0–1.35×10⁻⁶, g′ = 0.003). Three utterly different Z′ regimes → probe the Z′ directly, with instruments not in the catalog.

**Level 1 — SHiP displaced dark-photon search (splits R2 from R0+R1).**
R2's Z′ is a textbook visibly-decaying dark photon: mχ = 94 GeV ≫ MZ′/2, so A′→χχ is closed and BR(A′→SM) = 100% (≈40% e⁺e⁻+μ⁺μ⁻ at 1 GeV). Its width Γ ≈ (αε²/3)·mA′·(2+R(1 GeV)) ≈ 7×10⁻¹⁵ GeV for ε = 10⁻⁶ gives cτ ≈ 1.5–2.7 cm; with the 40–350 GeV boost of proton-bremsstrahlung production at the SPS (γβ·cτ ~ 1–10 m), a fraction of the enormous ε²-scaled brem/QCD flux survives to the decay volume. Quantitatively, R2 sits at (mA′, ε²) = (1.0 GeV, 1.0–1.8×10⁻¹²), inside SHiP's published unique-sensitivity band, mA′ = 0.8–3.3 GeV with ε² spanning 10⁻¹¹–10⁻¹⁷ (arXiv:2011.05115), predicting O(10) reconstructed dilepton vertices at m(ℓℓ) ≈ 1 GeV over near-zero background at 2×10²⁰ POT. Honest caveat: R2 lies toward the steep short-lifetime (upper-ε) edge of that contour, so the top of the region (ε = 1.35×10⁻⁶) is marginal — but FASER2 at the Forward Physics Facility attacks the same point from above with γ ~ 10³ TeV-energy boosts (arXiv:2203.05090), making the combined coverage robust. R0 predicts exactly zero events: its lightest dark state is at 2 TeV, far above beam-dump reach. R1 also predicts zero: MZ′ ≥ 56 GeV exceeds the fixed-target CM energy √s ≈ 27 GeV — production is kinematically impossible, not merely rate-suppressed. Clean split: R2 = seen, R0+R1 = not seen.

**Level 2 — FCC-hh dilepton scan (splits R0 from R1).**
R0 and R1 differ by a factor ~20 in MZ′ and ~2000 in ε, but nothing *currently planned* separates them: R0's ε = 0.1 at 2–2.8 TeV is precisely the parameter slice that survives the catalog's HL-LHC dilepton recast, because with g′ ≈ 0.4 the width is invisible-dominated — Γ(Z′→χχ) ∝ g′²β³/48π versus per-lepton Γ(ℓℓ) ∝ (εe·c_W)²/12π gives BR(χχ) ≈ 0.90 and BR(ee+μμ) ≈ 3%, diluting σ·BR at 14 TeV to ~5–10 ab at 2.5 TeV, at or below HL-LHC reach. Electroweak-precision routes fail too: the Z-pole shift scales as ε²·t_W²·m_Z²/M_Z′² ≈ 6×10⁻⁶ — below even FCC-ee Tera-Z resolution except marginally. The decisive measurement is a 100 TeV pp dilepton scan: parton luminosity at 2.5 TeV rises ~200× over 14 TeV, so R0 predicts a narrow ee/μμ resonance at 2.0–2.8 TeV with σ·BR ≈ 0.5–1 fb → ~2×10⁴ events in 30 ab⁻¹ over a tiny DY continuum, with a ~20 fb monojet + missing-E_T Jacobian edge (the 90% invisible width) as an in-situ confirmation that the resonance couples to the dark sector. R1 predicts *null*: it has no state in the 2–3 TeV window, and its own Z′ (56–163 GeV, ε ~ 5×10⁻⁵) yields σ·BR ~ 0.03–0.3 fb buried under the Z/Drell-Yan tail, needing ~30× better ε-reach than any proposed machine (radiative-return at FCC-ee reaches only ε ~ 10⁻³–10⁻² there). So R1 is identified by elimination — a genuinely dark region of parameter space, which I state plainly rather than inventing an infeasible positive probe. Feasibility: closest instruments are ATLAS/CMS at HL-LHC (dilepton σ·BR sensitivity ~0.1 fb at 2.5 TeV; ~10–100× short in rate) and the proposed FCC-hh reference detector, which covers the prediction with margin; dominant systematics — high-mass DY PDF uncertainty (5–10%) and multi-TeV lepton momentum resolution — are benign for a narrow bump search. Requires a next-generation collider → rated "unlikely" per the rubric, not because the signal is marginal (it is not) but because the machine is.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_yes_yes_yes_yes_no",
      "lit_review": {
        "name": "SHiP displaced dark-photon search",
        "observable": "displaced l+l- vertices with m(ll) = 0.95-1.05 GeV, N > 0 ?",
        "refs": ["arXiv:2011.05115", "arXiv:2203.05090", "arXiv:2005.01515"],
        "reasoning": "The three regions share MDM ~ 94 GeV and alpha1 ~ 0.0026, so all Higgs-portal observables coincide; only the dark-photon sector differs. R2 has a 1.0 GeV Z' with epsilon = 1.0-1.35e-6 and BR(A'->SM) = 100% (A'->chi chi closed): cTau = 1.5-2.7 cm, boosted decay length 1-10 m at SPS brem energies, landing inside SHiP's published unique-sensitivity band (mA' 0.8-3.3 GeV, eps^2 1e-11 to 1e-17) -> O(10) dilepton vertices at m(ll) ~ 1 GeV in 2e20 POT, near-zero background. Marginality: R2 sits near the steep short-lifetime upper contour, so the eps = 1.35e-6 top of the region is edge-of-reach; FASER2/FPF covers the same point with gamma ~ 1e3 boosts, making the combined coverage robust. R0 (Z' at 2.0-2.8 TeV) gives exactly zero events, and R1 (Z' at 56-163 GeV) is kinematically unproducible at sqrt(s) ~ 27 GeV -> both cleanly 'not seen'.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R2"]},
          {"label": "not seen", "regions": ["R0", "R1"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R0+R1",
          "name": "FCC-hh 100 TeV dilepton resonance scan",
          "observable": "ee/mumu resonance, 2 TeV < m(ll) < 3 TeV, sigma x BR >= 0.01 fb ?",
          "reasoning": "R0 is a 2.0-2.8 TeV Z' with eps = 0.1 (SM coupling eps*e*cw ~ 0.027) and g' ~ 0.4, so BR(chi chi) ~ 0.90 and BR(ee+mumu) ~ 3%: at 14 TeV this dilutes sigma x BR to ~5-10 ab, which is why it survives the catalog's HL-LHC dilepton cut; at 100 TeV the ~200x parton-luminosity gain predicts sigma x BR ~ 0.5-1 fb -> ~2e4 events in 30 ab^-1, a narrow bump far above the 0.01 fb cut, plus a ~20 fb monojet+MET Jacobian from the invisible-dominated width. R1 has no state in the window and predicts null everywhere: its 56-163 GeV Z' with eps ~ 5e-5 gives sigma x BR ~ 0.03-0.3 fb under the Z/DY tail, ~30x beyond any proposed machine's eps-reach, so R1 is identified by elimination.",
          "feasibility": "Closest proposed instrument: FCC-hh reference detector (100 TeV, 30 ab^-1), which covers the R0 prediction with >10x margin; closest existing: ATLAS/CMS HL-LHC, dilepton sigma x BR sensitivity ~0.1 fb at 2.5 TeV, ~10-100x short in rate. Dominant systematics: high-mass Drell-Yan PDF uncertainty (5-10%) and multi-TeV lepton momentum resolution; both benign for a narrow-resonance bump hunt. Needs a next-generation collider, hence 'unlikely' despite the comfortable signal margin.",
          "feasibility_rating": "unlikely",
          "outcomes": [
            {"label": "yes", "regions": ["R0"]},
            {"label": "no", "regions": ["R1"]}
          ]
        }
      ]
    }
  ]
}
```