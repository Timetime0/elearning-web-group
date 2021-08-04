import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { GET_USER_IN_COURSE_ADMIN_SAGA } from "../../../../redux/types/AdminType/GetCourseListAdminType";
import { GET_USER_NOT_IN_COURSE_SAGA } from "../../../../redux/types/AdminType/GetUserListType";

export default function UserNotInCourseDataTable(props) {
  const onRegisterCourse = props.onRegisterCourse;

  const dispatch = useDispatch();

  const { maKhoaHoc } = useParams();
  useEffect(() => {
    dispatch({
      type: GET_USER_NOT_IN_COURSE_SAGA,
      maKhoaHoc: { maKhoaHoc: maKhoaHoc },
    });
  }, [dispatch]);

  let user = useSelector((state) => state.UserReducer.userNotInCourse);
  const rows = user?.map((item, index) => {
    return {
      id: index,
      ...item,
    };
  });

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

  let arrNew = [];

  const selectUser = (e) => {
    if (e) {
      const result = arrNew.some((item) => item === e.row.taiKhoan);
      if (!result) {
        arrNew.push(e.row.taiKhoan);
        console.log(arrNew);
      } else {
        arrNew = arrNew.filter((item) => item !== e.row.taiKhoan);
        console.log(arrNew);
      }
    }
    onRegisterCourse(e.row.taiKhoan);
  };

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
