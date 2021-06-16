import { DETAIL_COUESE_SERVICES } from "../types/CourseDetailType";
import { GET_DATA_COURSE } from "../types/courseType";

const initialState = {
  cousre: [],
  courseDetail: [],
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DATA_COURSE: {
      return { ...state, cousre: action.data };
    }
    case DETAIL_COUESE_SERVICES: {
      return { ...state, courseDetail: action.data };
    }
    default: {
      return state;
    }
  }
};

export default CourseReducer;
