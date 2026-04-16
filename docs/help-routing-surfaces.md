# Help Routing Surfaces

## Purpose
This document records how major Help-side clickable labels should behave in the prototype using the current live surfaces and the frozen routing model.

Columns:
- `Intended destination type`: help article, help-domain hub, product hub, guided routing page, instruction-path page, filtered discovery, support fallback, or unresolved
- `Relationship logic`: why that destination is the honest next step
- `Mode`: `direct`, `chooser`, `filtered`, or `non-interactive`

## Homepage Help-Domain Quick Links

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `Reset password` | guided routing page | Password help depends on sign-in pathway | chooser |
| `Wrong account` | guided routing page | Account identity vs purchased-access state vs LMS or school pathway determines the next step | chooser |
| `LMS or school sign-in` | help-domain hub | Shared account/sign-in domain is the honest parent destination | direct |
| `Enter course key` | unresolved | Still needs a direct article or chooser decision inside course-access routing | non-interactive |
| `Redeem access code` | unresolved | Still needs a direct article or chooser decision inside course-access routing | non-interactive |
| `LMS access help` | unresolved | Access-pathway relationship is not specific enough yet | non-interactive |
| `Missing activities` | guided routing page | Product or course experience determines the next step | chooser |
| `Browser or device issues` | help article | Current prototype supports one shared browser article for the supported Help products | direct |
| `LMS link not working` | guided routing page | Product context determines whether the shared LMS article is honest | chooser |

## Homepage Common-Problem Links

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| instructor common-problem links such as `LMS integration issues` or `Student roster issues` | filtered discovery | Broad issue labels are being used as discovery shortcuts, not as validated direct answers | filtered |
| student common-problem links such as `Can't sign in` or `Can't access eBook` | filtered discovery | Broad issue labels are being used as discovery shortcuts, not as validated direct answers | filtered |
| `Signed in with wrong account` in common problems | filtered discovery | Homepage common-problem groups are intentionally modeled as discovery, not direct issue routing | filtered |

## Homepage Role Pills

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `Higher Ed Student` | filtered discovery | Role is a facet, not a hub | filtered |
| `Higher Ed Instructor` | filtered discovery | Role is a facet, not a hub | filtered |
| `K-12 Student` | filtered discovery | Role is a facet, not a hub | filtered |
| `K-12 Teacher` | filtered discovery | Role is a facet, not a hub | filtered |
| `LMS Administrator` | filtered discovery | Role is a facet, not a hub | filtered |
| `Institutional Administrator` | filtered discovery | Role is a facet, not a hub | filtered |

## Homepage Product Cards

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `MindTap` | product hub | Product is already known | direct |
| `WebAssign` | product hub | Product is already known | direct |
| `SAM` | product hub | Product is already known | direct |
| `Spark` | product hub | Product is already known | direct |

## Sign In & Account Help Topic Links

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `Reset password` | guided routing page | Sign-in pathway determines the reset branch | chooser |
| `Wrong account` | guided routing page | The right next step depends on account relationship, not just the label | chooser |
| `Forgot username` | help article | Current prototype has a validated direct shared article | direct |
| `Manage account` | unresolved | Shared topic is valid, but the answer object is not implemented yet | non-interactive |
| `Sign in through LMS` | instruction-path page | LMS-managed sign-in is already the determining relationship | direct |
| `Sign in through school or NGLSync` | instruction-path page or downstream guided branch | School-managed sign-in is already the determining relationship at this level | direct |

## Course Access & Enrollment Issue Cards

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `Enter a course key` | unresolved | Shared access problem is valid, but there is no honest direct answer object yet | non-interactive |
| `Redeem an access code` | unresolved | Shared access problem is valid, but there is no honest direct answer object yet | non-interactive |
| `Join or enroll in a course` | unresolved | Could become direct article or chooser later; not validated yet | non-interactive |
| `Access your course through LMS` | unresolved | Access-pathway relationship likely matters, but the correct routing step is not modeled yet | non-interactive |
| `Purchased access but course is unavailable` | unresolved | Purchase/access state still needs a clearer answer-object decision | non-interactive |
| `Wrong course or missing course` | unresolved | Product, pathway, and purchase relationships are still unresolved | non-interactive |

## Course Access Product-Specific Row

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `MindTap` | product hub | Product-specific access steps belong in the product context | direct |
| `WebAssign` | product hub | Product-specific access steps belong in the product context | direct |
| `SAM` | product hub | Product-specific access steps belong in the product context | direct |
| `Spark` | product hub | Product-specific access steps belong in the product context | direct |

## Troubleshooting Issue Cards

| Label | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| `Missing activities or assignments` | guided routing page | Product or course experience determines the next step | chooser |
| `Browser or device issues` | help article | Current prototype has one shared browser article for the supported product set | direct |
| `LMS link not working` | guided routing page | Product context determines whether the shared LMS article applies | chooser |
| `Missing content or course materials` | unresolved | No honest direct answer or chooser exists yet | non-interactive |
| `Error messages, sync, or integration issues` | unresolved | The label is still broader than one validated answer object | non-interactive |

## Search Results Cards And Filters

| Surface item | Intended destination type | Relationship logic | Mode |
|---|---|---|---|
| role filters | filtered discovery | Role stays a discovery facet | filtered |
| product filters | filtered discovery | Product narrows results without becoming a separate search hub family | filtered |
| shared direct results such as `Forgot your username` | help article | The prototype has a validated direct shared answer | direct |
| relationship-driven results such as `Sign in with the wrong account` | guided routing page | Relationship clarification is still needed before an article is honest | chooser |
| broad issue discovery results | filtered discovery | Broad labels can remain discovery-first when no single answer object exists | filtered |
| explicit product results such as `Spark help hub` | product hub | Product is already explicit | direct |

## Product-Hub Task And Problem Links

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

## Summary Rules From The Live Help Surfaces
- Shared help-domain cards go direct to shared hubs.
- Product cards go direct to product hubs.
- Role pills go to filtered search, never to hubs.
- Shared issue labels use chooser logic when product or access pathway changes the right answer.
- Shared issue labels stay non-interactive when no honest direct destination or chooser exists yet.
- Product-hub deep links go direct only when the answer object already exists.
