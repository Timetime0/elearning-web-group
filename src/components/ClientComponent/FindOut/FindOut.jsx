import React from "react";
import CountUp from "react-countup";
function FindOut() {
  return (
    <section className="video-three">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="row">
              <div className="col-md-6">
                <div className="video-three__fact thm-base-bg">
                  <i className="kipso-icon-knowledge" />
                  <p className="video-three__fact-count counter">
                    <CountUp start={1000} end={24820} duration={70} />{" "}
                  </p>
                  <p className="video-three__fact-text">Courses &amp; Video</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="video-three__fact thm-base-bg-2">
                  <i className="kipso-icon-professor" />
                  <p className="video-three__fact-count counter">
                    <CountUp start={1000} end={4280} duration={70} />{" "}
                  </p>
                  <p className="video-three__fact-text">Expert Teachers</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div className="video-three__image">
                  <img src="/images/fact-2-1.jpg" className="img-fluid" alt />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="video-three__box">
              <h2 className="video-three__title">
                Find out how <br />
                we help our <br />
                students
              </h2>
              <div className="video-three__btn-box">
                <a href="#" className="video-three__popup">
                  <i className="fas fa-play" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FindOut;
