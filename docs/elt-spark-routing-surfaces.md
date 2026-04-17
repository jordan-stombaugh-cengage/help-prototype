# ELT + Spark Routing Surfaces

## Purpose
This document translates the ELT + Spark relationship model into practical routing behavior by surface.

Use it with:
- `docs/elt-spark-routing-model.md`
- `docs/elt-spark-role-mapping.md`
- `docs/routing-matrix.md`
- `docs/relationship-routing-surfaces.md`

## Reading The Table
- `Current prototype destination` describes the live runtime destination or current prototype intent.
- `Destination type` uses the object model: product hub, help-domain hub, help article, chooser, filtered search, or non-interactive.
- `Relationship logic` explains why that destination is honest.
- `Mode` identifies whether the interaction should be direct, chooser-based, filtered, or non-interactive.

## Homepage

| Surface | Label | Current prototype destination | Destination type | Relationship logic | Mode |
|---|---|---|---|---|---|
| Homepage browse by product | `Spark` | `#product-hub-spark` | Product hub | Spark is the live ELT product context and canonical ELT product destination | Direct |
| Homepage browse by role | `Primary Student` | `#search-results?role=primary-student` | Filtered search | Role is a shared discovery facet, not a hub | Filtered |
| Homepage browse by role | `Secondary Student` | `#search-results?role=secondary-student` | Filtered search | Role is a shared discovery facet, not a hub | Filtered |
| Homepage browse by role | `LMS Administrator` | `#search-results?role=lms-administrator` | Filtered search | LMS admin discovery is cross-product and article-first | Filtered |
| Homepage browse by role | `Institutional Administrator` | `#search-results?role=institutional-administrator` | Filtered search | Institutional admin can start in shared discovery before narrowing to Spark | Filtered |

## Sign In & Account Help For Spark / ELT

| Surface | Label | Current prototype destination | Destination type | Relationship logic | Mode |
|---|---|---|---|---|---|
| Sign In & Account Help | `Forgot username` | Shared article | Help article | The answer is currently modeled as shared and not Spark-only | Direct |
| Sign In & Account Help | `Wrong account` | `#wrong-account-chooser` | Chooser | The next step depends on the sign-in situation and account context | Chooser |
| Sign In & Account Help | `Reset password` | Reset password chooser flow | Chooser | Access pathway determines the right downstream reset instructions | Chooser |
| Sign In & Account Help | `Sign in through school / NGLSync` | Reset password school branch when in reset flow; otherwise unresolved | Chooser or non-interactive | School-managed access changes the correct next step | Chooser when routed through reset flow; otherwise non-interactive |
| Sign In & Account Help | `Manage account` | No live downstream page yet | Non-interactive placeholder | The prototype does not yet have an honest account-management destination | Non-interactive |

## Course Access & Enrollment For Spark / ELT

| Surface | Label | Current prototype destination | Destination type | Relationship logic | Mode |
|---|---|---|---|---|---|
| Course Access & Enrollment product row | `Spark` | `#product-hub-spark` | Product hub | Product context is known and Spark is live | Direct |
| Course Access & Enrollment issue card | `Enter course key` | No live downstream page yet | Non-interactive placeholder | The next step may depend on product and access pathway, but the prototype lacks the honest downstream object | Non-interactive |
| Course Access & Enrollment issue card | `Redeem access code` | No live downstream page yet | Non-interactive placeholder | Shared label is still unresolved across products and access models | Non-interactive |
| Course Access & Enrollment issue card | `Join or enroll in a course` | No live downstream page yet | Non-interactive placeholder | The correct next step still depends on product and institution context | Non-interactive |
| Course Access & Enrollment issue card | `Access your course through LMS` | No live downstream page yet | Non-interactive placeholder | LMS launch guidance is still relationship-driven and unresolved | Non-interactive |

## Troubleshooting & Common Problems For Spark / ELT

