import React, { useEffect } from "react";
import { motion } from "framer-motion";
// import { initBackgroundEffect } from "../backgroundEffect"; // Adjust the import path as necessary

const MainComponent = ({ LeftComponent, RightComponent }) => {
  // useEffect(() => {
  //   initBackgroundEffect();
  // }, []);

  return (
    <div className="bg-gray-900 min-h-screen">
      <canvas></canvas>
      <div className="lg:flex">
        <div className="lg:w-1/3 p-4">
          <LeftComponent />
        </div>
        <div className="lg:w-2/3 lg:ml-auto p-8">
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