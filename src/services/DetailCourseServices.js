import Axios from "axios";

export function DetailCourseServices(maKhoaHoc) {
  return Axios({
    method: "GET",
    url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`,
  });
}


