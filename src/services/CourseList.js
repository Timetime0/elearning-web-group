import Axios from "axios";

export function ListCourseServices() {
	return Axios({
		method: "GET",
		url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
	})
} 