import express from "express";
import mongoose from "mongoose";
const app = express();

mongoose
  .connect("mongodb+srv://javadvn:6438354938J.n@cluster95.1hdarw6.mongodb.net/todo")
  .then(() => console.log("connect db !"));

const { Schema } = mongoose;

app.use(express.json());

//table - collections

//product adında bir collection design ettim
let productSchema = new Schema({
  name: String,
  unitPrice: Number,
});

//user adında bir collection design ettim
let userSchema = new Schema({
  name: String,
  surname: String,
  email: String,
});

//bu dizaynı mongoya haber verdim.
let Product = mongoose.model("Product", productSchema);
let User = mongoose.model("User", userSchema);

app.get("/api/products", (req, res) => {
  Product.find()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.post("/api/products", (req, res) => {
  let product = new Product({
    name: req.body.name,
    unitPrice: req.body.unitPrice,
  });

  product.save();

  res.json(product);
});

app.get("/api/products/:id", (req, res) => {
  let id = req.params.id;

  Product.findById(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.delete("/api/products/:id", (req, res) => {
  let id = req.params.id;

  Product.findByIdAndRemove(id)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

app.listen(3000, () => console.log("listen"));
