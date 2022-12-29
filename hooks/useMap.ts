import { useEffect, useRef, useState } from "react";

const useMap = () => {
  const mapRef = useRef<naver.maps.Map | null>(null);
  const [myCoord, setMyCoord] = useState<{ lat: number; lng: number }>({ lat: 37.4862618, lng: 127.1222903 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setMyCoord({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      window.alert("현재 위치를 알 수 없어 기본 위치로 지정합니다.");
    }

    mapRef.current = new naver.maps.Map("map", {
      zoomControl: true,
    });
  }, []);

  useEffect(() => {
    const { lat, lng } = myCoord;
    mapRef.current?.setCenter(new naver.maps.LatLng(lat, lng));
  }, [myCoord]);
};

export default useMap;
