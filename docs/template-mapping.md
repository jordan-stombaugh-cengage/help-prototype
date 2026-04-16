# Template Mapping

## Purpose
This document assigns legacy content and page clusters to the future-state `help-prototype` page archetypes.

Use it with:
- `AGENTS.md`
- `docs/object-map.md`
- `docs/template-archetypes.md`
- `docs/routing-matrix.md`
- `docs/legacy-content-inventory.md`

This is a mapping document, not an instruction to preserve the legacy navigation trees.

## Mapping Rules
- Map by future-state object and destination purpose, not by legacy folder structure.
- Keep role as a facet/filter/state, not a destination family.
- Keep product help in canonical `Product Hub` destinations.
- Keep help-domain content in shared help-domain hubs when it crosses products.
- Keep most legacy how-to and troubleshooting topics as `Help Article` objects.
- Keep reset-password help in the frozen guided-routing plus instruction-path model.
- Keep support secondary.

## Archetype Mapping Summary

## Homepage / discovery
Future-state purpose:
- search-first landing page
- lightweight discovery into help domains, roles, and products
- no direct import of legacy role-home navigation

Legacy clusters that inform it:
- `help-clone` top-level labels from role and education-segment sitenavs
- `help-clone` recurring product names and common-problem labels
- `elt-clone/eltngl/index.html` and role landing labels
- cross-repo repeated support-topic labels such as sign in, course access, troubleshooting, support

Use legacy content for:
- product names
- help-domain labels
- common-problem shortcut ideas
- audience language cues

Do not map directly:
- `help-clone/index.dita`
- `help-clone/student/index.dita`
- `help-clone/instructor/index.dita`
- `help-clone/k12-student/index.dita`
- `help-clone/k12-instructor/index.dita`
- `elt-clone/eltngl/index.html`
- `elt-clone/eltngl/student/index.html`
- `elt-clone/eltngl/instructor/index.html`
- `elt-clone/eltngl/admin/index.html`
- `elt-clone/eltngl/lmsadmin/index.html`

Reason:
- these are role-first entry shells, which conflict with the frozen homepage and route model

## Search Results
Future-state purpose:
- shared filtered discovery for intentional search and browse-by-role/topical shortcuts

Legacy clusters that map here:
- broad article-rich product libraries from `help-clone`
- Spark and MyELT article inventories from `elt-clone`
- LMS admin and integration libraries from both repos
- repeated troubleshooting, system requirements, and how-to topics

Representative legacy sources:
- `help-clone/common/*`
- `help-clone/admin/lms-admin-*`
- `help-clone/webassign/*`
- `help-clone/mindtap/*`
- `help-clone/sam/*`
- `elt-clone/eltngl/spark/*/*.html`
- `elt-clone/eltngl/myelt/*/*.html`
- `elt-clone/eltngl/lmsadmin/common/*.html`

Best fit:
- large bodies of article-like content that should be discoverable by query and filters

Not a fit:
- legacy hub shells
- support entry pages
- direct reset-password entry pages

## Help-domain hub
Future-state purpose:
- shared cross-product landing pages for reusable problem spaces

Locked hub candidates:
- Sign In & Account Help
- Course Access & Enrollment
- Troubleshooting & Common Problems

Legacy clusters that map here:
- `help-clone/common/sign-in.dita`
- `help-clone/common/account-info.ditamap`
- `help-clone/common/manage-your-account.dita`
- `help-clone/student-purchase-and-access-help.ditamap`
- `help-clone/common/enrollment.ditamap`
- `help-clone/common/purchasing.ditamap`
- repeated product-level troubleshooting sections across both repos

Mapping guidance:
- content that is shared across products and access pathways should land in a help-domain hub first
- product-specific variants should stay in product hubs or help articles
- LMS admin content stays article/discovery content unless a later system decision promotes it

Cluster-to-hub mapping:
- sign in, account creation, manage account, wrong account, forgot username/password -> `Sign In & Account Help`
- access code, course key, purchase, enrollment, join course, change course -> `Course Access & Enrollment`
- general troubleshooting, browser issues, missing content, broken links, resource failures -> `Troubleshooting & Common Problems`

## Product Hub
Future-state purpose:
- canonical product-specific destination with role-aware in-page state

Strong product-hub candidates:
- MindTap
- WebAssign
- SAM
- Spark
- MyELT

Secondary or lower-priority candidates:
- visible-body
- BIM
- cnow/owl
- math-and-you
- diet-wellness
- infuse

Legacy clusters that map here:
- `help-clone/mindtap`
- `help-clone/webassign`
- `help-clone/sam`
- `elt-clone/eltngl/spark`
- `elt-clone/eltngl/myelt`

Mapping guidance:
- collapse student/instructor/admin variants into one product hub per product
- keep role-specific relevance as in-page state, tabs, or article filtering
- move deep task content out of hub shells and into article objects linked from the hub

Explicit collapse examples:
- `help-clone/student/mindtap/index.dita` and `help-clone/instructor/mindtap/index.dita` -> one future MindTap product hub
- `help-clone/student/webassign/index.dita` and instructor equivalents/maps -> one future WebAssign product hub
- `help-clone/student/sam/index.dita` and instructor/admin SAM help -> one future SAM product hub
- `elt-clone/eltngl/spark/index.html`, student, instructor, and administrator Spark branches -> one future Spark product hub
- `elt-clone/eltngl/myelt/index.html`, student, and instructor branches -> one future MyELT product hub

