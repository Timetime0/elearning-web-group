import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GET_USER_IN_COURSE_ADMIN_SAGA } from "../../../../redux/types/AdminType/GetCourseListAdminType";

let arrNew = [];

export default function UserManagerDataTable(props) {
  const onDelete = props.onDelete;
  const onEdit = props.onEdit;
  const inHideEditButton = props.inHideEditButton;
  const isDeleteCheckBox = props.isDeleteCheckBox;

  const dispatch = useDispatch();

  const { maKhoaHoc } = useParams();
  useEffect(() => {
    dispatch({
      type: GET_USER_IN_COURSE_ADMIN_SAGA,
      maKhoaHoc: { maKhoaHoc: maKhoaHoc },
    });
  }, [dispatch]);

  const [rows, setRows] = useState([]);

  let user = useSelector((state) => state.CourseListAdminrReducer.userInCourse);

  useEffect(() => {
    setRows(
      user[maKhoaHoc]?.map((item, index) => {
        return {
          id: index,
          ...item,
        };
      })
    );
  }, [user]);

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
    { field: "biDanh", headerName: "Họ Tên", type: "text", width: 280 },
    { field: "hoTen", headerName: "Email", type: "text", width: 320 },
  ];

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
        rows={rows}
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
