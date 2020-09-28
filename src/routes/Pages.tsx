import * as React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../components/Home";
import LoggIn from "../components/LogIn";
import Account from "../components/Account";
import Register from "../components/Register";
import NotFound from "../components/NotFound";
import LoggedInRoute from "../routes/LoggedInRoute";
import LoggedOutRoute from "../routes/LoggedOutRoute";

const Pages = () => {
  return (
    <Switch>
      <LoggedOutRoute path="/" exact={true} component={LoggIn} />
      <LoggedOutRoute path="/register" exact={true} component={Register} />
      <LoggedInRoute path="/account" exact={true} component={Account} />
      <LoggedInRoute path="/home" exact={true} component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Pages;
