import { call, put, takeEvery } from "redux-saga/effects";
import { DetailCourseServices } from "../../services/DetailCourseServices";
import {
  DETAIL_COUESE_SERVICES,
  DETAIL_COUESE_SERVICES_SAGA,
} from "../types/CourseDetailType";

function* getDetailCourseApi() {
  try {
    const res = yield call(() => DetailCourseServices());
    yield put({
      type: DETAIL_COUESE_SERVICES,
      data: res.data,
    });
  } catch (error) {
    console.log(error);
  }
}
export function* followGetDetailCourseApiAction() {
  yield takeEvery(DETAIL_COUESE_SERVICES_SAGA, getDetailCourseApi);
}
