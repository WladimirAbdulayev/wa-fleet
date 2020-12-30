import "./Styles/selectedShip.css";
import { DataGrid } from "@material-ui/data-grid";
import ShipGridVoyage from "./shipGridVoyage";

export default function selectedShip({ ship }) {
  if (ship) {
    const { shipName, shipType, shipClass } = ship;
    return (
      <div className="next-event-item-container">
        <h4>Selected Ship</h4>
        <p className="next-event-primary-text">{shipName}</p>
        <p className="next-event-secondary-text">{shipType}</p>
        <p className="next-event-secondary-text">{shipClass}</p>
        <ShipGridVoyage></ShipGridVoyage>
      </div>
    );
  } else {
    return <h2>No Ship</h2>;
  }
}
