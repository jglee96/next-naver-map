import { MapContext } from "context/MapContext";
import { useContext, useEffect } from "react";

const useMapEventListener = () => {
  const map = useContext(MapContext);
  useEffect(() => {
    if (map) map.addEventListener("click", () => console.log("MAP CLICK"));
  }, [map]);
};

export default useMapEventListener;
