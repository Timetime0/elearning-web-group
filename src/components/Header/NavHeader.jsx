import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./NavHeaderStyle";
import { withStyles } from "@material-ui/core/styles";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import { NavLink, useHistory } from "react-router-dom";

function NavHeader(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" className={classes.nav}>
        <Toolbar className={classes.nav_Content}>
          <div className={classes.nav_Content}>
            <NavLink to="/">
              <IconButton color="inherit">
                <img
                  src="./img/logoElearning.png"
                  alt="logo"
                  className={classes.logoNav}
                />
              </IconButton>
            </NavLink>
          </div>
          <div className={classes.nav_Content}>
            <div className={classes.icon}>
              <Typography color="primary">
                <TwitterIcon className={classes.icon_Item} />
              </Typography>
              <Typography color="primary">
                <FacebookIcon className={classes.icon_Item} />
              </Typography>
              <Typography color="primary">
                <InstagramIcon className={classes.icon_Item} />
              </Typography>
            </div>
          </div>
          <div className={classes.nav_Content}>
            <NavLink to="/" exact={true} activeClassName={classes.navActive}>
              <Typography
                color="primary"
                variant="h6"
                className={classes.title}
              >
                Home
              </Typography>
            </NavLink>
            <Typography variant="h6" className={classes.title}>
              Pages
            </Typography>
            <NavLink
              to="/course"
              exact={true}
              activeClassName={classes.navActive}
            >
              <Typography variant="h6" className={classes.title}>
                Course
              </Typography>
            </NavLink>

            <NavLink
              to="/teachers"
              exact={true}
              activeClassName={classes.navActive}
            >
              <Typography variant="h6" className={classes.title}>
                Teachers
              </Typography>
            </NavLink>
            <NavLink to="/new" exact={true} activeClassName={classes.navActive}>
              <Typography variant="h6" className={classes.title}>
                New
              </Typography>
            </NavLink>
            <NavLink
              to="/contact"
              exact={true}
              activeClassName={classes.navActive}
            >
              <Typography variant="h6" className={classes.title}>
                Contact
              </Typography>
            </NavLink>
            <NavLink
              to="/login"
              exact={true}
              activeClassName={classes.navActive}
            >
              <Typography variant="h6" className={classes.title}>
                Login
              </Typography>
            </NavLink>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withStyles(useStyles, { withTheme: true })(NavHeader);
