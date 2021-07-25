import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { LOGIN_SERVICE_SAGA } from "../../../redux/types/LoginType";
import { Link, NavLink, useHistory } from "react-router-dom";
import { GoogleLogin } from "react-google-login";

// import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

// const random = () => {
//   return Math.floor(Math.random() * 1050) + 100;
// };

function Login(props) {
  const responseGoogle = (response) => {
    console.log(response);
  };
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);

  const inputUsername = useRef(null);
  const inputPassword = useRef(null);
  const dispatch = useDispatch();
  let [userLogin, setUserLogin] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const history = useHistory();
  // console.log(history);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserLogin({
      ...userLogin,
      [name]: value,
    });

    forceUpdate();
    //trễ 1 nhịp
  };

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: LOGIN_SERVICE_SAGA,
      user: userLogin,
      history: history,
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
                      alt={"img"}
                    />
                  </div>
                </a>
              </div>
              <h3>Login</h3>
              <p>Start learning with us now</p>
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
                <Link to="/">Facebook</Link>
                <GoogleLogin
                  clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                  render={(renderProps) => (
                    <span
                      style={{ fontWeight: "bold", cursor: "pointer" }}
                      onClick={renderProps.onClick}
                      disabled={renderProps.disabled}
                    >
                      Google
                    </span>
                  )}
                  buttonText="Login"
                  onSuccess={responseGoogle}
                  onFailure={responseGoogle}
                  cookiePolicy={"single_host_origin"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Login;
