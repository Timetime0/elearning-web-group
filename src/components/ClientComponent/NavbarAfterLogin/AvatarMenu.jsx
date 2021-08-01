import React from "react";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";

export default function AvatarMenu() {
  // Get user form localStorage

  // const user = JSON.parse(localStorage.getItem("user"));
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

  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },

    circle: {
      border: "1px solid white",
      borderRadius: "50%",
      margin: "0 30px",
    },
  }));
  const classes = useStyles();

  return (
    <div className={classes.circle}>
      <Avatar
        src="/broken-image.jpg"
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={logOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
