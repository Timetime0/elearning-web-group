import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button } from "@material-ui/core";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { UNBOOKING_COURSE_SAGA } from "../../../redux/types/BookingCourseType";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function DataCourseUserProfile(props) {
  const classes = useStyles();
  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  const { course } = props;

  // hủy đăng ký khóa học
  const handleUnRegisterCourse = (maKhoaHoc) => {
    const data = {
      maKhoaHoc: maKhoaHoc,
      taiKhoan: user.taiKhoan,
    };
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Confirm",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch({
          type: UNBOOKING_COURSE_SAGA,
          user: data,
        });
      }
    });
  };

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
                  onClick={() => handleUnRegisterCourse(row.maKhoaHoc)}
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
