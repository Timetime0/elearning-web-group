import Axios from "axios";

export function GetCourseFromListService(maDanhMucKhoahoc, maNhom) {
  return Axios({
    method: "GET",
    url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMucKhoahoc}&MaNhom=GP01`,
  });
}
