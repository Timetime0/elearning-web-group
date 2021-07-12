import React from "react";
import Slider from "react-slick";
import "./Carousel_Style.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

import Swal from "sweetalert2";

function Carousel(props) {
  // const { classes } = props;
  const btnShowInfo1 = () => {
    Swal.fire({
      title: "React JS!",
      text: "ReactJS is JavaScript library used for building reusable UI components. According to React official documentation, following is the definition − React is a library for building composable user interfaces. It encourages the creation of reusable UI components, which present data that changes over time.",
      imageUrl: "/img/carousel01.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };
  const btnShowInfo2 = () => {
    Swal.fire({
      title: "Angular JS!",
      text: "Angular is a platform and framework for building single-page client applications using HTML and TypeScript. Angular is written in TypeScript. ... Components define views, which are sets of screen elements that Angular can choose among and modify according to your program logic and data.",
      imageUrl: "/img/carousel02.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };
  const btnShowInfo3 = () => {
    Swal.fire({
      title: "Javascript!",
      text: "JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well. ... JavaScript can function as both a procedural and an object oriented language.",
      imageUrl: "/img/carousel03.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };
  const btnShowInfo4 = () => {
    Swal.fire({
      title: "Frameworks Javascript!",
      text: "At their most basic, JS frameworks are collections of JavaScript code libraries (see below) that provide developers with pre-written JS code to use for routine programming features and tasks—literally a framework to build websites or web applications around.",
      imageUrl: "/img/carousel04.png",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image",
    });
  };
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="Carousel">
      <div className="carousel_Container">
        <Slider {...settings}>
          <div>
            <img src="/img/carousel01.png" />
            <Button
              // className={classes.btnPosition}
              variant="contained"
              color="secondary"
              onClick={btnShowInfo1}
            >
              Read More
            </Button>
          </div>
          <div>
            <img src="/img/carousel02.png" />
            <Button
              variant="contained"
              color="secondary"
              onClick={btnShowInfo2}
            >
              Read More
            </Button>
          </div>
          <div>
            <img src="/img/carousel03.png" />
            <Button
              variant="contained"
              color="secondary"
              onClick={btnShowInfo3}
            >
              Read More
            </Button>
          </div>
          <div>
            <img src="/img/carousel04.png" />
            <Button
              variant="contained"
              color="secondary"
              onClick={btnShowInfo4}
            >
              Read More
            </Button>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;
