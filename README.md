# 6DuckLearn Skills

Curated public 6DuckLearn skills for agent workflows.

This repository contains reusable skill instructions for research, PKM synthesis, go-to-market planning, consulting-style presentation orchestration, creative direction, video planning, memory grounding, approval gating, and degraded-mode 6DuckLearn bootstrap.

It is intentionally not a dump of the private 6DuckLearn SaaS platform. The hosted product keeps user memory, private PKM, approvals, billing, runtime health, OAuth grants, and production tool execution on `https://6ducklearn.com`.

## Included Skills

- `company-research`
- `domain-product-research`
- `domain-trading`
- `go-to-market`
- `presentation-orchestrator`
- `creative-design`
- `video-studio`
- `pkm-synthesis`
- `memory-grounding`
- `approval-gate`
- `bootstrap`

## Primary Install From GitHub

GitHub is the primary distribution path for these public skills. To install the current public skills into local Codex as namespaced skills, run:

```bash
npx --yes github:kit18/6ducklearn-skills install-codex
```

This copies the skills to `~/.codex/skills` with names like `6ducklearn-go-to-market`, `6ducklearn-presentation-orchestrator`, and `6ducklearn-company-research`, avoiding collisions with other local skills. Restart Codex to refresh the available skill list if needed.

To preview the skills that will install:

```bash
npx --yes github:kit18/6ducklearn-skills list
```

Advanced options:

```bash
npx --yes github:kit18/6ducklearn-skills install-codex --target ~/.codex/skills --prefix 6ducklearn-
```

You can also add the GitHub package to a Node project:

```bash
npm install github:kit18/6ducklearn-skills
```

## Optional npm Package

The package is also configured for the public npm registry as `@6ducklearn/skills`, but npm is optional. Use npm when you need package-manager distribution, version pinning, or registry provenance. GitHub remains the primary install path for Codex.

After an npm version is published, install it with:

```bash
npm install @6ducklearn/skills
npx --yes @6ducklearn/skills install-codex
```

## Curated But Not Included Here

The public GitHub pack is intentionally smaller than the internal Skill Builder curated set. It includes only skills that are safe to run without private 6DuckLearn product state.

- `daily-growth-routes` stays private/local because it produces approval-required growth drafts, community distribution plans, live-route checks, and learning metrics that depend on internal review boundaries.
- `session-publish` is not included because publishing back to 6DuckLearn requires OAuth, policy checks, and explicit user approval.
- `strategic-situation-analysis` is published separately in the [6DuckLearn Sunzi Strategy Stack](https://github.com/kit18/6ducklearn-sunzi-stack) with its own references, examples, and validation suite.

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

Validation checks skill frontmatter, referenced local files, excluded private skills, public-release leakage patterns, and the GitHub `npx` installer behavior.

## Publish

The primary production surface is GitHub `main` plus GitHub releases. Validate first, then push to `origin/main`.

For a local release check:

```bash
npm run release:check
```

npm publication is optional and manual. Prefer npm Trusted Publishing/OIDC after the package exists; otherwise use a short-lived granular npm token only for the bootstrap publish, then revoke it. The `Publish npm package` workflow is intentionally manual so GitHub releases do not require npm credentials.

For a direct npm publish from an authenticated maintainer machine, if needed:

```bash
npm publish --access public
```

## License

Validation scripts are Apache-2.0. Skill text, references, and docs are CC BY 4.0. See [TRADEMARK.md](./TRADEMARK.md) for 6DuckLearn brand usage.
