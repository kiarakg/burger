const connection = require("../config/connection.js");

// create a function that reads from the burgers table
// SELECT * FROM burgers
const findAll = () => {
  // create a new Promise
  return new Promise((resolve, reject) => {
    connection.query('SELECT * FROM burgers', function(err, dbBurgerData) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbBurgerData);
    });
  });
};

// CREATE/INSERT
// INSERT INTO burgers SET ? ({name: "burgerName"})
const create = burgerDataObj => {
  return new Promise((resolve, reject) => {
    connection.query('INSERT INTO burgers SET ?', [burgerDataObj], function(err, dbBurgerData) {
      if (err) {
        // this will throw to a .catch()
        return reject(err);
      }
      // this will throw to a .then()
      return resolve(dbBurgerData);
    });
  });
};

// UPDATE burgers
const update = (devoured, burgerId) => {
  return new Promise((resolve, reject) => {

    // set devoured to boolean true/false
    devoured = (devoured === "true") 
      ? true : false;

    connection.query("UPDATE burgers SET devoured = ? WHERE id = ?", [devoured, burgerId], function(err, dbBurgerData) {

      if (err) {
        return reject(err);
      }
      else if (dbBurgerData.changedRows === 0) {
        return reject({message: "You probably have the wrong ID"});
      }
      else {
        return resolve(dbBurgerData);
      };
    });
  });
};

module.exports = {
  findAll,
  create,
  update
};