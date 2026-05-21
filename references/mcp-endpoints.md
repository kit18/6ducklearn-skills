# Public MCP endpoints

Hosted server:
- name: `6ducklearn`
- URL: `https://6ducklearn.com/mcp`
- OAuth discovery: `https://6ducklearn.com/.well-known/oauth-authorization-server`
- protected resource metadata: `https://6ducklearn.com/.well-known/oauth-protected-resource/mcp`

Codex setup:

```bash
codex mcp add 6ducklearn --url https://6ducklearn.com/mcp
codex mcp login 6ducklearn
```

Claude Code setup:

```bash
claude mcp add --transport http 6ducklearn https://6ducklearn.com/mcp
```

Do not place OAuth tokens, local session files, or copied credentials in skill files.
