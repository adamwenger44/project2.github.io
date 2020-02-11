// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelizeChange = require("../config/connection.js");

// Creates a "Chirp" model that matches up with DB
var Food = Sequelize.define("food", {
    food_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    },
    type_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
}, {timestamps: false});


// Syncs with DB
Food.sync({force: true});

module.exports = Food;

