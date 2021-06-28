import Home from "./pages/home/Home";
import { clientRouters } from "./config/router.config";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import CourseDetail from "./pages/courseDetail/CourseDetail";
import TemplateClient from "./templates/client/TemplateClient";
function App() {
  const renderRouterClientList = () => {
    return clientRouters.map((router, index) => {
      const { Component, path, exact, checkLogin } = router;
      if (checkLogin) {
        return (
          <Route path={path} exact={exact} key={index}>
            <TemplateClient Component={Component} />
          </Route>
        );
      }
      return (
        <Route path={path} exact={exact} key={index}>
          <TemplateClient Component={Component} />
        </Route>
      );
    });
  };
  return (
    <BrowserRouter>
      <Switch>
        {renderRouterClientList()}
        <Route path="">
          <Redirect to="/"></Redirect>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
