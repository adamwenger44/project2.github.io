var Food = require("../models/whats_cooking.js");
var Items = require("../models/item.js");
var axios = require("axios");

// var Item = require("../models/item.js");
// Create all our routes and set up logic within those routes where required.
// Create all our routes and set up logic within those routes where required.
module.exports = function(app) {

    app.get("/", function (req, res) {
        Food.findAll({}).then( function(results) {
            res.render("index", results);
        });
    });
    app.get("/shoppingList", function (req, res) {
        Items.findAll({}).then( function(results) {
            res.json(results);
        });
    });
    app.get("/fridge", function (req, res) {
        Fridge.findAll({}).then( function(results) {
            res.json(results);
        });
    });
    app.get("/food", function (req, res) {
        Food.findAll({}).then( function(results) {
            res.json(results);
        });
    });
    app.post("/api/new", function(req, res) {

        console.log("Chirp Data:");
        console.log(req.body);
    
        Items.create({
            items_name: req.body.items_name,
        });
        res.status(204).end();
    
    });
    app.post("/fridge/new", function(req, res) {

        
        console.log(req.body);
    
        Fridge.create({
            fridge_name: req.body.fridge_name,
        });
        res.status(204).end();
    
    });

    // app.get("/item", function (req, res) {
    //     Items.findAll({}).then( function(results) {
    //         res.json(results);
    //         var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=cheese,+bacon,+pepperoni&apiKey=9d10a5f4a8ec46b19a1194adcdda58b1&number=2";
    //         $.ajax({
    //             url: queryURL,
    //             method: "GET"
    //         }).then(function(response) {
    //             for(var i = 0; i < response.length; i++){
    //                 var allResponses = response[i];
    //                 for (var z = 0; z < response[i].missedIngredients.length; z++) {
    //                     var itemNeed = response[i].missedIngredients[z].name;
    //                     // var amount = response[i].missedIngredients[z].amount;
    //                 // console.log(missed);
    //                 }
    //                 for(z = 0; z < response[i].usedIngredients.length; z++){
    //                     var itemUsed = response[i].usedIngredients[z].name;
    //                 // console.log(used)
    //                 }
    //             }
        
    //             if(res.fridge.food.indexOf(itemNeed) > -1) {
    //                 console.log("Item in fridge");
    //             }else {app.post("/api/item", function (req, res) {
    //                 Food.create([
    //                     "item_name"
    //                 ], [
    //                     req.body.item_name
    //                 ], function (result) {
    //                 // Send back the ID of the new quote
    //                     res.json({ id: result.insertId });
    //                 });
    //             });
        
    //             }
                
              
              
    //         });

    //     });
    // });
    
    // var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=cheese,+bacon,+pepperoni&apiKey=9d10a5f4a8ec46b19a1194adcdda58b1&number=2"
    // $.ajax({
    //     url: queryURL,
    //     method: "GET"
    // }).then(function(response) {
    //     for(i = 0; i < response.length; i++){
    //         var allResponses = response[i];
    //         for (z = 0; z < response[i].missedIngredients.length; z++) {
    //             var itemNeed = response[i].missedIngredients[z].name;
    //             // var amount = response[i].missedIngredients[z].amount;
    //         // console.log(missed);
    //         }
    //         for(z = 0; z < response[i].usedIngredients.length; z++){
    //             var itemUsed = response[i].usedIngredients[z].name;
    //         // console.log(used)
    //         }
    //     }

    //     if(res.fridge.food.indexOf(itemNeed) > -1) {
    //         console.log("Item in fridge");
    //     }else {app.post("/api/item", function (req, res) {
    //         Food.create([
    //             "item_name"
    //         ], [
    //             req.body.item_name
    //         ], function (result) {
    //         // Send back the ID of the new quote
    //             res.json({ id: result.insertId });
    //         });
    //     });

    //     }
        
      
      
    // });


    // post burger to the webpage displaying the name, and seeing if devoured or not 

    // app.post("/api/item", function (req, res) {
    //     Food.create([
    //         "item_name"
    //     ], [
    //         req.body.item_name
    //     ], function (result) {
    //     // Send back the ID of the new quote
    //         res.json({ id: result.insertId });
    //     });
    // });

    // app.post("/api/items", function (req, res) {
    //     Food.create([
    //         "items_name"
    //     ], [
    //         req.body.item_name
    //     ], function (result) {
    //     // Send back the ID of the new quote
    //         res.json({ id: result.insertId });
    //     });
    // });


};