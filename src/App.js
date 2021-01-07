import "./App.css";
import React, { useState, useEffect, useRef } from "react";

import EnterBlock from "./Containers/enter";
import ShipMap from "./Components/shipMap";
import SelectedShip from "./Components/selectedShip";

import ShipList from "./Containers/shipList";
import Desk from "./Containers/desk";
import DeskSide from "./Containers/deskSide";
import PrimarySearchAppBar from "./Containers/toolbar";

// import { getAll, postOne, deleteOne } from "./Services/api";

import Crew from "./Data/dataCrew";
import Ships from "./Data/ships";

function App() {
  const [ships, setShips] = useState([]);
  const [ship, setShip] = useState([]);
  const [crew, setCrew] = useState([]);
  const [crewMember, setCrewMember] = useState([]);
  const [shipOnMap, setShipOnMap] = useState("");
  const [shipVoyageOnMap, setShipVoyageOnMap] = useState("");

  useEffect(() => {
    setShips(Ships.Ships);
    setShip(Ships.Ships[0]);
  }, []);

  function showCrew(selShip) {
    const men = Crew.Crew;
    setCrew(men);
    setShip(selShip);
    myRef2.current.scrollIntoView();
  }

  function showShip(selShip) {
    setShip(selShip);
  }

  function showShipOnMap(selShip) {
    const selShipOnMap = selShip;
    setShipOnMap(selShipOnMap);
  }

  function showShipVoyageOnMap(selShip) {
    console.log("APP: Show VOYAGE on Map - mv ", selShip, selShip.shipName);
    const selShipVoyageOnMap = selShip;
    setShipVoyageOnMap(selShipVoyageOnMap);
  }

  function showCrewMember(selCrewMember) {
    const crewMemberFound = Crew.Crew.find(
      (man) => man.lastName === selCrewMember.lastName
    );
    setCrewMember(crewMemberFound);
    myRef2.current.scrollIntoView();
  }

  function handleMainMenu(title) {
    console.log("Clicked on Menu", title);
    if (title === "Ships") myRef1.current.scrollIntoView();
    if (title === "Men") myRef2.current.scrollIntoView();
    if (title === "Docs") myRef3.current.scrollIntoView();
  }

  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);

  return (
    <div>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <div className="app-Container">
        <EnterBlock handleMainMenu={handleMainMenu}></EnterBlock>
        <div className="map-ship-block">
          <ShipMap
            ships={ships}
            shipOnMap={shipOnMap}
            showShip={showShip}
            shipVoyageOnMap={shipVoyageOnMap}
          ></ShipMap>
          <div ref={myRef1}></div>

          {ship === undefined || ship.length === 0 ? null : (
            <SelectedShip ship={ship} />
          )}
        </div>

        <ShipList
          ships={ships}
          showShipVoyageOnMap={showShipVoyageOnMap}
          showCrew={showCrew}
          showShip={showShip}
          showShipOnMap={showShipOnMap}
        ></ShipList>
        <div ref={myRef2}></div>

        <div className="bottom-container">
          <Desk men={crew} showCrewMember={showCrewMember} ship={ship}></Desk>

          <div className="item-container desk-side-container">
            {crewMember === undefined || crewMember.length === 0 ? null : (
              <DeskSide crewMember={crewMember} />
            )}
          </div>
        </div>
        <div ref={myRef3}></div>
      </div>
    </div>
  );
}

export default App;

/* 
  useEffect(() => {
    getAll().then((data) => setShips(data));
  }, []);
  */

/*
  function createShip(ship) {
    console.log("Create Ship in App.js");
      postOne(ship).then(() => {
        setShips((ships) => [...ships, ship]);
    }); 
  }
  */

/*
    function deleteShip(id) {
    console.log("APP: Delete Ship in App.js");
    alert("Delete Ship of mv " + id);
    deleteOne(id).then(() => {
        setShips((ships) => ships.filter((ship) => ship._id !== id));
    });   
  } 
  */

/*
  function deleteCrewMember(selCrewMember) {
     console.log(
      "deleteCrewMember Crew Member of mv ",
      selCrewMember,
      selCrewMember.rank
    );
    const crewMember = Crew.Crew.find(
      (man) => man.lastName === selCrewMember.lastName
    );
    setCrewMember(crewMember); 
  }
  */

/*   
  function showSelectedShip() {
  return <div>{ship ? <SelectedShip ship={ship} /> : null}</div>;
  } 
  */
