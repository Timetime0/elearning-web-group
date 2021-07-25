import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { SIGN_UP_SAGA } from "../../../redux/types/SignUpType";

function Register() {
  const dispatch = useDispatch();

  let [userRes, setUserRes] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    email: "",
    soDT: "",
    maNhom: "GP01",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserRes({
      ...userRes,
      [name]: value,
    });
  };

  const onSubmitRes = (event) => {
    event.preventDefault();
    dispatch({
      type: SIGN_UP_SAGA,
      user: userRes,
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
              <h3>Register</h3>
              <p>Start learning with us now</p>

              <div className="page-links">
                <NavLink to="/login">Login</NavLink>
                <NavLink to="/register" className="active">
                  Register
                </NavLink>
              </div>
              <form onSubmit={(event) => onSubmitRes(event)} method="POST">
                <input
                  className="form-control"
                  type="text"
                  name="hoTen"
                  placeholder="Full Name"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <input
                  className="form-control"
                  type="email"
                  name="email"
                  placeholder="E-mail Address"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <input
                  className="form-control"
                  type="text"
                  name="taiKhoan"
                  placeholder="Account"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <input
                  className="form-control"
                  type="password"
                  name="matKhau"
                  placeholder="Password"
                  required
                  onChange={(e) => handleChange(e)}
                />
                <input
                  className="form-control"
                  type="text"
                  name="soDT"
                  placeholder="Phone number"
                  required
                  onChange={(e) => handleChange(e)}
                />

                <div className="form-button">
                  <button id="submit" type="submit" className="ibtn">
                    Register
                  </button>
                </div>
              </form>
              <div className="other-links">
                <span>Or register with</span>
                <Link to="/">Facebook</Link>
                <Link to="/">Google</Link>
                <Link to="/">Linkedin</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
