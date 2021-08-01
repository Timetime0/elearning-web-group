import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import {
  ADD_USER_SAGA,
  EDIT_USER_SAGA,
} from "../../../../redux/types/AdminType/GetUserListType";
import "./FormStyle.css";
function FormAdduser(props) {
  const dispatch = useDispatch();

  const { showPopUp, setShowPopUp } = props;
  let userEdit = props.data;

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

  const [userRes, setUserRes] = useState({
    taiKhoan: "Nguyễn Tân",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "",
    maNhom: "GP01",
    email: "",
  });

  useEffect(() => {
    if (userEdit) {
      setUserRes({
        taiKhoan: userEdit.taiKhoan,
        matKhau: userEdit.matKhau,
        hoTen: userEdit.hoTen,
        soDt: userEdit.soDt,
        maLoaiNguoiDung: userEdit.maLoaiNguoiDung,
        maNhom: userEdit.maNhom,
        email: userEdit.email,
      });
    } else {
      setUserRes({
        taiKhoan: "",
        matKhau: "",
        hoTen: "",
        soDt: "",
        maLoaiNguoiDung: "",
        maNhom: "",
        email: "",
      });
    }
  }, [userEdit]);

  // function add user
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserRes({
      ...userRes,
      [name]: value,
    });
  };

  // btn Submit Res
  const onSubmitRes = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_USER_SAGA,
      user: userRes,
    });
  };

  // btn Edit Res
  const onEditRes = (event) => {
    event.preventDefault();
    dispatch({
      type: EDIT_USER_SAGA,
      user: userRes,
    });
  };

  return (
    <div>
      {showPopUp ? (
        <div className={`admin_for ${showPopUp && `in_animation`}`}>
          <div className="form_container">
            <div className="title">{userEdit ? "Edit User" : "Add User"}</div>
            <div className="content">
              <form onSubmit={(event) => onSubmitRes(event)} method="POST">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Họ Tên</span>
                    <input
                      name="hoTen"
                      type="text"
                      placeholder="Nhập họ tên User..."
                      onChange={(e) => handleChange(e)}
                      value={userRes.hoTen}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Tài Khoản</span>
                    <input
                      name="taiKhoan"
                      type="text"
                      placeholder="Nhập tài khoản User..."
                      onChange={(e) => handleChange(e)}
                      value={userRes.taiKhoan}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input
                      name="email"
                      type="text"
                      placeholder="Nhập email user..."
                      onChange={(e) => handleChange(e)}
                      value={userRes.email}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Điện Thoại</span>
                    <input
                      name="soDT"
                      type="number"
                      placeholder="Nhập điện thoại User..."
                      onChange={(e) => handleChange(e)}
                      // value={userRes.soDt}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Mật Khẩu</span>
                    <input
                      name="matKhau"
                      type="text"
                      placeholder="Nhập mật khẩu User..."
                      onChange={(e) => handleChange(e)}
                      value={userRes.matKhau}
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Mã Nhóm</span>
                    <select
                      name="maNhom"
                      id="id"
                      className="select_group"
                      value={userRes.maNhom}
                      onChange={(e) => handleChange(e)}
                    >
                      <option>Chọn mã nhóm</option>
                      <option value="GP01" onChange={(e) => handleChange(e)}>
                        GP01
                      </option>
                      <option value="GP02" onChange={(e) => handleChange(e)}>
                        GP02
                      </option>
                    </select>
                  </div>
                </div>
                {userEdit ? (
                  <div className="gender-details">
                    <input
                      type="radio"
                      name="maLoaiNguoiDung"
                      id="dot-1"
                      onChange={(e) => handleChange(e)}
                      checked={userRes.maLoaiNguoiDung === "GV"}
                      value="GV"
                    />
                    <input
                      type="radio"
                      name="maLoaiNguoiDung"
                      id="dot-2"
                      checked={userRes.maLoaiNguoiDung === "HV"}
                      onChange={(e) => handleChange(e)}
                      value="HV"
                    />
                    <span className="gender-title">Mã Loại Người Dùng</span>
                    <div className="category">
                      <label htmlFor="dot-1">
                        <span className="dot one" />
                        <span className="gender">GV</span>
                      </label>
                      <label htmlFor="dot-2">
                        <span className="dot two" />
                        <span className="gender">HV</span>
                      </label>
                    </div>
                  </div>
                ) : (
                  <div className="gender-details">
                    <input
                      type="radio"
                      name="maLoaiNguoiDung"
                      id="dot-1"
                      onChange={(e) => handleChange(e)}
                      // checked={userRes.maLoaiNguoiDung === "GV"}
                      value="GV"
                    />
                    <input
                      type="radio"
                      name="maLoaiNguoiDung"
                      id="dot-2"
                      // checked={userRes.maLoaiNguoiDung === "HV"}
                      onChange={(e) => handleChange(e)}
                      value="HV"
                    />
                    <span className="gender-title">Mã Loại Người Dùng</span>
                    <div className="category">
                      <label htmlFor="dot-1">
                        <span className="dot one" />
                        <span className="gender">GV</span>
                      </label>
                      <label htmlFor="dot-2">
                        <span className="dot two" />
                        <span className="gender">HV</span>
                      </label>
                    </div>
                  </div>
                )}

                <div className="button">
                  {userEdit ? (
                    <button
                      type="submit"
                      className="button_submit"
                      onClick={onEditRes}
                    >
                      Edit
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="button_submit"
                      onClick={onSubmitRes}
                    >
                      Add
                    </button>
                  )}
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

export default FormAdduser;
