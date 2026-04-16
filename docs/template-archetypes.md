# Template Archetypes

## Purpose
This document defines the finite page system for `help-prototype`.

Use it with:
- `AGENTS.md`
- `docs/design-system-rules.md`
- `docs/routing-matrix.md`
- `docs/prototype-freeze.md`

The prototype may show multiple preview pages and branch states, but they must resolve to one of the archetypes below rather than drifting into one-off page types.

## Locked Archetype Set
The prototype is limited to these page archetypes:
1. Homepage
2. Search Results
3. Help-domain hub
4. Guided routing page
5. Instruction-path page
6. Help Article
7. Product Hub
8. Support page

If a new screen does not clearly fit one of these archetypes, it is a system change, not routine page work.

## Cross-Archetype Rules
- Search remains the primary entry and discovery mechanism.
- Support remains fallback and must stay visually and structurally secondary to self-service.
- Role is a facet/filter/state, not a top-level page family.
- Product browse goes to product hubs, not product-specific mini-sites or ad hoc landing pages.
- Reset-password help remains a routed flow, not a flat article family.
- Unresolved destinations stay visible but non-interactive; they do not fall back to Search Results.
- New work should reuse shared shell, hero-band, container, section-header, metadata-tag, rail-card, and support-fallback patterns where applicable.

## Archetypes

## Homepage
### Purpose
The Homepage is the shared search-first entry point for the prototype.

### Canonical route
- `/`

### Defining structure
- search-first hero
- help-domain cards
- common-problems shortcuts
- browse-by-role facet entry
- browse-by-product entry

### Current implementation
- `src/features/homepage/Homepage.tsx`

### Must not become
- a directory of content types
- a product-specific landing page
- a support-first page
- a role hub

## Search Results
### Purpose
The Search Results archetype is the shared discovery surface for intentional search and filtered browse behavior.

### Canonical route
- `/search`

### Defining structure
- query/search control
- results count and sort context
- left refinement rail
- article-first results list
- metadata-driven filters, including shared higher-ed, K-12, and approved ELT role facets

### Current implementation
- `src/features/search-results/SearchResultsPage.tsx`

### Must not become
- a homepage variant
- a generic fallback for missing destinations
- a browse-by-type directory

## Help-domain hub
### Purpose
A Help-domain hub is a shared self-service destination for a help area that cuts across products and entry methods.

### Canonical route pattern
- `/help/:helpDomain`

### Defining structure
- compact utility back-link or breadcrumb context
- intro band for the help domain
- primary topic cards first
- secondary alternate-path section after primary topics
- quiet support fallback

### Current implementation
- `src/features/sign-in-account/SignInAccountPage.tsx`
- `src/features/course-access-enrollment/CourseAccessEnrollmentPage.tsx`
- `src/features/troubleshooting-common-problems/TroubleshootingCommonProblemsPage.tsx`

### Current prototype note
- `Sign In & Account Help`, `Course Access & Enrollment`, and `Troubleshooting & Common Problems` are all implemented as live help-domain hubs.
- Additional shared help-domain pages, if added later, must still fit this same archetype rather than introducing a new page family.

### Must not become
- a product hub
- a role hub
- a catch-all article index

## Guided routing page
### Purpose
A Guided routing page is a chooser/triage step that helps the user identify the correct next path before instructions are shown.

### Canonical route pattern
- flow-entry or branch-choice routes such as `/help/sign-in-account/reset-password`

### Defining structure
- narrow, task-focused layout
- short framing intro
- explicit branching options
- direct next-step choices
- quiet fallback links after the branch choices

### Current implementation
- `src/features/reset-password/ResetPasswordChooserPage.tsx`

### Must not become
- a flat instructional article
- a broad support page
- a permanent content destination with unrelated sections

## Instruction-path page
### Purpose
An Instruction-path page is a narrow downstream flow state that gives branch-specific guidance after the user has already been routed.

