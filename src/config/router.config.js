import CourseDetail from "../pages/courseDetail/CourseDetail.jsx";
import Home from "../pages/home/Home.jsx";
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
  }
];
