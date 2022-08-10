const express = require("express");
const Route = express.Router();
const Product = require("../model/productModel");

Route.get("/",(req,resp)=> {
    resp.render(<h1>Hello this is my first Heroku Project</h1>)
})

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
