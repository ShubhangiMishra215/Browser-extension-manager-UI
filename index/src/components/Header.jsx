import React from "react";

const Header = ({darkmode, setDarkmode}) => {
  return (
    <div className="flex items-center justify-between p-3 bg-[hsl(200,60%,99%)] rounded-xl dark:bg-[hsl(226,25%,17%)]">
      <div className="flex gap-3 items-center justify-center">
        <img src="assets\logo-icon.svg" alt="logo"/>
        <span className="text-2xl font-bold dark:text-white">Extensions</span>
      </div>
      <button
      onClick={()=> setDarkmode(!darkmode)}
      className="border-[hsl(0,0%,93%)] bg-[hsl(0,0%,93%)] p-3 px-4 rounded-lg
      hover:bg-[hsl(0,0%,78%)] cursor-pointer dark:bg-[hsl(225,23%,24%)] dark:hover:bg-[hsl(226,11%,37%)]
      focus:outline-none focus:ring-2 focus:ring-red-700 focus:ring-offset-2 dark:ring-offset-gray-950">
        <img src={darkmode ? "/assets/icon-sun.svg" :"/assets/icon-moon.svg" } alt="theme toggle"/>
      </button>
    </div>
  );
};

export default Header;