import React from "react";
import ProfileAdminData from "../../DataTable/ProfileAdminData/ProfileAdminData";

function FromProfile() {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="container emp-profile">
      <form method="post">
        <div className="row">
          <div className="col-md-4">
            <div className="profile-img">
              <img
                src={`https://i.pravatar.cc/500?img=${user.taiKhoan}`}
                alt={""}
              />
              <div className="file btn btn-lg btn-primary">
                Change Photosss
                <input type="file" name="file" />
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="profile-head">
              <h5>{user.hoTen}</h5>
              <h6>{user.maLoaiNguoiDung}</h6>
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
        </div>
        <div className="row">
          <div className="col-md-4">
            <div className="profile-work">
              <p>WORK LINK</p>
              <a href="/#">Website Link</a>
              <br />
              <a href="/#">Bootsnipp Profile</a>
              <br />
              <a href="/#">Bootply Profile</a>
              <p>SKILLS</p>
              <a href="/#">Web Designer</a>
              <br />
              <a href="/#">Web Developer</a>
              <br />
              <a href="/#">WordPress</a>
              <br />
              <a href="/#">WooCommerce</a>
              <br />
              <a href="/#">PHP, .Net</a>
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
                    <p>{user.taiKhoan}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Name</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.hoTen}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Email</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.email}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>Phonddde</label>
                  </div>
                  <div className="col-md-6">
                    <p>{user.soDT}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label />
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
                </div>
                <div className="row">
                  <ProfileAdminData />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FromProfile;
