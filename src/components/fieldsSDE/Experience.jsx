import React, { useState } from "react";

const Experience = () => {
  const [activeTab, setActiveTab] = useState("job1");

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
                activeTab === "job1" 
                  ? "text-[#04d9ff] bg-gray-800 border-[#04d9ff] border-opacity-100" 
                  : "text-gray-400 hover:text-[#04d9ff] hover:bg-gray-800 hover:bg-opacity-30"
              }`}
              onClick={() => openTab("job1")}
            >
              Center of Geospatial Analysis
            </button>
            <button
              className={`tab-button text-left py-3 px-4 border-b-2 md:border-b-0 md:border-l-2 border-gray-700 font-mono text-sm transition-all ${
                activeTab === "job2" 
                  ? "text-[#04d9ff] bg-gray-800 border-[#04d9ff] border-opacity-100" 
                  : "text-gray-400 hover:text-[#04d9ff] hover:bg-gray-800 hover:bg-opacity-30"
              }`}
              onClick={() => openTab("job2")}
            >
              Chirpn
            </button>
            <button
              className={`tab-button text-left py-3 px-4 border-b-2 md:border-b-0 md:border-l-2 border-gray-700 font-mono text-sm transition-all ${
                activeTab === "job3" 
                  ? "text-[#04d9ff] bg-gray-800 border-[#04d9ff] border-opacity-100" 
                  : "text-gray-400 hover:text-[#04d9ff] hover:bg-gray-800 hover:bg-opacity-30"
              }`}
              onClick={() => openTab("job3")}
            >
              Accenture
            </button>
            <button
              className={`tab-button text-left py-3 px-4 border-b-2 md:border-b-0 md:border-l-2 border-gray-700 font-mono text-sm transition-all ${
                activeTab === "job4" 
                  ? "text-[#04d9ff] bg-gray-800 border-[#04d9ff] border-opacity-100" 
                  : "text-gray-400 hover:text-[#04d9ff] hover:bg-gray-800 hover:bg-opacity-30"
              }`}
              onClick={() => openTab("job4")}
            >
              Omdena
            </button>
          </div>

          {/* Tab content */}
          <div className="tab-content-container flex-1">
            {/* Job 1 */}
            <div 
              className={`tab-content transition-opacity duration-300 ${
                activeTab === "job1" ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                Graduate Research Assistant{" "}
                <span className="text-[#04d9ff]">@ Center of Geospatial Analysis, NC State</span>
              </h3>
              <p className="text-sm font-mono text-gray-400 mb-4">September 2024 - Present</p>
              <ul className="job-description space-y-2 text-gray-300">
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Improved raster data storage efficiency by <span className="font-medium text-slate-200">25%</span> using quantization algorithms
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Contributing to GRASS GIS open source project, focusing on backend optimization and code quality
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Implemented comprehensive testing suite for geospatial analysis functions
                </li>
              </ul>
            </div>

            {/* Job 2 */}
            <div 
              className={`tab-content transition-opacity duration-300 ${
                activeTab === "job2" ? "block opacity-100" : "hidden opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold text-white mb-1">
                Software Development & Cloud Intern{" "}
                <span className="text-[#04d9ff]">@ Chirpn, San Jose, CA</span>
              </h3>
              <p className="text-sm font-mono text-gray-400 mb-4">June 2024 - Nov 2024</p>
              <ul className="job-description space-y-2 text-gray-300">
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Designed and implemented scalable integration solutions using Node.js/Express, improving system performance by <span className="font-medium text-slate-200">30%</span>
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Integrated React frontend with Python/Node.js backends, improving UI responsiveness by <span className="font-medium text-slate-200">20%</span>
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Automated AWS/GCP resource provisioning using CloudFormation, reducing infrastructure setup time by <span className="font-medium text-slate-200">50%</span>
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Improved Kubernetes cluster resource efficiency by <span className="font-medium text-slate-200">20%</span> while maintaining <span className="font-medium text-slate-200">99.9%</span> uptime
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Integrated OpenAI/Cohere LLMs into backend systems, increasing document processing efficiency by <span className="font-medium text-slate-200">50%</span>
                </li>
                <li className="relative pl-7">
                  <span className="absolute left-0 text-[#04d9ff]">▹</span>
                  Enhanced vector database performance by <span className="font-medium text-slate-200">30%</span> using LanceDB for real-time AI applications
                </li>
              </ul>
            </div>

            {/* Job 3 */}
            <div 
              className={`tab-content transition-opacity duration-300 ${
                activeTab === "job3" ? "block opacity-100" : "hidden opacity-0"
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

            {/* Job 4 */}
            <div 
              className={`tab-content transition-opacity duration-300 ${
                activeTab === "job4" ? "block opacity-100" : "hidden opacity-0"
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