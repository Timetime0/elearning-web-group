import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_USER_LIST_SAGA } from "../../../redux/types/AdminType/GetUserListType";
import TeacherCardItem from "./TeacherCardItem";

function Teacher() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_USER_LIST_SAGA,
    });
  }, [dispatch]);
  let user = useSelector((state) => state.UserReducer.userList);
  let userGV = user.filter(
    (item) =>
      item.maLoaiNguoiDung === "GV" &&
      item.soDt !== "" &&
      item.soDt.slice(-2) < 71
  );

  return (
    <div>
      <div>
        <section className="inner-banner">
          <div className="container">
            <ul className="list-unstyled thm-breadcrumb">
              <li>
                <a href="/">Home</a>
              </li>
              <li className="active">
                <a href="/teachers">Teachers</a>
              </li>
            </ul>
            <h2 className="inner-banner__title">Teachers</h2>
          </div>
        </section>
        <section className="team-one team-page">
          <div className="container">
            <div className="row">
              {userGV.map((user, index) => {
                return <TeacherCardItem user={user} key={index} />;
              })}
            </div>
          </div>
        </section>
        <div className="cta-two">
          <div className="container-fluid">
            <div className="row no-gutters">
              <div className="col-lg-6 thm-base-bg">
                <div className="cta-two__single">
                  <div className="cta-two__icon">
                    <span>
                      <i className="kipso-icon-professor" />{" "}
                    </span>
                  </div>
                  <div className="cta-two__content">
                    <h2 className="cta-two__title">Become an teacher</h2>
                    <p className="cta-two__text">
                      There are many variations of passages of lore available
                      but <br /> the majority have suffered alt={"img"}eration
                      in some form.
                    </p>
                    <a href="/" className="thm-btn cta-two__btn">
                      Start Teaching
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 thm-base-bg-2">
                <div className="cta-two__single">
                  <div className="cta-two__icon">
                    <span>
                      <i className="kipso-icon-knowledge" />
                    </span>
                  </div>
                  <div className="cta-two__content">
                    <h2 className="cta-two__title">Join our community</h2>
                    <p className="cta-two__text">
                      There are many variations of passages of lore available
                      but <br /> the majority have suffered alt={"img"}eration
                      in some form.
                    </p>
                    <a href="/" className="thm-btn cta-two__btn">
                      Start Learning
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Teacher;
