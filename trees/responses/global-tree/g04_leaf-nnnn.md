## Leaf `root_no_no_no_no` — 4170 pts, 140 units

### What the leaf is, physically

Every unit here is the same physics object: a complex scalar $\chi$ of mass $M_{\rm DM}=105\text{–}316$ GeV carrying dark charge $-1$ under a Stückelberg-massive $U(1)'$, with a *tiny* Higgs portal. The path already tells us why nothing in the catalog fires:

- $\alpha_1 \le 4.3\times10^{-3}$ in **every** unit → $\mathrm{BR}(h\to\rm inv) < 10^{-3}$ and $\sigma_{\rm SI}$ below XLZD. The Higgs portal is therefore **not** a discriminator: its range is one decade wide and identical across all 140 units.
- Since $M_{Z'} < 2M_{\rm DM}$ everywhere (max $M_{Z'}=140$ GeV vs min $2M_{\rm DM}=210$ GeV), the $Z'$ has **zero invisible width** — it is a pure visible dark photon.
- The relic density fixes the secluded channel: $\langle\sigma v\rangle(\chi\chi^*\to Z'Z')\simeq \pi\alpha'^2/M_{\rm DM}^2$. Plugging the actual ranges, $\alpha' = g'^2/4\pi$ runs from $1.2\times10^{-3}$ ($g'=0.122$, $M_{\rm DM}\sim170$) to $8.0\times10^{-3}$ ($g'=0.317$, $M_{\rm DM}\sim316$) — i.e. $\alpha'/M_{\rm DM}$ is **constant to ~30%**, giving $\langle\sigma v\rangle \approx 1\text{–}3\times10^{-26}\,{\rm cm^3/s}$ in *every single unit*. Indirect detection of any kind (dwarfs, GC, positrons, CMB) is therefore useless here: I checked and discarded it.
- Self-interaction is also dead: for the most favourable case ($M_{Z'}=1$ GeV, $\alpha'=3\times10^{-3}$, $M_{\rm DM}=200$ GeV) the Yukawa Born result is $\sigma_T/m \approx 6\times10^{-6}\,{\rm cm^2/g}$ — five orders below cluster/dwarf sensitivity. Sommerfeld is off too ($\alpha' M_{\rm DM}/M_{Z'} = 0.2\text{–}0.8 < 1$).

That leaves exactly **two** free axes that differ wildly across the leaf: the kinetic mixing $\varepsilon\in[10^{-6},0.1]$ (five decades) and $M_{Z'}\in[1,140]$ GeV (two decades). Both are read off from *one* physical object — a visible dark photon resonance — through two independent observables: its **production rate** ($\propto \varepsilon^2$) and its **proper decay length** ($c\tau \propto 1/\varepsilon^2 M_{Z'}$). This is not a catalog observable: the catalog's Z′-dilepton entry is a high-mass Drell–Yan $pp\to Z'\to\ell\ell$ recast (which is why it never appears anywhere in the tree — all $M_{Z'}$ here are 1–140 GeV, below its reach), whereas a low-mass inclusive dimuon spectroscopy search is a different analysis with different backgrounds and a completely different sensitivity envelope.

### Level 1 — LHCb/BaBar prompt dimuon dark-photon search

Cut: a narrow $\mu^+\mu^-$ resonance anywhere in $m=1\text{–}70$ GeV at $\varepsilon\ge 2\times10^{-3}$ (i.e. $\varepsilon^2\ge 4\times10^{-6}$), which is approximately LHCb's published prompt-like inclusive dimuon reach across that mass range (arXiv:1910.06926), complemented below 10.2 GeV by BaBar's $e^+e^-\to\gamma A'$ (arXiv:1406.2980).

Assigning each unit by the geometric mean of its $\varepsilon$ interval:

- **Seen (55 units)** — $\bar\varepsilon$ from $2.6\times10^{-3}$ (R22, R72) up to $0.1$ (R0, R18, R39–R42, R52, R82, R90, R97, R98, R114, R123, R134). At $\varepsilon=0.1$, $\varepsilon^2=10^{-2}$ is ~3–4 orders above the LHCb boundary: these are not marginal, they are enormous signals. Representative predictions: R0 → $m(A')=1.0\text{–}1.2$ GeV, $\varepsilon^2=10^{-2}$; R47 → $m(A')=38\text{–}100$ GeV, $\varepsilon^2\sim 2\times10^{-3}$; R73 (Z2) → $m(A')=13\text{–}20$ GeV, $\varepsilon^2\sim6\times10^{-4}$.
- **Not seen (85 units)** — $\bar\varepsilon$ from $10^{-6}$ (R19, R24, R50, R55, R59, R85, R86, R96, R99, R117) to $\sim1.8\times10^{-3}$ (R91), i.e. $\varepsilon^2 \le 3\times10^{-6}$, at or below the boundary and in most cases $10^{-12}$ — hopeless by 6 orders.

**Honest caveats.** Five units straddle the cut because their $\varepsilon$ intervals span the full scan range: R1 ($10^{-6}$–0.1), R2, R3, R4, R6. I assign them by geometric mean (R1, R2, R3 → not seen; R4, R6 → seen), but a fraction of their points will land on the other side. Three more are within a factor 1.5 of the cut and could flip: R16 ($1.5\times10^{-3}$), R91 ($1.8\times10^{-3}$), R94 ($1.5\times10^{-3}$) — all placed "not seen". Also, LHCb's prompt reach degrades sharply in the $\rho/\omega/\phi$ band ($0.7\text{–}1.1$ GeV) and under the $J/\psi$, $\psi(2S)$, $\Upsilon$ vetoes; that is precisely the mass window occupied by many of the "seen" units, and it is the reason node 2b below is not redundant with node 1.

### Level 2a (novel) — displaced $A'$ vertex, for the 85 invisible-at-LHCb units

Within the low-$\varepsilon$ group, $\varepsilon$ alone no longer helps (rate $\propto\varepsilon^2 \sim 10^{-12}$), but the *lifetime* grows as $1/\varepsilon^2$ and becomes macroscopic. Using $\Gamma(A'\to{\rm all}) = \varepsilon^2 m_{A'}\,R/411$ with $R\simeq3$:

$$c\tau \;\simeq\; \frac{2.7\times10^{-12}\,{\rm cm}}{\varepsilon^2\, m_{A'}[{\rm GeV}]}$$

Cut at $c\tau \ge 100\,\mu$m ($\varepsilon^2 m_{A'} \le 2.7\times10^{-10}$). Predicted values:

- **Long-lived, 32 units**: R85/R86/R96/R99/R117 ($\varepsilon=10^{-6}$, $m_{A'}=1$ GeV) → $c\tau = 2.7$ cm; R30/R50/R55/R93/R119 → $c\tau\approx2.2\text{–}2.7$ cm; R110/R111/R108/R109 → $c\tau=0.3\text{–}1$ cm; R12 ($\varepsilon=1.4\times10^{-6}$, $m_{A'}=96.7$ GeV) → $c\tau=142\,\mu$m; R5 → $470\,\mu$m; R137 → $108\,\mu$m.
- **Still prompt, 53 units**: R9 ($25\,\mu$m), R61 ($68\,\mu$m), R135 ($60\,\mu$m), R125 ($90\,\mu$m), down to R3 ($3\times10^{-7}$ cm) and R91/R89/R75 ($<10^{-8}$ cm).

Borderline (within a factor 2 of the cut, could flip): R13 ($87\,\mu$m), R125 ($90\,\mu$m), R61, R132, R135. I place all of these "prompt".

**Feasibility, stated bluntly.** The $m_{A'}\lesssim2$ GeV corner of the long-lived set (R30, R50, R55, R85, R86, R93, R96, R99, R110, R117, R119, and marginally R108/R109/R111 — ~14 of the 32) is squarely inside the approved SHiP reach at the CERN SPS Beam Dump Facility, which projects $\varepsilon^2$ down to $\sim10^{-16}$ for $m_{A'}<2$ GeV with $2\times10^{20}$ POT — that part is already funded physics. The rest of the cut is not: reaching $\varepsilon\sim10^{-6}$ at $m_{A'}=10\text{–}130$ GeV requires collider production at $\varepsilon^2\sim10^{-12}$, roughly $10^{3}\text{–}10^{4}$ beyond the LHCb VELO displaced $A'\to\mu\mu$ search (which reaches $\varepsilon^2\sim10^{-8}$ and only below ~0.7 GeV). Because the *stated cut* spans the whole mass range, the rating is **speculative**; the dominant systematic is displaced heavy-flavour and VELO material-interaction background.

### Level 2b (novel) — radiative-return $A'$ scan, for the 55 seen units

The 55 "seen" units still span $m_{A'}=1$ GeV to 125 GeV. A photon-tagged $e^+e^-\to\gamma A'$ scan at $\sqrt s=10.58$ GeV, with $A'\to\ell\ell$ *and* hadrons, covers $m_{A'}\le10$ GeV with a recoil-mass resolution of ~10 MeV and essentially no continuum background at 1 GeV — exactly where LHCb's inclusive dimuon search is blinded by the $\rho/\omega/\phi$ complex. It is therefore a genuine, non-redundant second measurement, not merely "read the mass off node 1".

- **$m_{A'}\le10$ GeV, 24 units**: R0/R18/R39–R42/R123 ($m_{A'}=1.21$ GeV), R20/R62/R79/R80/R97/R98 ($m_{A'}=1.0$ GeV), R130 (4.4–5.2), R134 (4.8–8.4), R139 (4.3–7.3, Z2), R6 (1–25, gm 5.1), R25 (3.2–14), R35 (3.8–16), R65 (5.3–9.0), R11 (5.2–10.7), R101 (7.2–11.4), R102 (7.1), R124 (6.1–12.5). Signal rate at $\varepsilon=0.1$: $\sigma(e^+e^-\to\gamma A')\approx\varepsilon^2\cdot\sigma_{\rm QED}$, i.e. tens of fb — a several-thousand-event peak in 50 ab$^{-1}$.
- **$m_{A'}>10$ GeV, 31 units**: kinematically inaccessible at a B-factory; zero events regardless of $\varepsilon$. Examples: R82 (104–125 GeV), R90 (60–126), R72 (40–105), R47 (38–100), R14 (27–89), R44/R73 (Z2, 10–25 GeV).

Marginal (gm within 25% of 10 GeV, could flip): R103 (9.75–12.4), R114 (6.8–16.1), R101 (7.2–11.4). Feasibility: Belle II is funded to 50 ab$^{-1}$ and already reaches $\varepsilon\sim5\times10^{-4}$ for $m_{A'}<10$ GeV in $\gamma\ell\ell$; extending to hadronic $A'$ decays over the full 1–10 GeV band at $\varepsilon\ge2\times10^{-3}$ needs $\lesssim2\times$ → **possible**. Dominant systematic: photon-energy scale and $e^+e^-\to\gamma\,{\rm hadrons}$ continuum modelling near the $\phi$ and $J/\psi$.

### Documented limitation (loud)

**Nothing proposed here — or anywhere — separates `CsSg_U1p[+]_DM.Z2` from `CsSg_U1p[+]_DM.Z2+3+4+5`.** The five Z2 units (R44, R45, R73, R138, R139) differ from their Z_N siblings only by the presence of $\alpha_3\,s_i s_r^3$ and $\alpha_5\,s_i^3 s_r$. With no dark-Higgs vev these are pure quartic DM self-interactions: they generate no mass splitting, no vertex with any SM field, and contribute only to $2\to2$ DM–DM scattering, which I showed above sits at $\sigma_T/m\sim10^{-5}\,{\rm cm^2/g}$ — unobservable. R44 and R73 land in "seen / heavy $A'$", R139 in "seen / light $A'$", R45 and R138 in "not seen / prompt", each pooled with dozens of Z_N units they are physically indistinguishable from. This is a genuine degeneracy of the physics, not a failure of the proposed measurements.

```json
{
  "model": "combined",
  "leaves": [
    {
      "leaf_id": "root_no_no_no_no",
      "lit_review": {
        "name": "LHCb/BaBar prompt dimuon dark-photon search",
        "observable": "narrow mu+mu- resonance, m(A') = 1-70 GeV, eps >= 2e-3 ?",
        "refs": ["arXiv:1910.06926", "arXiv:1406.2980"],
        "reasoning": "All 140 units share a visible-only dark photon (M_Zp < 2 M_DM everywhere, so zero invisible width) and a relic-fixed alpha'/M_DM, which makes <sigma v>(chi chi* -> Z'Z') = 1-3e-26 cm^3/s in every unit and kills indirect detection as a discriminator; alpha1 <= 4.3e-3 everywhere kills the Higgs portal too. The only axis that varies is the kinetic mixing, over five decades: eps = 1e-6 to 0.1. Prompt A' production scales as eps^2, so LHCb's inclusive dimuon reach (eps^2 ~ 4e-6 over 1-70 GeV) cuts the leaf almost in half. Seen: 55 units with geometric-mean eps from 2.6e-3 (R22, R72) to 0.1 (R0, R18, R39-R42, R52, R82, R90, R97, R98, R114, R123, R134), i.e. eps^2 up to 1e-2, three to four orders above threshold. Not seen: 85 units with eps^2 <= 3e-6 and typically ~1e-12 (R19, R24, R50, R55, R59, R85, R86, R96, R99, R117 all at eps = 1e-6). Caveats: R1, R2, R3, R4, R6 have eps intervals spanning the full scan range and are assigned by geometric mean, so a fraction of their points flips; R16, R91, R94 sit within 1.5x of the cut and are placed 'not seen'. LHCb also loses reach in the rho/omega/phi band and under quarkonium vetoes, which is exactly why node 2b is not redundant. This is NOT the catalog's Z'-dilepton observable, which is a high-mass Drell-Yan pp->Z'->ll recast and never fires anywhere in this tree because every M_Zp here is 1-140 GeV.",
        "status": "Splits!",
        "outcomes": [
          {"label": "seen", "regions": ["R0","R4","R6","R7","R8","R11","R14","R18","R20","R22","R23","R25","R26","R29","R31","R32","R35","R39","R40","R41","R42","R44","R47","R52","R56","R57","R58","R60","R62","R63","R64","R65","R72","R73","R79","R80","R82","R83","R90","R97","R98","R101","R102","R103","R105","R107","R113","R114","R120","R123","R124","R127","R130","R134","R139"]},
          {"label": "not seen", "regions": ["R1","R2","R3","R5","R9","R10","R12","R13","R15","R16","R17","R19","R21","R24","R27","R28","R30","R33","R34","R36","R37","R38","R43","R45","R46","R48","R49","R50","R51","R53","R54","R55","R59","R61","R66","R67","R68","R69","R70","R71","R74","R75","R76","R77","R78","R81","R84","R85","R86","R87","R88","R89","R91","R92","R93","R94","R95","R96","R99","R100","R104","R106","R108","R109","R110","R111","R112","R115","R116","R117","R118","R119","R121","R122","R125","R126","R128","R129","R131","R132","R133","R135","R136","R137","R138"]}
        ]
      },
      "novel": [
        {
          "attach_to": "R1+R2+R3+R5+R9+R10+R12+R13+R15+R16+R17+R19+R21+R24+R27+R28+R30+R33+R34+R36+R37+R38+R43+R45+R46+R48+R49+R50+R51+R53+R54+R55+R59+R61+R66+R67+R68+R69+R70+R71+R74+R75+R76+R77+R78+R81+R84+R85+R86+R87+R88+R89+R91+R92+R93+R94+R95+R96+R99+R100+R104+R106+R108+R109+R110+R111+R112+R115+R116+R117+R118+R119+R121+R122+R125+R126+R128+R129+R131+R132+R133+R135+R136+R137+R138",
          "name": "Next-generation displaced dark-photon vertex search",
          "observable": "A' proper decay length ctau >= 100 um ?",
          "reasoning": "Below the prompt-search threshold the production rate is dead (eps^2 ~ 1e-12) but the lifetime is not: ctau = 2.7e-12 cm / (eps^2 m_A'[GeV]) using Gamma = eps^2 m_A' R/411 with R ~ 3. The cut ctau >= 100 um is eps^2 m_A' <= 2.7e-10. Long-lived (32 units): R85, R86, R96, R99, R117 (eps = 1e-6, m_A' = 1 GeV) give ctau = 2.7 cm; R30, R50, R55, R93, R119 give 2.2-2.7 cm; R108, R109, R110, R111 give 0.3-1 cm; R12 (eps = 1.4e-6, m_A' = 96.7 GeV) gives 142 um; R5 gives 470 um; R137 gives 108 um. Still prompt (53 units): R9 (25 um), R61 (68 um), R135 (60 um), R125 (90 um), falling to 3e-7 cm for R3 and below 1e-8 cm for R75, R89, R91. Borderline within a factor 2 and placed 'prompt': R13 (87 um), R125, R61, R132, R135. The discriminant is physically eps^2 * M_Zp, an axis orthogonal to the level-1 rate cut.",
          "feasibility": "Closest approved instrument: SHiP at the CERN SPS Beam Dump Facility, projecting eps^2 down to ~1e-16 for m_A' < 2 GeV at 2e20 POT - that already covers ~14 of the 32 long-lived units (the m_A' ~ 1 GeV ones: R30, R50, R55, R85, R86, R93, R96, R99, R110, R117, R119, marginally R108, R109, R111). The rest of the stated cut is not covered: reaching eps ~ 1e-6 at m_A' = 10-130 GeV means collider production at eps^2 ~ 1e-12, about 1e3-1e4 beyond the LHCb VELO displaced A'->mu mu search (eps^2 ~ 1e-8, and only below ~0.7 GeV). Because the cut as written spans the full mass range, the honest rating is speculative even though its light-mass corner is funded. Dominant systematic: displaced heavy-flavour dimuons and VELO material-interaction vertices.",
          "feasibility_rating": "speculative",
          "outcomes": [
            {"label": "long-lived", "regions": ["R5","R12","R17","R19","R24","R27","R28","R30","R50","R55","R59","R67","R68","R69","R71","R85","R86","R93","R95","R96","R99","R108","R109","R110","R111","R112","R115","R117","R119","R129","R136","R137"]},
            {"label": "prompt", "regions": ["R1","R2","R3","R9","R10","R13","R15","R16","R21","R33","R34","R36","R37","R38","R43","R45","R46","R48","R49","R51","R53","R54","R61","R66","R70","R74","R75","R76","R77","R78","R81","R84","R87","R88","R89","R91","R92","R94","R100","R104","R106","R116","R118","R121","R122","R125","R126","R128","R131","R132","R133","R135","R138"]}
          ]
        },
        {
          "attach_to": "R0+R4+R6+R7+R8+R11+R14+R18+R20+R22+R23+R25+R26+R29+R31+R32+R35+R39+R40+R41+R42+R44+R47+R52+R56+R57+R58+R60+R62+R63+R64+R65+R72+R73+R79+R80+R82+R83+R90+R97+R98+R101+R102+R103+R105+R107+R113+R114+R120+R123+R124+R127+R130+R134+R139",
          "name": "Belle-II-class radiative-return A' mass scan",
          "observable": "e+e- -> gamma A' peak with m(A') <= 10 GeV ?",
          "reasoning": "The 55 prompt-visible units still span m_A' = 1 to 125 GeV. A photon-tagged scan at sqrt(s) = 10.58 GeV with A' -> leptons AND hadrons has ~10 MeV recoil-mass resolution and negligible continuum at 1 GeV, precisely where the hadron-collider dimuon search is blinded by the rho/omega/phi complex - so this is an independent measurement, not a re-read of node 1. Accessible (24 units): R0, R18, R39-R42, R123 at m_A' = 1.21 GeV; R20, R62, R79, R80, R97, R98 at 1.0 GeV; R130 (4.4-5.2), R134 (4.8-8.4), R139 (4.3-7.3, Z2), R6 (gm 5.1), R25 (3.2-14), R35 (3.8-16), R65 (5.3-9.0), R11 (5.2-10.7), R101 (7.2-11.4), R102 (7.1), R124 (6.1-12.5). At eps = 0.1 the rate is eps^2 times the QED radiative-return cross section, tens of fb, i.e. thousands of peak events in 50 ab^-1. Inaccessible (31 units): kinematically zero regardless of eps - R82 (104-125 GeV), R90 (60-126), R72 (40-105), R47 (38-100), R14 (27-89), R44 and R73 (Z2, 10-25 GeV). Marginal and could flip: R103 (9.75-12.4), R114 (6.8-16.1), R101 (7.2-11.4).",
          "feasibility": "Closest instrument: Belle II, funded to 50 ab^-1, already reaching eps ~ 5e-4 for m_A' < 10 GeV in e+e- -> gamma l+l-. Covering the full 1-10 GeV band including hadronic A' decays at eps >= 2e-3 needs at most ~2x beyond the approved programme. Dominant systematic: photon energy-scale calibration and e+e- -> gamma hadrons continuum modelling near the phi and J/psi.",
          "feasibility_rating": "possible",
          "outcomes": [
            {"label": "light A'", "regions": ["R0","R6","R11","R18","R20","R25","R35","R39","R40","R41","R42","R62","R65","R79","R80","R97","R98","R101","R102","R123","R124","R130","R134","R139"]},
            {"label": "heavy A'", "regions": ["R4","R7","R8","R14","R22","R23","R26","R29","R31","R32","R44","R47","R52","R56","R57","R58","R60","R63","R64","R72","R73","R82","R83","R90","R103","R105","R107","R113","R114","R120","R127"]}
          ]
        }
      ]
    }
  ]
}
```