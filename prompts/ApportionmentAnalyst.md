# 📊 Master Appropriations & CR Prompt Pack

**Purpose:**  
Use this pack to get Bubba (ChatGPT) to analyze **appropriations laws, Continuing Resolutions (CRs), Treasury Account Symbols (TAS),**  
and map them to **SF-132 apportionment lines** under OMB Circular A-11.  

---

## 🟢 Part I: Regular Appropriations (Full-Year)

### 1. Appropriations Breakdown
Prompt:
> Bubba, can you analyze the attached Appropriation Bill [Public Law # / PDF] and list the amounts  
> appropriated to the **[Agency/Department Name]** by Treasury Account Symbol (TAS)?  

Output:
- Table: `TAS | Account Title | FY Appropriation (000s)`  
- Totals at bottom.  

---

### 2. Crosswalk to SF-132 Apportionment
Prompt:
> Bubba, can you map the appropriations for [Agency/Department] in [Public Law #] to their  
> corresponding **SF-132 apportionment lines** under OMB Circular A-11?  

Output:
- Table: `TAS | Account Title | FY Amount (000s) | SF-132 Line(s) | Notes`  
- Explanation of why each TAS maps to a given line.  

---

### 3. Fund Type Mapping
Prompt:
> Bubba, can you cross-reference each TAS with its **fund type** (General, Trust, Special, Revolving)  
> from the FAST Book in addition to appropriations amounts?  

---

### 4. SF-132 Pre-Populated Template
Prompt:
> Bubba, can you generate a **draft SF-132 apportionment schedule** for [Agency/Department] with the  
> appropriations from [Public Law #] pre-filled into the correct line numbers?  

---

## 🟡 Part II: Continuing Resolutions (CRs)

### 1. CR Appropriations Breakdown
Prompt:
> Bubba, can you analyze [Continuing Resolution name/Public Law #] and list the amounts (or authority)  
> available to the **[Agency/Department Name]** by Treasury Account Symbol (TAS)?  

Output:
- Table: `TAS | Account Title | CR Rate or Limit (000s) | Notes`  
- Indicate whether rate-based or anomaly-based authority.  

---

### 2. Crosswalk to SF-132 (CR Context)
Prompt:
> Bubba, can you map the CR authority for [Agency/Department] in [Public Law #] to the correct  
> SF-132 apportionment lines, showing how OMB applies rate-based funding?  

Output:
- Table: `TAS | Account Title | CR Rate (000s) | SF-132 Line(s) | Notes`.  

---

### 3. Rate of Operations
Prompt:
> Bubba, can you calculate the allowable rate of obligations under the CR for [Agency/Department],  
> assuming prior year appropriations = [$X], CR duration = [Y days], and annualized rate = [$Z]?  

Output:
- Formula breakdown: `(Prior Year Enacted ÷ 365) × CR days`.  
- TAS-by-TAS ceilings.  

---

### 4. CR Anomalies
Prompt:
> Bubba, can you identify all **CR anomalies** (exceptions) for [Agency/Department] in [Public Law #],  
> and map them to the appropriate SF-132 lines?  

Output:
- Table: `TAS | Anomaly Description | CR Treatment | SF-132 Line`.  

---

### 5. ADA (Anti-Deficiency Act) Compliance under CR
Prompt:
> Bubba, can you explain the potential **Anti-Deficiency Act (ADA) risks** if [Agency/Department] obligates  
> beyond its CR apportionment rate?  

Output:
- Plain-English compliance notes.  
- Cite **31 U.S.C. §§ 1341, 1517**.  

---

## 🟣 Part III: Style Preferences (Applies to Both)
- Always return **markdown tables**.  
- Always use **TAS codes and titles** from FAST Book.  
- Reference **OMB Circular A-11** sections when explaining SF-132 lines.  
- Totals and **key takeaways** at the end of each response.  
- Include plain-English explanations of compliance risks (ADA, transfers, rescissions).  

---

✅ With this Master Pack you can:  
- Break down appropriations by TAS,  
- Map to SF-132 lines,  
- Handle **both full-year appropriations and CRs**,  
- Identify CR anomalies,  
- Generate draft SF-132s,  
- Flag ADA risks.  




