import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GET_USER_LIST_SAGA } from "../../../../redux/types/AdminType/GetUserListType";

let arrNew = [];

export default function UserDataTable(props) {
  const onDelete = props.onDelete;
  const onEdit = props.onEdit;
  const inHideEditButton = props.inHideEditButton;
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
      type: "text",
      width: 200,
    },
    { field: "hoTen", headerName: "Họ Tên", type: "text", width: 280 },
    { field: "email", headerName: "Email", type: "text", width: 320 },
    {
      field: "soDt",
      headerName: "Số điện thoại",
      type: "number",
      width: 230,
    },
    { field: "maLoaiNguoiDung", headerName: "Mã Loại", width: 320 },
  ];

  useEffect(() => {
    deleteSelectedFile();
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
    const { data, isSelected } = e;
    if (isSelected) {
      const result = arrNew.some((item) => item === data.taiKhoan);
      if (!result) {
        arrNew.push(data.taiKhoan);
      }
    } else {
      const result = arrNew.some((item) => item === data.taiKhoan);
      if (result) {
        arrNew = arrNew.filter((item) => item !== data.taiKhoan);
      }
    }

    if (arrNew.length !== 0) {
      inHideEditButton(true);
    } else {
      inHideEditButton(false);
    }
    onDelete(arrNew);
    onEdit(e.data);
  };

  const [selectionModel, setSelectionModel] = useState([]); // To keep selected file

  const deleteSelectedFile = () => {
    setSelectionModel([]);
  };

  // view profile user
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={list}
        columns={columns}
        pageSize={8}
        checkboxSelection={true}
        data={props.data}
        onRowSelected={handleRowSelection}
        onSelectionModelChange={(newSelection) => {
          setSelectionModel(newSelection.selectionModel);
        }}
        selectionModel={selectionModel}
      />
    </div>
  );
}
