import React from "react";
import { Query } from "react-apollo";
import { Link } from "react-router-dom";
import Queries from "../../graphql/queries";

const ProductIndex = () => {
  return (
    <Query query={Queries.FETCH_PRODUCTS}>
      {({ loading, error, data }) => {
        if (loading) return "Loading...";
        if (error) return `Error! ${error.message}`;

        return (
          <ul>
            {data.products.map(product => (
              <Link to={`/product/${product._id}`} key={product._id}>
                {product.name}
                <br />
                {product.description}
              </Link>
            ))}
          </ul>
        );
      }}
    </Query>
  );
};

export default ProductIndex;
