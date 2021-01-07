/* import React from "react";
import "./Styles/card.css";

import Avatar from "@material-ui/core/Avatar";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";

import AppBar from "@material-ui/core/AppBar";
import ToolBar from "@material-ui/core/ToolBar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import SaveIcon from "@material-ui/icons/Save";
import DeleteIcon from "@material-ui/icons/Delete";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    border: 0,
    borderRadius: 100,
  },
});

function ButtonStyled() {
  const classes = useStyles();
  return <Button className={classes.root}>Hey! New Style!</Button>;
}

function CheckboxUnit() {
  const [checked, setChecked] = React.useState(true);

  return (
    <Checkbox>
      checked ={checked}
      onChange={(e) => setChecked(e.target.checked)}
    </Checkbox>
  );
}

export default function card() {
  return (
    <div>
      <div className="card-container">
        <div>
          <div>
            <ButtonStyled></ButtonStyled>
            <CheckboxUnit></CheckboxUnit>
          </div>

          <div className="card-container">
            <ButtonGroup variant="contained">
              <Button
                startIcon={<SaveIcon />}
                color="primary"
                style={{ fontSize: 12 }}
              >
                Material UI
              </Button>
              <Button
                startIcon={<DeleteIcon />}
                color="secondary"
                style={{ fontSize: 12 }}
              >
                Discard
              </Button>
            </ButtonGroup>

            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />

            <TextField variant="filled" type="date"></TextField>
          </div>
        </div>
      </div>
    </div>
  );
}
 */
