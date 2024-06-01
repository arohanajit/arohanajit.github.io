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
      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
      Hey there! I'm Arohan, a machine learning enthusiast currently pursuing my Master's in Computer Science at NC State. My journey in the world of AI and data science began
       during my undergrad days at Kalinga Institute of Industrial Technology, where I laid a strong foundation in IT.
      </p>

      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
        At <span className="font-bold text-slate-200">NC State</span>, I'm diving deep into the realms of algorithms, software engineering, <span className="font-bold text-slate-200">cloud computing</span>, and <span className="font-bold text-slate-200">neural networks</span>. 
        Armed with a versatile tech stack that includes <span className="font-bold text-teal-300">Python, R, C++, MATLAB, </span> and frameworks like 
         <span className="font-bold text-teal-300"> Django, Flask, and PyTorch</span>, I've been working on projects that push 
        the boundaries of what's possible with machine learning. From hate speech detection and CGM neural network optimization to developing Python packages and 
        conducting urban data analysis, I thrive on tackling diverse challenges and delivering impactful solutions.
      </p>

      <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 text-justify">
        When I’m not at the computer, I’m usually trekking, spending time with
        my friends, playing Lawn Tennis or Working Out.
      </p>
    </div>
  );
};

export default About;
