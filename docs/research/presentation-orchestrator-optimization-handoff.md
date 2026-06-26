# Presentation Orchestrator Optimization Handoff

Checked: 2026-06-26

Purpose: capture the findings from the revised `presentation-orchestrator` demo deck and consultation review so the original skill can be trained or edited to produce stronger consulting-style decks by default.

This is handoff material for skill optimization. It is not runtime evidence that any future business recommendation is true.

## Source Artifacts

- Skill entrypoint: `skills/presentation-orchestrator/SKILL.md`
- Design rules: `skills/presentation-orchestrator/references/presentation-design-patterns.md`
- Source-backed diagram catalog: `skills/presentation-orchestrator/references/presentation-diagram-source-catalog.md`
- Research provenance: `docs/research/presentation-diagram-source-research.md`
- Demo deck generator: `scripts/build-presentation-orchestrator-deck.py`
- Demo deck outline: `out/presentation-orchestrator-how-it-works.md`
- Demo deck artifacts: `out/presentation-orchestrator-how-it-works.pptx`, `.pdf`, and `-contact-sheet.png`

## Consultation Review Result

The final deck was reviewed by three consultation perspectives:

| Reviewer lens | Final score | Verdict |
|---|---:|---|
| Strategy partner | 8.3 / 10 | Meets the user goal for a credible strategy-consulting-style demo deck |
| Presentation design director | 8.0 / 10 | Meets the bar for a strong consulting-style artifact; no must-fix items |
| Skeptical executive sponsor | 8.0 / 10 | Approves public demo and one controlled before/after pilot |

Scope caveat: the deck is strong enough as a public demo and controlled-pilot artifact. It should not claim broad business-outcome improvement until real before/after pilot evidence exists.

## Core Finding

The original failure mode was not only weak design. It was weak orchestration:

1. The storyline was too generic and process-led.
2. Slide design started before the content was consolidated.
3. Diagram choice risked becoming a hardcoded list of famous frameworks.
4. Reader signals were initially easy to misread as runtime selection logic.
5. The deck lacked a presenter point of view: what the room should decide, what the presenter says, what objections will come, and what proof is missing.

The optimized behavior should be:

1. Consolidate content before design.
2. Write from the presenter's point of view.
3. Route the business question to a decision job before choosing any framework.
4. Choose source-backed diagram families from the catalog, not hardcoded favorites.
5. Use reader signals only to search for and validate source candidates when building or refreshing the catalog.
6. Turn each framework into an implication, tradeoff, or decision ask.
7. Use red-team feedback to revise the recommendation, not just to comment on it.
8. Validate the final deck against decision-readiness gates.

## Trainable Rules To Add To The Skill

### 1. Content Consolidation Before Design

Before drawing slides or choosing layouts, the skill should produce a consolidated content packet:

| Packet item | Required output |
|---|---|
| Decision job | approve, reject, fund, pause, prioritize, test, assign, or explain |
| Audience belief | what the room believes now and what must change |
| Presenter POV | recommendation or hypothesis, confidence, and decision ask |
| Evidence ledger | user facts, source-backed facts, assumptions, inference, gaps |
| Framework route | selected method, rejected methods, and reason |
| Slide jobs | one job per slide, each tied to the decision |
| Speaker stance | what the presenter says, what objection may come, what backup is needed |

Training instruction:

> Do not design slides until the content packet is consolidated. If the content packet is weak, produce the packet first and mark the deck as not ready for visual design.

### 2. Presenter Point Of View

The skill should design slides from the presenter side, not from the file-builder side.

Each mainline slide should answer:

1. What does the presenter need the audience to believe or decide?
2. What single sentence should the presenter say when this slide appears?
3. What objection will the audience raise?
4. What evidence or appendix backup is needed?
5. What changes in the recommendation if the evidence fails?

Training instruction:

> A slide is not ready if it only describes content. It must help the presenter move the room toward a decision.

### 3. Decision-First Diagram Routing

Diagram choice should follow this sequence:

1. Identify the decision job.
2. Identify the audience question.
3. Inspect available evidence and gaps.
4. Select the source-backed diagram family that fits the job.
5. Name rejected frameworks and why they are not primary.
6. Convert the diagram into a business implication.

Bad behavior:

- "User asked for consulting style, so add Porter, fishbone, BMC, SWOT."
- "The book is popular, so use its diagram."
- "Use a famous model even though the slide has no implication."

Good behavior:

- "The room needs to decide whether to fund a limited GTM pilot under weak evidence, so use issue tree plus option matrix; reject Business Model Canvas and Porter as primary because they do not answer the immediate decision."

### 4. Reader Signals Only Belong Upstream

Reader signals are not part of runtime skill behavior. They support catalog construction and refresh.

Source-back workflow:

1. Reader signal identifies a candidate source.
2. Candidate source is inspected for method logic.
3. Method logic is translated into diagram families.
4. Diagram family receives use condition, required inputs, presenter output, and misuse warning.
5. Runtime skill later chooses the diagram by decision job and evidence fit.

Training instruction:

> Reader signals can validate where to begin research and which source candidates deserve inspection. They cannot validate the user's facts, recommendation, or runtime diagram fit.

### 5. Authored Consulting Exhibits Over Generic Layouts

The revised deck improved when table-heavy slides were replaced with authored exhibits:

