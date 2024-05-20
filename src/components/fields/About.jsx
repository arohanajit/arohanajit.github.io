import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="p-[50px] md:pl-[100px] md:pr-[50px] md:py-[100px]"
    >
      <h2 id="about-title" className="font-bold uppercase pb-[20px] text-[#01e2c7]">
        About
      </h2>
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        Back in 2020, I worked on a project related to <span className="font-bold text-slate-200">algorithmic trading</span>,
        which introduced me to the <span className="font-bold text-slate-200">fintech field</span>—a passion I've held since. I
        began my career as a software developer for <a 
          className="font-medium text-slate-200 hover:text-teal-300 focus-visible:text-teal-300"
          href="https://www.jpmorganchase.com/"
          target="_blank"
          rel="noreferrer"
        >
           JPMorgan & Chase's 
        </a> regulatory tech team, expanding my exposure and understanding of
        fintech. Fast-forward to today, I am pursuing a master's in
        <span className="font-bold text-teal-300"> Computer Science </span>
        with a minor in
        <span className="font-bold text-teal-300"> Financial Mathematics</span>, a decision driven by my eagerness to delve profoundly into this
        field.
      </p>

      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        My current focus is on expanding my understanding of various technology sectors and strengthening my <span className="font-bold text-teal-300">computer science fundamentals</span>. I also
        dedicate time to contributing to <span className="font-bold text-slate-200">open-source projects</span>, which helps me
        stay connected with the global tech community and continuously improve
        my coding skills.
      </p>

      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
        When I’m not at the computer, I’m usually trekking, spending time with
        my friends, or watching <span className="font-bold text-teal-300">Formula One</span>.
      </p>
    </div>
  );
};

export default About;
