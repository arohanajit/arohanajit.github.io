import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const SectionScroll = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["about", "education", "experience", "projects"];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "education", label: "EDUCATION" },
    { id: "experience", label: "EXPERIENCE" },
    { id: "projects", label: "PROJECTS" },
  ];

  return (
    <ul className="space-y-4">
      {navItems.map((item) => (
        <li key={item.id}>
          <Link
            to={item.id}
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className={`flex items-center cursor-pointer transition-all duration-300 ${
              activeSection === item.id ? "text-[#04d9ff]" : "text-gray-400"
            }`}
          >
            <div className={`w-8 h-px ${activeSection === item.id ? "bg-[#04d9ff]" : "bg-gray-400"} mr-2`}></div>
            <span className="text-sm font-semibold">{item.label}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default SectionScroll;