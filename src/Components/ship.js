import "./Styles/ship.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DvrIcon from "@material-ui/icons/Dvr";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";
import CenterFocusWeakIcon from "@material-ui/icons/CenterFocusWeak";
import Tooltip from "@material-ui/core/Tooltip";

import PeopleIcon from "@material-ui/icons/People";

export default function Ship({
  ship,
  showCrew,
  showShipVoyageOnMap,
  showShip,
  showShipOnMap,
  showShipStats,
}) {
  const shipName = "/ships/" + ship.shipName + "_s.png";

  return (
    <div className="ship-container">
      <div className="ship-title-container">
        {/* <Circular></Circular> */}
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
            startIcon={<ArtTrackIcon />}
            color="primary"
            style={{ fontSize: 9 }}
          >
            Details
          </Button>
          <Button
            onClick={() => showCrew(ship)}
            startIcon={<PeopleIcon />}
            color="secondary"
            style={{ fontSize: 9 }}
            size="small"
          >
            Crew
          </Button>
        </ButtonGroup>
        <Tooltip title="Position on Map">
          <IconButton
            onClick={() => showShipOnMap(ship)}
            color="secondary"
            aria-label="on-map"
          >
            <CenterFocusWeakIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Voyage on Map">
          <IconButton
            onClick={() => showShipVoyageOnMap(ship)}
            color="secondary"
            aria-label="voyage-map"
          >
            <DirectionsBoatIcon fontSize="small" />
          </IconButton>
        </Tooltip>
        <Tooltip title="Statistic">
          <IconButton
            color="primary"
            aria-label="delete"
            onClick={() => showShipStats(ship)}
          >
            <DvrIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
}
