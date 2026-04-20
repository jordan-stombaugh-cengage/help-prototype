# Search Results Fidelity Notes

This pass tightened Search Results to behave more like a future-state discovery layer rather than a fallback sink.

## What Changed
- Shared account results now favor the most truthful next-step articles where the answer is already specific enough.
- Guided-step results remain in Search Results only when product, sign-in path, or pathway context still changes the answer.
- Product hubs remain discoverable, but they no longer substitute for article or chooser destinations when a narrower object exists.
- Result metadata is derived from the visible filter model:
  - Role
  - Product
  - Sign-in path
  - Education segment
  - Last updated

## Last Updated Behavior
- Results only participate in the `Last updated` filter when the prototype has a credible source or prototype date for that destination.
- Undated legacy-derived articles remain searchable, but they do not claim freshness they cannot support.
- Guided steps and product hubs are labeled as prototype destinations or routing steps instead of using fake update dates.

## Known Prototype Limits
- Search Results are still seeded prototype data, not a live indexed corpus.
- Pagination is still a visual placeholder rather than a functional paging system.
- Some guided-step results still lead to truthful dead ends deeper in the prototype when the correct downstream object does not exist yet.
