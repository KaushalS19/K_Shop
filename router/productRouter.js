const express = require("express");
const Route = express.Router();
const Product = require("../model/productModel");

Route.post("/products", async (req, resp) => {
  try {
    const product = new Product(req.body);
    const result = await product.save();
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
});

Route.get("/products", async (req, resp) => {
  try {
    const result = await Product.find();
    resp.send(result);
  } catch (error) {
    console.log(error);
  }
});
module.exports = Route;
