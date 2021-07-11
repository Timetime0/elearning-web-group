import { GET_USER_LIST } from "../../types/AdminType/GetUserListType";

const initialState = {
  userList: [],
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_LIST: {
      return { ...state, userList: action.data };
    }
    default:
      return state;
  }
};
export default UserReducer;
