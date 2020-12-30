import { useState } from "react";
import "./Styles/ship.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Ship({
  ship,
  showCrew,
  deleteShip,
  showShip,
  showShipOnMap,
}) {
  const shipName = "/ships/" + ship.shipName + "_s.png";

  return (
    <div className="ship-container">
      <div className="ship-title-container">
        <p className="ship-primary-text">{ship.shipName}</p>
        <p className="ship-secondary-text">{ship.shipType}</p>
      </div>

      <div className="ship-image-container">
        <img className="ship-image-s" alt="Ship" src={shipName} />
      </div>

      <div className="ship-navbar-container">
        <ButtonGroup variant="contained" size="small">
          <Button
            onClick={() => showShip(ship)}
            startIcon={<SaveIcon />}
            color="primary"
            style={{ fontSize: 9 }}
          >
            Select
          </Button>
          <Button
            onClick={() => deleteShip(ship._id)}
            startIcon={<DeleteIcon />}
            color="secondary"
            style={{ fontSize: 9 }}
            size="small"
          >
            Discard
          </Button>
          <IconButton color="primary" aria-label="delete">
            <DeleteIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => showCrew(ship)}
            color="primary"
            aria-label="crew"
          >
            <AccountCircleIcon fontSize="small" />
          </IconButton>
          <IconButton
            onClick={() => showShipOnMap(ship)}
            color="secondary"
            aria-label="add an alarm"
          >
            <AccessAlarmIcon fontSize="small" />
          </IconButton>
        </ButtonGroup>
      </div>
    </div>
  );
}
