import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  ADD_COURSE_ADMIN_SAGA,
  ADD_COURSE_IMAGE_ADMIN_SAGA,
} from "../../../../redux/types/AdminType/GetCourseListAdminType";
import { COURSE_LIST_SERVICES_SAGA } from "../../../../redux/types/CourseListType";
import "../ContentUserList/FormStyle.css";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import Swal from "sweetalert2";
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

  const [image, setImage] = useState({});
  let [courseRes, setCourseRes] = useState({});
  useEffect(() => {
    setCourseRes({
      maKhoaHoc: "",
      biDanh: "",
      tenKhoaHoc: "",
      moTa: "",
      luotXem: 0,
      danhGia: 0,
      hinhAnh: {},
      maNhom: "GP01",
      ngayTao: `${ngayTao(date)}`,
      maDanhMucKhoaHoc: "BackEnd",
      taiKhoanNguoiTao: `${user.taiKhoan}`,
    });
  }, [dispatch, date, user.taiKhoan]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseRes({
      ...courseRes,
      [name]: value,
    });
  };
  const handleCkeditorState = (event, editor) => {
    const data = editor.getData();
    setCourseRes({ ...courseRes, moTa: data });
  };

  const handleChangeImage = (e) => {
    let target = e.target;
    if (target.name === "hinhAnh") {
      setImage(URL.createObjectURL(e.target.files[0]));
    } else {
      setImage({ [e.target.name]: e.target.value });
    }
    // let form_data = new FormData();
  };

  const onSubmitRes = (event) => {
    let formData = new FormData();
    for (let key in setCourseRes) {
      formData.append(key, setCourseRes[key]);
    }
    event.preventDefault();
    dispatch({
      type: ADD_COURSE_ADMIN_SAGA,
      course: courseRes,
    });
    dispatch({
      type: ADD_COURSE_IMAGE_ADMIN_SAGA,
      img: image,
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
                    <span className="details">Bí Danh</span>
                    <input
                      type="text"
                      name="biDanh"
                      required
                      onChange={(e) => handleChange(e)}
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
                    <img
                      src={image}
                      alt={""}
                      style={{ position: "absolute", width: "26%" }}
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Mô Tả</span>

                    {/* <textarea
                      className="form_description"
                      placeholder="Nhập mô tả...."
                      type="text"
                      name="moTa"
                      onChange={(e) => handleChange(e)}
                      required
                    /> */}
                    <CKEditor
                      editor={ClassicEditor}
                      onInit={(editor) => {}}
                      className="form_description"
                      // placeholder="Nhập mô tả...."
                      // name="moTa"
                      onChange={handleCkeditorState}
                      required
                    />
                  </div>
                </div>

                <div className="button">
                  <button
                    type="submit"
                    className="button_submit"
                    onClick={onSubmitRes}
                  >
                    Add
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

export default FromAddCourse;
