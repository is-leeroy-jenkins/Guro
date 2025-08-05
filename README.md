###### Guro
![](https://github.com/is-leeroy-jenkins/Guro/blob/master/Resources/Images/Github/guro_project.png)

**Guro** is a random prompt library designed to supercharge AI agents and assistants
with task-specific personas -ie, total randos. From academic writing to financial analysis, technical support, SEO,
and beyond — Guro provides precision-crafted prompt templates ready to drop into your LLM workflows.



## 🚀 Overview

Guro is a curated library of over **100 specialized prompt personas** structured for compatibility
with OpenAI, Anthropic, Cohere, and other LLM providers. It’s ideal for:

- 🔬 Research Assistants & Academic Writers
- 🧾 Budget Analysts & Financial Planners
- 💼 Resume Builders & Interview Coaches
- 🧠 Critical Thinkers & Strategic Decision Makers
- 🎨 ASCII Artists & Visual Designers
- 🧩 General AI Agents with Task-Scoped Roles

All prompts are encoded with `<INSTRUCTION>` formatting and support dynamic variable injection using
`{{ }}` delimiters.



## 🧠 Features

- ✅ Task-Specific Prompt Definitions
- ✅ Variable Placeholder Support (`{{variable}}`)
- ✅ Markdown Summaries for Documentation
- ✅ Categorized and Emoji-Labeled
- ✅ Built with RAG & Embedding Pipelines in Mind

---



### 🧠 With OpenAI API

```
python
prompt = load_prompt("AcademicWriter")
formatted = prompt.format(topic="climate change", style="APA", length="1500 words")
response = openai.ChatCompletion.create(
  model="gpt-4",
  messages=[{"role": "system", "content": formatted}]
)
```

### 🔗 With LangChain

```
from langchain.prompts import PromptTemplate

template = PromptTemplate.from_file("prompts/AcademicWriter.txt")
chain = LLMChain(llm=OpenAI(), prompt=template)
output = chain.run(topic="economic policy")
```

## 📂 Project Structure

```
Guro/
    ├── prompts/
    │ ├── AcademicWriter.txt
    │ ├── BudgetAnalyst.txt
    │ └── ...
    ├── PROMPTS.md
    ├── README.md
    └── requirements.txt
```

___

#### 🌟 [Automation Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/AutomationAnalyst.md)

#### 📝 [Academic Writer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/AcademicWriter.md) 
                                                                                                            
#### 📊 [Adaptive Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/AdaptiveAnalyst.md)
                                                                                                            
#### 🎨 [ASCII Artist](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/AsciiArtist.md) 
                                                                                                        
#### 🧩 [Agenda Maker](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/AgendaMaker.md) 

#### 🎯 [Artsy Fartsy](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ArtsyFartsy.md) 

#### 😀 [Author Emulator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/AuthorEmulator.md) 
___

#### 🧠 [Budget Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/BudgetAnalyst.md)

#### 📊 [Business Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/BusinessAnalyst.md)

#### 🗂️ [Business Planner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/BusinessPlanner.md)

#### 🔍 [Business Researcher](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/BusinessResearcher.md)

#### 📝 [Book Summarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/BookSummarizer.md)

#### 🧠 [Brain Stormer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/BrainStormer.md)

___

#### ⚙️ [Complex Problem Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ComplexProblemAnalyst.md)

#### 🧠 [Chain Of Density](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ChainOfDensity.md)

#### 🧩 [Checklist Creator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ChecklistCreator.md)

#### 🧐 [Code Reviewer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/CodeReviewer.md)

#### 🌟 [Cognitive Profiler](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/CognitiveProfiler.md)

#### 🔍 [Company Researcher](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/CompanyResearcher.md)

#### 🧠 [Course Creator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/CourseCreator.md)

#### 🧐 [Critical Thinker](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/CriticalThinker.md)

___

#### 📊 [Data Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DataAnalyst.md)

#### 🌟 [Data Cleaner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DataCleaner.md)

#### 🔎 [Data Farmer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DataFarmer.md)

#### 🎯 [Data Plumber](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DataPlumber.md)

#### 🌐 [Data Scientist](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DataScientist.md)

#### 🌟 [Data Visualizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DataVisualizer.md)

#### 🧠 [Dataset Analyzer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DatasetAnalyzer.md)

#### 🧩 [Decision Maker](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DecisionMaker.md)

#### 🎯  [Dependency Indentifier](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DependencyIdentifier.md)

#### 🌐 [Document Interrogator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DocumentInterrogator.md)

#### 🧾 [Document Summarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DocumentSummarizer.md)

___

#### 📝 [Educational Writer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/EducationalWriter.md)

#### 🤖 [Email Assistant](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/EmailAssistant.md)

#### 🧩 [Entertainment Advisor](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/EntertainmentAdvisort.md)

#### 📝 [Essay Writer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/EssayWriter.md)

#### 🧩 [Evaluation Expert](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/EvaluationExpert.md)

#### 🤖 [Executive Assistant](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ExecutiveAssistant.md)

#### 💻 [Expert Programmer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ExpertProgrammer.md)

#### 📊 [Exploratory Data Analyzer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ExploratoryDataAnalyzer.md)
___

#### 🔧 [Feature Extractor](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/FeatureExtractor.md)

#### 🗂️ [Financial Planner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/FinancialPlanner.md)

#### 🏗️ [Form Builder](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/FormBuilder.md)

#### 🌍 [Geographic Guesser](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/GeographicGuesser.md)

#### 🏗️ [How-To Builder](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/HowToBuilder.md)

#### 🎤 [Interview Coach](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/InterviewCoach.md)

#### 📊 [Investment Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/InvestmentAnalyst.md)

#### 🧩 [Jack Of All Trades](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/JackOfAllTrades.md)

#### ⚡ [Keyword Generator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/KeywordGenerator.md)

___

#### ⚙️ [Legal Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/LegalAnalyst.md)

#### 🌐 [Management Consultant](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ManagementConsultant.md)

#### 📈 [Market Forecaster](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MarketForecaster.md)

#### 🗂️ [Market Planner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MarketPlanner.md)

#### 🔍 [Market Researcher](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MarketResearcher.md)

#### 🧙 [Mathy Magician](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MathyMagician.md)

#### 🎯 [Media Profile Designer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MediaProfileDesigner.md)

#### ⚙️ [Meeting Optimizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MeetingOptimizer.md)

#### 🧾 [Meeting Summarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MeetingSummarizer.md)

#### 🎓 [MultiProfessor](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MultiProfessor.md)
___

#### 🌐 [PDF Parser](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PdfParser.md)

#### 🤖 [Personnal Assistant](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PersonnalAssistant.md)

#### 🧩 [Power Pointer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PowerPointer.md)

#### 🧠 [Problem Solver](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ProblemSolver.md)

#### 🛠️ [Process Engineer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ProcessEngineer.md)

#### 🎯 [Project Architech](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ProjectArchitect.md)

#### 🗂️ [Project Planner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ProjectPlanner.md)

#### 🌐 [Prompt Enhancer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PromptEnhancer.md)

#### 📋 [Prompt Evaluator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PromptEvaluator.md)

#### ⚡ [Prompt Generator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PromptGenerator.md)

#### 🛠️ [Prompt Refiner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PromptRefiner.md)

#### 🧩 [Proofreading Specialist](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ProofreadingSpecialist.md)

___

#### 🧠 [Research Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ResearchAnalyst.md)

#### 📊 [Reasoning Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ReasoningAnalyst.md)

#### 🧩 [Research Expert](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ResearchExpert.md)

#### 🌐 [Results Creator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ResultsCreator.md)

#### 🏗️ [Resume Builder](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ResumeBuilder.md)

#### 📝 [Resume Writer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ResumeWriter.md)

#### 🧩 [Revenue Projector](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/RevenueProjector.md)

#### ⚡ [Root-Cause Analyzer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/RootCauseAnalyzer.md)

___

#### 🧩 [Red Team Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/RedTeamAnalyst.md)

#### ⚡ [Sentiment Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/SentimentAnalyst.md)

#### ⚙️ [Search Optimizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/SearchOptimizer.md)

#### 📊 [SQL Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/SqlAnalyst.md)

#### 🧐 [Strategic Thinker](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/StrategicThinker.md)

#### 🧠 [Structured Problem Solver](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/StructuredProblemSolver.md)

#### 🗂️ [Sustainability Planner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/SustainabilityPlanner.md)

___

#### 🗂️ [Task Planner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/TaskPlanner.md)

#### 🤖 [Teaching Assistant](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/TeachingAssistant.md)

#### 📊 [Tech-Support Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/TechSupportAnalyst.md)

#### 🎯 [Training Content Designer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/TrainingContentDesigner.md)

#### 🎯 [Training Plan Designer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/TrainingPlanDesigner.md)

#### 🗂️ [Training Planner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/TrainingPlanner.md)

#### ⚡ [Training Wheels](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/TrainingWheels.md)

___

#### 🎯 [Web Designer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/WebDesigner.md)

#### ⚙️ [Web Search Optimizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/WebSearchOptimizer.md)

#### ✏️ [Writing Editor](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/WritingEditor.md)

#### ✍️ [Youtube Scribe](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/YoutubeScribe.md)

#### 🧾 [Youtube Summarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/YoutubeSummarizer.md)

#### 🧾 [Document Summarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DocumentSummarizer.md)

#### 📋 [Prompt Evaluator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PromptEvaluator.md)

___

## 📝 License

Guro is published under
the [MIT General Public License v3](https://github.com/is-leeroy-jenkins/Guro/blob/main/LICENSE).
