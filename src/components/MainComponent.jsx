import React from "react";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const MainComponent = ({ LeftComponent, RightComponent }) => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <ParticlesBackground />
      <div className="lg:flex">
        <div className="lg:w-1/2">
          <LeftComponent />
        </div>
        <div className="lg:w-1/2 lg:ml-auto p-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <RightComponent />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;