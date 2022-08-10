const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  qty: Number,
  image: String,
});

module.exports = mongoose.model("Product", productSchema);
