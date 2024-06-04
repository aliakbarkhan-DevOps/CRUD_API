const express =require("express");
const productRouter=express.Router();
const {productCreation,productFind,productFindbyId,productUpdate,productDelete}=require("../Controller/product.controller.js")


//Product Creation in DB
productRouter.post("/",productCreation)

//Products list
productRouter.get("/",productFind);

//Product find by using ID

productRouter.get("/:id",productFindbyId);

//Product Update
productRouter.put("/:id",productUpdate);

//Product Delete
productRouter.delete("/:id",productDelete);

module.exports={productRouter};