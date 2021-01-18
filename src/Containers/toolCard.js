import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import IconButton from "@material-ui/core/IconButton";

import Typography from "@material-ui/core/Typography";

import Ships from "../Assets/deco/ships.jpg";
import Crew from "../Assets/deco/crew.jpg";
import Stats from "../Assets/deco/stats.jpg";
import Budget from "../Assets/deco/budget.jpg";
import Voyage from "../Assets/deco/voyage.jpg";
import Cargo from "../Assets/deco/cargo.jpg";

import NavigationIcon from "@material-ui/icons/Navigation";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 140,
    background: "#1d3557c2",
    borderRadius: 10,
    color: "white",
  },
  media: {
    height: 140,
  },

  controls: {
    alignItems: "center",
    padding: 8,
    height: 32,
  },

  wrapIcon: { justifyContent: "center" },
});

export default function MediaCard({ title, handleMainMenu }) {
  const classes = useStyles();

  let history = useHistory();
  let img = "";
  if (title === "Ships") img = Ships;
  if (title === "Crew") img = Crew;
  if (title === "Stats") img = Stats;
  if (title === "Budget") img = Budget;
  if (title === "Voyage") img = Voyage;
  if (title === "Cargo") img = Cargo;


  return (
    <Card
      className={classes.root}
      color="primary"
      onClick={() => handleMainMenu(title, history)}
    >
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          // image={"/deco/"+{title}+".jpg"}
          title="Menu Item"
        />
        <CardContent className={classes.controls}>
          <Typography gutterBottom variant="h6" component="h2" align="center">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.wrapIcon}>
        <IconButton
          onClick={() => handleMainMenu(title, history)}
          color="secondary"
          aria-label="Go!"
        >
          <NavigationIcon color="secondary" />
        </IconButton>
      </CardActions>
    </Card>
  );
}
