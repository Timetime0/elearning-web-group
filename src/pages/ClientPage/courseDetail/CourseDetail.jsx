import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import NewCourse from "../../../components/ClientComponent/NewCourse/NewCourse";
import { BOOKING_COURSE_SAGA } from "../../../redux/types/BookingCourseType";

// import { withRouter } from "react-router";

import { DETAIL_COURSE_SERVICES_SAGA } from "../../../redux/types/CourseDetailType";
const random = () => {
  return Math.floor(Math.random() * 500) + 100;
};
function CourseDetail() {
  let { maKhoaHoc } = useParams();
  let detail = useSelector((state) => state.CourseReducer.courseDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: DETAIL_COURSE_SERVICES_SAGA,
      data: maKhoaHoc,
    });
  }, [dispatch, maKhoaHoc]);
  const history = useHistory();

  const detailList = (value) => {
    history.push("/course-from-list/" + value);
  };

  // đăng ký khóa học

  const user = JSON.parse(localStorage.getItem("user"));

  let [bookingRes] = useState({
    maKhoaHoc: maKhoaHoc,
    taiKhoan: user.taiKhoan,
  });

  const handleBooking = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Buy This Course",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: BOOKING_COURSE_SAGA,
          user: bookingRes,
        });
      }
    });
  };

  return (
    <div>
      <div>
        <section className="inner-banner">
          <div className="container">
            <ul className="list-unstyled thm-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">
                <a href="/course-detail">Course Details</a>
              </li>
            </ul>
            <h2 className="inner-banner__title">Course Details</h2>
          </div>
        </section>
        <section className="course-details">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="course-details__content">
                  <p className="course-details__author">
                    <img src="/images/team-1-1.jpg" alt={"img"} />
                    by{" "}
                    <a href={`/teacher-details/${detail?.nguoiTao?.taiKhoan}`}>
                      {detail?.nguoiTao?.hoTen}
                    </a>
                  </p>
                  <div className="course-details__top">
                    <div className="course-details__top-left">
                      <h2 className="course-details__title">
                        {detail.tenKhoaHoc}
                      </h2>
                      <div className="course-one__stars">
                        <span className="course-one__stars-wrap">
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                          <i className="fa fa-star" />
                        </span>
                        <span className="course-one__count">4.8</span>
                        <span className="course-one__stars-count">
                          {random()}
                        </span>
                      </div>
                    </div>
                    <div className="course-details__top-right">
                      <p
                        style={{ padding: "5px 15px", cursor: "pointer" }}
                        className="course-one__category"
                        onClick={() => {
                          detailList(detail?.danhMucKhoaHoc?.maDanhMucKhoahoc);
                        }}
                      >
                        {detail?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
                      </p>
                    </div>
                  </div>
                  <div className="course-one__image">
                    <img src={detail.hinhAnh} alt={"img"} />
                    <i className="far fa-heart" />
                  </div>
                  <ul
                    className="course-details__tab-navs list-unstyled nav nav-tabs"
                    role="tablist"
                  >
                    <li>
                      <a
                        className="active"
                        role="tab"
                        data-toggle="tab"
                        href="#overview"
                      >
                        Overview
                      </a>
                    </li>
                    <li>
                      <a
                        className
                        role="tab"
                        data-toggle="tab"
                        href="#curriculum"
                      >
                        Curriculum
                      </a>
                    </li>
                    <li>
                      <a role="tab" data-toggle="tab" href="#review">
                        Reviews
                      </a>
                    </li>
                  </ul>
                  <div className="tab-content course-details__tab-content ">
                    <div
                      className="tab-pane show active  animated fadeInUp"
                      role="tabpanel"
                      id="overview"
                    >
                      <p className="course-details__tab-text">{detail.moTa}</p>
                      <br />
                      <p className="course-details__tab-text">
                        It was popularised in the 1960s with the release of
                        Letraset sheets containing Lorem Ipsum passages, and
                        more recently with desktop publishing software like
                        Aldus PageMaker including versions of lorem ipsum amet
                        finibus eros. Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry’s standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting.
                      </p>

                      <br />
                      <ul className="list-unstyled course-details__overview-list">
                        <li>It has survived not only five centuries</li>
                        <li>
                          Lorem Ipsum is simply dummy text of the new design
                        </li>
                        <li>Printng and type setting ipsum</li>
                        <li>Take a look at our round up of the best shows</li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane  animated fadeInUp"
                      role="tabpanel"
                      id="curriculum"
                    >
                      <h3 className="course-details__tab-title">
                        Starting beginners level course
                      </h3>

                      <br />
                      <p className="course-details__tab-text">
                        Aelltes port lacus quis enim var sed efficitur turpis
                        gilla sed sit Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry’s standard dummy text ever since.
                      </p>

                      <br />
                      <ul className="course-details__curriculum-list list-unstyled">
                        <li>
                          <div className="course-details__curriculum-list-left">
                            <div className="course-details__meta-icon video-icon">
                              <i className="fas fa-play" />
                            </div>
                            <a href="/">Introduction to Editing</a>{" "}
                            <span>Preview</span>
                          </div>
                          <div className="course-details__curriculum-list-right">
                            16 minutes
                          </div>
                        </li>
                        <li>
                          <div className="course-details__curriculum-list-left">
                            <div className="course-details__meta-icon video-icon">
                              <i className="fas fa-play" />
                            </div>
                            <a href="/">Overview of Editing</a>{" "}
                            <span>Preview</span>
                          </div>
                          <div className="course-details__curriculum-list-right">
                            10 minutes
                          </div>
                        </li>
                        <li>
                          <div className="course-details__curriculum-list-left">
                            <div className="course-details__meta-icon file-icon">
                              <i className="fas fa-folder" />
                            </div>
                            <a href="/">Basic Editing Technology</a>
                          </div>
                        </li>
                        <li>
                          <div className="course-details__curriculum-list-left">
                            <div className="course-details__meta-icon quiz-icon">
                              <i className="fas fa-comment" />
                            </div>
                            <a href="/">Quiz</a>
                          </div>
                          <div className="course-details__curriculum-list-right">
                            6 questions
                          </div>
                        </li>
                      </ul>

                      <br />
                      <br />
                      <h3 className="course-details__tab-title">
                        Intermediate Level
                      </h3>

                      <br />
                      <p className="course-details__tab-text">
                        Aelltes port lacus quis enim var sed efficitur turpis
                        gilla sed sit Lorem Ipsum is simply dummy text of the
                        printing and typesetting industry. Lorem Ipsum has been
                        the industry’s standard dummy text ever since.
                      </p>

                      <br />
                      <ul className="course-details__curriculum-list list-unstyled">
                        <li>
                          <div className="course-details__curriculum-list-left">
                            <div className="course-details__meta-icon video-icon">
                              <i className="fas fa-play" />
                            </div>
                            <a href="/">Introduction to Editing</a>{" "}
                            <span>Preview</span>
                          </div>
                          <div className="course-details__curriculum-list-right">
                            16 minutes
                          </div>
                        </li>
                        <li>
                          <div className="course-details__curriculum-list-left">
                            <div className="course-details__meta-icon file-icon">
                              <i className="fas fa-folder" />
                            </div>
                            <a href="/">Basic Editing Technology</a>
                          </div>
                        </li>
                        <li>
                          <div className="course-details__curriculum-list-left">
                            <div className="course-details__meta-icon quiz-icon">
                              <i className="fas fa-comment" />
                            </div>
                            <a href="/">Quiz</a>
                          </div>
                          <div className="course-details__curriculum-list-right">
                            6 questions
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div
                      className="tab-pane  animated fadeInUp"
                      role="tabpanel"
                      id="review"
                    >
                      <div className="row">
                        <div className="col-xl-7 d-flex">
                          <div className="course-details__progress my-auto">
                            <div className="course-details__progress-item">
                              <p className="course-details__progress-text">
                                Excellent
                              </p>

                              <div className="course-details__progress-bar">
                                <span style={{ width: "95%" }} />
                              </div>

                              <p className="course-details__progress-count">
                                5
                              </p>
                            </div>

                            <div className="course-details__progress-item">
                              <p className="course-details__progress-text">
                                Very Good
                              </p>

                              <div className="course-details__progress-bar">
                                <span style={{ width: "65%" }} />
                              </div>

                              <p className="course-details__progress-count">
                                2
                              </p>
                            </div>

                            <div className="course-details__progress-item">
                              <p className="course-details__progress-text">
                                Average
                              </p>

                              <div className="course-details__progress-bar">
                                <span style={{ width: "33%" }} />
                              </div>

                              <p className="course-details__progress-count">
                                1
                              </p>
                            </div>

                            <div className="course-details__progress-item">
                              <p className="course-details__progress-text">
                                Poor
                              </p>

                              <div className="course-details__progress-bar">
                                <span
                                  style={{ width: "0%" }}
                                  className="no-bubble"
                                />
                              </div>

                              <p className="course-details__progress-count">
                                0
                              </p>
                            </div>

                            <div className="course-details__progress-item">
                              <p className="course-details__progress-text">
                                Terrible
                              </p>

                              <div className="course-details__progress-bar">
                                <span
                                  style={{ width: "0%" }}
                                  className="no-bubble"
                                />
                              </div>

                              <p className="course-details__progress-count">
                                0
                              </p>
                            </div>
                          </div>
                        </div>

                        <div className="col-xl-5 justify-content-xl-end justify-content-sm-center d-flex">
                          <div className="course-details__review-box">
                            <p className="course-details__review-count">4.6</p>

                            <div className="course-details__review-stars">
                              <i className="fas fa-star" />

                              <i className="fas fa-star" />

                              <i className="fas fa-star" />

                              <i className="fas fa-star" />

                              <i className="fas fa-star-half" />
                            </div>

                            <p className="course-details__review-text">
                              30 reviews
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="course-details__comment">
                        <div className="course-details__comment-single">
                          <div className="course-details__comment-top">
                            <div className="course-details__comment-img">
                              <img src="/images/team-1-1.jpg" alt={"img"} />
                            </div>
                            <div className="course-details__comment-right">
                              <h2 className="course-details__comment-name">
                                Steven Meyer
                              </h2>
                              <div className="course-details__comment-meta">
                                <p className="course-details__comment-date">
                                  26 July, 2019
                                </p>
                                <div className="course-details__comment-stars">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star star-disabled" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="course-details__comment-text">
                            Lorem ipsum is simply free text used by copytyping
                            refreshing. Neque porro est qui dolorem ipsum quia
                            quaed inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo.
                          </p>
                        </div>
                        <div className="course-details__comment-single">
                          <div className="course-details__comment-top">
                            <div className="course-details__comment-img">
                              <img src="/images/team-1-2.jpg" alt={"img"} />
                            </div>
                            <div className="course-details__comment-right">
                              <h2 className="course-details__comment-name">
                                Lina Kelley
                              </h2>
                              <div className="course-details__comment-meta">
                                <p className="course-details__comment-date">
                                  26 July, 2019
                                </p>
                                <div className="course-details__comment-stars">
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star" />
                                  <i className="fa fa-star star-disabled" />
                                  <i className="fa fa-star star-disabled" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="course-details__comment-text">
                            Lorem ipsum is simply free text used by copytyping
                            refreshing. Neque porro est qui dolorem ipsum quia
                            quaed inventore veritatis et quasi architecto beatae
                            vitae dicta sunt explicabo.
                          </p>
                        </div>
                      </div>
                      <form action="/" className="course-details__comment-form">
                        <h2 className="course-details__title">Add a review</h2>
                        <p className="course-details__comment-form-text">
                          Rate this Course?{" "}
                          <Link to="/" className="fas fa-star" />
                          <Link to="/" className="fas fa-star" />
                          <Link to="/" className="fas fa-star" />
                          <Link to="/" className="fas fa-star" />
                          <Link to="/" className="fas fa-star" />
                        </p>
                        <div className="row">
                          <div className="col-lg-6">
                            <input type="text" placeholder="Your Name" />
                            <input type="text" placeholder="Email Address" />
                          </div>
                          <div className="col-lg-12">
                            <textarea
                              placeholder="Write Message"
                              defaultValue={""}
                            />
                            <button
                              type="submit"
                              className="thm-btn course-details__comment-form-btn"
                            >
                              Leave a Review
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="course-details__price">
                  <p className="course-details__price-text">Course price </p>
                  <p className="course-details__price-amount">$18.00</p>
                  <button
                    onClick={handleBooking}
                    className="thm-btn course-details__price-btn"
                  >
                    Buy This Course
                  </button>
                </div>
                <div className="course-details__meta">
                  <a href="/" className="course-details__meta-link">
                    <span className="course-details__meta-icon">
                      <i className="far fa-clock" />
                    </span>
                    Durations: <span>10 hours</span>
                  </a>
                  <a href="/" className="course-details__meta-link">
                    <span className="course-details__meta-icon">
                      <i className="far fa-folder-open" />
                    </span>
                    Lectures: <span>6</span>
                  </a>
                  <a href="/" className="course-details__meta-link">
                    <span className="course-details__meta-icon">
                      <i className="far fa-user-circle" />
                    </span>
                    Students: <span>Max 4</span>
                  </a>
                  <a href="/" className="course-details__meta-link">
                    <span className="course-details__meta-icon">
                      <i className="fas fa-play" />
                    </span>
                    Video: <span>8 hours</span>
                  </a>
                  <a href="/" className="course-details__meta-link">
                    <span className="course-details__meta-icon">
                      <i className="far fa-flag" />
                    </span>
                    Skill Level: <span>Advanced</span>
                  </a>
                  <a href="/" className="course-details__meta-link">
                    <span className="course-details__meta-icon">
                      <i className="far fa-bell" />
                    </span>
                    Language: <span>English</span>
                  </a>
                </div>
                <NewCourse detail={detail} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CourseDetail;
