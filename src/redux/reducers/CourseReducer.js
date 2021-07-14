import { DETAIL_COURSE_SERVICES } from "../types/CourseDetailType";
import { COURSE_LIST_SERVICES } from "../types/CourseListType";
import { GET_DATA_COURSE } from "../types/courseType";
import { GET_COURSE_FROM_LIST_TYPE } from "../types/GetCourseFromListType";

const initialState = {
  course: [],
  courseDetail: [],
  courseList: [],
  getCourse:[],
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_COURSE: {
      return { ...state, course: action.data };
    }
    case DETAIL_COURSE_SERVICES: {
      console.log(action)
      return { ...state, courseDetail: action.data};
    
    }
    case COURSE_LIST_SERVICES:{
      return { ...state, courseList: action.data};
    }
    case GET_COURSE_FROM_LIST_TYPE:{
      return { ...state, getCourse:action.data}
    }
    default: {
      return state;
    }
  }
};

export default CourseReducer;
