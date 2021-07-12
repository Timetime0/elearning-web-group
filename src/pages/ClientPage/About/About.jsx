import React from "react";
import OnlyMission from "../../../components/ClientComponent/OnlyMission/OnlyMission";
import OurCompany from "../../../components/ClientComponent/OurCompany/OurCompany";
import OurStudents from "../../../components/ClientComponent/OurStudents/OurStudents";
function About() {
  return (
    <div>
      <section className="inner-banner">
        <div className="container">
          <ul className="list-unstyled thm-breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">
              <a href="#">About</a>
            </li>
          </ul>
          <h2 className="inner-banner__title">About</h2>
        </div>
      </section>
      <section className="about-one ">
        <img
          src="/images/circle-stripe.png"
          className="about-one__circle"
          alt
        />
        <div className="container text-center">
          <div className="block-title text-center">
            <h2 className="block-title__title">
              Let’s do study with <br />
              expert teachers
            </h2>
          </div>
          <div className="about-one__img">
            <div className="row">
              <div className="col-lg-6">
                <img src="/images/about-2-1.jpg" alt />
              </div>
              <div className="col-lg-6">
                <img src="/images/about-2-2.jpg" alt />
              </div>
            </div>
            <div className="about-one__review">
              <p className="about-one__review-count counter">
                <span>88750</span>
              </p>
              <div className="about-one__review-stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
              </div>
              <p className="about-one__review-text">students loved us</p>
            </div>
          </div>
          <p className="about-one__text">
            There are many variations of passages of lorem ipsum available, but
            the majority have
            <br />
            suffered alteration in some form, by injected humour words which
            don't look even slightly <br /> believable. Lorem Ipsn gravida nibh
            vel velit auctor aliquetn auci elit cons.
          </p>
          <a href="#" className="thm-btn about-one__btn">
            Start Learning Now
          </a>
        </div>
      </section>
      <section className="team-one team-one__become-teacher">
        <div className="container">
          <div className="block-title text-center">
            <h2 className="block-title__title">
              Meet the best <br />
              teachers
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src="/images/team-1-1.jpg" alt />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <a href="/teacher-details">Adelaide Hunter</a>
                  </h2>
                  <p className="team-one__designation">Teacher</p>
                  <p className="team-one__text">
                    There are many varia of passages of lorem.
                  </p>
                </div>
                <div className="team-one__social">
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
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src="/images/team-1-2.jpg" alt />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <a href="/teacher-details">Christina Newman</a>
                  </h2>
                  <p className="team-one__designation">Teacher</p>
                  <p className="team-one__text">
                    There are many varia of passages of lorem.
                  </p>
                </div>
                <div className="team-one__social">
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
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src="/images/team-1-3.jpg" alt />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <a href="/teacher-details">Gilbert Daniels</a>
                  </h2>
                  <p className="team-one__designation">Teacher</p>
                  <p className="team-one__text">
                    There are many varia of passages of lorem.
                  </p>
                </div>
                <div className="team-one__social">
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
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src="/images/team-1-4.jpg" alt />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <a href="/teacher-details">Austin Caldwell</a>
                  </h2>
                  <p className="team-one__designation">Teacher</p>
                  <p className="team-one__text">
                    There are many varia of passages of lorem.
                  </p>
                </div>
                <div className="team-one__social">
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
          </div>
        </div>
      </section>
      <section className="video-one">
        <div className="container">
          <img
            src="/images/scratch-1-1.png"
            className="video-one__scratch"
            alt
          />
          <div className="row">
            <div className="col-lg-6 d-flex align-items-end">
              <div className="video-one__content">
                <h2 className="video-one__title">
                  Take a tour dolor <br />
                  sit amet, consect <br />
                  etur elit
                </h2>
                <a href="#" className="thm-btn video-one__btn">
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="video-one__img">
                <img src="/images/video-1-1.jpg" alt />
                <div className="video-one__popup">
                  <i className="fas fa-play" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <OurCompany />
      <OurStudents />
      <OnlyMission />
    </div>
  );
}

export default About;
