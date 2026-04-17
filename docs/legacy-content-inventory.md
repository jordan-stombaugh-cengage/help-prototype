# Legacy Content Inventory

## Purpose
This document inventories the major legacy content clusters in `../help-clone` and `../elt-clone` as reference inputs for `help-prototype`.

It is not a migration plan and it is not approval to copy the legacy IA directly.

Use it with:
- `AGENTS.md`
- `docs/template-archetypes.md`
- `docs/routing-matrix.md`
- `docs/object-map.md`
- `docs/prototype-freeze.md`

## Working Rules
- Treat both legacy repos as read-only reference sources.
- Preserve the frozen archetype system in `docs/template-archetypes.md`.
- Preserve the frozen route model in `docs/routing-matrix.md`.
- Do not import role-first or product-by-product legacy navigation structures as the new primary IA.
- Reuse content patterns, labels, and object signals only when they fit the current prototype model.

## help-clone: Major Page And Content Clusters

## 1. Role-first entry and sitenav cluster
Representative sources:
- `../help-clone/index.dita`
- `../help-clone/student/index.dita`
- `../help-clone/instructor/index.dita`
- `../help-clone/k12-student/index.dita`
- `../help-clone/k12-instructor/index.dita`
- `../help-clone/lmsadmin/index.dita`

Observed pattern:
- top-level entry is "Who are you?"
- strongest navigation split is by role and education segment
- higher-ed student, higher-ed instructor, K-12 student, K-12 teacher, and LMS administrator each get their own landing surface
- those role landings then fan out to products, system requirements, support, and auxiliary tools

Inventory note:
- This is useful as a terminology and cluster signal, but it conflicts with the frozen rule that role is a facet rather than a top-level destination family.

## 2. Product help libraries
Largest product/content trees by file volume:
- `webassign`
- `common`
- `visible-body`
- `mindtap`
- `sam`
- `bim`
- `cnow-owl`
- `math-and-you`
- `nglsync`
- `mindtap-k12`

Representative sources:
- `../help-clone/mindtap/index.dita`
- `../help-clone/student/mindtap/index.dita`
- `../help-clone/student/webassign/index.dita`
- `../help-clone/student/sam/index.dita`
- top-level maps such as `mindtap-student.ditamap`, `mindtap-instructor.ditamap`, `webassign-student-help.ditamap`, `sam-student-help.ditamap`

Observed pattern:
- each major product tends to have separate student/instructor help entry maps
- product help often combines full help center content, videos, quick starts, system requirements, and support cards
- some products also include product-adjacent utilities like videos, eBook help, or keyboarding variants

Inventory note:
- These are strong source candidates for future `Product Hub` content, but the prototype should converge them into canonical product hubs rather than preserve separate role hubs per product.

## 3. Shared common-topic library
Representative sources:
- `../help-clone/common/sign-in.dita`
- `../help-clone/common/sign-in-through-lms.dita`
- `../help-clone/common/account-info.ditamap`
- `../help-clone/common/enrollment.ditamap`
- `../help-clone/common/purchasing.ditamap`
- `../help-clone/common/manage-your-account.dita`
- `../help-clone/common/system-requirements.ditamap`
- `../help-clone/common/lms-troubleshooting.ditamap`

Observed pattern:
- reusable shared content exists for sign-in, account help, enrollment, purchasing, eBooks, system requirements, and LMS troubleshooting
- many product maps pull these common assets in rather than duplicating the full topic content

Inventory note:
- This is the clearest legacy evidence for reusable help-domain and article objects that cut across products.

## 4. Purchase, access, and enrollment cluster
Representative sources:
- `../help-clone/student-purchase-and-access-help.ditamap`
- `../help-clone/common/purchasing.ditamap`
- `../help-clone/common/enrollment.ditamap`
- `../help-clone/diet-wellness/enroll-in-your-course.dita`
- `../help-clone/webassign-student-help.ditamap`

Observed pattern:
- purchase/access is already treated as a cross-product student problem space
- major recurring tasks include access codes, course keys, enroll/join course, change courses, and eBook access

Inventory note:
- This is the strongest source cluster for a future `Course Access & Enrollment` help-domain hub once that destination is implemented.

