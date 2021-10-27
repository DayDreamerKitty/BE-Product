const Product = require("../../db/models/Product");

const productListFetch = async (req, res, next) => {
  // return res.json(products);
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    next(error);
    // return res.status(500).json({ message: error.message });
    // console.log("error", error);
  }
};

const productCreate = async (req, res, next) => {
  // products.push(req.body);
  // res.json(req.body);
  try {
    const newProduct = await Product.create(req.body);
    res.status(201).json(newProduct);
  } catch (error) {
    next(error);
    // return res.status(500).json({ message: error.message });
  }
};

const productDelete = async (req, res, next) => {
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
    if (foundProduct) {
      await foundProduct.remove();
      return res.status(204).end();
    } else {
      const ErrorMsg = {
        status: 404,
        message: "Product not found!",
      };
      next(ErrorMsg);
      // return res.status(404).json({ message: "this product doesn't exist " });
    }
  } catch (error) {
    next(error);
    // return res.status(500).json({ message: error.message });
  }
};
const productUpdate = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const product = await Product.findByIdAndUpdate(
      { _id: productId },
      req.body,
      { new: true, runValidators: true }
    );
    if (product) {
      return res.json(product);
      // res.status(204).end();
    } else {
      const ErrorMsg = {
        status: 404,
        message: "Product not found!",
      };
      next(ErrorMsg);
      // return res.status(404).json({ message: "this product doesn't exist " });
    }
  } catch (error) {
    next(error);
    // return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  productListFetch,
  productCreate,
  productDelete,
  productUpdate,
};
