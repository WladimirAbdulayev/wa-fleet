import L from "leaflet";
import { Marker, Popup } from "react-leaflet";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import "./Styles/marker.css";

export default function landMarker({ position, iconType, agent }) {
  return (
    <Marker
      draggable={true}
      position={position}
      icon={
        new L.Icon({
          iconUrl: "/icons/" + iconType + ".svg",
          iconSize: new L.Point(22, 22),
          className: "marker-v marker-icon-" + iconType,
        })
      }
    >
      <Popup className="popup" offset={[0, -30]}>
        <Card className="popup-card" style={{ padding: 0, margin: 0 }}>
          {iconType === "Agent" ? (
            <div>
              <img
                className="popup-card-image"
                src="/deco/agent.jpg"
                alt="agent"
              />
              {agent && (
                <CardContent style={{ padding: 0, margin: 0 }}>
                  <p className="popup-text-title">{agent.company}</p>
                  <p className="popup-text">{agent.port}</p>
                  <p className="popup-text">{agent.pic}</p>
                  <p className="popup-text">{agent.phone}</p>
                  <p className="popup-text">{agent.email}</p>
                </CardContent>
              )}
            </div>
          ) : (
            <div>
              <img className="popup-card-image" src="/deco/D.jpg" alt="docs" />
              <CardContent style={{ padding: 0, margin: 0 }}>
                <p className="popup-text-title">Loading</p>
                <p className="popup-text">Loading: Bremerhaven</p>
                <p className="popup-text">Discharging: Tallinn</p>
                <p className="popup-text">Cargo: Gas Turbines 3 pcs</p>
                <p className="popup-text">Client: Rolls Royce</p>
              </CardContent>
            </div>
          )}
        </Card>
      </Popup>
    </Marker>
  );
}
