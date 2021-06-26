import Home from "./pages/home/Home";
import { clientRouters } from "./config/router.config";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CourseDetail from "./pages/courseDetail/CourseDetail";


function App() {
  // const renderRouterClientList = () => {
  //   return clientRouters.map((router, index) => {
  //     const { Component, path, exact } = router;
  //   });
  // };
  return (
    <BrowserRouter>
      {/* <switch>
        <Route path="">
          <Redirect to="/"></Redirect>
        </Route>
      </switch> */}
      <Route path="/" exact component={Home}></Route>
      <Route path="/course-detail/:maKhoaHoc" exact component={CourseDetail}></Route>

    </BrowserRouter>
  );
}

export default App;
