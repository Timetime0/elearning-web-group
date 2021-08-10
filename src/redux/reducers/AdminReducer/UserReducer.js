import {
  GET_COURSE_WAITING_REGISTER,
  GET_COURSE_WAS_REGISTER,
} from "../../types/AdminType/GetCourseListAdminType";
import {
  EDIT_USER,
  GET_USER_LIST,
  GET_USER_NOT_IN_COURSE,
  GET_USER_WAITING_ACCEPT,
  VIEW_PROFILE_USER,
} from "../../types/AdminType/GetUserListType";

const initialState = {
  userList: [],
  editUser: [],
  profileUser: [],
  userNotInCourse: [],
  userWaitingAccept: [],

  courseWasRegister: [],
  courseWaitingRegister: [],

  imgCourse: [],
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
      const dataHaveImg = action.data2;
      const dataHaveInfo = action.data;

      const newData = dataHaveInfo.chiTietKhoaHocGhiDanh.map((item) => {
        let hinhAnhCourse = "";
        dataHaveImg.forEach((item2) => {
          if (item.maKhoaHoc === item2.maKhoaHoc) {
            hinhAnhCourse = item2.hinhAnh;
          }
        });
        return { ...item, hinhAnh: hinhAnhCourse };
      });

      const result = { ...action.data, chiTietKhoaHocGhiDanh: newData };

      return { ...state, profileUser: result };
    }
    case GET_USER_NOT_IN_COURSE: {
      return { ...state, userNotInCourse: action.data };
    }
    case GET_USER_WAITING_ACCEPT: {
      return { ...state, userWaitingAccept: action.data };
    }

    case GET_COURSE_WAS_REGISTER: {
      return { ...state, courseWasRegister: action.data };
    }
    case GET_COURSE_WAITING_REGISTER: {
      return { ...state, courseWaitingRegister: action.data };
    }
    default:
      return state;
  }
};
export default UserReducer;
