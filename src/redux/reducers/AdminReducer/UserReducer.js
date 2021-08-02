import {
  EDIT_USER,
  GET_USER_LIST,
  GET_USER_NOT_IN_COURSE,
  VIEW_PROFILE_USER,
} from "../../types/AdminType/GetUserListType";

const initialState = {
  userList: [],
  editUser: [],
  profileUser: [],
  userNotInCourse: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST: {
      return { ...state, userList: action.data };
    }
    case EDIT_USER: {
      return { ...state, editUser: action.data };
    }
    case VIEW_PROFILE_USER: {
      return { ...state, profileUser: action.data };
    }
    case GET_USER_NOT_IN_COURSE: {
      return { ...state, userNotInCourse: action.data };
    }
    default:
      return state;
  }
};
export default UserReducer;
