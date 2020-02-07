// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("project_db", "root", "", {
    host: "localhost",
    dialect: "mysql",
    port: 3306,
   
});
sequelize.authenticate()
    .then(() => {
        console.log("connected to DB");
    });

// Exports the connection for other files to use
module.exports = sequelize;