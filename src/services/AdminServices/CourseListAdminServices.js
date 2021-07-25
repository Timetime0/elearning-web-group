import Axios from "axios";

export function CourseListAdminServices() {
  return Axios({
    method: "GET",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
  });
}

// Add course
export function AddCourseAmdminServices(course) {
  const admin = JSON.parse(localStorage.getItem("GV"));
  return Axios({
    method: "POST",
    url: "http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc",
    data: course,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}
