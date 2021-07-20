import { call, put, takeLatest } from "redux-saga/effects";
import {
  LOGIN_ADMIN_SERVICE,
  LOGIN_ADMIN_SERVICE_SAGA,
} from "../../types/AdminType/LoginAdminType";
import Swal from "sweetalert2";
import { LoginAdminService } from "../../../services/AdminServices/LoginAdminServices";

function* getLoginAdminApi(action) {
  try {
    console.log(action);
    const res = yield call(() => LoginAdminService(action.user));
    console.log(res);
    yield put({
      type: LOGIN_ADMIN_SERVICE,
      data: res.data,
    });
    // popup
    if (res.status === 200) {
      if (res.data.maLoaiNguoiDung === "GV") {
        localStorage.setItem("user", JSON.stringify(res.data));
        Swal.fire({
          icon: "success",
          title: "Đăng nhập thành công",
        });
        setTimeout(() => {
          action.history.push("/admin/dashboard");
        }, 2000);
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
export function* followGetLoginAdminApiAction() {
  yield takeLatest(LOGIN_ADMIN_SERVICE_SAGA, getLoginAdminApi);
}
