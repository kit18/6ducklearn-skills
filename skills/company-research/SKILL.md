---
name: company-research
description: Use for disciplined company and stock research grounded in 6DuckLearn data, annual reports, important dates, business quality, and explicit downside thinking.
---

# Company Research

Use this skill when the task is to understand a company as a business or an investment. This skill is for disciplined business analysis, not hype chasing.

## What this skill does

- Starts with the real question: what are we trying to decide?
- Separates business quality from timing and sentiment.
- Treats important dates and annual report results as core evidence, not optional extras.
- Uses `get_stock_important_dates` as the default calendar source, backed by `stock_events` with filing-derived fiscal anchors.
- Uses `get_annual_report_results` for filing-aware annual snapshots and exact-symbol `screen_stocks` for TradingView analyst and quality context.
- Forces a clear downside case: what would make this a terrible investment?

## Workflow

1. Define the decision.
2. Describe what the business actually does and why customers pay.
3. Review growth quality, margins, capital allocation, and moat.
4. Check important dates before making a timing claim.
5. Review the latest annual report and most recent results.
6. Separate long-term value from short-term catalyst or signal.
7. State the bear case and disconfirming evidence.
8. End with a clear stance: buy now, buy on weakness, watch, or avoid.

## Use these references

- [company-research-output-template.md](./references/company-research-output-template.md)
- [important-dates-checklist.md](./references/important-dates-checklist.md)
- [annual-report-review-template.md](./references/annual-report-review-template.md)
- [failure-mode-checklist.md](./references/failure-mode-checklist.md)

## Guardrails

- Do not confuse social attention with business strength.
- Do not skip filings just because the story is exciting.
- Do not make a valuation claim without stating what would break it.
- If dates or filing coverage are missing, say so clearly.
