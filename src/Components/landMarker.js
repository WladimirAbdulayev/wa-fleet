import L from "leaflet";
import { Marker } from "react-leaflet";
import landOffice from "../Assets/icons/landOffice.svg";

export default function landMarker({ position }) {
  return (
    <Marker
      draggable={true}
      position={position}
      icon={
        new L.Icon({
          iconUrl: landOffice,
          iconSize: new L.Point(22, 22),
          className: "ship-icon",
        })
      }
    >
      {/* <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
        <span>Office</span>
      </Tooltip> */}
    </Marker>
  );
}
