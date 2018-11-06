import React from "react";

function ProfileLinks() {

  const ProfileLinksStyle = {
    display: "flex",
    justifyContent: "space-around",
  }
  const linkStyle = {
    textDecoration: "none",
    fontSize:  ".8rem"
  }
  return (
    <div className="container" style={ProfileLinksStyle} >
      <div>
        <a style={linkStyle} href="#">TWEETS</a>
      </div>
      <div>
        <a style={linkStyle} href="#">FOLLOWING</a>
      </div>
      <div>
        <a style={linkStyle} href="#">FOLLOWERS</a>
      </div>
    </div>
  );
}

export default ProfileLinks;
