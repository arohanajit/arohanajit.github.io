import "./App.css";
import MainComponent from "./components/MainComponent";
import React, { useEffect, useState } from 'react';


function App() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const heroStyle = {
    backgroundImage: `radial-gradient(circle farthest-side at ${cursorPosition.x + window.scrollX}px ${cursorPosition.y + window.scrollY}px, #002521 3%, transparent 30%)`,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
  return (
    <div style={heroStyle} className="bg-[#000000] ">
      <MainComponent/>
    </div>
  );
}


export default App;
