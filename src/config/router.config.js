import TeacherDetails from "../components/ClientComponent/TeacherDetails/TeacherDetails.jsx";
import CourseManagerPage from "../pages/AdminPage/CourseManagerPage/CourseManagerPage.jsx";
import Dashboard from "../pages/AdminPage/Dashboard/Dashboard.jsx";
import LoginAdmin from "../pages/AdminPage/LoginAdmin/LoginAdmin.jsx";
import ProfileAdminPage from "../pages/AdminPage/ProfileAdminPage/ProfileAdminPage.jsx";
import UserManagerPage from "../pages/AdminPage/UserManagerPage/UserManagerPage.jsx";
import About from "../pages/ClientPage/About/About.jsx";
import BecomeTeacher from "../pages/ClientPage/BecomeTeacher/BecomeTeacher.jsx";
import Contact from "../pages/ClientPage/Contact/Contact.jsx";
import CourseDetail from "../pages/ClientPage/courseDetail/CourseDetail.jsx";
import CourseFromList from "../pages/ClientPage/CourseList/CourseFromList.jsx";
import CourseList from "../pages/ClientPage/CourseList/CourseList.jsx";
import Faq from "../pages/ClientPage/Faq/Faq.jsx";
import Gallery from "../pages/ClientPage/Gallerry/Gallery.jsx";
import Home from "../pages/ClientPage/home/Home.jsx";
import Login from "../pages/ClientPage/Login/Login.jsx";
import News from "../pages/ClientPage/News/News.jsx";
import NewsDetails from "../pages/ClientPage/NewsDetails/NewsDetails.jsx";
import Pricing from "../pages/ClientPage/Pricing/Pricing.jsx";
import ProfileUserPage from "../pages/ClientPage/ProfileUserPage/ProfileUserPage.jsx";
import Register from "../pages/ClientPage/Register/Register.jsx";
import Teacher from "../pages/ClientPage/Teacher/Teacher.jsx";
export const clientRouters = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/course-details/:maKhoaHoc",
    exact: false,
    Component: CourseDetail,
  },
  {
    path: "/course-list",
    exact: false,
    Component: CourseList,
  },
  {
    path: "/news",
    exact: false,
    Component: News,
  },
  {
    path: "/news-details",
    exact: false,
    Component: NewsDetails,
  },
  {
    path: "/faq",
    exact: false,
    Component: Faq,
  },
  {
    path: "/contact",
    exact: false,
    Component: Contact,
  },
  {
    path: "/course-list",
    exact: false,
    Component: CourseList,
  },
  {
    path: "/course-from-list/:maDanhMucKhoahoc",
    exact: false,
    Component: CourseFromList,
  },
  {
    path: "/about",
    exact: false,
    Component: About,
  },
  {
    path: "/gallery",
    exact: false,
    Component: Gallery,
  },
  {
    path: "/pricing",
    exact: false,
    Component: Pricing,
  },
  {
    path: "/teacher",
    exact: false,
    Component: Teacher,
  },
  {
    path: "/become-teacher",
    exact: false,
    Component: BecomeTeacher,
  },
  {
    path: "/teacher-details",
    exact: false,
    Component: TeacherDetails,
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
  {
    path: "/profile/:taiKhoan",
    exact: false,
    checkLogin: true,
    Component: ProfileUserPage,
  },
];
export const adminRouters = [
  {
    path: "/admin",
    exact: true,
    Component: LoginAdmin,
  },
  {
    path: "/admin/dashboard",
    exact: false,
    checkLogin: true,
    Component: Dashboard,
  },
  {
    path: "/admin/user-management/:maKhoaHoc",
    exact: false,
    checkLogin: true,
    Component: UserManagerPage,
  },
  {
    path: "/admin/course-management/:taiKhoan",
    exact: false,
    checkLogin: true,
    Component: CourseManagerPage,
  },
  {
    path: "/admin/profile-admin/:taiKhoan",
    exact: false,
    checkLogin: true,
    Component: ProfileAdminPage,
  },
];
