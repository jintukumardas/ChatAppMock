import { React } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import { useDispatch } from "react-redux";

function UserCard(props) {
  const dispatch = useDispatch();
  const { userPhoto, userName, visibility, unread } = props;
  const handleMsgPhoto = () => {
    dispatch({
      type: "UPDATE_PHOTO",
      payload: {
        userPhoto: userPhoto,
      },
    });
  };

  return (
    <Card
      variant="outlined"
      className="user-name"
      sx={{ border: "none", ":hover": { backgroundColor: "#F5F8FD" } }}
      onClick={handleMsgPhoto}
    >
      <CardHeader
        avatar={<Avatar src={userPhoto} aria-label="user photo" />}
        title={
          <div
            className="activeNames"
            style={{ display: "flex", alignItems: "center" }}
          >
            <div className="user-name">{userName}</div>
            {visibility && (
              <div className="active-conversations-count-inside">{unread}</div>
            )}
          </div>
        }
      />
    </Card>
  );
}

export default UserCard;
