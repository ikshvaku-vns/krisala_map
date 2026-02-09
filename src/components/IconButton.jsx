import React, { useEffect, useRef, useState } from "react";

function IconButton({ icon, className = "", onClick }) {
  const [isActive, setIsActive] = useState(false);
  const ref = useRef(null);

  return (
    <button
      onClick={() => {
        setIsActive((old) => !old);
        onClick();
      }}
      className={`
        ${className}
        z-10
        font-sans
        transition duration-200 ease-in-out
        hover:opacity-90
      `}
    >
      <div
        className={`
          iconbutton-button
          flex justify-center items-center
          w-10 h-10
          rounded-md
          bg-[black]/90
          shadow-md
          border
          border-white-800
          ${isActive ? "bg-[black]" : ""}
        `}
        ref={ref}
      >
        {icon}
      </div>
    </button>
  );
}

export default IconButton;
