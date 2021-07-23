import Axios from "axios";

export function BookingCourseServices() {
  return Axios({
    method: "POST",
    url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",
  });
}
