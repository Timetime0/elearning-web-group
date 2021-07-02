import Axios from 'axios'

export function LoginService(){
	return Axios({
		method: "POST",
		url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
	});
}