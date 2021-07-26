import { call, put, takeLatest } from "redux-saga/effects";
import { LoginService } from "../../services/LoginServices";
import { LOGIN_SERVICE, LOGIN_SERVICE_SAGA } from "../types/LoginType";
import Swal from "sweetalert2";

function* getLoginApi(action) {
  try {
    let res = yield call(() => {
      return LoginService(action.user);
    });
    // popup
    if (res.status === 200) {
      if (res.data.maLoaiNguoiDung === "GV") {
        Swal.fire({
          icon: "error",
          title: "Vui lòng đăng nhập bằng tài khoản người dùng",
        });
      } else {
        localStorage.setItem("user", JSON.stringify(res.data));
        Swal.fire({
          icon: "success",
          title: "Đăng nhập thành công",
        });
        setTimeout(() => {
          action.history.push("");

          window.location.reload(false);
        }, 2000);
      }

      yield put({
        type: LOGIN_SERVICE,
        data: res.data,
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Tài khoản hoặc mật khẩu không chính xác!",
      });
    }
  } catch (e) {
    console.log(e);
    Swal.fire({
      icon: "error",
      title: "Tài khoản hoặc mật khẩu không chính xác!",
    });
    // popup
  }
}
export function* followGetLoginApiAction() {
  yield takeLatest(LOGIN_SERVICE_SAGA, getLoginApi);
}
