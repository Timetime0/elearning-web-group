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
      <h1>This is carousel component</h1>
      <div>
        <Slider {...settings}>
          <div>
            <img src="https://cdn.tgdd.vn//GameApp/1335967//800x-800x462.jpg" />
          </div>
          <div>
            <img src="https://i2.wp.com/lucloi.vn/wp-content/uploads/2020/01/71374138_2456823731309460_5344949859134734336_n.jpg?fit=1214%2C878&ssl=1" />
          </div>
          <div>
            <img src="https://lucloi.vn/wp-content/uploads/2020/07/1de.jpg" />
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
