const db = require("../models");

module.exports = function (app) {
  app.get("/", function (req, res) {
    db.Burger.findAll({
      include: [db.Inventor]
    }).then(function (dbBurgers) {
      let hbarsObj = {
        burgers: dbBurgers
      }
      res.render("index", hbarsObj);
    });
  });

  app.post("/", function (req, res) {
    db.Inventor.create(req.body).then((dbInventor) => {
      req.body.InventorId = dbInventor.dataValues.id;
      db.Burger.create(req.body).then(() => res.redirect('/'));
    });
  });

  app.put("/:id", function (req, res) {
    db.Burger.update(
      req.body,
      {
        where: {
          id: req.params.id
        }
      }).then(() => {
        res.redirect('/');
      });
  });
};