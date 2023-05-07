const express = require("express");

const router = express.Router();

router.get("/add-product", (req, res, next) => {
  res.send(
    "<form action='/product' method='POST'><input type='text' name='product'/><button>send</button></form>"
  );
});
router.post("/product", (req, res, next) => {
  console.log(req.body.product);
  res.redirect("/");
});

module.exports = router;
