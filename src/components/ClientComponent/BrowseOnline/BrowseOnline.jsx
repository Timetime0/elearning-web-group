import React from "react";

function BrowseOnline() {
  return (
    <section className="course-category-three">
      <img
        src="/images/circle-stripe.png"
        className="course-category-three__circle"
        alt={"img"}
      />
      <div className="container">
        <div className="block-title">
          <h2 className="block-title__title">
            Browse online <br />
            course categories
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="course-category-three__single">
              <img src="/images/course-category-1-1.png" alt={"img"} />
              <div className="course-category-three__content">
                <h3 className="course-category-three__title">
                  <a href="/course-from-list/Design">Development</a>
                </h3>
                <p className="course-category-three__text">Over 752 Courses</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="course-category-three__single">
              <img src="/images/course-category-1-2.png" alt={"img"} />
              <div className="course-category-three__content">
                <h3 className="course-category-three__title">
                  <a href="/course-from-list/FrontEnd">Front End Development</a>
                </h3>
                <p className="course-category-three__text">Over 752 Courses</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="course-category-three__single">
              <img src="/images/course-category-1-3.png" alt={"img"} />
              <div className="course-category-three__content">
                <h3 className="course-category-three__title">
                  <a href="/course-from-list/FullStack">Full Stack</a>
                </h3>
                <p className="course-category-three__text">Over 752 Courses</p>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12">
            <div className="course-category-three__single">
              <img src="/images/course-category-1-4.png" alt={"img"} />
              <div className="course-category-three__content">
                <h3 className="course-category-three__title">
                  <a href="/course-from-list/BackEnd">Back End Development</a>
                </h3>
                <p className="course-category-three__text">Over 752 Courses</p>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center">
          <a
            href="/course-list"
            className="thm-btn course-category-three__more-link"
          >
            View All Categories
          </a>
        </div>
      </div>
    </section>
  );
}

export default BrowseOnline;