## 5. Account, sign-in, and reset cluster
Representative sources:
- `../help-clone/webassign-login-help.ditamap`
- `../help-clone/common/sign-in.dita`
- `../help-clone/common/manage-your-account.dita`
- `../help-clone/sam/logging-in.dita`
- `../help-clone/sam/forgot-password.dita`
- `../help-clone/account-support/index.dita`
- `../help-clone/math-and-you/student-usernames-and-passwords.dita`

Observed pattern:
- sign-in and account help recur across multiple products
- direct sign-in, LMS sign-in, account creation, forgot password, wrong account, and manage account all appear repeatedly
- some products expose direct reset-password articles rather than a chooser/routing flow

Inventory note:
- This cluster should inform article content and branch copy, but not replace the frozen reset-password route model.

## 6. LMS admin and integration cluster
Representative sources:
- `../help-clone/lmsadmin/index.dita`
- `../help-clone/admin/branch-lms-admin.ditamap`
- many `../help-clone/admin/lms-admin-*` topics
- `../help-clone/canvas-lti-adv/`
- `../help-clone/lms-docs/index.dita`

Observed pattern:
- LMS admin help is a large standalone cluster
- content is grouped by LMS platform and integration type
- frequent themes are configuration, deployment, deep linking, migration, and support contacts

Inventory note:
- This is a clear long-term `Help Article` and filtered-discovery source, and possibly a future specialized product/help-domain body of content, but it does not fit the current homepage IA as a top-level hub.

## 7. Support and system-requirements cluster
Representative sources:
- `../help-clone/account-support/index.dita`
- support cards embedded in many `student/*/index.dita` and `instructor/*/index.dita` files
- `common/system-requirements.ditamap`
- product-specific system requirement entry points

Observed pattern:
- support is often region-specific and externally routed
- system requirements appear as a recurring utility topic across many products

Inventory note:
- These are strong `Help Article` candidates and secondary `Support page` content inputs, not primary navigation objects.

## elt-clone: Major Page And Content Clusters

## 1. Role-first ELT landing pages
Representative sources:
- `../elt-clone/eltngl/index.html`
- `../elt-clone/eltngl/student/index.html`
- `../elt-clone/eltngl/instructor/index.html`
- `../elt-clone/eltngl/admin/index.html`
- `../elt-clone/eltngl/lmsadmin/index.html`

Observed pattern:
- top-level entry is also "Who are you?"
- strong role split across student, instructor, LMS administrator, and institutional administrator
- role pages often surface product help center access plus direct support

Inventory note:
- Like `help-clone`, this role-first shell is reference-only because it conflicts with the frozen prototype model.

## 2. Spark product help center cluster
Representative sources:
- `../elt-clone/eltngl/spark/index.html`
- `../elt-clone/eltngl/spark/instructor/toc.html`
- `../elt-clone/eltngl/spark/student/toc.html`
- `../elt-clone/eltngl/spark/primary-student/toc.html`
- `../elt-clone/eltngl/spark/administrator/toc.html`

Observed pattern:
- Spark is the dominant ELT product cluster
- Spark content is deeply organized around role and age segment:
  - instructor
  - secondary/adult student
  - primary student
  - administrator
- repeated major sections include:
  - Get Started
  - Sign In
  - Manage Account
  - Courses / Course Management
  - Resources / eBooks / Companion Sites
  - Assignments
  - Tests
  - Grades
  - Mobile App
  - Online Placement Test
  - Troubleshooting
  - Contact Support

Inventory note:
- Spark is the clearest ELT source for a canonical `Product Hub`, plus many reusable article objects.

## 3. Legacy secondary ELT product cluster
Representative sources:
- legacy ELT product trees under `../elt-clone/eltngl/`

Observed pattern:
- the legacy ELT repo contains a second large product-oriented help family outside Spark
- student and instructor branches include:
  - login and account topics
  - reset password
  - support
  - course access and self-study
  - grades and reports
  - troubleshooting
  - companion sites
  - TBS / CPT-related utilities

Inventory note:
- this cluster is useful as legacy article source material, but it is not part of the live prototype product set.

## 4. Institutional administration cluster
Representative sources:
- `../elt-clone/eltngl/admin/index.html`
- `../elt-clone/eltngl/spark/administrator/toc.html`

Observed pattern:
- institutional admin content is operational rather than learner-facing
- strongest themes are course management, instructor management, student management, exports, reports, institution settings, registration guides, and password resets for others

