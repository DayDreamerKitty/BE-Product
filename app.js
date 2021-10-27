const express = require("express");
const productRoutes = require("./apis/products/routes");
const connectDB = require("./db/database");

const app = express();

app.use(express.json());
app.use((req, res, next) => {
  const fullUrl = req.protocol + "://" + req.get("host") + req.path;
  console.log(`${req.method} ${fullUrl}`);

  next();
});
app.use("/api/products", productRoutes);

connectDB();
app.use((req, res) => {
  res.status(404).json({ message: "PATH NOT FOUND" });
});
app.listen(8000, () => console.log("Hello"));
