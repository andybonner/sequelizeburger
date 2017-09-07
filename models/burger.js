module.exports = function(sequelize, DataTypes) {
  const Burger = sequelize.define("Burger", {
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
    burger_description: DataTypes.STRING,
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