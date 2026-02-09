import React from "react";
import { useEffect } from "react";
import { useLandmark } from "../hooks";
import DrawLine from "../components/DrawLine";
import LandMark from "./LandMark";

function LandMarks({ landmarks = [] }) {
  const { selectedLandmarkId, setSelectedLandmarkId } = useLandmark();

  useEffect(() => {
    // blackout setup
    const blackout = document.getElementById("blackout");
    if (!blackout) return;
    if (selectedLandmarkId) blackout.style.display = "block";
    else
      setTimeout(() => {
        blackout.style.display = "none";
      }, [400]);
  }, [selectedLandmarkId]);

  if (!landmarks.length > 0) return <g></g>;

  return (
    <g style={{ transition: "none" }}>
      <rect
        id="blackout"
        style={{ transition: "all 300ms linear" }}
        onClick={() => setSelectedLandmarkId(false)}
        width="1920"
        height="1080"
        fill="white"
        fill-opacity={selectedLandmarkId ? "0.59" : "0"}
      />
      {selectedLandmarkId && (
        <>
          {/* blackout */}
          {landmarks?.find((landMark) => landMark.id === selectedLandmarkId)
            ?.route && (
            <>
              <DrawLine
                path={
                  landmarks?.find(
                    (landMark) => landMark.id === selectedLandmarkId
                  )?.route
                }
                duration={1200}
              />
              {
                landmarks?.find(
                  (landMark) => landMark.id === selectedLandmarkId
                )?.routeDetails.icon
              }
            </>
          )}
        </>
      )}
      {landmarks?.map((landMark) => (
        <LandMark landmark={landMark.icon} id={landMark.id} />
      ))}
    </g>
  );
}

export default LandMarks;
