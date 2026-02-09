import { createContext, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [activeMapFilterIds, setActiveMapFilterIds] = useState([]);
  const [selectedLandmarkId, setSelectedLandmarkId] = useState(null);
  const [showRadius, setShowRadius] = useState(false);
  const [label,setLabel] = useState(null);
  const [isSingleSelect, setIsSingleSelect] = useState(false);
  const [sattellite,setSattelite] = useState(false);
  const [fullScreenMode, setFullScreenMode] = useState(false);

  return (
    <AppContext.Provider
      value={{
        activeMapFilterIds,
        setActiveMapFilterIds,
        selectedLandmarkId,
        setSelectedLandmarkId,
        showRadius,
        setShowRadius,
        label,
        setLabel,
        isSingleSelect,
        setIsSingleSelect,
        sattellite,
        setSattelite,
        fullScreenMode,
        setFullScreenMode
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
