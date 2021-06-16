import React, { useEffect } from "react";
import CardItem from "../Card_Item/CardItem";
import { useDispatch, useSelector } from "react-redux";
import { GET_DATA_COURSE_SAGA } from "../../redux/types/courseType";

function Categories() {
  let course = useSelector((state) => state.CourseReducer.cousre);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({
      type: GET_DATA_COURSE_SAGA,
    });
  }, [dispatch]);

  return (
    <div>
      {course.map((course, index) => {
        return <CardItem course={course} key={index}></CardItem>; // truyền prop ở đây nè
      })}
    </div>
  );
}

export default Categories;
