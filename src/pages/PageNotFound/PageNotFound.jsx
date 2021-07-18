import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/ClientComponent/Footer/Footer";
import NavHeader from "../../components/ClientComponent/Header/NavHeader";

function PageNotFound() {
  return (
    <div className="NotFound_Container">
      <NavHeader />
      <div className="not-found-wrapper text-center">
        <div className="not-found-title">
          <h1>
            <span>404</span>
          </h1>
        </div>
        <div className="not-found-subtitle">PAGE NOT FOUND</div>
        <div className="not-found-desc">
          The page requested couldn't be found. This could be a spelling error
          in the URL or a removed page.
        </div>
        <div className="not-found-home text-center">
          <Link to="/">
            <i className="gv-icon-200" />
            Back Homepage
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default PageNotFound;
