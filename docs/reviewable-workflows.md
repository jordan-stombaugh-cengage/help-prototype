# Reviewable Workflows

This document captures which routing flows in the current `help-prototype` are strong enough to review with stakeholders after the latest routing-honesty cleanup.

## A. Workflows that are now complete enough to review end-to-end

| Workflow | Starting surface | Path through the prototype | Destination type(s) | Review status | Note |
|---|---|---|---|---|---|
| Reset password for direct Cengage sign-in | `#homepage`, `#sign-in-account`, `#search-results` | `Reset password` -> `#reset-password-chooser` -> `With a Cengage account` -> `#help-article?article=reset-cengage-password` | guided routing page -> help article | end-to-end | The chooser narrows by sign-in pathway and lands on a specific internal article. |
| Reset password through LMS | `#homepage`, `#sign-in-account`, `#search-results` | `Reset password` -> `#reset-password-chooser` -> `Through my LMS` -> `#reset-password-lms` | guided routing page -> instruction-path page | end-to-end | The path stays pathway-specific and does not bounce back to a broad hub. |
| Manage a Cengage account | `#sign-in-account`, `#search-results` | `Manage account` -> `#manage-account-chooser` -> `I need to update my Cengage account` -> `#help-article?article=manage-account` | guided routing page -> help article | end-to-end | The chooser now narrows directly to the shared account article instead of widening back out. |
| Manage a Spark account | `#sign-in-account`, `#search-results`, `#product-hub-spark` | `Manage account` -> `#manage-account-chooser` -> `I need to update my Spark account` -> `#help-article?article=spark-manage-account` | guided routing page -> help article | end-to-end | Spark account management has a truthful product-specific article destination. |
| Wrong account for direct Cengage access | `#homepage`, `#sign-in-account`, `#search-results`, `#product-hub-mindtap`, `#product-hub-webassign`, `#product-hub-sam`, `#product-hub-spark` | `Wrong account` -> `#wrong-account-chooser` -> direct Cengage-account branch -> `#help-article?article=wrong-account` or `#help-article?article=forgot-username` | guided routing page -> help article | end-to-end | The live branches now narrow to specific articles instead of looping back to the sign-in hub. |
| LMS link not working for MindTap, WebAssign, or SAM | `#troubleshooting-common-problems`, `#search-results`, `#product-hub-mindtap`, `#product-hub-webassign` | `LMS link not working` -> `#lms-link-chooser` or direct product-hub link -> `#help-article?article=lms-link-not-working` | guided routing page or product-hub link -> help article | end-to-end | The shared chooser and product-specific shortcut both land on the same truthful article. |
| Join a Spark course from shared access surfaces | `#course-access-enrollment`, `#search-results`, `#product-hub-spark` | `Enter course key`, `Redeem access code`, or `Join or enroll in a course` -> chooser -> Spark branch -> `#help-article?article=spark-join-course` | help-domain hub or search -> guided routing page -> help article | end-to-end | The Spark access path now narrows to the real Spark join-course article instead of widening to the Spark hub. |
| Spark Dynamic Lessons article family | `#product-hub-spark`, `#search-results` | `Dynamic Lessons` -> `#help-article?article=spark-dynamic-lessons` -> Magma Tabs / next-previous controls across the family | product hub or search -> help article family | end-to-end | This is a clean, self-contained article-family pattern with direct sibling navigation. |

## B. Workflows that are partially complete but still acceptable to demonstrate

