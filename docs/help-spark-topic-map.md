# Help + Spark Topic Map

## Purpose
This document maps Help taxonomy topics into the future-state Help + Spark routing logic used by the prototype.

Use it with:
- `docs/help-spark-relationship-model.md`
- `docs/routing-matrix.md`
- `docs/template-archetypes.md`

Core rule:
- taxonomy topics help identify the most honest destination type
- they do not recreate legacy topic trees as hubs

## Mapping Logic
- shared account topics belong first to `Sign In & Account Help`
- shared course-entry and access-state topics belong first to `Course Access & Enrollment`
- shared technical problem types belong first to `Troubleshooting & Common Problems`
- product-dependent workflows belong first to product hubs or product-specific articles
- stable reference topics usually work best as shared utility articles
- chooser surfaces are appropriate when product, LMS, or access pathway changes the next step

## Topic Mapping Table

| Topic | Most natural home | Destination type bias | Routing note |
|---|---|---|---|
| `user accounts` | `Sign In & Account Help` | shared help-domain hub | Best shared parent for sign-in, recovery, and account-management questions |
| `user-accounts:creating-account` | `Sign In & Account Help` | article or chooser | Shared task; pathway or institution may matter later |
| `user-accounts:signing-in` | `Sign In & Account Help` | article, chooser, or routed flow | Access pathway often changes the next step |
| `user-accounts:merging-account` | `Sign In & Account Help` | shared article | Shared governance topic if implemented |
| `user-accounts:updating-account` | `Sign In & Account Help` | shared article | Shared account-management answer object |
| `user-accounts:privacy-security` | shared utility/reference article | shared article | Better as stable reference than a hub |
| `classes:enrolling-in-class` | `Course Access & Enrollment` | shared hub, chooser, or article | Shared parent for join, register, and enter-course flows |
| `purchase and access` | `Course Access & Enrollment` | shared help-domain hub | Belongs with access-state and course-entry logic |
| `purchase-access:inclusive-access` | `Course Access & Enrollment` | chooser or article | Institution and access pathway may determine the next step |
| `purchase-access:cengage-unlimited` | `Course Access & Enrollment` | shared article | Shared access-state topic if implemented |
| `purchase-access:a-la-carte` | `Course Access & Enrollment` | shared article | Shared purchase/access topic if implemented |
| `learning activities` | product-specific help | product hub or product article | Usually product-dependent workflow |
| `learning-activities:assigning-activities` | product-specific help | product article | Instructor workflow depends on product behavior |
| `learning-activities:completing-submitting-activities` | product-specific help | product article | Student workflow depends on product behavior |
| `learning-activities:reading` | product-specific help | product article | Often tied to eBooks or resources inside a product |
| `grades and reporting` | product-specific help | product hub or product article | Gradebook and reporting usually depend on product workflow |
| `grades-reporting:viewing-grades-scores` | product-specific help | product article | Student-facing but still product-dependent |
| `grades-reporting:syncing-scores` | `Troubleshooting & Common Problems` plus product-specific help | chooser, article, or product article | Shared issue framing is valid, but product/LMS context usually determines the answer |
| `system requirements` | shared utility/reference article | shared article | Strong candidate for a shared reference article when the evidence supports it |
| `accessibility` | shared utility/reference article | shared article | Better as stable reference than a help-domain hub |
| `classes:integrating-class` / LMS integration | product-specific help with LMS/admin routing clues | product article, chooser, or filtered search | Usually product-specific and often institution- or LMS-specific |
| `classes:creating-class` | product-specific help | product article | Instructor/admin workflow depends on product |
| `classes:managing-roster` | product-specific help | product article | Instructor/admin product workflow |
| product/platform troubleshooting | `Troubleshooting & Common Problems` first, then product-specific help | chooser, product article, or unresolved | Shared issue labels can start in troubleshooting but often branch by product |
| `communication:support` | support fallback | support page | Support stays fallback, not first self-service destination |

## Domain Rules

### Sign In & Account Help
Best home for:
- signing in
- password routing
- username recovery
- account creation
- account settings
- security/privacy account topics

### Course Access & Enrollment
Best home for:
- joining or enrolling in courses
- course keys and access codes
- purchase/access state
- LMS entry into a course
- wrong course, unavailable course, or missing course-entry state

### Troubleshooting & Common Problems
Best home for:
- browser/device issues
- broken LMS links
- missing content
- sync and integration problem framing
- other technical problem labels that may later branch by product or pathway

### Product-Specific Help
Best home for:
- learning activities
- grades and reporting
- course setup and course management
- roster management
- product-specific LMS integration details
- Spark-specific learner and institutional workflows

### Shared Utility/Reference Article
Best home for:
- system requirements
- browser requirements
- accessibility
- other stable cross-product reference content

### Chooser / Disambiguation Surface
Best home for labels where the relationship still determines the next step:
- reset-password pathway questions
- wrong-account questions
- LMS-link questions
- missing-activities questions
- future access-code, course-key, and LMS-access questions if implemented

## Guardrails
- Do not turn every topic into a hub.
- Do not send product-dependent workflows to shared hubs if the actual steps depend on product behavior.
- Do not use Search Results as a placeholder for missing direct destinations.
- Use chooser logic when the topic is shared in label but relationship-driven in practice.
