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
    arrows:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  
  return (
    <div>
      <div className="carousel_Container">
        <Slider {...settings}>
          <div>
            <img src="https://www.promosystech.com/temp/assets/img/train/eree.png" />
          </div>
          <div>
            <img src="https://www.promosystech.com/temp/assets/img/train/eree.png" />
          </div>
          <div>
            <img src="https://www.promosystech.com/temp/assets/img/train/eree.png" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
