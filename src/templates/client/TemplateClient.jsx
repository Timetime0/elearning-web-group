import React from "react";
import NavHeader from "../../components/ClientComponent/Header/NavHeader";
import Footer from "../../components/ClientComponent/Footer/Footer";

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
        </main>
        <footer>
          <Footer />
        </footer>
      </div>

      <div className="search-popup">
        <div className="search-popup__overlay custom-cursor__overlay">
          <div className="cursor" style={{ top: 294, left: 3 }} />
          <div
            className="cursor-follower"
            style={{ top: 272, left: "-19px" }}
          />
        </div>
        <div className="search-popup__inner">
          <form action="#" className="search-popup__form">
            <input
              type="text"
              name="search"
              placeholder="Type here to Search...."
            />
            <button type="submit">
              <i className="kipso-icon-magnifying-glass" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TemplateClient;
