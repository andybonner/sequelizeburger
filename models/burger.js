module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      // back-end validation:
      // burger_name cannot be blank...
      allowNull: false,
      // ...and cannot be ""
      validate: {
        len: [1]
      }
    },
    devoured_by: {
      type: DataTypes.STRING,
      defaultValue: null
    }
  });

  Burger.associate = function(models) {
    Burger.belongsTo(models.Inventor, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Burger;
};

// is imported, as part of parent folder "models", by api-routes.js



// var ORM = require("../config/orm");

// var burger = {
//   selectAll: function(callback) {
//     ORM.selectAll("burgers", function(res){
//       callback(res);
//     });
//   },
//   insertOne: function(cols, vals, callback){
//     ORM.insertOne("burgers", cols, vals, function(res){
//       callback(res);
//     })
//   },
//   updateOne: function(objColVals, condition, callback){
//     ORM.updateOne("burgers", objColVals, condition, function(res){
//       callback(res);
//     })
//   }
// }

// module.exports = burger;
// // is imported by burgers_controller.js