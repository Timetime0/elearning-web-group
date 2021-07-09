import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Categories from "../../components/Categories/Categories";
import NavHeader from '../../components/Header/NavHeader'
import Footer from '../../components/Footer/Footer'
import "./style.scss";

function Home(props) {
  return (
    <div>
      {/* <NavHeader/> */}
      <Carousel />
      <div className="container">
        <Categories />
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default Home;
