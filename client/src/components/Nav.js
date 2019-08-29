import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Query } from "react-apollo";
import Queries from "../graphql/queries";
const { IS_LOGGED_IN } = Queries;

const Nav = props => {
  return (
    <Query query={IS_LOGGED_IN}>
      {({ data }) => {
        if (data.isLoggedIn) {
          return <button>Logout</button>;
        } else {
          return (
            <div>
              <Link to="/login">Login</Link>
            </div>
          );
        }
      }}
    </Query>
  );
};

export default Nav;
