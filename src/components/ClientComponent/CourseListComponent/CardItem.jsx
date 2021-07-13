import React from "react";
import { Link } from "react-router-dom";
const random = () => {
  return Math.floor(Math.random() * 500) + 100;
};
function CardItem(props) {
  return (
    <div className="col-lg-4">
      <div className="course-one__single">
        <div className="course-one__image">
          <img src={props.course.hinhAnh} alt />
          <i className="far fa-heart" />
        </div>
        <div className="course-one__content">
          <Link to="/" className="course-one__category">
            {props.course.danhMucKhoaHoc.maDanhMucKhoahoc}
          </Link>
          <div className="course-one__admin">
            <img src="/images/team-1-1.jpg" alt />
            by
            <Link to="/teacher-details">{props.course.nguoiTao.hoTen}</Link>
          </div>
          <h2 className="course-one__title">
            <Link to="/course-details">{props.course.tenKhoaHoc}</Link>
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
            <Link to="/course-details">
              <i className="far fa-clock" /> 10 Hours
            </Link>
            <Link to="/course-details">
              <i className="far fa-folder-open" /> 6 Lectures
            </Link>
            <Link to="/course-details">$18</Link>
          </div>
          <Link to="#" className="course-one__link">
            See Preview
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
