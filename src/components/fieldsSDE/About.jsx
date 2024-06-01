import React from "react";

const About = () => {
  return (
    <div id="about" className="p-[50px] md:pl-[100px] md:pr-[50px] md:py-[100px]">
      <h2 id="about-title" className="font-bold uppercase pb-[20px] text-[#01e2c7]">
        About
      </h2>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Hey there! I'm Arohan, a software developer with a background in Information Technology from Kalinga Institute of Industrial Technology, I've been honing my skills in web development and cloud computing. My journey has taken me from the halls of academia to the dynamic world of{" "}
        <a className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300" href="https://www.accenture.com/" target="_blank" rel="noreferrer">
          Accenture
        </a>{" "}
        where I've had the opportunity to work as a Software Development Associate working with a delightful mix of technologies like <span className="font-bold text-teal-300">React JS, Django</span> to deliver scalable and highly secure applications for one of the biggest financial institutions in the world.
      </p>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        My current focus is on expanding my understanding of various technology sectors and strengthening my <span className="font-bold text-teal-300">computer science fundamentals</span>. I also dedicate time to contributing to <span className="font-bold text-slate-200">open-source projects</span>, which helps me stay connected with the global tech community and continuously improve my coding skills.
      </p>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        When it comes to tech stacks, I have experience with the following:
        <ul className="list-disc pl-6 mt-2">
          <li>
            <span className="font-bold text-teal-300">Front End:</span> React JS, HTML, CSS, JavaScript
          </li>
          <li>
            <span className="font-bold text-teal-300">Back End:</span> Django, Node.js, Flask
          </li>
          <li>
            <span className="font-bold text-teal-300">Databases:</span> MySQL, MongoDB, PostgreSQL
          </li>
          <li>
            <span className="font-bold text-teal-300">Certifications:</span> <a href="https://www.credly.com/badges/5e606db7-c101-4e69-afeb-9f7f8cebf55d?source=linked_in_profile"><u>Azure Cloud Fundamentals</u></a>
          </li>
        </ul>
      </p>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        When I'm not at the computer, I'm usually trekking, spending time with my friends, or watching <span className="font-bold text-teal-300">Soccer</span>.
      </p>
    </div>
  );
};

export default About;