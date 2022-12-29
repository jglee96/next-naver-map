import useMap from "hooks/useMap";

export default function Home() {
  useMap();

  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
}
