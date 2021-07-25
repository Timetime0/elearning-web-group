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

export function DeleteUserServices(taiKhoan) {
  const admin = JSON.parse(localStorage.getItem("GV"));
  return Axios({
    method: "DELETE",
    url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

// {
//   taiKhoan: "",
//   matKhau: "",
//   hoTen: "",
//   soDT: "",
//   maLoaiNguoiDung: "",
//   maNhom: "",
//   email: ""
// }

// accessToken: ".."
// email: "dpnguyen53@gmail.com"
// hoTen: "Nguyên Đinh Phúc"
// maLoaiNguoiDung: "GV"
// maNhom: "GP01"
// soDT: "0987654321"
// taiKhoan: "dpnguyen"

export function AddUserServices(user) {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  console.log("admin", admin);

  // const a = JSON.stringify(user)

  return Axios({
    method: "POST",
    url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
    data: JSON.stringify(user),
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}
