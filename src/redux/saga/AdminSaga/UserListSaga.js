import { call, put, takeLatest } from "redux-saga/effects";
import { UserListServices } from "../../../services/AdminServices/UserList";
import {
  GET_USER_LIST,
  GET_USER_LIST_SAGA,
} from "../../types/AdminType/GetUserListType";

function* getUserListApi() {
  try {
    const res = yield call(() => UserListServices());
    yield put({
      type: GET_USER_LIST,
      data: res.data,
    });
  } catch (err) {
    console.log(err);
  }
}
export function* followGetUserListApiAction() {
  yield takeLatest(GET_USER_LIST_SAGA, getUserListApi);
}
