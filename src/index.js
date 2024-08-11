import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import DSHomePage from './DSHomePage';
import SDEHomePage from './SDEHomePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/portfolio/ds" element={<DSHomePage />} />
        <Route path="/" element={<SDEHomePage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);