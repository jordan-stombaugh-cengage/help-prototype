# Reset Password: Not Sure How You Sign In Design Spec

## Purpose
The Reset Password: Not sure how you sign in page is the diagnosis and identification state in the merged Cengage Help + ELT prototype for users who do not know which sign-in method applies to them.

Its job is to:
- help users identify whether they usually sign in with a Cengage account, through an LMS, or through a school / NGLSync portal
- explain the most common sign-in patterns in a compact, scannable way
- provide a small set of next-step options after the user has enough context to choose the right path
- keep distinct sign-in methods separate rather than collapsing them into one vague explanation
- keep support secondary to self-service diagnosis and routing

This page is a diagnosis / identification page for users who do not know their sign-in method. It helps them self-identify their sign-in path and choose the right next step.

## Source Priority
1. Approved Reset password: Not sure how you sign in design frame
2. IA rules in `AGENTS.md` and `/docs`
3. Existing implementation only as fallback/reference

## IA Rules That Must Not Change
- This is a `not sure` diagnosis page, not a generic help article
- It helps users identify whether they sign in with a Cengage account, LMS, or school / NGLSync portal
- It should present a small set of next-step options after the identification guidance
- Distinct sign-in methods must remain distinct
- This page remains part of the reset-password routing flow
- Support is fallback, not primary
- Do not flatten this into a generic article page
- Do not add sections not present in the approved design
- Do not collapse the distinct sign-in methods into one generic explanation
- Do not turn this page into a broad directory or homepage-style card grid

## Overall Layout
- Centered desktop container consistent with the other prototype pages, around a `1200px` outer shell
- Quiet utility breadcrumb row at the top
- Light neutral intro band for the page title area
- Main diagnostic content sits in a narrower centered content column beneath the header
- The page should feel vertically focused and task-oriented, with:
  - one primary identification card
  - one secondary stack of next-step option cards
  - one quiet support / secondary links area
- Page rhythm is:
  - breadcrumb row
  - intro band
  - back-to-sign-in-options utility link
  - identification card
  - try-these-options section
  - quiet support / secondary links
- Visual density should be medium:
  - denser than a rough wireframe
  - calmer and simpler than the homepage
  - more diagnostic than instructional

## Page Section Order
1. Breadcrumb row
2. Header / intro section
3. Back to sign-in options utility link
4. Sign-in identification card
5. Try these options section
6. Support / secondary links

## Header / Intro Section
### Purpose
Orient the user quickly and frame this page as a diagnosis step for identifying the correct sign-in method.

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
  - `Help Home / Sign In & Account / Reset password / Not sure`
- Breadcrumb should provide orientation only; it should not become the visual focus

### Content
- Page title:
  - `Not sure how you sign in?`
- Supporting description intent:
  - this page explains common ways to identify a sign-in method
  - the goal is to help the user choose the right next step

### Icon Treatment
- Small soft tile with a help / question-style icon
- A soft orange-tinted tile is appropriate if it remains subtle and secondary to the title
- Icon should reinforce uncertainty / diagnosis without becoming decorative emphasis
- Keep it understated and visually consistent with the broader Sign In & Account styling family

### Visual Goals
- Clear diagnosis-step identity immediately
- Strong page title hierarchy
- Compact supporting line
- Calm guidance rather than alarm or escalation
- Utility-like breadcrumb behavior

## Back to Sign-in Options Link
### Purpose
Provide a lightweight path back to the main reset-password chooser when the user wants to return to the sign-in-method options.

### Placement
- Appears below the intro band and above the identification card
- Left aligned within the centered content column
- Sits on its own line as a quiet utility action before the main diagnostic content

### Content
- Link text in the approved frame reads:
  - `Back to sign-in options`
- A small leading back arrow icon is appropriate if kept understated

### Hierarchy Rules
- This link should feel clearly secondary to the page title and both content blocks
- It should read as a utility action, not a competing CTA
- It should connect back to the reset-password chooser flow rather than to a generic back-navigation pattern

