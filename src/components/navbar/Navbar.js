import React from "react";
import DashboardSearch from "../search/DashboardSearch";
import { ReactComponent as AvatarProfile } from "../../img-assets/avatar_profile.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav_icon" onclick="toggleSidebar()">
        <i className="fa fa-bars" aria-hidden="true"></i>
      </div>
      <div className="containar">
        <div className="nav__content">
          <div className="navbar__left">
            <DashboardSearch />
          </div>
          <div className="navbar__right">
            <a href="#">
              <AvatarProfile />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
