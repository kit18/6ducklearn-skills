# Contributing

Useful contributions include:

- clearer skill workflows
- better reference templates
- safer approval or redaction guidance
- examples that work without private 6DuckLearn state
- compatibility notes for agent hosts

Out of scope:

- private SaaS backend code
- private user memory or PKM
- token-bearing MCP config files
- publishing flows that do not require explicit approval

Run validation before opening a pull request:

```bash
npm test
```

Before publishing a new npm version, run:

```bash
npm run release:check
```

Publishing requires either an authenticated npm maintainer session or the repository `NPM_TOKEN` secret used by the GitHub Actions publish workflow.
