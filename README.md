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

## Install From npm

This repository is configured for the public npm registry as `@6ducklearn/skills`.
After a version is published, install it with:

```bash
npm install @6ducklearn/skills
```

The package ships Markdown skill instructions and reference assets. For example:

```text
node_modules/@6ducklearn/skills/skills/go-to-market/SKILL.md
node_modules/@6ducklearn/skills/skills/pkm-synthesis/SKILL.md
node_modules/@6ducklearn/skills/templates/6ducklearn.mcp.json.template
```

Validate the installed package contents with:

```bash
npm explore @6ducklearn/skills -- npm test
```

## Install From GitHub

Until the npm package is published, install directly from GitHub:

```bash
npm install github:kit18/6ducklearn-skills
```

To install the public skills into local Codex as namespaced skills, run:

```bash
npx github:kit18/6ducklearn-skills install-codex
```

This copies the skills to `~/.codex/skills` with names like `6ducklearn-go-to-market` and `6ducklearn-company-research`, avoiding collisions with other local skills. Restart Codex to refresh the available skill list if needed.

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

Validation checks skill frontmatter, referenced local files, excluded private skills, and public-release leakage patterns.

## Publish

Maintainers can publish the package through GitHub Actions after adding an `NPM_TOKEN` repository secret with publish access for the `@6ducklearn` scope. The `Publish npm package` workflow runs validation and `npm pack --dry-run` before publishing with npm provenance.

For a local release check:

```bash
npm run release:check
```

For a direct npm publish from an authenticated maintainer machine:

```bash
npm publish --access public
```

## License

Validation scripts are Apache-2.0. Skill text, references, and docs are CC BY 4.0. See [TRADEMARK.md](./TRADEMARK.md) for 6DuckLearn brand usage.
