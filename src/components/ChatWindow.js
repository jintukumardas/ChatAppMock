import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 2,
    padding: "10px",
    margin: "10px",
  },
  attachmentIcon: {
    transform: "rotate(45deg)",
  },
  smileyIcon: {
    color: "#ffc107",
  },
  inputField: {
    margin: "5px",
    marginBottom: "20px",
    width: "80%",
    height: "40px",
    borderRadius: "10px",
  },
  sendButton: {
    marginLeft: "10px",
    height: "40px",
  }
}));

function ChatWindow() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    dispatch({
      type: "ADD_MESSAGE",
      payload: {
        sender: "me",
        text: message,
        time: "Now",
      },
    });
    setMessage("");
  };

  const handleKeyDown = (e) => {
    if (e.keyCode === 13) {
      dispatch({ type: "ADD_MESSAGE", payload: { text: message, sender: "me", time: "Now" } });
      setMessage("");
    }
  };

  return (
    <div className={classes.root}>
      <IconButton>
        <AttachFileIcon className={classes.attachmentIcon} />
      </IconButton>
      <div className={classes.inputField}>
        <TextField
          fullWidth
          placeholder="Enter your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <InsertEmoticonIcon className={classes.smileyIcon} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </div>
      <Button
        variant="contained"
        className={classes.sendButton}
        endIcon={<SendIcon />}
        onClick={handleSendMessage}
      >
        Send
      </Button>
    </div>
  );
}

export default ChatWindow;
