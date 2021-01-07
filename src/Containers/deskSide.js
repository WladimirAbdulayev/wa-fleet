import ManGridService from "../Components/manGridService";
import ManGridSkills from "../Components/manGridSkills";

import "./Styles/deskSide.css";

export default function DeskSide({ crewMember }) {
  return (
    <div>
      <div>
        <h3 className="desk-side-title">
          {crewMember.rank} {crewMember.firstName} {crewMember.lastName}
        </h3>
      </div>

      <div className="man-side-skills">
        {crewMember.skills === undefined ||
        crewMember.skills.length === 0 ? null : (
          <ManGridSkills crewMember={crewMember}></ManGridSkills>
        )}
      </div>

      <div className="man-side-service">
        {crewMember.service === undefined ||
        crewMember.service.length === 0 ? null : (
          <ManGridService crewMember={crewMember}></ManGridService>
        )}
      </div>
    </div>
  );
}
