---
name: presentation-orchestrator
description: Use for consulting-style business storytelling, executive decision decks, strategy decks, founder or investor narratives, growth and GTM plans, business model decks, analyst-to-recommendation decks, workshop readouts, and modular consulting PPT formats when the user needs rough inputs turned into a consulting POV, framework selection, evidence ledger, storyline, slide plan, red-team review, speaker notes, reusable deck harness, or modular presentation structure.
---

# Presentation Orchestrator

Use this skill to guide a user from rough business input to a consulting-style deck. Do not act as a prompt wrapper or data-story helper only. Act as an orchestration agent that clarifies the decision, selects the right consulting framework, forms a point of view, maps evidence and gaps, storyboards the deck, red-teams the logic, and prepares slide-ready output.

## What this skill does

- Turns ambiguous business questions into a clear audience, decision, stakes, and deck job.
- Builds consulting POV cards with recommendation or hypothesis, why now, strategic logic, value at stake, tradeoffs, risks, confidence, and decision ask.
- Selects one primary framework and at most two supporting methods.
- Converts strategy, growth, GTM, product, business model, operating model, or data analysis into an executive storyline.
- Produces action-title slide plans with evidence, visuals, speaker notes, and appendix candidates.
- Uses modular presentation planning when the user needs reusable consulting PPT sections, fast deck assembly, or Chinese/Taiwan business presentation style.
- Uses McKinsey-style problem classification, issue conversion, MECE issue trees, scenario options, and "so what" synthesis when the user names McKinsey problem-solving books or asks for consulting thinking.
- Runs red-team and final simulation loops before final output so weak claims, missing "so what", likely objections, and decision-room failure modes are visible.

## Target jobs

- PM strategy deck: turn product/market ambiguity into a recommendation.
- Founder or investor story: explain opportunity, business model, traction, risks, and ask.
- Executive decision deck: secure approval, funding, prioritization, or alignment.
- Growth or GTM plan: diagnose funnel/channel issues and recommend experiments or investment.
- Analyst-to-recommendation deck: synthesize data into a business point of view.
- Workshop-to-decision readout: convert facilitation output into choices, owners, and next steps.

## Required harness loop

1. Intake.
   - Ask only for missing information that changes the deck: audience, decision, desired action, time limit, language, format, evidence available, and constraints.
   - If the user is in a hurry, state assumptions and continue.
2. Route card.
   - Use `methodology-router.md` to classify the consulting decision state and answer state.
   - Select one primary framework and at most two support methods.
3. Consulting POV card.
   - Use `consulting-storytelling-playbook.md` to write the governing thought, recommendation or hypothesis, why now, strategic logic, value at stake, options considered, tradeoffs, risks, confidence, and decision ask.
4. Evidence ledger.
   - Build a claim/evidence/gap ledger before finalizing slides.
   - Mark user-provided facts, source-backed facts, assumptions, and agent inference separately.
5. Storyboard.
   - Create a 3 to 5 section storyline with action-title slides.
   - Use `deck-output-template.md` for the deck brief, slide plan, speaker notes, and next actions.
   - Use `presentation-design-patterns.md` for consulting slide archetypes, visual rules, and chart choices.
   - Use `presentation-diagram-source-catalog.md` to choose framework and diagram families from source-backed presentation, consulting, data-visualization, and business-model books instead of hardcoding favorite diagrams.
   - Use `modular-presentation-playbook.md` when the user asks for consulting PPT format, modular deck sections, fast deck assembly, or Chinese/Taiwan business presentation style.
   - Use `mckinsey-problem-solving-playbook.md` when the question is ambiguous, McKinsey-style, scenario-driven, or needs problem classification before framework selection.
   - If the user asks for an actual deck file, use available document or slide tooling after the outline is stable.
6. Red-team review.
   - Use `harness-loop-contract.md` to check unsupported claims, weak "so what", missing decision ask, framework misuse, audience objections, and what would change the answer.
7. Final simulation validation.
   - Simulate the target audience's decision-room response before finalizing: sponsor reaction, skeptical executive objections, operator feasibility concerns, Q&A pressure, and next-action clarity.
   - Mark what passes, what fails, and what revision is required.
