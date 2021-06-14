import { all } from "@redux-saga/core/effects";
import { followGetCourseApiAction } from "./CourseSaga";

// cấu hình
export default function* rootSaga() {
  yield all([followGetCourseApiAction()]);
}
