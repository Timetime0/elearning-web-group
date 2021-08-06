import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  VIEW_PROFILE_USER_SAGA,
  EDIT_PROFILE_USER_SAGA,
} from "../../../../redux/types/AdminType/GetUserListType";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import { Button, makeStyles } from "@material-ui/core";
import { useParams } from "react-router-dom";

function ProfileAdminData() {
  // Get user form localStorage

  // Get userProfile
  let profile = useSelector((state) => state.UserReducer.profileUser);
  const course = profile.chiTietKhoaHocGhiDanh;
  const dispatch = useDispatch();
  const { taiKhoan } = useParams();
  let [tk] = useState({
    taiKhoan: taiKhoan,
  });
  useEffect(() => {
    dispatch({
      type: VIEW_PROFILE_USER_SAGA,
      user: tk,
    });
  }, [dispatch, tk]);

  // see password
  const [visible, setVisible] = useState(false);
  const clickVisible = () => {
    setVisible((show) => !show);
  };

  // show edit
  const [showEdit, setShowEdit] = useState(false);
  const clickToShowEdit = () => {
    setShowEdit((show) => !show);
  };

  const useStyles = makeStyles((theme) => ({
    buttonConfirm: {
      // margin: theme.spacing(1),
      margin: "50px 10px",
      background: "green",
    },

    buttonCancel: {
      margin: "50px 10px",
      background: "red",
    },
  }));
  const classes = useStyles();

  // Edit profile
  let [userRes, setUserRes] = useState({});
  useEffect(() => {
    setUserRes();
  }, [dispatch]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserRes({
      ...userRes,
      [name]: value,
    });
  };

  const onSubmitRes = (event) => {
    event.preventDefault();
    dispatch({
      type: EDIT_PROFILE_USER_SAGA,
      user: userRes,
    });
  };

  return (
    <div className="container emp-profile">
      <form onSubmit={(event) => onSubmitRes(event)} method="post">
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
              <h6>{profile.maLoaiNguoiDung}</h6>
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
              </ul>
            </div>
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
                  <span style={{ cursor: "pointer" }} onClick={clickVisible}>
                    {visible ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ProfileAdminData;
