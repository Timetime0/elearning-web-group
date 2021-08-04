import { call, put, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";
import {
  RegisterUserCourse,
  UnRegisterUserCourse,
} from "../../../services/AdminServices/RegisterCourse";
import {
  REGISTER_COURSE,
  REGISTER_COURSE_SAGA,
  UNREGISTER_COURSE,
  UNREGISTER_COURSE_SAGA,
} from "../../types/AdminType/RegisterCourse";
// ==================================================================================================
// Hủy ghi danh
function* unRegisterCourseApi(action) {
  try {
    const res = yield call(() => UnRegisterUserCourse(action.data));
    console.log(res);
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Hủy ghi danh thành công",
      });
    }
    yield put({
      type: UNREGISTER_COURSE,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
    Swal.fire({
      icon: "error",
      title: "Hủy ghi danh không thành công",
      text: `${e.response.data}`,
    });
  }
}
export function* followUnRegisterCourseApi() {
  yield takeLatest(UNREGISTER_COURSE_SAGA, unRegisterCourseApi);
}

// ==================================================================================================
// Ghi danh
function* registerCourseApi(action) {
  try {
    const res = yield call(() => RegisterUserCourse(action.data));

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Ghi danh thành công",
      });
    }
    yield put({
      type: REGISTER_COURSE,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
    Swal.fire({
      icon: "error",
      title: "Ghi danh không thành công",
      text: `${e.response.data}`,
    });
  }
}
export function* followRegisterCourseApi() {
  yield takeLatest(REGISTER_COURSE_SAGA, registerCourseApi);
}
