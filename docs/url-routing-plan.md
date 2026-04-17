# URL Routing Plan

## Purpose
This document defines how legacy URL families conceptually map to future-state `help-prototype` destinations.

Use it with:
- `AGENTS.md`
- `docs/template-archetypes.md`
- `docs/routing-matrix.md`
- `docs/legacy-content-inventory.md`

This is a conceptual routing plan, not a live redirect implementation.

## Routing Rules
- Map to the frozen future-state route model, not the legacy IA.
- Collapse duplicate legacy destinations into shared future-state destinations when they represent the same object or user intent.
- Keep product hubs canonical.
- Keep help articles canonical for answer content.
- Keep reset password routed through the chooser and branch pages.
- Keep support as a secondary destination.
- Keep unresolved future destinations unresolved rather than forcing them into `/search`.

## Future-State Canonical Destinations
- `/`
- `/search`
- `/help/sign-in-account`
- `/help/course-access-enrollment`
- `/help/troubleshooting-common-problems`
- `/help/sign-in-account/reset-password`
- `/help/sign-in-account/reset-password/lms`
- `/help/sign-in-account/reset-password/school-nglsync`
- `/help/sign-in-account/reset-password/not-sure`
- `https://account.cengage.com/`
- `/article/:slug`
- `/support`
- `/product/:productSlug`

## Legacy URL Family Mapping

## 1. Legacy role-home URLs
Legacy families:
- `help-clone` role homes such as student, instructor, K-12 student, K-12 teacher, LMS admin
- `elt-clone/eltngl/index.html`
- `elt-clone/eltngl/student/index.html`
- `elt-clone/eltngl/instructor/index.html`
- `elt-clone/eltngl/admin/index.html`
- `elt-clone/eltngl/lmsadmin/index.html`

Future-state mapping:
- do not recreate them as canonical destinations
- their concepts split across:
  - `/` for entry/discovery
  - `/search?...` for role-filtered discovery
  - `/product/:productSlug` for product destinations

Conceptual collapse:
- many old role landing pages collapse into a combination of Homepage + Search Results + Product Hub

## 2. Legacy product-home and product-role URLs
Legacy families:
- `mindtap/*`
- `webassign/*`
- `sam/*`
- `eltngl/spark/*`
- legacy ELT product article trees that are no longer part of the live product set

Future-state mapping:
- product-level entry pages -> `/product/:productSlug`
- deep how-to pages -> `/article/:slug`
- product troubleshooting articles -> `/article/:slug`
- product system requirements pages -> `/article/:slug`
- product support entry pages -> `/support`

Runtime note:
- `/product/mindtap`, `/product/webassign`, `/product/sam`, and `/product/spark` now exist as live product-hub destinations in the current prototype
- product-level entry intent for those four products is no longer future-state-only

Conceptual collapse examples:
- legacy MindTap student and instructor entry pages -> `/product/mindtap`
- legacy WebAssign student/instructor help entries -> `/product/webassign`
- legacy SAM variants -> `/product/sam`
- legacy Spark role and age branches -> `/product/spark`
- legacy ELT pages outside Spark -> mapped case by case into Spark, shared destinations, or unresolved placeholders

## 3. Legacy shared sign-in and account URLs
Legacy families:
- product login help maps
- shared sign-in/account topics
- manage-account and account-info topics

Future-state mapping:
- shared sign-in/account landing intent -> `/help/sign-in-account`
- direct answer topics such as manage account or forgot username -> `/article/:slug`
- password-reset entry intent -> `/help/sign-in-account/reset-password`

Conceptual collapse:
- multiple product-local sign-in/account landing pages collapse into one shared help-domain hub plus supporting articles

## 4. Legacy password-reset URLs
Legacy families:
- direct forgot-password articles
- product-local reset-password pages
- LMS sign-in reset guidance
- school/NGLSync sign-in reset guidance

Future-state mapping:
- unknown reset starting point -> `/help/sign-in-account/reset-password`
- LMS-managed reset -> `/help/sign-in-account/reset-password/lms`
- school or NGLSync-managed reset -> `/help/sign-in-account/reset-password/school-nglsync`
- unsure / identification flow -> `/help/sign-in-account/reset-password/not-sure`
- direct Cengage account reset handoff -> `https://account.cengage.com/`

Conceptual collapse:
- many direct reset articles collapse into one guided entry plus branch-specific instruction pages

Important note:
- old direct password pages should not map straight to a flat article when the user intent is path selection

## 5. Legacy purchase, access, enrollment, and join-course URLs
Legacy families:
- purchase-and-access help
- course key and access code help
- join course / enroll course pages
- wrong course / expired course / no course key pages

Future-state mapping:
- shared landing intent -> `/help/course-access-enrollment`
- answer pages -> `/article/:slug`
- where the user intent is broad discovery rather than one answer -> `/search?...`

Runtime note:
- `Course Access & Enrollment` now exists as a live help-domain route in the current prototype
- deeper answer pages within this domain may still remain unresolved, but the shared landing destination itself is no longer conceptual-only

## 6. Legacy troubleshooting URLs
Legacy families:
- product troubleshooting indexes
- error-specific troubleshooting topics
- browser and compatibility topics
- "can't open resource" pages

