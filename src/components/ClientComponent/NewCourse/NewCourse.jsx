import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { GET_DATA_COURSE_SAGA } from "../../../redux/types/courseType";

function NewCourse() {
  let course = useSelector((state) => state.CourseReducer.course);
  let item = course.filter((itemFilet) => itemFilet.ngayTao > "26/07/2021");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_DATA_COURSE_SAGA,
    });
  }, [dispatch]);
  const history = useHistory();
  const detailCourse = (value) => {
    history.push("/course-details/" + value);
  };

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
              <a className="course-details__list-author" href="/">
                by <span>{item?.nguoiTao?.hoTen}</span>
              </a>
              <h3>
                <button
                  onClick={() => {
                    detailCourse(item.maKhoaHoc);
                  }}
                >
                  {item.tenKhoaHoc}
                </button>
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
