import L from "leaflet";
import { Marker } from "react-leaflet";

export default function landMarker({ position, iconType }) {
  return (
    <Marker
      draggable={true}
      position={position}
      icon={
        new L.Icon({
          iconUrl: "/icons/" + iconType + ".svg",
          iconSize: new L.Point(22, 22),
          className: "marker-icon-" + iconType,
        })
      }
    >
      {/* <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
        <span>Office</span>
      </Tooltip> */}
    </Marker>
  );
}
