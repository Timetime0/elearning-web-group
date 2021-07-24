import React from "react";
import Swal from "sweetalert2";
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

  return (
    <div>
      {showPopUp ? (
        <div className={`admin_for ${showPopUp && `in_animation`}`}>
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
