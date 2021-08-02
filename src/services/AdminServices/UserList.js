import Axios from "axios";

export function UserListServices() {
  return Axios({
    method: "GET",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
  });
}

//=======================================================================================================================
// update user

export function EditUserServices(user) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "PUT",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
    data: user,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}
//=======================================================================================================================
// Delete user

export function DeleteUserServices(taiKhoan) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "DELETE",
    url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}
//=======================================================================================================================
// Add user

export function AddUserServices(user) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "POST",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
    data: user,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

//=======================================================================================================================
// View user

export function ViewProfileUserServices(user) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "POST",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
    data: user,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

//=======================================================================================================================
// Edit Profile user
export function EditProfileUserServices(user) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "PUT",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
    data: user,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

//=======================================================================================================================
// Lấy danh sách người dùng chưa ghi danh

export function GetUserNotInCourseServices(maKhoaHoc) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "POST",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",
    data: maKhoaHoc,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}
