const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },

  image: String,
  description: String,
  color: String,
  quantity: { type: Number },
  price: { type: Number },
});

module.exports = mongoose.model("Product", ProductSchema);
