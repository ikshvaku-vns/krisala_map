import React, { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";

function CollapsiblePanel({ className, children, title }) {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  const getHeight = () => {
    switch (location.pathname) {
      case "/":
        return "5%";
      case "/tenkm":
        return "5%";
      case "/tenkms":
        return "390px";
      default:
        return "390px";
    }
  };
  return (
    <div
      className={`fixed bottom-3 left-1/2 transform -translate-x-1/2  z-50`}
      style={{ height: getHeight() }}
    >
      <Style
      // className={"overlay-can-fade-out"}
      // style={{
      //   left: isOpen ? "0" : "-200px",
      // }}
      >
        <div class="panel MapFilters">
          <div class={"body body--margin"} style={{ marginRight: "0.5rem" }}>
            {children}
          </div>
        </div>
      </Style>
      {/* <div className="relative  top-[21rem]">
        <CloseBtn
          isOpen={isOpen}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        />
      </div> */}
    </div>
  );
}

export default CollapsiblePanel;

// const CloseBtn = ({ onClick, isOpen }) => (
//   <button
//     className={` overlay-can-fade-out ${
//       isOpen ? "close-btn overlay-can-hide" : "close-btn collapsed"
//     }`}
//     onClick={onClick}
//     style={{ background: "rgba(70, 69, 69, 0.9)" }}
//   >
//     <svg
//       width="16"
//       height="8"
//       viewBox="0 0 16 8"
//       fill="none"
//       xmlns="http://www.w3.org/2000/svg"
//       className={!isOpen ? "" : "rotated"}
//     >
//       <path
//         d="M15 7L8 1L0.999999 7"
//         stroke="#fff"
//         stroke-linecap="round"
//         stroke-linejoin="round"
//       ></path>
//     </svg>
//   </button>
// );

const Style = styled.div`
  // position: absolute;
  // top: 0;
  // display: flex;
  // flex-direction: row;
  // align-items: center;
  // justify-content: flex-start;
  // width: fit-content;
  // transition: all 300ms linear;
  // z-index: 100;
  // background-color: rgba(42, 41, 41, 0.7);
  // backdrop-filter: blur(3px);
  // padding: 0.5rem;
  // padding-left: 1rem;
  // border-radius: 0.5rem;

  &.collapsed {
    left: -200px;
  }

  .body {
    overflow: hidden;
    transition: height 200ms linear;
  }
  .panel {
    display: flex;
    flex-direction: column;
    border-radius: var(--radius);
    width: 80%;
    max-width: var(--panel_max_width);
    transition: opacity var(--transition);
    pointer-events: all;
    z-index: 13;
    position: relative;
  }

  .hidden-btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    z-index: 1;
  }
  .panel .title {
    font-size: 9px;
    text-transform: uppercase;
    text-align: center;
    color: var(--panel_title_color);
  }
  .panel .title .filter-title-mob {
    color: var(--panel_title_color);
  }
  .panel .body--margin {
    padding-top: 10px;
  }
  .panel .body {
    flex-shrink: 0;
  }
  element.style {
    --paddings: 5px 8px;
  }
  .button {
 font-weight: 400;
  color: grey;
  padding: 0.4rem;
  // font-size: clamp(0.75rem, 2vw, 0.875rem); /* For responsive text size */
  font-size: 13px; /* For responsive text size */
  border-radius: 1rem;
  /* width: 8rem; <-- REMOVE THIS FIXED WIDTH */
  /* white-space: nowrap; <-- REMOVE THIS */

  /* Add these properties instead: */
  min-width: 6.5rem; /* Ensures a minimum size for smaller words */
  max-width: max-content; /* Allows it to grow with content, up to a point */
  text-align: center; /* Ensures multi-line text is centered */
  word-wrap: break-word; /* Helps with very long words that don't have spaces */
  overflow-wrap: break-word; /* Modern equivalent */

  background: rgb(48, 48, 48); /* translucent green */

    backdrop-filter: blur(3px);
    // -webkit-backdrop-filter: blur(20px);

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem; /* gap-1 = 4px */

    transition: all 0.2s ease-in-out;
  }
  // .button.button-show_all {
  //   margin: 0;
  // }

  // .button-group {
  //   margin-top: 18px;
  //   button {
  //     border-radius: 0;
  //     margin: 1px;
  //   }
  // }
  // .button-group {
  //   button {
  //     display: flex;
  //     flex-direction: column;
  //     gap: 2px;
  //     :first-child {
  //       border-top-left-radius: var(--radius) !important;
  //       border-top-right-radius: var(--radius) !important;
  //     }
  //     :last-child {
  //       border-bottom-left-radius: var(--radius) !important;
  //       border-bottom-right-radius: var(--radius) !important;
  //     }
  //   }
  // }

  .button.button-icon .icon svg {
    width: 1.5rem;
    height: auto;
  }
  .button.button-icon.landmarks.active .icon {
    /* :before {
      content: " ";
      position: absolute;
      margin: 2px;
      z-index: -1;
      background-color: white;
      border-radius: 50%;
      width: 15px;
      height: 15px;
    } */
  }
  .button.active {
    background: rgba(0,0,0, 0.9);
    backdrop-filter: blur(3px);
    box-shadow: var(--button_shadow_active);
    // color: var(--button_color_active);
    color: white;
    border: 1px solid white;
    font-weight: 400;
    .title {
      color: black;
    }
  }
  /* style for each icon */
  .button.button-icon.highway.active svg {
    path {
      fill: #ffffff;
      &:nth-child(1) {
        &:nth-child(1) {
          fill: #ce457e !important;
        }
      }
    }
  }
  .button.button-icon.midcarea.active svg {
    path {
      fill: #5bb8b8;
      &:nth-child(2) {
        fill: white;
      }
    }
  }
  // .button.button-icon.retail.active svg {
  //   path {
  //     fill: #dbde35;
  //     &:nth-child(2) {
  //       fill: white !important;
  //     }
  //   }
  // }
  // .button.button-icon.temple.active {
  //   svg > path {
  //     fill: rgb(237, 182, 0);

  //     &:nth-child(2),
  //     &:nth-child(3),
  //     &:nth-child(4),
  //     &:nth-child(5),
  //     &:nth-child(6) {
  //       fill: white !important;
  //     }
  //   }
  // }
  .button.button-icon.temple:not(.active) svg {
    filter: grayscale(100%) brightness(80%) opacity(0.6);
  }

  /* no filter when active */
  .button.button-icon.temple.active svg {
    filter: none;
  }
   .button.button-icon.retail:not(.active) svg {
    filter: grayscale(100%) brightness(80%) opacity(0.6);
  }

  /* no filter when active */
  .button.button-icon.retail.active svg {
    filter: none;
  }  


   .button.button-icon.itpark:not(.active) svg {
    filter: grayscale(100%) brightness(80%) opacity(0.6);
  }

  /* no filter when active */
  .button.button-icon.itpark.active svg {
    filter: none;
  } 
   .button.button-icon.entertainment:not(.active) svg {
    filter: grayscale(100%) brightness(80%) opacity(0.6);
  }

  /* no filter when active */
  .button.button-icon.entertainment.active svg {
    filter: none;
  } 
    
  
  .button.button-icon.hospital.active svg {
  circle{
  fill:white;
  }
    path {
      stroke:#FF0000;
      &:nth-child(2) {
        fill: white;
      }
    }
  }
  .button.button-icon.busstand.active svg {
    path {
      fill: #ec1e24;
      &:nth-child(2) {
        fill: #fefefe;
      }
    }
  }
  .button.button-icon.residentail.active svg {
    path {
      fill: #c226a9;
      &:nth-child(2) {
        fill: #f4f4f4;
      }
      &:nth-child(3) {
        fill: #f4f4f4;
      }
      &:nth-child(4) {
        fill: #f4f4f4;
      }
      &:nth-child(5) {
        fill: #f4f4f4;
      }
      &:nth-child(6) {
        fill: #f4f4f4;
      }
      &:nth-child(7) {
        fill: #f4f4f4;
      }
      &:nth-child(8) {
        fill: #f4f4f4;
      }
      &:nth-child(9) {
        fill: #f4f4f4;
      }
    }
  }
  .button.button-icon.railwaystation.active svg {
    path {
      // fill: #de8d43;
      fill: rgb(184, 0, 3);
      &:nth-child(2) {
        fill: #f9f7f7;
      }
    }
  }

  .button.button-icon.landmark.active svg {
    path {
      // fill: rgb(28, 105, 183);
      fill: #105b30;
      stroke: white;
      stroke-width: 0.3;
    }
  }

  // .button.button-icon.retail.active svg circle {
  //   fill: #ffffff;
  // }

  .button.button-icon.education.active svg circle {
    fill: #ffffff;
  }

  .button.button-icon.education.active svg {
    path {
      fill:#59893d;
      &:nth-child(2) {
        fill: white !important;
      }
    }
  }

  .button.button-icon.hotels.active svg circle {
    fill: #ffffff;
  }

  .button.button-icon.hotel.active svg {
  circle{
    fill:white;
  }
    path {
      fill:#FF2ABF;
      &:nth-child(2) {
        fill: white !important;
      }
      &:nth-child(3) {
        fill: white !important;
      }
    }
  }

  .button.button-icon.cinema.active svg circle {
    fill: #916edc;
  }
  .button.button-icon.cinema.active svg path {
    fill: #fff;
  }
  // .button.button-icon.metro.active svg {
  //   // fill: #f74e1b;
  //   path {
  //     fill: #fffff;
  //     &:nth-child(2) {
  //       fill: #f74e1b !important;
  //     }
  //     &:nth-child(3) {
  //       fill: #f74e1b !important;
  //     }
  //   }
  // }

  .button.button-icon.metro:not(.active) svg {
    filter: grayscale(100%) brightness(80%) opacity(0.6);
  }

  /* no filter when active */
  .button.button-icon.metro.active svg {
    filter: none;
  }
  .button.button-icon.metro.active svg {
    path {
      /* default for 1st path */
      fill: #e4e3e1 !important;

      /* overrides for paths 2–14 */
      &:nth-child(2) {
        fill: #1989c8 !important;
      }
      &:nth-child(3) {
        fill: #66bbe6 !important;
      }
      &:nth-child(4) {
        fill: #ed7a17 !important;
      }
      &:nth-child(5) {
        fill: #b44690 !important;
      }
      &:nth-child(6) {
        fill: #348d3e !important;
      }
      &:nth-child(7) {
        fill: #76b031 !important;
      }
      &:nth-child(8) {
        fill: #438f3f !important;
      }
      &:nth-child(9) {
        fill: #c27a37 !important;
      }
      &:nth-child(10) {
        fill: #e86c1b !important;
      }
      &:nth-child(11) {
        fill: #954a8f !important;
      }
      &:nth-child(12) {
        fill: #438f3f !important;
      }
      &:nth-child(13) {
        fill: #c27a37 !important;
      }
      &:nth-child(14) {
        fill: #e86c1b !important;
      }
    }
  }

  /* in your styled.div (or global stylesheet) */
  .button.button-icon.malls.active svg .pin-bg {
    fill: #dbde35 !important;
  }
  .button.button-icon.malls.active svg .pin-ring {
    fill: #red !important;
  }
  .button.button-icon.malls.active svg .pin-inner {
    fill: #ffffff !important;
  }

  .button.button-icon.metro.active svg circle {
    fill: #ffffff;
  }

  .button.button-icon.mosque.active svg path {
    fill: #b777a6;
  }
  .button.button-icon.mosque.active svg circle {
    fill: #ffffff;
  }
  .button.button-icon.garden.active svg circle {
    fill: #ffffff;
  }
  .button.button-icon.garden.active svg path {
    fill: rgba(81, 173, 107, 0.9528);
  }
  // .button.button-icon {
  //   display: flex;
  //   justify-content: space-between;
  //   align-items: center;
  //   position: relative;
  //   overflow: hidden;
  //   padding: 4px 9px 4px 9px;
  // }
  // .button-group {
  //   border-radius: 0;
  //   margin-bottom: 1px;
  // }
  .button.button-icon.landmarks {
    z-index: 1;
  }

  .hidden {
    height: 0px !important;
  }
`;
