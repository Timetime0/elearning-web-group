import { LOGIN_SERVICE } from "../types/LoginType";
import { SIGN_UP } from "../types/SignUpType";

const initialState = {
  loginUser: [],
  signupUser: [],
};
const Author = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_SERVICE: {
      return { ...state, loginUser: action.data };
    }
    case SIGN_UP: {
      return { ...state, loginUser: action.data };
    }
    default: {
      return state;
    }
  }
};
export default Author;
