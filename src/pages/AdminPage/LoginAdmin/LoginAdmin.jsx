import React, { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LOGIN_ADMIN_SERVICE_SAGA } from "../../../redux/types/AdminType/LoginAdminType";

function LoginAdmin() {
  const [, updateState] = React.useState();
  const forceUpdate = React.useCallback(() => updateState({}), []);
  const inputUsername = useRef(null);
  const inputPassword = useRef(null);
  const dispatch = useDispatch();
  let [adminLogin, setAdminLogin] = useState({
    taiKhoan: "",
    matKhau: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAdminLogin({
      ...adminLogin,
      [name]: value,
    });

    forceUpdate();
  };
  const history = useHistory();
  const handleLogin = (e) => {
    e.preventDefault();
    dispatch({
      type: LOGIN_ADMIN_SERVICE_SAGA,
      user: adminLogin,
      history: history,
    });
  };

  return (
    <div className="LoginAdminForm">
      <div className="center">
        <h1>Login Admin</h1>
        <form method="post" onSubmit={(e) => handleLogin(e)}>
          <div className="txt_field">
            <input
              type="text"
              ref={inputUsername}
              name="taiKhoan"
              onChange={(e) => handleChange(e)}
              required
            />
            <span />
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input
              type="password"
              ref={inputPassword}
              name="matKhau"
              onChange={(e) => handleChange(e)}
              required
            />
            <span />
            <label>Password</label>
          </div>
          <div className="pass">Forgot Password?</div>
          <input type="submit" defaultValue="Login" className="inputSubmit" />
        </form>
      </div>
    </div>
  );
}

export default LoginAdmin;
