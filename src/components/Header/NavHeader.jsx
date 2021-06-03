import React from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import { style } from "./NavHeaderStyle";

function NavHeader(props) {
  const { classes } = props;
  return (
    <div>
      <div>
        <div>
          <img src="/" alt="" />
        </div>
        <div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div>
          <ul className={classes.navUlIcon}>
            <li>Home</li>
            <li>Course</li>
            <li>Teachers</li>
            <li>News</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default withStyles(style)(NavHeader);
