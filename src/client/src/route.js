import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Login } from "components/Login";

const Home = () => {
  return <div>Home</div>;
};

const Notfound = () => <h1>Not found</h1>;

const Routes = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Login" component={Login} />
        <Route component={Notfound} />
      </Switch>
    </div>
  </Router>
);

export default Routes;
