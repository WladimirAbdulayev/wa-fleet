import "./Styles/enter.css";
import Fab from "@material-ui/core/Fab";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import logo from "../Assets/deco/icon-ship.svg";
import MainTools from "./toolBlock";
import { Link } from "react-router-dom";

export default function enterBlock({ mainTools, handleMainMenu }) {
  return (
    <div className="enter-container">
      <header className="enter-header">
        <div className="enter-fleet-icon-box">
          <img src={logo} alt="logo" className="enter-fleet-icon"></img>
        </div>

        <div className="enter-text-box">
          <h1 className="enter-heading-primary">
            <span className="enter-heading-primary-main">FLEET</span>
            <span className="enter-heading-primary-sec">
              ALLES UNTER KONTROLLE
            </span>
          </h1>

          <div className="maintools-box">
            <MainTools
              tools={mainTools}
              handleMainMenu={handleMainMenu}
            ></MainTools>
          </div>

          <div className="enter-button-box">
            <Fab
              component={Link}
              to="/stats"
              style={{
                color: "#1D3557",
                backgroundColor: "white",
                marginTop: 20,
              }}
              variant="extended"
            >
              <AssignmentTurnedInIcon />
              Start Your Day!
            </Fab>
          </div>
        </div>
      </header>
    </div>
  );
}
