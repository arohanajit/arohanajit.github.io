import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from "./utils/ProjectCard";
import SkeletonLoader from './utils/SkeletonLoader';

const TabbedProjects = () => {
    const [activeTab, setActiveTab] = useState('backend');
    const [selectedTech, setSelectedTech] = useState('');
    const [isLoading, setIsLoading] = useState(false);
  
    const tabs = [
      { id: 'backend', label: 'Backend & Systems' },
      { id: 'cloud', label: 'Cloud' },
      { id: 'ml', label: 'Machine Learning' },
      { id: 'security', label: 'Security' }
    ];

    const projects = useMemo(() => ({
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
            tech_used: ["Go", "REST API", "Distributed Systems", "System Design", "Concurrent Programming", "Unit Testing"]
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
            tech_used: ["Go", "Docker", "PostgreSQL", "Kubernetes", "Microservices", "Distributed Systems"]
          },
          {
            title: "Distributed Container Platform",
            description: [
              "Architected a production-grade malware scanning service using microservices architecture with Kubernetes orchestration.",
              "Implemented comprehensive monitoring using Prometheus, maintaining 99.9% system availability through Kubernetes probes and achieving sub-2 second response times for file analysis.",
              "Developed core scanning service in Python using microservices architecture.",
              "Implemented distributed processing system handling concurrent file analysis"
            ],
            url: "https://github.com/arohanajit/Malware-Detection-Application",
            tech_used: ["Kubernetes", "Python", "Docker", "Prometheus", "Microservices", "Distributed Systems"]
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
            tech_used: ["React", "TypeScript", "AWS Lambda", "Prisma", "Serverless", "REST API"]
          }
        ],
        cloud: [
          {
            title: "Multi-Cloud Infrastructure Framework",
            description: [
              "Led a project utilizing Locust to stress test an application URL, implementing AWS services like Lambda, S3, and SageMaker for secure file transfer and malware scanning.",
              "Achieved dynamic auto-scaling with HPA on Kubernetes, optimizing for high availability and performance to handle evolving workloads efficiently.",  
            ],
            url: "https://github.com/arohanajit/Malware-Detection-Application/blob/main/Application%20Design%20Document.pdf",
            tech_used: ["AWS Lambda", "AWS S3", "AWS SageMaker", "Kubernetes", "Auto Scaling", "System Design"]
          }
        ],
        ml: [
          {
            title: "Mental Health Prediction Research",
            description: [
              "Designed and implemented neural network architectures (ANN, CNN, RNN) to predict workplace mental health risks, achieving 92.2% accuracy",
              "Streamlined data preprocessing, feature engineering, and model evaluation",
              "Empowered organizations in early intervention strategies",
              "Published in IEEE Xplore"
            ],
            url: "https://ieeexplore.ieee.org/document/9785283",
            tech_used: ["Python", "TensorFlow", "Deep Learning", "Neural Networks", "Data Science", "Machine Learning"]
          },
          {
            title: "A Review of Convolutional Neural Networks",
            description: [
              "Authored a comprehensive review paper on Convolutional Neural Networks (CNNs) examining their architectural evolution, key frameworks, and applications in object detection and image recognition",
              "Analyzed major CNN architectures including LeNet, AlexNet, VGG, GoogleNet, and ResNet",
              "Published in IEEE Xplore with 150 citations"
            ],
            url: "https://ieeexplore.ieee.org/document/9077735",
            tech_used: ["CNN", "Deep Learning", "Computer Vision", "Neural Networks", "TensorFlow", "PyTorch"]
          },
          {
            title: "Neural Face Generation System",
            description: [
              "Developed a Generative Adversarial Network (GAN) for generating realistic human faces",
              "Leveraged TensorFlow/Keras and advanced CNN techniques",
              "Achieved significant improvements in model accuracy through iterative training",
              "Implemented efficient optimization strategies for training stability"
            ],
            url: "https://github.com/arohanajit/face-generation-gan",
            tech_used: ["TensorFlow", "Keras", "GAN", "Deep Learning", "Computer Vision", "CNN"]
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
            tech_used: ["Python", "PyTorch", "RNN", "LSTM", "NLP", "Deep Learning"]
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
            tech_used: ["Python", "Flask", "Django", "REST API", "Machine Learning", "Data Pipeline"]
          }
        ],
        security: [
          {
            title: "Encrypted File Transfer Protocol",
            description: [
              "Developed Encrypted File Transfer Program using Python utilizing AES Encryption",
              "Built upon the encrypted file transfer program, implementing Diffie Hellman Exchange for a more secure encryption",
              "Performed a man-in-middle attack on Diffie Hellman transfer using a proxy server"
            ],
            url: "https://github.com/arohanajit/encrypted-file-transfer",
            tech_used: ["Python", "Cryptography", "Network Security", "AES", "Diffie Hellman", "Security Testing"]
          },
          {
            title: "OpenEMR Security Audit and Remediation",
            description: [
              "Security audit conducted on the OpenEMR application",
              "Vulnerability detection and fixing using manual black-box testing, SAST with SonarQube, DAST with OWASP ZAP",
              "Comprehensive penetration testing implementation"
            ],
            url: "https://github.com/arohanajit/OpenEMR-Security-Audit",
            tech_used: ["SAST", "DAST", "OWASP ZAP", "SonarQube", "Penetration Testing", "Security Analysis"]
          },
          {
            title: "Flatpak Application Security Analysis",
            description: [
              "The analysis focused on evaluating application permissions, sandboxing mechanisms, and potential vulnerabilities",
              "Compared security aspects to traditional package management approaches",
              "Implemented comprehensive security testing framework"
            ],
            url: "https://github.com/arohanajit/Flatpak-Application-Security-Analysis",
            tech_used: ["Linux", "Bash", "GNOME", "Flatpak", "Security Analysis", "System Design"]
          },
          {
            title: "Healthcare Security Framework",
            description: [
              "Identified and evaluated 8 critical vulnerabilities within the OpenEMR healthcare platform",
              "Led comprehensive threat modeling using STRIDE and LINDDUN GO frameworks",
              "Developed targeted mitigation strategies for vulnerabilities including spoofing and privilege escalation",
              "Enhanced overall security posture through systematic analysis"
            ],
            url: "https://github.com/arohanajit/OpenEMR-Vulnerability-Assessment-Threat-Modeling",
            tech_used: ["OpenEMR", "Threat Modeling", "MITRE ATT&CK", "Security Analysis", "Vulnerability Assessment", "Healthcare Security"]
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
            tech_used: ["OWASP ZAP", "Snyk", "DevSecOps", "Security Testing", "Automated Testing", "Vulnerability Assessment"]
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
            tech_used: ["Censys", "Shodan", "Network Security", "Web Security", "Security Analysis", "Vulnerability Assessment"]
          }
        ]
    }), []);
      const allTechnologies = useMemo(() => {
        const techSet = new Set();
        Object.values(projects).forEach(projectList => {
          projectList.forEach(project => {
            project.tech_used.forEach(tech => techSet.add(tech));
          });
        });
        return Array.from(techSet).sort();
      }, [projects]);
    
      const filteredProjects = useMemo(() => {
        if (!selectedTech) return projects[activeTab];
        return projects[activeTab].filter(project => 
          project.tech_used.includes(selectedTech)
        );
      }, [activeTab, selectedTech, projects]);
    
      const handleTabChange = async (tabId) => {
        setIsLoading(true);
        setActiveTab(tabId);
        await new Promise(resolve => setTimeout(resolve, 300));
        setIsLoading(false);
      };
    
      return (
        <div id="projects" className="p-[50px] md:pt-[100px] md:pl-[100px]">
          <h2 className="text-3xl font-bold mb-8 text-[#04d9ff]">
            Projects
          </h2>
    
          <div className="mb-6">
            <select 
              className="bg-gray-700 text-white rounded px-4 py-2"
              value={selectedTech}
              onChange={(e) => setSelectedTech(e.target.value)}
            >
              <option value="">All Technologies</option>
              {allTechnologies.map(tech => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
    
          <div className="flex space-x-4 mb-8 border-b border-gray-700">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`pb-2 px-4 font-medium transition-colors duration-200 ${
                  activeTab === tab.id
                    ? 'text-[#04d9ff] border-b-2 border-[#04d9ff]'
                    : 'text-gray-400 hover:text-[#04d9ff]'
                }`}
                onClick={() => handleTabChange(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
    
          <AnimatePresence mode="wait">
            {isLoading ? (
              <div className="space-y-8">
                {[1, 2, 3].map((i) => (
                  <SkeletonLoader key={i} type="project" />
                ))}
              </div>
            ) : (
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ProjectCard
                      project_title={project.title}
                      project_description={project.description}
                      project_url={project.url}
                      tech_used={project.tech_used}
                    />
                  </motion.div>
                ))}
                {filteredProjects.length === 0 && (
                  <p className="text-gray-400 text-center py-8">
                    No projects found with the selected technology.
                  </p>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      );
    };
    
    export default TabbedProjects;