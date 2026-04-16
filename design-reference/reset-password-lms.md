# Reset Password: LMS Sign-in Design Spec

## Purpose
The Reset Password: LMS sign-in page is the LMS-specific password-reset instruction path in the merged Cengage Help + ELT prototype.

Its job is to:
- confirm that this user signs in through a school-managed learning management system
- explain that password reset happens through the school or LMS, not directly through Cengage
- provide a clear, focused self-service instruction path for the LMS-managed reset case
- offer a small set of adjacent LMS sign-in issue links without turning the page into a broad article or directory
- keep support secondary to self-service instructions

This page is an LMS-specific instruction path, not a generic password reset article.

## Source Priority
1. Approved Reset password: LMS sign-in design frame
2. IA rules in `AGENTS.md` and `/docs`
3. Existing implementation only as fallback/reference

## IA Rules That Must Not Change
- This is the LMS reset-password instruction path
- Password reset happens through the user&apos;s school or LMS, not directly through Cengage
- This page should give clear instructions, not a branching chooser
- This page remains part of the reset-password routing flow, not a standalone generic help article
- Support is fallback, not primary
- Do not flatten this into a generic article page with broad body copy
- Do not add sections not present in the approved design
- Do not treat this like the direct Cengage-account reset path
- Do not introduce extra routing logic or alternate pathway branching on this page
- LMS and school-managed password help remain distinct from the direct Cengage account handoff

## Overall Layout
- Centered desktop container consistent with the other prototype pages, around a `1200px` outer shell
- Quiet utility breadcrumb row at the top
- Light neutral intro band for the page title area
- Main instructional content sits in a narrower centered column beneath the header
- The page should feel vertically focused and task-oriented, with one primary instruction card and one secondary issue card
- Page rhythm is:
  - breadcrumb row
  - intro band
  - change-sign-in-method utility link
  - primary reset instructions card
  - secondary common-issues card
  - quiet support / secondary links
- Visual density should be medium:
  - denser than a rough wireframe
  - calmer and simpler than the homepage
  - more instructional than navigational

## Page Section Order
1. Breadcrumb row
2. Header / intro section
3. Change sign-in method utility link
4. Reset instructions card
5. Common LMS sign-in issues card
6. Support / secondary links

## Header / Intro Section
### Purpose
Orient the user quickly and confirm that this page covers LMS-managed password reset.

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
  - `Help Home / Sign In & Account / Reset password / LMS sign-in`
- Breadcrumb should provide orientation only; it should not become the visual focus

### Content
- Page title:
  - `Reset password: LMS sign-in`
- Supporting description intent:
  - user accesses Cengage through a school learning management system
  - password is managed by the school, not Cengage
  - the page will explain the correct reset path at a high level

### Icon Treatment
- Small soft tile with an LMS / learning-platform icon
- Icon should reinforce LMS-managed access without becoming decorative emphasis
- Keep it understated and visually consistent with the broader Sign In & Account styling family
- A soft green-tinted tile is appropriate if it remains subtle and secondary to the title

### Visual Goals
- Clear LMS-path identity immediately
- Strong page title hierarchy
- Compact supporting line
- Calm confirmation that the password is school-managed
- Utility-like breadcrumb behavior

## Change Sign-in Method Link
### Purpose
Provide a lightweight path back to the chooser when the user selected the wrong sign-in method.

### Placement
- Appears below the intro band and above the main instruction card
- Left aligned within the centered content column
- Sits on its own line as a quiet utility action before the primary instructions

### Content
- Link text in the approved frame reads:
  - `Change sign-in method`
- A small leading back arrow icon is appropriate if kept understated

### Hierarchy Rules
- This link should feel clearly secondary to the page title and primary instructions
- It should read as a corrective utility action, not a competing CTA
- It should connect back to the reset-password chooser flow rather than to a generic back-navigation pattern

### Routing Intent
- The destination should return the user to the reset-password chooser state
- Its purpose is to let users re-enter the routing flow when LMS was the wrong selection

## Reset Instructions Card
### Purpose
Deliver the primary self-service answer for users whose password is managed by their LMS or school.

### Heading Structure
- The card should begin with a strong card heading
- Approved heading:
  - `How to reset your password`
- This heading should be the strongest text in the main content area after the page title

### Layout
- One bordered card centered in the content column
- The card should appear before any related-issue links or support links
- Card width should support easy reading of short numbered steps without becoming article-like

### Numbered Step List
- Use a clear ordered list of four steps in the approved frame
- The steps should read as direct actions, not explanatory paragraphs
- The approved instruction sequence is:
  1. `Go to your school or LMS login page`
  2. `Look for a "Forgot password" or password reset option`
  3. `Follow your school's password reset process`
  4. `Once signed in to your LMS, access Cengage through your course`

### Visual Treatment of Steps
- Each step should include a visible step number
- Small contained number markers are appropriate and should feel aligned with the LMS path styling
- Number markers may use a subtle green-tinted background, but should remain restrained
- Steps should stack vertically with even spacing and clear scan order
- Each step row should feel like one concise instruction, not like a large panel or callout

### Density and Rhythm
- Tight heading-to-list spacing
- Moderate spacing between steps
- Compact line lengths and concise wording
- The card should feel more like a guided task block than a full article body

