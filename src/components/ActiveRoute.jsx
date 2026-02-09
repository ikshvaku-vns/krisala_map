import React, { useEffect, useRef, useState } from "react";
import { useLandmark } from "../hooks";
import { mark_landmarks_routes } from "../data/marks";
import { mark_entity_routes } from "../data/marks";
import { mark_landmark_routes } from "../data/mark";
import { mark_homelandmark_routes } from "../data/homedata";
import DrawLine from "./DrawLine";

export default function ActiveEntityRoute({ selectedLandmarkId }) {
  const ref = useRef();

  const [activeRouteAttributes, setActiveRouteAttributes] = useState(null);

  const Routepath = window.location;

  const isTenKm = Routepath.pathname == "/tenkms";
  const istenkm = Routepath.pathname === "/tenkm";

  useEffect(() => {
    if (selectedLandmarkId) {
      const routeId = `__route ${selectedLandmarkId}`;
      if (ref.current) {
        Array.from(ref.current.children).forEach((child) => {
          if (!child.tagName === "path") {
            return;
          }
          if (child.id == routeId) {
            const attributes = {};
            Array.from(child.attributes).forEach((attr) => {
              attributes[attr.name] = attr.value;
            });

            setActiveRouteAttributes(attributes);
          }
        });
      }
    } else {
      setActiveRouteAttributes(null);
    }
  }, [selectedLandmarkId]);

  return (
    <>
      <g className="hidden" ref={ref}>
        {isTenKm
          ? mark_landmark_routes
          : istenkm
          ? mark_entity_routes
          : mark_homelandmark_routes}
      </g>
      {activeRouteAttributes && (
        <DrawLine>
          <path
            {...activeRouteAttributes}
            className={"stroke-white stroke-[5] route"}
          ></path>
        </DrawLine>
      )}
    </>
  );
}