| Slide need | Stronger exhibit family |
|---|---|
| Method selection | Route card with selected and rejected methods |
| Ambiguous problem | Issue tree with prioritized branches |
| Choice among paths | Option readout or decision matrix |
| Slide plan | Storyboard cards with proof standard |
| Quality proof | Before/after readiness comparison |
| Validation | Validation chain with scoped proof |
| Close | Executive gate with next pilot rubric |

Training instruction:

> Use tables for inspectable evidence and explicit criteria. Use authored diagrams for logic, choice, route, flow, and decision movement.

### 6. Evidence Discipline

The skill should never let source references imply business truth.

Required evidence labels:

- user-provided fact
- source-backed fact
- assumption
- agent inference
- missing evidence
- what would change the answer

Training instruction:

> A methodology source explains structure. It does not prove the user's claim.

### 7. Red-Team Must Change The Output

A red-team review is only useful if it changes the deck.

Required red-team outputs:

| Lens | Question |
|---|---|
| Sponsor | What decision do you need from me? |
| Skeptic | What proof is weak or missing? |
| Operator | Who owns Monday execution? |
| Finance | What evidence justifies cost or risk? |
| Evidence reviewer | Which claims are assumptions? |

Training instruction:

> After red-team review, list the concrete revisions made to the recommendation, slide plan, evidence language, or next action.

## Proposed Patch For The Original Skill

The following instruction block can be merged into `skills/presentation-orchestrator/SKILL.md` under the harness loop or output style sections.

```markdown
## Deck Optimization Rules

Before visual design, consolidate the content into a presenter-ready packet:

- decision job and audience question
- presenter POV and decision ask
- evidence ledger with user facts, source-backed facts, assumptions, inference, and gaps
- selected framework plus rejected frameworks and reasons
- slide jobs, proof standard, speaker note, objection, and appendix cue

Do not design slides until the packet is coherent. If the user asks for a deck file immediately, still create a short content packet first and use it as the source of truth.

Choose diagrams from the decision job, not from a hardcoded framework list. Use the source-backed diagram catalog to select diagram families. Reader signals, bestseller lists, ratings, review counts, and bookstore rankings are only for building or refreshing the catalog; they are not runtime diagram-selection criteria.

For each framework slide, write the implication before drawing the diagram:

1. What decision does this diagram support?
2. What inputs populate it?
3. What does it imply?
4. What evidence is missing?
5. What would change the answer?

Prefer authored consulting exhibits over generic card/table layouts:

- route card for selected and rejected methods
- issue tree for ambiguous problem solving
- option readout for choices under uncertainty
- evidence ledger for confidence and gaps
- storyboard cards for slide packet design
- before/after readiness comparison for quality proof
- validation chain for artifact proof
- executive gate for final close

Run red-team review before finalizing. The red-team loop must change the output or explicitly say no change was needed. Final output should include a scoped claim: what the deck proves, what it does not prove, and what live evidence is needed next.
```

## Acceptance Rubric

Use this rubric before calling an output final:

| Gate | Pass condition |
|---|---|
| Decision ask | Deck names the decision, action, owner, or next approval needed |
| Answer-first | Recommendation or hypothesis appears before background |
| Framework fit | Selected and rejected frameworks are named with reasons |
| Source-backed diagrams | Diagram family is tied to method source and decision job |
| Evidence ledger | Claims are labeled by source type, confidence, gap, and implication |
| Presenter POV | Each slide has one talk track, objection, and proof standard |
| Exhibit craft | Main slides use authored exhibits, not repeated generic cards or decorative frameworks |
| Red-team revision | Reviewer objections produce visible revisions |
| Scope discipline | Synthetic, assumed, or weak proof is labeled and not overclaimed |
| Final action | Close names pilot, approval, owner, gates, or next review |

Minimum release bar for demo artifacts: average reviewer score of 8.0 or above with no must-fix items.

## Evaluation Prompts For Future Training

Use these review prompts after generating a deck:

1. Strategy partner:
   - Does this read like a recommendation deck or a process explainer?
   - Are the selected and rejected frameworks examples of judgment?
   - Does the deck make a room-ready decision ask?

2. Presentation design director:
   - Does the deck use varied authored exhibits?
   - Are there clipping, small-text, spacing, or generic card-grid problems?
   - Does the visual hierarchy feel human-authored?

3. Skeptical executive:
   - What proof is missing?
   - Are synthetic or weak claims labeled?
   - Would you approve public demo, controlled pilot, broad adoption, or none?

## Known Remaining Limits

- A synthetic demo can prove workflow quality and artifact discipline, not real business outcome improvement.
- Broad adoption claims require real before/after pilot evidence.
- "Top consultancy" should mean decision discipline, authored exhibits, evidence honesty, and presenter readiness. It should not mean imitating any firm's branding or claiming affiliation.

## Recommended Next Optimization Backlog

| Priority | Change |
|---|---|
| P0 | Add the deck optimization rules block to the skill entrypoint |
| P0 | Require content packet before slide design when deck quality matters |
| P0 | Keep reader signals in catalog research only |
| P1 | Add a reusable reviewer rubric to `harness-loop-contract.md` |
| P1 | Add examples of route card, evidence ledger, option readout, and executive gate to `presentation-design-patterns.md` |
| P2 | Build a small automated smoke test that rejects all-table decks for consulting-style requests |
| P2 | Add a before/after pilot template for future real-world validation |
