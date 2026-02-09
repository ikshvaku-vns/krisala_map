import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import tippy, { sticky } from "tippy.js";
import "tippy.js/animations/shift-toward.css";
import { useBlackout, useLandmark } from "../hooks";
import {
  tippyLocationInfoForMark,
  tippyLocationInfoForData,
  tippyLocationInfo,
  tippyLocationInfoMark,
} from "./TippyLocationInfo";
import ActiveRoute from "./ActiveRoute";

function MarkWithTippy({ children, bgColor = "#ffffffdd" }) {
  const ref = useRef(null);
  const { selectedLandmarkId, setSelectedLandmarkId } = useLandmark();
  const Routepath = window.location;
  const istenkm = Routepath.pathname === "/tenkm";

  const { blackout } = useBlackout();

  const calculateTextWidth = (text, className) => {
    const tempElement = document.createElement("div");
    tempElement.style.position = "absolute";
    tempElement.style.visibility = "hidden";
    tempElement.style.whiteSpace = "nowrap";
    tempElement.style.fontSize = "14px"; // Base font size for calculation
    // Apply relevant classes for accurate width calculation
    tempElement.className = className;
    tempElement.innerText = text;
    document.body.appendChild(tempElement);
    const width = tempElement.offsetWidth;
    document.body.removeChild(tempElement);
    return width;
  };

  useEffect(() => {
    const instances = [];
    for (let i = 0; i < ref.current.children.length; i++) {
      if (ref.current.children[i]._tippy)
        ref.current.children[i]._tippy.destroy();
    }

    if (blackout) return;

    for (let i = 0; i < ref.current.children.length; i++) {
      const ele = ref.current.children[i];
        ele.style.zIndex = "999999";
      ele.style.cursor = "pointer";
      if(istenkm){
        ele.style.transform = "scale(0.7)";
        ele.style.transformBox = "fill-box";
        ele.style.transformOrigin = "center";
      }
      // ele.addEventListener("click", () => {
      //   // Reset transform styles for all children
      //   for (let j = 0; j < ref.current.children.length; j++) {
      //     ref.current.children[j].style.transform = "scale(0.7)";
      //     ref.current.children[j].style.transformBox = "fil-box";
      //     ref.current.children[j].style.transformOrigin = "center";
      //   }
      // });
      // const tippyText = ele.dataset.tippyContentText || "mark";
      let className = ele.id.substr(2, ele.id.indexOf(" ") - 1);
      let isHighway = className === "highway ";
      if (className === "highway ") className = ele.id.substr(2);
      // let TextStyle = ele.id.startsWith("__hospital ")
      //   ? "color: black;"
      //   : "color:white;";
      let FillStyle = ele.id.startsWith("__hospital ") ? "white" : "white";
      let TextStyle = { color: "white" };
      let tippyText =
        ele.id
          .replace("__mall ", "")
          .replace("__hospital ", "")
          .replace("__temple ", "")
          .replace("__hotel ", "")
          .replace("__residential", "")
          .replace("__railwaystation", "")
          .replace("__busstand", "")
          .replace("__religiousplaces", "")
          .replace("__parks", "")
          .replace("__landmarkk", "")
          .replace("__metrostation ", "")
          .replace("__airport", "")
          .replace("__highway ", "")
          .replace("__road", "")
          .replace("__entertainment", "")
          .replace("__itpark", "")
          .replace("__school ", "") || null;

      let distance_time = tippyText.split("_d_").at(-1);
      let distance = distance_time?.split("_")[0];
      let time = distance_time?.split("_")[1];

      tippyText = tippyText.split("_")[0];
      tippyText = tippyText.slice(0, -1);

      if (tippyText == "metro") {
        tippyText = null;
      }

      if (tippyText) {
        // const textWidth = calculateTextWidth(tippyText, className);
        const instance = tippy(ele, {
          content: `
           <div class="${className} tippy-mark m-0 capitalize overlay-can-hide items-start justify-start" id="${
            ele.id
          }" style= max-width: 300px; white-space: normal;" >

           <div class="flex items-start justify-start"><p class="m-0 p-0">${tippyText}</p></div>
            <div >
             ${tippyLocationInfoForData(distance, time, TextStyle, FillStyle)}
             </div>
           </div>
          `,
          animation: "shift-toward",
          placement: `${
            [].some((str) =>
              tippyText.includes(str)
            )
            ?"bottom"
            :"top" 
          }`,

          allowHTML: true,
          arrow: false,
          followCursor: false,
          interactive: true,
          offset: [0, 0],
          trigger: "click mouseenter", // Ensure the trigger is set to "click"
          sticky: true,
          plugins: [sticky],
          zIndex: 5,
          showOnCreate: false, // Ensure it does not show on create
          hideOnClick: true,
          appendTo: document.getElementById("app"),
        });
      }
    }
    return () => {
      for (const instance of instances) {
         instance.destroy();
      }
    };
  }, [blackout]);

  return (
    <>
      <Style ref={ref}>{children}</Style>;
    </>
  );
}

export default MarkWithTippy;

const Style = styled.g`
  cursor: pointer;
  z-index: 999999999999999;
`;
