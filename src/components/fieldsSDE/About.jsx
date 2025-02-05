import React from "react";
import TypingAnimation from "../TypingAnimation";

const About = () => {
  return (
    <div id="about" className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 id="about-title" className="text-2xl font-bold mb-4 text-[#04d9ff]">
        About Me
      </h2>
      <TypingAnimation />
      <p className="mt-4 text-gray-300 font-mono">
        Full Stack Engineer with 3+ years of experience building scalable integration solutions and enterprise applications. 
        Currently pursuing my Master's in Computer Science at NC State University while working as a Software Development Intern at{" "}
        <a className="text-[#04d9ff] hover:underline" href="https://chirpn.com/" target="_blank" rel="noreferrer">
          Chirpn
        </a>{" "}
        in San Jose. Proven track record in API design, system optimization, and cross-functional collaboration. 
        Passionate about innovative solutions and business process automation through technology.
      </p>

      <div className="mt-6 bg-gray-700 p-4 rounded-md">
        <h3 className="text-xl font-semibold mb-2 text-[#04d9ff]">Technical Expertise:</h3>
        <ul className="list-disc pl-6 text-gray-300 font-mono">
          <li><span className="text-[#04d9ff]">Languages:</span> Python, Javascript, Golang, SQL, Node.js, Bash</li>
          <li><span className="text-[#04d9ff]">Frontend:</span> React, Redux, TypeScript, Bootstrap, Tailwind CSS</li>
          <li><span className="text-[#04d9ff]">Backend & Frameworks:</span> Django, Flask, Express.js, REST APIs</li>
          <li><span className="text-[#04d9ff]">Database:</span> PostgreSQL, MySQL, MongoDB, NoSQL</li>
          <li><span className="text-[#04d9ff]">AI/ML:</span> PyTorch, Tensorflow, LLMs, Generative AI, GAN, LSTMs, OpenAI</li>
          <li><span className="text-[#04d9ff]">Cloud & DevOps:</span> AWS, GCP, Azure, Docker, Kubernetes, Git, GitHub Actions</li>
          <li><span className="text-[#04d9ff]">Security:</span> OWASP Tools, Git Secrets, Sonarqube, SBOM, Threat Modeling</li>
        </ul>
      </div>

      <div className="mt-6 bg-gray-700 p-4 rounded-md">
        <h3 className="text-xl font-semibold mb-2 text-[#04d9ff]">Certifications:</h3>
        <ul className="list-disc pl-6 text-gray-300 font-mono">
          <li>
            <a className="text-[#04d9ff] hover:underline" href="https://www.credly.com/badges/5e606db7-c101-4e69-afeb-9f7f8cebf55d" target="_blank" rel="noreferrer">
              Microsoft Certified: Azure Cloud Fundamentals
            </a>
          </li>
          <li>
            <a className="text-[#04d9ff] hover:underline" href="https://www.credly.com/badges/11fa520a-6da8-4f26-bea6-12b537d090d9" target="_blank" rel="noreferrer">
              Microsoft Certified: Azure AI Fundamentals
            </a>
          </li>
          <li>
            <a className="text-[#04d9ff] hover:underline" href="https://www.credly.com/badges/25f79ba6-1285-496c-8d6a-68fc516e5c79" target="_blank" rel="noreferrer">
              IBM Professional Certificate
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default About;