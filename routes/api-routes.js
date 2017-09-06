const db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({
      include: [db.Inventor]
    }).then(function(dbBurgers) {
      // console.log("dbBurgers", dbBurgers);
      let hbarsObj = {
        burgers: dbBurgers
      }
      // console.log("hbarsObj", hbarsObj);
      res.render("index", hbarsObj);
    });
  });

  app.post("/", function(req, res) {
    console.log("req.body", req.body);
    db.Inventor.create(req.body).then((dbInventor) => {
      req.body.InventorId = dbInventor.dataValues.id;
      db.Burger.create(req.body).then( () => res.redirect('/'));
    });
  });

  app.put("/:id", function(req, res) {

  });
};