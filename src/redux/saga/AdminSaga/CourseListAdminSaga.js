import { call, put, takeLatest } from "redux-saga/effects";
import { CourseListAdminServices } from "../../../services/AdminServices/CourseListAdminServices";
import {
  GET_COURSE_LIST_ADMIN,
  GET_COURSE_LIST_ADMIN_SAGA,
} from "../../types/AdminType/GetCourseListAdminType";
function* getCourseListAdminApi() {
  try {
    const res = yield call(() => CourseListAdminServices());
    yield put({
      type: GET_COURSE_LIST_ADMIN,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
  }
}

export function* followGetCourseListAdminApi() {
  yield takeLatest(GET_COURSE_LIST_ADMIN_SAGA, getCourseListAdminApi);
}
