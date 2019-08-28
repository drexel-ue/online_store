const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const Product = mongoose.model("products");

const ProductType = new GraphQLObjectType({
  name: "ProductType",
  // remember we wrap the fields in a thunk to avoid circular dependency issues
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    weight: { type: GraphQLInt },
    category: {
      type: require("./category_type"),
      resolve(product) {
        return Product.findById(product._id)
          .populate("category")
          .then(prod => {
            return prod.category;
          });
        // .catch(err => null);
      }
    }
  })
});

module.exports = ProductType;
