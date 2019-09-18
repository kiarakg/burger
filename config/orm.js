// Dependencies
var connection = require("./connection.js");

var orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    };

    insertOne: function(tableInput, columnName, burgerName) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, columnName, burgerName], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },

    updateOne: function(tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString [tableInput, updateColumnName, updateRowVal, searchColumnName, searchRowVal], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
};

// Export orm
module.exports = orm;