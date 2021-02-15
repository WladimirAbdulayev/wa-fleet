import React from "react";
import "./Styles/officeStaff.css";

import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  large: {
    width: 100,
    height: 100,
  },
  inline: {
    display: "inline",
    fontSize: "0.8rem",
  },
}));

export default function CustomizedTimeline({ ship }) {
  const classes = useStyles();
  const { techStaff = [] } = ship;

  console.log("CustomizedTimeline: ", ship);
  console.log("tech Staff: ", techStaff);

  if (techStaff.length > 0) {
    return (
      <div className='item-block-container'>
        <List component='nav' aria-label='main mailbox folders'>
          {techStaff.map(function (staff) {
            return (
              <ListItem>
                <ListItemAvatar>
                  <Avatar
                    className={classes.large}
                    alt='Office Staff Name'
                    src={`/officeStaff/${staff.firstName}_${staff.lastName}.jpg`}
                  ></Avatar>
                </ListItemAvatar>

                <ListItemText
                  primary={`${staff.firstName} ${staff.lastName}`}
                  secondary={
                    <React.Fragment>
                      <Typography
                        component='span'
                        variant='body2'
                        className={classes.inline}
                        style={{ color: "#457B9D" }}
                      >
                        {staff.position}
                      </Typography>
                      <p></p>
                      <Typography
                        component='span'
                        variant='body2'
                        className={classes.inline}
                        style={{ color: "white" }}
                      >
                        {staff.phone}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            );
          })}
        </List>
      </div>
    );
  } else {
    return <h2>Office List is Empty</h2>;
  }
}
