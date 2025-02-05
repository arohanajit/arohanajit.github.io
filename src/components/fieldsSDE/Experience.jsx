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
        className="text-3xl font-bold mb-4 text-[#04d9ff]"
      >
        Experience
      </h2>

      <ExperienceCard
        timeline="June 2024 - Present"
        role="Software Development & Cloud Intern"
        name="Chirpn, San Jose, CA"
        description={[
          <>
            Designed and implemented scalable integration solutions using Node.js/Express, improving system performance by <span className="font-medium text-slate-200">30%</span>
          </>,
          <>
            Integrated React frontend with Python/Node.js backends, improving UI responsiveness by <span className="font-medium text-slate-200">20%</span>
          </>,
          <>
            Automated AWS/GCP resource provisioning using CloudFormation, reducing infrastructure setup time by <span className="font-medium text-slate-200">50%</span>
          </>,
          <>
            Improved Kubernetes cluster resource efficiency by <span className="font-medium text-slate-200">20%</span> while maintaining <span className="font-medium text-slate-200">99.9%</span> uptime
          </>,
          <>
            Integrated OpenAI/Cohere LLMs into backend systems, increasing document processing efficiency by <span className="font-medium text-slate-200">50%</span>
          </>,
          <>
            Enhanced vector database performance by <span className="font-medium text-slate-200">30%</span> using LanceDB for real-time AI applications
          </>
        ]}
        skills={[
          "Node.js",
          "React",
          "AWS",
          "GCP",
          "Kubernetes",
          "Docker",
          "LLMs",
          "CloudFormation",
          "CI/CD"
        ]}
      />

      <ExperienceCard
        timeline="September 2024 - Present"
        role="Graduate Research Assistant"
        name="Center of Geospatial Analysis, NC State"
        description={[
          <>
            Improved raster data storage efficiency by <span className="font-medium text-slate-200">25%</span> using quantization algorithms
          </>,
          <>
            Contributing to GRASS GIS open source project, focusing on backend optimization and code quality
          </>,
          <>
            Implemented comprehensive testing suite for geospatial analysis functions
          </>
        ]}
        skills={[
          "Python",
          "Geospatial Analysis",
          "Open Source",
          "Testing",
          "Optimization"
        ]}
      />

      <ExperienceCard
        timeline="May 2021 - July 2023"
        role="Software Development & Security Associate"
        name="Accenture"
        description={[
          <>
            Built enterprise-grade web applications with Django/React serving <span className="font-medium text-slate-200">10k+</span> monthly users at <span className="font-medium text-slate-200">99.9%</span> uptime
          </>,
          <>
            Led risk and compliance evaluations on 5 different standards including ISO 27001, SWIFT, GDPR
          </>,
          <>
            Managed security controls for hybrid cloud infrastructure spanning <span className="font-medium text-slate-200">300+</span> workstations
          </>,
          <>
            Implemented secure design principles across development lifecycle for global financial infrastructure
          </>
        ]}
        skills={[
          "Django",
          "React",
          "Security",
          "Compliance",
          "Cloud Infrastructure",
          "PostgreSQL"
        ]}
      />

      <ExperienceCard
        timeline="May 2020 - May 2022"
        role="Machine Learning Engineer"
        name="Omdena"
        description={[
          <>
            Achieved <span className="font-medium text-slate-200">95%</span> accuracy in BERT-based hate speech detection model for Tamil social media posts
          </>,
          <>
            Boosted pediatric height prediction accuracy from <span className="font-medium text-slate-200">75%</span> to <span className="font-medium text-slate-200">90%</span> using CGM neural networks
          </>,
          <>
            Deployed models via REST APIs, cutting latency by <span className="font-medium text-slate-200">30%</span> through pipeline optimization
          </>
        ]}
        skills={[
          "Machine Learning",
          "BERT",
          "Neural Networks",
          "REST APIs",
          "Python",
          "Pipeline Optimization"
        ]}
      />
    </div>
  );
};

export default Experience;