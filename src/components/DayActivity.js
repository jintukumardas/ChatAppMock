import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    width: "100%",
  },
  dayColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  dayImage: {
    maxHeight: 100,
    width: "20px",
    marginBottom: theme.spacing(1),
  },
}));

const DayActivity = ({ day, value }) => {
  const classes = useStyles();
  const imageUrl = `https://via.placeholder.com/150x200`;

  return (
    <Grid item xs={1} className={classes.root} >
      <div className={classes.dayColumn}>
        <img src={imageUrl} alt={day} className={classes.dayImage} />
        {/* <Typography variant="subtitle2" className={classes.dayName}  style={{ marginRight: '13px' }}>
          {day}
        </Typography> */}
        <Typography variant="subtitle2" className={classes.dayValue}> Mon </Typography>
      </div>
    </Grid>
  );
};

export default DayActivity;
