# ELT + Spark Routing Model

## Purpose
This document explains how ELT help should route in the prototype when `Spark` is the live ELT product context.

Use it with:
- `docs/object-map.md`
- `docs/routing-matrix.md`
- `docs/relationship-routing-model.md`
- `docs/elt-spark-role-mapping.md`
- `docs/open-routing-decisions.md`

## Core Interpretation
- `Spark` is the live ELT `Product` object in the prototype.
- `Product` remains the canonical product-hub destination.
- `Help domain` remains the canonical shared-domain destination.
- `Role` remains a facet, in-page state, or metadata value, not a parallel site architecture.
- `Access pathway` determines routing when sign-in, LMS launch, school-managed access, or join/enrollment method changes the next step.
- `Institution` matters for ELT administration, provisioning, LMS setup, and support relationships.
- `Support` remains fallback.

## Spark In The OOUX Model

### Spark = Product
In the prototype, `Spark` should be treated as a first-class product object:
- it has one canonical product hub
- it supports role-aware in-page state
- it can own Spark-specific help articles
- it can inherit shared help-domain destinations when the issue is not Spark-only

Canonical destination:
- `/product/spark`

Spark absorbs the live ELT product role that older ELT navigation spread across:
- the ELT role-first shell
- Spark role entry pages
- product-specific student, instructor, and administrator landing pages

### Spark is not
- a separate ELT mini-site
- a role-first tree
- a replacement for shared help domains
- a reason to introduce a new archetype or route family

## Legacy ELT Entry Roles In The New System
Legacy ELT navigation exposed entry roles such as:
- `Student`
- `Instructor`
- `LMS Administrator`
- `Institutional Administrator`
- Spark-specific splits such as `Primary Student` and `Secondary or Adult Student`

In the prototype, those legacy role signals translate into three different behaviors:

### 1. Role as shared discovery facet
Use role as a Search Results or homepage filter when the user is still discovering the right answer across products, articles, and shared domains.

Current visible ELT-relevant role facets already supported in the prototype:
- `Primary Student`
- `Secondary Student`
- `LMS Administrator`
- `Institutional Administrator`

### 2. Role as Spark hub state
Use role as in-page `Spark` product-hub state when the user already knows they are in Spark and needs product-specific tasks, problems, or browse areas.

Current live Spark hub states:
- `Student`
- `Instructor`
- `Institutional Administrator`

### 3. Role as metadata only
Keep deeper role distinctions in metadata or source mapping when they improve relevance, but do not promote them to first-class navigation unless the frozen system already supports them.

Examples:
- `language school student`
- `language school educator`
- `school administrator/coordinator`
- `IT/LMS administrator`

## The Main Routing Determinants

### Product
Use product when the help object belongs to one product’s workflows, setup, or interface.

For ELT in the prototype:
- `Spark` is the live product destination

### Help domain
Use a shared help-domain hub when the issue is broader than Spark itself and is already modeled as a shared family:
- `Sign In & Account Help`
- `Course Access & Enrollment`
- `Troubleshooting & Common Problems`

### Access pathway
Use access pathway when the right next step changes depending on how the user is trying to enter or sign in:
- direct product access
- LMS launch
- school-managed or institutional setup
- reset-password branch logic

This is the same relationship logic already modeled by the reset-password chooser flow.

### Role
Use role to narrow discovery or switch in-page product-hub state.

Do not use role to build parallel ELT sub-sites.

### Institution
Use institution as a routing determinant when the work belongs to school-level setup, provisioning, course management, user management, or LMS implementation.

This is especially important for:
- `Institutional Administrator`
- `LMS Administrator`

## Destination Rules

### Route to the Spark product hub when
- the label already names `Spark`
- the user is browsing by product
- the task or problem is clearly Spark-specific
- the next step belongs to Spark role-aware product help

Examples:
- `Spark`
- `Classroom Presentation Tool`
- `Manage Spark users`
- `Create or manage Spark courses`

### Route to a shared help-domain hub when
- the issue is shared across products or access paths
- the user needs the shared domain before product-specific branching is honest

