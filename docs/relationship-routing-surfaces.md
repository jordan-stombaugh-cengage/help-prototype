# Relationship Routing Surfaces

## Purpose
This document records how major clickable labels behave in the current prototype after the relationship-routing batch.

Columns:
- `Current destination`: the live prototype target
- `Intended destination type`: article, help-domain hub, product hub, guided routing page, filtered discovery, external handoff, or unresolved
- `Relationship logic`: why that destination is correct
- `Mode`: `direct`, `filtered`, `chooser`, or `non-interactive`

## Homepage Help-Domain Quick Links

| Label / item | Current destination | Intended destination type | Relationship logic | Mode |
|---|---|---|---|---|
| `Reset password` | `#reset-password-chooser` | Guided routing page | Password help depends on sign-in pathway | chooser |
| `Wrong account` | `#wrong-account-chooser` | Guided routing page | Account identity vs purchased-access state vs LMS or school pathway determines the next step | chooser |
| `LMS or school sign-in` | `#sign-in-account` | Help-domain hub | Shared sign-in domain is the honest parent destination | direct |
| `Enter course key` | none | unresolved | No validated direct article or chooser exists yet | non-interactive |
| `Redeem access code` | none | unresolved | No validated direct article or chooser exists yet | non-interactive |
| `LMS access help` | none | unresolved | Needs a clearer access-pathway answer object before becoming live | non-interactive |
| `Missing activities` | `#missing-activities-chooser` | Guided routing page | Product or course experience determines the next step | chooser |
| `Browser or device issues` | `#help-article?article=browser-requirements` | Help Article | Current prototype supports one shared browser article for the supported product set | direct |
| `LMS link not working` | `#lms-link-chooser` | Guided routing page | Product context determines whether the shared LMS article applies | chooser |

## Homepage Role Pills

| Label / item | Current destination | Intended destination type | Relationship logic | Mode |
|---|---|---|---|---|
| `Higher Ed Student` | `#search-results?role=higher-ed-student` | Filtered discovery | Role is a facet, not a hub | filtered |
| `Higher Ed Instructor` | `#search-results?role=higher-ed-instructor` | Filtered discovery | Role is a facet, not a hub | filtered |
| `K–12 Student` | `#search-results?role=k-12-student` | Filtered discovery | Role is a facet, not a hub | filtered |
| `K–12 Teacher` | `#search-results?role=k-12-teacher` | Filtered discovery | Role is a facet, not a hub | filtered |
| `Primary Student` | `#search-results?role=primary-student` | Filtered discovery | Role remains a facet with ELT segment context | filtered |
| `Secondary Student` | `#search-results?role=secondary-student` | Filtered discovery | Role remains a facet with ELT segment context | filtered |
| `LMS Administrator` | `#search-results?role=lms-administrator` | Filtered discovery | Role is a facet, not a hub | filtered |
| `Institutional Administrator` | `#search-results?role=institutional-administrator` | Filtered discovery | Role is a facet, not a hub | filtered |

## Homepage Product Cards

| Label / item | Current destination | Intended destination type | Relationship logic | Mode |
|---|---|---|---|---|
| `MindTap` | `#product-hub-mindtap` | Product hub | Product is already known | direct |
| `WebAssign` | `#product-hub-webassign` | Product hub | Product is already known | direct |
| `SAM` | `#product-hub-sam` | Product hub | Product is already known | direct |
| `Spark` | `#product-hub-spark` | Product hub | Product is already known | direct |

## Troubleshooting Issue Cards

