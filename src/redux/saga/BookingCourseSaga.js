import { call, put, takeLatest } from "redux-saga/effects";
import { BookingCourseServices } from "../../services/BookingCourseServices";
import {
  BOOKING_COURSE,
  BOOKING_COURSE_SAGA,
} from "../types/BookingCourseType";

function* getBookingCourseApi() {
  try {
    const res = yield call(() => BookingCourseServices());
    yield put({
      type: BOOKING_COURSE,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
  }
}
export function* followGetBookingCourseApi() {
  yield takeLatest(BOOKING_COURSE_SAGA, getBookingCourseApi);
}
