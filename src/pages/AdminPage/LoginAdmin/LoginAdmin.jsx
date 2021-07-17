import React from "react";

function LoginAdmin() {
  return (
    <div className="LoginAdminForm">
      <div className="center">
        <h1>Login Admin</h1>
        <form method="post">
          <div className="txt_field">
            <input type="text" required />
            <span />
            <label>Username</label>
          </div>
          <div className="txt_field">
            <input type="password" required />
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
