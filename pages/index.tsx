import HomeMap from "components/home/HomeMap";
import { MapContext } from "context/MapContext";
import Map from "model/Map";
import { useState } from "react";
import Script from "next/script";

export default function Home() {
  const [map, setMap] = useState<Map>();

  return (
    <>
      <Script
        src="https://openapi.map.naver.com/openapi/v3/maps.js?ncpClientId=ri4ie2matu"
        onLoad={() => {
          setMap(new Map());
        }}
      />
      <h1>Home</h1>
      <MapContext.Provider value={map}>
        <HomeMap />
      </MapContext.Provider>
    </>
  );
}
