import React from "react";
import ProjectCard from "../utils/ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="p-[50px] md:pt-[100px] md:pl-[100px]">
      <h2 id="project-title" className="text-3xl font-bold mb-4 text-[#04d9ff]">
        Projects
      </h2>
      
      <ProjectCard
        project_title="Distributed Key-Value Store"
        project_description={[
          "Implemented a distributed key-value store featuring consistent hashing for data distribution and configurable replication factors",
          "Built a thread-safe storage layer with content type preservation and shard management",
          "Developed comprehensive REST APIs with middleware for request routing and timeout handling",
          "Created extensive test suites covering unit tests, concurrent operations, and system stress testing"
        ]}
        project_url="https://github.com/arohanajit/Distributed-Hashmap"
        tech_used={[
          "Golang",
          "REST APIs",
          "Consistent Hashing",
          "Distributed Systems",
          "Testing"
        ]}
      />

      <ProjectCard
        project_title="Real-Time Polling Engine with Cloud Integration"
        project_description={[
          "Developed a real-time polling application using React for the frontend with Tailwind CSS styling",
          "Implemented backend using AWS Lambda functions and Prisma ORM for database management",
          "Integrated Middy middleware for enhanced serverless function capabilities",
          "Created multiple endpoints for room creation, questions, and analytics retrieval"
        ]}
        project_url="https://github.com/arohanajit/polly"
        tech_used={[
          "React",
          "TypeScript",
          "Tailwind CSS",
          "AWS Lambda",
          "Prisma",
          "Serverless"
        ]}
      />

      <ProjectCard
        project_title="GO Microservices Architecture Framework"
        project_description={[
          "Built a distributed e-commerce system with 6 microservices including user, product, order, payment, and inventory management",
          "Implemented service discovery and API gateway routing with Consul service registry",
          "Integrated health monitoring, JWT authentication, and database migrations",
          "Orchestrated containerized services using Kubernetes for deployment"
        ]}
        project_url="https://github.com/arohanajit/GoLang-Distributed-Platform"
        tech_used={[
          "Golang",
          "Docker",
          "PostgreSQL",
          "Consul",
          "Kubernetes",
          "Microservices"
        ]}
      />

      <ProjectCard
        project_title="Healthcare Security Framework"
        project_description={[
          "Identified and evaluated 8 critical vulnerabilities within the OpenEMR healthcare platform",
          "Led comprehensive threat modeling using STRIDE and LINDDUN GO frameworks",
          "Developed targeted mitigation strategies for vulnerabilities including spoofing and privilege escalation",
          "Enhanced overall security posture through systematic analysis and recommendations"
        ]}
        project_url="https://github.com/arohanajit/OpenEMR-Vulnerability-Assessment-Threat-Modeling"
        tech_used={[
          "OpenEMR",
          "Threat Dragon",
          "MITRE ATT&CK",
          "Security Analysis",
          "STRIDE"
        ]}
      />

      <ProjectCard
        project_title="Automated Security Testing Platform"
        project_description={[
          "Automated black box test cases and fuzzing using ZAP to detect vulnerabilities",
          "Implemented vulnerability scanning using GitHub Checker and Snyk",
          "Utilized SpectralOps and Gitleaks to identify exposed API keys and authentication tokens",
          "Recommended cloud-native secret stores for improved security"
        ]}
        project_url="https://github.com/arohanajit/Interactive-Application-Security-Testing---OpenEMR"
        tech_used={[
          "OWASP ZAP",
          "Gitleaks",
          "Snyk",
          "SpectralOps",
          "Security Testing"
        ]}
      />

      <ProjectCard
        project_title="Encrypted File Transfer Protocol"
        project_description={[
          "Developed secure file transfer program using AES Encryption",
          "Implemented Diffie-Hellman Key Exchange for enhanced security",
          "Created proxy server to demonstrate man-in-middle attack scenarios",
          "Analyzed and documented security implications of different encryption approaches"
        ]}
        project_url="https://github.com/arohanajit/encrypted-file-transfer"
        tech_used={[
          "Python",
          "AES Encryption",
          "Diffie-Hellman",
          "Network Security"
        ]}
      />

      <ProjectCard
        project_title="Network Security Analysis of NCSU Domain"
        project_description={[
          "Examined network security within the ncsu.edu domain using Censys and Shodan",
          "Identified vulnerabilities in Apache web servers and WordPress installations",
          "Analyzed operating system distributions and web protocols",
          "Provided actionable recommendations for improved security posture"
        ]}
        project_url="https://github.com/arohanajit/Network-Security-Analysis-of-NCSU-Domain"
        tech_used={[
          "Censys",
          "Shodan",
          "Python",
          "Network Security",
          "Web Security"
        ]}
      />

      <ProjectCard
        project_title="Neural Face Generation System"
        project_description={[
          "Developed a Generative Adversarial Network (GAN) for generating realistic human faces",
          "Leveraged TensorFlow/Keras and advanced CNN techniques",
          "Achieved significant improvements in model accuracy through iterative training",
          "Implemented efficient optimization strategies for training stability"
        ]}
        project_url="https://github.com/arohanajit/face-generation-gan"
        tech_used={[
          "TensorFlow",
          "Keras",
          "GAN",
          "Deep Learning",
          "Computer Vision"
        ]}
      />

      <ProjectCard
        project_title="Neural Text Generation Engine"
        project_description={[
          "Created an RNN/LSTM model for generating TV scripts in the style of Seinfeld",
          "Utilized PyTorch for model development and training",
          "Reduced loss from 4.74 to approximately 3.00 through optimization",
          "Implemented novel text generation techniques for improved coherence"
        ]}
        project_url="https://github.com/arohanajit/tv-script-generation"
        tech_used={[
          "Python",
          "PyTorch",
          "RNN",
          "LSTM",
          "NLP"
        ]}
      />

      <ProjectCard
        project_title="Mental Health Prediction Research"
        project_description={[
          "Designed neural network architectures (ANN, CNN, RNN) for workplace mental health risk prediction",
          "Achieved 92.2% accuracy in mental health risk assessment",
          "Published research findings in IEEE journal",
          "Developed early intervention strategies based on model predictions"
        ]}
        project_url="https://ieeexplore.ieee.org/document/9785283"
        tech_used={[
          "Neural Networks",
          "Machine Learning",
          "Data Analysis",
          "Healthcare AI",
          "Research"
        ]}
      />

      <ProjectCard
        project_title="Open Source Dataset Pipeline Framework"
        project_description={[
          "Developed the imgdata Python package for automated image dataset collection",
          "Integrated with popular stock image APIs including Pexels and Unsplash",
          "Implemented automated dataset structuring for train/test/validation splits",
          "Streamlined data preparation process for machine learning projects"
        ]}
        project_url="https://github.com/arohanajit/imgdata"
        tech_used={[
          "Python",
          "Flask",
          "Django",
          "API Integration",
          "Data Pipeline"
        ]}
      />
    </div>
  );
};

export default Projects;