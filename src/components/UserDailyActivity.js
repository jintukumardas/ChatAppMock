import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import DayActivity from "./DayActivity";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    maxWidth: 500,
    maxHeight: 100,
  },
  dayContainer: {
    display: "flex",
  },
}));

const UserDailyActivity = ({ data }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container className={classes.dayContainer} spacing={4}>
        {data.map((activity) => (
          <DayActivity
            key={activity.day}
            day={activity.day}
            value={activity.value}
          />
        ))}
      </Grid>
    </div>
  );
};

export default UserDailyActivity;
