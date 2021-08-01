import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { GET_USER_IN_COURSE_ADMIN_SAGA } from "../../../../redux/types/AdminType/GetCourseListAdminType";
import { GET_DATA_COURSE_SAGA } from "../../../../redux/types/courseType";

export default function InfomationCourseDataTable(props) {
  const onDelete = props.onDelete;
  const dispatch = useDispatch();
  const { data } = props;

  let [dataUser, setDataUser] = useState([]);

  const userInCourse = useSelector(
    (state) => state.CourseListAdminrReducer.userInCourse
  );

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

  for (let item in arrTest) {
    if (checkboxSelection.checked) {
      arrTest.push(...item);
    }
  }

  // view profile user
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={arrTest}
        columns={columns}
        pageSize={8}
        checkboxSelection={true}
      />
    </div>
  );
}
