# Reset Password: School or NGLSync Sign-in Design Spec

## Purpose
The Reset Password: School or NGLSync sign-in page is the school-managed reset-password routing state in the merged Cengage Help + ELT prototype.

Its job is to:
- confirm that this user signs in through a school-managed portal or NGLSync-managed path
- explain that password reset happens through the school portal or school-managed sign-in flow, not directly through Cengage
- help users identify whether they use a school portal, NGLSync, or need the not-sure recovery path
- keep school-portal and NGLSync access distinct rather than collapsing them into the LMS path
- keep support secondary to self-service routing

This page is the school / NGLSync-specific reset-password routing path. It is not a generic password reset article, and in the approved frame it still behaves as a focused chooser within the broader reset-password flow.

## Source Priority
1. Approved Reset password: School or NGLSync sign-in design frame
2. IA rules in `AGENTS.md` and `/docs`
3. Existing implementation only as fallback/reference

## IA Rules That Must Not Change
- This is the school / NGLSync reset-password path
- Password reset happens through the school portal or school-managed sign-in flow, not directly through Cengage
- This page remains part of the reset-password routing flow
- In the approved frame, this page is a focused routing state for school portal vs NGLSync vs not-sure, not a flat article template
- School portal and NGLSync remain distinct routing options
- The page should help users choose the right school-managed branch, not merge everything into the LMS path
- Support is fallback, not primary
- Do not flatten this into a generic article page
- Do not add sections not present in the approved design
- Do not treat this like the direct Cengage-account reset path
- Do not treat this exactly like the LMS page if the design keeps the school-portal path distinct

## Overall Layout
- Centered desktop container consistent with the other prototype pages, around a `1200px` outer shell
- Quiet utility breadcrumb row at the top
- Light neutral intro band for the page title area
- Main content sits in a narrower centered column beneath the header
- The chooser area should feel vertically focused and task-oriented, with one compact set of answer cards and a quiet fallback area
- Page rhythm is:
  - breadcrumb row
  - intro band
  - change-sign-in-method utility link
  - chooser prompt and stacked route cards
  - quiet support / secondary links
- Visual density should be medium:
  - denser than a wireframe
  - calmer and simpler than the homepage
  - more routing-focused than instructional

## Page Section Order
1. Breadcrumb row
2. Header / intro section
3. Change sign-in method utility link
4. School / NGLSync route-selection section
5. Support / secondary links

## Header / Intro Section
### Purpose
Orient the user quickly and confirm that this page covers school-managed or NGLSync-managed password reset.

### Layout
- Breadcrumb row appears above the intro band
- Intro sits inside a light neutral band that spans the main page width
- Desktop layout is a compact horizontal intro:
  - small icon tile on the left
  - title and supporting description on the right
- Intro should feel calm and utilitarian, not like a marketing hero

### Breadcrumb Treatment
- Left aligned
- Quiet utility style
- Compact spacing
- Breadcrumb path in the approved frame reads:
  - `Help Home / Sign In & Account / Reset password / School or NGLSync sign-in`
- Breadcrumb should provide orientation only; it should not become the visual focus

### Content
- Page title:
  - `Reset password: School or NGLSync sign-in`
- Supporting description intent:
  - the user&apos;s school or institution manages the password
  - Cengage does not directly manage this reset path
  - the user should choose the school-managed sign-in path that best matches their situation

### Icon Treatment
- Small soft tile with a school / institution / portal-style icon
- A soft purple-tinted tile is appropriate if it remains subtle and secondary to the title
- Icon should reinforce school-managed sign-in without becoming decorative emphasis
- Keep it understated and visually consistent with the broader Sign In & Account styling family

### Visual Goals
- Clear school-managed-path identity immediately
- Strong page title hierarchy
- Compact supporting line
- Calm confirmation that the password is managed by the school or institution
- Utility-like breadcrumb behavior

## Change Sign-in Method Link
### Purpose
Provide a lightweight path back to the main reset-password chooser when the user selected the wrong sign-in method.

### Placement
- Appears below the intro band and above the chooser prompt
- Left aligned within the centered content column
- Sits on its own line as a quiet utility action before the route-selection cards

### Content
- Link text in the approved frame reads:
  - `Change sign-in method`
- A small leading back arrow icon is appropriate if kept understated

### Hierarchy Rules
- This link should feel clearly secondary to the page title and route-selection options
- It should read as a corrective utility action, not a competing CTA
- It should connect back to the reset-password chooser flow rather than to a generic back-navigation pattern

### Routing Intent
- The destination should return the user to the reset-password chooser state
- Its purpose is to let users re-enter the routing flow when school / NGLSync was the wrong selection

## Reset Instructions Card
### Purpose
In the approved frame, this page does not use a traditional instruction card. Instead, the primary content block is a focused route-selection card stack that helps users identify which school-managed sign-in path applies.

### Safe Interpretation
- Because the screenshot and routing matrix both show a chooser state here, implementation should preserve that pattern instead of inventing a numbered instructions block
- The primary content block should remain a school / NGLSync route-selection set, not a generic step-by-step article card

### Heading Structure
- The primary content area begins with a strong chooser prompt
- Approved prompt:
  - `Which best describes your situation?`
- This prompt should be the strongest text in the main content area after the page title

### Layout
- One vertical stack of route cards inside the centered content column
- Cards should feel easy to scan and compare
- Desktop width should support clear one-line titles and short clarifying descriptions without feeling broad

### Route Card Order
1. `School portal sign-in`
2. `NGLSync sign-in`
3. `I'm not sure`

### Route Card Content Structure
Each card should include:
- a strong option title
- one short supporting sentence
- a right-aligned directional arrow or similar affordance
- full-card destination behavior or clearly card-like click behavior

