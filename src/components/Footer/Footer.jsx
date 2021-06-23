import React from "react";
import { NavLink, useHistory } from "react-router-dom";

import "./Footer_Style.scss";
function Footer() {
  return (
    <div className="Footer">
      <h1>This is footer component</h1>
      <div className="footer_Container">
        <div className="footer_Item">
          <div className="item_Course">
            <h2>Course</h2>
          </div>
          <div className="list_Item">
            <ul>
              <li>
                <a>
                  React JS
                </a>
              </li>
              <li>
                <a>
                  Angular JS
                </a>
              </li>
              <li>
                <a>
                  javascript
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer_Item">
          <div className="item_Explore">
            <h2>Explore</h2>
          </div>
        </div>
        <div className="footer_Item">
          <div className="item_Gallery">
            <h2>Gallery</h2>
          </div>
        </div>
        <div className="footer_Item">
          <div className="item_About">
            <h2>About</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
