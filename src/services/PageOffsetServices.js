import Axios from "axios";

export function PageOffsetServices(number) {
  return Axios({
    method: "GET",
    url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${number}&pageSize=9`,
  });
}
