import React from "react";
import { Query } from "react-apollo";
import { Link, withRouter } from "react-router-dom";
import Queries from "../../graphql/queries";

export default withRouter(props => {
  return (
    <Query
      query={Queries.FETCH_PRODUCT}
      variables={{ _id: props.match.params.productId }}
    >
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;
        return (
          <div style={{ paddingLeft: "30px" }}>
            {data.product.name}
            <br />
            {data.product.description}
            <br />
            {data.product.weight}
          </div>
        );
      }}
    </Query>
  );
});
