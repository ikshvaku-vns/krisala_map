import React from "react";
import { useMapFilter } from "../hooks";
import { getMapFilters } from "../data/filters";
import { useLocation } from "react-router-dom";

export default function ActiveMarksOnMap({ filterIdsToShow = [] }) {
  const { isFilterActive } = useMapFilter();
  const location = useLocation();

  // Get the current route
  const currentRoute = location.pathname;

  // Get filters for the current route
  const filters = getMapFilters(currentRoute).filter((filter) =>
    filterIdsToShow.includes(filter.id)
  );

  return filters.map(
    (filter) =>
      filter.landmarks &&
      isFilterActive(filter.id) && (
        <g key={filter.id} className="overlay-can-hide">
          {filter.landmarks}
        </g>
      )
  );
}
