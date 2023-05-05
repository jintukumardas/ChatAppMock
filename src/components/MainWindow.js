import React, { useState } from "react";
import "../Style.css";
import { faGear, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ActiveConversations from "./ActiveConversations";
import ChatWindow from "./ChatWindow";
import Chat from "./Chat";
import Box from "@mui/material/Box";
import OnboardClientsCard from "./OnboardClientsCard";
import RightCard from "./RightCard";
import ActivityCard from "./ActivityCard";
import { useSelector } from "react-redux";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import IconButton from "@mui/material/IconButton";

function MainWindow() {
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const toggleUserMenu = () => {
    setUserMenuOpen(!userMenuOpen);
  };

  const messages = useSelector((state) => state.convo);

  const onClose = () => {
    setUserMenuOpen(false);
  };

  return (
    <div className="centered-div">
      <div className="card">
        <div className="row">
          <div className="column">
            <div className="column sidebar-left">
              <img
                src={require("./logo.png")}
                alt="Logo"
                className="logo"
                width={200}
              />
              <div className="user-card">
                <img
                  className="avatar"
                  src={require("./avatar.png")}
                  alt="User avatar"
                />
                <div className="user-info">
                  <h3 className="user-name" onClick={toggleUserMenu}>
                    John Doe <FontAwesomeIcon icon={faGear} />
                  </h3>
                  <span className="job-title">Lead UI/UX Designer</span>
                </div>
                <div className="active-switch">
                  <label className="switch small-switch">
                    <input type="checkbox" defaultChecked />
                    <span className="slider round"></span>
                  </label>
                  <span className="activeName">Active</span>
                </div>
              </div>
              <div className="convoList">
                <ActiveConversations style={{ overflowY: "scroll" }} />
              </div>
            </div>
          </div>
          <div className="column middle-column">
            <Box sx={{ height: "85%" }}>
              <Chat messages={messages} />
              <ChatWindow />
            </Box>
          </div>
          <div className="column right-column" style={{ display: "flex", flexDirection: "column" }}>
            <RightCard style={{ flexGrow: 1}}/>
            <ActivityCard style={{ flexGrow: 1, overflow: "auto", padding: "10px", margin: "10px", fontSize: "14px" }} />
            <OnboardClientsCard style={{ flexGrow: 1, overflow: "auto", padding: "10px", margin: "10px", fontSize: "14px" }} />
          </div>
        </div>
      </div>
      {userMenuOpen && (
        <div className="overlay">
          <Card
          >
            <CardHeader
              title="User Settings"
              action={
                <IconButton onClick={onClose}>
                  <FontAwesomeIcon icon={faTimes} />
                </IconButton>
              }
            />
            <div className="card-content">
              <ul>
                <li>Edit Profile</li>
                <li>Change Password</li>
                <li>Logout</li>
              </ul>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}

export default MainWindow;
