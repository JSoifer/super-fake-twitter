import React from "react";
import Avatar from "./Avatar.jsx";
import UserName from "./UserName.jsx";
import ProfileLinks from "./ProfileLinks.jsx";

function Profile() {

  const styles = {
    profileStyle: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      height: "100%"
    },
    flexboxChild: {
      height: "12.5vh",
      width: "100%",
      borderSizing: "border-box",
    },
    background: {
      backgroundColor: "lightblue",
      borderBottom: "1px solid grey"
    },
    profileInfoBox: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between"
    },
    avatar: {
      position: "absolute",
      top: "calc(12.5vh - 37.5px)",
      left: "10px"
    },
    userNameBox: {
      textAlign: "right",
      marginRight: "15px"
    },
    profileLinksBox: {
      marginBottom: "20px"
    }
  };

  return (
    <div>
      <div className="profileContainer" style={styles.profileStyle}>
        <div id="backgroundSection" style={Object.assign({}, styles.flexboxChild, styles.background)}>
        </div>
        <div style={Object.assign({}, styles.flexboxChild, styles.profileInfoBox)}>
          <div style={styles.userNameBox}>
            <UserName/>
          </div>
          <div style={styles.profileLinksBox}>
            <ProfileLinks/>
          </div>
        </div>
        <div style={styles.avatar}>
          <Avatar
            size="75x75"
          />
        </div>
      </div>
    </div>
  );
}

export default Profile;
