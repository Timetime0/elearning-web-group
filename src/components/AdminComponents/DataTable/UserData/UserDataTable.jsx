import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET_USER_LIST_SAGA } from "../../../../redux/types/AdminType/GetUserListType";

export default function UserDataTable(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_USER_LIST_SAGA,
    });
  }, [dispatch]);

  let userList = useSelector((state) => state.UserReducer.userList);
  const columns = [
    { field: "id", headerName: "Mã Người Dùng", width: 200 },
    { field: "fullname", headerName: "Họ Tên", width: 340 },
    { field: "email", headerName: "Email", width: 320 },
    {
      field: "phone",
      headerName: "Số điện thoại",
      type: "number",
      width: 230,
    },
    {
      valueGetter: (params) =>
        `${params.getValue("firstName") || ""} ${
          params.getValue("lastName") || ""
        }`,
    },
  ];

  let rows = [
    {
      id: "",
      fullname: "",
      email: "",
      phone: "",
    },
  ];
  userList.map((user, index) => {
    return (rows = [
      {
        id: user.maLoaiNguoiDung,
        fullname: user.hoTen,
        email: user.email,
        phone: user.soDt,
      },
    ]);
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={8} checkboxSelection />
    </div>
  );
}
