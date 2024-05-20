import React from "react";
import Experience from "./fields/Experience";
import About from "./fields/About";
import Projects from "./fields/Projects";
import Education from "./fields/Education";

const RightConstant = () => {
  return (
    <div>
      <About />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
};

export default RightConstant;
