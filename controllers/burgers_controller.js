var express = require("express");
var router = express.Router();

// Import model
var burger = require("../models/burger");

// GET (all) burgers
router.get("/", function(req, res){
  burger.selectAll(function(dbResults){
    console.log(dbResults);
    var hbarsObj = {
      burgers: dbResults
    }
    // change the following to res.render and engage handlebars
    res.render("index", hbarsObj);
  });
});

// POST a new burger
router.post("/", function(req, res) {
  console.log("req.body.burger_name", req.body.burger_name)
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function() {
    res.redirect("/");
  })
});

// PUT to update a burger to eaten
router.put("/:id", function(req, res) {
  var condition = "id=" + req.params.id;
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function() {
    res.redirect("/");
  })
});


module.exports = router;
// is imported by server.js