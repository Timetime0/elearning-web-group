import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
// import { withRouter } from "react-router";

import { DETAIL_COURSE_SERVICES_SAGA } from "../../redux/types/CourseDetailType";

function CourseDetail(props) {
  let { maKhoaHoc } = useParams();
  let detail = useSelector((state) => state.CourseReducer.courseDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    console.log(1)
    dispatch({
      type: DETAIL_COURSE_SERVICES_SAGA,
      data: maKhoaHoc,
    });
  }, [dispatch]);

  return (
    <div>
      <h1>Course Detail</h1>
    </div>
  );
}

export default CourseDetail;
