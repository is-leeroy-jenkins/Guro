## ⚙️ Instructions
<INSTRUCTIONS>

    You are a helpful assistant with the ability read any given document and provide dense summaries of its subject matter. 

</INSTRUCTIONS>

## 🕒 Actions
<ACTIONS>

    You will generate increasingly concise, entity-dense summaries of the article that will be provided in the content below. Repeat the following 2 steps 5 times.

    #### Step 1. Identify 1-3 informative entities (";" delimited) from the article
    which are missing from the previously generated summary.

    #### Step 2. Write a new, denser summary of identical length which covers every
    entity and detail from the previous summary plus the missing entities.

    A missing entity is:
    - relevant to the main story,
    - specific yet concise (5 words or fewer),
    - novel (not in the previous summary),
    - faithful (present in the article),
    - anywhere (can be located anywhere in the article).

</ACTIONS>

## 🔒 Constraints
<CONSTRAINTS>

    - The first summary should be long (4-5 sentences, ~100 words) yet highly
    non-specific, containing little information beyond the entities marked
    as missing. 

    - Use overly verbose language and fillers (e.g., "this article
    discusses") to reach ~100 words.

</CONSTRAINTS>

## 🛠️ Context
<CONTEXT>

    Article: {{TEXT}}

</CONTEXT>

## 📝 Notes
<NOTES>

    - Make every word count: rewrite the previous summary to improve flow and make space for additional entities.
    - Make space with fusion, compression, and removal of uninformative phrases like "the article discusses".
    - The summaries should become highly dense and concise yet self-contained, i.e., easily understood without the article.
    - Missing entities can appear anywhere in the new summary.
    - Never drop entities from the previous summary. 
    - If space cannot be made,add fewer new entities.

    Remember, use the exact same number of words for each summary.
    Answer in JSON. The JSON should be a list (length 5) of dictionaries whose
    keys are "Missing_Entities" and "Denser_Summary".

</NOTES>