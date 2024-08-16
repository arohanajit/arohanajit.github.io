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
      As a passionate software developer with a Master's in Computer Science from North Carolina State University, I thrive on turning complex challenges into elegant solutions. My journey has taken me from crafting responsive web applications at Accenture to optimizing critical API endpoints at Chirpn. With expertise in Python, ReactJS, Node.js, and cloud technologies like AWS and Azure, I'm always eager to dive into new technologies and push the boundaries of what's possible.
      </p>
      <p className="mt-4 text-gray-300 font-mono">
        My journey has taken me from crafting dynamic web applications at{" "}
        <a className="text-[#04d9ff] hover:underline" href="https://www.accenture.com/" target="_blank" rel="noreferrer">
          Accenture
        </a>{" "}
        to my current role as a{" "}
        <span className="text-[#04d9ff]">Software Development Intern</span> at{" "}
        <a className="text-[#04d9ff] hover:underline" href="https://chirpn.com/" target="_blank" rel="noreferrer">
          Chirpn
        </a>{" "}
        in <span className="text-[#04d9ff]">San Jose</span>. Here, I'm optimizing critical API endpoints, implementing secure middleware solutions, and enhancing user interfaces with React. I thrive on leveraging technologies like Node.js, Express, and various cloud platforms to create efficient, secure, and user-centric solutions.
      </p>
      <div className="mt-6 bg-gray-700 p-4 rounded-md">
        <h3 className="text-xl font-semibold mb-2 text-[#04d9ff]">Tech Stack:</h3>
        <ul className="list-disc pl-6 text-gray-300 font-mono">
          <li><span className="text-[#04d9ff]">Front End:</span> React JS, HTML, CSS, JavaScript</li>
          <li><span className="text-[#04d9ff]">Back End:</span> Django, Node.js, Flask</li>
          <li><span className="text-[#04d9ff]">Databases:</span> MySQL, MongoDB, PostgreSQL</li>
          <li><span className="text-[#04d9ff]">Cloud:</span> AWS, Azure</li>
        </ul>
      </div>
    </div>
  );
};

export default About;