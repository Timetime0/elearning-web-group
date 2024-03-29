import React, { useEffect, useState } from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import { Badge } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { VIEW_PROFILE_USER_SAGA } from "../../../redux/types/AdminType/GetUserListType";

export default function AvatarMenu() {
  // Get user form localStorage
  // log out user
  const logOut = () => {
    localStorage.clear();
    window.location.reload(false);
  };

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const user = JSON.parse(localStorage.getItem("user"));
  const idImg = user?.soDT?.slice(-2);

  const history = useHistory();
  const handleProfile = () => {
    history.push(`/profile/${user.taiKhoan}`);
  };
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },

    circle: {
      borderRadius: "50%",
      margin: "0 12px 0 30px",
    },
  }));
  const classes = useStyles();

  const random = () => {
    return Math.floor(Math.random() * 20) + 5;
  };

  let profile = useSelector((state) => state.UserReducer.profileUser);
  const course = profile.chiTietKhoaHocGhiDanh;
  const dispatch = useDispatch();
  let [taiKhoan] = useState({
    taiKhoan: user.taiKhoan,
  });
  useEffect(() => {
    dispatch({
      type: VIEW_PROFILE_USER_SAGA,
      user: taiKhoan,
    });
  }, [dispatch, taiKhoan]);
  return (
    <div style={{ display: "flex" }}>
      <div style={{ display: "flex" }}>
        <MenuItem>
          <Badge badgeContent={random()} color="secondary">
            <MailIcon style={{ color: "white" }} />
          </Badge>
        </MenuItem>
        <MenuItem>
          <Badge badgeContent={random()} color="secondary">
            <NotificationsIcon style={{ color: "white" }} />
          </Badge>
        </MenuItem>
        <MenuItem>
          <Badge badgeContent={course?.length} color="secondary">
            <ShoppingCartIcon style={{ color: "white" }} />
          </Badge>
        </MenuItem>
      </div>
      <div className={classes.circle}>
        <Avatar
          src={`https://i.pravatar.cc/500?img=${idImg}`}
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleClick}
          style={{ backgroundColor: "transparent", cursor: "pointer" }}
        />
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleProfile}>Profile</MenuItem>
          <MenuItem onClick={handleProfile}>My account</MenuItem>
          <MenuItem onClick={logOut}>Logout</MenuItem>
        </Menu>
      </div>
      <span style={{ color: "white" }}>Hi {user.hoTen}</span>
    </div>
  );
}
