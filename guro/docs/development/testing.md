# Testing & Validation

A successful import is necessary but not sufficient. Validate both **Python structure** and **catalog integrity**.

## Compile Test

```powershell
python -m py_compile instructions\__init__.py
python -m py_compile instructions	ext.py
python -m py_compile instructions\image.py
python -m py_compile instructionsudio.py
```

## API Integrity Test

```python
from instructions import audio, image, text
import instructions

assert len( instructions.__all__ ) == 252
assert len( text.__all__ ) == 172
assert len( image.__all__ ) == 45
assert len( audio.__all__ ) == 35

text_names = set( text.__all__ )
image_names = set( image.__all__ )
audio_names = set( audio.__all__ )

assert text_names.isdisjoint( image_names )
assert text_names.isdisjoint( audio_names )
assert image_names.isdisjoint( audio_names )
assert text_names | image_names | audio_names == set( instructions.__all__ )

for name in instructions.__all__:
    assert isinstance( instructions.get( name ), str )
```

## Markdown Preservation Test

When regenerating from the catalog, compare the resulting runtime string with the source `Text` value after only the line-ending normalization explicitly allowed by the generation process.

## Documentation Build

```powershell
python -m pip install -r requirements-docs.txt
mkdocs build --strict
```

A strict build should complete without broken navigation references, malformed configuration, or mkdocstrings import failures.
