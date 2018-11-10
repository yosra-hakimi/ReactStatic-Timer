import React from "react";
const Time = () => {
  return (
    <div>
      <div className="time">
        <div className="hour-time">
          <div className="align">
            <h1 className="hour space"> 00 </h1>
            <h1> : </h1>
          </div>
          <p>hour</p>
        </div>

        <div className="minute-time">
          <div className="align">
            <h1 className="minute space"> 00 </h1>
            <h1> : </h1>
          </div>
          <p>minute</p>
        </div>

        <div className="second-time">
          <div className="align">
            <h1 className="second space"> 00 </h1>
          </div>
          <p>second</p>
        </div>
      </div>
    </div>
  );
};

export default Time;
