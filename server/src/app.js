const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const categories = require("./data/categories.json");
const products = require("./data/products.json");
const { PORT } = require("dotenv").config().parsed;

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/api/categories", function (request, response) {
  response.send(200, categories);
});

app.get("/api/products/:category", function (request, response) {
  const category = request.params.category;
  const productsByCategory = products[category] || [];
  response.send(200, productsByCategory);
});

app.listen(PORT);
