import React from "react";

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__upper">
        <div className="container">
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-sm-12">
              <div className="footer-widget footer-widget__contact">
                <h2 className="footer-widget__title">Courses</h2>
                <ul className="list-unstyled footer-widget__course-list">
                  <li>
                    <h2>
                      <a href="course-details.html">Introduction Web Design</a>
                    </h2>
                    <p>Mike Hardson</p>
                  </li>
                  <li>
                    <h2>
                      <a href="/course-details"> Learning MBA Management </a>
                    </h2>
                    <p>Jessica Brown</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-12">
              <div className="footer-widget footer-widget__link">
                <h2 className="footer-widget__title">Explore</h2>
                <div className="footer-widget__link-wrap">
                  <ul className="list-unstyled footer-widget__link-list">
                    <li>
                      <a href="/">About</a>
                    </li>
                    <li>
                      <a href="/">Overview</a>
                    </li>
                    <li>
                      <a href="/">Teachers</a>
                    </li>
                    <li>
                      <a href="/">Join Us</a>
                    </li>
                    <li>
                      <a href="/">Our News</a>
                    </li>
                  </ul>
                  <ul className="list-unstyled footer-widget__link-list">
                    <li>
                      <a href="/">Help </a>
                    </li>
                    <li>
                      <a href="/">Contact</a>
                    </li>
                    <li>
                      <a href="/">Register Now</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-12">
              <div className="footer-widget footer-widget__gallery">
                <h2 className="footer-widget__title">Gallery</h2>
                <ul className="list-unstyled footer-widget__gallery-list">
                  <li>
                    <a href="/">
                      <img src="assets/images/footer-1-1.png" alt={"img"} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="assets/images/footer-1-2.png" alt={"img"} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="assets/images/footer-1-3.png" alt={"img"} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="assets/images/footer-1-4.png" alt={"img"} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="assets/images/footer-1-5.png" alt={"img"} />
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <img src="assets/images/footer-1-6.png" alt={"img"} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-sm-12">
              <div className="footer-widget footer-widget__about">
                <h2 className="footer-widget__title">About</h2>
                <p className="footer-widget__text">
                  Lorem ipsum dolor sit ametcon, sectetur adipiscing elit.
                  Phasellus vehic sagittis euismod.
                </p>
                <div className="footer-widget__btn-block">
                  <a href="/" className="thm-btn">
                    Contact
                  </a>
                  <a href="/" className="thm-btn">
                    Purchase
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="container">
          <p className="site-footer__copy">
            © Copyright 2019 by <a href="/">Layerdrops.com</a>
          </p>
          <div className="site-footer__social">
            <a
              href="/"
              data-target="html"
              className="scroll-to-target site-footer__scroll-top"
            >
              <i className="kipso-icon-top-arrow" />
            </a>
            <a href="/">
              <i className="fab fa-twitter" />
            </a>
            <a href="/">
              <i className="fab fa-facebook-square" />
            </a>
            <a href="/">
              <i className="fab fa-pinterest-p" />
            </a>
            <a href="/">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
