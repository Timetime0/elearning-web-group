import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import useStyles from "./NavHeaderStyle";
import { withStyles } from "@material-ui/core/styles";

import Icon from "@material-ui/core/Icon";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
function NavHeader(props) {
  const { classes } = props;
  return (
    <div>
      <AppBar position="static" className={classes.nav}>
        <Toolbar className={classes.nav_Content}>
          <div>
            <Typography color="primary">
              <h1>Elearning</h1>
            </Typography>
          </div>
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
          <Typography color="primary" variant="h6" className={classes.title}>
            Home
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Pages
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Course
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Teachers
          </Typography>
          <Typography variant="h6" className={classes.title}>
            New
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Contact
          </Typography>
          <Typography variant="h6" className={classes.title}>
            Login
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withStyles(useStyles, { withTheme: true })(NavHeader);
