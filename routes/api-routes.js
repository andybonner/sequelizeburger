var db = require("../models");

module.exports = function(app) {
  app.get("/", function(req, res) {
    db.Burger.findAll({
      include: [db.Inventor]
    }).then(function(dbResponse) {
      console.log("dbResponse", dbResponse);
      var hbarsObj = {
        burgers: dbResponse
      }
      console.log("hbarsObj", hbarsObj);
      res.render("index", hbarsObj);
    });
  });

  app.post("/", function(req, res) {

  });

  app.put("/:id", function(req, res) {

  });
};