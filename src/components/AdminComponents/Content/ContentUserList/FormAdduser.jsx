import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { ADD_USER_SAGA } from "../../../../redux/types/AdminType/GetUserListType";
import "./FormStyle.css";
function FormAdduser(props) {
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

  // function add user
  const dispatch = useDispatch();

  let [userRes, setUserRes] = useState({
    taiKhoan: "",
    matKhau: "",
    hoTen: "",
    soDT: "",
    maLoaiNguoiDung: "",
    maNhom: "",
    email: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserRes({
      ...userRes,
      [name]: value,
    });
  };
  const onSubmitRes = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_USER_SAGA,
      user: userRes,
    });
  };
  return (
    <div>
      {showPopUp ? (
        <div className={`admin_for ${showPopUp && `in_animation`}`}>
          <div className="form_container">
            <div className="title">Add User</div>
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
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Điện Thoại</span>
                    <input
                      name="soDT"
                      type="text"
                      placeholder="Nhập điện thoại User..."
                      onChange={(e) => handleChange(e)}
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
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Mã Nhóm</span>
                    <select
                      name="maNhom"
                      id="id"
                      className="select_group"
                      onChange={(e) => handleChange(e)}
                      value="GP01"
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
                </div>
                <div className="gender-details">
                  <input
                    type="radio"
                    name="maLoaiNguoiDung"
                    id="dot-1"
                    value="GV"
                    onChange={(e) => handleChange(e)}
                  />
                  <input
                    type="radio"
                    name="maLoaiNguoiDung"
                    id="dot-2"
                    value="HV"
                    onChange={(e) => handleChange(e)}
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
                <div className="button">
                  <button className="button_submit" onClick={onSubmitRes}>
                    Add
                  </button>
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