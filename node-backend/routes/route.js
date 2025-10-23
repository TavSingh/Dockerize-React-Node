const express = require("express");
const router = express.Router();

router.get("/number", (req, res) => {
   const randomNumber = Math.floor(Math.random() * 100) + 1;
   res.json({ number: randomNumber });
});

module.exports = router;