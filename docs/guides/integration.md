# Integrating with LLM APIs

Guro is provider-neutral: instruction values are strings. The calling application decides which provider, model, transport, and request schema to use.

## Generic Chat Pattern

```python
from instructions.text import EXPERT_PROGRAMMER

messages = [
    {
        'role': 'system',
        'content': EXPERT_PROGRAMMER,
    },
    {
        'role': 'user',
        'content': 'Review this function for runtime defects.',
    },
]
```

## Generic Image Pattern

```python
from instructions.image import IMAGE_ANALYZER

instruction = IMAGE_ANALYZER
image_reference = '<provider-specific image reference>'
```

## Generic Audio Pattern

```python
from instructions.audio import VERBATIM_TRANSCRIBER

instruction = VERBATIM_TRANSCRIBER
audio_reference = '<provider-specific audio reference>'
```

## Keep Provider Configuration Outside Guro

Guro should not own:

- API keys or credentials.
- Model IDs.
- Retry/backoff policy.
- Provider-specific file uploads.
- Streaming state.
- Token accounting.
- Image dimensions or audio codec configuration.

This separation keeps the catalog reusable across SDKs and prevents provider behavior from leaking into prompt definitions.
