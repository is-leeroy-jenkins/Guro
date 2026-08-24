# Text Instructions

`instructions.text` contains **172** prompts used for text-centric work: research, writing, budget and legal analysis, business and finance, software engineering, data analytics and governance, training, planning, and prompt engineering.

## Categories

| Category | Count |
|---|---:|
| Research / Academic | 32 |
| Prompt Engineering | 5 |
| Writing / Administrative | 35 |
| Compliance / Legal / Budget | 9 |
| Business / Finance / Marketing | 19 |
| Software Engineering | 25 |
| Software Engineer | 10 |
| Data Analytics & Governance | 32 |
| Instruction/ Training / Planning | 5 |

## Direct Import

```python
from instructions.text import ACADEMIC_WRITER

system_instruction = ACADEMIC_WRITER
```

## Module-Scoped Lookup

```python
from instructions import text

instruction_name = 'EXPERT_PROGRAMMER'
system_instruction = text.get( instruction_name )
```

## Enumerating Text Prompts

```python
from instructions import text

for name, prompt in text.items( ):
    print( name )
```

## Recommended Uses

- System/developer instructions for LLM conversations.
- Reusable role definitions for internal AI tools.
- Prompt selection controls in Streamlit, Dash, Flask, or desktop applications.
- Configuration-driven agent behavior.
- Evaluation and regression testing of prompt libraries.

!!! tip "Prefer module ownership over name guessing"
    A prompt beginning with `DATA_` is usually text-oriented, but module ownership is authoritative. Use the catalog or the module's `names()` result instead of inferring modality from the constant name.
