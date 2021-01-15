import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton } from "@material-ui/core";
import DvrIcon from "@material-ui/icons/Dvr";

const columns = [
  { field: "id", headerName: "#", width: 5 },
  {
    field: "shipImage",
    headerName: "ship",
    width: 140,
    renderCell: (params) => (
      <img
        style={{ width: 100 }}
        alt="Ship"
        src={`/ships/${params.getValue("sShipName")}_s.png`}
      />
    ),
  },
  { field: "sShipName", headerName: "Ship Name", width: 120 },
  { field: "sRank", headerName: "Rank", width: 120 },
  { field: "boc", headerName: "BOC", width: 120 },
  { field: "eoc", headerName: "EOC", width: 120 },
  {
    field: "button",
    headerName: "Button",
    width: 60,
    renderCell: (params) => (
      <IconButton
        onClick={() =>
          console.log("button Person", params.getValue("sShipName"))
        }
        color="primary"
        aria-label="crew"
      >
        <DvrIcon fontSize="small" />
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

export default function ManGridService({ crewMember }) {
  const classes = useStyles();

  let rows = [];

  if (crewMember && crewMember !== []) {
    rows = crewMember.service;
  } else {
    rows = [{}];
  }

  return (
    <div style={{ height: 460, width: "98%", margin: 10 }}>
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
