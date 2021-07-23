import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_COURSE_SAGA } from "../../../redux/types/courseType";
import ExploreItem from "./ExploreItem";

function Explore() {
  let course = useSelector((state) => state.CourseReducer.course);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: GET_DATA_COURSE_SAGA,
    });
  }, [dispatch]);

  return (
    <div>
      <section className="course-one__top-title home-three">
        <div className="container">
          <div className="block-title">
            <h2 className="block-title__title">
              Explore our <br />
              popular courses
            </h2>
          </div>
        </div>
      </section>
      <section className="course-one home-three">
        <img
          src="/images/line-stripe.png"
          className="course-one__line"
          alt={"img"}
        />
        <div className="container">
          <div className="course-one__carousel owl-carousel owl-theme">
            {course.map((course, index) => {
              return <ExploreItem course={course} index={index} />;
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Explore;
