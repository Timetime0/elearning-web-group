import { call, put, takeEvery } from "redux-saga/effects";
import { DetailCourseServices } from "../../services/DetailCourseServices";
import {
  DETAIL_COURSE_SERVICES,
  DETAIL_COURSE_SERVICES_SAGA,
} from "../types/CourseDetailType";

function* getDetailCourseApi(action) {
  try {
    const res = yield call(() => DetailCourseServices(action.data));

    yield put({
      type: DETAIL_COURSE_SERVICES,
      data: res.data,
    });
  } catch (error) {
    console.log(error);
  }
}
export function* followGetDetailCourseApiAction() {
  yield takeEvery(DETAIL_COURSE_SERVICES_SAGA, getDetailCourseApi);
}
