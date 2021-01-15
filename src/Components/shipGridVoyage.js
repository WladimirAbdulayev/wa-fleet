import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { makeStyles } from "@material-ui/core/styles";
import { IconButton, Avatar } from "@material-ui/core";
import { green, pink } from "@material-ui/core/colors";
import FolderIcon from "@material-ui/icons/Folder";

const useStyles = makeStyles((theme) => ({
  color: {
    backgroundColor: "#09244be0",
    color: "white",
  },
  typography: {
    fontFamily: ["Inter", "sans-serif"].join(","),
    fontWeight: 300,
    fontSize: "0.8em",
  },
  pink: {
    color: theme.palette.getContrastText(pink[500]),
    backgroundColor: pink[500],
  },
  green: {
    color: "#fff",
    backgroundColor: green[500],
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
}));

const columns = [
  { field: "id", headerName: "ID", width: 45 },
  { field: "port", headerName: "Port", width: 120 },
  { field: "operation", headerName: "O.", width: 45 },
  {
    field: "icon",
    headerName: "",
    width: 60,
    renderCell: (params) => (
      <Avatar
        style={{ height: 14, width: 14 }}
        alt="Operation Icon"
        src={`/icons/${params.getValue("operation")}.svg`}
      />
    ),
  },
  {
    field: "days",
    headerName: "D.",
    type: "number",
    width: 50,
  },
  {
    field: "op-Icon",
    headerName: "F.",
    width: 50,
    renderCell: (params) => (
      <IconButton
        onClick={() =>
          console.log("button Person", params.getValue("lastName"))
        }
        style={{ color: "#1D3557" }}
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
