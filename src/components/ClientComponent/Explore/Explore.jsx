import React from "react";

function Explore() {
  return (
    <div>
      <section className="course-one__top-title home-three">
        <div className="container">
          <div className="block-title">
            <h2 className="block-title__title">
              Explore our <br />
              popular courses
            </h2>
          </div>
        </div>
      </section>
      <section className="course-one course-one__teacher-details home-three">
        <div className="container">
          <div className="course-one__carousel">
            <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
              <div
                className="swiper-wrapper"
                style={{
                  transform: "translate3d(-1600px, 0px, 0px)",
                  transitionDuration: "0ms",
                }}
              >
                <div
                  className="swiper-slide item swiper-slide-duplicate"
                  data-swiper-slide-index={6}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-1">
                    <div className="course-one__image">
                      <img src="/images/course-1-1.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        development
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-1.jpg" alt />
                        by <a href="/teacher-details">Lou Guerrero</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">New react bootcamp</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide item swiper-slide-duplicate"
                  data-swiper-slide-index={7}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-2">
                    <div className="course-one__image">
                      <img src="/images/course-1-2.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        It &amp; Software
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-2.jpg" alt />
                        by <a href="/teacher-details">Cora Diaz</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">Improve editing skills</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide item swiper-slide-duplicate"
                  data-swiper-slide-index={8}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-3">
                    <div className="course-one__image">
                      <img src="/images/course-1-3.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        marketing
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-3.jpg" alt />
                        by <a href="/teacher-details">Ruth Becker</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">Marketing strategies</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide item swiper-slide-prev"
                  data-swiper-slide-index={0}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-1">
                    <div className="course-one__image">
                      <img src="/images/course-1-1.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        development
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-1.jpg" alt />
                        by <a href="/teacher-details">Lou Guerrero</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">New react bootcamp</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide item swiper-slide-active"
                  data-swiper-slide-index={1}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-2">
                    <div className="course-one__image">
                      <img src="/images/course-1-2.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        It &amp; Software
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-2.jpg" alt />
                        by <a href="/teacher-details">Cora Diaz</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">Improve editing skills</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide item swiper-slide-next"
                  data-swiper-slide-index={2}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-3">
                    <div className="course-one__image">
                      <img src="/images/course-1-3.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        marketing
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-3.jpg" alt />
                        by <a href="/teacher-details">Ernest Rodriquez</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">Basics of photography</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide item"
                  data-swiper-slide-index={3}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-4">
                    <div className="course-one__image">
                      <img src="/images/course-1-4.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        Photography
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-4.jpg" alt />
                        by <a href="/teacher-details">Katherine Collins</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">Healthy workout tips</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide item"
                  data-swiper-slide-index={4}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-5">
                    <div className="course-one__image">
                      <img src="/images/course-1-5.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        marketing
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-5.jpg" alt />
                        by <a href="/teacher-details">Isabella Stanley</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">Affiliate bootcamp</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide item"
                  data-swiper-slide-index={5}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-6">
                    <div className="course-one__image">
                      <img src="/images/course-1-6.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        Health &amp; Fitness
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-6.jpg" alt />
                        by <a href="/teacher-details">Katherine Collins</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">Healthy workout tips</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide item"
                  data-swiper-slide-index={6}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-1">
                    <div className="course-one__image">
                      <img src="/images/course-1-1.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        development
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-1.jpg" alt />
                        by <a href="/teacher-details">Lou Guerrero</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">New react bootcamp</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide item"
                  data-swiper-slide-index={7}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-2">
                    <div className="course-one__image">
                      <img src="/images/course-1-2.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        It &amp; Software
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-2.jpg" alt />
                        by <a href="/teacher-details">Cora Diaz</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">Improve editing skills</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide item"
                  data-swiper-slide-index={8}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-3">
                    <div className="course-one__image">
                      <img src="/images/course-1-3.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        marketing
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-3.jpg" alt />
                        by <a href="/teacher-details">Ruth Becker</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">Marketing strategies</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide item swiper-slide-duplicate swiper-slide-duplicate-prev"
                  data-swiper-slide-index={0}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-1">
                    <div className="course-one__image">
                      <img src="/images/course-1-1.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        development
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-1.jpg" alt />
                        by <a href="/teacher-details">Lou Guerrero</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">New react bootcamp</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide item swiper-slide-duplicate swiper-slide-duplicate-active"
                  data-swiper-slide-index={1}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-2">
                    <div className="course-one__image">
                      <img src="/images/course-1-2.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        It &amp; Software
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-2.jpg" alt />
                        by <a href="/teacher-details">Cora Diaz</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">Improve editing skills</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
                <div
                  className="swiper-slide item swiper-slide-duplicate swiper-slide-duplicate-next"
                  data-swiper-slide-index={2}
                  style={{ width: 370, marginRight: 30 }}
                >
                  <div className="course-one__single color-3">
                    <div className="course-one__image">
                      <img src="/images/course-1-3.jpg" alt />
                      <i className="far fa-heart" />
                    </div>
                    <div className="course-one__content">
                      <a href="#" className="course-one__category">
                        marketing
                      </a>
                      <div className="course-one__admin">
                        <img src="/images/team-1-3.jpg" alt />
                        by <a href="/teacher-details">Ernest Rodriquez</a>
                      </div>
                      <h2 className="course-one__title">
                        <a href="/course-details">Basics of photography</a>
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
                        <span className="course-one__stars-count">250</span>
                      </div>
                      <div className="course-one__meta">
                        <a href="/course-details">
                          <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                          <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$18</a>
                      </div>
                      <a href="#" className="course-one__link">
                        See Preview
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-pagination swiper-pagination-clickable swiper-pagination-bullets">
                <span
                  className="swiper-pagination-bullet"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 1"
                />
                <span
                  className="swiper-pagination-bullet swiper-pagination-bullet-active"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 2"
                />
                <span
                  className="swiper-pagination-bullet"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 3"
                />
                <span
                  className="swiper-pagination-bullet"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 4"
                />
                <span
                  className="swiper-pagination-bullet"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 5"
                />
                <span
                  className="swiper-pagination-bullet"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 6"
                />
                <span
                  className="swiper-pagination-bullet"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 7"
                />
                <span
                  className="swiper-pagination-bullet"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 8"
                />
                <span
                  className="swiper-pagination-bullet"
                  tabIndex={0}
                  role="button"
                  aria-label="Go to slide 9"
                />
              </div>
              <span
                className="swiper-notification"
                aria-live="assertive"
                aria-atomic="true"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;
