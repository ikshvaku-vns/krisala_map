import React from "react";
//create routes
import { BrowserRouter, Routes, Route, useLocation, useNavigate } from "react-router-dom";

import NotFound from "../pages/NotFound.jsx";
import Home from "../pages/Home.jsx";
// import FiveKmr from "../pages/FiveKmr.jsx";
import TenKm from "../pages/TenKm.jsx";
import Earth_Video from "../pages/EarthVideo.jsx";
import { useSocketRoom, useSocketSync } from "../socket/socket";

// Define routes
const routes = [
  { path: "/", element: <Earth_Video /> },
  { path: "/thirtyfive", element: <Home /> },
  { path: "/tenkm", element: <TenKm /> },
  { path: "*", element: <NotFound /> },
];

const SocketBridge = () => {
  useSocketRoom();
  return null;
};

const RouteSyncBridge = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const suppressEmitRef = React.useRef(false);

  const { emitSync } = useSocketSync({
    "route:change": (payload) => {
      if (!payload || !payload.path) return;
      if (payload.path === location.pathname) return;
      suppressEmitRef.current = true;
      navigate(`${payload.path}${location.search || ""}`);
      setTimeout(() => {
        suppressEmitRef.current = false;
      }, 0);
    },
  });

  React.useEffect(() => {
    if (suppressEmitRef.current) return;
    emitSync("route:change", { path: location.pathname });
  }, [location.pathname, emitSync]);

  return null;
};

const Router = () => {
  return (
    <BrowserRouter>
      <SocketBridge />
      <RouteSyncBridge />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
