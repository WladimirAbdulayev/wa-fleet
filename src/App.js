import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Enter from "./Containers/enter";
import ShipMap from "./Components/shipMap";
import SelectedShip from "./Components/selectedShip";
import Stats from "./Containers/stats";
import Orga from "./Containers/orga";
import ShipList from "./Containers/shipList";
import Desk from "./Containers/desk";
import DeskSide from "./Containers/deskSide";
import PageNavigation from "./Components/pageNavigation";
import Button from "@material-ui/core/Button";
import AppsIcon from "@material-ui/icons/Apps";
import Crew from "./Data/dataCrew";
import Ships from "./Data/ships";

function App() {
  const [ships, setShips] = useState([]);
  const [ship, setShip] = useState([]);
  const [crew, setCrew] = useState([]);
  const [crewMember, setCrewMember] = useState([]);
  const [shipOnMap, setShipOnMap] = useState("");
  const [shipVoyageOnMap, setShipVoyageOnMap] = useState("");
  const [shipStats, setShowShipStats] = useState([]);

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
    setShipVoyageOnMap("");
    setShip(selShipOnMap);
  }

  function showShipVoyageOnMap(selShip) {
    const selShipVoyageOnMap = selShip;
    setShipVoyageOnMap(selShipVoyageOnMap);
    setShip(selShipVoyageOnMap);
  }

  function showCrewMember(selCrewMember) {
    const crewMemberFound = Crew.Crew.find(
      (man) => man.lastName === selCrewMember.lastName
    );
    setCrewMember(crewMemberFound);
    myRef2.current.scrollIntoView();
  }

  function showShipStats(selShip) {
    setShowShipStats(selShip);
  }

  function handleMainMenu(title, history) {
    switch (title) {
      case "Ships":
        myRef1.current.scrollIntoView();
        break;
      case "Men":
        showCrew(ship);
        myRef2.current.scrollIntoView();
        break;
      case "Stats":
        history.push("/stats"); // not working!
        break;
      default:
        console.log("Main Menu: ", title, " not implemented.");
        break;
    }
  }

  const myRef0 = useRef(null);
  const myRef1 = useRef(null);
  const myRef2 = useRef(null);

  function changePage(page) {
    console.log("page: ", page);
    switch (page) {
      case 0:
        myRef0.current.scrollIntoView();
        break;
      case 1:
        myRef1.current.scrollIntoView();
        break;
      case 2:
        myRef2.current.scrollIntoView();
        showCrew(ship);
        break;
      case 3:
        break;
      default:
        break;
    }
  }

  const mainTools = ["Ships", "Men", "Stats"];
  const statTools = ["Budget", "Voyage", "Graphs"];

  return (
    <div className="app-container">
      <Router>
        <div>
          <nav className="navbar-top">
            <AppsIcon style={{ margin: 5 }}></AppsIcon>
            <Button style={{ color: "white" }} component={Link} to="/">
              Home
            </Button>
            <Button style={{ color: "white" }} component={Link} to="/stats">
              Stats
            </Button>
            <Button style={{ color: "white" }} component={Link} to="/orga">
              Orga
            </Button>
          </nav>
          <Switch>
            <Route path="/stats">
              <div
                className="stats-block"
                style={{
                  backgroundImage:
                    "linear-gradient(to right bottom, rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0.8) ), url('/deco/bg_stats.jpg')",
                }}
              >
                <Stats
                  blockName="Stats"
                  statTools={statTools}
                  handleMainMenu={handleMainMenu}
                  shipStats={shipStats}
                ></Stats>
              </div>
            </Route>
            <Route path="/orga">
              <div>
                <Orga
                  blockName="Orga"
                  statTools={statTools}
                  handleMainMenu={handleMainMenu}
                  shipStats={shipStats}
                ></Orga>
              </div>
              <PageNavigation changePage={changePage}></PageNavigation>
            </Route>

            <Route path="/">
              <div ref={myRef0}></div>
              <div>
                <Enter
                  mainTools={mainTools}
                  handleMainMenu={handleMainMenu}
                ></Enter>
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
                  showShipStats={showShipStats}
                ></ShipList>
                <PageNavigation changePage={changePage}></PageNavigation>
                <div ref={myRef2}></div>

                <div className="desk-block">
                  <div className="item-container desk-container">
                    <Desk
                      men={crew}
                      showCrewMember={showCrewMember}
                      ship={ship}
                    ></Desk>
                  </div>
                  <div className="item-container desk-side-container">
                    {crewMember === undefined ||
                    crewMember.length === 0 ? null : (
                      <DeskSide crewMember={crewMember} />
                    )}
                  </div>
                </div>
                <PageNavigation changePage={changePage}></PageNavigation>
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;

// for future implementation with back-end
// import { getAll, postOne, deleteOne } from "./Services/api";

/* for future implementation with back-end
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
