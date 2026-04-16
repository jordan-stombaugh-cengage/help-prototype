# Contact Support Design Spec

## Purpose
The Contact Support page is the structured support-entry page in the merged Cengage Help + ELT prototype.

Its job is to:
- provide a clear fallback destination when self-service content has not resolved the user’s issue
- encourage users to try the most likely self-service destinations first
- present support services after self-service, but not as the first or only answer
- prepare users to contact support more effectively by telling them what information to have ready
- keep support structured, calm, and product-like rather than promotional

This page is a structured support-entry page, not a generic marketing/contact page.

## Source Priority
1. Approved Contact Support design frame
2. IA rules in `AGENTS.md` and `/docs`
3. Existing implementation only as fallback/reference

## IA Rules That Must Not Change
- Support is fallback, not the primary homepage path
- The page should first point users to likely self-service destinations
- Support services come after self-service guidance
- Do not flatten this into a generic contact-us page
- Do not add sections not present in the approved design
- Do not turn this into a broad support hub with unrelated escalation paths
- Do not remove the self-service-first guidance
- Do not assume phone support or submit-a-case workflows are primary if they are not shown in the design

## Overall Layout
- Full-width page shell consistent with the other destination pages in the prototype
- Quiet breadcrumb row at the top
- Light neutral intro/header band beneath the breadcrumbs
- Main content sits in a narrower, centered single-column support layout
- The content column should feel focused and structured rather than broad
- Visual rhythm should be:
  - breadcrumb row
  - intro/header band
  - self-service-first section
  - support services section
  - support-preparation card
- Visual density should be medium:
  - denser than a wireframe
  - calmer than a homepage
  - more structured than a generic contact page

## Page Section Order
1. Breadcrumb row
2. Header / intro section
3. Try these first section
4. Support services section
5. Before you contact support section

## Header / Intro Section
### Purpose
Quickly orient the user and frame this page as a support-entry destination that still encourages self-service first.

### Layout
- Breadcrumb row appears above the intro band
- Intro sits in a light neutral band spanning the page width
- Desktop layout is a compact horizontal intro:
  - small support/help icon tile on the left
  - title and supporting description on the right
- Intro should feel calm and utilitarian, not like a marketing hero

### Breadcrumb Treatment
- Left aligned
- Quiet utility style
- Compact spacing
- Approved breadcrumb pattern:
  - `Help Home / Contact Support`
- Breadcrumbs should provide context only and should not compete with the page title

### Content
- Page title:
  - `Contact support`
- Supporting description intent:
  - `If you're not able to find the help you need, contact support with additional questions.`

### Icon Treatment
- Small soft tile with a support/help icon
- Subtle green-tinted tile is appropriate if it remains understated
- Icon should reinforce the support domain without becoming the strongest visual element

### Visual Goals
- Clear support-entry identity
- Strong title hierarchy
- Calm and helpful tone
- Compact introduction that supports the self-service-first model

## Try These First Section
### Purpose
Present the highest-confidence self-service destinations before support services are offered.

### Heading / Subheading Treatment
- Strong section heading
- One short supporting line below it

Approved heading:
- `Try these first`

Supporting line intent:
- most issues can be resolved quickly using self-service help resources

### Layout
- One vertical stack of compact recommendation cards inside the centered content column
- Cards should be easy to scan and clearly actionable
- This section should feel like the first major decision area on the page

### Likely Cards In The Approved Frame
1. `Sign In & Account Help`
2. `Reset password`
3. `LMS and school sign-in help`

### Card Content Structure
Each self-service card should include:
- a strong title
- one short supporting sentence
- full-card destination behavior or clearly card-like click behavior

### Card Density / Hierarchy
- Cards should feel compact, structured, and slightly stronger than the support-services card because they come first in the page flow
- Supporting copy should stay subordinate to the card title
- Cards should not feel like homepage or marketing cards

### Why This Section Must Come Before Support Services
- Repo IA requires support to remain fallback
- The page should first route users to likely self-service solutions
- This section helps reduce unnecessary escalation and keeps the experience aligned with search-first, article-first behavior

## Support Services Section
### Purpose
Offer neutral support-services entry after the user has been encouraged to try self-service help first.

### Heading / Subheading Treatment
- Strong but secondary section heading
- One short supporting line underneath

Approved heading:
- `Contact support`

Supporting line intent:
- `If you're not able to find the help you need, contact support with additional questions.`

### Support Card Structure
- One bordered support card beneath the heading/subheading
- Card includes:
  - small icon tile at the left
  - support title:
    - `Contact support`
  - one short supporting line
  - primary CTA button

