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

  // function add course

  let [courseRes, setCourseRes] = useState({
    maKhoaHoc: "",
    tenKhoaHoc: "",
    moTa: "",
    luotXem: 0,
    danhGia: 0,
    hinhAnh: "",
    maNhom: "",
    ngayTao: "",
    maDanhMucKhoaHoc: "",
    taiKhoanNguoiTao: `${user.taiKhoan}`,
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseRes({
      ...courseRes,
      [name]: value,
    });
    console.log(courseRes);
  };
  const onSubmitRes = (event) => {
    event.preventDefault();
    dispatch({
      // type: ADD_USER_SAGA,
      course: courseRes,
    });
  };

  return (
    <div>
      {showPopUp ? (
        <div className={`admin_for ${showPopUp && `in_animation_course`}`}>
          <div className="form_container">
            <div className="title">Add Course</div>
            <div className="content">
              <form onSubmit={(event) => onSubmitRes(event)} method="POST">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Tên Khóa Học</span>
                    <input
                      name="tenKhoaHoc"
                      type="text"
                      placeholder="Nhập tên khóa học..."
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Mã Khóa Học</span>
                    <input
                      name="maKhoaHoc"
                      type="text"
                      placeholder="Nhập mã khóa học..."
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Ngày tạo</span>
                    <input
                      type="date"
                      name="ngayTao"
                      required
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Mã Nhóm</span>
                    <select
                      name="maNhom"
                      id="id"
                      className="select_group"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="GP01" onChange={(e) => handleChange(e)}>
                        GP01
                      </option>
                      <option value="GP02" onChange={(e) => handleChange(e)}>
                        GP02
                      </option>
                      <option value="GP03" onChange={(e) => handleChange(e)}>
                        GP03
                      </option>
                      <option value="GP04" onChange={(e) => handleChange(e)}>
                        GP04
                      </option>
                      <option value="GP05" onChange={(e) => handleChange(e)}>
                        GP05
                      </option>
                      <option value="GP06" onChange={(e) => handleChange(e)}>
                        GP06
                      </option>
                      <option value="GP07" onChange={(e) => handleChange(e)}>
                        GP07
                      </option>
                      <option value="GP08" onChange={(e) => handleChange(e)}>
                        GP08
                      </option>
                      <option value="GP09" onChange={(e) => handleChange(e)}>
                        GP09
                      </option>
                      <option value="GP10" onChange={(e) => handleChange(e)}>
                        GP10
                      </option>
                      <option value="GP11" onChange={(e) => handleChange(e)}>
                        GP11
                      </option>
                      <option value="GP12" onChange={(e) => handleChange(e)}>
                        GP12
                      </option>
                      <option value="GP13" onChange={(e) => handleChange(e)}>
                        GP13
                      </option>
                      <option value="GP14" onChange={(e) => handleChange(e)}>
                        GP14
                      </option>
                      <option value="GP15" onChange={(e) => handleChange(e)}>
                        GP15
                      </option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Mã Danh Mục Khóa Học</span>
                    <select
                      name="maDanhMucKhoaHoc"
                      id="id"
                      className="select_group"
                      onChange={(e) => handleChange(e)}
                    >
                      {listCourse.map((list, index) => {
                        return (
                          <option
                            value={list.maDanhMuc}
                            onChange={(e) => handleChange(e)}
                          >
                            {list.maDanhMuc}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Tài Khoản Người Tạo</span>
                    <input
                      name="taiKhoanNguoiTao"
                      type="text"
                      placeholder="Nhập mã khóa học..."
                      value={user.taiKhoan}
                      disabled
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Hình Ảnh</span>
                    <input
                      name="hinhAnh"
                      type="file"
                      required
                      className="input_uploadImages"
                      onChange={(e) => handleChange(e)}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Mô Tả</span>

                    <textarea
                      className="form_description"
                      placeholder="Nhập mô tả...."
                      type="text"
                      name="moTa"
                      onChange={(e) => handleChange(e)}
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
