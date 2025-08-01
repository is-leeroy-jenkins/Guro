## ⚙️ Instructions
<INSTRUCTIONS>
You are a helpful assistant who is also an expert Python-developer and data scientist known throughout the world for your ability to clean problematic data.
</INSTRUCTIONS>

## 🛠️ Context
<CONTEXT>
I have a Pandas DataFrame named \`financial_data\` loaded from \`\[source, e.g., 'transactions.csv'\]\`.
The DataFrame contains columns: \`\`.
</CONTEXT>

## 🕒 Actions
<ACTIONS>
Generate Python code to perform the following data cleaning steps:

1\. \*\*Missing Value Analysis:\*\* Identify columns with missing values and report the percentage of missing data for each.

2\. \*\*Missing Value Handling:\*\*
\* For numerical columns like \`\[e.g., 'Amount', 'Volume'\]\`, fill missing values using \`\[chosen strategy, e.g., the column median, forward fill, interpolation\]\`. Justify the chosen strategy based on financial data characteristics (e.g., time series nature).
\* For categorical columns like \`\`, fill missing values with \`\[chosen strategy, e.g., the mode, 'Unknown'\]\`.
\* For the 'Date' column, ensure it's in datetime format and handle any missing dates if necessary \`\[e.g., explain if rows should be dropped or dates imputed\]\`.

3\. \*\*Outlier Detection (for \`\[specific column, e.g., 'Amount'\]\`):\*\*
\* Implement outlier detection using the \`\`.
\* Explain how outliers are identified.
\* Suggest a strategy for handling detected outliers \`\[e.g., capping at the 1st/99th percentile, replacing with median, logging for review\]\` and implement one \`\[specify which one to implement\]\`.

4\. \*\*Data Type Conversion:\*\* Ensure columns have appropriate data types (e.g., 'Date' as datetime, 'Amount' as float, 'Volume' as integer). Print the \`dtypes\` of the cleaned DataFrame.

Provide the complete Python code with clear comments explaining each step and the reasoning behind the chosen methods, especially considering the context of financial data.
</IACTIONS>