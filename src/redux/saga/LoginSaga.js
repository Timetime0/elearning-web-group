import { call, put, takeLatest } from "redux-saga/effects";
import { LoginService } from "../../services/LoginServices";
import { LOGIN_SERVICE, LOGIN_SERVICE_SAGA } from "../types/LoginType";

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
  } catch (e) {
    console.log(e);
    // popup
  }
}
export function* followGetLoginApiAction() {
  yield takeLatest(LOGIN_SERVICE_SAGA, getLoginApi);
}
