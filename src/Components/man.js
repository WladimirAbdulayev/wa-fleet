import "./Styles/man.css";
import IconButton from "@material-ui/core/IconButton";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ArtTrackIcon from "@material-ui/icons/ArtTrack";

export default function Man({ man, showCrewMember }) {
  const manPic = "/crew/" + man.lastName + ".jpg";

  return (
    <div className="man-container">
      <img className="man-image-s" alt="man" src={manPic} />
      <p className="man-secondary-text-center-rank">{man.rank}</p>
      <p className="man-secondary-text-center">
        {man.firstName} {man.lastName}
      </p>

      <div className="man-nav">
        <IconButton
          size="small"
          onClick={() => showCrewMember(man)}
          color="primary"
          aria-label="crew"
        >
          <AccountCircleIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" color="secondary" aria-label="delete">
          <ArtTrackIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}
