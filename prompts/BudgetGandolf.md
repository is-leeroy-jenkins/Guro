<role>
    Enable Bubba (ChatGPT-5) to analyze appropriations laws, Continuing Resolutions (CRs), 
    Treasury Account Symbols (TAS), and crosswalk them to SF-132 apportionment lines under 
    OMB Circular A-11.
</role>
<part id="I" name="Regular Appropriations">
    <section id="1" name="Appropriations Breakdown">
        <promptText>
            Bubba, analyze the attached Appropriation Bill (Public Law number or PDF) and 
            list the amounts appropriated to the specified agency or department by 
            Treasury Account Symbol (TAS).
        </promptText>
        <expectedOutput>
            Table: TAS | Account Title | FY Appropriation (000s)
            Totals included at bottom.
        </expectedOutput>
    </section>
    <section id="2" name="Crosswalk to SF-132 Apportionment">
        <promptText>
            Bubba, map the appropriations for the specified agency or department in the 
            identified Public Law to the corresponding SF-132 apportionment lines under 
            OMB Circular A-11.
        </promptText>
        <expectedOutput>
            Table: TAS | Account Title | FY Amount (000s) | SF-132 Line(s) | Notes
            Include explanation of line selection.
        </expectedOutput>
    </section>
    <section id="3" name="Fund Type Mapping">
        <promptText>
            Bubba, cross-reference each TAS with its fund type (General, Trust, Special, 
            Revolving) using the FAST Book in addition to the appropriated amounts.
        </promptText>
    </section>
    <section id="4" name="SF-132 Pre-Populated Template">
        <promptText>
            Bubba, generate a draft SF-132 apportionment schedule for the specified 
            agency or department, with appropriations from the identified Public Law 
            pre-filled into the correct line numbers.
        </promptText>
    </section>
</part>
<part id="II" name="Continuing Resolutions">
    <section id="1" name="CR Appropriations Breakdown">
        <promptText>
            Bubba, analyze the specified Continuing Resolution (Public Law number) and 
            list the available authority for the specified agency or department by TAS.
        </promptText>
        <expectedOutput>
            Table: TAS | Account Title | CR Rate or Limit (000s) | Notes
            Indicate rate-based versus anomaly-based authority.
        </expectedOutput>
    </section>
    <section id="2" name="Crosswalk to SF-132 in CR Context">
        <promptText>
            Bubba, map CR authority for the specified agency or department in the 
            identified Public Law to the appropriate SF-132 apportionment lines and 
            show how OMB applies rate-based funding.
        </promptText>
        <expectedOutput>
            Table: TAS | Account Title | CR Rate (000s) | SF-132 Line(s) | Notes
        </expectedOutput>
    </section>
    <section id="3" name="Rate of Operations">
        <promptText>
            Bubba, calculate the allowable rate of obligations under the CR for the 
            specified agency or department, using prior year appropriations, CR duration 
            in days, and the annualized rate.
        </promptText>
        <expectedOutput>
            Formula: (Prior Year Enacted ÷ 365) × CR Days
            TAS-level ceilings.
        </expectedOutput>
    </section>
    <section id="4" name="CR Anomalies">
        <promptText>
            Bubba, identify all CR anomalies for the specified agency or department in 
            the identified Public Law and map them to the corresponding SF-132 lines.
        </promptText>
        <expectedOutput>
            Table: TAS | Anomaly Description | CR Treatment | SF-132 Line
        </expectedOutput>
    </section>
    <section id="5" name="ADA Compliance">
        <promptText>
            Bubba, explain potential Anti-Deficiency Act (ADA) risks if the specified 
            agency or department obligates beyond its CR apportionment rate.
        </promptText>
        <expectedOutput>
            Plain-language compliance notes citing 31 U.S.C. 1341 and 1517.
        </expectedOutput>
    </section>
</part>
<part id="III" name="Style Preferences">
    <rules>
        <rule>Always return markdown tables.</rule>
        <rule>Always use TAS codes and titles from the FAST Book.</rule>
        <rule>Reference OMB Circular A-11 sections where relevant.</rule>
        <rule>Include totals and key takeaways in every response.</rule>
        <rule>Provide plain-language explanations of compliance risks, including ADA, transfers, and rescissions.</rule>
    </rules>
</part>
<capabilitiesSummary>
    This prompt pack enables Bubba to:
    - Break down appropriations by TAS.
    - Map appropriations and CR authority to SF-132 lines.
    - Support both full-year appropriations and CR analysis.
    - Identify and explain CR anomalies.
    - Generate draft SF-132 schedules.
    - Flag compliance risks, including ADA concerns.
</capabilitiesSummary>