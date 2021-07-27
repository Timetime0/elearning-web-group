import Axios from "axios";

export function CourseListAdminServices() {
  return Axios({
    method: "GET",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
  });
}

// Add course
export function AddCourseAmdminServices(course) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "POST",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHoc",
    data: course,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

// upload image
export function AddImageCourse(img) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "POST",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/UploadHinhAnhKhoaHoc",
    data: img,
    headers: {
      Authorization: `bearer ${admin.accessToken}`,
    },
  });
}

// update image course

export function UpdateAddImageCourse(img) {
  const admin = JSON.parse(localStorage.getItem("admin"));
  return Axios({
    method: "POST",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload",
    data: img,
    headers: {
      Authorization: `bearer ${admin.accessToken}`,
    },
  });
}

//=======================================================================================================================
// Delete course

export function DeleteCourseServices(maKhoaHoc) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    type: "DELETE",
    url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}
