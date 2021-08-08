import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_COURSE_SAGA } from "../../../redux/types/courseType";
import { PAGE_OFFSET_SAGA } from "../../../redux/types/PageOffset";
import CardItem from "./CardItem";

function CourseListComponent() {
  let course = useSelector((state) => state.CourseReducer.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_DATA_COURSE_SAGA,
    });
  }, [dispatch]);

  // useEffect(() => {
  //   dispatch({
  //     type: PAGE_OFFSET_SAGA,
  //     number:
  //   });
  // }, [dispatch]);

  return (
    <section className="course-one course-page">
      <div className="container">
        <div className="row">
          {course.map((course, index) => {
            return <CardItem course={course} index={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default CourseListComponent;
