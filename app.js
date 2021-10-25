const express = require("express");
const productRoutes = require("./apis/products/routes");

const app = express();

app.use(express.json);
app.use("/api/products", productRoutes);

app.listen(8000, () => console.log("Hello"));
