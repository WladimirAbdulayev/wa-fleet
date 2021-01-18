import React, { useReducer } from "react";
import "./Styles/stats.css";
// import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn";
import MainTools from "./toolBlock";
import ShipChart from "../Components/chart";
import ShipChartR from "../Components/chartR";
// import Zoom from "@material-ui/core/Zoom";
// import Slide from "@material-ui/core/Slide";
// import Switch from "@material-ui/core/Switch";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import DvrIcon from "@material-ui/icons/Dvr";
import CenterFocusWeakIcon from "@material-ui/icons/CenterFocusWeak";
import { data1, data2, data3, data4 } from "../Data/stat";

export default function StatsEnterBlock({
  blockName,
  statTools,
  shipStats,
  handleMainMenu,
}) {
  // const [checked, setChecked] = useState(true);

  // const toggleChecked = () => {
  //   setChecked((prev) => !prev);
  // };

  // testing reducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "SHOW_SET1":
        return Object.assign([], state, data2);
      case "SHOW_SET2":
        return Object.assign([], state, data3);
      case "SHOW_SET3":
        return Object.assign([], state, data4);
      default:
        return state;
    }
  };

  const [data, dispatch] = useReducer(reducer, data1);

  return (
    <div className="stats-body">
      <div className="block-middle-section">
        <div className="block-middle-section-chart">
          <ShipChart data={data} />
        </div>

        {/* <Slide direction="up" in={checked} mountOnEnter unmountOnExit>
          <Zoom in={checked}> */}
        <div className="block-middle-section-unit">
          <div>
            <h1 className="stats-heading-primary">
              <span className="starts-heading-primary-main">{blockName}</span>
              <span className="stats-heading-primary-sec">
                UNDERSTAND YOUR FLEET
                <br /> {shipStats.shipName}
              </span>
            </h1>
          </div>

          <div className="stats-maintools-box">
            <MainTools
              tools={statTools}
              handleMainMenu={handleMainMenu}
            ></MainTools>
          </div>
          <div
            className="block-button-box"
            style={{ backgound: "white", marginTop: 20 }}
          >
            <div className="stats-navbar-container">
              <ButtonGroup variant="contained" size="small">
                <Button
                  onClick={() => dispatch({ type: "SHOW_SET1" })}
                  startIcon={<CenterFocusWeakIcon />}
                  color="primary"
                  style={{ fontSize: 9 }}
                >
                  Fuel
                </Button>
                <Button
                  onClick={() => dispatch({ type: "SHOW_SET2" })}
                  startIcon={<DvrIcon />}
                  color="secondary"
                  style={{ fontSize: 9 }}
                  size="small"
                >
                  Rate
                </Button>
                <Button
                  onClick={() => dispatch({ type: "SHOW_SET3" })}
                  startIcon={<DvrIcon />}
                  color="primary"
                  style={{ fontSize: 9 }}
                  size="small"
                >
                  Cargo
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
        {/* </Zoom>
        </Slide> */}

        <div className="block-middle-section-chart block-middle-section-chartR">
          <ShipChartR data={data} />
          {/* <Switch onChange={toggleChecked}></Switch> */}
        </div>
      </div>
    </div>
  );
}
