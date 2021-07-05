import { call, put, takeLatest } from "redux-saga/effects";
import { LoginService } from "../../services/LoginServices";
import { LOGIN_SERVICE, LOGIN_SERVICE_SAGA } from "../types/LoginType";
import Swal from "sweetalert2";

function* getLoginApi(action) {
  try {
    console.log(action);
    const res = yield call(() => LoginService(action.user));
    console.log(res);
    yield put({
      type: LOGIN_SERVICE,
      data: res.data,
    });
    // popup
    if (res.status === 200) {
      if (res.data.maLoaiNguoiDung === "HV") {
        localStorage.setItem("user", JSON.stringify(res.data));
        Swal.fire({
          icon: "success",
          title: "Đăng nhập thành công",
        });
        // action.history.push("./admin/dashboard");
      }
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
