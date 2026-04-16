# Help Routing Model

## Purpose
This document defines how Help-side routing should work in the prototype when we translate legacy Help taxonomy into the frozen future-state system.

Use it with:
- `AGENTS.md`
- `docs/object-map.md`
- `docs/routing-matrix.md`
- `docs/template-archetypes.md`
- `docs/prototype-freeze.md`
- `docs/help-topic-to-domain-map.md`
- `docs/help-role-mapping.md`

This model uses the redesigned object relationships as the source of truth for routing behavior.
It uses the Help taxonomy files as the source of truth for product, role, LMS, and topic vocabulary.

## Core Rule
Do not route by legacy IA bucket.

Route by the relationship that most honestly determines the next step:
- `Product` -> product hub
- `Help domain` -> shared help-domain hub
- `Help Article` -> direct answer object
- `Access pathway` -> chooser or routed branch when sign-in or course-entry method changes the next step
- `Role` -> filter, metadata, or in-page state
- `Support` -> fallback

## Future-State Help Objects

### Product
Product is the canonical product-specific destination.

Use a product hub when:
- the label already names the product
- the next step depends on the product experience
- the issue belongs to product-specific workflows, tools, or settings

Current canonical product hubs in runtime:
- `MindTap`
- `WebAssign`
- `SAM`
- `Spark`

### Help Domain
Help domain is the canonical shared self-service destination when the issue is cross-product.

Use a help-domain hub when:
- the issue is shared across products
- the user needs a shared browse layer before an article is honest
- the label is really about a shared help area rather than one product

Current shared help domains:
- `Sign In & Account Help`
- `Course Access & Enrollment`
- `Troubleshooting & Common Problems`

### Help Article
Help Article is the direct explanatory answer object.

Use a direct article when:
- the prototype already has an honest answer object
- the label is specific enough that the downstream answer is not misleading
- the current surface already constrains product or pathway enough to make the article honest

### Access Pathway
Access pathway is a routing determinant, not a destination family.

Use access pathway as a routing decision when the answer changes based on:
- direct Cengage sign-in
- LMS sign-in
- school or NGLSync sign-in
- course key
- access code
- purchase/access state

### Role
Role is a facet, not a route family.

Use role to:
- pre-filter Search Results
- shape product-hub in-page state
- label article metadata

Do not use role to:
- create role hubs
- create parallel role-first site architecture
- duplicate product hubs as separate role pages

### Support
Support is fallback.

Use support only after:
- a shared domain
- a product hub
- a direct article
- or a small chooser step

## Decision Rule

### Go straight to a shared article when
- the answer is shared across the supported products
- the content does not materially change by product or pathway
- or the current surface already constrains the context enough to make the direct article honest

Typical Help-side examples:
- `Forgot username`
- `Browser requirements`
- `System requirements`

### Go straight to a product hub when
- product context is already known
- the label is really a product entry point
- or the issue category is broad but product-specific

Typical Help-side examples:
- homepage product cards
- product-specific rows on shared help-domain hubs
- explicit product results in Search Results

### Go straight to a shared help-domain hub when
- the label is a shared help area
- the issue is broader than one article
- or the user needs a shared domain before a lower-level answer is honest

Typical Help-side examples:
- `Sign In & Account Help`
- `Course Access & Enrollment`
- `Troubleshooting & Common Problems`

### Use a reset-password-style chooser when
- the label is shared
- more than one next step is honest
- the next step depends on product, LMS, sign-in pathway, or purchase/access relationship

Use the existing routed-flow model for issues like:
- `Reset password`
- `Wrong account`
- `LMS link not working`
- `Missing activities`

Chooser logic is preferred when a direct jump would falsely imply that one product-specific answer is canonical for every context.

### Go to filtered search when
- the user is intentionally browsing by role or broad issue pattern
- there is not yet one honest direct destination
- taxonomy relationships are useful as filters but not as first-class hubs

Typical Help-side examples:
- homepage role pills
- intentional homepage search shortcuts
- some broad common-problem shortcuts that are modeled as discovery, not as direct answers

### Keep the item non-interactive when
- the intended answer object does not exist yet
- the right relationship is still unresolved
- and the prototype does not yet have either:
  - a validated direct article
  - or a small honest chooser step

Typical Help-side examples today:
- `Enter course key`
- `Redeem access code`
- `Join or enroll in a course`
- `LMS integration issues`
- `Missing content or course materials`
- `Error messages, sync, or integration issues`

## Relationship Priorities
When more than one relationship is present, resolve them in this order:
1. If product is already explicit and truly determines the next step, use the product hub or product article.
2. If the issue is clearly shared across products, use the help-domain hub or shared article.
3. If sign-in or access pathway changes the next step, use chooser logic.
4. If role only changes relevance, use role as a filter or metadata signal.
5. If no honest downstream answer exists yet, leave the item non-interactive.

## Help Taxonomy Translation Rules
- `online-learning-platform` vocabulary supplies product naming, but does not recreate legacy product-role IA.
- `role` vocabulary supplies audience meaning, but collapses into the visible prototype role model rather than spawning new hubs.
- `lms` vocabulary supplies LMS metadata and chooser context, not LMS-specific site architecture.
- `topic` vocabulary helps decide shared domain vs product-specific article vs utility article.
- `tc-extensions` confirms which values belong in runtime filters, metadata, and product applicability.

## Guardrails
- Do not copy the old Help role-home or product-role tree directly.
- Do not turn role into a top-level destination family.
- Do not use Search Results as a generic fallback for missing pages.
- Do not pretend a product-specific article is shared unless the current prototype evidence supports that decision.
- Prefer a tiny chooser over a misleading shortcut when access pathway or product relationship really matters.
