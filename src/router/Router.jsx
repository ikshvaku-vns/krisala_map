import React from "react";
//create routes
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NotFound from "../pages/NotFound.jsx";
import Home from "../pages/Home.jsx";
// import FiveKmr from "../pages/FiveKmr.jsx";
import TenKm from "../pages/TenKm.jsx";
import Earth_Video from "../pages/EarthVideo.jsx";
import { useSocketRoom } from "../socket/socket";

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

const Router = () => {
  return (
    <BrowserRouter>
      <SocketBridge />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
