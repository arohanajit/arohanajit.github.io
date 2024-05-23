import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { Link } from "react-scroll";

const SectionScroll = () => {
  const [showHoverEffectAbout, setShowHoverEffectAbout] = useState(false);
  const [showHoverEffectEducation, setShowHoverEffectEducation] =
    useState(false);
  const [showHoverEffectExperience, setShowHoverEffectExperience] =
    useState(false);
  const [showHoverEffectProjects, setShowHoverEffectProjects] = useState(false);

  useEffect(() => {
    const targetSectionAbout = document.querySelector("#about-title"); // Replace with your section's ID
    const targetSectionEducation = document.querySelector("#education-title");
    const targetSectionExperience = document.querySelector("#experience-title");
    const targetSectionProjects = document.querySelector("#project-title");

    const handleScroll = () => {
      if (targetSectionAbout) {
        setTimeout(() => {
          const isInView = isInViewport(targetSectionAbout);
          console.log("Education Is in view:", isInView);
          setShowHoverEffectAbout(isInView);
        }, 100); // Adjust the delay as needed
      }
      if (targetSectionEducation) {
        setTimeout(() => {
          const isInView =
            isInViewport(targetSectionEducation) &&
            !isInViewport(targetSectionAbout);
          console.log("Education Is in view:", isInView);
          setShowHoverEffectEducation(isInView);
        }, 100); // Adjust the delay as needed
      }
      if (targetSectionExperience) {
        setTimeout(() => {
          const isInView =
            isInViewport(targetSectionExperience) &&
            !isInViewport(targetSectionEducation);
          console.log("Experience Is in view:", isInView);
          setShowHoverEffectExperience(isInView);
        }, 100); // Adjust the delay as needed
      }
      if (targetSectionProjects) {
        setTimeout(() => {
          const isInView =
            isInViewport(targetSectionProjects) &&
            !isInViewport(targetSectionExperience);
          console.log("Projects Is in view:", isInView);
          setShowHoverEffectProjects(isInView);
        }, 100); // Adjust the delay as needed
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.bottom <= window.innerHeight;
  };

  return (
    <div>
      <li>
        <Link to="about" spy={true} smooth={true} offset={0} duration={500}>
          <div class="group flex items-center py-2 active">
            <span
              class={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-[#01e2c7] group-focus-visible:w-16 group-focus-visible:bg-[#01e2c7] ${
                showHoverEffectAbout ? "bg-[#01e2c7] w-16" : "w-8 bg-slate-400"
              }`}
            ></span>
            <span
              class={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-[#01e2c7] group-focus-visible:text-[#01e2c7] ${
                showHoverEffectAbout ? "text-[#01e2c7]" : "text-slate-400"
              }`}
            >
              About
            </span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="education" spy={true} smooth={true} offset={0} duration={500}>
          <div class="group flex items-center py-2 active">
            <span
              class={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-[#01e2c7] group-focus-visible:w-16 group-focus-visible:bg-[#01e2c7] ${
                showHoverEffectEducation
                  ? "bg-[#01e2c7] w-16"
                  : "w-8 bg-slate-400"
              }`}
            ></span>
            <span
              class={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-[#01e2c7] group-focus-visible:text-[#01e2c7] ${
                showHoverEffectEducation ? "text-[#01e2c7]" : "text-slate-400"
              }`}
            >
              Education
            </span>
          </div>
        </Link>
      </li>
      <li>
        <Link
          to="experience"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <div class="group flex items-center py-2 active">
            <span
              class={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-[#01e2c7] group-focus-visible:w-16 group-focus-visible:bg-[#01e2c7] ${
                showHoverEffectExperience
                  ? "bg-[#01e2c7] w-16"
                  : "w-8 bg-slate-400"
              }`}
            ></span>
            <span
              class={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-[#01e2c7] group-focus-visible:text-[#01e2c7] ${
                showHoverEffectExperience ? "text-[#01e2c7]" : "text-slate-400"
              }`}
            >
              Experience
            </span>
          </div>
        </Link>
      </li>
      <li>
        <Link to="projects" spy={true} smooth={true} offset={0} duration={500}>
          <div class="group flex items-center py-2 active">
            <span
              class={`nav-indicator mr-4 h-px transition-all group-hover:w-16 group-hover:bg-[#01e2c7] group-focus-visible:w-16 group-focus-visible:bg-[#01e2c7] ${
                showHoverEffectProjects
                  ? "bg-[#01e2c7] w-16"
                  : "w-8 bg-slate-400"
              }`}
            ></span>
            <span
              class={`nav-text text-xs font-bold uppercase tracking-widest group-hover:text-[#01e2c7] group-focus-visible:text-[#01e2c7] ${
                showHoverEffectProjects ? "text-[#01e2c7]" : "text-slate-400"
              }`}
            >
              Projects
            </span>
          </div>
        </Link>
      </li>
    </div>
  );
};

export default SectionScroll;