### Supporting Copy Intent By Card
- `School portal sign-in`
  - user signs in through a school student portal or school website
- `NGLSync sign-in`
  - user uses NGLSync to access National Geographic Learning materials
- `I'm not sure`
  - user does not know which system they use

### Visual Treatment
- Cards should use understated borders and subtle radii
- Keep cards compact and calm, with clear scan order
- Arrow affordance should remain secondary to the title
- Supporting copy should be concise and muted

### Density and Rhythm
- Tight prompt-to-card spacing
- Moderate vertical spacing between cards
- Tight title-to-description spacing inside each card
- The card set should feel more like a focused routing decision than a broad list of content destinations

### Why This Is the Primary Content Block
- This block contains the core routing decision for the school-managed reset path
- It preserves the distinction between school portal, NGLSync, and not-sure outcomes
- It keeps the user in the reset-password routing flow rather than flattening the branch into one generic answer

## Related School / NGLSync Issues Card
### Purpose
The approved frame does not show a separate related-issues card on this page.

### Safe Interpretation
- Do not invent a related-issues card or secondary issue list that is not present in the approved design
- The route-selection stack already provides the primary self-service decision structure for this screen

### Relationship to the Primary Content Block
- If future versions introduce related school / NGLSync issue links, they should remain clearly secondary to the route-selection block
- In the current approved frame, the page should move directly from the route-selection stack to the quiet support fallback area

### External-Link Treatment
- No external-link treatment is required by the approved frame on this page

## Support / Secondary Links
### Purpose
Provide a quiet fallback after the route-selection cards.

### Structure
- Appears below the route cards
- Separated by a subtle divider line
- Includes a short prompt and a small set of low-emphasis links

### Content
- Prompt:
  - `Still need help?`
- Secondary links shown in the approved frame:
  - `Start over: How do you usually sign in?`
  - `Back to Sign In & Account Help`
  - `Contact Support`

### Hierarchy Rules
- This area must remain clearly secondary to the route-selection cards
- Links should read as fallback utilities, not primary task actions
- Support should not be elevated into a card, banner, or prominent escalation block
- The start-over link should feel slightly more contextually relevant than the other fallback links, but still secondary overall

## Visual Style Guidance
- Strongest text hierarchy:
  - page title
  - chooser prompt
  - route card titles
  - supporting descriptions
  - fallback prompt and links
- Breadcrumbs and change-sign-in-method link should be quiet utility elements
- The route-selection cards should be stronger than the support area
- Use understated borders and subtle radii
- Avoid heavy shadows, decorative flourishes, or marketing-style emphasis
- Cards should feel compact, clean, and clearly actionable
- The page should feel like a focused routing step, not an article template or navigation hub

## Spacing Guidance
### Overall
- Maintain a compact, steady vertical rhythm
- Avoid oversized blank gaps between the intro, utility link, route cards, and fallback area

### Breadcrumb / Header Spacing
- Tight spacing between breadcrumb row and intro band
- Tight title-to-description spacing in the intro
- Intro band should feel generous enough to orient, but not tall

### Section Spacing
- Moderate separation between intro band and the change-sign-in-method link
- Moderate separation between the utility link and the chooser prompt
- Divider before the fallback area should create clear separation without introducing a large dead zone

### Card Spacing
- Moderate vertical spacing between route cards
- Tight title-to-description spacing inside each card
- Keep internal padding compact enough that the cards feel focused, not airy

### Density Goals
- Intro: compact medium density
- Change-sign-in-method link: compact and quiet
- Route-selection cards: medium density with clear scanability
- Support area: compact and low emphasis

## Must Match
- School / NGLSync-specific reset-password path purpose
- Breadcrumb row above the intro band
- Light neutral intro/header band
- Title `Reset password: School or NGLSync sign-in`
- Supporting line that states the school or institution manages the password, not Cengage
- Quiet `Change sign-in method` link above the route-selection section
- Main prompt `Which best describes your situation?`
- Three stacked route cards in this order:
  - School portal sign-in
  - NGLSync sign-in
  - I&apos;m not sure
- Distinct routing meaning for school portal, NGLSync, and not-sure paths
- Quiet fallback area with `Still need help?`, start-over link, back-to-domain link, and contact-support link
- Support remaining secondary

## Can Approximate
- Exact icon glyphs
- Exact arrow icon shape
- Exact pixel spacing
- Exact card heights if copy wraps slightly differently
- Exact border weights and shadow values
- Exact breadcrumb separators
- Exact font metrics

## Do Not Copy
From generic help-site patterns or rough prototype defaults, do **not** copy:
- turning this page into a generic article with long body copy
- replacing the school / NGLSync chooser with LMS-style instructions
- making support primary or visually equal to the route cards
- overcomplicating the page with extra routing logic beyond the three shown choices
- oversized airy cards with too much empty space
- treating this like a direct Cengage-account reset page
- collapsing school portal and NGLSync into the LMS path when the design keeps them distinct
- introducing product-first or role-first framing

## Reviewer Checklist
Use this when reviewing implementation:
- Does the page clearly read as the school / NGLSync reset-password path?
- Is it clear that password reset happens through the school or institution, not directly through Cengage?
- Is the breadcrumb row present and visually quiet?
- Does the intro band feel compact, calm, and clearly introductory?
- Is `Reset password: School or NGLSync sign-in` the strongest text in the intro?
- Is the `Change sign-in method` link present and clearly secondary?
- Does the page use a focused route-selection block rather than drifting into a generic article?
- Are the three route cards present, concise, and in the correct order?
- Are school portal and NGLSync clearly treated as distinct choices?
- Does the fallback area stay quiet, with start-over, back-to-domain, and contact-support links?
- Does the page preserve reset-password routing intent without collapsing into the LMS branch or a flat article?
