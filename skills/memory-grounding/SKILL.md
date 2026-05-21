---
name: memory-grounding
description: Ground a task against 6DuckLearn memory or PKM using narrow retrieval, conflict awareness, and minimal context loading.
---

# Memory grounding

Use this skill when the task needs prior notes, saved research, or user-specific context from 6DuckLearn memory.

## Workflow

1. Read shared contracts:
- `../../references/policy-matrix.md`
- `../../references/redaction-rules.md`

2. Retrieve only what the task needs.
3. Prefer narrow, query-shaped retrieval over broad dumping.
4. Label memory as:
- supporting
- conflicting
- stale
- inconclusive

5. Carry only the minimum grounded facts into the final reasoning step.

## References

- `references/query-patterns.md`
