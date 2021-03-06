import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import Crew from "../Data/dataCrew";
import { IconButton, Avatar } from "@material-ui/core";
import PageviewIcon from "@material-ui/icons/Pageview";
import SwapHorizontalCircleIcon from "@material-ui/icons/SwapHorizontalCircle";

/* function getFileName(params) {
  const fileName = `/avatars/${params.getValue("lastName")}.jpg`;
  console.log(fileName);
  return fileName;
} */

const columns = [
  { field: "id", headerName: "#", width: 20 },
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
  { field: "rank", headerName: "Rank", width: 70 },
  { field: "lastName", headerName: "Surname", width: 90 },
  { field: "firstName", headerName: "Name", width: 80 },
  {
    field: "button",
    headerName: "",
    width: 50,
    renderCell: (params) => (
      <IconButton
        onClick={() =>
          console.log("button Person", params.getValue("lastName"))
        }
        color="primary"
        aria-label="crew"
      >
        {params.getValue("id") === 3 ||
        params.getValue("id") === 5 ||
        params.getValue("id") === 9 ||
        params.getValue("id") === 10 ? (
          <SwapHorizontalCircleIcon style={{ color: "red" }} fontSize="small" />
        ) : (
          <PageviewIcon fontSize="small" />
        )}
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
    <div
      style={{
        height: "76.4%",
        width: "96%",
        margin: 10,
        overflowX: "hidden",
        overflowY: "scroll",
      }}
    >
      <DataGrid
        headerHeight={26}
        rowHeight={40}
        className={[classes.color, classes.typography]}
        rows={rows}
        columns={columns}
        pdaysSize={3}
        hideFooterPagination={true}
        autoHeight={true}
      />
    </div>
  );
}
