const express = require("express");

const productRoutes = require("./apis/products/routes");
const connectDB = require("./db/database");

const app = express();

app.use(express.json());

app.use("/api/products", productRoutes);

connectDB();

app.listen(8000, () => console.log("Hello"));