Examples:
- `Sign In & Account Help`
- `Course Access & Enrollment`
- `Troubleshooting & Common Problems`

### Route to a shared help article when
- the article is honest across the supported product set
- Spark context does not materially change the answer

Examples:
- `Forgot username`
- `Browser requirements`
- `System requirements`

### Route to a Spark-specific help article when
- the answer depends on Spark features, Spark setup, or Spark interface behavior
- the current surface already constrains the answer to Spark
- the product relationship is already known and honest

Examples from legacy Spark sources:
- Spark system or browser requirement articles
- Spark course management articles
- Spark manage-users articles
- Spark Classroom Presentation Tool help

### Route to a chooser / disambiguation step when
- one shared label can lead to different honest next steps
- product, access pathway, LMS, or institution context determines the answer
- a direct article or hub would overstate consolidation

Use the reset-password flow as the model:
- one shared entry point
- one short clarifying question
- a small set of concrete choices
- direct routing to the right next destination

Likely ELT/Spark chooser cases:
- `Wrong account`
- `LMS link not working`
- `Missing activities`
- future LMS-launch or school-portal access issues if the next step depends on entry path

### Route to filtered search when
- the user is still discovering the right article set
- role or product should narrow relevance
- the prototype does not yet have a more precise direct destination
- the user intent is broad rather than a single answer object

Best ELT/Spark uses:
- homepage role clicks
- LMS administrator discovery
- broad LMS integration discovery
- institutional setup discovery across multiple articles

### Keep the item non-interactive when
- the intended answer object does not exist yet
- a chooser would still be premature because the downstream model is unresolved
- the prototype would otherwise imply false precision

Examples:
- unresolved Spark deep links without article coverage
- unresolved LMS integration problem labels
- unresolved provisioning or reporting subtopics

## Spark, LMS Administrator, And Institutional Administrator

### Spark student and instructor behavior
When the user intent is clearly Spark-specific and product context is already known:
- route to the Spark product hub
- use `Student` or `Instructor` as in-page hub state
- route to a Spark-specific article only when the answer depends on Spark behavior

Typical Spark-first intents:
- create an account in Spark
- join a Spark course
- assign or complete Spark work
- use Spark classroom or presentation features

### LMS Administrator behavior
`LMS Administrator` should not be treated as Spark’s default fourth hub tab.

Why:
- LMS admin work is usually organized around `institution + LMS + product`
- the correct next step often depends on the LMS platform
- the answer set is often article-driven rather than product-hub browse-driven

Default routing behavior for LMS administrators:
- filtered search under `/search`
- direct LMS or integration articles when they exist
- chooser logic when the correct next step depends on which LMS or which product is involved

Use the Spark hub only when:
- the action is clearly Spark-specific
- and the product context is already known

### Institutional Administrator behavior
`Institutional Administrator` should route more directly into Spark than `LMS Administrator` does when the work is school-specific:
- school setup
- provisioning
- course creation or management
- user management
- institution-level settings or reporting

Default routing behavior for institutional administrators:
- homepage or search discovery via role facet when still browsing
- Spark hub `Institutional Administrator` state when Spark is already known
- Spark-specific articles when a direct institutional answer exists
- support fallback only after self-service options

## Search Behavior For ELT + Spark
- Search remains article-first.
- Product context may narrow results to `Spark`.
- Role facets such as `Primary Student`, `Secondary Student`, `LMS Administrator`, and `Institutional Administrator` should improve relevance but should not create role hubs.
- `Instructor` remains more important as Spark hub state and metadata than as a new shared homepage role under the current frozen system.

## Practical Summary
- `Spark` is the live ELT product context and canonical ELT product hub.
- Shared help domains still own shared account, access, and troubleshooting questions.
- `Institutional Administrator` is a visible shared facet and a Spark hub state.
- `LMS Administrator` is a visible shared facet and search/article-discovery role, not a default Spark hub tab.
- Chooser logic should handle relationship-driven ambiguity when product, LMS, access pathway, or institution changes the next step.
