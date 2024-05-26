import React from "react";
import NotificationDropdown from "./NotificationDropdown";
import ProfileDropdown from "./ProfileDropdown";

function MenuBar() {
  return (
    <div className="menu-bar">
      
      <h1 className="sevillana-regular">Social Media Wall</h1>
      <div className="menu-options">
        <NotificationDropdown />
        <ProfileDropdown />
      </div>
    </div>
  );
}

export default MenuBar;
