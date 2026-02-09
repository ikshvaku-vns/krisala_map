import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const NavigationButtons = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const is10KmView = location.pathname === "/tenkm";

  const toggleView = () => {
    navigate(is10KmView ? "/thirtyfive" : "/tenkm");
  };

  return (
    <div className="fixed bottom-[9%] left-4 z-100">
      <button
        onClick={() => {
          toggleView();
        }}
        className="bg-[#105b30] border-2 border-white-800 rounded-lg px-4 py-2 w-24 text-white"
      >
        {is10KmView ? "10KM" : "35KM"}
      </button>
    </div>
  );
};

export default NavigationButtons;
