import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import AvatarMenu from "./AvatarMenu";
import SideBar from "./SideBar";

const useStyles = makeStyles({
  //   list: {
  //     width: 250,
  //   },
  //   fullList: {
  //     width: "auto",
  //   },
  button: {
    backgroundColor: "transparent",
    backgroundImage: "none",
    border: "1px solid #fff",
    borderRadius: "4px",
    padding: " 9px 9px",
    position: "absolute",
    marginRight: "0px",
    top: "8px",
    display: "block",
    cursor: "pointer",
    outline: "none",
    margin: "0 50px",
  },
  stick: {
    backgroundColor: "#fff",
    borderEadius: "1px",
    display: "block",
    height: "1px",
    width: "20px",
    marginTop: "4px",
  },
});

export default function NavbarAfterLogin() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <SideBar />
      </List>
    </div>
  );

  return (
    <div className="topbar-one" style={{ background: "#2DA397" }}>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "5px 0",
        }}
      >
        <div className="topbar-one__left" style={{ display: "inline" }}>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <button
                onClick={toggleDrawer(anchor, true)}
                className={classes.button}
              >
                <span className={classes.stick} />
                <span className={classes.stick} />
                <span className={classes.stick} />
              </button>
              <Drawer
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </div>
        <div className="topbar-one__right" style={{ display: "inline" }}>
          <AvatarMenu />
        </div>
      </div>
    </div>
  );
}
