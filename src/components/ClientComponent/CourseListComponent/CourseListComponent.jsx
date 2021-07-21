import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_COURSE_SAGA } from "../../../redux/types/courseType";
import CardItem from "./CardItem";

function CourseListComponent() {
  let course = useSelector((state) => state.CourseReducer.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_DATA_COURSE_SAGA,
    });
  }, [dispatch]);
  return (
    <section className="course-one course-page">
      <div className="container">
        <div className="row">
          {course.map((course, index) => {
            return <CardItem course={course} index={index} />;
          })}
        </div>
        <div className="post-pagination">
          <a href="/">
            <i className="fa fa-angle-double-left" />
          </a>
          <a className="active" href="/">
            1
          </a>
          <a href="/">2</a>
          <a href="/">3</a>
          <a href="/">4</a>
          <a href="/">
            <i className="fa fa-angle-double-right" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CourseListComponent;
