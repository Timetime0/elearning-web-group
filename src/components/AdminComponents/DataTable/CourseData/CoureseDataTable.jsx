import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { GET_COURSE_LIST_ADMIN_SAGA } from "../../../../redux/types/AdminType/GetCourseListAdminType";
import { useEffect } from "react";

export default function CourseDataTable(props) {
  const dispatch = useDispatch();
  const onDelete = props.onDelete;

  let list = useSelector(
    (state) => state.CourseListAdminrReducer.courseListAdmin
  );
  let rows = list.map((listKey, index) => {
    return {
      id: index,
      maKhoaHoc: listKey.maKhoaHoc,
      biDanh: listKey.biDanh,
      tenKhoaHoc: listKey.tenKhoaHoc,
      moTa: listKey.moTa,
      luotXem: listKey.luotXem,
      hinhAnh: listKey.hinhAnh,
      maNhom: listKey.maNhom,
      ngayTao: listKey.ngayTao,
      soLuongHocVien: listKey.soLuongHocVien,
      nguoiTao: listKey.nguoiTao.hoTen,
      danhMuc: listKey.danhMucKhoaHoc.tenDanhMucKhoaHoc,
    };
  });
  const columns = [
    { field: "id", headerName: "Id", width: 90 },
    { field: "maKhoaHoc", headerName: "Mã Khóa Hoc", width: 180 },
    { field: "biDanh", headerName: "Bí Danh", width: 340 },
    { field: "tenKhoaHoc", headerName: "Tên Khóa Học", width: 340 },
    { field: "moTa", headerName: "Mô Tả", type: "textArea", width: 350 },
    { field: "luotXem", headerName: "Lượt Xem", width: 140 },
    { field: "hinhAnh", headerName: "Hình Ảnh", width: 150 },
    { field: "maNhom", headerName: "Mã Nhóm", width: 200 },
    { field: "ngayTao", headerName: "Ngày Tạo", width: 150 },
    {
      field: "soLuongHocVien",
      headerName: "Số Học viên",
      type: "number",
      width: 180,
    },
    { field: "nguoiTao", headerName: "Người Tạo", width: 200 },
    { field: "danhMuc", headerName: "Danh Mục Khóa Học", width: 250 },
  ];

  useEffect(() => {
    dispatch({
      type: GET_COURSE_LIST_ADMIN_SAGA,
    });
  }, [dispatch]);

  // lấy item trong rows
  let arrTest = [];
  const { checkboxSelection } = props;
  console.log(checkboxSelection);

  for (let item in arrTest) {
    if (checkboxSelection.checked) {
      arrTest.push(...item);
    }
    console.log(arrTest);
  }

  let arrNew = [];
  const handleRowSelection = (e) => {
    const { data, isSelected } = e;
    if (isSelected) {
      const result = arrNew.some((item) => item === data.maKhoaHoc);
      if (!result) {
        arrNew.push(data.maKhoaHoc);
      }
    } else {
      const result = arrNew.some((item) => item === data.maKhoaHoc);
      if (result) {
        arrNew = arrNew.filter((item) => item !== data.maKhoaHoc);
      }
    }

    onDelete(arrNew);
  };
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        checkboxSelection={true}
        data={props.data}
        onRowSelected={handleRowSelection}
      />
    </div>
  );
}
