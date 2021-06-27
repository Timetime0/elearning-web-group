import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import NavHeader from "../../components/Header/NavHeader";
import Categories from "../../components/Categories/Categories";
import "./style.scss";

function Home(props) {
  return (
    <div>
      <Carousel />
      <div className="container">
        <Categories />
      </div>
    </div>
  );
}

export default Home;
