---
name: approval-gate
description: Apply 6DuckLearn approval rules for risky actions such as external APIs, publishing, or sensitive writes before execution.
---

# Approval gate

Use this skill when the current task may cross a 6DuckLearn policy boundary.

## Workflow

1. Read shared contracts:
- `../../references/policy-matrix.md`
- `../../references/redaction-rules.md`

2. Classify the action type.
3. Check cloud policy for that action.
4. If approval is required, stop and request it before execution.
5. If denied, fail closed.
6. If allowed, continue and record the decision in session output.

## References

- `references/approval-checklist.md`
