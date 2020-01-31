var orm = require("../config/orm.js");
var item = {

    // selecting all items
    all: function(cb) {
        orm.all("item", function(res) {
            cb(res);
        });
    },
    
    // creating new burger
    create: function(cols, vals, cb) {
        orm.create("item", cols, vals, function(res) {
            cb(res);
        });
    },

    // updating burger
    update: function(objColVals, condition, cb) {
        orm.update("item", objColVals, condition, function(res) {
            cb(res);
        });
    },

    // deleting burger
    delete: function(condition, cb) {
        orm.delete("item", condition, function(res) {
            cb(res);
        });
    }
};
  
    // Export the database functions for the controller (catsController.js).
module.exports = item;