// src/components/RightDS.jsx
import React from "react";
import Experience from "../fieldsDS/Experience";
import About from "../fieldsDS/About";
import Projects from "../fieldsDS/Projects";
import Education from "../fieldsDS/Education";

const RightConstantDS = () => {
  return (
    <div>
      <About />
      <Education />
      <Experience />
      <Projects />
    </div>
  );
};

export default RightConstantDS;