| Workflow | Starting surface | Path through the prototype | Destination type(s) | Review status | Note |
|---|---|---|---|---|---|
| Access your course through LMS | `#course-access-enrollment`, `#search-results`, product-hub LMS links | `Access your course through LMS` -> `#lms-access-chooser` -> LMS sign-in branch or LMS-link branch | help-domain hub or search or product hub -> guided routing page -> instruction-path page or guided routing page | partial | The working LMS branches are honest, but the Spark-specific LMS-access branch is still intentionally unresolved. |
| Purchased access but course is unavailable | `#course-access-enrollment`, `#search-results` | `Purchased access but course is unavailable` -> `#purchased-access-chooser` -> join/enroll, wrong-account, LMS-access, or wrong-course branch | help-domain hub or search -> guided routing page(s) -> mixed downstream types | partial | The chooser now points to narrower truthful branches, but some downstream paths still end in unresolved states. |
| Wrong course or missing course | `#course-access-enrollment`, `#search-results` | `Wrong course or missing course` -> `#wrong-course-chooser` -> `transfer-or-drop-course`, `wrong-product-or-course-in-lms`, or another chooser | help-domain hub or search -> guided routing page -> help article or another chooser | partial | The strongest branches now land on real articles, but the full scenario family is not complete enough to call end-to-end. |
| Error messages, sync, or integration issues | `#troubleshooting-common-problems`, `#search-results`, product-hub LMS/integration links | `Error messages, sync, or integration issues` -> `#error-sync-chooser` -> grade sync, wrong LMS product/course, Spark institutional settings, or Spark LTI article | help-domain hub or search or product hub -> guided routing page -> help article | partial | Several real answer branches exist, but the not-sure branch remains intentionally non-interactive. |

## C. Workflows that should not be highlighted yet because they still dead-end or widen incorrectly

| Workflow | Starting surface | Path through the prototype | Destination type(s) | Review status | Note |
|---|---|---|---|---|---|
| MindTap / WebAssign / SAM course-key entry | `#homepage`, `#course-access-enrollment`, `#search-results`, `#product-hub-mindtap`, `#product-hub-webassign` | `Enter course key` or product-hub class-key task -> `#course-key-chooser` -> non-interactive product branch | help-domain hub or search or product hub -> guided routing page -> dead end | not review-ready | The chooser is honest, but the direct product-specific answer objects do not exist yet for those higher-ed products. |
| MindTap / WebAssign / SAM access-code redemption | `#homepage`, `#course-access-enrollment`, `#search-results` | `Redeem access code` -> `#access-code-chooser` -> non-interactive product branch | help-domain hub or search -> guided routing page -> dead end | not review-ready | The shared routing step is correct, but the prototype still lacks the product-specific follow-on articles. |
| Spark LMS access problem | `#course-access-enrollment`, `#search-results` | `Access your course through LMS` -> `#lms-access-chooser` -> `I need Spark course access from my LMS or school platform` | help-domain hub or search -> guided routing page -> dead end | not review-ready | The truthful Spark LMS-access destination is still missing, so the branch now stops instead of widening to the Spark hub. |
| Spark broken LMS link | `#troubleshooting-common-problems`, `#search-results` | `LMS link not working` -> `#lms-link-chooser` -> `Spark` | help-domain hub or search -> guided routing page -> dead end | not review-ready | A Spark-specific broken-link answer object is not in the prototype yet. |
| Missing activities or assignments | `#homepage`, `#troubleshooting-common-problems`, `#search-results` | `Missing activities or assignments` -> `#missing-activities-chooser` -> non-interactive product branch | filtered shortcut or help-domain hub or search -> guided routing page -> dead end | not review-ready | The flow is now honest about the missing downstream answers, but it is not ready for stakeholder walkthrough emphasis. |
| Missing content or course materials | `#troubleshooting-common-problems`, `#search-results`, product-hub static troubleshooting labels | `Missing content or course materials` -> `#missing-content-chooser` -> non-interactive product branch | help-domain hub or search -> guided routing page -> dead end | not review-ready | Product-specific missing-content destinations are still absent, so the prototype intentionally stops here. |

## Known dead ends by design

- `#access-code-chooser`: `MindTap`, `WebAssign`, `SAM`, and `I'm not sure`
- `#course-key-chooser`: `MindTap`, `WebAssign`, `SAM`, and `I'm not sure`
- `#join-enroll-chooser`: `I'm not sure`
- `#lms-access-chooser`: `I need Spark course access from my LMS or school platform` and `I'm not sure`
- `#wrong-account-chooser`: `I usually access Cengage through my LMS or school portal` and `I'm not sure`
- `#wrong-course-chooser`: `I'm not sure`
- `#missing-activities-chooser`: all product branches and `I'm not sure`
- `#missing-content-chooser`: all product branches and `I'm not sure`
- `#error-sync-chooser`: `I'm not sure`
- Product hubs: `Missing content` links in the MindTap and Spark troubleshooting areas remain static because the truthful product-specific destination does not exist yet.
