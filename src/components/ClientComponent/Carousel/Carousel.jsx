import React from "react";
import Slider from "react-slick";
// import "./Carousel_Style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Swal from "sweetalert2";

function Carousel(props) {
  return (
    <div className="banner-wrapper">
      <section className="banner-one banner-carousel__one no-dots">
        <div className="swiper-container swiper-container-initialized swiper-container-horizontal">
          <div
            className="swiper-wrapper"
            style={{ transform: "translate3d(0px, 0px, 0px)" }}
          >
            <div
              className="swiper-slide banner-one__slide banner-one__slide-one swiper-slide-active"
              style={{ width: 1903 }}
            >
              <div className="container">
                <div className="banner-one__bubble-1" />
                <div className="banner-one__bubble-2" />
                <div className="banner-one__bubble-3" />
                <img
                  src="/images/slider-1-scratch.png"
                  alt
                  className="banner-one__scratch"
                />
                <img
                  src="/images/slider-1-person-1.png"
                  className="banner-one__person"
                  alt
                />
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <h3 className="banner-one__title banner-one__light-color">
                      We Can <br />
                      Teach You
                    </h3>
                    <p className="banner-one__tag-line">
                      are you ready to learn?
                    </p>
                    <a href="#" className="thm-btn banner-one__btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="swiper-slide banner-one__slide banner-one__slide-two swiper-slide-next"
              style={{ width: 1903 }}
            >
              <div className="container">
                <div className="banner-one__bubble-1" />
                <div className="banner-one__bubble-2" />
                <div className="banner-one__bubble-3" />
                <img
                  src="/images/slider-1-scratch.png"
                  alt
                  className="banner-one__scratch"
                />
                <img
                  src="/images/slider-1-person-2.png"
                  className="banner-one__person"
                  alt
                />
                <div className="row no-gutters">
                  <div className="col-xl-12">
                    <h3 className="banner-one__title banner-one__light-color">
                      We Can <br />
                      Teach You
                    </h3>
                    <p className="banner-one__tag-line">
                      are you ready to learn?
                    </p>
                    <a href="#" className="thm-btn banner-one__btn">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <span
            className="swiper-notification"
            aria-live="assertive"
            aria-atomic="true"
          />
        </div>
      </section>
      <div className="banner-carousel-btn">
        <div className="banner-carousel-btn__left-btn banner-arrow">
          <i className="kipso-icon-left-arrow" />
        </div>
        <div className="banner-carousel-btn__right-btn banner-arrow">
          <i className="kipso-icon-right-arrow" />
        </div>
      </div>
      <div className="banner-one__cta">
        <div className="banner-one__cta-icon">
          <i className="kipso-icon-black-graduation-cap-tool-of-university-student-for-head" />
        </div>
        <div className="banner-one__cta-title">
          <h3 className="banner-one__cta-text">
            <a href="#">Read how we encourage our students to learn</a>
          </h3>
        </div>
        <div className="banner-one__cta-link">
          <a href="#">
            <i className="kipso-icon-right-arrow" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Carousel;