| Label / item | Current destination | Intended destination type | Relationship logic | Mode |
|---|---|---|---|---|
| `Missing activities or assignments` | `#missing-activities-chooser` | Guided routing page | Product or course experience determines the next step | chooser |
| `Browser or device issues` | `#help-article?article=browser-requirements` | Help Article | Current prototype has one shared browser article for the supported product set | direct |
| `LMS link not working` | `#lms-link-chooser` | Guided routing page | Product context determines whether the shared LMS article applies | chooser |
| `Missing content or course materials` | none | unresolved | No honest direct answer or chooser exists yet | non-interactive |
| `Error messages, sync, or integration issues` | none | unresolved | The label is too broad for a single current answer object | non-interactive |
| Product-specific `MindTap` | `#product-hub-mindtap` | Product hub | Product context is the actual routing determinant | direct |
| Product-specific `WebAssign` | `#product-hub-webassign` | Product hub | Product context is the actual routing determinant | direct |
| Product-specific `SAM` | `#product-hub-sam` | Product hub | Product context is the actual routing determinant | direct |
| Product-specific `Spark` | `#product-hub-spark` | Product hub | Product context is the actual routing determinant | direct |

## Course Access Issue Cards

| Label / item | Current destination | Intended destination type | Relationship logic | Mode |
|---|---|---|---|---|
| `Enter a course key` | none | unresolved | No validated direct article or chooser exists yet | non-interactive |
| `Redeem an access code` | none | unresolved | No validated direct article or chooser exists yet | non-interactive |
| `Join or enroll in a course` | none | unresolved | Still needs a destination object decision | non-interactive |
| `Access your course through LMS` | none | unresolved | Could become article or chooser later; not validated yet | non-interactive |
| `Purchased access but course is unavailable` | none | unresolved | Relationship between purchase state, product, and sign-in path is still unresolved | non-interactive |
| `Wrong course or missing course` | none | unresolved | Needs a clearer destination decision before becoming live | non-interactive |
| Product-specific `MindTap` | `#product-hub-mindtap` | Product hub | Product-specific access workflows belong in product hubs | direct |
| Product-specific `WebAssign` | `#product-hub-webassign` | Product hub | Product-specific access workflows belong in product hubs | direct |
| Product-specific `SAM` | `#product-hub-sam` | Product hub | Product-specific access workflows belong in product hubs | direct |
| Product-specific `Spark` | `#product-hub-spark` | Product hub | Product-specific access workflows belong in product hubs | direct |

## Sign In & Account Links

| Label / item | Current destination | Intended destination type | Relationship logic | Mode |
|---|---|---|---|---|
| `Reset password` | `#reset-password-chooser` | Guided routing page | Sign-in pathway determines the correct reset branch | chooser |
| `Wrong account` | `#wrong-account-chooser` | Guided routing page | Account identity vs purchased-access state vs LMS or school pathway determines the next step | chooser |
| `Forgot username` | `#help-article?article=forgot-username` | Help Article | Current prototype has a validated direct shared article | direct |
| `Manage account` | none | unresolved | The prototype does not yet have a direct answer object | non-interactive |
| `Sign in through LMS` | `#reset-password-lms` | Instruction-path page | LMS-managed sign-in is already the determining relationship | direct |
| `Sign in through school or NGLSync` | `#reset-password-school-nglsync` | Guided routing page | School vs NGLSync is still a routing relationship inside the branch | direct |

## Reset-Password Related Links

| Label / item | Current destination | Intended destination type | Relationship logic | Mode |
|---|---|---|---|---|
| `With a Cengage account` | `https://account.cengage.com/` | External handoff | Direct Cengage accounts reset outside the prototype | direct |
| `Through my LMS` | `#reset-password-lms` | Instruction-path page | LMS sign-in is the determinant | direct |
| `Through my school or NGLSync portal` | `#reset-password-school-nglsync` | Guided routing page | School-managed sign-in is the determinant | direct |
| `I'm not sure` | `#reset-password-not-sure` | Instruction-path page | Uncertainty itself is the branch condition | direct |
| School / NGLSync `School portal sign-in` | none | unresolved | Distinct downstream state does not exist yet | non-interactive |
| School / NGLSync `NGLSync sign-in` | none | unresolved | Distinct downstream state does not exist yet | non-interactive |

## Product-Hub Task / Problem Links

Representative recurring links are listed here rather than every static product-hub deep link.

