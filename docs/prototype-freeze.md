# Prototype Freeze

## Purpose
This document defines what is currently frozen in `help-prototype`, what may still change without reopening system decisions, and how to distinguish a bug fix from a system change.

Use it with:
- `AGENTS.md`
- `docs/design-system-rules.md`
- `docs/routing-matrix.md`
- `docs/template-archetypes.md`
- `docs/open-routing-decisions.md`

## Freeze Intent
The prototype is in a structure-and-pattern freeze, not a zero-change freeze.

Routine work may still improve the current prototype, but it must do so inside the locked IA, route model, and finite template system.

## What Is Frozen

## IA And Object Rules
- Search is primary.
- Support is fallback.
- Role is a facet/filter/state, not a top-level page family.
- Product browse resolves to product hubs.
- Help articles remain the primary answer object.
- Reset-password help remains a routed flow, not a flat article.

## Finite Page System
- The page system is limited to the eight archetypes in `docs/template-archetypes.md`.
- Existing screens should be normalized into those archetypes, not expanded into one-off hybrids.
- Adding a new page family or changing what an existing family fundamentally does is frozen.

## Route Model
- The canonical destination rules in `docs/routing-matrix.md` are frozen for this phase.
- The preview-switcher registry in `src/app/routes.ts` is the current runtime representation of the frozen route set.
- Reset password always begins at the chooser.
- Direct Cengage account reset remains an external handoff.
- Product-hub role state remains in-page state, not separate routes.

## Placeholder And Unresolved-Destination Behavior
- Unresolved destinations remain visible but non-interactive.
- Missing direct destinations must not fall back to Search Results.
- Open destination questions stay tracked in `docs/open-routing-decisions.md` rather than being solved ad hoc in code.

## Shared UI System Direction
- Shared layout, spacing, typography, and React Magma usage are frozen to the rules in:
  - `docs/magma-foundation.md`
  - `docs/design-system-rules.md`
- New UI work should refine consistency inside that system, not invent new page-specific rules.

## Current Scope Boundary
- This remains a Phase 1 front-end prototype.
- CMS replacement, large-scale content rewriting, and production backend/search behavior are still out of scope.

## Approved Post-Freeze Amendments
The following amendments are approved and now part of the frozen prototype rules:

### 1. ELT role facets added to homepage and search results
- Add these approved role facets to homepage browse-by-role controls and the Search Results role-filter model:
  - `Primary student`
  - `Secondary student`
  - `Institutional Administrator`
- These remain role filters/facets only.
- They do not create new hubs, new archetypes, or new route families.
- The current `School Administrator` stand-in is replaced by `Institutional Administrator` in the shared homepage/search-results role model unless a later explicit IA decision restores both as intentionally distinct roles.

### 2. Product-hub amendment
- The current product-hub archetype no longer requires a bottom product-local support block.
- This is an approved archetype refinement, not a new page type.
- Support remains shared and fallback-oriented rather than repeated product-locally.

### 3. Support-page wording amendment
- The Contact Support page should no longer imply immediate live-chat initiation.
- Neutral support-services wording is now the approved direction.
- This is a content/behavior refinement inside the existing Support page archetype, not a new route or destination family.

## What Can Still Change
- copy refinement within existing page structure
- visual cleanup and consistency fixes
- spacing, typography, layout, and component normalization that follow the design-system docs
- navigation wiring fixes that move behavior closer to the frozen route model
- placeholder links becoming interactive when their intended destination is implemented within the existing archetype system
- new pages that are clearly instances of an existing frozen archetype
- additional sample content, mock data, or seeded article/product states that fit the locked system
- accessibility, responsiveness, and usability fixes that preserve the existing IA and template logic

## What New Work Must Conform To
- `AGENTS.md` for repo purpose, IA rules, and working rules
- `docs/design-system-rules.md` and `docs/magma-foundation.md` for UI system behavior
- `docs/routing-matrix.md` for destination and routing rules
- `docs/template-archetypes.md` for the finite page system
- `docs/open-routing-decisions.md` for unresolved destinations that must stay unresolved until explicitly decided
- the current implementation pattern of shared primitives and route helpers instead of page-local reinvention

## Bug Fix Vs System Change

## Bug Fix
A change counts as a bug fix when it makes the prototype behave more consistently with the already locked rules.

Typical bug fixes:
- a link points to the wrong frozen destination
- a breadcrumb or fallback link breaks the preview-switcher behavior
- a page violates spacing, typography, or component rules already defined in the design docs
- a page drifts from its archetype without changing the archetype itself
- a non-interactive placeholder accidentally routes somewhere
- a shared control or layout pattern behaves inconsistently across pages
- an accessibility or responsive defect is corrected without changing IA or route logic

## System Change
A change counts as a system change when it alters the locked model rather than implementing it more faithfully.

Typical system changes:
- adding a new page archetype
- turning role into a top-level hub or route family
- turning reset-password guidance into a flat article model
- making support primary on a page family where it is frozen as secondary
- allowing unresolved destinations to route to Search Results as a fallback
- splitting product hubs into separate role-specific mini-sites or routes
- changing what objects are first-class, such as replacing article-first answers with another primary object model
- introducing a new canonical route pattern not covered by the current routing matrix

## Handling New Destinations
- If a missing destination can be implemented as an instance of an existing archetype, it may be added without reopening the system.
- If the destination requires a new page family, new route logic, or new IA rule, pause and treat it as a system change.
- If a destination is still unresolved conceptually, keep it non-interactive and document the dependency rather than improvising behavior.

## Practical Working Rule
Use this test before making changes:
1. Does the work fit one of the eight archetypes?
2. Does it follow the current routing matrix?
3. Does it preserve search-first, article-first, product-hub-first, and support-secondary behavior?
4. Does it reuse the shared UI system instead of creating a local exception?

If the answer to any of those is no, the work is outside the freeze and should be treated as a deliberate system decision.
