import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

export default function InfomationUserDataTable(props) {
  const onDelete = props.onDelete;
  const dispatch = useDispatch();

  const columns = [
    {
      field: "id",
      headerName: "id",
      width: 100,
    },
    {
      field: "taiKhoan",
      headerName: "Mã Người Dùng",
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
    onDelete(arrNew);

  };
  const rows = [];

  // view profile user

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
