import React, { useContext, useEffect } from "react";
import IconButton from "./IconButton";
import { ExitFullScreen, FullScreenIcon, HideIcon, RadiusIcon } from "./Icons";
import { useLandmark } from "../hooks";
import { AppContext } from "../context";
import { toggleFullScreen, toogleHideOverlays } from "../utilities/function";

export default function ActionBtns() {
  const {
    setShowRadius,
    fullScreenMode,
    setFullScreenMode,
    showOverlays,
    setShowOverlays,
  } = useContext(AppContext);

  const handleFullScreenChange = () => {
    setFullScreenMode(document.fullscreenElement !== null);
  };

  useEffect(() => {
    document.addEventListener("fullscreenchange", handleFullScreenChange);
    // Cleanup function to remove event listener on unmount
    return () =>
      document.removeEventListener("fullscreenchange", handleFullScreenChange);
  }, []);

  useEffect(() => {
    toogleHideOverlays(showOverlays);
  }, [showOverlays]);

  return (
    <div className="absolute z-55 right-1 bottom-28 rounded-md  flex p-2 gap-2 w-auto">
      <div
        // style={{ background: "rgb(0,0,0,0.6)" }}
        // className="backdrop-blur-sm flex p-2 gap-2 rounded-md"
        className=" flex p-2 gap-2 rounded-md"
      >
        <IconButton
          className="icon-btn"
          icon={HideIcon}
          tooltip="Hide Overlays"
          activeTooltip="Show Overlay"
          onClick={() => setShowOverlays((old) => !old)}
        />

        {!fullScreenMode ? (
          <IconButton
            icon={FullScreenIcon}
            tooltip="Fullscreen"
            activeTooltip="Close Fullscreen"
            onClick={() => toggleFullScreen()}
          />
        ) : (
          <IconButton
            icon={ExitFullScreen}
            tooltip="Fullscreen"
            activeTooltip="Close Fullscreen"
            onClick={() => toggleFullScreen()}
          />
        )}
      </div>
    </div>
  );
}
