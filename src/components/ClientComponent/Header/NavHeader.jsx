import React, { useEffect, useState } from "react";

// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { Link, NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { COURSE_LIST_SERVICES_SAGA } from "../../../redux/types/CourseListType";

function NavHeader(props) {
  // Lấy khóa học theo danh mục

  let listCourse = useSelector((state) => state.CourseReducer.courseList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: COURSE_LIST_SERVICES_SAGA,
    });
  }, [dispatch]);
  const history = useHistory();

  const detailList = (value) => {
    history.push("/course-from-list/" + value);
  };

  // Hiển thị drop menu responsive

  // const [click, setClick] = useState(false);

  // tạo liên kết bằng useHistory
  // const nextPath = () => {
  //   history.push("/login");
  // };
  // const nextPathSignUp = () => {
  //   history.push("/register");
  // };

  // Show navbar
  const [show, setShow] = useState(false);
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  useEffect(() => {
    // Hiện nav khi scroll xuống
    window.addEventListener("scroll", controlNavbar);
    // Xóa nav khi scroll lên cùng
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, []);

  return (
    <header className="site-header site-header__home-three ">
      <div className="topbar-one">
        <div className="container">
          <div className="topbar-one__left">
            <a href="/">needhelp@kipso.com</a>
            <a href="/">444 888 0000</a>
          </div>
          <div className="topbar-one__right">
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </div>
        </div>
      </div>

      <nav
        className={` navbar navbar-expand-lg navbar-light header-navigation stricky ${
          show && `stricked-menu stricky-fixed`
        }`}
      >
        <div className="container clearfix">
          <div className="logo-box clearfix">
            <NavLink
              className="navbar-brand"
              to="/"
              exact={true}
              activeClassName="active"
            >
              <img
                src="assets/images/logo-light.png"
                className="main-logo"
                width={128}
                alt={"img"}
              />
            </NavLink>
            <button className="menu-toggler" data-target=".main-navigation ">
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
                <ul className="sub-menu">
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
                <NavLink to="/course-list" activeClassName="active">
                  Courses
                </NavLink>
                <ul className="sub-menu">
                  {listCourse.map((list, index) => {
                    return (
                      <li key={index} style={{ cursor: "pointer" }}>
                        <Link
                          onClick={() => {
                            detailList(list.maDanhMuc);
                          }}
                        >
                          {list.tenDanhMuc}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li>
                <NavLink to="/teacher">Teachers</NavLink>
                <ul className="sub-menu">
                  <li>
                    <a href="/teachers">Teachers</a>
                  </li>
                  <li>
                    <a href="/team-details">Teachers Details</a>
                  </li>
                  <li>
                    <a href="/become-teacher">Become Teacher</a>
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
