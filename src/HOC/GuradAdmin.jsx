import React from "react";
import { Redirect } from "react-router-dom";
function GuradAdmin(props) {
  let user = {};
  if (localStorage.getItem("user")) {
    user = JSON.parse(localStorage.getItem("user"));
  }
  if (user.maLoaiNguoiDung === "GV") {
    return props.children;
  } else {
    return <Redirect to="/"> </Redirect>;
  }
}

export default GuradAdmin;
