import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import { home_road_path, tenkm_road_path } from "../data/road";
import DrawPaths from "./DrawPaths";
import CarArrow from "./atoms/CarArrow";

const Roads = () => {
  const location = useLocation();

  const roadData = useMemo(() => {
    const pathname = location.pathname;
    switch (pathname) {
      case "/tenkms":
        return { name: "tenkm_road_name" };
      case "/tenkm":
        return { path: tenkm_road_path };
      case "/thirtyfive":
        return { path: home_road_path };
      default:
        return { path: home_road_path };
    }
  }, [location]);

  const { path, name } = roadData;

  return (
    <>
      {path && (
        <g id="main-road">
          <DrawPaths>{path}</DrawPaths>
          {path}
        </g>
      )}
      {name}
    </>
  );
};

export default Roads;
