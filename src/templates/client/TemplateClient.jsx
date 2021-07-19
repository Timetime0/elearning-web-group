import React from "react";
import NavHeader from "../../components/ClientComponent/Header/NavHeader";
import Footer from "../../components/ClientComponent/Footer/Footer";

import "../../assets/css/animate.min.css";
import "../../assets/css/bootstrap.min.css";
import "../../assets/css/owl.carousel.min.css";
import "../../assets/css/owl.theme.default.min.css";
import "../../assets/plugins/fontawesome-free-5.11.2-web/css/all.min.css";
import "../../assets/plugins/kipso-icons/style.css";
import "../../assets/css/magnific-popup.css";
import "../../assets/css/vegas.min.css";
// <!-- Login css -->
import "../../assets/css/iofrm-style.css";
import "../../assets/css/iofrm-theme10.css";
// <!-- template styles -->
import "../../assets/css/style.css";
import "../../assets/css/responsive.css";
import SearchPopUp from "../../components/ClientComponent/SearchPopup/SearchPopUp";

function TemplateClient(props) {
  const { Component } = props;
  return (
    <div>
      <div className="page-wrapper">
        <header>
          <NavHeader />
        </header>
        <main>
          <Component />
          {/* <SearchPopUp /> */}
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </div>
  );
}

export default TemplateClient;
