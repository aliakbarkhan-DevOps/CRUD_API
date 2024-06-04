const express=require("express");
const app=express();
const mongoose=require("mongoose");
const Product=require("../models/product.model");


//Product Data Creation
const productCreation=async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
    }
  }

  //Product Read/find

  const productFind=async (req, res) => {
    try {
      const product = await Product.find({});
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({
        error: error.message,
      });
      s;
    }
  };


  //product finding by ID

  const productFindbyId= async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findById(id);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };


  //Product Update
  const productUpdate=async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body);
    if (!product) {
      return res.status(200).json({ message: "product not found" });
    }
    const updatedProduct = await Product.findById(id);
    res.status(500).json(updatedProduct);
  };



  //Product Delete

  const productDelete=async (req, res) => {
    try {
      const { id } = req.params;
      const product = await Product.findByIdAndDelete(id);
  
      if (!product) {
        return res.status(404).json({ message: "Product not found" });
      }
      res.status(500).json({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).json({ Message: error });
    }
  };

  module.exports={productCreation,productFind,productFindbyId,productUpdate,productDelete}