import React from "react";
import CountUp from "react-countup";
function StartOnline() {
  return (
    <section className="cta-six thm-gray-bg">
      <img src="/images/line-stripe-2.png" className="cta-six__line" alt />
      <div className="container-fluid clearfix">
        <div className="cta-six__left">
          <div className="cta-six__content">
            <div className="block-title text-left">
              <h2 className="block-title__title">
                Start online learning anything
              </h2>
            </div>
            <img src="/images/fact-1-1.jpg" alt />
          </div>
        </div>
        <div className="cta-six__right">
          <img src="/images/fact-1-2.jpg" alt />
          <h2 className="cta-six__title">
            More than{" "}
            <span className="counter">
              <CountUp start={300} end={7840} duration={70} />
            </span>{" "}
            students are registered
          </h2>
        </div>
      </div>
    </section>
  );
}

export default StartOnline;
