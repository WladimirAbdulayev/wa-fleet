import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Box from "@material-ui/core/Box";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./Styles/grids.css";

export default function ManGridSkills({ crewMember }) {
  const labels = {
    0.5: "Useless",
    1: "Useless+",
    1.5: "Poor",
    2: "Poor+",
    2.5: "Ok",
    3: "Ok+",
    3.5: "Good",
    4: "Good+",
    4.5: "Excellent",
    5: "Excellent+",
  };

  const useStyles = makeStyles({
    root: {
      width: "90%",
      display: "flex",
      alignItems: "center",
    },
    card: {
      maxWidth: 200,
      fontSize: 10,
    },
    media: {
      height: 140,
    },
  });

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const classes = useStyles();

  console.log("man skills", crewMember.skills);

  return (
    <div className="item-container man-skills-block">
      {crewMember.skills.map((selSkill) => {
        return (
          <div className={classes.root}>
            <Card className={classes.card}>
              <CardActionArea>
                <img
                  style={{ width: "100%" }}
                  alt="Skill"
                  src={`/skills/${selSkill.skill}.jpg`}
                />
                <CardContent>
                  <Rating
                    name="hover-feedback"
                    value={selSkill.level}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      setHover(newHover);
                    }}
                  />
                  <Typography gutterBottom variant="h5" component="h2">
                    {selSkill.skill}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    {selSkill.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary">
                  Share
                </Button>
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
