import React, { useState } from 'react';
import ProjectCard from "./utils/ProjectCard";

const TabbedProjects = () => {
  const [activeTab, setActiveTab] = useState('backend');
  const [expandedSection, setExpandedSection] = useState('backend');

  const tabs = [
    { id: 'backend', label: 'Backend & Systems' },
    { id: 'ml', label: 'Machine Learning' },
    { id: 'security', label: 'Security' }
  ];

  const projects = {
    backend: [
      {
        title: "Distributed Key-Value Store",
        description: [
          "Implemented a distributed key-value store featuring consistent hashing for data distribution and configurable replication factors",
          "Built a thread-safe storage layer with content type preservation and shard management",
          "Developed comprehensive REST APIs with middleware for request routing and timeout handling",
          "Created extensive test suites covering unit tests, concurrent operations, and system stress testing"
        ],
        url: "https://github.com/arohanajit/Distributed-Hashmap",
        tech_used: ["Golang", "REST APIs", "Consistent Hashing", "Distributed Systems", "Testing"]
      },
      {
        title: "GO Microservices Architecture Framework",
        description: [
          "Built a distributed e-commerce system with 6 microservices including user, product, order, payment, and inventory management",
          "Implemented service discovery and API gateway routing with Consul service registry",
          "Integrated health monitoring, JWT authentication, and database migrations",
          "Orchestrated containerized services using Kubernetes for deployment"
        ],
        url: "https://github.com/arohanajit/GoLang-Distributed-Platform",
        tech_used: ["Golang", "Docker", "PostgreSQL", "Consul", "Kubernetes", "Microservices"]
      },
      {
        title: "Real-Time Polling Engine",
        description: [
          "Developed a real-time polling application using React for the frontend with Tailwind CSS styling",
          "Implemented backend using AWS Lambda functions and Prisma ORM for database management",
          "Integrated Middy middleware for enhanced serverless function capabilities",
          "Created multiple endpoints for room creation, questions, and analytics retrieval"
        ],
        url: "https://github.com/arohanajit/polly",
        tech_used: ["React", "TypeScript", "AWS Lambda", "Prisma", "Serverless"]
      }
    ],
    ml: [
      {
        title: "Neural Face Generation System",
        description: [
          "Developed a Generative Adversarial Network (GAN) for generating realistic human faces",
          "Leveraged TensorFlow/Keras and advanced CNN techniques",
          "Achieved significant improvements in model accuracy through iterative training",
          "Implemented efficient optimization strategies for training stability"
        ],
        url: "https://github.com/arohanajit/face-generation-gan",
        tech_used: ["TensorFlow", "Keras", "GAN", "Deep Learning", "Computer Vision"]
      },
      {
        title: "Neural Text Generation Engine",
        description: [
          "Created an RNN/LSTM model for generating TV scripts in the style of Seinfeld",
          "Utilized PyTorch for model development and training",
          "Reduced loss from 4.74 to approximately 3.00 through optimization",
          "Implemented novel text generation techniques for improved coherence"
        ],
        url: "https://github.com/arohanajit/tv-script-generation",
        tech_used: ["Python", "PyTorch", "RNN", "LSTM", "NLP"]
      },
      {
        title: "Open Source Dataset Pipeline Framework",
        description: [
          "Developed the imgdata Python package for automated image dataset collection",
          "Integrated with popular stock image APIs including Pexels and Unsplash",
          "Implemented automated dataset structuring for train/test/validation splits",
          "Streamlined data preparation process for machine learning projects"
        ],
        url: "https://github.com/arohanajit/imgdata",
        tech_used: ["Python", "Flask", "Django", "API Integration", "Data Pipeline"]
      }
    ],
    security: [
      {
        title: "Healthcare Security Framework",
        description: [
          "Identified and evaluated 8 critical vulnerabilities within the OpenEMR healthcare platform",
          "Led comprehensive threat modeling using STRIDE and LINDDUN GO frameworks",
          "Developed targeted mitigation strategies for vulnerabilities including spoofing and privilege escalation",
          "Enhanced overall security posture through systematic analysis"
        ],
        url: "https://github.com/arohanajit/OpenEMR-Vulnerability-Assessment-Threat-Modeling",
        tech_used: ["OpenEMR", "Threat Dragon", "MITRE ATT&CK", "Security Analysis"]
      },
      {
        title: "Automated Security Testing Platform",
        description: [
          "Automated black box test cases and fuzzing using ZAP to detect vulnerabilities",
          "Implemented vulnerability scanning using GitHub Checker and Snyk",
          "Utilized SpectralOps and Gitleaks to identify exposed API keys and authentication tokens",
          "Recommended cloud-native secret stores for improved security"
        ],
        url: "https://github.com/arohanajit/Interactive-Application-Security-Testing---OpenEMR",
        tech_used: ["OWASP ZAP", "Gitleaks", "Snyk", "SpectralOps", "Security Testing"]
      },
      {
        title: "Network Security Analysis",
        description: [
          "Examined network security within the ncsu.edu domain using Censys and Shodan",
          "Identified vulnerabilities in Apache web servers and WordPress installations",
          "Analyzed operating system distributions and web protocols",
          "Provided actionable recommendations for improved security posture"
        ],
        url: "https://github.com/arohanajit/Network-Security-Analysis-of-NCSU-Domain",
        tech_used: ["Censys", "Shodan", "Python", "Network Security", "Web Security"]
      }
    ]
  };

  return (
    <div id="projects" className="p-[50px] md:pt-[100px] md:pl-[100px]">
      <h2 id="project-title" className="text-3xl font-bold mb-8 text-[#04d9ff]">
        Projects
      </h2>

      {/* Tab Navigation */}
      <div className="flex space-x-4 mb-8 border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            className={`pb-2 px-4 font-medium transition-colors duration-200 ${
              activeTab === tab.id
                ? 'text-[#04d9ff] border-b-2 border-[#04d9ff]'
                : 'text-gray-400 hover:text-[#04d9ff]'
            }`}
            onClick={() => {
              setActiveTab(tab.id);
              setExpandedSection(tab.id);
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Projects Display */}
      <div className="space-y-8">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transition-all duration-300 ${
              activeTab === tab.id ? 'block' : 'hidden'
            }`}
          >
            {projects[tab.id].map((project, index) => (
              <ProjectCard
                key={index}
                project_title={project.title}
                project_description={project.description}
                project_url={project.url}
                tech_used={project.tech_used}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TabbedProjects;