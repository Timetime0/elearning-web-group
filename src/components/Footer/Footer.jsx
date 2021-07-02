import React from "react";
import { NavLink, useHistory } from "react-router-dom";

import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import ContactPhoneIcon from '@material-ui/icons/ContactPhone';
import "./Footer_Style.scss";
function Footer() {
  return (
    <footer className="footer section gray-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 mr-auto col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <div className="logo mb-4">
                <img src="/img/logoElearning.png" alt className="img-fluid" />
              </div>
              <p>Tempora dolorem voluptatum nam vero assumenda voluptate, facilis ad eos obcaecati tenetur veritatis eveniet distinctio possimus.</p>
              <ul className="list-inline footer-socials mt-3">
                <li className="list-inline-item"><NavLink to="http://facebook.com"><FacebookIcon /></NavLink></li>
                <li className="list-inline-item"><NavLink to="https://twitter.com/themefisher"><TwitterIcon /></NavLink></li>
                <li className="list-inline-item"><NavLink to="https://www.pinterest.com/themefisher/"><InstagramIcon /></NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Department</h4>
              <div className="divider mb-4" />
              <ul className="list-unstyled footer-menu lh-35">
                <li><NavLink to="/">Surgery </NavLink></li>
                <li><NavLink to="/">Wome's Health</NavLink></li>
                <li><NavLink to="/">Radiology</NavLink></li>
                <li><NavLink to="/">Cardioc</NavLink></li>
                <li><NavLink to="/">Medicine</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-2 col-md-6 col-sm-6">
            <div className="widget mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Support</h4>
              <div className="divider mb-4" />
              <ul className="list-unstyled footer-menu lh-35">
                <li><NavLink to="/">Terms &amp; Conditions</NavLink></li>
                <li><NavLink to="/">Privacy Policy</NavLink></li>
                <li><NavLink to="/">Company Support </NavLink></li>
                <li><NavLink to="/">FAQuestions</NavLink></li>
                <li><NavLink to="/">Company Licence</NavLink></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="widget widget-contact mb-5 mb-lg-0">
              <h4 className="text-capitalize mb-3">Get in Touch</h4>
              <div className="divider mb-4" />
              <div className="footer-contact-block mb-4">
                <div className="icon d-flex align-items-center">
                  <MailOutlineIcon className="icofont-email mr-3" />
                  <span className="h6 mb-0">Support Available for 24/7</span>
                </div>
                <h4 className="mt-2"><a href="tel:+23-345-67890">Support@email.com</a></h4>
              </div>
              <div className="footer-contact-block">
                <div className="icon d-flex align-items-center">
                  <ContactPhoneIcon className="icofont-support mr-3" />
                  <span className="h6 mb-0">Mon to Fri : 08:30 - 18:00</span>
                </div>
                <h4 className="mt-2"><a href="tel:+23-345-67890">+23-456-6588</a></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
