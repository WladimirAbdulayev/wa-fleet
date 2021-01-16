import React, { useState } from "react";
import "./Styles/stats.css";
import Fab from "@material-ui/core/Fab";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import MainTools from "./toolBlock";
import ShipChart from "../Components/chart";
import ShipChartR from "../Components/chartR";
import Zoom from "@material-ui/core/Zoom";
import Slide from "@material-ui/core/Slide";
import Switch from "@material-ui/core/Switch";

export default function StatsEnterBlock({
  blockName,
  statTools,
  handleMainMenu,
  shipStats,
}) {
  const [checked, setChecked] = useState(true);

  const toggleChecked = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="stats-container">
      <Switch onChange={toggleChecked}></Switch>

      <div className="block-middle-section">
        <div className="block-middle-section-unit">
          <ShipChart />
        </div>

        <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Zoom in={checked}>
            <div className="block-middle-section-unit">
              <div>
                <h1 className="enter-heading-primary">
                  <span className="enter-heading-primary-main">
                    {blockName}
                  </span>
                  <span className="enter-heading-primary-sec">
                    UNDERSTAND YOUR DATA <br /> {shipStats.shipName}
                  </span>
                </h1>
              </div>

              <div className="maintools-box">
                <MainTools
                  tools={statTools}
                  handleMainMenu={handleMainMenu}
                ></MainTools>
              </div>

              <div
                className="block-button-box"
                style={{ backgound: "white", marginTop: 20 }}
              >
                <Fab
                  variant="extended"
                  style={{ backgroundColor: "white", marginTop: 20 }}
                >
                  <AssignmentTurnedInIcon />
                  Let's Calculate'!
                </Fab>
              </div>
            </div>
          </Zoom>
        </Slide>

        <div className="block-middle-section-unit">
          <ShipChartR />
        </div>
      </div>
    </div>
  );
}
