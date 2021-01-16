import ManGridService from "../Components/manGridService";
import ManGridSkills from "../Components/manGridSkills";

import "./Styles/deskSide.css";

export default function DeskSide({ crewMember }) {
  const manPic = "/crew/" + crewMember.lastName + ".jpg";
  return (
    <div className="item-block-container man-details with-bg">
      <div className="item-block-container">
        <div className="man-title-container">
          <img className="man-image-e" alt="man" src={manPic} />

          <div>
            <h3 className="desk-title">
              <span className="text-sec">{crewMember.rank} </span>
              {crewMember.firstName} {crewMember.lastName}
            </h3>

            {crewMember.skills === undefined ||
            crewMember.skills.length === 0 ? null : (
              <ManGridSkills crewMember={crewMember}></ManGridSkills>
            )}
          </div>
        </div>
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
