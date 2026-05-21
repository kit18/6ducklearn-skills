---
name: domain-trading
description: Use for value-first trading and investment research with 6DuckLearn data, timing signals, important dates, annual report results, and explicit downside framing.
---

# Domain Trading

Use this skill when the task is to analyze a stock, trading setup, watchlist, or market thesis. This skill is for disciplined decision-making, not signal chasing.

## What this skill does

- Separates long-term value from short-term timing.
- Uses social, news, price, and market signals only as timing overlays.
- Treats important dates and annual report results as core inputs.
- Uses `get_stock_important_dates` as the default event/date source, not ad hoc calendar scraping.
- Uses exact-symbol `screen_stocks` output as the default TradingView analyst and quality layer before leaning on weaker fallbacks.
- Forces a clear bear case: what would make this a terrible investment?

## Workflow

1. Define the question: trade, investment, or watchlist?
2. Describe the business briefly and what would make it worth owning.
3. Review important dates before making timing claims.
4. Check the latest annual report and recent result quality.
5. Gather timing inputs like X signals, news, price behavior, or catalysts.
6. Separate value view from timing view.
7. State the downside case and invalidation.
8. End with a disciplined action: buy now, buy on pullback, watch, or avoid.

## Use these references

- [trading-research-output-template.md](./references/trading-research-output-template.md)
- [source-lane-matrix.md](./references/source-lane-matrix.md)
- [important-dates-checklist.md](./references/important-dates-checklist.md)
- [annual-report-sanity-check.md](./references/annual-report-sanity-check.md)

## Guardrails

- Do value first and timing second.
- Do not let social attention substitute for business quality.
- Do not skip dates or filings just because the signal looks strong.
- If the business is weak, a good signal is not enough.
