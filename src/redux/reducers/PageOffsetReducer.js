import { PAGE_OFFSET } from "../types/PageOffset";

const initialState = {
  courseInPage: [],
};

const CourseInPage = (state = initialState, action) => {
  switch (action.type) {
    case PAGE_OFFSET: {
      return { ...state, courseInPage: action.data };
    }

    default: {
      return state; 
    }
  }
};

export default CourseInPage;
