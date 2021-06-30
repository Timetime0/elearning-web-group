import CourseDetail from "../pages/courseDetail/CourseDetail.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
export const clientRouters = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/course-detail/:maKhoaHoc",
    exact: false,
    Component: CourseDetail,
  },
  {
    path: "/new",
    exact: false,
    Component: CourseDetail,
  },
  {
    path: "/login",
    exact: false,
    Component: Login,
  },  
];