## Help Article
Future-state purpose:
- primary answer object for most legacy topics

Legacy content that belongs here:
- sign-in articles
- manage-account articles
- forgot/reset password articles when used as content inputs
- create-account and self-registration how-tos
- join course / enroll / access code / course key articles
- system requirements
- troubleshooting topics
- LMS integration setup articles
- assignment, test, grade, CPT, dynamic lessons, companion-site, and resource how-tos
- support-prep and procedural support articles where applicable

Representative legacy sources:
- `help-clone/webassign-login-help.ditamap`
- `help-clone/common/system-requirements.ditamap`
- `help-clone/common/purchasing.ditamap`
- `help-clone/common/lms-troubleshooting.ditamap`
- `help-clone/sam/forgot-password.dita`
- `elt-clone/eltngl/spark/*/toc.html`
- `elt-clone/eltngl/myelt/*/*.html`
- `elt-clone/Metadata/help.cengage/help-article-metadata.csv`

Mapping rule:
- if a legacy page is a concrete answer to a concrete task or problem, default it to `Help Article`

## Guided routing page
Future-state purpose:
- chooser/triage step before the user reaches branch-specific instructions

Legacy content that informs it:
- direct-versus-LMS sign-in distinctions
- school portal versus NGLSync distinctions
- course key versus access code decision points
- legacy "not sure" or account-identification copy patterns

Representative legacy sources:
- `help-clone/common/sign-in-through-lms.dita`
- `help-clone/mindtap-student-k12.ditamap`
- sign-in method distinctions scattered through product login maps

Mapping rule:
- legacy reset or sign-in pages that mainly decide "how do you sign in?" or "which access path applies?" belong here conceptually, even if the old system exposed them as direct articles

## Instruction-path page
Future-state purpose:
- downstream branch-specific instructions after routing choice is made

Legacy content that informs it:
- LMS-managed reset instructions
- school or NGLSync sign-in instructions
- account-identification and access-recovery guidance
- course-key error and wrong-course guidance when tightly tied to one access path

Representative legacy sources:
- `help-clone/common/sign-in-through-lms.dita`
- `help-clone/mindtap-student-k12.ditamap` NGLSync sign-in and enroll flows
- `elt-clone/eltngl/myelt/student/elt-reset-password.html`
- `elt-clone/eltngl/spark/*/olp-reset-password.html`
- `elt-clone/eltngl/spark/*/olp-join-self-study.html`

Mapping rule:
- legacy content that is only useful after the access path is known should become an instruction-path page or the article content that feeds one

## Support page
Future-state purpose:
- structured fallback after self-service options

Legacy clusters that map here:
- `help-clone/account-support/index.dita`
- embedded support cards across `help-clone` role/product sitenavs
- `elt-clone/eltngl/*/elt-support.html`
- `elt-clone/eltngl/*/support-case.html`
- `elt-clone/eltngl/lmsadmin/contact-lc.html`

Mapping guidance:
- collapse many product-local support entry pages into one shared support destination
- keep support-case and representative/contact actions as downstream actions from support, not separate top-level page families
- keep region-specific support details as content/state inside support patterns, not as separate IA branches

## Cluster-Level Assignment Matrix

| Legacy cluster | Primary future-state archetype | Secondary future-state use |
|---|---|---|
| Role-first sitenav shells in both repos | Homepage / discovery input only | Search facet and terminology input |
| Shared sign-in/account content | Help-domain hub | Help Article, Guided routing page, Instruction-path page |
| Purchase/access/enrollment content | Help-domain hub | Help Article |
| Product-specific help libraries | Product Hub | Help Article, Search Results |
| LMS admin and integration libraries | Help Article | Search Results |
| Product troubleshooting sections | Help Article | Help-domain hub, Search Results |
| Product support pages | Support page | Help Article for support prep or policy content |
| Product system requirements pages | Help Article | Search Results |
| Product reset-password articles | Guided routing page input | Instruction-path page, Help Article |
| Course-key / wrong-course / join-course problem pages | Help Article | Instruction-path page, Search Results |

## Content-Type Assignment By Future-State Bucket

## Homepage / discovery
- product names
- help-domain names
- common-problem labels
- role labels used as facets

## Search Results
- cross-product article libraries
- LMS integration articles
- troubleshooting articles
- utility articles such as system requirements

## Help-domain hub
- sign-in/account cluster
- purchase/access/enrollment cluster
- shared troubleshooting cluster

## Product hub
- MindTap cluster
- WebAssign cluster
- SAM cluster
- Spark cluster
- MyELT cluster

## Help article
- most concrete how-to and troubleshooting topics

## Guided routing page
- sign-in method selection
- reset entry choice
- portal versus LMS versus direct-access differentiation

## Instruction-path page
- LMS-specific reset guidance
- school/NGLSync guidance
- identity-recovery and access-path clarification

## Support page
- contact-support entry
- support-case launch
- representative handoff
- support-prep guidance

## Risks And Watchouts
- The biggest mapping risk is letting legacy role shells leak back into the new IA.
- Another risk is over-promoting LMS admin or institutional admin content into new top-level destinations when the frozen model supports them better as article/discovery content.
- Legacy reset-password articles frequently flatten the flow; the new prototype must keep reset help routed through the chooser and branch states.
- Product-local support pages are highly duplicative; keeping them separate would work against the frozen support-secondary model.
