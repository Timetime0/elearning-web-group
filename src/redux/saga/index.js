import { all } from "@redux-saga/core/effects";
import {
  followAddUserApi,
  followDeleteUserApi,
  followGetProfileUserApi,
  followGetUserListApiAction,
  followUpdateUserApi,
} from "./AdminSaga/UserListSaga";
import { followGetCourseListApiAction } from "./CourseListSaga";
import { followGetCourseApiAction } from "./CourseSaga";
import { followGetDetailCourseApiAction } from "./DetailSaga";
import { followGetCourseFromListApiAction } from "./GetCourseFromListSaga";
import { followGetLoginApiAction } from "./LoginSaga";
import { followGetSignUpAction } from "./SignUpSaga";
import { followGetLoginAdminApiAction } from "./AdminSaga/LoginAdminSaga";
import { followGetBookingCourseApi } from "./BookingCourseSaga";
import {
  followAddCourseApi,
  followAddImgCourse,
  followDeleteCourseApi,
  followGetCourseListAdminApi,
  followUpdataImgCourse,
} from "./AdminSaga/CourseListAdminSaga";
// cấu hình
export default function* rootSaga() {
  yield all([
    followGetCourseApiAction(),
    followGetDetailCourseApiAction(),
    followGetCourseListApiAction(),
    followGetLoginApiAction(),
    followGetCourseFromListApiAction(),
    followGetSignUpAction(),
    followGetLoginAdminApiAction(),
    followGetBookingCourseApi(),

    // Admin
    // Admin Course Saga
    followGetCourseListAdminApi(),
    followAddCourseApi(),
    followAddImgCourse(),
    followUpdataImgCourse(),
    followDeleteCourseApi(),

    // Admin User Saga
    followGetUserListApiAction(),
    followUpdateUserApi(),
    followDeleteUserApi(),
    followAddUserApi(),
    followGetProfileUserApi(),
  ]);
}
