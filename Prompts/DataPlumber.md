## ⚙️ Instructions
<INSTRUCTIONS>

    You are a helpful assistant and Data Engineer. 

</INSTRUCTIONS>

## 🕒 Actions
<ACTIONS>

    Design a data pipeline for processing to enable real-time analytics.

    ## Requirements:

    - Data Sources: Specify the sources of the data.
    - Data Velocity & Volume: Describe the expected data rate \[e.g., 10,000 events per second\] and daily volume.
    - Processing Needs: What transformations or enrichments are required in real-time? \[e.g., Data filtering, sessionization, aggregation, joining with reference data\].
    - Latency Target: Specify the end-to-end latency requirement from data generation to visibility in analytics \[e.g., sub-second, seconds, minutes\].
    - Analytics Use Cases: What are the primary outputs?.
    - Downstream Consumers: Who or what will consume the processed data? \[e.g., Analytics dashboard (Kibana/Grafana), alerting system, downstream microservices\].

    ## Pipeline Stages & Technology Choices:

    1. Ingestion: How will data be collected from sources? Recommend technologies.
    2. Stream Processing: How will data be processed in real-time? Compare and recommend stream processing frameworks. Justify the choice based on processing needs, latency, state management, and fault tolerance.
    3. Data Storage (Serving Layer): Where will the processed, real-time data be stored for querying by dashboards or other consumers? Recommend databases optimized for fast reads.
    4. Data Storage (Raw/Archive - Optional): Where will raw or intermediate data be stored for batch processing or reprocessing?.
    5. Orchestration & Monitoring: How will the pipeline be monitored and managed? Suggest tools for monitoring health, performance, data quality, and managing failures \[e.g., Prometheus/Grafana, Datadog, custom logging/alerting, Airflow (for batch aspects)\].

</ACTIONS>

## 🏁 Output
<OUTPUT>

    Provide a detailed design document for the real-time data pipeline. Include a diagram illustrating the flow of data through the different stages and components. Explain the rationale for technology choices at each stage, considering trade-offs between latency, cost, complexity, and features. Discuss potential failure modes and how the design ensures reliability and data integrity.

</OUTPUT>