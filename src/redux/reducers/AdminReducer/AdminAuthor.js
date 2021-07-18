import { LOGIN_ADMIN_SERVICE } from "../../types/AdminType/LoginAdminType";

const initialState = {
  loginAdmin: [],
};
const AdminAuthor = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_ADMIN_SERVICE: {
      return { ...state, loginAdmin: action.data };
    }
    default: {
      return state;
    }
  }
};
export default AdminAuthor;
