import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import useStyles from "./NavHeaderStyle";
import { withStyles } from "@material-ui/core/styles";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { Link, NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { COURSE_LIST_SERVICES_SAGA } from "../../../redux/types/CourseListType";

function NavHeader(props) {
  const { list } = props;
  const detailList = () => {
    history.push("/course-from-list/" + list.maDanhMuc)
  }


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
  return (
    <div>
      <header className="site-header site-header__home-three ">
        <div className="topbar-one">
          <div className="container">
            <div className="topbar-one__left">
              <a href="#">needhelp@kipso.com</a>
              <a href="#">444 888 0000</a>
            </div>
            <div className="topbar-one__right">
              <NavLink to="/login">Login</NavLink>
              <NavLink to="/register">Register</NavLink>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky stricked-menu stricky-fixed">
          <div className="container clearfix">
            <div className="logo-box clearfix">
              <a className="navbar-brand" href="/">
                <img
                  src="/images/logo-light.png"
                  className="main-logo"
                  width={128}
                  alt="Awesome Image"
                />
              </a>
              <button className="menu-toggler" data-target=".main-navigation">
                <span className="kipso-icon-menu" />
              </button>
            </div>
            <div className="main-navigation">
              <ul className=" navigation-box">
                <li className="current">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="#">Pages</a>
                  <ul className="sub-menu">
                    <li>
                      <NavLink to="/about">About Page</NavLink>
                    </li>
                    <li>
                      <NavLink to="/gallery">Gallery</NavLink>
                    </li>
                    <li>
                      <NavLink to="/pricing">Pricing Plans</NavLink>
                    </li>
                    <li>
                      <NavLink to="/faq">FAQ'S</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/course-list">Courses</NavLink>
                  <ul className="sub-menu">
                    {listCourse.map((list, index) => {
                      return (

                        <li>
                          <NavLink to="/course-list">{list.maDanhMuc}</NavLink>
                          <ul className="sub-menu">
                            <li><Link onClick={() => {
                              detailList();
                            }}>{list.tenDanhMuc}</Link></li>
                          </ul>
                        </li>
                      )
                    })}
                  </ul>
                </li>
                <li>
                  <NavLink to="/teacher">Teachers</NavLink>
                  <ul className="sub-menu">
                    <li>
                      <NavLink to="/teacher">Teachers</NavLink>
                    </li>
                    <li>
                      <NavLink to="/teacher-details">Teachers Details</NavLink>
                    </li>
                    <li>
                      <NavLink to="/become-teacher">Become Teacher</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="news.html">News</a>
                  <ul className="sub-menu">
                    <li>
                      <NavLink to="/news">News Page</NavLink>
                    </li>
                    <li>
                      <NavLink to="/news-details">News Details</NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="right-side-box">
              <div className="header__social">
                <a href="#">
                  <i className="fab fa-twitter" />
                </a>
                <a href="#">
                  <i className="fab fa-facebook-square" />
                </a>
                <a href="#">
                  <i className="fab fa-pinterest-p" />
                </a>
                <a href="#">
                  <i className="fab fa-instagram" />
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
export default NavHeader;
