# Presentation Diagram Source Catalog

Use this reference when choosing consulting-style slide diagrams. The goal is to route the user's business question to diagram families that are supported by respected business, consulting, presentation, and data-visualization books.

This is a runtime selection catalog, not a popularity ranking.

## Research Provenance, Not Runtime Behavior

Reader signals such as Amazon ratings, review volume, bookstore lists, Goodreads ratings, and expert review lists are useful only during catalog construction and refresh. They help decide where to begin research and which books deserve closer inspection.

Reader signals are part of the source-back workflow:

1. Discovery signal: identify books, authors, and practitioner sources worth inspecting.
2. Credibility screen: check whether the source has practitioner adoption, expert recognition, or durable publication history.
3. Method inspection: read the method logic and extract what problem it helps solve.
4. Diagram-family build: translate the method into reusable diagram families with inputs, outputs, and misuse warnings.
5. Catalog promotion: add the family only when it improves a presenter decision, not just slide sophistication.

Do not use reader signals at runtime to choose a diagram. At runtime, choose diagrams by:

1. decision job
2. audience question
3. available evidence
4. source-method fit
5. required presenter output
6. failure mode avoided

Example: a high-rated business-model book does not mean every deck should use a Business Model Canvas. It means the Business Model Canvas is a credible source-backed family when the decision job is business model design, monetization, venture logic, or GTM model validation.

Reader signals can validate that a source is worth inspecting. They cannot validate that a diagram fits the user's decision, that the user's evidence is true, or that a famous framework should appear in the deck.

## Minimum Source Standard

Each diagram family should have:

- Method source: a book, framework source, or practitioner methodology that explains the diagram's logic.
- Presentation source: a slide, communication, or data-visualization source that explains how to present the diagram clearly.
- Use condition: the decision job where the diagram helps the room think or decide.
- Output requirement: the implication, tradeoff, evidence plan, or decision ask the diagram must produce.
- Misuse warning: how the diagram becomes decorative or misleading.

When these are missing, mark the exhibit as an assumption or proposed pattern, not a source-backed diagram family.

## Source-Backed Diagram Families

| Decision job | Diagram family | Method source anchors | Required inputs | Presenter output | Misuse warning |
|---|---|---|---|---|---|
| Answer-first recommendation | Pyramid / governing-thought tree / executive summary spine | Barbara Minto, `The Pyramid Principle`; Duarte/HBR presentation books for audience action and persuasion | recommendation or hypothesis, 2-4 reasons, evidence, decision ask | answer-first executive summary, proof spine, decision ask | burying the answer under background |
| Business model design | Business Model Canvas / Value Proposition Canvas / assumption map / unit-economics bridge | Osterwalder and Pigneur, `Business Model Generation`; Strategyzer family | customer segments, value proposition, channels, revenue, costs, partners, key assumptions | model logic, riskiest assumptions, tests, invest/pause/iterate decision | filling boxes without naming what must be true |
| Strategic diagnosis | Porter Five Forces / value chain / SWOT-TOWS / BCG / Ansoff / 7S / strategy cascade | Porter/Magretta strategy sources; `Key Management Models`; HBR strategy collections | market, competitors, customers, capabilities, economics, constraints | strategic implication, tradeoff, where-to-play/how-to-win choice | drawing famous boxes without implication |
| Ambiguous problem solving | Issue tree / MECE tree / fishbone / scenario matrix / analysis workplan | Conn and McLean, `Bulletproof Problem Solving`; Rasiel and Friga, `The McKinsey Mind`; McKinsey-style problem classification sources | symptom, desired state, issue question, candidate causes, evidence availability | prioritized branches, evidence plan, options and scenarios | exhaustive tree with no prioritization |
| Data-heavy executive readout | Message-first chart / slope chart / waterfall / small multiples / dashboard evidence / appendix proof | Knaflic, `Storytelling with Data`; Tufte, `The Visual Display of Quantitative Information`; chart-choice books such as `Say It With Charts` | dataset, metric definition, comparison, caveat, decision relevance | chart with written implication, caveat, decision relevance | chart gallery without "so what" |
| Visual persuasion and slide craft | Visual storyboard / contrast arc / audience journey / before-after / action close | Duarte, `slide:ology`; Duarte, `Resonate`; HBR presentation guidance | audience belief, current state, desired state, emotional or strategic tension | audience-change story, action sequence, memorable close | pretty slides without decision movement |
| Visual problem clarification | Sketch map / 2x2 / journey/process sketch / simple system map | Roam, `The Back of the Napkin`; presentation design sources | messy idea, actors, process, comparison dimensions, unknowns | simple visual explanation and route to deeper analysis | oversimplifying a decision that needs evidence |
| Execution and operating model | Roadmap / swimlane / RACI / risk matrix / dependency map / 7S alignment | operating model, transformation, project-management, and 7S sources | owners, sequence, milestones, dependencies, risks, capabilities | what changes Monday, owners, risk controls, decision gates | roadmap before strategic choice is made |

