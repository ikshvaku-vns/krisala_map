import React from "react";
import MarkWithTippy from "../components/MarkWithTippy";
import Hotspots from "../components/Hotspots";
import {
  bus_icon,
  hospital_icon,
  hotel_icon,
  landmark_icon,
  malls_icon,
  metro_icon,
  residentail_icon,
  school_icon,
  temple_icons,
  train_icon,
  midc_icon,
  it_park_icon,
  entertainment_icon,
} from "../components/Icons";
import {
  tenkmlandmarks_with_routes,
  tenkmlandmark_with_routes,
} from "./landmarkRoutes";
import {
  mark_tenkm_hospital,
  mark_tenkm_hotel,
  mark_tenkm_landmark,
  mark_tenkm_mall,
  mark_tenkm_metro,
  mark_tenkm_school,
  mark_tenkm_temple,
  mark_tenkm_busstands,
  mark_tenkm_railwaystations,
} from "./mark";
import {
  mark_tenkm_hospitals,
  mark_tenkm_hotels,
  mark_tenkm_landmarks,
  mark_tenkm_malls,
  mark_tenkm_metros,
  mark_tenkm_schools,
  mark_tenkm_temples,
  mark_tenkm_busstand,
  mark_tenkm_railwaystation,
  mark_tenkm_midc,
  mark_5km_metro_line,
  mark_tenkm_entertainment,
  mark_tenkm_it_park,
} from "./marks";
import DrawPaths from "../components/DrawPaths";
import {
  mark_homelandmark,
  mark_mallss,
  mark_schoolss,
  mark_hotelss,
  mark_midcss,
  mark_metross,
  mark_metro_lines,
  mark_temples,
  mark_hospitals,
  mark_railway_stations,
  entertainment,
  it_park,
} from "./homedata";
import { tenkm_road_path } from "./road";

export const landmarks = [
  ...Object.keys(tenkmlandmarks_with_routes).map((landmark) => ({
    icon: tenkmlandmarks_with_routes[landmark].icon,
    id: landmark,
    route: tenkmlandmarks_with_routes[landmark].route,
    routeDetails: tenkmlandmarks_with_routes[landmark].routeDetails,
  })),
];
export const landmarkk = [
  ...Object.keys(tenkmlandmark_with_routes).map((landmark) => ({
    icon: tenkmlandmark_with_routes[landmark].icon,
    id: landmark,
    route: tenkmlandmark_with_routes[landmark].route,
    routeDetails: tenkmlandmark_with_routes[landmark].routeDetails,
  })),
];

