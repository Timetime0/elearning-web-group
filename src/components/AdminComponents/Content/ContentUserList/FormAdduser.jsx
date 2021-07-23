import React from "react";
import "./FormStyle.css";
function FormAdduser({ showPopUp, setShowPopUp }) {
  // close popup add user

  const btnClose = () => {
    setShowPopUp((prev) => !prev);
  };
  return (
    <div>
      {showPopUp ? (
        <div
          className={`admin_for ${
            showPopUp ? `in_animation` : `out_animation`
          }`}
        >
          <div className="form_container">
            <div className="title">Add User</div>
            <div className="content">
              <form action="#">
                <div className="user-details">
                  <div className="input-box">
                    <span className="details">Họ Tên</span>
                    <input
                      type="text"
                      placeholder="Nhập họ tên User..."
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Tài Khoản</span>
                    <input
                      type="text"
                      placeholder="Nhập tài khoản User..."
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Email</span>
                    <input
                      type="text"
                      placeholder="Nhập email user..."
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Điện Thoại</span>
                    <input
                      type="text"
                      placeholder="Nhập điện thoại User..."
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Mật Khẩu</span>
                    <input
                      type="text"
                      placeholder="Nhập mật khẩu User..."
                      required
                    />
                  </div>
                  <div className="input-box">
                    <span className="details">Confirm Password</span>
                    {/* <input
                    type="text"
                    placeholder="Confirm your password"
                    required
                  /> */}
                    <select name="maNhom" id="id" className="select_group">
                      <option value="GP01">GP01</option>
                      <option value="GP02">GP02</option>
                    </select>
                  </div>
                </div>
                <div className="gender-details">
                  <input type="radio" name="gender" id="dot-1" />
                  <input type="radio" name="gender" id="dot-2" />
                  <span className="gender-title">Mã Loại Người Dùng</span>
                  <div className="category">
                    <label htmlFor="dot-1">
                      <span className="dot one" selected />
                      <span className="gender">GV</span>
                    </label>
                    <label htmlFor="dot-2">
                      <span className="dot two" />
                      <span className="gender">HV</span>
                    </label>
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

export default FormAdduser;
