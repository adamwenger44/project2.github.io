// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var food = sequelize.define("food", {}, {
    food_name: Sequelize.STRING,
    // createdAt: Sequelize.DATE,
    // updatedAt: Sequelize.DATE

},
{
    timestamps: false
});

// Syncs with DB
food.sync();
console.log(food);
// Makes the Chirp Model available for other files (will also create a table)
module.exports = food;
