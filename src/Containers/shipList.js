import "./Styles/shipList.css";
import Ship from "../Components/ship";

// import SelectedShip from "../Components/selectedShip";

export default function ShipList({
  ships,
  showCrew,
  deleteShip,
  showShip,
  showShipOnMap,
}) {
  // <SelectedShip eventItem={ships[0]}></SelectedShip>

  console.log("Ship List: Ships - ", ships);

  return (
    <div className="block-list-container">
      {ships.map((ship) => (
        <Ship
          key={ship._id}
          ship={ship}
          showCrew={showCrew}
          showShipOnMap={showShipOnMap}
          showShip={showShip}
          deleteShip={deleteShip}
        ></Ship>
      ))}
    </div>
  );
}
