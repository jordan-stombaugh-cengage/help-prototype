# Help Topic To Domain Map

## Purpose
This document maps Help taxonomy topics into the future-state help-domain logic used by the prototype.

Use it with:
- `docs/help-routing-model.md`
- `docs/routing-matrix.md`
- `docs/template-archetypes.md`

Core rule:
- taxonomy topics help identify the most honest destination type
- they do not recreate legacy topic buckets as separate hubs

## Mapping Logic
- Shared account and sign-in topics belong first to `Sign In & Account Help`.
- Shared course-entry and purchase/access topics belong first to `Course Access & Enrollment`.
- Shared technical problem types belong first to `Troubleshooting & Common Problems`.
- Product-dependent workflows belong first to product hubs or product-specific articles.
- Utility/reference topics such as requirements and accessibility usually work best as shared articles.

## Topic Mapping Table

| Taxonomy topic | Most natural future-state home | Destination type bias | Routing note |
|---|---|---|---|
| `user-accounts` | `Sign In & Account Help` | shared help-domain hub | Best shared parent for sign-in, account recovery, and profile-management topics |
| `user-accounts:creating-account` | `Sign In & Account Help` | article or chooser | Shared account task; may branch by pathway later |
| `user-accounts:signing-in` | `Sign In & Account Help` | article, chooser, or routed flow | Access pathway often determines the next step |
| `user-accounts:merging-account` | `Sign In & Account Help` | article | Shared account-governance topic if implemented |
| `user-accounts:updating-account` | `Sign In & Account Help` | article | Shared account-management answer object |
| `user-accounts:deleting-account` | `Sign In & Account Help` | article | Shared account-management answer object |
| `user-accounts:privacy-security` | `Sign In & Account Help` | article | Usually shared reference content rather than a hub |
| `classes:enrolling-in-class` | `Course Access & Enrollment` | shared help-domain hub, chooser, or article | Shared parent for joining, registering, and access-path issues |
| `purchase-access` | `Course Access & Enrollment` | shared help-domain hub | Belongs with access-state and course-entry logic, not with support |
| `purchase-access:inclusive-access` | `Course Access & Enrollment` | article or chooser | Access pathway or institution may determine next step |
| `purchase-access:cengage-unlimited` | `Course Access & Enrollment` | article | Shared purchase/access article if supported |
| `purchase-access:a-la-carte` | `Course Access & Enrollment` | article | Shared purchase/access article if supported |
| `purchase-access:managing-subscriptions` | `Course Access & Enrollment` | article | Shared access-state topic |
| `purchase-access:refunds` | `Course Access & Enrollment` or Support fallback | article first, support second | Prefer article if policy/help content exists; support only as fallback |
| `learning-activities` | Product-specific help | product hub or product article | Usually depends on product workflow more than shared domain logic |
| `learning-activities:creating-editing-activities` | Product-specific help | product article | Instructor workflow is product-dependent |
| `learning-activities:assigning-activities` | Product-specific help | product article | Product-specific authoring/assignment flow |
| `learning-activities:completing-submitting-activities` | Product-specific help | product article | Student workflow is usually product-dependent |
| `learning-activities:reading` | Product-specific help | product article | Often tied to eBook/resource behavior inside a product |
| `grades-reporting` | Product-specific help | product hub or product article | Gradebook and reporting usually depend on product workflow |
| `grades-reporting:viewing-grades-scores` | Product-specific help | product article | Student-facing, but still usually product-specific |
| `grades-reporting:configuring-gradebook` | Product-specific help | product article | Instructor/admin workflow is product-dependent |
| `grades-reporting:syncing-scores` | `Troubleshooting & Common Problems` plus product-specific help | article, chooser, or product article | Shared issue framing is valid, but the answer usually depends on product/LMS context |
| `system-requirements` | Shared utility/reference article | shared article | Strong candidate for one shared utility article when evidence supports it |
| `accessibility` | Shared utility/reference article | shared article | Better as reference content than a domain hub |
| `accessibility:accommodations` | Product-specific help or shared article depending on evidence | product article or shared article | If accommodations differ by product, route product-first |
| `classes:integrating-class` | Product-specific help with LMS metadata | product article, chooser, or filtered search | LMS integration is usually product-specific even when LMS vocabulary is shared |
| `classes:creating-class` | Product-specific help | product article | Product-specific instructor/admin workflow |
| `classes:copying-class` | Product-specific help | product article | Product-specific workflow |
| `classes:managing-roster` | Product-specific help | product article | Usually instructor/admin product workflow |
| `communication:support` | Support fallback | support page | Fallback only, not the first self-service destination |

## Practical Domain Rules

### Sign In & Account Help
Best home for:
- account creation and recovery
- signing in
- password/reset routing
- username and profile management
- security and privacy account topics

### Course Access & Enrollment
Best home for:
- joining or enrolling in courses
- course keys and access codes
- purchase/access state
- LMS entry into a course
- wrong course, unavailable course, or missing course-entry state

### Troubleshooting & Common Problems
Best home for:
- shared issue framing such as missing content, broken LMS links, browser issues, and sync/integration problems
- troubleshooting clusters that may later branch by product or pathway

### Product-Specific Help
Best home for:
- learning activities
- grades and reporting
- class setup and course management
- roster management
- LMS integration details when the answer changes by product

### Shared Utility/Reference Article
Best home for:
- system requirements
- browser requirements
- accessibility
- stable cross-product reference content

## Guardrails
- Do not turn every taxonomy topic into a hub.
- Do not send product-dependent topics to shared hubs if the real answer depends on product workflow.
- Do not use Search Results as a placeholder for a missing direct destination.
- Use chooser logic when a topic is shared in label but relationship-driven in practice.
