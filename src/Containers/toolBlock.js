import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ToolCard from "../Containers/toolCard";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function SpacingGrid({ tools, handleMainMenu }) {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={3}>
          {tools.map((value) => (
            <Grid key={value} item>
              <ToolCard
                title={value}
                className={classes.card}
                handleMainMenu={handleMainMenu}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}