export const getMapFilters = (route) => {
  const isTenKm = route === "/tenkms";
  const istenkm = route === "/tenkm";
  const isHome = route === "/thirtyfive";

  const getTitle = (tenKmTitle, tenkmTitle, homeTitle) => {
    if (isTenKm) return tenKmTitle;
    if (istenkm) return tenkmTitle;
    if (isHome) return homeTitle;
    return "";
  };

  return [
    {
      id: "map-filter-malls",
      title: getTitle("Malls", "Malls", "Malls"),
      className: "retail",
      icon: getTitle("Malls", "Malls", "Malls") ? malls_icon : null,
      landmarks: (
        <g className="overlay-can-hide marks malls">
          <MarkWithTippy>
            {isTenKm
              ? mark_tenkm_mall
              : istenkm
              ? mark_tenkm_malls
              : isHome
              ? mark_mallss
              : []}
          </MarkWithTippy>
        </g>
      ),
    },
    {
      id: "map-filter-schools",
      title: getTitle("Schools", "Schools", "Schools"),
      className: "education",
      icon: getTitle("Schools", "Schools", "Schools") ? school_icon : null,
      landmarks: (
        <g className="overlay-can-hide marks schools">
          <MarkWithTippy>
            {isTenKm
              ? mark_tenkm_school
              : istenkm
              ? mark_tenkm_schools
              : isHome
              ? mark_schoolss
              : []}
          </MarkWithTippy>
        </g>
      ),
    },
        {
      id: "map-filter-itpark",
      title: getTitle("IT-Park", "IT-Park", "IT-Park"),
      className: "itpark",
      icon: getTitle("IT-Park", "IT-Park", "IT-Park", "") ? it_park_icon : null,
      landmarks: (
        <g className="overlay-can-hide marks itpark">
          <MarkWithTippy>
            { istenkm
              ? mark_tenkm_it_park
              : isHome
              ? it_park
              : []}
          </MarkWithTippy>
        </g>
      ),
    },
    {
      id: "map-filter-temples",
      title: getTitle("", "Temples", "Temples"),
      className: "temple",
      icon: getTitle("Temples", "Temples", "Temples") ? temple_icons : null,
      landmarks: (
        <g className="overlay-can-hide marks temples">
          <MarkWithTippy>
            {isHome ? mark_temples : istenkm ? mark_tenkm_temples : []}
          </MarkWithTippy>
          {/* <MarkWithTippy>{ istenkm ? mark_tenkm_temples: []}</MarkWithTippy> */}
        </g>
      ),
    },
    {
      id: "map-filter-hospitals",
      title: getTitle("Hospitals", "Hospitals", "Hospitals"),
      className: "hospital",
      icon: getTitle("Hospitals", "Hospitals", "Hospitals")
        ? hospital_icon
        : null,
      landmarks: (
        <g className="overlay-can-hide marks hospitals">
          <MarkWithTippy>
            {isTenKm
              ? mark_tenkm_hospital
              : istenkm
              ? mark_tenkm_hospitals
              : isHome
              ? mark_hospitals
              : []}
          </MarkWithTippy>
        </g>
      ),
    },
    {
      id: "map-filter-hotels",
      title: getTitle("Hotels", "Hotels", "Hotels"),
      className: "hotel",
      icon: getTitle("Hotels", "Hotels", "Hotels", "") ? hotel_icon : null,
      landmarks: (
        <g className="overlay-can-hide marks hotels">
          <MarkWithTippy>
            {isTenKm
              ? mark_tenkm_hotel
              : istenkm
              ? mark_tenkm_hotels
              : isHome
              ? mark_hotelss
              : []}
          </MarkWithTippy>
        </g>
      ),
    },
    {
      id: "map-filter-entertainment",
      title: getTitle("Entertainment", "Entertainment", "Entertainment"),
      className: "entertainment",
      icon: getTitle("Entertainment", "Entertainment", "Entertainment", "") ? entertainment_icon : null,
      landmarks: (
        <g className="overlay-can-hide marks entertainment">
          <MarkWithTippy>
            {
                istenkm
              ? mark_tenkm_entertainment
              : isHome
              ? entertainment
              : []}
          </MarkWithTippy>
        </g>
      ),
    },
    {
      id: "map-filter-landing-metro",
      title: getTitle("Metro", "Metro", "Metro"),
      className: "metro",
      icon: getTitle("Metro", "Metro", "Metro", "") ? metro_icon : null,
      landmarks: (
        <>
          {/* <g className="overlay-can-hide marks metro-lines">
        {<DrawPaths>{isTenKm ? mark_tenkm_metro : istenkm ? mark_5km_metro_line  : isHome ? mark_metro_lines: []}</DrawPaths>}
      </g> */}
          <g className="overlay-can-hide marks metros">
            <MarkWithTippy>
              {isTenKm
                ? mark_tenkm_metro
                : istenkm
                ? mark_tenkm_metros
                : isHome
                ? mark_metross
                : []}
            </MarkWithTippy>
          </g>
        </>
      ),
    },
    // {
    //   id: "map-filter-landing-railwaystation",
    //   title: getTitle("Railway Station", "", "Railway Station"),
    //   className: "railwaystation",
    //   icon: getTitle("Railway Station", "Railway Station", "Railway Station") ? train_icon : null,
    //   landmarks: (
    //     <g className="overlay-can-hide marks metros">
    //       <MarkWithTippy>{isHome ? mark_railway_stations : []}</MarkWithTippy>
    //     </g>
    //   ),
    // },
    // {
    //   id: "map-filter-landing-busstand",
    //   title: getTitle("Bus Stand", "Bus Stand", ""),
    //   className: "busstand",
    //   icon: getTitle("Bus Stand", "Bus Stand", "") ? bus_icon : null,
    //   landmarks: (
    //     <g className="overlay-can-hide marks metros">
    //       <MarkWithTippy>{isTenKm ? mark_tenkm_busstands : istenkm ? mark_tenkm_busstand : []}</MarkWithTippy>
    //     </g>
    //   ),
    // },
    // {
    //   id: "map-filter-landing-residentail",
    //   title: getTitle("Residentail", "Residentail"),
    //   className: "residentail",
    //   icon: getTitle("Residentail", "Residentail", "") ? residentail_icon : null,
    //   landmarks: (
    //     <g className="overlay-can-hide marks metros">
    //       <MarkWithTippy>{isTenKm ? mark_tenkm_residentials : istenkm ? mark_tenkm_residential : []}</MarkWithTippy>
    //     </g>
    //   ),
    // },
    {
      id: "map-filter-landmarks",
      title: getTitle("Landmarks", "Landmarks", "Landmarks"),
      className: "landmark",
      icon: getTitle("Landmarks", "Landmarks", "Landmarks")
        ? landmark_icon
        : null,
      landmarks: (
        <g className="overlay-can-hide">
          <Hotspots>
            {isTenKm
              ? mark_tenkm_landmark
              : istenkm
              ? mark_tenkm_landmarks
              : isHome
              ? mark_homelandmark
              : []}
          </Hotspots>
        </g>
      ),
    },
  ];
};

export const getMapFilterIds = (route) =>
  getMapFilters(route).map((filter) => filter.id);