Inventory note:
- This cluster reinforces the `Institution` object in `docs/object-map.md`, but it should not become a new top-level archetype.

## 5. LMS admin and integration cluster
Representative sources:
- `../elt-clone/eltngl/lmsadmin/toc.html`
- `../elt-clone/eltngl/lmsadmin/common/*.html`
- `../elt-clone/eltngl/lmsadmin/contact-lc.html`

Observed pattern:
- organized by LMS platform and LTI version
- recurring subtopics include Blackboard, Brightspace, Canvas, Moodle, Schoology, system requirements, contact representative, and contact support

Inventory note:
- This is another strong article/discovery cluster, especially for LMS integration help and filtered search content.

## 6. Support, troubleshooting, and utility cluster
Representative sources:
- many `elt-support.html` pages under Spark and other ELT role trees
- many `support-case.html` pages
- product TOCs with `Troubleshooting`, `System Requirements`, and `Contact Support`

Observed pattern:
- support is usually embedded as the last branch within a product/role TOC
- troubleshooting is commonly adjacent to support
- support-case handling is a distinct downstream action

Inventory note:
- This aligns well to the frozen `Support page` plus article-level troubleshooting/help content.

## Likely Duplicates Across The Two Legacy Repos

## Shared cross-product clusters
- sign in
- create account
- manage account
- forgot/reset password
- course access / join course / enroll
- course key / access code flows
- LMS sign-in and LMS integration help
- troubleshooting
- system requirements
- contact support

## Shared object patterns
- product-specific help libraries
- role-specific wrappers around the same product body
- account and access articles reused across products
- support pages that mostly differ by region or channel details

## Notable duplication shape
- `help-clone` duplicates many topics across product maps and role entry shells
- `elt-clone` duplicates many Spark and legacy ELT topics across student, instructor, primary-student, and administrator branches
- both repos duplicate sign-in, password, support, and system-requirements content in product-local forms

## Product-Specific Hub Candidates
These legacy clusters map most naturally to future `Product Hub` instances:
- MindTap
- WebAssign
- SAM
- Spark
- visible-body, BIM, cnow/owl, math-and-you, diet-wellness, and infuse as lower-priority or niche product-hub candidates if they survive the merged scope

Strongest evidence:
- `help-clone/mindtap/index.dita`
- `help-clone/student/webassign/index.dita`
- `help-clone/student/sam/index.dita`
- `elt-clone/eltngl/spark/index.html`

## Help-Domain Hub Candidates
These clusters fit the frozen `Help-domain hub` idea best:
- Sign In & Account Help
- Course Access & Enrollment
- Troubleshooting & Common Problems

Supporting legacy evidence:
- `help-clone/common/sign-in.dita`
- `help-clone/common/account-info.ditamap`
- `help-clone/common/manage-your-account.dita`
- `help-clone/student-purchase-and-access-help.ditamap`
- `help-clone/common/enrollment.ditamap`
- `help-clone/common/purchasing.ditamap`
- repeated `troubleshooting` sections in `help-clone` product maps
- repeated `Troubleshooting` TOCs in ELT Spark and other legacy ELT branches

Important constraint:
- LMS admin content is a large domain-like cluster, but under the current freeze it is better treated as article/discovery content than as a new top-level help-domain hub.

## Article-Template Candidates
These legacy topic types map cleanly to the frozen `Help Article` archetype:
- sign in
- create account
- forgot password
- change password
- change email address
- manage account
- join course / enroll / access course
- system requirements
- can't open resource links
- no course key / wrong course / expired course
- view grades / export grades / gradebook
- create course / copy course / edit course
- LMS-specific setup/configuration articles
- product-specific how-to tasks such as assignments, tests, CPT, dynamic lessons, companion sites, and teacher resources

Good legacy article-style signals:
- `help-clone/webassign-login-help.ditamap`
- `help-clone/common/purchasing.ditamap`
- `help-clone/common/system-requirements.ditamap`
- `elt-clone/eltngl/spark/*/toc.html`
- `../elt-clone/Metadata/help.cengage/help-article-metadata.csv`

## Reset, Support, And Routing-Flow Candidates

