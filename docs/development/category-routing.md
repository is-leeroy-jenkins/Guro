# Category Routing

Category routing determines module ownership. It is not a fuzzy classification step during runtime; it is a maintenance rule applied when the catalog is generated or updated.

## Routing Table

| Categories | Module |
|---|---|
| Research / Academic; Prompt Engineering; Writing / Administrative; Compliance / Legal / Budget; Business / Finance / Marketing; Software Engineering; Software Engineer; Data Analytics & Governance; Instruction/ Training / Planning | `text.py` |
| Image Generation; Image Analysis; Image Editing | `image.py` |
| Translation API; Transcription API; Speech API | `audio.py` |

## New Category Checklist

When introducing a new category:

1. decide its owning modality explicitly;
2. update the routing table in generation tooling;
3. regenerate affected modules;
4. confirm no prompt became uncategorized;
5. confirm no prompt is exported by two modality modules;
6. update this documentation and the catalog page.
