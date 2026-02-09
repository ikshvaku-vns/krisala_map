import "./App.css";
import "./Attributes.css";
import "animate.css";
import ActionBtns from "./components/ActionBtns";
import CollapsiblePanel from "./components/CollapsiblePanel";
import Compass from "./components/Compass";
import MapFilters from "./components/MapFilter";
import { project_location_mark, shiv_murti, svg_defs } from "./data/marks";
import { mapFilterIds } from "./data/filters";
import ActiveMarksOnMap from "./components/ActiveMarksOnMap";
import LocationInfo from "./components/LocationInfo";
import Zoomable from "./components/Zoomable";
import styled from "styled-components";
import Blackout from "./components/Blackout";
import Radius from "./components/Radius";
import { blank_map } from "./data/svgs";
import Hotspots from "./components/Hotspots";
import Router from "./router/Router";

function App() {
  return (
    <Style
      className="h-screen w-screen overflow-hidden no-scrollbar selection:bg-none"
      id="app"
    >
      <Router />
    </Style>
  );
}

const Style = styled.div`
  touch-action: manipulation;
`;

export default App;
