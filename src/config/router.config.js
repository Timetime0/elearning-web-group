import Dashboard from "../pages/AdminPage/Dashboard/Dashboard.jsx";
import CourseDetail from "../pages/courseDetail/CourseDetail.jsx";
import Home from "../pages/home/Home.jsx";
import Login from "../pages/Login/Login.jsx";
import Register from "../pages/Register/Register.jsx";
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
  {
    path: "/register",
    exact: false,
    Component: Register,
  },
];
export const adminRouters = [
  {
    path: "/admin/dashboard",
    exact: false,
    Component: Dashboard,
  },
  {
    path: "/admin/user-management",
    exact: false,
    // Component: UserManagement,
  },
];
