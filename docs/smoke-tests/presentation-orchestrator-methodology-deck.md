# Presentation Orchestrator Smoke Test Deck

## Deck brief

- Audience: 6DuckLearn maintainer or user deciding whether the new presentation skill is useful.
- Desired change: Believe the skill is more than a prompt wrapper because it routes from question clarification to method selection, deck design, slide plan, evidence, and references.
- Presentation type: Internal enablement / skill validation deck.
- Time / slide target: 8 to 10 minutes, 9 slides.
- Selected methodology: Pyramid Principle with data-story support.
- Why this method: The deck needs an answer-first recommendation, a small number of reasons, and evidence-backed slides.
- Selected deck design pattern: Executive consulting/data-story deck.
- Why this design: The skill itself recommends this as the best default for business, strategy, growth, marketing, and data presentations.
- Evidence available: `SKILL.md`, `methodology-catalog.md`, `methodology-router.md`, `presentation-design-patterns.md`, and `deck-output-template.md`.
- Assumptions: This is a smoke test, not final brand artwork or a public launch deck.

## Storyline

1. Opening context: A presentation skill must guide thinking, not only generate slides.
2. Tension or problem: Generic deck prompts skip methodology selection and often produce pretty but weak slide plans.
3. Recommendation or core message: Use `presentation-orchestrator` as the route-first deck agent for business presentations.
4. Reasons: It clarifies the job, chooses a sourced method, selects the right deck design, maps evidence, and outputs speaker-ready slides.
5. Proof: The skill now includes a methodology catalog, router, design patterns, output template, and validation gates.
6. Decision, ask, or next step: Keep the skill, use this smoke deck as the first example, and later add a PPTX export if needed.

## Slide plan

| # | Takeaway title | Slide job | Method role | Evidence / input | Visual direction | Speaker note |
|---|---|---|---|---|---|---|
| 1 | Presentation Orchestrator turns rough asks into deck-ready decisions | Name the test and core claim | Pyramid opening answer | Skill description and workflow | Title slide with 5-step route line | This is a smoke test of the skill against its own intended job. |
| 2 | The skill is useful because it routes before it writes | Show why method selection matters | SCQA | Workflow lines for clarify, classify, choose method | Problem-to-route diagram | A deck without routing usually becomes a collection of slides, not a story. |
| 3 | The methodology catalog covers communication, strategy, marketing, growth, data, and teaching | Prove breadth | Catalog scan | `methodology-catalog.md` categories | Matrix of six method families | The catalog is broad enough for common business presentation jobs. |
| 4 | The router chooses one primary spine instead of stacking frameworks | Prove orchestration behavior | Method routing | `methodology-router.md` | Decision tree | This keeps the skill from becoming a framework library shelf. |
| 5 | The best default design is executive consulting plus data story | State design finding | Design recommendation | `presentation-design-patterns.md` | Before/after: dense report vs action-title deck | The default is chosen for clarity, evidence, and action. |
| 6 | Every slide should do one job and carry one claim | Turn design into slide rule | Data storytelling | Design checklist | Slide anatomy diagram | This is the rule that makes output reviewable. |
| 7 | Evidence mapping protects against invented authority | Show quality control | Evidence ledger | Guardrails and output template | Claim-evidence-gap table | Method references structure the deck; they do not prove business claims. |
| 8 | The output template produces a complete deck brief, not just titles | Show smoke-test completeness | Output template | `deck-output-template.md` | Checklist with completed fields | The artifact includes brief, storyline, slide plan, evidence, and sources. |
| 9 | Next step: use this as the first example deck and export format test | Close with action | Decision ask | This smoke test artifact | Roadmap strip | If this deck is useful, the next test can be PPTX generation. |

## Evidence ledger

| Claim | Evidence | Source type | Confidence | Gap / next check |
|---|---|---|---|---|
| The skill routes before writing slides | `SKILL.md` orchestration workflow: clarify, classify, choose method, build storyline, map evidence, produce slide output | Source-backed | High | Test on a user-supplied messy deck request |
| The skill has sourced methodologies | `methodology-catalog.md` lists sources for Minto, Duarte, Rumelt, Conn/McLean, SWOT/TOWS, growth, data, and teaching methods | Source-backed | High | Periodically refresh external URLs |
| The best default design is executive consulting/data-story | `presentation-design-patterns.md` names it as default and explains why | Source-backed | High | Validate with a real executive deck task |
| The deck output is not only a prompt | `deck-output-template.md` requires brief, storyline, slide plan, evidence ledger, review gates, and references | Source-backed | High | Add automated example tests later |

## Source/reference list

| Method or design rule | Source | How it informed the deck |
|---|---|---|
| Pyramid Principle | https://www.barbaraminto.com/ | Made the deck answer-first with a small number of reasons |
| Persuasive presentation arc | https://www.duarte.com/resources/books/resonate/ | Added audience movement from problem to action |
| Data storytelling | https://www.storytellingwithdata.com/books | Kept evidence and visual direction tied to claims |
| slide:ology | https://www.duarte.com/resources/books/slideology/ | Supported visual hierarchy and message-led layouts |
| Presentation Zen | https://presentationzen.com/ | Reinforced simplicity and restraint |
| Presentation design patterns | `skills/presentation-orchestrator/references/presentation-design-patterns.md` | Selected the executive consulting/data-story design |

## Risks and next checks

- Risk: The methodology catalog could grow too broad and weaken routing discipline.
- Risk: The HTML deck is a visual smoke test, not a fully branded PPTX.
- Next check: Run the skill on a real user deck request with messy source notes.
- Next check: Generate a PPTX or Google Slides-compatible export if the user wants a file for direct presenting.
