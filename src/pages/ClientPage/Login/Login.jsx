import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { LOGIN_SERVICE_SAGA } from "../../../redux/types/LoginType";
import { NavLink } from "react-router-dom";

import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

const random = () => {
  return Math.floor(Math.random() * 1050) + 100;
};

function Login(props) {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const inputUsername = useRef(null);
  const inputPassword = useRef(null);
  const dispatch = useDispatch();
  let [userLogin, setUserLogin] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });

    forceUpdate();
    //trễ 1 nhịp
    console.log(userLogin);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: LOGIN_SERVICE_SAGA,
      user: userLogin,
    });
  };
  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder">
          <div className="form-content">
            <div className="form-items">
              <div className="website-logo-inside">
                <a href="index.html">
                  <div className="logo">
                    <img
                      className="logo-size"
                      src="images/logo-light.svg"
                      alt
                    />
                  </div>
                </a>
              </div>
              <h3>Get more things done with Loggin platform.</h3>
              <p>
                Access to the most powerfull tool in the entire design and web
                industry.
              </p>
              <div className="page-links">
                <NavLink to="/login" className="active">
                  Login
                </NavLink>
                <NavLink to="/register">Register</NavLink>
              </div>
              <form onSubmit={(e) => handleLogin(e)}>
                <input
                  className="form-control"
                  ref={inputUsername}
                  type="text"
                  name="taiKhoan"
                  placeholder="Username"
                  onChange={(e) => handleChange(e)}
                  required
                />
                <input
                  className="form-control"
                  ref={inputPassword}
                  type="password"
                  name="matKhau"
                  placeholder="Password"
                  onChange={(e) => handleChange(e)}
                  required
                />
                <div className="form-button">
                  <button id="submit" type="submit" className="ibtn">
                    Login
                  </button>
                </div>
              </form>
              <div className="other-links">
                <span>Or login with</span>
                <a href="#">Facebook</a>
                <a href="#">Google</a>
                <a href="#">Linkedin</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
