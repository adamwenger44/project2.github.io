var item = require("../models/whats_cooking.js");

var express = require("express");

var router = express.Router();
// Import the model (burger.js) to use its database functions.

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    item.all(function (data) {
        var hbsObject = {
            item: data
        };
        res.render("index", hbsObject);
    });
});

// post burger to the webpage displaying the name, and seeing if devoured or not 
router.post("/api/item", function (req, res) {
    item.create([
        "item_name"
    ], [
        req.body.item_name
    ], function (result) {
    // Send back the ID of the new quote
        res.json({ id: result.insertId });
    });
});

// //update burgers devoured state 
// router.put("/api/item/:id", function (req, res) {
//     var condition = "id = " + req.params.id;
//     console.log("condition", condition);
//     item.update({
//         devour: req.body.devour
//   }, condition, function (result) {
//     if (result.changedRows == 0) {
//       // If no rows were changed, then the ID must not exist, so 404
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });


module.exports = router;