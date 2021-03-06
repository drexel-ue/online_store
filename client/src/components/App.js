import React from "react";
import { Route, Switch } from "react-router-dom";
import ProductIndex from "./products/ProductIndex";
import ProductDetail from "./products/ProductDetail";
import CreateProduct from "./products/CreateProduct";
import AuthRoute from "./AuthRoute";
import Login from "./session/Login";
import Register from "./session/Register";
import Nav from "./Nav";

const App = () => {
  return (
    <div>
      <h1>Online Store</h1>
      <Nav />
      <Switch>
        <AuthRoute
          exact
          path="/newProduct"
          component={CreateProduct}
          routeType="protected"
        />
        <AuthRoute exact path="/login" component={Login} routeType="auth" />
        <AuthRoute
          exact
          path="/register"
          component={Register}
          routeType="auth"
        />
        <Route path="/product/:productId" component={ProductDetail} />
        <Route path="/" component={ProductIndex} />
      </Switch>
    </div>
  );
};

export default App;
