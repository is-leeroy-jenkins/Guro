# Documentation Workflow

The documentation site is built with MkDocs Material and mkdocstrings.

## Local Preview

```powershell
python -m pip install -r requirements-docs.txt
mkdocs serve
```

Open the local address printed by MkDocs, usually `http://127.0.0.1:8000/`.

## Production Build

```powershell
mkdocs build --strict
```

## GitHub Pages Deployment

```powershell
mkdocs gh-deploy --force
```

## Documentation Sources

- `mkdocs.yml` controls navigation, theme features, plugins, and extensions.
- `docs/stylesheets/guro.css` contains the dark Material theme overrides.
- `docs/javascripts/extra.js` provides progressive UX enhancements.
- `docs/reference/catalog.md` is the complete prompt inventory.
- `docs/api/*.md` contains mkdocstrings-powered helper API reference pages.

!!! warning
    Keep documentation examples synchronized with the actual import structure. The repository currently exposes a top-level `instructions/` package.
