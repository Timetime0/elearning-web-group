import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { GET_USER_IN_COURSE_ADMIN_SAGA } from "../../../../redux/types/AdminType/GetCourseListAdminType";

export default function UserManagerDataTable(props) {
  const onUnRegister = props.onUnRegister;

  const dispatch = useDispatch();

  const { maKhoaHoc } = useParams();
  useEffect(() => {
    dispatch({
      type: GET_USER_IN_COURSE_ADMIN_SAGA,
      maKhoaHoc: { maKhoaHoc: maKhoaHoc },
    });
  }, [dispatch, maKhoaHoc]);

  let users = useSelector(
    (state) => state.CourseListAdminrReducer.userInCourse
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
      const result = arrNew.some((item) => item === e.row.taiKhoan);
      if (!result) {
        arrNew.push(e.row.taiKhoan);
      } else {
        arrNew = arrNew.filter((item) => item !== e.row.taiKhoan);
      }
    }

    onUnRegister(e.row.taiKhoan);
  };

  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 100,
    },
    {
      field: "taiKhoan",
      headerName: "Tài Khoản",

      width: 200,
    },
    { field: "biDanh", headerName: "Bí Danh", width: 280 },
    { field: "hoTen", headerName: "Họ Tên", width: 320 },
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
