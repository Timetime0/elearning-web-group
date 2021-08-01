import { call, put, takeLatest } from "redux-saga/effects";

import { CourseServices } from "../../services/CourseServices";
import { GET_DATA_COURSE, GET_DATA_COURSE_SAGA } from "../types/courseType";

function* getCourseApi() {
  try {
    yield put({
      type: "DISPLAY_LOADING",
    });
    const res = yield call(() => CourseServices());

    yield put({
      type: GET_DATA_COURSE,
      data: res.data,
    });
    yield put({
      type: "HIDE_LOADING",
    });
  } catch (err) {
    console.log(err);
  }
}

export function* followGetCourseApiAction() {
  yield takeLatest(GET_DATA_COURSE_SAGA, getCourseApi);
}
