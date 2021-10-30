import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../Routers/Home";
import Test1 from "../Routers/Test1";
import Navigation from "./Navigation";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/test1">
          <Test1 />
        </Route>
      </Switch>
    </Router>
  );
};

export default AppRouter;
