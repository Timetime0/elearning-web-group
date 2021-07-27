import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
// Get user form localStorage

const user = JSON.parse(localStorage.getItem("user"));
// log out user
const logOut = () => {
  localStorage.clear();
  window.location.reload(false);
};
function SideBar() {
  return (
    <nav className="sidebar">
      <div className="text icon_user">
        <AccountCircleIcon />
      </div>

      <div className="text">{user?.hoTen}</div>
      <ul>
        <li className="active">
          <a href="/">Dashboard</a>
        </li>
        <li>
          <a href="/" className="feat-btn">
            Features
            <span className="fas fa-caret-down first" />
          </a>
          <ul className="feat-show">
            <li>
              <a href="/">Pages</a>
            </li>
            <li>
              <a href="/">Elements</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/" className="serv-btn">
            Services
            <span className="fas fa-caret-down second" />
          </a>
          <ul className="serv-show">
            <li>
              <a href="/">App Design</a>
            </li>
            <li>
              <a href="/">Web Design</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="/">Portfolio</a>
        </li>
        <li>
          <a href="/">Overview</a>
        </li>
        <li>
          <a href="/">Shortcuts</a>
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
