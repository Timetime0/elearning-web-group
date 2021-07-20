import {
  EDIT_USER,
  GET_USER_LIST,
} from "../../types/AdminType/GetUserListType";

const initialState = {
  userList: [],
  editUser: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST: {
      return { ...state, userList: action.data };
    }
    case EDIT_USER: {
      return { ...state, editUser: action.data };
    }
    default:
      return state;
  }
};
export default UserReducer;
