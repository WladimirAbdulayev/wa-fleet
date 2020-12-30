import "./Styles/enter.css";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import logo from "../Assets/deco/icon-ship.svg";
import MainTools from "./mainTools";

export default function enterBlock({ handleMainMenu }) {
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
            <MainTools handleMainMenu={handleMainMenu}></MainTools>
          </div>

          <div className="enter-button-box">
            <Zoom in={true}>
              <Fab
                variant="extended"
                style={{ backgound: "white", marginTop: 20 }}
              >
                <AssignmentTurnedInIcon />
                Start Your Day!
              </Fab>
            </Zoom>
          </div>
        </div>
      </header>
    </div>
  );
}
