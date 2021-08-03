import { all } from "@redux-saga/core/effects";
import {
  followAddUserApi,
  followDeleteUserApi,
  followEditProfileUserApi,
  followGetProfileUserApi,
  followGetUserListApiAction,
  followGetuserNotInCourseApi,
  followGetUserWaitingAcceptsApi,
  followUpdateUserApi,
} from "./AdminSaga/UserListSaga";
import { followGetCourseListApiAction } from "./CourseListSaga";
import { followGetCourseApiAction } from "./CourseSaga";
import { followGetDetailCourseApiAction } from "./DetailSaga";
import { followGetCourseFromListApiAction } from "./GetCourseFromListSaga";
import { followGetLoginApiAction } from "./LoginSaga";
import { followGetSignUpAction } from "./SignUpSaga";
import { followGetLoginAdminApiAction } from "./AdminSaga/LoginAdminSaga";
import {
  followGetBookingCourseApi,
  followGetUnBookingCourseApi,
} from "./BookingCourseSaga";
import {
  followAddCourseApi,
  followAddImgCourse,
  followDeleteCourseApi,
  followGetCourseListAdminApi,
  followGetCourseNotRegisterApi,
  followGetUserInCourseApi,
  followUpdataImgCourse,
  followUpdateCourseApi,
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
    followGetUnBookingCourseApi(),
    // Admin
    // Admin Course Saga
    followGetCourseListAdminApi(),
    followAddCourseApi(),
    followAddImgCourse(),
    followUpdataImgCourse(),
    followDeleteCourseApi(),
    followGetUserInCourseApi(),
    followUpdateCourseApi(),
    followGetCourseNotRegisterApi(),

    // Admin User Saga
    followGetUserListApiAction(),
    followUpdateUserApi(),
    followDeleteUserApi(),
    followAddUserApi(),
    followGetProfileUserApi(),
    followEditProfileUserApi(),
    followGetuserNotInCourseApi(),
    followGetUserWaitingAcceptsApi(),
  ]);
}
