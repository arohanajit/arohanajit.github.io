import React, { useEffect } from 'react';
import MainComponent from './components/MainComponent';
import LeftConstantSDE from './components/SDEConstant/LeftConstantSDE';
import RightConstantSDE from './components/SDEConstant/RightConstantSDE';
import './App.css';

const SDEHomePage = () => {
  return (
    <div className="bg-[#000000]">
      <MainComponent LeftComponent={LeftConstantSDE} RightComponent={RightConstantSDE} />
    </div>
  );
};

export default SDEHomePage;