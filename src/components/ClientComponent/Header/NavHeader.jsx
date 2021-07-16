import React, { useEffect } from "react";

import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { Link, NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { COURSE_LIST_SERVICES_SAGA } from "../../../redux/types/CourseListType";

function NavHeader(props) {
  const { list } = props;
  const detailList = () => {
    history.push("/course-from-list/" + list.maDanhMuc);
  };

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
    <header className="site-header site-header__home-three ">
      <div className="topbar-one">
        <div className="container">
          <div className="topbar-one__left">
            <a href="#">needhelp@kipso.com</a>
            <a href="#">444 888 0000</a>
          </div>
          <div className="topbar-one__right">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-lg navbar-light header-navigation stricky">
        <div className="container clearfix">
          <div className="logo-box clearfix">
            <NavLink className="navbar-brand" to="/">
              <img
                src="assets/images/logo-light.png"
                className="main-logo"
                width={128}
                alt="Awesome Image"
              />
            </NavLink>
            <button className="menu-toggler" data-target=".main-navigation">
              <span className="kipso-icon-menu" />
            </button>
          </div>

          <div className="main-navigation">
            <ul className=" navigation-box">
              <li className="current">
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/">Pages</NavLink>
                <ul class="sub-menu">
                  <li>
                    <Link to="/about">About Page</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/pricing">Pricing Plans</Link>
                  </li>
                  <li>
                    <Link to="/faq">FAQ'S</Link>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/course-list">Courses</NavLink>
                <ul className="sub-menu">
                  {listCourse.map((list, index) => {
                    return (
                      <li>
                        <NavLink to="/">{list.tenDanhMuc}</NavLink>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <NavLink to="/teacher">Teachers</NavLink>
                <ul className="sub-menu">
                  <li>
                    <a href="teachers.html">Teachers</a>
                  </li>
                  <li>
                    <a href="team-details.html">Teachers Details</a>
                  </li>
                  <li>
                    <a href="become-teacher.html">Become Teacher</a>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/news">News</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
          <div className="right-side-box">
            <div className="header__social">
              <Link to="https://twitter.com/?lang=vi">
                <i className="fab fa-twitter" />
              </Link>
              <Link to="https://www.facebook.com/">
                <i className="fab fa-facebook-square" />
              </Link>
              <Link to="https://www.pinterest.com/">
                <i className="fab fa-pinterest-p" />
              </Link>
              <Link to="https://www.instagram.com/">
                <i className="fab fa-instagram" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default NavHeader;
