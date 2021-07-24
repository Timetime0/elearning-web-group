import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { COURSE_LIST_SERVICES_SAGA } from "../../../../redux/types/CourseListType";
import "../ContentUserList/FormStyle.css";
function FromAddCourse(props) {
  const { showPopUp, setShowPopUp } = props;
  // close popup add user
  // Show alert to close menu
  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: "btn btn-success",
      cancelButton: "btn btn-danger",
    },
    buttonsStyling: false,
  });
  const btnClose = () => {
    setShowPopUp((prev) => !prev);
    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be save to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Return",
        cancelButtonText: "Yes, I want to quit",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          setShowPopUp((prev) => !prev);

          // showPopUp;
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your data is safe :)",
            "error"
          );
        }
      });
  };

  // Get API danh mục khóa học

  let listCourse = useSelector((state) => state.CourseReducer.courseList);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: COURSE_LIST_SERVICES_SAGA,
    });
  }, [dispatch]);

  // Get user form localStorage

  const user = JSON.parse(localStorage.getItem("user"));
  console.log(user);
  return (
    <div>
      {showPopUp ? (
        <div className={`admin_for ${showPopUp && `in_animation_course`}`}>
          <div className="form_container">
            <div className="title">Add Course</div>
            <div className="content">
              <form action="#">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Tên Khóa Học</span>
                    <input
                      type="text"
                      placeholder="Nhập tên khóa học..."
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Mã Khóa Học</span>
                    <input
                      type="text"
                      placeholder="Nhập mã khóa học..."
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Ngày tạo</span>
                    <input type="datetime-local" name="ngayTao" required />
                  </div>
                  <div className="input-box">
                    <span className="details">Mã Nhóm</span>
                    <select name="maNhom" id="id" className="select_group">
                      <option value="GP01">GP01</option>
                      <option value="GP02">GP02</option>
                      <option value="GP03">GP03</option>
                      <option value="GP04">GP04</option>
                      <option value="GP05">GP05</option>
                      <option value="GP06">GP06</option>
                      <option value="GP07">GP07</option>
                      <option value="GP08">GP08</option>
                      <option value="GP09">GP09</option>
                      <option value="GP10">GP10</option>
                      <option value="GP11">GP11</option>
                      <option value="GP12">GP12</option>
                      <option value="GP13">GP13</option>
                      <option value="GP14">GP14</option>
                      <option value="GP15">GP15</option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Mã Danh Mục Khóa Học</span>
                    <select
                      name="maDanhMucKhoaHoc"
                      id="id"
                      className="select_group"
                    >
                      {listCourse.map((list, index) => {
                        return (
                          <option value={list.maDanhMuc}>
                            {list.maDanhMuc}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Tài Khoản Người Tạo</span>
                    <input
                      type="text"
                      placeholder="Nhập mã khóa học..."
                      value={user.taiKhoan}
                      disabled
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Hình Ảnh</span>
                    <input
                      type="file"
                      required
                      className="input_uploadImages"
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Mô Tả</span>

                    <textarea
                      className="form_description"
                      placeholder="Nhập mô tả...."
                      type="text"
                      name="moTa"
                      required
                    />
                  </div>
                </div>

                <div className="button">
                  <input type="submit" defaultValue="Add" />
                  <button className="button_close" onClick={btnClose}>
                    Cancle
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default FromAddCourse;
