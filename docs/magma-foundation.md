# Magma Foundation

## Purpose
This is the practical React Magma foundation rulebook for the `help-prototype` app.

Use it to keep page structure, spacing, typography, and component choices consistent across:
- homepage
- search results
- help-domain hubs
- reset-password routing pages
- help articles
- support pages
- product hubs

Source basis:
- React Magma colors: https://react-magma.cengage.com/version/4.7.0/design-intro/colors/
- React Magma layout: https://react-magma.cengage.com/version/4.7.0/design-intro/layout/
- React Magma spacing: https://react-magma.cengage.com/version/4.7.0/design-intro/spacing/
- React Magma typography: https://react-magma.cengage.com/version/4.7.0/design-intro/typography/

## Core Rules
- Use Magma’s default `Productive` type set for the entire prototype.
- Use `Work Sans` globally.
- Keep pages task-first, not editorial or marketing-like.
- Prefer Magma defaults and tokens over custom visual invention.
- Use the default Magma theme color system for text, surfaces, borders, primary actions, and semantic status colors.
- Do not introduce ad hoc colors, type scales, or spacing values unless a specific layout problem requires it.

## Typography Rules

### Global Type Direction
- Default to the `Productive` type set everywhere.
- Do not switch to `Expressive` or `Narrative` for this prototype.
- Keep headings and labels crisp and functional.
- Keep body copy readable and calm rather than oversized.

### Practical Type Mapping
- Page title: use Productive `Heading / X-Large`.
  Use for the top title on homepage, search, hubs, routing pages, support, and product hubs.
- Major section heading: use Productive `Heading / Large` or `Heading / Medium`.
  Use for section starts such as `Help by topic`, `Common account help topics`, `Try these first`.
- Component title: use Productive `Heading / Small` or `Heading / X-Small`.
  Use for cards, rail blocks, grouped panels, and secondary section headers.
- Eyebrow / compact label: use Productive `Heading / 2X-Small` sparingly.
  Reserve for quiet utility labels, not decorative over-labeling.
- Lead text: use Productive `Body / Large` only for short intro copy directly under a page title.
- Default paragraph text: use Productive `Body / Medium`.
  This is the standard body style for almost all prototype copy.
- Meta / helper / supporting text: use Productive `Body / Small`.
  Use for summaries, descriptions, timestamps, filter helper text, and support availability.
- Fine metadata only: use Productive `Body / X-Small`.
  Use only for very compact metadata or quiet utility text.

### Prototype Heading Discipline
- One clear H1 per page.
- Keep section hierarchy shallow.
- Do not stack multiple large headings close together.
- Use size changes to clarify hierarchy, not to create drama.
- Use subdued body/meta text before introducing extra labels.

## Layout Rules

### Magma Layout Baseline
- Use Magma’s responsive layout model:
  - `> 768px`: 12-column layout
  - `<= 768px`: 6-column layout
  - `<= 375px`: 4-column layout
- Use `24px` gutters and outer margins above `600px`.
- Use `16px` gutters and outer margins at `600px` and below.
- Do not let content continue expanding indefinitely.
- Treat `1600px` as the hard upper limit for any full-width content area.

### Max-Width Strategy For This Prototype
- Default shell for major pages: target about `1200px` max width.
- Use full-width shells for:
  - homepage
  - search results
  - product hubs
  - any page with multiple columns or broad card grids
- Use restricted-width content for:
  - sign-in hub
  - reset-password routing pages
  - support page
  - article body areas
- For article and support-style pages, keep the primary reading/task column narrower than the shell.
- For article pages with a right rail, keep the main column clearly dominant and the rail visibly secondary.

### Breakpoint Behavior
- Desktop should preserve intended two-column or grid layouts.
- Tablet can collapse secondary content below primary content when needed.
- Mobile should stack vertically in source order.
- Do not invent new mobile-only structures if a simple stack preserves hierarchy.

### Full-Width vs Restricted-Width
- Use full-width when the page needs:
  - search + filter layouts
  - broad discovery grids
  - role-aware product-hub sections
  - wider comparison of multiple cards or panels
- Use restricted-width when the page needs:
  - focused reading
  - focused task routing
  - single-column support guidance
  - calmer instructional flows

## Spacing Rules

### Spacing System
- Use Magma’s spacing scale based on the 8px grid.
- Prefer these prototype steps:
  - `spacing02` = `4px`
  - `spacing03` = `8px`
  - `spacing04` = `12px`
  - `spacing05` = `16px`
  - `spacing06` = `24px`
  - `spacing08` = `32px`
  - `spacing09` = `40px`
  - `spacing10` = `48px`
  - `spacing12` = `64px`
  - `spacing13` = `96px`
- Use `spacing01` / `2px` only for tiny visual adjustments, not as a general layout unit.

### Practical Spacing Expectations
- Major page-section spacing:
  - desktop: `48px` to `64px`
  - mobile: `32px` to `40px`
