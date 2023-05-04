import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocalPostOfficeOutlinedIcon from "@mui/icons-material/LocalPostOfficeOutlined";
import Inventory2OutlinedIcon from "@mui/icons-material/Inventory2Outlined";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
    marginBottom: "10px",
  },
  centerIcon: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
  },
  emailContainer: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1),
  },
  userContainer: {
    display: "flex",
    alignItems: "center",
    margin: theme.spacing(1),
  },
  archiveContainer: {
    display: "flex",
    justifyContent: "center",
    margin: theme.spacing(1),
  },
  archiveButton: {
    backgroundColor: "white",
    border: `2px solid #074BF3`,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1.5),
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  archiveIcon: {
    color: "#074BF3",
    marginRight: theme.spacing(1),
    fontSize: "1.5rem",
  },
}));

function RightCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} sx={{backgroundColor:"#F5F7FB"}}>
      <CardContent>
        <div className={classes.centerIcon}>
          <img className="avatar" src={require("./hb.png")} alt="User avatar" />
        </div>
        <div className={classes.emailContainer}>
          <LocalPostOfficeOutlinedIcon />
          <Typography variant="body1" component="div" sx={{ marginLeft: 1 }}>
            henryboyd@gmail.com
          </Typography>
        </div>
        <div className={classes.userContainer}>
          <AccountCircleOutlinedIcon />
          <Typography variant="body1" component="div" sx={{ marginLeft: 1 }}>
            Henry Boyd
          </Typography>
        </div>
        <div className={classes.archiveContainer}>
          <button className={classes.archiveButton}>
            <Typography variant="body1">Archive</Typography>
            <Inventory2OutlinedIcon className={classes.archiveIcon} />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}

export default RightCard;
