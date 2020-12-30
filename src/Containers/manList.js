import "./Styles/manList.css";
import Man from "../Components/man";

export default function ManList({ men, showCrewMember, deleteCrewMember }) {
  if (men) {
    return (
      <div className="men-list-container">
        {men.map(function (man) {
          return (
            <Man
              key={man.lastName}
              man={man}
              showCrewMember={showCrewMember}
              deleteCrewMember={deleteCrewMember}
            ></Man>
          );
        })}
      </div>
    );
  } else {
    <h2>Crew List is Empty</h2>;
  }
}
