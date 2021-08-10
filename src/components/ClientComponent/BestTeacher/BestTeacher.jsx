import React from "react";
import { Link } from "react-router-dom";

function BestTeacher() {
  return (
    <div>
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
                  <img src="/images/team-1-1.jpg" alt={"img"} />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <Link href="/teacher-details">Adelaide Hunter</Link>
                  </h2>
                  <p className="team-one__designation">Teacher</p>
                  <p className="team-one__text">
                    There are many varia of passages of lorem.
                  </p>
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
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src="/images/team-1-2.jpg" alt={"img"} />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <Link to="/teacher-details">Christina Newman</Link>
                  </h2>
                  <p className="team-one__designation">Teacher</p>
                  <p className="team-one__text">
                    There are many varia of passages of lorem.
                  </p>
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
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src="/images/team-1-3.jpg" alt={"img"} />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <Link to="/teacher-details">Gilbert Daniels</Link>
                  </h2>
                  <p className="team-one__designation">Teacher</p>
                  <p className="team-one__text">
                    There are many varia of passages of lorem.
                  </p>
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
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="team-one__single">
                <div className="team-one__image">
                  <img src="/images/team-1-4.jpg" alt={"img"} />
                </div>
                <div className="team-one__content">
                  <h2 className="team-one__name">
                    <Link to="/teacher-details">Austin Caldwell</Link>
                  </h2>
                  <p className="team-one__designation">Teacher</p>
                  <p className="team-one__text">
                    There are many varia of passages of lorem.
                  </p>
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
    </div>
  );
}

export default BestTeacher;
