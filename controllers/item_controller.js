var Food = require("../models/whats_cooking.js");


// Create all our routes and set up logic within those routes where required.
// Create all our routes and set up logic within those routes where required.
module.exports = function(app) {

    app.get("/", function (req, res) {
        Food.findAll({}).then( function(results) {
            res.json(results);
        });
    });

    // post burger to the webpage displaying the name, and seeing if devoured or not 
    app.post("/api/item", function (req, res) {
        Food.create([
            "item_name"
        ], [
            req.body.item_name
        ], function (result) {
        // Send back the ID of the new quote
            res.json({ id: result.insertId });
        });
    });

};