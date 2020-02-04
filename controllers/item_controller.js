var food = require("../models/whats_cooking");

var express = require("express");

var router = express.Router();

// Create all our routes and set up logic within those routes where required.
// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    food.findAll(function (data) {
        var hbsObject = {
            item: data
        };
        res.render("index", hbsObject);
    });
});

// post burger to the webpage displaying the name, and seeing if devoured or not 
router.post("/api/item", function (req, res) {
    food.create([
        "item_name"
    ], [
        req.body.item_name
    ], function (result) {
    // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});


module.exports = router;