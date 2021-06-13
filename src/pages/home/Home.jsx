import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import NavHeader from "../../components/Header/NavHeader";
import Categories from "../../components/Categories/Categories";
import "./style.scss";

function Home(props) {
  const { classes } = props;
  return (
    <div>
      <NavHeader />
      <div className="container">
        <Carousel />
        <Categories />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