### Canonical route pattern
- downstream routed help states such as:
  - `/help/sign-in-account/reset-password/lms`
  - `/help/sign-in-account/reset-password/school-nglsync`
  - `/help/sign-in-account/reset-password/not-sure`

### Defining structure
- breadcrumb context back to the flow
- concise intro band naming the branch
- one primary instructional or identification block
- optional secondary issue/options block
- quiet fallback links

### Current implementation
- `src/features/reset-password/ResetPasswordLmsPage.tsx`
- `src/features/reset-password/ResetPasswordSchoolNglsyncPage.tsx`
- `src/features/reset-password/ResetPasswordNotSurePage.tsx`

### Current prototype note
- These pages are separate preview states, but they are one archetype because they share the same narrow branch-specific flow behavior.

### Must not become
- full hubs
- article-index pages
- support escalation dashboards

## Help Article
### Purpose
The Help Article archetype is the primary answer object in the system.

### Canonical route pattern
- `/article/:slug`

### Defining structure
- breadcrumb context
- restrained article header with metadata
- primary article body
- secondary right rail
- related help and feedback treatments

### Current implementation
- `src/features/help-article/HelpArticlePage.tsx`

### Must not become
- a hub
- a routing page
- a support landing page

## Product Hub
### Purpose
A Product Hub is the canonical product-specific browse destination.

### Canonical route pattern
- `/product/:productSlug`

### Defining structure
- breadcrumb context
- product intro/header
- in-page role state control
- stable topic cards
- role-aware tasks/problems
- browse-by-area grid
- lighter resources
- no required product-local support block; support may remain shared and fallback-oriented instead of repeating per product hub

### Current implementation
- `src/features/product-hub/ProductHubMindTapPage.tsx`
- `src/features/product-hub/ProductHubWebAssignPage.tsx`
- `src/features/product-hub/ProductHubSamPage.tsx`
- `src/features/product-hub/ProductHubSparkPage.tsx`

### Current prototype note
- MindTap, WebAssign, SAM, and Spark are all implemented as live product hubs.
- Additional product hubs, if added later, must still fit this same archetype rather than introducing a new page family.

### Must not become
- separate role-specific mini-sites
- a generic landing page
- a search-results substitute

## Support page
### Purpose
The Support page is the structured fallback destination after self-service paths have been offered.

### Canonical route
- `/support`

### Defining structure
- breadcrumb context
- support intro band
- self-service-first recommendation section
- neutral support-services section second
- support-prep guidance

### Current implementation
- `src/features/support-page/SupportPage.tsx`

### Must not become
- homepage-primary navigation
- a broad escalation hub
- a replacement for search or article discovery

## How To Classify New Work
- New homepage refinements stay inside `Homepage`.
- New filtered discovery states stay inside `Search Results`.
- New shared account/access landing screens must fit `Help-domain hub`.
- New chooser or triage screens must fit `Guided routing page`.
- New downstream branch guidance screens must fit `Instruction-path page`.
- New answer objects must fit `Help Article`.
- New product destinations must fit `Product Hub`.
- New escalation/fallback work must fit `Support page`.

## Non-Archetypes
These are important patterns, but they are not page archetypes:
- breadcrumbs
- hero bands
- filter rails
- topic cards
- metadata tags
- rail cards
- support fallback blocks
- preview-switcher states in `src/App.tsx`

## Current Mapping Summary
The current preview registry in `src/app/routes.ts` maps to the finite archetype system like this:
- `homepage` -> Homepage
- `search-results` -> Search Results
- `sign-in-account` -> Help-domain hub
- `course-access-enrollment` -> Help-domain hub
- `troubleshooting-common-problems` -> Help-domain hub
- `reset-password-chooser` -> Guided routing page
- `reset-password-lms` -> Instruction-path page
- `reset-password-school-nglsync` -> Instruction-path page
- `reset-password-not-sure` -> Instruction-path page
- `help-article` -> Help Article
- `product-hub-mindtap` -> Product Hub
- `support-page` -> Support page
