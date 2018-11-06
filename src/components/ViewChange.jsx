import React from "react";

function ViewChange() {

  const viewChangeContainer = {
    display: "flex",
    flexDirection: "row",
    height: "50px"
  }

  const button = {
    border: "1px solid grey",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    cursor: "pointer"
  };

  return (
    <div style={viewChangeContainer}>
      <div style={button}>
        Home
      </div>
      <div style={button}>
        Notifications
      </div>
      <div style={button}>
        Messages
      </div>
    </div>
  );
}

export default ViewChange;
