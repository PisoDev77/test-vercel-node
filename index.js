const express = require("express");
const app = express();
const product = require("./api/product");

app.use(express.json());
app.use("/api/product", product);

app.get("/", async (req, res) => {
  try {
    res.json({
      status: __dirname,
      message: "GET SUCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("SERVER ERROR");
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log("listenting");
});
