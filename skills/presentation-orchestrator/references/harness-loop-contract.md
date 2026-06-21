# Harness Loop Contract

Use this reference as the agent flow contract. Produce the stages in order unless the user explicitly requests only one stage.

## Loop

```yaml
input:
  user_request:
  source_notes:
  audience:
  decision_needed:
  constraints:
loop:
  - intake
  - route_card
  - consulting_pov_card
  - evidence_ledger
  - storyboard
  - red_team_review
  - final_simulation_validation
  - revised_output
exit_gates:
  - explicit_decision_ask
  - 3_to_5_argument_sections
  - every_slide_has_action_title
  - every_claim_has_source_type_or_gap
  - alternatives_considered
  - red_team_findings_addressed
  - final_simulation_pass_or_revision_required
  - no_fabricated_numbers_quotes_or_customer_evidence
```

## Prompt Snippets

### Intake

```text
Clarify only the missing details that change the deck: audience, decision, stakes, source material, time limit, output format, and constraints. If time is short, state assumptions and continue.
```

### Route Card

```text
Classify the consulting decision state, answer state, primary framework, support methods, evidence available, assumptions, and output type. Explain why this route fits in one sentence.
```

### Consulting POV

```text
Write the answer-first consulting POV: recommendation or hypothesis, why now, strategic logic, value at stake, options considered, tradeoffs, risks, confidence, what would change our mind, and decision ask.
```

### Evidence Ledger

```text
Map each major claim to evidence, source type, confidence, gap, and possible slide. Separate user-provided facts, source-backed facts, assumptions, and agent inference.
```

### Storyboard

```text
Create a 3 to 5 section storyline with action-title slides. Each slide must have one job, one takeaway, evidence/input, visual direction, and speaker note.
```

### Red-Team Review

```text
Challenge the deck for unsupported claims, framework misuse, weak so-what, missing decision ask, ignored alternatives, execution risk, audience objections, and hidden evidence gaps. Then revise.
```

### Final Simulation Validation

```text
Run a short decision-room simulation before final output. Simulate the sponsor, a skeptical executive, an execution owner, and a data/evidence reviewer. For each persona, name the likely reaction, the toughest question, whether the current deck passes, and the required revision. Do not invent new evidence during the simulation.
```

Simulation must test:

- whether the recommendation is understood in the first two minutes
- whether the decision ask is specific enough to approve or reject
- whether likely objections are answered before Q&A
- whether operators can tell what changes on Monday
- whether evidence gaps are labeled instead of hidden
- whether confidence matches the proof available

## Pass / Fail Gates

Pass only if:

- the consulting POV appears before the storyline
- the deck has a clear decision ask
- one primary framework and at most two support methods are named
- every major claim has source type or evidence gap
- alternatives and rejected paths are visible
- risks and mitigations are visible
- red-team findings are addressed in the revised output
- final simulation findings are addressed or explicitly deferred
- slide titles are action titles, not topic labels

Fail and revise if:

- the output starts with slide titles before a POV
- the framework is decorative
- the recommendation is buried
- charts are listed without implications
- confidence is overstated
- facts, quotes, or benchmarks are invented
- the simulated audience cannot identify the ask, the owner, or the next action