Future-state mapping:
- shared landing intent -> `/help/troubleshooting-common-problems`
- concrete issue pages -> `/article/:slug`
- broad issue discovery -> `/search?...`

Runtime note:
- `Troubleshooting & Common Problems` now exists as a live help-domain route in the current prototype
- deeper troubleshooting destinations may still remain unresolved, but the shared landing destination itself is implemented

## 7. Legacy LMS admin and integration URLs
Legacy families:
- LMS admin overview pages
- Blackboard, Canvas, Moodle, Schoology, Brightspace setup pages
- LTI 1.0 and 1.3 configuration pages
- deployment, deep-linking, migration pages

Future-state mapping:
- most pages -> `/article/:slug`
- broad discoverability -> `/search?role=lms-administrator` or other filtered search states

Conceptual collapse:
- old LMS-specific trees collapse into article objects discoverable by search and filters, not into a new top-level route family

## 8. Legacy support URLs
Legacy families:
- `account-support` entries
- product-local `elt-support.html`
- `support-case.html`
- representative/contact pages

Future-state mapping:
- support entry -> `/support`
- support case / chat / representative actions -> external or channel actions launched from `/support`

Conceptual collapse:
- many legacy support entry pages collapse into one shared support destination
- product-local support differences become content/state inside the support experience, not separate route families

## External Handoffs

## Confirmed external handoffs in the future-state model
- direct Cengage account reset -> `https://account.cengage.com/`

## Likely continued external or channel-based handoffs
- support case submission
- live chat launch
- region-specific support contacts
- learning consultant / representative contact
- some video and PDF resource destinations

Planning rule:
- keep these as downstream actions from `/support` or from article/product content where appropriate
- do not model them as new core route families

## Merged Destination Plan

## Merge many role homes into fewer destinations
- old role homepages -> `/` plus filtered `/search` states plus `/product/:productSlug`

## Merge many product-role homes into one product hub per product
- old student/instructor/admin product entries -> one `/product/:productSlug`

Runtime note:
- the current prototype now demonstrates this collapse with live hubs for MindTap, WebAssign, SAM, and Spark
- older ELT product content is no longer modeled as a live product-hub destination

## Merge many sign-in/account entries into one help-domain hub
- product-local sign-in landing pages -> `/help/sign-in-account`

## Merge many reset articles into one routed flow
- old reset pages -> chooser plus branch routes

## Merge many support entries into one support destination
- product-local support pages -> `/support`

## Merge repeated utility topics into shared articles
- system requirements
- browser requirements
- LMS sign-in help
- no course key / wrong course / expired course variants where the core answer is the same

## Multi-Page Collapse Patterns

## Collapse pattern: role shell -> discovery + product hub
Old shape:
- role homepage
- product cards
- support card

New shape:
- `/`
- `/search?...` for role-filtered discovery
- `/product/:productSlug`
- `/support`

## Collapse pattern: product-local sign-in pages -> shared hub + articles
Old shape:
- separate product sign-in pages
- product-specific manage-account pages
- product-specific forgot-password pages

New shape:
- `/help/sign-in-account`
- `/help/sign-in-account/reset-password`
- `/article/:slug`

## Collapse pattern: reset articles -> routed flow
Old shape:
- separate direct reset pages per product or role

New shape:
- `/help/sign-in-account/reset-password`
- `/help/sign-in-account/reset-password/lms`
- `/help/sign-in-account/reset-password/school-nglsync`
- `/help/sign-in-account/reset-password/not-sure`
- external handoff when direct Cengage-account reset applies

## Collapse pattern: product support pages -> shared support destination
Old shape:
- many contact-support pages
- many support-case pages
- many region-specific support variants

New shape:
- `/support`
- external channel actions launched from support

## Collapse pattern: product utility pages -> shared articles
Old shape:
- product-local system requirements
- product-local browser pages
- repeated access-code or course-key explanations

New shape:
- `/article/:slug`
- optionally surfaced through `/search`

## High-Level Legacy-To-New Routing Matrix

| Legacy destination intent | Future-state destination |
|---|---|
| role home | `/` or `/search?...` |
| product home | `/product/:productSlug` |
| help-domain landing | `/help/:helpDomain` |
| answer article | `/article/:slug` |
| reset entry | `/help/sign-in-account/reset-password` |
| LMS reset branch | `/help/sign-in-account/reset-password/lms` |
| school/NGLSync reset branch | `/help/sign-in-account/reset-password/school-nglsync` |
| reset identification / unsure | `/help/sign-in-account/reset-password/not-sure` |
| direct Cengage account reset | `https://account.cengage.com/` |
| support entry | `/support` |
| support case / chat | external or channel action from support |

## Risks And Watchouts
- The largest routing risk is accidentally preserving old role-first URLs as first-class destinations.
- Another risk is collapsing too aggressively into `/search`; the frozen route model explicitly disallows Search Results as a generic placeholder.
- The shared help-domain hubs for `Course Access & Enrollment` and `Troubleshooting & Common Problems` now exist in runtime; the remaining gap is deeper direct destinations within those domains, not the hub routes themselves.
- Product-local support and reset pages often look unique in legacy systems, but many should collapse into shared destinations in the new model.
- LMS admin and institutional admin content is large enough to tempt new route families; under the current freeze it should remain article/discovery content unless the system is deliberately reopened.
