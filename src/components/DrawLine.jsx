import React from "react";
import { useRef } from "react";
import { useEffect } from "react";

function DrawLine({ children, className }) {
  const ref = useRef(null);

  useEffect(() => {
    // acceesing path
    var path = ref.current.children[0];

    var length = path.getTotalLength();
    // Clear any previous transition
    path.style.transition = path.style.WebkitTransition = "none";
    // Set up the starting positions
    path.style.strokeDasharray = length + " " + length;
    path.style.strokeDashoffset = length;
    // Trigger a layout so styles are calculated & the browser
    // picks up the starting position before animating
    path.getBoundingClientRect();
    // Define our transition
    path.style.transition =
      path.style.WebkitTransition = `stroke-dashoffset ${Math.max(
        parseInt(length),
        2000
      )}ms ease-in-out`;
    // Go!
    path.style.strokeDashoffset = 0;
  }, [children?.props?.id]);

  return <g ref={ref} className={className}>{children}</g>;
}

export default DrawLine;
