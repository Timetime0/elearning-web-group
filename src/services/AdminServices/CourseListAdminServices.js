import Axios from "axios";

export function CourseListAdminServices() {
  return Axios({
    method: "GET",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
  });
}
