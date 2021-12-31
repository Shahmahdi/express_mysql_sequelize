'use strict';
const {
  Model
} = require('sequelize');
const Junction = require("./junction");

module.exports = (sequelize, DataTypes) => {
  class Device_category extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Device_category.init({
    primary: DataTypes.STRING,
    secondary: {
      type: DataTypes.STRING,
      allowNull: true
    },
    junctionId: {
      type: DataTypes.INTEGER,
      references: {
        // This is a reference to another model
        model: Junction,
        // This is the column name of the referenced model
        key: 'id',
      },
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Device_category',
  });
  return Device_category;
};
