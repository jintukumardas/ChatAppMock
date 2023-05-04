import { Card, CardContent, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import {
  AccountCircle,
  Assignment,
  CalendarToday,
  Chat,
} from "@mui/icons-material";
import ActivityGraph from "./Activity";

const useStyles = makeStyles((theme) => ({
  card: {
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2, 3),
    width: 300,
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    backgroundColor: "#3F51B5",
    borderRadius: "50%",
    marginRight: theme.spacing(2),
  },
  icon: {
    fontSize: 32,
    color: "#fff",
  },
}));

function FourCards() {
  const classes = useStyles();

  return (
    <div class="four-cards">
      <Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <div className={classes.iconWrapper}>
              <AccountCircle className={classes.icon} />
            </div>
            <div>
              <Typography variant="subtitle1">Profile</Typography>
              <Typography variant="h6">John Doe</Typography>
            </div>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <div className={classes.iconWrapper}>
              <Assignment className={classes.icon} />
            </div>
            <div>
              <Typography variant="subtitle1">Tasks</Typography>
              <Typography variant="h6">5 Pending</Typography>
            </div>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <div className={classes.iconWrapper}>
              <CalendarToday className={classes.icon} />
            </div>
            <div>
              <Typography variant="subtitle1">Calendar</Typography>
              <Typography variant="h6">Today's Schedule</Typography>
            </div>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card className={classes.card}>
            <div className={classes.iconWrapper}>
              <Chat className={classes.icon} />
            </div>
            <div>
              <Typography variant="subtitle1">Messages</Typography>
              <Typography variant="h6">3 Unread</Typography>
            </div>
          </Card>
        </Grid>
      </Grid>
      <ActivityGraph />
    </div>
  );
}

export default FourCards;
