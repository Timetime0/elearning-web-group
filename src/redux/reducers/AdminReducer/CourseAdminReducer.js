import { GET_COURSE_LIST_ADMIN } from "../../types/AdminType/GetCourseListAdminType";

const initialState = {
  courseListAdmin: [],
};

const CourseListAdminrReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE_LIST_ADMIN: {
      return { ...state, courseListAdmin: action.data };
    }

    default:
      return state;
  }
};
export default CourseListAdminrReducer;
