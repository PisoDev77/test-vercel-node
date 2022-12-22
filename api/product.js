const express = require("express");
const router = express.Router();
const path = require("path");

router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "GET SUCESS",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("SERVER ERROR");
  }
});

router.get("/test1", async (req, res) => {
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

router.get("/test2", async (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "/public/index.html"));
  } catch (err) {
    console.log(err);
    return res.status(500).send("SERVER ERROR");
  }
});

module.exports = router;
