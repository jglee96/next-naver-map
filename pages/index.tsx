import useMap from "hooks/useMap";
import { useEffect } from "react";

export default function Home() {
  const map = useMap();
  useEffect(() => {
    const test = (m: naver.maps.Map | null) => {
      m?.addListener("click", () => console.log("MAP CLICK"));
    };
    test(map);
  }, [map]);

  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
}
