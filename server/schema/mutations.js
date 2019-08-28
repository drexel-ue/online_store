const graphql = require("graphql");
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLID,
  GraphQLNonNull
} = graphql;
const mongoose = require("mongoose");

const CategoryType = require("./types/category_type");
const ProductType = require("./types/product_type");
const UserType = require("./types/product_type");

const Category = mongoose.model("categories");
const Product = mongoose.model("products");
const User = mongoose.model("users");

const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    newCategory: {
      type: CategoryType,
      args: { name: { type: new GraphQLNonNull(GraphQLString) } },
      async resolve(_, { name }) {
        return await new Category({ name }).save();
      }
    },
    deleteCategory: {
      type: CategoryType,
      args: { _id: { type: GraphQLID } },
      async resolve(_, { _id }) {
        return await Category.findByIdAndDelete(_id);
      }
    },
    newProduct: {
      type: ProductType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        weight: { type: new GraphQLNonNull(GraphQLInt) }
      },
      async resolve(_, { name, description, weight }) {
        return await new Product({ name, description, weight });
      }
    },
    deleteProduct: {
      type: ProductType,
      args: { _id: { type: GraphQLID } },
      async resolve(_, { _id }) {
        return await Product.remove({ _id });
      }
    }
  }
});

module.exports = mutation;
