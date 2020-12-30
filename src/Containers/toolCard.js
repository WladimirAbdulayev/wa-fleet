import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Ships from "../Assets/deco/ships.jpg";
import Men from "../Assets/deco/men.jpg";
import Docs from "../Assets/deco/docs.jpg";
import NavigationIcon from "@material-ui/icons/Navigation";

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
});

export default function MediaCard({ title, handleMainMenu }) {
  const classes = useStyles();

  let img = "";
  if (title === "Ships") img = Ships;
  if (title === "Men") img = Men;
  if (title === "Docs") img = Docs;

  return (
    <Card className={classes.root} color="primary">
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={img}
          title="Contemplative Reptile"
        />
        <CardContent onClick={() => handleMainMenu(title)}>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <NavigationIcon color="secondary"></NavigationIcon>
        </Button>
      </CardActions>
    </Card>
  );
}