### Why This Is the Primary Content Block
- This card contains the main answer for the LMS-managed reset path
- It directly resolves the user&apos;s core task without requiring additional branching
- Related issue links and support should remain subordinate to this instruction block

## Common LMS Sign-in Issues Card
### Purpose
Provide a small set of adjacent LMS-related issue paths that often appear near password-reset problems.

### Heading Structure
- The card should have a strong but secondary heading
- Approved heading:
  - `Common LMS sign-in issues`
- This heading should be subordinate to the main instruction card heading

### Layout
- One bordered card below the primary instructions card
- It should match the general card family while reading as secondary content
- The card should not visually compete with the reset instructions card

### Issue-Link List
- Present a simple vertical list of issue links
- The approved frame shows:
  - `My LMS link isn't working`
  - `I don't know my LMS login`
  - `Course not showing up in LMS`
  - `LMS integration troubleshooting`
- Links should read as concise related-help destinations, not as another branching flow

### Optional External-Link Treatment
- If any destination is external, a small trailing external-link icon is appropriate
- External-link treatment should stay quiet and utility-like
- Do not add explanatory badges or heavy icon emphasis unless needed for clarity

### Relationship to the Primary Instructions Card
- This card is secondary and supportive
- It should help users who discover that their issue is adjacent to password reset, but not replace the main answer
- It should remain clearly below the primary instruction card in both order and emphasis

## Support / Secondary Links
### Purpose
Provide a quiet fallback after the LMS instructions and related-issue links.

### Structure
- Appears below the cards
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
- This area must remain clearly secondary to the two content cards
- Links should read as fallback utilities, not primary task actions
- Support should not be elevated into a card, banner, or prominent escalation block
- The start-over link should feel slightly more contextually relevant than the other fallback links, but still secondary overall

## Visual Style Guidance
- Strongest text hierarchy:
  - page title
  - primary instructions card heading
  - secondary issues card heading
  - step text
  - issue links
  - fallback prompt and links
- Breadcrumbs and change-sign-in-method link should be quiet utility elements
- The primary instructions card should be visually stronger than the common-issues card
- Both cards should be stronger than the support area
- Use understated borders and subtle radii
- Avoid heavy shadows, decorative flourishes, or marketing-style emphasis
- Cards should feel compact, clean, and instructional
- The page should feel like a focused task path, not an article template or navigation hub

## Spacing Guidance
### Overall
- Maintain a compact, steady vertical rhythm
- Avoid oversized blank gaps between the intro, utility link, cards, and fallback area

### Breadcrumb / Header Spacing
- Tight spacing between breadcrumb row and intro band
- Tight title-to-description spacing in the intro
- Intro band should feel generous enough to orient, but not tall

### Section Spacing
- Moderate separation between intro band and the change-sign-in-method link
- Moderate separation between the utility link and the first card
- Moderate spacing between the two cards
- Divider before the fallback area should create clear separation without introducing a large dead zone

### Card Spacing
- Tight heading-to-content spacing inside each card
- Moderate spacing between list items
- Keep internal padding compact enough that the cards feel focused, not airy

### Density Goals
- Intro: compact medium density
- Change-sign-in-method link: compact and quiet
- Reset instructions card: medium density with strong clarity
- Common issues card: medium density but secondary
- Support area: compact and low emphasis

## Must Match
- LMS-specific reset-password page purpose
- Breadcrumb row above the intro band
- Light neutral intro/header band
- Title `Reset password: LMS sign-in`
- Supporting line that states the password is managed by the school, not Cengage
- Quiet `Change sign-in method` link above the primary card
- Primary instructions card headed `How to reset your password`
- Four numbered LMS-managed reset steps in the approved order
- Secondary `Common LMS sign-in issues` card with a vertical link list
- Quiet fallback area with `Still need help?`, start-over link, back-to-domain link, and contact-support link
- Support remaining secondary to self-service instructions

## Can Approximate
- Exact icon glyphs
- Exact pixel spacing
- Exact card heights if copy wraps slightly differently
- Exact border weights and shadow values
- Exact breadcrumb separators
- Exact font metrics
- Exact external-link icon style if one is used

## Do Not Copy
From generic help-site patterns or rough prototype defaults, do **not** copy:
- turning this page into a generic article with long body copy
- making support primary or visually equal to the main instruction card
- overcomplicating the page with extra routing logic or branching UI
- oversized airy cards with too much empty space
- treating this like a direct Cengage-account reset page
- adding chooser-style answer cards to this page
- introducing product-first or role-first framing
- turning the common LMS issues card into a large directory or promotional panel

## Reviewer Checklist
Use this when reviewing implementation:
- Does the page clearly read as the LMS reset-password instruction path?
- Is it clear that password reset happens through the school or LMS, not directly through Cengage?
- Is the breadcrumb row present and visually quiet?
- Does the intro band feel compact, calm, and clearly introductory?
- Is `Reset password: LMS sign-in` the strongest text in the intro?
- Is the `Change sign-in method` link present and clearly secondary?
- Does the primary card clearly present `How to reset your password` as the main answer?
- Are the four LMS reset steps present, concise, and in the correct order?
- Does the primary instruction card feel stronger than the common-issues card?
- Does the `Common LMS sign-in issues` card remain secondary and compact?
- Does the fallback area stay quiet, with start-over, back-to-domain, and contact-support links?
- Does the page preserve reset-password routing intent without drifting into a generic article or direct-account reset pattern?
