import Axios from "axios";

//=======================================================================================================================
// ghi danh

export function RegisterUserCourse(data) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "POST",
    url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/GhiDanhKhoaHoc`,
    data: data,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

//=======================================================================================================================
// Hủy ghi danh

export function UnRegisterUserCourse(data) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "POST",
    url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh`,
    data: data,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}
