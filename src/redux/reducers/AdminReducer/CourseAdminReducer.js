import {
  GET_COURSE_LIST_ADMIN,
  GET_COURSE_NOT_REGISTER,
  GET_USER_IN_COURSE_ADMIN,
} from "../../types/AdminType/GetCourseListAdminType";

const initialState = {
  courseListAdmin: [],
  userInCourse: [],
  courseNotRegister: [],
};

const CourseListAdminrReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COURSE_LIST_ADMIN: {
      return { ...state, courseListAdmin: action.data };
    }
    case GET_USER_IN_COURSE_ADMIN: {
      // state.userInCourse[action.maKhoaHoc.maKhoaHoc] = action.data;

      return { ...state, userInCourse: action.data };
    }
    case GET_COURSE_NOT_REGISTER: {
      return { ...state, courseNotRegister: action.data };
    }
    default:
      return state;
  }
};
export default CourseListAdminrReducer;
