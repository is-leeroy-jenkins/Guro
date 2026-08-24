# Development

The instruction package is data-heavy but contract-sensitive. Most regressions come from one of four sources: incorrect category routing, a missing export, a duplicate export, or accidental modification of prompt text.

## Development Invariants

- Every exported prompt is a `str`.
- Every package-level export exists.
- Each prompt belongs to exactly one modality module.
- Submodule export sets are disjoint.
- Their union equals the package-level catalog.
- Prompt text is preserved unless a prompt edit is intentional.
- New categories require an explicit routing decision.

Read [Adding or Updating Prompts](adding-prompts.md) before changing the catalog.
