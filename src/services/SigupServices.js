import Axios from "axios"

export function SighUpServices(user) {
	return Axios({
		type: "POST",
		url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
		data: user,
	})
}