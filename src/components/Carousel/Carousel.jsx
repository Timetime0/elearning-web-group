import React from "react";
import Slider from "react-slick";
import "./Carousel_Style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <div className="carousel_Container">
        <Slider {...settings}>
          <div>
            <img src="https://repository-images.githubusercontent.com/192620780/3eb64180-586e-11ea-9178-b8a0245411b7" />
          </div>
          <div>
            <img src="https://repository-images.githubusercontent.com/192620780/3eb64180-586e-11ea-9178-b8a0245411b7" />
          </div>
          <div>
            <img src="https://repository-images.githubusercontent.com/192620780/3eb64180-586e-11ea-9178-b8a0245411b7" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
