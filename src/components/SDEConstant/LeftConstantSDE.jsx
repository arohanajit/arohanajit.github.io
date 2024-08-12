import React from "react";
import SectionScroll from "../utils/SectionScroll";

const LeftConstantSDE = () => {
  return (
    <div className="lg:fixed lg:top-0 lg:left-0 lg:h-screen lg:w-1/2 lg:overflow-y-auto p-8 bg-gray-900 text-white flex flex-col justify-center">
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
        {/* Social media links (GitHub, LinkedIn, Email) */}
      </div>
    </div>
  );
};

export default LeftConstantSDE;