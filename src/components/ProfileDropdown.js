import React from "react";

function ProfileDropdown() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Profile</button>
      <div className="dropdown-content">
        <p>Profile Settings</p>
        <p>Logout</p>
      </div>
    </div>
  );
}

export default ProfileDropdown;
