# Public cloud config contract

The public skill pack may use hosted 6DuckLearn MCP context when the user has connected it, but every skill must continue safely without private cloud state.

Public defaults:
- treat memory and PKM retrieval as unavailable until a connected tool proves otherwise
- treat publishing, external APIs, high-cost tools, and writes as approval-required
- keep generated artifacts local unless the user explicitly asks to share or publish
- load only the minimum context needed for the task
- never ask for service keys or private backend credentials

Connected 6DuckLearn context may provide:
- scoped memory or PKM retrieval
- user approval policy
- available tool or skill modules
- attribution and visibility preferences

If connected context conflicts with the public safety defaults, choose the stricter behavior unless the user gives explicit approval.

