import React, { useState } from "react";
import styled, { css } from "styled-components";
import { useBlackout, useLandmark } from "../hooks";

function LandMark({ landmark, id }) {
  const { selectedLandmarkId, setSelectedLandmarkId } = useLandmark();

  const { setBlackout } = useBlackout();

  const onClick = () => {
    if (selectedLandmarkId !== id) {
      setSelectedLandmarkId(id);
      //   setBlackout(true);
    } else {
      setSelectedLandmarkId(false);
      //   setBlackout(false);
    }
  };

  return (
    <Style onClick={onClick}>
      {selectedLandmarkId == id ? (
        <>
          <g className="landmark selected">{landmark}</g>
        </>
      ) : (
        <g className={`landmark ${selectedLandmarkId ? " faded" : ""}`}>
          {landmark}
        </g>
      )}
    </Style>
  );
}

export default LandMark;

const Style = styled.g`
  cursor: pointer;
  z-index: 99999;
  .landmark {
    opacity: 1;
    animation: blinker 3s ease-in infinite;
    :hover {
      animation: none;
      opacity: 1;
    }
  }

  .landmark.faded {
    opacity: 1;
    animation: none;
    :hover {
      opacity: 0.9;
    }
  }

  .selected.landmark {
    animation: none;
    path {
      fill: white !important;
    }
    g {
      path {
        &:nth-child(2) {
          fill: #4b4b4b !important;
        }
      }
      &:nth-child(3) {
        path {
          fill: #4b4b4b !important;
        }
      }
    }
  }

  @keyframes blinker {
    50% {
      opacity: 0.5;
    }
  }
`;
