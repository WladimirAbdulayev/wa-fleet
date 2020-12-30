import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import ShipIcon from "./shipIcon";
import "./Styles/shipMap.css";
import L from "leaflet";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  SVGOverlay,
  Rectangle,
  Polyline,
} from "react-leaflet";
import AnimIcon from "./animIcon";
import ReactDOM from "react-dom";
import { renderToStaticMarkup } from "react-dom/server";
import { divIcon } from "leaflet";
const ports = require("../Data/ports.json");

function getByUnloc(unloc) {
  return ports[unloc];
}

function shipMap({ shipOnMap }) {
  // getting port - WORKS
  const port = getByUnloc("AEAUH");
  console.log("SEA-PORT", port);

  const iconMarkup = renderToStaticMarkup(<i class="fas fa-city"></i>);
  const customMarkerIcon = divIcon({
    html: iconMarkup,
  });

  // for google maps
  let defaultProps = {
    center: {
      lat: 53.56,
      lng: 9.65,
    },
    zoom: 12,
  };

  const position = [52.2, 3.7];
  const position2 = [52.4, 3.5];
  const position3 = [52.5, 4.1];
  const position4 = [52.7, 4.3];

  const bounds = [
    [52.4, 3.8],
    [52.6, 4.2],
  ];
  const rectangle = [
    [52.6, 4.0],
    [52.7, 4.1],
  ];

  const blackOptions = { color: "black" };

  // return <div className="ship-map-container"></div>;

  let multiPolyline = [
    [52.9, 4.2],
    [52.4, 3.9],
    [52.3, 3.8],
    [52.2, 3.7],
    [51.04, 1.45],
    [25.76, -80.19],
    [29.76, -95.37],
    [8.53, -80.78],
  ];

  let selShip = {
    shipName: "BBC Russia",
    voyage: [
      [52.9, 4.2],
      [52.4, 3.2],
    ],
  };

  if (shipOnMap) {
    selShip = shipOnMap;
  }

  console.log("selShip", selShip, selShip.voyage);

  const icon = L.divIcon({ className: "my-div-icon" });

  const iconShip = new L.Icon({
    iconUrl: "/ships/" + selShip.shipName + "_s.png",
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(100, 35),
    className: "leaflet-div-icon",
  });

  // // zoom the map to the polyline
  // map.fitBounds(polyline.getBounds());

  // return (
  //   <div className="ship-map-container">
  //     <ShipIcon shipOnMap={shipOnMap} />
  //   </div>
  // );

  const iconShip2 = new L.Icon({
    iconUrl: "/ships/BBC Coral_s.png",
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(100, 27),
    className: "leaflet-div-icon",
  });

  const iconShip3 = new L.Icon({
    iconUrl: "/ships/BBC Mont Blanc_s.png",
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(100, 30),
    className: "leaflet-div-icon",
  });

  /*   return (
    <div className="ship-map-container">
      <ShipIcon />
    </div>
  ); */
  return (
    <MapContainer
      className="ship-map-container"
      center={position}
      zoom={8}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright"></a>'
        url="https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png"
      />

      <Polyline
        pathOptions={{ color: "blue" }}
        positions={selShip.voyage}
        weight={6}
        dashArray={"5, 10"}
      />

      <Marker position={position} icon={iconShip}></Marker>
      <Marker position={position2} icon={iconShip2}></Marker>
      <Marker position={position3} icon={iconShip3}></Marker>

      <Marker position={position4} icon={customMarkerIcon}></Marker>
    </MapContainer>
  );
}

export default shipMap;

{
  /* <GoogleMapReact
bootstrapURLKeys={{ key: "AIzaSyD0t3fOh7r9oFHK2Ua5RAuuTzdutO7Sf_U" }}
defaultCenter={defaultProps.center}
defaultZoom={defaultProps.zoom}
defaultMapId={defaultProps.mapId}
>
<ShipIcon lat={53.5582447} lng={9.647645} />
</GoogleMapReact> */
}

{
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
}
