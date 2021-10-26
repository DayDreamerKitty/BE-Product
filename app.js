const express = require("express");
const { connect } = require("./apis/products/routes");
const productRoutes = require("./apis/products/routes");

const app = express();

app.use(express.json);
app.use("/api/products", productRoutes);

connectDB();
app.listen(8000, () => console.log("Hello"));
