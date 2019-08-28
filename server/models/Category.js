const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "products"
    }
  ]
});

CategorySchema.statics.findProducts = async categoryId => {
  const Category = mongoose.model("categories");

  return await Category.findById(categoryId)
    .populate("products")
    .then(category => category.products);
};

module.exports = mongoose.model("categories", CategorySchema);
