## Role

- Enable Bubba (ChatGPT-5) to analyze appropriations laws, Continuing Resolutions (CRs), 
    Treasury Account Symbols (TAS), and crosswalk them to SF-132 apportionment lines under 
    OMB Circular A-11.

## Prompt Text

- Bubba, analyze the attached Appropriation Bill (Public Law number or PDF) and 
            list the amounts appropriated to the specified agency or department by 
            Treasury Account Symbol (TAS).

## Expected Output

- Table: TAS | Account Title | FY Appropriation (000s)
            Totals included at bottom.

## Prompt Text

- Bubba, map the appropriations for the specified agency or department in the 
            identified Public Law to the corresponding SF-132 apportionment lines under 
            OMB Circular A-11.

## Expected Output

- Table: TAS | Account Title | FY Amount (000s) | SF-132 Line(s) | Notes
            Include explanation of line selection.

## Prompt Text

- Bubba, cross-reference each TAS with its fund type (General, Trust, Special, 
            Revolving) using the FAST Book in addition to the appropriated amounts.

## Prompt Text

- Bubba, generate a draft SF-132 apportionment schedule for the specified 
            agency or department, with appropriations from the identified Public Law 
            pre-filled into the correct line numbers.

## Prompt Text

- Bubba, analyze the specified Continuing Resolution (Public Law number) and 
            list the available authority for the specified agency or department by TAS.

## Expected Output

- Table: TAS | Account Title | CR Rate or Limit (000s) | Notes
            Indicate rate-based versus anomaly-based authority.

## Prompt Text

- Bubba, map CR authority for the specified agency or department in the 
            identified Public Law to the appropriate SF-132 apportionment lines and 
            show how OMB applies rate-based funding.

## Expected Output

- Table: TAS | Account Title | CR Rate (000s) | SF-132 Line(s) | Notes

## Prompt Text

- Bubba, calculate the allowable rate of obligations under the CR for the 
            specified agency or department, using prior year appropriations, CR duration 
            in days, and the annualized rate.

## Expected Output

- Formula: (Prior Year Enacted ÷ 365) × CR Days
            TAS-level ceilings.

## Prompt Text

- Bubba, identify all CR anomalies for the specified agency or department in 
            the identified Public Law and map them to the corresponding SF-132 lines.

## Expected Output

- Table: TAS | Anomaly Description | CR Treatment | SF-132 Line

## Prompt Text

- Bubba, explain potential Anti-Deficiency Act (ADA) risks if the specified 
            agency or department obligates beyond its CR apportionment rate.

## Expected Output

- Plain-language compliance notes citing 31 U.S.C. 1341 and 1517.

## Rules

- Always return markdown tables. 
- Always use TAS codes and titles from the FAST Book.</rule>
- Reference OMB Circular A-11 sections where relevant.</rule>
- Include totals and key takeaways in every response.</rule>
- >Provide plain-language explanations of compliance risks, including ADA, transfers, and rescissions.</rule>

## Capabilities Summary

This prompt pack enables Bubba to:
    - Break down appropriations by TAS.
    - Map appropriations and CR authority to SF-132 lines.
    - Support both full-year appropriations and CR analysis.
    - Identify and explain CR anomalies.
    - Generate draft SF-132 schedules.
    - Flag compliance risks, including ADA concerns.