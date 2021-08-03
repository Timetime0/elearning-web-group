import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import { GET_USER_IN_COURSE_ADMIN_SAGA } from "../../../../redux/types/AdminType/GetCourseListAdminType";
import { GET_USER_WAITING_ACCEPT_SAGA } from "../../../../redux/types/AdminType/GetUserListType";

export default function UserWaitingAcceptDataTable(props) {
  const onDelete = props.onDelete;
  const onEdit = props.onEdit;
  const inHideEditButton = props.inHideEditButton;
  const isDeleteCheckBox = props.isDeleteCheckBox;

  const dispatch = useDispatch();

  const { maKhoaHoc } = useParams();
  useEffect(() => {
    dispatch({
      type: GET_USER_WAITING_ACCEPT_SAGA,
      maKhoaHoc: { maKhoaHoc: maKhoaHoc },
    });
  }, [dispatch]);

  let user = useSelector((state) => state.UserReducer.userWaitingAccept);
  console.log(user);
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
    { field: "biDanh", headerName: "Họ Tên", width: 280 },
    { field: "hoTen", headerName: "Email", width: 320 },
  ];

  const handleRowSelection = (e) => {};
  const temp = [];
  // view profile user
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        checkboxSelection={true}
        data={props.data}
        onRowSelected={handleRowSelection}
      />
    </div>
  );
}
