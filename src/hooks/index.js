import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context";
export const useMapFilter = () => {
  const { activeMapFilterIds, setActiveMapFilterIds } = useContext(AppContext);

  const isFilterActive = (id) => activeMapFilterIds.includes(id);

  return {
    activeMapFilterIds,
    setActiveMapFilterIds,
    isFilterActive,
  };
};

export const useLandmark = () => {
  // used to select a landmark from landing page
  const { selectedLandmarkId, setSelectedLandmarkId } = useContext(AppContext);
  const { activeMapFilterIds } = useMapFilter();
  useEffect(() => {
    if (!activeMapFilterIds.includes("map-filter-landmarks")) {
      setSelectedLandmarkId(null);
    }
  }, [activeMapFilterIds]);

  return {
    selectedLandmarkId,
    setSelectedLandmarkId,
  };
};

export const useBlackout = () => {

  // show blackout if either landmark  or radius is active

  const { selectedLandmarkId, showRadius } = useContext(AppContext);

  const blackout = selectedLandmarkId || showRadius;
  return {
    blackout,
  };
};


