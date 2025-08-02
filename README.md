###### Guro
![](https://github.com/is-leeroy-jenkins/Guro/blob/master/Resources/Images/Github/guro_project.png)

**Guro** is a modular, extensible prompt library designed to supercharge AI agents and assistants
with task-specific personas. From academic writing to financial analysis, technical support, SEO,
and beyond — Guro provides precision-crafted prompt templates ready to drop into your LLM workflows.

---

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

## ⚙️ Usage

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

## 🔗 With LangChain

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


## 🧩 Prompts

#### 📝 [AcademicWriter](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/AcademicWriter.md)

#### 📊 [AdaptiveAnalyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/AdaptiveAnalyst.md)

#### 🎨 [AsciiArtist](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/AsciiArtist.md)

#### 🧩 [AgendaMaker](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/AgendaMaker.md)

#### 🎯 [ArtsyFartsy](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ArtsyFartsy.md)

#### 😀  [AuthorEmulator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/AuthorEmulator.md)
___

#### 📊 [BudgetAnalyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/BudgetAnalyst.md)

#### 📊 [BusinessAnalyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/BusinessAnalyst.md)

#### 🗂️ [BusinessPlanner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/BusinessPlanner.md)

#### 🔍 [BusinessResearcher](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/BusinessResearcher.md)

#### 📝 [BookSummarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/BookSummarizer.md)

___

#### 🧠 [ChainOfDensity](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ChainOfDensity.md)

#### 🧩 [ChecklistCreator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ChecklistCreator.md)

#### 🧐 [CodeReviewer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/CodeReviewer.md)

#### 🌟 [CognitiveProfiler](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/CognitiveProfiler.md)

#### 🔍 [CompanyResearcher](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/CompanyResearcher.md)

#### 🧠 [CourseCreator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/CourseCreator.md)

#### 🧐 [CriticalThinker](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/CriticalThinker.md)

___

#### 🌟 [DataCleaner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DataCleaner.md)

#### 🔎 [DataFarmer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DataFarmer.md)

#### 🎯 [DataPlumber](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DataPlumber.md)

#### 🌐 [DataScientist](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DataScientist.md)

#### 🌟 [DataVisualizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DataVisualizer.md)

#### 🧠 [DatasetAnalyzer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DatasetAnalyzer.md)

#### 🧩 [DecisionMaker](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DecisionMaker.md)

#### 🎯  [DependencyIndentifier](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DependencyIdentifier.md)

#### 🌐 [DocumentInterrogator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DocumentInterrogator.md)

#### 🧾 [DocumentSummarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DocumentSummarizer.md)

___

#### 📝 [EducationalWriter](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/EducationalWriter.md)

#### 🤖 [EmailAssistant](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/EmailAssistant.md)

#### 🧩 [EntertainmentAdvisor](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/EntertainmentAdvisort.md)

#### 📝 [EssayWriter](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/EssayWriter.md)

#### 🧩 [EvaluationExpert](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/EvaluationExpert.md)

#### 🤖 [ExecutiveAssistant](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ExecutiveAssistant.md)

#### 💻 [ExpertProgrammer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ExpertProgrammer.md)

___

#### 🔧 [FeatureExtractor](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/FeatureExtractor.md)

#### 🗂️ [FinancialPlanner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/FinancialPlanner.md)

#### 🏗️ [FormBuilder](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/FormBuilder.md)

#### 🌍 [GeographicGuesser](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/GeographicGuesser.md)

#### 🏗️ [HowToBuilder](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/HowToBuilder.md)

#### 🎤 [InterviewCoach](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/InterviewCoach.md)

#### 📊 [InvestmentAnalyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/InvestmentAnalyst.md)

#### 🧩 [JackOfAllTrades](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/JackOfAllTrades.md)

#### ⚡ [KeywordGenerator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/KeywordGenerator.md)

___

#### 🌐 [ManagementConsultant](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ManagementConsultant.md)

#### 📈 [MarketForecaster](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MarketForecaster.md)

#### 🗂️ [MarketPlanner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MarketPlanner.md)

#### 🔍 [MarketResearcher](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MarketResearcher.md)

#### 🧙 [MathyMagician](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MathyMagician.md)

#### 🎯 [MediaProfileDesigner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MediaProfileDesigner.md)

#### ⚙️ [MeetingOptimizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MeetingOptimizer.md)

#### 🧾 [MeetingSummarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MeetingSummarizer.md)

#### 🎓 [MultiProfessor](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/MultiProfessor.md)
___

#### 🌐 [PdfParser](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PdfParser.md)

#### 🤖 [PersonnalAssistant](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PersonnalAssistant.md)

#### 🧩 [PowerPointer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PowerPointer.md)

#### 🧠 [ProblemSolver](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ProblemSolver.md)

#### 🛠️ [ProcessEngineer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ProcessEngineer.md)

#### 🎯 [ProjectArchitech](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ProjectArchitect.md)

#### 🗂️ [ProjectPlanner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ProjectPlanner.md)

#### 🌐 [PromptEnhancer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PromptEnhancer.md)

#### 📋 [PromptEvaluator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PromptEvaluator.md)

#### ⚡ [PromptGenerator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PromptGenerator.md)

#### 🛠️ [PromptRefiner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PromptRefiner.md)

#### 🧩 [ProofreadingSpecialist](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ProofreadingSpecialist.md)

___

#### 📊 [ReasoningAnalyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ReasoningAnalyst.md)

#### 🧩 [ResearchExpert](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ResearchExpert.md)

#### 🌐 [ResultsCreator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ResultsCreator.md)

#### 🏗️ [ResumeBuilder](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ResumeBuilder.md)

#### 📝 [ResumeWriter](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/ResumeWriter.md)

#### 🧩 [RevenueProjector](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/RevenueProjector.md)

#### ⚡ [RootCauseAnalyzer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/RootCauseAnalyzer.md)

___

#### 📝 [SearchOptimizedWriter](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/SearchOptimizedWriter.md)

#### ⚙️ [SearchOptimizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/SearchOptimizer.md)

#### 📊 [SqlAnalyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/SqlAnalyst.md)

#### 🧐 [StrategicThinker](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/StrategicThinker.md)

#### 🧠 [StructuredProblemSolver](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/StructuredProblemSolver.md)

#### 🗂️ [SustainabilityPlanner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/SustainabilityPlanner.md)

___

#### 🗂️ [TaskPlanner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/TaskPlanner.md)

#### 🤖 [TeachingAssistant](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/TeachingAssistant.md)

#### 📊 [TechSupportAnalyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/TechSupportAnalyst.md)

#### 🎯 [TrainingContentDesigner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/TrainingContentDesigner.md)

#### 🎯 [TrainingPlanDesigner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/TrainingPlanDesigner.md)

#### 🗂️ [TrainingPlanner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/TrainingPlanner.md)

#### ⚡ [TrainingWheels](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/TrainingWheels.md)

___

#### 🎯 [WebDesigner](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/WebDesigner.md)

#### ⚙️ [WebSearchOptimizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/WebSearchOptimizer.md)

#### ✏️ [WritingEditor](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/WritingEditor.md)

#### ✍️ [YoutubeScribe](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/YoutubeScribe.md)

#### 🧾 [YoutubeSummarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/YoutubeSummarizer.md)

#### 🧾 [DocumentSummarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DocumentSummarizer.md)

#### 📋 [PromptEvaluator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PromptEvaluator.md)

___

## 📝 License

Guro is published under
the [MIT General Public License v3](https://github.com/is-leeroy-jenkins/Guro/blob/main/LICENSE).
