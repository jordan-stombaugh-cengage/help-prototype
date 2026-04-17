# Help + Spark Relationship Model

## Purpose
This document defines how the merged Help + Spark prototype should route when we use object relationships instead of legacy IA buckets.

Use it with:
- `AGENTS.md`
- `docs/object-map.md`
- `docs/routing-matrix.md`
- `docs/template-archetypes.md`
- `docs/prototype-freeze.md`
- `docs/open-routing-decisions.md`

Core rule:
- route by the relationship that most honestly determines the next step
- do not route by old role-home, topic-tree, or product-role shell structure
- `Spark` is the only ELT product context in the prototype

## Core Objects And Routing Meaning

### Product
`Product` is the canonical product-hub destination.

Use product routing when:
- the label already names the product
- the next step depends on product workflow or interface
- the current surface already constrains the answer to one product

Current live product hubs:
- `MindTap`
- `WebAssign`
- `SAM`
- `Spark`

### Help Domain
`Help domain` is the canonical shared-domain hub destination.

Use a help-domain hub when:
- the issue is shared across products
- the user needs a shared browse layer before a direct article is honest
- the label names a shared problem space rather than one product

Current shared help domains:
- `Sign In & Account Help`
- `Course Access & Enrollment`
- `Troubleshooting & Common Problems`

### Help Article
`Help Article` is the explanatory answer object.

Use a direct article when:
- the prototype already has an honest answer object
- the answer is stable enough to avoid another routing question first
- the current surface already constrains product or pathway enough to make the article honest

### Access Pathway
`Access Pathway` is a routing determinant, not a new destination family.

Use pathway logic when the next step changes based on:
- direct Cengage sign-in
- LMS sign-in
- school or NGLSync sign-in
- course key
- access code
- purchase/access state

### Role
`Role` is a facet, filter, metadata signal, or in-page product-hub state.

Use role to:
- pre-filter Search Results
- adjust product-hub state
- improve article metadata and relevance

Do not use role to:
- create role hubs
- create role-based mini-sites
- create separate route families

### Institution And Admin Context
`Institution` is a routing clue, especially for Spark, LMS-admin, and institutional-admin scenarios.

Use institution/admin context when:
- the work belongs to school setup, provisioning, or course management
- LMS integration depends on school or LMS configuration
- the answer is more institutional than learner-facing

### Support
`Support` is fallback.

Use support only after:
- a direct article
- a shared help-domain hub
- a product hub
- or a chooser step

## Decision Rule

### Go straight to a shared Help Article when
- the answer is shared across the supported product set
- pathway does not materially change the steps
- or the current surface already constrains the answer enough to make the article honest

Current strong examples:
- `Forgot username`
- `Browser requirements`
- `System requirements`

### Go straight to a shared help-domain hub when
- the issue is clearly cross-product
- the label names a shared help area
- or the user needs a shared parent before a lower-level answer is honest

Current strong examples:
- `Sign In & Account Help`
- `Course Access & Enrollment`
- `Troubleshooting & Common Problems`

### Go straight to a product hub when
- product is already the main relationship
- the user is intentionally browsing by product
- the next step belongs to product-specific tasks, problems, or browse areas

Current strong examples:
- homepage product cards
- product-specific rows on shared hubs
- explicit product results in Search Results

### Use a chooser / disambiguation step when
- the label is shared
- more than one next step is honest
- product, access pathway, LMS context, or institution context determines the answer

Use the reset-password flow as the copy and behavior model:
- one short framing prompt
- one clear question
- a small set of concrete choices
- no Search Results fallback

Current chooser cases already modeled in runtime:
- `Reset password`
- `Wrong account`
- `LMS link not working`
- `Missing activities`

Likely future chooser cases if implemented later:
- `Redeem access code`
- `Enter course key`
- `Access your course through LMS`
- `Missing content or course materials`

### Use filtered search when
- the user is intentionally discovering rather than following one answer object
- role or product mainly narrows relevance
- the issue label is still broad enough that direct routing would overstate certainty

Current strong examples:
- homepage role pills
- homepage common-problem groups
- LMS administrator discovery
- broad Spark admin/integration discovery

### Keep the item non-interactive when
- there is no honest direct destination yet
- chooser logic would still be premature because downstream destinations are unresolved
- a live route would imply false precision

Current strong examples:
- `Manage account`
- `Join or enroll in a course`
- `Purchased access but course is unavailable`
- `Wrong course or missing course`
- `LMS integration issues`
- `Error messages, sync, or integration issues`
- unresolved product-hub deep links

## Relationship Priority Order
When multiple relationships are present, resolve them in this order:
1. If product is already explicit and truly determines the next step, use the product hub or product article.
2. If the issue is clearly shared across products, use the shared help-domain hub or shared article.
3. If access pathway changes the next step, use chooser logic.
4. If institution/admin context changes the next step, prefer filtered discovery, chooser logic, or a product-specific admin article over a broad learner-facing destination.
5. If role only changes relevance, treat it as a filter, metadata signal, or in-page hub state.
6. If no honest downstream answer exists yet, keep the item non-interactive.

## Spark-Specific Interpretation

### Spark as product
- `Spark` is the only live ELT product in the prototype
- Spark routes to one canonical product hub
- Spark-specific workflows can route to Spark articles when the answer depends on Spark behavior

### Spark and shared help domains
Shared account, access, and troubleshooting issues should still start in shared help domains unless Spark context already determines the answer.

Examples:
- `Can't sign in` -> shared sign-in/help domain first
- `Join a Spark course` -> Spark article or Spark hub if product context is already explicit
- `LMS link not working` on a shared surface -> chooser
- `LMS course management` inside Spark -> Spark-specific article if it exists

### Spark and institution/admin context
- `Institutional Administrator` can be both a shared discovery facet and a Spark hub state
- `LMS Administrator` is primarily search/article discovery, not a default Spark hub state
- LMS setup and integration should stay article-first or chooser-first rather than becoming a separate admin mini-site

## Guardrails
- Do not recreate role-first site architecture.
- Do not create new page archetypes.
- Do not let Search Results become a fallback for missing destinations.
- Do not route a shared issue straight to one product answer unless that relationship is already known.
- Do not expose older ELT product contexts in the future-state routing model.
