import HomeMap from "components/home/HomeMap";
import { MapContext } from "context/MapContext";
import Map from "model/Map";
import { useEffect, useRef } from "react";

export default function Home() {
  const mapRef = useRef<Map | null>(null);

  useEffect(() => {
    if (!mapRef.current) mapRef.current = new Map();
  }, []);

  if (mapRef.current) return <></>;
  return (
    <MapContext.Provider value={mapRef.current}>
      <HomeMap />
    </MapContext.Provider>
  );
}
