# PyPI Release Guide

Guro's Python import namespace remains `guro`.

The PyPI distribution is named **`guro-prompt-library`** because the distribution name `guro` is already registered on PyPI by an unrelated project. Installing this distribution therefore uses:

```powershell
python -m pip install guro-prompt-library
```

Application imports remain unchanged:

```python
from guro import instructions
from guro.instructions import text, image, audio
```

## Package Layout

The repository intentionally keeps the current source layout. `pyproject.toml` maps the repository root to the `guro` package and `instructions/` to `guro.instructions` when setuptools builds the wheel. This preserves existing source files and import behavior without moving the large prompt modules.

The runtime package has no third-party dependencies. Documentation and release tooling are exposed as optional dependency groups rather than runtime dependencies.

## Local Build Verification

Create or activate a virtual environment, then run:

```powershell
python -m pip install --upgrade build twine
python -m build
python -m twine check dist/*
python -m pip install --force-reinstall dist/*.whl
```

Verify the installed package outside the repository directory so the local checkout cannot shadow the installed wheel:

```powershell
cd $env:TEMP
python -c "import guro; from guro import instructions; print(len(instructions.names()))"
```

## GitHub Package Validation

`.github/workflows/package-ci.yml` automatically builds the source distribution and wheel, validates package metadata with Twine, installs the wheel, and verifies the public import surface.

Package CI runs for pull requests and for pushes to `master` and `pypi-release-prep`.

## Configure PyPI Trusted Publishing

The release workflow uses PyPI Trusted Publishing. No long-lived PyPI API token is required.

Before publishing the first release, configure a PyPI pending Trusted Publisher with these values:

| Setting | Value |
|---|---|
| PyPI project name | `guro-prompt-library` |
| GitHub owner | `is-leeroy-jenkins` |
| GitHub repository | `guro` |
| Workflow filename | `release.yml` |
| Environment | `pypi` |

Create a GitHub environment named `pypi`. Requiring manual approval for that environment is recommended before production publication.

A pending PyPI publisher does not reserve the project name until the first successful publication. Confirm the distribution name remains available immediately before the first release.

## Versioning

The initial package version is defined in `pyproject.toml` as:

```toml
version = "0.1.0"
```

For each release:

1. Update `project.version` in `pyproject.toml`.
2. Merge the release changes to `master`.
3. Confirm Package CI succeeds.
4. Create a Git tag matching the version, for example `v0.1.0`.
5. Create and publish a GitHub Release from that tag.
6. The `release.yml` workflow builds and publishes the distributions to PyPI through Trusted Publishing.
7. Verify installation from a clean environment.

## First-Release Verification

After publication, verify the package from a clean environment:

```powershell
python -m venv .venv-pypi-test
.\.venv-pypi-test\Scripts\Activate.ps1
python -m pip install --upgrade pip
python -m pip install guro-prompt-library
python -c "from guro import instructions; print(len(instructions.names()))"
```

Then verify modality-specific imports:

```powershell
python -c "from guro.instructions import text, image, audio; print(bool(text.ACADEMIC_WRITER), bool(image.ICON_CREATOR), bool(audio.GENERAL_PURPOSE_TRANSLATOR))"
```
