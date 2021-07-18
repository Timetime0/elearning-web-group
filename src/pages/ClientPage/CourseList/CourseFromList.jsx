import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import CourseFromListComponent from "../../../components/ClientComponent/CourseListComponent/CourseFromListComponent";
import CourseListComponent from "../../../components/ClientComponent/CourseListComponent/CourseListComponent";
import { GET_COURSE_FROM_LIST_TYPE_SAGA } from "../../../redux/types/GetCourseFromListType";

function CourseFromList(props) {
  let { maDanhMucKhoahoc } = useParams();
  let list = useSelector(
    (state) => state.CourseReducer.getCourse.danhMucKhoaHoc
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_COURSE_FROM_LIST_TYPE_SAGA,
      data: maDanhMucKhoahoc,
    });
  }, [dispatch]);

  return (
    <div>
      <section className="inner-banner">
        <div className="container">
          <ul className="list-unstyled thm-breadcrumb">
            <li>
              <a href="/">Home</a>
            </li>
            <li className="active">
              <a href="#">Courses</a>
            </li>
          </ul>
          <h2 className="inner-banner__title">Courses</h2>
        </div>
      </section>
      {list.map((list, index) => {
        return <CourseFromListComponent list={list} index={index} />;
      })}
    </div>
  );
}

export default CourseFromList;
