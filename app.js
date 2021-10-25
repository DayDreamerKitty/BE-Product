const express = require("express");
const data = require("./data");

const app = express();

app.get("/api/products", (req, res) => {
  res.json(data);
});

app.post("/api/products", (req, res) => {
  res.json("response");
});

app.get("/api/products/:productId", (req, res) => {
  const products = data.find((product) => product.id === +req.params.productId);
  res.json(products);
});

app.delete("/api/products/:productId", (req, res) => {
  const products = data.find((product) => product.id === +productId);
  res.json(products);
});
app.listen(8000, () => console.log("Hello"));