### Routing Intent
- The destination should return the user to the reset-password chooser state
- Its purpose is to let users restart the sign-in selection flow once they understand the available paths

## Sign-in Identification Card
### Purpose
Provide the main diagnostic content that helps users self-identify their sign-in pattern.

### Heading Structure
- The card should begin with a strong card heading
- Approved heading:
  - `How to identify your sign-in method`
- This heading should be the strongest text in the main content area after the page title

### Layout
- One bordered card centered in the content column
- The card should appear before any next-step options
- Card width should support short explanatory rows without becoming article-like

### Identification Rows
The approved frame shows three explanatory rows:
1. `Cengage account sign-in`
2. `LMS sign-in`
3. `School or NGLSync portal`

### Row Content Structure
Each row should include:
- a small icon tile at the left
- a strong row title
- a short explanatory sentence or two clarifying what that sign-in pattern looks like

### Identification Guidance Intent
- `Cengage account sign-in`
  - if the user goes directly to cengage.com or a product site and enters email + password, they are using a Cengage account
- `LMS sign-in`
  - if the user signs in to Canvas, Blackboard, Moodle, or another course system first and then accesses Cengage through the course, they are using LMS sign-in
- `School or NGLSync portal`
  - if the user signs in through a school website or student portal, or through a non-LMS school-managed access path, they are using school / NGLSync-style sign-in

### Icon Treatment
- Each row uses a small icon tile aligned left
- Icon tiles may use subtle color differentiation per sign-in type, but should remain visually consistent as a family
- Icons should reinforce meaning:
  - person/account for Cengage account
  - LMS / learning-platform icon for LMS
  - portal / institution icon for school or NGLSync
- Icons should remain secondary to the row title

### Why This Is the Primary Diagnostic Content Block
- This card contains the core logic that helps the user identify their sign-in method
- It preserves the distinction between direct account sign-in, LMS sign-in, and school / NGLSync access
- It enables the next-step options to feel intentional rather than generic

## Try These Options Section
### Purpose
Offer a small set of concrete next-step destinations after the user has reviewed the identification guidance.

### Heading Structure
- The section begins with a strong section heading
- Approved heading:
  - `Try these options`
- This heading should be subordinate to the identification-card heading but still clearly visible

### Layout
- One vertical stack of option cards inside the centered content column
- Cards should feel compact, easy to scan, and clearly actionable
- The stack should read as next actions, not as unrelated browse destinations

### Likely Options Shown In The Approved Frame
1. `Forgot password`
2. `LMS / school sign-in help`
3. `I can't access my account`
4. `See support options`

### Card Behavior / Content Structure
Each option card should include:
- a small icon tile at the left
- a strong option title
- one short supporting line
- a right-aligned directional arrow or similar affordance
- full-card destination behavior or clearly card-like click behavior

### Supporting Copy Intent
- `Forgot password`
  - browse or route into password reset help
- `LMS / school sign-in help`
  - route users toward school-managed sign-in support
- `I can't access my account`
  - route users toward account access help
- `See support options`
  - route users toward support choices only after self-service options have been presented

### Arrow Treatment / Directional Affordance
- A right-aligned arrow is appropriate on each option card
- The arrow should remain secondary to the title and supporting line
- It should signal next-step movement, not become decorative emphasis

### Relationship To The Identification Card
- The identification card comes first and explains how to diagnose the sign-in method
- The option-card section comes second and provides practical next actions
- The options should feel downstream of the diagnostic content, not like a competing first step

## Support / Secondary Links
### Purpose
Provide a quiet fallback after the identification and next-step option sections.

### Structure
- Appears below the option cards
- Separated by a subtle divider line
- Includes a short prompt and a small set of low-emphasis links

### Content
- Prompt:
  - `Still need help?`
- Secondary links shown in the approved frame:
  - `Start over: How do you usually sign in?`
  - `Back to Sign In & Account Help`

### Hierarchy Rules
- This area must remain clearly secondary to the two main content blocks
- Links should read as fallback utilities, not primary task actions
- Support should not be elevated into a card, banner, or prominent escalation block

