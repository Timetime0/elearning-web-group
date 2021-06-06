import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import Footer from "../../components/Footer/Footer";
import NavHeader from "../../components/Header/NavHeader";

function Home(props) {
  const { classes } = props;
  return (
    <div>
      <NavHeader />
      <Carousel />
      <Footer />
    </div>
  );
}

export default Home;
