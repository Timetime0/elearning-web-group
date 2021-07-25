import { call, put, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";
import {
  AddCourseAmdminServices,
  CourseListAdminServices,
} from "../../../services/AdminServices/CourseListAdminServices";
import {
  ADD_COURSE_ADMIN_SAGA,
  GET_COURSE_LIST_ADMIN,
  GET_COURSE_LIST_ADMIN_SAGA,
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
        title: "Thêm người dùng",
        html: `
              <div className="text-left"><span className="font-weight">Tài khoản:</span> ${action.course.maKhoaHoc} </div>
              <div className="text-left"><span className="font-weight">Mật Khẩu:</span> ${action.course.tenKhoaHoc}</div>
              <div className="text-left"><span className="font-weight">Email: </span>${action.course.moTa} </div>
              <div className="text-left"><span className="font-weight">Số điện thoai:</span> ${action.course.hinhAnh} </div>
              <div className="text-left"><span className="font-weight">Mã nhóm:</span> ${action.course.maNhom}</div>
              <div className="text-left"><span className="font-weight">Mã loại người dùng:</span> ${action.course.ngayTao}</div>
              <div className="text-left"><span className="font-weight">Họ Tên: </span>${action.course.maDanhMucKhoaHoc}</div>
              <div className="text-left"><span className="font-weight">Họ Tên: </span>${action.course.taiKhoanNguoiTao}</div>

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
