import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router";
import { PAGE_OFFSET_SAGA } from "../../../redux/types/PageOffset";
import CardItem from "./CardItem";

function CourseListComponent() {
  const dispatch = useDispatch();
  let course = useSelector((state) => state.CourseInPage.courseInPage.items);
  const page = useLocation().pathname;

  useEffect(() => {
    const number = page.match(/\d+/g);
    if (number) {
      dispatch({
        type: PAGE_OFFSET_SAGA,
        number: number,
      });
    } // eslint-disable-next-line
  }, [page]);

  return (
    <section className="course-one course-page">
      <div className="container">
        <div className="row">
          {course?.map((course, index) => {
            return <CardItem course={course} key={index} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default CourseListComponent;
