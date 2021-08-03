import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { GET_COURSE_NOT_REGISTER_SAGA } from "../../../../redux/types/AdminType/GetCourseListAdminType";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ProfileAdminData(props) {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const { course } = props;

  let [taiKhoan] = useState({
    taiKhoan: user.taiKhoan,
  });

  useEffect(() => {
    dispatch({
      type: GET_COURSE_NOT_REGISTER_SAGA,
      taiKhoan: taiKhoan,
    });
  }, [dispatch, taiKhoan]);

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Mã Khóa Học</TableCell>
            <TableCell align="left">Tên Khóa Học</TableCell>
            <TableCell align="left"></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {course?.map((row) => (
            <TableRow key={row.maKhoaHoc}>
              <TableCell component="th" scope="row">
                {row.maKhoaHoc}
              </TableCell>
              <TableCell align="left">{row.tenKhoaHoc}</TableCell>
              <TableCell align="left">
                <Button
                  variant="contained"
                  color="secondary"
                  //   onClick={() => handleUnRegisterCourse(row.maKhoaHoc)}
                >
                  Delete Course
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
