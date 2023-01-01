import useMapEventListener from "hooks/useMapEventListener";

const HomeContent = () => {
  useMapEventListener();

  return <div id="map" style={{ width: "100vw", height: "100vh" }}></div>;
};

export default HomeContent;
