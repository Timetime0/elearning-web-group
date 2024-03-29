import React from "react";
import BestTeacher from "../../../components/ClientComponent/BestTeacher/BestTeacher";
import OnlyMission from "../../../components/ClientComponent/OnlyMission/OnlyMission";
import OurCompany from "../../../components/ClientComponent/OurCompany/OurCompany";
import OurStudents from "../../../components/ClientComponent/OurStudents/OurStudents";
function About() {
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
                <a href="/">About</a>
              </li>
            </ul>
            <h2 className="inner-banner__title">About</h2>
          </div>
        </section>
        <section className="about-one about-one__about-page">
          <img
            src="/images/circle-stripe.png"
            className="about-one__circle"
            alt={"img"}
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
                  <img src="/images/about-2-1.jpg" alt={"img"} />
                </div>
                <div className="col-lg-6">
                  <img src="/images/about-2-2.jpg" alt={"img"} />
                </div>
              </div>
              <div className="about-one__review">
                <p className="about-one__review-count counter">88750</p>
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
              There are many variations of passages of lorem ipsum available,
              but the majority have
              <br />
              suffered alt={"img"}eration in some form, by injected humour words
              which don't look even slightly <br /> believable. Lorem Ipsn
              gravida nibh vel velit auctor aliquetn auci elit cons.
            </p>
            <a href="/" className="thm-btn about-one__btn">
              Start Learning Now
            </a>
          </div>
        </section>
        <BestTeacher />
        <section className="video-one">
          <div className="container">
            <img
              src="/images/scratch-1-1.png"
              className="video-one__scratch"
              alt={"img"}
            />
            <div className="row">
              <div className="col-lg-6 d-flex align-items-end">
                <div className="video-one__content">
                  <h2 className="video-one__title">
                    Take a tour dolor <br />
                    sit amet, consect <br />
                    etur elit
                  </h2>
                  <a href="/" className="thm-btn video-one__btn">
                    Learn More
                  </a>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="video-one__img">
                  <img src="/images/video-1-1.jpg" alt={"img"} />
                  <a href="/" className="video-one__popup">
                    <i className="fas fa-play" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
        <OurCompany />
        <OurStudents />
        <OnlyMission />
      </div>
    </div>
  );
}

export default About;
