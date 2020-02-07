// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Items = sequelize.define("items", {
    items_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    },

}, {timestamps: false},
{freezeTableName: true}

);


// Syncs with DB

Items.sync({force: true});


module.exports = Items;

