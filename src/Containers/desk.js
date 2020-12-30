import "./Styles/desk.css";
import ManList from "../Containers/manList";

export default function EventList({ men, showCrewMember, deleteCrewMember }) {
  return (
    <div className="desk-container">
      <ManList
        men={men}
        showCrewMember={showCrewMember}
        deleteCrewMember={deleteCrewMember}
      ></ManList>
    </div>
  );
}
