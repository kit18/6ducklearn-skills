# Policy matrix

Use cloud policy as the single source of truth.

Typical boundaries:
- post_publicly
- external_api
- high_cost_tools
- pkm_read
- pkm_write

Expected behaviors:
- auto: proceed without asking
- require_approval: stop and request approval
- deny: do not execute

Local skills must consume policy. They must not redefine it.
