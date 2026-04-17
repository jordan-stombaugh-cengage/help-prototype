# Help + Spark Routing Surfaces

## Purpose
This document translates the Help + Spark relationship model into practical routing behavior by surface.

Use it with:
- `docs/help-spark-relationship-model.md`
- `docs/help-spark-role-mapping.md`
- `docs/help-spark-topic-map.md`
- `docs/routing-matrix.md`

Columns:
- `Intended destination type`
- `Relationship logic`
- `Mode`

## Homepage Help-Domain Quick Links

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `Reset password` | guided routing page | Password help depends on sign-in pathway | chooser |
| `Wrong account` | guided routing page | Account identity vs purchase/access state vs school/LMS pathway determines the next step | chooser |
| `LMS or school sign-in` | help-domain hub | Shared sign-in domain is the honest parent destination | direct |
| `Enter course key` | unresolved | Shared access label is valid, but there is no honest direct answer object yet | non-interactive |
| `Redeem access code` | unresolved | Shared access label is valid, but product/pathway routing is still unresolved | non-interactive |
| `LMS access help` | unresolved | Access-pathway relationship matters, but the current prototype does not yet model the right step | non-interactive |
| `Missing activities` | guided routing page | Product or course experience determines the next step | chooser |
| `Browser or device issues` | help article | Current prototype supports one shared browser article for the supported live product set | direct |
| `LMS link not working` | guided routing page | Product context determines whether the shared article is honest | chooser |

## Homepage Common-Problem Links

| Label family | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| student common-problem links such as `Can't sign in` or `Can't access eBook` | filtered discovery | Broad issue labels are being used as discovery shortcuts rather than validated direct answers | filtered |
| instructor common-problem links such as `LMS integration issues` or `Student roster issues` | filtered discovery | Broad issue labels are discovery-first and still need lower-level destination coverage | filtered |
| `Signed in with wrong account` in common-problem groups | filtered discovery | Homepage common-problem groupings are discovery surfaces, not direct issue routing | filtered |

## Homepage Role Pills

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `Higher Ed Student` | filtered discovery | Role is a facet, not a hub | filtered |
| `Higher Ed Instructor` | filtered discovery | Role is a facet, not a hub | filtered |
| `K–12 Student` | filtered discovery | Role is a facet, not a hub | filtered |
| `K–12 Teacher` | filtered discovery | Role is a facet, not a hub | filtered |
| `Primary Student` | filtered discovery | Age band is a shared facet in the ELT layer, not a product hub | filtered |
| `Secondary Student` | filtered discovery | Age band is a shared facet in the ELT layer, not a product hub | filtered |
| `LMS Administrator` | filtered discovery | Role is a facet, not a hub | filtered |
| `Institutional Administrator` | filtered discovery | Role is a facet, not a hub | filtered |

## Homepage Product Cards

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `MindTap` | product hub | Product is already known | direct |
| `WebAssign` | product hub | Product is already known | direct |
| `SAM` | product hub | Product is already known | direct |
| `Spark` | product hub | Product is already known | direct |

## Sign In & Account Help Links

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `Reset password` | guided routing page | Sign-in pathway determines the correct branch | chooser |
| `Wrong account` | guided routing page | The right next step depends on account relationship, not only the label | chooser |
| `Forgot username` | help article | Current prototype has a validated shared direct answer | direct |
| `Manage account` | unresolved | Shared topic is valid, but the answer object is not implemented yet | non-interactive |
| `Sign in through LMS` | instruction-path page | LMS-managed sign-in is already the determining relationship | direct |
| `Sign in through school or NGLSync` | instruction-path page or downstream guided branch | School-managed sign-in is already the determining relationship at this level | direct |

## Course Access & Enrollment Cards

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `Enter a course key` | unresolved | Shared access problem is valid, but there is no honest direct answer object yet | non-interactive |
| `Redeem an access code` | unresolved | Shared access problem is valid, but product/pathway logic is not yet modeled honestly | non-interactive |
| `Join or enroll in a course` | unresolved | Could become direct article or chooser later; not validated yet | non-interactive |
| `Access your course through LMS` | unresolved | Access-pathway relationship likely matters, but the routing step is not modeled yet | non-interactive |
| `Purchased access but course is unavailable` | unresolved | Purchase/access state still needs a clearer answer-object decision | non-interactive |
| `Wrong course or missing course` | unresolved | Product, pathway, and purchase relationships are still unresolved | non-interactive |

