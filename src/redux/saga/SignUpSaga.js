import { call, put, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";
import { SighUpServices } from "../../services/SigupServices";
import { SIGN_UP, SIGN_UP_SAGA } from "../types/SignUpType";

function* getSignUpApi(action) {
  try {
    const res = yield call(() => SighUpServices(action.user));
    yield put({
      type: SIGN_UP,
      data: res.data,
    });
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Đăng Ký thành công",
      });
      // action.history.push("");
      // <Redirect to="/" />;
    }
  } catch (error) {
    console.log(error.response.data);
  }
}

export function* followGetSignUpAction() {
  yield takeLatest(SIGN_UP_SAGA, getSignUpApi);
}
