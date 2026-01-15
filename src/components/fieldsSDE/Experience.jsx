import React, { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("google");

  const openTab = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div id="experience" className="p-[50px] md:pt-[100px] md:pl-[100px] md:pr-[50px]">
      <h2 id="experience-title" className="text-3xl font-bold mb-8 text-[#04d9ff]">
        Where I've Worked
      </h2>

      <div className="experience-container">
        {/* Tabs navigation */}
        <div className="flex flex-col md:flex-row mb-8">
          <div className="flex flex-row md:flex-col overflow-x-auto md:overflow-visible mb-4 md:mb-0 md:min-w-[200px] md:mr-8">
            <button
              className={`tab-button text-left py-3 px-4 border-b-2 md:border-b-0 md:border-l-2 border-gray-700 font-mono text-sm transition-all ${
                activeTab === "google"
                  ? "text-[#04d9ff] bg-gray-800 border-[#04d9ff] border-opacity-100" 
                  : "text-gray-400 hover:text-[#04d9ff] hover:bg-gray-800 hover:bg-opacity-30"
              }`}
              onClick={() => openTab("google")}
            >
              Google
            </button>
            <button
              className={`tab-button text-left py-3 px-4 border-b-2 md:border-b-0 md:border-l-2 border-gray-700 font-mono text-sm transition-all ${
                activeTab === "yahoo"
                  ? "text-[#04d9ff] bg-gray-800 border-[#04d9ff] border-opacity-100" 
                  : "text-gray-400 hover:text-[#04d9ff] hover:bg-gray-800 hover:bg-opacity-30"
              }`}
              onClick={() => openTab("yahoo")}
            >
              Yahoo
            </button>
            <button
              className={`tab-button text-left py-3 px-4 border-b-2 md:border-b-0 md:border-l-2 border-gray-700 font-mono text-sm transition-all ${
                activeTab === "ncsu"
                  ? "text-[#04d9ff] bg-gray-800 border-[#04d9ff] border-opacity-100"
                  : "text-gray-400 hover:text-[#04d9ff] hover:bg-gray-800 hover:bg-opacity-30"
              }`}
              onClick={() => openTab("ncsu")}
            >
              NC State University
            </button>
            <button
              className={`tab-button text-left py-3 px-4 border-b-2 md:border-b-0 md:border-l-2 border-gray-700 font-mono text-sm transition-all ${
                activeTab === "chirpn"
                  ? "text-[#04d9ff] bg-gray-800 border-[#04d9ff] border-opacity-100"
                  : "text-gray-400 hover:text-[#04d9ff] hover:bg-gray-800 hover:bg-opacity-30"
              }`}
              onClick={() => openTab("chirpn")}
            >
              Chirpn
            </button>
            <button
              className={`tab-button text-left py-3 px-4 border-b-2 md:border-b-0 md:border-l-2 border-gray-700 font-mono text-sm transition-all ${
                activeTab === "accenture"
                  ? "text-[#04d9ff] bg-gray-800 border-[#04d9ff] border-opacity-100" 
                  : "text-gray-400 hover:text-[#04d9ff] hover:bg-gray-800 hover:bg-opacity-30"
              }`}
              onClick={() => openTab("accenture")}
            >
              Accenture
            </button>
            <button
              className={`tab-button text-left py-3 px-4 border-b-2 md:border-b-0 md:border-l-2 border-gray-700 font-mono text-sm transition-all ${
                activeTab === "omdena"
                  ? "text-[#04d9ff] bg-gray-800 border-[#04d9ff] border-opacity-100" 
                  : "text-gray-400 hover:text-[#04d9ff] hover:bg-gray-800 hover:bg-opacity-30"
              }`}
              onClick={() => openTab("omdena")}
            >
              Omdena
            </button>
          </div>

          {/* Tab content */}
          <div className="tab-content-container flex-1">
            {/* Google */}
            <div 
              className={`tab-content transition-opacity duration-300 ${
                activeTab === "google" ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                Software Engineer{" "}
                <span className="text-[#04d9ff]">@ Google</span>
              </h3>
              <p className="text-sm font-mono text-gray-400 mb-4">October 2025 - Present | Seattle, WA</p>
              <ul className="job-description space-y-2 text-gray-300">
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Designed and implemented novel metrics and automated systems for large-scale infrastructure capacity planning, enhancing disaster readiness and enabling proactive resource management.
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Engineered and deployed robust, automated data pipelines using Python to process and analyze large datasets, creating dashboards to visualize key system reliability and capacity metrics for engineering teams.
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Improved software quality and maintainability by refactoring complex, experimental scripts into modular, production-ready libraries with comprehensive testing, adhering to high coding standards.
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Contributed to operational excellence and system reliability through participation in on-call rotations, root cause analysis of production issues, and contributions to technical design reviews.
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Leveraged AI-powered tools for code generation, log analysis, and rapid prototyping to accelerate development cycles and enhance productivity.
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Collaborated effectively in an agile, cross-functional environment on complex projects, contributing to project execution, milestone tracking, and integration of new components into large-scale workflows.
                </li>
              </ul>
            </div>

            {/* Yahoo */}
            <div 
              className={`tab-content transition-opacity duration-300 ${
                activeTab === "yahoo" ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                Software Engineer{" "}
                <span className="text-[#04d9ff]">@ Yahoo</span>
              </h3>
              <p className="text-sm font-mono text-gray-400 mb-4">June 2025 - September 2025 | Mountain View, CA</p>
              <ul className="job-description space-y-2 text-gray-300">
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Tech Stack: Python, Tensorflow, JAVA Rest APIs
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Worked with Mail Intelligence team to identify and implement end to end Agentic AI solutions and workflows
                </li>
              </ul>
            </div>

            {/* NCSU */}
            <div
              className={`tab-content transition-opacity duration-300 ${
                activeTab === "ncsu" ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                Software Developer{" "}
                <span className="text-[#04d9ff]">@ North Carolina State University</span>
              </h3>
              <p className="text-sm font-mono text-gray-400 mb-4">September 2024 - May 2025 | Raleigh, NC</p>
              <ul className="job-description space-y-2 text-gray-300">
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Improving raster data storage efficiency by <span className="font-medium text-slate-200">25%</span> using quantization algorithms, reducing cloud storage costs for large-scale datasets on one of the major open source geospatial analysis software GRASS
                </li>
              </ul>
            </div>

            {/* Chirpn */}
            <div
              className={`tab-content transition-opacity duration-300 ${
                activeTab === "chirpn" ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                Software Development Intern{" "}
                <span className="text-[#04d9ff]">@ Chirpn</span>
              </h3>
              <p className="text-sm font-mono text-gray-400 mb-4">June 2024 - October 2024 | San Jose, CA</p>
              <ul className="job-description space-y-2 text-gray-300">
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Engineered and optimized critical API endpoints using Node.js and Express, improving data processing efficiency by <span className="font-medium text-slate-200">25%</span> and reducing server response times by <span className="font-medium text-slate-200">30%</span>
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Integrated advanced AI models (OpenAI, Cohere) into the backend, boosting document processing and analysis efficiency by <span className="font-medium text-slate-200">50%</span>
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Augmented vector database capabilities by incorporating providers like LanceDB, enhancing data retrieval efficiency by <span className="font-medium text-slate-200">30%</span>
                </li>
              </ul>
            </div>

            {/* Accenture */}
            <div 
              className={`tab-content transition-opacity duration-300 ${
                activeTab === "accenture" ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                Software Development & Security Associate{" "}
                <span className="text-[#04d9ff]">@ Accenture</span>
              </h3>
              <p className="text-sm font-mono text-gray-400 mb-4">May 2021 - July 2023</p>
              <ul className="job-description space-y-2 text-gray-300">
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Built enterprise-grade web applications with Django/React serving <span className="font-medium text-slate-200">10k+</span> monthly users at <span className="font-medium text-slate-200">99.9%</span> uptime
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Led risk and compliance evaluations on 5 different standards including ISO 27001, SWIFT, GDPR
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Managed security controls for hybrid cloud infrastructure spanning <span className="font-medium text-slate-200">300+</span> workstations
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Implemented secure design principles across development lifecycle for global financial infrastructure
                </li>
              </ul>
            </div>

            {/* Omdena */}
            <div 
              className={`tab-content transition-opacity duration-300 ${
                activeTab === "omdena" ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                Machine Learning Engineer{" "}
                <span className="text-[#04d9ff]">@ Omdena</span>
              </h3>
              <p className="text-sm font-mono text-gray-400 mb-4">May 2020 - May 2022</p>
              <ul className="job-description space-y-2 text-gray-300">
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Achieved <span className="font-medium text-slate-200">95%</span> accuracy in BERT-based hate speech detection model for Tamil social media posts
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Boosted pediatric height prediction accuracy from <span className="font-medium text-slate-200">75%</span> to <span className="font-medium text-slate-200">90%</span> using CGM neural networks
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Deployed models via REST APIs, cutting latency by <span className="font-medium text-slate-200">30%</span> through pipeline optimization
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;