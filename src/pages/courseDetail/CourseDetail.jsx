import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { DETAIL_COUESE_SERVICES } from "../../redux/types/CourseDetailType";

function CourseDetail() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: DETAIL_COUESE_SERVICES,
    });
  }, [dispatch]);
  return (
    <div>
      <h1>Course Detail</h1>
    </div>
  );
}

export default CourseDetail;
