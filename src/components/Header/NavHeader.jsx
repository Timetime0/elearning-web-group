import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./NavHeaderStyle";
import { withStyles } from "@material-ui/core/styles";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { COURSE_LIST_SERVICES_SAGA } from "../../redux/types/CourseListType";

import "./NavHeader_Style.scss";

function NavHeader(props) {
  let listCourse = useSelector((state) => state.CourseReducer.courseList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: COURSE_LIST_SERVICES_SAGA,
    });
  }, [dispatch]);
  const history = useHistory();

  // tạo liên kết bằng useHistory
  const nextPath = () => {
    history.push("/login");
  };
  const nextPathSignUp = () => {
    history.push("/register");
  };
  const { classes } = props;
  return (
    <div>
      {/* <AppBar position="static" className={classes.nav}>
        <Toolbar className={classes.nav_Content}>
          <div className={classes.nav_Content}>
            <NavLink to="/">
              <IconButton color="inherit">
                <img
                  src="/img/logoElearning.png"
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
      </AppBar> */}

      <header>
        <nav className="navbar navbar-expand-md navigation" id="navbar">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand">
              <img
                className={classes.img}
                src="/img/logoElearning.png"
                alt="true"
                className="logoNav"
              />
            </NavLink>

            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fa fa-bars"></i>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <NavLink to="/" className="nav-link">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="department.html"
                    id="dropdown02"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Course <ArrowDropDownIcon className="icofont-thin-down" />
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="dropdown02">
                    {listCourse.map((list, index) => {
                      return (
                        <li key={index}>
                          <NavLink to="/" className="dropdown-item">
                            {list.maDanhMuc}
                          </NavLink>
                        </li>
                      );
                    })}
                    {/* <li><NavLink to="/" className="dropdown-item">{list.tenDanhMuc}</NavLink></li> */}
                  </ul>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/contact" className="nav-link">
                    Contact
                  </NavLink>
                </li>
                <li className="nav-item">
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.buttonSignUp}
                    onClick={nextPathSignUp}
                  >
                    Sign Up
                  </Button>
                </li>
                <li className="nav-item ">
                  <Button
                    variant="outlined"
                    color="secondary"
                    className={classes.buttonLogin}
                    onClick={nextPath}
                  >
                    Login
                  </Button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default withStyles(useStyles, { withTheme: true })(NavHeader);
