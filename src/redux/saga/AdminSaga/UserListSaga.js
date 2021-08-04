import { call, put, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";
import {
  AddUserServices,
  DeleteUserServices,
  EditProfileUserServices,
  EditUserServices,
  GetUserNotInCourseServices,
  UserListServices,
  ViewProfileUserServices,
} from "../../../services/AdminServices/UserList";
import {
  ADD_USER_SAGA,
  DELETE_USER_SAGA,
  EDIT_PROFILE_USER,
  EDIT_PROFILE_USER_SAGA,
  EDIT_USER,
  EDIT_USER_SAGA,
  GET_USER_LIST,
  GET_USER_LIST_SAGA,
  GET_USER_NOT_IN_COURSE,
  GET_USER_NOT_IN_COURSE_SAGA,
  GET_USER_WAITING_ACCEPT,
  GET_USER_WAITING_ACCEPT_SAGA,
  VIEW_PROFILE_USER,
  VIEW_PROFILE_USER_SAGA,
} from "../../types/AdminType/GetUserListType";

function* getUserListApi() {
  try {
    const res = yield call(() => UserListServices());
    yield put({
      type: GET_USER_LIST,
      data: res.data,
    });
  } catch (err) {
    console.log(err);
  }
}
export function* followGetUserListApiAction() {
  yield takeLatest(GET_USER_LIST_SAGA, getUserListApi);
}

// ===============================================================================================================================
// Update User

function* updateUserApi(action) {
  try {
    const res = yield call(() => {
      return EditUserServices(action.user);
    });
    yield put({
      type: EDIT_USER,
      data: res.data,
    });
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Cập nhật thành công người dùng",
        html: `
          <div className="text-left"><span className="font-weight">Tài khoản:</span> ${action.user.taiKhoan} </div>
          <div className="text-left"><span className="font-weight">Mật Khẩu:</span> ${action.user.matKhau}</div>
          <div className="text-left"><span className="font-weight">Email: </span>${action.user.email} </div>
          <div className="text-left"><span className="font-weight">Số điện thoai:</span> ${action.user.soDt} </div>
          <div className="text-left"><span className="font-weight">Mã nhóm:</span> ${action.user.maNhom}</div>
          <div className="text-left"><span className="font-weight">Mã loại người dùng:</span> ${action.user.maLoaiNguoiDung}</div>
          <div className="text-left"><span className="font-weight">Họ Tên: </span>${action.user.hoTen}</div>
          `,
      });
    }
  } catch (e) {
    console.log(e);
    Swal.fire({
      icon: "error",
      title: `Thất bại`,
      text: `${e.response.data}`,
    });
  }
}
export function* followUpdateUserApi() {
  yield takeLatest(EDIT_USER_SAGA, updateUserApi);
}

// ===========================================================================================================================
// Delete User

function* deleteUserApi(action) {
  try {
    let res = yield call(() => {
      return DeleteUserServices(action.taiKhoan);
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

export function* followDeleteUserApi() {
  yield takeLatest(DELETE_USER_SAGA, deleteUserApi);
}

// =========================================================================================================================
// Add User

function* addUserApi(action) {
  try {
    let result = yield call(() => {
      return AddUserServices(action.user);
    });

    console.log(result);
    if (result.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Thêm thành công người dùng",
        html: `
              <div className="text-left"><span className="font-weight">Tài khoản:</span> ${action.user.taiKhoan} </div>
              <div className="text-left"><span className="font-weight">Mật Khẩu:</span> ${action.user.matKhau}</div>
              <div className="text-left"><span className="font-weight">Họ Tên: </span>${action.user.hoTen}</div>
              <div className="text-left"><span className="font-weight">Email: </span>${action.user.email} </div>
              <div className="text-left"><span className="font-weight">Số điện thoai:</span> ${action.user.soDt} </div>
              <div className="text-left"><span className="font-weight">Mã nhóm:</span> ${action.user.maNhom}</div>
              <div className="text-left"><span className="font-weight">Mã loại người dùng:</span> ${action.user.maLoaiNguoiDung}</div>
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

export function* followAddUserApi() {
  yield takeLatest(ADD_USER_SAGA, addUserApi);
}

// =========================================================================================================================
// view profile User

function* getProfileUserApi(action) {
  try {
    const res = yield call(() => ViewProfileUserServices(action.user));
    yield put({
      type: VIEW_PROFILE_USER,
      data: res.data,
    });
  } catch (err) {
    console.log(err);
    console.log(err.response.data);
  }
}

export function* followGetProfileUserApi() {
  yield takeLatest(VIEW_PROFILE_USER_SAGA, getProfileUserApi);
}

// edit Profile User
function* editProfileUserApi(action) {
  try {
    const res = yield call(() => EditProfileUserServices(action.user));

    yield put({
      type: EDIT_PROFILE_USER,
      data: res.data,
    });
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Cập nhật thông tin thành công",
        html: `
        <div className="text-left"><span className="font-weight">Họ Tên: </span>${action.user.hoTen}</div>
          <div className="text-left"><span className="font-weight">Tài khoản:</span> ${action.user.taiKhoan} </div>
          <div className="text-left"><span className="font-weight">Mật Khẩu:</span> ${action.user.matKhau}</div>
          <div className="text-left"><span className="font-weight">Email: </span>${action.user.email} </div>
          <div className="text-left"><span className="font-weight">Số điện thoai:</span> ${action.user.soDT} </div>
          `,
      });
    }
  } catch (err) {
    console.log(err);
    console.log(err.response.data);
    Swal.fire({
      icon: "error",
      title: `Thất bại`,
      text: `${err.response.data}`,
    });
  }
}

export function* followEditProfileUserApi() {
  yield takeLatest(EDIT_PROFILE_USER_SAGA, editProfileUserApi);
}

//=======================================================================================================================
// Lấy danh sách người dùng chưa ghi danh
function* getuserNotInCourseApi(action) {
  try {
    const res = yield call(() => GetUserNotInCourseServices(action.maKhoaHoc));
    yield put({
      type: GET_USER_NOT_IN_COURSE,
      data: res.data,
    });
  } catch (err) {
    console.log(err);
    console.log(err.response.data);
  }
}

export function* followGetuserNotInCourseApi() {
  yield takeLatest(GET_USER_NOT_IN_COURSE_SAGA, getuserNotInCourseApi);
}

//=======================================================================================================================
// Lấy danh sách người dùng chờ ghi danh
function* getUserWaitingAcceptsApi(action) {
  try {
    const res = yield call(() => GetUserNotInCourseServices(action.maKhoaHoc));
    yield put({
      type: GET_USER_WAITING_ACCEPT,
      data: res.data,
    });
  } catch (err) {
    console.log(err);
    console.log(err.response.data);
  }
}

export function* followGetUserWaitingAcceptsApi() {
  yield takeLatest(GET_USER_WAITING_ACCEPT_SAGA, getUserWaitingAcceptsApi);
}
