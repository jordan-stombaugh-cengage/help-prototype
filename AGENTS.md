# AGENTS.md

## Repo Purpose
This repository is the active prototype app for a merged Cengage Help + ELT help experience.

Use React Magma.
Treat this repo as the main build target.

## Folder Roles
- `help-prototype` = active prototype app
- `magma-wrapper` = starter/donor reference
- `help-clone` = Cengage Help reference only
- `elt-clone` = ELT Help reference only

Do not copy legacy architecture directly from the clone repos.

## Core IA Rules
- Search is primary
- Support is fallback
- Role is a facet, not a top-level object
- Browse by product goes to product hubs
- Browse by role goes to filtered search/discovery
- No homepage content-type dropdown
- Search results are article-first
- Product hubs are canonical and role-aware
- Reset-password is a routing flow, not a flat article
- Direct Cengage account password reset should hand off externally
- Follow `docs/routing-matrix.md` and `docs/open-routing-decisions.md` for destination rules, including when unresolved destinations must stay non-interactive

## MVP Constraints
- Phase 1 MVP
- Focus on front-end + deployment modernization
- Do not assume a CMS rewrite
- Do not assume content rewriting is in scope
- Existing content remains authored in Oxygen/DITA
- HTML output is consumed by the front end

## Implementation Priorities
1. app shell and shared layout
2. shared components
3. homepage
4. search results
5. Sign In & Account Help hub
6. reset-password flow
7. help article
8. support page
9. product hub

## Working Rules
- Work only in `help-prototype`
- Keep the app runnable with `npm run dev`
- Do not make destructive changes without explaining them
- Treat legacy clones as reference inputs, not implementation foundations
- Prefer a coherent vertical slice over broad but shallow coverage
- Explain which files were created or changed

## UI System Rules
- For all shared layout, spacing, typography, and React Magma usage, follow:
  - `docs/magma-foundation.md`
  - `docs/design-system-rules.md`
- Treat `docs/magma-foundation.md` as the detailed foundation rulebook.
- Treat `docs/design-system-rules.md` as the implementation-facing companion for applying those rules in this repo.
- Do not introduce UI patterns that conflict with those docs unless the user explicitly asks for a deliberate exception.
