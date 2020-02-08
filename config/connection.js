/* eslint-disable no-undef */
// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var mysql = require("mysql");
var Sequelize = require("sequelize");
var connection; 

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = new Sequelize("whats_cooking_db", "root", "", {
        host: "localhost",
        dialect: "mysql",
        port: 3306,
    });
    connection.authenticate()
        .then(() => {
            console.log("connected to DB");
        });
}

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.


// Exports the connection for other files to use
module.exports = connection;