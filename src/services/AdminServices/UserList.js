import Axios from "axios";

export function UserListServices() {
  return Axios({
    method: "GET",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
  });
}

export function EditUserServices(user) {
  const admin = JSON.parse(localStorage.getItem("GV"));
  return Axios({
    method: "PUT",
    url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung",
    data: user,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}
