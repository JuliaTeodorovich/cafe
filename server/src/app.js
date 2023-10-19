const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const categories = require("./data/categories.json");
const products = require("./data/products.json");
const toppings = require("./data/toppings.json");
const { PORT } = require("dotenv").config().parsed;
let cart = [];

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());

app.get("/api/categories", function (req, res) {
  res.send(200, categories);
});

app.get("/api/products/:category", function (req, res) {
  const category = req.params.category;
  const productsByCategory = products[category] || [];
  res.send(200, productsByCategory);
});

app.get("/api/toppings", function (req, res) {
  res.send(200, toppings);
});

app.post("/api/cart", (req, res) => {
  try {
    const cartProduct = req.body;
    cart.push(cartProduct);
    res.status(200).json(cart);
  } catch (error) {
    console.error("Помилка при обробці POST-запиту на /api/cart", error);
    res.status(500).json({ message: "Помилка при обробці запиту" });
  }
});

app.get("/api/cart", function (req, res) {
  res.send(200, cart);
});

app.delete("/api/cart", (req, res) => {
  cart = [];
  res.send(200, cart);
});

app.delete("/api/cart/:token", (req, res) => {
  const productToken = req.params.token;
  cart = cart.filter((product) => product.token !== productToken);
  res
    .status(200)
    .json({ message: `Продукт з ідентифікатором ${productToken} видалено.` });
});

app.listen(PORT);
