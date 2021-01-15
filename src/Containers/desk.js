import "./Styles/desk.css";
import ManList from "../Containers/manList";

export default function Desk({ men, showCrewMember, ship }) {
  return (
    <div>
      <div className="desk-title-container">
        <h3 className="desk-title">Crew of mv "{ship.shipName}"</h3>
        <h3 className="desk-title-inv">{men.length}</h3>
      </div>
      <div className="block-container">
        <ManList men={men} showCrewMember={showCrewMember}></ManList>
      </div>
    </div>
  );
}
