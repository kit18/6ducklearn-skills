---
name: creative-design
description: Use for social graphics, product visuals, design briefs, art direction, image prompt packs, and creative direction for software or physical products.
---

# Creative Agent

Use this skill when the task is to create or direct visual assets: social media images, product visuals, ad concepts, image-generation prompts, campaign art direction, or creative briefs.

## What this skill does

- Converts product and marketing context into visual concepts.
- Produces image prompt packs with layout, style, subject, composition, copy, and negative prompts.
- Creates design briefs for social posts, product shots, landing visuals, and physical-product campaigns.
- Defines art direction that can be handed to a designer or image model.
- Keeps render requests separate from prompt/brief generation because rendering may spend credits.

## Workflow

1. Clarify asset type, platform, audience, product, format, and required elements.
2. Define the visual objective and the first-view signal.
3. Create 3-5 concept directions with composition and copy guidance.
4. Produce image-generation prompts and negative prompts.
5. Add production notes for dimensions, safe areas, variants, and review risks.
6. Require approval before rendering with paid or external media APIs.

## Use these references

- [asset-prompt-pack-template.md](./references/asset-prompt-pack-template.md)
- [creative-brief-template.md](./references/creative-brief-template.md)

## Guardrails

- Do not render media with external or paid tools unless approval is explicit.
- Do not use copyrighted characters, logos, or celebrity likenesses unless the user has rights and approval is clear.
- Do not make a design feel like generic stock art when a real product or supplied image should be visible.
- Keep prompts inspectable and editable before rendering.
