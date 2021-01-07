import "./Styles/shipIcon.css";

export default function ShipIcon({ shipOnMap }) {
  let ship = "BBC Coral";
  if (shipOnMap) ship = shipOnMap;
  const shipImage = "/ships/" + ship.shipName + "_s.png";
  return (
    <div className="ship-icon-container">
      <img className="ship-icon-image-s" alt="Ship" src={shipImage} />
      <div className="text-container">
        <p className="ship-icon-primary-text">{shipOnMap.shipName}</p>
      </div>
    </div>
  );
}
