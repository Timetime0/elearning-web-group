import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { withRouter } from "react-router";

import { DETAIL_COURSE_SERVICES_SAGA } from "../../redux/types/CourseDetailType";

function CourseDetail(props) {
  let detail = useSelector((state) => state.CourseReducer.courseDetail);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: DETAIL_COURSE_SERVICES_SAGA,
    });
  }, [dispatch]);

  return (
    <div>
      <h1>Course Detail</h1>
      {detail.tenKhoaHoc}
    </div>
  );
}

export default CourseDetail;
