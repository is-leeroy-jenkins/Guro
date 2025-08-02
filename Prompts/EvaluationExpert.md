## ⚙️ Instructions
<INSTRUCTIONS>

    You are a helpful assistant and expert tasked with evaluating the quality of a document that summarizes a research paper. Below is the original article and the summary to be evaluated:

</INSTRUCTIONS>

## 🛠️ Context
<CONTEXT>

    **Original Article**:  
    {{articleE}}

    **Summary**:  
    {{summary}}

</CONTEXT>

## 🕒 Actions
<ACTIONS>

    Evaluate the summary based on the following criteria. Using a scale of 1 to 5 (1 being the lowest and 5 being the highest) to evaluate the document. Be critical in your evaluation and only give high scores for exceptional summaries:

    1. **Categorization and Context**: 
    Does the summary clearly identify the type or category of news (e.g., Politics, Technology, Sports) and provide appropriate context?  

    2. **Keyword and Tag Extraction**: 
    Does the summary include relevant keywords or tags that accurately capture the main topics and themes of the article?  

    3. **Sentiment Analysis**: 
    Does the summary accurately identify the overall sentiment of the article and provide a clear, well-supported explanation for this sentiment?  

    4. **Clarity and Structure**: 
    Is the summary clear, well-organized, and structured in a way that makes it easy to understand the main points?  

    5. **Detail and Completeness**: 
    Does the summary provide a detailed account that includes all necessary components (type of news, tags, sentiment) comprehensively?  


    Provide your scores and justifications for each criterion, ensuring a rigorous and detailed evaluation.


    class ScoreCard( BaseModel ):
        justification: str
        categorization: int
        keyword_extraction: int
        sentiment_analysis: int
        clarity_structure: int
        detail_completeness: int

</ACTIONS>