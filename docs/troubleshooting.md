# Troubleshooting

## `ModuleNotFoundError: No module named 'instructions'`

Run the example from the repository root or install/package the project so the directory containing `instructions/` is on `sys.path`.

## `KeyError` from `get()`

`get()` accepts only names declared in the relevant module's `__all__`.

```python
from instructions import names

print( 'IMAGE_ANALYZER' in names( ) )
```

If you are using a modality-specific module, confirm the prompt belongs to that modality:

```python
from instructions import image

print( 'IMAGE_ANALYZER' in image.names( ) )
```

## MkDocs cannot import `instructions`

Build the site from the repository root. The `mkdocstrings` handler is configured with `paths: [.]`, so changing the working directory can prevent module discovery.

## Mermaid diagrams appear as code blocks

Confirm both of these are present in `mkdocs.yml`:

- the Mermaid custom fence under `pymdownx.superfences`;
- the Mermaid JavaScript asset before `javascripts/extra.js`.

## Search or table filters do not work after navigation

Guro uses MkDocs Material instant navigation. `extra.js` subscribes to the Material `document$` lifecycle and reinitializes enhancements after page swaps. If custom scripts replace this behavior, preserve that subscription.

## Documentation build fails in strict mode

Run:

```powershell
mkdocs build --strict -v
```

Check the first reported navigation, Markdown, plugin, or import failure rather than disabling strict mode. Strict mode is intentional because stale documentation is a functional defect for a catalog-driven library.
