const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {productRouter}=require("./Router/product.router.js")


//middleware for acception json from body
app.use(express.json());
//middleware for accepting data from form
app.use(express.urlencoded({ extended: false }));


//Product Route

app.use("/products",productRouter)



mongoose.connect("mongodb://localhost:27017").then(() => {
  console.log("connected");
});
app.get("/", (req, res) => {
  res.send(`Server is Updated `);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server is running ${PORT}`);
});
