import useMapEventListener from "hooks/useMapEventListener";

const HomeMap = () => {
  useMapEventListener();

  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
};

export default HomeMap;
