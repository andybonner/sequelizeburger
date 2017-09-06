var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({
      include: [db.Inventor]
    }).then(function(dbResponse) {
      // console.log("dbResponse", dbResponse);
      var hbarsObj = {
        burgers: dbResponse
      }
      // console.log("hbarsObj", hbarsObj);
      res.render("index", hbarsObj);
    });
  });

  app.post("/", function(req, res) {
    db.Burger.create(req.body).then(function(dbResponse) {
      var hbarsObj = {
        burgers: dbResponse
      }
      res.render("index", hbarsObj);
    })
  });

  app.put("/:id", function(req, res) {

  });
};