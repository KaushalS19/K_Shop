const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const app = express();
env.config();
const PORT = process.env.PORT;
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://KaushalS19:sojitra98257@cluster0.ppqajag.mongodb.net/K_Shop?retryWrites=true&w=majority`
  )
  .then(() => {
    console.log("Database established successfully..!!");
  })
  .catch((err) => console.log(err));

const Router = require("./router/productRouter");
app.use("/", Router);
app.listen(PORT, (req, resp) => {
  console.log("Server is running on " + PORT);
});
