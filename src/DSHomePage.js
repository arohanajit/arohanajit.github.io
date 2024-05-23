import React from 'react';
import MainComponent from './components/MainComponent';
import LeftConstantDS from './components/DSConstant/LeftConstantDS';
import RightConstantDS from './components/DSConstant/RightConstantDS';

const DSHomePage = () => {
  return (
    <div className="bg-[#000000]">
      <MainComponent LeftComponent={LeftConstantDS} RightComponent={RightConstantDS} />
    </div>
  );
};

export default DSHomePage;