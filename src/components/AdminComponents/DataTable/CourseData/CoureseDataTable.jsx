import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";

export default function CourseDataTable(props) {
  const columns = [
    { field: "id", headerName: "Mã Khóa Hoc", width: 170 },
    { field: "idGroup", headerName: "Mã Nhóm", width: 200 },
    { field: "name", headerName: "Bí Danh", width: 340 },
    { field: "fullname", headerName: "Tên Khóa Học", width: 340 },
    { field: "date", headerName: "Ngày Tạo", width: 320 },
    { field: "member", headerName: "Số Học viên", type: "number", width: 180 },
    { field: "admin", headerName: "Người Tạo", width: 150 },
    { field: "list", headerName: "Danh Mục Khóa Học", width: 250 },
    { field: "description", headerName: "Mô Tả", width: 350 },
  ];

  let rows = [
    {
      id: "123",
      idGroup: "Agl01",
      name: "Angular",
      fullname: "AngularJS",
      date: "01/01/2021",
      member: "10",
      admin: "Admin",
      list: "JS",
      description: "Description",
    },
    {
      id: "1234",
      idGroup: "Agl01",
      name: "Angular",
      fullname: "AngularJS",
      date: "01/01/2021",
      member: "10",
      admin: "Admin",
      list: "JS",
      description: "Description",
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} pageSize={8} checkboxSelection />
    </div>
  );
}