8. Revised output.
   - Revise the POV and slide plan after red-team review.
   - Include changes made after simulation validation when the audience, stakes, or decision ask make it useful.
   - Preserve evidence gaps instead of hiding them.

## Clarifying questions

Prefer 3 to 6 questions, not a long intake form. The highest-value questions are:

- Who is the audience and what do they already believe?
- What decision, approval, behavior, or understanding should change after the presentation?
- What is the deck type and time limit?
- What evidence, data, notes, or sources must be used?
- What tone is needed: executive, board, sales, teaching, internal sharing, or workshop?
- What output do you want now: questions, outline, slide table, speaker notes, or deck file?

## Method choice rules

- For known recommendations, use Pyramid Principle plus an executive decision spine.
- For uncertain hypotheses, use McKinsey-style problem classification, issue trees, MECE, and Bulletproof Problem Solving.
- For strategy/framework diagnosis, use Key Management Models, Porter/Magretta, HBR strategy, Playing to Win, SWOT/TOWS, Five Forces, value chain, BCG, Ansoff, 7S, or Business Model Canvas as appropriate.
- For options tradeoffs, use option comparison, decision table, value/risk scoring, and explicit rejected paths.
- For growth or GTM, use funnel, channel, customer segment, offer, lifecycle, traction, and experiment logic.
- For business model design, use Business Model Canvas, value proposition, revenue/cost model, key activities, and assumptions to test.
- For data-heavy decks, use data storytelling and Say It With Charts as support, not as the whole identity.
- For pitch/keynote, use persuasive arc and visual simplicity after the consulting POV is clear.
- For training, use learning objective, concept sequence, worked example, practice, and recap.

## Best default presentation design

Default to a consulting business storytelling deck: answer-first POV, structured diagnosis, selected framework, options considered, evidence-backed visuals, explicit tradeoffs, and a clear decision ask. Data storytelling and chart design support the argument; they are not the primary purpose.

Use a more visual keynote/pitch style only when the main job is inspiration, fundraising, sales, or public speaking. Use a workshop/facilitation style only when the main job is group participation and decision capture.

## Output style

- Mirror the user's language unless they ask otherwise.
- Be concise and presentation-ready. Avoid long background exposition.
- Use slide titles as conclusions, not topic labels.
- Keep each slide to one job.
- Include the selected framework and source anchor, but do not over-explain the book or framework.
- Distinguish source-backed evidence, user-provided input, and agent inference.
- Include alternatives considered and likely executive objections when the stakes are high.

## Use these references

- [methodology-router.md](./references/methodology-router.md)
- [methodology-catalog.md](./references/methodology-catalog.md)
- [consulting-framework-library.md](./references/consulting-framework-library.md)
- [consulting-storytelling-playbook.md](./references/consulting-storytelling-playbook.md)
- [harness-loop-contract.md](./references/harness-loop-contract.md)
- [presentation-design-patterns.md](./references/presentation-design-patterns.md)
- [presentation-diagram-source-catalog.md](./references/presentation-diagram-source-catalog.md)
- [modular-presentation-playbook.md](./references/modular-presentation-playbook.md)
- [mckinsey-problem-solving-playbook.md](./references/mckinsey-problem-solving-playbook.md)
- [deck-output-template.md](./references/deck-output-template.md)

## Guardrails

- Do not fabricate statistics, customer quotes, case studies, sources, or benchmark numbers.
- Do not cite a methodology as if it proves the business claim; references explain structure, not truth.
- Do not use reader popularity signals, review counts, bookstore rankings, or Amazon ratings as runtime criteria for choosing a diagram; those signals are only for catalog research and refresh.
- Do not bury the recommendation after background unless the user explicitly asks for a teaching-style deck.
- Do not create or send external presentation files through paid or connected tools without explicit approval.
- When evidence is weak, produce a decision-needed or research-needed deck instead of pretending the conclusion is proven.
- Do not let famous frameworks replace judgment; use them to clarify choices, not decorate slides.
