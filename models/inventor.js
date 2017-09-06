module.exports = function(sequelize, DataTypes) {
  var Inventor = sequelize.define("Inventor", {
    inventor_name: {
      type: DataTypes.STRING,
      // back-end validation:
      // Inventor_name cannot be blank...
      allowNull: false,
      // ...and cannot be ""
      validate: {
        len: [1]
      }
    }
  });

  Inventor.associate = function(models) {
    Inventor.hasMany(models.Burger);
  };
  return Inventor;
};

// is imported, as part of parent folder "models", by api-routes.js