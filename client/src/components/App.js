import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductIndex from "./products/ProductsIndex";
import AuthRoute from "./AuthRoute";
import Login from "./Login";
import Nav from "./Nav";

const App = () => {
  return (
    <div>
      <h1>Online Store</h1>
      <Nav />
      <Switch>
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <Route path="/" component={ProductIndex} />
      </Switch>
    </div>
  );
};

export default App;
