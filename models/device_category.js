'use strict';
const {
  Model
} = require('sequelize');
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
    secondary: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Device_category',
  });
  return Device_category;
};