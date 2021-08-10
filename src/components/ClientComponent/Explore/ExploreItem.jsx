import React from "react";
import { Link } from "react-router-dom";
const random = () => {
  return Math.floor(Math.random() * 500) + 100;
};
const random2 = () => {
  return Math.floor(Math.random() * 6) + 100;
};
function ExploreItem(props) {
  const { course } = props;

  return (
    <div className="item">
      <div className={`course-one__single color-${random2()}`}>
        <div className="course-one__image">
          <img src={props.course.hinhAnh} alt={"img"} />
          <i className="far fa-heart" />
        </div>
        <div className="course-one__content">
          <Link
            to={`/course-from-list/${props.course.danhMucKhoaHoc.maDanhMucKhoahoc}`}
            className="course-one__category"
          >
            {props.course.danhMucKhoaHoc.tenDanhMucKhoaHoc}
          </Link>
          <div className="course-one__admin">
            <img src="/images/team-1-1.jpg" alt={"img"} />
            by{" "}
            <a href={`teacher-details/${props.course.nguoiTao.taiKhoan}`}>
              {props.course.nguoiTao.hoTen}
            </a>
          </div>
          <h2 className="course-one__title">
            <Link to={`/course-details/${course.maKhoaHoc}`}>
              {props.course.tenKhoaHoc}
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
            <Link to={`/course-details/${course.maKhoaHoc}`}>
              <i className="far fa-clock" /> 10 Hours
            </Link>
            <Link to={`/course-details/${course.maKhoaHoc}`}>
              <i className="far fa-folder-open" /> 6 Lectures
            </Link>
            <Link to={`/course-details/${course.maKhoaHoc}`}>$18</Link>
          </div>
          <Link
            to={`/course-details/${course.maKhoaHoc}`}
            className="course-one__link"
          >
            See Preview
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ExploreItem;
