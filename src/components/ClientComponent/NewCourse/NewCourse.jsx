import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_COURSE_SAGA } from "../../../redux/types/courseType";

function NewCourse() {
  let course = useSelector((state) => state.CourseReducer.course);
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
  let item = course.filter(
    (itemFilet) => itemFilet.ngayTao >= `${ngayTao(date)}`
  );
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_DATA_COURSE_SAGA,
    });
  }, [dispatch]);

  return (
    <div className="course-details__list">
      <h2 className="course-details__list-title">New Courses</h2>
      {item.map((item) => {
        return (
          <div className="course-details__list-item">
            <div className="course-details__list-img">
              <img src={item.hinhAnh} alt={"img"} />
            </div>

            <div className="course-details__list-content">
              <a
                className="course-details__list-author"
                href={`/teacher-details/${item?.nguoiTao?.taiKhoan}`}
              >
                by <span>{item?.nguoiTao?.hoTen}</span>
              </a>
              <h3>
                <a href={`/course-details/${item.maKhoaHoc}`}>
                  {item.tenKhoaHoc}
                </a>
              </h3>
              <div className="course-details__list-stars">
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <i className="fas fa-star" />
                <span>4.8</span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default NewCourse;
