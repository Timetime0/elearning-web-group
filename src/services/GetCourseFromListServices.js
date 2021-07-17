import Axios from "axios";

export function GetCourseFromListService(maDanhMuc, maNhom) {
  return Axios({
    method: "GET",
    url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=${maNhom}`,
  });
}
