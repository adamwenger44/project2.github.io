var Food = require("../models/whats_cooking.js");


// Create all our routes and set up logic within those routes where required.
// Create all our routes and set up logic within those routes where required.
module.exports = function(app) {

    app.get("/", function (req, res) {
        Food.findAll({}).then( function(results) {
            res.json(results);
            var queryURL = "https://api.spoonacular.com/recipes/findByIngredients?ingredients=cheese,+bacon,+pepperoni&apiKey=9d10a5f4a8ec46b19a1194adcdda58b1&number=2"
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function(response) {
                for(i = 0; i < response.length; i++){
                    var allResponses = response[i];
                    for (z = 0; z < response[i].missedIngredients.length; z++) {
                        var itemNeed = response[i].missedIngredients[z].name;
                        // var amount = response[i].missedIngredients[z].amount;
                    // console.log(missed);
                    }
                    for(z = 0; z < response[i].usedIngredients.length; z++){
                        var itemUsed = response[i].usedIngredients[z].name;
                    // console.log(used)
                    }
                }
        
                if(res.fridge.food.indexOf(itemNeed) > -1) {
                    console.log("Item in fridge");
                }else {app.post("/api/item", function (req, res) {
                    Food.create([
                        "item_name"
                    ], [
                        req.body.item_name
                    ], function (result) {
                    // Send back the ID of the new quote
                        res.json({ id: result.insertId });
                    });
                });
        
                }
                
              
              
            });

        });
    });
    
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

};