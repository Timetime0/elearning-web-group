import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import CourseFromListComponent from "../../../components/ClientComponent/CourseListComponent/CourseFromListComponent";
import { GET_DATA_COURSE_SAGA } from "../../../redux/types/courseType";
import { GET_COURSE_FROM_LIST_TYPE_SAGA } from "../../../redux/types/GetCourseFromListType";

function CourseFromList(props) {
  const dispatch = useDispatch();

  let { maDanhMucKhoahoc } = useParams();
  let list = useSelector((state) => state.CourseReducer.getCourse);

  useEffect(() => {
    dispatch({
      type: GET_COURSE_FROM_LIST_TYPE_SAGA,
      data: maDanhMucKhoahoc,
    });
  });
  useEffect(() => {
    dispatch({
      type: GET_DATA_COURSE_SAGA,
    });
  }, [dispatch]);
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
                <a href="/course">Courses</a>
              </li>
            </ul>
            <h2 className="inner-banner__title">Courses</h2>
          </div>
        </section>

        <section className="course-one course-page">
          <div className="container">
            <div className="row">
              {list?.map((list, index) => {
                return (
                  <CourseFromListComponent
                    list={list}
                    index={index}
                    key={index}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default CourseFromList;
