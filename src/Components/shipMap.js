import React, { useState, useRef, useEffect } from "react";
import LandMarker from "./landMarker";
import ReactDOMServer from "react-dom/server";

import ShipIcon from "./shipIcon";

import "./Styles/shipMap.css";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Polyline,
  // Popup,
  // Tooltip,
  useMap,
  Circle,
  // useMapEvents,
} from "react-leaflet";

function ShipMap({ ships, shipOnMap, showShip, shipVoyageOnMap }) {
  const position = [56.15, 6];
  const positionLandMarker = [53.9, 9.9937]; // Hamburg
  const positionLandMarker1 = [55.63, 8.25]; // Esbjerg
  const positionLandMarker2 = [57.58, 10.33]; // Skagen
  const positionLandMarker3 = [56.24, 10.12]; // Aarhus
  const positionLandMarker4 = [54.21, 12.25]; // Rostock

  const [mapZoom, setMapZoom] = useState(6);

  let selShip = {
    shipName: "BBC Unknown",
    voyage: [[55.5, 3.13]],
  };

  function ShowShip() {
    if (shipOnMap) {
      selShip = shipOnMap;
    }
    const map = useMap();
    if (shipOnMap) {
      map.flyTo(selShip.position);
    }

    return null;
  }

  function ShowVoyageLine(props) {
    if (shipVoyageOnMap) {
      selShip = shipVoyageOnMap;
    }

    const isLoggedIn = props.isLoggedIn;
    const map = useMap();
    if (isLoggedIn) {
      if (shipVoyageOnMap) {
        map.flyTo(selShip.position);
        return (
          <Polyline
            pathOptions={{ color: "darkblue" }}
            positions={selShip.voyage}
            weight={3}
            dashArray={"3, 5"}
          />
        );
      }
      return <p />;
    }
  }

  let reiseArr = "";

  return (
    <MapContainer
      className="item-container ship-map-container"
      center={position}
      zoom={mapZoom}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
        url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
      />

      <LandMarker position={positionLandMarker} />
      <LandMarker position={positionLandMarker1} />
      <LandMarker position={positionLandMarker2} />
      <LandMarker position={positionLandMarker3} />
      <LandMarker position={positionLandMarker4} />

      <Marker
        draggable={true}
        position={[53.59, 0.07]}
        icon={
          new L.Icon({
            iconUrl: "/flags/UK.svg",
            iconSize: new L.Point(80, 25),
            className: "flag-icon",
          })
        }
        eventHandlers={{
          click: (e) => {
            setMapZoom((prev) => prev + 1);
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

      <ShowVoyageLine isLoggedIn={true} />
      <ShowShip />

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
          // icon={
          //   new L.Icon({
          //     iconUrl: "/ships/" + ship.shipName + "_s.png",
          //     iconSize: new L.Point(80, 25),
          //     className: "ship-icon",
          //   })
          // }

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
          {/* <Popup>
            {ship.shipName}
            <br />
            Latitude: {ship.position[0]}
            <br />
            Longitude: {ship.position[1]}
          </Popup> */}

          {/* <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
            <span>{ship.shipName}</span>
          </Tooltip> */}
        </Marker>
      ))}
    </MapContainer>
  );
}

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
    return <LandMarker position={position} />;
  } 
  */
