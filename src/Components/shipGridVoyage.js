import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";

import { green, pink } from "@material-ui/core/colors";
import { IconButton } from "@material-ui/core";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#09244be0",
    color: "white",
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontSize: 12,
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  { field: "port", headerName: "Port", width: 120 },
  { field: "operation", headerName: "Ops", width: 60 },
  {
    field: "days",
    headerName: "Days",
    type: "number",
    width: 70,
  },
  {
    field: "op-Icon",
    headerName: "Icon",
    width: 60,
    renderCell: (params) => (
      <IconButton
        onClick={() =>
          console.log("button Person", params.getValue("lastName"))
        }
        color="primary"
        aria-label="crew"
      >
        <FolderIcon fontSize="small" />
      </IconButton>
    ),
  },
];

export default function DataGridDemo({ ship }) {
  const classes = useStyles();
  let rows = [];
  if (ship.reise) {
    rows = ship.reise;
  } else {
    rows = [{ id: 1, port: "No Voyage Data", operation: "-", days: 0 }];
  }

  return (
    <div style={{ height: 320, width: "96%", margin: 10 }}>
      <DataGrid
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
