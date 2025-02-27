import "./App.css";
import MainComponent from "./components/MainComponent";
import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './components/utils/ThemeToggle';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#000000] transition-colors duration-300">
        <ThemeToggle />
        <MainComponent />
      </div>
    </ThemeProvider>
  );
}

export default App;
