import React from "react";
import "./style.css";

const EntryLoader = ({isDarkMode}:{isDarkMode:boolean}) => {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <span className={`entry-loader ${isDarkMode ? "bg-white after:bg-white before:border-white" : "bg-black after:bg-[#3a3a3a] before:border-black"}`}></span>
    </div>
  );
};

export default EntryLoader;
