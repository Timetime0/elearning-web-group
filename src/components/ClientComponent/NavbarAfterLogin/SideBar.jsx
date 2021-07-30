import React, { useEffect, useState } from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import HomeIcon from "@material-ui/icons/Home";
import SendIcon from "@material-ui/icons/Send";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { VIEW_PROFILE_USER_SAGA } from "../../../redux/types/AdminType/GetUserListType";
// Get user form localStorage

function SideBar() {
  const user = JSON.parse(localStorage.getItem("user"));
  // log out user
  const logOut = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  return (
    <nav className="sidebar">
      <div className="text icon_user">
        <AccountCircleIcon />
      </div>

      <div className="text">{user?.hoTen}</div>
      <ul>
        <li className="active">
          <a href="/">
            <HomeIcon style={{ margin: "0 5px" }} />
            Home
          </a>
        </li>
        <li>
          <NavLink to={`/profile/${user.taiKhoan}`} className="feat-btn">
            <AssignmentIndIcon style={{ margin: "0 5px" }} />
            Profile
          </NavLink>
        </li>
        <li>
          <a href="/" className="serv-btn">
            <SendIcon style={{ margin: "0 5px" }} />
            Message
          </a>
        </li>

        <li>
          <button onClick={logOut}>
            <ExitToAppIcon style={{ margin: "0 5px" }} />
            logOut
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default SideBar;
