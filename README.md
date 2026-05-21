# 6DuckLearn Skills

Curated public 6DuckLearn skills for agent workflows.

This repository contains reusable skill instructions for research, PKM synthesis, go-to-market planning, creative direction, video planning, memory grounding, approval gating, and degraded-mode 6DuckLearn bootstrap.

It is intentionally not a dump of the private 6DuckLearn SaaS platform. The hosted product keeps user memory, private PKM, approvals, billing, runtime health, OAuth grants, and production tool execution on `https://6ducklearn.com`.

## Included Skills

- `company-research`
- `domain-product-research`
- `domain-trading`
- `go-to-market`
- `creative-design`
- `video-studio`
- `pkm-synthesis`
- `memory-grounding`
- `approval-gate`
- `bootstrap`

`session-publish` is not included in v0.1 because publishing back to 6DuckLearn requires OAuth, policy checks, and explicit user approval.

## Optional MCP Setup

These skills work as standalone instructions. If your agent host supports MCP, connect the hosted 6DuckLearn server as `6ducklearn`:

```bash
codex mcp add 6ducklearn --url https://6ducklearn.com/mcp
codex mcp login 6ducklearn
```

Claude Code:

```bash
claude mcp add --transport http 6ducklearn https://6ducklearn.com/mcp
```

See [templates/6ducklearn.mcp.json.template](./templates/6ducklearn.mcp.json.template) for a generic MCP config example.

## Public Boundary

Public skills may:

- guide research and synthesis
- request narrow retrieval from available memory or MCP tools
- ask for approval before public posting, external API calls, or sensitive writes
- degrade gracefully when 6DuckLearn cloud context is unavailable

Public skills may not:

- contain private user data
- include token-hash URLs or local developer paths
- bypass 6DuckLearn approval policy
- publish or sync artifacts without explicit approval
- rely on private SaaS database tables or internal agent defaults

## Validate

```bash
npm test
```

Validation checks skill frontmatter, referenced local files, excluded private skills, and public-release leakage patterns.

## License

Validation scripts are Apache-2.0. Skill text, references, and docs are CC BY 4.0. See [TRADEMARK.md](./TRADEMARK.md) for 6DuckLearn brand usage.

