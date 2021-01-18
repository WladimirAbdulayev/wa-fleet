import { useState } from "react";
import "./Styles/selectedShip.css";
import ShipGridVoyage from "./shipGridVoyage";
import ShipGridCrew from "./shipGridCrew";
import OfficeStaff from "../Containers/officeStaff";
import { ButtonGroup, Button, IconButton } from "@material-ui/core";
import Tooltip from "@material-ui/core/Tooltip";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import SwapCallsIcon from "@material-ui/icons/SwapCalls";
import BallotIcon from "@material-ui/icons/Ballot";
import BusinessIcon from "@material-ui/icons/Business";
import BookIcon from "@material-ui/icons/Book";
import { useContext} from "react";
import UserContext from "../UserContext";

export default function SelectedShip({ ship, showAgents }) {
  const [gridType, setGridType] = useState();

  const { flag, position, reise } = ship;

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

  const shipName = "/ships/" + ship.shipName + "_s.png";
  const user=useContext(UserContext);

  return (
    <div className="selected-ship-container">
      <div className="selected-ship-navbar">
        <ButtonGroup variant="contained" size="small">
          <Button
            onClick={() => setGridType("voyage")}
            startIcon={<SwapCallsIcon />}
            color="primary"
            style={{ fontSize: 9 }}
          >
            Voyage
          </Button>
          <Button
            onClick={() => setGridType("staff")}
            startIcon={<SupervisedUserCircleIcon />}
            color="secondary"
            style={{ fontSize: 9 }}
            size="small"
          >
            Office
          </Button>
        </ButtonGroup>

        <Tooltip title="Agent Network">
          <IconButton
            onClick={() => showAgents(ship)}
            color="primary"
            aria-label="crew"
          >
            <BusinessIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Crew List">
          <IconButton
            onClick={() => setGridType("crew")}
            color="secondary"
            aria-label="crew list"
          >
            <BallotIcon fontSize="small" />
          </IconButton>
        </Tooltip>

        <Tooltip title="Agent Network">
          <IconButton
            onClick={() => console.log("button 3 - spares")}
            color="primary"
            aria-label="crew"
          >
            <BookIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>

      <div className="selected-top">
        <div className="s-ship-title-container">
          <p className="s-ship-primary-text">{ship.shipName}</p>
          <p className="s-ship-secondary-text">
            <span className="s-ship-secondary-text-s">Type:</span>{" "}
            {ship.shipType}
          </p>
          <p className="s-ship-secondary-text">
            <span className="s-ship-secondary-text-s">Flag:</span> {ship.flag}
          </p>
          <p className="s-ship-secondary-text">
            <span className="s-ship-secondary-text-s">Position</span> : LAT:
            {lat}, LNG: {lng}
          </p>
        </div>
        <div className="selected-ship-flag">
          <img className="flag" alt="flag" src={"/flags/" + flag + ".svg"} />
        </div>
      </div> 
      <p className="ship-secondary-text">{user.userName}</p>
        <p className="ship-secondary-text">{user.suffix}</p>
      <div className="ship-image-container">
        <img className="ship-image-l" alt="Ship" src={shipName} />
      </div>

      {gridType === "staff" && <OfficeStaff ship={ship}></OfficeStaff>}
      {gridType === "crew" && <ShipGridCrew ship={ship}></ShipGridCrew>}
      {gridType === "voyage" && (
        <div>
          <ShipGridVoyage ship={ship}></ShipGridVoyage>{" "}
          <div className="item-block-container">
            <div className="selected-ship-desc">
              <p className="s-ship-secondary-text-s">Port Call Description:</p>

              <p className="s-ship-secondary-text">
                <span className="s-ship-secondary-text-s">Port: </span>
                {port}, [{operation}
                {id}], {duration}
              </p>

              <p className="s-ship-secondary-text-s">Agent: {agent_company}</p>
              <p className="s-ship-secondary-text">
                {agent_pic}, {agent_phone}, {agent_email}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
