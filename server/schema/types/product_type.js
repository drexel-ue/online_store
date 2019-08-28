const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } = graphql;
const CategoryType = require("./category_type");
const Category = mongoose.model("categories");

const ProductType = new GraphQLObjectType({
  name: "ProductType",
  // remember we wrap the fields in a thunk to avoid circular dependency issues
  fields: () => ({
    _id: { type: GraphQLID },
    name: { type: GraphQLString },
    category: {
      type: CategoryType,
      resolve(product) {
        return Category.findById(product.category)
          .then(abode => abode)
          .catch(err => null);
      }
    },
    description: { type: GraphQLString },
    weight: { type: GraphQLInt }
  })
});

module.exports = ProductType;
