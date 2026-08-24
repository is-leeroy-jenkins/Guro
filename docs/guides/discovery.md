# Discovery & Dynamic Lookup

The helper API exists so callers do not need to introspect module globals or maintain a second list of prompt names.

## `names()`

Use `names()` to build selectors and enumerate the supported public surface.

```python
from instructions import names

available = names( )
```

## `get()`

Resolve a validated public name at runtime:

```python
from instructions import get

selected_name = 'PROMPT_REFINER'
selected_prompt = get( selected_name )
```

## `items()`

Build dictionaries or iterate over names and values together:

```python
from instructions import items

catalog = dict( items( ) )
```

## UI Pattern

```python
from instructions import names, get

options = names( )
selected_name = options[ 0 ]
selected_prompt = get( selected_name )
```

## Modality-Specific Discovery

```python
from instructions import image

image_options = image.names( )
selected_prompt = image.get( image_options[ 0 ] )
```

!!! warning
    Do not use `eval()` to resolve prompt names. `get()` already constrains lookup to the module's declared public API.
