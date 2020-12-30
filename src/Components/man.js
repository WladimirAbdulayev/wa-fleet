import "./Styles/man.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

export default function Man({ man, showCrewMember, deleteCrewMember }) {
  const manPic = "/crew/" + man.lastName + ".jpg";

  return (
    <div className="man-container">
      <img className="man-image-s" alt="man" src={manPic} />
      <p className="secondary-text-center">
        {man.rank} {man.firstName} {man.lastName}
      </p>
      <ButtonGroup variant="contained" size="small">
        <IconButton
          onClick={() => showCrewMember(man)}
          color="primary"
          aria-label="crew"
        >
          <AccountCircleIcon fontSize="small" />
        </IconButton>
        <IconButton
          color="secondary"
          aria-label="delete"
          onClick={() => deleteCrewMember(man)}
        >
          <DeleteIcon fontSize="small" />
        </IconButton>
      </ButtonGroup>
    </div>
  );
}

// import "./Styles/ship.css";
// // import shipImage from "../Assets/ships/BBC Asia_s.gif";

// export default function Ship({ ship, deleteShip }) {
//   const shipName = "/ships/" + ship.shipName + "_s.png";
//   return (
//     <div className="item-container">
//       <div className="text-container">
//         <i class="fas fa-bell"></i>
//         <i class="fas fa-dungeon"></i>
//         <i class="fas fa-city"></i>
//         <p className="primary-text">{ship.shipName}</p>
//         <p className="secondary-text">{ship.shipType}</p>
//         <img className="ship-image-s" alt="Ship" src={shipName} />
//         <br></br>
//         <button className="delete-button" onClick={() => deleteShip(ship._id)}>
//           Remove
//         </button>
//       </div>
//     </div>
//   );
// }
