import React from "react";
import NavHeader from "../../components/ClientComponent/Header/NavHeader";
import Footer from "../../components/ClientComponent/Footer/Footer";


  const { Component } = props;
  return (
    <div>
      <header>
        <NavHeader />
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
