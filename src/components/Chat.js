import { makeStyles } from "@mui/styles";
import { Avatar, Box, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import { useSelector } from "react-redux";
import React, { useRef, useEffect } from "react";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}));

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
  },
  chatContainer: {
    flex: 1,
    overflowY: "auto",
    padding: theme.spacing(2),
    "&::-webkit-scrollbar": {
      display: "none",
    },
    "-ms-overflow-style": "none",
    "scrollbar-width": "none",
  },
  messageContainer: {
    display: "flex",
    marginBottom: theme.spacing(2),
    alignItems: "flex-end",
    "&:last-child": {
      marginBottom: 0,
    },
  },
  message: {
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    maxWidth: "100%",
    wordBreak: "break-word",
  },
  right: {
    color: theme.palette.primary.contrastText,
    alignSelf: "flex-end",
    borderTopRightRadius: 0,
    display: "flex",
    justifyContent: "flex-end",
    width: "100%",
  },
  left: {
    backgroundColor: "white",
    color: theme.palette.text.primary,
    alignSelf: "flex-start",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  name: {
    fontWeight: "bold",
    marginRight: theme.spacing(1),
  },
  time: {
    fontSize: "0.8rem",
    marginLeft: theme.spacing(1),
    color: "lightgray",
  },
  rightMsgBody: {
    backgroundColor: "#1D2440",
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
  },
  online: {
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: theme.palette.success.main,
    border: `2px solid ${theme.palette.background.paper}`,
  },
}));

function Chat(props) {
  const classes = useStyles();
  const { messages } = props;
  const userPhoto = useSelector((state) => state.userPhoto);
  const chatEndRef = useRef(null);

  // Scroll to the end of the chat when a new message is received
  useEffect(() => {
    chatEndRef.current.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <Box sx={{ boxShadow: "none" }} className={classes.root}>
      <Paper
        sx={{ boxShadow: "none", backgroundColor: "#f5f8fd" }}
        className={classes.chatContainer}
      >
        {messages.map((message, index) => (
          <Box key={index} className={classes.messageContainer}>
            {message.sender === "me" ? (
              <Box display="flex" alignItems="flex-end" flexGrow={1}>
                <Box
                  className={`${classes.message} ${classes.right}`}
                  component="div"
                >
                  <div className={classes.rightMsgBody}>
                    <Typography variant="body1" className={classes.rightMsg}>
                      {message.text}
                    </Typography>
                    <Box display="flex" alignItems="center">
                      <Typography variant="caption" className={classes.time}>
                        {message.time}
                      </Typography>
                    </Box>
                  </div>
                </Box>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  <Avatar alt="Remy Sharp" src={require("./avatar.png")} />
                </StyledBadge>
              </Box>
            ) : (
              <Box display="flex" alignItems="flex-end" flexGrow={1}>
                <StyledBadge
                  overlap="circular"
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  variant="dot"
                >
                  {console.log(userPhoto)}
                  <Avatar alt={message.sender.name} src={userPhoto} />
                </StyledBadge>
                <Box
                  className={`${classes.message} ${classes.left}`}
                  component="div"
                >
                  <Typography variant="body1">{message.text}</Typography>
                  <Typography variant="caption" className={classes.time}>
                    {message.time}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        ))}
        <div ref={chatEndRef} />
      </Paper>
    </Box>
  );
}

export default Chat;
