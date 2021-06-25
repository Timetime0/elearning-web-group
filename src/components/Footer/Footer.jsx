import React from "react";
import { NavLink, useHistory } from "react-router-dom";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";

import "./icomoon/style.css";
import "./scss/bootstrap/bootstrap.scss";
import "./scss/style.scss";

import "./Footer_Style.scss";
function Footer() {
  return (
    // <div className="Footer">
    //   <h1>This is footer component</h1>
    //   <div className="footer_Container">
    //     <div className="footer_Item">
    //       <div className="item_Course">
    //         <h2>Course</h2>
    //       </div>
    //       <div className="list_Item">
    //         <ul>
    //           <li>
    //             <a>
    //               React JS
    //             </a>
    //           </li>
    //           <li>
    //             <a>
    //               Angular JS
    //             </a>
    //           </li>
    //           <li>
    //             <a>
    //               javascript
    //             </a>
    //           </li>
    //         </ul>
    //       </div>
    //     </div>
    //     <div className="footer_Item">
    //       <div className="item_Explore">
    //         <h2>Explore</h2>
    //       </div>
    //     </div>
    //     <div className="footer_Item">
    //       <div className="item_Gallery">
    //         <h2>Gallery</h2>
    //       </div>
    //     </div>
    //     <div className="footer_Item">
    //       <div className="item_About">
    //         <h2>About</h2>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <footer className="footer-20192">
      <div className="site-section">
        <div className="container">
          <div className="cta d-block d-md-flex align-items-center px-5">
            <div>
              <h2 className="mb-0">Ready for start learning ?</h2>
              <h3 className="text-dark">Let's get started!</h3>
            </div>
            <div className="ml-auto">
              <a href="#" className="btn btn-dark rounded-0 py-3 px-5">
                Contact us
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm">
              <a href="#" className="footer-logo">
                Colorlib
              </a>
              <p className="copyright">
                <small>© 2019</small>
              </p>
            </div>
            <div className="col-sm">
              <h3>Customers</h3>
              <ul className="list-unstyled links">
                <li>
                  <a href="#">Buyer</a>
                </li>
                <li>
                  <a href="#">Supplier</a>
                </li>
              </ul>
            </div>
            <div className="col-sm">
              <h3>Company</h3>
              <ul className="list-unstyled links">
                <li>
                  <NavLink to="/teachers">Teachers</NavLink>
                </li>
                <li>
                  <NavLink to="/course" href="#">
                    Course
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">About us</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-sm">
              <h3>Further Information</h3>
              <ul className="list-unstyled links">
                <li>
                  <a href="#">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
            <div className="col-md-3">
              <h3>Follow us</h3>
              <ul className="list-unstyled social">
                <li>
                  <NavLink to="/facebook">
                    <span className="icon-facebook" />
                  </NavLink>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-linkedin" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-medium" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-paper-plane" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