| Label / item | Current destination | Intended destination type | Relationship logic | Mode |
|---|---|---|---|---|
| Product-hub `Sign In & Account Help` topic card | `#sign-in-account` | Help-domain hub | Shared domain comes before lower-level account routing | direct |
| Product-hub `Course Access & Enrollment` topic card | `#course-access-enrollment` | Help-domain hub | Shared domain comes before lower-level access routing | direct |
| Product-hub `Troubleshooting & Common Problems` topic card | `#troubleshooting-common-problems` | Help-domain hub | Shared domain comes before lower-level troubleshooting routing | direct |
| `Signed in with wrong account` on product hubs | `#wrong-account-chooser` | Guided routing page | Product context alone is not enough to resolve the issue honestly | chooser |
| `LMS link not working` on MindTap and WebAssign | `#help-article?article=lms-link-not-working` | Help Article | Product context is already constrained to the product family supported by the current article | direct |
| `LMS integration issues` on product hubs | none | unresolved | Broader than the current LMS-link article | non-interactive |
| `Missing activities or assignments` on product hubs | none in product hubs; `#missing-activities-chooser` only on shared troubleshooting surfaces | unresolved or chooser depending on surface | Product relationship still determines the next step; only shared-domain surfaces currently expose the chooser | non-interactive |
| Most product-hub browse-by-area deep links | none | unresolved | Destination objects do not exist yet | non-interactive |

## Help Article Related-Help Links

| Label / item | Current destination | Intended destination type | Relationship logic | Mode |
|---|---|---|---|---|
| `Reset password` from account articles | `#reset-password-chooser` | Guided routing page | Password help depends on sign-in pathway | chooser |
| `Wrong account` from `Forgot username` | `#wrong-account-chooser` | Guided routing page | The next step still depends on account relationship, not just the label | chooser |
| `LMS link not working` from `Browser requirements` | `#help-article?article=lms-link-not-working` | Help Article | The parent article already constrains the product family enough to make the LMS article honest | direct |
| `LMS link not working` from `System requirements` | `#help-article?article=lms-link-not-working` | Help Article | The parent article already constrains the product family enough to make the LMS article honest | direct |
| `Contact support` related-help links | `#support-page` | Support fallback | Support remains the quiet fallback | direct |

## Search Results Result Links

| Label / item | Current destination | Intended destination type | Relationship logic | Mode |
|---|---|---|---|---|
| `Reset your password` | `#reset-password-chooser` | Guided routing page | Password help depends on sign-in pathway | chooser |
| `Forgot your username` | `#help-article?article=forgot-username` | Help Article | Current prototype has a validated direct shared article | direct |
| `Reset password through LMS` | `#reset-password-lms` | Instruction-path page | LMS pathway is already known | direct |
| `Sign in with the wrong account` | `#wrong-account-chooser` | Guided routing page | The label needs relationship clarification before a direct answer is honest | chooser |
| `Browser requirements` | `#help-article?article=browser-requirements` | Help Article | Current prototype has a validated direct shared article | direct |
| `System requirements` | `#help-article?article=system-requirements` | Help Article | Current prototype has a validated direct shared article | direct |
| `LMS link not working` | `#lms-link-chooser` | Guided routing page | Product context determines whether the shared article applies | chooser |
| `My course is missing assignments` | `#help-article?article=missing-activities-or-assignments` | Help Article | The result explicitly names the MyELT-only answer object | direct |
| `Reset password for NGLSync school portal` | `#reset-password-school-nglsync` | Guided routing page | School-managed sign-in is the determinant | direct |
| `Manage your account settings` | `#help-article?article=sign-in` | Help Article | Current prototype uses the seeded sign-in article as the closest account-management answer object | direct |

## Summary Rules From The Live Surfaces
- Shared labels go direct only when the answer object is already honest.
- Shared labels route through a chooser when product or access pathway determines the next step.
- Role stays filtered discovery.
- Product stays product hub.
- Unresolved labels stay visibly present but non-interactive.
