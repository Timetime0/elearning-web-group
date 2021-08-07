import React from "react";
// import "./Carousel_Style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { makeStyles } from "@material-ui/core/styles";

function Carousel(props) {
  return (
    <section className="slider-three">
      <img
        src="/images/slider-3-icon-1-1.png"
        className="slider-three__icon-1"
        alt={"img"}
      />
      <img
        src="/images/slider-3-icon-1-2.png"
        className="slider-three__icon-2"
        alt={"img"}
      />
      <img
        src="/images/slider-3-icon-1-3.png"
        className="slider-three__icon-3"
        alt={"img"}
      />
      <img
        src="/images/slider-3-icon-1-4.png"
        className="slider-three__icon-4"
        alt={"img"}
      />
      <img
        src="/images/slider-3-icon-1-5.png"
        className="slider-three__icon-5"
        alt={"img"}
      />
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="slider-three__content">
              <p className="slider-three__tag-line">
                we can teach you anything
              </p>
              <h2 className="slider-three__title">
                Start learning with us now
              </h2>
              <p className="slider-three__text">
                Online learning is rapidly becoming one of the most
                cost-effective ways to educate the world’s rapidly expanding
                workforce.
              </p>
              <form action="#" className="slider-three__search">
                <input type="text" placeholder="Search courses" />
                <button type="submit">
                  <i className="kipso-icon-magnifying-glass" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Carousel;
