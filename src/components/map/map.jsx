import { useRef, useEffect } from 'react';
import useMap from 'hooks/useMap';
import { Icon, Marker } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { URL_MARKER, IconSize, EscapeRoom } from 'const';

const customIcon = new Icon({
  iconUrl: URL_MARKER,
  iconSize: [IconSize.ICON_WIDTH, IconSize.ICON_HEIGHT],
  iconAnchor: [IconSize.ANCHOR_WIDTH, IconSize.ANCHOR_HEIGHT],
});

const Map = ({ city }) => {
  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  useEffect(() => {
    if (map) {
      const marker = new Marker({
        lat: EscapeRoom.lat,
        lng: EscapeRoom.lng,
      });

      marker.setIcon(customIcon).addTo(map);
    }
  }, [map, city]);

  return <div style={{width: '649px', height: '336px'}} ref={mapRef}></div>;
}

export default Map;
