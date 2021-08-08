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
  return Axios({
    method: "POST",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh",
    data: img,
  });
}

// update image course

export function UpdateAddImageCourse(img) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "POST",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload",
    data: img,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
      "Access-Control-Allow-Origin": "*",
      "X-Requested-With": "XMLHttpRequest",
    },
  });
}

//=======================================================================================================================
// Delete course

export function DeleteCourseServices(maKhoaHoc) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "DELETE",
    url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${maKhoaHoc}`,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

//=======================================================================================================================
// Get User In course

export function GetUserInCourseSerVices(maKhoaHoc) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "POST",
    url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc`,
    data: maKhoaHoc,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

//=======================================================================================================================
// update course
export function EditCourseServices(course) {
  return Axios({
    method: "PUT",
    url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHoc",
    data: course,
  });
}

//=======================================================================================================================
// Lấy danh sách khóa học chưa ghi danh

export function GetCourseNotRegister(taiKhoan) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "POST",
    url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`,
    data: taiKhoan,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

//=======================================================================================================================
// Lấy danh sách khóa học đã ghi danh

export function GetCourseWasRegister(taiKhoan) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "POST",
    url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
    data: taiKhoan,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

//=======================================================================================================================
// Lấy danh sách khóa học chờ ghi danh

export function GetCourseWaitingAccept(taiKhoan) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "POST",
    url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet`,
    data: taiKhoan,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

//=======================================================================================================================
// Lấy danh sách khóa học chưa ghi danh

export function GetCourseNotAccept(taiKhoan) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "POST",
    url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${taiKhoan}`,
    data: taiKhoan,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}

//=======================================================================================================================
// Lấy danh sách khóa học đã ghi danh

export function GetCourseWasAccept(taiKhoan) {
  const admin = JSON.parse(localStorage.getItem("user"));
  return Axios({
    method: "POST",
    url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet`,
    data: taiKhoan,
    headers: {
      Authorization: `Bearer ${admin.accessToken}`,
    },
  });
}
