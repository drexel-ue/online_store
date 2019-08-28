const mongoose = require("mongoose");
const graphql = require("graphql");
const { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } = graphql;

const CategoryType = require("./category_type");
const ProductType = require("./product_type");
const UserType = require("./user_type");

const Category = mongoose.model("categories");
const Product = mongoose.model("products");
const User = mongoose.model("users");

const RootQueryType = new GraphQLObjectType({
  name: "RootQueryType",
  fields: () => ({
    category: {
      type: CategoryType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      async resolve(_, args) {
        return await Category.findById(args._id);
      }
    },
    categories: {
      type: new GraphQLList(CategoryType),
      async resolve() {
        return await Category.find({});
      }
    },

    product: {
      type: ProductType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      async resolve(_, args) {
        return await User.findById(args._id);
      }
    },
    products: {
      type: new GraphQLList(ProductType),
      async resolve() {
        return await Product.find({});
      }
    },
    user: {
      type: UserType,
      args: { _id: { type: new GraphQLNonNull(GraphQLID) } },
      async resolve(_, args) {
        return await User.findById(args._id);
      }
    },
    users: {
      type: new GraphQLList(UserType),
      async resolve() {
        return await User.find({});
      }
    }
  })
});

module.exports = RootQueryType;
