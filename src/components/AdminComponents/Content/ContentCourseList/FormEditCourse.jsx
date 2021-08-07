import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";
import { UPDATE_COURSE_ADMIN_SAGA } from "../../../../redux/types/AdminType/GetCourseListAdminType";
import { DETAIL_COURSE_SERVICES_SAGA } from "../../../../redux/types/CourseDetailType";
import { COURSE_LIST_SERVICES_SAGA } from "../../../../redux/types/CourseListType";
import "../ContentUserList/FormStyle.css";

function FormEditCourse(props) {
  const onEdit = props.onEdit;
  const { showPopUpEdit, setShowPopUpEdit } = props;
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
    setShowPopUpEdit((prev) => !prev);
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
          setShowPopUpEdit((prev) => !prev);
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

  useEffect(() => {
    if (onEdit) {
      dispatch({
        type: DETAIL_COURSE_SERVICES_SAGA,
        data: onEdit,
      });
    }
  }, [dispatch, onEdit]);
  const data = useSelector((state) => state.CourseReducer.courseDetail);
  const user = JSON.parse(localStorage.getItem("user"));

  // function add course

  // format date time
  var today = new Date();
  let date =
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
  let ngayTao = (date) => {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [day, month, year].join("/");
  };
  // up load image
  const [image, setImage] = useState("");

  let [courseRes, setCourseRes] = useState({});

  useEffect(() => {
    setCourseRes({
      maKhoaHoc: data.maKhoaHoc,
      biDanh: data.biDanh,
      tenKhoaHoc: data.tenKhoaHoc,
      moTa: data.moTa,
      luotXem: 100,
      danhGia: 100,
      hinhAnh: data.hinhAnh,
      maNhom: data.maNhom,
      ngayTao: `${ngayTao(date)}`,
      maDanhMucKhoaHoc: data.danhMucKhoaHoc?.maDanhMucKhoahoc,
      taiKhoanNguoiTao: `${user.taiKhoan}`,
    });
    setImage(data.hinhAnh);
  }, [
    dispatch,
    date,
    user.taiKhoan,
    data.maKhoaHoc,
    data.biDanh,
    data.tenKhoaHoc,
    data.moTa,
    data.hinhAnh,
    data.maNhom,
    data.danhMucKhoaHoc?.maDanhMucKhoahoc,
  ]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseRes({
      ...courseRes,
      [name]: value,
    });
  };

  const onSubmitRes = (event) => {
    event.preventDefault();
    dispatch({
      type: UPDATE_COURSE_ADMIN_SAGA,
      course: courseRes,
    });
  };

  return (
    <div>
      {showPopUpEdit ? (
        <div className={`admin_for ${showPopUpEdit && `in_animation_course`}`}>
          <div className="form_container">
            <div className="title">Edit Course</div>
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
                      value={courseRes.tenKhoaHoc}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Mã Khóa Học</span>
                    <input
                      name="maKhoaHoc"
                      type="text"
                      placeholder="Nhập mã khóa học..."
                      required
                      value={courseRes.maKhoaHoc}
                      disabled
                      onChange={(e) => handleChange(e)}
                    />
                  </div>

                  <div className="input-box">
                    <span className="details">Mã Nhóm</span>
                    <select
                      name="maNhom"
                      className="select_group"
                      onChange={(e) => handleChange(e)}
                    >
                      <option value="GP01" onChange={(e) => handleChange(e)}>
                        GP01
                      </option>
                      <option value="GP02" onChange={(e) => handleChange(e)}>
                        GP02
                      </option>
                    </select>
                  </div>
                  <div className="input-box">
                    <span className="details">Mã Danh Mục Khóa Học</span>
                    <select
                      name="maDanhMucKhoaHoc"
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
                    <span className="details">Bí Danh</span>
                    <input
                      type="text"
                      name="biDanh"
                      required
                      onChange={(e) => handleChange(e)}
                      value={courseRes.biDanh}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Tài Khoản Người Tạo</span>

                    <input
                      name="taiKhoanNguoiTao"
                      type="text"
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
                    <img src={image} alt={""} width={100} />
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
                      value={courseRes.moTa}
                    />
                  </div>
                </div>

                <div className="button">
                  <button
                    type="submit"
                    className="button_submit"
                    onClick={onSubmitRes}
                  >
                    Confirm
                  </button>

                  <button className="button_close" onClick={btnClose}>
                    Cancel
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

export default FormEditCourse;
