let products = require("../../data");

const productListFetch = (req, res) => {
  return res.json(products);
};

const productCreate = (req, res) => {
  products.push(req.body);
  res.json(req.body);
};

const productDelete = (req, res) => {
  const productId = req.params.productId;
  const product = products.find((product) => product.id === +productId);
  res.json(products);
  if (product) {
    products = products.filter((product) => product.id !== +productId);
    res.status(204);
    return res.end();
  } else {
    return res.status(404).json({ message: "Error" });
  }
};

module.exports = { productListFetch, productCreate, productDelete };
