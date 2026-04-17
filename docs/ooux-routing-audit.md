# OOUX Routing Audit

## A. Category mistakes

### Role drift
- `Role` mostly behaves correctly as a facet/filter in shared discovery, but there is still a mild category blur between shared role facets and product-hub state.
- The clearest example is `Spark`: shared discovery uses `Primary Student`, `Secondary Student`, `LMS Administrator`, and `Institutional Administrator`, while the Spark hub collapses to `Student`, `Instructor`, and `Institutional Administrator`.
- This is not a structural failure, but it means the same audience concept behaves as a search facet in one place and as a product-state switch in another, which can feel like two partially different role models.

### Product drift
- Some broad Spark labels are still parked inside the Spark hub even when the real object is still an unresolved article or pathway state.
- Examples:
  - `Create an account`
  - `Missing activities or assignments`
  - `Can't access eBooks or resources`
  - several instructor/admin problem labels
- The hub is not falsely routing them, which is good, but it still visually groups unresolved shared/account/access concepts under the product object, which risks making the product hub feel like a catch-all.

### Access-pathway drift
- The strongest remaining category mistake is that several access-state labels are still represented as unresolved cards instead of being modeled as real `Access Pathway` objects or guided pathway choices.
- Examples:
  - `Join or enroll in a course`
  - `Purchased access but course is unavailable`
  - `Wrong course or missing course`
- The prototype avoids false routing here, but these gaps leave important access-pathway relationships under-modeled relative to the intended object model.

### Help-domain drift
- Shared help domains are implemented and first-class, which is good, but the homepage still shows some broad issue labels as static text inside common-problem groups instead of routing through a shared help-domain or chooser object.
- That is honest in a narrow sense, but it weakens the conceptual role of the help-domain hubs as the main shared self-service layer.

### Article overreach
- Several shared articles still imply a stronger cross-product consolidation decision than the evidence necessarily supports.
- Highest-risk examples:
  - `Forgot username`
  - `Wrong account`
- They are currently treated as one shared answer across `MindTap, WebAssign, SAM, and Spark`. That may be correct, but it still reads more final than a governed content decision likely is.

### Support drift
- Support is mostly holding as fallback.
- The only mild drift is that some answer objects still end in `Contact support` because the content layer is incomplete, which can make support look like the real resolution for gaps that should eventually be owned by `Account`, `Access Pathway`, or `Help Article`.

## B. Relationship-routing strengths

- `Account` is modeled well where pathway matters most:
  - `Reset password`
  - `Wrong account`
  - `Forgot username`
- `Access Pathway` is now visibly real in the prototype instead of being buried:
  - direct Cengage sign-in
  - LMS sign-in
  - school / NGLSync sign-in
  - course key
  - access code
- `Product` is behaving as a canonical hub destination rather than a legacy shell:
  - homepage product cards
  - product-specific rows on shared hubs
  - Search Results product destinations
- `Help Domain` is clearly first-class:
  - `Sign In & Account Help`
  - `Course Access & Enrollment`
  - `Troubleshooting & Common Problems`
- `Support Case` is visibly secondary on the support page and in related-help rails.
- Search mostly behaves as a system capability rather than an object. It is no longer the generic fallback for missing destinations.

## C. Overconfident decisions

- `Forgot username` is treated as one stable shared article across `MindTap, WebAssign, SAM, and Spark`, even though account-model differences could still require writer confirmation.
- `Wrong account` is also treated as a confirmed shared article across that same product set, even though purchased-access transfer rules may differ by product or access model.
- `Browser requirements` and `System requirements` are treated as stable shared utility articles for `MindTap, WebAssign, and SAM`, which is reasonable, but they still implicitly finalize a shared-article governance decision for those products.
- `Manage your account settings` and `Password requirements and security` in Search Results currently route to the shared sign-in hub rather than to a true `Account` answer object. That is honest as a stopgap, but it overstates how complete the `Account` object layer really is.

## D. Biggest model risks

1. The `Access Pathway` object is still under-instantiated for major course-entry and purchase-state scenarios.
2. The `Account` object is partially modeled but not fully realized; `Manage account` remains a visible concept without a real answer object.
3. Product hubs still absorb unresolved labels that belong conceptually to `Help Article`, `Account`, or `Access Pathway`, which could reintroduce product-catch-all drift over time.
4. The shared role model and Spark in-page role states are both defensible, but together they create a subtle dual-role-model effect that may confuse stakeholders.
5. Shared articles are starting to stand in for unresolved content-governance decisions, especially around cross-product account help.

## E. Recommended corrections

1. Build the missing `Account` answer layer before expanding more peripheral content:
   - `Manage account`
   - related account settings / password policy objects
2. Expand `Access Pathway` coverage for the biggest unresolved course-entry states:
   - `Join or enroll in a course`
   - `Purchased access but course is unavailable`
   - `Wrong course or missing course`
3. Keep unresolved product-hub items unresolved, but avoid adding many more broad shared/account/access labels inside product hubs until the downstream object exists.
4. Document the shared-role-facet vs Spark-role-state split more explicitly in stakeholder review materials so it is understood as intentional, not accidental.
5. Mark shared account articles as governed prototype decisions rather than silent final consolidations if writers have not yet confirmed them.

## F. Verdict

MODEL HOLDS WITH ADJUSTMENTS

The underlying object model is still holding:
- `Product` is the canonical hub object
- `Help Article` is the answer object
- `Account` and `Access Pathway` increasingly determine the right next step
- `Role` is mostly staying in facet/filter/state territory
- `Support Case` remains fallback

The main weakness is not structural collapse. It is incomplete object coverage:
- especially around `Account` and `Access Pathway`
- plus some growing pressure on product hubs and shared articles to stand in for objects that are not fully built yet
