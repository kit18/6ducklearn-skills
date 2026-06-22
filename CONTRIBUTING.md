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

Validation includes skill checks plus a temporary Codex install smoke for the GitHub `npx` installer.

GitHub is the primary production surface. Before pushing a public release, run:

```bash
npm run release:check
```

npm publication is optional and should be triggered manually only when package-manager distribution is needed. Prefer npm Trusted Publishing/OIDC after the package exists. If a bootstrap token is needed, use a short-lived granular token, store it only as a GitHub secret, and revoke it after use.
