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
        class="font-bold uppercase pb-[20px] text-[#04c1e2]"
      >
        Experience
      </h2>
      <ExperienceCard
        timeline="June 2024 - Present"
        role="Software Development Intern"
        name="Chirpn, San Jose, CA"
        description={[
          <>
            Developed and optimized critical API endpoints using <span className="font-medium text-teal-300">Node.js and Express</span>, improving data processing efficiency by <span className="font-medium text-slate-200">25%</span> and reducing server response times by <span className="font-medium text-slate-200">30%</span>
          </>,
          <>
            Collaborated with cross-functional teams to integrate <span className="font-medium text-teal-300">React components</span> with backend APIs, enhancing user interface responsiveness and reducing load times by <span className="font-medium text-slate-200">20%</span>
          </>,
          <>
            Managed and optimized database schemas using <span className="font-medium text-teal-300">Prisma ORM and MySQL</span>, leading to a <span className="font-medium text-slate-200">15%</span> improvement in query performance and ensuring data integrity.
          </>,
          <>
            Containerized applications using <span className="font-medium text-teal-300">Docker</span> and orchestrated with <span className="font-medium text-teal-300">Kubernetes</span>, reducing deployment time by <span className="font-medium text-slate-200">30%</span> and ensuring consistent performance across environments
          </>,
          <>
            Implemented robust error handling and logging mechanisms, improving system reliability and facilitating faster issue resolution.
          </>,
          <>
            Set up <span className="font-medium text-teal-300">Azure Active Directory</span> from scratch, integrating <span className="font-medium text-teal-300">RBAC</span> functionalities for more than <span className="font-medium text-slate-200">10 roles</span>
          </>,
        ]}
        skills={[
          "Node.js",
          "Express",
          "React",
          "Docker",
          "Azure",
          "Cloud",
          "Prisma ORM",
          "API Development",
          "Full-stack Development"
        ]}
      />

      <ExperienceCard
        timeline="August 2024 - Present"
        role="Graduate Research Assistant"
        name="Center for Geospatial Analytics, NC State, Raleigh, NC"
        description={[
          <>
            Enhanced GRASS GIS's ability to handle floating-point maps by working with quantization algorithms for raster data processing..
          </>,
          <>
            Improved code quality by eliminating Ruff and Flake8 errors, ensuring adherence to PEP 8 standards and contributing to overall project maintainability
          </>,
          <>
            Developed robust middleware solutions for API request validation and user authentication, ensuring <span className="font-medium text-slate-200">100% compliance</span> with security standards.
          </>,
          <>
            Collaborated with a team to optimize large-scale data processing algorithms, resulting in a 40% reduction in computation time for complex geospatial analyses
          </>,
        ]}
        skills={[
          "Python",
          "AWS",
          "React",
          "Docker",
          "API Development",
          "Backend Development",
          "Debugging"
        ]}
      />

      <ExperienceCard
        timeline="May 2021 - July 2023"
        role="Software Development Associate"  
        name="Accenture"
        description={[
          <>
          Developed and maintained scalable, high-performance web applications using Java Spring Boot for the backend and ReactJS for the frontend, handling over 100,000 daily user requests with 99.99% uptime
          </>,
          <>
          Implemented microservices architecture using Spring Cloud, improving system modularity and enabling independent scaling of application components
          </>,
          <>
          Utilized Django's ORM and REST framework to build scalable and secure backend systems, handling over <span className="font-medium text-slate-200">10,000 monthly user requests</span> with a <span className="font-medium text-slate-200">99.9% uptime</span>
          </>,
          <>
          Built robust RESTful APIs, reducing frontend-backend interaction latency by 15% and improving overall application performance.
          </>,
          <>
          Streamlined Agile methodologies and CI/CD practices to streamline development processes, resulting in a 30% increase in team productivity.
          </>,
          <>
          Collaborated with cross-functional teams to design and implement secure payment processing features, ensuring PCI DSS compliance
          </>,
        ]}
        skills={[
          "Python",
          "ReactJS",
          "MongoDB",
          "Django",
        ]}
      />


      <ExperienceCard
        timeline="September 2018 - June 2021"
        role="Web Developer"  
        name="Entreprenuership Cell, KIIT University"
        description={[
          <>
          Developed and maintained the college entrepreneurship cell website, responsible for handling traffic ranging from <span className="font-medium text-slate-200">500 to 2000 daily hits</span>
          depending on events
          </>,
          <>
          Built and deployed separate websites for various events hosted by the cell, ensuring a smooth user experience.
          </>,
          <>
          Utilized  <span className="font-medium text-teal-300">MongoDB and Node.js</span> for backend development, showcasing proficiency in building robust and scalable web applications.
          </>,
          <>
          Leveraged <span className="font-medium text-teal-300">AWS infrastructure</span> for website hosting, demonstrating a solid understanding of cloud services and deployment.
          </>,
        ]}
        skills={[
          "JavaScript",
          "AWS",
          "MongoDB",
          "NodeJS",
        ]}
      />

      <ExperienceCard
        timeline="February 2019 - January 2022"
        role="Python Developer"
        name="Internet of Things Research Lab, KIIT University"
        description={[
          <>
            Developed and maintained a dashboard for real-time sensor data mapping {" "}<span className="font-medium text-slate-200">
              10,000+ rows of data 24/7
            </span>dashboard using {" "}
            <span className="font-medium text-slate-200">
              Python and Django
            </span>
            
          </>,
          <>
            Utilized <span className="font-medium text-slate-200"> Intel OpenVINO </span> toolkit to run deep learning models on GPU for high density sensor data
            .
          </>,
        ]}
        skills={["Python", "OpenVINO", "Django", "Matplotlib"]}
      />
    </div>
  );
};

export default Experience;
