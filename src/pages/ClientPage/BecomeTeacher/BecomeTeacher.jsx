import React from "react";
import BestTeacher from "../../../components/ClientComponent/BestTeacher/BestTeacher";

function BecomeTeacher() {
  return (
    <div>
      <section className="inner-banner">
        <div className="container">
          <ul className="list-unstyled thm-breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">
              <a href="/">Become a Teacher</a>
            </li>
          </ul>
          <h2 className="inner-banner__title">Become a Teacher</h2>
        </div>
      </section>
      <section className="become-teacher">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="become-teacher__content">
                <h2 className="become-teacher__title">Teaching benefits</h2>
                <p className="become-teacher__text">
                  Lorem Ipsum is simply dummy text of the printing and type
                  industry. Lorem Ipsum has been the standard dummy text ever
                  since the when an unknown was popularised. It has survived not
                  only five centuries, but also the leap into electronic
                  typesetting remaining unchanged.
                </p>
                <h2 className="become-teacher__subtitle">Health and Pension</h2>
                <p className="become-teacher__text">
                  Lorem Ipsum has been the standard dummy text ever since the
                  when an unknown was popularised. It has survived not only five
                  centuries. but also the leap into electronic typesetting
                  remaining unchanged.
                </p>
                <h2 className="become-teacher__subtitle">Vacation Time</h2>
                <p className="become-teacher__text">
                  Lorem Ipsum has been the standard dummy text ever since the
                  when an unknown was popularised. It has survived not only five
                  centuries. but also the leap into electronic typesetting
                  remaining unchanged.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="become-teacher__form">
                <div className="become-teacher__form-top">
                  <h2 className="become-teacher__form-title">
                    Apply for teaching
                  </h2>
                </div>
                <div className="become-teacher__form-content">
                  <input type="text" placeholder="Your Name" name="name" />
                  <input type="text" placeholder="Email Address" name="email" />
                  <input type="text" placeholder="Phone Number" name="phone" />
                  <input type="text" placeholder="Comment" name="message" />
                  <button
                    type="submit"
                    className="thm-btn become-teacher__form-btn"
                  >
                    Apply For It
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <BestTeacher />
      <section className="cta-one">
        <div className="container">
          <h2 className="cta-one__title">
            Fill form for free to regitser <br />
            yourself now
          </h2>
          <div className="cta-one__btn-block">
            <a href="/" className="thm-btn cta-one__btn">
              Start Learning Now
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default BecomeTeacher;
