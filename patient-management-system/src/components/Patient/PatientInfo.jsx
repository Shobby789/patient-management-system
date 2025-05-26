import React from "react";

const PatientInfo = () => {
  return (
    <div className="w-full lg:w-[80%] mx-auto py-16">
      <div className="w-full flex items-start gap-5">
        <dv className="w-[30%]">
          <div className="w-full py-24 rounded-3xl bg-slate-800/50 flex flex-col items-center justify-center gap-4">
            <img
              src="https://media.istockphoto.com/id/1501770003/photo/happy-handsome-young-indian-man-head-shot-front-portrait.jpg?s=612x612&w=0&k=20&c=P2toTbaknymA7vf28IQNa-3xrlUjPXLFqvN2Zra8_nw="
              alt=""
              className="w-1/2 bg-cover rounded-3xl"
            />
            <span>Hess Dev</span>
          </div>
        </dv>
        <dv className="w-[70%] border"></dv>
      </div>
    </div>
  );
};

export default PatientInfo;
