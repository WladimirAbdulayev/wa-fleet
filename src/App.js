import "./App.css";
import React, { useState, useEffect, useRef } from "react";

import EnterBlock from "./Containers/enter";
import Card from "./Containers/card";
import ShipMap from "./Components/shipMap";
import SelectedShip from "./Components/selectedShip";

import ShipList from "./Containers/shipList";
import Desk from "./Containers/desk";

import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import PrimarySearchAppBar from "./Containers/toolbar";
import SignInSide from "./Components/signIn";
import ShipForm from "./Containers/shipForm";

// import { getAll, postOne, deleteOne } from "./Services/api";

import Crew from "./Data/dataCrew";
import Ships from "./Data/ships";

import {
  makeStyles,
  ThemeProvider,
  createMuiTheme,
} from "@material-ui/core/styles";

import { orange, blue, red } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: "#1D3557",
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: "#A8DADC",
      main: "#f77f00",
      // dark: will be calculated from palette.secondary.main,
      contrastText: "#F1FAEE",
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

/* const theme = createMuiTheme({
  palette: {
    primary: {
      main: red[500],
    },
    secondary: {
      main: blue[900],
    },
  },
}); */

function App() {
  const [ships, setShips] = useState([]);
  const [ship, setShip] = useState([]);
  const [crew, setCrew] = useState([]);
  const [crewMember, setCrewMember] = useState([]);
  const [shipOnMap, setShipOnMap] = useState("");

  useEffect(() => {
    setShips(Ships.Ships);
  }, []);

  /* 
  useEffect(() => {
    getAll().then((data) => setShips(data));
  }, []);
  */

  function createShip(ship) {
    console.log("Create Ship in App.js");
    /*  postOne(ship).then(() => {
        setShips((ships) => [...ships, ship]);
    }); 
    */
  }

  function deleteShip(id) {
    console.log("Delete Ship in App.js");
    alert("Delete Ship of mv " + id);
    /*  deleteOne(id).then(() => {
        setShips((ships) => ships.filter((ship) => ship._id !== id));
    }); 
    */
  }

  function showCrew(selShip) {
    console.log("Show Crew of mv ", selShip, selShip.shipName);
    const men = Crew.Crew;
    setCrew(men);
  }

  function showShip(selShip) {
    console.log("Select Ship", selShip, selShip.shipName);
    const ship = selShip;
    setShip(selShip);
  }

  function showShipOnMap(selShip) {
    console.log("Show on Map - mv ", selShip, selShip.shipName);
    const selShipOnMap = selShip;
    setShipOnMap(selShipOnMap);
  }

  function showCrewMember(selCrewMember) {
    console.log("Show Crew Member of mv ", selCrewMember, selCrewMember.rank);
    const crewMember = Crew.Crew.find(
      (man) => man.lastName === selCrewMember.lastName
    );
    setCrewMember(crewMember);
    myRef2.current.scrollIntoView();
  }

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

  function handleMainMenu(title) {
    // scroll down to correct component - it was fucking difficult to make it!
    console.log("Clicked on Menu", title);
    if (title === "Ships") myRef1.current.scrollIntoView();
    if (title === "Men") myRef2.current.scrollIntoView();
    if (title === "Docs") myRef3.current.scrollIntoView();

    //executeScroll();
  }

  const myRef1 = useRef(null);
  const myRef2 = useRef(null);
  const myRef3 = useRef(null);

  //const executeScroll = () => myRef.current.scrollIntoView();

  return (
    <ThemeProvider theme={theme}>
      <PrimarySearchAppBar></PrimarySearchAppBar>
      <div className="app-Container">
        <EnterBlock handleMainMenu={handleMainMenu}></EnterBlock>

        <div className="map-ship-block">
          <ShipMap shipOnMap={shipOnMap}></ShipMap>
          <div ref={myRef1}></div>
          <SelectedShip ship={ship} />
        </div>
        <ShipList
          ships={ships}
          deleteShip={deleteShip}
          showCrew={showCrew}
          showShip={showShip}
          showShipOnMap={showShipOnMap}
        ></ShipList>
        <div ref={myRef2}></div>
        <div className="bottom-container">
          <Desk
            men={crew}
            showCrewMember={showCrewMember}
            deleteCrewMember={deleteCrewMember}
          ></Desk>
          <div ref={myRef3}></div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

/* add Blocks
<ShipForm createShip={createShip}></ShipForm>
<SignInSide /> 
*/
