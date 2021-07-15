import React from "react";
import OnlyMission from "../../../components/ClientComponent/OnlyMission/OnlyMission";

function Pricing() {
  return (
    <div>
      <div>
        <section className="inner-banner">
          <div className="container">
            <ul className="list-unstyled thm-breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">
                <a href="#">Pricing plans</a>
              </li>
            </ul>
            <h2 className="inner-banner__title">Pricing plans</h2>
          </div>
        </section>
        <section className="pricing-one pricing-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="pricing-one__single">
                  <div className="pricing-one__inner">
                    <h2 className="pricing-one__price">$20.00 </h2>
                    <p className="pricing-one__name">basic pack</p>
                    <ul className="pricing-one__list list-unstyled">
                      <li>3 Full Courses</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>9 Days Time</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      Choose Plan
                    </a>
                    <p className="pricing-one__tag-line">No hidden charges!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="pricing-one__single">
                  <div className="pricing-one__inner">
                    <h2 className="pricing-one__price">$30.00 </h2>
                    <p className="pricing-one__name">medium pack</p>
                    <ul className="pricing-one__list list-unstyled">
                      <li>3 Full Courses</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>9 Days Time</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      Choose Plan
                    </a>
                    <p className="pricing-one__tag-line">No hidden charges!</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="pricing-one__single">
                  <div className="pricing-one__inner">
                    <h2 className="pricing-one__price">$40.00 </h2>
                    <p className="pricing-one__name">premium pack</p>
                    <ul className="pricing-one__list list-unstyled">
                      <li>3 Full Courses</li>
                      <li>Lifetime free support</li>
                      <li>Upgrate options</li>
                      <li>9 Days Time</li>
                    </ul>
                    <a href="#" className="thm-btn pricing-one__btn">
                      Choose Plan
                    </a>
                    <p className="pricing-one__tag-line">No hidden charges!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="cta-one">
          <div className="container">
            <h2 className="cta-one__title">
              Fill form for free to regitser <br />
              yourself now
            </h2>
            <div className="cta-one__btn-block">
              <a href="#" className="thm-btn cta-one__btn">
                Start Learning Now
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Pricing;
