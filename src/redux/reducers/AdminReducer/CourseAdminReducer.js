import {
  GET_COURSE_LIST_ADMIN,
  GET_USER_IN_COURSE_ADMIN,
} from "../../types/AdminType/GetCourseListAdminType";

const initialState = {
  courseListAdmin: [],
  userInCourse: {},
};

const CourseListAdminrReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE_LIST_ADMIN: {
      return { ...state, courseListAdmin: action.data };
    }
    case GET_USER_IN_COURSE_ADMIN: {
      state.userInCourse[action.maKhoaHoc.maKhoaHoc] = action.data
      return {...state}
    }
    default:
      return state;
  }
};
export default CourseListAdminrReducer;
