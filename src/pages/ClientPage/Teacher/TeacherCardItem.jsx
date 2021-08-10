import React from "react";

function TeacherCardItem(props) {
  const { user } = props;
  const idImg = user?.soDt?.slice(-2);
  return (
    <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
      <div className="team-one__single">
        <div className="team-one__image">
          <img
            src={
              idImg === ""
                ? `https://i.pravatar.cc/300`
                : `https://i.pravatar.cc/206?img=${idImg}`
            }
            alt={"img"}
          />
        </div>
        <div className="team-one__content">
          <h2 className="team-one__name">
            <a href={`/teacher-details/${user.taiKhoan}`}>{user.hoTen}</a>
          </h2>
          <p className="team-one__designation">Teacher</p>
          <p className="team-one__text">
            There are many varia of passages of lorem.
          </p>
        </div>
        <div className="team-one__social">
          <a href="/">
            <i className="fab fa-twitter" />
          </a>
          <a href="/">
            <i className="fab fa-facebook-square" />
          </a>
          <a href="/">
            <i className="fab fa-pinterest-p" />
          </a>
          <a href="/">
            <i className="fab fa-instagram" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default TeacherCardItem;