## Runtime Routing Map

| User asks for... | Prefer these diagrams first | Required implication | Avoid |
|---|---|---|---|
| business model, monetization, venture, GTM model | Business Model Canvas, Value Proposition Canvas, assumption map, unit-economics bridge | which model assumption matters most and what to test | Porter or SWOT as a substitute for model logic |
| why something is failing | Fishbone, issue tree, MECE tree, evidence plan | which causes are most likely to change the answer | listing causes without prioritization |
| competitive attractiveness | Porter Five Forces, value chain, tradeoff map | whether the market is attractive enough and how to compete | five boxes without strategic implication |
| growth options | Ansoff, option matrix, channel funnel, experiment roadmap | which path wins under risk-adjusted criteria | generic roadmap before option logic |
| data readout | message-first chart, slope/bar/waterfall, evidence appendix | what the metric changes about the decision | chart gallery without "so what" |
| executive approval | Pyramid, decision brief, option comparison, risk/mitigation | approve, reject, pause, test, fund, or assign | background-first deck unless context is missing |
| transformation / operating model | 7S, value chain, swimlane, roadmap, risk matrix | what must change internally for the recommendation to work | market strategy frameworks for internal alignment problems |
| pitch / keynote / sales story | contrast arc, audience journey, visual storyboard, action close | belief shift and call to action | consulting framework overload |

## Slide Construction Rules

For every framework slide, produce:

1. Action title: the business takeaway, not the framework name.
2. Source anchor: the method source, kept short.
3. Inputs: what facts or assumptions populate the diagram.
4. Implication: what the diagram means for the decision.
5. Confidence: source-backed fact, user-provided fact, assumption, or agent inference.
6. Speaker note: how the presenter should explain the diagram in the room.
7. Appendix cue: what supporting evidence should sit behind the slide.

## Research Refresh Protocol

Use reader signals only when maintaining or expanding this catalog:

1. Search broad reader and expert surfaces to find candidate books and frameworks.
2. Prioritize sources with strong practitioner adoption, credible author background, expert reviews, or high reader signal.
3. Inspect the source's method, not only its rating.
4. Record the source-back chain: signal observed, source inspected, method logic extracted, diagram family proposed, runtime use condition.
5. Extract diagram families, use conditions, required inputs, presenter outputs, and misuse warnings.
6. Add only diagram families that help a presenter make a decision, not just look sophisticated.
7. Record source date if quoting time-sensitive reader signals outside the runtime skill.

## Anti-Patterns

- Popularity as runtime logic: choosing a diagram because a book is highly rated.
- Hardcoded favorites: using Business Model Canvas, fishbone, or Porter because they are familiar, not because the decision job needs them.
- Framework pileup: adding many models to look sophisticated.
- Decorative model: drawing a recognizable diagram without writing the implication.
- Source confusion: treating a methodology source as evidence for the user's business claim.
- Missing source age: using ratings, rankings, or review counts without date when doing research notes.
