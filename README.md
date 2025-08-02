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

---

## 🧠 Features

- ✅ Task-Specific Prompt Definitions
- ✅ Variable Placeholder Support (`{{variable}}`)
- ✅ Markdown Summaries for Documentation
- ✅ Categorized and Emoji-Labeled
- ✅ Built with RAG & Embedding Pipelines in Mind

---


### Prompt Summaries

#### 📝 [AcademicWriter](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/AcademicWriter.md)

- Acts as both academic writer and research expert, capable of addressing prompts within categories
  A through E by crafting structured, scholarly essays.

#### 📊 [AdaptiveAnalyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/AdaptiveAnalyst.md)

- Generates meeting agendas based on user-provided content marked by double curly braces `{{ }}`.

#### 🎨 [AsciiArtist](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/AsciiArtist.md)

- Produces ASCII art renderings from text-based prompts delimited by `###`.

#### 🧾 [DocumentSummarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/DocumentSummarizer.md)

- Produces concise, entity-dense summaries that distill key content across paragraphs or sections.

#### 📋 [PromptEvaluator](https://github.com/is-leeroy-jenkins/Guro/blob/master/Prompts/PromptEvaluator.md)

- Scores prompt quality using rubrics, offering targeted improvements.

<!-- Add full summaries here if desired -->

\

Full list: [`PROMPTS.md`](./PROMPTS.md)

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





#### 📝 AcademicWriter

- Functions as an Academic Writer famous for their research writing abilities.

#### 📊 AdaptiveAnalyst

- Designed to can create agendas for any meeting.

#### 🧩 AgendaMaker

- Designed to create agendas for any meeting topic.

#### 🧩 ArtsyFartsy

- This role represents a creative graphic artist.

#### 🎨 AsciiArtist

- Acts as both ascii artist.

#### 🧩 AuthorEmulator

- Functions as trained in thousands of writing styles across time periods and.

#### 📊 BudgetAnalyst

- This role represents the most knowledgeable Budget Analyst in the federal government.

#### 📊 BusinessAnalyst

- Designed to can analyze the finances of any public organization.

#### 🗂️ BusinessPlanner

- Functions as a startup consultant, and financial modeling expert with deep domain expertise across
  tech, healthcare, consumer goods, and B2B sectors.

#### 🔍 BusinessResearcher

- Designed to can write an executive summary on anything when given a business name, industry,
  product or service, and timeframe.

#### 🧩 ChainOfDensity

- Functions as with the ability read any given document and provide dense summaries of its subject
  matter.

#### 🧩 ChecklistCreator

- Designed to specializes in creating checklists from a description of a process.

#### 🧐 CodeReviewer

- Acts as both the best code-quality reviewer in the world!.

#### 🧩 CognitiveProfiler

- Acts as both god-tier behavioral analyst.

#### 🔍 CompanyResearcher

- Functions as with analytical skills that can accurately evaluate any public organization/company.

#### 🧩 CourseCreator

- Designed to create a course of study on anything.

#### 🧐 CriticalThinker

- Functions as that engages in extremely thorough, self-questioning reasoning.

#### 🧩 DataCleaner

- Designed to is also an expert Python-developer and data scientist known throughout the world for
  your ability to clean problematic data.

#### 🧩 DataFarmer

- This role represents an expert data analyst and content researcher specialized in tech industry
  trends.

#### 🧩 DataPlumber

- Acts as both Data Engineer.

#### 🧩 DataScientist

- Functions as specializing in providing expertise on data analysis projects.

#### 🧩 DataVisualizer

- Functions as a scientific-data visualizer..

#### 🧩 DatasetAnalyzer

- Acts as both data scientist who can analyze any dataset.

#### 🧩 DecisionMaker

- Designed to helps others in making difficult decisions by using a structured decision-making
  process.

#### 🧩 DependencyIndentifier

- Designed to can identify dependency-chains given a list of project tasks.

#### 🧩 DocumentInterrogator

- Functions as with the ability to generate questions related to any document presented to you
  delimited by ####.

#### 🧾 DocumentSummarizer

- Designed to generate summaries of information (eg, documents, articles, etc. ) .

#### 📝 EducationalWriter

- Functions as an expert educational writer who specializes in designing highly engaging
  instructional blog posts.

#### 🤖 EmailAssistant

- Designed to specializes in automating and improving email responses and messages.

#### 🧩 EntertainmentAdvisor

- Designed to provides entertainment suggestions given a user's mood.

#### 📝 EssayWriter

- Acts as both an experienced essay writer.

#### 🧩 EvaluationExpert

- Functions as an expert tasked with evaluating the quality of a document that summarizes a research
  paper.

#### 🤖 ExecutiveAssistant

- An Executive Assist who excels at providing detailed information requested of them.

#### 💻 ExpertProgrammer

- Hands-down the worlds smartest hacker. **Background:** 👨‍💻🌐🚀.

#### 🔧 FeatureExtractor

- Functions as the best product manager in the world especially when it comes to building great
  products.

#### 🗂️ FinancialPlanner

- Functions as a seasoned financial planner.

#### 🏗️ FormBuilder

- This role is a specialized form generation assistant.

#### 🌍 GeographicGuesser

- Functions as a geography expert with the ability to locate places when provided information
  related to them.

#### 🏗️ HowToBuilder

- This role represents an expert technical writer, educator, and SEO strategist.

#### 🎤 InterviewCoach

- Designed to is an expert at preparing job candidates for a specific role givent the following
  parameters.

#### 📊 InvestmentAnalyst

- Designed to provides the most accurate investment portfolio analysis.

#### 🧩 JackOfAllTrades

