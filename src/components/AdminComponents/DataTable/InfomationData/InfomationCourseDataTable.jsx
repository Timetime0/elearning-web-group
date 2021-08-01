import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect,useState } from "react";
import { GET_USER_IN_COURSE_ADMIN_SAGA } from "../../../../redux/types/AdminType/GetCourseListAdminType";
import { GET_DATA_COURSE_SAGA } from "../../../../redux/types/courseType";

export default function InfomationCourseDataTable(props) {
  const onDelete = props.onDelete;
  const dispatch = useDispatch();
  const { course } = props;
  // console.log(course);
  
  let user = useSelector((state) => state.CourseListAdminrReducer.userInCourse)
  console.log(user)



  // const maKH = useSelector(
  //   (state) => state.CourseListAdminrReducer.userInCourse
  // );

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
  let rows = [];
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
      field: "maKhoaHoc",
      headerName: "Mã Khóa Học",
      width: 230,
    },
    { field: "tenKhoaHoc", headerName: "Tên Khóa Học", width: 320 },
  ];

  // let course = useSelector((state) => state.CourseReducer.course);
  // useEffect(() => {
  //   dispatch({
  //     type: GET_DATA_COURSE_SAGA,
  //   });
  // }, [dispatch]);
  // console.log(course);

  // console.log(arrMaKhoaHoc[item]);

  // let rows = getUser.map((item, index) => {
  //   return {
  //     id: index,
  //     taiKhoan: item.lstHocVien.taiKhoan,
  //     hoTen: item.lstHocVien.hoTen,
  //     maKhoaHoc: item.maKhoaHoc,
  //     tenKhoaHoc: item.tenKhoaHoc,
  //   };
  // });
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
  // console.log(checkboxSelection);

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
