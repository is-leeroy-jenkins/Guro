# Adding or Updating Prompts

Use the prompt catalog as the source of category metadata and preserve prompt Markdown exactly when transferring content into a Python constant.

## Add a Prompt

1. Add or update the prompt record in the catalog.
2. Confirm the `Caption`, `Category`, and `Text` fields.
3. Convert the caption to the approved uppercase constant name.
4. Route the prompt according to its category.
5. Add the constant to the owning module's `__all__`.
6. Add the name to package-level `instructions.__all__`.
7. Run the validation suite described in [Testing & Validation](testing.md).
8. Update the catalog documentation if category structure changes.

## Preserve Markdown Structure

Prompt text is executable configuration data. Do not flatten Markdown headings or bullets during generation.

Correct:

```python
EXAMPLE = f'''## Role

- First responsibility.
- Second responsibility.

## Instructions

- First instruction.
'''
```

Incorrect:

```text
## Role- First responsibility.- Second responsibility.## Instructions- First instruction.
```

## Naming

- Use uppercase snake case.
- Preserve intentional compatibility names already exposed publicly.
- Do not silently rename a public constant without providing a migration strategy.
- Numeric terms such as `3D` should remain semantically intact when that is the established public name.
