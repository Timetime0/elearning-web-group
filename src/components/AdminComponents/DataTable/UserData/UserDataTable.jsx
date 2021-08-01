import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { GET_USER_LIST_SAGA } from "../../../../redux/types/AdminType/GetUserListType";

export default function UserDataTable(props) {
  const onDelete = props.onDelete;
  const onEdit = props.onEdit;
  const inHideEditButton = props.inHideEditButton;
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
    dispatch({
      type: GET_USER_LIST_SAGA,
    });
  }, [dispatch]);

  // Update User
  // useEffect(
  //   (user) => {
  //     dispatch({
  //       type: EDIT_USER_SAGA,
  //       data: user,
  //     });
  //   },
  //   [dispatch]
  // );

  // Search data
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
      inHideEditButton((hide) => !hide);
      const result = arrNew.some((item) => item === data.taiKhoan);
      if (!result) {
        arrNew.push(data.taiKhoan);
      }
    } else {
      inHideEditButton((hide) => !hide);

      const result = arrNew.some((item) => item === data.taiKhoan);
      if (result) {
        arrNew = arrNew.filter((item) => item !== data.taiKhoan);
      }
    }

    onDelete(arrNew);
    onEdit(e.data);
  };

  //   api: {current: mc}
  // data: {id: 0, taiKhoan: "___abctest", hoTen: "___abctest123123", email: "___abctest", soDt: "___abctest", …}
  // isSelected: false

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
      />
    </div>
  );
}
