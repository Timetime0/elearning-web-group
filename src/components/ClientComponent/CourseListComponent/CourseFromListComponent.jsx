import React from "react";
import { Link, useHistory } from "react-router-dom";

function CourseFromListComponent(props) {
  const history = useHistory();
  const { list } = props;
  const detailCourse = () => {
    history.push("/course-details/" + list.maKhoaHoc);
  };
  return (
    <div className="col-lg-4">
      <div className="course-one__single">
        <Link
          onClick={() => {
            detailCourse();
          }}
        >
          <div className="course-one__image">
            <img src={props.list.hinhAnh} alt={"img"} />
            <i className="far fa-heart" />
          </div>
        </Link>

        <div className="course-one__content">
          <Link
            onClick={() => {
              detailCourse();
            }}
            className="course-one__category"
          >
            {props.list.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
          </Link>
          <div className="course-one__admin">
            <img src="/images/team-1-2.jpg" alt={"img"} />
            by <a href="teacher-details.html">{props.list.nguoiTao?.hoTen}</a>
          </div>
          <h2 className="course-one__title">
            <Link
              onClick={() => {
                detailCourse();
              }}
            >
              {" "}
              {props.list.tenKhoaHoc}
            </Link>
          </h2>

          <div className="course-one__stars">
            <span className="course-one__stars-wrap">
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
              <i className="fa fa-star" />
            </span>
            <span className="course-one__count">4.8</span>
            <span className="course-one__stars-count">random số</span>
          </div>
          <div className="course-one__meta">
            <a href="course-details.html">
              <i className="far fa-clock" /> 10 Hours
            </a>
            <a href="course-details.html">
              <i className="far fa-folder-open" /> 6 Lectures
            </a>
            <a href="course-details.html">$18</a>
          </div>
          <Link
            className="course-one__link"
            onClick={() => {
              detailCourse();
            }}
          >
            See Preview
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseFromListComponent;
