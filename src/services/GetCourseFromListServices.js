import Axios from "axios"

export function GetCourseFromListService(maDanhMuc){
	return Axios({
		method: "GET",
		url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}`
	})
}