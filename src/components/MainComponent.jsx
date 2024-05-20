import React, { useEffect, useState } from "react";
import LeftConstant from "./LeftConstant";
import RightConstant from "./RightConstant";

const MainComponent = () => {
  return (
    <div>
      <div>
        <div className="mx-auto min-h-screen max-w-screen-xl md:px-[50px] font-sans text-white h-full">
          <div className="grid grid-cols-1 md:grid-cols-5">
            <div className="p-[50px] md:px-[50px] md:py-[100px] col-span-1 md:col-start-1 md:col-span-2 fixed-screen">
              <LeftConstant />
            </div>
            <div className="col-span-1 md:col-start-3 md:col-span-3">
              <RightConstant />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComponent;