- Heading to supporting text:
  - `8px` to `12px`
- Heading to first content block:
  - `16px` to `24px`
- Card padding:
  - standard: `24px`
  - compact: `16px`
- Card-to-card gap:
  - `16px` to `24px`
- Right-rail block padding:
  - `16px` to `24px`
- Right-rail block gap:
  - `24px`
- Control spacing inside forms/filter panels:
  - label to control: `8px`
  - control to helper/error text: `4px` to `8px`
  - related controls in a group: `12px` to `16px`
  - separate control groups: `24px`

### Spacing Discipline
- Use token steps, not one-off pixel values.
- Do not use percentage-based padding/margins inside components.
- If a breakpoint needs tighter spacing, jump down one token step rather than inventing a custom value.
- If you feel tempted to use an odd value like `18px`, `22px`, or `30px`, stop and try the nearest token first.

## Component Usage Guidance

### Buttons
- One strong primary button per decision area.
- Use secondary or text-style actions for lower-emphasis options.
- Do not place multiple filled primary CTAs side by side.
- In support areas, self-service should usually appear before the strongest support button.

### Inputs
- Use Magma inputs for search and forms without custom restyling.
- Search inputs should feel prominent through placement and width, not oversized decoration.
- Use helper/error text in `Body / Small`.
- Keep labels visible unless the context is obvious and accessibility remains intact.

### Selects
- Use selects for sort and refinement, not for top-level navigation.
- Keep them compact and aligned with nearby controls.
- Do not use selects to recreate homepage-style content-type navigation.

### Cards
- Cards should be calm, structured, and understated.
- Favor thin borders, soft radius, and light surfaces over heavy shadow.
- Keep card families consistent within a page.
- Use larger cards for primary browse destinations and smaller cards for secondary/supporting content.

### Tags vs Badges vs Filter Chips
- Tags:
  use for stable metadata such as product, role, help area, or education segment.
- Badges:
  use for compact status or callout states such as `Best match` or system status.
- Filter chips:
  use only for active, removable search refinements.
- Do not use all three in the same area unless they serve clearly different jobs.

### Metadata Treatments
- Metadata must stay quieter than titles and main body content.
- Use `Body / Small` or `Body / X-Small`.
- Keep metadata grouped and scannable.
- Prefer one metadata row or compact metadata blocks over scattered labels.

### Right Rail Blocks
- Use right rails only when they support the main content.
- Rail blocks should be visually lighter than the main column.
- Keep rail cards compact and stack them with even spacing.
- Use rails for metadata, related help, and lightweight feedback, not for competing primary actions.

### Support Fallback Blocks
- Support remains secondary to self-service.
- Place support blocks after self-service guidance, not before it.
- Use a bordered or softly tinted block with one clear primary action at most.
- Keep phone, chat, and escalation language calm and contained.

## Prototype-Specific Interpretation

### Homepage
- This is the broadest page, but search must remain the clearest action.
- Use the full-width shell.
- Keep sections distinct through spacing and consistent card families, not dramatic visual shifts.

### Search Results
- This should be the densest page in the prototype.
- Preserve a clear filter rail + results layout on desktop.
- Tighten spacing inside results and filters before removing structure.

### Help-Domain Hubs
- These pages are focused destination pages, not directories.
- Use a narrower content rhythm than homepage.
- Keep common tasks first and support fallback quiet.

### Routing Pages
- Reset-password pages should be the most task-focused screens.
- Use restricted-width layouts and simple stacked choice cards.
- Keep the question and branch actions visually dominant.

### Help Articles
- Article body remains primary.
- Keep the article column readable and structured.
- The right rail is useful but secondary.
- Do not let article pages drift into landing-page styling.

### Support Pages
- Self-service guidance comes first.
- Live support actions can be clear, but they cannot feel like the page’s first answer.
- Preparation/info blocks should be quieter than the primary support action.

### Product Hubs
- Use the full-width shell.
- Keep shared sections visually stable across role states.
- Role tabs are a state control, not a new page type.
- Product-first browsing should feel substantial but still task-oriented.

## What Must Stay Consistent
- Productive type set
- Work Sans usage
- gutter and margin behavior
- 8px-token spacing discipline
- calm card styling
- subdued metadata treatment
- secondary support placement
- consistent tag/badge/chip semantics
- consistent page-shell max-width logic

## Controlled Variation That Is Acceptable
- Homepage can feel broader and more discoverable than the other pages.
- Search results can be denser than hubs and support pages.
- Routing pages can be narrower and more direct than articles and hubs.
- Product hubs can use stronger sectioning than help-domain hubs because they carry more content.
- Article pages can use the most restrained visual hierarchy as long as the page still feels modern and structured.

## Working Standard
- When in doubt, choose the calmer Magma option.
- When in doubt, tighten hierarchy with spacing and type before adding decoration.
- When in doubt, prefer consistency across page families over local visual cleverness.
