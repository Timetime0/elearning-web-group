import { call, put, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";
import {
  BookingCourseServices,
  UnBookingCourseServices,
} from "../../services/BookingCourseServices";
import {
  BOOKING_COURSE,
  BOOKING_COURSE_SAGA,
  UNBOOKING_COURSE_SAGA,
} from "../types/BookingCourseType";

function* getBookingCourseApi(action) {
  try {
    const res = yield call(() => BookingCourseServices(action.user));

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Đăng ký khóa học thành công",
      });
    }
    yield put({
      type: BOOKING_COURSE,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
    Swal.fire({
      icon: "error",
      title: "Đăng ký khóa học không thành công",
      text: `${e.response.data}`,
    });
  }
}
export function* followGetBookingCourseApi() {
  yield takeLatest(BOOKING_COURSE_SAGA, getBookingCourseApi);
}

function* getUnBookingCourseApi(action) {
  try {
    const res = yield call(() => UnBookingCourseServices(action.user));

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Hủy đăng ký khóa học thành công",
      });
    }
    yield put({
      type: BOOKING_COURSE,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
    Swal.fire({
      icon: "error",
      title: "Hủy đăng ký khóa học không thành công",
      text: `${e.response.data}`,
    });
  }
}
export function* followGetUnBookingCourseApi() {
  yield takeLatest(UNBOOKING_COURSE_SAGA, getUnBookingCourseApi);
}
