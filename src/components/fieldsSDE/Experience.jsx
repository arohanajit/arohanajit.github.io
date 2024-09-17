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
        name="Chirpn, San Jose"
        description={[
          <>
            Engineered and optimized critical API endpoints using Node.js and Express, improving data processing efficiency by <span className="font-medium text-slate-200">25%</span> and reducing server response times by <span className="font-medium text-slate-200">30%</span>.
          </>,
          <>
            Implemented job scheduling mechanisms resulting in a <span className="font-medium text-slate-200">40% decrease</span> in document synchronization latency.
          </>,
          <>
            Developed robust middleware solutions for API request validation and user authentication, ensuring <span className="font-medium text-slate-200">100% compliance</span> with security standards.
          </>,
          <>
            Collaborated on full-stack development, integrating React components with backend APIs to enhance user interface responsiveness.
          </>,
          <>
            Utilized Prisma ORM to manage and optimize database schemas, leading to a <span className="font-medium text-slate-200">15% improvement</span> in query performance.
          </>,
          <>
            Containerized the application using Docker, reducing deployment time by <span className="font-medium text-slate-200">30%</span> and ensuring consistent performance across environments.
          </>,
        ]}
        skills={[
          "Node.js",
          "Express",
          "React",
          "Docker",
          "Prisma ORM",
          "API Development",
          "Full-stack Development"
        ]}
      />

      <ExperienceCard
        timeline="May 2021 - July 2023"
        role="Software Development Associate"  
        name="Accenture"
        description={[
          <>
          Developed and maintained dynamic, responsive web applications with <span className="font-medium text-slate-200">React JS</span> for the front end and <span className="font-medium text-slate-200">Django</span> for the backend, delivering high-quality solutions to clients
          </>,
          <>
          Implemented clean, reusable, and modular code through React components and hooks, resulting in a <span className="font-medium text-slate-200">20% increase</span> in development efficiency as measured by reduced development time
          </>,
          <>
          Utilized Django's ORM and REST framework to build scalable and secure backend systems, handling over <span className="font-medium text-slate-200">10,000 monthly user requests</span> with a <span className="font-medium text-slate-200">99.9% uptime</span>
          </>,
          <>
          Integrated React with Django via <span className="font-medium text-slate-200">RESTful APIs</span>, ensuring seamless communication and reducing front-end/backend interaction latency by 15%
          </>,
          <>
          Collaborated with a team of 3 back-end developers to enhance web application <span className="font-medium text-slate-200">UI/UX</span>, increasing user satisfaction by 12% as per feedback surveys
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
          depending on events.
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
