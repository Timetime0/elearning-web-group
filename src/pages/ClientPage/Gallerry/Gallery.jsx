import React from "react";

function Gallery() {
  return (
    <div>
      <section className="inner-banner">
        <div className="container">
          <ul className="list-unstyled thm-breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">
              <a href="#">Gallery</a>
            </li>
          </ul>
          <h2 className="inner-banner__title">Gallery</h2>
        </div>
      </section>
      <section className="gallery-one">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src="/images/gallery-1-1.jpg" alt />
                <a
                  href="/images/gallery-1-1.jpg"
                  className="gallery-one__popup img-popup"
                >
                  <i className="kipso-icon-plus-symbol" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src="/images/gallery-1-2.jpg" alt />
                <a
                  href="/images/gallery-1-2.jpg"
                  className="gallery-one__popup img-popup"
                >
                  <i className="kipso-icon-plus-symbol" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src="/images/gallery-1-3.jpg" alt />
                <a
                  href="/images/gallery-1-3.jpg"
                  className="gallery-one__popup img-popup"
                >
                  <i className="kipso-icon-plus-symbol" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src="/images/gallery-1-4.jpg" alt />
                <a
                  href="/images/gallery-1-4.jpg"
                  className="gallery-one__popup img-popup"
                >
                  <i className="kipso-icon-plus-symbol" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src="/images/gallery-1-5.jpg" alt />
                <a
                  href="/images/gallery-1-5.jpg"
                  className="gallery-one__popup img-popup"
                >
                  <i className="kipso-icon-plus-symbol" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src="/images/gallery-1-6.jpg" alt />
                <a
                  href="/images/gallery-1-6.jpg"
                  className="gallery-one__popup img-popup"
                >
                  <i className="kipso-icon-plus-symbol" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src="/images/gallery-1-7.jpg" alt />
                <a
                  href="/images/gallery-1-7.jpg"
                  className="gallery-one__popup img-popup"
                >
                  <i className="kipso-icon-plus-symbol" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src="/images/gallery-1-8.jpg" alt />
                <a
                  href="/images/gallery-1-8.jpg"
                  className="gallery-one__popup img-popup"
                >
                  <i className="kipso-icon-plus-symbol" />
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="gallery-one__single">
                <img src="/images/gallery-1-9.jpg" alt />
                <a
                  href="/images/gallery-1-9.jpg"
                  className="gallery-one__popup img-popup"
                >
                  <i className="kipso-icon-plus-symbol" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gallery;
