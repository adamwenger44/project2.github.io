// Dependencies
// =============================================================

// This may be confusing but here Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

var Fridge = sequelize.define("fridge", {
    fridge_name: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 140]
        }
    },

}, {timestamps: false, freezeTableName: true}

);



// Syncs with DB

Fridge.sync({force: true});


module.exports = Fridge;