### Icon Treatment
- Small support/help icon tile
- Subtle green-tinted tile consistent with the page header family
- Icon should support comprehension, not dominate the card

### Primary CTA / Button Treatment
- The `Go to support services` button should be the clearest action inside this section
- Button may use a stronger brand action color, but the section itself should still remain secondary to the self-service-first structure of the page
- Keep button treatment focused and contained to the card

### Relative Prominence
- This section should be more prominent than the prep card below it
- It should be less foundational than the self-service recommendation section above it
- Support services should feel available and actionable, but not like the page’s first answer

## Before You Contact Support Section
### Purpose
Help users prepare the information support needs so support services can resolve issues faster.

### Informational Prep Card Treatment
- One bordered, softly tinted informational card
- Calm and structured
- Slightly quieter than the support-services card
- Should feel supportive, not cautionary

### Heading / Supporting Text
- Heading:
  - `Before you contact support`
- Supporting text should explain that having this information ready can help resolve the issue faster

### Bullet List Treatment
- Compact vertical bullet list
- Bullets should be visually tidy and easy to scan
- Use standard list structure rather than stylized process UI

### Expected Items To Have Ready
Based on the approved frame, likely items include:
- email address or username
- the Cengage product being accessed
- error messages or screenshots, if applicable
- how the user signs in:
  - Cengage account
  - LMS
  - school portal

### Hierarchy Rules
- This card should support faster resolution without becoming dominant
- It should remain clearly secondary to the self-service section and slightly quieter than the support-services section

## Support / Secondary Structure
### Purpose
Clarify what belongs to the page content versus the global shell.

### Rules
- Any additional footer support links visible beneath the main content should be treated as global shell/footer content, not as page-specific support sections
- Page-specific support content should remain limited to:
  - self-service-first guidance
  - support services card
  - prep card
- The page should feel structured and calm, not like a broad support hub or escalation dashboard

## Visual Style Guidance
- Strongest hierarchy:
  - page title
  - try-these-first heading
  - self-service card titles
  - support-services heading and card title
  - prep-card heading
  - supporting descriptions
- Breadcrumbs should be the quietest navigational element
- Self-service cards should feel stronger than the support-services section
- Support services should feel stronger than the prep card
- Use understated borders and subtle radii
- Avoid marketing-style flourish, heavy shadows, or oversized empty space
- Keep the page calm, compact, and clearly task-oriented

## Spacing Guidance
### Breadcrumb / Header Spacing
- Tight spacing between breadcrumb row and intro band
- Compact title-to-description spacing
- Intro band should orient the user without becoming tall

### Section Spacing
- Moderate spacing between major sections
- Enough separation to show the self-service-first progression
- Avoid oversized vertical gaps that make the page feel sparse

### Card Spacing
- Tight internal card padding
- Tight title-to-description spacing inside cards
- Moderate spacing between stacked cards

### Density Goals
- Header: compact medium density
- Self-service cards: medium density
- Support services card: medium density
- Prep card: compact medium density

## Must Match
- Quiet breadcrumb row above the intro band
- Light neutral intro/header band with icon, title, and supporting description
- Centered single-column support layout
- `Try these first` section appearing before the support-services entry
- Self-service card stack with:
  - `Sign In & Account Help`
  - `Reset password`
  - `LMS and school sign-in help`
- `Contact support` section with neutral support-services card and `Go to support services` CTA
- `Before you contact support` prep card with bullet list
- Support remaining structured, calm, and secondary to self-service guidance

## Can Approximate
- Exact icon glyphs
- Exact border values
- Exact font metrics
- Exact button dimensions
- Exact bullet styling
- Exact line breaks if copy wraps differently in the prototype

## Do Not Copy
- Turning this into a generic marketing contact page
- Making support services the first or only answer
- Removing the self-service-first guidance
- Oversized airy cards
- Overcomplicating the page with extra support workflows not shown in the design
- Phone-first or case-submission-first escalation patterns if not present in the approved frame
- Broad support-hub navigation unrelated to the page’s focused support-entry purpose

## Reviewer Checklist
- Does the page read clearly as a structured support-entry page rather than a generic contact page?
- Is the breadcrumb row present and visually quiet?
- Does the intro band feel compact, calm, and clearly introductory?
- Is `Contact Support` the strongest text in the intro?
- Does `Try these first` appear before support services?
- Does `Try these first` appear before the support-services section?
- Are the self-service cards the clearest first destinations?
- Does the support-services section feel available but still secondary to self-service guidance?
- Does the prep card help users prepare for support without becoming dominant?
- Does the page avoid unrelated escalation paths or broad support-hub behavior?
- Does the page preserve the repo rule that support is fallback, not primary navigation?
