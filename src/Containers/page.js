import React, { useState } from "react";
import "./Styles/stats.css";
import Fab from "@material-ui/core/Fab";
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import logo from "../Assets/deco/icon-ship.svg";
import iconStats from "../Assets/deco/icon-stats.svg";
import MainTools from "./mainTools";
import ShipChart from "../Components/chart";
import ShipChartR from "../Components/chartR";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import Switch from "@material-ui/core/Switch";
import Grow from "@material-ui/core/Grow";
import Zoom from "@material-ui/core/Zoom";
import Slide from "@material-ui/core/Slide";
// import Collapse from "@material-ui/core/Collapse";

import { ThemeProvider } from "@material-ui/core/styles";
import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";
import blue from "@material-ui/core/colors/blue";

const blueTheme = createMuiTheme({ palette: { primary: blue } });

export default function EnterBlock({
  blockName,
  statTools,
  handleMainMenu,
  shipStats,
}) {
  const [checked, setChecked] = useState(true);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <div className="stats-container ">
      <div
        className="stats-block"
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, rgba(0, 0, 0, 0.85), rgba(0, 0, 0, 0.75) ), url('/deco/bg_stats.jpg')",
        }}
      >
        <header className="stats-header">
          <div className="enter-stats-icon-box">
            <FormControlLabel
              control={<Switch checked={checked} onChange={handleChange} />}
              label="Show"
            />
            <br />
            <img src={iconStats} alt="logo" className="enter-stats-icon"></img>
          </div>
        </header>

        <div className="block-middle-section">
          <div className="block-middle-section-unit">
            SEC I
            <ShipChart />
          </div>
          <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
            <Zoom in={checked}>
              <div className="block-middle-section-unit">
                {/* <Collapse in={checked} collapsedHeight="30%"> */}
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
                  <ThemeProvider theme={blueTheme}>
                    <Fab
                      color="primary"
                      variant="extended"
                      style={{ marginTop: 20 }}
                    >
                      <AssignmentTurnedInIcon />
                      Let's Calculate'!
                    </Fab>
                  </ThemeProvider>
                </div>
                {/* </Collapse> */}
              </div>
            </Zoom>
          </Slide>

          <div className="block-middle-section-unit">
            SEC III
            <ShipChartR />
          </div>
        </div>
      </div>
    </div>
  );
}
