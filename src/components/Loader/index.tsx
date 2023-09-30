import React from "react";
import "./style.css";

const Loader = () => {
  return (
    <div className="w-2/3 h-full flex flex-col justify-center items-center">
      <div className="loader">
        {/* <div className="spin"></div> */}
        <div className="bounce"></div>
      </div>
    </div>
  );
};

export default Loader;
