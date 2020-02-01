var food = require("../models/whats_cooking.js");

var express = require("express");

var router = express.Router();
// Import the model (burger.js) to use its database functions.

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    console.log(food);
});



module.exports = router;