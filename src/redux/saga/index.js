import { all } from "@redux-saga/core/effects";
import { followGetCourseListApiAction } from "./CourseListSaga";
import { followGetCourseApiAction } from "./CourseSaga";
import { followGetDetailCourseApiAction } from "./DetailSaga";

// cấu hình
export default function* rootSaga() {
  yield all([followGetCourseApiAction(),followGetDetailCourseApiAction(),followGetCourseListApiAction()]);

}
