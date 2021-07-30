import { call, put, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";
import {
  AddCourseAmdminServices,
  AddImageCourse,
  CourseListAdminServices,
  DeleteCourseServices,
  GetUserInCourseSerVices,
  UpdateAddImageCourse,
} from "../../../services/AdminServices/CourseListAdminServices";
import {
  ADD_COURSE_ADMIN_SAGA,
  ADD_COURSE_IMAGE_ADMIN_SAGA,
  DELETE_COURSE_ADMIN_SAGA,
  GET_COURSE_LIST_ADMIN,
  GET_COURSE_LIST_ADMIN_SAGA,
  GET_USER_IN_COURSE_ADMIN,
  GET_USER_IN_COURSE_ADMIN_SAGA,
  UPDATE_COURSE_IMAGE_ADMIN_SAGA,
} from "../../types/AdminType/GetCourseListAdminType";
function* getCourseListAdminApi() {
  try {
    const res = yield call(() => CourseListAdminServices());
    yield put({
      type: GET_COURSE_LIST_ADMIN,
      data: res.data,
    });
  } catch (e) {
    console.log(e);
  }
}

export function* followGetCourseListAdminApi() {
  yield takeLatest(GET_COURSE_LIST_ADMIN_SAGA, getCourseListAdminApi);
}

// ===========================================================================================================================
// Add Course
function* addCourseApi(action) {
  try {
    let result = yield call(() => {
      return AddCourseAmdminServices(action.course);
    });
    console.log(result);
    if (result.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Thêm khóa học thành công",
        html: `
              <div className="text-left"><span className="font-weight">Mã Khóa Học:</span> ${action.course.maKhoaHoc} </div>
              <div className="text-left"><span className="font-weight">Tên Khóa Học:</span> ${action.course.tenKhoaHoc}</div>
              <div className="text-left"><span className="font-weight">Mô Tả: </span>${action.course.moTa} </div>
              <div className="text-left"><span className="font-weight">Hình Ảnh:</span> ${action.course.hinhAnh} </div>
              <div className="text-left"><span className="font-weight">Mã nhóm:</span> ${action.course.maNhom}</div>
              <div className="text-left"><span className="font-weight">Ngày Tạo:</span> ${action.course.ngayTao}</div>
              <div className="text-left"><span className="font-weight">Mã Danh Mục Khóa Học: </span>${action.course.maDanhMucKhoaHoc}</div>
              <div className="text-left"><span className="font-weight">Tài Khoản Người Tạo: </span>${action.course.taiKhoanNguoiTao}</div>

              `,
      });
    }
  } catch (err) {
    console.log(err.response.data);
    Swal.fire({
      icon: "error",
      title: `Thất bại`,
      text: `${err.response.data}`,
    });
  }
}

export function* followAddCourseApi() {
  yield takeLatest(ADD_COURSE_ADMIN_SAGA, addCourseApi);
}

// ===========================================================================================================================
// Add Img Course

function* addImgCourse(action) {
  try {
    let form_data = new FormData();
    for (let key in action.course) {
      form_data.append(key, action.course[key]);
    }
    let res = yield call(() => {
      return AddImageCourse(form_data);
    });
    console.log(res);

    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Thêm thành công",
      });
    }
  } catch (err) {
    console.log(err);
    Swal.fire({
      icon: "error",
      title: `${err.response.data}`,
    });
  }
}

export function* followAddImgCourse() {
  yield takeLatest(ADD_COURSE_IMAGE_ADMIN_SAGA, addImgCourse);
}

// ===========================================================================================================================
// Update Img Course
function* updataImgCourse(action) {
  try {
    let form_data = new FormData();
    for (let key in action.course) {
      form_data.append(key, action.course[key]);
    }

    let res = yield call(() => {
      return UpdateAddImageCourse(form_data);
    });
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Cập nhật thành công",
      });
    }
  } catch (err) {
    console.log(err);
    Swal.fire({
      icon: "error",
      title: `${err.response.data}`,
    });
  }
}
export function* followUpdataImgCourse() {
  yield takeLatest(UPDATE_COURSE_IMAGE_ADMIN_SAGA, updataImgCourse);
}

// ===========================================================================================================================
// Delete Course
function* deleteCourseApi(action) {
  try {
    let res = yield call(() => {
      return DeleteCourseServices(action.maKhoaHoc);
    });
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Đã xóa",
      });
    }
  } catch (err) {
    console.log(err.response.data);
    Swal.fire({
      icon: "error",
      title: `${err.response.data}`,
    });
  }
}
export function* followDeleteCourseApi() {
  yield takeLatest(DELETE_COURSE_ADMIN_SAGA, deleteCourseApi);
}

// ===========================================================================================================================
// Get User In Course

function* getUserInCourseApi(action) {
  try {
    const res = yield call(() => GetUserInCourseSerVices(action.data));
    yield put({
      type: GET_USER_IN_COURSE_ADMIN,
      data: res.data,
    });
  } catch (err) {
    console.log(err.response.data);
  }
}
export function* followGetUserInCourseApi() {
  yield takeLatest(GET_USER_IN_COURSE_ADMIN_SAGA, getUserInCourseApi);
}
