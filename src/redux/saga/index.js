import { all } from "@redux-saga/core/effects";
import { followGetCourseApiAction } from "./CourseSaga";
import { followGetDetailCourseApiAction } from "./DetailSaga";

// cấu hình
export default function* rootSaga() {
  yield all([followGetCourseApiAction()]);
  yield all([followGetDetailCourseApiAction()]);
}
