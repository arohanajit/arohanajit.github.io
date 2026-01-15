import React from "react";
import TypingAnimation from "../TypingAnimation";

const About = () => {
  return (
    <div id="about" className="p-6 bg-gray-800 rounded-lg shadow-lg">
      <h2 id="about-title" className="text-2xl font-bold mb-4 text-[#04d9ff]">
        About Me
      </h2>
      <TypingAnimation />
      <div className="mt-4 text-gray-300 font-mono space-y-4">
        <p>
          As a Software Engineer at Google, I apply my expertise in distributed systems, cloud computing, and software design to contribute to innovative projects. With a Master of Science in Computer Science from North Carolina State University, my academic background complements my professional experience in delivering impactful technical solutions.
        </p>
        <p>
          Previously, I contributed to optimizing raster data storage efficiency as a Software Developer at North Carolina State University, focusing on quantization algorithms to reduce cloud storage costs for large-scale geospatial datasets. Motivated by a passion for scalable and efficient software solutions, I aim to foster impactful contributions in the technology space.
        </p>
      </div>

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
          <li>Data Science Professional Certificate</li>
          <li>Complete Python Bootcamp</li>
          <li>PadhAI - Deep Learning course</li>
          <li>
            <a className="text-[#04d9ff] hover:underline" href="https://www.credly.com/badges/5e606db7-c101-4e69-afeb-9f7f8cebf55d" target="_blank" rel="noreferrer">
              Microsoft Certified: Azure Cloud Fundamentals
            </a>
          </li>
          <li>Machine Learning</li>
        </ul>
      </div>

      <div className="mt-6 bg-gray-700 p-4 rounded-md">
        <h3 className="text-xl font-semibold mb-2 text-[#04d9ff]">Honors & Awards:</h3>
        <ul className="list-disc pl-6 text-gray-300 font-mono">
          <li>Udacity Bertelsmann AI Scholarship Phase 1 Recipient</li>
          <li>Udacity Bertelsmann AI Scholarship Phase 2 Recipient</li>
          <li>Intel Edge AI Scholarship Phase 1</li>
          <li>ODSC Scholar</li>
        </ul>
      </div>

      <div className="mt-6 bg-gray-700 p-4 rounded-md">
        <h3 className="text-xl font-semibold mb-2 text-[#04d9ff]">Publications:</h3>
        <ul className="list-disc pl-6 text-gray-300 font-mono">
          <li>A Review of Convolutional Neural Networks</li>
          <li>Mental Health At Work Prediction Using Neural Networks</li>
        </ul>
      </div>

    </div>
  );
};

export default About;