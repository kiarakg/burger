// Dependencies
var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    };

    insertOne: function(tableInput, columnName, burgerName, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, columnName, burgerName], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },

    updateOne: function(tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal, cb) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString [tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// Export orm
module.exports = orm;