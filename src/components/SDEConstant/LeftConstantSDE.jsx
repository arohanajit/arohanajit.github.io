import React from "react";
import SectionScroll from "../utils/SectionScroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin  } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFileAlt } from "@fortawesome/free-solid-svg-icons";

const LeftConstantSDE = () => {
  return (
    <div className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-1/3 lg:overflow-y-auto p-8 bg-gray-900 text-white flex flex-col justify-center">
      <div className="max-w-lg mx-auto">
        <h1 className="text-5xl font-bold tracking-tight text-[#04d9ff] mb-2">
          Arohan Ajit
        </h1>
        <h2 className="text-xl font-medium tracking-tight mb-1">
          CS Grad Student at{" "}
          <span className="text-[#04d9ff] font-bold">NCSU</span>
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Aspiring SDE
        </p>
        <nav className="mb-8">
          <SectionScroll />
        </nav>
        <div className="flex space-x-4">
          <a href="https://github.com/arohanajit" target="_blank" rel="noopener noreferrer" className="text-[#04d9ff] hover:text-white">
            <FontAwesomeIcon icon={faGithub} size="2x" />
          </a>
          <a href="mailto:arohan.ajit@outlook.com" className="text-[#04d9ff] hover:text-white">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
          </a>
          <a href="https://www.linkedin.com/in/arohanajit" target="_blank" rel="noopener noreferrer" className="text-[#04d9ff] hover:text-white">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a href="https://1drv.ms/w/c/76e8f46429a18a86/EUNIXnbA74dBgWlc841ZaDMBUhn9QDxJpt6Ls7M5EIOCUQ?e=6jQnbQ" target="_blank" rel="noopener noreferrer" className="text-[#04d9ff] hover:text-white">
            <FontAwesomeIcon icon={faFileAlt} size="2x" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default LeftConstantSDE;