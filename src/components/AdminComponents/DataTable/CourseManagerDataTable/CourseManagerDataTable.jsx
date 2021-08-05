import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_COURSE_NOT_REGISTER_SAGA } from "../../../../redux/types/AdminType/GetCourseListAdminType";

export default function CourseManagerDataTable(props) {
  const onUnRegister = props.onUnRegister;

  const dispatch = useDispatch();

  const { taiKhoan } = useParams();
  useEffect(() => {
    dispatch({
      type: GET_COURSE_NOT_REGISTER_SAGA,
      taiKhoan: taiKhoan,
    });
  }, [dispatch]);

  let users = useSelector(
    (state) => state.CourseListAdminrReducer.courseNotRegister
  );
  const rows = users.map((item, index) => {
    return {
      id: index,
      ...item,
    };
  });
  let arrNew = [];

  const selectUser = (e) => {
    if (e) {
      const result = arrNew.some((item) => item === e.row.maKhoaHoc);
      if (!result) {
        arrNew.push(e.row.maKhoaHoc);
        console.log(arrNew);
      } else {
        arrNew = arrNew.filter((item) => item !== e.row.maKhoaHoc);
        console.log(arrNew);
      }
    }
    onUnRegister(e.row.maKhoaHoc);
  };

  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 100,
    },
    {
      field: "maKhoaHoc",
      headerName: "Mã Khóa Học",

      width: 200,
    },
    { field: "biDanh", headerName: "Bí Danh", width: 280 },
    { field: "tenKhoaHoc", headerName: "Tên Khóa Học", width: 320 },
  ];

  // view profile user
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={true}
        data={props.data}
        onRowClick={selectUser}
      />
    </div>
  );
}
