import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Crew from "../Data/dataCrew";
import { IconButton, Avatar } from "@material-ui/core";
import PageviewIcon from "@material-ui/icons/Pageview";

/* function getFileName(params) {
  const fileName = `/avatars/${params.getValue("lastName")}.jpg`;
  console.log(fileName);
  return fileName;
} */

const columns = [
  { field: "id", headerName: "#", width: 5 },
  {
    field: "getFileName",
    headerName: "Photo",
    width: 60,
    renderCell: (params) => (
      <Avatar
        alt="Seaman's Name"
        src={`/avatars/${params.getValue("lastName")}.jpg`}
      />
    ),
  },
  { field: "rank", headerName: "Rank", width: 80 },
  { field: "lastName", headerName: "Name", width: 90 },
  { field: "firstName", headerName: "Surname", width: 70 },
  {
    field: "button",
    headerName: "",
    width: 60,
    renderCell: (params) => (
      <IconButton
        onClick={() =>
          console.log("button Person", params.getValue("lastName"))
        }
        color="primary"
        aria-label="crew"
      >
        <PageviewIcon fontSize="small" />
      </IconButton>
    ),
  },
];

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#09244be0",
    color: "white",
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 11,
  },
}));

export default function DataGridDemo({ ship }) {
  const men = Crew.Crew;

  const classes = useStyles();
  let rows = [];
  if (men) {
    rows = men;
  } else {
    rows = [{}];
  }

  return (
    <div style={{ height: 496, width: "96%", margin: 10 }}>
      <DataGrid
        headerHeight={26}
        rowHeight={40}
        className={[classes.color, classes.typography]}
        rows={rows}
        columns={columns}
        pdaysSize={3}
        hideFooterPagination={true}
      />
    </div>
  );
}
