import React, { useEffect, useState } from "react";
// import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

import { Link, NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { COURSE_LIST_SERVICES_SAGA } from "../../../redux/types/CourseListType";
import NavbarAfterLogin from "../NavbarAfterLogin/NavbarAfterLogin";

function NavHeader() {
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

  // show search bar
  const [showSearchBar, setShowSearchBar] = useState(false);

  const clickToShowSearchBar = () => {
    setShowSearchBar((prev) => !prev);
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

  const [showSubMenu1, setShowSubMenu1] = useState(false);

  const clickToShowSubMenu1 = () => {
    setShowSubMenu1((show) => !show);
  };

  const [showSubMenu2, setShowSubMenu2] = useState(false);

  const clickToShowSubMenu2 = () => {
    setShowSubMenu2((show) => !show);
  };
  const [showSubMenu3, setShowSubMenu3] = useState(false);

  const clickToShowSubMenu3 = () => {
    setShowSubMenu3((show) => !show);
  };

  useEffect(() => {
    // Hiện nav khi scroll xuống
    window.addEventListener("resize", showMenuRes);
    // Xóa nav khi scroll lên cùng
    return () => {
      window.removeEventListener("resize", showMenuRes);
    };
  }, []);
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
        <NavbarAfterLogin />
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
        className={` navbar navbar-expand-lg navbar-light header-navigation stricky original
        ${show && `stricked-menu stricky-fixed`}`}
      >
        <div>
          <i classname="fab fa-twitter">
            <i classname="fab fa-facebook-square">
              <i classname="fab fa-pinterest-p">
                <i classname="fab fa-instagram">
                  <i classname="kipso-icon-magnifying-glass"></i>
                </i>
              </i>
            </i>
          </i>
        </div>

        <div className="container clearfix">
          <div className="logo-box clearfix">
            <a
              className="navbar-brand"
              href="/"
              exact={true}
              activeClassName="active"
            >
              <img
                src="./../../../assets/images/logo-light.png "
                className="main-logo"
                width={128}
                alt={"img"}
                style={{ marginBottom: "30px", width: "180px" }}
              />
            </a>
            <button
              className="menu-toggler"
              data-target=".main-navigation "
              onClick={clickToShowMenu}
              style={{ marginBottom: "40px" }}
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
                  {showSubMenu1 ? (
                    <button
                      className="sub-nav-toggler"
                      onClick={clickToShowSubMenu1}
                      style={{ top: "12%" }}
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />{" "}
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  ) : (
                    <button
                      className="sub-nav-toggler"
                      onClick={clickToShowSubMenu1}
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />{" "}
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  )}
                  <button
                    className="sub-nav-toggler"
                    onClick={clickToShowSubMenu1}
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar" /> <span className="icon-bar" />
                    <span className="icon-bar" />
                  </button>
                  {showSubMenu1 ? (
                    <ul className="sub-menu" style={{ display: "block" }}>
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
                  ) : (
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
                  )}
                </li>
                <li>
                  <NavLink
                    exact
                    to="/course-list"
                    activeClassName="active_menu"
                  >
                    Courses
                  </NavLink>
                  {showSubMenu2 ? (
                    <button
                      className="sub-nav-toggler"
                      onClick={clickToShowSubMenu2}
                      style={{ top: "9%" }}
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />{" "}
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  ) : (
                    <button
                      className="sub-nav-toggler"
                      onClick={clickToShowSubMenu2}
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />{" "}
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  )}
                  {showSubMenu2 ? (
                    <ul className="sub-menu" style={{ display: "block" }}>
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
                  ) : (
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
                  )}
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
                  <NavLink to="/teacher" exact activeClassName="active_menu">
                    Teachers
                  </NavLink>
                  {showSubMenu3 ? (
                    <button
                      className="sub-nav-toggler"
                      onClick={clickToShowSubMenu3}
                      style={{ top: "20%" }}
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />{" "}
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  ) : (
                    <button
                      className="sub-nav-toggler"
                      onClick={clickToShowSubMenu3}
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />{" "}
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                  )}
                  {showSubMenu3 ? (
                    <ul className="sub-menu" style={{ display: "block" }}>
                      <li>
                        <NavLink
                          to="/teacher"
                          exact
                          activeClassName="active_menu"
                        >
                          Teachers
                        </NavLink>
                      </li>
                      <li>
                        <a href="/become-teacher">Become Teacher</a>
                      </li>
                    </ul>
                  ) : (
                    <ul className="sub-menu">
                      <li>
                        <NavLink
                          to="/teacher"
                          exact
                          activeClassName="active_menu"
                        >
                          Teachers
                        </NavLink>
                      </li>
                      <li>
                        <a href="/become-teacher">Become Teacher</a>
                      </li>
                    </ul>
                  )}
                </li>
                <li>
                  <NavLink to="/news" exact activeClassName="active_menu">
                    News
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact" exact activeClassName="active_menu">
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
          ) : null}
          <div className="main-navigation">
            <ul className=" navigation-box">
              <li className="current">
                <a href="/" style={{ color: "white" }}>
                  Home
                </a>
              </li>
              <li>
                <a href="/">Pages</a>

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
                <NavLink to="/course-list" exact activeClassName="active_menu">
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
                <NavLink to="/teacher" exact activeClassName="active_menu">
                  Teachers
                </NavLink>
                <ul className="sub-menu">
                  <li>
                    <a href="/become-teacher">Become Teacher</a>
                  </li>
                </ul>
              </li>
              <li>
                <NavLink to="/news" exact activeClassName="active_menu">
                  News
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" exact activeClassName="active_menu">
                  Contact
                </NavLink>
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
              <a href="https://www.instagram.com/">
                <i className="fab fa-instagram" />
              </a>
              <button
                className="header__search-btn search-popup__toggler"
                onClick={clickToShowSearchBar}
              >
                <i className="kipso-icon-magnifying-glass" />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <div className={`search-popup   ${showSearchBar && `active`}`}>
        <div
          className="search-popup__overlay custom-cursor__overlay"
          onClick={clickToShowSearchBar}
        >
          <div className="cursor" />
          <div className="cursor-follower" />
        </div>
        <div className="search-popup__inner">
          <form action="#" className="search-popup__form">
            <input
              type="text"
              name="search"
              placeholder="Type here to Search...."
            />
            <button type="submit">
              <i className="kipso-icon-magnifying-glass" />
            </button>
          </form>
        </div>
      </div>
    </header>
  );
}
export default NavHeader;
