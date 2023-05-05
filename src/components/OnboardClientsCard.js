import React from "react";
import {
  Card,
  CardHeader,
  Typography,
  Button,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

const useStyles = makeStyles((theme) => ({
  card: {
    marginTop:"20px",
    padding: "10px",
    position: "relative",
    textAlign: "center",
  },
  cardHeader: {
    textAlign: "center",
    padding: "16px",
    position: "relative",
  },
  cardHeaderText: {
    fontSize: "1.5rem",
    fontWeight: 500,
    marginBottom: "10px",
  },
  cardHeaderSubText: {
    fontSize: "0.8rem",
    fontWeight: 300,
  },
  planeImage: {
    position: "absolute",
    top: "-18px",
    left: "calc(50% - 70px)",
    width: "150px",
  },
  copyLinkButton: {
    backgroundColor:"#004DFB",
    marginTop: theme.spacing(2),
    '&:hover': {
      backgroundColor: "#004DFB",
    }
  },
  copyLinkIcon: {
    margin: theme.spacing(1),
    transform: "rotate(-45deg)",
    fontSize: "0.8rem"
  }
}));

function OnboardClientsCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card} sx={{overflow:"visible", backgroundColor:"#F5F7FB"}}>
      <img
        src={require("./plane.png")}
        alt="Flying plane"
        className={classes.planeImage}
      />
      <CardHeader
        className={classes.cardHeader}
        title={
          <Typography variant="h6" className={classes.cardHeaderText}>
            Onboard Clients
          </Typography>
        }
        subheader={
          <Typography variant="body2" className={classes.cardHeaderSubText}>
            Share the link with prospects and discuss all stuff
          </Typography>
        }
      />
      <Button variant="contained" className="copyLinkButton" sx={{height:"42px", fontSize:"0.8rem"}}>Copy Link <LinkOutlinedIcon className={classes.copyLinkIcon}/></Button>
    </Card>
  );
}

export default OnboardClientsCard;
