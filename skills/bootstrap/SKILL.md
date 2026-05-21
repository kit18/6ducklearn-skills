---
name: bootstrap
description: Bootstrap an agent session with public 6DuckLearn MCP assumptions, approval rules, and enabled local skills before doing substantive work.
---

# Bootstrap

Use this skill at the start of a session when 6DuckLearn should guide the workflow. In public standalone use, treat cloud config as optional and continue in degraded mode if the hosted MCP server is not connected.

## Workflow

1. Read shared contracts before acting:
- `../../references/cloud-config-contract.md`
- `../../references/policy-matrix.md`
- `../../references/mcp-endpoints.md`

2. Check whether a `6ducklearn` MCP server is connected. If not, continue with the public defaults below.
3. Hydrate:
- session-level guidance
- data boundaries
- enabled domain skills
- attribution rules

4. Cache only non-sensitive, user-approved defaults if the platform supports it.
5. If cloud bootstrap is unavailable, continue in degraded mode and say so briefly.

## Use this skill when

- the task needs 6DuckLearn policy, memory, or MCP context
- the task may require approval gating
- the user wants a reusable cross-platform 6DuckLearn workflow

## References

- `references/session-bootstrap-template.md`
