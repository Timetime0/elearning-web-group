import Axios from "axios";

export function BookingCourseServices(user) {
  const admin = JSON.parse(localStorage.getItem("user"));

  return Axios({
    method: "POST",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",
    data: user,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

// ================================================================================================================
// Hủy đăng ký
export function UnBookingCourseServices(user) {
  const admin = JSON.parse(localStorage.getItem("user"));

  return Axios({
    method: "POST",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh",
    data: user,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}
