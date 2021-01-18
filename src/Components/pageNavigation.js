import { useContext } from "react";
import "./Styles/pageNavigation.css";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import DirectionsBoatIcon from "@material-ui/icons/DirectionsBoat";
import PeopleIcon from "@material-ui/icons/People";
import PollIcon from "@material-ui/icons/Poll";
import TableChartIcon from "@material-ui/icons/TableChart";
import UserContext from "../UserContext";
import ShipContext from "../ShipContext";


export default function PageNavigation({ changePage }) {
  
  const [user, setUser]=useContext(UserContext);
  const ship=useContext(ShipContext);
  console.log("ShipContext: ", ship);
  
  return (
    
    <div className="page-navbar-container">

    <div className="context-text">
    <p className="ship-secondary-text"> 👨‍✈️ 🏴‍☠️ {user.userName} | 💢: {user.suffix} {ship && <span> 🌎{ship.shipName} ⚓: {ship.shipType}</span>}</p>
    
</div>
      <ButtonGroup variant="contained" size="small">
        <Button
          onClick={() => {
            changePage(0);
          }}
          startIcon={<TableChartIcon />}
          color="primary"
          style={{ fontSize: 9 }}
        >
          Main
        </Button>

        <Button
          onClick={() => {
            changePage(1);
          }}
          startIcon={<DirectionsBoatIcon />}
          color="primary"
          style={{ fontSize: 9 }}
          size="small"
        >
          Ships
        </Button>

        <Button
          onClick={() => {
            changePage(2);
          }}
          startIcon={<PeopleIcon />}
          color="primary"
          style={{ fontSize: 9 }}
          size="small"
        >
          Crew
        </Button>

        <Button
          onClick={() => {setUser(Object.assign({}, user, {suffix: user.suffix+1}))}}
          startIcon={<PollIcon />}
          color="primary"
          style={{ fontSize: 9 }}
          size="small"
        >
          Stats
        </Button>
      </ButtonGroup>
    </div>
  );
}
