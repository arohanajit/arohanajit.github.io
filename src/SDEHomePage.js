import React, { useEffect, useState } from 'react';
import Particles from 'react-tsparticles';
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