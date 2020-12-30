import "./Styles/shipIcon.css";

export default function ShipIcon({ shipOnMap, deleteShip }) {
  let ship = "BBC Coral";
  if (shipOnMap) ship = shipOnMap;

  const shipImage = "/ships/" + ship + "_s.png";
  console.log("shipImage ", shipImage);

  return (
    <div className="ship-icon-container">
      <div className="text-container">
        <img className="ship-icon-image-s" alt="Ship" src={shipImage} />
        <br></br>
        <p className="ship-icon-primary-text">{shipOnMap}</p>
        <br></br>
        <button
          className="delete-button"
          onClick={() => deleteShip(shipOnMap._id)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
