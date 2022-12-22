const express = require("express");
const app = express();
const product = require("./api/product");

app.use(express.json());
app.use(express.static("public"));
app.use("/api/product", product);

const PORT = 3000;
app.listen(PORT, () => {
  console.log("listenting");
});
