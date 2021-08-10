import React from "react";

function ExploreItemForTeacher(props) {
  const { course, profile } = props;
  const idImg = profile?.soDT?.slice(-2);

  return (
    <div className="col-lg-4">
      <div className="course-one__single">
        <div className="course-one__image">
          <img src={course.hinhAnh} alt={""} />
          <i className="far fa-heart" />
        </div>
        <div className="course-one__content">
          <a
            href={`/course-from-list/${props.item?.danhMucKhoaHoc?.maDanhMucKhoahoc}`}
            className="course-one__category"
          >
            {props.course?.danhMucKhoaHoc?.tenDanhMucKhoaHoc}
          </a>
          <div className="course-one__admin">
            <img src={`https://i.pravatar.cc/500?img=${idImg}`} alt={""} />
            by
            <a href={`/teacher-details/${profile.taiKhoan}`}>{profile.hoTen}</a>
          </div>
          <h2 className="course-one__title">
            <a href={`/course-details/${course.maKhoaHoc}`}>
              {props.course.tenKhoaHoc}
            </a>
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
            <span className="course-one__stars-count">250</span>
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
          <a
            href={`/course-details/${course.maKhoaHoc}`}
            className="course-one__link"
          >
            See Preview
          </a>
        </div>
      </div>
    </div>
  );
}

export default ExploreItemForTeacher;
