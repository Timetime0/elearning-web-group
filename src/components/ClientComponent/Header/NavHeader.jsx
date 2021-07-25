import React, { useEffect, useState } from "react";

// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { Link, NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { COURSE_LIST_SERVICES_SAGA } from "../../../redux/types/CourseListType";
import Appbar from "./Appbar";

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
  const [showMenu, setShowMenu] = useState(false);

  const clickToShowMenu = () => {
    setShowMenu((prev) => !prev);
  };
  const showMenuRes = () => {
    if (window.innerWidth > 1200) {
      setShowMenu(false);
    }
  };

  // Hiển thị drop down sub menu

  let dropDownSubMenu = document.getElementsByClassName("sub-menu");
  let countSub = 1;
  const clickToShowSubMenu = () => {
    for (let i = 0; i < dropDownSubMenu.length; i++) {
      if (countSub % 2 === 0) {
        dropDownSubMenu[i].style.display = "none";
        countSub++;
      } else {
        dropDownSubMenu[i].style.display = "block";
        countSub++;
      }
    }
  };

  useEffect(() => {
    // Hiện nav khi scroll xuống
    window.addEventListener("resize", showMenuRes);
    // Xóa nav khi scroll lên cùng
    return () => {
      window.removeEventListener("resize", showMenuRes);
    };
  }, []);
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

  // Show menu sau đăng nhập:
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <header className="site-header site-header__home-three ">
      {user?.maLoaiNguoiDung === "HV" ? (
        <Appbar />
      ) : (
        <div className="topbar-one">
          <div className="container">
            <div className="topbar-one__left">
              <a href="mailto:quanlydaotao@ou.edu.vn">quanlydaotao@ou.edu.vn</a>
              <a href="/">(028) 39300072</a>
            </div>
            <div className="topbar-one__right">
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      )}
      <nav
        className={` navbar navbar-expand-lg navbar-light header-navigation stricky ${
          show && `stricked-menu stricky-fixed`
        }`}
      >
        <div className="container clearfix">
          <div className="logo-box clearfix">
            <a
              className="navbar-brand"
              href="/"
              exact={true}
              activeClassName="active"
            >
              <img
                src="assets/images/logo-light.png"
                className="main-logo"
                width={128}
                alt={"img"}
              />
            </a>
            <button
              className="menu-toggler"
              data-target=".main-navigation "
              onClick={clickToShowMenu}
            >
              <span className="kipso-icon-menu" />
            </button>
          </div>
          {showMenu ? (
            <div
              className={`main-navigation showen ${showMenu && `showen`}`}
              style={{ display: "block" }}
            >
              <ul className=" navigation-box">
                <li className="current">
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Pages</a>
                  <button
                    className="sub-nav-toggler"
                    onClick={clickToShowSubMenu}
                  >
                    {" "}
                    <span className="sr-only">Toggle navigation</span>{" "}
                    <span className="icon-bar" /> <span className="icon-bar" />{" "}
                    <span className="icon-bar" />{" "}
                  </button>
                  <ul className="sub-menu">
                    <li>
                      <Link to="/about">About</Link>
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
                  <button
                    className="sub-nav-toggler"
                    onClick={clickToShowSubMenu}
                  >
                    {" "}
                    <span className="sr-only">Toggle navigation</span>{" "}
                    <span className="icon-bar" /> <span className="icon-bar" />{" "}
                    <span className="icon-bar" />{" "}
                  </button>
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
                  <button
                    className="sub-nav-toggler"
                    onClick={clickToShowSubMenu}
                  >
                    {" "}
                    <span className="sr-only">Toggle navigation</span>{" "}
                    <span className="icon-bar" /> <span className="icon-bar" />{" "}
                    <span className="icon-bar" />{" "}
                  </button>
                  <ul className="sub-menu">
                    <li>
                      <a href="/teacher">Teachers</a>
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
          ) : null}
          <div className="main-navigation">
            <ul className=" navigation-box">
              <li className="current">
                <a href="/">Home</a>
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
              <a href="https://twitter.com/?lang=vi">
                <i className="fab fa-twitter" />
              </a>
              <a href="https://www.facebook.com/">
                <i className="fab fa-facebook-square" />
              </a>
              <a href="https://www.pinterest.com/">
                <i className="fab fa-pinterest-p" />
              </a>
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default NavHeader;
