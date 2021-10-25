const express = require("express");
let products = require("./data");
const data = require("./data");
const app = express();

app.use(express.json);

app.get("/api/products", (req, res) => {
  res.json(data);
});

app.post("/api/products", (req, res) => {
  products.push(req.body);
  res.json(req.body);
});

app.delete("/api/products/:productId", (req, res) => {
  const productId = req.params.productId;
  const product = data.find((product) => product.id === +productId);
  res.json(products);
  if (product) {
    products = products.filter((product) => product.id !== +productId);
    res.status(204);
    return res.end();
  } else {
    return res.status(404).json({ message: "Error" });
  }
});

app.listen(8000, () => console.log("Hello"));
