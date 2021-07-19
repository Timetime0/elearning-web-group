import { all } from "@redux-saga/core/effects";
import { followGetUserListApiAction } from "./AdminSaga/UserListSaga";
import { followGetCourseListApiAction } from "./CourseListSaga";
import { followGetCourseApiAction } from "./CourseSaga";
import { followGetDetailCourseApiAction } from "./DetailSaga";
import { followGetCourseFromListApiAction } from "./GetCourseFromListSaga";
import { followGetLoginApiAction } from "./LoginSaga";
import { followGetSignUpAction } from "./SignUpSaga";
import { followGetLoginAdminApiAction } from "./AdminSaga/LoginAdminSaga";
import { followGetBookingCourseApi } from "./BookingCourseSaga";
// cấu hình
export default function* rootSaga() {
  yield all([
    followGetCourseApiAction(),
    followGetDetailCourseApiAction(),
    followGetCourseListApiAction(),
    followGetLoginApiAction(),
    followGetUserListApiAction(),
    followGetCourseFromListApiAction(),
    followGetSignUpAction(),
    followGetLoginAdminApiAction(),
    followGetBookingCourseApi(),
  ]);
}
