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
    <div>
      <div className="limiter">
        <div
          className="container-login100"
          style={{
            backgroundImage: `url(https://picsum.photos/id/${random()}/1080/1920/?blur=8)`,
          }}
        >
          <div className="wrap-login100 p-t-190 p-b-30">
            <form
              className="login100-form validate-form"
              onSubmit={(e) => handleLogin(e)}
            >
              <div className="login100-form-avatar">
                <img
                  src="https://picsum.photos/id/1050/1080/1920/"
                  alt="AVATAR"
                />
              </div>
              <span className="login100-form-title p-t-20 p-b-45">
                John Doe
              </span>
              <div
                className="wrap-input100 validate-input m-b-10"
                data-validate="Username is required"
              >
                <input
                  ref={inputUsername}
                  className="input100"
                  type="text"
                  name="taiKhoan"
                  placeholder="Username"
                  onChange={(e) => handleChange(e)}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-user" />
                </span>
              </div>
              <div
                className="wrap-input100 validate-input m-b-10"
                data-validate="Password is required"
              >
                <input
                  ref={inputPassword}
                  className="input100"
                  type="password"
                  name="matKhau"
                  placeholder="Password"
                  onChange={(e) => handleChange(e)}
                />
                <span className="focus-input100" />
                <span className="symbol-input100">
                  <i className="fa fa-lock" />
                </span>
              </div>
              <div className="container-login100-form-btn p-t-10">
                <button className="login100-form-btn">Login</button>
              </div>
              <div className="text-center w-full p-t-25 p-b-230">
                <a href="#" className="txt1">
                  Forgot Username / Password?
                </a>
              </div>
              <div className="text-center w-full">
                <NavLink to="/register" className="txt1">
                  Create new account
                  <ArrowRightAltIcon />
                </NavLink>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
