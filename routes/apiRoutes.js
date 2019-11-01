const burgers = require("../models/burger.js");

module.exports = app => {

  // GET all burgers
  app.get("/api/burgers", function (req, res) {
    burgers.findAll()
      .then(dbBurgerData => res.json(dbBurgerData))
      .catch(err => {
        console.log(err);
        res.json(err);
      });
  });

  // CREATE/POST a new burger
  app.post("/api/burgers", function (req, res) {
    burgers.create(req.body)
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

  // UPDATE burger
  app.put("/api/burgers/:id", function (req, res) {
    burgers.update(req.body.devoured, req.params.id)
    .then(dbBurgerData => res.json(dbBurgerData))
    .catch(err => {
      console.log(err);
      res.json(err);
    });
  });

};