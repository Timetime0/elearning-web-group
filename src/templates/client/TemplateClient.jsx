import React from "react";
import Header from "../../components/Header/NavHeader";
import Footer from "../../components/Footer/Footer";

import "../../Assets/plugins/bootstrap/css/bootstrap.min.css";
import "../../Assets/scss/style.scss";




function TemplateClient(props) {
  const { Component } = props;
  return (
    <div>
      <header>
        <Header />
      </header>
      <main>
        <Component />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default TemplateClient;
