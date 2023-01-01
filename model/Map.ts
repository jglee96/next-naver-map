export default class Map {
  map: naver.maps.Map;
  dm?: naver.maps.drawing.DrawingManager;
  coord: { lat: number; lng: number };

  constructor() {
    this.coord = { lat: 37.4862618, lng: 127.1222903 };
    if (global.navigator.geolocation) {
      global.navigator.geolocation.getCurrentPosition((position) => {
        this.coord = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
      });
    } else {
      window.alert("현재 위치를 알 수 없어 기본 위치로 지정합니다.");
    }

    const { lat, lng } = this.coord;
    this.map = new naver.maps.Map("map", {
      center: new naver.maps.LatLng(lat, lng),
      zoomControl: true,
    });
    naver.maps.Event.once(this.map, "init", () => {
      this.dm = new naver.maps.drawing.DrawingManager({ map: this.map });
    });
  }

  setCenter(coord: { lat: number; lng: number }) {
    const { lat, lng } = coord;
    this.coord = coord;
    this.map.setCenter(new naver.maps.LatLng(lat, lng));
  }

  getCenter() {
    return this.coord;
  }

  addEventListener(eventName: string, listener: () => any) {
    if (this.map.hasListener("click") === false) this.map.addListener(eventName, listener);
  }
}
