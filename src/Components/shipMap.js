import React from "react";
import IconMarker from "./marker";
import ReactDOMServer from "react-dom/server";
import ShipIcon from "./shipIcon";

import "./Styles/shipMap.css";
import "./Styles/markers.css";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  useMap,
  Popup,
} from "react-leaflet";

const ShipMap = ({ ships, shipOnMap, showShip, shipVoyageOnMap, agents }) => {
  const position = [56.15, 6];
  let mapZoom = 6;

  function ShowShip() {
    console.log("1. MAP: show SHIP: ", shipOnMap);
    const map = useMap();
    if (shipOnMap) {
      map.flyTo(shipOnMap.position);

      const [lat, lng] = shipOnMap.position;
      let bounds = L.latLngBounds([
        [lat - 3, lng - 3],
        [lat + 3, lng + 3],
      ]);
      map.fitBounds(bounds);
    }

    return null;
  }

  function ShowVoyageLine() {
    if (shipVoyageOnMap.voyage) {
      console.log("2. MAP: show VOYAGE: ", shipVoyageOnMap);
      return (
        <Polyline
          pathOptions={{ color: "darkblue" }}
          positions={shipVoyageOnMap.voyage}
          weight={3}
          dashArray={"3, 5"}
        ></Polyline>
      );
    }
    return null;
  }

  function ShowStartEnd() {
    const map = useMap();
    let vStart = shipVoyageOnMap.voyage[0];
    let vEnd = [...shipVoyageOnMap.voyage].pop();

    let bounds = L.latLngBounds([vStart, vEnd]);
    map.fitBounds(bounds);

    console.log("Set Bounds to Start & End of the Voyage: ", vStart, vEnd);

    return (
      <div>
        <div>
          <IconMarker position={vStart} iconType={"Start"}>
            <Popup>Start of the voyage, mv {shipVoyageOnMap} </Popup>
          </IconMarker>
          <IconMarker position={vEnd} iconType={"End"}></IconMarker>
        </div>

        <div>
          {shipVoyageOnMap.voyage.map(
            (pos, index) =>
              pos[2] && (
                <IconMarker
                  key={"land" + index}
                  position={pos}
                  iconType={pos[2]}
                ></IconMarker>
              )
          )}
        </div>
      </div>
    );
  }

  function ShowAgents() {
    if (!agents) return null;
    console.log("MAP: Show Agent", agents);
    return (
      <div>
        {agents.map((agent, index) => (
          <IconMarker
            key={"land" + index}
            position={agent.position}
            iconType="Agent"
            agent={agent}
          >
            <Popup>Agent</Popup>
          </IconMarker>
        ))}
      </div>
    );
  }

  let reiseArr = [];

  return (
    <MapContainer
      className="ship-map-container"
      center={position}
      zoom={mapZoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
        url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
      />

      <Marker
        draggable={true}
        position={[53.23, 7.46]}
        icon={
          new L.Icon({
            iconUrl: "/icons/Crosshairs.svg",
            iconSize: new L.Point(80, 25),
            className: "flag-icon",
          })
        }
        eventHandlers={{
          click: (e) => {
            reiseArr +=
              "[" +
              e.latlng.lat.toFixed(2) +
              "," +
              e.latlng.lng.toFixed(2) +
              "],";
            console.log("clicked: Pos: ", reiseArr);
          },
        }}
      ></Marker>

      {shipVoyageOnMap && <ShowVoyageLine />}
      {shipVoyageOnMap && <ShowStartEnd />}
      {agents && <ShowAgents />}

      {shipOnMap && <ShowShip />}

      {ships.map((ship) => (
        <Marker
          key={ship.shipName}
          draggable={true}
          position={ship.position}
          icon={
            new L.divIcon({
              className: "ship-icon-container",
              html: ReactDOMServer.renderToString(
                <ShipIcon shipOnMap={ship} />
              ),
            })
          }
          eventHandlers={{
            click: (e) => {
              reiseArr +=
                "[" +
                e.latlng.lat.toFixed(2) +
                "," +
                e.latlng.lng.toFixed(2) +
                "],";

              console.log(ship.shipName + " clicked: Pos: ", reiseArr);
              ship.voyage.push(reiseArr);

              showShip(ship);
            },
          }}
        >
          <Popup>
            {ship.shipName}
            <br />
            Latitude: {ship.position[0]}
            <br />
            Longitude: {ship.position[1]}
          </Popup>

          {/* <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
            <span>{ship.shipName}</span>
          </Tooltip> */}
        </Marker>
      ))}
    </MapContainer>
  );
};

export default ShipMap;

/*
// ++++++++++++++++++++++++++++++++++++++++
// import GoogleMapReact from "google-map-react";
// import ShipIcon from "./shipIcon";

// ++++++++++++++++++++++++++++++++++++++++

  /*   // for google maps
  let defaultProps = {
    center: {
      lat: 53.56,
      lng: 9.65,
    },
    zoom: 12,
  }; */
/* <GoogleMapReact
bootstrapURLKeys={{ key: process.env.GOOGLE_API_KEY }}
defaultCenter={defaultProps.center}
defaultZoom={defaultProps.zoom}
defaultMapId={defaultProps.mapId}
>
<ShipIcon lat={53.5582447} lng={9.647645} />
</GoogleMapReact> */

/* <Marker position={position2} icon={icon}>
<Popup>Little Red Block <br /> Easily customizable.</Popup>
</Marker>

<Rectangle bounds={rectangle} pathOptions={blackOptions} />

<SVGOverlay attributes={{ stroke: "red" }} bounds={bounds}>
<rect x="0" y="0" width="100%" height="100%" fill="green" />
<circle r="5" cx="10" cy="10" fill="red" />
<text x="50%" y="50%" stroke="white">
  text
</text>
</SVGOverlay> */

/*
const ports = require("../Data/ports.json");
function getByUnloc(unloc) {
  return ports[unloc];
}
  getting port - WORKS
  const port = getByUnloc("AEAUH");
  console.log("SEA-PORT", port);
*/

/*   return (
    <div className="ship-map-container">
      <ShipIcon />
    </div>
  ); */

/*   function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click() {
        map.locate();
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  } */

/*   
  function GetCoordinates() {
    const [position, setPosition] = useState([55.1, 5]);
    const map = useMapEvents({
      click: () => {
        map.locate();
      },
      locationfound: (location) => {
        console.log("location found:", location.latlng);
        setPosition(location.latlng);
      },
    });
    return <IconMarker position={position} />;
  } 
  */
