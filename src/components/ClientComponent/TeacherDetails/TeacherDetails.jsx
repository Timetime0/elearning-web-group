import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { VIEW_PROFILE_USER_SAGA } from "../../../redux/types/AdminType/GetUserListType";

import ExploreItemForTeacher from "../CourseForTeacher/ExploreItemForTeacher";

function TeacherDetails() {
  let profile = useSelector((state) => state.UserReducer.profileUser);
  const course = profile.chiTietKhoaHocGhiDanh;
  const idImg = profile?.soDT?.slice(-2);
  const dispatch = useDispatch();
  const { taiKhoan } = useParams();
  useEffect(() => {
    dispatch({
      type: VIEW_PROFILE_USER_SAGA,
      user: { taiKhoan: taiKhoan },
    });
  }, [dispatch, taiKhoan]);

  return (
    <div>
      <section className="inner-banner" style={{ padding: "20px" }}>
        <div className="container">
          <ul className="list-unstyled thm-breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">
              <a href="/">Teachers Details</a>
            </li>
          </ul>
          <h2 className="inner-banner__title">{profile.hoTen}</h2>
        </div>
      </section>
      <section className="team-details">
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-5">
              <div className="team-details__content">
                <h2 className="team-details__title">Read my story</h2>
                <p className="team-details__text">
                  Lorem Ipsum is simply dummy text of the printing and type
                  industry. Lorem Ipsum has been the standard dummy text ever
                  since the when an unknown was popularised. It has survived not
                  only five centuries, but also the leap into electronic
                  typesetting remaining unchanged.
                </p>
                <h3 className="team-details__subtitle">Certificate</h3>
                <ul className="list-unstyled team-details__certificate-list">
                  <li>
                    <img src="/images/certificate-1-1.png" alt={"img"} />
                  </li>
                  <li>
                    <img src="/images/certificate-1-2.png" alt={"img"} />
                  </li>
                </ul>
                <div className="progress-one__wrap">
                  <div className="progress-one__single">
                    <div className="progress-one__top">
                      <h3 className="progress-one__title">Front End</h3>
                      <h3 className="progress-one__percent">
                        <span className="counter">98</span>%
                      </h3>
                    </div>
                    <div className="progress-one__bar">
                      <span
                        className="wow slideInLeft"
                        style={{ width: "98%" }}
                      />
                    </div>
                  </div>
                  <div className="progress-one__single">
                    <div className="progress-one__top">
                      <h3 className="progress-one__title">Back End</h3>
                      <h3 className="progress-one__percent">
                        <span className="counter">64</span>%
                      </h3>
                    </div>
                    <div className="progress-one__bar">
                      <span
                        className="wow slideInLeft"
                        style={{ width: "64%" }}
                      />
                    </div>
                  </div>
                  <div className="progress-one__single">
                    <div className="progress-one__top">
                      <h3 className="progress-one__title">English</h3>
                      <h3 className="progress-one__percent">
                        <span className="counter">34</span>%
                      </h3>
                    </div>
                    <div className="progress-one__bar">
                      <span
                        className="wow slideInLeft"
                        style={{ width: "34%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img
                    src={`https://i.pravatar.cc/500?img=${idImg}`}
                    alt={"img"}
                  />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <a href={`/teacher-details/${profile.taiKhoan}`}>
                      {profile.hoTen}
                    </a>
                  </h2>
                  <p className="team-one__designation">Teacher</p>
                </div>
                <div className="team-one__social">
                  <a href="/">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="/">
                    <i className="fab fa-facebook-square" />
                  </a>
                  <a href="/">
                    <i className="fab fa-pinterest-p" />
                  </a>
                  <a href="/">
                    <i className="fab fa-instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="course-one__top-title thm-gray-bg">
        <div className="container">
          <div className="block-title mb-0">
            <h2 className="block-title__title">
              Courses i am <br />
              offering
            </h2>
          </div>
        </div>
      </section>
      <section className="course-one course-one__teacher-details">
        <div className="container">
          <div className="row">
            {course?.map((course, index) => {
              return (
                <ExploreItemForTeacher
                  course={course}
                  key={index}
                  profile={profile}
                />
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default TeacherDetails;
