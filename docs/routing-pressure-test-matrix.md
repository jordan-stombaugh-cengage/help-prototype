# Routing Pressure-Test Matrix

## Purpose
This document pressure-tests whether the current prototype routes users honestly based on object relationships instead of legacy IA assumptions.

Use it for:
- stakeholder walkthroughs
- internal QA
- deciding which routing/content gaps matter most before or after review

Core rule:
- judge the prototype on routing honesty and explainability, not on content completeness

## How To Read This Matrix
- `Expected destination type` reflects the future-state routing model, not a legacy source pattern.
- `Current prototype honesty` asks whether the current prototype chooses the most honest next step for that scenario.
- `Gap severity` uses:
  - `works`
  - `acceptable prototype gap`
  - `high-priority gap`

## Scenario Matrix

| Scenario | User goal | Likely entry surface | Key relationship signals | Expected destination type | Current prototype honesty | Gap severity | Notes |
|---|---|---|---|---|---|---|---|
| `Reset password` | Reset a password without guessing the wrong sign-in path | Homepage quick link, Sign In & Account Help, Search Results | help domain, access pathway | chooser/disambiguation | Honest | works | The reset chooser correctly branches by direct Cengage, LMS, school / NGLSync, or not sure |
| `Wrong account` | Recover from signing in with the wrong account or using the wrong purchased-access account | Homepage quick link, Sign In & Account Help, Search Results, product hubs | help domain, access pathway, product | chooser/disambiguation | Honest | works | The chooser clarifies whether the issue is purchased access, account identity, or school/LMS pathway |
| `Forgot username` | Recover the username for a Cengage account | Sign In & Account Help, Search Results, related help | help domain | shared article | Honest | works | Shared article is specific enough to stay direct |
| `Redeem access code` | Figure out what to do with an access code | Homepage quick link, Course Access & Enrollment, Search Results | help domain, product, access pathway | chooser/disambiguation | Honest | works | The current chooser is the right pattern because product context determines the next step |
| `Enter course key` | Figure out where and how to use a course key | Homepage quick link, Course Access & Enrollment, Search Results | help domain, product, access pathway | chooser/disambiguation | Honest | works | The chooser is an honest relationship step instead of a false shared article |
| `Access your course through LMS` | Open a course from Canvas, Blackboard, Moodle, or another LMS | Homepage quick link, Course Access & Enrollment, Search Results | help domain, access pathway, product, institution | chooser/disambiguation | Honest | works | LMS access is correctly treated as pathway-driven rather than flattened into one article |
| `Missing activities` | Find the right next step when assignments or activities are missing | Homepage quick link, Troubleshooting hub, Search Results | help domain, product | chooser/disambiguation | Honest | works | The chooser prevents falsely collapsing a shared label into one product answer |
| `LMS link not working` | Fix a broken LMS course or activity link | Homepage quick link, Troubleshooting hub, Search Results, product hubs | help domain, product, access pathway, institution | chooser/disambiguation | Honest | works | Shared surfaces use chooser logic; product-constrained contexts can still route more directly when honest |
| `Manage account` | Update email, password, or profile settings | Sign In & Account Help, Search Results | help domain | shared article or shared hub | Only partially honest | high-priority gap | The prototype routes some search/discovery surfaces back to the shared account hub, but there is no real answer object yet |
| `Join or enroll in a course` | Get into a course using the right enrollment path | Course Access & Enrollment | help domain, access pathway, product, purchase/access state | chooser/disambiguation or shared article | Honest about being unresolved | high-priority gap | Staying non-interactive is more honest than a false direct route, but the missing destination is a material gap |
| `Purchased access but course is unavailable` | Resolve purchased-access state when the course still cannot be opened | Course Access & Enrollment | help domain, purchase/access state, product, access pathway | chooser/disambiguation or shared article | Honest about being unresolved | high-priority gap | This is one of the most important missing access-state scenarios in the prototype |
| `Error messages, sync, or integration issues` | Find the next step for broad technical failures | Troubleshooting hub | help domain, product, LMS context, institution/admin context | chooser/disambiguation or product-specific article | Honest about being unresolved | high-priority gap | The label is broad enough that a direct route would be misleading, but the lack of a next step is still noticeable |
| `Spark institutional/admin issue` | Solve a Spark setup, user-management, or LMS-management problem | Spark product hub, Search Results | product, institution/admin context, LMS context, role | product-specific article, product hub, or filtered discovery | Mostly honest | acceptable prototype gap | The prototype already has some real Spark admin destinations, but adjacent admin labels remain static, so the model is clear but incomplete |

## Summary Readout

### Strongest Working Relationship Cases
- `Reset password`
- `Wrong account`
- `Forgot username`
- `Redeem access code`
- `Enter course key`
- `Access your course through LMS`
- `Missing activities`
- `LMS link not working`

### Most Important Gaps
- `Manage account`
- `Join or enroll in a course`
- `Purchased access but course is unavailable`
- `Error messages, sync, or integration issues`
- broader Spark institutional/LMS admin destination depth

## Recommended Review Framing
- Use the working cases to show that the prototype now routes by product, shared help domain, and access pathway instead of by legacy buckets.
- Use the gap cases to show that the prototype is being intentionally honest: unresolved labels stay unresolved instead of falling back to Search Results or a misleading article.
- Treat the remaining gaps as answer-object coverage gaps, not as failures of the routing model itself.
