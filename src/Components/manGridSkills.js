import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Rating from "@material-ui/lab/Rating";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { green, blue, pink } from "@material-ui/core/colors";
import Avatar from "@material-ui/core/Avatar";
import BeenhereTwoToneIcon from "@material-ui/icons/BeenhereTwoTone";
import "./Styles/grids.css";

export default function ManGridSkills({ crewMember }) {
  /*   const labels = {
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
  }; */

  const useStyles = makeStyles({
    root: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      height: 220,
    },
    card: {
      maxWidth: 134,
      fontSize: 10,
      height: 220,
      backgroundColor: "#457B9D",
      margin: 5,
    },
    avatars: {
      display: "flex",
      justifyContent: "flex-start",
      flexDirection: "line",
      margin: 5,
    },
    media: {
      mxHeight: 50,
    },
    pink: {
      backgroundColor: pink[500],
    },
    blue: {
      backgroundColor: blue[900],
    },
    green: {
      color: "#fff",
      backgroundColor: green[800],
    },
  });

  const classes = useStyles();

  /*   const skillAvatar = (skill) => {
    // try {
    //   const path = `../Assets/icons/${skill}.png`;
    //   console.log("path: ", path);
    //   require(path);
    //   console.log("exists! ", path);
    //   return <Avatar className={classes.pink}>{skill}</Avatar>;
    // } catch {
    return <Avatar className={classes.blue}>{skill}</Avatar>;
    // }
  };

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1); */

  console.log("man skills", crewMember.skills);

  return (
    <div className="item-block-container man-skills-block">
      {crewMember.skills.map((selSkill) => {
        return (
          <div className={classes.root}>
            <Card className={classes.card}>
              <CardActionArea style={{ padding: 4 }}>
                <div className={classes.avatars}>
                  {/* {skillAvatar(selSkill.skill)} */}
                  <Avatar className={classes.blue}>{selSkill.grade}</Avatar>
                  <Avatar className={classes.green}>
                    <BeenhereTwoToneIcon />
                  </Avatar>
                </div>
                <CardContent style={{ padding: 4 }}>
                  <Rating
                    name="hover-feedback"
                    value={selSkill.level}
                    precision={0.5}
                    onChange={(event, newValue) => {
                      // setValue(newValue);
                    }}
                    onChangeActive={(event, newHover) => {
                      // setHover(newHover);
                    }}
                  />
                  <Typography gutterBottom variant="h6" color="contrastText">
                    {selSkill.skill}
                  </Typography>
                  <Typography
                    variant="body2"
                    style={{ fontSize: 11, marginTop: 4 }}
                    color="textSecondary"
                    component="p"
                  >
                    {selSkill.desc}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </div>
        );
      })}
    </div>
  );
}
