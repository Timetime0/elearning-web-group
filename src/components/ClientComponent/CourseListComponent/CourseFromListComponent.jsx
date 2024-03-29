import React from "react";
import { Link } from "react-router-dom";

function CourseFromListComponent(props) {
  const { list } = props;
  const random = () => {
    return Math.floor(Math.random() * 500) + 100;
  };

  return (
    <div className="col-lg-4">
      <div className="course-one__single">
        <Link to={`/course-details/${list.maKhoaHoc}`}>
          <div className="course-one__image">
            <img src={props.list.hinhAnh} alt={"img"} />
            <i className="far fa-heart" />
          </div>
        </Link>

        <div className="course-one__content">
          <Link
            to={`/course-details/${list.maKhoaHoc}`}
            className="course-one__category"
          >
            {props.list.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
          </Link>
          <div className="course-one__admin">
            <img src={`https://i.pravatar.cc/500?img=${21}`} alt={"img"} />
            by{" "}
            <a href={`teacher-details/${props.list.nguoiTao?.taiKhoan}`}>
              {props.list.nguoiTao?.hoTen}
            </a>
          </div>
          <h2 className="course-one__title">
            <Link to={`/course-details/${list.maKhoaHoc}`}>
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
            <span className="course-one__stars-count">{random()}</span>
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
            to={`/course-details/${list.maKhoaHoc}`}
          >
            See Preview
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CourseFromListComponent;
