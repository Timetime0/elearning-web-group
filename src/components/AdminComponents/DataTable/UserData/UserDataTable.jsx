import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET_USER_LIST_SAGA } from "../../../../redux/types/AdminType/GetUserListType";

export default function UserDataTable(props) {
  const onDelete = props.onDelete;
  const onEdit = props.onEdit;
  const onView = props.onView;

  const isDeleteCheckBox = props.isDeleteCheckBox;

  const dispatch = useDispatch();
  let userList = useSelector((state) => state.UserReducer.userList);
  let list = userList.map((user, index) => {
    return { id: index, ...user };
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
    { field: "hoTen", headerName: "Họ Tên", width: 280 },
    { field: "email", headerName: "Email", width: 320 },
    {
      field: "soDt",
      headerName: "Số điện thoại",
      type: "number",
      width: 230,
    },
    { field: "maLoaiNguoiDung", headerName: "Mã Loại", width: 320 },
  ];

  useEffect(() => {
    dispatch({
      type: GET_USER_LIST_SAGA,
    });
  }, [dispatch, isDeleteCheckBox]);

  // Search data
  let arrTest = [];
  const { checkboxSelection } = props;

  for (let item in arrTest) {
    if (checkboxSelection.checked) {
      arrTest.push(...item);
    }
  }

  const handleRowSelection = (e) => {
    console.log(e.row);
    onView(e.row.taiKhoan);

    onDelete(e.row.taiKhoan);
    onEdit(e.row);
  };

  // view profile user
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={list}
        columns={columns}
        // checkboxSelection={true}
        data={props.data}
        onRowClick={handleRowSelection}
      />
    </div>
  );
}
