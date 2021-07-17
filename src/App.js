import { adminRouters, clientRouters } from "./config/router.config";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import TemplateClient from "./templates/client/TemplateClient";
import TemplateAdmin from "./templates/admin/TemplateAdmin";
import GuardLogin from "./HOC/GuardLogin";
import GuardAdmin from "./HOC/GuradAdmin";
import ScrollToTop from "./utils/theme/ScrollToTop";

function App() {
  const renderRouterClientList = () => {
    return clientRouters.map((router, index) => {
      const { Component, path, exact, checkLogin } = router;
      if (checkLogin) {
        return (
          <Route path={path} exact={exact} key={index}>
            <GuardLogin>
              <TemplateClient Component={Component} />
            </GuardLogin>
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

  const renderRouterAdminList = () => {
    return adminRouters.map((router, index) => {
      const { Component, path, exact } = router;
      return (
        <GuardAdmin>
          <Route path={path} exact={exact} key={index}>
            <TemplateAdmin Component={Component} />
          </Route>
        </GuardAdmin>
      );
    });
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        {renderRouterClientList()}
        {renderRouterAdminList()}
        <Route path="">
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
