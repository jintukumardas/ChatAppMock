import { makeStyles } from "@mui/styles";
import { Avatar, Box, Grid, Typography } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "42%",
    borderRadius: 10,
    backgroundColor: "#F9FAFD",
    padding: theme.spacing(1),
    boxSizing: "border-box",
    width:"100%",
    marginBottom: "10px",
  },
  rectangle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    height: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    margin: "auto",
    padding: theme.spacing(1),
  },
  rectangleIcon: {
    fontSize: 20,
    marginRight: theme.spacing(1),
  },
  currentWeek: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: theme.spacing(1),
  },
  activity: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: theme.spacing(1),
  },
  activityChart: {
    height: "80%", // Change height to 100%
    width: "100%", // Change width to 100%
  },
  activityBar: {
    width: "20.28%", // 100% / 7 days = 14.28%
    height: ({ userActivity }) => `${userActivity}px`,
    backgroundImage: "url('https://i.imgur.com/CcUe3WA.png')",
    backgroundSize: "contain",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  dayOfWeek: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  rejectIcon: {
    position: "relative",
    display: "inline-block",
    width: "24px",
    height: "24px",
  },
  crossIcon: {
    position: "absolute",
    right: "0",
    bottom: "0",
    width: "8px",
    height: "8px",
    backgroundColor: "white",
    transform: "rotate(45deg)",
    "&::before, &::after": {
      content: '""',
      position: "absolute",
      width: "8px",
      height: "1px",
      backgroundColor: "black",
      transform: "translate(-50%, -50%)",
    },
    "&::before": {
      top: "50%",
      left: "0",
    },
    "&::after": {
      top: "0",
      left: "50%",
    },
  },
}));

export default function ACard({ userActivity }) {
  const classes = useStyles({ userActivity });
  const data = [
    { day: "Mon", value: 20 },
    { day: "Tue", value: 35 },
    { day: "Wed", value: 10 },
    { day: "Thu", value: 50 },
    { day: "Fri", value: 15 },
    { day: "Sat", value: 30 },
    { day: "Sun", value: 45 },
  ];

  return (
    <Box className={classes.container}>
      <Grid container spacing={1} alignItems="center" justifyContent="center" >
        <Grid item xs={6}>
        <Box className={classes.rectangle} sx={{backgroundColor:"#D9E4FD"}}>
            <Avatar
              alt="Time"
              src={require("./time_avatar.png")}
              style={{ width: "100px" }}
              variant="square"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
        <Box className={classes.rectangle} sx={{backgroundColor:"#E3F6F3"}}>
            <Avatar
              alt="Atendeed"
              src={require("./atendeed_avatar.png")}
              style={{ width: "100px" }}
              variant="square"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
        <Box className={classes.rectangle} sx={{backgroundColor:"#F7F3FF"}}>
            <Avatar
              alt="Meetings"
              src={require("./meeting_avatar.png")}
              style={{ width: "100px" }}
              variant="square"
            />
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box className={classes.rectangle} sx={{backgroundColor:"#FFF1E8"}}>
            <Avatar
              alt="Rejections"
              src={require("./rejected_avatar.png")}
              style={{ width: "100px" }}
              variant="square"
            />
          </Box>
        </Grid>
      </Grid>
      <div className={classes.currentWeek}>
        <Typography variant="subtitle1" fontWeight="bold">
          Current Week
        </Typography>
        <Typography variant="caption" className={classes.activity}>
          Activity
        </Typography>
      </div>
      <div className={classes.activityChart}>
        <img
          src={require("./activity.png")}
          alt="activity"
          width={300}
          height={120}
        />
      </div>
    </Box>
  );
}
