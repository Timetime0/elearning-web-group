import React, { useEffect } from "react";
import NavHeader from "../../components/ClientComponent/Header/NavHeader";
import Footer from "../../components/ClientComponent/Footer/Footer";
import { Helmet } from "react-helmet";

function TemplateClient(props) {
  const { Component } = props;
  return (
    <div>
      <NavHeader />

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
