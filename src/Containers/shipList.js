import "./Styles/shipList.css";
import Ship from "../Components/ship";

// import SelectedShip from "../Components/selectedShip";

export default function ShipList({
  ships,
  showCrew,
  showShipVoyageOnMap,
  showShip,
  showShipOnMap,
}) {
  return (
    <div className="block-list-container scroller">
      {ships.map((ship) => (
        <Ship
          key={ship.shipName}
          ship={ship}
          showCrew={showCrew}
          showShipOnMap={showShipOnMap}
          showShip={showShip}
          showShipVoyageOnMap={showShipVoyageOnMap}
        ></Ship>
      ))}
    </div>
  );
}
