import Dashboard from "../pages/AdminPage/Dashboard/Dashboard.jsx";
import About from "../pages/ClientPage/About/About.jsx";
import Contact from "../pages/ClientPage/Contact/Contact.jsx";
import CourseDetail from "../pages/ClientPage/courseDetail/CourseDetail.jsx";
import CourseList from "../pages/ClientPage/CourseList/CourseList.jsx";
import Faq from "../pages/ClientPage/Faq/Faq.jsx";
import Gallery from "../pages/ClientPage/Gallerry/Gallery.jsx";
import Home from "../pages/ClientPage/home/Home.jsx";
import Login from "../pages/ClientPage/Login/Login.jsx";
import News from "../pages/ClientPage/News/News.jsx";
import NewsDetails from "../pages/ClientPage/NewsDetails/NewsDetails.jsx";
import Register from "../pages/ClientPage/Register/Register.jsx";
export const clientRouters = [
  {
    path: "/",
    exact: true,
    Component: Home,
  },
  {
    path: "/course-details",
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
