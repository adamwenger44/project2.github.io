var Food = require("../models/whats_cooking.js");
var Items = require("../models/item.js");

// var Item = require("../models/item.js");
// Create all our routes and set up logic within those routes where required.
// Create all our routes and set up logic within those routes where required.
module.exports = function(app) {

    app.get("/", function (req, res) {
        Food.findAll({}).then( function(results) {
            res.render("index", results);
        });
    });
    app.get("/#modal1", function (req, res) {
        Food.findAll({}).then( function(results) {
            res.render("index", results);
        });
    });

    app.get("/item", function (req, res) {
        Items.findAll({}).then( function(results) {
            res.json(results);
        });
    });

    // post burger to the webpage displaying the name, and seeing if devoured or not 
    app.post("/api/items", function (req, res) {
        Food.create([
            "items_name"
        ], [
            req.body.item_name
        ], function (result) {
        // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
    });

};