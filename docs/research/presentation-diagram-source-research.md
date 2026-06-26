# Presentation Diagram Source Research Notes

Checked: 2026-06-26

Purpose: document how reader/expert signals were used to find candidate sources for the `presentation-orchestrator` diagram catalog. This file is research provenance. It is not runtime skill logic.

## Rule

Reader signals help answer: "Which sources are worth inspecting first?"

Reader signals do not answer: "Which diagram should the skill use for this user's deck?"

Runtime diagram choice belongs in `skills/presentation-orchestrator/references/presentation-diagram-source-catalog.md` and is based on decision job, audience question, evidence, source-method fit, and presenter output.

## Source-Back Diagram-Family Workflow

Reader signals sit before the skill's runtime flow. They are used to search, prioritize, and validate source candidates so the catalog can be built from real methods rather than hardcoded favorite frameworks.

1. Search for candidate sources across reader, bookstore, expert-list, and practitioner surfaces.
2. Use reader signals to decide where to begin: ratings, review volume, bestseller/category placement, repeated expert-list mentions, and practitioner adoption cues.
3. Inspect the source method directly: decision logic, required inputs, output expected from the presenter, and conditions where the method fails.
4. Extract a diagram family only when the source gives a reusable thinking pattern, not just a named framework.
5. Build the catalog entry with source anchor, use condition, required inputs, presenter output, misuse warning, and confidence caveat.
6. Route runtime slide design from the user's decision job and evidence fit, using the catalog entry as the method source.

The source-back chain should read: reader signal -> candidate source -> inspected method -> diagram family -> runtime use condition -> presenter output.

Reader signals can validate the starting point for research and the credibility of candidate sources. They cannot validate the user's facts, the recommendation, or runtime framework fit.

## Research Method

1. Start with broad discovery surfaces: Amazon book pages, expert presentation-book lists, bookstore/category rankings, and known practitioner sources.
2. Use reader signals only to prioritize inspection: star rating, review volume, bestseller/category signal, and expert-list inclusion.
3. Inspect the method itself: what diagram logic does the book teach, what inputs does it require, and what output does it help a presenter produce?
4. Promote a source into the runtime catalog only if it supports a reusable diagram family and has clear use conditions.
5. Keep ratings/review counts out of runtime selection because they are volatile and marketplace-specific.

## Source Signals Observed

| Candidate source | Reader/expert signal observed | Method inspected | Diagram family promoted |
|---|---|---|---|
| `Business Model Generation`, Osterwalder and Pigneur | Amazon UK page showed 4.6/4,302 and publisher copy describing co-creation by 470 practitioners | business model design and canvas-based model logic | Business Model Canvas, Value Proposition Canvas, assumption map, unit-economics bridge |
| `Storytelling with Data`, Cole Nussbaumer Knaflic | Amazon related listing showed 4.6/5,303 and #1 bestseller signal on a data visualization surface | message-first data storytelling for business professionals | message-first chart, chart choice map, evidence appendix |
| `The Visual Display of Quantitative Information`, Edward Tufte | Amazon page described it as a classic on statistical graphics; related listing showed 4.6/993 | precise statistical graphics, small multiples, data-ink discipline | small multiples, evidence chart, high-resolution data display |
| `slide:ology`, Nancy Duarte | Amazon page showed 4.5/1,059 and practical visual-story positioning | visual thinking, slide design, visual story development | visual storyboard, slide archetypes, audience-fit visual design |
| `Resonate`, Nancy Duarte | Amazon UK page showed 4.4/1,030 and notes top-100 business-book bestseller history | audience empathy, story structure, persuasion | contrast arc, audience journey, action close |
| `Bulletproof Problem Solving`, Conn and McLean | Amazon marketplace snapshots showed around 4.6/752 | structured problem solving, issue decomposition, hypothesis logic | issue tree, scenario matrix, analysis workplan |
| `The McKinsey Mind`, Rasiel and Friga | Amazon marketplace snapshots showed around 4.2/468 | fact-based problem solving, MECE, so-what synthesis | MECE tree, evidence plan, stakeholder objection handling |
| `Key Management Models` | Amazon marketplace snapshots varied by edition, including 4.5/37 and 4.7/65 | management model library for strategy and operating choices | Porter, BCG, Ansoff, 7S, value chain |
| Six Minutes top presentation books list | Expert list states most books in its top-35 list were rated at least 4 stars by Amazon readers and includes Minto, Duarte, Roam, Zelazny, Reynolds, and others | presentation and communication source discovery | source shortlist for presentation-structure and visual-communication methods |

## Evaluation

More detail was needed in the runtime catalog in four areas:

- Separate research provenance from runtime skill behavior.
- Explain the source-back workflow from reader signal to diagram-family promotion.
- Define the minimum source standard for a diagram family.
- Add required inputs, presenter output, and misuse warning per diagram family.
- Add slide construction rules so a framework diagram becomes an implication, not decoration.

These details were added to `presentation-diagram-source-catalog.md`.

## Refresh Notes

When refreshing this research, re-check ratings and review counts live because they change over time. If current reader signals diverge from the values above, update this research note only; do not change runtime diagram routing unless the source method itself is no longer appropriate.

## Source Links

- Business Model Generation: https://www.amazon.co.uk/Business-Model-Generation-Visionaries-Challengers/dp/0470876417
- Better Data Visualizations related listing for Storytelling with Data and Tufte: https://www.amazon.com/Better-Data-Visualizations-Scholars-Researchers/dp/0231193114
- The Visual Display of Quantitative Information: https://www.amazon.com/Visual-Display-Quantitative-Information/dp/0961392142
- slide:ology: https://www.amazon.com/slide-ology-Science-Creating-Presentations/dp/0596522347
- Resonate: https://www.amazon.co.uk/Resonate-Present-Stories-Transform-Audiences/dp/0470632011
- Six Minutes top presentation books: https://sixminutes.dlugan.com/top-35-presentation-books/
