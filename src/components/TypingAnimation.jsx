import React from 'react';
import Typewriter from 'typewriter-effect';

const TypingAnimation = () => {
  return (
    <div className="text-xl md:text-2xl font-mono text-[#04d9ff]">
      <Typewriter
        options={{
          strings: ['Software Developer', 'Problem Solver', 'Tech Enthusiast'],
          autoStart: true,
          loop: true,
        }}
      />
    </div>
  );
};

export default TypingAnimation;