- This role represents a jack-of-all-trades with the ability to become an expert or consultant on
  anything.

#### ⚡ KeywordGenerator

- This role represents an expert Search Engine Optimization Strategistc.

#### 🧩 ManagementConsultant

- Functions as a Management Consultant who helps others in making tough decisions using a structured
  decision-making process.

#### 📈 MarketForecaster

- Functions as a Market Forecaster with the ability to forecast emerging trends given an industry, a
  trend or technology, and a problem to solve.

#### 🗂️ MarketPlanner

- Designed as a Market Expert that can create the best marketing plan given any product or service.

#### 🔍 MarketResearcher

- Functions as a Chartered Financial Analyst familiar with all profitable organizations, across all
  sectors of the US economy.

#### 🧙 MathyMagician

- This role is helpful assistant with a knowledge of mathematics that can only be compared to that
  of Leonard Euler's.

#### 🎯 MediaProfileDesigner

- Functions as an elite Social Media Strategist with expertise in personal branding, talent
  acquisition, and digital professional presence.

#### ⚙️ MeetingOptimizer

- Functions as with the ability to optimize the efficiency of any meeting type:.

#### 🧾 MeetingSummarizer

- Designed to can summarize any meeting, recording, or transcript. Follow the instructions below to
  create a summary.

#### 🎓 MultiProfessor

- Functions as a University Professor and their entire department.

#### 🧩 PdfParser

- Designed to parse PDF documents with ease.

#### 🤖 PersonnalAssistant

- Designed to provide guidance, advice, and instructions given any topic or subject {{TOPIC}}.

#### 🧩 PowerPointer

- .

#### 🧠 ProblemSolver

- Designed to assist in solving any problem it is presented with.

#### 🛠️ ProcessEngineer

- Functions as a Systems Engineer known for their incredible process-engineering skills.

#### 🧩 ProjectArchitech

- Designed to specializes in suggesting appropriate software architectures for any project based on
  the project's description.

#### 🗂️ ProjectPlanner

- Acts as both Project Management Consultant.

#### 🧩 PromptEnhancer

- This role represents a helpful assitant with the ability to analyze, enhance, and improve any AI
  prompt presented to you delimited by ###.

#### 📋 PromptEvaluator

- Functions as ad senior prompt engineer participating in the Prompt Evaluation Chain.

#### ⚡ PromptGenerator

- Designed to represent an AI-powered prompt generator.

#### 🧩 PromptRefiner

- Functions as a **senior prompt engineer** participating in a continuous system designed to enhance
  prompt quality through structured, iterative improvements.

#### 🧩 ProofreadingSpecialist

- Functions as an expert proofreader, editor, and writer with advanced proficiency in English
  grammar, structure, and style.

#### 📊 ReasoningAnalyst

- Functions as an analyst trained in the logical dissection of arguments.

#### 🧩 ResearchExpert

- Designed to be the best academic researcher in history with expertise lies in writing,
  interpreting, polishing, and rewriting academic papers.

#### 🧩 ResultsCreator

- Designed to be a product manager who helps others by creating effective OKRs (Objectives and Key
  Results) for a product.

#### 🏗️ ResumeBuilder

- Designed to create resumes that land jobs 100% of the time.

#### 📝 ResumeWriter

- Designed to write a resumes for any job.

#### 🧩 RevenueProjector

- Designed to project the financial status of any company given its name or product line.

#### 🧩 RootCauseAnalyzer

- Designed to identify root causes of problems and issuses.

#### 📝 SearchOptimizedWriter

- Acts as both writer who writes SEO-optimized content such as articles, papers, and essays.

#### ⚙️ SearchOptimizer

- This role represents a helpful assisntant and Search Engine Optimization expert.

#### 📊 SqlAnalyst

- The best data analyst on the planet!

#### 🧐 StrategicThinker

- Designed for strategic reasoning and critical thinking.

#### 🧠 StructuredProblemSolver

- This role represents an expert in structured problem-solving and decision-making.

#### 🗂️ SustainabilityPlanner

- Designed to develop the best sustainability plans when given a company or industry.

#### 🗂️ TaskPlanner

- Designed to creates optimal plans for deep work sessions.

#### 🤖 TeachingAssistant

- The worlds best teaching assistant.

#### 📊 TechSupportAnalyst

- Designed to is the best tech support provider in the world! You can help troubleshoot any
  IT-related issue when given a problem to solve.

#### 🎯 TrainingContentDesigner

- Acts as both expert Instructional Designer and Learning Strategist with 15+ years of experience in
  corporate training, professional development, and adult learning methodologies.

#### 🎯 TrainingPlanDesigner

- Acts as both expert instructional designer specializing in employee training programs across
  multiple industries.

#### 🗂️ TrainingPlanner

- Functions as a helpful assisant who can create an indepth training program given any job, role, or
  department.

#### 🧩 TrainingWheels

- Functions as a specialized assistant tasked with reviewing chatbot responses to identify and flag
  any inaccuracies or hallucinations.

#### 🎯 WebDesigner

- Functions as a world-class UI/UX designer and creative director specializing in user interfaces
  for web and mobile platforms.

#### ⚙️ WebSearchOptimizer

- Functions as a helpful assisntant and Search Engine Optimization expert.

#### ✏️ WritingEditor

- Represents an elite editorial AI designed to refine, proofread, and enhance written content of any
  kind.

#### ✍️ YoutubeScribe

- Analyzes YouTube video transcripts.

#### 🧾 YoutubeSummarizer

- Creates summaries of Youtube videos


## 📝 License

Guro is published under
the [MIT General Public License v3](https://github.com/is-leeroy-jenkins/Guro/blob/main/LICENSE).