## Course Access Product-Specific Row

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `MindTap` | product hub | Product-specific access steps belong in product context | direct |
| `WebAssign` | product hub | Product-specific access steps belong in product context | direct |
| `SAM` | product hub | Product-specific access steps belong in product context | direct |
| `Spark` | product hub | Product-specific access steps belong in product context | direct |

## Troubleshooting & Common Problems Cards

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `Missing activities or assignments` | guided routing page | Product or course experience determines the next step | chooser |
| `Browser or device issues` | help article | Current prototype has one shared browser article for the supported product set | direct |
| `LMS link not working` | guided routing page | Product context determines whether the shared article applies | chooser |
| `Missing content or course materials` | unresolved | No honest direct answer or chooser exists yet | non-interactive |
| `Error messages, sync, or integration issues` | unresolved | The label is broader than one validated answer object | non-interactive |

## Search Results Cards And Filters

| Surface item | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| role filters | filtered discovery | Role stays a discovery facet | filtered |
| product filters | filtered discovery | Product narrows results without becoming a separate hub family | filtered |
| sign-in-path filters | filtered discovery | Access pathway narrows relevance without becoming its own route family | filtered |
| shared direct results such as `Forgot your username` | help article | The prototype has a validated shared direct answer | direct |
| relationship-driven results such as `Sign in with the wrong account` | guided routing page | Relationship clarification is still needed before a direct article is honest | chooser |
| broad issue results modeled as discovery shortcuts | filtered discovery | Broad labels can remain discovery-first when no single answer object exists | filtered |
| explicit product results such as `Spark help hub` | product hub | Product is already explicit | direct |
| Spark institutional or LMS-admin results | help article or filtered discovery | Institution and LMS context usually point to article-first or filtered discovery behavior | direct or filtered |

## Product-Hub Task / Problem Links

| Label family | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| shared topic cards: `Sign In & Account Help`, `Course Access & Enrollment`, `Troubleshooting & Common Problems` | help-domain hub | Shared domain comes before lower-level routing | direct |
| `Signed in with wrong account` | guided routing page | Product context alone is not enough to resolve the issue honestly | chooser |
| product-specific tasks with real answer objects | help article | Product and workflow are already known | direct |
| product-specific tasks without answer objects | unresolved | Product is known, but the answer object does not exist yet | non-interactive |
| browse-by-area links without answer objects | unresolved | Product is known, but the deep destination does not exist yet | non-interactive |
| LMS integration labels without validated answer objects | unresolved | Broader than the current LMS-link chooser/article model | non-interactive |

## Help Article Related-Help Links

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `Reset password` from account articles | guided routing page | Password help depends on sign-in pathway | chooser |
| `Wrong account` from account articles | guided routing page | The next step still depends on account relationship | chooser |
| related product links from product-specific articles | product hub or product-specific article | Product context is already explicit | direct |
| shared utility references such as requirements | help article | Stable shared reference content can stay direct | direct |
| `Contact support` | support fallback | Support remains the quiet fallback | direct |

## Spark-Specific Surfaced Items

| Label / surface | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| homepage product card `Spark` | product hub | Spark is the only live ELT product context | direct |
| Spark hub role tab `Student` | in-page product state | Product is already known; learner state stays in-page | direct |
| Spark hub role tab `Instructor` | in-page product state | Product is already known; teaching state stays in-page | direct |
| Spark hub role tab `Institutional Administrator` | in-page product state | Institution-specific setup and management belong inside Spark when product is already known | direct |
| Spark-related shared role filters `Primary Student` and `Secondary Student` | filtered discovery | Age-band learner context helps discovery but does not create ELT mini-sites | filtered |
| Spark hub `LMS course management` and similar live admin/setup items | help article | Product and admin context are already explicit | direct |
| Spark hub unresolved learner/admin problem labels | unresolved | Product is known, but the answer object does not exist yet | non-interactive |
| LMS-admin Spark discovery | filtered discovery or direct article | Institution + LMS + product usually points to article-first discovery, not a Spark tab | filtered or direct |

## Summary Rules
- Shared help-domain cards go direct to shared hubs.
- Product cards go direct to product hubs.
- Role pills go to filtered search, never to hubs.
- Shared issue labels use chooser logic when product or access pathway changes the right answer.
- Institution and LMS-admin context usually strengthens search/article routing rather than creating new page families.
- Unresolved labels stay visibly present but non-interactive.
