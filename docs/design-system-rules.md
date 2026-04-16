# Design System Rules

## Purpose
This document makes the project-level UI rules durable for future work in `help-prototype`.

Use it together with:
- `docs/magma-foundation.md`

## Source Of Truth
- `docs/magma-foundation.md` is the primary source of truth for:
  - shared layout
  - spacing
  - typography
  - React Magma usage
  - page-family consistency
- If this file and `docs/magma-foundation.md` ever appear to differ, follow `docs/magma-foundation.md` and update this file to match.

## Implementation Rules
- Use React Magma as the default UI system for all shared UI work in this repo.
- Default to Magma’s `Productive` type set.
- Use `Work Sans` globally.
- Use Magma spacing tokens and the 8px-based scale rather than one-off spacing values.
- Use Magma’s responsive layout model and the project max-width strategy defined in `docs/magma-foundation.md`.
- Use the default Magma theme color system for surfaces, borders, text, actions, and semantic states.

## Practical Expectations
- Keep page shells, gutters, section spacing, and card padding consistent across page families.
- Keep search-first and self-service-first hierarchy visible in the UI.
- Keep support visually secondary to self-service on homepage, hubs, articles, routing pages, and product hubs.
- Keep metadata visually quieter than titles and primary content.
- Keep card treatments calm and systematic rather than decorative or marketing-like.
- Keep product hubs product-first and role-aware without creating role-specific mini-sites.
- Keep routing pages narrow, direct, and task-focused.

## Component Rules
- Prefer existing Magma components and patterns before inventing custom primitives.
- Buttons, inputs, selects, tags, badges, cards, rail blocks, and support blocks should follow the usage guidance in `docs/magma-foundation.md`.
- Do not create new visual semantics for tags, badges, or filter chips that conflict with that document.
- Do not introduce custom type scales, custom color systems, or custom spacing systems for a single page.

## Consistency Rules
- Shared UI decisions should be made once and reused.
- When refining one screen, preserve consistency with the other page families unless the difference is intentional and justified by the page type.
- Controlled variation is acceptable only where `docs/magma-foundation.md` explicitly allows it:
  - homepage can be broader
  - search can be denser
  - routing pages can be narrower
  - product hubs can carry stronger sectioning
  - article pages can be more restrained

## Codex Guidance
- Before making UI changes, read `AGENTS.md`, `docs/magma-foundation.md`, and this file.
- Use these docs to guide both new screens and refinements to existing screens.
- Reference the docs instead of reinterpreting the design system from scratch each turn.
