import "./Styles/shipList.css";
import Ship from "../Components/ship";

// import SelectedShip from "../Components/selectedShip";

export default function ShipList({
  ships,
  showCrew,
  showShipVoyageOnMap,
  showShip,
  showShipOnMap,
  showShipStats,
}) {
  return (
    <div className="block-list-container">
      {ships.map((ship) => (
        <Ship
          key={ship.shipName}
          ship={ship}
          showCrew={showCrew}
          showShipOnMap={showShipOnMap}
          showShip={showShip}
          showShipVoyageOnMap={showShipVoyageOnMap}
          showShipStats={showShipStats}
        ></Ship>
      ))}
    </div>
  );
}
