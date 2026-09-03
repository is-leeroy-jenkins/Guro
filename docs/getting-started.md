# Getting Started

Guro's instruction catalog is pure Python. Each prompt is exposed as a module-level string constant and can be passed directly to an LLM, image, transcription, or speech workflow that accepts instructional text.

## Repository Layout

```text
Guro/
├── __init__.py
├── data/
│   └── Prompts.db
├── instructions/
│   ├── __init__.py
│   ├── audio.py
│   ├── image.py
│   └── text.py
├── ipynb/
├── prompts/
├── README.md
├── requirements.txt
└── resources/
```

## Import the Unified Catalog

Use the package-level namespace when an application may need instructions from more than one modality:

```python
from instructions import ACADEMIC_WRITER
from instructions import IMAGE_ANALYZER
from instructions import VERBATIM_TRANSCRIBER
```

## Import a Modality Module

Use a submodule when the application is intentionally scoped to one modality:

=== "Text"

    ```python
    from instructions import text

    system_instruction = text.EXPERT_PROGRAMMER
    ```

=== "Image"

    ```python
    from instructions import image

    system_instruction = image.IMAGE_ANALYZER
    ```

=== "Audio"

    ```python
    from instructions import audio

    system_instruction = audio.VERBATIM_TRANSCRIBER
    ```

## Dynamic Lookup

When the instruction name comes from a configuration file, database, UI control, or runtime request, use `get()` instead of indexing module globals directly:

```python
from instructions import get

instruction_name = 'DATA_SCIENTIST'
system_instruction = get( instruction_name )
```

An unknown name raises `KeyError`:

```python
from instructions import get

try:
    system_instruction = get( 'NOT_A_GURO_PROMPT' )
except KeyError as ex:
    print( ex )
```

## Discover Available Instructions

```python
from instructions import names

for instruction_name in names( ):
    print( instruction_name )
```

For a modality-specific list:

```python
from instructions import image

for instruction_name in image.names( ):
    print( instruction_name )
```

## Next Steps

- Read [Choosing the Right Module](guides/module-selection.md) before wiring Guro into a multi-modal application.
- Use [Discovery & Dynamic Lookup](guides/discovery.md) for menus, selectors, or configuration-driven prompts.
- See [Integrating with LLM APIs](guides/integration.md) for provider-neutral usage patterns.
- Browse the [full prompt catalog](reference/catalog.md) when selecting a prompt by capability.
