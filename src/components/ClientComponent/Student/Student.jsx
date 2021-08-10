import React from "react";
import CountUp from "react-countup";

function Student() {
  return (
    <section className="team-tab">
      <div className="container">
        <div className="tab-content">
          <div
            className="tab-pane show active  animated fadeInUp"
            role="tabpanel"
            id="overview"
          >
            <div className="row">
              <div className="col-lg-6 d-flex">
                <div className="my-auto">
                  <div className="team-tab__content">
                    <div className="team-tab__top">
                      <div className="team-tab__left">
                        <h2 className="team-tab__title">Christine Eve </h2>
                        <p className="team-tab__designation">Language Expert</p>
                      </div>
                      <div className="team-tab__right">
                        <div className="team-tab__social">
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
                    <p className="team-tab__text">
                      There cursus massa at urnaaculis estie. Sed aliquamellus
                      vitae ultrs condmentum leo massa mollis estiegittis
                      miristum nulla sed medy fringilla vitae.
                    </p>
                    <div className="progress-one__wrap">
                      <div className="progress-one__single">
                        <div className="progress-one__top">
                          <h3 className="progress-one__title">English</h3>

                          <h3 className="progress-one__percent">
                            <span className="counter">
                              <CountUp start={0} end={98} duration={15} />
                            </span>
                            %
                          </h3>
                        </div>
                        <div className="progress-one__bar">
                          <span
                            style={{ width: "98%" }}
                            className="wow slideInLeft"
                          ></span>
                        </div>
                      </div>
                      <div className="progress-one__single">
                        <div className="progress-one__top">
                          <h3 className="progress-one__title">French</h3>

                          <h3 className="progress-one__percent">
                            <span className="counter">
                              {" "}
                              <CountUp start={0} end={64} duration={15} />
                            </span>
                            %
                          </h3>
                        </div>
                        <div className="progress-one__bar">
                          <span
                            style={{ width: "64%" }}
                            className="wow slideInLeft"
                          />
                        </div>
                      </div>
                      <div className="progress-one__single">
                        <div className="progress-one__top">
                          <h3 className="progress-one__title">Spanish</h3>

                          <h3 className="progress-one__percent">
                            <span className="counter">
                              <CountUp start={0} end={34} duration={15} />
                            </span>
                            %
                          </h3>
                        </div>
                        <div className="progress-one__bar">
                          <span
                            style={{ width: "34%" }}
                            className="wow slideInLeft"
                          />
                        </div>
                      </div>
                    </div>
                    <a href="/" className="thm-btn team-tab__btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="/images/teacher-h3-1-1.jpg" alt={"img"} />
              </div>
            </div>
          </div>
          <div
            className="tab-pane  animated fadeInUp"
            role="tabpanel"
            id="curriculum"
          >
            <div className="row">
              <div className="col-lg-6 d-flex">
                <div className="my-auto">
                  <div className="team-tab__content">
                    <div className="team-tab__top">
                      <div className="team-tab__left">
                        <h2 className="team-tab__title">Catherine Hopkins</h2>
                        <p className="team-tab__designation">Language Expert</p>
                      </div>
                      <div className="team-tab__right">
                        <div className="team-tab__social">
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
                    <p className="team-tab__text">
                      There cursus massa at urnaaculis estie. Sed aliquamellus
                      vitae ultrs condmentum leo massa mollis estiegittis
                      miristum nulla sed medy fringilla vitae.
                    </p>
                    <div className="progress-one__wrap">
                      <div className="progress-one__single">
                        <div className="progress-one__top">
                          <h3 className="progress-one__title">English</h3>

                          <h3 className="progress-one__percent">
                            <span className="counter">
                              <CountUp start={0} end={98} duration={15} />
                            </span>
                            %
                          </h3>
                        </div>
                        <div className="progress-one__bar">
                          <span
                            style={{ width: "98%" }}
                            className="wow slideInLeft"
                          />
                        </div>
                      </div>
                      <div className="progress-one__single">
                        <div className="progress-one__top">
                          <h3 className="progress-one__title">French</h3>

                          <h3 className="progress-one__percent">
                            <span className="counter">
                              {" "}
                              <CountUp start={0} end={64} duration={15} />
                            </span>
                            %
                          </h3>
                        </div>
                        <div className="progress-one__bar">
                          <span
                            style={{ width: "64%" }}
                            className="wow slideInLeft"
                          />
                        </div>
                      </div>
                      <div className="progress-one__single">
                        <div className="progress-one__top">
                          <h3 className="progress-one__title">Spanish</h3>

                          <h3 className="progress-one__percent">
                            <span className="counter">
                              {" "}
                              <CountUp start={0} end={34} duration={15} />
                            </span>
                            %
                          </h3>
                        </div>
                        <div className="progress-one__bar">
                          <span
                            style={{ width: "34%" }}
                            className="wow slideInLeft"
                          />
                        </div>
                      </div>
                    </div>
                    <a href="/" className="thm-btn team-tab__btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="/images/teacher-h3-1-2.jpg" alt={"img"} />
              </div>
            </div>
          </div>
        </div>
        <ul
          className="team-tab__tab-navs list-unstyled nav nav-tabs"
          role="tablist"
        >
          <li>
            <a className="active" role="tab" data-toggle="tab" href="#overview">
              <img src="/images/team-1-1.jpg" alt={"img"} />
            </a>
          </li>
          <li>
            <a  role="tab" data-toggle="tab" href="#curriculum">
              <img src="/images/team-1-2.jpg" alt={"img"} />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Student;
