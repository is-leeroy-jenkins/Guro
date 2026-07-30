###### Guro
![](https://github.com/is-leeroy-jenkins/Guro/blob/master/resources/Images/Github/guro_project.png)

**Guro** is a prompt library designed to supercharge AI agents and assistants
with task-specific personas -ie, total randos. From academic writing to financial analysis, technical support, SEO,
and beyond — Guro provides precision-crafted prompt templates ready to drop into your LLM workflows.



### 🚀 Overview

Guro is a curated library of over **200 specialized prompt personas** structured for compatibility
with OpenAI, Anthropic, Cohere, and other LLM providers. It’s ideal for:

- 🔬 Research Assistants & Academic Writers
- 🧾 Budget Analysts & Financial Planners
- 💼 Resume Builders & Interview Coaches
- 🧠 Critical Thinkers & Strategic Decision Makers
- 🎨 ASCII Artists & Visual Designers
- 🧩 General AI Agents with Task-Scoped Roles

### 📂 Project Structure

```text
Guro/
└── guro/
    ├── __init__.py
    ├── instructions.py
    ├── README.md
    ├── LICENSE
    ├── requirements.txt
    ├── data/
    │   └── Prompts.db
    ├── ipynb/
    │   └── ...
    ├── prompts/
    │   ├── AcademicWriter.md
    │   ├── BudgetAnalyst.md
    │   ├── DataScientist.md
    │   ├── ExpertProgrammer.md
    │   └── ...
    └── resources/
        └── Images/
            └── Github/
                └── guro_project.png
```

### 🐍 Python Instruction Library

The `instructions.py` module exposes the Guro prompt catalog as module-level Python string constants. Each instruction name uses uppercase snake case, while each value retains the original Markdown structure of the corresponding prompt.

The `guro` package exposes the module through `guro/__init__.py`:

```python
from . import instructions

__all__: tuple[ str, ... ] = (
    'instructions',
)
```

Applications can import the instruction catalog with:

```python
from guro import instructions
```

The module supports direct attribute access and provides helper functions for discovery, iteration, and dynamic lookup.

| Member | Purpose |
|---|---|
| `instructions.<NAME>` | Accesses a known instruction directly. |
| `instructions.get(name)` | Retrieves an instruction whose name is determined at runtime. |
| `instructions.names()` | Returns all exported instruction names in declaration order. |
| `instructions.values()` | Returns all exported instruction texts in declaration order. |
| `instructions.items()` | Returns `(name, text)` pairs in declaration order. |
| `instructions.__all__` | Defines the public instruction members exported by the module. |

#### 🎯 Direct Instruction Access

Use direct attribute access when the required instruction is known while writing the application:

```python
from guro import instructions

system_instruction = instructions.ACADEMIC_WRITER

print( system_instruction )
```

#### 🔎 Dynamic Instruction Lookup

Use `get()` when an instruction name comes from configuration, user selection, a database, or another runtime source:

```python
from guro import instructions

instruction_name = 'DATA_SCIENTIST'
system_instruction = instructions.get( instruction_name )

print( system_instruction )
```

An undefined instruction raises `KeyError`:

```python
from guro import instructions

try:
    system_instruction = instructions.get( 'UNDEFINED_INSTRUCTION' )
except KeyError as ex:
    print( ex )
```

#### 📋 Iterate Over Instruction Names

The `names()` function returns the exported instruction names in the same order in which they are declared in `instructions.py`:

```python
from guro import instructions

for instruction_name in instructions.names( ):
    print( instruction_name )
```

This is useful for populating dropdown lists, command-line menus, configuration tools, and user-selectable interfaces.

#### 🔁 Iterate Over Instruction Values

The `values()` function returns each exported instruction text in declaration order:

```python
from guro import instructions

for instruction_text in instructions.values( ):
    print( instruction_text )
```

#### 🧩 Iterate Over Names and Text

Use `items()` when both the instruction name and its Markdown text are required:

```python
from guro import instructions

for instruction_name, instruction_text in instructions.items( ):
    print( f'Instruction: {instruction_name}' )
    print( instruction_text )
    print( )
```

#### 🖥️ Build a User-Selectable Catalog

Instruction names can be displayed to a user and resolved dynamically:

```python
from guro import instructions

available_instructions = instructions.names( )

for index, instruction_name in enumerate( available_instructions, start=1 ):
    print( f'{index}. {instruction_name}' )

selected_index = 1
selected_name = available_instructions[ selected_index - 1 ]
selected_instruction = instructions.get( selected_name )

print( selected_instruction )
```

#### 🗂️ Filter Instructions by Name

Because instruction members use uppercase snake case, they can be filtered predictably:

```python
from guro import instructions

data_instruction_names = tuple(
    name
    for name in instructions.names( )
    if name.startswith( 'DATA_' )
)

for instruction_name in data_instruction_names:
    print( instruction_name )
```

#### 📦 Create a Dictionary Catalog

Use `items()` to create a standard dictionary for filtering, serialization, testing, or UI binding:

```python
from guro import instructions

instruction_catalog = dict( instructions.items( ) )

system_instruction = instruction_catalog[ 'EXPERT_PROGRAMMER' ]

print( system_instruction )
```

#### 🤖 Pass an Instruction to an LLM Client

Instruction values are standard Python strings and can be passed directly as system instructions or system messages:

```python
from guro import instructions

system_instruction = instructions.EXPERT_PROGRAMMER

messages = [
    {
        'role': 'system',
        'content': system_instruction,
    },
    {
        'role': 'user',
        'content': 'Review this Python function for correctness.',
    },
]
```

#### 🧠 Tooling Support

The module-level constants remain visible to IDE completion, static-analysis tools, type checkers, and documentation generators because every instruction is declared as a concrete Python symbol.

The explicit `__all__` tuple defines the supported public instruction catalog, while the helper functions provide a stable interface for iteration and runtime lookup.
___


###### 🌟 [Automation Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/AutomationAnalyst.md)

###### 📊  [Apportionment Processor](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ApportionmentAnalyst.md)

###### 📝 [Academic Writer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/AcademicWriter.md) 
                                                                                                            
###### 📊 [Adaptive Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/AdaptiveAnalyst.md)
                                                                                                            
###### 🎨 [ASCII Artist](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/AsciiArtist.md) 
                                                                                                        
###### 🧩 [Agenda Maker](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/AgendaMaker.md) 

###### 🎯 [Artsy Fartsy](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ArtsyFartsy.md) 

###### 😀 [Author Emulator](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/AuthorEmulator.md) 

###### 🏛️ [Appropriations Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/AppropriationAnalyst.md)
___

###### 🧠 [Budget Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/BudgetAnalyst.md)

###### 🧙 [Budget Gandolf](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/BudgetGandolf.md)

###### 👨‍🚀 [Budget Buddy](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/BudgetBuddy.md)

###### 🕵️ [Business Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/BusinessAnalyst.md)

###### 🗂️ [Business Planner](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/BusinessPlanner.md)

###### 🔍 [Business Researcher](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/BusinessResearcher.md)

###### 📝 [Book Summarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/BookSummarizer.md)

###### 🧠 [Brain Stormer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/BrainStormer.md)

___

###### ⚙️ [Complex Problem Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ComplexProblemAnalyst.md)

###### 🧠 [Chain Of Density](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ChainOfDensity.md)

###### 🧩 [Checklist Creator](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ChecklistCreator.md)

###### 🧐 [Code Reviewer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/CodeReviewer.md)

###### 🌟 [Cognitive Profiler](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/CognitiveProfiler.md)

###### 🔍 [Company Researcher](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/CompanyResearcher.md)

###### 🧠 [Course Creator](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/CourseCreator.md)

###### 🧐 [Critical Thinker](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/CriticalThinker.md)

___

###### 📊 [Data Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/DataAnalyst.md)

###### 🌟 [Data Cleaner](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/DataCleaner.md)

###### 🔎 [Data Farmer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/DataFarmer.md)

###### 🎯 [Data Plumber](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/DataPlumber.md)

###### 🌐 [Data Scientist](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/DataScientist.md)

###### 🌟 [Data Visualizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/DataVisualizer.md)

###### 🧠 [Dataset Analyzer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/DatasetAnalyzer.md)

###### 🧩 [Decision Maker](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/DecisionMaker.md)

###### 🎯  [Dependency Indentifier](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/DependencyIdentifier.md)

###### 🌐 [Document Interrogator](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/DocumentInterrogator.md)

###### 🧾 [Document Summarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/DocumentSummarizer.md)

###### 🎯 [Dashboard Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/DashboardAnalyst.md)

___

###### 🌟 [Excel Ninja](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ExcelNinja.md)

###### 📝 [Educational Writer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/EducationalWriter.md)

###### 🤖 [Email Assistant](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/EmailAssistant.md)

###### 🧩 [Entertainment Advisor](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/EntertainmentAdvisort.md)

###### 📝 [Essay Writer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/EssayWriter.md)

###### 🧩 [Evaluation Expert](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/EvaluationExpert.md)

###### 🤖 [Executive Assistant](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ExecutiveAssistant.md)

###### 💻 [Expert Programmer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ExpertProgrammer.md)

###### 🎯 [Excel Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ExcelAnalyst.md)

###### 📊 [Exploratory Data Analyzer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ExploratoryDataAnalyzer.md)

___

###### 🏗️ [Feature Department](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/FeatureDepartment.md)

###### 🗂️ [Financial Planner](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/FinancialPlanner.md)

###### 🗂️ [Financial Advisor](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/FinancialAdvisor.md)

###### 🗂️ [Financial Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/FinancialAnalyst.md)

###### 🏗️ [Form Builder](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/FormBuilder.md)

###### 🌍 [Geographic Guesser](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/GeographicGuesser.md)

###### 🏗️ [How-To Builder](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/HowToBuilder.md)

###### 🎤 [Interview Coach](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/InterviewCoach.md)

###### 📊 [Investment Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/InvestmentAnalyst.md)

###### 🌟 [Innovation Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/InnovationAnalyst.md)

###### 🧩 [Jack Of All Trades](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/JackOfAllTrades.md)

###### ⚡ [Keyword Generator](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/KeywordGenerator.md)

___

###### ⚙️ [Legal Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/LegalAnalyst.md)

###### 🌐 [Management Consultant](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ManagementConsultant.md)

###### 📈 [Market Forecaster](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/MarketForecaster.md)

###### 🗂️ [Market Planner](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/MarketPlanner.md)

###### 🔍 [Market Researcher](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/MarketResearcher.md)

###### 🧙 [Mathy Magician](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/MathyMagician.md)

###### 🎯 [Media Profile Designer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/MediaProfileDesigner.md)

###### ⚙️ [Meeting Optimizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/MeetingOptimizer.md)

###### 🧾 [Meeting Summarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/MeetingSummarizer.md)

###### 🎓 [Multi Professor](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/MultiProfessor.md)

###### 🧩 [Outlook Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/OutlookAnalyst.md)
___

###### 🎯 [PBI Expert](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/PbiExpert.md)

###### 🧙 [PBI Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/PbiAnalyst.md)

###### 🌐 [PDF Parser](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/PdfParser.md)

###### 🤖 [Personnal Assistant](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/PersonnalAssistant.md)

###### 🧩 [Power Pointer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/PowerPointer.md)

###### 🧠 [Problem Solver](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ProblemSolver.md)

###### 🛠️ [Process Engineer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ProcessEngineer.md)

###### 🧙 [Power Query Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/PowerQueryAnalyst.md)

###### 🎯 [Project Architech](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ProjectArchitect.md)

###### 🗂️ [Project Planner](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ProjectPlanner.md)

###### 🌐 [Prompt Enhancer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/PromptEnhancer.md)

###### 📋 [Prompt Evaluator](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/PromptEvaluator.md)

###### 🧙 [Procurement Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ProcurementAnalyst.md)

###### ⚡ [Prompt Generator](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/PromptGenerator.md)

###### 🛠️ [Prompt Refiner](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/PromptRefiner.md)

###### 🧩 [Proofreading Specialist](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ProofreadingSpecialist.md)

###### 🤖 [Python Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/PythonAnalyst.md)

___

###### 📝 [Random Writer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/RandomWriter.md)

###### 🧠 [Research Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ResearchAnalyst.md)

###### 📊 [Reasoning Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ReasoningAnalyst.md)

###### 🧩 [Research Expert](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ResearchExpert.md)

###### 🌐 [Results Creator](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ResultsCreator.md)

###### 🏗️ [Resume Builder](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ResumeBuilder.md)

###### 📝 [Resume Writer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/ResumeWriter.md)

###### 🧩 [Revenue Projector](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/RevenueProjector.md)

###### ⚡ [Root-Cause Analyzer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/RootCauseAnalyzer.md)

___

###### 🧩 [Red Team Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/RedTeamAnalyst.md)

###### ⚡ [Sentiment Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/SentimentAnalyst.md)

###### ⚙️ [Search Optimizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/SearchOptimizer.md)

###### 📊 [SQL Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/SqlAnalyst.md)

###### 🧐 [Strategic Thinker](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/StrategicThinker.md)

###### 🧠 [Structured Problem Solver](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/StructuredProblemSolver.md)

###### 🗂️ [Sustainability Planner](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/SustainabilityPlanner.md)

###### 🧠 [Speech Writer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/SpeechWriter.md)

###### 🧙 [Statistics Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/StatisticsAnalyst.md)

___

###### 🗂️ [Task Planner](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/TaskPlanner.md)

###### 🤖 [Teaching Assistant](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/TeachingAssistant.md)

###### 📊 [Tech-Support Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/TechSupportAnalyst.md)

###### 🎯 [Training Content Designer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/TrainingContentDesigner.md)

###### 🎯 [Training Plan Designer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/TrainingPlanDesigner.md)

###### 🗂️ [Training Planner](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/TrainingPlanner.md)

###### ⚡ [Training Wheels](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/TrainingWheels.md)

___

###### 🎯 [Wealth Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/WealthAnalyst.md)

###### 🎯 [Web Designer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/WebDesigner.md)

###### ⚙️ [Web Search Optimizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/WebSearchOptimizer.md)

###### ✏️ [Writing Editor](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/WritingEditor.md)

###### 🧙 [What-If Analyst](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/WhatIfAnalyst.md)

###### ✍️ [Youtube Scribe](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/YoutubeScribe.md)

###### 🧾 [Youtube Summarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/YoutubeSummarizer.md)

###### 🧾 [Document Summarizer](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/DocumentSummarizer.md)

###### 📋 [Prompt Evaluator](https://github.com/is-leeroy-jenkins/Guro/blob/master/prompts/PromptEvaluator.md)

___

### 📝 License

Guro is published under
the [MIT General Public License v3](https://github.com/is-leeroy-jenkins/Guro/blob/main/LICENSE).