## Reset and sign-in flow signals
- `help-clone/common/sign-in-through-lms.dita`
- `help-clone/mindtap-student-k12.ditamap` with separate NGLSync sign-in and enroll variants
- `help-clone/sam/forgot-password.dita`
- `elt-clone/eltngl/spark/*/olp-reset-password.html`
- `elt-clone/eltngl/spark/instructor/reset-student-password.html`
- `elt-clone/eltngl/spark/administrator/reset-instructor-password.html`

Routing relevance:
- legacy content often exposes direct reset articles
- the future-state prototype should instead route password help through the frozen chooser and branch states, while using legacy articles as source material for branch copy and downstream instructional pages

## Support-flow signals
- `help-clone/account-support/index.dita`
- many embedded support cards in `help-clone` product sitenavs
- `elt-clone/eltngl/*/elt-support.html`
- `elt-clone/eltngl/*/support-case.html`
- `elt-clone/eltngl/lmsadmin/contact-lc.html`

Routing relevance:
- these are strong inputs for support terminology, support prep guidance, support-channel labels, and downstream support actions
- they should not replace the frozen support-secondary model

## Labels And Terminology Worth Reusing
These labels appear repeatedly enough to be worth preserving where they fit the current prototype:
- Sign In
- Create Account
- Manage Account
- Forgot Password
- Change Password
- Change Email Address
- Contact Support
- Open a Support Case
- System Requirements
- Troubleshooting
- Course Access
- Enrollment
- Join a Course
- Course Key
- Access Code
- LMS Administrator
- Institutional Administrator
- Companion Sites
- Classroom Presentation Tool
- Dynamic Lessons
- Online Placement Test
- Self-Registration Guide
- Grades and Scores
- Resources

Terminology caution:
- `help-clone` uses role-first labels like `Higher Education Student Help` and `Higher Education Instructor Help`
- `elt-clone` uses role-first labels like `Students & Parents`, `Instructors`, `Institutional Administrators`
- these labels are useful as facets and audience hints, but they should not drive the new top-level architecture

## Future-State Template Mapping
This is the most likely mapping from legacy content patterns to the frozen `help-prototype` archetypes.

## Homepage
Use legacy repos only for:
- terminology
- common-problem link ideas
- product label inventory
- help-domain label inventory

Do not reuse:
- role-first homepage structures
- product-by-role landing trees

## Search Results
Best fed by:
- article-rich product libraries from `help-clone`
- Spark and legacy ELT article inventories and metadata patterns from `elt-clone`
- LMS integration article clusters from both repos

## Help-domain hub
Best future help-domain hubs:
- Sign In & Account Help
- Course Access & Enrollment
- Troubleshooting & Common Problems

## Guided routing page
Best source signals:
- legacy sign-in method distinctions
- LMS versus direct sign-in guidance
- NGLSync and school-portal distinctions
- course-key versus access-code decision points

## Instruction-path page
Best source signals:
- LMS sign-in instructions
- school/NGLSync sign-in guidance
- "not sure" identification copy
- direct support escalation conditions

## Help Article
Primary target for most legacy how-to topics and troubleshooting topics.

## Product Hub
Best future product hubs:
- MindTap
- WebAssign
- SAM
- Spark

## Support page
Best source signals:
- contact method labels
- region-aware support language
- support-case terminology
- representative/contact-support distinctions

## Biggest Duplication And Merge Opportunities
- Merge repeated product-local sign-in and account topics into shared article objects plus one frozen sign-in/help-domain hub.
- Merge purchase, access, enrollment, course-key, and access-code topics into a shared `Course Access & Enrollment` help-domain hub plus reusable articles.
- Merge repeated support and support-case pages into one consistent support destination with product/article context layered in through content, not separate page types.
- Merge repeated system-requirements pages into shared article patterns with product applicability metadata.
- Merge repeated LMS configuration content into searchable article sets rather than separate top-level navigation systems.
- Collapse role-first product shells into canonical product hubs with role-aware in-page state or filtered discovery, depending on the destination.

## High-Level Takeaway
- `help-clone` is the richer source for broad cross-product Cengage help domains and shared utility topics.
- `elt-clone` is the richer source for deep product-operational flows, especially Spark and other legacy ELT materials.
- The best future-state move is not to preserve either legacy navigation tree; it is to extract reusable article objects, help-domain signals, and product-hub content into the frozen archetype system already defined for `help-prototype`.
