import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './NavHeaderStyle'
import { withStyles } from "@material-ui/core/styles";

 function NavHeader(props) {
  const {classes} = props
  return (
    <div className={classes.nav}>
      <AppBar position="static">
        <Toolbar>
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
          <Button color="inherit">Login</Button>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
export default withStyles(useStyles, { withTheme: true })(NavHeader)