| Surface | Label | Current prototype destination | Destination type | Relationship logic | Mode |
|---|---|---|---|---|---|
| Troubleshooting shared issue | `Missing activities or assignments` | `#missing-activities-chooser` | Chooser | The honest next step depends on product or course experience | Chooser |
| Troubleshooting shared issue | `Browser or device issues` | Shared browser requirements article | Help article | The current answer is modeled as a shared article | Direct |
| Troubleshooting shared issue | `LMS link not working` | `#lms-link-chooser` | Chooser | The correct help depends on which product the LMS link is supposed to open | Chooser |
| Troubleshooting shared issue | `Missing content or course materials` | No live downstream page yet | Non-interactive placeholder | The prototype does not yet have an honest shared or Spark-specific destination | Non-interactive |
| Troubleshooting shared issue | `Error messages, sync, or integration issues` | No live downstream page yet | Non-interactive placeholder | The prototype still lacks the right Spark/LMS/article destinations | Non-interactive |
| Troubleshooting product row | `Spark` | `#product-hub-spark` | Product hub | Product-specific troubleshooting should route to the canonical product context | Direct |

## Spark Product Hub

| Surface | Label | Current prototype destination | Destination type | Relationship logic | Mode |
|---|---|---|---|---|---|
| Spark hub topic card | `Sign In & Account Help` | `#sign-in-account` | Help-domain hub | Shared account issues belong to the shared help domain first | Direct |
| Spark hub topic card | `Course Access & Enrollment` | `#course-access-enrollment` | Help-domain hub | Shared access issues belong to the shared help domain first | Direct |
| Spark hub topic card | `Troubleshooting & Common Problems` | `#troubleshooting-common-problems` | Help-domain hub | Shared troubleshooting belongs to the shared help domain first | Direct |
| Spark role tab | `Student` | In-page Spark state | Product hub state | Product context is known; role stays inside the hub | Direct |
| Spark role tab | `Instructor` | In-page Spark state | Product hub state | Product context is known; role stays inside the hub | Direct |
| Spark role tab | `Institutional Administrator` | In-page Spark state | Product hub state | School setup and management are Spark-specific enough to stay in-hub | Direct |
| Spark role behavior | `LMS Administrator` | No Spark tab; use search/article discovery | Filtered search or article | LMS admin work is usually `institution + LMS + product`, not a default hub state | Filtered or direct article when available |
| Spark common problem | `Signed in with wrong account` | `#wrong-account-chooser` | Chooser | The next step depends on account context, not only Spark | Chooser |
| Spark common problem | `Missing activities or assignments` | No live Spark-specific downstream page yet | Non-interactive placeholder | Shared label is ambiguous and the prototype does not yet have a confirmed Spark-specific answer | Non-interactive |
| Spark common problem | `Course key or join code not working` | `#course-access-enrollment` | Help-domain hub | The issue belongs to shared access guidance before Spark-specific branching | Direct |
| Spark common problem | `LMS integration issues` | No live downstream page yet | Non-interactive placeholder | The next step depends on LMS + institution + product, and the article layer is not implemented yet | Non-interactive |

## Search Results For Spark + ELT

| Surface | Label | Current prototype destination | Destination type | Relationship logic | Mode |
|---|---|---|---|---|---|
| Search filter | `Spark` product facet | Search narrowed to Spark results | Filtered search | Product should narrow article relevance without creating a separate results family | Filtered |
| Search filter | `Primary Student` | Search narrowed to primary-student results | Filtered search | Role is a discovery facet | Filtered |
| Search filter | `Secondary Student` | Search narrowed to secondary-student results | Filtered search | Role is a discovery facet | Filtered |
| Search filter | `LMS Administrator` | Search narrowed to LMS-admin-relevant results | Filtered search | LMS admin discovery is article-first and cross-system | Filtered |
| Search filter | `Institutional Administrator` | Search narrowed to institutional-admin-relevant results | Filtered search | Institutional admin can narrow discovery before entering Spark | Filtered |
| Search result | Shared account or utility article | Shared article page | Help article | Shared articles are valid when the answer is product-honest | Direct |
| Search result | Spark-specific article | Spark-specific article page when implemented | Help article | Product context is explicit and the answer depends on Spark | Direct |
| Search result | Ambiguous relationship-driven issue | Chooser when implemented; otherwise no live result route | Chooser or non-interactive | Product, LMS, or access pathway changes the next step | Chooser or non-interactive |

## Practical Summary
- `Spark` is the live ELT product hub.
- Shared help domains still own shared sign-in, access, and troubleshooting patterns.
- `LMS Administrator` is primarily a search and article-discovery role.
- `Institutional Administrator` can live in both shared discovery and Spark hub state.
