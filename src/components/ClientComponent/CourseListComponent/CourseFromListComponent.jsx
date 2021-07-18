import React from "react";

function CourseFromListComponent(props) {
  return (
    <div className="col-lg-4">
      <div className="course-one__single">
        <div className="course-one__image">
          <img src={props.list.hinhAnh} alt="hình ảnh" />
          <i className="far fa-heart" />
        </div>
        <div className="course-one__content">
          <a href="#" className="course-one__category">
            {props.list.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
          </a>
          <div className="course-one__admin">
            <img src="/images/team-1-2.jpg" alt="true" />
            by <a href="teacher-details.html">Họ tên người tạo</a>
          </div>
          <h2 className="course-one__title">
            <a> {props.list.tenKhoaHoc}</a>
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
          <a className="course-one__link">See Preview</a>
        </div>
      </div>
    </div>
  );
}

export default CourseFromListComponent;
