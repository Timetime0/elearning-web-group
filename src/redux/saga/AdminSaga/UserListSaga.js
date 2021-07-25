import { call, put, takeLatest } from "redux-saga/effects";
import Swal from "sweetalert2";
import {
  AddUserServices,
  DeleteUserServices,
  EditUserServices,
  UserListServices,
} from "../../../services/AdminServices/UserList";
import {
  ADD_USER_SAGA,
  DELETE_USER_SAGA,
  EDIT_USER,
  EDIT_USER_SAGA,
  GET_USER_LIST,
  GET_USER_LIST_SAGA,
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
    console.log(res);
    if (res.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Cập nhật người dùng",
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
        title: "Thêm người dùng",
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
