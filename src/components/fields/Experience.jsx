import React from "react";
import ExperienceCard from "../utils/ExperienceCard";

const Experience = () => {
  return (
    <div
      id="experience"
      className="p-[50px] md:pt-[100px] md:pl-[100px] md:pr-[50px]"
    >
      <h2
        id="experience-title"
        class="font-bold uppercase pb-[20px] text-[#01e2c7]"
      >
        Experience
      </h2>

      <ExperienceCard
        timeline="Dec 2023 - Current"
        role="Software Engineer"
        name="Moise A. Khayrallah Center (NCSU)"
        description={[
          <>
            Enhanced user search experience by architecting an autocomplete
            feature with Elasticsearch Completion Suggester, and efficiently
            migrated{" "}
            <span className="font-medium text-slate-200">
              250,000 documents
            </span>{" "}
            to a new index using the Bulk API and Scroll method.
          </>,
          <>
            Developing an{" "}
            <span className="font-medium text-slate-200">
              Arabic-focused LLM
            </span>{" "}
            to introduce advanced features like article summarization and
            interactive queries, aimed at enhancing user interaction and content
            accessibility.
          </>,
          <>
            Optimized document processing, reducing time per document from{" "}
            <span className="font-bold text-teal-300">
              1,440 to 28.8 minutes
            </span>{" "}
            by leveraging Celery and asynchronous processing.
          </>,
          <>
            Implemented{" "}
            <span className="font-medium text-slate-200">ElasticSearch</span>{" "}
            and integrated Google Analytics for enhanced text search and user
            insights.
          </>,
          <>
            Utilized <span className="font-medium text-slate-200">AWS</span>,
            incorporating EC2 for computing and S3 for data storage, to
            strengthen infrastructure scalability and reliability.
          </>,
        ]}
        skills={[
          "ElasticSearch",
          "FastAPI",
          "PostgreSQL",
          "RESTful API Web Services",
          "Celery",
          "AWS",
        ]}
        link="https://arabicsearch.org/home"
      />

      <ExperienceCard
        timeline="July 2021 - July 2023"
        role="Software Engineer"
        name="JPMorgan Chase & Co."
        description={[
          <>
            Designed and implemented a Notional service using Python Bottle
            framework, serving{" "}
            <span className="font-medium text-slate-200">seven</span> systems
            and calculating critical intraday and end-of-the-day notional values
            for approximately{" "}
            <span className="font-medium text-slate-200">500K</span> daily
            executed trades.
          </>,
          <>
            Decoupled reg assessment from trade booking using{" "}
            <span className="font-medium text-slate-200">
              event-driven architecture
            </span>
            , eliminating single point of failures and time-outs due to
            dependencies on external services which significantly improved
            booking efficiency by{" "}
            <span className="font-bold text-teal-300">80%</span>.
          </>,
          <>
            Built Smart Reg - regulatory reporting framework using React Native,{" "}
            <span className="font-bold text-teal-300">
              reducing SDLC duration by 87%
            </span>{" "}
            for data quality changes and creating a scalable, configurable
            platform for all jurisdictions, enabling quick onboarding of new
            reports.
          </>,
          <>
            Optimized trade booking workflow by implementing non-persistent
            session-based TTL (time to live) caching for ’Can I Transact’ checks
            executed during trade booking,{" "}
            <span className="font-bold text-teal-300">
              reducing booking time by 60%
            </span>
            .
          </>,
        ]}
        skills={[
          "Python",
          "Optimization",
          "Unit/Integration Testing",
          "Test Driven Development",
          "Equity Derivatives",
          "Equity Trading",
        ]}
      />

      <ExperienceCard
        timeline="Jan 2021 - July 2021"
        role="Software Engineer Intern"
        name="JPMorgan Chase & Co."
        description={[
          <>
            Constructed an internal reconciliation system that generates and
            transfers daily end-of-day reports for{" "}
            <span className="font-medium text-slate-200">
              1.5M trade life-cycle events
            </span>
            , ensuring accurate trade state and valuation data is available for
            business continuity.
          </>,
          <>
            Developed a{" "}
            <span className="font-medium text-slate-200">REST API</span> based
            client for the ’Can I Transact’ service, enabling pre-trade checks
            and post-trade reporting checks for{" "}
            <span className="font-medium text-slate-200">
              Equities, FX, and Rates trades
            </span>
            .
          </>,
        ]}
        skills={["Python", "Bottle", "RESTful API Web Services"]}
      />
    </div>
  );
};

export default Experience;
