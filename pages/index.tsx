import HomeMap from "components/home/HomeMap";
import { MapContext } from "context/MapContext";
import Map from "model/Map";
import { useRef } from "react";
import Script from "next/script";

export default function Home() {
  const mapRef = useRef<Map | null>(null);

  if (mapRef.current) return <></>;
  return (
    <>
      <Script
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ri4ie2matu"
        onLoad={() => {
          mapRef.current = new Map();
        }}
      />
      <MapContext.Provider value={mapRef.current}>
        <HomeMap />
      </MapContext.Provider>
    </>
  );
}
