const Product = require("../../db/models/Product");

const productListFetch = async (req, res) => {
  // return res.json(products);

  try {
    const products = await Product.find();

    return res.json(products);
  } catch (error) {
    console.log("error", error);
  }
};

const productCreate = async (req, res) => {
  // products.push(req.body);
  // res.json(req.body);
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    console.log("error", error);
  }
};

const productDelete = async (req, res) => {
  // const productId = req.params.productId;
  // const product = products.find((product) => product.id === +productId);
  // res.json(products);
  // if (product) {
  //   products = products.filter((product) => product.id !== +productId);
  //   res.status(204);
  //   return res.end();
  // } else {
  //   return res.status(404).json({ message: "Error" });
  // }
  try {
    const foundProduct = await Product.findById(req.params.productId);
    if (Product) {
      foundProduct.remove();
      return res.status(204).end();
    } else {
      return res.status(404).json({ message: "this product doesn't exist " });
    }
  } catch (error) {
    console.log("error", error);
  }
};
// const productUpdate = async (req, res) => {
//   try {
//     const foundProduct = await Product.findById(req.params.productId);
//     if (Product) {
//       foundProduct.findOneAndUpdate();
//       return res.status(204).end();
//     } else {
//       return res.status(404).json({ message: "this product doesn't exist " });
//     }
//   } catch (error) {
//     console.log("error", error);
//   }
// };

module.exports = { productListFetch, productCreate, productDelete };
