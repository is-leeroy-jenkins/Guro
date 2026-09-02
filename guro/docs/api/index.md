# API Reference

Guro's Python API is deliberately small. The catalog itself consists of constants; four helper functions provide discovery and runtime lookup at package and submodule scope.

| API | Description |
|---|---|
| `names()` | Returns exported names in declaration order. |
| `values()` | Returns prompt strings in declaration order. |
| `items()` | Returns `(name, value)` pairs in declaration order. |
| `get(name)` | Returns a validated public prompt by name or raises `KeyError`. |

Use the package-level API for the complete catalog and the module-level API when the application is modality-specific.