## Visual Style Guidance
- Strongest text hierarchy:
  - page title
  - identification-card heading
  - try-these-options heading
  - row titles / option-card titles
  - supporting descriptions
  - fallback prompt and links
- Breadcrumbs and back-to-sign-in-options link should be quiet utility elements
- The identification card should feel like the primary diagnostic block
- The option cards should feel stronger than the support area but slightly less foundational than the identification card
- Use understated borders and subtle radii
- Avoid heavy shadows, decorative flourishes, or marketing-style emphasis
- Cards should feel compact, calm, and clearly actionable
- The page should feel like a focused diagnosis + routing step, not an article template or homepage-style navigation surface

## Spacing Guidance
### Overall
- Maintain a compact, steady vertical rhythm
- Avoid oversized blank gaps between the intro, utility link, cards, and fallback area

### Breadcrumb / Header Spacing
- Tight spacing between breadcrumb row and intro band
- Tight title-to-description spacing in the intro
- Intro band should feel generous enough to orient, but not tall

### Section Spacing
- Moderate separation between intro band and the back-to-sign-in-options link
- Moderate separation between the utility link and the identification card
- Moderate separation between the identification card and the try-these-options section
- Divider before the fallback area should create clear separation without introducing a large dead zone

### Card Spacing
- Tight heading-to-content spacing inside the identification card
- Moderate spacing between diagnostic rows
- Moderate vertical spacing between option cards
- Tight title-to-description spacing inside each option card
- Keep internal padding compact enough that the cards feel focused, not airy

### Density Goals
- Intro: compact medium density
- Back-to-sign-in-options link: compact and quiet
- Identification card: medium density with strong clarity
- Option cards: medium density and clearly actionable
- Support area: compact and low emphasis

## Must Match
- Not-sure diagnosis page purpose
- Breadcrumb row above the intro band
- Light neutral intro/header band
- Title `Not sure how you sign in?`
- Supporting line that frames the page as help for identifying the sign-in method and getting help
- Quiet `Back to sign-in options` link above the main diagnostic content
- Primary identification card headed `How to identify your sign-in method`
- Three identification rows:
  - Cengage account sign-in
  - LMS sign-in
  - School or NGLSync portal
- Secondary `Try these options` section with four stacked option cards
- Directional arrow treatment on the option cards
- Quiet fallback area with `Still need help?`, start-over link, and back-to-domain link
- Support remaining secondary

## Can Approximate
- Exact icon glyphs
- Exact icon-tile colors
- Exact arrow icon shape
- Exact pixel spacing
- Exact card heights if copy wraps slightly differently
- Exact border weights and shadow values
- Exact breadcrumb separators
- Exact font metrics

## Do Not Copy
From generic help-site patterns or rough prototype defaults, do **not** copy:
- turning this into a generic article with long body copy
- making support primary or visually equal to the diagnostic content
- overcomplicating the page with extra branching logic beyond the guidance and option cards
- oversized airy cards with too much empty space
- collapsing all sign-in methods into one vague explanation
- treating the option cards like generic homepage cards
- replacing the diagnostic card with a loose paragraph explanation
- turning the page into a flat list of unrelated links

## Reviewer Checklist
Use this when reviewing implementation:
- Does the page clearly read as a diagnosis / identification step for users who are not sure how they sign in?
- Is the breadcrumb row present and visually quiet?
- Does the intro band feel compact, calm, and clearly introductory?
- Is `Not sure how you sign in?` the strongest text in the intro?
- Is the `Back to sign-in options` link present and clearly secondary?
- Does the primary card clearly help users identify Cengage account, LMS, and school / NGLSync sign-in patterns?
- Are the three identification rows distinct and easy to scan?
- Does the `Try these options` section provide a small, practical set of next steps?
- Do the option cards feel like action choices rather than generic browse cards?
- Does the fallback area remain quiet and secondary?
- Does the page preserve the routing intent of the reset-password flow instead of flattening into a generic article or vague explanation?
