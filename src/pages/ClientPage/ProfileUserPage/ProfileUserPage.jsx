import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { VIEW_PROFILE_USER_SAGA } from "../../../redux/types/AdminType/GetUserListType";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DataCourseUserProfile from "./DataCourseUserProfile";

function ProfileUserPage() {
  // Get user form localStorage
  const user = JSON.parse(localStorage.getItem("user"));

  // Get userProfile
  let profile = useSelector((state) => state.UserReducer.profileUser);
  const course = profile.chiTietKhoaHocGhiDanh;
  const dispatch = useDispatch();
  let [taiKhoan] = useState({
    taiKhoan: user.taiKhoan,
  });
  useEffect(() => {
    dispatch({
      type: VIEW_PROFILE_USER_SAGA,
      user: taiKhoan,
    });
  }, [dispatch, taiKhoan]);
  console.log(taiKhoan);
  console.log(profile);

  // see password
  const [visible, setVisible] = useState(false);
  const clickVisible = () => {
    setVisible((show) => !show);
  };

  return (
    <div className="profileuser_container">
      <section className="inner-banner">
        <div className="container">
          <ul className="list-unstyled thm-breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
          </ul>
          <h2 className="inner-banner__title">User Profile</h2>
        </div>
      </section>

      <div className="container emp-profile">
        <form method="post">
          <div className="row">
            <div className="col-md-4">
              <div className="profile-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS52y5aInsxSm31CvHOFHWujqUx_wWTS9iM6s7BAm21oEN_RiGoog"
                  alt={""}
                />
                <div className="file btn btn-lg btn-primary">
                  Change Photo
                  <input type="file" name="file" />
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="profile-head">
                <h5>{profile.hoTen}</h5>
                <h6>{user.maLoaiNguoiDung}</h6>
                <p className="proile-rating">
                  RANKINGS : <span>8/10</span>
                </p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#profile"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-2">
              {/* <input
                type="submit"
                className="profile-edit-btn"
                name="btnAddMore"
                defaultValue="Edit Profile"
              /> */}
            </div>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="profile-work">
                <p>WORK LINK</p>
                <a href>Website Link</a>
                <br />
                <a href>Bootsnipp Profile</a>
                <br />
                <a href>Bootply Profile</a>
                <p>SKILLS</p>
                <a href>Web Designer</a>
                <br />
                <a href>Web Developer</a>
                <br />
                <a href>WordPress</a>
                <br />
                <a href>WooCommerce</a>
                <br />
                <a href>PHP, .Net</a>
                <br />
              </div>
            </div>
            <div className="col-md-8">
              <div className="tab-content profile-tab" id="myTabContent">
                <div
                  className="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>User Id</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profile.taiKhoan}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Name</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profile.hoTen}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Email</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profile.email}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Phone</label>
                    </div>
                    <div className="col-md-6">
                      <p>{profile.soDT}</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <label>Password</label>
                    </div>
                    <div className="col-md-6">
                      <input
                        className="password_profile"
                        type={visible ? `text` : `password`}
                        value={profile.matKhau}
                        disabled
                      />
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={clickVisible}
                      >
                        {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div className="row">
                    <div className="col-md-6">
                      <label>Courses</label>
                    </div>
                    <div className="col-md-6">
                      <p>
                        {course?.map((key, index) => {
                          return <span>{index}</span>;
                        })}
                      </p>
                    </div>
                  </div>
                  <div className="row">
                    <DataCourseUserProfile course={course} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProfileUserPage;
