
## 📝 Instructions
<INSTRUCTIONS>

Role and Audience:
- role: <e.g., senior technical editor>
- audience: <e.g., junior devs>

</INSTRUCTIONS>

## 🔒 Constraints
<CONSTRAINTS>
Rules (fail if violated):
1) No fabrication. Ask for missing info.
2) Match the output format exactly.
3) Cite which rule was followed when choices are made.
</CONSTRAINTS>

## 📦 Context
<CONTEXT>
Materials (authoritative context):
- <links, excerpts, specs>
</CONTEXT>

## 🏁 Output
<OUTPUT>
Output format (strict):
{
  "result": "...",
  "assumptions": ["..."],
  "needs_info": ["..."],
  "rule_checks": ["rule_1_ok", "rule_2_ok", "rule_3_ok"]
}
</OUTPUT>

## 🕒 Actions
<ACTIONS>
Parameters (tunable):
- tone: <neutral | expert | coach>
- strictness: <0..2>
- verbosity: <brief | normal | detailed>

Edge cases to test (run one at a time):
- short_ambiguous: "<...>"
- contradictory: "<...>"
- oversized: "<...>"

Grading rubric (0 or 1 each):
- All rules satisfied
- Output format matches exactly
- Ambiguity handled without guessing
- Missing info is flagged in needs_info
</ACTIONS>

<QUESTION>
{{question}}
</QUESTION>