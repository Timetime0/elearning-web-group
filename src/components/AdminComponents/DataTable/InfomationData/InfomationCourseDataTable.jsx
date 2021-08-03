import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function InfomationCourseDataTable(props) {
  const dispatch = useDispatch();
  const { data } = props;

  let [dataUser, setDataUser] = useState([]);

  const userInCourse = useSelector(
    (state) => state.CourseListAdminrReducer.userInCourse
  );
  // console.log(userInCourse.taiKhoan);

  useEffect(() => {
    if (userInCourse.length !== 0) {
      setDataUser([userInCourse[data]]);
      console.log(dataUser);
    }
  }, [userInCourse]);

  useEffect(() => {
    if (dataUser) {
      dataUser[0]?.forEach((item, index) => (item.id = index));
      console.log(dataUser);
    }
  }, [dataUser]);

  // console.log(maKH);
  // let rows = course.map((item, index) => {
  //   return {
  //     id: index,
  //     taiKhoan: item.lstHocVien.taiKhoan,
  //     hoTen: item.lstHocVien.hoTen,
  //     maKhoaHoc: item.maKhoaHoc,
  //     tenKhoaHoc: item.tenKhoaHoc,
  //   };
  // });

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
    {
      field: "biDanh",
      headerName: "Bí Danh",
      width: 230,
    },
  ];
  const rows = [];
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={8}
        checkboxSelection={true}
      />
    </div>
  );
}
