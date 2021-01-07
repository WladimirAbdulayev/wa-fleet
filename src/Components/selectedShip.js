import { useState } from "react";
import "./Styles/selectedShip.css";
import ShipGridVoyage from "./shipGridVoyage";
import ShipGridCrew from "./shipGridCrew";
import OfficeStaff from "../Containers/officeStaff";

import { ButtonGroup, Button, IconButton } from "@material-ui/core";

import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import PeopleIcon from "@material-ui/icons/People";

export default function SelectedShip({ ship }) {
  const [gridType, setGridType] = useState();

  const { shipName, shipType, shipClass, flag, position, voyage, reise } = ship;

  console.log(
    "SEL SHIP: selected Ship: ",
    shipName,
    shipType,
    shipClass,
    flag,
    position,
    voyage,
    reise
  );

  const {
    id = 0,
    port = "port",
    operation = "unknown",
    days: duration = 0,
    agent: {
      company: agent_company = "not set",
      pic: agent_pic = "not set",
      phone: agent_phone = "not set",
      email: agent_email = "not set",
    } = {},
  } = reise[2];

  const [lat = 0, lng = 0] = position;

  return (
    <div className="item-container selected-ship-container">
      <div className="selected-ship-navbar">
        <ButtonGroup variant="contained" size="small">
          <Button
            onClick={() => setGridType("voyage")}
            startIcon={<DirectionsBoatIcon />}
            color="primary"
            style={{ fontSize: 9 }}
          >
            Voyage
          </Button>
          <Button
            onClick={() => setGridType("crew")}
            startIcon={<ArtTrackIcon />}
            color="secondary"
            style={{ fontSize: 9 }}
            size="small"
          >
            Crew
          </Button>
        </ButtonGroup>
        <IconButton
          onClick={() => console.log("button 3")}
          color="primary"
          aria-label="crew"
        >
          <AccessAlarmIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => setGridType("staff")}
          color="secondary"
          aria-label="add an alarm"
        >
          <PeopleIcon fontSize="small" />
        </IconButton>
        <IconButton
          onClick={() => console.log("button 4")}
          color="primary"
          aria-label="delete"
        >
          <AccountCircleIcon fontSize="small" />
        </IconButton>
      </div>

      <div className="selected-top">
        <div className="selected-ship-desc">
          <h3>{shipName}</h3>
          <p>{shipType}</p>
          <p>{shipClass}</p>
        </div>
        <div className="selected-ship-flag">
          <img className="flag" alt="flag" src={"/flags/" + flag + ".svg"} />
        </div>
      </div>

      {gridType === "staff" && <OfficeStaff ship={ship}></OfficeStaff>}
      {gridType === "crew" && <ShipGridCrew ship={ship}></ShipGridCrew>}
      {gridType === "voyage" && <ShipGridVoyage ship={ship}></ShipGridVoyage>}

      <div className="item-container sel-ship-footer">
        <div className="selected-ship-desc">
          <p>
            port: {id}, {port}, {operation}, {duration}
          </p>
          <p>
            position: {position} LAT:{lat}, LNG:{lng}
          </p>
          <p>
            {agent_company}, {agent_pic}, {agent_phone}, {agent_email}
          </p>
        </div>
      </div>
    </div>
  );
}
